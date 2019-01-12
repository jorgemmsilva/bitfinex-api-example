import { connect } from 'react-redux'
import { getOrderBook, getOrderBookMaxTotal } from '../../Store/orderBook/selectors'
import OrderBook from './OrderBook'

export const mapState = state => ({
  orders: getOrderBook(state),
  maxTotal: getOrderBookMaxTotal(state),
})

export default connect(mapState)(OrderBook)
