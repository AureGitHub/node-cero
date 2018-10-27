(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nofound-nofound-module"],{

/***/ "./src/app/nofound/nofound.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nofound/nofound.component.ts ***!
  \**********************************************/
/*! exports provided: NofoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NofoundComponent", function() { return NofoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NofoundComponent = /** @class */ (function () {
    function NofoundComponent() {
    }
    NofoundComponent.prototype.ngOnInit = function () {
    };
    NofoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nofound',
            template: "\n    <p>\n      Nofound!\n    </p>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], NofoundComponent);
    return NofoundComponent;
}());



/***/ }),

/***/ "./src/app/nofound/nofound.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nofound/nofound.module.ts ***!
  \*******************************************/
/*! exports provided: NofoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NofoundModule", function() { return NofoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nofound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nofound.component */ "./src/app/nofound/nofound.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _nofound_component__WEBPACK_IMPORTED_MODULE_2__["NofoundComponent"]
    }
];
var NofoundModule = /** @class */ (function () {
    function NofoundModule() {
    }
    NofoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_nofound_component__WEBPACK_IMPORTED_MODULE_2__["NofoundComponent"]]
        })
    ], NofoundModule);
    return NofoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=nofound-nofound-module.js.map