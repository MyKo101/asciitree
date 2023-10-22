import { useContext, useState } from "react";

import FileTreeContext from "../FileTreeContext";

import Button from "react-bootstrap/Button";

import TextInput from "./TextInput";

export default function Input() {
  const { fileTree } = useContext(FileTreeContext);

  const [contextToggle, setContextToggle] = useState<boolean>(false);

  const PrintIt = () => {
    console.log(fileTree);
    console.log(fileTree.print());
  };

  return (
    <div style={{ background: "green", height: "100%" }}>
      Input
      <TextInput />
      <br /> {fileTree.print()}
      <br />
      <Button onClick={PrintIt}>Click</Button>
    </div>
  );
}
