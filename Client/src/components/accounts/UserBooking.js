import React, { Component } from 'react';
import UserTickets from './UserTickets';

class UserBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        this.generateData = this.generateData.bind(this);
    }

    generateData(){
        const book = this.props.bookingOj;
        this.setState({data: book.tickets.map(ticket => <tr><td>{book.id}</td><td>{ticket.location}</td><td>{ticket.ticketType}</td><td>{ticket.price}</td></tr>)})
    }

    componentDidMount(){
      this.generateData();
    }

    render() {
        // const booking = this.props.bookingOj;
        // console.log("this is user booking")
        // console.log(booking.tickets[0].location)
        return ( 
            <>   
           {this.state.data}
           </>
        )
    }
}

export default UserBooking