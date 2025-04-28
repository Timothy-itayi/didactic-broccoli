"use client";

import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/app/lib/interface"; // Adjust path
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BlogListProps {
  posts: simpleBlogCard[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 p-10 md:grid-cols-2 mt-5 gap-5">
      {posts.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={300}
            className="rounded-t-lg w-full h-[200px] object-contain"
          />
          <CardContent className="mt-5">
            <h3 className="line-clamp-2 landing-header-font text-2xl">{post.title}</h3>
            <p className="line-clamp-3 landing-description-font text-sm mt-2 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
