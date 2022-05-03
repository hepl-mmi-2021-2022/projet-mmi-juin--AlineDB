import {main} from "./Main";
import {random} from "./helpers";
import {settings} from "./settings";


export class Dechets {
    private htmlCanvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    protected speed:{ x: number};
    protected position: {x:number, y:number};
    Alive: boolean;

    protected banane: HTMLImageElement;
    protected bouteille: HTMLImageElement;
    protected verre: HTMLImageElement;
    protected canette: HTMLImageElement;
    protected oeuf: HTMLImageElement;
    protected cotton: HTMLImageElement;
    protected box: HTMLImageElement;
    protected yogurt: HTMLImageElement;
    protected sheet: HTMLImageElement;
    protected apple:HTMLImageElement;

    constructor(htmlCanvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.htmlCanvasElement = htmlCanvasElement;
        this.ctx = ctx;

        this.speed = {x: settings.dechet.speed.x};
        this.position = {x: Math.trunc(random(settings.dechet.position.x, this.htmlCanvasElement.width)), y: 0};
        this.Alive = true;

        //banane
        this.banane = new Image();
        this.banane.onload = function (){
            main.update();
        };
        this.banane.src = './src/img/banana.png';

        //bouteille
        this.bouteille = new Image();
        this.bouteille.onload = function (){
            main.update();
        };
        this.bouteille.src = './src/img/bottle.png';

        //canette
        this.canette = new Image();
        this.canette.onload = function (){
            main.update();
        };
        this.bouteille.src = './src/img/can.png';

        //oeuf
        this.oeuf = new Image();
        this.oeuf.onload = function (){
            main.update();
        };
        this.oeuf.src = './src/img/egg-shell.png';

        //cotton
        this.cotton = new Image();
        this.cotton.onload = function (){
            main.update();
        };
        this.cotton.src = './src/img/cotton-swabs.png';

        //boite
        this.box = new Image();
        this.box.onload = function (){
            main.update();
        };
        this.box.src = './src/img/open-box.png';

        //yogurt
        this.yogurt = new Image();
        this.yogurt.onload = function (){
            main.update();
        };
        this.yogurt.src = './src/img/yogurt.png';

        //sheet
        this.sheet = new Image();
        this.sheet.onload = function (){
            main.update();
        };
        this.sheet.src = './src/img/yogurt.png';

        //apple
        this.apple = new Image();
        this.apple.onload = function (){
            main.update();
        };
        this.apple.src = './src/img/core.png';
    }

    update(){
       if (this.position.x < this.htmlCanvasElement.height - 100){
            this.position.x += this.speed.x;
        }
        this.draw();
    }

    draw(){
        if(Math.random()<0.1){
            this.ctx.drawImage(this.apple, this.position.x, this.position.y , 100,100);
        } else if(Math.random()<0.2){
            this.ctx.drawImage(this.box, this.position.x, this.position.y, 100,100);
        }else if(Math.random()<0.3){
            this.ctx.drawImage(this.yogurt, this.position.x, this.position.y, 100, 100);
        }else if(Math.random()<0.4){
            this.ctx.drawImage(this.canette, this.position.x, this.position.y, 100,100);
        }else if(Math.random()<0.5){
            this.ctx.drawImage(this.sheet, this.position.x, this.position.y, 100,100);
        }else if(Math.random()<0.6){
            this.ctx.drawImage(this.cotton, this.position.x, this.position.y, 100,100);
        }else if(Math.random()<0.7){
            this.ctx.drawImage(this.oeuf, this.position.x, this.position.y, 100,100);
        }

    }
}