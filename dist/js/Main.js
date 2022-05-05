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

eval("\n\nexports.__esModule = true;\nexports.Animate = void 0;\n\nvar Dechets_1 = __webpack_require__(/*! ./Dechets */ \"./src/ts/Dechets.ts\");\n\nvar Trashes_1 = __webpack_require__(/*! ./Trashes */ \"./src/ts/Trashes.ts\");\n\nvar Animate = function () {\n  function Animate(ctx, canvas, dechets) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.dechets = dechets;\n    this.draw();\n  }\n\n  Animate.prototype.draw = function () {\n    this.dechets = new Dechets_1.Dechets(this.canvas, this.ctx);\n    this.trash = new Trashes_1.Trashes(this.canvas, this.ctx);\n  };\n\n  Animate.prototype.update = function () {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.dechets.update();\n  };\n\n  Animate.prototype.start = function () {\n    var _this = this;\n\n    this.update();\n    requestAnimationFrame(function () {\n      _this.start();\n    });\n  };\n\n  return Animate;\n}();\n\nexports.Animate = Animate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUdBO0FBTUksbUJBQVlBLEdBQVosRUFBMkNDLE1BQTNDLEVBQXNFQyxPQUF0RSxFQUFzRjtBQUNsRixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMO0FBQ0g7O0FBRURDO0FBQ0ksU0FBS0YsT0FBTCxHQUFlLElBQUlHLGlCQUFKLENBQVksS0FBS0osTUFBakIsRUFBeUIsS0FBS0QsR0FBOUIsQ0FBZjtBQUNBLFNBQUtNLEtBQUwsR0FBYSxJQUFJQyxpQkFBSixDQUFZLEtBQUtOLE1BQWpCLEVBQXlCLEtBQUtELEdBQTlCLENBQWI7QUFFSCxHQUpEOztBQUtBSTtBQUNJLFNBQUtKLEdBQUwsQ0FBU1EsU0FBVCxDQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixLQUFLUCxNQUFMLENBQVlRLEtBQW5DLEVBQXlDLEtBQUtSLE1BQUwsQ0FBWVMsTUFBckQ7QUFDQSxTQUFLUixPQUFMLENBQWFTLE1BQWI7QUFDSCxHQUhEOztBQUtBUDtBQUFBOztBQUNJLFNBQUtPLE1BQUw7QUFFQUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ0MsS0FBTDtBQUtILEtBTm9CLENBQXJCO0FBT0gsR0FWRDs7QUFZSjtBQUFDLENBbkNEOztBQUFhQyxlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0ZS50cz9hNzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVjaGV0c30gZnJvbSBcIi4vRGVjaGV0c1wiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1RyYXNoZXN9IGZyb20gXCIuL1RyYXNoZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZSB7XHJcbiAgICBwcml2YXRlIGRlY2hldHM6IERlY2hldHM7XHJcbiAgICBwcml2YXRlIHRyYXNoOiBUcmFzaGVzO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgZGVjaGV0czogRGVjaGV0cykge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuZGVjaGV0cyA9IGRlY2hldHM7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuZGVjaGV0cyA9IG5ldyBEZWNoZXRzKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XHJcbiAgICAgICAgdGhpcy50cmFzaCA9IG5ldyBUcmFzaGVzKHRoaXMuY2FudmFzLCB0aGlzLmN0eCk7XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRlY2hldHMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIC8vXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwiZGVjaGV0cyIsImRyYXciLCJBbmltYXRlIiwiRGVjaGV0c18xIiwidHJhc2giLCJUcmFzaGVzXzEiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwic3RhcnQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Animate.ts\n");

/***/ }),

