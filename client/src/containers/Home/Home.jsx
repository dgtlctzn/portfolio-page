import React, { useEffect } from "react";
import About from "../../components/About/About";
import Tech from "../../components/Tech/Tech";
import "./Home.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import IconLink from "../../components/IconLink/IconLink";
import projects from "../../json/projects.json";
import technologies from "../../json/technologies.json";
import contacts from "../../json/contacts.json";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";

const Home = () => {

  useEffect(() => {
    //   console.log(parallax.current);
      var elems = document.querySelectorAll('.parallax');

    //   console.log(M)
      M.Parallax.init(elems)
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img id="background" src="./img/IMG_3503.jpeg" />
        </div>
      </div>
      <div id="about" className="row section-dark">
        <div id="about-me" className="col s12">
          <About />
        </div>
      </div>
      <div className="row section-light">
        <div className="col offset-m1">
          <h3>Technical Skills</h3>
          <div id="break-two"></div>
          <div className="row">
            {technologies.map((tech) => (
              <Tech key={tech.id} {...tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="row section-dark">
        <h3 className="center" id="projects">
          Projects
        </h3>
        {/* maps over json array of project details and images*/}
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="./img/IMG_3503.jpeg" />
        </div>
      </div>
      <div className="row section-light">
        <div id="contacts" className="col m12">
          {contacts.map((contact) => (
            <IconLink key={contact.alt} {...contact} />
          ))}
          <div className="col s12 m2">
            <h5 className="logo-name">Phone</h5>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Cell Number"
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={
                <img
                  className="icon-logo"
                  src="./img/phone-logo.png"
                  alt="phone"
                />
              }
            >
              <p>(404) 358-3607</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
