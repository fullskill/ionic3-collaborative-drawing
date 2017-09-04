webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/pages/home/home.html"*/'<ion-content class="no-scroll" no-bounce>\n  <canvas-draw></canvas-draw>\n</ion-content>'/*ion-inline-end:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_canvas_draw_canvas_draw__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__components_canvas_draw_canvas_draw__["a" /* CanvasDraw */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDraw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model_polyline_model__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanvasDraw = (function () {
    function CanvasDraw(platform, renderer, alertCtrl) {
        this.platform = platform;
        this.renderer = renderer;
        this.alertCtrl = alertCtrl;
        this.currentColor = 'black';
        this.currentSize = 'medium';
        this.brushSize = 10;
        this.textSize = 35;
        this.history = [];
        this.redoHistiry = [];
        this.historyIndex = 0;
        this.textHistory = [];
        this.redoTextHistory = [];
        this.textHistoryIndex = 0;
        this.actions = [];
        this.redoActions = [];
        // this.socket = io('http://192.168.1.103:3000');
        // this.socket.on('syncDrawing', (hist) => {
        //   this.draw(hist.p_x, hist.p_y, hist.c_x, hist.c_y, hist.b_s, hist.c_c);
        // });
        this.canDraw = true;
        this.isDrawing = false;
    }
    CanvasDraw.prototype.ngAfterViewInit = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    };
    CanvasDraw.prototype.handleStart = function (ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    };
    CanvasDraw.prototype.handleMove = function (currentX, currentY) {
        if (this.canDraw) {
            if (this.isDrawing) {
                this.tempPolyline.points.push({ x: currentX, y: currentY });
            }
            else {
                this.tempPolyline = new __WEBPACK_IMPORTED_MODULE_0__app_model_polyline_model__["a" /* Polyline */](this.currentColor, this.brushSize);
                this.tempPolyline.points.push({ x: this.lastX, y: this.lastY });
                this.isDrawing = true;
            }
            // this.sendDrawing(this.lastX, this.lastY, currentX, currentY);
            this.draw(this.lastX, this.lastY, currentX, currentY, this.brushSize, this.currentColor);
        }
        this.lastX = currentX;
        this.lastY = currentY;
    };
    CanvasDraw.prototype.draw = function (p_x, p_y, c_x, c_y, b_s, c_c) {
        var ctx = this.canvasElement.getContext('2d');
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(p_x, p_y);
        ctx.lineTo(c_x, c_y);
        ctx.closePath();
        ctx.strokeStyle = c_c;
        ctx.lineWidth = b_s;
        ctx.stroke();
    };
    CanvasDraw.prototype.changeColor = function (Color) {
        this.currentColor = Color;
    };
    CanvasDraw.prototype.changeSize = function (size) {
        if (size == 'small') {
            this.brushSize = 5;
            this.textSize = 20;
        }
        else if (size == 'medium') {
            this.brushSize = 10;
            this.textSize = 35;
        }
        else {
            this.brushSize = 20;
            this.textSize = 70;
        }
    };
    CanvasDraw.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.history = [];
        this.redoHistiry = [];
        this.historyIndex = 0;
        this.textHistory = [];
        this.redoHistiry = [];
        this.textHistoryIndex = 0;
    };
    CanvasDraw.prototype.sendDrawing = function (p_x, p_y, c_x, c_y) {
        var hist = { 'p_x': p_x, "p_y": p_y, "c_x": c_x, "c_y": c_y, "b_s": this.brushSize, "c_c": this.currentColor };
        this.socket.emit('syncDrawing', JSON.stringify(hist));
    };
    CanvasDraw.prototype.onAddText = function () {
        var _this = this;
        var ctx = this.canvasElement.getContext('2d');
        ctx.font = this.textSize + "px Comic Sans MS";
        ctx.fillStyle = this.currentColor;
        var userText;
        var prompt = this.alertCtrl.create({
            title: 'Add Text',
            message: "Enter the text you want to add",
            inputs: [
                {
                    name: 'text',
                    placeholder: 'Text'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        userText = data.text;
                        ctx.fillText(userText, _this.lastX, _this.lastY);
                        _this.textHistory.push({ text: data.text, x: _this.lastX, y: _this.lastY, color: _this.currentColor, font: _this.textSize + "px Comic Sans MS" });
                        _this.textHistoryIndex++;
                        _this.actions.push('write');
                    }
                }
            ]
        });
        prompt.present();
    };
    CanvasDraw.prototype.onDisableDraw = function () {
        this.canDraw = false;
    };
    CanvasDraw.prototype.onEnableDraw = function () {
        this.canDraw = true;
    };
    CanvasDraw.prototype.onSelectColor = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Select Color');
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red',
            checked: this.currentColor == 'red' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Orange',
            value: 'orange',
            checked: this.currentColor == 'orange' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: this.currentColor == 'blue' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green',
            checked: this.currentColor == 'green' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black',
            checked: this.currentColor == 'black' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white',
            checked: this.currentColor == 'white' ? true : false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.changeColor(data);
            }
        });
        alert.present();
    };
    CanvasDraw.prototype.onSelectSize = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Set Pen Size');
        alert.addInput({
            type: 'radio',
            label: 'Small',
            value: 'small',
            checked: this.currentSize == 'small' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Medium',
            value: 'medium',
            checked: this.currentSize == 'medium' ? true : false
        });
        alert.addInput({
            type: 'radio',
            label: 'Large',
            value: 'large',
            checked: this.currentSize == 'large' ? true : false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.changeSize(data);
            }
        });
        alert.present();
    };
    CanvasDraw.prototype.touchStop = function () {
        if (this.isDrawing) {
            this.history.push(this.tempPolyline);
            this.isDrawing = false;
            this.historyIndex++;
            this.actions.push('draw');
            this.redoActions = [];
            this.redoHistiry = [];
            this.redoTextHistory = [];
        }
    };
    CanvasDraw.prototype.drawAllHistory = function () {
        for (var _i = 0, _a = this.history; _i < _a.length; _i++) {
            var polyline = _a[_i];
            var startX = polyline.points[0].x;
            var startY = polyline.points[0].y;
            for (var _b = 0, _c = polyline.points; _b < _c.length; _b++) {
                var point = _c[_b];
                this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
                startX = point.x;
                startY = point.y;
            }
        }
    };
    CanvasDraw.prototype.drawAllTextHistory = function () {
        for (var _i = 0, _a = this.textHistory; _i < _a.length; _i++) {
            var writing = _a[_i];
            var ctx = this.canvasElement.getContext('2d');
            ctx.font = writing.font;
            ctx.fillStyle = writing.color;
            ctx.fillText(writing.text, writing.x, writing.y);
        }
    };
    CanvasDraw.prototype.undo = function () {
        if (this.actions.length == 0) {
            return;
        }
        var tempAction = this.actions.pop();
        this.redoActions.push(tempAction);
        if (tempAction == 'write') {
            if (this.textHistory.length > 0) {
                this.redoTextHistory.push(this.textHistory.pop());
                this.textHistoryIndex--;
            }
        }
        else {
            if (this.history.length > 0) {
                this.redoHistiry.push(this.history.pop());
                this.historyIndex--;
            }
        }
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.drawAllTextHistory();
        this.drawAllHistory();
    };
    CanvasDraw.prototype.redo = function () {
        if (this.redoActions.length == 0) {
            return;
        }
        var tempAction = this.redoActions.pop();
        this.actions.push(tempAction);
        if (tempAction == 'draw') {
            if (this.redoHistiry.length > 0) {
                this.history.push(this.redoHistiry.pop());
                for (var i = this.historyIndex; i < this.history.length; i++) {
                    var polyline = this.history[i];
                    var startX = polyline.points[0].x;
                    var startY = polyline.points[0].y;
                    for (var _i = 0, _a = polyline.points; _i < _a.length; _i++) {
                        var point = _a[_i];
                        this.draw(startX, startY, point.x, point.y, polyline.width, polyline.color);
                        startX = point.x;
                        startY = point.y;
                    }
                }
                this.historyIndex++;
            }
        }
        else {
            if (this.redoTextHistory.length > 0) {
                this.textHistory.push(this.redoTextHistory.pop());
                for (var i = this.textHistoryIndex; i < this.textHistory.length; i++) {
                    var writing = this.textHistory[i];
                    var ctx = this.canvasElement.getContext('2d');
                    ctx.font = writing.font;
                    ctx.fillStyle = writing.color;
                    ctx.fillText(writing.text, writing.x, writing.y);
                }
                this.textHistoryIndex++;
            }
        }
    };
    return CanvasDraw;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])('myCanvas'),
    __metadata("design:type", Object)
], CanvasDraw.prototype, "canvas", void 0);
CanvasDraw = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'canvas-draw',template:/*ion-inline-start:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/components/canvas-draw/canvas-draw.html"*/'<ion-toolbar id="top-toolbar">\n    <ion-buttons left>\n        <button icon-only ion-button (click)="onEnableDraw()">\n            <ion-icon [style.color]="currentColor" name="brush"></ion-icon>\n        </button>\n        <button icon-only ion-button (click)="onAddText()">\n            <b [style.color]="currentColor">Text</b>\n        </button>\n        <button icon-only ion-button (click)="onDisableDraw()">\n            <ion-icon name="hand"></ion-icon>\n        </button>\n        <button icon-only ion-button (click)="onSelectColor()">\n            <ion-icon name="color-palette"></ion-icon>\n        </button>\n        <button icon-only ion-button (click)="onSelectSize()">\n            <b>Size</b>\n        </button>\n        <button icon-only ion-button (click)="undo()">\n            <b>Undo</b>\n        </button>\n        <button icon-only ion-button (click)="redo()">\n            <b>Redo</b>\n        </button>\n    </ion-buttons>\n</ion-toolbar>\n  \n <canvas #myCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event.touches[0].pageX, $event.touches[0].pageY)" (touchend)="touchStop()"></canvas>\n  \n <ion-toolbar id="bottom-toolbar">\n    <ion-buttons left>\n        <button color="dark" ion-button icon-only (click)="clearCanvas()"><ion-icon name="trash"></ion-icon></button>\n    </ion-buttons>\n</ion-toolbar>'/*ion-inline-end:"/Users/wcweng/Documents/Github/ionic3-collaborative-drawing/src/components/canvas-draw/canvas-draw.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], CanvasDraw);

//# sourceMappingURL=canvas-draw.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polyline; });
var Polyline = (function () {
    function Polyline(color, width) {
        this.points = [];
        this.color = color;
        this.width = width;
    }
    return Polyline;
}());

//# sourceMappingURL=polyline.model.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map