import Plateau from "../models/Plateau";
import { RoverInstruction } from "./RoverInstruction";

export interface RoverInstructionCollection {
    plateau: Plateau;
    instructions: Array<RoverInstruction>;
}
