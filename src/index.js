import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import {initStore} from './state/store'
import './styles/main.scss'

// @ts-ignore
const initState = window.__PRELOADED_STATE__
// @ts-ignore
delete window.__PRELOADED_STATE__
const store = initStore(initState)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
 document.getElementById('root')
)
