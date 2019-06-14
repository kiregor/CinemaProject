<<<<<<< HEAD
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

=======
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

>>>>>>> 7e499fc72864dce7954e504041721709881b54be
export default AppHomePage;