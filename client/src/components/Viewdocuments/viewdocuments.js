import React, { useState } from 'react';
import "./viewdocuments.css";
import { useNavigate } from 'react-router-dom';
import backarrow from '../Images/backarrow.png'
import { useLocation } from 'react-router-dom';
import bedroomlogo from '../Images/bedsymbol.png';
import toilet from '../Images/toilet.png';
import washroom from '../Images/washroom.png';
import parking from '../Images/car.png';
import proimg from "../Images/profile.png"


const Listingrequest = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const selectedProduct = location.state ? location.state.selectedProduct : null;

  console.log(selectedProduct, "show data");
  const timestamp = selectedProduct.scheduleDateTime;
  const dateOnly = timestamp ? timestamp.substring(0, 10) : null;



  const downloadPropertyTitleDeals = () => {
    const content = selectedProduct.propertyDocuments;
    const fileName = 'propertyDocuments.txt';
    download(content, fileName);
  };

  const downloadFittingAndContentsForm = () => {
    const content = selectedProduct.fittingAndContentsForm;
    const fileName = 'fittingAndContentsForm.txt';
    download(content, fileName);
  };

  const downloadFloorplan = () => {
    const content = selectedProduct.floorplan;
    const fileName = 'floorplan.txt';
    download(content, fileName);
  };
  const downloadEnergyPerformenceCertificate = () => {
    const content = selectedProduct.energyPerformanceCertificate;
    const fileName = 'EnergyPerformenceCertificate.txt';
    download(content, fileName);
  };
  const downloadLeaseholdInformation = () => {
    const content = selectedProduct.leaseholdInformation;
    const fileName = 'leaseholdInformation.txt';
    download(content, fileName);
  };
  const downloadPropertyInfoForm = () => {
    const content = selectedProduct.propertyInfoForm;
    const fileName = 'propertyInfoForm.txt';
    download(content, fileName);
  };
  const downloadLocalAuthoritySearch = () => {
    const content = selectedProduct.localAuthoritySearch;
    const fileName = 'localAuthoritySearch.txt';
    download(content, fileName);
  };
  const downloadPropertyValuationReport = () => {
    const content = selectedProduct.propertyValuationReport;
    const fileName = 'propertyValuationReport.txt';
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

  const [selectedOptiona, setSelectedOptiona] = useState(null);

  const options = [
    "For Sale",
    "To-Let"
  ];

  const handleSelect = (optionb) => {
    setSelectedOptiona(optionb);
  };
  const [selectedOptionb, setSelectedOptionb] = useState(null);

  const optionb = [
    "1",
    "1.5",
    "2",
    "2.5",
    "3"
  ];

  const handleSelectb = (option) => {
    setSelectedOptionb(option);
  };

  

  return (
    <div className='main'>
      <div className='list-head'>
        <img alt='back-arrow' src={backarrow} onClick={()=>{navigate('/')}} />
        <h1>Listing Request</h1>
        <div>
            <select
        value={selectedOptiona}
        onChange={(e) => handleSelect(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
            </select>
        </div>
        <div className='seconddrop'>
          <select
        value={selectedOptionb}
        onChange={(e) => handleSelectb(e.target.value)} style={{background:"#BE6B2E",color:"white",borderRadius:"10px",border:"none",width:"100%",padding:"20px",fontSize:"18px"}}
      >
        <option value="">Generate Invoice</option>
        {optionb.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
            </select>
        </div>
      </div>
      <div style={{display:"flex"}}>
        
        <div>
          
          <img style={{width:"100%"}} src={proimg} alt='userimage'/>

          <div style={{display:'flex'}}>
            <div>Name </div>
            <div style={{paddingLeft:"35px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.name}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Address </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Pincode </div>
            <div style={{paddingLeft:"20px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.place}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Phone No </div>
            <div style={{paddingLeft:"5px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.phoneNumber}</div>
          </div>
          <div style={{display:'flex',flexDirection:"row",justifyContent:""}}>
            <div>Emain </div>
            <div style={{paddingLeft:"30px",paddingRight:"10px"}}>:</div>
            <div>{selectedProduct.contactDetails.email}</div>
          </div>
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
                          <p className='bpara'>{selectedProduct.propertyDescription}</p>
                        </div>
                          <div className='rooms-info' style={{paddingTop:"20px",paddingLeft:"10px"}}>
                          </div>
                          <div style={{marginBottom:"20px",marginTop:"10px"}} className='rooms-detai'>
                <div className='noofbedrooms'><img src={bedroomlogo} alt='bedroomlogo'/>  {selectedProduct.noOfBedrooms}</div>
                <div className='bahrooms'><img src={washroom} alt='washroom'/>  {selectedProduct.noOfBathrooms}</div>
                <div className='toilets'><img src={toilet} alt='toilet'/>  {selectedProduct.noOfToilets}</div>
                <div className='parking'><img src={parking} alt='parking'/>  {selectedProduct.parkingCapacity}</div>
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
                            <div style={{backgroundColor:"#FFECDE", padding:"10px"}}><p>{dateOnly}</p></div>
                          </div>
                          
                          <button style={{width:"10%",height:"7%",backgroundColor:"#9E5C08",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",border:"none",color:"white",marginRight:"10px"}}>Approve</button>
                          <button style={{width:"10%",height:"7%",backgroundColor:"white",borderRadius:"10px",fontSize:"100%",fontWeight:"bold",marginBottom:"20px",borderColor:"#9E5C08",borderStyle:"solid",color:"#9E5C08",marginRight:"10px"}}>Decline</button>
                    </div>                    
      </div>
    </div>
  );
}

export default Listingrequest;
