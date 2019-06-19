import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MoviePoster from './ApiMoviePoster';
import {API_KEY} from '../../Constants';
import Pagination from './AppPagination';

//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

const ageR = 'label.age-declaration.rating.age-adds';

class ApiFetchPoster extends Component{
    constructor(props){
        super(props);
        this.state= {
            moviesNow: [],
            moviesFuture: [],
            isLoaded: false,
            ageRating: [],
            ageIcon: [],
            totalResults: 3,
            currentPage: 1
        }
    }

    componentDidMount = (e) => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ 
                moviesNow: [...data.results],
                isLoaded: true,
            })
        })
        
        fetch(`https://api.bbfc.co.uk:443/miracle/v1/features/match?title=aladin&apiKey=48396093FBEE2CD380257EE0007A7419`)
        .then(data2 => data2.json())
        .then(data2 => {
            console.log(data2);
            this.setState({
                ageRating: [data2.ageR],
            })
        })
    
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&page=1&region=gb`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({ 
                moviesFuture: [...data.results],
                isLoaded: true,
            })
        })
    }

    nextPage=(pageNumber)=> {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ 
                movies: [...data.results],
                isLoaded: true,
                currentPage: pageNumber
            })
        })
    }

    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else if(window.location.pathname==='/Listings') {
            return(
                <div className="ApiFetchPoster">
                    <MoviePoster movies={this.state.moviesNow} ageRating={this.state.ageRating}/>
                    <Pagination pages={3} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
                </div>
            );
        }
        else if(window.location.pathname==='/Future-Listings') {
            return(
                <div className="ApiFetchPoster">
                    <MoviePoster movies={this.state.moviesFuture} ageRating={this.state.ageRating}/>
                    <Pagination pages={3} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
                </div>
            );
        }

    }
}

export default ApiFetchPoster;