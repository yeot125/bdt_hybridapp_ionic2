webpackJsonp([14],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, mrResult, http, alert, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mrResult = mrResult;
        this.http = http;
        this.alert = alert;
        this.sanitizer = sanitizer;
        this.testList = [
            { key: "떡볶이", value: 16 },
            { key: "부리또", value: 15 },
            { key: "피자", value: 14 },
            { key: "치킨", value: 13 },
            { key: "꼬치", value: 12 },
            { key: "훈제오리", value: 11 },
            { key: "닭갈비", value: 10 },
            { key: "햄버거", value: 9 },
            { key: "스테이크", value: 8 },
            { key: "쌀국수", value: 7 },
            { key: "타코야끼", value: 6 },
            { key: "오코노미야끼", value: 5 },
            { key: "장어덮밥", value: 4 },
            { key: "제육덮밥", value: 3 },
            { key: "연어", value: 2 },
            { key: "참치회", value: 1 },
        ];
        this.testImgURL = [];
        this.imgURL = [];
        this.splash = true;
        this.tab = document.querySelector('.tabbar');
        this.pairs = mrResult.getMRJobResult();
        this.http.get('assets/food_list/food_list.json').map(function (res) { return res.json(); })
            .subscribe(function (res) {
            for (var i = 0; i < _this.testList.length; i++) {
                for (var j = 0; j < res.length; j++) {
                    if (_this.testList[i].key == res[j].name) {
                        _this.testImgURL[i] = (res[j].url);
                        break;
                    }
                }
            }
        });
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tab.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            _this.tab.style.display = 'flex';
        }, 2000);
    };
    ListPage.prototype.clickImg = function (i) {
        var popUp = this.alert.create({
            title: this.testList[i].key,
            message: this.sanitizer.bypassSecurityTrustHtml("<p><span name=\"thumbs-up\" style=\"display:inline-block;font-family:Ionicons;\" class=\"icon icon-md ion-md-thumbs-up\"></span>" + this.testList[i].value + "</p><p><img src=\"" + this.testImgURL[i] + "\"/></p>"),
            buttons: ['OK']
        });
        popUp.present();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/list/list.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\':\'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/splash_icon.png">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n<ion-header>\n  <ion-navbar color="nav-tab">\n    <ion-title>리스트</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8>\n        <img src="{{testImgURL[0]}}" id="no1" (click)="clickImg(0)"/>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col col-12>\n            <img src="{{testImgURL[7]}}" (click)="clickImg(7)"/>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n           <img src="{{testImgURL[8]}}" (click)="clickImg(8)"/>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    \n    <ion-row>\n      <ion-col>\n        <img src="{{testImgURL[12]}}" (click)="clickImg(12)"/>\n      </ion-col>\n      <ion-col col-8>\n        <img src="{{testImgURL[1]}}" (click)="clickImg(1)"/>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <img src="{{testImgURL[2]}}" (click)="clickImg(2)"/>\n      </ion-col>\n      <ion-col>\n        <img src="{{testImgURL[3]}}" (click)="clickImg(3)"/>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <img src="{{testImgURL[9]}}" (click)="clickImg(9)"/>\n      </ion-col>\n      <ion-col>\n        <img src="{{testImgURL[10]}}" (click)="clickImg(10)"/>\n      </ion-col>\n      <ion-col>\n        <img src="{{testImgURL[11]}}" (click)="clickImg(11)"/>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col>\n        <img src="{{testImgURL[4]}}" (click)="clickImg(4)"/>\n      </ion-col>\n      <ion-col>\n        <img src="{{testImgURL[5]}}" (click)="clickImg(5)"/>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-6>\n        <img src="{{testImgURL[6]}}" (click)="clickImg(6)"/>\n      </ion-col>\n      <ion-col col-3>\n        <img src="{{testImgURL[13]}}" (click)="clickImg(13)"/>\n      </ion-col>\n      <ion-col col-3>\n        <img src="{{testImgURL[14]}}" (click)="clickImg(14)"/>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__["a" /* MrResultProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
    }
    MapPage.prototype.setCurrentPosition = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.map.setCenter(new google.maps.LatLng(res.coords.latitude, res.coords.longitude));
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", Object)
], MapPage.prototype, "map", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar color="nav-tab">\n    <ion-title>\n      Map\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <map #map>\n  </map>\n  <ion-fab right bottom>\n      <button ion-fab mini color="#58ACFA" (click)=\'setCurrentPosition()\'><ion-icon name="locate"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailPage = (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n       푸드트럭 정의와 기준\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>▶푸드트럭 정의</h2>\n  <p>\n    합법 절차를 거쳐 화물자동차 등을 이동용 음식판매 차량(푸드트럭)으로 튜닝하고, 푸드트럭이 영업 가능한 장소를 구해 시/군/구청에 식품접객업(휴게음식점업 또는 제과점업)으로 영업 신고한 후에 정상적으로 영업하는 것을 말합니다.\n  </p>\n  <p class="blue">\n    ※ \'휴게음식점업\'은 음료/아이스크림/분식 등을 판매하는 경우를, \'제과점업\'은 빵/떡/과자 등을 판매하는 경우를 말함.\n  </p>\n  <h2>▶푸드트럭 기준</h2>\n  <p>\n    - (차량) 경소형 화물자동차로 조리장 높이는 1.5m, 면적은 0.5㎡이상이고 액화석유가스 완성검사를 받은 차량\n  </p>\n  <p>\n    - (장소) 유원/관광시설, 체육시설, 도시공원, 하천, 학교, 고속국도졸음쉼터, 국유공유재산 및 \'지자체 조례로 정하는 시설\'\n  </p>\n  <p class="blue">\n    ※ 지자체 조례에 따라 국가, 지자체, 공공기관이 주최하는 행사에서 일시운영 가능\n  </p>\n</ion-content>'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail21Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail21Page = (function () {
    function Detail21Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail21Page;
}());
Detail21Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail21',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail21/detail21.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>최초영업시 영업신고절차</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h4>▶영업신고전 필요 절차</h4>\n<p>\n  영업자 모집공고를 확인하고 사업자로 선전된 후, 자동차구조변경, 액화석유가스 안전검사, 위생교육, 건강진단 등의 사전 절차를 밟아야 합니다.\n</p>\n<h4>▶영업신고</h4>\n<p>\n  영업장소 계약체결 및 자동차구조변경이 완료된 상태에서 영업장소 관할 관청 위생부서에 위생교육이수증, 건강진단결과서, 액화석유가스 사용시설 완성검사 증명서, 자동차 등록증, 푸드트럭 영업장소 체결 관련 서류 등 구비서류를 첨부하여 제출해야 합니다.\n</p>\n<p class="blue">\n  ※ 휴게음식점으로 신청할 경우 민원24를 통한 영업신고도 가능합니다.\n</p>\n<p class="blue">\n  ※ 영업신고 관련 자세한 정보는 식약처 블로그를 확인해주세요.\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail21/detail21.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail21Page);

