import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import App from "./App.jsx";


// amine
// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { SidebarProvider } from "./context/SidebarContext.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>


  // amine
  // <ThemeProvider>
  //   <SidebarProvider>
  //     <App />
  //   </SidebarProvider>
  // </ThemeProvider>
);
