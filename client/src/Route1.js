
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Homeagent from "./components/Home/Home.jsx";
import Listaproperty from "./components/Lista-property/Lista-property.jsx";
import Listingrequest from "./components/ListingRequest/Listingrequest.js";
import Viewdocuments from './components/Viewdocuments/viewdocuments.js'
import Signup from "./components/signup/Signup.js";
import Login from "./components/login/Login.js";
import Nopage from "./components/login/Nopage.js";
import Myrentalrequests from "./components/Myrental/myrentalrequests.jsx";
import Propertyviewpage from "./components/Myrental/propertyviewpage.jsx";
import Mylistedproperties from "./components/Mylistedproperties/mylistedproperties.jsx";
import Myclients from "./components/MyClinets/Myclients.js";
import Myzone from "./components/MyZone/Myzone.js";
import Mytenats from "./components/MyTenants/Mytenats.js";
import Mylandlords from "./components/MyLandLords/Mylandlords.js";
import Valuationrequest from "./components/Valuationrequest/Valuationrequest.js"


function Route1() {
  return (
   <>
   {/*  */}
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Header><Nopage /></Header>}/>
            <Route path="/" element={<Header><Homeagent /></Header>}/>
            <Route path="/listaproperty" element={<Header><Listaproperty/></Header>}/>
            <Route path="/listingrequest" element={<Header><Listingrequest/></Header>} />
            <Route path="/viewdocuments" element={<Header><Viewdocuments/></Header>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/valuationrequest" element={<Header><Valuationrequest/></Header>}/>
            <Route path="/myrentalrequests" element={<Header><Myrentalrequests/></Header>}/>
            <Route path="/mylistedproperties" element={<Header><Mylistedproperties /></Header>}/>
            <Route path="/propertyviewpage" element={<Header><Propertyviewpage /></Header>}/>
            <Route path="/myclients" element={<Header><Myclients /></Header>} />
            <Route path="/myzone" element={<Header><Myzone /></Header>} />
            <Route path="/mytenats" element={<Header><Mytenats /></Header>} />
            <Route path="/mylandlords" element={<Header><Mylandlords /></Header>}/>
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default Route1;