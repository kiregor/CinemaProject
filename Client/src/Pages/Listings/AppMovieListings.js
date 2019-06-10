import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col,
 CardSubtitle} from 'reactstrap';
 import './AppMovieListings.css';

const AppMovieListings = (props) => {
  return (
    <container>
    <Row>
    <Col sm="5">
      <Card style={{width:"60%", height:"0%"}}>
        <CardImg top width="50%" src="https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Card image cap" />
        <Card Body>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Card>
      </Col>
      <Col sm="5">
      <Card style={{width:"60%", height:"0%"}}>
        <CardImg top width="50%" src="https://m.media-amazon.com/images/M/MV5BNmExNGZmYzItZTMzMi00YWJjLWJkYmQtMDg5MjgzYjYyZDk1XkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Card image cap" />
        <Card Body>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Card>
      </Col>
      </Row>
      <Row>
      <Col sm="5">
      <Card style={{width:"60%", height:"0%"}}>
        <CardImg top width="50%" src="https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Card image cap" />
        <Card Body>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Card>
      </Col>
      <Col sm="5">
      <Card style={{width:"60%", height:"0%"}}>
        <CardImg top width="50%" src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="Card image cap" />
        <Card Body>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
      </Card>
    </Col>
</Row>
</container>
  );
};

export default AppMovieListings;