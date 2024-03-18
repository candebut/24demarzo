import React from 'react';

const Movie = ({ movie, handleOpenModal }) => {
  return (
    <div className='movie-box' onClick={() => handleOpenModal(movie)}></div>
  );
};

export default Movie;
