import React, { Component } from 'react';

import AppFindUsMap from './AppFindUsMap';
import '../contactus/AppContactUsPage.css';

class AppGettingHerePage extends Component {
    render() {
        return (
            <div>
                <div className='AppGettingHerePage'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-12 heading">
                                <h1>Location</h1>
                                <address class="building-address">
                                    1 St. Katharine's Way<br />London E1W 1UN
                                </address>
                                <h2> Nearby transit</h2>
                                <ul>
                                    <li className="transportation"><div className="transportation-description">Tower Hill and Tower Gateway </div>
                                    </li>
                                    <li className="transportation"><div className="transportation-description">Tower Bridge Road, Tower Hill</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <AppFindUsMap/>
                </div>
            </div>
        )
    };
}

export default AppGettingHerePage;