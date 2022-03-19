import Plateau from "../models/Plateau";
import { RoverInstruction } from "./RoverInstruction";

export type RoverInstructionCollection = {
    plateau: Plateau;
    instructions: Array<RoverInstruction>;
};
