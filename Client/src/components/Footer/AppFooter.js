import React, { Component } from 'react';
import './AppFooter.css';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AppFooter extends Component {
    render() {
        return(
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                        <li><a href="/contact-us/">Contact Us</a></li><br/>
                        <li><a href="https://bbfc.co.uk/">Classifications</a></li>
                    </ul>
                </div>
                <div className="icons">
                    <ul className="social-icons"> 
                        <li><a className="facebook" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a className="twitter" href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li> 
                        <li><a className="envelope" href="#"><FontAwesomeIcon icon={['fas', 'envelope']} /></a></li> 
                    </ul>
                </div>
            </div>
        </div>
    </footer>
        );
    }
}

export default AppFooter;