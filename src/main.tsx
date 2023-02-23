import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataProvider } from './context/store'
import './index.css'
import { ApiProvider } from './services'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ApiProvider>
  </React.StrictMode>,
)
