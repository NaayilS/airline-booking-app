import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = ({ bookingData, setBookingData }) => {
  const navigate = useNavigate();

  // Example of seat map with status: 'available', 'selected', or 'unavailable'
  const initialSeats = [
    { id: '1A', status: 'available' },
    { id: '1B', status: 'unavailable' },
    { id: '1C', status: 'available' },
    { id: '2A', status: 'available' },
    { id: '2B', status: 'available' },
    { id: '2C', status: 'unavailable' },
    { id: '3A', status: 'available' },
    { id: '3B', status: 'available' },
    { id: '3C', status: 'available' },
  ];

  const [seats, setSeats] = useState(initialSeats);
  const [selectedSeat, setSelectedSeat] = useState(bookingData.seatNumber || null);

  const handleSeatSelect = (seatId) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.status === 'unavailable') return seat;
      if (seat.id === seatId) {
        return { ...seat, status: seat.status === 'selected' ? 'available' : 'selected' };
      }
      return { ...seat, status: 'available' };
    });
    setSeats(updatedSeats);
    setSelectedSeat(seatId);
  };

  const handleNext = () => {
    setBookingData({ ...bookingData, seatNumber: selectedSeat });
    navigate('/payment');
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seat</h2>
      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat ${seat.status}`}
            disabled={seat.status === 'unavailable'}
            onClick={() => handleSeatSelect(seat.id)}
          >
            {seat.id}
          </button>
        ))}
      </div>
      {selectedSeat && (
        <div className="seat-info">
          <p>Selected Seat: {selectedSeat}</p>
        </div>
      )}
      <button onClick={handleNext} disabled={!selectedSeat}>
        Next: Payment
      </button>
    </div>
  );
};

export default SeatSelection;
