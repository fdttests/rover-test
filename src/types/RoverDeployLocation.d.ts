import { DirectionEnum } from "../enums/DirectionEnum";

export default interface RoverDeployLocation {
    public xPosition: number;
    public yPosition: number;
    public direction: DirectionEnum;
}