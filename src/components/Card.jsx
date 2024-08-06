/* eslint-disable react/prop-types */
// import avatar from "../assets/images/avatar.png";

const Card = ({ role, image, name}) => {
  return (
    <>
        <div className=" my-[1rem]">
            <div className=" bg-green-300 lg:w-[26vw] rounded-t-lg flex justify-center">
                <img src={image} alt="" className=" lg:w-[100%] lg:h-[60vh] rounded-t-lg" />
            </div>
            <div className=" bg-gray-950 lg:w-[26vw] rounded-b-lg py-[1rem] px-[1rem]">
            <h6>{role}</h6>   
            <h6>{name}</h6>   
            </div>
        </div>
    </>
  )
}

export default Card;