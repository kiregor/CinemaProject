import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, FormGroup, Label, Col, Input, Button, Alert} from 'reactstrap';
import EmailService from '../services/EmailService';

class ContactUsEmailForm extends Component {
    MESSAGE_CHAR_MINIMUM = 20;
    constructor(props) {
        super(props);
        this.state = {
            validForm: true,
            emailWarning: false,
            messageWarning: false,
            errorsVisible: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.dismissMessageWarning = this.dismissMessageWarning.bind(this);
        this.showMessageWarning = this.showMessageWarning.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(e){
        
        e.preventDefault();
        let elements = document.getElementsByTagName('form')[0].elements;
        let sender = elements[0].value;
        let message = elements[1].value;
        let validForm = true;
        if(message.length < this.MESSAGE_CHAR_MINIMUM) {
            validForm = false;
            this.showMessageWarning();
        }
        if(!validForm){
            this.state.errorsVisible = true;
        } else {
            EmailService.sendEmail(sender, message)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            // send email
        }
    }
    dismissMessageWarning() {
        this.setState({messageWarning: false });
    }
    showMessageWarning() {
        this.setState({messageWarning: true });
    }
    dismissEmailWarning() {
        this.setState({emailWarning: false });
    }
    showEmailWarning() {
        this.setState({emailWarning: true });
    }
    onChange() {
        if(this.state.errorsVisible){
            this.state.errorsVisible = false;
            this.dismissEmailWarning();
            this.dismissMessageWarning();
        }
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
                            <Form onChange={ this.onChange }>
                                <FormGroup row>
                                    <Col sm={12}>
                                        <Input type='email' required name='email' id='email' placeholder='Enter Email'/>
                                    </Col>
                                    <Col sm={12}>
                                        <Input type='textarea' required name='message' id='message' placeholder='Your Message'/>
                                        <Alert color='danger' isOpen={this.state.messageWarning} toggle={this.dismissMessageWarning}>
                                            Your message must be more than { this.MESSAGE_CHAR_MINIMUM } characters long.
                                        </Alert>
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

ContactUsEmailForm.propTypes = {
    emailWarning: PropTypes.bool,
    messageWarning: PropTypes.bool
}

export default ContactUsEmailForm;