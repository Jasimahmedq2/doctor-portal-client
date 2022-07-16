import React from 'react';

const ReviewCart = ({ review }) => {
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aperiam sint molestiae? Commodi, sapiente excepturi.</p>

        </div>
        <div className='flex items-center'>
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
              <img className='w-16' src={review.image} alt=""/>
            </div>
          </div>
          <div>
            <h2 class="card-title">{review.name}</h2>
            <h4>{review.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;