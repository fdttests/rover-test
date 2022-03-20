import { MovementEnum } from "../enums/MovementEnum";
import Rover from "../models/Rover";
import RoverInstructionCollection from "../types/RoverInstructionCollection";

export default class SendInstructionsToRoversUseCase {
    public execute(instructions: RoverInstructionCollection): Array<Rover> {
        const deployedRovers: Array<Rover> = [];

        instructions.instructions.forEach(instruction => {
            const rover = new Rover(
                instruction.deployLocation.xPosition,
                instruction.deployLocation.yPosition,
                instruction.deployLocation.direction,
                instructions.plateau
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