//# sourceMappingURL=detail21.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail22Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail22Page = (function () {
    function Detail22Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail22Page;
}());
Detail22Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail22',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail22/detail22.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>이동영업시 신고절차</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p>\n  지역축제 등 최초 푸드트럭 신고 영업장소 이외의 장소에서 추가로 영업을 하고자 하는 경우, 이동장소의 관할 관청에 추가로 영업신고한 뒤 영업할 수 있습니다.\n</p>\n<p>\n  ▶ 필요 서류: 기존 영업신고증과 추가 장소를 사용할 수 있음을 증명하는 서류 (식품위생법 시행규칙 별표 15의2 참조)\n</p>\n<p class="blue">\n  ※ 영업장소를 추가하게 되면, 기존 업장과 추가 업장의 영업시간대를 다르게 해서 영업하거나 지역 단기축제 등 한시적인 행사장소에서 영업이 가능합니다.\n</p>\n<p class="blue">\n  ※ 영업장소를 추가하더라도 영업신고와 관련한 추가 수수료는 발생하지 않습니다.\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail22/detail22.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail22Page);

//# sourceMappingURL=detail22.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail23Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail23Page = (function () {
    function Detail23Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail23Page;
}());
Detail23Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail23',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail23/detail23.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>변경신고 및 폐업신고</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h4>▶변경신고</h4>\n<p>\n  영업자의 성명, 영업소의 명칭 또는 상호, 영업소의 소재지 및 면적 등이 변경되었을 때에는 관할 관청에 신고해야 합니다.\n</p>\n<h4>▶폐업신고</h4>\n<p>\n  폐업하고자 할 때는 관할 관청에 폐업신고를 해야 하며, 사업자등록증 폐업과는 별도로 식품영업에 대한 폐업신고를 해야 합니다.\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail23/detail23.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail23Page);

//# sourceMappingURL=detail23.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail21_detail21__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail22_detail22__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail23_detail23__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Detail2Page = (function () {
    function Detail2Page(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'num': '1',
                'title': '최초영업시 영업신고절차'
            },
            {
                'num': '2',
                'title': '이동영업시 신고절차'
            },
            {
                'num': '3',
                'title': '변경신고 및 폐업신고'
            }
        ];
    }
    Detail2Page.prototype.openDetailPage = function (item) {
        switch (item.num) {
            case "1":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__detail21_detail21__["a" /* Detail21Page */], { item: item });
                break;
            case "2":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail22_detail22__["a" /* Detail22Page */], { item: item });
                break;
            case "3":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__detail23_detail23__["a" /* Detail23Page */], { item: item });
                break;
        }
    };
    return Detail2Page;
}());
Detail2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail2',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail2/detail2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>영업신고 절차</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openDetailPage(item)" icon-start>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail2/detail2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], Detail2Page);

