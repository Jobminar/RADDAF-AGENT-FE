
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homeagent from "../src/components/Home/Home";
import Listaproperty from "./components/Lista-property/Lista-property";

function App() {
  return (
   <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Homeagent/>}/>
            <Route path="/listaproperty" element={<Listaproperty/>}/>
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
