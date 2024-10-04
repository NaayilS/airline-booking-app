import React from 'react';

const FlightCard = ({ flight }) => {
  const { itineraries, price } = flight;
  const firstSegment = itineraries[0].segments[0];
  const lastSegment = itineraries[0].segments[itineraries[0].segments.length - 1];

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{firstSegment.carrierCode} - Flight {firstSegment.number}</h5>
        <p className="card-text">From: {firstSegment.departure.iataCode} at {firstSegment.departure.at}</p>
        <p className="card-text">To: {lastSegment.arrival.iataCode} at {lastSegment.arrival.at}</p>
        <p className="card-text">Price: {price.total} {price.currency}</p>
        <button className="btn btn-primary">Book Flight</button>
      </div>
    </div>
  );
};

export default FlightCard;