//# sourceMappingURL=detail2.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail31Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail31Page = (function () {
    function Detail31Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail31Page;
}());
Detail31Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail31',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail31/detail31.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>푸드트럭 튜닝절차</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h2>1. 튜닝 절차도</h2>\n<p>자동차 튜닝(구조 변경) 승인절차</p>\n<ion-img [width]="284" [height]="51.2" src="http://issue.korea.kr/data/editor/1609/10b88f0773b11bbb67bb6b57e5c29d77_1474942890_5067.jpg"></ion-img>\n<h2>2. 푸드트럭 영업자</h2>\n<h4>(1) 튜닝 승인 신청</h4>\n<p>\n  자동차소유자는 튜닝 전 교통안전공단에 이동형 음식판매자동차로 튜닝 승인(사전 서류심사) 신청\n</p>\n<p class="blue">\n  ※ 튜닝승인 신청시 튜닝승인신청서, 튜닝 전/후의 주요제원 대비표, 튜닝 전/후의 자동차외관도, 튜닝하고자 하는 구조/장치의 설계도 첨부\n</p>\n<h4>(2) 튜닝 검사 신청</h4>\n<p>\n  튜닝 승인을 받고 그에 따른 자동차정비사업자의 튜닝작업이 완료된 후 교통안전공단에 튜닝검사(자동차구조변경후 실물검사) 신청\n</p>\n<p>\n  - 튜닝승인을 받은 후 자동차정비사업자에게 튜닝작업과 그에 따른 정비를 받고, 승인받은 날로부터 45일 이내에 튜닝검사를 받아야 함\n</p>\n<p class="blue">\n  ※ 튜닝검사 신청시 자동차등록증, 튜닝승인서, 튜닝 전/후의 주요제원대비표, 튜닝 전/후의 자동차외관도, 튜닝하고자 하는 구조/장치의 설계도, 튜닝작업완료증명서 및 액화석유가스사용시설 완성검사증명서 첨부\n</p>\n<h2>3. 교통안전공단</h2>\n<h4>(1) 튜닝 승인</h4>\n<p>\n  일반형 화물자동차의 푸드트럭 튜닝 승인 신청을 받으면 자동차 안전기준 등 조건에 적합시 \'튜닝 승인서\' 발부\n</p>\n<p class="blue">\n  ※ 「자동차관리법」 제34조(자동차의 튜닝), 「자동차관리법 시행규칙」 제55조(승인대상 및 승인기준)\n</p>\n<p>\n  - 「자동차관리법 시행규칙」에 따른 경/소형 화물자동차일 것\n</p>\n<p>\n  - 조리 작업장의 높이는 1.5m(경차 1.2m)이상, 면적은 0.5㎡이상 확보할 것\n</p>\n<p>\n  - 액화석유가스의 안전관리 및 사업법령에서 정하는 가스설비의 설치/작동 상태는 안전기준 및 검사기준에 적합할 것(설치시에 한함) 등\n</p>\n<p class="blue">\n  ※ 가스시설 검사에 관한 자세한 사항은 \'한국가스안전공사\'에서 확인하세요.\n</p>\n<h4>(2) 튜닝 검사</h4>\n<p>\n  튜닝 작업이 완료된 차량에 대해 튜닝 검사 후 적합시 자동차등록증 \'③용도\'란에 \'이동식 음식 판매 자동차(LPG 사용 시설 완성검사필)\' 기재 후 발급\n</p>\n<p class="blue">\n  ※ LPG 사용시설이 없는 경우 \'이동식 음식 판매 자동차\'으로 기재\n</p>\n<h2>4. 자동차정비사업자</h2>\n<p>\n  튜닝 작업을 완료한 자동차 정비업자는 튜닝 작업완료증명서를 자동차 소유자에게 발급\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail31/detail31.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail31Page);

