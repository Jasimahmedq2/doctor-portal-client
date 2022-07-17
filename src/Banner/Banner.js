import React from 'react';
import chair from '../assets/images/chair.png'
import background from '../assets/images/bg.png'

const Banner = () => {
  return (
  <div className='px-4'>
  <div style={{backgroundImage: `url(${background})`}} className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
      <div className='text-start'>
        <h1 className="text-5xl font-bold">Hello New smiles starts <h1>here</h1></h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary ">Get Started</button>
      </div>
    </div>
  </div>

  </div>
  );
};

export default Banner;