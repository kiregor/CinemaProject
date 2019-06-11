import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './AppNavbar';
import AppHomePage from './homepage/AppHomePage';
import AppContactUsPage from './contactus/AppContactUsPage';
import AppGettingHerePage from './findus/AppGettingHerePage';
import AppSeatingPage from './seating/AppSeatingPage';
import PaymentPage from './payment/PaymentPage';

class AppPages extends Component {
    render() {
        return (
            <div className='AppPages'>
                <Router>
                    <AppNavbar/>
                    <Switch>
                        { /* Need the 'exact' property, as '/' matches all pages */}
                        <Route path='/' exact component={AppHomePage}/>
                        <Route path='/contact-us' component={AppContactUsPage}/>
                        <Route path='/getting-here' component={AppGettingHerePage}/>
                        <Route path='/seatbooking' component={AppSeatingPage}/>
                        <Route path='/PaymentPage' component={PaymentPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default AppPages;