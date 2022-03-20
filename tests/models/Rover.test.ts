import { DirectionEnum } from "../../src/enums/DirectionEnum";
import { MovementEnum } from "../../src/enums/MovementEnum";
import Plateau from "../../src/models/Plateau";
import Rover from "../../src/models/Rover";

describe('Plateau Test', () => {
    it('should create a new rover with given position', () => {
        const plateau = new Plateau(15, 15);
        const rover = new Rover(10, 5, DirectionEnum.North, plateau);

        expect(rover.yPosition).toBe(10);
        expect(rover.xPosition).toBe(5);
        expect(rover.direction).toBe(DirectionEnum.North);
    });

    it('should move according to commands', () => {
        const plateau = new Plateau(3, 3);
        const rover = new Rover(1, 1, DirectionEnum.North, plateau);

        rover.move(MovementEnum.Move);
        expect(rover.yPosition).toBe(2);
        
        rover.move(MovementEnum.Move);
        expect(rover.yPosition).toBe(3);

        rover.move(MovementEnum.Right);
        expect(rover.direction).toBe(DirectionEnum.East);
        
        rover.move(MovementEnum.Move);
        expect(rover.xPosition).toBe(2);

        rover.move(MovementEnum.Move);
        expect(rover.xPosition).toBe(3);

        rover.move(MovementEnum.Right);
        expect(rover.direction).toBe(DirectionEnum.South);

        rover.move(MovementEnum.Move);
        expect(rover.yPosition).toBe(2);
        
        rover.move(MovementEnum.Move);
        expect(rover.yPosition).toBe(1);

        rover.move(MovementEnum.Right);
        expect(rover.direction).toBe(DirectionEnum.West);

        rover.move(MovementEnum.Move);
        expect(rover.xPosition).toBe(2);

        rover.move(MovementEnum.Move);
        expect(rover.xPosition).toBe(1);

        rover.move(MovementEnum.Right);
        expect(rover.direction).toBe(DirectionEnum.North);
    });

    it('should throw a error when creating with invalid Y position', () => {
        const plateau = new Plateau(15, 15);
        
        const test = () => {
            new Rover(16, 5, DirectionEnum.North, plateau);
        };

        expect(test).toThrowError('Invalid deploy Y position!');
    });

    it('should throw a error when creating with invalid X position', () => {
        const plateau = new Plateau(15, 15);
        
        const test = () => {
            new Rover(10, 16, DirectionEnum.North, plateau);
        };

        expect(test).toThrowError('Invalid deploy X position!');
    });

    it('should throw a error when trying to move to invalid Y position', () => {
        const plateau = new Plateau(15, 15);
        
        const testMaxY = () => {
            const rover = new Rover(15, 5, DirectionEnum.North, plateau);

            rover.move(MovementEnum.Move);
        };

        const testMinY = () => {
            const rover = new Rover(0, 10, DirectionEnum.South, plateau);

            rover.move(MovementEnum.Move);
        };

        expect(testMaxY).toThrowError('Invalid deploy Y position!');
        expect(testMinY).toThrowError('Invalid deploy Y position!');
    });

    it('should throw a error when trying to move to invalid X position', () => {
        const plateau = new Plateau(15, 15);
        
        const testMaxY = () => {
            const rover = new Rover(10, 15, DirectionEnum.East, plateau);

            rover.move(MovementEnum.Move);
        };

        const testMinY = () => {
            const rover = new Rover(10, 0, DirectionEnum.West, plateau);

            rover.move(MovementEnum.Move);
        };

        expect(testMaxY).toThrowError('Invalid deploy X position!');
        expect(testMinY).toThrowError('Invalid deploy X position!');
    });

    it('should throw a error when given a invalid movement', () => {
        const plateau = new Plateau(15, 15);
        const rover = new Rover(10, 5, DirectionEnum.North, plateau);

        const test = () => {
            rover.move(<any>'Invalid');
        };

        expect(test).toThrowError('Invalid movement provided!');
    });
});
