import React from 'react';
import Movie from './ApiMovie';

const MoviePoster = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">

                <Movie image={props.movies[0][0].poster_path} title={props.movies[0][0].title}/>
                </div>
            </div>
        </div>
    )
}

export default MoviePoster;
