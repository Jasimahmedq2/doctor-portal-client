import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold text-primary">{name}</h2>
        {
          slots.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red-500'>try another day</span>
        }
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availabe</p>
        <div class="card-actions justify-center">

          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            for="Booking-Modal" class="btn modal-button btn btn-secondary text-white uppercase">book appointment</label>


        </div>
      </div>
    </div>
  );
};

export default Service;