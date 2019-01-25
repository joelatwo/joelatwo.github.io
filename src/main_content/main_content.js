import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
     <div>
      <div id="infoBody">
         <div className="section">
            <h1>About Me</h1>
            <p>
               The thing I love most about Software Development is the infinity of it all. Literally we can build
               anything within software, all that is needed is time and effort. This is something that makes me
               fascinated and excited about developing software. Complex problems that make me think are some of my
               favorite problems.
            </p>
         </div>
         <div className="section">
            <h1>Education</h1>
            <p>
               I am currently a student at the University of Idaho studying Computer
               Science. I will graduate in Fall 2019 with a BS in Computer Science.
            </p>
         </div>
         <div className="section">
            <h1>Projects</h1>
            <div className="projectGrid">
               <div>
                  <p>
                     <a href="./assets/English 317 Project 4 Whitepages.docx" download><strong> English 317 Google
                           Usability Test:</strong><br />></a>
                     This was a useability test that I conducted on the Google Domain Website as part of my exploration
                     on what makes a website easy to use. I considered Google to be the webstandard and thought this
                     would be benifitial to my future web development. To sumarize the document I did find a few places
                     in which Google could actually improve their website in my opinion.
                  </p>
               </div>
               <div>
                  <p>
                     <a href="https://github.com/atwo6777/college_advising"><strong> Advising Program:</strong></a> <br />
                     Used MySQL, Javascript, React and Nodejs <br />
                     Created a database application to advise students on which classes
                     to take based upon what is needed to graduate and for the
                     student's desired occupation. <br />
                     I added an algorithm that determines which classes a student should take next semester. The
                     program determines which classes are needed now to take required classes in the future along with
                     any classes that are useful for a particular career.
                  </p>
               </div>
               <div>
                  <p>
                     <strong>
                        Scheduling Web Application:
                     </strong>
                     <br />
                     Used Javascript with React, Typescript, and SCRUM <br />
                     Created a application for keeping track of schedules and choosing optimal meeting times.<br />
                     I wrote an algorithm to determine the optimal meeting times between everyone's schedules. We
                     defined optimal as the time of the day in which the largest quantity of people could attend.
                  </p>
               </div>
               <div>
                  <p>
                     <strong>
                        <a href="https://github.com/atwo6777/Team4Game">Twin Stick Shooter Video Game:</a>
                     </strong> <br />
                     Used Unreal Engine and C++ <br />
                     Created a dinosaur hunting video game with a group of classmates. <br />
                     This was my first group project in which I learned Git and worked with other classmates code. I
                     learned a lot about communication and handled the user interface.
                  </p>
               </div>
               <div>
                  <p>
                     <strong>
                        Simulation of the Producer Consumer problem:
                     </strong><br />
                     Used semaphores and C++ <br />
                     Created a simulation using piping of the producer consumer problem. <br />
                     I used sempaphores due to our class discussion at the time of the sempaphores. It is not much more
                     complicated than a monitor but is a little bit more difficult to use.
                  </p>
               </div>
               <div>
                  <p>
                     <strong>
                        Shell Scripter:
                     </strong><br />
                     Used C and Linux System utilities <br />
                     Created an application to run different commands based on the Bash shell. <br />
                     I used bash for the longest time and was given the assignment for a class to create a simple
                     version of a shell. I personally struggled with using c inputs up until this assignment.
                  </p>
               </div>
               <div>
                  <p>
                     <strong>
                        Calculator:
                     </strong><br />
                     Used Flex and YACC <br />
                     Created a simplistic calculator<br />
                     This was an assignment to explore Flex and YACC after having built a lexor using just Flex. I
                     added some functionality to store data and variables along with basic calculator functions.
                  </p>
               </div>
            </div>
         </div>
         <div className="section">
            <h1>Job Experiences</h1>
            <strong>Currently Fenway Group</strong>
            <ul>
               <li>
                  <p>
                     <strong>
                        Fenway Group: </strong><br />
                     Full-Stack Web Development using the SCRUM methodology
                  </p>
               </li>
               <li>
                  <p>
                     <strong>
                        Wyndham Gardens Boise:
                     </strong>
                     <br />
                     Operated a hotel and performed the night audit
                  </p>
               </li>
               <li>
                  <p>
                     <strong>
                        Aspire SL Start:
                     </strong>
                     <br />
                     Assisted and taught disabled individuals skills
                  </p>
               </li>
               <li>
                  <p>
                     <strong>
                        Maximus:
                     </strong>
                     <br />
                     Signed individuals up for the Affordable Care Act
                  </p>
               </li>
               <li>
                  <p>
                     <strong>
                        Hiero Entertainment:
                     </strong>
                     <br />
                     Developed 3D scenes and animations
                  </p>
               </li>
            </ul>
         </div>
         <div className="section">
            <h1>Technical Skills</h1>
            <h4>Working Knowledge</h4>
            <ul>
               <li>Javascript with React</li>
               <li>MySQL</li>
               <li>C/C++</li>
               <li>Typescript</li>
               <li>CSS</li>
               <li>Scrum/Agile Development</li>
               <li>Git version control</li>
            </ul>
            <h4>Basic Knowledge</h4>
            <ul>
               <li>Perl</li>
               <li>Bash</li>
               <li>scripting</li>
               <li>Java</li>
            </ul>
         </div>
         <div className="section">
            <h1>
               Accomplishments
            </h1>
            <ul>
               <li>
                  Certified Blockchain Developer
               </li>
               <li>
                  BPA 4th place two years in a row in state for Computer Graphic Design
               </li>
               <li>
                  SkillsUSA 2nd place two years in a row for Computer Animation
               </li>
               <li>
                  Certified Solid Works Associate
               </li>
            </ul>
         </div>
      </div>
      
     </div>
    );
  }
}

export default Main;