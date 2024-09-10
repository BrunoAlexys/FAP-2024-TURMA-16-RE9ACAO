import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Menu } from './components/menu/Menu.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </StrictMode>,
)
