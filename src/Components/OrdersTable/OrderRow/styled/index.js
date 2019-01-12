import styled from 'styled-components'
import {
  WIDGET_BACKGROUND, ORDER_BOOK_RED_BAR, ORDER_BOOK_GREEN_BAR,
} from '../../../../constants/colors'
import { BUY } from '../../../../constants/tradeSide'


export const OrderTableRow = styled.div.attrs(
  ({ side, total, maxTotal }) => {
    const barPerc = (total / maxTotal) * 100

    const background = (
      side === BUY
        ? `linear-gradient(90deg,
      ${WIDGET_BACKGROUND} ${(100 - barPerc).toFixed(0)}%,
      ${ORDER_BOOK_GREEN_BAR} ${barPerc.toFixed(0)}%)`
        : `linear-gradient(90deg,
      ${ORDER_BOOK_RED_BAR} ${barPerc.toFixed(0)}%,
      ${WIDGET_BACKGROUND} ${(100 - barPerc).toFixed(0)}%)`
    )
    return {
      style: { background },
    }
  },
)`
  flex-direction: ${({ side }) => (
    side === BUY ? 'row-reverse' : 'row'
  )};
  display: flex;
  justify-content: space-evenly;
  height: 20px;
  > div {
    width: 100%
  }
`
