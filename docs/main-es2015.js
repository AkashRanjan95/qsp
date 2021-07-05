(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container\">\r\n        <!-- <app-register></app-register>\r\n        <app-user></app-user>\r\n        <app-emplogin></app-emplogin>\r\n        <courses></courses> -->\r\n        <router-outlet></router-outlet> <!---directive to glue between module and root component-->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    <div class=\"col-md-4 offset-4 card mt-4\">\r\n    <div class=\"card-body\">\r\n        <form action=\"\">\r\n            <h1 class=\"display-5 text-center\">Login</h1>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\"> Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"enter password\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\"> Username</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"enter username\"/>\r\n            </div>\r\n            <div class=\"from-group\">\r\n                <button class=\"btn  btn-primary btn-block\">login</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n    \r\n\r\n<div class=\"col-md-4 offset-4 card\">\r\n    <div class=\"card-body\">\r\n        <form action=\"\">\r\n            <h1 class=\"display-4 text-center mb-4\">\r\n                {{ registerTitle }}\r\n            </h1>\r\n            <div class=\"form-group\">\r\n                <label for=\"firstname\">FirstName</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Enter First Name\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"lastname\">LastName</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Enter Last Name\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Email Address\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"phonenumber\">PhoneNumber</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Enter Phone Number\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"gender\">Gender</label>\r\n                    <input type=\"radio\" class=\"ml-2 mr-2\" id=\"gender\" name=\"gender\" />Male\r\n                    <input type=\"radio\" class=\"ml-2 mr-2\" id=\"gender\" name=\"gender\" />Female\r\n                </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-primary btn-block bg-danger\" (mouseenter)=\"getTitle($event)\"  (click)=\"clickEvent($event)\">Register</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/courses.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>hello template</h1>\r\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, delectus. Eum adipisci ipsum fugit delectus consectetur. Aliquid ad, laboriosam unde incidunt mollitia adipisci fugit eveniet. Voluptatibus assumenda in ut repellat.</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/emp/emplogin/emplogin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emp/emplogin/emplogin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>emplogin works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-warning\">\r\n    <a class=\"navbar-brand\" href=\"#\">SpiderWeb</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li>\r\n          <a class=\"nav-link\" routerLink=\"/users\">Users</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">About</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Dropdown\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\r\n        </li> -->\r\n\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n          <li><a class=\"nav-link\" routerLink=\"/login\">Login</a></li>\r\n          <li><a class=\"nav-link\" routerLink=\"/register\">Register</a></li>\r\n          \r\n      </ul>\r\n\r\n    </div>\r\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n<!------ Include the above in your HEAD tag ---------->\r\n<!-- We will make a simple accordian with hover effects \r\nThe markup will have a list with images and the titles-->\r\n<div class=\"accordian\">\r\n    <ul>\r\n\t\t<li>\r\n\t\t\t<div class=\"image_title\">\r\n\t\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">KungFu Panda</a>\r\n\t\t\t</div> \r\n\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">\r\n\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg\"/>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class=\"image_title\">\r\n\t\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">Toy Story 2</a>\r\n\t\t\t</div>\r\n\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">\r\n\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/40Ly3VB.jpg\"/>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class=\"image_title\">\r\n\t\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">Wall-E</a>\r\n\t\t\t</div>\r\n\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">\r\n\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/00kih8g.jpg\"/>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class=\"image_title\">\r\n\t\t\t\t<a href=\"#\">Up</a>\r\n\t\t\t</div>\r\n\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">\r\n\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/2rT2vdx.jpg\"/>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<div class=\"image_title\">\r\n\t\t\t\t<a href=\"#\">Cars 2</a>\r\n\t\t\t</div>\r\n\t\t\t<a href=\"https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg\">\r\n\t\t\t\t<img src=\"http://thecodeplayer.com/uploads/media/8k3N3EL.jpg\"/>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>pagenotfound works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-border mt-4 bg-danger\">\r\n    <tr style=\"color: aliceblue;\">\r\n        <th>name</th>\r\n        <th>age</th>\r\n        <th>company</th>\r\n        <th>salary</th>\r\n        <th>designation</th>\r\n        <th>doj</th>\r\n        <th>location</th>\r\n        <th>education</th>\r\n        <th>stream</th>\r\n    </tr>\r\n    <tr style=\"color: antiquewhite;\" *ngFor=\"let user of data\">\r\n        <td>{{user.name}}</td>\r\n        <td>{{user.age}}</td>\r\n        <td>{{user.company}}</td>\r\n        <td>{{user.salary}}</td>\r\n        <td>{{user.designation}}</td>\r\n        <td>{{user.doj}}</td>\r\n        <td>{{user.location}}</td>\r\n        <td>{{user.education}}</td>\r\n        <td>{{user.stream}}</td>\r\n    </tr>\r\n</table>\r\n\r\n<!-- <img src=\"{{userprofile}}\" alt=\"image\" />--->\r\n<!--Interpolation Binding- -->\r\n\r\n<!-- <img [src]=\"userprofile1\" alt=\"image\" />  --->\r\n<!---Property Binding- -->\r\n\r\n<button [class.jspiders]=\"isActive\">Jspiders</button>\r\n\r\n\r\n<table>\r\n    <tr>\r\n        <td [attr.colspan]=\"colSpan\">Table Manners</td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n<button style=\" color:blanchedalmond;   background: red;\">Style Binding</button>\r\n<button style=\"color: black;\" [style.backgroundColor]=\"Color ? 'green' : 'red'\">Style Binding Angular</button>\r\n<!---mouse event binding-->\r\n\r\n<button (click)=\"clickEvent($event)\" class=\"btn btn-success\">Event Binding</button>\r\n\r\n<input type=\"text\" class=\"form-control\" (keypress)=\"typeEvent($event)\">\r\n<!---keyboard event binding-->\r\n<input type=\"text\" class=\"form-control\" (keyup.enter)=\"angularWayTypeEvent($event)\" placeholder=\"please add some text\">\r\n\r\n<input type=\"text\" name=\"\" id=\"\" class=\"form-control\" #email (keyup.enter)=enterEmail(email.value)>\r\n<input type=\"text\" name=\"\" id=\"\" class=\"form-control\" (keyup.enter)=checkUsername($event)>\r\n\r\n\r\n<!-- <input type=\"text\" [(ngModel)]=\"username\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"enter your name\" >\r\n<h1>{{username}}    </h1> -->\r\n\r\n\r\n<button class=\"btn btn-block btn-border btn-primary mt-2\" (click)=\"addEmp()\">Add Employees</button>\r\n\r\n\r\n<table class=\"table table-border mt-4 \">\r\n    <thead class=\"thead-dark\">\r\n\r\n        <tr style=\"color: aliceblue;\">\r\n            <th>index</th>\r\n            <th>empId</th>\r\n            <th>empName</th>\r\n            <th>empPhoto</th>\r\n            <th>empSalary</th>\r\n            <th>empDesignation</th>\r\n            <th>empCompany</th>\r\n            <th>empLoc</th>\r\n            <th>empEdu</th>\r\n            <th>empClg</th>\r\n            <th>Removal</th>\r\n        </tr>\r\n    </thead>\r\n\r\n\r\n\r\n    <!-- [style.backgroundColor]=\"orange\",\r\n    [style.color]=\"black\",\r\n    [style.padding]=\"10px\" -->\r\n    <tbody>\r\n        <tr style=\"color: antiquewhite;\" *ngFor=\"let user of employee; index as i\" [ngStyle]=\"{'color': user.empCompany==='TestYantra' ? 'red' : 'yellow' , 'padding':'10px', 'background-color' : user.empCompany==='TestYantra' ? 'black' : 'linear-gradient( #3498db, #8e44ad)', border:'5px solid #111'}\">\r\n\r\n\r\n\r\n            <td><span class=\"badge badge-success\">{{i+1}}</span></td>\r\n            <td>{{user.empId}}</td>\r\n            <td>{{user.empName}}</td>\r\n            <td><img class=\"img-fluid rounded-circle\" src=\"{{user.empPhoto}}\" alt=\"image\"></td>\r\n            <td>{{user.empSalary}}</td>\r\n            <td>{{user.empDesignation}}</td>\r\n            <td>{{user.empCompany}}</td>\r\n            <td>{{user.empLoc}}</td>\r\n            <td>{{user.empEdu}}</td>\r\n            <td>{{user.empClg}}</td>\r\n            <td><button class=\"btn btn-danger\" (click)=\"removeEmp(user)\">Remove</button></td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n\r\n<!-- <div class=\"row\">\r\n        <div class=\"col-md-3\" >\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"...\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Card title</h5>\r\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                </div>\r\n              </div>\r\n              \r\n        </div>\r\n\r\n    </div> -->\r\n\r\n\r\n<!---Angular 2 -->\r\n<div *ngIf=\"employee.length > 0\">\r\n    Employees are here.\r\n</div>\r\n<div *ngIf=\"employee.length == 0\">\r\n    Employees are not here.\r\n</div>\r\n\r\n<!-- Angular 4 onwards -->\r\n<div *ngIf=\"employee.length>0; then emp else noemp\"></div>\r\n<ng-template #emp>\r\n    <h1 style=\"color: green;\">Employees Are Here</h1>\r\n</ng-template>\r\n<ng-template #noemp>\r\n    <h1 style=\"color: red;\">No Employees Here</h1>\r\n</ng-template>\r\n\r\n\r\n<span [ngSwitch]=\"color\">\r\n    <p *ngSwitchCase=\" 'red' \">\r\n        RED COLOR\r\n    </p>\r\n    <p *ngSwitchCase=\" 'blue' \">\r\n            BLUE COLOR\r\n        </p>\r\n        <p *ngSwitchDefault>\r\n                NO COLOR\r\n            </p>\r\n\r\n</span>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Qspider';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.component */ "./src/app/courses.component.ts");
/* harmony import */ var _app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _emp_emp_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emp/emp.module */ "./src/app/emp/emp.module.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

// import { LoginComponent } from './auth/login/login.component';













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _courses_component__WEBPACK_IMPORTED_MODULE_2__["CoursesComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__["PagenotfoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _emp_emp_module__WEBPACK_IMPORTED_MODULE_11__["EmpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                { path: 'login', component: _app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
                { path: 'register', component: _app_auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
                { path: 'users', component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"] },
                { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__["PagenotfoundComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] //bootstraping and root component...
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    /* min-height: 100vh; */\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    border-radius: 5px solid black;\r\n}\r\ndiv{\r\n    /* width: 360px;\r\n    height: 580px; */\r\n    /* background:  linear-gradient(120deg, #3498db, #8e44ad, #3498db,#8e44ad, #3498db, #8e44ad, #3498db,#8e44ad); */\r\n    background: none;\r\n    /* border-radius: 15px; */\r\n    /* padding: 80px 40px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);*/\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUMzRCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJO29CQUNnQjtJQUNoQixnSEFBZ0g7SUFDaEgsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qjs7OztzQ0FJa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzQ5OGRiLCAjOGU0NGFkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCBzb2xpZCBibGFjaztcclxufVxyXG5kaXZ7XHJcbiAgICAvKiB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDU4MHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQsICMzNDk4ZGIsIzhlNDRhZCwgIzM0OThkYiwgIzhlNDRhZCwgIzM0OThkYiwjOGU0NGFkKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xyXG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    /* min-height: 100vh; */\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    border-radius: 5px solid black;\r\n}\r\ndiv{\r\n    /* width: 360px;\r\n    height: 580px; */\r\n    /* background:  linear-gradient(120deg, #3498db, #8e44ad, #3498db,#8e44ad, #3498db, #8e44ad, #3498db,#8e44ad); */\r\n    background: none;\r\n    /* border-radius: 15px; */\r\n    /* padding: 80px 40px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);*/\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUMzRCw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJO29CQUNnQjtJQUNoQixnSEFBZ0g7SUFDaEgsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qjs7OztzQ0FJa0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzQ5OGRiLCAjOGU0NGFkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCBzb2xpZCBibGFjaztcclxufVxyXG5kaXZ7XHJcbiAgICAvKiB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDU4MHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQsICMzNDk4ZGIsIzhlNDRhZCwgIzM0OThkYiwgIzhlNDRhZCwgIzM0OThkYiwjOGU0NGFkKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xyXG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() {
        //props
        this.registerTitle = "ReGisTer"; //logic
    }
    getTitle(event) {
        console.log('helllo');
    }
    clickEvent(event) {
        alert("Mission Successful");
    }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/courses.component.ts":
/*!**************************************!*\
  !*** ./src/app/courses.component.ts ***!
  \**************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoursesComponent = class CoursesComponent {
    constructor() {
        this.courses = ['java', 'angular', 'python', 'nodejs', 'reactjs'];
    }
};
CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'courses',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/courses.component.html")).default,
    })
], CoursesComponent);



/***/ }),

/***/ "./src/app/emp/emp.module.ts":
/*!***********************************!*\
  !*** ./src/app/emp/emp.module.ts ***!
  \***********************************/
/*! exports provided: EmpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpModule", function() { return EmpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _emplogin_emplogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emplogin/emplogin.component */ "./src/app/emp/emplogin/emplogin.component.ts");




let EmpModule = class EmpModule {
};
EmpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_emplogin_emplogin_component__WEBPACK_IMPORTED_MODULE_3__["EmploginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_emplogin_emplogin_component__WEBPACK_IMPORTED_MODULE_3__["EmploginComponent"]]
    })
], EmpModule);



/***/ }),

