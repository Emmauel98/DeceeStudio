import character from "../../assets/images/character.png";

const Characters = () => {
  return (
    <div id="character">
      <div className="bg-black">
        <h1 
         className=" pt-[5rem] text-[2rem] lg:ml-[6rem] ml-[3rem] font-black
          text-[#D9BB90]">
          Characters
        </h1>
        <p className="lg:ml-[6rem] md:ml-[3rem] ml-0 md:text-left md:px-0 px-[3rem] text-center py-[1rem]">
          Here is an Highlight of our character that has been put
          together.
        </p>
        <div className="flex justify-center">
          <img src={character} alt="props" className=" w-[80vw]" />
        </div>
      </div>
    </div>
  );
};

export default Characters;
