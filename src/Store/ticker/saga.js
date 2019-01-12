/* eslint-disable no-console */
import { takeLatest, call } from 'redux-saga/effects'
import { PAIRS_CHANGE_SELECTED } from '../pairs/actions'
import { changeChannelSubscription } from '../websocket/saga'
import { TICKER } from '../websocket/constants/wsChannelTypes'


function* handlePairChange(action) {
  yield call(changeChannelSubscription, TICKER, action.payload.value)
}

export function* watchPairChange() {
  yield takeLatest(PAIRS_CHANGE_SELECTED, handlePairChange)
}

export default function* iniTickerSaga() {
  yield watchPairChange()
}
