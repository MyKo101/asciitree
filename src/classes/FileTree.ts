import Folder from "./Folder";
import File from "./File";
import Item from "./Item";

export default class FileTree extends Folder {
  constructor() {
    super("");
  }

  copy(): FileTree {
    const out = new FileTree();
    for (let child of this.children) {
      out.add(child.copy());
    }
    return out;
  }

  toDepthList(depth: number = 0) {
    return super.toDepthList(depth);
  }

  print() {
    const txt = this.toDepthList();
    return txt.join("\n");
  }

  add_string(text: string) {
    let text_split = text.split("/");

    this.add_path(text_split);
  }
}
