import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ola_removebg from "../../assets/images/ola-removebg-preview.png";

const Custom_Cursor = ({ position }) => {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.5, 1.2, 1.5, 1],
          transition: {
            type: "tween",
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
        }}
        className="fixed bg-purple-500 w-[3vw] h-[2vh]
        lg:w-[1vw] lg:h-[2vh] z-[1000] rounded-full
        ring-1 ring-purple-300 mix-blend-screen
        pointer-events-none"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></motion.div>
      <motion.img
        src={ola_removebg}
        alt=""
        animate={{
          scale: [ 0.6, 0.8, 0.6],
          transition: {
            type: "tween",
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          },
        }}
        className="fixed bg-purple-500 w-[25vw] h-[15vh]
      lg:w-[10vw] lg:h-[20vh] z-[1000] rounded-full
      ring-1 ring-purple-300 mix-blend-screen
      pointer-events-none"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

Custom_Cursor.propTypes = {
  position: PropTypes.object.isRequired,
};

export default Custom_Cursor;
