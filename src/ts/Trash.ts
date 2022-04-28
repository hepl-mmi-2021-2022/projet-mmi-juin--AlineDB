
import {main} from "./Main";


export class Trash {
    protected poubellePapier: HTMLImageElement
    protected poubelleGris : HTMLImageElement
    protected poubelleVerre: HTMLImageElement
    protected poubellePlastique: HTMLImageElement
    private htmlCanvasElement: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    constructor(htmlCanvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.htmlCanvasElement = htmlCanvasElement;
        this.ctx = ctx;

        //poubelle grise
        this.poubelleGris = new Image();
        this.poubelleGris.onload = function (){
            main.update();
        };
        this.poubelleGris.src = './src/img/poubelle_noir.png';

        //poubelle papier carton
        this.poubellePapier = new Image();
        this.poubellePapier.onload = function (){
            main.update();
        };
        this.poubellePapier.src = './src/img/poubelle_jaune.png';

        //poubelle à verre
        this.poubelleVerre = new Image();
        this.poubelleVerre.onload = function (){
            main.update();
        };
        this.poubelleVerre.src = './src/img/poubelle_verte.png';

        //poubelle plastique et boite métallique
        this.poubellePlastique = new Image();
        this.poubellePlastique.onload = function (){
            main.update();
        };
        this.poubellePlastique.src = './src/img/poubelle_bleu.png';
        this.update();
    }

    update() {
        this.draw();
    }

    draw(){

        //dessine les poubelles
        this.ctx.drawImage(this.poubelleGris, window.innerWidth  /6 , window.innerHeight-250 , 200,200);
        this.ctx.drawImage(this.poubellePapier, (window.innerWidth  /6) + this.poubellePapier.width*2 , window.innerHeight-250, 200,200);
        this.ctx.drawImage(this.poubellePlastique, (window.innerWidth /6) + this.poubellePapier.width*4 , window.innerHeight-250, 200, 200);
        this.ctx.drawImage(this.poubelleVerre, (window.innerWidth/6) + this.poubellePapier.width*6, window.innerHeight -250, 200,200);

        //soleil
        this.ctx.beginPath();
        this.ctx.fillStyle = 'yellow' ;
        this.ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}
