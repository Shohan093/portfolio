import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/poppins'; // defaults to 400
import '@fontsource/poppins/700.css'; // bold
import '@fontsource/source-code-pro'; // defaults to 400
import '@fontsource/source-code-pro/300.css'; // light for paragraphs
import '@fontsource/source-code-pro/600.css'; // semibold for headings
import '@fontsource/source-code-pro/700.css'; // bold for headings

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
