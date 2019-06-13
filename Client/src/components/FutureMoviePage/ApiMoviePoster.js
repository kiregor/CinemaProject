import React from 'react';
import Movie from './ApiMovie';

const MoviePoster = (props) => {
    return(
        <div className="container">
            <div className="row">

               

                <div className="col s12">
                    <i className="col s12 right"></i>
                    <Movie image={props.movies[0][0].poster_path} title={props.movies[0][0].title} />
                    
                    <p>{props.movies[0][0].overview} </p> 
                     

                    <div> 
                        <p><h4>Release Date: {props.movies[0][0].release_date}</h4> </p>    
                    </div>

                    <div> 
                        <p>Rating: {props.movies[0][0].vote_average} </p>    
                    </div>
                    <div> 
                        <p>PG Rating: {props.movies[0][0].adult} </p>    
                    </div>
                     <div> 
                        <p>Actors </p>    
                    </div>
                     <div> 
                        <p>Director </p>    
                    </div>

                </div>

             </div>
        </div>
    )
}

export default MoviePoster;
