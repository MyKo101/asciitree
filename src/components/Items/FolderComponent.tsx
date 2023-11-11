import { useState, useContext } from "react";

import FileTreeContext from "../../main/FileTreeContext";

import Folder from "../../classes/Folder";

import ItemComponent from "./ItemComponent";
import NameBox from "./NameBox";
import AddFile from "./AddFile";

import SVG from "./SVG";
interface folderComponentProps {
  folder: Folder;
}

export default function FolderComponent({ folder }: folderComponentProps) {
  const { setFileTree } = useContext(FileTreeContext);
  const [minimised, setMinimised] = useState<boolean>(false);
  const handleClick = () => {
    if (folder.children.length !== 0) {
      setMinimised((x) => !x);
      return;
    }
    const new_item = folder.toFile();
    if (new_item === null) return;
    setFileTree((prev) => {
      let new_tree = prev.copy();
      let para_folder = new_tree.find(folder);
      para_folder.replaceSelf(new_item);
      return new_tree;
    });
  };
  let svgType: "folder" | "folderEmpty" | "folderMinimised" = "folder";
  if (folder.children.length === 0) {
    svgType = "folderEmpty";
  } else if (minimised) {
    svgType = "folderMinimised";
  }
  return (
    <div className="item-component folder-style">
      {!folder.is_root && (
        <div className="item-header folder-header">
          <SVG type={svgType} onClick={handleClick} />

          {/* <div className="item-name folder-name folder-style">{folder.name}</div> */}
          <NameBox
            item={folder}
            className="item-name folder-name folder-style"
          />
        </div>
      )}
      {!minimised && (
        <div className="folder-box">
          {folder.children.map((x, ind) => {
            return <ItemComponent key={ind} item={x} />;
          })}
          <AddFile target={folder} />
        </div>
      )}
    </div>
  );
}
