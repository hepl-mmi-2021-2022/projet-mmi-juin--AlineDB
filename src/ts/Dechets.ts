

export class Dechets {
    private htmlCanvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    protected banane: HTMLImageElement;
    protected bouteille: HTMLImageElement;
    protected verre: HTMLImageElement;
    protected canette: HTMLImageElement;
    protected oeuf: HTMLImageElement;
    protected cotton: HTMLImageElement;
    protected box: HTMLImageElement;
    protected yogurt: HTMLImageElement;

    constructor(htmlCanvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.htmlCanvasElement = htmlCanvasElement;
        this.ctx = ctx;

    }
}