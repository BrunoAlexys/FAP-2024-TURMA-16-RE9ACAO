import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MainRouters } from './components/MainRouters.tsx';
import { MenuMobile } from './components/menuMobile/menuMobile.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <section className='flex flex-col justify-end min-h-screen' id="mainContainer">
        <MainRouters />
        <MenuMobile />
      </section>
    </BrowserRouter>
  </StrictMode>,
)
