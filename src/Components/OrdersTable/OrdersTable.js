
import React from 'react'
import PropTypes from 'prop-types'
import OrderRow from './OrderRow'
import { StyledOrdersTable, OrdersTableHeader, OrdersTableBody } from './styled'

const OrdersTable = ({ orders, side, maxTotal }) => (
  <StyledOrdersTable>
    <OrdersTableHeader side={side}>
      <div>COUNT</div>
      <div>AMOUNT</div>
      <div>TOTAL</div>
      <div>PRICE</div>
    </OrdersTableHeader>
    <OrdersTableBody>
      {orders.map((order => (
        <OrderRow {...order} side={side} maxTotal={maxTotal} key={order.key} />
      )))}
    </OrdersTableBody>
  </StyledOrdersTable>
)

OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,

    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
  side: PropTypes.number.isRequired,
  maxTotal: PropTypes.number.isRequired,
}

export default OrdersTable
