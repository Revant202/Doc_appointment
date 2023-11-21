import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import DoctorList from "./components/DoctorList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>Book an appointment for an in-clinic consultation</h1>
      <h4>Find experienced doctors across all specialities</h4>
      <Categories />
      <DoctorList/>
    </div>
  );
}

export default App;
