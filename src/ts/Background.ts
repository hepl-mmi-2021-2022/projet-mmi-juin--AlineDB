import {Sky} from "./Sky";


export class Background {
    htmlCanvasElement: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    sky: Sky;
    background: Background;
    poubellePapier: HTMLImageElement;
    poubelleGris : HTMLImageElement;
    poubelleVerre: HTMLImageElement;
    poubellePlastique: HTMLImageElement;


    init() {
        // @ts-ignore
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');
        this.sky = new Sky(this.htmlCanvasElement, this.ctx);
        //poubelle grise
        this.poubelleGris = new Image();
        this.poubelleGris.onload = function (){
            new Background().update();
        };
        this.poubelleGris.src = './src/img/dustbin.png';

        //poubelle papier carton
        this.poubellePapier = new Image();
        this.poubellePapier.onload = function (){
            new Background().update();
        };
        this.poubellePapier.src = './src/img/recycle-bin.png';

        //poubelle à verre
        this.poubelleVerre = new Image();
        this.poubelleVerre.onload = function (){
            new Background().update();
        };
        this.poubelleVerre.src = './src/img/glass-bin.png';

        //poubelle plastique et boite métallique
        this.poubellePlastique = new Image();
        this.poubellePlastique.onload = function (){
             new Background().update();
        };
        this.poubellePlastique.src = './src/img/recycling.png';
    }

    update() {
        this.htmlCanvasElement.width = window.innerWidth;
        this.htmlCanvasElement.height = window.innerHeight;
        this.sky.update();
        this.draw();
    }

    draw(){
        this.ctx.drawImage(this.poubelleGris, window.innerWidth  /6 , window.innerHeight - 150, 150,150);
        this.ctx.drawImage(this.poubellePapier, window.innerWidth  /3 , window.innerHeight - 150, 150,150);
        this.ctx.drawImage(this.poubellePlastique, window.innerWidth /2 , window.innerHeight - 150, 150, 150);
        this.ctx.drawImage(this.poubelleVerre, window.innerWidth - this.poubelleVerre.width   , window.innerHeight - 150, 150,150);
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}
