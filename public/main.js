(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");









var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'employees', component: _employees_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesComponent"] },
    { path: 'positions', component: _positions_component__WEBPACK_IMPORTED_MODULE_5__["PositionsComponent"] },
    { path: 'employee/:_id', component: _employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
    { path: 'position/:_id', component: _position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*********************************************************************************
*  WEB422 - Assignment 05
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy. No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or
*  distributed to other students.
*
*  Name: Alan Vuong____________ Student ID: 149004178_____ Date: March 22nd, 2019
*********************************************************************************/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content.component */ "./src/app/content.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
                _positions_component__WEBPACK_IMPORTED_MODULE_11__["PositionsComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _position_component__WEBPACK_IMPORTED_MODULE_14__["PositionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/*!***************************************!*\
  !*** ./src/app/content.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content.component.html":
/*!****************************************!*\
  !*** ./src/app/content.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-border\"> </div>\n\n<router-outlet></router-outlet>\n\n<div class=\"color-border\"> </div>"

/***/ }),

/***/ "./src/app/content.component.ts":
/*!**************************************!*\
  !*** ./src/app/content.component.ts ***!
  \**************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "https://powerful-castle-47445.herokuapp.com/";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url + "employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put(this.url + "employee/" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + "employee-raw/" + id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = "https://powerful-castle-47445.herokuapp.com/";
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url + "positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put(this.url + "position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url + "position/" + id);
    };
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee.component.css":
/*!****************************************!*\
  !*** ./src/app/employee.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/employee.component.html":
/*!*****************************************!*\
  !*** ./src/app/employee.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employee: {{employee.FirstName}} {{employee.LastName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': FirstName.errors}\">\n              <label class=\"control-label\" for=\"FirstName\">First Name:</label>\n              <input #FirstName=\"ngModel\" [(ngModel)]=\"employee.FirstName\" class=\"form-control\" id=\"FirstName\"\n                type=\"text\" name=\"FirstName\" required />\n              <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': LastName.errors}\">\n              <label class=\"control-label\" for=\"LastName\">Last Name:</label>\n              <input #LastName=\"ngModel\" [(ngModel)]=\"employee.LastName\" class=\"form-control\" id=\"LastName\" type=\"text\"\n                name=\"LastName\" required />\n              <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"Position\">Position:</label>\n              <select [(ngModel)]=\"employee.Position\" class=\"form-control\" id=\"Position\" name=\"Position\">\n                <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': SalaryBonus.errors}\">\n              <label class=\"control-label\" for=\"SalaryBonus\">Salary Bonus</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">$</span>\n                <input type=\"number\" #SalaryBonus=\"ngModel\" [(ngModel)]=\"employee.SalaryBonus\" class=\"form-control\"\n                  id=\"SalaryBonus\" type=\"text\" name=\"SalaryBonus\" required />\n                <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Salary Bonus is\n                  Required</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': AddressStreet.errors}\">\n              <label class=\"control-label\" for=\"AddressStreet\">Address (Street):</label>\n              <input #AddressStreet=\"ngModel\" [(ngModel)]=\"employee.AddressStreet\" class=\"form-control\"\n                id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" required />\n              <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Address (Street) is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': AddressCity.errors}\">\n              <label class=\"control-label\" for=\"AddressCity\">Address (City):</label>\n              <input #AddressCity=\"ngModel\" [(ngModel)]=\"employee.AddressCity\" class=\"form-control\" id=\"AddressCity\"\n                type=\"text\" name=\"AddressCity\" required />\n              <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">Address (City) is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': AddressState.errors}\">\n              <label class=\"control-label\" for=\"AddressState\">Address (State):</label>\n              <input #AddressState=\"ngModel\" [(ngModel)]=\"employee.AddressState\" class=\"form-control\" id=\"AddressState\"\n                type=\"text\" name=\"AddressState\" required />\n              <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Address (State) is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': AddressZip.errors}\">\n              <label class=\"control-label\" for=\"AddressZip\">Address (Zip Code):</label>\n              <input #AddressZip=\"ngModel\" [(ngModel)]=\"employee.AddressZip\" class=\"form-control\" id=\"AddressZip\"\n                type=\"text\" name=\"AddressZip\" required />\n              <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">Address (Zip) is\n                Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': PhoneNum.errors}\">\n              <label class=\"control-label\" for=\"PhoneNum\">Phone Number:</label>\n              <input #PhoneNum=\"ngModel\" [(ngModel)]=\"employee.PhoneNum\" class=\"form-control\" id=\"PhoneNum\" type=\"text\"\n                name=\"PhoneNum\"\n                pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\" />\n              <span class=\"help-block\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.pattern\">Phone Number must be properly\n                formatted</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': Extension.errors}\">\n              <label class=\"control-label\" for=\"Extension\">Extension:</label>\n              <input type=\"number\" #Extension=\"ngModel\" [(ngModel)]=\"employee.Extension\" class=\"form-control\"\n                id=\"Extension\" type=\"text\" name=\"Extension\" required />\n              <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Extension is\n                Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': HireDate.errors}\">\n              <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n              <input #HireDate=\"ngModel\" [(ngModel)]=\"employee.HireDate\" class=\"form-control\" id=\"HireDate\"\n                name=\"HireDate\" type=\"text\" value=\"HireDate\" readonly />\n              <span class=\"help-block\" *ngIf=\"HireDate.errors && HireDate.errors.required\">Hire Date is\n                Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" [disabled]=\"!f.valid\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    <strong>Success!</strong> {{employee.FirstName}} {{employee.LastName}}'s information was successfully saved.\n  </div>\n  <div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n    <strong>Error!</strong> {{employee.FirstName}} {{employee.LastName}}'s information could not be saved.\n  </div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/employee.component.ts":
/*!***************************************!*\
  !*** ./src/app/employee.component.ts ***!
  \***************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(empService, actRoute, posService) {
        this.empService = empService;
        this.actRoute = actRoute;
        this.posService = posService;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubscription = this.actRoute.params.subscribe(function (params) {
            // Populate "employee" property
            _this.employeeSubscription = _this.empService.getEmployee(params['_id']).subscribe(function (emp) {
                _this.employee = emp[0];
            });
            // Populate "positions" property
            _this.getPositionsSubcription = _this.posService.getPositions().subscribe(function (pos) {
                _this.positions = pos;
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.saveEmployeeSubscription = this.empService.saveEmployee(this.employee).subscribe(function () {
            // First callback (success)
            _this.successMessage = true;
            setTimeout(function () { _this.successMessage = false; }, 2500);
        }, function () {
            // Second callback (failure)
            _this.failMessage = true;
            setTimeout(function () { _this.failMessage = false; }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubcription) {
            this.getPositionsSubcription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/*!*****************************************!*\
  !*** ./src/app/employees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/employees.component.html":
/*!******************************************!*\
  !*** ./src/app/employees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\"\n        placeholder=\"Search Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensedtable-hover\">\n          <thead>\n            <tr>\n              <th>Full Name</th>\n              <th>Address</th>\n              <th>Phone Number</th>\n              <th>Hire Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let employee of filteredEmployees\" (click)=\"routeEmployee(employee._id)\">\n              <td>{{employee.FirstName}} {{employee.LastName}}</td>\n              <td>{{employee.AddressStreet}}. {{employee.AddressState}}, {{employee.AddressCity}}.\n                {{employee.AddressZip}}</td>\n              <td>{{employee.PhoneNum}} ext: {{employee.Extension}}</td>\n              <td>{{employee.HireDate | date }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees.component.ts":
/*!****************************************!*\
  !*** ./src/app/employees.component.ts ***!
  \****************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.employeeService.getEmployees().subscribe(function (employees) {
            _this.employees = employees.sort((function (a, b) { return a.FirstName.localeCompare(b.FirstName); }));
            _this.filteredEmployees = _this.employees;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        this.filteredEmployees = this.employees.filter(function (data) {
            return data.FirstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                data.LastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
                data.Position.PositionName.toLowerCase().includes(event.target.value.toLowerCase());
        });
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        this.getEmployeesSub.unsubscribe();
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/*!**************************************!*\
  !*** ./src/app/footer.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer.component.html":
/*!***************************************!*\
  !*** ./src/app/footer.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2019 Alan Vuong (WEB422). Design by <a href=\"http://www.templategarden.com\"\n          rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"https://www.facebook.com/\" target=\"_blank\"></a>\n          <a class=\"fa fa-twitter social-icon\" href=\"https://twitter.com/alti_v?lang=en\" target=\"_blank\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"https://www.linkedin.com/in/alan-vuong-08579860/\" target=\"_blank\"></a> <a\n            class=\"fa fa-google-plus social-icon\" href=\"https://plus.google.com/discover\" target=\"_blank\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer-->"

/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section { padding: 70px 0; }\r\n.no-margin { margin: 0; padding: 0; }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsZUFBZSxFQUFFO0FBQzNCLGFBQWEsU0FBUyxFQUFFLFVBQVUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24geyBwYWRkaW5nOiA3MHB4IDA7IH1cclxuLm5vLW1hcmdpbiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" style=\"background-image: url(/assets/images/slider/bg1.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-fire-extinguisher\"></i> API Demo</span></h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                  laoreet</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg2.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                  laoreet</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n\n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg3.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt\n                  laoreet</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n    </div>\n    <!--/.carousel-inner-->\n  </div>\n  <!--/.carousel-->\n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\"\n    href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a>\n</section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique\n        bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\" routerLink=\"/employees\"></i>\n            <h2>Employees</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-6-->\n\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\" routerLink=\"/positions\"></i>\n            <h2>Positions</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-6-->\n      </div>\n      <!--/.services-->\n    </div>\n    <!--/.row-->\n  </div>\n  <!--/.container-->\n</section>\n<!--/#feature-->"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/*!***********************************!*\
  !*** ./src/app/nav.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle\n            navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\"><i class=\"fa fa-fire-extinguisher\"></i> Alan Vuong (API Demo)</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container-->\n  </nav>\n  <!--/nav-->\n\n</header>\n<!--/header-->"

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/*!**********************************************!*\
  !*** ./src/app/page-not-found.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">Whoops! Looks like there's nothing here...</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.component.css":
/*!****************************************!*\
  !*** ./src/app/position.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/position.component.html":
/*!*****************************************!*\
  !*** ./src/app/position.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Position: Position Name</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.\n  </p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': PositionName.errors}\">\n              <label class=\"control-label\" for=\"PositionName\">Position Name:</label>\n              <input #PositionName=\"ngModel\" [(ngModel)]=\"position.PositionName\" class=\"form-control\" id=\"PositionName\"\n                type=\"text\" name=\"PositionName\" required />\n              <span class=\"help-block\" *ngIf=\"PositionName.errors && PositionName.errors.required\">Position Name is\n                Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': PositionDescription.errors}\">\n              <label class=\"control-label\" for=\"PositionDescription\">Description:</label>\n              <textarea #PositionDescription=\"ngModel\" [(ngModel)]=\"position.PositionDescription\" class=\"form-control\"\n                id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\" required></textarea>\n              <span class=\"help-block\"\n                *ngIf=\"PositionDescription.errors && PositionDescription.errors.required\">Position Description is\n                Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" [disabled]=\"!f.valid\"/>\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    <strong>Success!</strong> Position: {{position.PositionName}} was successfully saved.\n  </div>\n  <div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n    <strong>Error!</strong> Position: {{position.PositionName}} could not be saved.\n  </div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/position.component.ts":
/*!***************************************!*\
  !*** ./src/app/position.component.ts ***!
  \***************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionComponent = /** @class */ (function () {
    function PositionComponent(posService, actRoute) {
        this.posService = posService;
        this.actRoute = actRoute;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubscription = this.actRoute.params.subscribe(function (params) {
            // Populate "position" property
            _this.positionSubscription = _this.posService.getPosition(params['_id']).subscribe(function (pos) {
                _this.position = pos[0];
            });
        });
    };
    PositionComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.savePositionSubscription = this.posService.savePosition(this.position).subscribe(function () {
            // First callback (success)
            _this.successMessage = true;
            setTimeout(function () { _this.successMessage = false; }, 2500);
        }, function () {
            // Second callback (failure)
            _this.failMessage = true;
            setTimeout(function () { _this.failMessage = false; }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/*!*****************************************!*\
  !*** ./src/app/positions.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\r\n.table-responsive{margin-bottom:60px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cclxuLnRhYmxlLXJlc3BvbnNpdmV7bWFyZ2luLWJvdHRvbTo2MHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/positions.component.html":
/*!******************************************!*\
  !*** ./src/app/positions.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensedtable-hover\">\n          <thead>\n            <tr>\n              <th>Position Title</th>\n              <th>Position Description</th>\n              <th>Salary</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let position of positions\" (click)='routePosition(position._id)'>\n              <td>{{position.PositionName}}</td>\n              <td>{{position.PositionDescription}}</td>\n              <td>${{position.PositionBaseSalary | number:'.2'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/positions.component.ts":
/*!****************************************!*\
  !*** ./src/app/positions.component.ts ***!
  \****************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(positionService, router) {
        this.positionService = positionService;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (positions) {
            _this.positions = positions.sort((function (a, b) { return a.PositionName.localeCompare(b.PositionName); }));
        }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        this.getPositionsSub.unsubscribe();
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AltiV\Documents\WEB422 Assignments\Assignment 6\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map