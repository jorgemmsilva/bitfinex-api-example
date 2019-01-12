import { combineReducers } from 'redux'
import webSocket from './websocket/reducer'
import pairs from './pairs/reducer'
import ticker from './ticker/reducer'
import trades from './trades/reducer'
import orderBook from './orderBook/reducer'

export default combineReducers({
  webSocket,
  pairs,
  ticker,
  trades,
  orderBook,
})
