/* eslint-disable no-console */
import {
  INFO, PONG, SUBSCRIBED, UNSUBSCRIBED,
} from '../constants/wsMessageEventTypes'
import handleWsChanneUpdate from './handleWsChanneUpdate'
import { updateChannelSubscription } from '../saga'

export default function handleWsMessage(emitter, clearWsTimeout) {
  return (payload) => {
    let msg = null

    try {
      msg = JSON.parse(payload.data)
    } catch (e) {
      console.warn(`Error parsing : ${payload}`)
    }

    if (msg) {
      switch (msg.event) {
        case INFO:
          return console.log('connected to WS server version: ', msg.version)
        case PONG:
          return clearWsTimeout()
        case SUBSCRIBED:
          return updateChannelSubscription(msg)
        case UNSUBSCRIBED:
          return
        case undefined:
          return handleWsChanneUpdate(msg, emitter)
        default:
      }
    }
  }
}
