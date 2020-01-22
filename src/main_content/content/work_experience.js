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
          position: "Associate Software Engineer",
          url: "https://fenwaygroup.com/",
          technologies: "React, Javascript, Drupal 8, and Java",
          dateRange: "March 2018 - Current",
          content: (
            <div>
              <ul>
                <li>
                  Developed a scheduling web application using React,
                  Typescript, and Postgres
                </li>
                <li>Completed Fenway Group’s mentorship program</li>
                <li>Achieved Professional Scrum Developer I Certification</li>
              </ul>
              <p>
                Fenway group has been a great learning experience during
                college. I started with no knowledge of javascript, react or any
                web development but within a few months it became my favorite
                frontend technology. Beyond that Fenway group has provided me
                with countless oportunities to grow.
              </p>
            </div>
          )
        },
        {
          companyName: "Wyndham Gardens Boise",
          position: "Hotel front-desk and night auditor",
          dateRange: "May 2017 - August 2017",
          content: (
            <p>
              Wyndam Gardens was a summer job that allowed me to interact with
              many people. I also had to learn and troubleshoot several systems.
            </p>
          )
        },
        {
          companyName: "Aspire SL Start",
          position: "Teaching life skills and improving quality of life",
          url: "https://www.slstart.com/",
          dateRange: "May 2015 - August 2015",
          content: (
            <p>
              At Aspire I learned compation and patience as I helped improve and
              teach people. I learned from my teamates about indivdual care and
              performed my duties.
            </p>
          )
        },
        {
          companyName: "Maximus",
          position: "Customer Services Associate for the Affordable Care Act",
          dateRange: "October 2014 - February 2015",
          content: (
            <p>
              Maximus was my first full time job. I remember troubleshooting
              customer accounts over the phone. I also helped inform and setup
              customers healthcare.
            </p>
          )
        },
        {
          companyName: "League43",
          position: "3D model and animation developer",
          technologies: "Autodesk Maya and Photoshop",
          dateRange: "May 2014 - September 2014",
          content: (
            <p>
              In high school I discovered 3D modeling using Autodesk Maya and
              this passion lead me to join SkillsUSA. In the state competition I
              met Leage43 as the judge of that competition. I then was hired by
              them as a 3D model and animation developer. I learned about the
              creative process and a different industries development lifecycle.
            </p>
          )
        }
      ]
    };
  }

  render() {
    return (
      <div className="section">
        <h1>Work Experiences</h1>
        {_.map(this.state.jobList, job => (
          <div key={job.url + job.companyName}>
            {job.url === undefined ? (
              <h3 itemProp="worksFor">
                {job.companyName}: {job.dateRange}
              </h3>
            ) : (
              <h3>
                <a href={job.url} itemProp="worksFor">
                  {job.companyName}: {job.dateRange}
                </a>
              </h3>
            )}

            <p itemProp="jobTitle">{job.position}</p>
            <p itemProp="knowsLanguage">{job.technologies}</p>
            <p itemProp="content">{job.content}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default WorkExperience;
