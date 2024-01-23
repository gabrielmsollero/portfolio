import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LangContextProvider } from './store/lang-context.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>,
)
