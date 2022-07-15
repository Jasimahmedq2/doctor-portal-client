import React from 'react';
import ServiceCart from './ServiceCart';
import fluoride from '../assets/images/fluoride.png'
import cavity from '../assets/images/cavity.png'
import whitening from '../assets/images/whitening.png'

const Services = () => {
  const serviceDetails = [
    {
      _id: 1,
      description: '',
      title: 'fluoride treatment',
      img: fluoride
    },
    {
      _id: 2,
      description: '',
      title: 'cavity filling',
      img: cavity
    },
    {
      _id: 3,
      description: '',
      title: 'Teeth whitening',
      img: whitening
    },
  ]
  return (
    <div>
      <div className='mt-20'>
        <h3 className='text-center text-primary text-bold text-2xl'>our services</h3>
        <h4 className='text-4xl text-center text-bold'>service we provide</h4>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
     {
      serviceDetails.map(service => <ServiceCart 
      key={service._id}
      service={service}
      ></ServiceCart>)
     }
      </div>
    </div>
  );
};

export default Services;