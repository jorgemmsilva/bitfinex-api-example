import styled from 'styled-components'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import {
  TRADE_TABLE_TR_RED, TRADE_TABLE_TR_GREEN, TRADE_TABLE_INDICATOR_UP, TRADE_TABLE_INDICATOR_DOWN,
} from '../../../../constants/colors'
import { BUY } from '../../constants'


export const TradeTableRow = styled.tr`
  background: ${({ tradeSide }) => (
    tradeSide === BUY ? TRADE_TABLE_TR_GREEN : TRADE_TABLE_TR_RED
  )};
`


export const TradeIndicatorUp = styled(ExpandMore)`
  width: 17px !important;
  height: 17px !important;
  color: ${TRADE_TABLE_INDICATOR_UP}
`

export const TradeIndicatorDown = styled(ExpandLess)`
  width: 17px !important;
  height: 17px !important;
  color: ${TRADE_TABLE_INDICATOR_DOWN}
`
