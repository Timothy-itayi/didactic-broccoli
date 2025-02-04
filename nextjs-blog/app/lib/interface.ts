import { PortableTextBlock } from "next-sanity";

export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
  }
  
  export interface fullBlog {
    currentSlug: string;
    title: string;
    content: PortableTextBlock[];
    titleImage: any;
  }
