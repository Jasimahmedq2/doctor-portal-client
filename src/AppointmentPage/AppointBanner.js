import React, { useState } from 'react';
import chair from '../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointBanner = ({date, setDate}) => {

  return (
    <div class="hero min-h-screen bg-base-100 ">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img src={chair} class="max-w-sm rounded-lg shadow-2xl"  alt=''/>
      <div>
      <DayPicker 
       mode="single"
       selected={date}
       onSelect={setDate}
      />
      <p>selected day: {format(date, 'PP')}</p>
      </div>
    </div>
  </div>
  );
};

export default AppointBanner;