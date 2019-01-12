import React from 'react'
import PropTypes from 'prop-types'
import { OrderBookWidgetWrapper, WidgetTitle, OrdersTableWrapper } from '../../Components/styled'
import OrdersTable from '../../Components/OrdersTable'
import { BUY, SELL } from '../../constants/tradeSide'


const OrderBook = ({ orders, maxTotal }) => (
  <OrderBookWidgetWrapper>
    <WidgetTitle>ORDERS</WidgetTitle>
    <OrdersTableWrapper>
      <OrdersTable orders={orders.buy} side={BUY} maxTotal={maxTotal} />
      <OrdersTable orders={orders.sell} side={SELL} maxTotal={maxTotal} />
    </OrdersTableWrapper>
  </OrderBookWidgetWrapper>
)

OrderBook.propTypes = {
  orders: PropTypes.shape({
    buy: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })).isRequired,
    sell: PropTypes.arrayOf(PropTypes.shape({
      price: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  maxTotal: PropTypes.number.isRequired,
}

export default OrderBook
