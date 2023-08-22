import axios from "axios";

export const getAirlineByUsername = async (userName) => {
  /* try {
      const response = await axios.get('http://127.0.0.1:5000/search/airlines/username/' + userName);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getCustomerByUsername = async (userName) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/customers/username/' + userName);
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getUserByUsername = async (userName) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/users/username/' + userName);
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getFlightsByParameters = async (
  originCountryId,
  destinationCountryId,
  date
) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/flights/parameters');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getFlightsByAirlineId = async (airlineId) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/flights/airline/' + airlineId);
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getArrivalFlights = async (countryId) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/flights/arrival-flights/' + countryId);
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const getDepartureFlights = async (countryId) => {
  /* try {
       const response = await axios.get('http://127.0.0.1:5000/search/flights/departure-flights/' + countryId);
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
  return {
    id: "id1",
    name: "elal",
    countryId: "c1",
    userId: "u1",
  };
};

export const fetchFlights = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/get/flights");
    const transformedData = response.data.map((item) => {
      return {
        id: item.id.toString(),
        airlineCompanyId: item.airline_company_id.toString(),
        originCountryId: item.origin_country_id.toString(),
        destinationCountryId: item.destination_country_id.toString(),
        departureTime: new Date(item.departure_time).toISOString(),
        landingTime: new Date(item.landing_time).toISOString(),
        remainingTickets: item.remaining_tickets,
      };
    });
    return transformedData;
  } catch (error) {
    console.error("Error fetching flights data:", error);
  }
};

export const fetchFlightDetails = async (flightId) => {
  try {
    // Replace 'https://api.example.com/flights' with the actual URL of your API endpoint for flights
    const response = await axios.get(
      "http://127.0.0.1:5000/get/flights/" + flightId
    );
    const item = response.data;
    return {
      id: item.id.toString(),
      airlineCompanyId: item.airline_company_id.toString(),
      originCountryId: item.origin_country_id.toString(),
      destinationCountryId: item.destination_country_id.toString(),
      departureTime: new Date(item.departure_time).toISOString(),
      landingTime: new Date(item.landing_time).toISOString(),
      remainingTickets: item.remaining_tickets,
    };
  } catch (error) {
    console.error("Error fetching flights data:", error);
  }
};

export const fetchUserFlights = async (userId) => {
  try {
    // Replace 'https://api.example.com/flights' with the actual URL of your API endpoint for flights
    const response = await axios.get(
      "https://api.example.com/flights/" + userId
    );
    const transformedData = response.data.map((item) => {
      return {
        id: item.id.toString(),
        airlineCompanyId: item.airline_company_id.toString(),
        originCountryId: item.origin_country_id.toString(),
        destinationCountryId: item.destination_country_id.toString(),
        departureTime: new Date(item.departure_time).toISOString(),
        landingTime: new Date(item.landing_time).toISOString(),
        remainingTickets: item.remaining_tickets,
      };
    });
    return transformedData;
  } catch (error) {
    console.error("Error fetching flights data:", error);
  }
};
