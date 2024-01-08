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
import { useNavigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import data from "./docdata.js"
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';


const Listingrequest = () => {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState("");
  const userData = data[0]; 

  const renderKeyValue = (key, value) => (
    <div key={key} style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
      <div>{key}</div>
      <div>:</div>
      <div>{value}</div>
    </div>
  );

  const downloadPropertyTitleDeals = () => {
    const content = userData.Propertytitledeals;
    const fileName = 'Propertytitledeals.txt';
    download(content, fileName);
  };

  const downloadFittingAndContentsForm = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'Fittingandcontentsform.txt';
    download(content, fileName);
  };

  const downloadFloorplan = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'FloorPlan.txt';
    download(content, fileName);
  };
  const downloadEnergyPerformenceCertificate = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'EnergyPerformenceCertificate.txt';
    download(content, fileName);
  };
  const downloadLeaseholdInformation = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'LeaseholdInformation.txt';
    download(content, fileName);
  };
  const downloadPropertyInfoForm = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'PropertyInfoForm.txt';
    download(content, fileName);
  };
  const downloadLocalAuthoritySearch = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'LocalAuthoritySearch.txt';
    download(content, fileName);
  };
  const downloadPropertyValuationReport = () => {
    const content = userData.Fittingandcontentsform;
    const fileName = 'PropertyValuationReport.txt';
    download(content, fileName);
  };

  const download = (content, fileName) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

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
        <img alt='back-arrow' src={backarrow} onClick={()=>{navigate('/')}} />
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
          {/* {Object.entries(userData).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
          <div>{key}</div>
          <div>:</div>
          <div>{value}</div>
        </div>
      ))} */}
      {/* {Object.entries(userData).map(([key, value]) => {
        if (typeof value === 'object') {
          return Object.entries(value).map(([nestedKey, nestedValue]) =>
            renderKeyValue(`${key}.${nestedKey}`, nestedValue)
          );
        } else {
          return renderKeyValue(key, value);
        }
      })} */}
      {/* <p>Address : {userData.Address}</p>
      <p>Pincode : {userData.Pincode}</p> */}

          <div style={{display:'flex'}}>
            <div>Name </div>
            <div style={{paddingLeft:"35px",paddingRight:"10px"}}>:</div>
            <div>{userData.name}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Address </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{userData.Address}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Pincode </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{userData.Pincode}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Phone No </div>
            <div style={{paddingLeft:"5px",paddingRight:"10px"}}>:</div>
            <div>{userData.contctDetails.phone}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Emain </div>
            <div style={{paddingLeft:"30px",paddingRight:"10px"}}>:</div>
            <div>{userData.contctDetails.email}</div>
          </div>
          
          {/* <p>Address : No48</p>
          <p>Pincode : 600234</p>
          <p>COntact Details</p>
          <p>phone : 987654321</p>
          <p>Mail ID: mmm@gmail.com</p> */}
        </div>
        <hr/>
        

      <div className='cont3'>
                    <p> Documents</p>
                    <div className='cont4'>
                        
                        <div className='contche' onClick={downloadPropertyTitleDeals}>
                            
                            <div className='doc'>
                                <h3>Property title deals</h3>
                            </div>
                           
                        </div>
                        <div className='contche' onClick={downloadFittingAndContentsForm}>
                            
                            <div className='doc'>
                                <h3>Fitting and contents form(TA10)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadEnergyPerformenceCertificate} >
                            
                            <div className='doc'>
                                <h3>Energy Performence Certificate(EPC)</h3>
                            </div>
                            
                        </div>
                        <div className='contche'onClick={downloadLeaseholdInformation} >
                            
                            <div className='doc'>
                                <h3>Leasehold Information(If applicable)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyInfoForm}>
                            
                            <div className='doc'>
                                <h3>Property Info Form(TA6)</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadLocalAuthoritySearch} >
                            
                            <div className='doc'>
                                <h3>Local Authority Search</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadPropertyValuationReport} >
                            
                            <div className='doc'>
                                <h3>Property Valuation Report</h3>
                            </div>
                            
                        </div>
                        <div className='contche' onClick={downloadFloorplan}>
                            
                            <div className='doc'>
                                <h3>Floor Plan</h3>
                            </div>
                            
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
                      <SingleBedIcon  sx={{fontSize:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfRooms' 
                         
                          pattern="-?\d*"
                      />            
                      </div>
                      <div>
                      <BathtubIcon  sx={{fontSize:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfBathrooms' 
                          
                          pattern="-?\d*"
                      />             
                      </div>
                      <div>
                      <img src={toiletlogo} alt='toilet' style={{width:'40px'}}/>    
                      <input 
                          type='text'
                          name='numberOfToilets' 
                          
                          pattern="-?\d*"
                      />            
                      </div>
                      <div>
                      <DirectionsCarFilledIcon sx={{fontSize:'40px'}}/>   
                      <input 
                          type='text'
                          name='numberOfParkingSpaces'
                          
                          pattern="-?\d*"
                      />            
                      </div>
                  </div>
                

                          </div>
                          
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
