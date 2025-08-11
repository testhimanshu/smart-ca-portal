import React from 'react';
import ClientReviews from './ClientReviews';

const ServiceLayout = ({ children }) => {
  return (
    <div>
      {children}
      <ClientReviews /> {/* ✅ This will show after every service page */}
    </div>
  );
};

export default ServiceLayout;