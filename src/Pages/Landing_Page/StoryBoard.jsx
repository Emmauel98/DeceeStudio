import storyboard from "../../assets/images/storyboard.png";
const StoryBoard = () => {
  return (
    <>
      <div className="bg-black" id="storyboard">
        <h1 
         className=" pt-[5rem] text-[2rem] lg:ml-[6rem] font-black text-[#D9BB90]
         text-left ml-[3rem]
         ">
          Story Board
        </h1>
        <p className="lg:ml-[6rem] ml-[3rem] py-[1rem]">
          Here are the final storyboard frames, now everything has been put
          together.
        </p>
        <div className="flex justify-center">
          <img src={storyboard} alt="props" className=" w-[80vw]" />
        </div>
      </div>
    </>
  );
};

export default StoryBoard;
