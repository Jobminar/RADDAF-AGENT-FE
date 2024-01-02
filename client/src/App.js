
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homeagent from "../src/components/Home/Home";

function App() {
  return (
   <>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Homeagent/>}/>
          </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
