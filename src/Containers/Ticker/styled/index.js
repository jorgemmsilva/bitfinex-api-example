import styled from 'styled-components'
import {
  WIDGET_BACKGROUND, FONT_LIGHT_GREY, FONT_WHITE, FONT_GREEN, FONT_RED,
} from '../../../constants/colors'

export const TickerWrapper = styled.span`
  background: ${WIDGET_BACKGROUND};
  width: 350px;
  font-size: 12px;
  padding: 5px;
`
export const TickerRow = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  color: ${FONT_LIGHT_GREY};
  font-weight: 400;
  > span {
    width: 100%;
    white-space: nowrap;
  text-align: center;

  }
`

export const TickerPair = styled.span`
  font-size: 14px;
  color: ${FONT_WHITE};
`

export const TickerPrice = styled.span`
  color: ${FONT_WHITE};
  text-align: center;
`

export const TickerDailyChange = styled.span`
  color: ${({ children }) => (
    parseFloat(children) > 0 ? FONT_GREEN : FONT_RED
  )};
`
