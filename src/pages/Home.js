import React from "react";
import Header from "../components/Header";
import About from "../components/About";
const Home = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <About />
      </div>
    </>
  );
};

export default Home;
