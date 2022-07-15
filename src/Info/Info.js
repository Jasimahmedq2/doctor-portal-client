import React from 'react';
import Information from './Information';
import clock from '../assets/icons/clock.svg';
import location from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <Information bgClass='bg-gradient-to-r from-secondary to-primary' title='opening hours' image={clock}></Information>
      <Information bgClass='bg-accent' title='visit our location' image={location}></Information>
      <Information bgClass='bg-gradient-to-r from-secondary to-primary' title='contact us now' image={phone}></Information>

    </div>
  );
};

export default Info;