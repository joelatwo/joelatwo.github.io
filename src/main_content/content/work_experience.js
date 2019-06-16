import React, { Component } from "react";
import _ from "lodash";
import "./content.css";
class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: [
        {
          companyName: "Fenway Group",
          position: "Full-Stack Web Developer",
          url: "https://fenwaygroup.com/",
          technologies: "React, Javascript, Drupal 8, SCRUM, and Java",
          dateRange: "March 2018 - Current",
          description:
            "Fenway Group has the primary goal of developing the next generation of software developers. Because of this they use a variety of technologies and languages and work on a variety of projects."
        },
        {
          companyName: "Wyndham Gardens Boise",
          position: "Hotel front-desk and night auditor",
          dateRange: "May 2017 - August 2017",
          description:
            "Wyndham Garends Boise has the primary goal of providing the best experience possible on a budget for travelers visiting the Boise area. Because of this they require their employees to go above and beyond for their clients."
        },
        {
          companyName: "Aspire SL Start",
          position: "Assisted disabled individuals learn life skills",
          url: "https://www.slstart.com/",
          dateRange: "May 2015 - August 2015",
          description:
            "Aspire has the primary goal of improving the lives of those people diagnosed with disabilities. Because of this they require patience and adaptation in dealing with constant new and unique situations."
        },
        {
          companyName: "Maximus",
          position:
            "Assisted individuals sign up for the Affordable Care Act over the phone",
          dateRange: "October 2014 - February 2015",
          description:
            "Maximus has the primary goal of educating potential Health Inusrance consumers. Because of this they require an indepth knowledge of working closely with everyone."
        },
        {
          companyName: "Hiero Games",
          position: "3D model and animation developer",
          technologies: "Autodesk Maya and Photoshop",
          dateRange: "May 2014 - September 2014",
          description:
            "Hiero Games has the primary goal of creating the vision of their clients multimedia goals. Because of the size of the company I was required to work both independantly and with my coworkers."
        }
      ]
    };
  }

  render() {
    return (
      <div className="section">
        <h1>Job Experiences</h1>
        {_.map(this.state.jobList, job => (
          <div key={job.url + job.companyName}>
            {job.url === undefined ? (
              <h3>
                {job.companyName}: {job.dateRange}
              </h3>
            ) : (
              <h3>
                <a href={job.url}>
                  {job.companyName}: {job.dateRange}
                </a>
              </h3>
            )}

            <p>{job.position}</p>
            <p>{job.technologies}</p>
            <p>{job.description}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default WorkExperience;
