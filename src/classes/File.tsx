import Item, { itemJSON } from "./Item";
import Folder from "./Folder";

export default class File extends Item {
  toDepthList(depth: number = 0) {
    return ["|".repeat(depth) + "-" + this.name];
  }

  toFolder() {
    return new Folder(this.name, this.parent);
  }

  static fromJSON(data: itemJSON): File {
    return new File(data.name, null);
  }
}
