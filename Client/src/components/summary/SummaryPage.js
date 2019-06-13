import React, { Component } from 'react';
import Summary from './Summary';
const details =   {
    "booking": {
        "tickets": [
            {
                "location": "B-3",
                "ticketType": "Adult",
                "price": 15
            },
            {
              "location": "B-4",
              "ticketType": "Child",
              "price": 10
          },
          {
            "location": "B-5",
            "ticketType": "Child",
            "price": 10
        }
        ]
    },
    "token": "NULL"
 }

class SummaryPage extends Component {
    //this.seatInfo = window.sessionStorage.getItem('bookedSeats');

    render() {
        return (
            <div className='SummaryPage'>
                 <div className='container'>
                    <Summary details={details}/>
                 </div>
                
            </div>
        )
    }
}

export default SummaryPage;