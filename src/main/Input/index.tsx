import { useContext } from "react";

import FileTreeContext from "../FileTreeContext";

import TextInput from "./TextInput";

import FileTreeComponent from "../../components/Items/FileTreeComponent";

export default function Input() {
  const { fileTree } = useContext(FileTreeContext);

  return (
    <div className="io-container input-container">
      Input
      <TextInput />
      <FileTreeComponent filetree={fileTree} />
    </div>
  );
}
