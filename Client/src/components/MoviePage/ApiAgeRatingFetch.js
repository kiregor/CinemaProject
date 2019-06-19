import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MovieFetch from './ApiMovieFetch';
import {API_KEY} from '../../Constants';

//{this.props.match.params.movietitle}
//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiAgeRating extends Component{
    constructor(props){
    super(props);
    this.state= {
        movies: this.props.movies,
        ageRating: null,
        movieID: this.props.movieID,
        isLoaded: false
    }
    this.Api=API_KEY
    }

    /* HIDE API KEY + RETREIVE SEARCH QUERY FROM URL*/
    componentWillMount = (e) => {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.movieID}/release_dates?api_key=${this.Api}`)
        .then(data => data.json())
        .then(data => {
        console.log(data);
        for (let i=0; i < data.results.length; i++){
            if (data.results[i].iso_3166_1 == 'GB'){
                this.setState({
                    ageRating : data.results[i].release_dates[0].certification,
                    isLoaded:true
                }) 
                if (this.state.ageRating == ''){
                    this.setState({ageRating:'NA'})
                }
            }
        this.setState({isLoaded:true})
        }   
        this.setState({isLoaded:true})  
        console.log(this.state.ageRating);
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
                    <MovieFetch movies={this.state.movies} ageRating={this.state.ageRating}/>
                </div>
            );
        }
    }

}
export default ApiAgeRating;