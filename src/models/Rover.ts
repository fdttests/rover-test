import { DirectionEnum } from "../enums/DirectionEnum";

export default class Rover {
  public constructor(
        public xPosition: number = 0,
        public yPosition: number = 0,
        public direction: DirectionEnum
  ) { }
}
