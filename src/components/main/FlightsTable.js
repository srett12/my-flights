import React from 'react';
import { Link } from 'react-router-dom';

const FlightsTable = ({ flights }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Airline Company ID</th>
          <th>Origin Country ID</th>
          <th>Destination Country ID</th>
          <th>Departure Time</th>
          <th>Landing Time</th>
          <th>Remaining Tickets</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.id}</td>
            <td>{flight.airlineCompanyId}</td>
            <td>{flight.originCountryId}</td>
            <td>{flight.destinationCountryId}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.landingTime}</td>
            <td>{flight.remainingTickets}</td>
            <td>
              {/* Link to the flight page with the flight ID as a parameter */}
              <Link to={`/flights/${flight.id}`} params={{ flightId: flight.id }}>
                <button>View Details</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightsTable;
