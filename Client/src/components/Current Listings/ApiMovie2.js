import React from 'react';
import './poster.css'
import {FlippingCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import {Button} from 'reactstrap';
import bgColors from '../MoviePage/ApiMovieDisplay';
import './ApiMovie2.css';



const Movie = (props) => {
    return (
        <div className="col s6 m4 l4">
            <div>
                <FlippingCard>
                    <FlippingCardBack>
                        <h3>{props.title}</h3>
                        <h6>{props.overview}</h6>
                    </FlippingCardBack>
                    
                    <FlippingCardFront>
                        <img src={`http://image.tmdb.org/t/p/w500${props.image}`} style={{width:"100%", height: "100%"}}/>
                    </FlippingCardFront>
                </FlippingCard>
            </div>
            <div>
                <span style={{ contentAlign: "center" }}>
                    <a id= {props.title} href={`/listings/${props.title}`}><Button className="booknowbtn">Book Now</Button></a>{' '}
                    <a href={`/listings/${props.title}`}><Button className="moreinfobtn">More Info</Button></a>{' '}
                </span>
            </div>
        </div>
    )   
}
export default Movie;