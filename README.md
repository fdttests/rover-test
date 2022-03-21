
<h1 align="center">Test Rover</h1>

<div align="center">
  <img height='100' src='https://user-images.githubusercontent.com/101193313/159169927-330a8b98-d854-489c-aaf5-80058e7fc5db.png' />
</div>

![Workflow Actions Node CI](https://github.com/fdttests/test-rover/actions/workflows/ci.yml/badge.svg)

App to send movement instructions for a given squad of NASA robotic rovers. Adittional information about the test can be seen [here](https://github.com/fdttests/test-rover/blob/main/challenge.md).

## Building the app

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the app

After building the app, you can run `npm run app:cli -- move-rovers [filePath]` to send instructions to the rovers. The file must have valid instructions to rovers deploy. Some examples are included in project on the folder `sample-data`.

## Running the sample

The test input/output required on the test description can be seen running `npm run sample`.

## Running tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Notes

* The app was developed using a minimal npm/ts project scructure with a single dependency of ``yargs`` to parse the arguments received by the CLI. The rest of dependencies refers to types for typescript, eslint for code standardization, typescript for build and jest for tests;
* For the sake of simplicity, no additional task runners were included, such as gulp, grunt or webpack. Only the native npm scripts were used;
* The graphical output of the app is not very user friendly (is hard to know what is happening, only the current position of the rovers is returned), but I decided to keep that way because it may be a requirement of the project that only raw text is returned on the output;
* A simple Github Action was added to guarantee that the install/test/eslint process is working as expected.
