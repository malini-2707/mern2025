import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContext } from './Hooks/Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <UserContext>
      <App />
      </UserContext>
    </Router>
  </StrictMode>,
)
