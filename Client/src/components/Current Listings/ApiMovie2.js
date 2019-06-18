import React from 'react';
import './poster.css'
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import {Button} from 'reactstrap';


const Movie = (props) => {
    return (
        <div className="col s6 m4 l4">
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                        <p><h3>{props.title}</h3></p>
                        <p style={{fontSize:12}}><h6>{props.overview}</h6></p>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%"}}/>
                    </FlippingCardFront>
                </FlippingCard>
            </div>
            <div>
                <span style={{ contentAlign: "center" }}>
                    <a href={`/listings/${props.title}`}><Button color='danger'>Book Now</Button></a>{' '}
                    <a href={`/listings/${props.title}`}><Button color='secondary'>More Info</Button></a>{' '}
                </span>
            </div>
        </div>
    )   
}
export default Movie;