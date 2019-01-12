import { createSelector } from 'reselect'
import _max from 'lodash/max'
import _maxBy from 'lodash/maxBy'

export const getOrderBook = state => state.orderBook

export const getOrderBookMaxTotal = createSelector(
  [getOrderBook],
  ({ buy, sell }) => {
    const buyMax = _maxBy(buy, 'total') || 0
    const sellMax = _maxBy(sell, 'total') || 0
    return _max([buyMax.total, sellMax.total])
  },
)
