import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import {API_KEY} from '../../Constants';
import MovieFetch from './ApiMovieFetch'

//{this.props.match.params.movietitle}
//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiFetchMovie extends Component{
    constructor(props){
    super(props);
    this.state= {
        movies: [],
        movieID: [],
        isLoaded: false
    }
    this.Api=API_KEY
    }

    /* HIDE API KEY + RETREIVE SEARCH QUERY FROM URL*/
    componentWillMount = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.Api}&language=en-US&query=${this.props.match.params.movietitle}&page=1&include_adult=false`)
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            this.setState({ 
                movies: [data.results[0]],
                movieID: data.results[0].id,
                isLoaded: true
            
            })
            console.log(this.state.movieID);
        })
    }

    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <MovieFetch movies={this.state.movies} movieID={this.state.movieID}/>
                </div>
            );
        }
    }

}
export default ApiFetchMovie;