#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-unused-expressions */
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .commandDir('commands')
    .strict()
    .alias({ h: 'help' })
    .argv;
