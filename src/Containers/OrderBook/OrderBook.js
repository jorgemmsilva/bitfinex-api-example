import React from 'react'
import PropTypes from 'prop-types'
import { OrderBookWidgetWrapper, WidgetTitle, OrdersTableWrapper } from '../../Components/styled'
import OrdersTable from '../../Components/OrdersTable'
import { BUY, SELL } from '../../constants/tradeSide'

const OrderBook = ({
  buyOrders, sellOrders, maxBuyTotal, maxSellTotal,
}) => (
  <OrderBookWidgetWrapper>
    <WidgetTitle>ORDERS</WidgetTitle>
    <OrdersTableWrapper>
      <OrdersTable orders={buyOrders} side={BUY} maxTotal={maxBuyTotal} />
      <OrdersTable orders={sellOrders} side={SELL} maxTotal={maxSellTotal} />
    </OrdersTableWrapper>
  </OrderBookWidgetWrapper>
)

OrderBook.propTypes = {
  buyOrders: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
  sellOrders: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  })).isRequired,
  maxSellTotal: PropTypes.number.isRequired,
  maxBuyTotal: PropTypes.number.isRequired,
}

export default OrderBook
