
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homeagent from "../src/components/Home/Home";
import Listaproperty from "./components/Lista-property/Lista-property";
import Listingrequest from "./components/ListingRequest/Listingrequest.js";
import Viewdocuments from './components/Viewdocuments/viewdocuments.js'
import Signup from "./components/signup/Signup.js";
import Login from "./components/login/Login.js";
import Nopage from "./components/login/Nopage.js";
import Myrentalrequests from "./components/Myrental/myrentalrequests.jsx";
import Propertyviewpage from "./components/Myrental/propertyviewpage.jsx";
import Mylistedproperties from "./components/Mylistedproperties/mylistedproperties.jsx";


function App() {
  return (
   <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="*" element={<Nopage />} />
            <Route path="/" element={<Homeagent/>}/>
            <Route path="/listaproperty" element={<Listaproperty/>}/>
            <Route path="/listingrequest" element={<Listingrequest/>} />
            <Route path="/viewdocuments" element={<Viewdocuments/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myrentalrequests" element={<Myrentalrequests/>}/>
            <Route path="/mylistedproperties" element={<Mylistedproperties />}/>
            <Route path="/propertyviewpage" element={<Propertyviewpage />}/>
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;