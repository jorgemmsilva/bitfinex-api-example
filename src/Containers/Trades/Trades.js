import React from 'react'
import PropTypes from 'prop-types'
import TradesTable from '../../Components/TradesTable'
import { TradesWidgetWrapper, WidgetTitle } from '../../Components/styled'

const Trades = ({ trades }) => (
  <TradesWidgetWrapper>
    <WidgetTitle>TRADES</WidgetTitle>
    <TradesTable trades={trades} />
  </TradesWidgetWrapper>
)

Trades.propTypes = {
  trades: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
}

export default Trades
