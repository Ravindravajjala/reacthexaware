import React, { useState } from 'react';
import axios from 'axios';
import './RegisterUser.css';

function RegisterUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!emailAddress || !password) {
      setErrorMessage('Fill in details');
      return;
    }

    try {
      // Send a POST request to your backend API to register the user
      const response = await axios.post('https://localhost:44382/api/User/api/user/register', {
        firstName,
        lastName,
        emailAddress,
        password,
      });

      if (response.status === 200) {
        // Registration successful, update the registration status
        setRegistrationStatus('Registration done');
      }
    } catch (error) {
      // Handle registration error, e.g., duplicate email
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <form>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{width: '100%', height:'4vh'}}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{width: '100%', height:'4vh'}}
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            style={{width: '100%', height:'4vh'}}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width: '100%', height:'4vh'}}
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </form>
      {registrationStatus && <p>{registrationStatus}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default RegisterUser;
