import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ProfilePage from './profile';
import { useSession } from '../context/patient_context';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { dispatch } = useSession();

  const handleLoginSuccess = (userId, userEmail) => {
    dispatch({
      type: 'SET_SESSION',
      payload: { userId, userEmail },
      
    });

    // Set user data in session or cookie
    // Use sessionStorage for session storage (cleared when the browser is closed)
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('userEmail', userEmail);

     window.location.href = '/user_dashboard';
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/patient/login', {
        email: email,
        password: password,
      });

      // Check if the login was successful
      if (response.status === 200) {
        handleLoginSuccess(response.data.userId, email);
        console.log('Login API Response:', response);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <>
      <div className="limiter" id="login">
        <div
          className="container-login100"
          style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-5 col-md-offset-1">
                <div className="login_topimg"></div>
                <div className="wrap-login100">
                  <form
                    className="login100-form validate-form"
                    onSubmit={handleLogin}
                  >
                    <span className="login100-form-title "> Login </span>
                    <span className="login100-form-subtitle m-b-16">
                      {' '}
                      to your account{' '}
                    </span>
                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Valid email is required: ex@abc.xyz"
                    >
                      <input
                        className="input100"
                        required
                        type="text"
                        name="Username"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        {' '}
                        <span className="glyphicon glyphicon-user"></span>{' '}
                      </span>
                    </div>
                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Password is required"
                    >
                      <input
                        className="input100"
                        required
                        type="password"
                        name="pass"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        {' '}
                        <span className="glyphicon glyphicon-lock"></span>{' '}
                      </span>
                    </div>
                    <div className="flex-sb-m w-full p-b-30">
                      <div>
                        <a href="#" className="txt1">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    {error && (
                      <div className="text-danger">{error}</div>
                    )}
                    <div className="container-login100-form-btn p-t-25">
                      <button className="login100-form-btn" type="submit">
                        {' '}
                        Login{' '}
                      </button>
                    </div>
                  </form>
                  <p>Don't have an account?</p>
                  <div>
                    <Link to={'/RegistrationPage'}>
                      <button className="login100-form-btn" type="submit">
                        {' '}
                        Register now{' '}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
