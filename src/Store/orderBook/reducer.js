
import {
  ORDER_BOOK_UPDATE,
  ORDER_BOOK_UPDATE_ALL_ROWS,
} from './actions'

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_BOOK_UPDATE_ALL_ROWS:
      return [
        ...action.payload,
      ]
    case ORDER_BOOK_UPDATE:
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}
