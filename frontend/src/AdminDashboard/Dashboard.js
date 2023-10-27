import React from 'react';
import './Dashboard.css';
import '../index.css'



function Dashboard() {
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

        <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 mb-4" >
                <div class="rounded p-3 bg-primary text-white" style={{height:'200px',width:'200px'}}>
               <center> <iconify-icon icon="material-symbols:add-ad-sharp" style={{color: 'black'}} width="50"></iconify-icon></center>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="rounded p-3 bg-primary text-white" style={{height:'200px',width:'200px'}}>
                  <center> <iconify-icon icon="material-symbols:reviews-outline" style={{color: 'black'}} width="50"></iconify-icon></center>
                </div>
               
            </div>
            <div class="col-md-4 mb-4">
                <div class="rounded p-3 bg-primary text-white" text-white style={{height:'200px',width:'200px'}}>
                    Box 3
                </div>
            </div>
        </div>
    </div>


          
        
        </div>

        </div>
        <div style={{backgroundColor:'#b3cde0' ,height:'50px'}}>

<center> <p><b>© Copyright VITAL-HUB. All Rights Reserved
Designed by Drunken-Devs</b></p></center>

</div>
    </div>


    
    
    </>
  );
}

export default Dashboard;
