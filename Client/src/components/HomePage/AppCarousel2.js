import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <div>
      <h2> New Releases </h2>
      <Carousel slidesToShow='5' autoplay='true' cellSpacing='20' autoplayInterval='1500' dragging edgeEasing wrapAround="true">
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide7" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide8" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide9" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide10" />
      </Carousel>
      </div>
    );
  }
}