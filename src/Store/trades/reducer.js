import {
  TRADES_UPDATE,
} from './actions'

const initialState = {

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TRADES_UPDATE:
      return {
        ...state,
      }
    default:
      return state
  }
}
