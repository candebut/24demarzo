import React from 'react';
import { motion } from 'framer-motion';
const Search = ({ setQuery }) => {
  return (
    <motion.div className='input-box'>
      <motion.input
        type='search'
        name='search-form'
        id='search-form'
        className='search-input'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Buscar película...'
        whileHover={{
          boxShadow: '0 0 10px -2px #9ad8fa',
        }}
        whileFocus={{
          scale: 1.1,
          boxShadow: '0 0 10px -2px #9ad8fa',
        }}
      />
    </motion.div>
  );
};

export default Search;
