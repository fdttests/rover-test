import { DirectionEnum } from "../enums/DirectionEnum";
import { SpinDirectionEnum } from "../enums/SpinDirectionEnum";
import RoverSpinDirectionOptions from "../types/RoverSpinDirectionOptions";

export default class GetRoverSpinDirectionUseCase {
    private directions: Array<any> = [
        DirectionEnum.North,
        DirectionEnum.East,
        DirectionEnum.South,
        DirectionEnum.West
    ];

    public execute(spinOptions: RoverSpinDirectionOptions): DirectionEnum {
        const currentIndex = this.directions.indexOf(spinOptions.currentDirection);
        const lastIndex = this.directions.length - 1;
        let newIndex;

        switch (spinOptions.spin) {
            case SpinDirectionEnum.Anticlockwise:
                newIndex = currentIndex - 1;

                return this.directions[newIndex >= 0 ? newIndex: lastIndex];
            case SpinDirectionEnum.Clockwise:
                newIndex = currentIndex + 1;

                return this.directions[newIndex <= lastIndex ? newIndex: 0];
            default:
                throw new Error('Invalid spin direction');
        }
    }
}
