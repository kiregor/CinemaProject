import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import MoviePoster from './ApiMoviePoster';
import ApiKey from '../../config.config';


//PATH FOR MOVE POSTER: http://tmdb.org/t/p/<SIZE>/<POSTER_PATH>;
//SIZE: W92, W154, W185, W342, W500, W700;

class ApiFetchMoviePoster extends Component{

    constructor(props){
        super(props);

    {/*}    var today = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        console.log(today); 
    */}
        this.state= {
            timestamp: new Date().getTime(),
            movies: [],
            isLoaded: false
        }

    this.Api=ApiKey
    }

    render() {
        var { isLoaded} = this.state;
        if (!isLoaded) {
            return <div>{encodeURI(this.props.title)}<Spinner/></div>
        }
        else {
            return(
                <div className="ApiFetchPoster">
                    <MoviePoster movies={this.state.movies} poster_path={this.state.movies[0][0].poster_path}/>
                   
                    
                </div>
                
            );
        }
    }

//${this.props.movietitle}
// fix api config

componentDidMount = (e) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=3e9a89831a2e61d47f06983917822671&language=en-US&query=${encodeURI(this.props.title)}&page=1`)
        .then(data => data.json())
        .then(data => {
            console.log(data.results);
            this.setState({ 
                movies: [data.results],
                isLoaded: true
            })
        })
    }
}
export default ApiFetchMoviePoster;