import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'; // Import your Footer component

function PatientDashboard() {
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
      <div>
        {userData ? (
          <main>
            <div className="title" style={{ backgroundColor: '#65c9cd' }}>
              <h2 style={{ color: 'black' }}>VISION PROBE</h2>
            
            </div>

           <div><center><h2>WELCOME {userData.name}</h2> </center></div>

            <div>
              <div className="container mt-5">
                <div className="row" style={{ marginTop: '150px' }}>
                  <div className="col-md-3">
                    <div className="card" style={{ height: '300px', backgroundColor: '#65c9cd' }}>
                      <img src="test.jpg" className="card-img-top" width="200px" height="200px" alt="Card 1 Image" />
                      <div className="card-body">
                        <center><h5 className="card-title">Start Tests</h5></center>
                        <p className="card-text">Explore our vision care tests.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card" style={{ height: '300px', backgroundColor: '#65c9cd' }}>
                      <img src="market.jpg" className="card-img-top" width="200px" height="200px" alt="Card 2 Image" />
                      <div className="card-body">
                        <center><h5 className="card-title">Marketplace</h5></center>
                        <p className="card-text">Discover our marketplace offerings.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card" style={{ height: '300px', backgroundColor: '#65c9cd' }}>
                      <img src="appointment.jpg" className="card-img-top" width="200px" height="200px" alt="Card 3 Image" />
                      <div className="card-body">
                        <center><h5 className="card-title">Add Appointment</h5></center>
                        <p className="card-text">Schedule your appointments with us.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card" style={{ height: '300px', backgroundColor: '#65c9cd' }}>
                      <img src="feedback.jpg" className="card-img-top" width="200px" height="200px" alt="Card 4 Image" />
                      <div className="card-body">
                        <center><h5 className="card-title">Add Feedback</h5></center>
                        <p className="card-text">Share your valuable feedback with us.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default PatientDashboard;
