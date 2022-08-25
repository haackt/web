import { toString } from "mdast-util-to-string";

export default function remarkLineClamp() {
  return function (tree, { data }) {
    data.astro.frontmatter.lineClamp = toString(tree)
      .split(" ")
      .slice(0, 120)
      .join(" ");
  };
}
