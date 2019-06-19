import React, { Component } from 'react';

class UserTickets extends Component {

    render() {
        const ticket = this.props.ticket;
        console.log("in user tickets");
        console.log(ticket);
        return (
            <div>
             
                {ticket.location}
                {ticket.ticketType}
                {ticket.price}
               
            </div>
        )
    }
}

export default UserTickets