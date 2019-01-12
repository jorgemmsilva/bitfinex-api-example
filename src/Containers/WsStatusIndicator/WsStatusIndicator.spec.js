import React from 'react'
import { shallow } from 'enzyme'
import WsStatusIndicator from './WsStatusIndicator'
import {
  ConnectingIcon, ConnectedIcon, DisconnetedIcon,
} from './styled'

it('renders correctly when connecting', () => {
  const wrapper = shallow(<WsStatusIndicator connecting connected={false} />)
  expect(wrapper.find(ConnectingIcon).length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})


it('renders correctly when connected', () => {
  const wrapper = shallow(<WsStatusIndicator connecting={false} connected />)
  expect(wrapper.find(ConnectedIcon).length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})

it('renders correctly when disconnected', () => {
  const wrapper = shallow(<WsStatusIndicator connecting={false} connected={false} />)
  expect(wrapper.find(DisconnetedIcon).length).toBe(1)
  expect(wrapper).toMatchSnapshot()
})
