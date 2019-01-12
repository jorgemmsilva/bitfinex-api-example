import { createSelector } from 'reselect'
import _last from 'lodash/last'

export const getOrderBook = state => state.orderBook
export const getOrderBookBuy = state => state.orderBook.buy
export const getOrderBookSell = state => state.orderBook.sell


const calculateOrdersWithTotals = (orders) => {
  let cumulativeTotal = 0
  return orders.map((order) => {
    cumulativeTotal += Math.abs(order.amount) * order.count
    return {
      ...order,
      total: cumulativeTotal,
    }
  })
}

export const getOrderBookBuyOrders = createSelector(
  [getOrderBookBuy],
  calculateOrdersWithTotals,
)

export const getOrderBookSellOrders = createSelector(
  [getOrderBookSell],
  calculateOrdersWithTotals,
)

export const getOrderBookMaxBuyTotal = createSelector(
  [getOrderBookBuyOrders],
  orders => (orders && orders.length ? _last(orders).total : 0),
)

export const getOrderBookMaxSellTotal = createSelector(
  [getOrderBookSellOrders],
  orders => (orders && orders.length ? _last(orders).total : 0),
)
