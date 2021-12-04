import React from 'react'
import { Carousel } from 'react-bootstrap'
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>Projects.📽</h2>
      <div className="carousel-div">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/nvMQBMI.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/gh7XT6q.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.imgur.com/WmdbLu7.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="projects-card">
        <div className="row">
          <div className="card1 col-4">
            <p>An individual project about space invaders built in a space of one week using HTML, CSS, and JavaScript. It involved using keyboard inputs, mapping divs to create a grid, adding a class name to a grid to add the position of player and aliens, and using setInterval and setTimeout to move aliens and player across the grid.</p>
            <a href="https://bit.ly/3aQLQvO" rel="noreferrer" target="_blank"><i class="fas fa-tv"></i></a>
            <a href="https://github.com/Kwasiiii/SEI-Project-1-Game-Javascript" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <div className="card2 col-4">
            <p>A solo project built in 3 days using HTML, CSS, Bootstrap, SASS and React. Baller is a web app that uses two external APIs called SportsDB and Balldontlie. This website was created to display information about NBA teams which included the team description, founding year, stadium, and players for that season. A page was built where users get scheduled matches and updates daily. CSS, SASS, and Bootstrap were used in designing the webpage.</p>
            <a href="https://sei-baller.netlify.app" rel="noreferrer" target="_blank"><i class="fas fa-tv"></i></a>
            <a href="https://github.com/Kwasiiii/SEI-Project-2-REACT" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          </div>
          <div className="card3 col-4">
            <p>We designed the web app using React for the front-end and MongoDB/Mongoose for the back-end. I used Mapbox GL to integrate a map into the web application for users to be able to use a map in finding locations of a pub. Other tools used to design this web application are SASS and Bootstrap. In the process of creating this web app, we used GitHub for version control which helped us work on different parts of the code at the same time.</p>
            <a href="https://pint-pirate.herokuapp.com/" rel="noreferrer" target="_blank"><i class="fas fa-tv"></i></a>
            <a href="https://github.com/Kwasiiii/SEI-Project-3-REACT-NODE" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects