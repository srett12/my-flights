import React, { useState, useEffect } from "react";
import { fetchAirlineDetails, updateAirlineDetails } from "../../api/airline";
import { getUserId } from "../../utils/login_utils";

const UpdateAirlineDetails = () => {
  const [airline, setAirline] = useState({
    name: "",
    id: "",
    country: "",
  });

  useEffect(() => {
    const airLineId = getUserId();
    fetchAirlineDetails(airLineId).then((response) => {
      console.log("airline details", response);
      setAirline(response);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirline((prevAirline) => ({
      ...prevAirline,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateAirlineDetails(airline).then((reponse) => {
      setAirline(reponse);
    });
  };

  return (
    <div>
      <h2>Update Airline Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="airlineName">Airline Name:</label>
          <input
            type="text"
            id="airlineName"
            name="airlineName"
            value={airline.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={airline.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default UpdateAirlineDetails;
