import styled from 'styled-components'
import { BUY } from '../../../constants/tradeSide'

export const StyledOrdersTable = styled.div`
  width: 100%;
  text-align: center;
`

export const OrdersTableHeader = styled.div`
  flex-direction: ${({ side }) => (
    side === BUY ? 'row-reverse' : 'row'
  )};
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-evenly;
  > div {
    width: 100%;
  }
`
export const OrdersTableBody = styled.div`
  width: 100%;
  text-align: center;
`
