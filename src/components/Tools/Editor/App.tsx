import { createElement, Fragment, useState, useEffect } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";

function useProcessor(text) {
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}

function Editor() {
  return (
    <div className="p-4 w-full h-full bg-white">
      <div className="flex flex-col h-full">
        <header className="flex w-full border-b justify-between items-top">
          <h1 className="text-2xl font-bold">markdown</h1>
          <button className="bg-black text-neutral-50 py-1 px-2 rounded-md mt-2 mb-4">
            Publish to GitHub
          </button>
        </header>
        <div className="flex flex-row flex-grow">
          <div
            className="rounded-l-md p-2 w-1/2 outline-none"
            contentEditable={true}
          ></div>
          <div className="bg-neutral-50 w-1/2 p-2 rounded-r-md prose break-words">
            {useProcessor("# hallo")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
