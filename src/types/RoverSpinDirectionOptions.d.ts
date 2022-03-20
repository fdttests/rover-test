import { DirectionEnum } from "../enums/DirectionEnum";
import { MovementEnum } from "../enums/MovementEnum";
import { SpinDirectionEnum } from "../enums/SpinDirectionEnum";

export default interface RoverSpinDirectionOptions {
    currentDirection: DirectionEnum, 
    spin: SpinDirectionEnum
}