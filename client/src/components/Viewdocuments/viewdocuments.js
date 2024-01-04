import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./viewdocuments.css";
import samplelistinreq from "../ListingRequest/samplelistingrequest.js";
import toletlistinreq from '../ListingRequest/tolet.js';

const Listingrequest = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let a
  const renderListings = () => {
    
    if (selectedOption === "Forsale") {
        a=samplelistinreq
    }
    else{
        a=toletlistinreq
    }
      return a.map((data) => (
        <div key={data.id} className='mains'>
          <div className=''>
            <div className=''>

              <div className='nn'>
                <h1 className='headi'>Name</h1>
                <h3>{data.name}</h3>
              </div>
              <div className='nn'>
                <h1>Address</h1>
                <h3>{data.address}</h3>
              </div>
              <div className='nn'>
                <h1>Pincode</h1>
                <h3>{data.pincode}</h3>
              </div>
              <div className='nns'>
                <h1>Contact Details</h1>
                <h3>{data.contactdetails.phn}<br />
                  {data.contactdetails.email}</h3>
              </div>
              <div className='nn'>
                <h1>View Documents</h1>
                
              </div>
            </div>
          </div>
        </div>
      ));
    }

  return (
    <div className='main'>
      <div className='list-head'>
        <img alt='back-arrow' />
        <h1>Listing Request</h1>
        <div>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: '#9E5C08',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#9E5C08',
                },
                '&:focus': {
                  backgroundColor: '#9E5C08',
                  borderColor: 'blue', // Change border color on focus
                },
                '& .MuiSelect-icon': {
                  color: 'white',
                },
              }}
            >
              {/* <MenuItem value="">Select Option</MenuItem> */}
              <MenuItem value="Forsale">For Sale</MenuItem>
              <MenuItem value="To-let">To Let</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='seconddrop'>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: '#9E5C08',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#9E5C08',
                },
                '&:focus': {
                  backgroundColor: '#9E5C08',
                  borderColor: 'blue', // Change border color on focus
                },
                '& .MuiSelect-icon': {
                  color: 'white',
                },
              }}
            >
              <MenuItem value="" disabled>Select Option</MenuItem>
              <MenuItem value="Forsale">For Sale</MenuItem>
              <MenuItem value="To-let">To Let</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="messa">
        {renderListings()}
      </div>
    </div>
  );
}

export default Listingrequest;
