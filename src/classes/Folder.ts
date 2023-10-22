import Item from "./Item";
import File from "./File";

export default class Folder extends Item {
  children: Item[] = [];

  add(obj: Item) {
    if (!this.has(obj.name)) this.children.push(obj);
  }

  add_path(path: string[]) {
    console.log("Adding path to Folder");
    console.log(this);
    console.log(path);
    if (path.length === 1) {
      this.add(new File(path[0]));
      console.log("Added File");
      console.log(this);
      return;
    }
    let name0 = path[0];
    let path0 = path.slice(1);
    let subfolder: Item | null;

    if (this.has(name0)) {
      subfolder = this.get(name0);
    } else {
      subfolder = new Folder(name0);
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
      throw new Error("Cannot add element to File");
    }
    console.log("Added File");
    console.log(this);
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
  copy(): Folder {
    const out = new Folder(this.name);
    for (let item of this.children) {
      out.add(item.copy());
    }
    return out;
  }

  toDepthList(depth: number = 0) {
    let out = ["|".repeat(depth) + "@" + this.name];
    for (let child of this.children) {
      out = out.concat(child.toDepthList(depth + 1));
    }
    return out;
  }
}
