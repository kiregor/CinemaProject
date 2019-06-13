import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import DateTabs from '../MoviePage/AppDateTabs';

const MoviePoster = (props) => {
   
    console.log(props.movies[0][0].poster_path)
    return(
        <Container>
            <Row>
                <Col>
                    <img src={`http://image.tmdb.org/t/p/w1280${props.movies[0][0].backdrop_path}`} style={{width:"100%", height:"100%"}}/>
                </Col> 
            </Row>
            <Row>
                <Col>
                    <div style={{fontSize: 35}}>{props.movies[0][0].title}</div>
                </Col>
            </Row>
            <Row>                 
                <Col>
                    <div style={{fontSize: 22}}>Release Date: {props.movies[0][0].release_date}</div>
                    <br/>
                    <div style={{fontSize: 18}}>{props.movies[0][0].vote_average}/10</div>
                    <br/>
                    <div style={{fontSize: 18}}>{props.movies[0][0].overview}</div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 7, order: 2, offset: 5 }}>
                    Add line break here
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 7, order: 2, offset: 2 }}>
                    <DateTabs/>
                </Col>
            </Row>
        </Container>
    )
}

export default MoviePoster;
