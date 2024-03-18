import React, { useState } from 'react';
import { movieList } from '../../mockedValues/movies';
import Movie from '../../components/Movie/Movie';
import MovieDetails from '../../components/Movie/MovieDetails';
import Modal from '../../components/Modal/Modal';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const handleOpenModal = (open) => {
    setIsOpen(open);
  };

  return (
    <div>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        <div className='modal-content'>
          <MovieDetails
            handleOpenModal={() => handleOpenModal(false)}
            movie={currentMovie}
          />
        </div>
      </Modal>

      <h3>Cine por la memoria</h3>
      <h5>Películas para pensar el 24 de Marzo</h5>

      <div className='movies_wrapper'>
        {movieList && movieList.length
          ? movieList.map((movie, index) => (
              <Movie
                key={`movie_${movie.name}-${index}`}
                movie={movie}
                handleOpenModal={() => handleOpenModal(true)}
                setCurrentMovie={setCurrentMovie}
              />
            ))
          : 'No hay películas para mostrar'}
      </div>
    </div>
  );
};

export default MainPage;
