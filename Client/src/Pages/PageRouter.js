import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar';
import AppHomePage from './Homepage/Homepage';
//import FutureReleases from './Listings/FutureReleases';
import ApiFetchPoster from './Listings/ApiFetchPoster';


class PageRouter extends Component {
    render() {
        return (
            <div className='Router'>
                <Router>
                    <AppNavbar/>
                    <Switch>
                        { /* Need the 'exact' property, as '/' matches all pages */}
                        <Route path='/' exact component={AppHomePage}/>
                        <Route path='/Future-Listings' component={ApiFetchPoster}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default PageRouter;