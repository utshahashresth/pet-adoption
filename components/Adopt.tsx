import React from "react";

export default function Adopt({ dog }) {
  return (
    <>
      <div className="flex flex-col  w-80 h-90 rounded-2xl ml-15 shadow-2xl mt-10 gap-5  ">
        <div className="w-full h-60 overflow-hidden ">
          <img className=" rounded-2xl  object-cover" src={dog.image} alt="" />{" "}
        </div>
        <div className="">
          <div className="flex gap-2 ml-11 font-bold">
            <div>{dog.name}</div>
            <div>{dog.age}.y</div>
            <div>{dog.gender}</div>
          </div>
          <div>{dog.description}</div>
        </div>{" "}
      </div>
    </>
  );
}
