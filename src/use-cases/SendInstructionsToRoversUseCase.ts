import Rover from "../models/Rover";
import { RoverInstructionCollection } from "../types/RoverInstructionCollection";

export default class SendInstructionsToRoversUseCase {
  public execute(instructions: RoverInstructionCollection): Array<Rover> {
    return [];
  }
}
