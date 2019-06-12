import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './AppNavbar';
import AppHomePage from './homepage/AppHomePage';
import AppContactUsPage from './contactus/AppContactUsPage';
import AppGettingHerePage from './findus/AppGettingHerePage';
import AppSeatingPage from './seating/AppSeatingPage';
import AppBreadCrumbs from './AppBreadcrumbs'
import PaymentPage from './payment/PaymentPage';
import FutureReleases from './Future Listings/FutureReleases';
import CurrentReleases from './Current Listings/CurrentReleases';
import MoviePage from './MoviePage/MoviePage'
import BookingService from '../services/BookingService';
import SessionStorageService from '../services/SessionStorageService'

class AppPages extends Component {

    componentWillMount() {
        BookingService.getPricingInformation()
        .then( response => { 
            if(response && response.data){ 
                SessionStorageService.setObject(response.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className='AppPages'>
                <Router>
                    <AppNavbar/>
                    <AppBreadCrumbs/>
                    <Switch>
                        { /* Need the 'exact' property, as '/' matches all pages */}
                        <Route path='/' exact component={AppHomePage}/>
                        <Route path='/contact-us' component={AppContactUsPage}/>
                        <Route path='/getting-here' component={AppGettingHerePage}/>
                        <Route path='/seatbooking' component={AppSeatingPage}/>
                        <Route path='/PaymentPage' component={PaymentPage}/>
                        <Route path='/Future-Listings' component={FutureReleases}/>
                        <Route path='/Listings/:movietitle' component={MoviePage}/>
                        <Route path='/Listings' component={CurrentReleases}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default AppPages;