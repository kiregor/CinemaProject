import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import stripeService from '../../services/stripeService';
import axios from 'axios';

class CheckoutForm extends Component {
  seatInfo;
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
    //this.seatInfo = window.sessionStorage.getItem('bookedSeats');
    
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    stripeService.sendStripe(
      {
        "booking": {
            "tickets": [
                {
                    "location": "B-3",
                    "ticketType": "Adult",
                    "price": 15
                },
                {
                  "location": "B-4",
                  "ticketType": "Child",
                  "price": 10
              }
            ]
        },
        "token": token.id
     }
    ).then(
      response => {
        console.log('works')
      })
    
    // if (response.ok) this.setState({complete: true})
    // console.log(response)
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);