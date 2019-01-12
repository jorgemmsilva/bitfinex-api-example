import {
  PAIRS_LOAD_PENDING,
  PAIRS_LOAD_SUCCESS,
  PAIRS_LOAD_FAILURE,
  PAIRS_CHANGE_SELECTED,
} from './actions'

const initialState = {
  loading: false,
  pairs: [],
  selected: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PAIRS_LOAD_PENDING:
      return {
        ...state,
        loading: true,
      }
    case PAIRS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        pairs: action.payload,
      }
    case PAIRS_CHANGE_SELECTED:
      return {
        ...state,
        selected: action.payload,
      }
    default:
      return state
  }
}
