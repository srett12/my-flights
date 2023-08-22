import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/main/HomePage";
import LoginPage from "./components/login/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import FlightsList from "./components/main/FlightsList";
import Flight from "./components/main/Flight";
import { RoleProvider } from "./components/common/RoleContext.js";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Unauthorized from "./components/main/Unauthorized";
import Settings from "./components/main/Settings";
import { ROLES } from "./utils/Consts";
import Navbar from "./components/main/NavBar";
import NotFoundPage from "./components/common/NotFoundPage";
import UserDropdown from "./components/main/UserDropdown";

const isLoggedIn = () => {
  return !!localStorage.getItem("userId"); // Replace 'token' with the name of your login token key
};

function App() {
  return (
    <Router>
      <div>
        <RoleProvider>
          <UserDropdown />
          <Navbar isLoggedIn={isLoggedIn} />
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
            <Route
              exact
              path="/settings"
              element={
                <ProtectedRoute roles={[ROLES.customer, ROLES.airline]} />
              }
            >
              <Route
                path="/settings"
                element={
                  isLoggedIn() ? (
                    <Settings role={localStorage.setItem("role", null)} />
                  ) : (
                    <Navigate to="/login" />
                  )
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
            <Route
              exact
              path="/flights/:flightId"
              element={<ProtectedRoute roles={[ROLES.customer]} />}
            >
              <Route path="/flights/:flightId" element={<Flight />} />
            </Route>
            <Route
              exact
              path="/mytrips"
              element={<ProtectedRoute roles={[ROLES.customer]} />}
            >
              <Route
                path="/mytrips"
                element={
                  isLoggedIn() ? (
                    <FlightsList userFlights={true} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            </Route>

            <Route path="/unauthorized" element={<Unauthorized />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RoleProvider>
      </div>
    </Router>
  );
}

export default App;
