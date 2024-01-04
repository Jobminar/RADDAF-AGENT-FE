import React, { useEffect } from 'react'
// import upload from '../Images/upload-image.jpeg'
import backarrow from '../Images/backarrow.png'
import { useState } from 'react'
import './Lista-property.css'
import { useNavigate } from 'react-router-dom'

// mui
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
// rooms
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import toiletlogo from '../Images/toilet-logo.png'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const Listaproperty = () => {
   const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState(null);
    const [formValues, setFormValues] = useState({
        propertyDescription: '',
        propertytype:'',
        selectsaleorrent:'',
        receptionlength: '',
        receptionwidth:'',
        kitchenlength: '',
        kitchenwidth:'',
        masterBedroomlength:'',
        masterBedroomwidth: '',
        bedroomlength:'',
        bedroomwidth: '',
        numberOfRooms: '',
        numberOfBathrooms: '',
        numberOfToilets: '',
        numberOfParkingSpaces: '',
        hospitalDistance: '',
        hospitalName: '',
        schoolDistance: '',
        schoolName: '',
        busStationDistance: '',
        busStationName: '',
        propertyscheduling:null,
        contactDetails: {
            fullname: '',
            email: '',
            mobileNumber: '',
            subject: ''
        },
        // Add more fields as needed
    });
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'selectValue') {
            setSelectedOption(value);
        }
    };

    const handleContactDetailsChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            contactDetails: {
                ...prevState.contactDetails,
                [name]: value
            }
        }));
    };
    


    const handleDateChange = (newValue) => {
        setFormValues((prevState) => ({
            ...prevState,
            propertyscheduling: newValue,
        }));
    };

    const handleInputFilter = (e) => {
        const { name, value, type, checked } = e.target;

        // For radio inputs, handle checked state to capture the value
        const inputValue = type === 'radio' ? (checked ? value : '') : value;

        setFormValues((prevState) => ({
            ...prevState,
            [name]: inputValue,
        }));
    };


    useEffect(() => {
        console.log('Form values:', formValues);
        // Perform actions based on formValues changes
    }, [formValues]);
   
    const handleSubmit = () => {
        if (
            !formValues.contactDetails.fullname ||
            !formValues.contactDetails.email ||
            !formValues.contactDetails.mobileNumber ||
            !formValues.contactDetails.subject
        ) {
            alert('Please fill in all contact details.');
        } else {
            alert('Form submitted sucesfully')
        }
    };

    const handleSkip = () => {
        if (
            !formValues.contactDetails.fullname ||
            !formValues.contactDetails.email ||
            !formValues.contactDetails.mobileNumber ||
            !formValues.contactDetails.subject
        ) {
            alert('Please fill in all contact details.');
        } else {
           
        }
    };
  
  return (
    <div className='Lista-property-con'>
        {/* list head */}
        <div className='list-head'>
            <img src={backarrow} alt='back-arrow' onClick={()=>{navigate('/')}}/>
            <h1>List a Property</h1>
            <div>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Select
                
                // displayEmpty
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
                  name="selectsaleorrent"
                  value={formValues.selectsaleorrent}
                  onChange={handleInputChange}
                >
                <MenuItem value="Forsale" onClick={() => setSelectedOption('sale')}>Forsale</MenuItem>
                <MenuItem value="To-let" onClick={() => setSelectedOption('rent')}>To-let</MenuItem>
                </Select>
            </FormControl>
            </div>
        </div>
        {/* filter section */}
        <div className='filter-section'>
            <div className='for-sale-filter'>
              {selectedOption === 'sale' && (
                    <div className='commercial-residential'>
                        <div className='custom-radio'>
                            <input type="radio" id="Commercial" name="propertytype" value="Commercial" 
                                onChange={handleInputFilter}
                                checked={formValues.propertytype === 'Commercial'}/> 
                            <label for="Commercial">Commercial</label>
                        </div>
                         <div className='custom-radio'>
                            <input type="radio" id="Residential" name="propertytype" value="Residential"
                             onChange={handleInputFilter}
                             checked={formValues.propertytype === 'esidential'} /> 
                            <label for="Residential">Residential</label>
                         </div>
                        
                    </div>
                )}
            </div>  
            <div className='to-let-filter' >
            {selectedOption === 'rent' && (
              <div className='to-let-filter-sub'>
                        {/* Commercial / residential */}
                
                    <div class='commercial-residential-rental'>
                        <div className='custom-radio'>
                            <input type="radio" id="Commercial" name="propertytype" value="Commercial"  style={{color: "#9E5C08"}}/>
                            <label for="Commercial" >Commercial</label>
                        </div>
                        <div className='custom-radio'>
                            <input type="radio" id="Residential" name="propertytype" value="Residential" />
                            <label for="Residential" >Residential</label>
                        </div> 
                    </div>
            
                
                    {/* let only / management only / introduce only  */}
               
            
                    <div class='onlytype'>
                        <div className='custom-radio'>
                            <input type="radio" id="letonly" name="onlytype" value="letonly" />
                            <label for="letonly">Let only</label>
                        </div>
                        <div className='custom-radio'>
                            <input type="radio" id="Managementonly" name="onlytype" value="Managementonly" />
                            <label for="Managementonly">Management only  </label>
                        </div>
                        <div className='custom-radio'>
                            <input type="radio" id="Introduceonly" name="onlytype" value="Introduceonly" /> 
                            <label for="Introduceonly">Introduce only</label>
                        </div>
                    </div>

              
                {/* including bills / excluding bills */}
                    <div className='billsonly'>
                        <div className='custom-radio'>
                            
                            <input type="radio" id="includingbills" name="bills" value="includingbills" /> 
                            <label for="includingbills">Including Bills</label>
                        </div>
                        <div className='custom-radio'>
                       
                            <input type="radio" id="excludingbills" name="bills" value="excludingbills" /> 
                            <label for="excludingbills">Excluding Bills </label>
                        </div>
                        
                    </div> 
              </div>
            )}
                
             
             </div>            
        </div>
        {/* list tail */}
        <div className='list-tail'>
            <div className='property-description'>
                    <h1>Property Description: </h1>
                    <p>A well-written description of the property, highlighting its key features and benefits.</p>
                    <textarea
                         name="propertyDescription"
                        value={formValues.propertyDescription}
                        onChange={handleInputChange}
                        placeholder="Type something about property..."
                        rows={6} 
                        cols={37} 
                        style={{
                        padding: '8px',
                        borderRadius: '4px',
                        // border: '1px solid #ccc',
                        resize: 'none', 
                        margin: '0.1rem 0rem',
                        background:'#FFECDE',
                        fontSize:'20px',
                        outline: 'none',
                        }}
                    />
            </div>
           {/* property dimensions */}
            <div className='property-dimensions'>
                <h1>Property Dimensions</h1>
                <div className='property-dimensions-main'>
                    <div className='property-dimensions-sub'>
                        Reception
                        <div className='dimensions-lw'>
                            <input 
                                type='text' 
                                name='receptionlength' 
                                value={formValues.receptionlength}
                                onChange={handleInputChange}
                                placeholder='length'
                            /> 
                            <p>Mtr</p>
                            <input 
                                type='text' 
                                name='receptionwidth' 
                                value={formValues.receptionwidth}
                                onChange={handleInputChange}
                                placeholder='width'
                            /> 
                            <p>Mtr</p>
                        </div>
                        
                    </div>
                    <div className='property-dimensions-sub'>
                        Kitchen 
                        <div className='dimensions-lw'>
                            <input 
                                type='text' 
                                name='kitchenlength'  
                                value={formValues.kitchenlength}
                                onChange={handleInputChange}
                                placeholder='length'
                            /> 
                            <p>Mtr</p>
                            <input 
                                type='text' 
                                name='kitchenwidth'  
                                value={formValues.kitchenwidth}
                                onChange={handleInputChange}
                                placeholder='width'
                            /> 
                            <p>Mtr</p>
                        </div>
                        
                    </div>
                    <div className='property-dimensions-sub'>
                        Master Bedroom
                        <div className='dimensions-lw'>
                            <input 
                                type='text'
                                name='masterBedroomlength'
                                value={formValues.masterBedroomlength}
                                onChange={handleInputChange}
                                placeholder='length'
                            /> 
                            <p>Mtr</p>
                            <input 
                                type='text'
                                name='masterBedroomwidth'
                                value={formValues.masterBedroomwidth}
                                onChange={handleInputChange}
                                placeholder='width'
                            /> 
                            <p>Mtr</p>
                        </div> 
                       
                    </div>
                    <div className='property-dimensions-sub'>
                        Bedroom 
                        <div className='dimensions-lw'>
                            <input 
                                type='text'
                                name='bedroomlength'
                                value={formValues.bedroomlength}
                                onChange={handleInputChange}
                                placeholder='length'
                            /> 
                            <p>Mtr</p>
                            <input 
                                type='text'
                                name='bedroomwidth'
                                value={formValues.bedroomwidth}
                                onChange={handleInputChange}
                                placeholder='width'
                            /> 
                            <p>Mtr</p>
                        </div>
                       
                    </div>
                </div>
                    

                    
            </div>
            {/* property details */}
            <div className='rooms-info'>
                <h1 >Property Details</h1>
                <div className='rooms-info-sub'>
                    <div >
                    <SingleBedIcon sx={{fontSize:'40px'}}/>    
                    <input 
                        type='text'
                        name='numberOfRooms' 
                        value={formValues.numberOfRooms} 
                        onChange={handleInputChange}
                        pattern="-?\d*"
                    />            
                    </div>
                    <div>
                    <BathtubIcon  sx={{fontSize:'40px'}}/>    
                    <input 
                        type='text'
                        name='numberOfBathrooms' 
                        value={formValues.numberOfBathrooms}
                        onChange={handleInputChange}
                        pattern="-?\d*"
                    />             
                    </div>
                    <div>
                    <img src={toiletlogo} alt='toilet' style={{width:'40px'}}/>    
                    <input 
                        type='text'
                        name='numberOfToilets' 
                        value={formValues.numberOfToilets} 
                        onChange={handleInputChange}
                        pattern="-?\d*"
                    />            
                    </div>
                    <div>
                    <DirectionsCarFilledIcon sx={{fontSize:'40px'}}/>   
                    <input 
                        type='text'
                        name='numberOfParkingSpaces'
                        value={formValues.numberOfParkingSpaces} 
                        onChange={handleInputChange}
                        pattern="-?\d*"
                    />            
                    </div>
                </div>
               

            </div>
        </div>
        {/* near by con */}
        <div className='nearby-con'>
             <h1>Near by</h1>  
            <div className='nearby-sub-con'>
            <div className='access'>
                <p>Hospital</p>
                <input className='accesskm'
                 type='text'
                 name='hospitalDistance'
                value={formValues.hospitalDistance} 
                onChange={handleInputChange}
                 />
                <p>KM</p> 
                <input placeholder='name of the hospital'
                 className='nameofaccess'
                 name='hospitalName'
                 value={formValues.hospitalName} 
                 onChange={handleInputChange}
                 />
             </div>  
             <div className='access'>
                <p>School</p>
                <input className='accesskm'
                 type='text'
                 name='schoolDistance'
                 value={formValues.schoolDistance} 
                 onChange={handleInputChange}
                 />
                <p>KM</p> 
                <input placeholder='name of the school' 
                className='nameofaccess'
                name='schoolName'
                value={formValues.schoolName} 
                onChange={handleInputChange}
                />
             </div> 
             <div className='access'>
                <p>Bus station</p>
                <input className='accesskm'
                 type='text'
                 name='busStationDistance'
                 value={formValues.busStationDistance} 
                 onChange={handleInputChange}
                 />
                <p>KM</p> 
                <input placeholder='name of the Bus station'
                 className='nameofaccess'
                 name='busStationName'
                 value={formValues.busStationName} 
                 onChange={handleInputChange}
                 />
             </div> 
             <div className='property-viewing-schedule'>
                <h1>Property scheduling</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs} className="customLocalizationProvider">
                <DatePicker
                    className="customDatePicker"
                    value={formValues.propertyscheduling}
                    onChange={(newValue) => {
                        handleDateChange(newValue);
                        handleInputChange({
                            target: {
                                name: 'propertyscheduling',
                                value: newValue,
                            },
                        });
                    }}
                />
                </LocalizationProvider>
            </div>

            </div>
             
        </div>
        {/* contact details */}
         <div className='contact-details'>
                    <h1>Contact details</h1>
                    <div className='contact-sub-details'>
                        <div>
                        <p>Name</p>
                            <TextField
                                // label="With normal TextField"
                                id="filled-start-adornment"
                                required  
                                sx={{
                                    m: 0,
                                    width: '20rem',
                                    '& .MuiFilledInput-root': {
                                    background: '#FFECDE', // Set background color
                                    '&:hover': {
                                        background: '#FFECDE', // Maintain background color on hover
                                    },
                                    '&.Mui-focused': {
                                        border: 'none', // Remove border on focus
                                        boxShadow: 'none', // Remove box shadow on focus
                                    },
                                    },
                                }}
                                
                                variant="filled"
                                name="fullname"
                                value={formValues.contactDetails.fullname}
                                onChange={handleContactDetailsChange}
                            />
                        </div>
                        <div>
                          <p>mail id:</p>
                            <TextField
                                // label="With normal TextField"
                                id="filled-start-adornment"
                                required  
                                sx={{
                                    m: 0,
                                    width: '20rem',
                                    '& .MuiFilledInput-root': {
                                    background: '#FFECDE', // Set background color
                                    '&:hover': {
                                        background: '#FFECDE', // Maintain background color on hover
                                    },
                                    '&.Mui-focused': {
                                        border: 'none', // Remove border on focus
                                        boxShadow: 'none', // Remove box shadow on focus
                                        borderBlockStyle:'#FFECDE'
                                    },
                                    },
                                }}
                               
                                variant="filled"
                                name="email"
                                value={formValues.contactDetails.email}
                                onChange={handleContactDetailsChange}
                            />
                        </div> 
                        <div>
                        <p>Mobile No:</p>
                            <TextField
                                // label="With normal TextField"
                                id="filled-start-adornment"
                                required  
                                sx={{
                                    m: 0,
                                    width: '20rem',
                                    '& .MuiFilledInput-root': {
                                    background: '#FFECDE', // Set background color
                                    '&:hover': {
                                        background: '#FFECDE', // Maintain background color on hover
                                    },
                                    '&.Mui-focused': {
                                        border: 'none', // Remove border on focus
                                        boxShadow: 'none', // Remove box shadow on focus
                                        borderBlockStyle:'#FFECDE'
                                    },
                                    },
                                }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">+91 |</InputAdornment>
                                }}
                                variant="filled"

                                name="mobileNumber"
                                value={formValues.contactDetails.mobileNumber}
                                onChange={handleContactDetailsChange}
                            />
                        </div>
                        <div>
                        <p>Subject :</p>
                            <TextField
                                // label="With normal TextField"
                                id="filled-start-adornment"
                                required  
                                sx={{
                                    m: 0,
                                    width: '20rem',
                                    '& .MuiFilledInput-root': {
                                    background: '#FFECDE', // Set background color
                                    '&:hover': {
                                        background: '#FFECDE', // Maintain background color on hover
                                    },
                                    '&.Mui-focused': {
                                        border: 'none', // Remove border on focus
                                        boxShadow: 'none', // Remove box shadow on focus
                                        borderBlockStyle:'#FFECDE'
                                    },
                                    },
                                }}
                               
                                variant="filled"

                                name="subject"
                                value={formValues.contactDetails.subject}
                                onChange={handleContactDetailsChange}
                            />
                        </div>
                            
                    </div>

         </div>
         <div className='buttons'>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={handleSubmit}>Submit</button>
         </div>
       
    </div>
  )
}

export default Listaproperty

