import React, { Component } from 'react';


class AppFindUsMap extends Component {

    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <>
            {  }
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 heading'>
                            <h1>Find Us</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe className='map' src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=51.5075175,-0.0743509&amp;q=International%20House%201%20St%20Katharine's%20Way+(QA%20Cinemas)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        <a href="https://www.maps.ie/map-my-route/">Map a route</a>
                    </iframe>
                    <br />
                </div>
            </>
        );
    }
}

export default AppFindUsMap;