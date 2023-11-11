import Item, { itemJSON } from "./Item";
import File from "./File";

export interface folderJSON extends itemJSON {
  children: itemJSON[];
}

export default class Folder extends Item {
  is_root: boolean = false;
  children: Item[];

  constructor(name: string, parent: Folder | null) {
    super(name, parent);
    this.children = [];
  }

  add(obj: Item) {
    if (!this.has(obj.name)) {
      obj.setParent(this);
      this.children.push(obj);
    }
  }

  add_path(path: string[]) {
    if (path.length === 1) {
      this.add(new File(path[0], this));
      return;
    }
    let name0 = path[0];
    let path0 = path.slice(1);
    let subfolder: Item | null;

    if (this.has(name0)) {
      subfolder = this.get(name0);
    } else {
      subfolder = new Folder(name0, this);
      this.add(subfolder);
    }

    if (subfolder === null) {
      // Should not be reachable, add type guards?
      throw new Error("Subfolder not found");
    }

    if (subfolder instanceof Folder) {
      subfolder.add_path(path0);
    }
    if (subfolder instanceof File) {
      // TODO Can happen. Need to account in top level
      // Or just convert to Folder by default?
      let newFolder = subfolder.toFolder();
      subfolder.replaceSelf(newFolder);
      newFolder.add_path(path0);
      //throw new Error("Cannot add element to File");
    }
  }

  has(name: string): boolean {
    return this.children.filter((x) => x.name === name).length > 0;
  }
  get(name: string): Item | null {
    let out = this.children.filter((x) => x.name === name);
    if (out.length === 1) {
      return out[0];
    }
    if (out.length === 0) {
      return null;
    }
    console.log("Non-unique Elements found");
    console.log(this);
    console.log(name);
    console.log(out);
    throw new Error("Non-unique Elements found");
  }
  get_loc(name: string): number | null {
    let out = this.children.findIndex((x) => x.name === name);
    if (out === -1) {
      return null;
    }
    return out;
  }

  toDepthList(depth: number = 0) {
    let out = ["|".repeat(depth) + "-" + this.name];
    for (let child of this.children) {
      out = out.concat(child.toDepthList(depth + 1));
    }
    return out;
  }

  toFile() {
    if (this.children.length === 0) {
      return new File(this.name, this.parent);
    }
    return null;
  }

  toJSON(): folderJSON {
    let resChildren: itemJSON[] = [];
    if (this.children && this.children.length) {
      resChildren = this.children.map((x) => x.toJSON());
    }
    let res: folderJSON = {
      ...super.toJSON(),
      children: resChildren,
    };

    return res;
  }

  static fromJSON(data: folderJSON): Folder {
    let res = new Folder(data.name, null);
    for (let child of data.children) {
      let newItem: Item;
      //if ("children" in Object.keys(child)){
      if ("children" in child) {
        newItem = Folder.fromJSON(child as folderJSON);
      } else {
        newItem = File.fromJSON(child);
      }
      res.add(newItem);
    }
    return res;
  }

}
