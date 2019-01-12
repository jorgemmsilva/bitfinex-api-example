import { TRADES_UPDATE, TRADES_UPDATE_ALL } from './actions'

const MAX_TRADES_LENGTH = 25

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRADES_UPDATE_ALL:
      return [
        ...action.payload,
      ]
    case TRADES_UPDATE:
      return [
        action.payload,
        ...state,
      ].slice(0, MAX_TRADES_LENGTH)
    default:
      return state
  }
}
