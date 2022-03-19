import { DirectionEnum } from "../src/enums/DirectionEnum";
import Plateau from "../src/models/Plateau";
import Rover from "../src/models/Rover";
import SendInstructionsToRoversUseCase from "../src/use-cases/SendInstructionsToRoversUseCase"

describe('Send Instructions to Rovers Test', () => {
    it('should return correct position given the instructions', () => {
        const sendInstructionsToRoversUseCase = new SendInstructionsToRoversUseCase();

        const [roverOne, roverTwo] = sendInstructionsToRoversUseCase.execute({
            plateau: new Plateau(5, 5),
            instructions: [
                {
                    rover: new Rover(1, 2, DirectionEnum.North),
                    instruction: 'LMLMLMLMM'
                },
                {
                    rover: new Rover(3, 3, DirectionEnum.East),
                    instruction: 'MMRMMRMRRM'
                }
            ]
        });

        expect(roverOne.xPosition).toBe(1);
        expect(roverOne.yPosition).toBe(3);
        expect(roverOne.direction).toBe(DirectionEnum.North);

        expect(roverTwo.xPosition).toBe(5);
        expect(roverTwo.yPosition).toBe(1);
        expect(roverTwo.direction).toBe(DirectionEnum.East);
    })
});