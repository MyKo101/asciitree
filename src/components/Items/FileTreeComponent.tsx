import FileTree from "../../classes/FileTree";
import ItemComponent from "./ItemComponent";
import AddFile from "./AddFile";

interface filetreeComponentProps {
  filetree: FileTree;
}

export default function FileTreeComponent({
  filetree,
}: filetreeComponentProps) {
  return (
    <div className="filetree-box">
      {filetree.children.map((x, ind) => {
        return <ItemComponent key={ind} item={x} />;
      })}
      <AddFile target={filetree} />
    </div>
  );
}
