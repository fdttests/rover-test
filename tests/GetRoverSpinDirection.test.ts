import GetRoverSpinDirectionUseCase from "../src/use-cases/GetRoverSpinDirectionUseCase";
import { DirectionEnum } from "../src/enums/DirectionEnum";
import { SpinDirectionEnum } from "../src/enums/SpinDirectionEnum";

describe('Get Rover Spin Direction Test', () => {
    const useCase = new GetRoverSpinDirectionUseCase();

    it('should get correct position when spining clockwise', () => {
        let direction = DirectionEnum.North;

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Clockwise});
        expect(direction).toBe(DirectionEnum.East);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Clockwise});
        expect(direction).toBe(DirectionEnum.South);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Clockwise});
        expect(direction).toBe(DirectionEnum.West);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Clockwise});
        expect(direction).toBe(DirectionEnum.North);
    });

    it('should get correct position when spining anticlockwise', () => {
        let direction = DirectionEnum.North;

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Anticlockwise});
        expect(direction).toBe(DirectionEnum.West);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Anticlockwise});
        expect(direction).toBe(DirectionEnum.South);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Anticlockwise});
        expect(direction).toBe(DirectionEnum.East);

        direction = useCase.execute({currentDirection: direction, spin: SpinDirectionEnum.Anticlockwise});
        expect(direction).toBe(DirectionEnum.North);
    });
});
