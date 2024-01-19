import React from 'react'
import Total from './Total'
import Route1 from './Route1'

const App = () => {
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
            <Route path="/valuationrequest" element={<Valuationrequest/>}/>
            <Route path="/myrentalrequests" element={<Myrentalrequests/>}/>
            <Route path="/mylistedproperties" element={<Mylistedproperties />}/>
            <Route path="/propertyviewpage" element={<Propertyviewpage />}/>
            <Route path="/myclients" element={<Myclients />} />
            <Route path="/myzone" element={<Myzone />} />
            <Route path="/mytenats" element={<Mytenats />} />
            <Route path="/mylandlords" element={<Mylandlords />}/>
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App
