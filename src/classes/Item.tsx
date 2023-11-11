import Folder from "./Folder";

export interface itemJSON {
  name: string;
}

export default abstract class Item {
  name: string;
  parent: Folder | null;
  constructor(name: string, parent: Folder | null) {
    this.name = name;
    this.parent = parent;
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

  delete() {
    if (this.parent === null) {
      return;
    }
    let num = this.parent.get_loc(this.name);
    if (num === null) {
      return;
    }
    this.parent.children.splice(num, 1);
  }
}
