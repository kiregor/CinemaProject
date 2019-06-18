import React from 'react';
import Carousel from 'nuka-carousel';

const AppCarousel21 = (props) => {
    return (
        <div className='Carousel'>
                <a href={`/Listings/${props.title}`}><img src={`http://image.tmdb.org/t/p/w185/${props.image}`}/></a>
        </div>
    )   
}
export default AppCarousel21;