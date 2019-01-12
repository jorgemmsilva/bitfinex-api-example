import React from 'react'
import { LayoutWrapper, LayoutTop, LayoutBottom } from './styled'
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
    <LayoutBottom>
      <OrderBook />
      <Trades />
    </LayoutBottom>
  </LayoutWrapper>
)

export default Layout
