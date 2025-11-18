import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Graphic Guide to Residential Space Planning. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">This is a fictional store for demonstration purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;