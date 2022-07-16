import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import AvalaibleAppointment from './AvalaibleAppointment';

const Appointments = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <AppointBanner date={date} setDate={setDate}></AppointBanner>
      <AvalaibleAppointment date={date}></AvalaibleAppointment>

    </div>
  );
};

export default Appointments;