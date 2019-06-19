import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import bgColors from '../../Constants';
import './screens.css';



const styles = {
    header: {
    },
    well: {
        boxShadow: `10px 10px 10px ${bgColors.Mist}`,
        padding: 10
    },
};

const AppScreensPage = (props) => {
    return (
        <>
        <div id='bg'>

        </div>
        <Container style={{}}>
            <Row>
                <Col >
                 <center style ={styles.well}>
                    <img class='image' src={window.location.origin + '/screens1.PNG'}   />
                    <br/><br/>
                    <div > 2D standard Screen</div><br/><br/>
                    <div> 100 seats</div><br/><br/>
                    <div> 250 m x 400 m </div><br/><br/>
                    <div> Our two-dimensional screen is equipped with the latest cinematographic technology. </div>
                </center>
                </Col>

                <Col >
                 <center style ={styles.well}>
                    <img class='image' src={window.location.origin + '/screens1.PNG'}/>
                    <br/><br/>
                    <div > 3D Screen </div><br/><br/>
                    <div> 250 seats</div><br/><br/>
                    <div> 500 m x 600 m </div><br/><br/>
                    <div> Enhance your cinema experience; watch your favorite movies on a three-dimensional screen.
                        </div>
                </center>
                </Col>

                <Col >
                 <center style ={styles.well}>
                    <img class='image' src={window.location.origin + '/screens1.PNG'}  />
                    <br/><br/>
                    <div > IMAX Screen</div><br/><br/>
                    <div> 500 seats</div><br/><br/>
                    <div> 800 m x 1000 m </div><br/><br/>
                    
                    <div> The ultimate bigger-than-big experience starts here! Try it out for yourself! </div>
                    
                </center>
                </Col>                
        
                
            </Row>



        </Container>

        </>
    )   
}

export default AppScreensPage;
