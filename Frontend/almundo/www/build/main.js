webpackJsonp([0],{

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
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
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalleHotel_detalleHotel__ = __webpack_require__(363);
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
    function HomePage(navCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.hoteles = [];
        this.hoteles2 = [];
        this.hoteles3 = [];
        this.estrellas = { todas: false, cinco: false, cuatro: false, tres: false, dos: false, una: false };
        this.consultarHoteles();
    }
    // Metodo para consultar los hoteles que tiene la pagina
    HomePage.prototype.consultarHoteles = function () {
        var _this = this;
        this.hoteles = this.http.get('http://localhost:8001/hoteles');
        this.hoteles.subscribe(function (data) {
            console.log('hoteles ', data.json());
            _this.hoteles2 = data.json();
            _this.hoteles3 = data.json();
        });
    };
    // Metodo para filtrar los hoteles por palabra clave con la variable "name"
    HomePage.prototype.filtrarHoteles = function () {
        var _this = this;
        this.hoteles2 = this.hoteles3.filter(function (location) {
            return location.name.toLowerCase().indexOf(_this.nombre.toLowerCase()) > -1;
        });
    };
    // Metodo para filtrar los hoteles por la cantidad de estrellas
    HomePage.prototype.filtrarHotelesEstrella = function (int) {
        if (int == 1) {
            this.estrellas.cinco = false;
            this.estrellas.cuatro = false;
            this.estrellas.tres = false;
            this.estrellas.dos = false;
            this.estrellas.una = false;
            this.hoteles2 = this.hoteles3;
        }
        else if (int == 2) {
            this.estrellas.todas = false;
            this.filtracion();
        }
        /* this.hoteles2 = this.hoteles3.filter((location) => {
           return location.stars.toLowerCase().indexOf(this.nombre.toLowerCase()) > -1;
         });*/
    };
    HomePage.prototype.filtracion = function () {
        var _this = this;
        this.hoteles = [];
        this.hoteles2 = this.hoteles3;
        var valor;
        if (this.estrellas.cinco == true) {
            valor = 5;
            this.hoteles3.forEach(function (element) {
                if (element.stars == valor) {
                    _this.hoteles.push(element);
                }
            });
        }
        if (this.estrellas.cuatro == true) {
            valor = 4;
            this.hoteles3.forEach(function (element) {
                if (element.stars == valor) {
                    _this.hoteles.push(element);
                }
            });
        }
        if (this.estrellas.tres == true) {
            valor = 3;
            this.hoteles3.forEach(function (element) {
                if (element.stars == valor) {
                    _this.hoteles.push(element);
                }
            });
        }
        if (this.estrellas.dos == true) {
            valor = 2;
            this.hoteles3.forEach(function (element) {
                if (element.stars == valor) {
                    _this.hoteles.push(element);
                }
            });
        }
        if (this.estrellas.una == true) {
            valor = 1;
            this.hoteles3.forEach(function (element) {
                if (element.stars == valor) {
                    _this.hoteles.push(element);
                }
            });
        }
        this.hoteles2 = this.hoteles;
    };
    HomePage.prototype.verHotel = function (hotel) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__detalleHotel_detalleHotel__["a" /* detalleHomePage */], { hotel: hotel });
        profileModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="ionTitle" style="background-image: url(\'assets/imgs/logo-almundo.svg\') !important; background-repeat: no-repeat; background-position-x: 1%;">.\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row wrap>\n      <ion-col col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-20>\n        <ion-row [hidden]="devWidth < 576" style="background-color:white;margin:2%;padding:2%;">\n          <p style="text-align: left;font-size:12pt;color:black">Filtros</p>\n        </ion-row>\n        <ion-row style="background-color:white;margin:2%;padding:2%;">\n\n          <ion-col col-6 col-xl-8 col-lg-12 col-md-6 col-sm-4 col-xs-3>\n            <div>\n              <p style="color:#08088A;font-size:10pt;">\n                <ion-icon name="search" item-star large></ion-icon> Nombre del hotel</p>\n            </div>\n          </ion-col>\n\n          <ion-col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-6 col-xs-3>\n            <div style="display: flex;justify-content: space-between;">\n              <ion-input style="color:#000000;font-size:10pt;" type="text" [(ngModel)]="nombre" placeholder="ingrese el nombre del hotel"></ion-input>\n              <button (click)="filtrarHoteles()" ion-button style="background:#08088A;text-align:center;">\n                Aceptar\n              </button>\n            </div>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row style="background-color:white;margin:2%;padding:2%;">\n\n          <div>\n            <p style="color:#08088A;font-size:10pt;">\n              <ion-icon name="star" item-star large></ion-icon> Estrellas</p>\n          </div>\n          <div>\n            <ion-item style="font-size:10pt;">\n              <ion-label>Todas las estrellas</ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(1)" [(ngModel)]="estrellas.todas"></ion-checkbox>\n            </ion-item>\n\n            <ion-item style="font-size:10pt;">\n              <ion-label>\n                <ion-icon name="star" item-star> </ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n              </ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(2)" [(ngModel)]="estrellas.cinco"></ion-checkbox>\n            </ion-item>\n\n            <ion-item style="font-size:10pt;">\n              <ion-label>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n              </ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(2)" [(ngModel)]="estrellas.cuatro"></ion-checkbox>\n            </ion-item>\n\n            <ion-item style="font-size:10pt;">\n              <ion-label>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n              </ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(2)" [(ngModel)]="estrellas.tres"></ion-checkbox>\n            </ion-item>\n\n            <ion-item style="font-size:10pt;">\n              <ion-label>\n                <ion-icon name="star" item-star></ion-icon>\n                <ion-icon name="star" item-star></ion-icon>\n              </ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(2)" [(ngModel)]="estrellas.dos"></ion-checkbox>\n            </ion-item>\n\n            <ion-item style="font-size:10pt;">\n              <ion-label>\n                <ion-icon name="star" item-star></ion-icon>\n              </ion-label>\n              <ion-checkbox (click)="filtrarHotelesEstrella(2)" [(ngModel)]="estrellas.una"></ion-checkbox>\n            </ion-item>\n\n          </div>\n        </ion-row>\n\n\n      </ion-col>\n\n      <ion-col col-12 col-xl-9 col-lg-9 col-md-8 col-sm-12 col-xs-20>\n        <ion-row style="background-color:white;margin:1%;" *ngFor="let hotel of hoteles2">\n\n          <ion-col col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-3>\n            <img style="height: 93%;width: 93%;" src="assets/imgs/hoteles/{{hotel.image}}">\n          </ion-col>\n\n          <ion-col col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-3>\n\n            <h2 style="font-size:12pt;color:#08088A">{{hotel.name}}</h2>\n            <rating [(ngModel)]="hotel.stars" readOnly="true" max="5" starIconName="star" nullable="false">\n            </rating>\n            <ion-col *ngFor="let amenitie of hotel.amenities">\n              <img style="height: 12%;width: 10%;" src="assets/imgs/amenities/{{amenitie}}.svg">\n            </ion-col>\n\n\n          </ion-col>\n\n          <ion-col style="text-align: center;  border-left-style: dotted;border-left-color: #BDBDBD;border-left-width: 1.5px;" col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-3>\n            <p style="text-align: center;font-size:11pt;color:black">Precio por noche por habitación</p>\n            <p style="text-align: center;font-size:15pt;color:orange">ARS {{hotel.price}}</p>\n            <button (click)="verHotel(hotel)" ion-button style="background:#08088A;text-align:center;width:80%;font-size:15pt;">\n              Ver hotel\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detalleHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapa_mapa__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var detalleHomePage = /** @class */ (function () {
    function detalleHomePage(navCtrl, http, params, modalCtrl, view) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.lat = 6.153791;
        this.lng = -75.374354;
        this.hotel = this.params.data.hotel;
    }
    detalleHomePage.prototype.verMapa = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__mapa_mapa__["a" /* mapaPage */]);
        profileModal.present();
    };
    detalleHomePage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    detalleHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detalleHotel',template:/*ion-inline-start:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\detalleHotel\detalleHotel.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title style="background-image: url(\'assets/imgs/logo-almundo.svg\') !important; background-repeat: no-repeat; background-position-x: 10%;\n\n          background-size: 40%; font-size: 5rem;">.\n\n        </ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only style="background-color: transparents;font-size: 2rem;" (click)="closeModal()">\n\n                <ion-icon style="color:white;" name="md-arrow-back"></ion-icon>\n\n            </button>\n\n\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/hotel.png">\n\n            </ion-avatar>\n\n            <h2 style="font-size:13pt;color:#08088A">{{hotel.name}}</h2>\n\n            <p style="font-size:15pt;color:orange">Precio Noche: ARS {{hotel.price}} </p>\n\n        </ion-item>\n\n\n\n        <img src="assets/imgs/hoteles/{{hotel.image}}">\n\n\n\n        <ion-card-content>\n\n            <p>Este encantador hotel boutique de 4 estrellas es el refugio ideal para estancias de negocios y relax en el centro\n\n                , a escasos minutos de la zonas principales y accesible a pie desde la zona comercial. Ubicado en un típico\n\n                edificio victoriano recientemente reformado, disfruta de un apacible entorno en una zona residencial con\n\n                vistas privilegiadas. Un oasis de tranquilidad para desconectar del frenético ritmo de la ciudad. Su fachada\n\n                de estilo clásico inglés contrasta con el diseño moderno y minimalista de su interior, decorado con una fascinante\n\n                colección de mosaicos romanos. Las instalaciones del hotel cuentan con 140 elegantes habitaciones completamente\n\n                renovadas, ambientes íntimos orientados al confort y cuidados hasta el más mínimo detalle. Con gimnasio,\n\n                sauna, salón para reuniones y dos espacios gastronómicos únicos, que brindan la oportunidad de saborear una\n\n                cocina creativa de raíces españolas en el centro de la capital británica\n\n            </p>\n\n        </ion-card-content>\n\n        <div style="margin:5%;">\n\n            <h2 style="font-size:13pt;color:#08088A">Estrellas</h2>\n\n            <rating style="font-size:16pt;" [(ngModel)]="hotel.stars" readOnly="true" max="5" starIconName="star" nullable="false">\n\n            </rating>\n\n        </div>\n\n\n\n        <div style="margin:5%;">\n\n            <h2 style="font-size:13pt;color:#08088A">Servicios</h2>\n\n\n\n        </div>\n\n        <ion-row style="margin:5%;">\n\n\n\n            <ion-col *ngFor="let amenitie of hotel.amenities">\n\n                <img style="height: 70%;width: 70%;" src="assets/imgs/amenities/{{amenitie}}.svg">\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n\n\n        <ion-row>\n\n            <ion-col>\n\n                <button style="color: #08088A;" ion-button icon-start clear small>\n\n                    <ion-icon name="thumbs-up"></ion-icon>\n\n                    <div>12 Me gusta</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button style="color: #08088A;" ion-button icon-start clear small>\n\n                    <ion-icon name="text"></ion-icon>\n\n                    <div>4 Comentarios</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <span style="color:#ffffff" item-left>Ver en el mapa</span>\n\n                <button (click)="verMapa()" style="background-color: #08088A;color:white" ion-button icon-left item-end>\n\n                    <ion-icon name="pin"></ion-icon>\n\n                    Ubicacion\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\detalleHotel\detalleHotel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], detalleHomePage);
    return detalleHomePage;
}());

