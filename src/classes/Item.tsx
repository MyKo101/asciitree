import Folder, { folderJSON } from "./Folder";
import FileTree from "./FileTree";

export interface itemJSON {
  name: string;
}

export default abstract class Item {
  name: string;
  parent: Folder | null;
  constructor(name: string, parent: Folder | null) {
    console.log({
      class: "Item",
      method: "constructor",
      location: "start",
      name: name,
      parent: parent,
      this: this.toJSON(),
    });

    this.name = name;
    this.parent = parent;
    console.log({
      class: "Item",
      method: "constructor",
      location: "end",
      name: name,
      parent: parent,
      this: this.toJSON(),
    });
  }

  setParent(x: Folder) {
    this.parent = x;
  }

  replaceSelf(x: Item) {
    for (let i = 0; i < this.parent!.children.length; i++) {
      if (this.parent!.children[i] === this) {
        this.parent!.children[i] = x;
      }
    }
  }

  toJSON() {
    let res: itemJSON = {
      name: this.name,
    };
    return res;
  }

  abstract toDepthList(depth: number): string[];
}
