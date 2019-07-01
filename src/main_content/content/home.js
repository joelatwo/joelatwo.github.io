import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>About Me</h1>
          <p>
            I am both a software developer and a computer science student. I
            have worked on full stack web development along with software
            development. My favorite languages to work with are SQL and
            Javascript. I have worked using several frameworks/methodologies
            although my favorite is SCRUM.
          </p>
          <div>
            <a
              href="https://github.com/atwo6777"
              target="_blank"
              style={{ color: "#417ff2", fontWeight: "bold" }}
            >
              My github can be found here.
            </a>
          </div>
        </div>

        <div className="section">
          <h1>Current Employment</h1>

          <h3>
            <a href="https://fenwaygroup.com/">Fenway Group</a>
          </h3>
          <p>Full-Stack Web Developer</p>
          <p>React, Javascript, Drupal 8, SCRUM, and Java</p>
          <p>
            I have progressed through three quarters of Fenway Group's
            mentorship progression program, by working hard and am set to
            complete this program later this year.
          </p>
          <p>
            As an employee I worked on an advising application. Due to my work
            on the optimal meeting logic, we have been able to save the company
            both time and money.
          </p>
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
              <a href="https://github.com/atwo6777/DM-Hoard">
                Dungeons and Dragons Toolkit
              </a>
            </h3>
            <p>XQuery, Javascript, React, Java, and Nodejs </p>
            <p>
              This was originally a reasearch project with the goal of creating
              a Natural Language Processing solution for making Dungeons and
              Dragons easier to play. It is in progress but will include the
              ability to answer any question about Dungeons and Dragons.
            </p>
          </div>
          <div>
            <h3>
              <a href="https://github.com/atwo6777/college_advising">
                Advising Program
              </a>
            </h3>
            <p>MySQL, Javascript, React and Nodejs</p>
            <p>
              This is a database application to advise students on which classes
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
              This is an application for keeping track of coworkers schedules
              and choosing optimal meeting times. I wrote an algorithm to
              determine the optimal meeting times between everyone's schedules.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
