import React, { Component } from 'react';

import AppFindUsMap from './AppFindUsMap';
import ContactUsEmailForm from './ContactUsEmailForm';
import './AppContactUsPage.css';

class AppContactUsPage extends Component {
    render() {
        return (
            <div className='AppContactUsPage'>
                <ContactUsEmailForm/>
                {/* <AppFindUsMap/> */}
            </div>
        )
    }
}

export default AppContactUsPage;