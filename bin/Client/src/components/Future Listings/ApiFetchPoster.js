import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MoviePoster from './ApiMoviePoster';

//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiFetchPoster extends Component{

    constructor(props){
        super(props);
        this.state= {
            movies: [],
            isLoaded: false,
        }

    this.APIKEY=process.env.REACT_APP_APIKEY
    }

    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div><Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <MoviePoster movies={this.state.movies}/>
                </div>
                
            );
        }
    }

    //Change upcoming to 'now_playing' for movies currently playing 3e9a89831a2e61d47f06983917822671

    componentDidMount = (e) => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ 
                movies: [...data.results],
                isLoaded: true
            })
        })
    }

}


export default ApiFetchPoster;