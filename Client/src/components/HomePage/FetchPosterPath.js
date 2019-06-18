import React, { Component }from 'react';
import AppCarousel from './AppCarousel';

const FetchPosterPath = (props) => {
    return (
        <AppCarousel image={props.movieId.backdrop_path} title={props.movieId.title}/>
    )
}

export default FetchPosterPath