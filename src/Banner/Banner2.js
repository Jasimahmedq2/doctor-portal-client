import React from 'react';
import banner from '../assets/images/treatment.png'

const Banner2 = () => {
  return (
    <div class="hero min-h-screen bg-base-100 pl-12">
  <div class="hero-content flex-col lg:flex-row">
  <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-10'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Term</h1>
      <p class="py-6">  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatem quam corrupti sit numquam recusandae, ducimus aspernatur perspiciatis distinctio ea nam natus, saepe vero sapiente eos, optio iste libero dolorem</p>
      <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner2;