import { useState } from "react";
import About from "./About";
import Characters from "./Characters";
import Custom_Cursor from "./Custom_Custom";
import Herosection from "./Herosection";
import OlaVidDisplay from "./OlaVidDisplay";
import OurTeam from "./OurTeam";
import Props from "./Props";
import StoryBoard from "./StoryBoard";
import ProjectOlaHandOut from "./ProjectOlaHandOut";
import Footer from "./Footer";

const LandingPage = () => {
  const [position, setPosition] = useState({x:'-100px', y:'-100px'});

  return (
    <>
      <div 
      onMouseMove={(e)=>setPosition({x: e.clientX, y:e.clientY})}
      className=" cursor-none"
      >
        <Custom_Cursor position={position} />
        <Herosection />
        <div className=" relative">
          <About />
          <OlaVidDisplay />
          <StoryBoard />
          <Props />
          <Characters />
          <OurTeam />
          <ProjectOlaHandOut />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
