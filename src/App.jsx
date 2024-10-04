import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';  // Import the new AppRoutes component
import { getFlightOffers } from './services/amadeusAPI';


function App() {
  const [flights, setFlights] = useState([]);  // Flight search results
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state
  const [selectedFlight, setSelectedFlight] = useState(null);  // Selected flight for booking
  const [bookingData, setBookingData] = useState({
    passengerName: '',
    seatNumber: '',
    cardNumber: ''
  });

  // Handle the flight search functionality
  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError(null);
    try {
      const flightOffers = await getFlightOffers(searchQuery.origin, searchQuery.destination, searchQuery.date);
      setFlights(flightOffers);
    } catch (error) {
      setError('Failed to fetch flight offers');
    } finally {
      setLoading(false);
    }
  };

  // Handle flight selection
  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">Airline Booking App</h1>
        {/* AppRoutes component to handle all routes */}
        <AppRoutes 
          flights={flights}
          handleSearch={handleSearch}
          handleFlightSelect={handleFlightSelect}
          bookingData={bookingData}
          setBookingData={setBookingData}
          loading={loading}
          error={error}
        />
      </div>
    </Router>
   );
}

export default App;
