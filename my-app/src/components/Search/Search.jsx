import React from 'react';

const Search = ({ setQuery }) => {
  return (
    <div className='input-box'>
      <input
        type='search'
        name='search-form'
        id='search-form'
        className='search-input'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Buscar película...'
      />
    </div>
  );
};

export default Search;
