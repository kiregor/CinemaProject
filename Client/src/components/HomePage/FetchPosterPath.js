import React, { Component }from 'react';
import AppCarousel from './AppCarousel';

class FetchPosterPath extends React.Component {
    
    componentDidMount = (e) => {
        console.log(this.props.movieId[0])
        fetch(`https://api.themoviedb.org/3/movie/${this.props.movieId[0]}?api_key=3e9a89831a2e61d47f06983917822671&language=en-US`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ 
                    movie: [data.results],
                    isLoaded: true,
            })
        })
    }

    render(){
        return (
            <>
            <div className="AppHomePage" >
                <AppCarousel/>
            </div>
            </>
        );
    }

}

export default FetchPosterPath