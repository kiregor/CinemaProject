import React, { Component } from 'react';
import './AppFooter.css';
import './fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from 'reactstrap';


class AppFooter extends Component {
    render() {
        return(
    <footer className="site-footer">
        <Container>
            <Row>
                <Col md="4" sm="6" xs="12">
                    <ul className="footer-links">
                    <h6>Quick Links</h6>
                        <Row>
                        <li><a href="/about-us/">About Us </a></li><br/>
                        <li style={{paddingLeft:10}}><a href="/contact-us/">Contact Us </a></li><br/>
                        <li style={{paddingLeft:10}}><a href="https://bbfc.co.uk/">Classifications</a></li>
                        </Row>
                    </ul>
                </Col>
                <Col>
                <div className="icons">
                    <ul className="social-icons"> 
                        <li><a className="facebook" href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                        <li><a className="twitter" href="https://twitter.com/cinema_fs"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li> 
                        <li><a className="instagram" href="https://www.instagram.com/fs.cinema/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li> 
                        <li><a className="envelope" href="/contact-us"><FontAwesomeIcon icon="envelope" /></a></li> 
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>
    </footer>
        );
    }
}

export default AppFooter;