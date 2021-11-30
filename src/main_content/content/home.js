import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <h1>About Me</h1>
          <p>
            I have worked on full stack web development for approximately 3
            years. My favorite backend technology is .NET with Typescript
            (React) for the frontend. I currently prefer Kanban for project
            management.
          </p>
          <div>
            <a
              href="https://github.com/joelatwo"
              target="_blank"
              style={{
                color: "#417ff2",
                fontWeight: "bold",
              }}
            >
              <h4>My github can be found here.</h4>
            </a>
          </div>
        </div>

        <div className="section">
          <h1>Current Employment</h1>

          <h3>
            <a href="https://selinc.com/" itemProp="employee">
              Schweitzer Engineering Laboratories
            </a>
          </h3>

          <div>
            <ul>
              <li>
                I collaborate with several teams across many disciplines to
                maintain the corporate marketing website.
              </li>
              <li>
                I developed a new microservice for a separate SaaS platform.
              </li>
              <li>I increased build pipeline speed and reliablity.</li>
              <li>I mentored fellow team members for React best practices.</li>
            </ul>
            <p>
              SEL has been a great learning experience. One of my favorite
              aspect of SEL's culture is their values. I believe that their
              focus on taking ownership and focusing on their customers has
              helped me become a better engineer. I look forward to learn more
              lessons and improve my overall knowledge as my career progresses.
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
          <h1>Favorite Personal Projects</h1>
          <div>
            <h3>
              <a href="https://https://github.com/joelatwo/VGo-Compiler">
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
              <a href="https://github.com/joelatwo/DM-Hoard">DM's Hoard</a>
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
              <a href="https://github.com/joelatwo/college_advising">
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
