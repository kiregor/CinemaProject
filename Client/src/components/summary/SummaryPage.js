import React, { Component } from 'react';
import Summary from './Summary';


class SummaryPage extends Component {
    
    details = this.props.seatInfo;
    render() {
        return (
            <div className='SummaryPage'>
                 <div className='container'>
                    <Summary details={this.details}/>
                 </div>
                
            </div>
        )
    }
}

export default SummaryPage;