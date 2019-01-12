import { connect } from 'react-redux'
import {
  getOrderBookMaxBuyTotal, getOrderBookMaxSellTotal, getOrderBookSellOrders, getOrderBookBuyOrders,
} from '../../Store/orderBook/selectors'
import OrderBook from './OrderBook'

export const mapState = state => ({
  buyOrders: getOrderBookBuyOrders(state),
  sellOrders: getOrderBookSellOrders(state),
  maxSellTotal: getOrderBookMaxSellTotal(state),
  maxBuyTotal: getOrderBookMaxBuyTotal(state),
})

export default connect(mapState)(OrderBook)
