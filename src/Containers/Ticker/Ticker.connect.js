import { connect } from 'react-redux'
import { getTickerData } from '../../Store/ticker/selectors'
import Ticker from './Ticker'


export const mapState = (state) => {
  const tickerData = getTickerData(state)
  return {
    ...tickerData,
  }
}

export default connect(mapState)(Ticker)
