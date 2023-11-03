import { createContext, useState } from "react";
import FileTree from "../classes/FileTree";

type FileTreeStateType = [
  FileTree,
  React.Dispatch<React.SetStateAction<FileTree>>
];

// const INIT = [
//   "myfolder/subfolder1/thisfile",
//   "myfolder/subfolder1/thatfile",
//   "myfolder/otherfile",
//   "myfolder/anotherfile",
//   "root/object",
//   "hello",
//   "world",
//   "newfolder/newfile",
// ];

// const INIT = ["myfolder/FileA", "myfolder/FileB"];

export function FileTreeState(): FileTreeStateType {
  const [fileTree, setFileTree] = useState(new FileTree());
  //   return {
  //     data: fileTree,
  //     add: (name: string) => {
  //       console.log("Adding");
  //       setFileTree(fileTree.copy());
  //     },
  //   };
  // for (let item of INIT) fileTree.add_path(item.split("/"));

  return [fileTree, setFileTree];
}

// const FileTreeContext = createContext({
//     data: new FileTree(),
//     add: (name: string) => {},
//   });

const setFileTreeDefault: React.Dispatch<React.SetStateAction<FileTree>> = (
  value: React.SetStateAction<FileTree>
) => {};

const FileTreeContext = createContext({
  fileTree: new FileTree(),
  setFileTree: setFileTreeDefault,
});

export default FileTreeContext;
