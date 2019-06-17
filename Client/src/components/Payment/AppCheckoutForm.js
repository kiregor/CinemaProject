import React, {Component} from 'react';
import {CardElement, injectStripe, AddressSection} from 'react-stripe-elements';
import stripeService from '../../services/stripeService';
import { Button } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Alert, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

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
    let email = document.getElementById('exampleEmail').value;
    let name = document.getElementById('name1').value;
    console.log("Email: "+email);
    console.log("Name: "+name);
    if(token !== undefined){
      this.seatInfo.token = token.id;
      stripeService.sendStripe(
       this.seatInfo
      ).then(
        response => {
          let isSuccess;
          stripeService.getSuccessStatus().then(
            response => {
              isSuccess = response.data;
              if(isSuccess === "success"){
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
        <div>
          {(true) &&
              <div className="checkout">
                <Form>
                    <Row form>
                        <Col md={4}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Name</Label>
                                <Input type="text" name="name" id="name1" placeholder="John"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com"/>
                            </FormGroup>
                        </Col>
                    </Row><br/><br/>
                    <h4>Enter card details</h4>
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
                </Form>

                <br/>
              </div>
          }
        </div>
       )
  }
}

export default injectStripe(CheckoutForm);
