import React, { Component } from 'react';
import { Form, Row, FormGroup, Label, Col, Input, Button, Alert} from 'reactstrap';

class ContactUsEmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validForm : true
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        const MESSAGE_CHAR_LIMIT = 20;
        let elements = document.getElementsByTagName('form')[0].elements;
        let email_field = elements[0].value;
        let message_field = elements[1].value;
        console.log(elements);
        e.preventDefault();
    }
    validForm() {
        return true;
    }
    render() {
        return (
            <div className='container' id='email-form'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 instructions'>
                            <p>If there are any suggestions you'd like to offer to QA Cinema, please contact us using our email form:</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Form>
                                <FormGroup row>
                                    <Col sm={12}>
                                        {/* <Alert color='primary' toggle={this.validForm} fade={true}>

                                        </Alert> */}
                                        <Input type='email' required name='email' id='email' placeholder='Enter Email'/>
                                    </Col>
                                    <Col sm={12}>
                                        <Input type='textarea' required name='message' id='message' placeholder='Your Message'/>
                                    </Col>
                                </FormGroup>
                                <Button onClick={this.onSubmit} className='submit-button'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ContactUsEmailForm;