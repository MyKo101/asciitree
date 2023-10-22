import Item from "./Item";

export default class File extends Item {
  copy(): File {
    return new File(this.name);
  }

  toDepthList(depth: number = 0) {
    return ["|".repeat(depth) + "-" + this.name];
  }
}
