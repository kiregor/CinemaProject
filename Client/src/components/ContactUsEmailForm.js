import React, { Component } from 'react';
import { Form, Row, FormGroup, Label, Col, Input } from 'reactstrap';

class ContactUsEmailForm extends Component {
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
                                        <Input type='email' name='email' id='email' placeholder='Enter Email'/>
                                    </Col>
                                    <Col sm={12}>
                                        <Input type='textarea' name='message' id='message' placeholder='Your Message'/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ContactUsEmailForm;