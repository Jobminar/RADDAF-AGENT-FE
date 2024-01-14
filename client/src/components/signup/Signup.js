import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';
import '../signup/signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');
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

      reader.onload = () => {
        // Check if the file size is less than 30KB
        if (file.size <= 30 * 1024) {
          setFormData({ ...formData, profileImage: reader.result });
          setWarning('');
        } else {
          // Display a warning message if the file size exceeds 30KB
          setWarning('The selected image exceeds the recommended size of 30KB. Uploading large images may affect performance.');
          Swal.fire({
            icon: 'warning',
            title: 'Image Size Warning',
            text: 'The selected image exceeds the recommended size of 30KB. Uploading large images may affect performance.',
          });
        }
      };

      reader.readAsDataURL(file);
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
        navigate('/login');

        Swal.fire({
          icon: 'success',
          title: 'Successful signup',
          text: 'Signup has been successful',
        });
      } else {
        console.error('Signup failed:', response.status, data);
        Swal.fire({
          icon: 'error',
          title: 'Failed to signup',
          text: `${response.status} ${data}`,
        });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to signup',
        text: "failed to signup",
      });
    }

    console.log('Form data:', formData); // Log the form data for debugging
  };

  return (
    <div className='main-formdiv'>
      <form className='form-field1' onSubmit={handleSubmit}>
        <TextField
          type='text'
          name='Username'
          className='inputs'
          placeholder='Username'
          value={formData.Username}
          onChange={handleInputChange}
        />

        <TextField
          type='email'
          name='email'
          className='inputs'
          placeholder='Email'
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          type='password'
          name='password'
          className='inputs'
          placeholder='Password'
          value={formData.password}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='Fullname'
          className='inputs'
          placeholder='Fullname'
          value={formData.Fullname}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='title'
          className='inputs'
          placeholder='Title'
          value={formData.title}
          onChange={handleInputChange}
        />

        <TextField
          type='text'
          name='zoneNumber'
          className='inputs'
          placeholder='Zone Number'
          value={formData.zoneNumber}
          onChange={handleInputChange}
        />

        <input
          type='file'
          name='profileImage'
          className='inputs'
          accept='image/*'
          onChange={handleFileChange}
        />
        <p style={{ color: 'red' }}>{warning}</p>

        <Button variant='contained' className='buttonsmy' type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
