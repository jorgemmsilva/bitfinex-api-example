import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { TradeTableRow, TradeIndicatorDown, TradeIndicatorUp } from './styled'
import { SELL, BUY } from '../../../constants/tradeSide'


const TradeRow = ({ timestamp, price, amount }) => {
  const tradeSide = amount > 0 ? BUY : SELL
  return (
    <TradeTableRow tradeSide={tradeSide}>
      <td>{tradeSide === BUY ? <TradeIndicatorUp /> : <TradeIndicatorDown />}</td>
      <td>{moment.unix(timestamp).format('HH:mm:ss')}</td>
      <td>{price}</td>
      <td>{Math.abs(amount)}</td>
    </TradeTableRow>
  )
}

TradeRow.propTypes = {
  timestamp: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
}

export default TradeRow
