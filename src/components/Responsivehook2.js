import React from 'react'
import { Carousel2 } from './Carousel2';
import { Phases2 } from './Phases2';

export const Responsivehook2 = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1224;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
 return width < breakpoint ? <Carousel2 /> : <Phases2 />;
}

