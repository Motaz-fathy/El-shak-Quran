import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import "./i18n/config.js"
import App from './App.jsx'
import StoreProvider from './Context/Context.jsx'
import LocalizationsProvider from './Context/localizationContext/LocalizationsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <LocalizationsProvider>
    <StoreProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </StoreProvider>
  </LocalizationsProvider>

)