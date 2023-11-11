import FileTree from "../../classes/FileTree";
import Folder from "../../classes/Folder";
import File from "../../classes/File";
import Item from "../../classes/Item";
import Spec from "../../classes/Spec";

const getVbar = (is_firstrow: boolean, is_lastentry: boolean, spec: Spec) => {
  if (is_lastentry && is_firstrow) return spec["Vertical Bar Last"];
  if (is_lastentry && !is_firstrow) return " ";
  if (!is_lastentry && is_firstrow) return spec["Vertical Bar"];
  if (!is_lastentry && !is_firstrow) return spec["Vertical Bar Empty"];
  return " ";
};

const addIndent = (
  txt: string,
  spec: Spec,
  is_firstrow: boolean,
  is_lastentry: boolean,
  is_root: boolean = false
) => {
  let vbar = getVbar(is_firstrow, is_lastentry, spec);
  if (is_root) {
    return vbar + txt;
  }
  return " ".repeat(spec["Indent"]) + vbar + txt;
};

const mapIndent = (spec: Spec, is_last: boolean, is_root: boolean = false) => {
  return (txt: string, i: number, arr: string[]) => {
    return addIndent(txt, spec, i === 0, is_last, is_root);
  };
};

const makeOutput = (
  item: Item,
  spec: Spec,
  is_last: boolean,
  should_indent: boolean = true,
  is_root: boolean = false
): string[] => {
  let mid: string[] = [];
  if (item instanceof File) {
    mid = makeOutputFile(item, spec);
  }
  if (item instanceof Folder) {
    mid = makeOutputFolder(item, spec);
  }
  let out = mid;
  if (should_indent) {
    out = mid.map(mapIndent(spec, is_last, is_root));
  }

  return out;
};

const makeOutputFile = (file: File, spec: Spec): string[] => {
  return [spec["File Indicator"] + file.name];
};

const makeOutputFolder = (folder: Folder, spec: Spec): string[] => {
  let out: string[] = [spec["Folder Indicator"] + folder.name];
  for (let i = 0; i < folder.children.length; i++) {
    let item = folder.children[i];
    let new_ls = makeOutput(item, spec, i === folder.children.length - 1);

    out.push(...new_ls);
  }

  return out;
};

const makeOutputFileTree = (filetree: FileTree, spec: Spec) => {
  let out: string[] = [];
  if (spec["Include Root"]) out.push("");
  for (let i = 0; i < filetree.children.length; i++) {
    let item = filetree.children[i];
    out.push(
      ...makeOutput(
        item,
        spec,
        i === filetree.children.length - 1,
        spec["Include Root"],
        true
      )
    );
  }
  return out;
};

export default function makeOutputText(
  filetree: FileTree,
  spec: Spec
): string[] {
  return makeOutputFileTree(filetree, spec);
}
