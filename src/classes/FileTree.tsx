import Folder, { folderJSON } from "./Folder";

import Item from "./Item";

export default class FileTree extends Folder {
  is_root: boolean = true;
  constructor() {
    super("", null);
  }

  copy(): FileTree {
    return FileTree.fromJSON(this.toJSON());
  }

  toDepthList() {
    let out: string[] = [];
    for (let child of this.children) {
      out = out.concat(child.toDepthList(1));
    }
    return out;
  }

  print(separator: string = "\n") {
    const txt = this.toDepthList();
    return txt.join("\n");
  }

  add_string(text: string) {
    let text_split = text.split("/");

    this.add_path(text_split);
  }

  find<T extends Item>(x: T): T {
    let ancestry: string[] = [];
    let current_parent: Item | null = x;
    while (current_parent !== null) {
      ancestry.unshift(current_parent.name);
      current_parent = current_parent.parent;
    }
    ancestry.shift();
    let current_descendent: Item = this;
    for (let current_name of ancestry) {
      if (current_descendent instanceof Folder) {
        let next_descendent = current_descendent.get(current_name);
        if (next_descendent === null) {
          throw new Error("Could not find Item in tree");
        }
        current_descendent = next_descendent;
        continue;
      }
    }
    return current_descendent as T;
  }

  static convertFolder(obj: Folder): FileTree {
    let res = new FileTree();
    res.children = obj.children;
    return res;
  }

  static fromJSON(data: folderJSON) {
    let resFolder: Folder = super.fromJSON(data);
    return FileTree.convertFolder(resFolder);
  }
}
