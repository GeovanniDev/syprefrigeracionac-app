import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRouter from './shared/router/AppRouter.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
    <ToastContainer
     />
  </StrictMode>,
)
