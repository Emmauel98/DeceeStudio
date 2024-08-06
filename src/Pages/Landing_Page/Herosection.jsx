import Navbar from "./Navbar";
import backgroundImage from "../../assets/Video/OlaBackgroundImage.mp4";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="bg-black lg:h-screen md:h-[50vh] h-[30vh] relative">
      <motion.video
        src={backgroundImage}
        autoPlay
        muted
        loop
        className="fixed object-fill lg:h-screen h-[150vh] w-screen top-[-15rem] md:top-0"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 3,
          },
        }}
      ></motion.video>
      <div className=" relative">
        <Navbar />
      </div>
      <div className="pt-[10rem] relative">
        <motion.h1
          className="text-center md:text-[5rem] text-[3rem] font-black
          [text-shadow:_5px_3px_1px_rgb(0_0_0_/_70%)] hover:transform hover:skew-x-12"
          initial={{ transform: "scaleX: 0.6", opacity: 0.7 }}
          animate={{
            transform: "scaleX: 1.6",
            opacity: 1,
            transition: {
              duration: 2,
            },
          }}
        >
          Decee Studio{" "}
        </motion.h1>
        <p className=" text-center font-bold tracking-widest px-[1rem] lg:px-0">
          Your Mind is your Limit. Creativity knows no bound
        </p>
      </div>
    </div>
  );
};

export default Herosection;
