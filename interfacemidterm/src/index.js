import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/midterm-Interface/">
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);


