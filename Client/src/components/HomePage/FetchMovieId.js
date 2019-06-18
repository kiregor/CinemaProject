import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import FetchPosterPath from './FetchPosterPath';

class FetchMovieId extends Component{
    constructor(props){
        super(props);
        this.state= {
            movieId: [],
            isLoaded: false,
        }
    }

    componentDidMount = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&page=1&region=gb`)
        .then(data => data.json())
        .then(data => {
                this.setState({ 
                    movieId: [...data.results],
                    isLoaded: true,
                })
            
        })
    }
        
    render() {
        console.log(this.state.movieId)
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div ><Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <FetchPosterPath movieId={this.state.movieId}/>
                </div>
            );
        }
    }
}

export default FetchMovieId;