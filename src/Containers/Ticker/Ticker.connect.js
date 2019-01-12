import { connect } from 'react-redux'
import { getSelectedPair } from '../../Store/pairs/selectors'
import { getTickerData } from '../../Store/ticker/selectors'
import Ticker from './Ticker'


export const mapState = (state) => {
  const tickerData = getTickerData(state)
  return {
    ...tickerData,
    pair: getSelectedPair(state).value,
  }
}

export default connect(mapState)(Ticker)
