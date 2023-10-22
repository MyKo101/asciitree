import Form from "react-bootstrap/Form";
import { useState, useContext } from "react";

import FileTreeContext from "../FileTreeContext";

export default function TextInput() {
  const { fileTree, setFileTree } = useContext(FileTreeContext);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.target && "value" in e.target) {
      const val: string = e.target.value as string;
      console.log("Enter on " + val);
      setFileTree((prev) => {
        const new_object = prev.copy();
        new_object.add_string(val);
        return new_object;
      });
      e.target.value = "";
    }
  }

  return <Form.Control as="input" onKeyDown={handleKeyDown} />;
}
