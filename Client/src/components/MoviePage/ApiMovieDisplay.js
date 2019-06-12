import React from 'react';
import './poster.css'

// BASE URL FOR POSTER -->  http://image.tmdb.org/t/p/w500$
const MovieDisplay = (props) => {
    return (
        <div>
            {props.id}
            <br></br>
            {props.title}
            <br></br>
            {props.image}
            <br></br>
            {props.overview}
        </div>
    )   
}
export default MovieDisplay;