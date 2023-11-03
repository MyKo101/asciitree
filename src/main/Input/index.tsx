import { useContext, useState } from "react";

import FileTreeContext from "../FileTreeContext";

import Button from "react-bootstrap/Button";

import TextInput from "./TextInput";

import ItemComponent from "../../components/Items/ItemComponent";
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
