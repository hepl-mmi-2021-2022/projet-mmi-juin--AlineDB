import {Dechets} from "./Dechets";


export class Animate {
    private dechets: Dechets;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, dechets: Dechets) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.dechets = dechets;
    }

    start(){

        requestAnimationFrame(() => {
            this.start();
            //this.dechets.update();
        })
    }

}