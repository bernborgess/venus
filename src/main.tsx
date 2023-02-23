import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApiProvider } from './context/api'
import { DataProvider } from './context/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ApiProvider>
  </React.StrictMode>,
)
