import React from 'react';
import './poster.css'
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import {Button} from 'reactstrap';
import bgColors from '../../Constants';

const Movie = (props) => {
    return (
        <div className="col s6 m4 l3">
            <div>
                <FlippingCard>
                    <FlippingCardBack>                       
                        <div style={{padding:20, textAlign:'center'}} >
                        <h3>{props.title}</h3>
                        <p style={{fontSize:13, textShadow:'1px 0px 0px'}}>{props.overview}</p>   
                         </div>
                        
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%"}}/>
                    </FlippingCardFront>
                    <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%", opacity:0.2}}/>
                </FlippingCard>
                <div>
                    <span>
                        <a href={`/Listings/${props.title}`}><Button style={{backgroundColor: bgColors.Stone}} block>Book Now</Button></a>{' '}
                    <br/>
                    <br/>
                    </span>
                </div>
            </div>
        </div>
    )   
}
export default Movie;
