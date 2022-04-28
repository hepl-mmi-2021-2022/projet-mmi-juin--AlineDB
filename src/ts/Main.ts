
import {Trash} from "./Trash";
import {Dechets} from "./Dechets";

export const main = {
    htmlCanvasElement: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    trash: Trash,
    dechets: Dechets,

    init() {
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');

        //poubelles
        this.trash = new Trash(this.htmlCanvasElement, this.ctx);
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