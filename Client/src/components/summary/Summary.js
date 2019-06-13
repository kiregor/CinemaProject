import React, { Component } from 'react';
import Detail from './Detail';
import { Button } from 'reactstrap';

class Summary extends Component {

    render() {
        const details = this.props.details
        return (
            <div className='SummaryPage'>
                <div className='container'>
                    <h1>Booking Details</h1><br/>
                    <h3>Tickets</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Ticket Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                    </table>
                    {details.booking.tickets.map((detail,index) => <Detail key={index} detail={detail}/>)}
                    <br/><br/><Button >Confirm</Button>
                </div>
                
            </div>
        )
    }
}

export default Summary