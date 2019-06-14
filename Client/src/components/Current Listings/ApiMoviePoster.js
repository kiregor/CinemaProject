import React from 'react';
import Movie from './ApiMovie';

const bbfc = 'BBFC-symbol';

const MoviePoster = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i, ageIcon) => {
                            return (
                                <Movie key={i} image={movie.poster_path} title={movie.title} overview={movie.overview} id={movie.id} ageIcon={ageIcon.bbfc} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MoviePoster;
