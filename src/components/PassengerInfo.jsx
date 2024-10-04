import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PassengerInfo = ({ bookingData, setBookingData }) => {
  const navigate = useNavigate();
  const [passengerName, setPassengerName] = useState(bookingData.passengerName || '');

  const handleNext = () => {
    setBookingData({ ...bookingData, passengerName });
    navigate('/seat-selection');
  };

  return (
    <div className="booking-step">
      <h2>Passenger Information</h2>
      <label>Name:</label>
      <input
        type="text"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
        required
      />
      <button onClick={handleNext}>Next: Seat Selection</button>
    </div>
  );
};

export default PassengerInfo;
