import React from 'react';
import './poster.css'

const Movie = (props) => {
    return (
        <div className="col l3">
                <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            {
                            <img src={`http://image.tmdb.org/t/p/w500${props.image}`} alt="Movie Poster" style={{width:"100%", height: 300}}/>
                            }
                        </div>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4" style={{height: 80, fontSize: 17}}>{props.title}<i className="material-icons right"></i></span>
                        <p><a href={`/FutureListings/${props.title}`}>More Information</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Release Date: {props.release}<i className="material-icons right"></i></span>
                        <p>{props.overview}}</p>
                    </div>
                </div>
        </div>
    )   
}

export default Movie;