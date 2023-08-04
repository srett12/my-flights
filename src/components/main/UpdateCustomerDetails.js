import React, { useState, useEffect } from "react";
import {
  fetchCustomerDetails,
  updateCustomerDetails,
} from "../../api/customer";

const UpdateCustomerDetails = () => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    creditCardNumber: "",
  });

  useEffect(() => {
    fetchCustomerDetails().then((response) => {
      console.log("customer details", response);
      setCustomer(response);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateCustomerDetails(customer).then((reponse) => {
      setCustomer(reponse);
    });
  };

  return (
    <div>
      <h2>Update Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={customer.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={customer.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={customer.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="creditCardNumber">Credit Card Number:</label>
          <input
            type="text"
            id="creditCardNumber"
            name="creditCardNumber"
            value={customer.creditCardNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Details</button>
      </form>
    </div>
  );
};

export default UpdateCustomerDetails;
