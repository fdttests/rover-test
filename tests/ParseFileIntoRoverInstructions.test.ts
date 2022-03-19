import { DirectionEnum } from "../src/enums/DirectionEnum";
import ParseFileIntoRoverInstructionsUseCase from "../src/use-cases/ParseFileIntoRoverInstructionsUseCase";

describe('Parse File Into Rover Instructions Test', () => {
    it('should parse the instructions given the file content', () => {
        const parseFileIntoRoverInstructionsUseCase = new ParseFileIntoRoverInstructionsUseCase();
        const mockContent = `
        5 5
        1 2 N
        LMLMLMLMM
        3 3 E
        MMRMMRMRRM`;

        const instructions = parseFileIntoRoverInstructionsUseCase.execute(mockContent);
        const [instructionOne, instructionTwo] = instructions.instructions;

        expect(instructions.plateau.minX).toBe(0);
        expect(instructions.plateau.maxX).toBe(5);
        expect(instructions.plateau.minY).toBe(0);
        expect(instructions.plateau.maxY).toBe(5);

        expect(instructionOne.rover.xPosition).toBe(1);
        expect(instructionOne.rover.yPosition).toBe(2);
        expect(instructionOne.rover.direction).toBe(DirectionEnum.North);
        expect(instructionOne.instruction).toBe('LMLMLMLMM');

        expect(instructionTwo.rover.xPosition).toBe(3);
        expect(instructionTwo.rover.yPosition).toBe(3);
        expect(instructionOne.rover.direction).toBe(DirectionEnum.East);
        expect(instructionOne.instruction).toBe('MMRMMRMRRM');
    });
});
