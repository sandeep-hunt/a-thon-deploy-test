import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'video-react/dist/video-react.css';
import 'swiper/css';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-5LHK6VTQPW");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
