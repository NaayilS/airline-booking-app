import React from 'react';
import FlightCard from './FlightCard';
import { motion } from 'framer-motion';

const FlightList = ({ flights }) => {

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div
      className="flight-list"
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      {flights.length > 0 ? (
        flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))
      ) : (
        <p>No flights found</p>
      )}
    </motion.div>
  );
};

export default FlightList;
