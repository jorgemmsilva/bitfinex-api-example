import _isArray from 'lodash/isArray'
import uuid from 'uuid/v4'
import { getChannelTypeById } from '../saga'
import { ORDER_BOOK, TICKER, TRADES } from '../constants/wsChannelTypes'
import { tickerUpdate } from '../../ticker/actions'
import { orderBookUpdate, orderBookUpdateAllRows } from '../../orderBook/actions'
import { tradesUpdate, tradesUpdateAll } from '../../trades/actions'


function handleOrderBookUpdate(data, emitter) {
  if (_isArray(data[0])) {
    const orderBook = []
    data[0].forEach((order) => {
      const [price, count, amount] = order
      orderBook.push({
        price, count, amount, total: Math.abs(amount * count),
      })
    })
    return emitter(orderBookUpdateAllRows(orderBook))
  }
  const [price, count, amount] = data
  return emitter(orderBookUpdate({
    price, count, amount, total: Math.abs(amount * count),
  }))
}


function handleTradesUpdate(data, emitter) {
  if (_isArray(data[0])) {
    const trades = []
    data[0].forEach((trade) => {
      const [, timestamp, price, amount] = trade
      trades.push({
        timestamp, price, amount, key: uuid(),
      })
    })
    return emitter(tradesUpdateAll(trades))
  }
  const [seq, id, timestamp, price, amount] = data
  return emitter(tradesUpdate({
    seq, id, timestamp, price, amount, key: uuid(),
  }))
}

function handleTickerUpdate(data, emitter) {
  const [
    bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangePerc,
    lastPrice,
    volume,
    high,
    low,
  ] = data
  return emitter(tickerUpdate({
    bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangePerc,
    lastPrice,
    volume,
    high,
    low,
  }))
}

export default function handleWsChanneUpdate(msg, emitter) {
  const [chanId, ...data] = msg

  if (data[0] === 'hb') { return } // TODO handle channel haeartbeat

  const channelType = getChannelTypeById(chanId)
  switch (channelType) {
    case ORDER_BOOK:
      return handleOrderBookUpdate(data, emitter)
    case TRADES:
      return handleTradesUpdate(data, emitter)
    case TICKER:
      return handleTickerUpdate(data, emitter)
    default:
  }
}
