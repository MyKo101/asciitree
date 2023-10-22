import { createContext, useState } from "react";
import FileTree from "../classes/FileTree";

type FileTreeStateType = [
  FileTree,
  React.Dispatch<React.SetStateAction<FileTree>>
];

export function FileTreeState(): FileTreeStateType {
  const [fileTree, setFileTree] = useState(new FileTree());
  //   return {
  //     data: fileTree,
  //     add: (name: string) => {
  //       console.log("Adding");
  //       setFileTree(fileTree.copy());
  //     },
  //   };
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
