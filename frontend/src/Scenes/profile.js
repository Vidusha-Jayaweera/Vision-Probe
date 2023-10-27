import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile_patient() {
    const [userId, setUserId] = useState(sessionStorage.getItem('userId'));
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem('userEmail'));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the user's email from the server
    if (userEmail) {
      axios.get(`http://localhost:5000/api/patient/user?email=${userEmail}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userEmail]);

  return (
    <div>
      <h1>Welcome to User Dashboard</h1>
      <p>User ID: {userId}</p>
      <p>Email: {userEmail}</p>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          {/* Display other user details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
export default Profile_patient;
