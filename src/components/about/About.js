import React from 'react'
import { ReactComponent as ArrowSvg } from '../../styles/images/diagonal-arrow-arrows-svgrepo-com.svg'

const About = () => {
  return (
    <>
      <div className="about-header d-flex flex-column" id="about">
        <h1>Hello.<br />I am Kwasi Appiah Kubi😊</h1>
        <div className="dev d-flex justify-content-end">
          <div className="arrow">
            <ArrowSvg />
          </div>
          <div className="jun-dev">Junior Developer.👨‍💻</div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="about-me">
              <h2>About Me.🤔</h2>
              <p>I’m a Junior Software Developer and recent graduate of General Assemblys immersive software engineering course. My passion for technology stems from my curious nature; I always want to know why things work the way they do. This led me to the University of Kent where I studied Computer Science up to the Degree level.</p>
              <p className="after"> After graduating I was eager to learn more languages and explore programming outside my degree syllabus. General Assembly was able to provide this and help build my confidence in applying and using these technologies in the working world.</p>
              <p>I am looking to take an active role within a diverse team where curiosity, creativity, and perseverance are encouraged.</p>
            </div>
            <div className="fab-icon d-flex">
              <a href="https://www.linkedin.com/in/kwasi-appiah-kubi/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Kwasiiii" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="col-6">
            <div className="tech">
              <h2>Skills.🍳</h2>
              <div className="bullet-list d-flex">
                <div className="devicon"></div>
                <div className="devicon"><i className="devicon-html5-plain-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-css3-plain-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-sass-original colored"></i></div>
                <div className="devicon"><i className="devicon-bootstrap-plain-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-javascript-plain colored"></i></div>
                <div className="devicon"><i className="devicon-react-original-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-nodejs-plain colored"></i></div>
                <div className="devicon"><i className="devicon-express-original colored"></i></div>
                <div className="devicon"><i className="devicon-mongodb-plain-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-yarn-plain-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-npm-original-wordmark colored"></i></div>
                <div className="devicon"><i className="devicon-python-plain colored"></i></div>
                <div className="devicon"><i className="devicon-django-plain colored"></i></div>
                <div className="devicon"><i className="devicon-git-plain colored"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About