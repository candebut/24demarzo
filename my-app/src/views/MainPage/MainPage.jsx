import React from 'react';
import { movieList } from '../../mockedValues/movies';
import Movie from '../../components/Movie/Movie';

const MainPage = () => {
  return (
    <div>
      <h1>Cine por la memoria</h1>
      <h3>Películas para pensar el 24 de Marzo</h3>

      <div className='movies_wrapper'>
        {movieList && movieList.length
          ? movieList.map((movie, index) => (
              <Movie key={`movie_${movie.name}-${index}`} movie={movie} />
            ))
          : 'No hay películas para mostrar'}
      </div>
    </div>
  );
};

export default MainPage;
