import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MovieFetch from './ApiMovieFetch';
import ApiKey from '../../config.config';

//{this.props.match.params.movietitle}
//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiFetchPoster extends Component{
    constructor(props){
        super(props);
        this.state= {
            movies: [],
            isLoaded: false,
        }
    this.Api=ApiKey
    }
    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <MovieFetch movies={this.state.movies}/>
                </div>
            );
        }
    }

    /* HIDE API KEY + RETREIVE SEARCH QUERY FROM URL*/
    componentDidMount = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&query=dark%20phoenix&page=1&include_adult=false`)
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