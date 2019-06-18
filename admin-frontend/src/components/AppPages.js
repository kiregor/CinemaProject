import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppAdminLoginPage from './AppAdminLoginPage'
import AppNavbar from './Header/AppNavbar';
import AppBreadCrumbs from './Header/AppBreadcrumbs'
import AppFooter from './Footer/AppFooter';
import './AppPages.css';
import BookingService from '../services/BookingService';
import MovieService from '../services/MovieService';
import SessionStorageService from '../services/SessionStorageService'
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
            .then(response => {
                if (response && response.data) {
                    SessionStorageService.setObject('pricing', response.data);
                }
            })
            .catch(error => {
                console.log(error);
            });
        // Get two pages of tmdb movies and send to back-end
        MovieService.getMoviesFromTmdb(data => {
            console.log(data)
            // Send data to the back-end
            MovieService.sendMoviesToBackend(data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        });

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
                    <AppNavbar />
                    <AppBreadCrumbs />
                    <div className='AppContent'>
                        <Switch>
                            { /* Need the 'exact' property, as '/' matches all pages */}
                            {/* <Route path='/' exact component={AppHomePage} /> */}
                            <Route path='/' exact component={AppAdminLoginPage} />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                    <AppFooter />
                </Router>
            </div>
        )
    }
}

export default AppPages;