import React from 'react';
//import Movie from './Movie';
import Movie from './AppMoviePoster/AppMoviePoster1';

const MoviePoster = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie key={i} image={movie.poster_path} title={movie.title} overview={movie.overview} release={movie.release_date}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MoviePoster;
