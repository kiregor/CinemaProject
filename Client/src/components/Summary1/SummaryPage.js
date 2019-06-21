import React, { Component } from 'react';
import Detail from './Detail';
import { Table } from 'reactstrap';


class SummaryPage extends Component {
    render() {
        const details = this.props.seatInfo;
        return (
            <div className='SummaryPage'>
                <div className='container'>
                    <h1>Summary</h1><br/>
                    <h4>Tickets</h4>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Ticket Type</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.booking.tickets.map((detail,index) => <Detail key={index} detail={detail}/>)}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default SummaryPage;