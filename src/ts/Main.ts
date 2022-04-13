import {Sky} from "./Sky";
import {settings} from "./settings";
//import {Background} from "./Background";

export const main = {
    htmlCanvasElement: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    sky: Sky,
    //background: Background,
    poubellePapier: HTMLImageElement,
    poubelleGris : HTMLImageElement,
    poubelleVerre: HTMLImageElement,
    poubellePlastique: HTMLImageElement,
    fond: HTMLImageElement,


    init() {
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');
        this.sky = new Sky(this.htmlCanvasElement, this.ctx);

        //fond
        this.fond = new Image();
        this.fond.onload = function (){
            main.update();
        };
        this.fond.src = './src/img/fond.png';

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
    },

    update() {
        this.htmlCanvasElement.width = window.innerWidth;
        this.htmlCanvasElement.height = window.innerHeight;
        this.sky.update();
        this.draw();
    },

    draw(){
        //dessine le fond
        this.ctx.drawImage(this.fond, 0, -500, window.innerWidth, window.innerHeight*1.8);


        //dessine les poubelles
        this.ctx.drawImage(this.poubelleGris, window.innerWidth  /6 , window.innerHeight - 200, 200,200);
        this.ctx.drawImage(this.poubellePapier, window.innerWidth  /3 , window.innerHeight - 200, 200,200);
        this.ctx.drawImage(this.poubellePlastique, window.innerWidth /2 , window.innerHeight - 200, 200, 200);
        this.ctx.drawImage(this.poubelleVerre, window.innerWidth - this.poubelleVerre.width   , window.innerHeight - 200, 200,200);

        //soleil
        this.ctx.beginPath();
        this.ctx.fillStyle = 'yellow' ;
        this.ctx.arc(settings.nuage.radius*2, settings.nuage.radius*2, settings.nuage.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        },


    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}

main.init();