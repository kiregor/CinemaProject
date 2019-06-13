import React from 'react';
import '../../App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './AppCheckoutForm'

function PaymentPage() {
  return ( 
    <div className = "PaymentPage" >
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

export default PaymentPage;