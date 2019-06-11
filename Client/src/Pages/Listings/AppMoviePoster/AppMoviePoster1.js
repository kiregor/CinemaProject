import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col,
CardSubtitle} from 'reactstrap';

const Movie = (props) => {
    return (
            <Row>
                <Col sm="5">
                    <Card style={{width:"100%", height:"0%"}}>
                        <CardImg top width="50%" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Movie Poster" />
                        <Card body>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>{props.release}</CardSubtitle>
                        <CardText>{props.overview}</CardText>
                        <Button>Book Now</Button>
                        </Card>
                    </Card>
                </Col>
            </Row>
    )   
}

export default Movie;