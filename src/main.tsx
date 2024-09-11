import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './components/menu/Menu'
import { MainRouter } from './routers/MainRouter'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <MainRouter />
    </BrowserRouter>
  </StrictMode>,
)
