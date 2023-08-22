import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFlights, fetchUserFlights } from "../../api/common";
import FlightsTable from "./FlightsTable";
import { getUserId } from "../../utils/login_utils";

const FlightsList = ({ userFlights }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [originCountryFilter, setOriginCountryFilter] = useState("");
  const [destinationCountryFilter, setDestinationCountryFilter] = useState("");
  const [departureTimeFilter, setDepartureTimeFilter] = useState("");

  useEffect(() => {
    // Function to fetch flights data from the server using the fetchFlights function from your API
    if (userFlights) {
      const userId = getUserId();
      fetchUserFlights(userId).then((flightsData) => {
        setFlights(flightsData);
      });
    } else {
      fetchFlights().then((flightsData) => {
        setFlights(flightsData);
      });
    }
  }, [userFlights]);

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
          flight.destinationCountryId
            .toString()
            .includes(destinationCountryFilter)
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
  }, [
    flights,
    originCountryFilter,
    destinationCountryFilter,
    departureTimeFilter,
  ]);

  return (
    <div>
      <h2>{userFlights ? "My Trips" : "Flights List"}</h2>

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
        <label htmlFor="destinationCountryFilter">
          Destination Country ID:
        </label>
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

      <FlightsTable flights={filteredFlights} />
    </div>
  );
};

export default FlightsList;
