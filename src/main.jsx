import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './context/StateProvider.jsx'
import { HashRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <StateProvider>
        <App />
      </StateProvider>
    </HashRouter>
  </React.StrictMode>,
)
