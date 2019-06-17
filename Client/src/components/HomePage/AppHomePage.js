import React, { Component } from 'react';
import Carousel from './AppCarousel';
import AppSmallCarousel from './AppSmallCarousel';
//import FetchMovieId from './FetchMovieId';

class AppHomePage extends Component {

    render() {
        return (
            <>
            <div className="AppHomePage" >
                <Carousel/>
                <AppSmallCarousel/>
                {/*
                */}
            </div>
            </>
        );
    }
}

export default AppHomePage;