
const main = {
    htmlCanvasElement: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    poubelleVerte: HTMLImageElement,
    ImgSrc: string,

    init() {
        this.htmlCanvasElement = document.getElementById('my-canvas');
        this.ctx = this.htmlCanvasElement.getContext('2d');
        this.border = 50;
        this.poubelleVerte = new Image();
        this.poubelleVerte.src = './img/dustbin.png';
        this.draw();
    },

    draw(){
        this.ctx.drawImage(this.poubelleVerte, 0,0, 150,150);
    },

}

main.init();