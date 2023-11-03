import { ReactComponent as fileSvg } from "../../assets/symbols/file.svg";
import { ReactComponent as folderSvg } from "../../assets/symbols/folder.svg";
import { ReactComponent as folderMinimisedSvg } from "../../assets/symbols/folderMinimised.svg";
import { ReactComponent as folderEmptySvg } from "../../assets/symbols/folderEmpty.svg";

interface svgInterface {
  type: "folderEmpty" | "folderMinimised" | "folder" | "file";
  onClick: () => void;
}

const svgMap = {
  folder: folderSvg,
  file: fileSvg,
  folderMinimised: folderMinimisedSvg,
  folderEmpty: folderEmptySvg,
};

export default function SVG({ type, onClick }: svgInterface) {
  let className: string;
  if (type === "file") {
    className = "item-svg file-svg file-style";
  } else {
    className = "item-svg folder-svg folder-style";
  }

  const TypeSvg = svgMap[type];

  return <TypeSvg onClick={onClick} className={className} />;
}
