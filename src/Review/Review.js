import React from 'react';
import ReviewCart from './ReviewCart';

const Review = () => {
  return (
    <div>
     <div>
     <h4 className='text-primary'>testimonial</h4>
     <h2 className='text-4xl'>what our patient says</h2>
     </div>
      <ReviewCart></ReviewCart>
    </div>
  );
};

export default Review;