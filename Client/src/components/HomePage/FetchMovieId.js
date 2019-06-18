import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import FetchPosterPath from './FetchPosterPath';
import Carousel from './AppCarousel';
import Carousel2 from './AppCarousel2';

class FetchMovieId extends Component{
    constructor(props){
        super(props);
        this.state= {
            movie: [],
            movieFuture: [],
            isLoaded: false,
        }
    }
//USE LOCALHOST:8080 FOR THE FETCH
    componentDidMount = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&page=1&region=gb`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                movie: [...data.results],
                isLoaded: true,
            })
        })

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&page=1&region=gb`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            this.setState({ 
                movieFuture: [...data.results],
                isLoaded: true,
            })
        })
    }
        
    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else {
            return(
                <div>
                    <Carousel/>
                    <Carousel2 movies={this.state.movie} />
                </div>
            );
        }
    }
}

export default FetchMovieId;