import React from 'react';

// Function to format the date and time
const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

const FlightCard = ({ flight }) => {
  const { itineraries, price } = flight;
  const firstSegment = itineraries[0].segments[0];
  const lastSegment = itineraries[0].segments[itineraries[0].segments.length - 1];

  return (
    <div className="card">
      <div className="card-body">
        <h5>
          <img 
          src="https://mpng.hippopng.com/20180406/tie/kisspng-airplane-aircraft-maintenance-flight-transport-aeroplane-5ac7b14f05e3e0.1254718215230364950241.jpg" 
          alt="Airplane Icon" 
          className="airplane-icon" 
        />
        {firstSegment.carrierCode} - Flight {firstSegment.number}
      </h5>
      <p>From: {firstSegment.departure.iataCode} at {formatDateTime(firstSegment.departure.at)}</p>
      <p>To: {lastSegment.arrival.iataCode} at {formatDateTime(lastSegment.arrival.at)}</p>
      <p className="price">Price: {price.total} {price.currency}</p>
      <button>Book Flight</button>
    </div>
  </div>
);
};
export default FlightCard;
