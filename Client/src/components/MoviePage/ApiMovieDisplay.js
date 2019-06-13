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
                <Col>
                <img src={`http://image.tmdb.org/t/p/w1280${props.image}`} alt="Movie Poster" style={{width:"100%", height:"100%"}} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{fontSize: 35}}>{props.title}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                <   div style={{fontSize: 22}}>{props.releasedate}</div>
                    <br/>
                    <div style={{fontSize: 18}}>{props.rating}/10</div>
                    <br/>
                    <div style={{fontSize: 18}}>{props.overview}</div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 7, order: 2, offset: 0 }}>
                    <DateTabs/>
                </Col>
            </Row>
        </Container>
    )   
}
export default MovieDisplay;