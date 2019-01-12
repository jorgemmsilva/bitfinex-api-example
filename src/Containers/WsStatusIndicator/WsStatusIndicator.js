import React from 'react'
import PropTypes from 'prop-types'
import {
  IndicatorWrapper, ConnectingIcon, ConnectedIcon, DisconnetedIcon,
} from './styled'

const WsStatusIndicator = ({ connecting, connected }) => {
  let icon = <ConnectingIcon />
  if (!connecting) {
    icon = connected ? <ConnectedIcon /> : <DisconnetedIcon />
  }
  return (
    <IndicatorWrapper>
      { icon }
    </IndicatorWrapper>
  )
}

WsStatusIndicator.propTypes = {
  connecting: PropTypes.bool.isRequired,
  connected: PropTypes.bool.isRequired,
}

export default WsStatusIndicator
