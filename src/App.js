import { Navbar } from "./components/Navbar";

import { Lobby } from "./components/Lobby";

import { Aboutpage } from "./components/aboutpage";

import { Contact } from "./components/Contact";

import { Responsivehook } from "./components/Responsivehook";

import { Responsivehook1 } from "./components/Responsivehook.1";
import { Sponsors } from "./components/Sponsors";
import Loading from "./components/Loadingscreen/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="md:scroll-pt-[64px] ">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {" "}
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
      )}
    </div>
  );
}

export default App;
