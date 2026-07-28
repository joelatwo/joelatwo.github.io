import { getContent } from "@/data/dataFetching";
import { Navigation } from "@/app/components/Navigation";
import { Rating, Tooltip, Typography } from "@mui/material";
import { skills } from "@/data/skills";
import { StarRating } from "./components/StarRating/StarRating";
import Link from "next/link";
import { NavigationLink } from "./components/NavigationLink";
import { FootPrintLink } from "./components/FootPrintLink";
import { FormBuilderPath, SchedulingApp, SelincPath } from "@/data/navigation";
import { RatingToolTipContent } from "./components/StarRating/RatingToolTipContent";
import { Info } from "@mui/icons-material";
import { StarRatingHeader } from "./components/StarRating/StarRatingHeader";

const skillsList = Object.entries(skills);

export default async function Home() {
  const data = await getContent("homepage");

  return (
    <>
      <div id="left">
        <Navigation />
      </div>
      <div id="right">
        <h1>Joel Atwood</h1>
        <div className="characterSheetHeader">
          <p className="title">Full-Stack Software Engineer</p>
          <FootPrintLink
            href="mailto:joelatwo@gmail.com"
            direction={"right"}
            alt={"email"}
          >
            joelatwo@gmail.com
          </FootPrintLink>
          <p className="experience">
            <b>Experience:</b> 7 Years
          </p>
          <p className="education">
            <b>Education:</b> B.S. Computer Science
          </p>

          <FootPrintLink
            href="https://www.linkedin.com/in/joelatwo/"
            alt={"LinkedIn"}
          >
            linkedin.com/in/joelatwo/
          </FootPrintLink>

          <FootPrintLink href="https://github.com/joelatwo" alt={"Github"}>
            github.com/joelatwo
          </FootPrintLink>
        </div>

        <div className="coreCharacterSheet">
          <div className="mainCharacterSheet">
            <h2>Background</h2>
            <p className="description">
              I build software to solve people's problems. The best part of my
              day is delighting someone with a solution that will make their day
              better. This allows me to build meaningful relationships with my
              stakeholders and fellow engineers.
            </p>
            <h2>Experience</h2>

            <div>
              <h3 className="companyName">
                <FootPrintLink
                  href={FormBuilderPath.href}
                  alt="Idaho State Government"
                >
                  Idaho State Government
                </FootPrintLink>
              </h3>
              <p className="jobTitle">Software Engineer 3</p>
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
              <h3 className="companyName">
                <FootPrintLink href={SelincPath.href} alt={"SEL"}>
                  Schweitzer Engineering Laboratories
                </FootPrintLink>
              </h3>
              <p className="jobTitle">Software Engineer</p>
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
              <h3 className="companyName">
                <FootPrintLink href={SchedulingApp.href} alt="Fenway Group">
                  Fenway Group
                </FootPrintLink>
              </h3>
              <p className="jobTitle">Associate Software Engineer</p>
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
              <StarRatingHeader title="Strengths" />
              <div>
                <StarRating name="Communication" value={4} />
                <StarRating name="Strategic" value={3} />
                <StarRating name="UI/UX" value={2} />
                <StarRating name="Coding Ability" value={4} />
                <StarRating name="Leadership" value={3} />
              </div>
            </div>
            <div className="skillsList">
              <StarRatingHeader title="Skills" />
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
