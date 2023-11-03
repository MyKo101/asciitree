import { useContext } from "react";

import FileTreeContext from "../FileTreeContext";

export default function Output() {
  const { fileTree } = useContext(FileTreeContext);

  return (
    <div className="io-container output-container">
      Output
      <br /> {fileTree.print()}
    </div>
  );
}
