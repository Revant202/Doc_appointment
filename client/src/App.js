import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Doctors from "./pages/Doctors.js";

function App() {
  return (
    <div className="app">
      <div className="header">
        <p>DOCTORS APPOINTMENT</p>
      </div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors/:category" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
