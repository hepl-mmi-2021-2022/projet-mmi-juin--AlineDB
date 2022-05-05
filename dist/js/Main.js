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

/***/ "./src/ts/Animate.ts":
/*!***************************!*\
  !*** ./src/ts/Animate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animate = void 0;\n\nvar Dechets_1 = __webpack_require__(/*! ./Dechets */ \"./src/ts/Dechets.ts\");\n\nvar Animate = function () {\n  function Animate(ctx, canvas, dechets) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.dechets = dechets;\n    this.draw();\n  }\n\n  Animate.prototype.draw = function () {\n    this.dechets = new Dechets_1.Dechets(this.canvas, this.ctx);\n  };\n\n  Animate.prototype.update = function () {\n    this.dechets.update();\n  };\n\n  Animate.prototype.start = function () {\n    var _this = this;\n\n    requestAnimationFrame(function () {\n      _this.update();\n    });\n  };\n\n  return Animate;\n}();\n\nexports.Animate = Animate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUlBO0FBS0ksbUJBQVlBLEdBQVosRUFBMkNDLE1BQTNDLEVBQXNFQyxPQUF0RSxFQUFzRjtBQUNsRixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS0YsT0FBTCxHQUFlLElBQUlHLGlCQUFKLENBQVksS0FBS0osTUFBakIsRUFBeUIsS0FBS0QsR0FBOUIsQ0FBZjtBQUNILEdBRkQ7O0FBR0FJO0FBQ0ksU0FBS0YsT0FBTCxDQUFhSSxNQUFiO0FBRUgsR0FIRDs7QUFLQUY7QUFBQTs7QUFDSUcseUJBQXFCLENBQUM7QUFFbEJDLFdBQUksQ0FBQ0YsTUFBTDtBQUdILEtBTG9CLENBQXJCO0FBTUgsR0FQRDs7QUFTSjtBQUFDLENBN0JEOztBQUFhRyxlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0ZS50cz9hNzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVjaGV0c30gZnJvbSBcIi4vRGVjaGV0c1wiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlIHtcclxuICAgIHByaXZhdGUgZGVjaGV0czogRGVjaGV0cztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRlY2hldHM6IERlY2hldHMpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRlY2hldHMgPSBkZWNoZXRzO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmRlY2hldHMgPSBuZXcgRGVjaGV0cyh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5kZWNoZXRzLnVwZGF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwiZGVjaGV0cyIsImRyYXciLCJBbmltYXRlIiwiRGVjaGV0c18xIiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Animate.ts\n");

/***/ }),

