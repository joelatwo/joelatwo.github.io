import React, { Component } from "react";
import _ from "lodash";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          title: "Go Compiler",
          url: "https://https://github.com/atwo6777/VGo-Compiler",
          technologies: "Flex, Bison, and C",
          content: (
            <p>
              One of my senior level classes was constructing a Go compiler.
              Over the course of a semester I built a parser using Flex and
              Bison. This included handling memory allocation and semi colon
              insertion. From there I handled Go's semantic analysis and built a
              Hash table. I then translated the program into intermediate code.
              I have not finished final code generation for the x86 processor.
            </p>
          )
        },
        {
          title: "DM's Hoard",
          url: "https://github.com/atwo6777/DM-Hoard",
          technologies: "Javascript, React, Java, and Nodejs",
          content: (
            <p>
              Dungeons & Dragons is one of my favorite group activities. It
              allows me to be creative, but with all of the content it can be
              difficult to keep track of everything. That is why I am working on
              a personal tool to help keep everything organized. I decided that
              I wanted to start with spells. I used Java to build a script to
              web scrape all of the spell data and save it in a json file. From
              there I developed a frontend to load and display this data.
            </p>
          )
        },
        {
          title: "Advising Program",
          url: "https://github.com/atwo6777/college_advising",
          technologies: "MySQL, Javascript, React and Nodejs",
          content: (
            <p>
              This project allowed me to explore the connection between both the
              frontend, the backend, and the server. The project helps users
              keep track of the classes they have taken and what classes to take
              for the next 2 semesters. One solution I developed is a query that
              calculates every classes prerequisite to determine which classes
              are most important to take next.
            </p>
          )
        },
        {
          title: "Scheduling Web Application",
          technologies: "Javascript with React, Typescript, and SCRUM",
          content: (
            <p>
              This is one of my big projects while working at Fenway Group. I
              learned a lot about the development lifecycle and several pitfalls
              to avoid with a large group project. With this I learned the
              basics of Git and started incorporating Git into every project.
              Beyond this I got a ton of experience working with a variety of
              languages and the web technology stack.
            </p>
          )
        },
        {
          title: "Twin Stick Shooter Video Game",
          url: "https://github.com/atwo6777/Team4Game",
          technologies: "Unreal Engine and C++",
          content: (
            <p>
              This was my first ever group programming assignment. Built in the
              Unreal Engine I personally developed the user interface for our
              game. I was also able to help my teamates organized and debug
              their code.
            </p>
          )
        },
        {
          title: "Shell Scripter",
          technologies: "C and Linux System utilities",
          content: (
            <p>
              Bash is a great shell scripter but I was given an assignment to
              build my own. I included a basic history system, aliasing, and a
              few other nice features. It of course also allowed me to run other
              programs and use Linux forking.
            </p>
          )
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="section">
          <h1>Projects</h1>
          <div className="projectGrid">
            {_.map(this.state.projectList, project => (
              <div key={project.url + project.title}>
                {project.url === undefined ? (
                  <h3 itemProp="name">{project.title}</h3>
                ) : (
                  <h3>
                    <a href={project.url} itemProp="url">
                      {project.title}
                    </a>
                  </h3>
                )}
                <p itemProp="description">{project.content}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
