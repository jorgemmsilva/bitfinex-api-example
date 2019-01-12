import isArray from 'lodash/isArray'
import { getChannelTypeById } from '../saga'
import { ORDER_BOOK, TICKER, TRADES } from '../constants/wsChannelTypes'
import { tickerUpdate } from '../../ticker/actions'
import { orderBookUpdate, orderBookUpdateAllRows } from '../../orderBook/actions'
import { tradesUpdate } from '../../trades/actions'


function handleOrderBookUpdate(data, emitter) {
  if (isArray(data[0])) {
    const orderBook = []
    data[0].forEach((order) => {
      const [price, count, amount] = order
      orderBook.push({ price, count, amount })
    })
    return emitter(orderBookUpdateAllRows(orderBook))
  }
  const [price, count, amount] = data
  return emitter(orderBookUpdate({ price, count, amount }))
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

function handleTradesUpdate(data, emitter) {
  return null
  const [
    seq,
    id,
    timestamp,
    price,
    amount,
  ] = data
  return emitter(tradesUpdate({
    seq,
    id,
    timestamp,
    price,
    amount,
  }))
}

export default function handleWsChanneUpdate(msg, emitter) {
  const [chanId, ...data] = msg

  if (data[0] === 'hb') { return } // TODO handle channel haeartbeat

  const channelType = getChannelTypeById(chanId)
  switch (channelType) {
    case ORDER_BOOK:
      return handleOrderBookUpdate(data, emitter)
    case TICKER:
      return handleTickerUpdate(data, emitter)
    case TRADES:
      return handleTradesUpdate(data, emitter)
    default:
  }
}
