import { Navbar } from "./components/Navbar";

import { Lobby } from "./components/Lobby";
import mic from "./assets/mic.png";
import { Aboutpage } from "./components/aboutpage";
import { Phases } from "./components/Phases";
import { Contact } from "./components/Contact";
import { Home } from "./components/home";

import { Carousel } from "./components/Carousel";
import { Responsivehook } from "./components/Responsivehook";

import Homemobile from "./components/homemobile";
import { Responsivehook1 } from "./components/Responsivehook.1";
import { Sponsors } from "./components/Sponsors";

function App() {
  const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
  return (
    
    
    <div className="md:scroll-pt-[64px] ">
     <Navbar/>

      <div className="home " id="home">
        <Responsivehook1/>
      </div>
      <div ><Lobby /></div>

      <div className="about md:h-[100vh] xl:h-[100vh] " id="about">
        <Aboutpage />
      </div>

      <div className=" " id="phases">
        <Responsivehook/>
      </div>
            <div>
        <Sponsors/>
      </div>
      <div className="contact md:h-[100vh] " id="contact">
        <Contact />
      
      </div>

    
    
    </div>
  );
}

export default App;