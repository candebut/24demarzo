import React from 'react';

const Movie = ({ movie, handleOpenModal }) => {
  return (
    <div className='movie-box' onClick={() => handleOpenModal()}>
      <img src={movie.img} alt={`${movie.name} poster`} />
    </div>
  );
};

export default Movie;
