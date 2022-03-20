import { DirectionEnum } from "../enums/DirectionEnum";
import { MovementEnum } from "../enums/MovementEnum";
import { SpinDirectionEnum } from "../enums/SpinDirectionEnum";
import GetRoverSpinDirectionUseCase from "../use-cases/GetRoverSpinDirectionUseCase";
import Plateau from "./Plateau";

export default class Rover {
    public constructor(
        public yPosition: number = 0,
        public xPosition: number = 0,
        public direction: DirectionEnum,
        public plateau: Plateau,
        private getRoverSpinDirectionUseCase: GetRoverSpinDirectionUseCase = new GetRoverSpinDirectionUseCase()
    ) {
        this.validate();
    }

    public move(movement: MovementEnum): void {
        switch (movement) {
            case MovementEnum.Right:
                this.turnRight();
                break;
            case MovementEnum.Left:
                this.turnLeft();
                break;
            case MovementEnum.Move:
                this.moveFoward();
                break;
            default:
                throw new Error('Invalid movement provided!');
        }
    }

    public getFormattedLocation() {
        return `${this.xPosition} ${this.yPosition} ${this.direction}`;
    }

    private moveFoward(): void {
        switch (this.direction) {
            case DirectionEnum.North:
                this.yPosition += 1;
                break;
            case DirectionEnum.South:
                this.yPosition -= 1;
                break;
            case DirectionEnum.East:
                this.xPosition += 1;
                break;
            case DirectionEnum.West:
                this.xPosition -= 1;
                break;
        }

        this.validate();
    }

    private turnLeft(): void {
        this.direction = this.getRoverSpinDirectionUseCase.execute({
            currentDirection: this.direction,
            spin: SpinDirectionEnum.Anticlockwise
        });
    }

    private turnRight(): void {
        this.direction = this.getRoverSpinDirectionUseCase.execute({
            currentDirection: this.direction,
            spin: SpinDirectionEnum.Clockwise
        });
    }

    private validate() {
        if (this.xPosition < this.plateau.minX || this.xPosition > this.plateau.maxX) {
            throw new Error('Invalid deploy X position!');
        }

        if (this.yPosition < this.plateau.minY || this.yPosition > this.plateau.maxY) {
            throw new Error('Invalid deploy Y position!');
        }
    }
}
