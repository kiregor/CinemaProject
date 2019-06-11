import React, { Component } from 'react';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import PricingService from '../services/PricingService';

class AppSeatingPage extends Component {
    chart;
    bookedSeats = [];
    constructor(props) {
        super(props)
        this.state = {
            pricing: {
                adultPrice: '',
                childPrice: '',
                concessionsPrice: ''
            }
        }
        
        this.print = this.print.bind(this);
    }

    componentDidMount() {
        PricingService.getPricingInformation()
        .then(response => {
            this.setState({pricing : response.data})
        })
        .catch(error => {
            console.log(error);
        })
    }

    print() {
        let sc = document.getElementById('seating-chart');
        //console.log(this.chart.selectedObjects[0]);
        this.chart.listSelectedObjects((listOfObjects) => {
            listOfObjects.map((object) => {
                let location = object.label;
                let ticketType = object.selectedTicketType;
                let price = 
                object.pricing.ticketTypes.filter(obj => obj.ticketType == ticketType)
                .map((obj) => obj.price)[0];
                console.log(ticketType, price);
                this.bookedSeats.push({ location, ticketType, price });
                console.log(this.bookedSeats);
            })
        });
       
    }
   

    render() {
        return (
            <div className='AppSeatingPage'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <SeatsioSeatingChart 
                            publicKey='d2967a3f-f10b-48e3-8b3c-424d2169759d'
                            event='33cdea62-50da-4fa7-a835-c09009a9a99b'
                            id='seating-chart'
                            onRenderStarted={createdChart => this.chart = createdChart }
                            pricing={[{ 'category': 1, 'ticketTypes' : [
                                { 'ticketType' : 'adult', 'price': this.state.pricing.adultPrice},
                                { 'ticketType' : 'child', 'price': this.state.pricing.childPrice},
                                { 'ticketType' : 'concessions', 'price': this.state.pricing.concessionsPrice}
                            ]},
                            { 'category': 2, 'ticketTypes' : [
                                { 'ticketType' : 'adult', 'price': this.state.pricing.adultPrice},
                                { 'ticketType' : 'child', 'price': this.state.pricing.childPrice},
                                { 'ticketType' : 'concessions', 'price': this.state.pricing.concessionsPrice}
                            ]}]}
                            priceFormatter={price => '£' + price}
                            holdOnSelect={true}
                            regenerateHoldToken={true}
                            showLegend={true}
                            maxSelectedObjects={5}
                            showRowLabels={true}
                            selectedObjectsInputName={'selectedSeats'}
                            />
                        </div>
                        <button onClick={this.print}></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppSeatingPage;