export const ORDER_BOOK_UPDATE_ALL_ROWS = 'ORDER_BOOK_UPDATE_ALL_ROWS'
export const ORDER_BOOK_UPDATE = 'ORDER_BOOK_UPDATE'

export const orderBookUpdate = payload => ({
  type: ORDER_BOOK_UPDATE,
  payload,
})

export const orderBookUpdateAllRows = payload => ({
  type: ORDER_BOOK_UPDATE,
  payload,
})
