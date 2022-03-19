export default class Plateau {
    public minY: number = 0;
    public minX: number = 0;

    public constructor(
        public maxY: number = 0,
        public maxX: number = 0
    ) {
        this.validate();
    }

    private validate() {
        if (this.maxY <= this.minY) {
            throw new Error('Invalid plateau size!');
        }

        if (this.maxX <= this.minX) {
            throw new Error('Invalid plateau size!');
        }
    }
}
