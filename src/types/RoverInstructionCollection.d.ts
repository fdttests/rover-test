import Plateau from "../models/Plateau";
import RoverInstruction  from "./RoverInstruction";

export default interface RoverInstructionCollection {
    plateau: Plateau;
    instructions: Array<RoverInstruction>;
}
