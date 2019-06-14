import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import stripeService from '../../services/stripeService';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

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
        let isSuccess;
        stripeService.getSuccessStatus().then(
          response => {
            isSuccess = response.data;
            if(isSuccess == "success"){
              this.state = {complete: false};
              console.log("Success");
              window.location.assign("../summary/BookingSuccessPage");
            }else{
              console.log("Failed");
              this.setState({complete: true});
            }
          }
        ).catch(
          error => {
            console.log(error);
          }
          
        )
        
      })

  }

  render() {
      return (
        <>
          {(this.state.complete) &&
            <Toast>
              <ToastHeader  icon="danger">
                Unsuccessful Transaction
              </ToastHeader>
              <ToastBody>
                You don't have enough funds for this Transaction!
              </ToastBody>
            </Toast>
          }
          {(true) &&
              <div className="checkout">
                <CardElement />
                <br/><br/>
                <Button color="primary" size="lg" block onClick={this.submit}>Send</Button>
              </div>

          }
        </>
       )
  }
}

export default injectStripe(CheckoutForm);