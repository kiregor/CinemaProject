import React, { Component } from 'react';

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
        return ( 
            <>   
           {this.state.data}
           </>
        )
    }
}

export default UserBooking