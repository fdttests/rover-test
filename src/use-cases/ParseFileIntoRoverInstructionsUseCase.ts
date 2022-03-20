import { DirectionEnum } from "../enums/DirectionEnum";
import RoverInstruction from "../types/RoverInstruction";
import RoverInstructionCollection from "../types/RoverInstructionCollection";
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
        const instructions: Array<RoverInstruction> = [];

        for (let i = 1; i < lines.length; i += 2) {
            const [xPosition, yPosition, direction] = lines[i].split(' ');
            const instruction = lines[i + 1];

            instructions.push({
                instruction: instruction,
                deployLocation: {
                    xPosition: parseInt(xPosition),
                    yPosition: parseInt(yPosition),
                    direction: <DirectionEnum>direction
                }
            });
        }

        return {
            plateauSize: {
                x: parseInt(plateauX),
                y: parseInt(plateauY)
            },
            instructions
        };
    }
}
