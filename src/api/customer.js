import axios from 'axios';

export const fetchCustomerDetails = async (customerId) => {

try {
      const response = await axios.get('http://127.0.0.1:5000/get/customers/' + customerId);
      const item = response.data
        return {
          id: item.id.toString(),
          address: item.address.toString(),
          creditCardNumber: item.credit_card_no.toString(),
          firstName: item.first_name.toString(),
          lastName: item.last_name.toString(),
          phoneNumber: item.phone_no.toString(),
          userId: item.user_id.toString()
        };
      }
      
     catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  export const updateCustomerDetails =  async (customer) => {
    try {
        // Send the updated customer data to the server using Axios
        // this url needs to get the customers id also
        const response = await axios.put('http://127.0.0.1:5000/update/customers/', customer);
        // Assuming the server successfully updated the customer details, show a success message to the user
        console.log('Customer details updated successfully!', response.data)
        return true;
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error('Error updating customer details:', error);
        console.error('An error occurred while updating customer details.');
        return false
      }
  }
  
  export const purchaseTicket =  async (customerId, ticketId) => {
    try {
        // Send the updated customer data to the server using Axios
        const response = await axios.post('http://127.0.0.1:5000/add/add_tickets', {
            customerId: customerId,
            ticketId: ticketId,
          });
        // Assuming the server successfully updated the customer details, show a success message to the user
        console.log('Customer ticket added successfully!', response.data)
        return true;
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error('Error in adding customer ticket:', error);
        console.error('An error occurred while updating customer details.');
        return false
      }
  }

  export const removeTicket =  async (customerId, ticketId) => {
    try {
        // Send the updated customer data to the server using Axios
        // this url needs to get a ticket id
        const response = await axios.put('http://127.0.0.1:5000/remove/tickets/', {
            customerId: customerId,
            ticketId: ticketId,
          });
        // Assuming the server successfully updated the customer details, show a success message to the user
        console.log('Customer ticket removed successfully!', response.data)
        return true
        return true;
      } catch (error) {
        // Handle errors, e.g., show an error message to the user
        console.error('Error removing customer ticket:', error);
        return false
      }
  }

  export const fetchCustomerTickets = async (customerId) => {
    return ['3', 'ticket3'];
try {
      const response = await axios.get('https://api.example.com/get-tickets/' + customerId);
      return response.data;
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };