import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/AboutMe.css';

function AboutMe() {
  return (
    <Element name="about_me" className='about_me-section'>
      <div className='about_me-content'>
        <div className='about_me-text'>
          <h1>About Me</h1>
          <p>
            Hey, my name is Lorran Alves Galdino and I am an International Undergraduate student pursuing a degree in Computer Science
            at BYU-Hawaii.
          </p>
          <br/>
          <p>
          I currently work as a Computer Science Tutor and Teaching Assistant for the Faculty of Math and Computing, where I attend classes, grade papers
          and assist students with software development, debugging, assignments and core concepts such as Algorithms, Object-Oriented Design, databases and more. 
          </p>
          <br/>
          <p>
            Outside of work and school I really enjoy exercise, particularly working out and running, I love to skate to get around, enjoy manga, and am a huge fan of
            poeticism within the human soul and the oulook of those who can see the world in a bitter-sweet manner.
          </p>
        </div>
        <div className='about_me-carousel'>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={`${process.env.PUBLIC_URL}/images/me.jpg`} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item active">
                <img src={`${process.env.PUBLIC_URL}/images/relax.jpg`} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={`${process.env.PUBLIC_URL}/images/sideView.jpg`} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={`${process.env.PUBLIC_URL}/images/tacoStand.jpg`} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={`${process.env.PUBLIC_URL}/images/tBay.jpg`} className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutMe;
