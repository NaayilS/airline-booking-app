import axios from 'axios';

const client_id = 'zkbvKhMGOkfgJqpK0Z4ktySrgfEcMiMV';
const client_secret = 'pY0SwrAgrtnewfQZ';

let accessToken = '';

const authenticate = async () => {
  try {
    const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
      grant_type: 'client_credentials',
      client_id,
      client_secret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    accessToken = response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

const getFlightOffers = async (origin, destination, date) => {
  if (!accessToken) {
    await authenticate();
  }

  try {
    const response = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers`, {
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: date,
        adults: 1,
        max: 5
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    throw error;
  }
};

export { getFlightOffers };
