import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";



const Home = () => {
  const categories = [
    { id: 1, title: "Hats", image: "./src/assets/hats.jpg" },
    { id: 2, title: "Jackets", image: "./src/assets/jackets.jpg" },
    { id: 3, title: "Sneakers", image: "./src/assets/sneakers.jpg" },
    { id: 4, title: "Men", image: "./src/assets/man.jpg" },
    { id: 5, title: "Women", image: "./src/assets/woman.jpg" },
  ];
  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
