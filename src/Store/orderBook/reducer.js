import _sortBy from 'lodash/sortBy'
import _orderBy from 'lodash/orderBy'
import _groupBy from 'lodash/groupBy'
import _filter from 'lodash/filter'
import { ORDER_BOOK_UPDATE, ORDER_BOOK_UPDATE_ALL_ROWS } from './actions'

const BUY = 'buy'
const SELL = 'sell'

const initialState = {
  [BUY]: [],
  [SELL]: [],
}

const updateAllRows = (orders) => {
  const newState = (
    _groupBy(
      _sortBy(orders, ['price']),
      ({ amount }) => (amount > 0 ? BUY : SELL),
    )
  )
  newState[BUY].reverse()
  return newState
}

const updateRow = (state, order) => {
  const key = order.amount > 0 ? BUY : SELL

  const newStateSide = _filter(state[key], ({ price }) => price !== order.price)
  if (order.count !== 0) {
    newStateSide.push(order)
    return {
      ...state,
      [key]: _orderBy(newStateSide, ['price'], [key === BUY ? 'desc' : 'asc']),
      maxPrice: state.maxPrice > order.price ? state.maxPrice : order.price,
    }
  }

  return {
    ...state,
    [key]: newStateSide,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_BOOK_UPDATE_ALL_ROWS:
      return updateAllRows(action.payload)
    case ORDER_BOOK_UPDATE:
      return updateRow(state, action.payload)
    default:
      return state
  }
}
