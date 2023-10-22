export default abstract class Item {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract copy(): Item;
  abstract toDepthList(depth: number): string[];
}
