import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import ContactUsEmailForm from './ContactUsEmailForm';
import './AppContactUsPage.css';

class AppContactUsPage extends Component {
    render() {
        return (
            <div className='AppContactUsPage'>
                <ContactUsEmailForm/>
            </div>
        )
    }
}

export default AppContactUsPage;