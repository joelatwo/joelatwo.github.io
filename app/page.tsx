import { getContent } from "@/data/dataFetching";
import { Navigation } from "@/app/components/Navigation";
import { Rating, Typography } from "@mui/material";
import { skills } from "@/data/skills";
import { StarRating } from "./components/StarRating";

const skillsList = Object.entries(skills);

export default async function Home() {
  const data = await getContent("homepage");

  return (
    <>
      <div id="left">
        <Navigation />
      </div>
      <div id="right">
        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <div className="coreCharacterSheet">
          <div className="mainCharacterSheet">
            <h2>Experience</h2>

            <div>
              <h3>Idaho State Government</h3>
              <p>Software Engineer 3</p>
              <ul>
                <li>
                  Increased team development speed by 40% by architecting a
                  reusable component library
                </li>
                <li>
                  Designed a streamlined search capability adopted with minimal
                  overhead, generating strong customer interest in further
                  enhancements
                </li>
                <li>
                  Built stronger stakeholder relationships by frequently
                  delivering, leading to increased engagement and tighter
                  feedback loops
                </li>
              </ul>
            </div>

            <div>
              <h3>Schweitzer Engineering Laboratories</h3>
              <p>Software Engineer</p>
              <ul>
                <li>
                  Led development of a design system and component library,
                  establishing a single source of truth for UI across the
                  product
                </li>
                <li>
                  Executed a zero-downtime migration from AngularJS to Next.js
                  using the strangler pattern, enabling incremental rollout and
                  reducing risk
                </li>
                <li>
                  Built a trusted partnership with marketing stakeholders to
                  change from a reactive to proactive relationship.
                </li>
              </ul>
            </div>

            <div>
              <h3>Fenway Group</h3>
              <p>Associate Software Engineer</p>
              <ul>
                <li>
                  Designed and built a smart scheduling tool that automatically
                  identified optimal meeting times, streamlining coordination
                  across teams
                </li>
                <li>
                  Reduced technical debt through systematic refactoring,
                  improving code maintainability and long-term development
                  velocity
                </li>
                <li>
                  Designed a widget based, customizable homepage that empowered
                  users to update content dynamically
                </li>
              </ul>
            </div>
          </div>

          <div className="sideBar">
            <div>
              <h2>Strengths</h2>
              <div>
                <StarRating name="Building Trust" value={4} />
                <StarRating name="Problem Solving" value={3} />
                <StarRating name="UI/UX Design" value={2} />
                <StarRating name="Coding Ability" value={4} />
                <StarRating name="Leadership" value={3} />
              </div>
            </div>
            <div className="skillsList">
              <h2>Skills</h2>
              {skillsList.map(([name, value]) => (
                <StarRating key={name} name={name} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
