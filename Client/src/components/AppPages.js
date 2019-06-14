import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './Header/AppNavbar';
import AppHomePage from './HomePage/AppHomePage';
import AppContactUsPage from './ContactUs1/AppContactUsPage';
import AppAboutUsPage from './AboutUs/AppAboutUsPage';
import AppGettingHerePage from './FindUs1/AppGettingHerePage';
import AppSeatingPage from './Seating1/AppSeatingPage';
import AppBreadCrumbs from './Header/AppBreadcrumbs'
import PaymentPage from './Payment1/PaymentPage';
import FutureReleases from './Future Listings/FutureReleases';
import CurrentReleases from './Current Listings/CurrentReleases';
import AppFooter from './Footer/AppFooter';
import './AppPages.css';
import MoviePage from './MoviePage/MoviePage'
import BookingService from '../services/BookingService';
import SessionStorageService from '../services/SessionStorageService'
import FutureMoviePage from './FutureMoviePage/FutureMoviePage'
import ErrorPage from './ErrorPage/ErrorPage';

class AppPages extends Component {
    pricing = {}
    componentWillMount() {
        BookingService.getPricingInformation()
        .then( response => { 
            if(response && response.data){ 
                SessionStorageService.setObject('pricing', response.data);
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
                    <div className='AppContent'>
                        <Switch>
                            { /* Need the 'exact' property, as '/' matches all pages */}
                            <Route path='/' exact component={AppHomePage}/>
                            <Route path='/about-us' component={AppAboutUsPage}/>
                            <Route path='/contact-us' component={AppContactUsPage}/>
                            <Route path='/getting-here' component={AppGettingHerePage}/>
                            <Route path='/seatbooking' component={AppSeatingPage}/>
                            <Route path='/PaymentPage' component={PaymentPage}/>
                            <Route path='/Future-Listings' component={FutureReleases}/>
                            <Route path='/FutureListings/:movietitle' component={FutureMoviePage}/>
                            <Route path='/Listings/:movietitle' component={MoviePage}/>
                            <Route path='/Listings' component={CurrentReleases}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </div>
                    <AppFooter />
                </Router>
            </div>
        )
    }
}

export default AppPages;