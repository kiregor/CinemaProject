import React from 'react';
import MovieDisplay from './ApiMovieDisplay';

const MovieFetch = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <MovieFetch key={i} image={movie.poster_path} title={movie.title} overview={movie.overview} id={movie.id}/>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}
export default MovieFetch;