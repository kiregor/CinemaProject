import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppAdminLoginPage from './AppAdminLoginPage'
import AppNavbar from './Header/AppNavbar';
import AppBreadCrumbs from './Header/AppBreadcrumbs'
import AppFooter from './Footer/AppFooter';
import './AppPages.css';
import ErrorPage from './ErrorPage/ErrorPage';

class AppPages extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    pricing = {}
    componentWillMount() {

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