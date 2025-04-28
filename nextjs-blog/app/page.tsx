import { simpleBlogCard } from "./lib/interface";
import { client } from "./lib/sanity";
import BlogList from "@/app/bloglist";

export const revalidate = 30;

async function getData(): Promise<simpleBlogCard[]> {
  try {
    const query = `
      *[_type == 'blog'] | order(_createdAt desc) {
        title,
        smallDescription,
        "currentSlug": slug.current,
        titleImage
      }`;
    const data: simpleBlogCard[] = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Home() {
  const data = await getData();
  return <BlogList posts={data} />;
}