//# sourceMappingURL=detail31.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail32Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail32Page = (function () {
    function Detail32Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail32Page;
}());
Detail32Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail32',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail32/detail32.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>제작차량 등록절차</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h2>1. 제작차량의 개념 및 절차도</h2>\n<p>\n  화물차 구입 후 튜닝을 하는 경우가 아닌 최초부터 푸드트럭 또는 푸드트레일러로 제작된 차량(자동차 신규등록 이전 푸드트럭 또는 푸드트레일러로 제작하는 경우, 이하 \'제작차량\')\n</p>\n<p class="blue">\n  ※ 제작차량 승인절차\n</p>\n<ion-img [width]="284" [height]="51.2" src="http://issue.korea.kr/data/editor/1609/10b88f0773b11bbb67bb6b57e5c29d77_1474953170_5326.jpg"></ion-img>\n<h2>2. 세부내용</h2>\n<h4>- 기술검토 신청</h4>\n<p>\n  자동차제작자(자기인증능력이 없는 경우)는 교통안전공단(자동차안전연구원)에 제작차량기술검토(서류심사) 신청\n</p>\n<h4>- 제원통보</h4>\n<p>\n  교통안전공단은 기술검토 후 제작자에게 제원통보\n</p>\n<h4>- 안전검사 신청</h4>\n<p>\n  자동차제작자는 차량제작 후 교통안전공단에 안전검사(실물검사) 신청\n</p>\n<h4>- 안전검사</h4>\n<p>\n  교통안전공단은 안전검사 후 안전검사증 발급\n</p>\n<p class="blue">\n  ※ 최초 1대에 대해서 기술검토와 안전검사를 마친 차량과 동일한 차종의 경우 이후부터는 안전검사만 실시\n</p>\n<h4>- 차량등록</h4>\n<p>\n  제작차량 구입자는 안전검사증과 기타 자동차 등록관련 서류를 차량등록사업소에 제출하고 자동차등록증을 교부받음\n</p>\n<p class="blue">\n  ※ 제작시 LPG 사용시설을 함께 설치한 경우 자동차등록증 교부 이후 LPG 완성검사 실시, 제작 후 LPG 사용시설을 설치하는 경우 \'자동차튜닝\'절차를 따름\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail32/detail32.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail32Page);

//# sourceMappingURL=detail32.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail31_detail31__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail32_detail32__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Detail3Page = (function () {
    function Detail3Page(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'num': '1',
                'title': '푸드트럭 튜닝절차'
            },
            {
                'num': '2',
                'title': '제작차량 등록절차'
            }
        ];
    }
    Detail3Page.prototype.openDetailPage = function (item) {
        switch (item.num) {
            case "1":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__detail31_detail31__["a" /* Detail31Page */], { item: item });
                break;
            case "2":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail32_detail32__["a" /* Detail32Page */], { item: item });
                break;
        }
    };
    return Detail3Page;
}());
Detail3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail3',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail3/detail3.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>푸드트럭 차량 튜닝 및 등록</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openDetailPage(item)" icon-start>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail3/detail3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], Detail3Page);

