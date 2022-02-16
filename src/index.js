import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/Login.page';
import OtpPage from './pages/Otp.page';
import Home from './pages/Home.page';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();