import Form from "react-bootstrap/Form";
import { useContext } from "react";
import Item from "../../classes/Item";

import FileTreeContext from "../../main/FileTreeContext";

interface nameBoxProps {
  item: Item;
  className: string;
}

export default function NameBox({ item, className }: nameBoxProps) {
  const { setFileTree } = useContext(FileTreeContext);

  const checkDeleteItem = (txt: unknown) => {
    if (txt === "")
      setFileTree((prev) => {
        const new_tree = prev.copy();
        const para_item = new_tree.find(item);
        para_item.delete();

        return new_tree;
      });
  };
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && e.target && "value" in e.target) {
      checkDeleteItem(e.target.value);
    }
  }

  function handleChange(e: React.FocusEvent<HTMLInputElement>) {
    //e.target.style.width = e.target.value.length + 1 + "ch";
    setFileTree((prev) => {
      let new_tree = prev.copy();
      let para_item = new_tree.find(item);
      para_item.name = e.target.value;
      return new_tree;
    });
  }
  function handleLoseFocus(e: React.ChangeEvent<EventTarget>) {
    if ("value" in e.target) checkDeleteItem(e.target.value);
  }

  return (
    <div className={"namebox " + className}>
      <Form.Control
        autoFocus
        size="sm"
        className="namebox-control"
        value={item.name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleLoseFocus}
        as="input"
        style={{ width: "100%" }}
      />
    </div>
  );
}