//# sourceMappingURL=detail3.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Detail4Page = (function () {
    function Detail4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return Detail4Page;
}());
Detail4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail4',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/detail4/detail4.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>영업 위생수칙</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<h2>▶개인 위생관리</h2>\n<p>\n  영업에 종사하기 전에 영업자와 종업원은 장티푸스, 폐결핵, 전염성 피부질환(한센변 등) 항목에 대하여 연 1회 이상 건강진단을 받아야 합니다.\n  식품등의 제조/가공/조리 또는 포장에 직접 종사하는 사람은 위생모를 착용하는 등 개인위생을 철저히 관리해야 합니다.\n</p>\n<p>\n  ☞개인 위생관리 예시 및 권장사항\n</p>\n<p>\n  - 위생복(위생복 착용이 불가능한 경우 앞치마), 위생모, 위생화 착용\n</p>\n<p>\n  - 반지, 귀걸이, 시계 등의 장신구 착용 금지, 매니큐어는 지우고 손톱을 청결하게 관리\n</p>\n<p>\n  - 침이 튀지 않도록 입 가리개 착용과 위생장갑 착용 권장\n</p>\n<p>\n  - 조리 시작 전, 화장실 다녀온 후, 청소 및 돈계산 후 등에 손씻기 생활화\n</p>\n<h2>▶식품 위생관리</h2>\n<h4 class="blue"><식재료의 구매와 보관></h4>\n<p>\n  - 무신고, 무표시, 부패/변질된 원료 및 식품을 사용해서는 안됩니다.\n</p>\n<p>\n  - 유통기한이 경과된 원료 또는 완제품을 조리/판매의 목적으로 보관하거나 이를 음식품의 조리에 사용하면 안됩니다.\n</p>\n<p>\n  - 음식물 재료(원료)를 위생적으로 보관할 수 있는 시설을 구비, 식품 등의 원료 중 부패/변질이 되기 쉬운 것은 냉동/냉장시설에 보관해야 합니다.\n</p>\n<p>\n  - 적정온도 작동여부 등 식품 등의 기준 및 규격이 정하고 있는 보존 및 보관 기준에 적합하도록 시설을 관리해야 합니다.\n</p>\n<h4 class="blue"><식수 위생관리></h4>\n<p>\n  - 1일 영업시간에 사용할 충분한 양의 물을 저장할 수 있는 내구성이 있는 식수탱크를 구비해야합니다.\n</p>\n<p>\n  - 1일 영업시간에 발생할 수 있는 음식물 찌꺼기 등을 처리하기에 충분한 크기의 오물통 및 폐수탱크를 구비해야 합니다.\n</p>\n<p>\n  ☞폐기물 용기 등의 권장사항\n</p>\n<p>\n  - 폐수탱크의 용량은 식수탱크의 용량과 동일하거나 그 이상이 되도록 설치\n</p>\n<p>\n  - 폐기물 용기는 오물, 악취 등이 누출되지 않도록 뚜껑이 있고 내수성 재질로 되어 있어야 합니다.\n</p>\n<h4 class="blue"><식품의 조리/제공시 위생관리></h4>\n<p>\n  - 어류/육류/채소류를 취급하는 칼/도마는 각각 구분하여 사용해야 합니다.\n</p>\n<p>\n  - 수돗물이 아닌 지하수 등을 식수로 사용할 경우, 먹는물 수질검사 기관에서 검사를 받아 마시기에 적합하다고 인정되는 물을 사용해야합니다.\n</p>\n<p>\n  - 식품의 기준 및 규격 중 식품별 보존 및 유통기준에 적합한 온도가 유지될 수 있는 냉장시설 또는 냉동시설을 갖추어야 합니다.\n</p>\n<p>\n  ☞식품 제공 시 권장사항\n</p>\n<p>\n  - 손님의 주문이 있을 때 바로 조리하여 제공하고, 불가피하게 미리 조리하는 경우 2시간 이내에 소비될 수 있도록 권장\n</p>\n<p>\n  - 조리된 음식을 진열하는 경우 뚜껑이 있는 용기에 담아서 보관하며, 직사광선 등으로 인해 보관온도가 변화되지 않도록 주의\n</p>\n<h4 class="blue"><세척과 살균/소독 관리></h4>\n<p>\n  - 식품등의 제조/가공/조리에 직접 사용되는 기계/기구 및 음식기는 사용 후에 세척/살균하는 등 항상 청결하게 유지/관리해야 합니다.\n</p>\n<p>\n  - 조리에 사용되는 주방용구는 식품첨가물인 살균제 또는 열탕, 자외선살균 또는 전기살균의 방법으로 소독한 것을 사용해야 합니다.\n</p>\n<p>\n  - 동물의 내장을 조리한 경우에 이에 사용한 기계, 기규류 등을 세척하여 살균해야 합니다.\n</p>\n<h4 class="blue"><환경 위생관리></h4>\n<p>\n  - 식품등을 취급하는 원료보관실/제조가공실/조리실/포장실 등의 내부는 항상 청결하게 관리해야 합니다.\n</p>\n<p>\n  - 자연적으로 통풍이 가능한 구조가 아니라면, 충분한 환기를 시킬 수 있는 시설을 갖추어야 합니다.\n</p>\n<p>\n  ☞환경 위생관리 관련 권장사항\n</p>\n<p>\n  - 쓰레기 처리장, 오수처리장 등 오염물질 발생시설은 조리장에 영향을 미치지 않는 곳에 설치\n</p>\n<p>\n  - 빗물, 먼지, 곤충 등 이물질이 들어가지 않도록 천장과 벽면 등 폐쇄적 구조의 조리공간 권장\n</p>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/detail4/detail4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], Detail4Page);

//# sourceMappingURL=detail4.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreMenuInfoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoreMenuInfoListPage = (function () {
    function MoreMenuInfoListPage(navCtrl, navParams, http, mrResult) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.mrResult = mrResult;
        this.testList = [
            { key: "떡볶이", value: 16 },
            { key: "부리또", value: 15 },
            { key: "피자", value: 14 },
            { key: "치킨", value: 13 },
            { key: "꼬치", value: 12 },
            { key: "훈제오리", value: 11 },
            { key: "닭갈비", value: 10 },
            { key: "햄버거", value: 9 },
            { key: "스테이크", value: 8 },
            { key: "쌀국수", value: 7 },
            { key: "타코야끼", value: 6 },
            { key: "오코노미야끼", value: 5 },
            { key: "장어덮밥", value: 4 },
            { key: "제육덮밥", value: 3 },
            { key: "연어", value: 2 },
            { key: "참치회", value: 1 },
        ];
        this.pairs = mrResult.getMRJobResult();
        this.searched = this.testList;
    }
    MoreMenuInfoListPage.prototype.keyPressed = function (e) {
        var _this = this;
        this.searched = this.testList.filter(function (item) { return item.key.toLowerCase().includes(_this.filterKeyword.toLowerCase()); });
    };
    return MoreMenuInfoListPage;
}());
MoreMenuInfoListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-more-menu-info-list',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/more-menu-info-list/more-menu-info-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>메뉴 리스트 정보</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar \n  [(ngModel)]=\'filterKeyword\'\n  (ionInput)=\'keyPressed($event)\'\n  showCancelButton=\'true\'\n  placeholder=\'이름을 입력하시오.\'\n  ></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of searched">\n      <img src="{{item.url}}" />\n      <h2>{{ item.key }}</h2>\n      <p>{{ item.value }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/more-menu-info-list/more-menu-info-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__["a" /* MrResultProvider */]])
], MoreMenuInfoListPage);

