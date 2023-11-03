import { useState, useContext } from "react";

import FileTreeContext from "../../main/FileTreeContext";

import File from "../../classes/File";
import NameBox from "./NameBox";

import SVG from "./SVG2";

interface fileComponentProps {
  file: File;
}

export default function FileComponent({ file }: fileComponentProps) {
  const { fileTree, setFileTree } = useContext(FileTreeContext);
  const handleClick = () => {
    const new_item = file.toFolder();
    if (new_item === null) return;
    setFileTree((prev) => {
      let new_tree = prev.copy();
      let para_file = new_tree.find(file);
      para_file.replaceSelf(new_item);
      return new_tree;
    });
  };
  return (
    <div className="item-component file-style">
      <div className="item-header file-header">
        <SVG type="file" onClick={handleClick} />
        <NameBox item={file} className="item-name file-name file-style" />
      </div>
    </div>
  );
}
