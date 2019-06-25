import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectBig from './components/Projects/ProjectBig';
import ProjectSmall from './components/Projects/ProjectSmall';
import Footer from './components/Footer/Footer';

import iconDL from "./assets/svg/icons8-download-from-the-cloud.svg";
import avatar from './assets/svg/avatar illustration transparentB simp.svg';
import projectsData from "./projectsData.json";
import iconGithub from "./assets/svg/icons8-github.svg";
import iconLinkedin from "./assets/svg/icons8-linkedin.svg";

function App() {
  return (

    <div className="App">
      <Navbar />

      <section id="about">
        <div className="navbar__social-bg">
          <div className="navbar__social container">
            <a href="https://github.com/ViktorOster" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={iconGithub} alt="" /></a>
            <a href="https://www.linkedin.com/in/viktor-%C3%B6sterholm/" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={iconLinkedin} alt="" /></a>
            <span className="navbar-social__email">Email: Osterholmv@gmail.com</span>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-2 col-sm-12 about__img-container-top">
              <div className="about__img-container">
                <img className="about__img" src={avatar} alt="" />
              </div>
            </div>

            <div className="col-lg-10 col-sm-12">
              <h1 className="heading">Viktor Österholm</h1>
              <p className="contact__email">CS student and Software Developer</p>
              <p className="about__text">
                Hi, I’m Viktor. I love creating web sites and web applications.
                Web development, problem solving and even designing websites is something I really enjoy, and I strive to improve my skills in these areas every day.
                I currently focus on front-end development, but I also have experience with back-end technologies like Node and PHP (also currently learning a bit of Java).
                I am currently studying towards my Master’s degree in computer science. In my spare time I like to play drums and write music.</p>
              <button className="btn btn-primary btn-left hidden">
                <a href="https://dl.dropboxusercontent.com/s/uytjfspwabfbbyq/viktor%C3%96Resume.pdf?dl=0">
                  <img className="icon-small" src={iconDL} alt="" />
                  Download Resumé
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        {/* main projects */}
        <div className="container">
          <h2 className="heading">Project Highlights</h2>
          <p className="section__description">These are projects that took a bit longer to make, or I think are interesting.</p>
          {projectsData.map((project, i) => {
            if (project.importance !== 1) return null;
            else {
              return (
                <ProjectBig
                  key={i}
                  title={project.name}
                  img={project.image}
                  description={project.description}
                  techs={project.technologies}
                  urlLive={project.projectLink}
                  urlCode={project.codeLink}
                />
              )
            }
          })}
        </div>


        {/* misc. projects */}
        <div className="container">
          <h3 className="heading">Other Projects</h3>
          <p className="section__description">These are smaller projects that I built for fun or to learn new technologies.</p>
          <div className="row">
            {projectsData.map((project, i) => {
              if (project.importance === 1) return null;
              else {
                return (
                  <ProjectSmall
                    key={i}
                    title={project.name}
                    description={project.description}
                    techs={project.technologies}
                    urlLive={project.projectLink}
                    urlCode={project.codeLink}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <h2 className="heading">Education</h2>
          <p><strong>Bachelor of Science - Computer Science</strong></p>
          <p>Åbo Akademi University (2015 - 2019)</p>
        </div>
      </section>
      <hr className="container" />

      <section id="contact">
        <div className="container">

          <h2 className="heading">If you want to get in touch, you can email me at</h2>
          <p className="contact__email">Osterholmv@gmail.com</p>
        </div>
      </section >

      <Footer />
    </div>
  );
}

export default App;
