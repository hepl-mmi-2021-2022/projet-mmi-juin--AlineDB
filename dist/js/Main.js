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
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Animate = void 0;\n\nvar Animate = function () {\n  function Animate(ctx, canvas, dechets) {\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.dechets = dechets;\n  }\n\n  Animate.prototype.start = function () {\n    var _this = this;\n\n    requestAnimationFrame(function () {\n      _this.start();\n    });\n  };\n\n  return Animate;\n}();\n\nexports.Animate = Animate;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUdBO0FBS0ksbUJBQVlBLEdBQVosRUFBMkNDLE1BQTNDLEVBQXNFQyxPQUF0RSxFQUFzRjtBQUNsRixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7QUFFREM7QUFBQTs7QUFFSUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ0MsS0FBTDtBQUVILEtBSG9CLENBQXJCO0FBSUgsR0FORDs7QUFRSjtBQUFDLENBbkJEOztBQUFhQyxlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0ZS50cz9hNzZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVjaGV0c30gZnJvbSBcIi4vRGVjaGV0c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlIHtcclxuICAgIHByaXZhdGUgZGVjaGV0czogRGVjaGV0cztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGRlY2hldHM6IERlY2hldHMpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmRlY2hldHMgPSBkZWNoZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCl7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgLy90aGlzLmRlY2hldHMudXBkYXRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwiZGVjaGV0cyIsIkFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsInN0YXJ0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Animate.ts\n");

/***/ }),

