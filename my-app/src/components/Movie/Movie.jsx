import React from 'react';

const Movie = ({ movie }) => {
  const redirectToMovie = (url) => {
    window.open(url);
  };

  return (
    <div className='movie-box' onClick={() => redirectToMovie(movie.url)}>
      <img src={movie.img} alt={`${movie.name} poster`} />

      <div class='movie-box-overlay'>
        <div className='movie-box-text'>Ver película gratis</div>
      </div>
    </div>
  );
};

export default Movie;
