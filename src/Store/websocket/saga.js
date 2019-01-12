/* eslint-disable no-console */
import { eventChannel, delay } from 'redux-saga'
import { put, call, take } from 'redux-saga/effects'
import {keys} from 'lodash-es'
import { WS_CONNECT_SUCCESS, WS_CONNECT_PENDING, WS_CONNECT_FAILURE } from './actions'
import { PING, SUBSCRIBE, UNSUBSCRIBE } from './constants/wsMessageEventTypes'
import handleWsMessage from './helpers/handleWsMessage'
import { TICKER, TRADES, ORDER_BOOK } from './constants/wsChannelTypes'

const WS_PING_FREQ_MS = 5000
const WS_TIMEOUT_MS = 4000
const WS_RECONNECT_DELAY_MS = 2000
let wsTimeout
let heartBeatInterval

const {
  REACT_APP_SOCKET_PROTOCOL,
  REACT_APP_SOCKET_HOST,
  REACT_APP_SOCKET_PORT,
} = process.env

const wsConnectionString = (
  `${REACT_APP_SOCKET_PROTOCOL}://${REACT_APP_SOCKET_HOST}${
    REACT_APP_SOCKET_PORT && `:${REACT_APP_SOCKET_PORT}`
  }`
)

let ws

const subscribedChannels = {
  [ORDER_BOOK]: [],
  [TICKER]: [],
  [TRADES]: [],
}

export function getChannelTypeById(chanId){
  const channelTypes = keys(subscribedChannels)
  for (let i = 0; i < channelTypes.length; i++) {
    const channelType = channelTypes[i]
    if(subscribedChannels[channelType].includes(chanId)){
      return channelType
    }
  }
}

export function updateChannelSubscription({ channel, chanId }) {
  subscribedChannels[channel].push(chanId)
}

export function sendWsMessage(event, payload) {
  ws && ws.send(JSON.stringify({ event, ...payload }))
}

export function changeChannelSubscription(channel, pair) {
  subscribedChannels[channel].forEach((chanId) => {
    sendWsMessage(UNSUBSCRIBE, { chanId })
  })
  subscribedChannels[channel] = []
  sendWsMessage(SUBSCRIBE, { channel, symbol: pair })
}

function connectionTimeout() {
  console.warn(`Connection to Websocket timed out - atempting to reconnect in ${WS_RECONNECT_DELAY_MS / 1000}s`)
  ws.close()
  clearInterval(heartBeatInterval)
}

function clearWsTimeout() {
  clearTimeout(wsTimeout)
}

function startHeartBeat() {
  heartBeatInterval = setInterval(() => {
    sendWsMessage(PING)
    wsTimeout = setTimeout(() => connectionTimeout(), WS_TIMEOUT_MS)
  }, WS_PING_FREQ_MS)
}

function initWsChannel() {
  return eventChannel((emitter) => {
    ws = new WebSocket(wsConnectionString)

    ws.onopen = () => {
      startHeartBeat()
      emitter({ type: WS_CONNECT_SUCCESS })
    }

    ws.onclose = () => (
      emitter({ type: WS_CONNECT_FAILURE })
    )

    ws.onmessage = handleWsMessage(emitter, clearWsTimeout)

    ws.onerror = (error) => {
      console.warn('WebSocket error')
      console.dir(error)
    }

    return () => {
      ws.close()
      ws = null
    }
  })
}


export default function* initWebSocketSaga() {
  while (true) {
    yield put({ type: WS_CONNECT_PENDING })
    const wsChannel = yield call(initWsChannel)

    while (true) {
      const action = yield take(wsChannel)
      yield put(action)
      if (action.type === WS_CONNECT_FAILURE) {
        wsChannel.close()
        break
      }
    }
    yield delay(WS_RECONNECT_DELAY_MS)
  }
}
