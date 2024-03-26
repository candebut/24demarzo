import React, { useState } from 'react';
import { movieList } from '../../mockedValues/movies';
import Movie from '../../components/Movie/Movie';
import Search from '../../components/Search/Search';

const MainPage = () => {
  const [query, setQuery] = useState('');

  const search_params = Object.keys(Object.assign({}, ...movieList));

  function search(data) {
    return data.filter((data) =>
      search_params.some((param) =>
        data[param].toString().toLowerCase().includes(query)
      )
    );
  }

  return (
    <div className='app-wrapper'>
      <h1>Cine por la memoria</h1>
      <h3>Películas para pensar el 24 de Marzo</h3>
      <Search setQuery={setQuery} />
      <div className='movies_wrapper'>
        {movieList && movieList.length
          ? search(movieList).map((movie, index) => (
              <Movie key={`movie_${movie.name}-${index}`} movie={movie} />
            ))
          : 'No hay películas para mostrar'}
      </div>
    </div>
  );
};

export default MainPage;
