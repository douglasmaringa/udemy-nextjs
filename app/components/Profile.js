'use client'
import React, { useState } from 'react';
import Header from './Header';

function Profile() {
  // State for user information
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('john.doe@example.com');

  // Function to handle updating the profile
  const handleUpdateProfile = () => {
    // Implement the logic for updating the user information
    console.log('Profile Updated:', { username, email });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4 bg-gray-200 rounded-lg">
        {/* Profile Content */}
        <div className="w-full p-4">
          <h1 className="text-3xl font-bold text-[#5B20B6] mb-4">Profile</h1>

          {/* User Information Inputs */}
          <div className="mb-4">
            <label className="text-lg font-semibold mb-2 block">Username:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold mb-2 block">Email:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Update Button */}
          <button
            className="bg-[#5B20B6] text-white px-4 py-2 rounded-md"
            onClick={handleUpdateProfile}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
