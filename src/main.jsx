import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

if (import.meta.env.MODE === 'development') {
  import('./style.css');
} else {
  import('./dist/style.css');  // Path to the CSS file generated during build
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
