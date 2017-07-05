import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

const redusers = combineReducers({
  someReduser: (some, state) => state
})

export function initStore (initialState = {}) {
  // @ts-ignore
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  return createStore(redusers, initialState, composeEnhancers(applyMiddleware(thunk)))
}
