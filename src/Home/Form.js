import React from 'react';
import appointment from '../assets/images/appointment.png'

const Form = () => {
  return (
    <div style={{
      backgroundImage: `url(${appointment})`
    }} className='mt-20'>
      <div className='text-center'>
        <h3 className='text-secondary text-2xl text-bold'>contact us</h3>
        <h2 className='text-4xl text-bold text-white'>stay connected with us</h2>
      </div>
      <div className='text-center mt-10'>
      <input className='' type="email" name='email' placeholder="Email Address" class="input input-bordered w-full lg:max-w-lg" />
      <br />
      <input  type="text" placeholder="Subject" class="input input-bordered w-full lg:max-w-lg mt-5" />
      <br />
      <textarea className='input input-bordered w-full lg:max-w-lg mt-5' placeholder="Your message"></textarea>
      <br />
      </div>
    </div>
  );
};

export default Form;