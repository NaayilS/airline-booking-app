import React from 'react';
import FlightCard from './FlightCard';

const FlightList = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return <p>No flights found</p>;
  }

  return (
    <div className="flight-list">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
