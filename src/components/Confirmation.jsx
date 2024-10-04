import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ bookingData }) => {
  const navigate = useNavigate();

  return (
    <div className="booking-step">
      <h2>Booking Confirmation</h2>
      <p>Passenger: {bookingData.passengerName}</p>
      <p>Seat Number: {bookingData.seatNumber}</p>
      <p>Payment Method: Card ending in {bookingData.cardNumber.slice(-4)}</p>
      <button onClick={() => navigate('/')}>Finish</button>
    </div>
  );
};

export default Confirmation;
