import { getContent } from "@/data/dataFetching";
import { Navigation } from "@/app/components/Navigation";
import { Rating, Typography } from "@mui/material";
import { skills } from "@/data/skills";

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
          <div className="mainCharacterSheet"></div>

          <div className="skillsList">
            <h2>Skills</h2>
            {skillsList.map(([key, value]) => (
              <div key={key} className="skillItem">
                <Typography>{key}</Typography>
                <Rating name={`skill-${key}`} value={value} readOnly />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
