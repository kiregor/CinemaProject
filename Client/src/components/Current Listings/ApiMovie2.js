import React from 'react';
import './poster.css'
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';

const Movie = (props) => {
    return (
        <div className="col s6 m4 l4">
            <FlippingCard>
                <FlippingCardBack>
                    <p><h3>{props.title}</h3></p>
                    <p><h6>{props.overview}</h6></p>
                </FlippingCardBack>
                <FlippingCardFront>
                    <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%"}}/>
                </FlippingCardFront>
            </FlippingCard>
        </div>
    )   
}
export default Movie;