import Plateau from "../models/Plateau";
import { RoverInstructionCollection } from "../types/RoverInstructionCollection";

export default class ParseFileIntoRoverInstructionsUseCase {
    public execute(fileContent: string): RoverInstructionCollection {
        return {
            plateau: new Plateau(10, 10),
            instructions: []
        };
    }
}
