import Item from "../../classes/Item";
import Folder from "../../classes/Folder";
import File from "../../classes/File";

import FileComponent from "./FileComponent";
import FolderComponent from "./FolderComponent";

interface itemComponentProps {
  item: Item;
}

export default function ItemComponent({ item }: itemComponentProps) {
  if (item instanceof Folder) {
    return <FolderComponent folder={item} />;
  }
  if (item instanceof File) {
    return <FileComponent file={item} />;
  }
  throw new Error("Unknown Item type");
}
