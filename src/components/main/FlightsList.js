import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchFlights } from '../../api/common';

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [originCountryFilter, setOriginCountryFilter] = useState('');
  const [destinationCountryFilter, setDestinationCountryFilter] = useState('');
  const [departureTimeFilter, setDepartureTimeFilter] = useState('');

  useEffect(() => {
    // Function to fetch flights data from the server using the fetchFlights function from your API
    fetchFlights().then((flightsData) => {
      setFlights(flightsData);
    });
  }, []);

  useEffect(() => {
    // Function to apply filters and update the filtered flights
    const applyFilters = () => {
      let filteredFlights = flights;
  
      if (originCountryFilter) {
        filteredFlights = filteredFlights.filter((flight) =>
          flight.originCountryId.toString().includes(originCountryFilter)
        );
      }
  
      if (destinationCountryFilter) {
        filteredFlights = filteredFlights.filter((flight) =>
          flight.destinationCountryId.toString().includes(destinationCountryFilter)
        );
      }
  
      if (departureTimeFilter) {
        filteredFlights = filteredFlights.filter((flight) =>
          flight.departureTime.includes(departureTimeFilter)
        );
      }
  
      setFilteredFlights(filteredFlights);
    };
  
    applyFilters();
  }, [flights, originCountryFilter, destinationCountryFilter, departureTimeFilter]);

  return (
    <div>
      <h2>Flights List</h2>

      {/* Filters */}
      <div>
        <label htmlFor="originCountryFilter">Origin Country ID:</label>
        <input
          type="text"
          id="originCountryFilter"
          value={originCountryFilter}
          onChange={(e) => setOriginCountryFilter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="destinationCountryFilter">Destination Country ID:</label>
        <input
          type="text"
          id="destinationCountryFilter"
          value={destinationCountryFilter}
          onChange={(e) => setDestinationCountryFilter(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="departureTimeFilter">Departure Time:</label>
        <input
          type="text"
          id="departureTimeFilter"
          value={departureTimeFilter}
          onChange={(e) => setDepartureTimeFilter(e.target.value)}
        />
      </div>

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
          {filteredFlights.map((flight) => (
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
    </div>
  );
};

export default FlightsList;
