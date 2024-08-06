import Card from "../../components/Card";
import TeamMembers from "../../utils/TeamMembers";

const OurTeam = () => {
  return (
    <>
      <div className=" bg-black py-[3rem]" id="ourTeam">
        <h1 
         className="text-[2rem] text-center font-black tracking-wide 
         text-[#D9BB90] underline">
          Our Team
        </h1>
        <div className="grid md:grid-cols-3 lg:px-[8rem] md:px-[5rem] px-[2.5rem] gap-[1rem]">
            {
                TeamMembers.map((member)=>{
                    const {id, role, image, name} = member;

                    return(

                        <Card key={id} role={role} image={image} name={name} />
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default OurTeam;
