import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import {useRole} from './RoleContext.js'

const ProtectedRoute = ({ roles, ...rest }) => {
  const { userRole } = useRole();

  if (!roles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
