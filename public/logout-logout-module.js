(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-module"],{

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutdComponent", function() { return LogoutdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/status.service */ "./src/app/services/status.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutdComponent = /** @class */ (function () {
    function LogoutdComponent(ServiceStatus, router) {
        this.ServiceStatus = ServiceStatus;
        this.router = router;
    }
    LogoutdComponent.prototype.desconectar = function () {
        this.ServiceStatus.logout();
        this.router.navigateByUrl('/home');
    };
    LogoutdComponent.prototype.ngOnInit = function () {
    };
    LogoutdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: "\n  <div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Logout</h1>      \n    <p>Atenci\u00F3n: se va a desconectar de la aplicaci\u00F3n.</p>\n\n    <button type=\"button\" class=\"btn btn-danger\" (click) = \"desconectar()\">\n    <span class=\"glyphicon glyphicon-search\"></span> Desconectar \n  </button>\n\n  </div>\n  \n</div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_services_status_service__WEBPACK_IMPORTED_MODULE_1__["ServiceStatus"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutdComponent);
    return LogoutdComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/logout/logout.module.ts ***!
  \*****************************************/
/*! exports provided: LogoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModule", function() { return LogoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.component */ "./src/app/logout/logout.component.ts");
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
        component: _logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutdComponent"]
    }
];
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutdComponent"]]
        })
    ], LogoutModule);
    return LogoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=logout-logout-module.js.map