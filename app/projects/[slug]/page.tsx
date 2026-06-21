import { getContent } from "@/data/dataFetching";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
   const { slug } = await params
  const data = await getContent(`projects/${slug}`);
  return (
    <div >
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
