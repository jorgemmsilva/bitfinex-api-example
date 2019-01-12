import styled, { keyframes } from 'styled-components'
import { Autorenew, Check, Close } from '@material-ui/icons'

export const IndicatorWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  border: 1px solid black;
  border-top: 0;
  border-radius: 0px 0px 7px 7px;
  padding-top: 2px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const ConnectingIcon = styled(Autorenew)`
  animation: ${rotate} 2s linear infinite
`

export const ConnectedIcon = styled(Check)`
  color: green
`

export const DisconnetedIcon = styled(Close)`
  color: red
`
