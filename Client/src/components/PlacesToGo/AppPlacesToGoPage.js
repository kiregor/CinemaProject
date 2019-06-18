import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';


var bgColors = { "Mist": "#90afc5",
                    "Stone": "#336b87",
                    "Shadow": "#2a3132",
                    "Autumn": "#763626",
};

const styles = {
  header: {
  },
  well: {
    boxShadow: `10px 10px 10px ${bgColors.Mist}`,
    padding:10
  },
};

const AppPlacesToGoPage = (props) => {
    return (
        
        <Container>

            <Row >     
                <Col>
                <center style ={styles.well}>                      
                
                    <div> <img style ={styles.well} alt="" style={{width:300, height:200}} src="https://media-cdn.tripadvisor.com/media/photo-s/0d/89/d3/bf/starbucks-tower-hill.jpg"/></div>
                    <div   style={ {fontSize: 35}}> <p style={{color:bgColors.Autumn}}> Starbucks Coffee</p></div>
                    <div  style={{fontSize: 15}}>Seattle-based coffeehouse chain known for its <br></br>
                     signature roasts and light bites.</div>
                     <br/><br/><br/>
                    <div  style={{fontSize: 15}}>07:00 to 20:00 Monday to Friday  <br></br>
                        07:30 to 20:00 on Satudays and Sundays</div>
                     <br/>
                    <div  style={{fontSize: 15}}>Phone: 020 7481 2575 </div> 
                    <br></br>
                    <div  style={{fontSize: 15}}> <button><a href="https://www.starbucks.co.uk/store-locator/store/2859/tower-place-east-lower-thames-st-3-tower-place-london-eng-ec-3-r-5-bt-gb"> More Information </a> </button> </div> 
                   </center>
                </Col> 
                                     
                                 
                <Col >
                 <center style ={styles.well}> 
                <img src={`https://cdn.ticketsource.co.uk/images/promoter/banner/18148-1537020387335.jpg`} alt="Movie Poster" style={{width:300, height:200}} />
                    <div   style={ {fontSize: 35}}> <p style={{color:bgColors.Autumn}}> Tower of London</p></div>
                    <div  style={{fontSize: 15}}>Explore 1000 years of history at London’s <br></br>
                     iconic castle and World Heritage Site</div>                    
                     <br/><br/><br/>
                    <div  style={{fontSize: 15}}>Tuesday to Saturday:  09:00 to 17:30   <br/>
                        10:00 to 17:30 Sunday to Monday.</div>
                     <br/>
                    <div  style={{fontSize: 15}}>Phone: 020 3302 2380</div> 
                    <br/>
                    <div  style={{fontSize: 15}}> <button> <a href="http://tower-of-london.tickets-london.co.uk/?gclid=EAIaIQobChMIrbr6z7vz4gIVQ4fVCh27igKrEAAYASAAEgLyLvD_BwE&utm_expid=74432767-10.sPSYy8sLRUmOV5leHGBKYQ.0&utm_referrer=https%3A%2F%2Fwww.google.co.uk%2F"> More Information </a> </button> </div> 
                     
                 </center>
                </Col>    

                 <Col >
                  <center style ={styles.well}> 
                    <img src={`https://wishurhere.files.wordpress.com/2013/04/zizzi-restaurant-1.jpg`} alt="Movie Poster" style={{width:300, height:200}} />
                    <div   style={ {fontSize: 35}}> <p style={{color:bgColors.Autumn}}> Zizzi Restaurant</p></div>
                    <div  style={{fontSize: 15}}>Zizzi St Katharine Docks offers a fine range of <br></br>
                     contemporary Italian cuisine in a setting that <br></br>
                      boasts amazing views of the docks from the al <br></br>
                       fresco dining area.</div>
                     <br></br>
                    <div  style={{fontSize: 15}}>12:00 to 23:00 Monday to Saturday  <br></br>
                        12:00 to 22:30 on Sunday.</div>
                     <br/>
                    <div  style={{fontSize: 15}}>Phone: 020 3302 2380</div> 
                    <br/>
                    <div  style={{fontSize: 15}}> <button><a href="https://www.zizzi.co.uk/italian/restaurants/st-katherines-dock/tower-bridge"> More Information </a> </button> </div> 
                        </center>           
                 
                </Col>
                
                        
           </Row>    
            




          
        </Container>
    )   
}

export default AppPlacesToGoPage;