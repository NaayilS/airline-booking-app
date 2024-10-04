import { Routes, Route } from 'react-router-dom';
import FlightSearchForm from './components/FlightSearchForm';
import PassengerInfo from './components/PassengerInfo';
import FlightList from './components/FlightList';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';

const AppRoutes = ({ flights, handleSearch, handleFlightSelect, bookingData, setBookingData, loading, error }) => {
  return (
    <Routes>
      {/* Home route for flight search */}
      <Route 
        path="/" 
        element={
          <>
            <FlightSearchForm onSearch={handleSearch} />
            {loading && <p>Loading flights...</p>}
            {error && <p>{error}</p>}
            {/* FlightList displays after the search */}
            {!loading && !error && flights.length > 0 && (
              <FlightList flights={flights} onFlightSelect={handleFlightSelect} />
            )}
          </>
        } 
      />

      {/* Passenger Info Route */}
      <Route 
        path="/passenger-info" 
        element={<PassengerInfo bookingData={bookingData} setBookingData={setBookingData} />} 
      />

      {/* Seat Selection Route */}
      <Route 
        path="/seat-selection" 
        element={<SeatSelection bookingData={bookingData} setBookingData={setBookingData} />} 
      />

      {/* Payment Route */}
      <Route 
        path="/payment" 
        element={<Payment bookingData={bookingData} setBookingData={setBookingData} />} 
      />

      {/* Confirmation Route */}
      <Route 
        path="/confirmation" 
        element={<Confirmation bookingData={bookingData} />} 
      />
    </Routes>
  );
};

export default AppRoutes;
