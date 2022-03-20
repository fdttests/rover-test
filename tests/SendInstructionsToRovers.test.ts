import { DirectionEnum } from "../src/enums/DirectionEnum";
import SendInstructionsToRoversUseCase from "../src/use-cases/SendInstructionsToRoversUseCase";

describe('Send Instructions to Rovers Test', () => {
    it('should return correct position given the instructions', () => {
        const sendInstructionsToRoversUseCase = new SendInstructionsToRoversUseCase();

        const rovers = sendInstructionsToRoversUseCase.execute({
            plateauSize: {
                x: 5,
                y: 5
            },
            instructions: [
                {
                    deployLocation: {
                        xPosition: 1,
                        yPosition: 2,
                        direction: DirectionEnum.North
                    },
                    instruction: 'LMLMLMLMM'
                },
                {
                    deployLocation: {
                        xPosition: 3,
                        yPosition: 3,
                        direction: DirectionEnum.East
                    },
                    instruction: 'MMRMMRMRRM'
                }
            ]
        });

        expect(rovers.length).toBe(2);

        const [roverOne, roverTwo] = rovers;

        expect(roverOne.xPosition).toBe(1);
        expect(roverOne.yPosition).toBe(3);
        expect(roverOne.direction).toBe(DirectionEnum.North);

        expect(roverTwo.xPosition).toBe(5);
        expect(roverTwo.yPosition).toBe(1);
        expect(roverTwo.direction).toBe(DirectionEnum.East);
    });
});
