import React from 'react';
import ReactDOM from 'react-dom/client';

//BOOTSTRAP IMPORT
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import ProfileCard from './react-bootstrap/bootstrap-button/ProfileCard';
import LoginForm from './react-css/external-css/LoginForm';
import QuoteGenerator from './react-css/inline-css/QuoteGenerator';
import ThemeChanger from './react-css/internal-css/ThemeChanger';
import AboutReact from './react-module-css/AboutReact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutReact/>
    <ThemeChanger/> 
    <LoginForm/> 
    <ProfileCard/> 
    <QuoteGenerator/>
  </React.StrictMode>
);

