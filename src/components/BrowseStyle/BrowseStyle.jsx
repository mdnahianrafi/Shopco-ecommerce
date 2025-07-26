import React from "react";
import casual from "../../assets/CasualCategory.png";
import formal from "../../assets/FormalCategory.png";
import party from "../../assets/PartyCategory.png";
import gym from "../../assets/GymCategory.png";

const BrowseStyle = () => {
  return (
    <section className="container mx-auto bg-[#F0F0F0] py-20 rounded-4xl">
      <h1 className="py-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold integral-font">
        Browse Our Style
      </h1>

      <div className="grid grid-cols-10 gap-6 px-4 md:px-16">
        {/* Row 1: 40% + 60% */}
        <div className="col-span-10 md:col-span-4 relative cursor-pointer hover:transform hover:scale-105 transition duration-600">
          <h1 className="text-4xl lg:text-5xl font-bold satoshi=font absolute mt-6 ml-10">
            Casual
          </h1>
          <img src={casual} alt="Casual" className="w-full h-auto xl:h-[350px] rounded-xl" />
        </div>
        <div className="col-span-10 md:col-span-6 relative cursor-pointer hover:transform hover:scale-105 transition duration-600">
          <h1 className="text-4xl lg:text-5xl font-bold satoshi=font absolute mt-6 ml-10">
            Formal
          </h1>
          <img src={formal} alt="Formal" className="w-full  h-auto xl:h-[350px] rounded-xl" />
        </div>

        {/* Row 2: 60% + 40% */}
        <div className="col-span-10 md:col-span-6 relative cursor-pointer hover:transform hover:scale-105 transition duration-600">
          <h1 className="text-4xl lg:text-5xl font-bold satoshi=font absolute mt-6 ml-10">
            Party
          </h1>
          <img src={party} alt="Party" className="w-full  h-auto xl:h-[350px] rounded-xl" />
        </div>
        <div className="col-span-10 md:col-span-4 relative cursor-pointer hover:transform hover:scale-105 transition duration-600">
          <h1 className="text-4xl lg:text-5xl font-bold satoshi=font absolute mt-6 ml-10">
            Gym
          </h1>
          <img src={gym} alt="Gym" className="w-full  h-auto xl:h-[350px] rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
