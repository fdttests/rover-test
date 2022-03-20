import { DirectionEnum } from "../src/enums/DirectionEnum";
import ParseFileIntoRoverInstructionsUseCase from "../src/use-cases/ParseFileIntoRoverInstructionsUseCase";
import * as fs from 'fs';

describe('Parse File Into Rover Instructions Test', () => {
    const useCase = new ParseFileIntoRoverInstructionsUseCase();

    it('should parse the instructions given the file content', () => {
        const fileContent = fs.readFileSync('./tests/mocks/normalized-instructions.txt', 'utf8');

        const instructions = useCase.execute(fileContent);
        const [instructionOne, instructionTwo] = instructions.instructions;

        expect(instructions.plateauSize.x).toBe(5);
        expect(instructions.plateauSize.y).toBe(5);

        expect(instructions.instructions.length).toBe(2);

        expect(instructionOne.deployLocation.xPosition).toBe(1);
        expect(instructionOne.deployLocation.yPosition).toBe(2);
        expect(instructionOne.deployLocation.direction).toBe(DirectionEnum.North);
        expect(instructionOne.instruction).toBe('LMLMLMLMM');

        expect(instructionTwo.deployLocation.xPosition).toBe(3);
        expect(instructionTwo.deployLocation.yPosition).toBe(3);
        expect(instructionTwo.deployLocation.direction).toBe(DirectionEnum.East);
        expect(instructionTwo.instruction).toBe('MMRMMRMRRM');
    });

    it('should throw error when file content is empty', () => {
        const test = () => {
            useCase.execute('');
        };

        expect(test).toThrowError('Invalid File!');
    });

    it('should throw error when file content has invalid number of lines', () => {
        const test = () => {
            useCase.execute(`
                4 4
                5 5 E    
            `);
        };

        expect(test).toThrowError('Invalid File!');
    });
});
