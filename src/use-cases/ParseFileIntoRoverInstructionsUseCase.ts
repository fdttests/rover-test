import Plateau from "../models/Plateau";
import Rover from "../models/Rover";
import { RoverInstructionCollection } from "../types/RoverInstructionCollection";
import FileNormalizerUseCase from "./FileNormalizerUseCase";

export default class ParseFileIntoRoverInstructionsUseCase {
    public constructor(
        private fileNormalizerUseCase = new FileNormalizerUseCase()
    ) { }

    public execute(fileContent: string): RoverInstructionCollection {
        const normalizedFileContent = this.fileNormalizerUseCase.execute(fileContent);
        const lines = normalizedFileContent.split('\n');

        if (lines.length <= 1 || lines.length % 2 === 0) {
            throw new Error('Invalid File!');
        }

        const [plateauX, plateauY] = lines[0].split(' ');
        const instructions = [];

        for (let i = 1; i < lines.length; i += 2) {
            const [positionX, positionY, direction] = lines[i].split(' ');
            const instruction = lines[i + 1];

            instructions.push({
                rover: new Rover(parseInt(positionX), parseInt(positionY), <any>direction),
                instruction: instruction
            });
        }

        return {
            plateau: new Plateau(parseInt(plateauX), parseInt(plateauY)),
            instructions
        };
    }
}
