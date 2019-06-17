import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import stripeService from '../../services/stripeService';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';

class CheckoutForm extends Component {
  seatInfo = this.props.seatInfo;
  constructor(props) {
    super(props);
    this.state = {show: false, visible: false};
    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    if(token != undefined){
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
                this.setState({show: true});
              }
            }
          ).catch(
            error => {
              console.log(error);
            }  
          )
        })
    }else{
      this.setState({visible: true})
      setTimeout(() => { this.setState({visible: false})}, 3000);
    }
  }
  render() {
      return (
        <>
          {(true) &&
              <div className="checkout">
                <CardElement require/>
                <br/><br/>
                <Alert color="danger" isOpen={this.state.visible}>
                   Please enter card details!
                </Alert>
                <Toast isOpen={this.state.show}>
                  <ToastHeader toggle={this.toggle} icon="danger">
                    Unsuccessful Transaction
                  </ToastHeader>
                  <ToastBody>
                    You don't have enough money in your account for this Transaction!
                  </ToastBody>
                </Toast>
                <br/>
                <Button color="primary" size="lg" block onClick={this.submit}>Send</Button>
              </div>
          }
        </>
       )
  }
}

export default injectStripe(CheckoutForm);