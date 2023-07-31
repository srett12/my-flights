import axios from 'axios';

export const getAirlineByUsername = async (userName) => {
   /* try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }*/
    return {
        id: 'id1',
        name: 'elal',
        countryId: 'c1',
        userId: 'u1'
    }
  };

  export const getCustomerByUsername = async (userName) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };

   export const getUserByUsername = async (userName) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };

   export const getFlightsByParameters = async (originCountryId, destinationCountryId, date) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };


   export const getFlightsByAirlineId = async (airlineId) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };

   export const getArrivalFlights = async (countryId) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };

   export const getDepartureFlights = async (countryId) => {
    /* try {
       const response = await axios.get('https://api.example.com/data');
       setData(response.data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }*/
     return {
         id: 'id1',
         name: 'elal',
         countryId: 'c1',
         userId: 'u1'
     }
   };

   export const fetchFlights = async () => {
    return [
      {
        id: '1',
        airlineCompanyId: '101',
        originCountryId: '201',
        destinationCountryId: '301',
        departureTime: '2023-07-30T10:00:00Z',
        landingTime: '2023-07-30T15:30:00Z',
        remainingTickets: 50,
      },
      {
        id: '2',
        airlineCompanyId: '102',
        originCountryId: '202',
        destinationCountryId: '302',
        departureTime: '2023-08-05T08:45:00Z',
        landingTime: '2023-08-05T12:15:00Z',
        remainingTickets: 25,
      },
      {
        id: '3',
        airlineCompanyId: '103',
        originCountryId: '203',
        destinationCountryId: '303',
        departureTime: '2023-08-10T14:30:00Z',
        landingTime: '2023-08-10T18:45:00Z',
        remainingTickets: 10,
      },
      // Add more flights as needed
    ];
    
    try {
      // Replace 'https://api.example.com/flights' with the actual URL of your API endpoint for flights
      const response = await axios.get('https://api.example.com/flights');
      return response.data;
    } catch (error) {
      console.error('Error fetching flights data:', error);
    }
  };
  

  export const fetchFlightDetails = async (flightId) => {
    return (
      {
        id: '3',
        airlineCompanyId: '103',
        originCountryId: '203',
        destinationCountryId: '303',
        departureTime: '2023-08-10T14:30:00Z',
        landingTime: '2023-08-10T18:45:00Z',
        remainingTickets: 1,
      });
    
    try {
      // Replace 'https://api.example.com/flights' with the actual URL of your API endpoint for flights
      const response = await axios.get('https://api.example.com/flights/' + flightId);
      return response.data;
    } catch (error) {
      console.error('Error fetching flights data:', error);
    }
  };
  