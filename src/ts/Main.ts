
import {Trash} from "./Trash";
import {Dechets} from "./Dechets";
import {Animate} from "./Animate";

export const main = {
    htmlCanvasElement: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    trash: Trash,
    animation : Animate,
    dechets: Dechets,

    init() {
        //dechets
        this.dechets = [];
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');

        //poubelles
        this.trash = new Trash(this.htmlCanvasElement, this.ctx);

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
        this.trash.draw();

        },

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}

main.init();