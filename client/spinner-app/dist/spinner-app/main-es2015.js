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

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customize-spinner/customize-spinner.component */ "./src/app/customize-spinner/customize-spinner.component.ts");
/* harmony import */ var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-list/email-list.component */ "./src/app/email-list/email-list.component.ts");
/* harmony import */ var _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-script/custom-script.component */ "./src/app/custom-script/custom-script.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");





const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'spinner', component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"] },
    { path: 'customize-spinner', component: _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_1__["CustomizeSpinnerComponent"] },
    { path: 'email-list', component: _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_2__["EmailListComponent"] },
    { path: 'custom-script', component: _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_3__["CustomScriptComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'spinner-app';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customize-spinner/customize-spinner.component */ "./src/app/customize-spinner/customize-spinner.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email-list/email-list.component */ "./src/app/email-list/email-list.component.ts");
/* harmony import */ var _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-script/custom-script.component */ "./src/app/custom-script/custom-script.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"],
        _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"],
        _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"],
                    _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"],
                    _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/custom-script/custom-script.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-script/custom-script.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomScriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomScriptComponent", function() { return CustomScriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class CustomScriptComponent {
    constructor() {
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
    }
}
CustomScriptComponent.ɵfac = function CustomScriptComponent_Factory(t) { return new (t || CustomScriptComponent)(); };
CustomScriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomScriptComponent, selectors: [["app-custom-script"]], decls: 36, vars: 1, consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "col-12", "col-lg-10"], [1, "title"], [1, "row"], [1, "col-10", "mr-auto"], ["action", ""], [1, "mb-3"], ["for", "header"], ["id", "header", "name", "header", "rows", "3", 1, "form-control"], ["for", "footer"], ["id", "footer", "name", "footer", "rows", "3", 1, "form-control"], ["for", "title"], ["type", "text", "id", "title", "name", "title", 1, "form-control"], ["for", "description"], ["id", "description", "name", "description", "rows", "3", 1, "form-control"], ["for", "favicon"], ["type", "file"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info"]], template: function CustomScriptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomScriptComponent_Template_button_click_2_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Insert Custom Script");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HEADER:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Footer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Page title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Page description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Favicon:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 50px 20px 20px 40px;\n  color: white;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNjcmlwdC9DOlxcVXNlcnNcXFVTVUFSSU9cXERvY3VtZW50c1xcUmljYXJkb1xcUHJveWVjdG9zXFxTcGlubmVyQXBwXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxjdXN0b20tc2NyaXB0XFxjdXN0b20tc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJnQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG59IiwiZGl2LmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZ0NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1Yztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomScriptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-script',
                templateUrl: './custom-script.component.html',
                styleUrls: ['./custom-script.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/customize-spinner/customize-spinner.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customize-spinner/customize-spinner.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomizeSpinnerComponent, UploadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeSpinnerComponent", function() { return CustomizeSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/form-spinner-controller */ "./src/app/shared/form-spinner-controller.ts");
/* harmony import */ var _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ImageSnippet */ "./src/app/shared/ImageSnippet.ts");
/* harmony import */ var _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/spinner-customizer-controller.service */ "./src/app/services/spinner-customizer-controller.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function CustomizeSpinnerComponent_tr_63_td_7_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeSpinnerComponent_tr_63_td_7_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeSpinnerComponent_tr_63_td_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizeSpinnerComponent_tr_63_td_7_div_5_div_1_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomizeSpinnerComponent_tr_63_td_7_div_5_div_2_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.SuccessfullyUpload[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.UnsuccessfullyUpload[i_r2]);
} }
function CustomizeSpinnerComponent_tr_63_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_td_7_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.processFile($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomizeSpinnerComponent_tr_63_td_7_div_5_Template, 3, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedFile);
} }
function CustomizeSpinnerComponent_tr_63_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeSpinnerComponent_tr_63_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeSpinnerComponent_tr_63_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomizeSpinnerComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_Template_select_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r2 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onChangeImage($event.target.value, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizeSpinnerComponent_tr_63_td_7_Template, 6, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizeSpinnerComponent_tr_63_td_8_Template, 2, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_Template_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r2 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onChangeResult($event.target.value, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Text Popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email Popup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomizeSpinnerComponent_tr_63_td_17_Template, 2, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomizeSpinnerComponent_tr_63_td_18_Template, 2, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spinnerfield_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsImageFile[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsTextField[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r1.controls.percentage.hasError("required") && ctx_r0.submitPressed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsTextPopUp[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsEmailPopUp[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r1.controls.color.hasError("required") && ctx_r0.submitPressed);
} }
class CustomizeSpinnerComponent {
    constructor(formBuilder, // For number of field dropdown
    spinnerService, // Form validations
    imageService) {
        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.imageService = imageService;
        //Collapse menu
        this.isMenuCollapsed = true;
        // For number of field dropdown
        this.items = [];
        this.submitPressed = false;
        // For imageUpload / Text Field
        this.itIsImageFile = [false];
        this.itIsTextField = [false];
        // For imageUpload / Text Field
        // For results dropdown
        this.itIsTextPopUp = [false];
        this.itIsEmailPopUp = [false];
        this.StringOfImageUpload = [];
        this.SuccessfullyUpload = [];
        this.UnsuccessfullyUpload = [];
        // Setting Form Array
        this.spinnerForm = this.formBuilder.group({
            spinnerArray: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    ngOnInit() {
        // Sets default 6 boxes
        for (let i = 0; i < 6; i++) {
            this.addControl(i);
        }
        // For imageUpload / Text Field
        let i = 0;
        for (i = 0; i <= this.items.length; i++) {
            this.itIsImageFile[i] = true;
        }
        // For imageUpload / Text Field
        // For number of field dropdown
        for (i = 0; i <= this.items.length; i++) {
            this.itIsTextPopUp[i] = true;
        }
        // For number of field dropdown
    }
    createSpFormGroup() {
        return this.formBuilder.group({
            isItImage: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: [''],
            textFieldOne: [''],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/)]],
            isItEmail: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            textPopUp: [''],
            emails: [''],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    //Image Upload
    onSuccess(index, path) {
        this.StringOfImageUpload.push(new UploadFile(index, path));
        this.SuccessfullyUpload[index] = true;
        this.UnsuccessfullyUpload[index] = false;
        //this.selectedFile.pending = false;
        //this.selectedFile.status = 'ok';
    }
    onError(index) {
        this.UnsuccessfullyUpload[index] = true;
        this.SuccessfullyUpload[index] = false;
        //this.selectedFile.pending = false;
        //this.selectedFile.status = 'fail';
        //this.selectedFile.src = '';
    }
    processFile(image, index) {
        let files = image.srcElement.files;
        let file = files[0];
        let reader = new FileReader();
        reader.addEventListener('load', (event) => {
            this.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_3__["ImageSnippet"](event.target.result, file);
            this.imageService.uploadImage(this.selectedFile.file)
                .subscribe((res) => {
                this.onSuccess(index, res.path);
            }, (err) => {
                this.onError(index);
                throw new Error(err);
            });
        });
        reader.readAsDataURL(file);
    }
    //Image Upload
    get spinnerArray() {
        if (this.spinnerForm) {
            return this.spinnerForm.get('spinnerArray');
        }
    }
    // For number of field dropdown
    onChange(i) {
        this.items.length = 0; // eliminates defalut setting before adding other
        this.spinnerForm.reset();
        while (this.spinnerArray.length > 0) {
            this.items.pop();
            this.deleteSpinnerField(0);
        }
        while (i > 0) {
            this.addControl(i);
            i--;
        }
        for (i = 0; i <= this.items.length; i++) {
            this.itIsImageFile[i] = true;
        }
        for (i = 0; i <= this.items.length; i++) {
            this.itIsTextPopUp[i] = true;
        }
    }
    addControl(i) {
        this.items.push({ id: i.toString() });
        let fg = this.createSpFormGroup();
        if (this.spinnerArray) {
            this.spinnerArray.push(fg);
        }
    }
    deleteSpinnerField(idx) {
        this.spinnerArray.removeAt(idx);
    }
    // For number of field dropdown
    //For image text selection
    onChangeImage(option, i) {
        if (option === "0: true") {
            this.itIsImageFile[i] = true;
            this.itIsTextField[i] = false;
        }
        else if (option === "1: false") {
            this.itIsImageFile[i] = false;
            this.itIsTextField[i] = true;
        }
    }
    //For image text selection
    // For number of field dropdown
    onChangeResult(option, i) {
        if (option === 'text') {
            this.itIsTextPopUp[i] = true;
            this.itIsEmailPopUp[i] = false;
        }
        else if (option === 'email') {
            this.itIsTextPopUp[i] = false;
            this.itIsEmailPopUp[i] = true;
        }
    }
    // For number of field dropdown
    onSubmit() {
        let spinner = [];
        this.submitPressed = true;
        // if a field outside the array is added, change this to this.spinnerForm.value
        if (this.spinnerForm.status === "VALID") {
            let counter = 0;
            this.spinnerArray.value.forEach(element => {
                let field = new _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_2__["formSpinnerControl"](element.isItImage, element.image, element.textFieldOne, element.percentage, element.isItEmail, element.textPopUp, element.email, element.color);
                this.StringOfImageUpload.forEach((file) => {
                    if (file.index == counter) {
                        field.image = file.image;
                    }
                });
                spinner.push(field);
                counter++;
            });
        }
        this.spinnerService.deleteSpinner().subscribe(() => {
            this.spinnerService.sendSpinner(spinner).subscribe((res) => {
                this.spinnerForm.reset();
                this.StringOfImageUpload = []; // Resets the StringOfImageUpload array
            }, err => {
                throw new Error('Error Sending the information about the spinner');
            });
        }, err => {
            throw new Error('Error deleting the information of the previous spineer');
        });
    }
}
CustomizeSpinnerComponent.ɵfac = function CustomizeSpinnerComponent_Factory(t) { return new (t || CustomizeSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerCustomizerControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"])); };
CustomizeSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeSpinnerComponent, selectors: [["app-customize-spinner"]], decls: 66, vars: 3, consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "menu1", "col-12", "col-lg-10"], [1, "row", "my-5"], [1, "col-12"], ["id", "settingNumber"], ["for", "numberOptions", 1, "mr-3"], ["matNativeControl", "", "name", "numberOptions", "required", "", 3, "change"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6", "selected", ""], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [3, "formGroup", "ngSubmit"], [1, "table-responsive"], [1, "table", "table-borderless"], ["formArrayName", "spinnerArray"], ["for", "ImageOption"], ["for", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "ml-auto"], [3, "formGroupName"], ["formControlName", "isItImage", "required", "", 3, "change"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [4, "ngIf"], ["formControlName", "percentage", "type", "number", "name", "textField"], ["formControlName", "isItEmail", "name", "resultOption", "required", "", 3, "change"], [1, "col-2"], ["formControlName", "color", "type", "color"], ["id", "ImageUploadBox"], ["id", "FileUploadBox", 1, "col-9"], ["formControlName", "file", "type", "file", "accept", "image/*", "name", "imageFile", 3, "change"], ["imageInput", ""], ["class", "col-3", "id", "FileUploadMessageBox", 4, "ngIf"], ["id", "FileUploadMessageBox", 1, "col-3"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"], ["formControlName", "textFieldOne", "type", "text", "name", "textField"], ["formControlName", "textPopUp", "type", "text", "name", "imageFile"], ["formControlName", "emails", "type", "email", "name", "textField"]], template: function CustomizeSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_2_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customize the spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Number of fields on the spinner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_select_change_15_listener($event) { return ctx.onChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_39_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Input type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "File / Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Text / Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "bg Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CustomizeSpinnerComponent_tr_63_Template, 21, 13, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.spinnerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spinnerArray.controls);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\ndiv.menu1[_ngcontent-%COMP%] {\n  padding: 50px 20px 30px 20px;\n  color: white;\n}\n.invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  border-radius: 2px;\n}\ndiv.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 140px;\n}\ndiv#ImageUploadBox[_ngcontent-%COMP%]   div#FileUploadMessageBox[_ngcontent-%COMP%] {\n  height: 15px;\n}\ndiv#ImageUploadBox[_ngcontent-%COMP%]   div#FileUploadMessageBox[_ngcontent-%COMP%]   div.alert[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9taXplLXNwaW5uZXIvQzpcXFVzZXJzXFxVU1VBUklPXFxEb2N1bWVudHNcXFJpY2FyZG9cXFByb3llY3Rvc1xcU3Bpbm5lckFwcFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcY3VzdG9taXplLXNwaW5uZXJcXGN1c3RvbWl6ZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FERUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBREdJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMTkwLCA5NSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMTkwLCA5NSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5tZW51MSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMzBweCAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbmRpdi5yb3cgaW5wdXQsIHRkIGlucHV0IHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuZGl2I0ltYWdlVXBsb2FkQm94IHtcclxuICAgIGRpdiNGaWxlVXBsb2FkTWVzc2FnZUJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGRpdi5hbGVydCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIuYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG59XG4uYmdDb2xvciB0YWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iZ0NvbG9yIHRhYmxlIGlucHV0LCAuYmdDb2xvciB0YWJsZSBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdDb2xvciBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYubWVudTEge1xuICBwYWRkaW5nOiA1MHB4IDIwcHggMzBweCAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmRpdi5yb3cgaW5wdXQsIHRkIGlucHV0IHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5kaXYjSW1hZ2VVcGxvYWRCb3ggZGl2I0ZpbGVVcGxvYWRNZXNzYWdlQm94IHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuZGl2I0ltYWdlVXBsb2FkQm94IGRpdiNGaWxlVXBsb2FkTWVzc2FnZUJveCBkaXYuYWxlcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customize-spinner',
                templateUrl: './customize-spinner.component.html',
                styleUrls: ['./customize-spinner.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerCustomizerControllerService"] }, { type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"] }]; }, null); })();
class UploadFile {
    constructor(idx, fil) {
        this.index = idx;
        this.image = fil;
    }
}


/***/ }),

/***/ "./src/app/email-list/email-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/email-list/email-list.component.ts ***!
  \****************************************************/
/*! exports provided: EmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListComponent", function() { return EmailListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_emails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/emails.service */ "./src/app/services/emails.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function EmailListComponent_div_14_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, email_r2.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.result);
} }
function EmailListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date Spin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailListComponent_div_14_tr_15_Template, 12, 7, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.emails);
} }
class EmailListComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
        this.getEmails();
    }
    getEmails() {
        this.emailService.getEmails()
            .subscribe(emails => {
            this.emails = emails;
            console.log(this.emails);
        });
    }
}
EmailListComponent.ɵfac = function EmailListComponent_Factory(t) { return new (t || EmailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"])); };
EmailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailListComponent, selectors: [["app-email-list"]], decls: 15, vars: 2, consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "col-12", "col-lg-10"], ["id", "title"], [1, "row"], [1, "col-12", "d-flex", "justify-content-end", "mb-5"], [1, "btn", "btn-info"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]], template: function EmailListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_Template_button_click_2_listener() { return ctx.isMenuCollapsed = !ctx.isMenuCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "List of collected Emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Export results csv/excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmailListComponent_div_14_Template, 16, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emails);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n\ndiv.container[_ngcontent-%COMP%] {\n  padding: 50px 30px 40px 30px;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtbGlzdC9DOlxcVXNlcnNcXFVTVUFSSU9cXERvY3VtZW50c1xcUmljYXJkb1xcUHJveWVjdG9zXFxTcGlubmVyQXBwXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxlbWFpbC1saXN0XFxlbWFpbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbWFpbC1saXN0L2VtYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbWFpbC1saXN0L2VtYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdDb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4IDQwcHggMzBweDsgICAgXHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iLCIuYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG59XG5cbmRpdi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1MHB4IDMwcHggNDBweCAzMHB4O1xufVxuXG50YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-list',
                templateUrl: './email-list.component.html',
                styleUrls: ['./email-list.component.scss']
            }]
    }], function () { return [{ type: _services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "align-middle"], [1, "row"], [1, "col-12"], [1, "title", "d-flex", "justify-content-center"], [1, "formContent"], [1, "col-12", "d-flex", "justify-content-center", "mb-2"], [1, "field"], ["type", "email", "placeholder", "Email Address", "name", "email", "required", ""], ["type", "password", "placeholder", "Enter your password", "name", "password", "required", ""], [1, "col-12", "d-flex", "justify-content-center"], [1, "field", "d-flex", "justify-content-end"], [1, "btn", "btn-sm", "btn-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 70px 0;\n  text-align: center;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%], div.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 200px;\n  align-items: center;\n  padding: 70px 0;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 20px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxVU1VBUklPXFxEb2N1bWVudHNcXFJpY2FyZG9cXFByb3llY3Rvc1xcU3Bpbm5lckFwcFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDSSxZQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDcwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2LmFsaWduLW1pZGRsZSB7XHJcblxyXG4gICAgZGl2LnRpdGxlLCBkaXYuZm9ybUNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5mb3JtQ29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgZGl2LmZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiZGl2LmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYuYWxpZ24tbWlkZGxlIGRpdi50aXRsZSwgZGl2LmFsaWduLW1pZGRsZSBkaXYuZm9ybUNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuZGl2LmFsaWduLW1pZGRsZSBkaXYuZm9ybUNvbnRlbnQgZGl2LmZpZWxkIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuZGl2LmFsaWduLW1pZGRsZSBkaXYuZm9ybUNvbnRlbnQgZGl2LmZpZWxkIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 0, consts: [[1, "container", "align-items-start", "pl-4"], [1, "image", "img-fluid"], ["src", "https://dam.ngenespanol.com/wp-content/uploads/2019/06/arbol-mas-alto-del-mundo-770x395.png", "alt", "Fixed Photo"], [1, "mt-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/customize-spinner", 1, "nav-link"], ["routerLink", "/email-list", 1, "nav-link"], ["routerLink", "/custom-script", 1, "nav-link"], ["href", "#", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CUSTOMIZE SPINNER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "EMAIL LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CUSTOM SCRIPIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SUPPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "REQUEST FEATURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["div.container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  background-color: black;\n  height: 100vh;\n}\n\ndiv.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  color: white;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcVVNVQVJJT1xcRG9jdW1lbnRzXFxSaWNhcmRvXFxQcm95ZWN0b3NcXFNwaW5uZXJBcHBcXFNwaW5uZXJBcHBcXGNsaWVudFxcc3Bpbm5lci1hcHAvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBVE07RUFVTixhQVZNO0VBV04sa0JBQUE7QUNESjs7QURLSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDRlI7O0FET0E7RUFDSSxhQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGltZ1NpemU6IDE1MHB4O1xyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuZGl2LmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogJGltZ1NpemU7XHJcbiAgICBoZWlnaHQ6ICRpbWdTaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuLm5hdiAubmF2LWl0ZW17XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSBcclxuXHJcblxyXG4ubmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufSIsImRpdi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmRpdi5pbWFnZSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHllbGxvdztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/emails.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/emails.service.ts ***!
  \********************************************/
/*! exports provided: EmailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsService", function() { return EmailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");





class EmailsService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "/api/v1/results";
    }
    getEmails() {
        return this.http.get(this.URL_API) //Check and test later
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
}
EmailsService.ɵfac = function EmailsService_Factory(t) { return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"])); };
EmailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailsService, factory: EmailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ImageService {
    constructor(http) {
        this.http = http;
        this.URL_API = "/api/v1/imageUpload";
    }
    uploadImage(image) {
        const imageF = new FormData();
        imageF.append('imageFile', image);
        return this.http.post(this.URL_API, imageF);
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/process-httpmsg.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ProcessHTTPMsgService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    }
}
ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) { return new (t || ProcessHTTPMsgService)(); };
ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProcessHTTPMsgService, factory: ProcessHTTPMsgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHTTPMsgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/spinner-customizer-controller.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/spinner-customizer-controller.service.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerCustomizerControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerCustomizerControllerService", function() { return SpinnerCustomizerControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");





class SpinnerCustomizerControllerService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.URL_API = "/api/v1/spinner";
    }
    sendSpinner(spinnerArray) {
        return this.http.post(this.URL_API, spinnerArray);
    }
    deleteSpinner() {
        return this.http.delete(this.URL_API);
    }
}
SpinnerCustomizerControllerService.ɵfac = function SpinnerCustomizerControllerService_Factory(t) { return new (t || SpinnerCustomizerControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"])); };
SpinnerCustomizerControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerCustomizerControllerService, factory: SpinnerCustomizerControllerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerCustomizerControllerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/spinner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spinner.service.ts ***!
  \*********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");





class SpinnerService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "/api/v1/spinner";
    }
    getSpinner() {
        return this.http.get(this.URL_API) //Check and test later
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    //Inverter color function
    invertColor(hex) {
        if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16), g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16), b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        function padZero(str) {
            let len = 2;
            var zeros = new Array(len).join('0');
            return (zeros + str).slice(-len);
        }
        return '#' + padZero(r) + padZero(g) + padZero(b);
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"])); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/ImageSnippet.ts":
/*!****************************************!*\
  !*** ./src/app/shared/ImageSnippet.ts ***!
  \****************************************/
/*! exports provided: ImageSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSnippet", function() { return ImageSnippet; });
class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
}


/***/ }),

/***/ "./src/app/shared/form-spinner-controller.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/form-spinner-controller.ts ***!
  \***************************************************/
/*! exports provided: formSpinnerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSpinnerControl", function() { return formSpinnerControl; });
class formSpinnerControl {
    constructor(isImage, image, textOne, percentage, isEmail, textPopUp, email, color) {
        this.isItImage = isImage;
        this.image = image;
        this.textFieldOne = textOne;
        this.percentage = percentage;
        this.isItEmail = isEmail;
        this.textPopUp = textPopUp;
        this.email = email;
        this.bgColor = color;
    }
}


/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["txt"];
const _c1 = ["spin"];
const _c2 = ["wheelSec"];
function SpinnerComponent_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r5 = ctx_r9.index;
    const field_r4 = ctx_r9.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r7.holder[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r7.fieldStyleNth[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", field_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r4.image, " ");
} }
function SpinnerComponent_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r5 = ctx_r10.index;
    const field_r4 = ctx_r10.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r8.holder[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r8.fieldStyleNth[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r4.textFieldOne);
} }
function SpinnerComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_1_div_2_div_3_Template, 6, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_1_div_2_div_4_Template, 5, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r4.isItImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !field_r4.isItImage);
} }
function SpinnerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_1_div_2_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_div_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.rotate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.spiningRotate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.SpinnerFields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r0.spinMovemente);
} }
class SpinnerComponent {
    ///
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.API_IMAGE_URL = '/api/v1/imageUpload/';
        this.bgColorStyle = ['']; // Backgorund color
        this.fontColor = ['']; // Font Color
        this.fieldStyleNth = ['']; //Individual field style
        this.holder = [''];
        this.state = 'default';
        //Animations
        this.clicks = 1;
        //Results
        this.initialDegreesStart = [''];
        this.initialDegreesEnd = [''];
        this.degreesRotated = 0;
        this.resultingField = 0;
    }
    ngOnInit() {
        this.getSpinner();
    }
    getSpinner() {
        this.spinnerService.getSpinner()
            .subscribe(spinnerFields => {
            //spinnerFields.image = spinnerFields.image.replace("\", "/");
            this.SpinnerFields = spinnerFields;
            let angle = 360 / this.SpinnerFields.length;
            for (let i = 0; i < this.SpinnerFields.length; i++) { //Substitute backslashes for slashes
                this.SpinnerFields[i].image = this.SpinnerFields[i].image.replace(/\\/g, "/");
                this.SpinnerFields[i].image = this.API_IMAGE_URL + this.SpinnerFields[i].image.slice(14);
                this.bgColorStyle[i] = this.SpinnerFields[i].bgColor; // Backgorund color
                this.fontColor[i] = this.spinnerService.invertColor(this.bgColorStyle[i]); //Font Color
                this.holder[i] = { 'transform': 'rotate(' + angle * (i) + 'deg)',
                    '-webkit-transform': 'rotate(' + angle * (i) + 'deg)',
                    '-moz-transform': 'rotate(' + angle * (i) + 'deg)',
                    '-o-transform': 'rotate(' + angle * (i) + 'deg)',
                    '-ms-transform': 'rotate(' + angle * (i) + 'deg)', };
                this.fieldStyleNth[i] = { 'transform': 'rotate(' + angle + 'deg)',
                    '-webkit-transform': 'rotate(' + angle + 'deg)',
                    '-moz-transform': 'rotate(' + angle + 'deg)',
                    '-o-transform': 'rotate(' + angle + 'deg)',
                    '-ms-transform': 'rotate(' + angle + 'deg)',
                    'background-color': this.bgColorStyle[i],
                    'color': this.fontColor[i] };
                this.initialDegreesStart[i] = angle * i;
                this.initialDegreesEnd[i] = this.initialDegreesStart[i] + angle;
            }
        });
    }
    rotate() {
        this.degree = 360 * 8;
        this.clicks = ++this.clicks;
        this.newDegree = this.degree * this.clicks;
        this.extraDegree = Math.floor(Math.random() * (360)) + 1;
        this.totalDegree = this.newDegree + this.extraDegree;
        let numberOfSpins = this.totalDegree / 360;
        let fraction = numberOfSpins % 1;
        this.degreesRotated = fraction * 360;
        this.tilting();
        this.DeterminResult();
    }
    spining() {
        this.spiningRotate = { 'transform': 'rotate(-' + this.totalDegree + 'deg)' };
    }
    tilting() {
        this.wheelSecs.forEach((wheelSec) => {
            var t = wheelSec.nativeElement;
            var noY = 0;
            var c = 0;
            var n = 700;
            var interval = setInterval(() => {
                c = c++;
                if (c === n) {
                    clearInterval(interval);
                }
                var rect = t.getBoundingClientRect();
                var aoY = {
                    top: rect.top + document.body.scrollTop
                };
                this.Text.innerHTML = aoY;
                if (aoY.top < 23.89) {
                    this.spinMovemente = { '-webkit-animation': 'hh 0.1s',
                        'animation': 'hh 0.1s' };
                    setTimeout(() => {
                        this.spinMovemente = '';
                    }, 100);
                }
            }, 10);
            this.spining();
            var rectTwo = t.getBoundingClientRect();
            noY = rectTwo.top + document.body.scrollTop;
        });
    }
    DeterminResult() {
        for (let i = 0; i < this.initialDegreesEnd.length; i++) {
            //console.log(this.initialDegreesEnd[0]);
            if (this.degreesRotated <= this.initialDegreesEnd[0]) {
                this.resultingField = i;
                break;
            }
            else if (this.degreesRotated > this.initialDegreesEnd[0]
                && this.degreesRotated <= this.initialDegreesEnd[i]
                && this.degreesRotated > this.initialDegreesEnd[i - 1]) {
                this.resultingField = i;
            }
        }
        if (this.SpinnerFields[this.resultingField].isItEmail === true) {
            ///Code to result
        }
        else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
            ///Code to result
        }
        console.log(this.resultingField);
        console.log(this.SpinnerFields[this.resultingField]);
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], viewQuery: function SpinnerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Text = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wheelSecs = _t);
    } }, decls: 4, vars: 1, consts: [["id", "wrapper"], ["id", "wheel", 4, "ngIf"], ["id", "txt"], ["txt", ""], ["id", "wheel"], ["id", "inner-wheel"], [4, "ngFor", "ngForOf"], ["id", "spin", 3, "click"], ["spin", ""], ["id", "inner-spin"], ["id", "shine"], ["wheelSec", ""], ["class", "hold", 3, "style", 4, "ngIf"], [1, "hold"], ["id", "wheelSec", 1, "sec"], ["alt", "", 3, "src"], [1, "sec"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SpinnerFields);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#wrapper[_ngcontent-%COMP%] {\n  margin: 40px auto 0;\n  width: 372.4px;\n  position: relative;\n}\n\ndiv#wheel[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  border: 8px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  transform: rotate(0deg);\n}\n\n#wheel[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  width: 338.8px;\n  height: 338.8px;\n  border-radius: 50%;\n  z-index: 1000;\n}\n\n#inner-wheel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n}\n\n#inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  clip: rect(0px, 350px, 350px, 175px);\n  left: -7px;\n  top: -9px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  transform-origin: center;\n  opacity: 1;\n  clip: rect(0px, 175px, 350px, 0px);\n  border-radius: 350px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  position: relative;\n  z-index: 10000000;\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  margin-left: -120px;\n  text-shadow: rgba(255, 255, 255, 0.1) 0px -1px 0px, rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  transform: rotate(-120deg);\n  -webkit-transform: rotate(-120deg);\n  -moz-transform: rotate(-120deg);\n  -ms-transform: rotate(-120deg);\n  -o-transform: rotate(-120deg);\n}\n\n#spin[_ngcontent-%COMP%] {\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  position: absolute;\n  top: 157.5px;\n  left: 155.75px;\n  margin: -34px 0 0 -34px;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 0px;\n  z-index: 1000;\n  background: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n#spin[_ngcontent-%COMP%]:after {\n  content: \"\";\n  text-align: center;\n  line-height: 95.2018278751px;\n  color: #CCC;\n  text-shadow: 0 2px 0 #fff, 0 -2px 0 rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 100000;\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  display: block;\n}\n\n#spin[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 20px 28px 20px;\n  border-color: transparent transparent #ffffff transparent;\n  top: -20px;\n  left: 28px;\n}\n\n#inner-spin[_ngcontent-%COMP%] {\n  width: 75.7575757576px;\n  height: 75.7575757576px;\n  position: absolute;\n  top: 36.8421052632px;\n  left: 36.8421052632px;\n  margin: -27px 0 0 -27px;\n  border-radius: 50%;\n  background: red;\n  z-index: 999;\n  box-shadow: white 0px -2px 0px inset, white 0px 2px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 5px;\n  background: white;\n  \n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n  \n}\n\n#spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px inset;\n}\n\n#spin[_ngcontent-%COMP%]:active:after {\n  font-size: 15px;\n}\n\n#shine[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, rgba(255, 255, 255, 0.99) 1%, rgba(255, 255, 255, 0.91) 9%, rgba(255, 255, 255, 0) 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n  \n  opacity: 0.1;\n}\n\n@-webkit-keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n@keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n.spin[_ngcontent-%COMP%] {\n  -webkit-animation: hh 0.1s;\n  \n  animation: hh 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXFVTVUFSSU9cXERvY3VtZW50c1xcUmljYXJkb1xcUHJveWVjdG9zXFxTcGlubmVyQXBwXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0REOztBRE1BO0VBQ0MsWUFYVTtFQVlWLGFBWlU7RUFhVixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0VBQ0EsdUJBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBS0Esb0RBQUE7QUNIRDs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsWUEzQ087RUE0Q1AsYUE1Q087RUE2Q1Asb0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BO0VBQ0Msa0JBQUE7RUFDQSxZQXBEVTtFQXFEVixhQXJEVTtFQXNEVix3QkFBQTtFQUdHLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQTNETztBQ3NEWDs7QURRQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0xEOztBRFFBO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0MseUJBQUE7RUFDQSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNMRDs7QURRQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNMRDs7QURTQTtFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQThCLGlCQUFBO0VBQzhFLFdBQUE7RUFDNkMsb0JBQUE7RUFDM0MseUJBQUE7RUFDTCxjQUFBO0VBQ0MsVUFBQTtFQUMxRyxzRUFBQTtFQUFrRyxRQUFBO0VBQ2xHLG1IQUFBO0VBQXFILDBDQUFBO0FDQ3RIOztBREVBO0VBQ0MsZ0RBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7QUNDRDs7QURHQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNrSyxXQUFBO0VBQ29FLG9CQUFBO0VBQ3JFLHlCQUFBO0VBQ0wsY0FBQTtFQUNDLFVBQUE7RUFDOUosaUpBQUE7RUFBc0osUUFBQTtFQUN0SixxSEFBQTtFQUF1SCwwQ0FBQTtFQUd2SCxZQUFBO0FDS0E7O0FERUE7RUFDQztJQUNFLHVCQUFBO0lBQ0EsK0JBQUE7RUNDRDtFREVEO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ0FEO0FBQ0Y7O0FER0U7RUFDQTtJQUNDLHVCQUFBO0lBQ0EsK0JBQUE7RUNERDtFRElEO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ0ZEO0FBQ0Y7O0FES0U7RUFDRCwwQkFBQTtFQUE0QiwwQkFBQTtFQUMxQixrQkFBQTtBQ0ZIIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJERpYW1ldGVyOiAzNTBweDtcclxuXHJcbiN3cmFwcGVyeyBcclxuXHRtYXJnaW46IDQwcHggYXV0byAwO1x0XHJcblx0d2lkdGg6JERpYW1ldGVyKjEuMDY0OyBcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG5kaXYjd2hlZWx7XHJcblx0d2lkdGg6JERpYW1ldGVyO1xyXG5cdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHRcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0Ym9yZGVyOjhweCBzb2xpZCAjZmZmO1xyXG5cdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjIpIDBweCAwcHggMTBweCwgcmdiYSgwLDAsMCwwLjA1KSAwcHggM3B4IDBweDtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG5cclxuI3doZWVsOmJlZm9yZXtcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdGJvcmRlcjo0cHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG5cdHdpZHRoOiREaWFtZXRlciowLjk2ODtcclxuXHRoZWlnaHQ6JERpYW1ldGVyKjAuOTY4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdHotaW5kZXg6MTAwMDtcdFxyXG59XHJcblxyXG4jaW5uZXItd2hlZWx7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0LW1vei10cmFuc2l0aW9uOiAgICBhbGwgNiBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0LW8tdHJhbnNpdGlvbjogICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdC1tcy10cmFuc2l0aW9uOiAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHR0cmFuc2l0aW9uOiAgICAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHRcclxufVxyXG5cclxuI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6ICREaWFtZXRlcjtcclxuICAgIGhlaWdodDogJERpYW1ldGVyO1xyXG4gICAgY2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIsJERpYW1ldGVyLCREaWFtZXRlci8yKTtcclxuICAgIGxlZnQ6IC03cHg7XHJcbiAgICB0b3A6IC05cHg7XHJcbn1cclxuXHJcbiN3aGVlbCBkaXYuc2Vje1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuXHQvL2xlZnQ6JERpYW1ldGVyLzQ7XHJcblx0Ly90b3A6JERpYW1ldGVyLzQ7XHRcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLzIsJERpYW1ldGVyLDBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiREaWFtZXRlcjsgXHJcbn1cclxuXHJcbiN3aGVlbCBkaXYuc2VjIHNwYW57XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTozMHB4O1xyXG5cdG1hcmdpbi1sZWZ0Oi0xMjBweDtcclxuXHR0ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtMXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggMHB4O1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XHJcblx0LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XHJcblx0LW8tdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XHJcbn1cclxuXHJcbiNzcGlue1xyXG5cdHdpZHRoOiREaWFtZXRlci8zLjY3NjQ7ICBcclxuXHRoZWlnaHQ6JERpYW1ldGVyLzMuNjc2NDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6JERpYW1ldGVyKjAuNDU7ICBcclxuXHRsZWZ0OiREaWFtZXRlciowLjQ0NTtcclxuXHRtYXJnaW46LTM0cHggMCAwIC0zNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEpIDBweCAzcHggMHB4O1xyXG5cdHotaW5kZXg6MTAwMDtcclxuXHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgXHJcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbn1cclxuXHJcbiNzcGluOmFmdGVye1xyXG5cdGNvbnRlbnQ6Jyc7XHRcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDokRGlhbWV0ZXIvMy42NzY0O1xyXG5cdGNvbG9yOiNDQ0M7XHJcblx0dGV4dC1zaGFkb3c6IDAgMnB4IDAgI2ZmZiwgMCAtMnB4IDAgcmdiYSgwLDAsMCwwLjMpIDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTAwMDAwO1xyXG5cdHdpZHRoOiREaWFtZXRlci8zLjY3NjQ7XHJcblx0aGVpZ2h0OiREaWFtZXRlci8zLjY3NjQ7XHJcblx0ZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuI3NwaW46YmVmb3Jle1xyXG5cdGNvbnRlbnQ6XCJcIjtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDAgMjBweCAyOHB4IDIwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG5cdHRvcDotJERpYW1ldGVyLzE3LjU7ICAvLy0yMHB4XHJcblx0bGVmdDokRGlhbWV0ZXIvMTIuNTsgICAvLzI4cHhcclxufVxyXG5cclxuXHJcbiNpbm5lci1zcGlue1xyXG5cdHdpZHRoOiREaWFtZXRlci80LjYyOyAgLy81NHB4XHJcblx0aGVpZ2h0OiREaWFtZXRlci80LjYyOy8vNTRweFxyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDogJERpYW1ldGVyLzkuNTsgICAvLzUwJVxyXG5cdGxlZnQ6JERpYW1ldGVyLzkuNTsgICAvLzUwJVxyXG5cdG1hcmdpbjotMjdweCAwIDAgLTI3cHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0YmFja2dyb3VuZDpyZWQ7XHJcblx0ei1pbmRleDo5OTk7XHJcblx0Ym94LXNoYWRvdzpyZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAtMnB4IDBweCBpbnNldCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggMnB4IDBweCBpbnNldCwgIHJnYmEoMCwwLDAsMC40KSAwcHggMHB4IDVweCA7XHJcblx0XHJcblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogRkYzLjYrICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG5cdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG5cdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogVzNDICovXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VhZWFlYScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1x0XHJcbn1cclxuXHJcbiNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbntcclxuXHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC40KSAwcHggMHB4IDVweCBpbnNldDtcclxufVxyXG5cclxuI3NwaW46YWN0aXZlOmFmdGVye1xyXG5cdGZvbnQtc2l6ZToxNXB4O1x0XHJcbn1cclxuXHJcblxyXG4jc2hpbmV7XHJcblx0d2lkdGg6MjUwcHg7XHJcblx0aGVpZ2h0OjI1MHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdGxlZnQ6MDtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbmJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBXM0MgKi9cclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcblxyXG5cclxub3BhY2l0eTowLjE7XHJcblx0XHJcbn1cclxuXHJcblxyXG5cclxuLy8gYW5pbWF0aW9uc1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGgge1xyXG5cdDAlLCAxMDAle1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuICBcclxuXHQ1MCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGhoIHtcclxuXHQgMCUsIDEwMCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG4gIFxyXG5cdDUwJXtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGluIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogaGggMC4xczsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcblx0ICBhbmltYXRpb246IGhoIDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICIsIiN3cmFwcGVyIHtcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcbiAgd2lkdGg6IDM3Mi40cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGl2I3doZWVsIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMTBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggM3B4IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbiN3aGVlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDMzOC44cHg7XG4gIGhlaWdodDogMzM4LjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jaW5uZXItd2hlZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbn1cblxuI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGNsaXA6IHJlY3QoMHB4LCAzNTBweCwgMzUwcHgsIDE3NXB4KTtcbiAgbGVmdDogLTdweDtcbiAgdG9wOiAtOXB4O1xufVxuXG4jd2hlZWwgZGl2LnNlYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXA6IHJlY3QoMHB4LCAxNzVweCwgMzUwcHgsIDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDM1MHB4O1xufVxuXG4jd2hlZWwgZGl2LnNlYyBzcGFuIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogLTEyMHB4O1xuICB0ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtMXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbn1cblxuI3NwaW4ge1xuICB3aWR0aDogOTUuMjAxODI3ODc1MXB4O1xuICBoZWlnaHQ6IDk1LjIwMTgyNzg3NTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1Ny41cHg7XG4gIGxlZnQ6IDE1NS43NXB4O1xuICBtYXJnaW46IC0zNHB4IDAgMCAtMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDNweCAwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNzcGluOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogOTUuMjAxODI3ODc1MXB4O1xuICBjb2xvcjogI0NDQztcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDAgI2ZmZiwgMCAtMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgd2lkdGg6IDk1LjIwMTgyNzg3NTFweDtcbiAgaGVpZ2h0OiA5NS4yMDE4Mjc4NzUxcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc3BpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAyMHB4IDI4cHggMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyOHB4O1xufVxuXG4jaW5uZXItc3BpbiB7XG4gIHdpZHRoOiA3NS43NTc1NzU3NTc2cHg7XG4gIGhlaWdodDogNzUuNzU3NTc1NzU3NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYuODQyMTA1MjYzMnB4O1xuICBsZWZ0OiAzNi44NDIxMDUyNjMycHg7XG4gIG1hcmdpbjogLTI3cHggMCAwIC0yN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiB3aGl0ZSAwcHggLTJweCAwcHggaW5zZXQsIHdoaXRlIDBweCAycHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxMDAlLCAjZWFlYWVhKSk7XG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogT3BlcmEgMTIrICovXG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogSUUxMCsgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogVzNDICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNlYWVhZWFcIixHcmFkaWVudFR5cGU9MSApO1xuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbiNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDVweCBpbnNldDtcbn1cblxuI3NwaW46YWN0aXZlOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jc2hpbmUge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBGRjMuNisgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgd2hpdGUpLCBjb2xvci1zdG9wKDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpKSwgY29sb3Itc3RvcCg5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxKSA5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OSkgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkgOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIC8qIE9wZXJhIDEyKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OSkgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkgOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OSkgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkgOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIC8qIFczQyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjMDBmZmZmZmZcIixHcmFkaWVudFR5cGU9MSApO1xuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGhoIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGhoIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xuICB9XG59XG4uc3BpbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoaCAwLjFzO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgYW5pbWF0aW9uOiBoaCAwLjFzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: ['./spinner.component.scss']
            }]
    }], function () { return [{ type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }]; }, { wheelSecs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['wheelSec']
        }], Text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['txt']
        }], spin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['spin']
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USUARIO\Documents\Ricardo\Proyectos\SpinnerApp\SpinnerApp\client\spinner-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map