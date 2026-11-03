import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { SeoProvider } from './components/Seo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SeoProvider><App /></SeoProvider>
    </BrowserRouter>
  </StrictMode>,
)
