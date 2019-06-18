import React from 'react';
import AppCarousel from './AppCarousel';
//import AppCarousel2 from './AppCarousel2';

const FetchPosterPath = (props) => {
    return (
        <AppCarousel image={props.movieId.backdrop_path} title={props.movieId.title}/>   
    )
}

export default FetchPosterPath;