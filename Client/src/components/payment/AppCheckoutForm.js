import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import stripeService from '../../services/stripeService';
import axios from 'axios';
import { Button } from 'reactstrap';
import SessionStorageService from '../../services/SessionStorageService';

class CheckoutForm extends Component {
  seatInfo = this.props.seatInfo;
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
    
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    this.seatInfo.token = token.id;
    console.log(this.seatInfo);
    stripeService.sendStripe(
     this.seatInfo
    ).then(
      response => {
        console.log('works');
      })
    
    // if (response.ok) this.setState({complete: true})
    // console.log(response)
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <CardElement />
        <br/><br/>
        <Button color="primary" size="lg" block onClick={this.submit}>Send</Button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);