import { TRADES_UPDATE, TRADES_UPDATE_ALL } from './actions'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRADES_UPDATE_ALL:
      return [
        ...action.payload,
      ]
    case TRADES_UPDATE:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}
