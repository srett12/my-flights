import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div>
      <h2>Unauthorized Access</h2>
      <p>You are not authorized to view this page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Unauthorized;