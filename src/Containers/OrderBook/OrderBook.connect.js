import { connect } from 'react-redux'
import { getOrderBook } from '../../Store/orderBook/selectors'
import OrderBook from './OrderBook'

export const mapState = state => ({
  orders: getOrderBook(state),
})

export default connect(mapState)(OrderBook)
