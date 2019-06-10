import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Carousel from './components/AppCarousel';
import { link } from 'fs';

function App() {
  return ( 
    <div className = "App" >
      <AppNavbar/>
      <Carousel/>
      <button onClick='goPaymentPage()'>fdfj</button>
    </div>
  );
}

function goPaymentPage(){
  return(
    <link to="/payment/paymentPage"></link>
  )
}

export default App;