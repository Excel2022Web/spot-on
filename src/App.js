import { Navbar } from "./components/Navbar";

import { Lobby } from "./components/Lobby";
import mic from "./assets/mic.png";
import { Aboutpage } from "./components/aboutpage";
import { Phases } from "./components/Phases";
import { Contact } from "./components/Contact";
import { Home } from "./components/home";
import { Footer } from "./components/footer";
import { Carousel } from "./components/Carousel";
import { Responsivehook } from "./components/Responsivehook";

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

      <section className="home " id="home">
        <Home />
      </section>
      <div ><Lobby /></div>

      <div className="about md:h-[100vh] xl:h-[100vh] " id="about">
        <Aboutpage />
      </div>

      <div className="phases md:h-[100vh] " id="phases">
        <Responsivehook/>
      </div>

      <div className="contact md:h-[100vh] " id="contact">
        <Contact />
      
      </div>
    
    
    </div>
  );
}

export default App;