import handleWsMessage from './handleWsMessage'
import { PONG } from '../constants/wsMessageEventTypes'

let msgHandler
const emitterMock = jest.fn()
const clearWsTimeoutMock = jest.fn()

beforeEach(() => {
  emitterMock.mockClear()
  clearWsTimeoutMock.mockClear()
  msgHandler = handleWsMessage(emitterMock, clearWsTimeoutMock)
})

it('calls clearTimeout when receives PONG message', () => {
  const payload = {
    data: JSON.stringify({ event: PONG }),
  }
  msgHandler(payload)
  expect(clearWsTimeoutMock).toHaveBeenCalled()
})
