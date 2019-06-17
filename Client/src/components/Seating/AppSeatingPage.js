import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import SessionStorageService from '../../services/SessionStorageService';

class AppSeatingPage extends Component {
    chart;
    bookedSeats = [];
    data = {};
<<<<<<< HEAD
    eventKey;
=======
>>>>>>> origin/development-branch
    constructor(props) {
        super(props)
        this.state = {
            pricing: {
                adultPrice: '',
                childPrice: '',
                concessionsPrice: '',
            },
            pageLoaded: false
        }
        // Get pricing data from the session
        this.data = SessionStorageService.getObject('pricing');
        // Convert data from string to number
<<<<<<< HEAD
        for(let prop in this.data) this.data[prop] = +this.data[prop]

        this.eventKey = '33cdea62-50da-4fa7-a835-c09009a9a99b';
=======
        for (let prop in this.data) this.data[prop] = +this.data[prop]
>>>>>>> origin/development-branch

        SessionStorageService.clearObject();
        this.bookSeats = this.bookSeats.bind(this);
        this.clearTickets = this.clearTickets.bind(this);
    }

    componentDidMount() {
<<<<<<< HEAD
       
=======

>>>>>>> origin/development-branch
    }

    /**
     * Book the specified seats by storing them in the sessionStorage and move to the payments
     * page.
     */
    bookSeats() {
        this.chart.listSelectedObjects((listOfObjects) => {
<<<<<<< HEAD
=======
            if (listOfObjects.length === 0) {
                window.confirm('Please select 1 or more seats');
                return;
            }
>>>>>>> origin/development-branch
            listOfObjects.forEach((object) => {
                let location = object.label;
                let ticketType = object.selectedTicketType;
                let price =
                    object.pricing.ticketTypes.filter(obj => obj.ticketType === ticketType)
                        .map((obj) => obj.price)[0];
                this.bookedSeats.push({ location, ticketType, price });
                // Make sure the list of pricing objects is exported once the list 
                // is exhausted
                if (listOfObjects.indexOf(object) === listOfObjects.length - 1) {
                   SessionStorageService.setObject('bookedSeats', {"booking":{"tickets":this.bookedSeats},"token":null, "holdToken":this.chart.holdToken, "eventToken":this.eventKey});
                   console.log(SessionStorageService.getObject('bookedSeats'));
                   // Go to the payment page
                   window.location.assign("/paymentpage");
                }
            })
        });
    }
    clearTickets(e) {
        SessionStorageService.clearObject('bookedSeats');
    }
    chartAdded(newChart) {
        this.chart = newChart;
    }
    render() {
        return (
            <div className='AppSeatingPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3>Specify the number of seats: </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <SeatsioSeatingChart
                                publicKey='d2967a3f-f10b-48e3-8b3c-424d2169759d'
                                event={this.eventKey}
                                id='seating-chart'
                                onRenderStarted={createdChart => this.chart = createdChart}
                                pricing={[{
                                    'category': 1, 'ticketTypes': [
                                        { 'ticketType': 'adult', 'price': this.data.adultPrice },
                                        { 'ticketType': 'child', 'price': this.data.childPrice },
                                        { 'ticketType': 'concessions', 'price': this.data.concessionsPrice }
                                    ]
                                },
                                {
                                    'category': 2, 'ticketTypes': [
                                        { 'ticketType': 'adult', 'price': this.data.adultPrice },
                                        { 'ticketType': 'child', 'price': this.data.childPrice },
                                        { 'ticketType': 'concessions', 'price': this.data.concessionsPrice }
                                    ]
                                }]}
                                priceFormatter={price => '£' + price}
                                holdOnSelect={true}
                                regenerateHoldToken={true}
                                showLegend={true}
                                maxSelectedObjects={5}
                                showRowLabels={true}
                                selectedObjectsInputName={'selectedSeats'}
                                onHoldTokenExpired={this.clearTickets}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div id='book-now' className='col-12'>
                            <Button onClick={this.bookSeats} color='success' size='lg' block>Book Now</Button>
                        </div>
                    </div>
                    <div id='seats-info' className='row'>
                        <div className='col-12'>
                            <h1>QA Cinema 2D<span className='inner-symbol'> &copy;</span> Screen</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <p>This theatre consists of 50 seats, the front row is allocated for disabled customers only.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppSeatingPage;