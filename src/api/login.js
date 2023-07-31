import axios from 'axios';

export const login = async (username, password) => {
try {
    // Replace 'https://api.example.com/login' with the actual URL of your authentication API endpoint
    const response = await axios.post('https://api.example.com/login', {
      username: username,
      password: password,
    });

    // Assuming the API returns the API token and role in the response data
    const apiToken = response.data.token;
    const userRole = response.data.role;
    const userId = response.data.userId;
    

    // Return the API token and user role as an object
    return { apiToken, userRole, userId};
  } catch (error) {
    // If there's an error, return null to indicate login failure
    console.error('Error during login:', error);
    return null;
  }
}