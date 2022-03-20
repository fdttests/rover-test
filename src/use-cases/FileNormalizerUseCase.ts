export default class FileNormalizerUseCase {
    public execute(fileContent: string): string {
        const findDoubleSpacesRegex = /  +/g;
        const findAllOSLineBreaks = /(\r\n|\n|\r)/gm;
        const findBlankLinesRegex = /^\s*[\r\n]/gm;

        return fileContent
            .replace(findAllOSLineBreaks, '\n')
            .replace(findBlankLinesRegex, '')
            .replace(findDoubleSpacesRegex, ' ')
            .split('\n')
            .map(s => s.trim())
            .join('\n')
            .trim();
    }
}
