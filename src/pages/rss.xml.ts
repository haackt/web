import rss from "@astrojs/rss";
import config from "$config";

const posts = Object.values(
  import.meta.glob("./posts/**/*.mdx", { eager: true })
) as Post[];

interface Post {
  url: string;
  frontmatter: {
    title: string;
    description: string;
    date: Date;
  };
}

export const get = () =>
  rss({
    title: config.site.title,
    description: config.site.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      pubDate: post.frontmatter.date,
    })),
  });
