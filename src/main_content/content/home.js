import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>About Me</h1>
          <p>
            I am both a software developer and a computer science graduate. I
            have worked on full stack web development along with software
            development. My favorite is backend development and writing database
            queries, beyond that I enjoy frontend development using the web tech
            stack. I have worked using several frameworks/methodologies although
            my favorite is SCRUM.
          </p>
          <div>
            <a
              href="https://github.com/atwo6777"
              target="_blank"
              style={{
                color: "#417ff2",
                fontWeight: "bold"
              }}
            >
              <h4>My github can be found here.</h4>
            </a>
          </div>
        </div>

        <div className="section">
          <h1>Current Employment</h1>

          <h3>
            <a href="https://fenwaygroup.com/" itemProp="employee">
              Fenway Group
            </a>
          </h3>

          <div>
            <ul>
              <li>
                Developed a scheduling web application using React, Typescript,
                and Postgres
              </li>
              <li>Completed Fenway Group’s mentorship program</li>
              <li>Achieved Professional Scrum Developer I Certification</li>
            </ul>
            <p>
              Fenway group has been a great learning experience during college.
              I started with no knowledge of javascript, react or any web
              development but within a few months it became my favorite frontend
              technology. Beyond that Fenway group has provided me with
              countless oportunities to grow.
            </p>
          </div>
        </div>
        <div className="section">
          <h1>Education</h1>
          <h3>University of Idaho</h3>
          <p itemProp="event">
            I graduated in December 2019 with a Bachelor of Science in Computer
            Science.
          </p>
        </div>

        <div className="section">
          <h1>Favorite Projects</h1>
          <div>
            <h3>
              <a href="https://https://github.com/atwo6777/VGo-Compiler">
                Go Compiler
              </a>
            </h3>
            <p>Flex, Bison, and C</p>
            <p>
              One of my senior level classes was constructing a Go compiler.
              Over the course of a semester I built a parser using Flex and
              Bison. This included handling memory allocation and semi colon
              insertion. From there I handled Go's semantic analysis and built a
              Hash table. I then translated the program into intermediate code.
              I have not finished final code generation for the x86 processor.
            </p>

            <h3>
              <a href="https://github.com/atwo6777/DM-Hoard">DM's Hoard</a>
            </h3>
            <p>Javascript, React, Java, and Nodejs</p>
            <p>
              Dungeons & Dragons is one of my favorite group activities. It
              allows me to be creative, but with all of the content it can be
              difficult to keep track of everything. That is why I am working on
              a personal tool to help keep everything organized. I decided that
              I wanted to start with spells. I used Java to build a script to
              web scrape all of the spell data and save it in a json file. From
              there I developed a frontend to load and display this data.
            </p>
            <h3>
              <a href="https://github.com/atwo6777/college_advising">
                Advising Program
              </a>
            </h3>
            <p>MySQL, Javascript, React and Nodejs</p>
            <p>
              This project allowed me to explore the connection between both the
              frontend, the backend, and the server. The project helps users
              keep track of the classes they have taken and what classes to take
              for the next 2 semesters. One solution I developed is a query that
              calculates every classes prerequisite to determine which classes
              are most important to take next.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
