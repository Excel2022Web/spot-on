import React from 'react'

import { Home } from './home';
import Homemobile from './homemobile';


export const Responsivehook1 = () => {
      const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1224;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
 return width < breakpoint ? <Homemobile/> : <Home/>;
}