/***/ "./src/ts/Dechets.ts":
/*!***************************!*\
  !*** ./src/ts/Dechets.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Dechets = void 0;\n\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/ts/Main.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/ts/helpers.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Dechets = function () {\n  function Dechets(htmlCanvasElement, ctx) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = ctx;\n    this.speed = {\n      x: settings_1.settings.dechet.speed.x\n    };\n    this.position = {\n      x: Math.trunc((0, helpers_1.random)(settings_1.settings.dechet.position.x, this.htmlCanvasElement.width)),\n      y: 0\n    };\n    this.Alive = true;\n    this.banane = new Image();\n\n    this.banane.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.banane.src = './src/img/banana.png';\n    this.bouteille = new Image();\n\n    this.bouteille.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/bottle.png';\n    this.canette = new Image();\n\n    this.canette.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.bouteille.src = './src/img/can.png';\n    this.oeuf = new Image();\n\n    this.oeuf.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.oeuf.src = './src/img/egg-shell.png';\n    this.cotton = new Image();\n\n    this.cotton.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.cotton.src = './src/img/cotton-swabs.png';\n    this.box = new Image();\n\n    this.box.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.box.src = './src/img/open-box.png';\n    this.yogurt = new Image();\n\n    this.yogurt.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.yogurt.src = './src/img/yogurt.png';\n    this.sheet = new Image();\n\n    this.sheet.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.sheet.src = './src/img/yogurt.png';\n    this.apple = new Image();\n\n    this.apple.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.apple.src = './src/img/core.png';\n  }\n\n  Dechets.prototype.update = function () {\n    if (this.position.x < this.htmlCanvasElement.height - 100) {\n      this.position.x += this.speed.x;\n    }\n\n    this.draw();\n  };\n\n  Dechets.prototype.draw = function () {\n    if (Math.random() < 0.1) {\n      this.ctx.drawImage(this.apple, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.2) {\n      this.ctx.drawImage(this.box, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.3) {\n      this.ctx.drawImage(this.yogurt, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.4) {\n      this.ctx.drawImage(this.canette, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.5) {\n      this.ctx.drawImage(this.sheet, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.6) {\n      this.ctx.drawImage(this.cotton, this.position.x, this.position.y, 100, 100);\n    } else if (Math.random() < 0.7) {\n      this.ctx.drawImage(this.oeuf, this.position.x, this.position.y, 100, 100);\n    }\n  };\n\n  return Dechets;\n}();\n\nexports.Dechets = Dechets;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQWpCLEVBQXFCO0FBQ3ZCLFdBQUs1QixHQUFMLENBQVM2QixTQUFULENBQW1CLEtBQUtOLEtBQXhCLEVBQStCLEtBQUtsQixRQUFMLENBQWNILENBQTdDLEVBQWdELEtBQUtHLFFBQUwsQ0FBY0ksQ0FBOUQsRUFBaUUsR0FBakUsRUFBcUUsR0FBckU7QUFDSCxLQUZLLE1BRUEsSUFBR0gsSUFBSSxDQUFDc0IsTUFBTCxLQUFjLEdBQWpCLEVBQXFCO0FBQ3ZCLFdBQUs1QixHQUFMLENBQVM2QixTQUFULENBQW1CLEtBQUtULE1BQXhCLEVBQWdDLEtBQUtmLFFBQUwsQ0FBY0gsQ0FBOUMsRUFBaUQsS0FBS0csUUFBTCxDQUFjSSxDQUEvRCxFQUFrRSxHQUFsRSxFQUFzRSxHQUF0RTtBQUNILEtBRkssTUFFQSxJQUFHSCxJQUFJLENBQUNzQixNQUFMLEtBQWMsR0FBakIsRUFBcUI7QUFDdkIsV0FBSzVCLEdBQUwsQ0FBUzZCLFNBQVQsQ0FBbUIsS0FBS1YsSUFBeEIsRUFBOEIsS0FBS2QsUUFBTCxDQUFjSCxDQUE1QyxFQUErQyxLQUFLRyxRQUFMLENBQWNJLENBQTdELEVBQWdFLEdBQWhFLEVBQW9FLEdBQXBFO0FBQ0g7QUFFSixHQWpCRDs7QUFrQko7QUFBQyxDQXBIRDs7QUFBYXFCLGVBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EZWNoZXRzLnRzPzY3MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWlufSBmcm9tIFwiLi9NYWluXCI7XHJcbmltcG9ydCB7cmFuZG9tfSBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERlY2hldHMge1xyXG4gICAgcHJpdmF0ZSBodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIHByb3RlY3RlZCBzcGVlZDp7IHg6IG51bWJlcn07XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IHt4Om51bWJlciwgeTpudW1iZXJ9O1xyXG4gICAgQWxpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgcHJvdGVjdGVkIGJhbmFuZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBib3V0ZWlsbGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgdmVycmU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgY2FuZXR0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBvZXVmOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGNvdHRvbjogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBib3g6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgeW9ndXJ0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIHNoZWV0OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGFwcGxlOkhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHRtbENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQgPSBodG1sQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHt4OiBzZXR0aW5ncy5kZWNoZXQuc3BlZWQueH07XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiBNYXRoLnRydW5jKHJhbmRvbShzZXR0aW5ncy5kZWNoZXQucG9zaXRpb24ueCwgdGhpcy5odG1sQ2FudmFzRWxlbWVudC53aWR0aCkpLCB5OiAwfTtcclxuICAgICAgICB0aGlzLkFsaXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy9iYW5hbmVcclxuICAgICAgICB0aGlzLmJhbmFuZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYmFuYW5lLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5iYW5hbmUuc3JjID0gJy4vc3JjL2ltZy9iYW5hbmEucG5nJztcclxuXHJcbiAgICAgICAgLy9ib3V0ZWlsbGVcclxuICAgICAgICB0aGlzLmJvdXRlaWxsZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYm91dGVpbGxlLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3V0ZWlsbGUuc3JjID0gJy4vc3JjL2ltZy9ib3R0bGUucG5nJztcclxuXHJcbiAgICAgICAgLy9jYW5ldHRlXHJcbiAgICAgICAgdGhpcy5jYW5ldHRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jYW5ldHRlLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3V0ZWlsbGUuc3JjID0gJy4vc3JjL2ltZy9jYW4ucG5nJztcclxuXHJcbiAgICAgICAgLy9vZXVmXHJcbiAgICAgICAgdGhpcy5vZXVmID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5vZXVmLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vZXVmLnNyYyA9ICcuL3NyYy9pbWcvZWdnLXNoZWxsLnBuZyc7XHJcblxyXG4gICAgICAgIC8vY290dG9uXHJcbiAgICAgICAgdGhpcy5jb3R0b24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmNvdHRvbi5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY290dG9uLnNyYyA9ICcuL3NyYy9pbWcvY290dG9uLXN3YWJzLnBuZyc7XHJcblxyXG4gICAgICAgIC8vYm9pdGVcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYm94Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ib3guc3JjID0gJy4vc3JjL2ltZy9vcGVuLWJveC5wbmcnO1xyXG5cclxuICAgICAgICAvL3lvZ3VydFxyXG4gICAgICAgIHRoaXMueW9ndXJ0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy55b2d1cnQub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnlvZ3VydC5zcmMgPSAnLi9zcmMvaW1nL3lvZ3VydC5wbmcnO1xyXG5cclxuICAgICAgICAvL3NoZWV0XHJcbiAgICAgICAgdGhpcy5zaGVldCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc2hlZXQub25sb2FkID0gZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgIG1haW4udXBkYXRlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoZWV0LnNyYyA9ICcuL3NyYy9pbWcveW9ndXJ0LnBuZyc7XHJcblxyXG4gICAgICAgIC8vYXBwbGVcclxuICAgICAgICB0aGlzLmFwcGxlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5hcHBsZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXBwbGUuc3JjID0gJy4vc3JjL2ltZy9jb3JlLnBuZyc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgdGhpcy5odG1sQ2FudmFzRWxlbWVudC5oZWlnaHQgLSAxMDApe1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgaWYoTWF0aC5yYW5kb20oKTwwLjEpe1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5hcHBsZSwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgLCAxMDAsMTAwKTtcclxuICAgICAgICB9IGVsc2UgaWYoTWF0aC5yYW5kb20oKTwwLjIpe1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5ib3gsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsMTAwKTtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLnJhbmRvbSgpPDAuMyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnlvZ3VydCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEwMCwgMTAwKTtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLnJhbmRvbSgpPDAuNCl7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNhbmV0dGUsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsMTAwKTtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLnJhbmRvbSgpPDAuNSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNoZWV0LCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLDEwMCk7XHJcbiAgICAgICAgfWVsc2UgaWYoTWF0aC5yYW5kb20oKTwwLjYpe1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jb3R0b24sIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsMTAwKTtcclxuICAgICAgICB9ZWxzZSBpZihNYXRoLnJhbmRvbSgpPDAuNyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLm9ldWYsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMDAsMTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImh0bWxDYW52YXNFbGVtZW50IiwiY3R4Iiwic3BlZWQiLCJ4Iiwic2V0dGluZ3NfMSIsImRlY2hldCIsInBvc2l0aW9uIiwiTWF0aCIsInRydW5jIiwid2lkdGgiLCJ5IiwiQWxpdmUiLCJiYW5hbmUiLCJJbWFnZSIsIm9ubG9hZCIsIk1haW5fMSIsInVwZGF0ZSIsInNyYyIsImJvdXRlaWxsZSIsImNhbmV0dGUiLCJvZXVmIiwiY290dG9uIiwiYm94IiwieW9ndXJ0Iiwic2hlZXQiLCJhcHBsZSIsIkRlY2hldHMiLCJoZWlnaHQiLCJkcmF3IiwicmFuZG9tIiwiZHJhd0ltYWdlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Dechets.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.main = void 0;\n\nvar Trash_1 = __webpack_require__(/*! ./Trash */ \"./src/ts/Trash.ts\");\n\nvar Dechets_1 = __webpack_require__(/*! ./Dechets */ \"./src/ts/Dechets.ts\");\n\nvar Animate_1 = __webpack_require__(/*! ./Animate */ \"./src/ts/Animate.ts\");\n\nexports.main = {\n  htmlCanvasElement: HTMLCanvasElement,\n  ctx: CanvasRenderingContext2D,\n  trash: Trash_1.Trash,\n  animation: Animate_1.Animate,\n  dechets: Dechets_1.Dechets,\n  init: function init() {\n    this.dechets = [];\n    this.htmlCanvasElement = document.getElementById('my-canvas');\n    this.ctx = this.htmlCanvasElement.getContext('2d');\n    this.trash = new Trash_1.Trash(this.htmlCanvasElement, this.ctx);\n    this.animation = new Animate_1.Animate(this.ctx, this.htmlCanvasElement, this.dechets);\n    this.addEventListeners();\n    this.animation.start();\n  },\n  update: function update() {\n    this.htmlCanvasElement.width = window.innerWidth;\n    this.htmlCanvasElement.height = window.innerHeight;\n    this.draw();\n  },\n  draw: function draw() {\n    this.trash.draw();\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  }\n};\nexports.main.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUNBOztBQUVhQSxZQUFBQSxHQUFPO0FBQ2hCQyxtQkFBaUIsRUFBRUMsaUJBREg7QUFFaEJDLEtBQUcsRUFBRUMsd0JBRlc7QUFHaEJDLE9BQUssRUFBRUMsYUFIUztBQUloQkMsV0FBUyxFQUFHQyxpQkFKSTtBQUtoQkMsU0FBTyxFQUFFQyxpQkFMTztBQU9oQkMsTUFBSTtBQUVBLFNBQUtGLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS1IsaUJBQUwsR0FBeUJXLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUF6QjtBQUNBLFNBQUtWLEdBQUwsR0FBVyxLQUFLRixpQkFBTCxDQUF1QmEsVUFBdkIsQ0FBa0MsSUFBbEMsQ0FBWDtBQUdBLFNBQUtULEtBQUwsR0FBYSxJQUFJQyxhQUFKLENBQVUsS0FBS0wsaUJBQWYsRUFBa0MsS0FBS0UsR0FBdkMsQ0FBYjtBQUVBLFNBQUtJLFNBQUwsR0FBaUIsSUFBSUMsaUJBQUosQ0FBWSxLQUFLTCxHQUFqQixFQUFzQixLQUFLRixpQkFBM0IsRUFBOEMsS0FBS1EsT0FBbkQsQ0FBakI7QUFDQSxTQUFLTSxpQkFBTDtBQUNELFNBQUtSLFNBQUwsQ0FBZVMsS0FBZjtBQUNGLEdBbkJlO0FBcUJoQkMsUUFBTTtBQUNGLFNBQUtoQixpQkFBTCxDQUF1QmlCLEtBQXZCLEdBQStCQyxNQUFNLENBQUNDLFVBQXRDO0FBQ0EsU0FBS25CLGlCQUFMLENBQXVCb0IsTUFBdkIsR0FBZ0NGLE1BQU0sQ0FBQ0csV0FBdkM7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0F6QmU7QUEyQmhCQSxNQUFJO0FBQ0EsU0FBS2xCLEtBQUwsQ0FBV2tCLElBQVg7QUFFQyxHQTlCVztBQWdDaEJSLG1CQUFpQjtBQUFqQjs7QUFDSUksVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUM5QkMsV0FBSSxDQUFDUixNQUFMO0FBQ0gsS0FGRDtBQUdIO0FBcENlLENBQVA7QUF1Q2JqQixhQUFLVyxJQUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9NYWluLnRzPzQ4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7VHJhc2h9IGZyb20gXCIuL1RyYXNoXCI7XHJcbmltcG9ydCB7RGVjaGV0c30gZnJvbSBcIi4vRGVjaGV0c1wiO1xyXG5pbXBvcnQge0FuaW1hdGV9IGZyb20gXCIuL0FuaW1hdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWluID0ge1xyXG4gICAgaHRtbENhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LFxyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgICB0cmFzaDogVHJhc2gsXHJcbiAgICBhbmltYXRpb24gOiBBbmltYXRlLFxyXG4gICAgZGVjaGV0czogRGVjaGV0cyxcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vZGVjaGV0c1xyXG4gICAgICAgIHRoaXMuZGVjaGV0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgIC8vcG91YmVsbGVzXHJcbiAgICAgICAgdGhpcy50cmFzaCA9IG5ldyBUcmFzaCh0aGlzLmh0bWxDYW52YXNFbGVtZW50LCB0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IEFuaW1hdGUodGhpcy5jdHgsIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQsIHRoaXMuZGVjaGV0cyk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgdGhpcy5hbmltYXRpb24uc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMudHJhc2guZHJhdygpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1haW4uaW5pdCgpOyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaHRtbENhbnZhc0VsZW1lbnQiLCJIVE1MQ2FudmFzRWxlbWVudCIsImN0eCIsIkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsInRyYXNoIiwiVHJhc2hfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGVfMSIsImRlY2hldHMiLCJEZWNoZXRzXzEiLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJhZGRFdmVudExpc3RlbmVycyIsInN0YXJ0IiwidXBkYXRlIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkcmF3IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/Trash.ts":
