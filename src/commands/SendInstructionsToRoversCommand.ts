import * as fs from 'fs';
import type { Arguments, CommandBuilder } from 'yargs';
import Rover from '../models/Rover';
import ParseFileIntoRoverInstructionsUseCase from '../use-cases/ParseFileIntoRoverInstructionsUseCase';
import SendInstructionsToRoversUseCase from '../use-cases/SendInstructionsToRoversUseCase';

interface Options {
  filePath: string;
}

export const command: string = 'move-rover <filePath>';
export const desc: string = 'Move the squad of rovers accordingly a received input <filePath>';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .positional('filePath', { type: 'string', demandOption: true });

export const handler = (argv: Arguments<Options>): void => {
  const { filePath } = argv;
  const parseFileUseCase = new ParseFileIntoRoverInstructionsUseCase();
  const sendInstructionsToRoversUseCase = new SendInstructionsToRoversUseCase();

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const instructions = parseFileUseCase.execute(fileContent);
  const output = sendInstructionsToRoversUseCase.execute(instructions);

  console.log('The following instructions were received from file: ');

  output.forEach((rover: Rover) => {
    console.log(JSON.stringify(rover));
  });

  console.log('Finishing program');
  process.exit(0);
};