/***/ "./src/ts/Dechets.ts":
/*!***************************!*\
  !*** ./src/ts/Dechets.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Dechets = void 0;\n\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/ts/Main.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/ts/helpers.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Dechets = function () {\n  function Dechets(htmlCanvasElement, ctx) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = ctx;\n    this.speed = {\n      y: settings_1.settings.dechet.speed.y\n    };\n    this.position = {\n      x: Math.trunc((0, helpers_1.random)(settings_1.settings.dechet.position.x, this.htmlCanvasElement.width)),\n      y: settings_1.settings.dechet.position.y\n    };\n    this.Alive = true;\n    this.banane = new Image();\n\n    this.banane.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.banane.src = './src/img/banana.png';\n    this.bouteille = new Image();\n\n    this.bouteille.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/bottle.png';\n    this.canette = new Image();\n\n    this.canette.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/can.png';\n    this.oeuf = new Image();\n\n    this.oeuf.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.oeuf.src = './src/img/egg-shell.png';\n    this.cotton = new Image();\n\n    this.cotton.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.cotton.src = './src/img/cotton-swabs.png';\n    this.box = new Image();\n\n    this.box.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.box.src = './src/img/open-box.png';\n    this.yogurt = new Image();\n\n    this.yogurt.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.yogurt.src = './src/img/yogurt.png';\n    this.sheet = new Image();\n\n    this.sheet.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.sheet.src = './src/img/yogurt.png';\n    this.apple = new Image();\n\n    this.apple.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.apple.src = './src/img/core.png';\n  }\n\n  Dechets.prototype.update = function () {\n    this.draw();\n    console.log(this.position);\n    console.log(this.htmlCanvasElement.height);\n  };\n\n  Dechets.prototype.draw = function () {\n    switch (Math.trunc(Math.random() * 10)) {\n      case 0:\n        this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 1:\n        this.ctx.drawImage(this.box, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 2:\n        this.ctx.drawImage(this.yogurt, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 3:\n        this.ctx.drawImage(this.canette, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 4:\n        this.ctx.drawImage(this.sheet, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 5:\n        this.ctx.drawImage(this.cotton, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 6:\n        this.ctx.drawImage(this.oeuf, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 7:\n        this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 8:\n        this.ctx.drawImage(this.box, this.position.x, this.position.y, 100, 100);\n        break;\n    }\n  };\n\n  return Dechets;\n}();\n\nexports.Dechets = Dechets;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBakUsRUFBc0UsR0FBdEU7QUFDUjs7QUFFQSxXQUFLLENBQUw7QUFBUSxhQUFLRixHQUFMLENBQVMrQixTQUFULENBQW1CLEtBQUtYLE1BQXhCLEVBQWdDLEtBQUtmLFFBQUwsQ0FBY0MsQ0FBOUMsRUFBaUQsS0FBS0QsUUFBTCxDQUFjSCxDQUEvRCxFQUFrRSxHQUFsRSxFQUF1RSxHQUF2RTtBQUNSOztBQUVBLFdBQUssQ0FBTDtBQUFRLGFBQUtGLEdBQUwsQ0FBUytCLFNBQVQsQ0FBbUIsS0FBS1osSUFBeEIsRUFBOEIsS0FBS2QsUUFBTCxDQUFjQyxDQUE1QyxFQUErQyxLQUFLRCxRQUFMLENBQWNILENBQTdELEVBQWdFLEdBQWhFLEVBQXFFLEdBQXJFO0FBQ1I7O0FBRUEsV0FBSyxDQUFMO0FBQVEsYUFBS0YsR0FBTCxDQUFTK0IsU0FBVCxDQUFtQixLQUFLUCxLQUF4QixFQUErQixLQUFLbkIsUUFBTCxDQUFjQyxDQUE3QyxFQUFnRCxLQUFLRCxRQUFMLENBQWNILENBQTlELEVBQWlFLEdBQWpFLEVBQXNFLEdBQXRFO0FBQ1I7O0FBRUEsV0FBSyxDQUFMO0FBQVMsYUFBS0YsR0FBTCxDQUFTK0IsU0FBVCxDQUFtQixLQUFLVixHQUF4QixFQUE2QixLQUFLaEIsUUFBTCxDQUFjQyxDQUEzQyxFQUE4QyxLQUFLRCxRQUFMLENBQWNILENBQTVELEVBQStELEdBQS9ELEVBQW9FLEdBQXBFO0FBQ1Q7QUExQko7QUE0QkgsR0E3QkQ7O0FBOEJKO0FBQUMsQ0FwSkQ7O0FBQWE4QixlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRGVjaGV0cy50cz82NzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFpbn0gZnJvbSBcIi4vTWFpblwiO1xyXG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWNoZXRzIHtcclxuICAgIHByaXZhdGUgaHRtbENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6eyB5OiBudW1iZXJ9O1xyXG4gICAgcG9zaXRpb246IHt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG4gICAgQWxpdmU6IGJvb2xlYW47XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBiYW5hbmU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgYm91dGVpbGxlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHZlcnJlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGNhbmV0dGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgb2V1ZjogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBjb3R0b246IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgYm94OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHlvZ3VydDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBzaGVldDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBhcHBsZTpIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudCA9IGh0bWxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0ge3k6IHNldHRpbmdzLmRlY2hldC5zcGVlZC55fTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IE1hdGgudHJ1bmMocmFuZG9tKHNldHRpbmdzLmRlY2hldC5wb3NpdGlvbi54LCB0aGlzLmh0bWxDYW52YXNFbGVtZW50LndpZHRoKSksIHk6IHNldHRpbmdzLmRlY2hldC5wb3NpdGlvbi55fTtcclxuICAgICAgICB0aGlzLkFsaXZlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vYmFuYW5lXHJcbiAgICAgICAgdGhpcy5iYW5hbmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJhbmFuZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYmFuYW5lLnNyYyA9ICcuL3NyYy9pbWcvYmFuYW5hLnBuZyc7XHJcblxyXG4gICAgICAgIC8vYm91dGVpbGxlXHJcbiAgICAgICAgdGhpcy5ib3V0ZWlsbGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJvdXRlaWxsZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm91dGVpbGxlLnNyYyA9ICcuL3NyYy9pbWcvYm90dGxlLnBuZyc7XHJcblxyXG4gICAgICAgIC8vY2FuZXR0ZVxyXG4gICAgICAgIHRoaXMuY2FuZXR0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuY2FuZXR0ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm91dGVpbGxlLnNyYyA9ICcuL3NyYy9pbWcvY2FuLnBuZyc7XHJcblxyXG4gICAgICAgIC8vb2V1ZlxyXG4gICAgICAgIHRoaXMub2V1ZiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMub2V1Zi5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub2V1Zi5zcmMgPSAnLi9zcmMvaW1nL2VnZy1zaGVsbC5wbmcnO1xyXG5cclxuICAgICAgICAvL2NvdHRvblxyXG4gICAgICAgIHRoaXMuY290dG9uID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jb3R0b24ub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvdHRvbi5zcmMgPSAnLi9zcmMvaW1nL2NvdHRvbi1zd2Ficy5wbmcnO1xyXG5cclxuICAgICAgICAvL2JvaXRlXHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJveC5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm94LnNyYyA9ICcuL3NyYy9pbWcvb3Blbi1ib3gucG5nJztcclxuXHJcbiAgICAgICAgLy95b2d1cnRcclxuICAgICAgICB0aGlzLnlvZ3VydCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMueW9ndXJ0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy55b2d1cnQuc3JjID0gJy4vc3JjL2ltZy95b2d1cnQucG5nJztcclxuXHJcbiAgICAgICAgLy9zaGVldFxyXG4gICAgICAgIHRoaXMuc2hlZXQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnNoZWV0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaGVldC5zcmMgPSAnLi9zcmMvaW1nL3lvZ3VydC5wbmcnO1xyXG5cclxuICAgICAgICAvL2FwcGxlXHJcbiAgICAgICAgdGhpcy5hcHBsZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYXBwbGUub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFwcGxlLnNyYyA9ICcuL3NyYy9pbWcvY29yZS5wbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIC8qaWYgKHRoaXMucG9zaXRpb24ueSA8IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0LTEwMCl7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSArKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucG9zaXRpb24ueSA+IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMTAwKXtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMDtcclxuXHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8qc3dpdGNoICh0aGlzLnBvc2l0aW9uLnkgPCB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmhlaWdodC0xMDApe1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMucG9zaXRpb24ueSA8IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0LTEwMDogdGhpcy5wb3NpdGlvbi55ICsrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMucG9zaXRpb24ueSA9IDA7XHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgLypcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gaS8xMDtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvbilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmh0bWxDYW52YXNFbGVtZW50LmhlaWdodClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHN3aXRjaCAoTWF0aC50cnVuYyhNYXRoLnJhbmRvbSgpKjEwKSkge1xyXG4gICAgICAgICAgICBjYXNlIDAgOiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hcHBsZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDE6ICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ib3gsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy55b2d1cnQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAzOiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jYW5ldHRlLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgNDogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc2hlZXQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA1OiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb3R0b24sIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA2OiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5vZXVmLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgNzogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXBwbGUsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA4IDogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYm94LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJodG1sQ2FudmFzRWxlbWVudCIsImN0eCIsInNwZWVkIiwieSIsInNldHRpbmdzXzEiLCJkZWNoZXQiLCJwb3NpdGlvbiIsIngiLCJNYXRoIiwidHJ1bmMiLCJ3aWR0aCIsIkFsaXZlIiwiYmFuYW5lIiwiSW1hZ2UiLCJvbmxvYWQiLCJNYWluXzEiLCJ1cGRhdGUiLCJzcmMiLCJib3V0ZWlsbGUiLCJjYW5ldHRlIiwib2V1ZiIsImNvdHRvbiIsImJveCIsInlvZ3VydCIsInNoZWV0IiwiYXBwbGUiLCJEZWNoZXRzIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJyYW5kb20iLCJkcmF3SW1hZ2UiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Dechets.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.main = void 0;\n\nvar Trashes_1 = __webpack_require__(/*! ./Trashes */ \"./src/ts/Trashes.ts\");\n\nvar Dechets_1 = __webpack_require__(/*! ./Dechets */ \"./src/ts/Dechets.ts\");\n\nvar Animate_1 = __webpack_require__(/*! ./Animate */ \"./src/ts/Animate.ts\");\n\nexports.main = {\n  htmlCanvasElement: HTMLCanvasElement,\n  ctx: CanvasRenderingContext2D,\n  trash: Trashes_1.Trashes,\n  animation: Animate_1.Animate,\n  dechets: Dechets_1.Dechets,\n  init: function init() {\n    this.dechets = [];\n    this.htmlCanvasElement = document.getElementById('my-canvas');\n    this.ctx = this.htmlCanvasElement.getContext('2d');\n    this.trash = new Trashes_1.Trashes(this.htmlCanvasElement, this.ctx);\n    this.animation = new Animate_1.Animate(this.ctx, this.htmlCanvasElement, this.dechets);\n    this.addEventListeners();\n    this.animation.start();\n  },\n  update: function update() {\n    this.htmlCanvasElement.width = window.innerWidth;\n    this.htmlCanvasElement.height = window.innerHeight;\n    this.draw();\n  },\n  draw: function draw() {\n    this.trash.draw();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  }\n};\nexports.main.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUNBOztBQUVhQSxZQUFBQSxHQUFPO0FBQ2hCQyxtQkFBaUIsRUFBRUMsaUJBREg7QUFFaEJDLEtBQUcsRUFBRUMsd0JBRlc7QUFHaEJDLE9BQUssRUFBRUMsaUJBSFM7QUFJaEJDLFdBQVMsRUFBR0MsaUJBSkk7QUFLaEJDLFNBQU8sRUFBRUMsaUJBTE87QUFPaEJDLE1BQUk7QUFFQSxTQUFLRixPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtSLGlCQUFMLEdBQXlCVyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBekI7QUFDQSxTQUFLVixHQUFMLEdBQVcsS0FBS0YsaUJBQUwsQ0FBdUJhLFVBQXZCLENBQWtDLElBQWxDLENBQVg7QUFHQSxTQUFLVCxLQUFMLEdBQWEsSUFBSUMsaUJBQUosQ0FBWSxLQUFLTCxpQkFBakIsRUFBb0MsS0FBS0UsR0FBekMsQ0FBYjtBQUVBLFNBQUtJLFNBQUwsR0FBaUIsSUFBSUMsaUJBQUosQ0FBWSxLQUFLTCxHQUFqQixFQUFzQixLQUFLRixpQkFBM0IsRUFBOEMsS0FBS1EsT0FBbkQsQ0FBakI7QUFDQSxTQUFLTSxpQkFBTDtBQUNELFNBQUtSLFNBQUwsQ0FBZVMsS0FBZjtBQUNGLEdBbkJlO0FBcUJoQkMsUUFBTTtBQUNGLFNBQUtoQixpQkFBTCxDQUF1QmlCLEtBQXZCLEdBQStCQyxNQUFNLENBQUNDLFVBQXRDO0FBQ0EsU0FBS25CLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0NGLE1BQU0sQ0FBQ0csV0FBdkM7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0F6QmU7QUEyQmhCQSxNQUFJO0FBQ0EsU0FBS2xCLEtBQUwsQ0FBV2tCLElBQVg7QUFDQyxHQTdCVztBQStCaEJSLG1CQUFpQjtBQUFqQjs7QUFDSUksVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUM5QkMsV0FBSSxDQUFDUixNQUFMO0FBQ0gsS0FGRDtBQUdIO0FBbkNlLENBQVA7QUFzQ2JqQixhQUFLVyxJQUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7VHJhc2hlc30gZnJvbSBcIi4vVHJhc2hlc1wiO1xyXG5pbXBvcnQge0RlY2hldHN9IGZyb20gXCIuL0RlY2hldHNcIjtcclxuaW1wb3J0IHtBbmltYXRlfSBmcm9tIFwiLi9BbmltYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbiA9IHtcclxuICAgIGh0bWxDYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgdHJhc2g6IFRyYXNoZXMsXHJcbiAgICBhbmltYXRpb24gOiBBbmltYXRlLFxyXG4gICAgZGVjaGV0czogRGVjaGV0cyxcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vZGVjaGV0c1xyXG4gICAgICAgIHRoaXMuZGVjaGV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8vcG91YmVsbGVzXHJcbiAgICAgICAgdGhpcy50cmFzaCA9IG5ldyBUcmFzaGVzKHRoaXMuaHRtbENhbnZhc0VsZW1lbnQsIHRoaXMuY3R4KTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgQW5pbWF0ZSh0aGlzLmN0eCwgdGhpcy5odG1sQ2FudmFzRWxlbWVudCwgdGhpcy5kZWNoZXRzKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICB0aGlzLmFuaW1hdGlvbi5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgdGhpcy50cmFzaC5kcmF3KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tYWluLmluaXQoKTsiXSwibmFtZXMiOlsiZXhwb3J0cyIsImh0bWxDYW52YXNFbGVtZW50IiwiSFRNTENhbnZhc0VsZW1lbnQiLCJjdHgiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJ0cmFzaCIsIlRyYXNoZXNfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGVfMSIsImRlY2hldHMiLCJEZWNoZXRzXzEiLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJhZGRFdmVudExpc3RlbmVycyIsInN0YXJ0IiwidXBkYXRlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkcmF3IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Trashes.ts":
