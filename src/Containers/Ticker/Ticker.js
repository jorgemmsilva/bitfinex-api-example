import React from 'react'
import PropTypes from 'prop-types'
import {
  TickerPrice, TickerWrapper, TickerPair, TickerRow,
  TickerDailyChange,
} from './styled'

const Ticker = ({
  pair, dailyChange, dailyChangePerc, lastPrice, volume, high, low,
}) => (
  <TickerWrapper>
    <TickerRow>
      <TickerPair>{pair}</TickerPair>
      <TickerPrice>{lastPrice}</TickerPrice>
    </TickerRow>
    <TickerRow>
      <span>{`VOL: ${volume.toLocaleString()} USD`}</span>
      <TickerDailyChange>
        {`${dailyChange.toLocaleString()} (${dailyChangePerc}%)`}
      </TickerDailyChange>
    </TickerRow>
    <TickerRow>
      <span>{`LOW: ${low}`}</span>
      <span>{`HIGH: ${high}`}</span>
    </TickerRow>
  </TickerWrapper>
)

Ticker.defaultProps = {
  pair: '',
  dailyChange: 0,
  dailyChangePerc: 0,
  lastPrice: 0,
  volume: 0,
  high: 0,
  low: 0,
}

Ticker.propTypes = {
  pair: PropTypes.string,
  dailyChange: PropTypes.number,
  dailyChangePerc: PropTypes.number,
  lastPrice: PropTypes.number,
  volume: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
}

export default Ticker
