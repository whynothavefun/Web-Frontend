import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h2 className="mb-4 text-2xl font-bold text-black">
        404 - Page Not Found
      </h2>
      <p className="text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link to="/tokens" className="text-blue-600 hover:underline">
        Return to tokens
      </Link>
    </div>
  );
};

export default NotFound;
