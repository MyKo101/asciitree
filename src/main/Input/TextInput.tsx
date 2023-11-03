import Form from "react-bootstrap/Form";
import { useContext } from "react";

import FileTreeContext from "../FileTreeContext";

export default function TextInput() {
  const { setFileTree } = useContext(FileTreeContext);

  const handleInput = (value: string) => {
    setFileTree((prev) => {
      const new_object = prev.copy();
      new_object.add_string(value);
      console.log(new_object.print());
      return new_object;
    });
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.target && "value" in e.target) {
      const val: string = e.target.value as string;
      console.log("Enter on " + val);
      handleInput(val);
      e.target.value = "";
    }
  }

  return <Form.Control as="input" onKeyDown={handleKeyDown} />;
}
