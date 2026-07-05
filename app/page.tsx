import { getContent } from "@/data/dataFetching";

export default async function Home() {
  const data = await getContent("homepage");
  return (
    <>
      <div id="left" >
      </div>
      <div id="right">
        <h1>{data.title}</h1>

        <p>{data.description}</p>
      </div>
    </>
  );
}
