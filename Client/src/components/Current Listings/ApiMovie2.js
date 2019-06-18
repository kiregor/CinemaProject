import React from 'react';
import './poster.css'
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import {Button} from 'reactstrap';


const Movie = (props) => {
    return (
        <div className="col s6 m4 l3">
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                        <h3>{props.title}</h3>
                        <p style={{fontSize:13}}>{props.overview}</p>
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%"}}/>
                    </FlippingCardFront>

                </FlippingCard>
                <div>
                    <span>
                        <a href={`/listings/${props.title}`}><Button color='secondary' block>More Info</Button></a>{' '}
                        <a href={`/listings/${props.title}`}><Button color='danger' block> Book Now</Button></a>{' '}
                    <br/>
                    <br/>
                    </span>
                </div>
            </div>
        </div>
    )   
}
export default Movie;