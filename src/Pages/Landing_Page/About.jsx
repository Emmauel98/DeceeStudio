import ola from "../../assets/images/ola.png";

const About = () => {
  return (
    <>
      <div 
        className=" bg-black lg:flex justify-between pt-[10rem]
         md:mt-[25vh] mt-[35vh] px-[2.5rem] gap-[2rem]" id="about">
        <div className=" lg:w-[50vw]">
          <h1 className="text-[2rem] text-left font-black lg:ml-[3rem] text-[#D9BB90]">
            About Ola
          </h1>
          <p className=" tracking-widest leading-10 mt-[3rem] lg:ml-[3rem]">
            <span className=" font-black">OLA</span> <br />
            Ola is a freshman who just gained admission to the prestigious
            Obafemi Awolowo University. He comes from an average family where
            his parents struggled to pay his fees because they understand the
            importance of education. Ola is the main character in our movie
            series and will be depicting the life of a fresher in OAU, while
            also entertaining the viewers on the pressures, activities and
            challenges that a fresher in OAU faces
          </p>
        </div>
        <div className="lg:w-[50vw] ">
          <img src={ola} alt="" className=" rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default About;
