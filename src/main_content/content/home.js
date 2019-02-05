import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="section">
        <h1>About Me</h1>
        <p>
          The thing I love most about Software Development is the infinity of it
          all. Literally we can build anything with software, all that is needed
          is time and effort. This is something that fascinates and excites me.
        </p>
        <h1>Current Employment</h1>
        <div>
          <h2>
            <a href="https://fenwaygroup.com/">Fenway Group</a>
          </h2>
          <p>Full-Stack Web Developer</p>
          <p>I have used React, Js, Durpal 8, SCRUM, and Java</p>
        </div>
        <h1>Education</h1>
        <h2>University of Idaho</h2>
        <p>I will graduate in Fall 2019 with a BS in Computer Science.</p>
        <div>
          <h2>
            <a href="https://github.com/atwo6777/college_advising">
              Advising Program
            </a>
          </h2>
          <p>MySQL, Javascript, React and Nodejs</p>
          <p>
            Created a database application to advise students on which classes
            to take based upon what is needed to graduate and for the student's
            desired occupation. I added an algorithm that determines which
            classes a student should take next semester. The program determines
            which classes are needed now to take required classes in the future
            along with any classes that are useful for a particular career.
          </p>
        </div>
        <div>
          <h2>Scheduling Web Application</h2>
          <p>Javascript with React, Typescript, and SCRUM </p>
          <p>
            Created a application for keeping track of schedules and choosing
            optimal meeting times. I wrote an algorithm to determine the optimal
            meeting times between everyone's schedules. We defined optimal as
            the time of the day in which the largest quantity of people could
            attend.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
