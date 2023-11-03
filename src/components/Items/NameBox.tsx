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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log({
      component: "NameBox",
      function: "handleChange",
      location: "start",
      item: item,
      event: e,
    });

    setFileTree((prev) => {
      let new_tree = prev.copy();
      let para_item = new_tree.find(item);
      para_item.name = e.target.value;
      return new_tree;
    });
  }

  return (
    <Form.Control
      size="sm"
      className={className}
      value={item.name}
      onChange={handleChange}
      as="input"
      style={{ width: "auto" }}
    />
  );
}
