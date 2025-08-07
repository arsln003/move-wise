import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import bg from '../assets/bg.jpg';

function RootLayout() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 pt-20">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
