// import React from 'react'
// import MenuItem from '@mui/material/MenuItem';
// // import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import "./Listingrequest.css"
// import samplelistinreq from "./samplelistingrequest.js"
// import toletlistinreq from './tolet.js';

// const Listingrequest = () => {
//     const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div className='main'>
//         <div className='list-head'>
//             <img  alt='back-arrow'/>
//             <h1>List a Property</h1>
//             <div>
//             <FormControl sx={{ m: 1, minWidth: 250}}>
//                 <Select
//                 // value={age}
//                 // onChange={handleChange}
//                 // displayEmpty
//                 inputProps={{ 'aria-label': 'Without label' }}
//                 sx={{
//                     backgroundColor: '#9E5C08',
//                     color: 'white',
//                     '&:hover': {
//                       backgroundColor: '#9E5C08',
//                     },
//                     '&:focus': {
//                       backgroundColor: '#9E5C08',
//                       borderColor: 'blue', // Change border color on focus
//                     },
//                     '& .MuiSelect-icon': {
//                       color: 'white',
//                     },
//                   }}
//                 >
                
//                 <MenuItem value="">
//                 </MenuItem>
//                 <MenuItem value="Forsale">Forsale</MenuItem>
//                 <MenuItem value="To-let">To-let</MenuItem>
//                 </Select>
//             </FormControl>
//             </div>
//         </div>
//         <div className="messa">
                    
//                   {
//                     samplelistinreq.map((data)=>{
//                         return(
//                             <>
//                                 <div  className='mains'>                                
//                                     <div key={data.id} className='profile-ent'>
//                                         <div className='incont'>
//                                         {/* <hr className="hr-line" /> */}
//                                         <div className='nn'>
//                                             <h1 className='headi'>Name</h1>
//                                             {/* <hr className="hr-line" /> */}
//                                             <h3>{data.name}</h3>
//                                         </div>
//                                         <div className='nn'>
//                                             <h1>Address</h1>
//                                             {/* <hr/> */}
//                                             <h3>{data.address}</h3>
//                                         </div>
//                                         <div className='nn'>
//                                             <h1>Pincode</h1>
//                                             {/* <hr/> */}
//                                             <h3>{data.pincode}</h3>
//                                         </div>
//                                         <div className='nns'>
//                                             <h1>Contact Details</h1>
//                                             <h3>{data.contactdetails.phn}<br/>
//                                             {data.contactdetails.email}</h3>
//                                         </div>
//                                         <div className='nn'>
//                                             <h1>View Documents</h1>
//                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="currentColor" class="bi ii bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                                                 <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
//                                             </svg>
//                                         </div> 
//                                     </div>
//                                     </div>
//                                 </div>
//                             </>
//                         )
//                     })
//                   }
//                 </div>
//     </div>
//   )
// }

// export default Listingrequest

// import React, { useState } from 'react';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import "./Listingrequest.css";
// import samplelistinreq from "./samplelistingrequest.js";
// import toletlistinreq from './tolet.js';

// const Listingrequest = () => {
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div className='main'>
//       <div className='list-head'>
//         <img alt='back-arrow' />
//         <h1>List a Property</h1>
//         <div>
//           <FormControl sx={{ m: 1, minWidth: 250 }}>
//             <Select
//               value={selectedOption}
//               onChange={handleOptionChange}
//               inputProps={{ 'aria-label': 'Without label' }}
//               sx={{
//                 backgroundColor: '#9E5C08',
//                 color: 'white',
//                 '&:hover': {
//                   backgroundColor: '#9E5C08',
//                 },
//                 '&:focus': {
//                   backgroundColor: '#9E5C08',
//                   borderColor: 'blue', // Change border color on focus
//                 },
//                 '& .MuiSelect-icon': {
//                   color: 'white',
//                 },
//               }}
//             >
//               <MenuItem value="">Select Option</MenuItem>
//               <MenuItem value="Forsale">Forsale</MenuItem>
//               <MenuItem value="To-let">To-let</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//       </div>
//       <div className="messa">
//         {samplelistinreq.map((data) => (
//           <div key={data.id} className='mains'>
//             <div className='profile-ent'>
//               <div className='incont'>
//                 <div className='nn'>
//                   <h1 className='headi'>Name</h1>
//                   <h3>{data.name}</h3>
//                 </div>
//                 <div className='nn'>
//                   <h1>Address</h1>
//                   <h3>{data.address}</h3>
//                 </div>
//                 <div className='nn'>
//                   <h1>Pincode</h1>
//                   <h3>{data.pincode}</h3>
//                 </div>
//                 <div className='nns'>
//                   <h1>Contact Details</h1>
//                   <h3>{data.contactdetails.phn}<br />
//                     {data.contactdetails.email}</h3>
//                 </div>
//                 <div className='nn'>
//                   <h1>View Documents</h1>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="currentColor" class="bi ii bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                     <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Listingrequest;


import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Listingrequest.css";
import samplelistinreq from "./samplelistingrequest.js";
import toletlistinreq from './tolet.js';
import { Link, Navigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import { useNavigate } from 'react-router-dom'



const Listingrequest = () => {
  const navigate = useNavigate()
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
          <div className='profile-ent'>
            <div className='incont'>
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
                <Link className='li' to='/viewdocuments'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="#955108" class="bi ii bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ));
    }
//  else if (selectedOption === "To-let") {
//       return toletlistinreq.map((data) => (
//         <div key={data.id} className='mains'>
//           <div className='profile-ent'>
//             <div className='incont'>
//               <div className='nn'>
//                 <h1 className='headi'>Name</h1>
//                 <h3>{data.name}</h3>
//               </div>
//               <div className='nn'>
//                 <h1>Address</h1>
//                 <h3>{data.address}</h3>
//               </div>
//               <div className='nn'>
//                 <h1>Pincode</h1>
//                 <h3>{data.pincode}</h3>
//               </div>
//               <div className='nns'>
//                 <h1>Contact Details</h1>
//                 <h3>{data.contactdetails.phn}<br />
//                   {data.contactdetails.email}</h3>
//               </div>
//               <div className='nn'>
//                 <h1>View Documents</h1>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="currentColor" class="bi ii bi-arrow-right-circle-fill" viewBox="0 0 16 16">
//                   <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       ));
//     } else {
//       return null; // Default case or when no option is selected
//     }
//   };

  return (
    <div className='main'>
      <div className='list-head'>
        {/* <img alt='back-arrow' /> */}
        <img src={backarrow} alt='back-arrow' onClick={()=>{navigate('/')}}/>
        <h1>Listing Request</h1>
        <div>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              placeholder='To-Let'
              // renderValue="To-Let"
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
              <MenuItem value="To-let" placeholder="Tolet">To Let</MenuItem>
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