/*!***************************!*\
  !*** ./src/ts/Trashes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Trashes = void 0;\n\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/ts/Main.ts\");\n\nvar Trashes = function () {\n  function Trashes(htmlCanvasElement, ctx) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = ctx;\n    this.poubelleGris = new Image();\n\n    this.poubelleGris.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubelleGris.src = './src/img/poubelle_noir.png';\n    this.poubellePapier = new Image();\n\n    this.poubellePapier.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubellePapier.src = './src/img/poubelle_jaune.png';\n    this.poubelleVerre = new Image();\n\n    this.poubelleVerre.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubelleVerre.src = './src/img/poubelle_verte.png';\n    this.poubellePlastique = new Image();\n\n    this.poubellePlastique.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubellePlastique.src = './src/img/poubelle_bleu.png';\n    this.update();\n  }\n\n  Trashes.prototype.update = function () {\n    this.draw();\n  };\n\n  Trashes.prototype.draw = function () {\n    this.ctx.drawImage(this.poubelleGris, window.innerWidth / 6, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubellePapier, window.innerWidth / 6 + this.poubellePapier.width * 2, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubellePlastique, window.innerWidth / 6 + this.poubellePapier.width * 4, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubelleVerre, window.innerWidth / 6 + this.poubellePapier.width * 6, window.innerHeight - 250, 200, 200);\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    this.ctx.arc(100, 100, 50, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Trashes.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  };\n\n  return Trashes;\n}();\n\nexports.Trashes = Trashes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOUJDLFdBQUksQ0FBQ3BCLE1BQUw7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFLSjtBQUFDLENBbkVEOztBQUFhcUIsZUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL1RyYXNoZXMudHM/OTdiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHttYWlufSBmcm9tIFwiLi9NYWluXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYXNoZXMge1xyXG4gICAgcHJvdGVjdGVkIHBvdWJlbGxlUGFwaWVyOiBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICBwcm90ZWN0ZWQgcG91YmVsbGVHcmlzIDogSFRNTEltYWdlRWxlbWVudFxyXG4gICAgcHJvdGVjdGVkIHBvdWJlbGxlVmVycmU6IEhUTUxJbWFnZUVsZW1lbnRcclxuICAgIHByb3RlY3RlZCBwb3ViZWxsZVBsYXN0aXF1ZTogSFRNTEltYWdlRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudCA9IGh0bWxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIGdyaXNlXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZUdyaXMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnBvdWJlbGxlR3Jpcy5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVHcmlzLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfbm9pci5wbmcnO1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIHBhcGllciBjYXJ0b25cclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGFwaWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBhcGllci5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQYXBpZXIuc3JjID0gJy4vc3JjL2ltZy9wb3ViZWxsZV9qYXVuZS5wbmcnO1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIMOgIHZlcnJlXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfdmVydGUucG5nJztcclxuXHJcbiAgICAgICAgLy9wb3ViZWxsZSBwbGFzdGlxdWUgZXQgYm9pdGUgbcOpdGFsbGlxdWVcclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGxhc3RpcXVlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBsYXN0aXF1ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQbGFzdGlxdWUuc3JjID0gJy4vc3JjL2ltZy9wb3ViZWxsZV9ibGV1LnBuZyc7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG5cclxuICAgICAgICAvL2Rlc3NpbmUgbGVzIHBvdWJlbGxlc1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlR3Jpcywgd2luZG93LmlubmVyV2lkdGggIC82ICwgd2luZG93LmlubmVySGVpZ2h0LTI1MCAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGFwaWVyLCAod2luZG93LmlubmVyV2lkdGggIC82KSArIHRoaXMucG91YmVsbGVQYXBpZXIud2lkdGgqMiAsIHdpbmRvdy5pbm5lckhlaWdodC0yNTAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGxhc3RpcXVlLCAod2luZG93LmlubmVyV2lkdGggLzYpICsgdGhpcy5wb3ViZWxsZVBhcGllci53aWR0aCo0ICwgd2luZG93LmlubmVySGVpZ2h0LTI1MCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlVmVycmUsICh3aW5kb3cuaW5uZXJXaWR0aC82KSArIHRoaXMucG91YmVsbGVQYXBpZXIud2lkdGgqNiwgd2luZG93LmlubmVySGVpZ2h0IC0yNTAsIDIwMCwyMDApO1xyXG5cclxuICAgICAgICAvL3NvbGVpbFxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnIDtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoMTAwLCAxMDAsIDUwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImh0bWxDYW52YXNFbGVtZW50IiwiY3R4IiwicG91YmVsbGVHcmlzIiwiSW1hZ2UiLCJvbmxvYWQiLCJNYWluXzEiLCJ1cGRhdGUiLCJzcmMiLCJwb3ViZWxsZVBhcGllciIsInBvdWJlbGxlVmVycmUiLCJwb3ViZWxsZVBsYXN0aXF1ZSIsIlRyYXNoZXMiLCJkcmF3IiwiZHJhd0ltYWdlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Trashes.ts\n");

/***/ }),

