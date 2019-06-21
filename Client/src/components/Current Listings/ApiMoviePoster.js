import React from 'react';
import Movie from './ApiMovie2';

const ApiMoviePoster = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i, ageRating) => {
                            return (
                                <Movie key={i} image={movie.poster_path} title={movie.title} overview={movie.overview} id={movie.id} ageRating={ageRating} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ApiMoviePoster;
