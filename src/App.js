import logo from './logo.svg';
import './App.css';
import HomePage from './components/main/HomePage';
import LoginPage from './components/login/LoginPage';
import UpdateCustomerDetails from './components/main/UpdateCustomerDetails';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import FlightsList from './components/main/FlightsList';
import Flight from './components/main/Flight'
const isLoggedIn = () => {
  return true
  //return !!localStorage.getItem('token'); // Replace 'token' with the name of your login token key
};

const handleLogout = () => {
  console.log('logging out')
  localStorage.setItem('token', null);
  localStorage.setItem('role', null);
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation Links */}
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes using the `Routes` component */}
        <Routes>
          {/* Route to the login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Route to the home page */}
          <Route
            path="/home"
            element={isLoggedIn() ? <HomePage /> : <Navigate to="/login" />}
          />

          {/* Route to the settings page */}
          <Route
            path="/settings"
            element={
              isLoggedIn() ? <UpdateCustomerDetails /> : <Navigate to="/login" />
            }
          />
        
          {/* Route to the settings page */}
          <Route
            path="/flights"
            element={
              isLoggedIn() ? <FlightsList /> : <Navigate to="/login" />
            }
            />

      <Route path="/flights/:flightId" element={<Flight />} />

  </Routes>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button> 
        }
      </div>
    </Router>
  );
}

export default App;
