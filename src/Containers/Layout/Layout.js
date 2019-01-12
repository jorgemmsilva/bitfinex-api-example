import React from 'react'
import { LayoutWrapper } from './styled'
import PairSelect from '../PairSelect'
import Ticker from '../Ticker/Ticker'
import OrderBook from '../OrderBook'
import Trades from '../Trades'

const Layout = () => (
  <LayoutWrapper>
    <PairSelect />
    <Ticker />
    <OrderBook />
    <Trades />
  </LayoutWrapper>
)

export default Layout
