import React, { useEffect } from "react";
import { useRole } from "../common/RoleContext.js";

const HomePage = () => {
  const { setUserRole } = useRole();
  useEffect(() => {
    setUserRole("airline");
  }, []);
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      {/* Add your home page content here */}
    </div>
  );
};

export default HomePage;
