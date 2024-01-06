import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import '../signup/signup.css'
const Signup = () => {
  const [formData, setFormData] = useState({
    Username: '',
    email: '',
    password: '',
    Fullname: '',
    title: '',
    zoneNumber: '',
    profileImage: null,
    verified: false,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataCopy = { ...formData, verified: false };
      const formDataToSend = new FormData();

      for (const key in formDataCopy) {
        formDataToSend.append(key, formDataCopy[key]);
      }

      const response = await fetch('https://raddaf-be.onrender.com/agent-auth/signup', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          // Add any headers if needed
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
      } else {
        console.error('Signup failed:', data.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
    console.log(formData, "formdata");
  };

  return (
    <div className='main-formdiv'>
      <form className="form-field1" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="Username"
          className="inputs"
          placeholder="Username"
          value={formData.Username}
          onChange={handleInputChange}
        />

        <TextField
          type="email"
          name="email"
          className="inputs"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          type="password"
          name="password"
          className="inputs"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          name="Fullname"
          className="inputs"
          placeholder="Fullname"
          value={formData.Fullname}
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          name="title"
          className="inputs"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <TextField
          type="text"
          name="zoneNumber"
          className="inputs"
          placeholder="Zone Number"
          value={formData.zoneNumber}
          onChange={handleInputChange}
        />

            <input
          type="file"
          name="profileImage"
          className="inputs"
          accept="image/*"
          onChange={handleFileChange}
        />


        <Button variant="contained" className="buttonsmy" type="submit">
          Sign Up
        </Button>

       
      </form>
    </div>
  );
};

export default Signup;
