# Airline Booking App

This is an airline booking application built using React that allows users to search for flights, select a flight, and go through a mock booking process. The app is hosted on Netlify.

## Live Demo
You can access the live demo here: [Airline Booking App](https://airline-booking-sba.netlify.app/)

## Technologies Used
- **React**: The core framework used for building the frontend of the app, allowing for component-based development and fast updates with hooks like `useState` and `useEffect`.
- **React Router**: For client-side routing, managing navigation between different steps of the booking process (e.g., flight search, passenger info, seat selection, etc.).
- **Axios**: For making HTTP requests to the Amadeus Flight API to fetch flight data dynamically.
- **Framer Motion**: For adding smooth animations and transitions within the UI, such as card animations and button interactions.
- **Amadeus Flight API**: Used to fetch real-time flight offers based on user input (origin, destination, and travel date).
- **Netlify**: For deploying and hosting the app, providing continuous deployment from GitHub and serving the live version of the app.

## Approach Taken

### 1. **Flight Search**
The user can input the departure city (IATA code), destination city (IATA code), and travel date to search for available flights. Once the user submits the form, the app makes a request to the Amadeus API to fetch real-time flight offers. The flights are then displayed as cards with basic flight information such as the departure time, arrival time, and price.

### 2. **Flight Selection**
After the user searches for flights, they can select one by clicking the "Book Flight" button on any of the displayed flight cards. Once a flight is selected, the app navigates to the **Passenger Info** page.

### 3. **Passenger Info & Mock Booking Flow**
The app takes the user through a multi-step booking flow:
- **Passenger Information**: The user enters passenger details.
- **Seat Selection**: The user selects a seat for the flight.
- **Payment**: The user goes through a mock payment process.
- **Confirmation**: Finally, a confirmation page is displayed, confirming the booking.

### 4. **Routing**
The app uses **React Router** for client-side routing between the various steps in the booking process, ensuring a smooth user experience without full page reloads.

### 5. **Animations**
Using **Framer Motion**, smooth transitions are added to various UI elements, such as flight cards fading in, buttons having a slight press-down effect, and page transitions between booking steps.

## Usage Instructions

1. Go to the [Airline Booking App](https://airline-booking-sba.netlify.app/).
2. Enter the departure and destination IATA codes (e.g., `ORD` for Chicago O'Hare, `LAX` for Los Angeles) and select a travel date.
3. Click **Search Flights** to fetch available flights.
4. Once the flight results are displayed, click **Book Flight** on your preferred flight.
5. Enter your passenger details, select a seat, and complete the mock payment process.
6. The confirmation page will display your booking details.

## Future Improvements
- **Form Validation**: Adding validation for the passenger information, seat selection, and payment form to ensure that users input valid data.
- **User Authentication**: Adding login and registration for users to save their flight bookings or track flight history.
- **Enhanced Seat Selection**: Allowing users to see a graphical seat map for seat selection.
- **Real Payment Integration**: Integrating a real payment gateway (such as Stripe) for real-world bookings.

## Link to Live Site
[Airline Booking App](https://airline-booking-sba.netlify.app/)

---

This project was developed as part of the Perscholas bootcamp for SBA 320H  "React Web Application Project"
