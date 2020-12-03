import React from "react";
import About from "../../components/About/About";
import Tech from "../../components/Tech/Tech"
import "./Home.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../json/projects.json";
import technologies from "../../json/technologies.json";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="row section-dark">
        <div id="about-me" className="col s12">
          <About />
        </div>
      </div>
      <div className="row">
        <div className="col offset-m1">
          <h3>Technical Skills</h3>
          <div id="break"></div>
          <div className="row">
            {technologies.map((tech) => (
              <Tech key={tech.id} {...tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="row section-dark">
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
