import React, { Component } from "react";
import _ from "lodash";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobList: [
        {
          companyName: "Fenway Group",
          summary: "Full-Stack Web Developer",
          url: "https://fenwaygroup.com/",
          technologies: "React, Js, Durpal 8, SCRUM, and Java",
          dateRange: "March 2018 - Current"
        },
        {
          companyName: "Wyndham Gardens Boise",
          summary: "Hotel front-desk and night auditor",
          url: "www.wyndhamhotels.com/boise/hotel‎",
          dateRange: "May 2017 - August 2017"
        },
        {
          companyName: "Aspire SL Start",
          summary: "Assisted disabled individuals learn life skills",
          url: "https://www.slstart.com/",
          dateRange: "May 2015 - August 2015"
        },
        {
          companyName: "Maximus",
          summary:
            "Assisted individuals sign up for the Affordable Care Act over the phone",
          dateRange: "October 2014 - February 2015"
        },
        {
          companyName: "Hiero Games",
          summary: "3D model and animation developer",

          technologies: "Autodesk Maya and Photoshop",
          dateRange: "May 2014 - September 2014"
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
            <h2>
              <a href={job.url}>
                {job.companyName}: {job.dateRange}
              </a>
            </h2>
            <h3>{job.summary}</h3>
            <p>{job.technologies}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default WorkExperience;