//# sourceMappingURL=detalleHotel.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var mapaPage = /** @class */ (function () {
    function mapaPage(navCtrl, params, view) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.view = view;
        this.lat = -12.0907516;
        this.lng = -77.0291872;
    }
    mapaPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    mapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mapa',template:/*ion-inline-start:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\mapa\mapa.html"*/'<ion-header>\n\n    <ion-navbar >\n\n        <ion-title style="background-image: url(\'assets/imgs/logo-almundo.svg\') !important; background-repeat: no-repeat; background-position-x: 10%;\n\n            background-size: 40%; font-size: 5rem;">.\n\n        </ion-title>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only style="background-color: transparents;font-size: 2rem;" (click)="closeModal()">\n\n                <ion-icon style="color:white;" name="md-arrow-back"></ion-icon>\n\n            </button>\n\n\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <agm-map style="height:550px;" [latitude]="lat" [longitude]="lng" [zoom]="12">\n\n        <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>\n\n    </agm-map>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\pages\mapa\mapa.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], mapaPage);
    return mapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_detalleHotel_detalleHotel__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__ = __webpack_require__(364);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalleHotel_detalleHotel__["a" /* detalleHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* mapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyC39Fhd4YOCtW6cesfzshL0CD9lNZbICV4'
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_detalleHotel_detalleHotel__["a" /* detalleHomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mapa_mapa__["a" /* mapaPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\N56J\Desktop\alMundo\Frontend\almundo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map