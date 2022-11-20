import { v4 as uuidv4 } from "uuid";

export abstract class Entity {
  protected readonly id: string;
  constructor() {
    this.id = uuidv4();
  }
}
