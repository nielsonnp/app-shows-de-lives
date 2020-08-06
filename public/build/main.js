webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_de_lives_lista_de_lives__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LivesPage = /** @class */ (function () {
    function LivesPage(navCtrl, push) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.push = push;
        this.sexta = [];
        this.sexta = [
            {
                "show": "https://www.youtube.com/watch?v=qyEaOzt5shg",
                "img": "https://i.ytimg.com/vi/qyEaOzt5shg/maxresdefault.jpg",
                "nome": "Thiago Jhonathan",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=1RpH5IwTr70&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/1RpH5IwTr70/maxresdefault.jpg",
                "nome": "Sambô",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/watch?v=KgktXwRmonA",
                "img": "https://i.ytimg.com/vi/KgktXwRmonA/maxresdefault.jpg",
                "nome": "Manu",
                "data": "18H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=jNyhmF3NhzI&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/jNyhmF3NhzI/maxresdefault.jpg",
                "nome": "Rangell e Batucada",
                "data": "18H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=gaIeX1ucg-8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/gaIeX1ucg-8/maxresdefault.jpg",
                "nome": "Vicente Nery & Amigos",
                "data": "19H",
            },
            {
                "show": "https://www.youtube.com/watch?v=NE4jS6We8c0&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/NE4jS6We8c0/maxresdefault.jpg",
                "nome": "Curtindo a Vida",
                "data": "19H",
            },
            {
                "show": "https://www.youtube.com/watch?v=5COUKZ65SIo&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/5COUKZ65SIo/maxresdefault.jpg",
                "nome": "Sérgio Lopes",
                "data": "19H",
            },
            {
                "show": "https://www.youtube.com/watch?v=3YSxofG6BZo&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/3YSxofG6BZo/maxresdefault.jpg?v=5efdfa9b&quot",
                "nome": "Gil Mendes",
                "data": "19H",
            },
            {
                "show": "https://www.youtube.com/watch?v=QFVowgBNASc",
                "img": "https://i.ytimg.com/vi/QFVowgBNASc/maxresdefault.jpg",
                "nome": "Parangolé",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=IMeCW17Xes0",
                "img": "https://i.ytimg.com/vi/IMeCW17Xes0/maxresdefault.jpg",
                "nome": "Victor Bogo",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=9m98lB2n0PY&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/9m98lB2n0PY/maxresdefault.jpg",
                "nome": "Wanda Sá & Nelson Faria",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=LsnTGgylkUY",
                "img": "https://i.ytimg.com/vi/LsnTGgylkUY/maxresdefault.jpg",
                "nome": "DH8",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=R6kW4hyOPxk",
                "img": "https://i.ytimg.com/vi/R6kW4hyOPxk/maxresdefault.jpg",
                "nome": "Allydi e RFélix",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=8WQRAkIAkZU",
                "img": "https://i.ytimg.com/vi/8WQRAkIAkZU/maxresdefault.jpg",
                "nome": "Live do Bem",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=hpDnf0GMQn8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/hpDnf0GMQn8/maxresdefault.jpg",
                "nome": "Karol Conka",
                "data": "21H",
            },
            {
                "show": "https://www.youtube.com/CeJOficial",
                "img": "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/106361898_3520248458004290_4151798891847521305_o.jpg?_nc_cat=105&_nc_sid=9267fe&_nc_eui2=AeG2_xjEPyP8K8sQ8kzciI44GDSioyGuVaIYNKKjIa5Von7wuKfobxnDJNxH8VxMDGvLsgKGh9tFOANpdjVIOD-A&_nc_oc=AQkm8U7Tuga1f8JXLmGGPp3mz1VaN7ruJC_3f730YzZ2TPMns826eP1d_qEU1n1DWHo&_nc_ht=scontent-mia3-2.xx&oh=f5640581fd788d57706550412b8e8b47&oe=5F22F194",
                "nome": "Carlos & Jader",
                "data": "22H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=DIEyRrz_Yt8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/DIEyRrz_Yt8/maxresdefault.jpg",
                "nome": "Joelma",
                "data": "22H45",
            },
        ];
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log('Bem Vindo');
                var options = {
                    android: {},
                    ios: {
                        alert: 'true',
                        badge: true,
                        sound: 'false'
                    },
                    windows: {},
                    browser: {
                        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                    }
                };
                var pushObject = _this.push.init(options);
                pushObject.on('notification').subscribe(function (notification) {
                    alert(notification.message);
                });
                pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
                pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
            }
            else {
                console.log('Não tem permissão');
            }
        });
    }
    LivesPage.prototype.goToListaDeLives = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lista_de_lives_lista_de_lives__["a" /* ListaDeLivesPage */]);
    };
    LivesPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LivesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lives',template:/*ion-inline-start:"C:\div\lives\src\pages\lives\lives.html"*/'<ion-header id="cabecalho">\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name=\'logo-youtube\'></ion-icon>\n      Shows de Lives\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page2">\n\n\n  <div id="destaque-hoje" style="margin-left: -8px; margin-top: -20px; margin-right: -18px;">\n    <img src="https://i.ytimg.com/vi/DIEyRrz_Yt8/maxresdefault.jpg" alt="">\n  </div>\n\n\n  <h1 class="titulo-dias">Hoje - 03/07/2020</h1>\n\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of sexta">\n      <div id="efeito-aovivo">\n        <img style="height: 184px;" src="{{live.img}}" />\n      </div>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <!--\n          <h4>\n            {{live.nome2}}\n          </h4>\n          -->\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n            <button id="acessar" ion-button clear small color="danger" icon-start>\n              <ion-icon name=\'logo-youtube\'></ion-icon>\n              Acessar\n            </button>\n          </a>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n  </ion-scroll>\n\n  <br>\n  <br>\n\n  <div id="content-home" style="width: 100%; height: auto; text-align: center; color: #04B486;">\n    \n    <div id="parceiros">\n      <a href="https://www.novapalmeiraoficial.com.br/" target="_blank">\n        <img id="blog" src="assets/img/blog.jpeg">\n      </a>\n      A informação com agilidade e responsabilidade\n    </div>\n    <p>Desenvolvido por: Ranyelson Dantas</p>\n  </div>\n\n  <!--\n  <ion-fab bottom left>\n    <button ion-fab style="background-color:yellow; color: black;">Logo</button>\n    <ion-fab-list side="top">\n      <button id="fab01" ion-button>Entrega em<br>Campina Grande/PB<br>\n        <font style="padding-left: 8px;" color="red">Faça seu pedido!</font>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n  -->\n  \n\n\n\n \n\n  <script src="/__/firebase/7.14.1/firebase-app.js"></script>\n  <script src="/__/firebase/init.js"></script>\n</ion-content>'/*ion-inline-end:"C:\div\lives\src\pages\lives\lives.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */]])
    ], LivesPage);
    return LivesPage;
}());

