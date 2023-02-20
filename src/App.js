import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Lobby } from "./components/Lobby";
import { Aboutpage } from "./components/aboutpage";
import { Contact } from "./components/Contact";
import { Responsivehook } from "./components/Responsivehook";
import { Responsivehook1 } from "./components/Responsivehook.1";
import { Responsivehook2 } from "./components/Responsivehook2";
import { Sponsors } from "./components/Sponsors";
import Loading from "./components/Loadingscreen/Loading";


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
          <div className="about h-auto md:h-[100vh] xl:h-[100vh] " id="about">
            <Aboutpage />
          </div>
          <div>
            <Lobby />
          </div>
          <div className=" " id="phases">
            <Responsivehook />
            <Responsivehook2 />
          </div>
          <div>
            <Sponsors />
          </div>
          <div className="contact  " id="contact">
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
