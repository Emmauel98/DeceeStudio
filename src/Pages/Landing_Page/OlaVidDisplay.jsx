import { useEffect, useRef } from "react";
import Ola from "../../assets/Video/Overall.mp4";

const OlaVidDisplay = () => {
  const element = useRef(null);

  useEffect(() => {
    if (element.current) {
      const rect = element.current.getBoundingClientRect();
      console.log(rect.top, rect.right, rect.bottom, rect.left);
    }
  }, []);
  return (
    <>
      <div ref={element} id="olavid">
        <h1
          className="lg:py-[5rem] text-[2rem] lg:pl-[6rem] font-black text-[#D9BB90]
         text-left pl-[3rem] bg-black md:py-[3rem] pb-[2rem] pt-[8rem]
      "
        >
          A short video <br className="md:hidden" /> of Ola&apos;s project
        </h1>
        <div className=" flex justify-center bg-black py-[1rem]">
          <video
            src={Ola}
            autoPlay
            muted
            loop
            className=" w-[80vw] lg:h-[90vh] rounded-3xl ring-2 ring-[#CB003C]
        "
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default OlaVidDisplay;
