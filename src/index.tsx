import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'reset-css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

console.log('当前环境',process.env.REACT_APP_ENV)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
