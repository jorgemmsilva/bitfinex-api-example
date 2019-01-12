import React from 'react'
import PropTypes from 'prop-types'


const TradeRow = ({ timestamp, price, amount }) => (
  <tr>
    <td>{timestamp}</td>
    <td>{price}</td>
    <td>{amount}</td>
  </tr>
)

TradeRow.propTypes = {
  timestamp: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
}

export default TradeRow
