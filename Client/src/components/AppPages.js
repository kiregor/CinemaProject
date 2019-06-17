import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from './Header/AppNavbar';
import AppHomePage from './HomePage/AppHomePage';
import AppContactUsPage from './ContactUs/AppContactUsPage';
import AppAboutUsPage from './AboutUs/AppAboutUsPage';
import AppGettingHerePage from './FindUs/AppGettingHerePage';
import AppSeatingPage from './Seating/AppSeatingPage';
import AppBreadCrumbs from './Header/AppBreadcrumbs'
import PaymentPage from './Payment/PaymentPage';
import FutureReleases from './Future Listings/FutureReleases';
import CurrentReleases from './Current Listings/CurrentReleases';
import AppFooter from './Footer/AppFooter';
import './AppPages.css';
import MoviePage from './MoviePage/MoviePage'
import BookingService from '../services/BookingService';
import SessionStorageService from '../services/SessionStorageService'
import FutureMoviePage from './FutureMoviePage/FutureMoviePage'
import BookingSuccessPage from './summary/BookingSuccessPage';
import ErrorPage from './ErrorPage/ErrorPage';

class AppPages extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

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
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
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
                            <Route path='/Future-Listings/:movietitle' component={FutureMoviePage}/>
                            <Route path='/Future-Listings' component={FutureReleases}/>
                            <Route path='/Listings/:movietitle' component={MoviePage}/>
                            <Route path='/Listings' component={CurrentReleases}/>
                            <Route path='/summary/bookingsuccesspage' component={BookingSuccessPage}/>
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