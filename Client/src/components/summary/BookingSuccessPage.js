import React, { Component } from 'react';
import SummaryPage from './SummaryPage';
import SessionStorageService from '../../services/SessionStorageService';
import { Badge } from 'reactstrap';

let seatInfo = SessionStorageService.getObject('bookedSeats');

class BookingSuccessPage extends Component {
    
    render() {
        return (
            <div className='BookingSuccessPage'>
                 <div className='container'>
                    <h1><Badge color="success">Booking Successful</Badge></h1>
                    <h6><Badge color="secondary" >Enjoy your movie!</Badge></h6> <br/><br/>
                    <SummaryPage seatInfo={seatInfo}/>
                 </div>
            </div>
        )
    }
}
export default BookingSuccessPage