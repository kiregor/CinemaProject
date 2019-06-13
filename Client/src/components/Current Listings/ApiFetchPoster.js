import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MoviePoster from './ApiMoviePoster';
import {API_KEY} from '../../Constants';
import Pagination from './AppPagination';

//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiFetchPoster extends Component{
    constructor(props){
        super(props);
        this.state= {
            movies: [],
            isLoaded: false,
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
                movies: [...data.results],
                isLoaded: true,
            })
        })
    }

    nextPage=(pageNumber)=> {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
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
        else {
            return(
                <div className="ApiFetchPoster">
                    <MoviePoster movies={this.state.movies}/>
                    <Pagination pages={3} nextPage={this.nextPage} currentPage={this.state.currentPage}/>
                </div>
            );
        }
    }
}

export default ApiFetchPoster;