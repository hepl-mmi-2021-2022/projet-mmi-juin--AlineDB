
import {Trashes} from "./Trashes";
import {Dechets} from "./Dechets";
import {Animate} from "./Animate";

export const main = {
    htmlCanvasElement: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    animation : Animate,
    dechets: Dechets,
    trash: Trashes,

    init() {
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');


        this.animation = new Animate(this.ctx, this.htmlCanvasElement, this.dechets);
        this.addEventListeners();
       this.animation.start();
    },

    update() {
        this.htmlCanvasElement.width = window.innerWidth;
        this.htmlCanvasElement.height = window.innerHeight;
        this.draw();
    },

    draw(){
        this.dechets = new Dechets(this.canvas, this.ctx);
        this.trash.draw();
        },

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}

main.init();