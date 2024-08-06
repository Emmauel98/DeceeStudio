// import props from "../../assets/images/props.png";
import Air_Jordan from "../../assets/images/Air Jordan.png";
import As_e_dey_hot_model from "../../assets/images/As e dey hot model .png";
import head_2_lineless from "../../assets/images/head 2 lineless .png";
import Watch from "../../assets/images/Watch.png";
// import Three from "./Three";

const Props = () => {
  return (
    <>
      <div className="bg-black" id="props">
        <h1
          className=" pt-[5rem] text-[2rem] lg:ml-[6rem] ml-[3rem] font-black
          text-[#D9BB90]"
        >
          Props
        </h1>
        <p className="lg:ml-[6rem] md:ml-[3rem] md:text-left text-center py-[1rem] 
        px-[2rem] md:px-0">
          Here are highlight of the props that have been put together.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[1rem] justify-center
             px-[3rem] md:px-[3rem] lg:px-[6rem] 
        ">
          <img src={Air_Jordan} alt="props" className=" lg:w-[30vw] rounded-lg" />
          <img src={As_e_dey_hot_model} alt="props" className=" lg:w-[30vw] rounded-lg" />
          <img src={head_2_lineless} alt="props" className=" lg:w-[30vw] rounded-lg" />
          <img src={Watch} alt="props" className=" lg:w-[30vw] rounded-lg" />
        </div>
        {/* <Three /> */}
      </div>
    </>
  );
};

export default Props;
