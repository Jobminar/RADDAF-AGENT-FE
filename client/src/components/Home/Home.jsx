import './Home.css'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import OfflinePinOutlinedIcon from '@mui/icons-material/OfflinePinOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import messagedata from './messagedata';
import profile from '../Images/profile.png'

const Homeagent=(()=>{
    const myclientscount = 2
    const myzonecount = 10
    const myappointmentcount = 3
    const mylandlordscount = 5
    const mytenantscount =20
    const mypotentialclientscount = 30
    const Valuationrequestclient = 10
    const Listingrequestclient = 7
    const Agreementscount = 34

    return(
        <>
            <div className="home-con">
                <div className="main-con">
                     <div className='my-links'>
                            <div className='my-sub-links'>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3.5rem' , width:'3.5rem' ,background:'#FFD2B1' ,borderRadius:'50px'}}>
                                  <Person2OutlinedIcon style={{ fontSize: '40px', color: '#955108' }} />
                            </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Clients</h1>
                                     <p>{myclientscount}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                            
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '3.5rem' , width:'3.5rem' ,background:'#FFD2B1' ,borderRadius:'50px'}}>
                                  <LocationOnOutlinedIcon style={{ fontSize: '40px', color: '#955108' }} />
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Zone</h1>
                                     <p>{myzonecount}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <CalendarMonthOutlinedIcon style={{ fontSize: '60px',color: '#955108' }} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My clients</h1>
                                     <p>{myappointmentcount}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <LandscapeOutlinedIcon style={{ fontSize: '60px',color: '#955108' }} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Landlords</h1>
                                     <p>{mylandlordscount}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <PeopleOutlinedIcon style={{ fontSize: '60px' ,color: '#955108'}} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Tenants</h1>
                                     <p>{mytenantscount}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <Diversity1OutlinedIcon style={{ fontSize: '60px',color: '#955108' }} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Potential clients</h1>
                                     <p>{mypotentialclientscount}</p>
                                </div>
                                    
                            </div>
                    </div>
                    <div className='my-own'>
                            <p>My Rental Request</p>
                            <p>List a Properties</p>
                            <p>My Listed Properties</p>
                            <p>My Valuation Request</p>
                    </div>
                    <div className='my-links'>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <OfflinePinOutlinedIcon style={{ fontSize: '60px' ,color: '#955108'}} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>Generate Billing</h1>
                                     <p>{Valuationrequestclient}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <ChecklistRtlOutlinedIcon style={{ fontSize: '60px',color: '#955108' }} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Listing Request</h1>
                                     <p>{Listingrequestclient}</p>
                                </div>
                                    
                            </div>
                            <div className='my-sub-links'>
                                <div className='my-sub-links-img'>
                                <ClassOutlinedIcon style={{ fontSize: '60px',color: '#955108' }} /> 
                                </div>
                                <div className='my-sub-links-content'>
                                     <h1>My Agreements</h1>
                                     <p>{Agreementscount}</p>
                                </div>
                                    
                            </div>
                       
                    </div>
                     
                </div>
                <div className="message-con">
                    <h1>Messages</h1>
                  {
                    messagedata.map((data)=>{
                        return(
                            <>
                              <div className='profile-main'>
                                    <img src={profile} alt='profile'/>
                                    <div className='profile-content'>
                                        <h2>{data.name}</h2>
                                        <p>{data.id}</p>
                                    </div>
                              </div>
                            </>
                        )
                    })
                  }
                </div>
            </div>
        </>
    )
})
export default Homeagent