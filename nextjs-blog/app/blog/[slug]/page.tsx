import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; 
  const data: fullBlog = await getData(slug);
  // Define PortableText components inline
  const components = {
    types: {
      image: ({ value }: { value: any }) => {
        const imageUrl = urlFor(value.asset).url();
        const isGif = imageUrl.endsWith(".gif");
  
        return (
          <Image
            src={imageUrl}
            alt={value.alt || "Blog Image"}
            width={800}
            height={450}
            className="rounded-lg border"
            unoptimized={isGif} // Add this property for GIFs
          />
        );
      },
    },
  };

  return (
    <div className="mt-8 flex flex-col items-center text-center ">
      <h1>
        <span className="block landing-header-font  text-base text-primary font-semibold tracking-wide uppercase">
          Timothy's - Blog
        </span>
        <span className="mt-2 block blog-header-font text-2xl leading-8  tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        width={400}
        height={400}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 mb-5 border"
      />

      <div className="mt-16 blog-description-font prose prose-blue prose-lg dark:prose-invert   prose-li:marker:text-primary prose-a:text-primary text-left max-w-prose ">
        <PortableText value={data.content} components={components}/>
      </div>
    </div>
  );
}
