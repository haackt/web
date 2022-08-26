import { useRemark } from "react-remark";

function MDEditorApp(props) {
  const [mdContent, setMdContent] = useRemark();

  return (
    <div className="flex flex-col w-full min-h-fit h-1/3">
      <div className="flex justify-end py-2 bg-neutral-100">
        <button>Publish</button>
      </div>
      <div className="flex flex-row grow">
        <div className="w-1/2">
          <textarea
            className="w-full h-full p-1 outline-none"
            spellCheck={false}
            type="text"
            onChange={({ currentTarget }) => setMdContent(currentTarget.value)}
          ></textarea>
        </div>
        <div className="w-1/2 p-1 prose bg-neutral-50">{mdContent}</div>
      </div>
    </div>
  );
}

export default MDEditorApp;
