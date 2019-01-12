export const PAIRS_LOAD_PENDING = 'PAIRS_LOAD_PENDING'
export const PAIRS_LOAD_SUCCESS = 'PAIRS_LOAD_SUCCESS'
export const PAIRS_LOAD_FAILURE = 'PAIRS_LOAD_FAILURE'
export const PAIRS_CHANGE_SELECTED = 'PAIRS_CHANGE_SELECTED'


export const changeSelectedPair = pair => ({
  type: PAIRS_CHANGE_SELECTED,
  payload: pair,
})
