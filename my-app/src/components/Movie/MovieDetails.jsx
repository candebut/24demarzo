import React from 'react';

const MovieDetails = ({ handleOpenModal }) => {
  return <div className='movie-box' onClick={() => handleOpenModal()}></div>;
};

export default MovieDetails;
