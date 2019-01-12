import React from 'react'
import PropTypes from 'prop-types'


const Ticker = ({
  bid,
  bidSize,
  ask,
  askSize,
  dailyChange,
  dailyChangePerc,
  lastPrice,
  volume,
  high,
  low,
}) => (
  <div />
)

Ticker.propTypes = {
  bid: PropTypes.float,
  bidSize: PropTypes.float,
  ask: PropTypes.float,
  askSize: PropTypes.float,
  dailyChange: PropTypes.float,
  dailyChangePerc: PropTypes.float,
  lastPrice: PropTypes.float,
  volume: PropTypes.float,
  high: PropTypes.float,
  low: PropTypes.float,

}

export default Ticker
