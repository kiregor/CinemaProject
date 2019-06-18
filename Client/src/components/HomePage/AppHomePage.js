import React, { Component } from 'react';
import FetchMovieId from './FetchMovieId';
//import Carousel from './AppCarousel';


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