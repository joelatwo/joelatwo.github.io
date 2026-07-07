import { getContent } from "@/data/dataFetching";
import { Navigation } from "@/app/components/Navigation";

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
      </div>
    </>
  );
}
