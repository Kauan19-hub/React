import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home'
import myStyles from './pages/home/cadastro/styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <myStyles />
    <Home />
  </React.StrictMode>,
)
