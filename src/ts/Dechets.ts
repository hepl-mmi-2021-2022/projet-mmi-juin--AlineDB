import {main} from "./Main";
import {random} from "./helpers";
import {settings} from "./settings";


export class Dechets {
    private htmlCanvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    protected speed: { y: number };
    position: { x: number, y: number };
    Alive: boolean;
    private choice: number;

    protected banane: HTMLImageElement;
    protected bouteille: HTMLImageElement;
    protected verre: HTMLImageElement;
    protected canette: HTMLImageElement;
    protected oeuf: HTMLImageElement;
    protected cotton: HTMLImageElement;
    protected box: HTMLImageElement;
    protected yogurt: HTMLImageElement;
    protected sheet: HTMLImageElement;
    protected apple: HTMLImageElement;
    private arrayTrash: any[];


    constructor(htmlCanvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.htmlCanvasElement = htmlCanvasElement;
        this.ctx = ctx;

        this.speed = {y: settings.dechet.speed.y};
        this.position = {
            x: random(settings.dechet.position.x, this.htmlCanvasElement.width),
            y: settings.dechet.position.y
        };
        this.Alive = true;
        this.choice = Math.trunc(Math.random() * 9);


        //banane
        this.banane = new Image();
        this.banane.onload = function () {
            main.update();
        };
        this.banane.src = './src/img/banana.png';

        //bouteille
        this.bouteille = new Image();
        this.bouteille.onload = function () {
            main.update();
        };
        this.bouteille.src = './src/img/bottle.png';

        //canette
        this.canette = new Image();
        this.canette.onload = function () {
            main.update();
        };
        this.canette.src = './src/img/can.png';

        //oeuf
        this.oeuf = new Image();
        this.oeuf.onload = function () {
            main.update();
        };
        this.oeuf.src = './src/img/egg-shell.png';

        //cotton
        this.cotton = new Image();
        this.cotton.onload = function () {
            main.update();
        };
        this.cotton.src = './src/img/cotton-swabs.png';

        //boite
        this.box = new Image();
        this.box.onload = function () {
            main.update();
        };
        this.box.src = './src/img/open-box.png';

        //yogurt
        this.yogurt = new Image();
        this.yogurt.onload = function () {
            main.update();
        };
        this.yogurt.src = './src/img/yogurt.png';

        //sheet
        this.sheet = new Image();
        this.sheet.onload = function () {
            main.update();
        };
        this.sheet.src = './src/img/yogurt.png';

        //apple
        this.apple = new Image();
        this.apple.onload = function () {
            main.update();
        };
        this.apple.src = './src/img/core.png';

        this.arrayTrash = [this.banane, this.apple, this.bouteille, this.canette, this.oeuf, this.cotton, this.box, this.yogurt, this.sheet];

    }

    update() {

        if (this.position.y < this.htmlCanvasElement.height - 100) {
            this.position.y++;

        } else {
            this.position.y = -400;
            this.choose();
        }
        if(this.position.x> 0 && this.position.x < this.htmlCanvasElement.width -100){
            this.addEventListeners();
        }

        this.draw();

    }

    choose(){
        this.choice = Math.trunc(random(1,9));
        this.position.x = Math.trunc(random(0, this.htmlCanvasElement.width - 100))
    }

    draw() {
    this.ctx.drawImage(this.arrayTrash[this.choice], this.position.x, this.position.y, 100, 100)

    }

    addEventListeners(){
        window.addEventListener('keydown', (e)=>{
            if(e.keyCode === 39){
                this.position.x +1;
            } else if(e.keyCode === 37){
                this.position.x -1;
            }
        })
    }

}
