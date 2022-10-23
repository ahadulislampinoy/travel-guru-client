import React from "react";
import { useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.png";
import Destinations from "../Destinations/Destinations";
import Header from "../Header/Header";

const Home = () => {
  const destinations = useLoaderData();
  console.log();
  return (
    <div
      className="h-screen bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="backdrop-blur-sm h-screen">
        <Header />
        <Destinations destinations={destinations} />
      </div>
    </div>
  );
};

export default Home;
