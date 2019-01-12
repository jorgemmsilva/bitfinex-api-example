import { all } from 'redux-saga/effects'
import websocket from './websocket/saga'
import ticker from './ticker/saga'
import trades from './trades/saga'
import orderBook from './orderBook/saga'

export default function* rootSaga() {
  yield all([
    websocket(),
    ticker(),
    trades(),
    orderBook(),
  ])
}
