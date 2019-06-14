import React, { Component } from 'react';
//import Carousel from './AppCarousel';
import FetchMovieId from './FetchMovieId';

class AppHomePage extends Component {

    render() {
        return (
            <>
            <div className="AppHomePage" >
                <FetchMovieId/>
            </div>
            </>
        );
    }
}

export default AppHomePage;