/*!*************************!*\
  !*** ./src/ts/Trash.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Trash = void 0;\n\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/ts/Main.ts\");\n\nvar Trash = function () {\n  function Trash(htmlCanvasElement, ctx) {\n    this.htmlCanvasElement = htmlCanvasElement;\n    this.ctx = ctx;\n    this.poubelleGris = new Image();\n\n    this.poubelleGris.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubelleGris.src = './src/img/poubelle_noir.png';\n    this.poubellePapier = new Image();\n\n    this.poubellePapier.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubellePapier.src = './src/img/poubelle_jaune.png';\n    this.poubelleVerre = new Image();\n\n    this.poubelleVerre.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubelleVerre.src = './src/img/poubelle_verte.png';\n    this.poubellePlastique = new Image();\n\n    this.poubellePlastique.onload = function () {\n      Main_1.main.update();\n    };\n\n    this.poubellePlastique.src = './src/img/poubelle_bleu.png';\n    this.update();\n  }\n\n  Trash.prototype.update = function () {\n    this.draw();\n  };\n\n  Trash.prototype.draw = function () {\n    this.ctx.drawImage(this.poubelleGris, window.innerWidth / 6, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubellePapier, window.innerWidth / 6 + this.poubellePapier.width * 2, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubellePlastique, window.innerWidth / 6 + this.poubellePapier.width * 4, window.innerHeight - 250, 200, 200);\n    this.ctx.drawImage(this.poubelleVerre, window.innerWidth / 6 + this.poubellePapier.width * 6, window.innerHeight - 250, 200, 200);\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    this.ctx.arc(100, 100, 50, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Trash.prototype.addEventListeners = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.update();\n    });\n  };\n\n  return Trash;\n}();\n\nexports.Trash = Trash;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlCQyxXQUFJLENBQUNwQixNQUFMO0FBQ0gsS0FGRDtBQUdILEdBSkQ7O0FBS0o7QUFBQyxDQW5FRDs7QUFBYXFCLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9UcmFzaC50cz81NGQyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge21haW59IGZyb20gXCIuL01haW5cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHJhc2gge1xyXG4gICAgcHJvdGVjdGVkIHBvdWJlbGxlUGFwaWVyOiBIVE1MSW1hZ2VFbGVtZW50XHJcbiAgICBwcm90ZWN0ZWQgcG91YmVsbGVHcmlzIDogSFRNTEltYWdlRWxlbWVudFxyXG4gICAgcHJvdGVjdGVkIHBvdWJlbGxlVmVycmU6IEhUTUxJbWFnZUVsZW1lbnRcclxuICAgIHByb3RlY3RlZCBwb3ViZWxsZVBsYXN0aXF1ZTogSFRNTEltYWdlRWxlbWVudFxyXG4gICAgcHJpdmF0ZSBodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnRcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudCA9IGh0bWxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIGdyaXNlXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZUdyaXMgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnBvdWJlbGxlR3Jpcy5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVHcmlzLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfbm9pci5wbmcnO1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIHBhcGllciBjYXJ0b25cclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGFwaWVyID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBhcGllci5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQYXBpZXIuc3JjID0gJy4vc3JjL2ltZy9wb3ViZWxsZV9qYXVuZS5wbmcnO1xyXG5cclxuICAgICAgICAvL3BvdWJlbGxlIMOgIHZlcnJlXHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlLm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBtYWluLnVwZGF0ZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVZlcnJlLnNyYyA9ICcuL3NyYy9pbWcvcG91YmVsbGVfdmVydGUucG5nJztcclxuXHJcbiAgICAgICAgLy9wb3ViZWxsZSBwbGFzdGlxdWUgZXQgYm9pdGUgbcOpdGFsbGlxdWVcclxuICAgICAgICB0aGlzLnBvdWJlbGxlUGxhc3RpcXVlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5wb3ViZWxsZVBsYXN0aXF1ZS5vbmxvYWQgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgbWFpbi51cGRhdGUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucG91YmVsbGVQbGFzdGlxdWUuc3JjID0gJy4vc3JjL2ltZy9wb3ViZWxsZV9ibGV1LnBuZyc7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG5cclxuICAgICAgICAvL2Rlc3NpbmUgbGVzIHBvdWJlbGxlc1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlR3Jpcywgd2luZG93LmlubmVyV2lkdGggIC82ICwgd2luZG93LmlubmVySGVpZ2h0LTI1MCAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGFwaWVyLCAod2luZG93LmlubmVyV2lkdGggIC82KSArIHRoaXMucG91YmVsbGVQYXBpZXIud2lkdGgqMiAsIHdpbmRvdy5pbm5lckhlaWdodC0yNTAsIDIwMCwyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlUGxhc3RpcXVlLCAod2luZG93LmlubmVyV2lkdGggLzYpICsgdGhpcy5wb3ViZWxsZVBhcGllci53aWR0aCo0ICwgd2luZG93LmlubmVySGVpZ2h0LTI1MCwgMjAwLCAyMDApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnBvdWJlbGxlVmVycmUsICh3aW5kb3cuaW5uZXJXaWR0aC82KSArIHRoaXMucG91YmVsbGVQYXBpZXIud2lkdGgqNiwgd2luZG93LmlubmVySGVpZ2h0IC0yNTAsIDIwMCwyMDApO1xyXG5cclxuICAgICAgICAvL3NvbGVpbFxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnIDtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoMTAwLCAxMDAsIDUwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImh0bWxDYW52YXNFbGVtZW50IiwiY3R4IiwicG91YmVsbGVHcmlzIiwiSW1hZ2UiLCJvbmxvYWQiLCJNYWluXzEiLCJ1cGRhdGUiLCJzcmMiLCJwb3ViZWxsZVBhcGllciIsInBvdWJlbGxlVmVycmUiLCJwb3ViZWxsZVBsYXN0aXF1ZSIsIlRyYXNoIiwiZHJhdyIsImRyYXdJbWFnZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Trash.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  dechet: {\n    speed: {\n      x: 1\n    },\n    position: {\n      x: 0,\n      y: 0\n    },\n    Alive: true,\n    src: ''\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFDO0FBQ0hDLFNBQUssRUFBRztBQUFDQyxPQUFDLEVBQUU7QUFBSixLQURMO0FBRUhDLFlBQVEsRUFBRztBQUFDRCxPQUFDLEVBQUUsQ0FBSjtBQUFPRSxPQUFDLEVBQUU7QUFBVixLQUZSO0FBR0hDLFNBQUssRUFBRyxJQUhMO0FBSUhDLE9BQUcsRUFBRTtBQUpGO0FBRGEsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvc2V0dGluZ3MudHM/NzRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JhbmRvbX0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZGVjaGV0OntcclxuICAgICAgICBzcGVlZCA6IHt4OiAxfSxcclxuICAgICAgICBwb3NpdGlvbiA6IHt4OiAwLCB5OiAwfSxcclxuICAgICAgICBBbGl2ZSA6IHRydWUsXHJcbiAgICAgICAgc3JjOiAnJyxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiZGVjaGV0Iiwic3BlZWQiLCJ4IiwicG9zaXRpb24iLCJ5IiwiQWxpdmUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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