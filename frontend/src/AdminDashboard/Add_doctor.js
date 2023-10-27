
import './Dashboard.css';
import '../index.css'
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function AddDoctor() {
  const [doctorData, setDoctorData] = useState({
    name: '',
    nic: '',
    experience: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      };
  
      // Make a POST request to your backend route for adding a doctor
      const response = await fetch('http://localhost:5000/api/insert', requestOptions);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Doctor added successfully:', data);
      } else {
        console.error('Error adding doctor:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };
  

  return (

  
      <> 
     <div class="px-0 bg-light" >
      <div class="d-flex" style={{height:'100% ',backgroundColor:'#005b96'}}>
          <div class="d-flex align-items-center " id="navbar" style={{height:'100px',backgroundColor:'#005b96'}}> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button> <a class="text-decoration-none fs14 ps-2" href="#">vision-Vital<span class="fs13 pe-2">.com</span></a> </div>
          <div id="navbar2" class="d-flex justify-content-end pe-4" style={{backgroundColor:'	#005b96'}}> <span class="far fa-user-circle "></span> </div>
      </div>
      <div class="d-md-flex"  >
          <ul id="navbar-items" class="p-0" style={{backgroundColor:'	#005b96'}}>
              <li> <span class="fas fa-th-list"></span> <span class="ps-3 name">Dashboard</span> </li>
              <li> <span class="fas fa-chart-line"></span> <span class="ps-3 name">Add doctors</span> </li>
              <li> <span class="fas fa-clipboard-check"></span> <span class="ps-3 name">View doctors</span> </li>
              <li> <span class="fas fa-suitcase-rolling"></span> <span class="ps-3 name">reviews</span> </li>
              <li> <span class="fas fa-calendar-alt"></span> <span class="ps-3 name">account</span> </li>
              {/* <li> <span class="fas fa-comment-alt"></span> <span class="ps-3 name">reqests</span> </li>
              <li> <span class="fas fa-store-alt"></span> <span class="ps-3 name">merchants</span> </li> */}
          </ul>
          <div id="topnavbar" >
  
      <center>
        <h1>Add a Doctor</h1>
      </center>

      <form style={{ width: '600px', marginLeft: '250px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Doctor name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={doctorData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nic" className="form-label">
            NIC
          </label>
          <input
            type="text"
            className="form-control"
            id="nic"
            name="nic"
            value={doctorData.nic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Experience
          </label>
          <input
            type="text"
            className="form-control"
            id="experience"
            name="experience"
            value={doctorData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailAddress"
            name="emailAddress"
            value={doctorData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Doctor
        </button>
      </form>
    </div>
  
  
            
          
          </div>
  
          </div>
          <div style={{backgroundColor:'#b3cde0' ,height:'50px'}}>
  
  <center> <p><b>© Copyright VITAL-HUB. All Rights Reserved
  Designed by Drunken-Devs</b></p></center>
  
  </div>
      </>
  );
}

export default AddDoctor;
