import React from "react";
import About from "../../components/About/About";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div id="about-me" className="row">
        <div className="col s12">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
