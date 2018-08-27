import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './scenes/App'
import './styles.sass'

ReactDOM.render(
  <BrowserRouter>
    <App className="container" />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
