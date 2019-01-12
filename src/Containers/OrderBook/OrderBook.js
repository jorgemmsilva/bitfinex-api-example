import React from 'react'
import PropTypes from 'prop-types'
import { OrderBookWidgetWrapper, WidgetTitle } from '../../Components/styled'


const OrderBook = ({ orders }) => (
  <OrderBookWidgetWrapper>
    <WidgetTitle>ORDERS</WidgetTitle>
    {/* <OrdersTable orders={orders} /> */}
  </OrderBookWidgetWrapper>
)

OrderBook.propTypes = {

}

export default OrderBook
