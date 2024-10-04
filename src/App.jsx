import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightList from './components/FlightList';
import { getFlightOffers } from './services/amadeusAPI';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div className="container">
      <h1 className="my-4">Airline Booking App</h1>
      <FlightSearchForm onSearch={handleSearch} />
      {loading && <p>Loading flights...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <FlightList flights={flights} />}
    </div>
  );
}

export default App;
