import React from "react";
import econom from "../Assets/econom.png";
import comfort from "../Assets/comfort.png";
import business from "../Assets/business.png";

function Cards() {
  return (
    <>
      <div className="flex justify-center text-black text-center">
        <div className=" bg-white h-1/3 w-52 mx-2 my-20 shadow-xl pt-10 rounded-mdtransition transform hover:-translate-y-3">
          <img src={econom} className='h-9 w-9 mx-auto mb-4' alt="" />
          <h3 className="font-semibold text-base">Econom class</h3>
          <h1 className="font-bold text-2xl my-6">60$/day</h1>
          <p className="text-sm">Manual transmission</p>
          <hr />
          <p className="text-sm">Air condition</p>
          <hr />
          <p className="text-sm">Hatchback/Sedan</p>
          <button className="bg-[#8cecff] font-semibold px-10 py-1 mx-4 my-6 rounded">
            Select
          </button>
        </div>
        <div className="bg-slate-200 h-1/3 w-52 mx-2 my-20 shadow-xl pt-10 rounded-md transition transform hover:-translate-y-3">
          <img src={comfort} className='h-9 w-9 mx-auto mb-4' alt="" />
          <h3 className="font-semibold text-base">Comfort class</h3>
          <h1 className="font-bold text-2xl my-6">120$/day</h1>
          <p className="text-sm">Automatic transmission</p>
          <hr />
          <p className="text-sm">Climate controll</p>
          <hr />
          <p className="text-sm">Crossover/Sedan</p>
          <button className="bg-black text-[#8cecff] font-semibold px-10 py-1 mx-4 my-6 rounded">Select</button>
        </div>
        <div className=" bg-white h-1/3 w-52 mx-2 my-20 shadow-xl pt-10 rounded-mdtransition transform hover:-translate-y-3">
          <img src={business} className='h-9 w-9 mx-auto mb-4' alt="" />
          <h3 className="font-semibold text-base">Econom class</h3>
          <h1 className="font-bold text-2xl my-6">180$/day</h1>
          <p className="text-sm">Automatic/CVT transmission</p>
          <hr />
          <p className="text-sm">Climate controll</p>
          <hr />
          <p className="text-sm">Hatchback/Hatchback/Sedan</p>
          <button className="bg-[#8cecff] font-semibold px-10 py-1 mx-4 my-6 rounded">
            Select
          </button>
        </div>
      </div>
      <div className="bg-black mx-9 my-12 h-9">hy</div>
    </>  
  );
}

export default Cards;
