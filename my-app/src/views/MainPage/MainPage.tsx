import React, { useState } from 'react';
import { movies } from '../../mockedValues/movies';
import Movie from '../../components/Movie/Movie';
import MovieDetails from '../../components/Movie/MovieDetails';
import Modal from '../../components/Modal/Modal';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <div className='modal-content'>
          <MovieDetails handleOpenModal={() => handleOpenModal(false)} />
        </div>
      </Modal>
      ;
      {movies.map((movie) => (
        <Movie movie={movie} handleOpenModal={handleOpenModal(false)} />
      ))}
    </div>
  );
};

export default MainPage;
