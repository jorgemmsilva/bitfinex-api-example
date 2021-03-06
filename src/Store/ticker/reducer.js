import {
  TICKET_UPDATE,
} from './actions'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TICKET_UPDATE:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
