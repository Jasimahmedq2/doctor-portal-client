import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {
  const {_id, name, slots } = treatment;
  
  const HandleBooking = event => {
    event.preventDefault();
    const slots = event.target.slots.value;
    console.log(slots, name, _id)
    setTreatment(null)
  }
  return (

    <div>
      <input type="checkbox" id="Booking-Modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="Booking-Modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <h3 class="font-bold text-lg text-secondary">Booking for {name}</h3>
          <form onSubmit={HandleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>


            <input type="text" value={format(date, "PP")} disabled class="input input-bordered input-primary w-full max-w-xs" />
            <select name='slots' class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option>{slot}</option>)
              }
              
            </select>
            <input type="email" name='email' placeholder="email" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='name' placeholder="Your name" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone number" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" value="submit" class="input input-bordered input-primary btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;