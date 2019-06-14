import React, { Component } from 'react';
import SummaryPage from './SummaryPage';
import SessionStorageService from '../../services/SessionStorageService';
import { Alert } from 'reactstrap';

let seatInfo = SessionStorageService.getObject('bookedSeats');

class BookingSuccessPage extends Component {
    
    render() {
        return (
            <div className='BookingSuccessPage'>
                 <div className='container'>
                     <Alert color="success">
                        <h1>Transaction Successful</h1>
                        Your account has been charged successfully!
                            Enjoy your movie!
                    </Alert>
                    <SummaryPage seatInfo={seatInfo}/>
                 </div>
            </div>
        )
    }
}
export default BookingSuccessPage