import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducers from './reducers'

let composeEnhancers = compose
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    collapsed: true,
  })
  middlewares.push(logger)
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(rootSaga)


export default store
