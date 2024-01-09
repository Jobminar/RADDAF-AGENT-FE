import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./viewdocuments.css";
import samplelistinreq from "../ListingRequest/samplelistingrequest.js";
import toletlistinreq from '../ListingRequest/tolet.js';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import toiletlogo from '../Images/toilet-logo.png'
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';


const Listingrequest = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // setFormValues((prevState) => ({
  //           ...prevState,
  //           [name]: inputValue,
  //       }));

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
              <MenuItem value="" disabled>Generate Invoice</MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="1.5">1.5</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="2.5">2.5</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{display:"flex"}}>
        {/* {renderListings()} */}
        <div>
          <img src="" alt='userimage'/>
          <p>Name :  Alex</p>
          <p>Address : No48</p>
          <p>Pincode : 600234</p>
          <p>COntact Details</p>
          <p>phone : 987654321</p>
          <p>Mail ID: mmm@gmail.com</p>
        </div>
        <hr/>
        {/* <div style={{display:'flex',flexDirection:"column",alignItems:'flex-start'}}> */}
        {/* <h2>Documents</h2> */}
        {/* <div className='mmm' >
          <h2>Documents</h2>
          <div style={{display:"flex",flexDirection:"row"}}>
            <div>
            <p>Property Title Deals</p>
            </div>
            <div>
            <p>fitting and contents form</p>
            </div>
          </div>
        </div> */}

<div className='cont3'>
                    <p> Documents</p>
                    <div className='cont4'>
                        
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Property title deals</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche'>
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Fitting and contents form(TA10)</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg> */}
                            {/* </div> */}
                        </div>
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Energy Performence Certificate(EPC)</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Leasehold Information(If applicable)</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche'>
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Property Info Form(TA6)</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Local Authority Search</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Property Valuation Report</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className='contche' >
                            {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </div> */}
                            <div className='doc'>
                                <h3>Floor Plan</h3>
                            </div>
                            {/* <div className='doc'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                            </svg>
                            </div> */}
                        </div>
                        <div className=''>
                          <h1>
                            Property Descrition:
                          </h1>
                          <p className='bpara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                          <div className='rooms-info' style={{paddingTop:"20px"}}>
                  <h1 >Property Details</h1>
                  <div className='rooms-info-sub'>
                      <div >
                      <SingleBedIcon sx={{fontSize:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfRooms' 
                          // value={formValues.numberOfRooms} 
                          // onChange={handleInputChange}
                          pattern="-?\d*"
                      />            
                      </div>
                      <div>
                      <BathtubIcon  sx={{fontSize:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfBathrooms' 
                          // value={formValues.numberOfBathrooms}
                          // onChange={handleInputChange}
                          pattern="-?\d*"
                      />             
                      </div>
                      <div>
                      <img src={toiletlogo} alt='toilet' style={{width:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfToilets' 
                          // value={formValues.numberOfToilets} 
                          // onChange={handleInputChange}
                          pattern="-?\d*"
                      />            
                      </div>
                      <div>
                      <DirectionsCarFilledIcon sx={{fontSize:'40px'}}/>   
                      <input 
                          type='text'
                          name='numberOfParkingSpaces'
                          // value={formValues.numberOfParkingSpaces} 
                          // onChange={handleInputChange}
                          pattern="-?\d*"
                      />            
                      </div>
                  </div>
                

                          </div>
                          {/* <div style={{display:"flex", justifyContent:"space-between"}}>
                            <div style={{marginRight:"70px"}}><h3>Any Special condition</h3></div>
                            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div>
                          </div> */}
                    </div>
                          <div style={{display:"flex",}}>
                            <div style={{marginRight:"40px"}}><h3>Any Special condition :</h3></div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div>
                          </div>
                          <div style={{display:"flex",marginTop:"20px"}}>
                                <div style={{marginRight:"40px"}}><h3>Property Viewing Schedule :</h3></div>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginRight:"30px",marginTop:"20px"}} fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z"/>
                                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                        </svg>
                                      </div>
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>23rd Nov 22023, 8:00 am</p></div>
                          </div>
                          <button style={{padding:"20px",borderRadius:"10px",fontSize:"20px",fontWeight:"bold",backgroundColor:"#9E5C08",border:"none",color:"white",width:"10%",marginRight:"20px"}}>Approve</button>
                          <button style={{padding:"20px",borderRadius:"10px",fontSize:"20px",fontWeight:"bold",border:"none",color:"#9E5C08",width:"10%",marginRight:"20px"}}>Decline</button>
                    </div>                    
      </div>
    </div>
  );
}

export default Listingrequest;
