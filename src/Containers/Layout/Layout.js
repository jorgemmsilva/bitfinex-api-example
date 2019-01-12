import React from 'react'
import { LayoutWrapper, LayoutTop } from './styled'
import PairSelect from '../PairSelect'
import Ticker from '../Ticker'
import OrderBook from '../OrderBook'
import Trades from '../Trades'

const Layout = () => (
  <LayoutWrapper>
    <LayoutTop>
      <PairSelect />
      <Ticker />
    </LayoutTop>
    <OrderBook />
    <Trades />
  </LayoutWrapper>
)

export default Layout
