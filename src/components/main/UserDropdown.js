import React, { useState } from "react";
import { useRole } from "../common/RoleContext.js";
import { UserData } from "../../utils/Consts.js";
import { setUser } from "../../utils/login_utils.js";

const UserDropdown = () => {
  const [selectedUserId, setSelectedUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userDisplayRole, setUserDisplayRole] = useState("");
  const { setUserRole } = useRole();

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUserId(userId);

    if (userId in UserData) {
      const { role } = UserData[userId];
      setUserRole(role);
      setUserDisplayRole(role);
      setUser(userId, role);
    } else {
      setUserRole("");
      setUserDisplayRole("");
      setUser(null, null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <label htmlFor="userId">Select User ID:</label>
      <select id="userId" value={selectedUserId} onChange={handleUserChange}>
        <option value="">Select an ID</option>
        {Object.keys(UserData).map((userId) => (
          <option key={userId} value={userId}>
            {userId}
          </option>
        ))}
      </select>

      {/*<div>
        <label htmlFor="userName">User Name:</label>
        <input id="userName" type="text" value={userName} readOnly />
      </div>*/}
      <div>
        <label htmlFor="userDisplayRole">User Role:</label>
        <input
          id="userDisplayRole"
          type="text"
          value={userDisplayRole}
          readOnly
        />
      </div>
    </div>
  );
};

export default UserDropdown;
