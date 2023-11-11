import { createContext, useState, useEffect } from "react";
import FileTree from "../classes/FileTree";
import { loadFileTree, saveFileTree } from "./cookies";

type FileTreeStateType = [
  FileTree,
  React.Dispatch<React.SetStateAction<FileTree>>
];

type setFileTeeFunction = (obj: FileTree) => FileTree;

export function FileTreeState(): FileTreeStateType {
  const [fileTree, setFileTree0] = useState(new FileTree());

  useEffect(() => {
    setFileTree0(loadFileTree());
  }, []);
  const setFileTree = (func: FileTree | setFileTeeFunction) => {
    if (func instanceof FileTree) {
      saveFileTree(func);
    } else {
      saveFileTree(func(fileTree));
    }
    setFileTree0(func);
  };
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