//# sourceMappingURL=more-menu-info-list.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreMenuInfoChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoreMenuInfoChartPage = (function () {
    function MoreMenuInfoChartPage(navCtrl, navParams, http, mrResult) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.mrResult = mrResult;
        this.testList = [
            { key: "떡볶이", value: 16 },
            { key: "부리또", value: 15 },
            { key: "피자", value: 14 },
            { key: "치킨", value: 13 },
            { key: "꼬치", value: 12 },
            { key: "훈제오리", value: 11 },
            { key: "닭갈비", value: 10 },
            { key: "햄버거", value: 9 },
            { key: "스테이크", value: 8 },
            { key: "쌀국수", value: 7 },
            { key: "타코야끼", value: 6 },
            { key: "오코노미야끼", value: 5 },
            { key: "장어덮밥", value: 4 },
            { key: "제육덮밥", value: 3 },
            { key: "연어", value: 2 },
            { key: "참치회", value: 1 },
        ];
        this.pairs = mrResult.getMRJobResult();
        var str = JSON.stringify(this.testList);
        str = str.split("key").join("name");
        str = str.split("value").join("y");
        var converted = JSON.parse(str);
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                width: 300,
                height: 500,
            },
            title: {
                text: '음식 인기 통계'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: '좋아요',
                    colorByPoint: true,
                    data: converted
                }]
        };
    }
    return MoreMenuInfoChartPage;
}());
MoreMenuInfoChartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-more-menu-info-chart',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/details/more-menu-info-chart/more-menu-info-chart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>통계 차트</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <chart [options]="chartOptions" type="chart" id="chart"></chart>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/details/more-menu-info-chart/more-menu-info-chart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__providers_mr_result_mr_result__["a" /* MrResultProvider */]])
], MoreMenuInfoChartPage);

