import React, { Component } from 'react';
import Carousel from './AppCarousel';


class AppHomePage extends Component {

    render() {
        return (
            <>
            <div className="AppHomePage" >
                <Carousel/>
            </div>
            </>
        );
    }
}

export default AppHomePage;