//# sourceMappingURL=lives.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\div\lives\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Lista de Lives\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n\n \n\n\n</ion-content>\n'/*ion-inline-end:"C:\div\lives\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SobrePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"C:\div\lives\src\pages\sobre\sobre.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n\n  <div id="img-sobre">\n    <img src="../../assets/img/internet.png" alt="">\n  </div>\n\n  <div id="conteudo">\n    <p>Shows de Lives tem o intuito de facilitar\n      o acesso as lives que os artistas musicais estão fazendo em suas plataformas digitais.</p>\n\n    <p>Para agilizar na busca de sua live,\n      organizamos tudo em um só lugar!</p>\n\n    <Div id="rodape">\n\n      \n      <p>Parceiros:</p>\n      <div>\n      <a href="https://www.novapalmeiraoficial.com.br/" target="_blank">\n        <img id="blog" src="assets/img/blog.jpeg">\n      </a>\n\n      \n\n    </div>\n\n\n      <p>Desenvolvido por:<br>ranyelsondantas@gmail.com</p>\n    </Div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\div\lives\src\pages\sobre\sobre.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lives_lives__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_de_lives_lista_de_lives__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lives_lives__["a" /* LivesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lista_de_lives_lista_de_lives__["a" /* ListaDeLivesPage */], __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_lives_lives__["a" /* LivesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lista_de_lives_lista_de_lives__["a" /* ListaDeLivesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_lista_de_lives_lista_de_lives__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
//para abrir o tabs-controller
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_lista_de_lives_lista_de_lives__["a" /* ListaDeLivesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\div\lives\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\div\lives\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lives_lives__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_de_lives_lista_de_lives__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sobre_sobre__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsControllerPage = /** @class */ (function () {
    function TabsControllerPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__lives_lives__["a" /* LivesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__lista_de_lives_lista_de_lives__["a" /* ListaDeLivesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__sobre_sobre__["a" /* SobrePage */];
    }
    TabsControllerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-controller',template:/*ion-inline-start:"C:\div\lives\src\pages\tabs-controller\tabs-controller.html"*/'<ion-tabs id="tabsController-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" id="tabsController-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Lives" tabIcon="videocam" id="tabsController-tab2"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\div\lives\src\pages\tabs-controller\tabs-controller.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsControllerPage);
    return TabsControllerPage;
}());

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeLivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaDeLivesPage = /** @class */ (function () {
    function ListaDeLivesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.segunda = [];
        this.terca = [];
        this.quarta = [];
        this.quinta = [];
        this.sexta = [];
        this.sabado = [];
        this.domingo = [];
        this.segunda = [];
        this.terca = [];
        this.quarta = [];
        this.quinta = [];
        this.sexta = [
            {
                "show": "https://www.youtube.com/watch?v=-ledIB9mEn4",
                "img": "https://i.ytimg.com/vi/-ledIB9mEn4/maxresdefault.jpg",
                "nome": "Universo Alegria",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/watch?v=xgiTRcFM8xM&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/xgiTRcFM8xM/maxresdefault.jpg?v=5f07375f&quot",
                "nome": "Os 3 do Nordeste",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/watch?v=MA-Ot87cW_A&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/MA-Ot87cW_A/maxresdefault.jpg",
                "nome": "Roberta Sá",
                "data": "19H",
            },
            {
                "show": "https://www.youtube.com/watch?v=M6S7bDTJ5_w&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/M6S7bDTJ5_w/maxresdefault.jpg",
                "nome": "Claudia Leitte",
                "data": "19H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=n6WMrXIdztw&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/n6WMrXIdztw/maxresdefault.jpg",
                "nome": "Vini & Lucas",
                "data": "19H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=qB3q09eY-Ao&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/qB3q09eY-Ao/maxresdefault.jpg",
                "nome": "Cabaré do Brega",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=uSUSmVCAj2o&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/uSUSmVCAj2o/maxresdefault.jpg?v=5f070414&quot",
                "nome": "Lucimar",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=G3sJvdLfbqY&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/G3sJvdLfbqY/maxresdefault.jpg",
                "nome": "Samyra Show",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/watch?v=4L1d4tCQUjg&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/4L1d4tCQUjg/maxresdefault.jpg",
                "nome": "Silvanno Salles",
                "data": "20H",
            },
            {
                "show": "https://www.youtube.com/user/GrupoRNoficial",
                "img": "https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/106143832_3375297212481746_4864877902207799906_n.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_eui2=AeFrKTwxeqE30aszuagspd2laVOWgnfjct5pU5aCd-Ny3gvEnz6lhKWmlaC_dykVv9EcJZnPyb7rgE2fe0rwLBp5&_nc_oc=AQlGyTkxBWQYTwtLVQjFT0CmWmYKK_CDCBE23XRv056yf4OV86QmIh4Fe7MBFWTcYh0&_nc_ht=scontent.fjdo10-1.fna&oh=88187692b04bfd23e0a5a0456c3edc46&oe=5F272F35",
                "nome": "Roupa Nova",
                "data": "21H",
            },
            {
                "show": "https://www.youtube.com/watch?v=R6Jpd7g79jQ&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/iqlE7bwNRwA/maxresdefault.jpg",
                "nome": "Sandro DJ",
                "data": "21H",
            },
            {
                "show": "https://www.youtube.com/watch?v=rut79MEIZBg&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/rut79MEIZBg/maxresdefault.jpg",
                "nome": "Edson Lima & Daniel Dial",
                "data": "21H",
            },
            {
                "show": "https://www.youtube.com/watch?v=PgJZb8-Ooek&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/PgJZb8-Ooek/maxresdefault.jpg?v=5f062a2a&quot",
                "nome": "Zezé de Camargo & Luciano",
                "data": "21H30",
            },
        ];
        this.sabado = [
            {
                "show": "https://www.youtube.com/watch?v=TCQlIlVPguI&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/TCQlIlVPguI/maxresdefault.jpg",
                "nome": "Targino Gondim",
                "data": "14H",
            },
            {
                "show": "https://www.youtube.com/channel/UCM90FaSFuIXwj6-oZMrbNsA",
                "img": "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.0-9/s960x960/106998137_3274013125975065_1432169805571487098_o.jpg?_nc_cat=111&_nc_sid=9e2e56&_nc_eui2=AeGwfIn4_CXpBasH0_K1OQksH0c3cqP8T_YfRzdyo_xP9p3lGuxHAfNaSKgxsCd1lBqoloIzpxRl5imi-odaLfWL&_nc_oc=AQk3V2Y7vIvbtbIhA--p82Cqr6hK6KM_MmTI3cs_FkgCMHZZ2YgMALB-JIgFnYVNDgE&_nc_ht=scontent.fjdo10-2.fna&_nc_tp=7&oh=0905665714f9bb411234162449e96611&oe=5F2E776F",
                "nome": "Mastruz com Leite",
                "data": "15H",
            },
            {
                "show": "https://www.youtube.com/watch?v=xMXSeD0egrc&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/xMXSeD0egrc/maxresdefault.jpg?v=5ef64b03&quot",
                "nome": "Douglas Sampa",
                "data": "15H",
            },
            {
                "show": "https://www.youtube.com/watch?v=1Q8qwm-8U-Q&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/1Q8qwm-8U-Q/maxresdefault.jpg",
                "nome": "Raí Saia Rodada",
                "data": "16H",
            },
            {
                "show": "https://www.youtube.com/watch?v=8-i19MEbf0Y&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/8-i19MEbf0Y/maxresdefault.jpg",
                "nome": "Mania de Ser",
                "data": "16H",
            },
            {
                "show": "https://www.youtube.com/watch?v=EomKOwcjnHU&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/EomKOwcjnHU/maxresdefault.jpg",
                "nome": "Samba de Mesa",
                "data": "16H",
            },
            {
                "show": "https://www.youtube.com/watch?v=RN8MMHHPmlo&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/RN8MMHHPmlo/maxresdefault.jpg",
                "nome": "Mauricio Maniere",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=nxcRO-37HSI&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/nxcRO-37HSI/maxresdefault.jpg",
                "nome": "Cesar & Paulinho",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=-5HmZs8Yxy0&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/-5HmZs8Yxy0/maxresdefault.jpg",
                "nome": "Katinguelê",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=oFBO_Hx61xA&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/oFBO_Hx61xA/maxresdefault.jpg",
                "nome": "Thalles Roberto",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=E22Y5VUb9Fc&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/E22Y5VUb9Fc/maxresdefault.jpg",
                "nome": "Amizade Serta",
                "data": "17H30",
            },
            {
                "show": "https://www.youtube.com/watch?v=7ec5v99lHAY&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/7ec5v99lHAY/maxresdefault.jpg",
                "nome": "Zizi Possi",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/watch?v=AlrFBjNh7Zw",
                "img": "https://i.ytimg.com/vi/AlrFBjNh7Zw/maxresdefault.jpg?v=5f07e522&quot",
                "nome": "Forrozão Baby Som",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/watch?v=DeJYsX4NDcs&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/DeJYsX4NDcs/maxresdefault.jpg",
                "nome": "Wesley Safadão & Xand",
                "data": "20H",
            },
        ];
        this.domingo = [
            {
                "show": "https://www.youtube.com/watch?v=P8nd73JhiE8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/P8nd73JhiE8/maxresdefault.jpg",
                "nome": "Diogo Nogueira",
                "data": "12H",
            },
            {
                "show": "https://www.youtube.com/watch?v=GvzV8_yUET8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/GvzV8_yUET8/maxresdefault.jpg",
                "nome": "Serginho da Portela",
                "data": "12H30",
            },
            {
                "show": "https://www.youtube.com/channel/UCo7jyJquwgqqF6PtgvPFUFQ",
                "img": "https://firebasestorage.googleapis.com/v0/b/showsdelives.appspot.com/o/rannyere.JPG?alt=media&token=afcc330d-94ba-499f-8a1e-11e57e5ee438",
                "nome": "Ranniery Gomes",
                "data": "14H",
            },
            {
                "show": "https://www.youtube.com/watch?v=1docM2r10LM&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/1docM2r10LM/maxresdefault.jpg",
                "nome": "Juninho Thybau",
                "data": "14H",
            },
            {
                "show": "https://www.youtube.com/watch?v=N9hzD5C72Xk&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/N9hzD5C72Xk/maxresdefault.jpg",
                "nome": "Seu Maxixe",
                "data": "17H",
            },
            {
                "show": "https://www.youtube.com/watch?v=ek_RAnvjL-8&feature=youtu.be",
                "img": "https://i.ytimg.com/vi/ek_RAnvjL-8/maxresdefault.jpg?v=5efe2433&quot",
                "nome": "Nerd Rock",
                "data": "18H",
            },
            {
                "show": "https://www.youtube.com/user/BandaEncantus1",
                "img": "https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.0-9/s960x960/107257545_3105156416228957_2840607175679100737_o.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_eui2=AeEPblKGnAqhx1-m5ey9gcvgzOsOMO-ZS2jM6w4w75lLaMrFbpWw7YNRjEJkyeRWkbeCuYAuBu5swJW3iKCMNDuu&_nc_oc=AQkqXezYT-EJBopImLKAJz7CrCo51xY9FOGJSFp1izjNQYAWj3RSAoEuiY6pOvq5WrA&_nc_ht=scontent.fjdo10-1.fna&_nc_tp=7&oh=a4374f1694da953c7abdfa64eabfb6d2&oe=5F2A3B79",
                "nome": "Banda Encantus",
                "data": "20H",
            },
        ];
    }
    ListaDeLivesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-de-lives',template:/*ion-inline-start:"C:\div\lives\src\pages\lista-de-lives\lista-de-lives.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name=\'logo-youtube\'></ion-icon>\n      Shows de Lives\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n\n  <div class="w3-content w3-section" style="max-width:500px">\n    <img class="mySlides" src="https://i.ytimg.com/vi/1Q8qwm-8U-Q/maxresdefault.jpg" style="width:100%">\n    <img class="mySlides" src="https://i.ytimg.com/vi/-5HmZs8Yxy0/maxresdefault.jpg" style="width:100%">\n    <img class="mySlides" src="https://i.ytimg.com/vi/DeJYsX4NDcs/maxresdefault.jpg" style="width:100%">\n  </div>\n\n <div id="conteudo-home">\n\n  <!--\n  <h1 class="titulo-dias">Segunda Feira - 06/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of segunda">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h4>\n            {{live.nome2}}\n          </h4>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  -->\n  \n  <!--\n  <h1 class="titulo-dias">Terça Feira - 07/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of terca">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  -->\n\n  <!--\n  <h1 class="titulo-dias">Quarta Feira - 08/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of quarta">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  -->\n\n  \n\n  <!--\n  <h1 class="titulo-dias">Quinta Feira - 09/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of quinta">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  -->\n  \n  \n  \n  <h1 class="titulo-dias">Sexta Feira - 10/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of sexta">\n      <img  style="height: 184px;"  src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  \n\n  \n  <h1 class="titulo-dias">Sábado - 11/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of sabado">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n  \n\n  \n  <h1 class="titulo-dias">Domingo - 12/07/2020</h1>\n  <ion-scroll scrollX style="height:300px;">\n    <ion-card class="scroll-item" *ngFor="let live of domingo">\n      <img style="height: 184px;" src="{{live.img}}"/>\n      <ion-card-content>\n        <div>\n          <h2>\n            <ion-icon name=\'musical-notes\'></ion-icon>\n            {{ live.nome }}\n          </h2>\n          <h3>\n            <ion-icon name=\'time\'></ion-icon>\n            {{ live.data }}\n          </h3>\n        </div>\n        <div id="aovivo">\n          <a href="https://api.whatsapp.com/send?text=https://showsdelives.web.app" id="whatsapp-share-btt" target="_blank" ></a>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding>\n        <ion-col>\n          <a href="{{live.show}}" target="_blank">\n          <button id="acessar" ion-button clear small color="danger" icon-start>\n            <ion-icon name=\'logo-youtube\'></ion-icon>\n            Acessar\n          </button>\n        </a>\n        </ion-col>         \n      </ion-row>\n    </ion-card>\n  </ion-scroll>\n\n  \n  \n \n  <br>\n  <br>\n\n  <div id="rodape">\n    <p>Desenvolvido por: Ranyelson Dantas</p>\n  </div>\n  \n  <br>\n  <br>\n\n</div>\n\n<!--\n<ion-fab bottom left>\n  <button ion-fab style="background-color:yellow; color: black;"><img style="max-width: 190%;" src="assets/img/extra.png"></button>\n  <ion-fab-list side="top">\n    <button id="fab01" ion-button>Entrega em<br>Nova Palmeira/PB<br>\n      <font style="padding-left: 8px"><a href="https://api.whatsapp.com/send?1=pt_BR&phone=5583988216777" target="_blank">Faça seu pedido<br>Aqui!</a></font>\n    </button>\n  </ion-fab-list>\n</ion-fab>\n-->\n\n<ion-fab bottom right>\n  <button ion-fab style="background-color:white; color: black; padding: 6px;\n  border-radius: 4px;"><img style="width: 40px; height: 40px;" src="assets/img/blog.jpeg"></button>\n  <ion-fab-list side="left">\n    <button id="fab02" ion-button>\n      <a href="https://www.novapalmeiraoficial.com.br/" target="_blank">Acesse aqui!</a>\n    </button>\n  </ion-fab-list>\n</ion-fab>\n\n\n</ion-content>'/*ion-inline-end:"C:\div\lives\src\pages\lista-de-lives\lista-de-lives.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ListaDeLivesPage);
    return ListaDeLivesPage;
}());

//# sourceMappingURL=lista-de-lives.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map