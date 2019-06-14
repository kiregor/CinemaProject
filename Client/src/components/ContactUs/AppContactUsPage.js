import React, { Component } from 'react';
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