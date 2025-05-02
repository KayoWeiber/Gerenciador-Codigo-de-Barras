import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Home from "./components/containers/home"
import AppRoutes from './routes';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Home /> */}
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
