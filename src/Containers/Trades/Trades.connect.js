import { connect } from 'react-redux'
import Trades from './Trades'
import { getTrades } from '../../Store/trades/selectors'

export const mapState = state => ({
  trades: getTrades(state),
})

export default connect(mapState)(Trades)
