import React from 'react';

const MovieDetails = ({ handleOpenModal, movie }) => {
  const redirectToMovie = (url) => {};

  return (
    <div className='movie-details' onClick={() => handleOpenModal()}>
      <h3>{movie.name}</h3>
      <button onClick={redirectToMovie(movie.url)}>Ver película gratis</button>
      <img src={movie.img} alt={`${movie.name} poster`} />
    </div>
  );
};

export default MovieDetails;
