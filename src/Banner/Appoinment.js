import React from 'react';
import appointment from '../assets/images/appointment.png'
import doctor from '../assets/images/doctor.png'
import './Appoinment.css'

const Appoinment = () => {
  return (
    <div style={{backgroundImage: `url(${appointment})`}}  class="hero  bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src={doctor} class="max-w-sm  ml-16 doctor-style" />
      <div>
        <h4 className='text-secondary  text-2xl mb-3'>Appointment</h4>
        <h1 class="text-5xl font-bold text-white">Make an Appointment Today</h1>
        <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi
        </p>
        <button class="btn btn-primary  bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default Appoinment;