import { Navbar } from "./components/Navbar";
import mainbg from "./assets/mainbg.png";
import vec1 from "./assets/vec1.png";
import { Lobby } from "./components/Lobby";
import mic from "./assets/mic.png";
import { Aboutpage } from "./components/aboutpage";
import { Phases } from "./components/Phases";
import { Contact } from "./components/Contact";
import { Home } from "./components/home";

function App() {
  return (
    
    <div className="md:scroll-pt-[64px]">
      <Navbar />

      <section className="home " id="home">
        <Home />
      </section>
      <div ><Lobby /></div>

      <div className="about md:h-[100vh] xl:h-[100vh] " id="about">
        <Aboutpage />
      </div>

      <div className="phases md:h-[100vh] " id="phases">
        <Phases />
      </div>

      <div className="contact md:h-[100vh] " id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
