import { MovementEnum } from "../enums/MovementEnum";
import Plateau from "../models/Plateau";
import Rover from "../models/Rover";
import RoverInstructionCollection from "../types/RoverInstructionCollection";

export default class SendInstructionsToRoversUseCase {
    public execute(instructions: RoverInstructionCollection): Array<Rover> {
        const deployedRovers: Array<Rover> = [];

        instructions.instructions.forEach(instruction => {
            const plateau = new Plateau(
                instructions.plateauSize.y,
                instructions.plateauSize.x
            );

            const rover = new Rover(
                instruction.deployLocation.yPosition,
                instruction.deployLocation.xPosition,
                instruction.deployLocation.direction,
                plateau
            );

            const movements: Array<MovementEnum> = <Array<MovementEnum>>instruction.instruction.split('');

            movements.forEach(movement => {
                rover.move(movement);
            });

            deployedRovers.push(rover);
        });

        return deployedRovers;
    }
}
