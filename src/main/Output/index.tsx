import { useContext } from "react";

import FileTreeContext from "../FileTreeContext";

export default function Output() {
  const { fileTree } = useContext(FileTreeContext);

  return (
    <div
      style={{
        background: "red",
        height: "100%",
        whiteSpace: "pre-line",
        fontFamily: "monospace",
        overflowY: "scroll",
      }}
    >
      Output
      <br /> {fileTree.print()}
    </div>
  );
}
