import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import '../login/login.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleLogin,GoogleOAuthProvider} from '@react-oauth/google';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, rememberMe: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://raddaf-be.onrender.com/agent-auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Handle successful login, e.g., redirect to another page
      } else {
        console.error('Login failed:', data.error);
        // Handle failed login, e.g., display an error message
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    console.log('Login clicked', formData);
  };

  return (
    <div className='main-divs'>
      
      <form className='form-contain' onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField
          variant="filled"
          type="email"
          name="email"
          label="Email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange}
        />

        <TextField
          variant="filled"
          type="password"
          name="password"
          label="Password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleCheckboxChange}
            />
          }
          label="Remember Me"
        />
        <button type="submit" className='button-admin'>
          Login
        </button>
        <div className='icons-mui'>
        <Button sx={{background:'white',color:"black"}} className='iconbut' startIcon={<FacebookIcon sx={{color:"blue"}}/>}>Facebook</Button>
         
          <GoogleOAuthProvider>
          <GoogleLogin  />
          
          </GoogleOAuthProvider>
             
              
        </div>
      </form>
      
    </div>
  );
};

export default Login;
