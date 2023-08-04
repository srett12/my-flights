import axios from "axios";

export const fetchAirlineDetails = async (airlineId) => {
  return {
    name: "ELAL",
    country: 123,
  };
  try {
    const response = await axios.get(
      "https://api.example.com/get-airline/" + airlineId
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching airline details:", error);
  }
};

export const updateAirlineDetails = async (airline) => {
  try {
    // Send the updated customer data to the server using Axios
    const response = await axios.put(
      "https://api.example.com/update-airline",
      airline
    );
    // Assuming the server successfully updated the airline details, show a success message to the user
    console.log("Airline details updated successfully!", response.data);
    return true;
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error updating airline details:", error);
    console.error("An error occurred while updating airline details.");
    return false;
  }
};
