import React, { Component } from 'react';

class Detail extends Component {

    render() {
        const detail = this.props.detail;
        return (
            <tr className='Detail'>
                <td>{detail.location}</td>
                <td>{detail.ticketType}</td>
                <td>{'£' + detail.price}</td>
            </tr>      
        )
    }
}

export default Detail