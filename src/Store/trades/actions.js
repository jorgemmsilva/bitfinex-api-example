export const TRADES_UPDATE_ALL = 'TRADES_UPDATE_ALL'
export const TRADES_UPDATE = 'TRADES_UPDATE'

export const tradesUpdate = payload => ({
  type: TRADES_UPDATE,
  payload,
})

export const tradesUpdateAll = payload => ({
  type: TRADES_UPDATE_ALL,
  payload,
})
