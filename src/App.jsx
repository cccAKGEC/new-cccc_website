




import React, { useState, useEffect } from "react";
import "./App.css";
import Splash from "./components/Splash";
import { Events } from "./components/Events";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Register } from "./components/Register";
import { Edevclash } from "./components/Edevclash";
// import { Egraphicon } from "./components/Ereacticons";
// import { Ehackeroverflow } from "./components/Ehackeroverflow";
import { Enimbus } from "./components/Enimbus";
import { Techbuzz } from "./components/ETechbuzz";
import { Contact } from "./components/Contact";
import { Ereacticons } from "./components/Ereacticons";
import {ECloud} from "./components/ECloud";
import Open from "./components/ui/Open";
import Success from "./components/Success";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <RouteWithTitle /> */}
      {isLoaded ? (
        <>
          <Navbar />
          {/* <Open/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Team" element={<TeamCards />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Devclash" element={<Edevclash />} />
            <Route path="/Ereacticons" element={<Ereacticons />} />
            <Route path="/ECloud" element={<ECloud />} />
            <Route path="/Nimbus" element={<Enimbus />} />
            <Route path="/Techbuzz" element={<Techbuzz />} />
          
          </Routes>
          <Footer />
        </>
      ) : (
        <Splash />
      )}
    </Router>
  );
};


// const RouteWithTitle = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/Register") {
//       document.title = "404 not found";
//     } else {
//       document.title = "Cloud Computing Cell - AKGEC";
//     }
//   }, [location]);

//   return null;
// };

export default App;
