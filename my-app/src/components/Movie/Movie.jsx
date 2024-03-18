import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Movie = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const redirectToMovie = (url) => {
    window.open(url);
  };

  return (
    <div
      className='movie-box'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt={`${movie.name} poster`} />
      {isHovered && (
        <motion.button
          className='hovered-button'
          style={{ opacity: isHovered ? 1 : 0 }} // Set opacity based on hover state
          initial={{ opacity: 0 }} // Initial opacity
          animate={{ opacity: isHovered ? 1 : 0 }} // Animate opacity change
          transition={{ duration: 0.3 }} // Smooth transition duration
          // whileHover={{ scale: 1.1 }} // Scale effect when hovered
          whileTap={{ scale: 0.9 }} // Scale effect when tapped
          onClick={(e) => {
            e.stopPropagation(); // Prevents the click event from propagating to the parent div
            // Add your button click logic here
            redirectToMovie(movie.url);
          }}
        >
          Ver película gratis
        </motion.button>
      )}
    </div>
  );
};

export default Movie;
