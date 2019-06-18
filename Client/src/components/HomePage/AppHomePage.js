import React, { Component } from 'react';
//import FetchMovieId from './FetchMovieId';
import Carousel from './AppCarousel';
import Carousel2 from './AppCarousel2';


class AppHomePage extends Component {

    render() {
        return (
            <>
            <div className="AppHomePage" >
                <Carousel/>
                <Carousel2/>

            </div>
            </>
        );
    }
}

export default AppHomePage;