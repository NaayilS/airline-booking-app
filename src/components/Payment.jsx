import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ bookingData, setBookingData }) => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState(bookingData.cardNumber || '');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Simulating payment process by saving the card info (mock)
    setBookingData({
      ...bookingData,
      cardNumber, // Save card number to booking data
    });
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  // Basic validation (ensure fields are filled)
  const isFormValid = () => cardNumber.length === 16 && expiryDate && cvv.length === 3;

  return (
    <div className="payment-step">
      <h2>Payment Information</h2>
      <div className="form-group">
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          maxLength="16"
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter 16-digit card number"
          required
        />
      </div>
      <div className="form-group">
        <label>Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          maxLength="3"
          onChange={(e) => setCvv(e.target.value)}
          placeholder="3-digit CVV"
          required
        />
      </div>
      <button onClick={handlePayment} disabled={!isFormValid()}>
        Complete Payment
      </button>
    </div>
  );
};

export default Payment;
