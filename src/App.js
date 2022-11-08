import { Navbar } from "./components/Navbar";

import { Lobby } from "./components/Lobby";

import { Aboutpage } from "./components/aboutpage";

import { Contact } from "./components/Contact";



import { Responsivehook } from "./components/Responsivehook";


import { Responsivehook1 } from "./components/Responsivehook.1";
import { Sponsors } from "./components/Sponsors";



function App() {


  return (
    <div className="md:scroll-pt-[64px] ">
      <Navbar />

      <div className="home " id="home">
        <Responsivehook1 />
      </div>
      <div>
        <Lobby />
      </div>

      <div className="about md:h-[100vh] xl:h-[100vh] " id="about">
        <Aboutpage />
      </div>

      <div className=" " id="phases">
        <Responsivehook />
      </div>
      <div>
        <Sponsors />
      </div>
      <div className="contact md:h-[100vh] " id="contact">
        
        <Contact />
      </div>
    </div>
  );
}

export default App;
