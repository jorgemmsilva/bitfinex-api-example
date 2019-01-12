import React from 'react'
import { Provider } from 'react-redux'
import store from '../../Store/configureStore'
import WsStatusIndicator from '../WsStatusIndicator'
import Layout from '../Layout'

const App = () => (
  <Provider store={store}>
    <WsStatusIndicator />
    <Layout />
  </Provider>
)

export default App
