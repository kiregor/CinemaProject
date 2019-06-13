import React from 'react';
import Movie from './ApiMovie';
import {Container, Row, Col} from 'reactstrap';

const MoviePoster = (props) => {
   
    console.log(props.movies[0][0].poster_path)
    return(
        <Container>
            <Row>
                <Col>
                <div className="col s12">
                    <i className="col s12 right"></i>
                    <img src={`http://image.tmdb.org/t/p/w500${props.movies[0][0].poster_path}`}/>
                </div>
                </Col> 
                <Col>
                    <div>
                    {props.movies[0][0].title}
                    </div>
                    <div>
                     <p>{props.movies[0][0].overview} </p> 
                    </div>
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
                </Col>
             </Row>
        </Container>
    )
}

export default MoviePoster;
