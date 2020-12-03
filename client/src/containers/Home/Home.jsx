import React from "react";
import About from "../../components/About/About";
import "./Home.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../json/projects.json";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div id="about-me" className="row">
        <div className="col s12">
          <About />
        </div>
      </div>
      <div className="row">
      <h3 className="center" id="projects">Projects</h3>
        {/* maps over json array of project details and images*/}
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
