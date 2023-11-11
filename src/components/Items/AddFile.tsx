import { useContext } from "react";

import FileTreeContext from "../../main/FileTreeContext";

import Button from "react-bootstrap/Button";

import Folder from "../../classes/Folder";
import File from "../../classes/File";

interface addFileInterface {
  target: Folder;
}

export default function AddFile({ target }: addFileInterface) {
  const { setFileTree } = useContext(FileTreeContext);

  const handleClick = () => {
    setFileTree((prev) => {
      let new_tree = prev.copy();
      let para_target = new_tree.find(target);

      para_target.add(new File("", para_target));
      return new_tree;
    });
  };

  return (
    <div className="addfile-box">
      <Button className="io-button addfile-button" onClick={handleClick}>
        {" "}
        +{" "}
      </Button>
    </div>
  );
}
