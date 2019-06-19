import React, { Component } from 'react';
import Detail from './Detail';
import { Table } from 'reactstrap';

class Summary extends Component {

    render() {
        const details = this.props.details
        return (
            <div className='SummaryPage'>
                <div className='container'>
                    <h1>Summary</h1><br/>
                    <h4>Tickets</h4>
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
                </div>

            </div>
        )
    }
}

export default Summary
