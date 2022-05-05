import {Dechets} from "./Dechets";
import {settings} from "./settings";


export class Animate {
    private dechets: Dechets;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, dechets: Dechets) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.dechets = dechets;
        this.draw();
    }

    draw(){
        this.dechets = new Dechets(this.canvas, this.ctx);
    }
    update(){
        this.dechets.update();

    }

    start(){
        requestAnimationFrame(() => {

            this.update();


        })
    }

}