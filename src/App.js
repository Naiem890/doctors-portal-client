import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<Home></Home>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
        {/* Home About Appointment Reviews Contact Us Login */}
      </Routes>
    </>
  );
}

export default App;
