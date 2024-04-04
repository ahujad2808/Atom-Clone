import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
function App() {
  return (
    <div className=" ">
      <div className=" h-screen bg-cover bg-moonbg bg-no-repeat bg-">
        <Navbar></Navbar>
        <Middle></Middle>
      </div>
      <Footer1></Footer1>
      <Footer2></Footer2>
    </div>
  );
}

export default App;
