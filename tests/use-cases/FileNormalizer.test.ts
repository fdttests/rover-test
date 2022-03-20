import FileNormalizerUseCase from "../../src/use-cases/FileNormalizerUseCase";
import * as fs from 'fs';

describe('File Normalizer Test', () => {
    it('should normalize file removing empty lines and double spaces', () => {
        const useCase = new FileNormalizerUseCase();
        const fileOne = fs.readFileSync('./tests/mocks/normalized-instructions.txt', 'utf8');
        const fileTwo = fs.readFileSync('./tests/mocks/unnormalized-instructions.txt', 'utf8');

        const normalizedFileOne = useCase.execute(fileOne);
        const normalizedFileTwo = useCase.execute(fileTwo);

        expect(normalizedFileOne).toBe(normalizedFileTwo);
        expect(normalizedFileOne).not.toBe(fileOne);
        expect(normalizedFileOne.split('\n').length).toBe(5);
    });
});
