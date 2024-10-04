import React, { useState } from 'react';

const FlightSearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Departure City (IATA code):</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setOrigin(e.target.value.toUpperCase())}
          className="form-control"
          placeholder="Enter origin IATA code (e.g., JFK)"
          required
        />
      </div>
      <div className="form-group">
        <label>Destination City (IATA code):</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value.toUpperCase())}
          className="form-control"
          placeholder="Enter destination IATA code (e.g., LAX)"
          required
        />
      </div>
      <div className="form-group">
        <label>Travel Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Search Flights</button>
    </form>
  );
};

export default FlightSearchForm;
