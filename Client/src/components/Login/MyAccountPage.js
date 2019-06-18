import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import LoginService from '../../services/LoginService';
import AppHomePage from '../HomePage/AppHomePage';
import AppLogin from '../Header/AppLogin';

class MyAccountPage extends Component {
    //if not logged in show login/sign up
    //else if logged in do a request for their tickets
    
    constructor(props) {
        super(props);
        this.getTickets = LoginService.getTickets();
        this.loggedIn = LoginService.hasLoggedIn();
    }

    render() {
        if(!this.loggedIn){
            return (
                <div className='NotLoggedIn'>
                <Container>
                    <h4>You are not logged in. Please press this button to login.</h4>
                    <AppLogin/>
                </Container>
            </div>
            )
        }
        return (
            <div className='MyAccountPage'>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    componentDidMount () {

    }
}

export default MyAccountPage;