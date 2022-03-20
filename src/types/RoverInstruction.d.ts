import RoverDeployLocation from "./RoverDeployLocation";

export default interface RoverInstruction {
    deployLocation: RoverDeployLocation;
    instruction: string;
}
