import {
  WS_CONNECT_PENDING,
  WS_CONNECT_SUCCESS,
  WS_CONNECT_FAILURE,
} from './actions'

const initialState = {
  connecting: false,
  connected: false,
  send: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case WS_CONNECT_PENDING:
      return {
        ...state,
        connecting: true,
        connected: false,
      }
    case WS_CONNECT_SUCCESS:
      return {
        ...state,
        connecting: false,
        connected: true,
      }
    case WS_CONNECT_FAILURE:
      return {
        ...state,
        connecting: false,
        connected: false,
      }
    default:
      return state
  }
}
