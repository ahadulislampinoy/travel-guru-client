import React, { useState } from "react";

const Destinations = ({ destinations }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const handleDesInfo = (des) => {
    setDescription(des.des);
    setName(des.name);
  };
  return (
    <div
      className="grid gap-x-6 max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 text-white"
      style={{ gridTemplateColumns: "5fr 7fr" }}
    >
      <div>
        <h1 className="text-5xl font-semibold">{name.toUpperCase()}</h1>
        <p className="text-lg py-8">{description}</p>
        <button className="text-black bg-yellow-400 px-6 py-2 rounded-md text-sm font-medium">
          Booking
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        {destinations.map((des) => (
          <div
            key={des.id}
            className="relative border-2 border-yellow-400 rounded-2xl"
            onClick={() => handleDesInfo(des)}
          >
            <p className="absolute bottom-8 w-full text-center text-3xl">
              {des.name.toUpperCase()}
            </p>
            <img src={des.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
