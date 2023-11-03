import fileSvg from "../../assets/symbols/file.svg";
import folderSvg from "../../assets/symbols/folder.svg";

interface svgInterface {
  type: "folder" | "file";
  onClick: () => void;
}

export default function SVG({ type, onClick }: svgInterface) {
  if (type !== "folder" && type !== "file") {
    throw new Error("Unknown type");
  }
  const className = `item-svg ${type}-svg ${type}-style`;
  let typeSvg: string;
  if (type === "folder") {
    typeSvg = folderSvg;
  } else {
    typeSvg = fileSvg;
  }
  return (
    <div className={className}>
      <img src={typeSvg} onClick={onClick} />
    </div>
  );
}
