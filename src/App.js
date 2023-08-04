import logo from './logo.svg';
import './App.css';
import HomePage from './components/main/HomePage';
import LoginPage from './components/login/LoginPage';
import UpdateCustomerDetails from './components/main/UpdateCustomerDetails';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import FlightsList from './components/main/FlightsList';
import Flight from './components/main/Flight'
import { RoleProvider } from './components/common/RoleContext.js'
import ProtectedRoute from './components/common/ProtectedRoute';
import Unauthorized from './components/main/Unauthorized'

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/mytrips">My Trips</Link>
            </li>
            <li>
              <Link to="/flights">All Flights</Link>
            </li>
          </ul>
        </nav>
        <RoleProvider>
        {/* Define routes using the `Routes` component */}
        <Routes>

          {/* Route to the login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Route to the home page */}
          <Route
            path="/"
            element={isLoggedIn() ? <HomePage /> : <Navigate to="/login" />}
          />

          {/* Route to the settings page */}
          <Route exact path='/' element={<ProtectedRoute roles={['customer']}/>}>
          <Route
            path="/settings"

            element={
              isLoggedIn() ? <UpdateCustomerDetails /> : <Navigate to="/login" />
            }
          />
          </Route>
        
          {/* Route to the settings page */}
          <Route
            path="/flights"

            element={
              isLoggedIn() ? <FlightsList /> : <Navigate to="/login" />
            }
            />
<Route exact path='/' element={<ProtectedRoute roles={['customer']}/>}>
<Route path="/flights/:flightId" element={<Flight />} />
</Route>
      

      <Route
            path="/mytrips"

            element={
              isLoggedIn() ? <FlightsList userFlights={true}/> : <Navigate to="/login" />
            }
            />

          <Route
            path="/unauthorized"

            element={
               <Unauthorized /> 
            }
            />  


  </Routes>
  </RoleProvider>
        {isLoggedIn() && <button onClick={handleLogout}>Logout</button> 
        }
      </div>
    </Router>
  );
}

export default App;
