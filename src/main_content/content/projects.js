import React, { Component } from "react";
import _ from "lodash";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          title: "DM's Hoard",
          url: "https://github.com/atwo6777/DM-Hoard",
          technologies: "XQuery, Javascript, React, Java, and Nodejs",
          text:
            "This was originally a reasearch project with the goal of creating a Natural Language Processing solution for making Dungeons and Dragons easier to play. It is in progress but with include the        ability to ask any question and find multiple options."
        },
        {
          title: "Advising Program",
          url: "https://github.com/atwo6777/college_advising",
          technologies: "MySQL, Javascript, React and Nodejs",
          text:
            "Created a database application to advise students on which classes to take based upon what is needed to graduate and for the student's desired occupation. I added an algorithm that determines which classes a student should take next semester. The program determines which classes are needed now to take required classes in the future along with any classes that are useful for a particular career."
        },
        {
          title: "Scheduling Web Application",

          technologies: "Javascript with React, Typescript, and SCRUM",
          text:
            "Created an application for keeping track of schedules and choosing optimal meeting times. I wrote an algorithm to determine the optimal meeting times between everyone's schedules. We defined optimal as the time of the day in which the largest quantity of people could attend."
        },
        {
          title: "Twin Stick Shooter Video Game",
          url: "https://github.com/atwo6777/Team4Game",
          technologies: "Unreal Engine and C++",
          text:
            "Created a dinosaur hunting video game with a group of classmates. This was my first group project in which I learned Git and worked with other classmates' code. I learned a lot about communication and designed the user interface."
        },
        {
          title: "Simulation of the Producer Consumer problem",

          technologies: "Semaphores and C++",
          text:
            "Created a simulation using piping of the producer consumer problem. I used sempaphores due to our class discussion at the time of the sempaphores. It is not much more complicated than a monitor but is a little bit more difficult to use. "
        },
        {
          title: "Shell Scripter",

          technologies: "C and Linux System utilities",
          text:
            " Created an application to run different commands based on the Bash shell. I used Bash for the longest time and was given the assignment for a class to create a simple version of a shell. I personally struggled with using c inputs up until this assignment."
        },
        {
          title: "Calculator",
          technologies: " Flex, YACC, Regex",
          text:
            "This was an assignment to explore Flex and YACC after having built a lexor using just Flex. I added some functionality to store data and variables along with basic calculator functions."
        }
      ],
      projectListInProgress: [
        {
          title: "Neural Network",

          technologies: "C++",
          text:
            "This is a class project for a machine learning class. I will be responsible for building a neural network that uses a single layer."
        },

        {
          title: "VR Tractor Simulator",

          technologies: "Unity and C#",
          text:
            "I will create a virtual reality tractor simulator along with several classmates. The goal is to create a training simulation for students to learn how to drive tractors on the Palouse."
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
                      <a href={project.url} itemProp="url">{project.title}</a>
                    </h3>
                  )}
                <p itemProp="description">{project.text}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="section">
            <h1>Projects in Progress</h1>
            <div className="projectGrid">
              {_.map(this.state.projectListInProgress, project => (
                <div key={project.url + project.title}>
                  <h3>
                    <a href={project.url}>{project.title}</a>
                  </h3>
                  <p>{project.text}</p>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
