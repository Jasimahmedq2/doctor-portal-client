import React from 'react';
import ReviewCart from './ReviewCart';
import quote from '../assets/icons/quote.svg'
import people1 from '../assets/images/people1.png'
import people2 from '../assets/images/people2.png'
import people3 from '../assets/images/people3.png'
const Review = () => {
  const customerReview = [
    {
      _id: 1,
      description: '',
      name: 'winson Herry',
      location: 'california',
      image: people1 
    },
    {
      _id: 2,
      description: '',
      name: 'winson Herry',
      location: 'california',
      image: people2
    },
    {
      _id: 3,
      description: '',
      name: 'winson Herry',
      location: 'california',
      image: people3
    },
  ]
  return (
    <div className='mt-20'>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-primary text-xl'>testimonial</h4>
          <h2 className='text-4xl'>what our patient says</h2>
        </div>
        <div>
          <img className='w-24 lg:w-48' src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          customerReview.map(review => <ReviewCart 
           key={review._id}
           review={review}
          ></ReviewCart>)
        }
      </div>
    </div>
  );
};

export default Review;