/***/ "./src/ts/Dechets.ts":
/*!***************************!*\
  !*** ./src/ts/Dechets.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Dechets = void 0;\n\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/ts/Main.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/ts/helpers.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Dechets = function () {\n  function Dechets(htmlCanvasElement, ctx) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = ctx;\n    this.speed = {\n      y: settings_1.settings.dechet.speed.y\n    };\n    this.position = {\n      x: Math.trunc((0, helpers_1.random)(settings_1.settings.dechet.position.x, this.htmlCanvasElement.width)),\n      y: settings_1.settings.dechet.position.y\n    };\n    this.Alive = true;\n    this.choice = Math.trunc(Math.random() * 10);\n    this.banane = new Image();\n\n    this.banane.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.banane.src = './src/img/banana.png';\n    this.bouteille = new Image();\n\n    this.bouteille.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/bottle.png';\n    this.canette = new Image();\n\n    this.canette.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/can.png';\n    this.oeuf = new Image();\n\n    this.oeuf.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.oeuf.src = './src/img/egg-shell.png';\n    this.cotton = new Image();\n\n    this.cotton.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.cotton.src = './src/img/cotton-swabs.png';\n    this.box = new Image();\n\n    this.box.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.box.src = './src/img/open-box.png';\n    this.yogurt = new Image();\n\n    this.yogurt.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.yogurt.src = './src/img/yogurt.png';\n    this.sheet = new Image();\n\n    this.sheet.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.sheet.src = './src/img/yogurt.png';\n    this.apple = new Image();\n\n    this.apple.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.apple.src = './src/img/core.png';\n  }\n\n  Dechets.prototype.update = function () {\n    if (this.position.y < this.htmlCanvasElement.height - 100) {\n      this.position.y++;\n    } else {\n      this.position.y = 0;\n    }\n\n    this.draw();\n  };\n\n  Dechets.prototype.choose = function () {\n    switch (Math.trunc((0, helpers_1.random)(1, 10))) {\n      case 0:\n        this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 1:\n        this.ctx.drawImage(this.box, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 2:\n        this.ctx.drawImage(this.yogurt, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 3:\n        this.ctx.drawImage(this.canette, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 4:\n        this.ctx.drawImage(this.sheet, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 5:\n        this.ctx.drawImage(this.cotton, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 6:\n        this.ctx.drawImage(this.oeuf, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 7:\n        this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n        break;\n\n      case 8:\n        this.ctx.drawImage(this.box, this.position.x, this.position.y, 100, 100);\n        break;\n    }\n  };\n\n  Dechets.prototype.draw = function () {\n    this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n  };\n\n  return Dechets;\n}();\n\nexports.Dechets = Dechets;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUQsRUFBaUUsR0FBakUsRUFBc0UsR0FBdEU7QUFHSCxHQUxEOztBQU1BO0FBQUMsQ0FwSkQ7O0FBQWE2QixlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRGVjaGV0cy50cz82NzE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFpbn0gZnJvbSBcIi4vTWFpblwiO1xyXG5pbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWNoZXRzIHtcclxuICAgIHByaXZhdGUgaHRtbENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IHsgeTogbnVtYmVyIH07XHJcbiAgICBwb3NpdGlvbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xyXG4gICAgQWxpdmU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGNob2ljZTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgYmFuYW5lOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGJvdXRlaWxsZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCB2ZXJyZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBjYW5ldHRlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIG9ldWY6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgY290dG9uOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGJveDogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCB5b2d1cnQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgc2hlZXQ6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgYXBwbGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0bWxDYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50ID0gaHRtbENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7eTogc2V0dGluZ3MuZGVjaGV0LnNwZWVkLnl9O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IE1hdGgudHJ1bmMocmFuZG9tKHNldHRpbmdzLmRlY2hldC5wb3NpdGlvbi54LCB0aGlzLmh0bWxDYW52YXNFbGVtZW50LndpZHRoKSksXHJcbiAgICAgICAgICAgIHk6IHNldHRpbmdzLmRlY2hldC5wb3NpdGlvbi55XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLkFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNob2ljZSA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcblxyXG4gICAgICAgIC8vYmFuYW5lXHJcbiAgICAgICAgdGhpcy5iYW5hbmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmJhbmFuZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJhbmFuZS5zcmMgPSAnLi9zcmMvaW1nL2JhbmFuYS5wbmcnO1xyXG5cclxuICAgICAgICAvL2JvdXRlaWxsZVxyXG4gICAgICAgIHRoaXMuYm91dGVpbGxlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5ib3V0ZWlsbGUub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3V0ZWlsbGUuc3JjID0gJy4vc3JjL2ltZy9ib3R0bGUucG5nJztcclxuXHJcbiAgICAgICAgLy9jYW5ldHRlXHJcbiAgICAgICAgdGhpcy5jYW5ldHRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jYW5ldHRlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm91dGVpbGxlLnNyYyA9ICcuL3NyYy9pbWcvY2FuLnBuZyc7XHJcblxyXG4gICAgICAgIC8vb2V1ZlxyXG4gICAgICAgIHRoaXMub2V1ZiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMub2V1Zi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9ldWYuc3JjID0gJy4vc3JjL2ltZy9lZ2ctc2hlbGwucG5nJztcclxuXHJcbiAgICAgICAgLy9jb3R0b25cclxuICAgICAgICB0aGlzLmNvdHRvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuY290dG9uLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY290dG9uLnNyYyA9ICcuL3NyYy9pbWcvY290dG9uLXN3YWJzLnBuZyc7XHJcblxyXG4gICAgICAgIC8vYm9pdGVcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYm94Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm94LnNyYyA9ICcuL3NyYy9pbWcvb3Blbi1ib3gucG5nJztcclxuXHJcbiAgICAgICAgLy95b2d1cnRcclxuICAgICAgICB0aGlzLnlvZ3VydCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMueW9ndXJ0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMueW9ndXJ0LnNyYyA9ICcuL3NyYy9pbWcveW9ndXJ0LnBuZyc7XHJcblxyXG4gICAgICAgIC8vc2hlZXRcclxuICAgICAgICB0aGlzLnNoZWV0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5zaGVldC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoZWV0LnNyYyA9ICcuL3NyYy9pbWcveW9ndXJ0LnBuZyc7XHJcblxyXG4gICAgICAgIC8vYXBwbGVcclxuICAgICAgICB0aGlzLmFwcGxlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBsZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFwcGxlLnNyYyA9ICcuL3NyYy9pbWcvY29yZS5wbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlKCl7XHJcbiAgICAgICAgc3dpdGNoIChNYXRoLnRydW5jKHJhbmRvbSgxLDEwKSkpIHtcclxuICAgICAgICAgICAgY2FzZSAwIDogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXBwbGUsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMTogIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJveCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy55b2d1cnQsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMzogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FuZXR0ZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA0OiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zaGVldCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA1OiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb3R0b24sIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgNjogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMub2V1ZiwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA3OiB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hcHBsZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSA4IDogdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYm94LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5kcmF3KClcclxue1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYXBwbGUsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsIDEwMCk7XHJcblxyXG5cclxufVxyXG59XHJcbiJdLCJuYW1lcyI6WyJodG1sQ2FudmFzRWxlbWVudCIsImN0eCIsInNwZWVkIiwieSIsInNldHRpbmdzXzEiLCJkZWNoZXQiLCJwb3NpdGlvbiIsIngiLCJNYXRoIiwidHJ1bmMiLCJ3aWR0aCIsIkFsaXZlIiwiY2hvaWNlIiwicmFuZG9tIiwiYmFuYW5lIiwiSW1hZ2UiLCJvbmxvYWQiLCJNYWluXzEiLCJ1cGRhdGUiLCJzcmMiLCJib3V0ZWlsbGUiLCJjYW5ldHRlIiwib2V1ZiIsImNvdHRvbiIsImJveCIsInlvZ3VydCIsInNoZWV0IiwiYXBwbGUiLCJEZWNoZXRzIiwiaGVpZ2h0IiwiZHJhdyIsImRyYXdJbWFnZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Dechets.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.main = void 0;\n\nvar Trashes_1 = __webpack_require__(/*! ./Trashes */ \"./src/ts/Trashes.ts\");\n\nvar Dechets_1 = __webpack_require__(/*! ./Dechets */ \"./src/ts/Dechets.ts\");\n\nvar Animate_1 = __webpack_require__(/*! ./Animate */ \"./src/ts/Animate.ts\");\n\nexports.main = {\n  htmlCanvasElement: HTMLCanvasElement,\n  ctx: CanvasRenderingContext2D,\n  animation: Animate_1.Animate,\n  dechets: Dechets_1.Dechets,\n  trash: Trashes_1.Trashes,\n  init: function init() {\n    this.htmlCanvasElement = document.getElementById('my-canvas');\n    this.ctx = this.htmlCanvasElement.getContext('2d');\n    this.animation = new Animate_1.Animate(this.ctx, this.htmlCanvasElement, this.dechets);\n    this.addEventListeners();\n    this.animation.start();\n  },\n  update: function update() {\n    this.htmlCanvasElement.width = window.innerWidth;\n    this.htmlCanvasElement.height = window.innerHeight;\n    this.draw();\n  },\n  draw: function draw() {\n    this.dechets = new Dechets_1.Dechets(this.canvas, this.ctx);\n    this.trash.draw();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  }\n};\nexports.main.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUNBOztBQUVhQSxZQUFBQSxHQUFPO0FBQ2hCQyxtQkFBaUIsRUFBRUMsaUJBREg7QUFFaEJDLEtBQUcsRUFBRUMsd0JBRlc7QUFHaEJDLFdBQVMsRUFBR0MsaUJBSEk7QUFJaEJDLFNBQU8sRUFBRUMsaUJBSk87QUFLaEJDLE9BQUssRUFBRUMsaUJBTFM7QUFPaEJDLE1BQUk7QUFDQSxTQUFLVixpQkFBTCxHQUF5QlcsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQXpCO0FBQ0EsU0FBS1YsR0FBTCxHQUFXLEtBQUtGLGlCQUFMLENBQXVCYSxVQUF2QixDQUFrQyxJQUFsQyxDQUFYO0FBR0EsU0FBS1QsU0FBTCxHQUFpQixJQUFJQyxpQkFBSixDQUFZLEtBQUtILEdBQWpCLEVBQXNCLEtBQUtGLGlCQUEzQixFQUE4QyxLQUFLTSxPQUFuRCxDQUFqQjtBQUNBLFNBQUtRLGlCQUFMO0FBQ0QsU0FBS1YsU0FBTCxDQUFlVyxLQUFmO0FBQ0YsR0FmZTtBQWlCaEJDLFFBQU07QUFDRixTQUFLaEIsaUJBQUwsQ0FBdUJpQixLQUF2QixHQUErQkMsTUFBTSxDQUFDQyxVQUF0QztBQUNBLFNBQUtuQixpQkFBTCxDQUF1Qm9CLE1BQXZCLEdBQWdDRixNQUFNLENBQUNHLFdBQXZDO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBckJlO0FBdUJoQkEsTUFBSTtBQUNBLFNBQUtoQixPQUFMLEdBQWUsSUFBSUMsaUJBQUosQ0FBWSxLQUFLZ0IsTUFBakIsRUFBeUIsS0FBS3JCLEdBQTlCLENBQWY7QUFDQSxTQUFLTSxLQUFMLENBQVdjLElBQVg7QUFDQyxHQTFCVztBQTRCaEJSLG1CQUFpQjtBQUFqQjs7QUFDSUksVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUM5QkMsV0FBSSxDQUFDVCxNQUFMO0FBQ0gsS0FGRDtBQUdIO0FBaENlLENBQVA7QUFtQ2JqQixhQUFLVyxJQUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7VHJhc2hlc30gZnJvbSBcIi4vVHJhc2hlc1wiO1xyXG5pbXBvcnQge0RlY2hldHN9IGZyb20gXCIuL0RlY2hldHNcIjtcclxuaW1wb3J0IHtBbmltYXRlfSBmcm9tIFwiLi9BbmltYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbiA9IHtcclxuICAgIGh0bWxDYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCxcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gICAgYW5pbWF0aW9uIDogQW5pbWF0ZSxcclxuICAgIGRlY2hldHM6IERlY2hldHMsXHJcbiAgICB0cmFzaDogVHJhc2hlcyxcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRlKHRoaXMuY3R4LCB0aGlzLmh0bWxDYW52YXNFbGVtZW50LCB0aGlzLmRlY2hldHMpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0YXJ0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50LndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmRlY2hldHMgPSBuZXcgRGVjaGV0cyh0aGlzLmNhbnZhcywgdGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMudHJhc2guZHJhdygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubWFpbi5pbml0KCk7Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJodG1sQ2FudmFzRWxlbWVudCIsIkhUTUxDYW52YXNFbGVtZW50IiwiY3R4IiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwiYW5pbWF0aW9uIiwiQW5pbWF0ZV8xIiwiZGVjaGV0cyIsIkRlY2hldHNfMSIsInRyYXNoIiwiVHJhc2hlc18xIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJzdGFydCIsInVwZGF0ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZHJhdyIsImNhbnZhcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

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