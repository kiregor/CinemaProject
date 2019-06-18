import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <div>
      <h2> New Releases </h2>
      <Carousel slidesToShow='4' cellSpacing='15' wrapAround="true" autoplay='true' autoplayInterval='1500'>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
        <a href="/Listings/Godzilla: King of the Monsters"><img src="http://image.tmdb.org/t/p/w185/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg"/></a>
        <a href="/Listings/Pokémon Detective Pikachu"><img src="http://image.tmdb.org/t/p/w185/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg"/></a>
        <a href="/Listings/Shaft"><img src="http://image.tmdb.org/t/p/w185/kfZqwGuvEBAysAbCsa0QLKoSYR.jpg"/></a>
        <a href="/Listings/The Secret Life of Pets 2"><img src="http://image.tmdb.org/t/p/w185/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg"/></a>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
        <a href="/Listings/Aladdin"><img src="http://image.tmdb.org/t/p/w185/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"/></a>
      </Carousel>
      </div>
    );
  }
}