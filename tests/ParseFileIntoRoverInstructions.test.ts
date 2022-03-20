import { DirectionEnum } from "../src/enums/DirectionEnum";
import ParseFileIntoRoverInstructionsUseCase from "../src/use-cases/ParseFileIntoRoverInstructionsUseCase";
import * as fs from 'fs';

describe('Parse File Into Rover Instructions Test', () => {
    it('should parse the instructions given the file content', () => {
        const parseFileIntoRoverInstructionsUseCase = new ParseFileIntoRoverInstructionsUseCase();
        const fileContent = fs.readFileSync('./tests/mocks/normalized-instructions.txt', 'utf8');

        const instructions = parseFileIntoRoverInstructionsUseCase.execute(fileContent);
        const [instructionOne, instructionTwo] = instructions.instructions;

        expect(instructions.plateau.minX).toBe(0);
        expect(instructions.plateau.maxX).toBe(5);
        expect(instructions.plateau.minY).toBe(0);
        expect(instructions.plateau.maxY).toBe(5);

        expect(instructions.instructions.length).toBe(2);

        expect(instructionOne.rover.xPosition).toBe(1);
        expect(instructionOne.rover.yPosition).toBe(2);
        expect(instructionOne.rover.direction).toBe(DirectionEnum.North);
        expect(instructionOne.instruction).toBe('LMLMLMLMM');

        expect(instructionTwo.rover.xPosition).toBe(3);
        expect(instructionTwo.rover.yPosition).toBe(3);
        expect(instructionTwo.rover.direction).toBe(DirectionEnum.East);
        expect(instructionTwo.instruction).toBe('MMRMMRMRRM');
    });
});
