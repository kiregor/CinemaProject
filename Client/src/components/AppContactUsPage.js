import React, { Component } from 'react';
import { Form, Row, FormGroup, Label } from 'reactstrap';
import './AppContactUsPage.css';

class AppContactUsPage extends Component {
    render() {
        return (
            <div className='AppContactUsPage'>
                <div className='container' id='main'>
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
                                    <Label for='email'></Label>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppContactUsPage;