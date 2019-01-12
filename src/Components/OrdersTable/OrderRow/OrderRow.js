import React from 'react'
import PropTypes from 'prop-types'
import { OrderTableRow } from './styled'

const OrderRow = ({
  price, count, amount, total, side, maxTotal,
}) => (
  <OrderTableRow side={side} total={total} maxTotal={maxTotal}>
    <div>{count}</div>
    <div>{Math.abs(amount).toLocaleString()}</div>
    <div>{total.toLocaleString()}</div>
    <div>{price}</div>
  </OrderTableRow>
)

OrderRow.propTypes = {
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  side: PropTypes.number.isRequired,
  maxTotal: PropTypes.number.isRequired,
}

export default OrderRow
