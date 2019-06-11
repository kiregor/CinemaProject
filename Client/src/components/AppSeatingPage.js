import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import BookingService from '../services/BookingService';

class AppSeatingPage extends Component {
    chart;
    bookedSeats = [];
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

        this.bookSeats = this.bookSeats.bind(this);
    }

    componentDidMount() {
        BookingService.getPricingInformation()
            .then(response => {
                this.setState({ pricing: response.data })
                this.setState({ pageLoaded: true});
            })
            .catch(error => {
                console.log(error);
            })
    }

    /**
     * Book the specified seats by storing them in the sessionStorage and move to the payments
     * page.
     */
    bookSeats() {
        let sc = document.getElementById('seating-chart');
        //console.log(this.chart.selectedObjects[0]);
        this.chart.listSelectedObjects((listOfObjects) => {
            listOfObjects.map((object) => {
                let location = object.label;
                let ticketType = object.selectedTicketType;
                let price =
                    object.pricing.ticketTypes.filter(obj => obj.ticketType === ticketType)
                        .map((obj) => obj.price)[0];
                console.log(ticketType, price);
                this.bookedSeats.push({ location, ticketType, price });
                // Make sure the list of pricing objects is exported once the list 
                // is exhausted
                if (listOfObjects.indexOf(object) === listOfObjects.length - 1) {
                   BookingService.storeSeatingInformation(this.bookedSeats);
                   // Go to the payment page
                }
            })
        });
    }
    render() {
        return (
            <div className='AppSeatingPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs'>
                            <h3>Specify the number of seats: </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <SeatsioSeatingChart
                                publicKey='d2967a3f-f10b-48e3-8b3c-424d2169759d'
                                event='33cdea62-50da-4fa7-a835-c09009a9a99b'
                                id='seating-chart'
                                onRenderStarted={createdChart => this.chart = createdChart}
                                pricing={[{
                                    'category': 1, 'ticketTypes': [
                                        { 'ticketType': 'adult', 'price': this.state.pricing.adultPrice },
                                        { 'ticketType': 'child', 'price': this.state.pricing.childPrice },
                                        { 'ticketType': 'concessions', 'price': this.state.pricing.concessionsPrice }
                                    ]
                                },
                                {
                                    'category': 2, 'ticketTypes': [
                                        { 'ticketType': 'adult', 'price': this.state.pricing.adultPrice },
                                        { 'ticketType': 'child', 'price': this.state.pricing.childPrice },
                                        { 'ticketType': 'concessions', 'price': this.state.pricing.concessionsPrice }
                                    ]
                                }]}
                                priceFormatter={price => '£' + price}
                                holdOnSelect={true}
                                regenerateHoldToken={true}
                                showLegend={true}
                                maxSelectedObjects={5}
                                showRowLabels={true}
                                selectedObjectsInputName={'selectedSeats'}
                            />
                        </div>
                    </div>
                    {this.state.pageLoaded && <div className='row'>
                        <div id='book-now' className='col-12'>
                            <Button onClick={this.bookSeats} color='success' size='lg' block>Book Now</Button>
                        </div>
                    </div>}
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