// import React from 'react'
// import backarrow from '../Images/backarrow.png'
// import { useNavigate } from 'react-router-dom'
// import "./Valuationrequest.css"
// import samplelistinreq from "../ListingRequest/samplelistingrequest.js";



// const Valuationrequest = () => {
//   const navigate = useNavigate()

//   const nnn=()=>{
//     return samplelistinreq.map((data)=>{
//       <div key={data.id}>
//         <div style={{marginLeft:"30px"}}>
//           <h1>jnaejo</h1>
//           <div style={{display:'flex'}}>
//             <div style={{backgroundColor:"#FFD2B1",padding:"20px",marginLeft:"20px",width:"80%"}}>
//               <div style={{display:"flex",justifyContent:"space-between"}}>
//                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
//                   <div>
//                     <p>name</p>
//                   </div>
//                   <div>
//                     <p>address</p>
//                   </div>
//                   <div>
//                     <p>pincode</p>
//                   </div>
//                   <div>
//                     <p>property</p>
//                   </div>
//                 </div>
//             {/* <div style={{display:"flex",width:"10%"}}>
//               <p>Valuate</p>
//             </div> */}
//               </div>
//           <hr/>
//           <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
//             <div>
//               <p>{data.name}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//           </div>
//           </div>
//           <div style={{}}>
//             <button style={{padding:"50px"}}>Valuate </button>
//           </div>
//           </div>
//         </div>
//       </div>
//     })
//   }

//   return (
//     <div >
//       <div className='list-hea'>
//         <img src={backarrow} alt='back-arrow' onClick={()=>{navigate('/')}}/>
//         <h1>Listing Request</h1>
//       </div>
//         <div style={{marginLeft:"30px"}}>
//           <h1>jnaejo</h1>
//           <div style={{display:'flex'}}>
//             <div style={{backgroundColor:"#FFD2B1",padding:"20px",marginLeft:"20px",width:"80%"}}>
//               <div style={{display:"flex",justifyContent:"space-between"}}>
//                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
//                   {/* <div>
//                     <p>name</p>
//                   </div>
//                   <div>
//                     <p>address</p>
//                   </div>
//                   <div>
//                     <p>pincode</p>
//                   </div>
//                   <div>
//                     <p>property</p>
//                   </div> */}
//                 </div>
//             {/* <div style={{display:"flex",width:"10%"}}>
//               <p>Valuate</p>
//             </div> */}
//               </div>
//           {/* <hr/> */}
//           {/* <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
//             <div>
//               <p>{data.name}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//             <div>
//               <p>{data.address}</p>
//             </div>
//           </div> */}
//           </div>
//           {/* <div style={{}}>
//             <button style={{padding:"50px"}}>Valuate </button>
//           </div> */}
//           </div>
//         </div>
//         <div>
//           {nnn()}
//         </div>
//         {nnn()}
//     </div>
//   )
// }

// export default Valuationrequest

import React, { useEffect, useState } from 'react'
import backarrow from '../Images/backarrow.png'
import { useNavigate } from 'react-router-dom'
import "./Valuationrequest.css"
import samplelistinreq from "../ListingRequest/samplelistingrequest.js";
import axios from "axios"

const Valuationrequest = () => {
  const navigate = useNavigate()
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://raddaf-be.onrender.com/evalRequests');
        setListingData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const nnn = () => {
    return listingData.map((data) => (
      <div key={data.id}>
        <div style={{ margin: "50px" }}>
          <p style={{margin:"20px"}}>need to update date here</p>
          <div style={{display:'flex'}}>
            <div className='hhh' style={{backgroundColor:"#FFD2B1",borderStyle:"solid",borderColor:"#955108",borderTop:"none",borderWidth:"6px",borderBottom:"none",borderRight:"none",padding:"20px",marginLeft:"20px",width:"80%"}}>
               <div style={{display:"flex",justifyContent:"space-between"}}>
                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",width:"80%"}}>
                  <div>
                    <p>name</p>
                  </div>
                  <div>
                    <p>address</p>
                  </div>
                  <div>
                    <p>pincode</p>
                  </div>
                  <div>
                    <p>property</p>
                  </div>
                </div>
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "80%" }}>
                <div>
                  <p>{data.firstName}</p>
                </div>
                <div>
                  <p>{data.address}</p>
                </div>
                <div>
                  <p>{data.postCode}</p>
                </div>
                <div>
                  <p>{data.propertyAction}</p>
                </div>
              </div>
              {/* <div style={{}}>
                <button style={{ padding: "50px" }}>Valuate </button>
              </div> */}
            </div>
            <div className='hhh'>
                <button style={{ padding: "75px",backgroundColor:"#955108",border:"none",color:"white",fontSize:"20px" }}>Valuate </button>
              </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <div className='list-hea'>
        <img src={backarrow} alt='back-arrow' onClick={() => { navigate('/') }} />
        <h1>Listing Request</h1>
      </div>
      <div>
        {nnn()}
      </div>
    </div>
  )
}

export default Valuationrequest
