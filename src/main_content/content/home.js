import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>About Me</h1>
          <p>
            The thing I love the most about Software Development is the infinity
            of it all. Literally we can build anything with software, all that
            is needed is time and effort. This is something that both fascinates
            and excites me.
          </p>
        </div>

        <div className="section">
          <h1>Current Employment</h1>

          <h3>
            <a href="https://fenwaygroup.com/">Fenway Group</a>
          </h3>
          <p>Full-Stack Web Developer</p>
          <p>React, Js, Drupal 8, SCRUM, and Java</p>
        </div>
        <div className="section">
          <h1>Education</h1>
          <h3>University of Idaho</h3>
          <p>I will graduate in Fall 2019 with a BS in Computer Science.</p>
        </div>

        <div className="section">
          <h1>Favorite Projects</h1>
          <div>
            <h3>
              <a href="https://github.com/atwo6777/college_advising">
                Advising Program
              </a>
            </h3>
            <p>MySQL, Javascript, React and Nodejs</p>
            <p>
              Created a database application to advise students on which classes
              to take based upon what is needed to graduate and for the
              student's desired occupation. I added an algorithm that determines
              which classes a student should take next semester. The program
              determines which classes are needed now to take required classes
              in the future along with any classes that are useful for a
              particular career.
            </p>
          </div>
          <div>
            <h3>Scheduling Web Application</h3>
            <p>Javascript with React, Typescript, and SCRUM </p>
            <p>
              Created a application for keeping track of schedules and choosing
              optimal meeting times. I wrote an algorithm to determine the
              optimal meeting times between everyone's schedules.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
