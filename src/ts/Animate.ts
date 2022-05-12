import {Dechets} from "./Dechets";
import {settings} from "./settings";
import {Trashes} from "./Trashes";


export class Animate {
    private dechets: Dechets;
    private trash: Trashes;
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
        this.trash = new Trashes(this.canvas, this.ctx);

    }
    update() {
        this.ctx.clearRect(0,0,this.canvas.width ,this.canvas.height);
        this.trash.update();
        this.dechets.update();
    }

    start(){
        this.update();

        requestAnimationFrame(() => {
            this.start();
            //



        })
    }

}