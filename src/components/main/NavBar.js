import React from "react";
import { Link } from "react-router-dom";
import { useRole } from "../common/RoleContext.js";
import { ROLES } from "../../utils/Consts";

const Navbar = ({ isLoggedIn }) => {
  const { userRole } = useRole();

  const handleLogout = () => {
    console.log("logging out");
    localStorage.setItem("token", null);
    localStorage.setItem("role", null);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        {userRole === ROLES.customer && (
          <li>
            <Link to="/mytrips">My Trips</Link>
          </li>
        )}
        <li>
          <Link to="/flights">All Flights</Link>
        </li>
        {/*{isLoggedIn() ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}*/}
      </ul>
    </nav>
  );
};

export default Navbar;
