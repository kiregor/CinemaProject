import React, { Component } from 'react';
import Detail from './Detail';
import { Button, Table } from 'reactstrap';

class Summary extends Component {

    render() {
        const details = this.props.details
        return (
            <div className='SummaryPage'>
                <div className='container'>
                    <h1>Booking Details</h1><br/>
                    <h3>Tickets</h3>
                    <Table dark>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Ticket Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                    </Table>
                    {details.booking.tickets.map((detail,index) => <Detail key={index} detail={detail}/>)}
                    <br/><br/><Button color="primary" size="lg" block color="danger">Confirm</Button>
                </div>
                
            </div>
        )
    }
}

export default Summary