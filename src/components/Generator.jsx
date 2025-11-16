
import { useState } from "react";
import { WORKOUTS } from "../utils/forger";
import SectionWrapper from "./SectionWrapper";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text;base mx-auto">{description}</p>
    </div>
  );
}

const Generator = () => {
  const [showModal,setShowModal] = useState(false)
  function toggleModal(){
    setShowModal(!showModal)
  }
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["Time", "To", "Strike"]}
    >
      <Header
        index={"01"}
        title={"Choose your Anvil"}
        description={"The foundation upon which you will be forged."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
        return (
          <button key={typeIndex} className="bg-gray-950  border border-lime-400 duration-200 hover:border-lime-600 py-3 rounded-lg  ">
              <p className="capitalize">{type.replaceAll("_"," ")}</p>
            </button>
          )
        })}
        </div>
      <Header
        index={"02"}
        title={"Draft the Blueprint"}
        description={"Define the areas to be shaped and hardened."}
      />
     <div className="bg-gray-950  border border-solid border-lime-400 rounded-lg flex flex-col">

      <button
      onClick={toggleModal} 
      className="relative p-3 flex justify-center items-center">
        <p>Select muscle groups </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-sort-down"></i>
      </button>
      {showModal && (
        <div>
          fkjldj
        </div>
      )}
     </div>
    </SectionWrapper>
  );
};

export default Generator;
