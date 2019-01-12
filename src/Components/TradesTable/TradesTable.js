import React from 'react'
import PropTypes from 'prop-types'
import TradeRow from './TradeRow'
import { StyledTradesTable } from './styled'

const TradesTable = ({ trades }) => (
  <StyledTradesTable border="0" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <td />
        <td>TIME</td>
        <td>PRICE</td>
        <td>AMOUNT</td>
      </tr>
    </thead>
    <tbody>
      {trades.map((trade => (
        <TradeRow {...trade} />
      )))}
    </tbody>
  </StyledTradesTable>
)

TradesTable.propTypes = {
  trades: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
}

export default TradesTable
