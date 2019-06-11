import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, FormGroup, Container, Label, Col, Input, Button, Alert, Jumbotron } from 'reactstrap';
import EmailService from '../services/EmailService';

class ContactUsEmailForm extends Component {
    MESSAGE_CHAR_MINIMUM = 20;
    
    constructor(props) {
        super(props);
        this.state = {
            validForm: true,
            emailWarning: false,
            messageWarning: false,
            errorsVisible: false,
            successMessage: false,
            errorMessage: false,
            errorLog: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.showMessageWarning = this.showMessageWarning.bind(this);
        this.showSuccessMessage = this.showSuccessMessage.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(e){
        
        e.preventDefault();
        let elements = document.getElementsByTagName('form')[0].elements;
        let sender = elements[0].value;
        let message = elements[1].value;
        let submitButton = document.getElementById('submit-button');
        let validForm = true;
        if(message.length < this.MESSAGE_CHAR_MINIMUM) {
            validForm = false;
            this.showMessageWarning(true);
        }
        if(!validForm){
            this.state.errorsVisible = true;
        } else {
            // disable submission button
            submitButton.setAttribute('disabled', '');
            // send email
            EmailService.sendEmail(sender, message)
            // show success message
            .then(response => {
                EmailService.emailSent();
                this.showSuccessMessage(true);
            })
            .catch(error => {
                this.showErrorMessage(true);
                console.log(error.response.data.message, error.response.status);
                let { status, message } = error.response.data;
                let errorLog = `Error status ${status}. ${message}`;
                this.setState({ errorLog });
            });
        }
    }
    showMessageWarning(boolean) {
        this.setState({messageWarning: boolean });
    }
    showEmailWarning(boolean) {
        this.setState({emailWarning: boolean });
    }
    showSuccessMessage(boolean) {
        this.setState({successMessage: boolean });
    }
    showErrorMessage(boolean) {
        this.setState({errorMessage: boolean});
    }
    onChange() {
        if(this.state.errorsVisible){
            this.state.errorsVisible = false;
            this.showEmailWarning(false);
            this.showMessageWarning(false);
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
                    {!this.state.successMessage && 
                    <div>
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
                                        <Alert color='danger' isOpen={this.state.messageWarning} toggle={() => this.showMessageWarning(false)}>
                                            Your message must be more than { this.MESSAGE_CHAR_MINIMUM } characters long.
                                        </Alert>
                                        <Alert color='success' isOpen={this.state.successMessage} toggle={() => this.showSuccessMessage(false)}>
                                            Your message was sent successfully.
                                        </Alert>
                                        <Alert color='danger' isOpen={this.state.errorMessage} toggle={() => this.showErrorMessage(false)}>
                                            Error: { this.state.errorLog }
                                        </Alert>
                                    </Col>
                                </FormGroup>
                                <Button id='submit-button' onClick={this.onSubmit} className='submit-button'>Submit</Button>
                            </Form>
                        </div>
                    </div>
                    </div>}
                    {
                        this.state.successMessage && 
                        <div>
                            <Jumbotron fluid>
                                <Container fluid>
                                    <h1 className='display-3'>Success</h1>
                                    <p className='lead'>Your email has successfully been sent.</p>
                                </Container>
                            </Jumbotron>
                        </div>
                    }
                </div>
        );
    }
}

ContactUsEmailForm.propTypes = {
    emailWarning: PropTypes.bool,
    messageWarning: PropTypes.bool
}

export default ContactUsEmailForm;