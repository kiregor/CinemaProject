import React from 'react';
import '../../App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './AppCheckoutForm';
import SummaryPage from '../Summary1/SummaryPage';
import SessionStorageService from '../../services/SessionStorageService';
import './paymentpage.css'

function PaymentPage() {
  let seatInfo = SessionStorageService.getObject('bookedSeats');
  return (
    <div className = "PaymentPage" >
      <SummaryPage seatInfo={seatInfo}/><br/>
      <div className="container" >
      <StripeProvider apiKey="pk_test_ApZj9rpgzM8kHv4LZLeWzY8c00CRakUyGN">
          <Elements>
            <CheckoutForm seatInfo={seatInfo}/>
          </Elements>
      </StripeProvider>
      </div>
    </div>
  );
}

export default PaymentPage;
