import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './payment/paymentPage'

function App() {
  return ( 
    <div className = "App" >
      <AppNavbar/>
      {/* <Carousel/> */}
      <StripeProvider apiKey="pk_test_ApZj9rpgzM8kHv4LZLeWzY8c00CRakUyGN">
        <div className="example">
          <h1>Enter card details</h1>
          <Elements>
            <CheckoutForm/>
          </Elements>
        </div>
      </StripeProvider>
    </div>
  );
}


export default App;