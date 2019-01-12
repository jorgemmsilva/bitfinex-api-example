import _orderBy from 'lodash/orderBy'
import { TRADES_UPDATE, TRADES_UPDATE_ALL } from './actions'

const MAX_TRADES_LENGTH = 25

const initialState = []

const updateTrades = state => (
  _orderBy(state, ['timestamp'], ['desc']).slice(0, MAX_TRADES_LENGTH)
)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRADES_UPDATE_ALL:
      return updateTrades(action.payload)
    case TRADES_UPDATE:
      return updateTrades([action.payload, ...state])
    default:
      return state
  }
}
