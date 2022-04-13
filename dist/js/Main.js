/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.main = void 0;\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/ts/Sky.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nexports.main = {\n  htmlCanvasElement: HTMLCanvasElement,\n  ctx: CanvasRenderingContext2D,\n  sky: Sky_1.Sky,\n  poubellePapier: HTMLImageElement,\n  poubelleGris: HTMLImageElement,\n  poubelleVerre: HTMLImageElement,\n  poubellePlastique: HTMLImageElement,\n  fond: HTMLImageElement,\n  init: function init() {\n    this.htmlCanvasElement = document.getElementById('my-canvas');\n    this.ctx = this.htmlCanvasElement.getContext('2d');\n    this.sky = new Sky_1.Sky(this.htmlCanvasElement, this.ctx);\n    this.fond = new Image();\n\n    this.fond.onload = function () {\n      exports.main.update();\n    };\n\n    this.fond.src = './src/img/fond.png';\n    this.poubelleGris = new Image();\n\n    this.poubelleGris.onload = function () {\n      exports.main.update();\n    };\n\n    this.poubelleGris.src = './src/img/poubelle_noir.png';\n    this.poubellePapier = new Image();\n\n    this.poubellePapier.onload = function () {\n      exports.main.update();\n    };\n\n    this.poubellePapier.src = './src/img/poubelle_jaune.png';\n    this.poubelleVerre = new Image();\n\n    this.poubelleVerre.onload = function () {\n      exports.main.update();\n    };\n\n    this.poubelleVerre.src = './src/img/poubelle_verte.png';\n    this.poubellePlastique = new Image();\n\n    this.poubellePlastique.onload = function () {\n      exports.main.update();\n    };\n\n    this.poubellePlastique.src = './src/img/poubelle_bleu.png';\n    this.update();\n  },\n  update: function update() {\n    this.htmlCanvasElement.width = window.innerWidth;\n    this.htmlCanvasElement.height = window.innerHeight;\n    this.sky.update();\n    this.draw();\n  },\n  draw: function draw() {\n    this.ctx.drawImage(this.fond, 0, -500, window.innerWidth, window.innerHeight * 1.8);\n    this.ctx.drawImage(this.poubelleGris, window.innerWidth / 6, window.innerHeight - 200, 200, 200);\n    this.ctx.drawImage(this.poubellePapier, window.innerWidth / 3, window.innerHeight - 200, 200, 200);\n    this.ctx.drawImage(this.poubellePlastique, window.innerWidth / 2, window.innerHeight - 200, 200, 200);\n    this.ctx.drawImage(this.poubelleVerre, window.innerWidth - this.poubelleVerre.width, window.innerHeight - 200, 200, 200);\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    this.ctx.arc(settings_1.settings.nuage.radius * 2, settings_1.settings.nuage.radius * 2, settings_1.settings.nuage.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  }\n};\nexports.main.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUdhQSxZQUFBQSxHQUFPO0FBQ2hCQyxtQkFBaUIsRUFBRUMsaUJBREg7QUFFaEJDLEtBQUcsRUFBRUMsd0JBRlc7QUFHaEJDLEtBQUcsRUFBRUMsU0FIVztBQUtoQkMsZ0JBQWMsRUFBRUMsZ0JBTEE7QUFNaEJDLGNBQVksRUFBR0QsZ0JBTkM7QUFPaEJFLGVBQWEsRUFBRUYsZ0JBUEM7QUFRaEJHLG1CQUFpQixFQUFFSCxnQkFSSDtBQVNoQkksTUFBSSxFQUFFSixnQkFUVTtBQVloQkssTUFBSTtBQUNBLFNBQUtaLGlCQUFMLEdBQXlCYSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBekI7QUFDQSxTQUFLWixHQUFMLEdBQVcsS0FBS0YsaUJBQUwsQ0FBdUJlLFVBQXZCLENBQWtDLElBQWxDLENBQVg7QUFDQSxTQUFLWCxHQUFMLEdBQVcsSUFBSUMsU0FBSixDQUFRLEtBQUtMLGlCQUFiLEVBQWdDLEtBQUtFLEdBQXJDLENBQVg7QUFHQSxTQUFLUyxJQUFMLEdBQVksSUFBSUssS0FBSixFQUFaOztBQUNBLFNBQUtMLElBQUwsQ0FBVU0sTUFBVixHQUFtQjtBQUNmbEIsbUJBQUttQixNQUFMO0FBQ0gsS0FGRDs7QUFHQSxTQUFLUCxJQUFMLENBQVVRLEdBQVYsR0FBZ0Isb0JBQWhCO0FBR0EsU0FBS1gsWUFBTCxHQUFvQixJQUFJUSxLQUFKLEVBQXBCOztBQUNBLFNBQUtSLFlBQUwsQ0FBa0JTLE1BQWxCLEdBQTJCO0FBQ3ZCbEIsbUJBQUttQixNQUFMO0FBQ0gsS0FGRDs7QUFHQSxTQUFLVixZQUFMLENBQWtCVyxHQUFsQixHQUF3Qiw2QkFBeEI7QUFHQSxTQUFLYixjQUFMLEdBQXNCLElBQUlVLEtBQUosRUFBdEI7O0FBQ0EsU0FBS1YsY0FBTCxDQUFvQlcsTUFBcEIsR0FBNkI7QUFDekJsQixtQkFBS21CLE1BQUw7QUFDSCxLQUZEOztBQUdBLFNBQUtaLGNBQUwsQ0FBb0JhLEdBQXBCLEdBQTBCLDhCQUExQjtBQUdBLFNBQUtWLGFBQUwsR0FBcUIsSUFBSU8sS0FBSixFQUFyQjs7QUFDQSxTQUFLUCxhQUFMLENBQW1CUSxNQUFuQixHQUE0QjtBQUN4QmxCLG1CQUFLbUIsTUFBTDtBQUNILEtBRkQ7O0FBR0EsU0FBS1QsYUFBTCxDQUFtQlUsR0FBbkIsR0FBeUIsOEJBQXpCO0FBR0EsU0FBS1QsaUJBQUwsR0FBeUIsSUFBSU0sS0FBSixFQUF6Qjs7QUFDQSxTQUFLTixpQkFBTCxDQUF1Qk8sTUFBdkIsR0FBZ0M7QUFDNUJsQixtQkFBS21CLE1BQUw7QUFDSCxLQUZEOztBQUdBLFNBQUtSLGlCQUFMLENBQXVCUyxHQUF2QixHQUE2Qiw2QkFBN0I7QUFDQSxTQUFLRCxNQUFMO0FBQ0gsR0FwRGU7QUFzRGhCQSxRQUFNO0FBQ0YsU0FBS2xCLGlCQUFMLENBQXVCb0IsS0FBdkIsR0FBK0JDLE1BQU0sQ0FBQ0MsVUFBdEM7QUFDQSxTQUFLdEIsaUJBQUwsQ0FBdUJ1QixNQUF2QixHQUFnQ0YsTUFBTSxDQUFDRyxXQUF2QztBQUNBLFNBQUtwQixHQUFMLENBQVNjLE1BQVQ7QUFDQSxTQUFLTyxJQUFMO0FBQ0gsR0EzRGU7QUE2RGhCQSxNQUFJO0FBRUEsU0FBS3ZCLEdBQUwsQ0FBU3dCLFNBQVQsQ0FBbUIsS0FBS2YsSUFBeEIsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBQyxHQUFsQyxFQUF1Q1UsTUFBTSxDQUFDQyxVQUE5QyxFQUEwREQsTUFBTSxDQUFDRyxXQUFQLEdBQW1CLEdBQTdFO0FBSUEsU0FBS3RCLEdBQUwsQ0FBU3dCLFNBQVQsQ0FBbUIsS0FBS2xCLFlBQXhCLEVBQXNDYSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsQ0FBMUQsRUFBOERELE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixHQUFuRixFQUF3RixHQUF4RixFQUE0RixHQUE1RjtBQUNBLFNBQUt0QixHQUFMLENBQVN3QixTQUFULENBQW1CLEtBQUtwQixjQUF4QixFQUF3Q2UsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLENBQTVELEVBQWdFRCxNQUFNLENBQUNHLFdBQVAsR0FBcUIsR0FBckYsRUFBMEYsR0FBMUYsRUFBOEYsR0FBOUY7QUFDQSxTQUFLdEIsR0FBTCxDQUFTd0IsU0FBVCxDQUFtQixLQUFLaEIsaUJBQXhCLEVBQTJDVyxNQUFNLENBQUNDLFVBQVAsR0FBbUIsQ0FBOUQsRUFBa0VELE1BQU0sQ0FBQ0csV0FBUCxHQUFxQixHQUF2RixFQUE0RixHQUE1RixFQUFpRyxHQUFqRztBQUNBLFNBQUt0QixHQUFMLENBQVN3QixTQUFULENBQW1CLEtBQUtqQixhQUF4QixFQUF1Q1ksTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEtBQUtiLGFBQUwsQ0FBbUJXLEtBQTlFLEVBQXdGQyxNQUFNLENBQUNHLFdBQVAsR0FBcUIsR0FBN0csRUFBa0gsR0FBbEgsRUFBc0gsR0FBdEg7QUFHQSxTQUFLdEIsR0FBTCxDQUFTeUIsU0FBVDtBQUNBLFNBQUt6QixHQUFMLENBQVMwQixTQUFULEdBQXFCLFFBQXJCO0FBQ0EsU0FBSzFCLEdBQUwsQ0FBUzJCLEdBQVQsQ0FBYUMsb0JBQVNDLEtBQVQsQ0FBZUMsTUFBZixHQUFzQixDQUFuQyxFQUFzQ0Ysb0JBQVNDLEtBQVQsQ0FBZUMsTUFBZixHQUFzQixDQUE1RCxFQUErREYsb0JBQVNDLEtBQVQsQ0FBZUMsTUFBOUUsRUFBc0YsQ0FBdEYsRUFBeUYsSUFBSUMsSUFBSSxDQUFDQyxFQUFsRztBQUNBLFNBQUtoQyxHQUFMLENBQVNpQyxJQUFUO0FBQ0EsU0FBS2pDLEdBQUwsQ0FBU2tDLFNBQVQ7QUFDQyxHQTlFVztBQWdGaEJDLG1CQUFpQjtBQUFqQjs7QUFDSWhCLFVBQU0sQ0FBQ2lCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQzlCQyxXQUFJLENBQUNyQixNQUFMO0FBQ0gsS0FGRDtBQUdIO0FBcEZlLENBQVA7QUF1RmJuQixhQUFLYSxJQUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTa3l9IGZyb20gXCIuL1NreVwiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG4vL2ltcG9ydCB7QmFja2dyb3VuZH0gZnJvbSBcIi4vQmFja2dyb3VuZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1haW4gPSB7XHJcbiAgICBodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcclxuICAgIHNreTogU2t5LFxyXG4gICAgLy9iYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kLFxyXG4gICAgcG91YmVsbGVQYXBpZXI6IEhUTUxJbWFnZUVsZW1lbnQsXHJcbiAgICBwb3ViZWxsZUdyaXMgOiBIVE1MSW1hZ2VFbGVtZW50LFxyXG4gICAgcG91YmVsbGVWZXJyZTogSFRNTEltYWdlRWxlbWVudCxcclxuICAgIHBvdWJlbGxlUGxhc3RpcXVlOiBIVE1MSW1hZ2VFbGVtZW50LFxyXG4gICAgZm9uZDogSFRNTEltYWdlRWxlbWVudCxcclxuXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5odG1sQ2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuc2t5ID0gbmV3IFNreSh0aGlzLmh0bWxDYW52YXNFbGVtZW50LCB0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vZm9uZFxyXG4gICAgICAgIHRoaXMuZm9uZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuZm9uZC5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZm9uZC5zcmMgPSAnLi9zcmMvaW1nL2ZvbmQucG5nJztcclxuXHJcbiAgICAgICAgLy9wb3ViZWxsZSBncmlzZVxyXG4gICAgICAgIHRoaXMucG91YmVsbGVHcmlzID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZUdyaXMub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvdWJlbGxlR3Jpcy5zcmMgPSAnLi9zcmMvaW1nL3BvdWJlbGxlX25vaXIucG5nJztcclxuXHJcbiAgICAgICAgLy9wb3ViZWxsZSBwYXBpZXIgY2FydG9uXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBhcGllciA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQYXBpZXIub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGFwaWVyLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfamF1bmUucG5nJztcclxuXHJcbiAgICAgICAgLy9wb3ViZWxsZSDDoCB2ZXJyZVxyXG4gICAgICAgIHRoaXMucG91YmVsbGVWZXJyZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVWZXJyZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVWZXJyZS5zcmMgPSAnLi9zcmMvaW1nL3BvdWJlbGxlX3ZlcnRlLnBuZyc7XHJcblxyXG4gICAgICAgIC8vcG91YmVsbGUgcGxhc3RpcXVlIGV0IGJvaXRlIG3DqXRhbGxpcXVlXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBsYXN0aXF1ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQbGFzdGlxdWUub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGxhc3RpcXVlLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfYmxldS5wbmcnO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5za3kudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICAvL2Rlc3NpbmUgbGUgZm9uZFxyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmZvbmQsIDAsIC01MDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQqMS44KTtcclxuXHJcblxyXG4gICAgICAgIC8vZGVzc2luZSBsZXMgcG91YmVsbGVzXHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMucG91YmVsbGVHcmlzLCB3aW5kb3cuaW5uZXJXaWR0aCAgLzYgLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGFwaWVyLCB3aW5kb3cuaW5uZXJXaWR0aCAgLzMgLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGxhc3RpcXVlLCB3aW5kb3cuaW5uZXJXaWR0aCAvMiAsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIwMCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlVmVycmUsIHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy5wb3ViZWxsZVZlcnJlLndpZHRoICAgLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDAsIDIwMCwyMDApO1xyXG5cclxuICAgICAgICAvL3NvbGVpbFxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnIDtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoc2V0dGluZ3MubnVhZ2UucmFkaXVzKjIsIHNldHRpbmdzLm51YWdlLnJhZGl1cyoyLCBzZXR0aW5ncy5udWFnZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYWluLmluaXQoKTsiXSwibmFtZXMiOlsiZXhwb3J0cyIsImh0bWxDYW52YXNFbGVtZW50IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJjdHgiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJza3kiLCJTa3lfMSIsInBvdWJlbGxlUGFwaWVyIiwiSFRNTEltYWdlRWxlbWVudCIsInBvdWJlbGxlR3JpcyIsInBvdWJlbGxlVmVycmUiLCJwb3ViZWxsZVBsYXN0aXF1ZSIsImZvbmQiLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJJbWFnZSIsIm9ubG9hZCIsInVwZGF0ZSIsInNyYyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZHJhdyIsImRyYXdJbWFnZSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsImFyYyIsInNldHRpbmdzXzEiLCJudWFnZSIsInJhZGl1cyIsIk1hdGgiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Sky.ts":
/*!***********************!*\
  !*** ./src/ts/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Sky = function () {\n  function Sky(canvas, ctx) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.generateGradient();\n    this.update();\n  }\n\n  Sky.prototype.generateGradient = function () {\n    this.gradient = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height);\n    var length = settings_1.settings.sky.gradient.length;\n\n    for (var i = 0; i < length; i++) {\n      this.gradient.addColorStop(i * (1 / (length - 1)), settings_1.settings.sky.gradient[i]);\n    }\n\n    this.draw();\n  };\n\n  Sky.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n  };\n\n  Sky.prototype.update = function () {\n    this.generateGradient();\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSSxlQUFZQSxNQUFaLEVBQXVDQyxHQUF2QyxFQUFvRTtBQUNoRSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDRCxTQUFLQyxnQkFBTDtBQUNDLFNBQUtDLE1BQUw7QUFDSDs7QUFFREM7QUFDSSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtKLEdBQUwsQ0FBU0ssb0JBQVQsQ0FBOEIsS0FBS04sTUFBTCxDQUFZTyxLQUFaLEdBQWtCLENBQWhELEVBQWtELENBQWxELEVBQXFELEtBQUtQLE1BQUwsQ0FBWU8sS0FBWixHQUFrQixDQUF2RSxFQUEwRSxLQUFLUCxNQUFMLENBQVlRLE1BQXRGLENBQWhCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxvQkFBU0MsR0FBVCxDQUFhTixRQUFiLENBQXNCSSxNQUFyQzs7QUFDQSxTQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQXBCLEVBQTRCRyxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFdBQUtQLFFBQUwsQ0FBY1EsWUFBZCxDQUEyQkQsQ0FBQyxJQUFJLEtBQUtILE1BQU0sR0FBRyxDQUFkLENBQUosQ0FBNUIsRUFBbURDLG9CQUFTQyxHQUFULENBQWFOLFFBQWIsQ0FBc0JPLENBQXRCLENBQW5EO0FBQ0g7O0FBQ0QsU0FBS0UsSUFBTDtBQUNILEdBUEQ7O0FBU0FWO0FBQ0ksU0FBS0gsR0FBTCxDQUFTYyxTQUFUO0FBQ0EsU0FBS2QsR0FBTCxDQUFTZSxTQUFULEdBQXFCLEtBQUtYLFFBQTFCO0FBQ0EsU0FBS0osR0FBTCxDQUFTZ0IsUUFBVCxDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUFLakIsTUFBTCxDQUFZTyxLQUFwQyxFQUEyQyxLQUFLUCxNQUFMLENBQVlRLE1BQXZEO0FBQ0EsU0FBS1AsR0FBTCxDQUFTaUIsU0FBVDtBQUNILEdBTEQ7O0FBT0FkO0FBQ0ksU0FBS0YsZ0JBQUw7QUFDSCxHQUZEOztBQUdKO0FBQUMsQ0EvQkQ7O0FBQWFpQixXQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvU2t5LnRzPzNiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTa3kge1xyXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgZ3JhZGllbnQ6IENhbnZhc0dyYWRpZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICB0aGlzLmdlbmVyYXRlR3JhZGllbnQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlR3JhZGllbnQoKXtcclxuICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQodGhpcy5jYW52YXMud2lkdGgvMiwwLCB0aGlzLmNhbnZhcy53aWR0aC8yLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHNldHRpbmdzLnNreS5ncmFkaWVudC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcChpICogKDEgLyAobGVuZ3RoIC0gMSkpLCBzZXR0aW5ncy5za3kuZ3JhZGllbnRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjYW52YXMiLCJjdHgiLCJnZW5lcmF0ZUdyYWRpZW50IiwidXBkYXRlIiwiU2t5IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsIndpZHRoIiwiaGVpZ2h0IiwibGVuZ3RoIiwic2V0dGluZ3NfMSIsInNreSIsImkiLCJhZGRDb2xvclN0b3AiLCJkcmF3IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Sky.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: ['hsl(200, 95%, 33%)', 'hsl(200, 95%, 80%)']\n  },\n  nuage: {\n    color: 'white',\n    radius: 50\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLG9CQUFELEVBQXVCLG9CQUF2QjtBQURULEdBRGU7QUFLcEJDLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUUsT0FESjtBQUVIQyxVQUFNLEVBQUU7QUFGTDtBQUxhLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL3NldHRpbmdzLnRzPzc0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIc2x9IGZyb20gXCIuL0hzbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgc2t5OiB7XHJcbiAgICAgICAgZ3JhZGllbnQ6IFsnaHNsKDIwMCwgOTUlLCAzMyUpJywgJ2hzbCgyMDAsIDk1JSwgODAlKSddXHJcbiAgICB9LFxyXG5cclxuICAgIG51YWdlOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgcmFkaXVzOiA1MCxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJudWFnZSIsImNvbG9yIiwicmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;