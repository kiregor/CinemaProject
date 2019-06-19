import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import LoginService from '../../services/LoginService';
import AppLogin from '../Header/AppLogin';
import { Table } from 'reactstrap';
import UserBooking from './UserBooking';
import { Alert } from 'reactstrap';

class MyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.getTickets = LoginService.getTickets();
        this.loggedIn = LoginService.hasLoggedIn();
        this.state = {data: null};
    }


    componentDidMount(){
        console.log("in compenent did mount");
        this.getTickets.then(response => {
            this.setState({data: response.data.map((bookingOj,index) => <UserBooking key={index} bookingOj={bookingOj}/>)})
            console.log("Thisss");
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
       
        if(!this.loggedIn){
            return (
                <div className='NotLoggedIn'>
                <Container>
                    <Alert color="dark" isOpen={this.state.visible}>
                        You are not logged in. Please Log in.
                        <br/><br/><AppLogin/>
                    </Alert>
                    
                </Container>
            </div>
            )
        }
        return (
            <div className='MyAccountPage'>
            <Container>
            <h2>Current Bookings</h2><br/><br/>
                <Table dark hover>
                            <thead>
                                <tr>
                                    <th>Booking id</th>
                                    <th>Location</th>
                                    <th>Ticket Type</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.data}
                            </tbody>
                </Table>
            </Container>
            </div>
        )
    }
}

export default MyAccountPage;
