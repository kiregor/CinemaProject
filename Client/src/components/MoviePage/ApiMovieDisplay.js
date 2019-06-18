import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import DateTabs from './AppDateTabs';
import './poster.css'
import bgColors from '../../Constants';

// BASE URL FOR POSTER -->  http://image.tmdb.org/t/p/w500$
// BASE URL FOR YOUTUBE VIDEO --> https://www.youtube.com/watch/?v=


const styles = {
  header: {
  },
  well: {
    boxShadow: `10px 10px 10px ${bgColors.Mist}`,
    padding:0
  },
};

const styles2 = {
  header: {
  },
  well: {
    boxShadow: `0px 3px 0px 0px ${bgColors.Autumn}`,
    padding:0
  },
};


const MovieDisplay = (props) => {
    return (
        
        <Container>
            <Row>
                <Col style ={styles.well}>
                <img style ={styles.well} src={`http://image.tmdb.org/t/p/w1280${props.image}`} alt="Movie Poster" style={{width:"100%", height:"100%"}} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div  style={{fontSize: 35}}>{props.title}</div>
                </Col>                
            </Row>
            <Row>
                <Col>
                <   div style={{fontSize: 22}}> <a style={{color: bgColors.Shadow}} >Release Date : {props.releasedate} </a></div>
                    <br/>
                    <div style={{fontSize: 18}}> <a style={{color: bgColors.Autumn}}> Rating : {props.rating}/10 </a></div>
                    <br/>
                   
                </Col>

                <Col >
                 <div style ={styles.header} style={{fontSize: 18}}> <a style={{color: bgColors.Shadow}}> {props.overview} </a></div>
                </Col>    

            </Row>
             <Row>
                <Col style ={styles2.well} >
                    <div style ={styles2.header}style={{fontSize: 35}}><a style={{color: bgColors.Shadow}}> Upcoming Showings </a></div>
                </Col>                
            </Row>
            <Row>
                <Col  sm={{ size: 7, order: 2, offset: 0 }}>
                    <DateTabs/>
                </Col>
                
            </Row>
        </Container>
    )   
}
export default MovieDisplay;