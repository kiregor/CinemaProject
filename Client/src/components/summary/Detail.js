import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Detail extends Component {

    render() {
        const detail = this.props.detail;
        return (
            <div className='Detail'>
                 <div className='container'>
                    <Table>
                        <tbody>
                        <tr>
                            <td>{detail.location}</td>
                            <td>{detail.ticketType}</td>
                            <td>{detail.price}</td>
                        </tr>      
                        </tbody>
                    </Table>
                 </div>
                
            </div>
        )
    }
}

export default Detail