/***/ "./src/ts/helpers.ts":
/*!***************************!*\
  !*** ./src/ts/helpers.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max) {\n  return min + Math.random() * (max - min);\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvaGVscGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQWdCQSxNQUFoQixDQUF1QkMsR0FBdkIsRUFBb0NDLEdBQXBDLEVBQStDO0FBQzNDLFNBQU9ELEdBQUcsR0FBR0UsSUFBSSxDQUFDSCxNQUFMLE1BQWlCRSxHQUFHLEdBQUdELEdBQXZCLENBQWI7QUFDSDs7QUFGREcsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL2hlbHBlcnMudHM/YTc1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxufSJdLCJuYW1lcyI6WyJyYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/helpers.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  dechet: {\n    speed: {\n      y: 0.1\n    },\n    position: {\n      x: 0,\n      y: 0\n    },\n    Alive: true,\n    src: ''\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBRztBQUFDQyxPQUFDLEVBQUU7QUFBSixLQURMO0FBRUhDLFlBQVEsRUFBRztBQUFDQyxPQUFDLEVBQUUsQ0FBSjtBQUFPRixPQUFDLEVBQUU7QUFBVixLQUZSO0FBR0hHLFNBQUssRUFBRyxJQUhMO0FBSUhDLE9BQUcsRUFBRTtBQUpGO0FBRGEsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvc2V0dGluZ3MudHM/NzRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZGVjaGV0OntcclxuICAgICAgICBzcGVlZCA6IHt5OiAwLjF9LFxyXG4gICAgICAgIHBvc2l0aW9uIDoge3g6IDAsIHk6IDB9LFxyXG4gICAgICAgIEFsaXZlIDogdHJ1ZSxcclxuICAgICAgICBzcmM6ICcnLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJkZWNoZXQiLCJzcGVlZCIsInkiLCJwb3NpdGlvbiIsIngiLCJBbGl2ZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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