//# sourceMappingURL=more-menu-info-chart.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_detail_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_detail2_detail2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_detail3_detail3__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_detail4_detail4__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_more_menu_info_list_more_menu_info_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_more_menu_info_chart_more_menu_info_chart__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfoPage = (function () {
    function InfoPage(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'num': '1',
                'title': '합법 푸드트럭이란?'
            },
            {
                'num': '2',
                'title': '영업신고 절차'
            },
            {
                'num': '3',
                'title': '푸드트럭 차량 튜닝 및 등록'
            },
            {
                'num': '4',
                'title': '푸드트럭 영업 위생수칙'
            },
            {
                'num': '5',
                'title': '푸드트럭 모집공고'
            },
            {
                'num': '6',
                'title': '메뉴 리스트 더 보기'
            },
            {
                'num': '7',
                'title': '통계 차트 보기'
            }
        ];
    }
    InfoPage.prototype.openDetailPage = function (item) {
        switch (item.num) {
            case "1":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__details_detail_detail__["a" /* DetailPage */], { item: item });
                break;
            case "2":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__details_detail2_detail2__["a" /* Detail2Page */], { item: item });
                break;
            case "3":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__details_detail3_detail3__["a" /* Detail3Page */], { item: item });
                break;
            case "4":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_5__details_detail4_detail4__["a" /* Detail4Page */], { item: item });
                break;
            case "5":
                window.open('http://www.moi.go.kr/frt/bbs/type001/commonSelectBoardList.do?bbsId=BBSMSTR_000000000267', '_blank', 'closebuttoncation=Close');
                break;
            case "6":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_6__details_more_menu_info_list_more_menu_info_list__["a" /* MoreMenuInfoListPage */], { item: item });
                break;
            case "7":
                this.nav.push(__WEBPACK_IMPORTED_MODULE_7__details_more_menu_info_chart_more_menu_info_chart__["a" /* MoreMenuInfoChartPage */], { item: item });
                break;
        }
    };
    return InfoPage;
}());
InfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-info',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/info/info.html"*/'<ion-header>\n\n  <ion-navbar color="nav-tab">\n    <ion-title>info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="openDetailPage(item)" icon-start>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/info/info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], InfoPage);

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/detail/detail.module": [
		297,
		13
	],
	"../pages/details/detail2/detail2.module": [
		301,
		12
	],
	"../pages/details/detail21/detail21.module": [
		298,
		11
	],
	"../pages/details/detail22/detail22.module": [
		299,
		10
	],
	"../pages/details/detail23/detail23.module": [
		300,
		9
	],
	"../pages/details/detail3/detail3.module": [
		304,
		8
	],
	"../pages/details/detail31/detail31.module": [
		302,
		7
	],
	"../pages/details/detail32/detail32.module": [
		303,
		6
	],
	"../pages/details/detail4/detail4.module": [
		305,
		5
	],
	"../pages/details/more-menu-info-chart/more-menu-info-chart.module": [
		307,
		4
	],
	"../pages/details/more-menu-info-list/more-menu-info-list.module": [
		306,
		3
	],
	"../pages/info/info.module": [
		308,
		2
	],
	"../pages/list/list.module": [
		295,
		1
	],
	"../pages/map/map.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceProvider = (function () {
    function PlaceProvider(http) {
        this.http = http;
    }
    PlaceProvider.prototype.getPlaceLocation = function () {
        var url = 'http://210.114.91.91:22893/json/foodtruck_status';
        return this.http.get(url);
    };
    PlaceProvider.prototype.getAvailablePlace = function () {
        var url = 'http://210.114.91.91:22893/json/available_place';
        return this.http.get(url);
    };
    return PlaceProvider;
}());
PlaceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PlaceProvider);

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.listTab = __WEBPACK_IMPORTED_MODULE_1__list_list__["a" /* ListPage */];
        this.mapTab = __WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */];
        this.infoTab = __WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/pages/tabs/tabs.html"*/'<ion-tabs color="nav-tab">\n  <ion-tab [root]="listTab" tabTitle="List" tabIcon="list"></ion-tab>\n  <ion-tab [root]="mapTab" tabTitle="Map" tabIcon="map"></ion-tab>\n  <ion-tab [root]="infoTab" tabTitle="Info" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_map_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_place_place__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_mr_result_mr_result__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_details_more_menu_info_chart_more_menu_info_chart__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_details_more_menu_info_list_more_menu_info_list__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_detail_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_detail2_detail2__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_detail3_detail3__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_detail4_detail4__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_details_detail21_detail21__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_details_detail22_detail22__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_details_detail23_detail23__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_detail31_detail31__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_details_detail32_detail32__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_map_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_info_info__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_Highcharts__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_Highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_Highcharts__);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_details_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_details_detail2_detail2__["a" /* Detail2Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_details_detail3_detail3__["a" /* Detail3Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_detail4_detail4__["a" /* Detail4Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_details_detail21_detail21__["a" /* Detail21Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_details_detail22_detail22__["a" /* Detail22Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_details_detail23_detail23__["a" /* Detail23Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_details_detail31_detail31__["a" /* Detail31Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_details_detail32_detail32__["a" /* Detail32Page */],
            __WEBPACK_IMPORTED_MODULE_6__components_map_map__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_details_more_menu_info_chart_more_menu_info_chart__["a" /* MoreMenuInfoChartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_details_more_menu_info_list_more_menu_info_list__["a" /* MoreMenuInfoListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail21/detail21.module#Detail21PageModule', name: 'Detail21Page', segment: 'detail21', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail22/detail22.module#Detail22PageModule', name: 'Detail22Page', segment: 'detail22', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail23/detail23.module#Detail23PageModule', name: 'Detail23Page', segment: 'detail23', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail2/detail2.module#Detail2PageModule', name: 'Detail2Page', segment: 'detail2', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail31/detail31.module#Detail31PageModule', name: 'Detail31Page', segment: 'detail31', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail32/detail32.module#Detail32PageModule', name: 'Detail32Page', segment: 'detail32', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail3/detail3.module#Detail3PageModule', name: 'Detail3Page', segment: 'detail3', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/detail4/detail4.module#Detail4PageModule', name: 'Detail4Page', segment: 'detail4', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/more-menu-info-list/more-menu-info-list.module#MoreMenuInfoListPageModule', name: 'MoreMenuInfoListPage', segment: 'more-menu-info-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/more-menu-info-chart/more-menu-info-chart.module#MoreMenuInfoChartPageModule', name: 'MoreMenuInfoChartPage', segment: 'more-menu-info-chart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_27_angular2_highcharts__["ChartModule"].forRoot(__WEBPACK_IMPORTED_MODULE_28_Highcharts__)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_23__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_info_info__["a" /* InfoPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_details_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_details_detail2_detail2__["a" /* Detail2Page */],
            __WEBPACK_IMPORTED_MODULE_15__pages_details_detail3_detail3__["a" /* Detail3Page */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_detail4_detail4__["a" /* Detail4Page */],
            __WEBPACK_IMPORTED_MODULE_17__pages_details_detail21_detail21__["a" /* Detail21Page */],
            __WEBPACK_IMPORTED_MODULE_18__pages_details_detail22_detail22__["a" /* Detail22Page */],
            __WEBPACK_IMPORTED_MODULE_19__pages_details_detail23_detail23__["a" /* Detail23Page */],
            __WEBPACK_IMPORTED_MODULE_20__pages_details_detail31_detail31__["a" /* Detail31Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_details_detail32_detail32__["a" /* Detail32Page */],
            __WEBPACK_IMPORTED_MODULE_11__pages_details_more_menu_info_chart_more_menu_info_chart__["a" /* MoreMenuInfoChartPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_details_more_menu_info_list_more_menu_info_list__["a" /* MoreMenuInfoListPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_place_place__["a" /* PlaceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_mr_result_mr_result__["a" /* MrResultProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_place__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = (function () {
    function MapComponent(place, geolocation) {
        this.place = place;
        this.geolocation = geolocation;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.place.getPlaceLocation().map(function (l_data) { return l_data.json(); }).subscribe(function (l_data) {
            _this.placeLocation = l_data;
            _this.geolocation.getCurrentPosition().then(function (res) {
                _this.map = new google.maps.Map(document.getElementById('map'), { zoom: 14,
                    center: { lat: res.coords.latitude, lng: res.coords.longitude },
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    streetViewControl: false
                });
                google.maps.event.addListener(_this.map, 'click', function () {
                    if (_this.prev_infowindow) {
                        _this.prev_infowindow.close();
                    }
                });
            }).then(function () {
                _this.place.getAvailablePlace().map(function (a_data) { return a_data.json(); }).subscribe(function (a_data) {
                    _this.available_place = a_data;
                    var _loop_1 = function (place) {
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            position: new google.maps.LatLng(place.lat, place.lng),
                            animation: google.maps.Animation.DROP,
                            icon: 'assets/icon/truck_marker.png'
                        });
                        var infowin = new google.maps.InfoWindow({
                            content: '<h4>' + place.name + '</h4>' +
                                '<p>인허가일자: ' + place.date + '</p>' +
                                '<p>주소: ' + place.address + '</p>'
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            if (_this.prev_infowindow) {
                                _this.prev_infowindow.close();
                            }
                            infowin.open(_this.map, marker);
                            _this.prev_infowindow = infowin;
                        });
                    };
                    for (var _i = 0, _a = _this.placeLocation; _i < _a.length; _i++) {
                        var place = _a[_i];
                        _loop_1(place);
                    }
                    var _loop_2 = function (place) {
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            position: new google.maps.LatLng(place.lat, place.lng),
                            animation: google.maps.Animation.DROP,
                            icon: 'assets/icon/available_truck.png'
                        });
                        var infowin = new google.maps.InfoWindow({
                            content: '<h4>' + place.name + '</h4>' +
                                '<p>이용 가능 대수: ' + place.max + '</p>' +
                                '<p>주소: ' + place.address + '</p>'
                        });
                        google.maps.event.addListener(marker, 'click', function () {
                            if (_this.prev_infowindow) {
                                _this.prev_infowindow.close();
                            }
                            infowin.open(_this.map, marker);
                            _this.prev_infowindow = infowin;
                        });
                    };
                    for (var _b = 0, _c = _this.available_place; _b < _c.length; _b++) {
                        var place = _c[_b];
                        _loop_2(place);
                    }
                });
            }).then(function () {
            });
        });
    };
    MapComponent.prototype.setCenter = function (pos) {
        this.map.setCenter(pos);
        this.map.setZoom(14);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map',template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/components/map/map.html"*/'<div id=\'map\'></div>'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/components/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_place_place__["a" /* PlaceProvider */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
], MapComponent);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(211);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.show();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/psj/ionic2/bdt_project/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/psj/ionic2/bdt_project/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MrResultProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MrResultProvider = (function () {
    function MrResultProvider(http) {
        this.http = http;
    }
    MrResultProvider.prototype.getMRJobResult = function () {
        var url = 'http://210.114.91.91:22893/json/mr-result';
        return this.http.get(url);
    };
    return MrResultProvider;
}());
MrResultProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MrResultProvider);

//# sourceMappingURL=mr-result.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map