/***/ "./src/app/emp/emplogin/emplogin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/emp/emplogin/emplogin.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcC9lbXBsb2dpbi9lbXBsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/emp/emplogin/emplogin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/emp/emplogin/emplogin.component.ts ***!
  \****************************************************/
/*! exports provided: EmploginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploginComponent", function() { return EmploginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmploginComponent = class EmploginComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmploginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emplogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emplogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/emp/emplogin/emplogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emplogin.component.css */ "./src/app/emp/emplogin/emplogin.component.css")).default]
    })
], EmploginComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Now the styles*/\r\n* {\r\n  margin: 0; \r\npadding: 0;\r\n}\r\nbody {\r\nbackground: #ccc; \r\nfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\nwidth: 805px; height: 320px;\r\noverflow: hidden;\r\n\r\n/*Time for some styling*/\r\nmargin: 100px auto;\r\nbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\nwidth: 1200px;\r\n/*This will give ample space to the last item to move\r\ninstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\nposition: relative;\r\ndisplay: block;\r\nwidth: 160px;\r\nfloat: left;\r\n\r\nborder-left: 1px solid #888;\r\n\r\nbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n/*Transitions to give animation effect*/\r\ntransition: all 0.5s;\r\n-webkit-transition: all 0.5s;\r\n-moz-transition: all 0.5s;\r\n/*If you hover on the images now you should be able to \r\nsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\ndisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\nbackground: rgba(0, 0, 0, 0.5);\r\nposition: absolute;\r\nleft: 0; bottom: 0;\t\r\nwidth: 640px;\t\r\n\r\n}\r\n.image_title a {\r\ndisplay: block;\r\ncolor: #fff;\r\ntext-decoration: none;\r\npadding: 20px;\r\nfont-size: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FBQ2pCO0VBQ0UsU0FBUztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG1DQUFtQztBQUNuQztBQUVBOzs7Ozs7O0NBT0M7QUFFRDtBQUNBLFlBQVksRUFBRSxhQUFhO0FBQzNCLGdCQUFnQjs7QUFFaEIsd0JBQXdCO0FBQ3hCLGtCQUFrQjtBQUNsQiw0Q0FBNEM7QUFDNUMsb0RBQW9EO0FBQ3BELGlEQUFpRDtBQUNqRDtBQUVBLHNEQUFzRDtBQUN0RDtBQUNBLGFBQWE7QUFDYjtrREFDa0Q7QUFDbEQ7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsWUFBWTtBQUNaLFdBQVc7O0FBRVgsMkJBQTJCOztBQUUzQiw0Q0FBNEM7QUFDNUMsb0RBQW9EO0FBQ3BELGlEQUFpRDs7QUFFakQsdUNBQXVDO0FBQ3ZDLG9CQUFvQjtBQUNwQiw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCO3dCQUN3QjtBQUN4QjtBQUVBLHFDQUFxQztBQUNyQyx3QkFBd0IsV0FBVyxDQUFDO0FBQ3BDLCtCQUErQjtBQUMvQix3REFBd0Q7QUFDeEQsd0JBQXdCLFlBQVksQ0FBQztBQUdyQztBQUNBLGNBQWM7QUFDZDtBQUVBLHFCQUFxQjtBQUNyQjtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsT0FBTyxFQUFFLFNBQVM7QUFDbEIsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsY0FBYztBQUNkLFdBQVc7QUFDWCxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLGVBQWU7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypOb3cgdGhlIHN0eWxlcyovXHJcbioge1xyXG4gIG1hcmdpbjogMDsgXHJcbnBhZGRpbmc6IDA7XHJcbn1cclxuYm9keSB7XHJcbmJhY2tncm91bmQ6ICNjY2M7IFxyXG5mb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmEsIHRhaG9tYTtcclxufVxyXG5cclxuLypUaW1lIHRvIGFwcGx5IHdpZHRocyBmb3IgYWNjb3JkaWFuIHRvIHdvcmtcclxuV2lkdGggb2YgaW1hZ2UgPSA2NDBweFxyXG50b3RhbCBpbWFnZXMgPSA1XHJcbnNvIHdpZHRoIG9mIGhvdmVyZWQgaW1hZ2UgPSA2NDBweFxyXG53aWR0aCBvZiB1bi1ob3ZlcmVkIGltYWdlID0gNDBweCAtIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW55dGhpbmdcclxuc28gdG90YWwgY29udGFpbmVyIHdpZHRoID0gNjQwICsgNDAqNCA9IDgwMHB4O1xyXG5kZWZhdWx0IHdpZHRoID0gODAwLzUgPSAxNjBweDtcclxuKi9cclxuXHJcbi5hY2NvcmRpYW4ge1xyXG53aWR0aDogODA1cHg7IGhlaWdodDogMzIwcHg7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4vKlRpbWUgZm9yIHNvbWUgc3R5bGluZyovXHJcbm1hcmdpbjogMTAwcHggYXV0bztcclxuYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbi1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi8qQSBzbWFsbCBoYWNrIHRvIHByZXZlbnQgZmxpY2tlcmluZyBvbiBzb21lIGJyb3dzZXJzKi9cclxuLmFjY29yZGlhbiB1bCB7XHJcbndpZHRoOiAxMjAwcHg7XHJcbi8qVGhpcyB3aWxsIGdpdmUgYW1wbGUgc3BhY2UgdG8gdGhlIGxhc3QgaXRlbSB0byBtb3ZlXHJcbmluc3RlYWQgb2YgZmFsbGluZyBkb3duL2ZsaWNrZXJpbmcgZHVyaW5nIGhvdmVycy4qL1xyXG59XHJcblxyXG4uYWNjb3JkaWFuIGxpIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDE2MHB4O1xyXG5mbG9hdDogbGVmdDtcclxuXHJcbmJvcmRlci1sZWZ0OiAxcHggc29saWQgIzg4ODtcclxuXHJcbmJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4tbW96LWJveC1zaGFkb3c6IDAgMCAyNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuLypUcmFuc2l0aW9ucyB0byBnaXZlIGFuaW1hdGlvbiBlZmZlY3QqL1xyXG50cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLypJZiB5b3UgaG92ZXIgb24gdGhlIGltYWdlcyBub3cgeW91IHNob3VsZCBiZSBhYmxlIHRvIFxyXG5zZWUgdGhlIGJhc2ljIGFjY29yZGlhbiovXHJcbn1cclxuXHJcbi8qUmVkdWNlIHdpdGggb2YgdW4taG92ZXJlZCBlbGVtZW50cyovXHJcbi5hY2NvcmRpYW4gdWw6aG92ZXIgbGkge3dpZHRoOiA0MHB4O31cclxuLypMZXRzIGFwcGx5IGhvdmVyIGVmZmVjdHMgbm93Ki9cclxuLypUaGUgTEkgaG92ZXIgc3R5bGUgc2hvdWxkIG92ZXJyaWRlIHRoZSBVTCBob3ZlciBzdHlsZSovXHJcbi5hY2NvcmRpYW4gdWwgbGk6aG92ZXIge3dpZHRoOiA2NDBweDt9XHJcblxyXG5cclxuLmFjY29yZGlhbiBsaSBpbWcge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLypJbWFnZSB0aXRsZSBzdHlsZXMqL1xyXG4uaW1hZ2VfdGl0bGUge1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogMDsgYm90dG9tOiAwO1x0XHJcbndpZHRoOiA2NDBweDtcdFxyXG5cclxufVxyXG4uaW1hZ2VfdGl0bGUgYSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5jb2xvcjogI2ZmZjtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5mb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagenotfoundComponent = class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagenotfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")).default]
    })
], PagenotfoundComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table{\r\n    /* background: royalblue; */\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n\r\n}\r\n.tr{\r\n    background: rgb(155, 68, 68);\r\n    padding: 20px;\r\n    margin: 20px;\r\n}\r\nbody{\r\n    background-color:rgb(13, 155, 15) ;\r\n    margin-top: 2px;\r\n    padding: 4px;\r\n}\r\nimg{\r\n    height:25px;\r\n}\r\nbody{\r\n    /* min-height: 100vh; */\r\n    background-image: linear-gradient(120deg, #3498db, #8e44ad);\r\n    border-radius: 10px solid black;\r\n}\r\n/* div{ */\r\n/*width: 360px;\r\n    height: 580px; */\r\n/* background:  linear-gradient(120deg, #3498db, #8e44ad, #3498db,#8e44ad, #3498db, #8e44ad, #3498db,#8e44ad);\r\n    background: none;\r\n    /* border-radius: 15px; */\r\n/* padding: 80px 40px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);*/\r\n/* }  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMkRBQTJEOztBQUUvRDtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUMzRCwrQkFBK0I7QUFDbkM7QUFDQSxTQUFTO0FBQ0w7b0JBQ2dCO0FBQ2hCOzs2QkFFeUI7QUFDekI7Ozs7c0NBSWtDO0FBQ3RDLE9BQU8iLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJveWFsYmx1ZTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQpO1xyXG5cclxufVxyXG4udHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU1LCA2OCwgNjgpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTMsIDE1NSwgMTUpIDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6MjVweDtcclxufVxyXG5ib2R5e1xyXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzQ5OGRiLCAjOGU0NGFkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggc29saWQgYmxhY2s7XHJcbn1cclxuLyogZGl2eyAqL1xyXG4gICAgLyp3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDU4MHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQsICMzNDk4ZGIsIzhlNDRhZCwgIzM0OThkYiwgIzhlNDRhZCwgIzM0OThkYiwjOGU0NGFkKTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxNXB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogODBweCA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xyXG4vKiB9ICAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() {
        this.data = [{
                name: "akash",
                age: 25,
                company: "microsoft",
                salary: 55000,
                designation: 'developer',
                doj: new Date('1/2/2020'),
                location: 'US',
                education: "MCA",
                stream: "CS"
            },
            {
                name: "paritosh",
                age: 25,
                company: "google",
                salary: 59999,
                designation: 'web designer',
                doj: new Date('1/2/2019'),
                location: 'NY',
                education: "MCA",
                stream: "CS"
            },
            {
                name: "bunty",
                age: 24,
                company: "yahoo",
                salary: 69696,
                designation: 'helper',
                doj: new Date('1/2/2018'),
                location: 'California',
                education: "Btech",
                stream: "CS"
            },
            {
                name: "sourav",
                age: 26,
                company: "amazon",
                salary: 49999,
                designation: 'manager',
                doj: new Date('1/2/2017'),
                location: 'Iceland',
                education: "Mtech",
                stream: "CS"
            }];
        this.userprofile = "https://picsum.photos/id/237/536/354";
        this.userprofile1 = "https://picsum.photos/seed/picsum/200/300";
        this.isActive = true;
        this.colSpan = 12345;
        this.Color = false;
        //ngFor Directives example..
        this.employee = [
            { empId: 'ty1',
                empName: 'Akki',
                empPhoto: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__480.png',
                empCompany: 'TestYantra',
                empLoc: 'Blr',
                empSalary: '20000',
                empDoj: new Date('10/7/2018'),
                empDesignation: 'Developer',
                empEdu: 'MCA',
                empClg: 'ITER'
            },
            {
                empId: 'ty2',
                empName: 'Ranjan',
                empPhoto: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819__480.png',
                empCompany: 'HGS',
                empLoc: 'Blr',
                empSalary: '25000',
                empDoj: new Date('12/8/2018'),
                empDesignation: 'Developer',
                empEdu: 'MCA',
                empClg: 'KIIT'
            },
            {
                empId: 'ty3',
                empName: 'Ranjan',
                empPhoto: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__480.png',
                empCompany: 'HGS',
                empLoc: 'Blr',
                empSalary: '25000',
                empDoj: new Date('12/8/2018'),
                empDesignation: 'Developer',
                empEdu: 'MCA',
                empClg: 'KIIT'
            },
            {
                empId: 'ty4',
                empName: 'Ranjan',
                empPhoto: 'https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803__480.png',
                empCompany: 'HGS',
                empLoc: 'Blr',
                empSalary: '25000',
                empDoj: new Date('12/8/2018'),
                empDesignation: 'Developer',
                empEdu: 'MCA',
                empClg: 'KIIT'
            }
        ];
        this.color = 'lund';
    }
    clickEvent(event) {
        alert("hello akki!");
    }
    ;
    hoverEvent(event) {
        console.log(event);
    }
    ;
    typeEvent(event) {
        if (event.keyCode === 13) {
            console.log(event.target.value);
        } //this is javascript way & also event filtering is included
    }
    angularWayTypeEvent(event) {
        console.log(event.target.value);
    }
    enterEmail(email) {
        console.log('my email addres is', email);
    }
    checkUsername(event) {
        console.log('my name is', event.target.value);
    }
    addEmp() {
        this.employee.unshift({
            empId: 'ty4',
            empName: 'Dibya',
            empPhoto: 'https://cdn.pixabay.com/photo/2016/04/26/07/20/woman-1353803__480.png',
            empCompany: 'HGS',
            empLoc: 'Blr',
            empSalary: '35000',
            empDoj: new Date('12/9/2018'),
            empDesignation: 'Web',
            empEdu: 'Btech',
            empClg: 'RCB'
        });
    }
    removeEmp(emp) {
        let index = this.employee.indexOf(emp); //checking index
        this.employee.splice(index, 1);
    }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\qsp\qsp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map