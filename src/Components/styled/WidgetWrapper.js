import styled from 'styled-components'
import { WIDGET_BACKGROUND, FONT_WHITE } from '../../constants/colors'

export const WidgetWrapper = styled.div`
  background-color: ${WIDGET_BACKGROUND};
  color: ${FONT_WHITE};
  font-size: 12px;
`

export const TradesWidgetWrapper = styled(WidgetWrapper)`
  width: 300px;
`
