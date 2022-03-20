import Plateau from "../../src/models/Plateau";

describe('Plateau Test', () => {
    it('should create a new plateau with given size', () => {
        const plateau = new Plateau(15, 15);

        expect(plateau.minX).toBe(0);
        expect(plateau.maxX).toBe(15);
        expect(plateau.minY).toBe(0);
        expect(plateau.maxY).toBe(15);
    });

    it('should throw a error when given invalid Y size', () => {
        const test = () => {
            new Plateau(0, 15)
        };

        expect(test).toThrowError('Invalid plateau Y size!');
    });

    
    it('should throw a error when given invalid X size', () => {
        const test = () => {
            new Plateau(15, 0)
        };

        expect(test).toThrowError('Invalid plateau X size!');
    });
});
