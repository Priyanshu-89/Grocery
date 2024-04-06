
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleStarHover = (hoveredRating) => {
    setHover(hoveredRating);
  };

  return (
    <div className='flex items-center justify-between gap-2'>
      {[...Array(5)].map((star, index) => {
        const starValue = index + 1;

        return (
          
          <label key={index} >
            <input
           
              type="radio"
              name="rating"
              value={starValue}
              onClick={() => handleStarClick(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            />
            <FaStar
              className="star "
              color={(hover || rating) >= starValue ? '#ffc107' : '#e4e5e9'}
              size={30}
            />
          </label>
        );
      })}
      {/* <p>Selected Rating: {rating}</p> */}
    </div>
  );
};

export default StarRating;

