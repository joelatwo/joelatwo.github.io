import { getContent } from "@/data/dataFetching";
import { Project } from "@/types/index";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data: Project = await getContent(`projects/${slug}`);
  return (
    <>
      <div id="left">
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div>{data.status}</div>

          <h2>Project Story</h2>
          <div>
            {data.content.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
        </div>
        <div>

        </div>
      </div>
      <div id="right">
        <h2>Lessons Learned</h2>
        {data.lessonsLearned.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </>
  );
}
