import React from 'react';
import { createRoot } from 'react-dom/client'; // Asegúrate de que la ruta sea correcta
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza tu aplicación usando root.render
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
