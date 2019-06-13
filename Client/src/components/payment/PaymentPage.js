import React from 'react';
import '../../App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './AppCheckoutForm';
import SummaryPage from '../summary/SummaryPage';
import SessionStorageService from '../../services/SessionStorageService';

function PaymentPage() {
  let seatInfo = SessionStorageService.getObject('bookedSeats');
  return ( 
    <div className = "PaymentPage" >
      <SummaryPage seatInfo={seatInfo}/><br/><br/>
      <div className="container ml-16" >
      <StripeProvider apiKey="pk_test_ApZj9rpgzM8kHv4LZLeWzY8c00CRakUyGN">
        <div className="container ml-16" >
          <h1>Enter card details</h1>
          <Elements>
            <CheckoutForm seatInfo={seatInfo}/>
          </Elements>
        </div>
      </StripeProvider>
      </div>
      <br/><br/><br/>
    </div>
  );
}

export default PaymentPage;