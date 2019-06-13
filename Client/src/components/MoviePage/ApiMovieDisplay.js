import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import DateTabs from './AppDateTabs';
import './poster.css'

// BASE URL FOR POSTER -->  http://image.tmdb.org/t/p/w500$
// BASE URL FOR YOUTUBE VIDEO --> https://www.youtube.com/watch/?v=

const MovieDisplay = (props) => {
    return (
        <Container>
            <Row>
                <Col xs='7'>
                <img src={`http://image.tmdb.org/t/p/w500${props.image}`} alt="Movie Poster" style={{width:"100%", height: 600}}/>
                </Col>
                <Col>
                    <div style={{fontSize: 60}}>{props.title}</div>
                    <br/>
                    <div style={{fontSize: 22}}>{props.overview}</div>
                </Col>
            </Row>
            <Row>
                <DateTabs/>
            </Row>
        </Container>
    )   
}
export default MovieDisplay;