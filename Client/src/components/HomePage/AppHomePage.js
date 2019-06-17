import React, { Component } from 'react';
import Carousel from './AppCarousel';
//import FetchMovieId from './FetchMovieId';

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