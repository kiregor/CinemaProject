import React, { Component } from 'react';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';

class AppSeatingPage extends Component {
    chart;
    constructor(props) {
        super(props)

        this.print = this.print.bind(this);
    }

    print() {
        let sc = document.getElementById('seating-chart');
        console.log(this.chart.selectedObjects);
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
                            onRenderStarted={createdChart => { this.chart = createdChart }}
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