import FileTree from "../../classes/FileTree";
import ItemComponent from "./ItemComponent";

interface filetreeComponentProps {
  filetree: FileTree;
}

export default function FileTreeComponent({
  filetree,
}: filetreeComponentProps) {
  return (
    <div className="folder-box">
      {filetree.children.map((x, ind) => {
        return <ItemComponent key={ind} item={x} />;
      })}
    </div>
  );
}
