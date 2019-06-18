import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <div>
      <h2> Future Releases </h2>
      <Carousel slidesToShow='4' cellSpacing='15' wrapAround="true" autoplay='true' autoplayInterval='1500'>
        <h5>hi</h5>
        <h5>bye</h5>
        <h5>hi</h5>
        <h5>bye</h5>
        <h5>hi</h5>
        <h5>bye</h5>
      </Carousel>
      </div>
    );
  }
}