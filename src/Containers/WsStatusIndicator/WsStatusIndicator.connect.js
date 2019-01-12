import { connect } from 'react-redux'
import { getWebsocketIsConnecting, getWebsocketIsConnected } from '../../Store/websocket/selectors'
import WsStatusIndicator from './WsStatusIndicator'

export const mapState = state => ({
  connecting: getWebsocketIsConnecting(state),
  connected: getWebsocketIsConnected(state),
})

export default connect(mapState)(WsStatusIndicator)
