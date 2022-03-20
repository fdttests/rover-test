import PlateauSize from "./PlateauSize";
import RoverInstruction  from "./RoverInstruction";

export default interface RoverInstructionCollection {
    plateauSize: PlateauSize;
    instructions: Array<RoverInstruction>;
}
