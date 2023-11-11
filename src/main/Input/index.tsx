import { useContext } from "react";

import FileTreeContext from "../FileTreeContext";

import FileTreeComponent from "../../components/Items/FileTreeComponent";
import InputMenu from "./InputMenu";

export default function Input() {
  const { fileTree } = useContext(FileTreeContext);

  return (
    <div className="io-container input-container">
      <InputMenu />
      <FileTreeComponent filetree={fileTree} />
    </div>
  );
}
