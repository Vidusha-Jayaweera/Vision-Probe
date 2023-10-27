import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Scenes/Home';
import RegistrationPage from './Scenes/Registration';
import Dashboard from './AdminDashboard/Dashboard';
import VoiceRecognition from './components/useVoiceRecognition';
import { VoiceRecognitionProvider } from './components/voice';
import AddDoctor from './AdminDashboard/Add_doctor';
import viewDoctor from './AdminDashboard/view_doctor';
import Form from './AdminDashboard/componentsD/voiceform';
import ColorBlindnessTestVoice from './visionTests/color_blindness_test';
import ColorBlindnessTestResults from './visionTests/colorTestsResults';
import LandingPage from './visionTests/AboutColorBlindness';
import ColorBlindnessTestInstructions from './visionTests/Instructions';
import VisualActivityTest from './visionTests/visual_activity_Test';
import Loginpage from './Scenes/Login';
import Profile_patient from './Scenes/profile';
import Main from './home/Main';
import ButtonList from './visionTests/button_list';
// vidusha 

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import PatientDashboard from './Scenes/Patient_dashboard';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div className="App">
      <BrowserRouter>
      {loading ? (
          <Spinner />

          // vidusha routes
          ) : (
            <Routes>
              <Route
                path="/apply-doctor"
                element={
                  <ProtectedRoute>
                    <ApplyDoctor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/doctors"
                element={
                  <ProtectedRoute>
                    <Doctors />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/profile/:id"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor/book-appointment/:doctorId"
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notification"
                element={
                  <ProtectedRoute>
                    <NotificationPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/appointments"
                element={
                  <ProtectedRoute>
                    <Appointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor-appointments"
                element={
                  <ProtectedRoute>
                    <DoctorAppointments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />

           </Routes>
        )}



        <VoiceRecognitionProvider>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/voice" element={<VoiceRecognition />} />
            <Route path="/add_doctor" element={<AddDoctor />} />
            <Route path="/view_doctor" element={<viewDoctor/>}/>
            <Route path="/testform" element={<Form/>}/>
            <Route path="/testcolor" element={<ColorBlindnessTestVoice/>}/>
            <Route path="/colorResults" element={<ColorBlindnessTestResults/>}/>
            <Route path="/AboutColorblindness" element={<LandingPage/>}/>
            <Route path="/instructions" element={<ColorBlindnessTestInstructions/>}/>
           <Route path="/visualActivity"  element={<VisualActivityTest/>}/>
           <Route path="/user_login"  element={<Loginpage/>}/>
           <Route path="/user_dashboard"  element={<PatientDashboard/>}/>
           <Route path="/user_profile"  element={<Profile_patient/>}/>
           <Route path="/main"  element={<Main/>}/>
           <Route path="/button_list_test"  element={<ButtonList/>}/>




          </Routes>
        </VoiceRecognitionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
