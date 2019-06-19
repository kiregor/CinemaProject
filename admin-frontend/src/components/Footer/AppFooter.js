import React, { Component } from 'react';
import './AppFooter.css';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from 'reactstrap';


class AppFooter extends Component {
    render() {
        return(
    <footer className="site-footer">
            <Row className="footerRow">
                <Col sm="6" xs="12">
                    <ul className="footer-links">
                        <h6>Quick Links</h6>
                        <li><a href="/about-us/">About Us </a></li>
                        <li><a href="/contact-us/">Contact Us </a></li>
                        <li><a href="https://bbfc.co.uk/">Classifications</a></li>
                    </ul>
                </Col>

                <Col sm="6" xs="12" className="icons">
                    <ul className="social-icons"> 
                        <li><a className="facebook" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a className="twitter" href="https://twitter.com/cinema_fs"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li> 
                        <li><a className="instagram" href="https://www.instagram.com/fs.cinema/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li> 
                        <li><a className="envelope" href="/contact-us"><FontAwesomeIcon icon="envelope" /></a></li>
                        <li><a className="phone" href="/contact-us"><FontAwesomeIcon icon="phone" /></a></li>  
                    </ul>
                </Col>

            </Row>
    </footer>
        );
    }
}

export default AppFooter;