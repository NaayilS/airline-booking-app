import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Function to format the date and time
const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
};

const FlightCard = ({ flight, onFlightSelect }) => {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    // Call the function to store the selected flight
    onFlightSelect(flight);
    // Navigate to the passenger information step
    navigate('/passenger-info');
  };

  const { itineraries, price } = flight;
  const firstSegment = itineraries[0].segments[0];
  const lastSegment = itineraries[0].segments[itineraries[0].segments.length - 1];

  // Animation variants for flight cards with easing
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="card"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
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
        <button onClick={() => navigate('/passenger-info')}>Book Flight</button>
      </div>
    </motion.div>
  );
};

export default FlightCard;
