import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {fetchFlightDetails} from '../../api/common'
import {fetchCustomerTickets, removeTicket, purchaseTicket} from '../../api/customer'

const FlightItem = () => {
    const { flightId } = useParams();
    const [flight, setFlightDetails] = useState(null);
    const [tickets, setTickets] = useState();
    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    
    useEffect(() => {
        if (!flightId){
            return;
        }
        
      // Fetch flight details using the flightId
      fetchFlightDetails(flightId).then((data) => {
        console.log(data);
        setFlightDetails(data);
      });

      
        fetchCustomerTickets(userId).then((data) => {
            console.log(data)
            console.log(flightId)
            console.log(data.includes(flightId))
            setTickets(data);
        });
      

    }, [flightId]);
     

  const handlePurchaseTicket = () => {
    purchaseTicket(flight.id, userId).then((data) => {
        console.log('Ticket purchased successfully!');
      });

  };
  const handleRemoveTicket = () => {
    removeTicket(flight.id, userId).then((data) => {
        console.log('Ticket removed successfully!');
      });

  };

  return (
    flight &&
    <div>
    <h2>Flight Details</h2>
    <p>Flight ID: {flight.id}</p>
    <p>Airline Company ID: {flight.airlineCompanyId}</p>
    <p>Origin Country ID: {flight.originCountryId}</p>
    <p>Destination Country ID: {flight.destinationCountryId}</p>
    <p>Departure Time: {flight.departureTime}</p>
    <p>Landing Time: {flight.andingTime}</p>
    <p>Remaining Tickets: {flight.remainingTickets}</p>
    <p>{tickets &&
        flight.remainingTickets > 0 && 
        flight.id &&
        !tickets.includes(flight.id) &&
          <button onClick={handlePurchaseTicket}>Purchase Ticket</button>}</p>
    <p>{tickets &&
    flight.id &&
        tickets.includes(flight.id) &&
          <button onClick={handleRemoveTicket}>Cancel Ticket</button>}</p>
    <Link to="/flights">Back to Flights List</Link>
  </div>
  );
};

export default FlightItem;
