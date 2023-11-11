import Button from "react-bootstrap/Button";

import { useContext } from "react";
import FileTreeContext from "../../main/FileTreeContext";
import FileTree from "../../classes/FileTree";

interface inputMenuInterface {}

export default function InputMenu({}: inputMenuInterface) {
  const { setFileTree } = useContext(FileTreeContext);

  const handleClear = () => {
    // const newFileTree = new FileTree();
    // newFileTree.add(new Folder("", newFileTree));
    // setFileTree(newFileTree);
    setFileTree(new FileTree());
  };

  const example = () => {
    setFileTree((prev) => {
      const new_tree = new FileTree();
      new_tree.add_path(["Home", "SubFolder", "SubFile"]);
      new_tree.add_path(["Home", "FirstFile"]);
      new_tree.add_path(["Home", "SecondFile"]);
      new_tree.add_path(["OtherFolder", "FirstFile"]);
      new_tree.add_path(["OtherFolder", "SecondFile"]);

      return new_tree;
    });
  };

  return (
    <div className="d-flex w-100">
      <div className="p-2">File Structure</div>
      <Button className="ms-auto io-button io-menu-button" onClick={example}>
        Example
      </Button>
      <Button className="io-button io-menu-button" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}
