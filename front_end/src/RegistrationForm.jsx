import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://192.168.29.171:5000/api/register', formData)
    .then((response) => {
      console.log(response.data); // Log the response from the backend
      // Optionally, display a success message to the user
    })
    .catch((error) => {
      console.error('Error submitting form: because', error);
      // Optionally, display an error message to the user
    });
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          //value={formData.confirmPassword}
          onChange={handleChange}
          required
        /> */}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
