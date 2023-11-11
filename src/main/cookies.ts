import FileTree from "../classes/FileTree";
import Spec from "../classes/Spec";

const FILETREE_COOKIE = "ASCIITREE_FILETREE";
const SPEC_COOKIE = "ASCIITREE_SPEC";

const load_cookie = (nm: string) => {
  let loaded = localStorage.getItem(nm);
  if (loaded === null) return null;
  return JSON.parse(loaded);
};

const save_cookie = (nm: string, data: any) => {
  localStorage.setItem(nm, JSON.stringify(data));
};

export const loadFileTree = () => {
  let cookie = load_cookie(FILETREE_COOKIE);
  if (cookie === null) {
    return new FileTree();
  }
  return FileTree.fromJSON(cookie);
};

export const saveFileTree = (filetree: FileTree) => {
  save_cookie(FILETREE_COOKIE, filetree.toJSON());
};

export const loadSpec = () => {
  let cookie = load_cookie(SPEC_COOKIE);
  if (cookie === null) {
    return new Spec();
  }
  return Spec.fromJSON(cookie);
};

export const saveSpec = (spec: Spec) => {
  save_cookie(SPEC_COOKIE, spec.toJSON());
};
