import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectBig from './components/Projects/ProjectBig';
import ProjectSmall from './components/Projects/ProjectSmall';
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
            <a href="https://github.com/ViktorOster" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={iconGithub} /></a>
            <a href="https://www.linkedin.com/in/viktor-%C3%B6sterholm/" target="_blank" rel="noopener noreferrer"><img className="icon-small" src={iconLinkedin} /></a>
            <span class="navbar-social__email">Email: Osterholmv@gmail.com</span>
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
              <p className="about__name heading heading--sub">Viktor Österholm</p>
              <p className="about__profession">Software Developer</p>
              <p className="about__text">
                Hi, I’m Viktor. I love creating web sites and web applications.
                Web development is something I really enjoy, and I keep on improving myself every day.
                I currently focus on front-end development, but I also have experience with back-end technologies like Node and PHP (also currently learning a bit of Java).
                I am currently studying towards my Master’s degree in computer science. </p>
              <button className="btn btn-primary btn-left">
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
          {projectsData.map((project, i) => {
            if (project.importance === 1) {
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
          <div className="row">
            {projectsData.map((project, i) => {
              if (project.importance >= 2) {
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
          <p>B.Sc in Computer Science</p>
          <p className="project-small__techs">Åbo Akademi University (2015 - 2019)</p>
        </div>
      </section>
      <hr className="container" />

      <section id="contact">
        <div className="container">

          <h2 className="heading">If you want to get in touch, you can email me at</h2>
          <p>Osterholmv@gmail.com</p>
        </div>
      </section >
    </div>
  );
}

export default App;
