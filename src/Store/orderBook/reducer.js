import {
  ORDER_BOOK_UPDATE,
} from './actions'

const initialState = {

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_BOOK_UPDATE:
      return {
        ...state,
      }
    default:
      return state
  }
}
