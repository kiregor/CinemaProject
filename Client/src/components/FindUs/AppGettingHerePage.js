import React, { Component } from 'react';

import AppFindUsMap from './AppFindUsMap';
import '../ContactUs/AppContactUsPage.css';

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
                                <h2> Nearby Transit</h2>
                                <ul>
                                    <li className="transportation"><div className="transportation-description">Tower Hill and Tower Gateway </div>
                                    </li>
                                    <li className="transportation"><div className="transportation-description">Tower Bridge Road, Tower Hill</div>
                                    </li>
                                </ul>
                                 <h2> Parking</h2>
                                <ul>
                                    <li className="transportation"><div className="transportation-description">St. Katharine's Way, E1W 1LD </div>
                                    </li>
                                    <li className="transportation"><div className="transportation-description">Open 24 hours</div>
                                    </li>
                                    <li className="transportation"><div className="transportation-description">Phone: 0800 330 8005</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <AppFindUsMap/>
                </div>
            </div>
        );
    }
}
export default AppGettingHerePage;