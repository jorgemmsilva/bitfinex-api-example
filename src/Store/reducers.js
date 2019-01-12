import { combineReducers } from 'redux'
import webSocket from './websocket/reducer'
import pairs from './pairs/reducer'

export default combineReducers({
  webSocket,
  pairs,
})
