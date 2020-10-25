function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 1,
      vars: 0,
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.sass']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animations/app.animations.ts":
  /*!**********************************************!*\
    !*** ./src/app/animations/app.animations.ts ***!
    \**********************************************/

  /*! exports provided: visibility, expand */

  /***/
  function srcAppAnimationsAppAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "visibility", function () {
      return visibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "expand", function () {
      return expand;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function visibility() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1.0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out'))]);
    }

    function expand() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-50%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      }))])]);
    }
    /***/

  },

  /***/
  "./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routes */
    "./src/app/app-routing/routes.ts");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing/routes.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing/routes.ts ***!
    \***************************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutingRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../customize-spinner/customize-spinner.component */
    "./src/app/customize-spinner/customize-spinner.component.ts");
    /* harmony import */


    var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../email-list/email-list.component */
    "./src/app/email-list/email-list.component.ts");
    /* harmony import */


    var _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../custom-script/custom-script.component */
    "./src/app/custom-script/custom-script.component.ts");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _backend_control_backend_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../backend-control/backend-control.component */
    "./src/app/backend-control/backend-control.component.ts");
    /* harmony import */


    var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../password-change/password-change.component */
    "./src/app/password-change/password-change.component.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/guards/login.guard */
    "./src/app/services/guards/login.guard.ts");

    var routes = [{
      path: 'spinner',
      component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
      children: [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
      }, {
        path: 'bc',
        component: _backend_control_backend_control_component__WEBPACK_IMPORTED_MODULE_5__["BackendControlComponent"],
        canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]],
        children: [{
          path: 'password-change',
          component: _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_6__["PasswordChangeComponent"],
          canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]]
        }, {
          path: 'customize-spinner',
          component: _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_1__["CustomizeSpinnerComponent"],
          canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]]
        }, {
          path: 'email-list',
          component: _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_2__["EmailListComponent"],
          canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]]
        }, {
          path: 'custom-script',
          component: _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_3__["CustomScriptComponent"],
          canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"]]
        }]
      }]
    }, {
      path: '',
      redirectTo: '/spinner',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/spinner',
      pathMatch: 'full'
    }, {
      path: 'admin',
      redirectTo: 'admin/login',
      pathMatch: 'full'
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(headerFooterService, metaService, Pagetitle) {
        _classCallCheck(this, AppComponent);

        this.headerFooterService = headerFooterService;
        this.metaService = metaService;
        this.Pagetitle = Pagetitle;
        this.API_IMAGE_URL = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_1__["baseHref"], "api/v1/imageUpload/");
        this.favIcon = document.querySelector('#favIcon');
        this.baseHref = document.querySelector('#baseHref');
        this.title = 'spinner-app';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHeaderFooter();
        }
      }, {
        key: "getHeaderFooter",
        value: function getHeaderFooter() {
          var _this = this;

          this.headerFooterService.getHeaderFooter().subscribe(function (headerFooter) {
            _this.HeaderFooter = headerFooter[0];
            _this.baseHref.href = _shared_baseHref__WEBPACK_IMPORTED_MODULE_1__["baseHref"];
            _this.favIcon.href = _this.API_IMAGE_URL + _this.HeaderFooter.favicon.slice(14);

            _this.Pagetitle.setTitle(_this.HeaderFooter.pageTitle);

            _this.metaService.addTag({
              name: 'description',
              content: _this.HeaderFooter.pageDescription
            }); //Description

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_2__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn0iLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_2__["HeaderFooterService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing/app-routing.module */
    "./src/app/app-routing/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./customize-spinner/customize-spinner.component */
    "./src/app/customize-spinner/customize-spinner.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./email-list/email-list.component */
    "./src/app/email-list/email-list.component.ts");
    /* harmony import */


    var _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./custom-script/custom-script.component */
    "./src/app/custom-script/custom-script.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/spinner/spinner.component.ts");
    /* harmony import */


    var _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./password-change/password-change.component */
    "./src/app/password-change/password-change.component.ts");
    /* harmony import */


    var _backend_control_backend_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./backend-control/backend-control.component */
    "./src/app/backend-control/backend-control.component.ts");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], {
        provide: 'baseHref',
        useValue: _shared_baseHref__WEBPACK_IMPORTED_MODULE_16__["baseHref"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"], _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"], _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_14__["PasswordChangeComponent"], _backend_control_backend_control_component__WEBPACK_IMPORTED_MODULE_15__["BackendControlComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"], _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"], _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _password_change_password_change_component__WEBPACK_IMPORTED_MODULE_14__["PasswordChangeComponent"], _backend_control_backend_control_component__WEBPACK_IMPORTED_MODULE_15__["BackendControlComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"], {
            provide: 'baseHref',
            useValue: _shared_baseHref__WEBPACK_IMPORTED_MODULE_16__["baseHref"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend-control/backend-control.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/backend-control/backend-control.component.ts ***!
    \**************************************************************/

  /*! exports provided: BackendControlComponent */

  /***/
  function srcAppBackendControlBackendControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendControlComponent", function () {
      return BackendControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BackendControlComponent = /*#__PURE__*/function () {
      function BackendControlComponent() {
        _classCallCheck(this, BackendControlComponent);

        this.isMenuCollapsed = true;
      }

      _createClass(BackendControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackendControlComponent;
    }();

    BackendControlComponent.ɵfac = function BackendControlComponent_Factory(t) {
      return new (t || BackendControlComponent)();
    };

    BackendControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BackendControlComponent,
      selectors: [["app-backend-control"]],
      decls: 10,
      vars: 1,
      consts: [[1, "row"], [1, "col-12", "col-lg-2", "menuBar", "navbar", "navbar-expand-lg", "p-0"], [1, "ButtonToggler"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], [1, "appNavbar", "d-flex", "justify-content-center", "align-items-start"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "col-12", "col-lg-10", "routerOutletContent"], [1, "routerOutlet"]],
      template: function BackendControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackendControlComponent_Template_button_click_3_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-navbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".row[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.menuBar[_ngcontent-%COMP%], .routerOutletContent[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  background-color: black;\n}\n\n.routerOutletContent[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.routerOutletContent[_ngcontent-%COMP%]   .routerOutlet[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.appNavbar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n}\n\n@media only screen and (max-width: 991px) {\n  .appNavbar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2VuZC1jb250cm9sL0M6XFxVc2Vyc1xcanVhbmNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEp1YW4gTWlndWVsXFxDVVJTTyBIVE1MXFx1cHdvcmtcXFNwaW5uZXItd2l0aC1iYWNrZW5kLWNvbnRyb2xcXFNwaW5uZXJBcHBcXGNsaWVudFxcc3Bpbm5lci1hcHAvc3JjXFxhcHBcXGJhY2tlbmQtY29udHJvbFxcYmFja2VuZC1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYWNrZW5kLWNvbnRyb2wvYmFja2VuZC1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREVJO0VBQ0ksWUFBQTtBQ0FSOztBRElBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2tlbmQtY29udHJvbC9iYWNrZW5kLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tZW51QmFyLCAucm91dGVyT3V0bGV0Q29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLnJvdXRlck91dGxldENvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5yb3V0ZXJPdXRsZXQge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcE5hdmJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5hcHBOYXZiYXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuIiwiLnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1lbnVCYXIsIC5yb3V0ZXJPdXRsZXRDb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnJvdXRlck91dGxldENvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yb3V0ZXJPdXRsZXRDb250ZW50IC5yb3V0ZXJPdXRsZXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHBOYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYXBwTmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-backend-control',
          templateUrl: './backend-control.component.html',
          styleUrls: ['./backend-control.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom-script/custom-script.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/custom-script/custom-script.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomScriptComponent */

  /***/
  function srcAppCustomScriptCustomScriptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomScriptComponent", function () {
      return CustomScriptComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/ImageSnippet */
    "./src/app/shared/ImageSnippet.ts");
    /* harmony import */


    var _animations_app_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations/app.animations */
    "./src/app/animations/app.animations.ts");
    /* harmony import */


    var _services_custom_script_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/custom-script.service */
    "./src/app/services/custom-script.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomScriptComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
      }
    }

    function CustomScriptComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formErrors.header);
      }
    }

    function CustomScriptComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
      }
    }

    function CustomScriptComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formErrors.footer);
      }
    }

    function CustomScriptComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
      }
    }

    function CustomScriptComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.formErrors.pageTitle);
      }
    }

    function CustomScriptComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
      }
    }

    function CustomScriptComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.formErrors.pageDescription);
      }
    }

    function CustomScriptComponent_div_42_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomScriptComponent_div_42_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomScriptComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomScriptComponent_div_42_div_1_Template, 3, 0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomScriptComponent_div_42_div_2_Template, 3, 0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.SuccessfullyUpload);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.UnsuccessfullyUpload);
      }
    }

    var CustomScriptComponent = /*#__PURE__*/function () {
      function CustomScriptComponent(customScriptService, imageService, fb) {
        _classCallCheck(this, CustomScriptComponent);

        this.customScriptService = customScriptService;
        this.imageService = imageService;
        this.fb = fb;
        this.formErrors = {
          'header': '',
          'footer': '',
          'pageTitle': '',
          'pageDescription': ''
        };
        this.validationMessages = {
          'header': {
            'required': 'Header is required.'
          },
          'footer': {
            'required': 'Footer is required.'
          },
          'pageTitle': {
            'required': 'Title is required.'
          },
          'pageDescription': {
            'required': 'Description is required'
          }
        }; //Submition

        this.FormSuccessfullySend = false;
        this.createForm();
      }

      _createClass(CustomScriptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          var _this2 = this;

          this.HeaderFooterForm = this.fb.group({
            header: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            footer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pageTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pageDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            favicon: ['']
          });
          this.HeaderFooterForm.valueChanges.subscribe(function (data) {
            return _this2.onValueChanged(data);
          });
          this.onValueChanged(); // (re)set validation messages now
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.HeaderFooterForm) {
            return;
          }

          var form = this.HeaderFooterForm;

          for (var field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              var control = form.get(field);

              if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.formErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }
        }
      }, {
        key: "onSuccess",
        value: function onSuccess(path) {
          this.StringOfImageUpload = path;
          this.SuccessfullyUpload = true;
          this.UnsuccessfullyUpload = false;
        }
      }, {
        key: "onError",
        value: function onError() {
          this.UnsuccessfullyUpload = true;
          this.SuccessfullyUpload = false;
        }
      }, {
        key: "processFile",
        value: function processFile(image) {
          var _this3 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this3.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target.result, file);

            _this3.imageService.uploadImage(_this3.selectedFile.file).subscribe(function (res) {
              _this3.onSuccess(res.path);
            }, function (err) {
              _this3.onError();

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          this.FormSuccessfullySend = true;
          this.customScriptService.deleteHeaderFooter().subscribe(function () {
            _this4.formCopy = _this4.HeaderFooterForm.value;
            _this4.formCopy.favicon = _this4.StringOfImageUpload.replace(/\\/g, "/");

            _this4.customScriptService.sendHeaderFooter(_this4.formCopy).subscribe(function (HFform) {
              _this4.form = HFform;
              setTimeout(function () {
                _this4.FormSuccessfullySend = false;
              }, 2000);
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });

            _this4.HeaderFooterForm.reset();
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        }
      }]);

      return CustomScriptComponent;
    }();

    CustomScriptComponent.ɵfac = function CustomScriptComponent_Factory(t) {
      return new (t || CustomScriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_custom_script_service__WEBPACK_IMPORTED_MODULE_4__["CustomScriptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CustomScriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomScriptComponent,
      selectors: [["app-custom-script"]],
      decls: 49,
      vars: 15,
      consts: [[1, "bgColor"], [1, "container"], [1, "title"], [1, "row"], [1, "col-10", "mr-auto", 3, "hidden"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "header"], ["required", "", "formControlName", "header", "id", "header", "name", "header", "rows", "3", 1, "form-control"], ["class", "ErrorMessage", 4, "ngIf"], ["for", "footer"], ["required", "", "formControlName", "footer", "id", "footer", "name", "footer", "rows", "3", 1, "form-control"], ["for", "title"], ["required", "", "formControlName", "pageTitle", "type", "text", "id", "title", "name", "title", 1, "form-control"], ["for", "description"], ["required", "", "formControlName", "pageDescription", "id", "description", "name", "description", "rows", "3", 1, "form-control"], ["for", "favicon"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex"], ["id", "FileUploadBox"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["formControlName", "favicon", "type", "file", 2, "display", "none", 3, "change"], ["favicon", ""], ["id", "FileUploadMessageBox", "class", "ml-1", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-success", 3, "disabled"], [1, "customScriptSuccessfullySend", 3, "hidden"], [1, "ErrorMessage"], [2, "color", "red"], ["id", "FileUploadMessageBox", 1, "ml-1"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"]],
      template: function CustomScriptComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Insert Custom Script");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomScriptComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HEADER:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomScriptComponent_div_12_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomScriptComponent_div_13_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Footer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomScriptComponent_div_18_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CustomScriptComponent_div_19_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Page title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustomScriptComponent_div_24_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomScriptComponent_div_25_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Page description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CustomScriptComponent_div_30_Template, 1, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CustomScriptComponent_div_31_Template, 3, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Favicon:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomScriptComponent_Template_button_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return _r8.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomScriptComponent_Template_input_change_40_listener($event) {
            return ctx.processFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CustomScriptComponent_div_42_Template, 3, 2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "The custom script has been successfully saved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.FormSuccessfullySend)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.HeaderFooterForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formErrors.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formErrors.footer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.footer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formErrors.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.pageTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.formErrors.pageDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.pageDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.HeaderFooterForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.FormSuccessfullySend)("@expand", undefined);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 50px 20px 20px 40px;\n  color: white;\n  min-height: 100vh;\n  height: 100%;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.btnInput[_ngcontent-%COMP%], .colorInput[_ngcontent-%COMP%] {\n  height: 33px -2px;\n  width: 90px;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .textFieldOne[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.customScriptSuccessfullySend[_ngcontent-%COMP%] {\n  min-height: 600px;\n  width: 100%;\n}\n\n.ErrorMessage[_ngcontent-%COMP%] {\n  min-height: 20px;\n  max-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNjcmlwdC9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxjdXN0b20tc2NyaXB0XFxjdXN0b20tc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FES0E7RUFDSSx1QkFGa0I7QUNBdEI7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQWRVO0FDWWQ7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RSOztBREdJO0VBQ0ksWUFBQTtBQ0RSOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmdDb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XHJcbn1cclxuXHJcbiRJbnB1dEhlaWdodDogMzNweDtcclxuJEJvcmRlclJhZGlvdXM6IDVweDtcclxuJElucHV0QnV0dG9uc0JvcmRlcnM6IDFweCBzb2xpZCB3aGl0ZTtcclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcblxyXG4uYnRuSW5wdXQsIC5jb2xvcklucHV0IHtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0IC0ycHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLkltYWdlVXBsb2FkQW5kTWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodDtcclxuICAgIC5hbGVydCB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICAudGV4dEZpZWxkT25lIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b21TY3JpcHRTdWNjZXNzZnVsbHlTZW5kIHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5FcnJvck1lc3NhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn0iLCJkaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5idG5JbnB1dCwgLmNvbG9ySW5wdXQge1xuICBoZWlnaHQ6IDMzcHggLTJweDtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2Uge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzNweDtcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLmFsZXJ0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLnRleHRGaWVsZE9uZSB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmN1c3RvbVNjcmlwdFN1Y2Nlc3NmdWxseVNlbmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5FcnJvck1lc3NhZ2Uge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xufSJdfQ== */"],
      data: {
        animation: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_3__["expand"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomScriptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-script',
          templateUrl: './custom-script.component.html',
          styleUrls: ['./custom-script.component.scss'],
          animations: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_3__["expand"])()]
        }]
      }], function () {
        return [{
          type: _services_custom_script_service__WEBPACK_IMPORTED_MODULE_4__["CustomScriptService"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/customize-spinner/customize-spinner.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customize-spinner/customize-spinner.component.ts ***!
    \******************************************************************/

  /*! exports provided: CustomizeSpinnerComponent, UploadFile */

  /***/
  function srcAppCustomizeSpinnerCustomizeSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomizeSpinnerComponent", function () {
      return CustomizeSpinnerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFile", function () {
      return UploadFile;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/form-spinner-controller */
    "./src/app/shared/form-spinner-controller.ts");
    /* harmony import */


    var _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/ImageSnippet */
    "./src/app/shared/ImageSnippet.ts");
    /* harmony import */


    var _animations_app_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../animations/app.animations */
    "./src/app/animations/app.animations.ts");
    /* harmony import */


    var _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/spinner-customizer-controller.service */
    "./src/app/services/spinner-customizer-controller.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _services_center_image_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/center-image.service */
    "./src/app/services/center-image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["modal"];
    var _c1 = ["percentage"];

    function CustomizeSpinnerComponent_tr_58_td_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_58_td_7_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_58_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_tr_58_td_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          return _r13.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 60, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_58_td_7_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.processFile($event, i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomizeSpinnerComponent_tr_58_td_7_div_9_Template, 3, 0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomizeSpinnerComponent_tr_58_td_7_div_10_Template, 3, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.SuccessfullyUpload[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.UnsuccessfullyUpload[i_r7]);
      }
    }

    function CustomizeSpinnerComponent_tr_58_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_58_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Min 0% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_58_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Max 100% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_58_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_58_Template_select_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r7 = ctx.index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onChangeImage($event.target.value, i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizeSpinnerComponent_tr_58_td_7_Template, 11, 2, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizeSpinnerComponent_tr_58_td_8_Template, 3, 0, "td", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 51, 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomizeSpinnerComponent_tr_58_Template_input_keyup_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r7 = ctx.index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.MessageErrorChange(i_r7);
        })("click", function CustomizeSpinnerComponent_tr_58_Template_input_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r7 = ctx.index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.MessageErrorChange(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomizeSpinnerComponent_tr_58_div_13_Template, 3, 0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomizeSpinnerComponent_tr_58_div_14_Template, 3, 0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_58_Template_select_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r7 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.onChangeResult($event.target.value, i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Text Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var spinnerfield_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsImageFile[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsTextField[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r6.controls.percentage.hasError("required") && ctx_r0.submitPressed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isPercentageLessThanZero[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isPercentageMoreThanHundred[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r6.controls.color.hasError("required") && ctx_r0.submitPressed);
      }
    }

    function CustomizeSpinnerComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_ng_template_96_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_96_Template_button_click_1_listener() {
          var modal_r26 = ctx.$implicit;
          return modal_r26.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You have exceed the maximum value, Total percentage must be equal to 100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_96_Template_button_click_8_listener() {
          var modal_r26 = ctx.$implicit;
          return modal_r26.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CustomizeSpinnerComponent = /*#__PURE__*/function () {
      function CustomizeSpinnerComponent(formBuilder, // For number of field dropdown
      spinnerService, // Form validations
      imageService, centerImageService, modalService) {
        _classCallCheck(this, CustomizeSpinnerComponent);

        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.imageService = imageService;
        this.centerImageService = centerImageService;
        this.modalService = modalService; //Collapse menu

        this.isMenuCollapsed = true; // For number of field dropdown

        this.items = [];
        this.submitPressed = false; // For imageUpload / Text Field

        this.itIsImageFile = [false];
        this.itIsTextField = [false]; // For imageUpload / Text Field
        // For results dropdown

        this.itIsTextPopUp = [false];
        this.itIsEmailPopUp = [false];
        this.StringOfImageUpload = [];
        this.SuccessfullyUpload = [];
        this.UnsuccessfullyUpload = []; //For percentage 100%

        this.totalPercentage = [];
        this.isPercentageLessThanZero = [false];
        this.isPercentageMoreThanHundred = [false];
        this.SumOfPercentageEqualHundred = false;
        this.SumOfPercentageMoreThanHundred = false;
        this.percentageValues = []; //Submiting

        this.sucessFormSubmition = false;
        this.sucessCenterImageSubmition = false;
        this.unsuccessSendingForm = false;
        this.closeResult = '';
        this.SpinnerformErrors = {
          'isItImage': '',
          'percentage': '',
          'isItEmail': '',
          'color': ''
        };
        this.validationMessages = {
          'isItImage': {
            'required': 'image or text is required.'
          },
          'percentage': {
            'required': 'Percentage is required.',
            'pattern': 'Value must be a number',
            'min': 'Minumun possible value is 0%',
            'max': 'Maximum possible value is 100%'
          },
          'isItEmail': {
            'required': 'is it email? is required.'
          },
          'color': {
            'required': 'color is required.'
          }
        };
        this.DidModalOpen = false; // Setting Form Array

        this.spinnerForm = this.formBuilder.group({
          spinnerArray: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.createFormFieldForCenterSpinnerImage();
      }

      _createClass(CustomizeSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Sets default 6 boxes
          for (var _i = 0; _i < 6; _i++) {
            this.addControl(_i);
          } // For imageUpload / Text Field


          var i = 0;

          for (i = 0; i <= this.items.length; i++) {
            this.itIsImageFile[i] = true;
          } // For imageUpload / Text Field
          // For number of field dropdown


          for (i = 0; i <= this.items.length; i++) {
            this.itIsTextPopUp[i] = true;
          } // For number of field dropdown


          this.definingPercentage();
        }
      }, {
        key: "createSpFormGroup",
        value: function createSpFormGroup() {
          var _this5 = this;

          var SpinnerForm = this.formBuilder.group({
            isItImage: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: [''],
            textFieldOne: [''],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            isItEmail: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            textPopUp: [''],
            emails: [''],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          SpinnerForm.valueChanges.subscribe(function (data) {
            _this5.onValueChanged(SpinnerForm, data);
          });
          this.onValueChanged(SpinnerForm);
          return SpinnerForm;
        }
      }, {
        key: "createFormFieldForCenterSpinnerImage",
        value: function createFormFieldForCenterSpinnerImage() {
          this.CenterImageForm = this.formBuilder.group({
            centerImage: ['']
          });
        }
      }, {
        key: "MessageErrorChange",
        value: function MessageErrorChange(i) {
          var _this6 = this;

          var keyPressEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'keypress');
          var keyDownEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'keydown');
          var keyupEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'keyup');
          var inputEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'input');
          var changeEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'change');
          var focusEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'focus');
          var focusoutEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.percentage.toArray()[i].nativeElement, 'blur');
          var allEvents$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changeEvent$, inputEvent$, keyDownEvent$, keyPressEvent$, keyupEvent$, focusEvent$, focusoutEvent$);
          allEvents$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            var value = Number(event.target.value);

            if (value > 100) {
              event.target.value = 100;
              _this6.isPercentageMoreThanHundred[i] = true;
              _this6.percentageValues[i] = value;
            } else if (value < 0) {
              event.target.value = 0;
              _this6.isPercentageLessThanZero[i] = true;
            } else if (value >= 0 && value <= 100) {
              _this6.isPercentageMoreThanHundred[i] = false;
              _this6.isPercentageLessThanZero[i] = false;
              _this6.percentageValues[i] = value;
            }

            _this6.checkfullpercentage();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1)).subscribe();
          this.DidModalOpen = false;
        }
      }, {
        key: "checkfullpercentage",
        value: function checkfullpercentage() {
          this.percentageSum = this.percentageValues.reduce(function (a, b) {
            return a + b;
          }, 0);

          if (this.percentageSum === 100) {
            this.SumOfPercentageEqualHundred = true;
            this.SumOfPercentageMoreThanHundred = false;
          } else if (this.percentageSum <= 100) {
            this.SumOfPercentageEqualHundred = false;
            this.SumOfPercentageMoreThanHundred = true;
          } else if (this.percentageSum > 100) {
            this.SumOfPercentageMoreThanHundred = true;
            this.SumOfPercentageEqualHundred = false;

            if (this.DidModalOpen === false) {
              this.open(this.modal);
              this.DidModalOpen = true;
            }
          }
        }
      }, {
        key: "definingPercentage",
        value: function definingPercentage() {
          for (var i = 0; i < this.items.length; i++) {
            this.isPercentageMoreThanHundred.length = i;
            this.percentageValues.length = i;
            this.isPercentageLessThanZero.length = i;
            this.isPercentageMoreThanHundred[i] = false;
            this.isPercentageLessThanZero[i] = false;
            this.percentageValues[i] = 0;
          }
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(SpinnerForm, data) {
          if (!SpinnerForm) {
            return;
          }

          var form = SpinnerForm;

          for (var field in this.SpinnerformErrors) {
            if (this.SpinnerformErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.SpinnerformErrors[field] = '';
              var control = form.get(field);

              if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];

                for (var key in control.errors) {
                  if (control.errors.hasOwnProperty(key)) {
                    this.SpinnerformErrors[field] += messages[key] + ' ';
                  }
                }
              }
            }
          }
        } //Image Upload

      }, {
        key: "onSuccess",
        value: function onSuccess(index, path) {
          this.StringOfImageUpload.push(new UploadFile(index, path));
          this.SuccessfullyUpload[index] = true;
          this.UnsuccessfullyUpload[index] = false;
        }
      }, {
        key: "onError",
        value: function onError(index) {
          this.UnsuccessfullyUpload[index] = true;
          this.SuccessfullyUpload[index] = false;
        }
      }, {
        key: "processFile",
        value: function processFile(image, index) {
          var _this7 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this7.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_6__["ImageSnippet"](event.target.result, file);

            _this7.imageService.uploadImage(_this7.selectedFile.file).subscribe(function (res) {
              _this7.onSuccess(index, res.path);
            }, function (err) {
              _this7.onError(index);

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        } //Center spinner image

      }, {
        key: "onSuccessCenter",
        value: function onSuccessCenter(path) {
          this.StringOfSpinnerCenter = path;
          this.SuccessSpinnerCenter = true;
          this.UnsuccessSpinnerCenter = false;
        }
      }, {
        key: "onErrorCenter",
        value: function onErrorCenter() {
          this.UnsuccessSpinnerCenter = true;
          this.SuccessSpinnerCenter = false;
        }
      }, {
        key: "ProcessCenterImage",
        value: function ProcessCenterImage(image) {
          var _this8 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this8.selectedCenterFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_6__["ImageSnippet"](event.target.result, file);

            _this8.imageService.uploadImage(_this8.selectedCenterFile.file).subscribe(function (res) {
              _this8.onSuccessCenter(res.path);
            }, function (err) {
              _this8.onErrorCenter();

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        } /////

      }, {
        key: "onChange",
        // For number of field dropdown
        value: function onChange(i) {
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

          this.definingPercentage();
        }
      }, {
        key: "addControl",
        value: function addControl(i) {
          this.items.push({
            id: i.toString()
          });
          var fg = this.createSpFormGroup();

          if (this.spinnerArray) {
            this.spinnerArray.push(fg);
          }
        }
      }, {
        key: "deleteSpinnerField",
        value: function deleteSpinnerField(idx) {
          this.spinnerArray.removeAt(idx);
        }
      }, {
        key: "deleteImage",
        value: function deleteImage() {
          this.centerImageService.deleteImageCenter().subscribe(function () {}, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        } // For number of field dropdown
        //For image text selection

      }, {
        key: "onChangeImage",
        value: function onChangeImage(option, i) {
          if (option === "0: true") {
            this.itIsImageFile[i] = true;
            this.itIsTextField[i] = false;
          } else if (option === "1: false") {
            this.itIsImageFile[i] = false;
            this.itIsTextField[i] = true;
          }
        } //For image text selection
        // For number of field dropdown

      }, {
        key: "onChangeResult",
        value: function onChangeResult(option, i) {
          if (option === 'text') {
            this.itIsTextPopUp[i] = true;
            this.itIsEmailPopUp[i] = false;
          } else if (option === 'email') {
            this.itIsTextPopUp[i] = false;
            this.itIsEmailPopUp[i] = true;
          }
        } // For number of field dropdown

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this9 = this;

          var spinner = [];
          this.submitPressed = true; // if a field outside the array is added, change this to this.spinnerForm.value

          if (this.spinnerForm.status === "VALID") {
            if (this.percentageSum === 100) {
              var counter = 0;
              this.spinnerArray.value.forEach(function (element) {
                if (element.color === '') {
                  element.color = '#000000';
                }

                var field = new _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_5__["formSpinnerControl"](element.isItImage, element.image, element.textFieldOne, element.percentage, element.isItEmail, element.textPopUp, element.email, element.color);
                _this9.totalPercentage[counter] = element.percentage;

                _this9.StringOfImageUpload.forEach(function (file) {
                  if (file.index == counter) {
                    field.image = file.image;
                  }
                });

                spinner.push(field);
                counter++;
              });
              this.percentageSum = this.totalPercentage.reduce(function (a, b) {
                return a + b;
              }, 0);
              this.sucessFormSubmition = true;
              this.spinnerService.deleteSpinner().subscribe(function () {
                _this9.spinnerService.sendSpinner(spinner).subscribe(function (res) {
                  setTimeout(function () {
                    _this9.sucessFormSubmition = false;
                  }, 2000);

                  _this9.spinnerForm.reset();

                  _this9.StringOfImageUpload = []; // Resets the StringOfImageUpload array
                }, function (err) {
                  throw new Error('Error Sending the information about the spinner');
                });
              }, function (err) {
                throw new Error('Error deleting the information of the previous spineer');
              });
            } else {
              throw new Error('Error Percentage must add up 100%');
            }
          } else if (this.spinnerForm.status === "INVALID") {
            this.unsuccessSendingForm = true;
            setTimeout(function () {
              _this9.unsuccessSendingForm = false;
            }, 2000);
          }

          ;
        } //sucessCenterImageSubmition

      }, {
        key: "onSubmitCenterImage",
        value: function onSubmitCenterImage() {
          var _this10 = this;

          this.sucessCenterImageSubmition = true;
          this.centerImageService.deleteImageCenter().subscribe(function () {
            _this10.centerCopy = _this10.CenterImageForm.value;
            _this10.centerCopy.centerImage = _this10.StringOfSpinnerCenter.replace(/\\/g, "/");

            _this10.centerImageService.sendImageCenter(_this10.centerCopy).subscribe(function (HFform) {
              setTimeout(function () {
                _this10.sucessCenterImageSubmition = false;
              }, 2000);
              _this10.centerform = HFform;
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });

            _this10.CenterImageForm.reset();
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this11 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this11.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this11.closeResult = "Dismissed ".concat(_this11.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "spinnerArray",
        get: function get() {
          if (this.spinnerForm) {
            return this.spinnerForm.get('spinnerArray');
          }
        }
      }]);

      return CustomizeSpinnerComponent;
    }();

    CustomizeSpinnerComponent.ɵfac = function CustomizeSpinnerComponent_Factory(t) {
      return new (t || CustomizeSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerCustomizerControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_10__["CenterImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    CustomizeSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizeSpinnerComponent,
      selectors: [["app-customize-spinner"]],
      viewQuery: function CustomizeSpinnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.percentage = _t);
        }
      },
      decls: 98,
      vars: 15,
      consts: [[1, "bgColor"], [1, "container", "menu1"], [1, "row", "my-5"], [1, "col-12"], ["id", "settingNumber"], ["for", "numberOptions", 1, "mr-3"], ["matNativeControl", "", "name", "numberOptions", "required", "", 3, "change"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6", "selected", ""], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [3, "formGroup", "hidden", "ngSubmit"], [1, "table", "table-responsive-lg", "table-borderless"], ["formArrayName", "spinnerArray"], ["for", "ImageOption"], ["for", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["colspan", "3"], [3, "hidden"], [2, "color", "red", "font-size", "25px"], ["type", "submit", 1, "btn", "btn-success"], [1, "d-flex", "justify-content-end", "mt-2"], [1, "successFormSend", 3, "hidden"], [1, "mt-3"], [1, "d-flex"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex", "mr-3"], ["id", "FileUploadBox"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["formControlName", "centerImage", "type", "file", 2, "display", "none", 3, "change"], ["centerimageInput", ""], ["id", "FileUploadMessageBox", 1, "ml-1"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "ml-3"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ml-auto", "ml-2"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "successImageSend", 3, "hidden"], ["modal", ""], [3, "formGroupName"], ["formControlName", "isItImage", "required", "", 1, "inputType", 3, "change"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [4, "ngIf"], [1, "percentageContainer", "d-flex"], ["formControlName", "percentage", "type", "number", "name", "textField", "min", "0", "max", "100", 1, "PercentageInput", 3, "keyup", "click"], ["percentage", ""], ["class", "errorPercentageMessages ml-1 d-flex justify-content-center", 4, "ngIf"], ["formControlName", "isItEmail", "name", "resultOption", "required", "", 3, "change"], ["formControlName", "textPopUp", "type", "text", "name", "imageFile", 1, "textPopup"], [1, "colorInputContainer"], ["formControlName", "color", "type", "color", 1, "colorInput"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "btnInput", 3, "click"], ["formControlName", "file", "type", "file", "accept", "image/*", "name", "imageFile", 2, "display", "none", 3, "change"], ["imageInput", ""], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"], [1, "ImageUploadAndMessage", "d-flex"], ["formControlName", "textFieldOne", "type", "text", "name", "textField", 1, "textFieldOne"], [1, "errorPercentageMessages", "ml-1", "d-flex", "justify-content-center"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function CustomizeSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customize the spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number of fields on the spinner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_select_change_10_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_34_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Input type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "File / Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Percentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "bg Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, CustomizeSpinnerComponent_tr_58_Template, 26, 13, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "All percentages & colors are required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "The spinner fields data has been successfully saved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Image for middle of spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_75_listener() {
            return ctx.onSubmitCenterImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);

            return _r1.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_input_change_82_listener($event) {
            return ctx.ProcessCenterImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CustomizeSpinnerComponent_div_85_Template, 3, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CustomizeSpinnerComponent_div_86_Template, 3, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_91_listener() {
            return ctx.deleteImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Delete image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "The spinner center image has been successfully saved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, CustomizeSpinnerComponent_ng_template_96_Template, 10, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.spinnerForm)("hidden", ctx.sucessFormSubmition)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spinnerArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.unsuccessSendingForm)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.sucessFormSubmition)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.CenterImageForm)("hidden", ctx.sucessCenterImageSubmition)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SuccessSpinnerCenter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UnsuccessSpinnerCenter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.sucessCenterImageSubmition)("@expand", undefined);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n  min-height: 100vh;\n  height: 100%;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\ndiv.menu1[_ngcontent-%COMP%] {\n  padding: 50px 20px 30px 20px;\n  color: white;\n}\n.invalid[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\ndiv.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 140px;\n  border: 1px solid white;\n  border-radius: 5px;\n}\nselect[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 5px;\n  height: 33px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n.btnInput[_ngcontent-%COMP%], .colorInput[_ngcontent-%COMP%] {\n  height: 33px -2px;\n  width: 90px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 115px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  border: 1px solid black;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .textFieldOne[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.errorPercentageSum[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 73px;\n  background-color: lightgray;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.errorPercentageSum[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .errorPercentageSum[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 15px;\n  margin: 0;\n}\n.percentageContainer[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n.percentageContainer[_ngcontent-%COMP%]   .PercentageInput[_ngcontent-%COMP%] {\n  border: none;\n  width: 130px;\n  height: 33px -3px;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.percentageContainer[_ngcontent-%COMP%]   .errorPercentageMessages[_ngcontent-%COMP%] {\n  min-width: 72.2222222222px;\n  height: 33px -3px;\n  background-color: red;\n  border: 1px solid white;\n  border-radius: 5px;\n  text-align: center;\n}\n.percentageContainer[_ngcontent-%COMP%]   .errorPercentageMessages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0;\n}\n.textPopup[_ngcontent-%COMP%] {\n  height: 33px;\n}\n.colorInputContainer[_ngcontent-%COMP%]   .colorInput[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 80px !important;\n}\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.successFormSend[_ngcontent-%COMP%] {\n  min-height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9taXplLXNwaW5uZXIvQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcY3VzdG9taXplLXNwaW5uZXJcXGN1c3RvbWl6ZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FERUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxnQ0FBQTtBQ0NKO0FETUE7RUFDSSxZQUFBO0VBQ0EsdUJBTGtCO0VBTWxCLGtCQUxZO0FDRWhCO0FETUE7RUFDSSx1QkFWa0I7RUFXbEIsa0JBVlk7RUFXWixZQWJVO0FDVWQ7QURPQTtFQUNJLHVCQWpCa0I7QUNhdEI7QURPQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0pKO0FEUUE7RUFDSSxZQUFBO0VBQ0EsWUE3QlU7QUN3QmQ7QURNSTtFQUNJLFlBL0JNO0VBZ0NOLFlBQUE7QUNKUjtBRE1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNKUjtBRE1JO0VBQ0ksWUFBQTtBQ0pSO0FEUUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBbERrQjtFQW1EbEIsa0JBbERZO0FDNkNoQjtBRE1JO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNKUjtBRFNBO0VBQ0ksWUFGdUI7RUFHdkIsWUFoRVU7QUMwRGQ7QURPSTtFQUNJLFlBQUE7RUFDQSxZQU5tQjtFQU9uQixpQkFBQTtFQUNBLHVCQXBFYztFQXFFZCxrQkFwRVE7QUMrRGhCO0FET0k7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkEzRWM7RUE0RWQsa0JBM0VRO0VBNEVSLGtCQUFBO0FDTFI7QURNUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDSlo7QURRQTtFQUNJLFlBeEZVO0FDbUZkO0FEU0k7RUFDSSxZQTdGTTtFQThGTixzQkFBQTtBQ05SO0FEV0E7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNSRDtBRFdBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCAxOTAsIDk1KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCAxOTAsIDk1KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2Lm1lbnUxIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAzMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kSW5wdXRIZWlnaHQ6IDMzcHg7XHJcbiRJbnB1dEJ1dHRvbnNCb3JkZXJzOiAxcHggc29saWQgd2hpdGU7XHJcbiRCb3JkZXJSYWRpb3VzOiA1cHg7XHJcblxyXG5kaXYucm93IGlucHV0LCB0ZCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbiAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodDtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAkSW5wdXRCdXR0b25zQm9yZGVycztcclxufVxyXG5cclxuLmJ0bklucHV0LCAuY29sb3JJbnB1dCB7XHJcbiAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodCAtMnB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcblxyXG4uSW1hZ2VVcGxvYWRBbmRNZXNzYWdlIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0O1xyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0IHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIC50ZXh0RmllbGRPbmUge1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yUGVyY2VudGFnZVN1bXtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0KyA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyOiAkSW5wdXRCdXR0b25zQm9yZGVycztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRCb3JkZXJSYWRpb3VzO1xyXG4gICAgcCwgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6cmVkOyBcclxuICAgICAgICBmb250LXdlaWdodDpib2xkOyBcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiRQZXJjZW50YWdlQ29udGFpbmVyV2lkdGg6IDEzMHB4O1xyXG4ucGVyY2VudGFnZUNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogJFBlcmNlbnRhZ2VDb250YWluZXJXaWR0aDtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0O1xyXG4gICAgLlBlcmNlbnRhZ2VJbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAkUGVyY2VudGFnZUNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIGhlaWdodDogJElucHV0SGVpZ2h0IC0zcHg7XHJcbiAgICAgICAgYm9yZGVyOiAkSW5wdXRCdXR0b25zQm9yZGVycztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkQm9yZGVyUmFkaW91cztcclxuICAgIH1cclxuICAgIC5lcnJvclBlcmNlbnRhZ2VNZXNzYWdlcyB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAkUGVyY2VudGFnZUNvbnRhaW5lcldpZHRoLzEuODtcclxuICAgICAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodCAtM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRCb3JkZXJSYWRpb3VzO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnRleHRQb3B1cCB7XHJcbiAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodDtcclxufVxyXG5cclxuLmNvbG9ySW5wdXRDb250YWluZXIge1xyXG4gICAgLmNvbG9ySW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogJElucHV0SGVpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtYm9keSwgLm1vZGFsLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VjY2Vzc0Zvcm1TZW5kIHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmdDb2xvciB0YWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iZ0NvbG9yIHRhYmxlIGlucHV0LCAuYmdDb2xvciB0YWJsZSBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdDb2xvciBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYubWVudTEge1xuICBwYWRkaW5nOiA1MHB4IDIwcHggMzBweCAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbmRpdi5yb3cgaW5wdXQsIHRkIGlucHV0IHtcbiAgd2lkdGg6IDE0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmJ0bklucHV0LCAuY29sb3JJbnB1dCB7XG4gIGhlaWdodDogMzNweCAtMnB4O1xuICB3aWR0aDogOTBweDtcbn1cblxuLkltYWdlVXBsb2FkQW5kTWVzc2FnZSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuLkltYWdlVXBsb2FkQW5kTWVzc2FnZSAuYnRuIHtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogMTE1cHg7XG59XG4uSW1hZ2VVcGxvYWRBbmRNZXNzYWdlIC5hbGVydCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uSW1hZ2VVcGxvYWRBbmRNZXNzYWdlIC50ZXh0RmllbGRPbmUge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5lcnJvclBlcmNlbnRhZ2VTdW0ge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogNzNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmVycm9yUGVyY2VudGFnZVN1bSBwLCAuZXJyb3JQZXJjZW50YWdlU3VtIHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5wZXJjZW50YWdlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDMzcHg7XG59XG4ucGVyY2VudGFnZUNvbnRhaW5lciAuUGVyY2VudGFnZUlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzNweCAtM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBlcmNlbnRhZ2VDb250YWluZXIgLmVycm9yUGVyY2VudGFnZU1lc3NhZ2VzIHtcbiAgbWluLXdpZHRoOiA3Mi4yMjIyMjIyMjIycHg7XG4gIGhlaWdodDogMzNweCAtM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wZXJjZW50YWdlQ29udGFpbmVyIC5lcnJvclBlcmNlbnRhZ2VNZXNzYWdlcyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0UG9wdXAge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5cbi5jb2xvcklucHV0Q29udGFpbmVyIC5jb2xvcklucHV0IHtcbiAgaGVpZ2h0OiAzM3B4O1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtYm9keSwgLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWNjZXNzRm9ybVNlbmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"],
      data: {
        animation: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_7__["visibility"])(), Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_7__["expand"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customize-spinner',
          templateUrl: './customize-spinner.component.html',
          styleUrls: ['./customize-spinner.component.scss'],
          animations: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_7__["visibility"])(), Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_7__["expand"])()]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerCustomizerControllerService"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
        }, {
          type: _services_center_image_service__WEBPACK_IMPORTED_MODULE_10__["CenterImageService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, {
        percentage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['percentage']
        }],
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modal']
        }]
      });
    })();

    var UploadFile = function UploadFile(idx, fil) {
      _classCallCheck(this, UploadFile);

      this.index = idx;
      this.image = fil;
    };
    /***/

  },

  /***/
  "./src/app/email-list/email-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/email-list/email-list.component.ts ***!
    \****************************************************/

  /*! exports provided: EmailListComponent */

  /***/
  function srcAppEmailListEmailListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailListComponent", function () {
      return EmailListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_emails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/emails.service */
    "./src/app/services/emails.service.ts");
    /* harmony import */


    var _services_csvconverter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/csvconverter.service */
    "./src/app/services/csvconverter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmailListComponent_div_9_tr_15_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var email_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r4.EmailAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r4.FirstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r4.LastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, email_r4.DateSpin));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r4.Result);
      }
    }

    function EmailListComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 11);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailListComponent_div_9_tr_15_Template, 12, 7, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.emails);
      }
    }

    function EmailListComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_ng_template_13_Template_button_click_1_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure you want to delete the collected data?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_ng_template_13_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.deleteResults();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_ng_template_13_Template_button_click_10_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_ng_template_13_Template_button_click_12_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EmailListComponent = /*#__PURE__*/function () {
      function EmailListComponent(emailService, csvService, modalService, router) {
        _classCallCheck(this, EmailListComponent);

        this.emailService = emailService;
        this.csvService = csvService;
        this.modalService = modalService;
        this.router = router;
        this.closeResult = '';
        this.emails = [];
      }

      _createClass(EmailListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmails();
        }
      }, {
        key: "getEmails",
        value: function getEmails() {
          var _this12 = this;

          this.emailService.getEmails().subscribe(function (emails) {
            emails.forEach(function (email) {
              var EMAIL = new EmailResult(email.emailAddress, email.firstName, email.lastName, email.updatedAt, email.createdAt, email.result);

              _this12.emails.push(EMAIL);
            });
          });
        }
      }, {
        key: "exportCSV",
        value: function exportCSV() {
          this.csvService.downloadFile(this.emails);
        }
      }, {
        key: "deleteResults",
        value: function deleteResults() {
          this.emailService.deleteEmails().subscribe(function () {}, function (err) {
            throw new Error('Error deleting the information');
          });
          this.router.navigate(['backend-control/email-list']);
        } //modal

      }, {
        key: "open",
        value: function open(content) {
          var _this13 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this13.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this13.closeResult = "Dismissed ".concat(_this13.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return EmailListComponent;
    }();

    EmailListComponent.ɵfac = function EmailListComponent_Factory(t) {
      return new (t || EmailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_csvconverter_service__WEBPACK_IMPORTED_MODULE_3__["CSVconverterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    EmailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailListComponent,
      selectors: [["app-email-list"]],
      decls: 15,
      vars: 1,
      consts: [[1, "bgColor"], [1, "container", "col-12", "col-lg-10"], ["id", "title"], [1, "row"], [1, "col-12", "d-flex", "justify-content-end", "mb-5"], [1, "btn", "btn-info", 3, "click"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end", "mt-5"], [1, "btn", "btn-danger", 3, "click"], ["content", ""], [1, "col-12"], [1, "table", "table-sm", "table-responsive-lg", "table-striped"], [4, "ngFor", "ngForOf"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-4"], ["type", "button", 1, "btn", "btn-danger", "mr-5", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]],
      template: function EmailListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "List of collected Emails");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_Template_button_click_7_listener() {
            return ctx.exportCSV();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Export results csv/excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EmailListComponent_div_9_Template, 16, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            return ctx.open(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete Collected Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EmailListComponent_ng_template_13_Template, 14, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n  min-height: 100vh;\n  height: 100%;\n}\n\ndiv.container[_ngcontent-%COMP%] {\n  padding: 50px 30px 40px 30px;\n  min-height: 100vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtbGlzdC9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxlbWFpbC1saXN0XFxlbWFpbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbWFpbC1saXN0L2VtYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURHQTtFQUNJLHVCQUZrQjtBQ0V0Qjs7QURHQTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvZW1haWwtbGlzdC9lbWFpbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4IDQwcHggMzBweDsgICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyBcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuJElucHV0QnV0dG9uc0JvcmRlcnM6IDFweCBzb2xpZCB3aGl0ZTtcclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtYm9keSwgLm1vZGFsLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59IiwiLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweCAzMHB4IDQwcHggMzBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5LCAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-email-list',
          templateUrl: './email-list.component.html',
          styleUrls: ['./email-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"]
        }, {
          type: _services_csvconverter_service__WEBPACK_IMPORTED_MODULE_3__["CSVconverterService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();

    var EmailResult = function EmailResult(email, firstName, lastName, DateSpin, DateCreate, result) {
      _classCallCheck(this, EmailResult);

      this.EmailAddress = email;
      this.FirstName = firstName;
      this.LastName = lastName;
      this.DateSpin = DateSpin;
      this.DateCreation = DateCreate;
      this.Result = result;
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wrong Username or Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, loginservice, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.loginservice = loginservice;
        this.router = router;
        this.createForm();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.LoginError = false;
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.LoginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          if (this.LoginForm.status === "VALID") {
            var user = new _services_login_service__WEBPACK_IMPORTED_MODULE_2__["userLogin"](this.LoginForm.controls.username.value, this.LoginForm.controls.password.value);
            this.loginservice.Login(user).subscribe(function (resp) {
              if (resp.success === true) {
                _this14.LoginError = false;
                localStorage.setItem("userToken", resp.token);

                _this14.router.navigate(['admin/bc/customize-spinner']);
              }
            }, function (err) {
              _this14.LoginError = true;
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 23,
      vars: 2,
      consts: [[1, "container"], [1, "align-middle"], [1, "row"], [1, "col-12"], [1, "title", "d-flex", "justify-content-center"], [1, "formContent"], [3, "formGroup", "ngSubmit"], [1, "col-12", "d-flex", "justify-content-center", "mb-2"], [1, "field"], ["formControlName", "username", "type", "text", "placeholder", "Username", "required", ""], ["formControlName", "password", "type", "password", "placeholder", "Enter your password", "required", ""], [1, "col-12", "d-flex", "justify-content-center"], [1, "field", "d-flex", "justify-content-end"], [1, "btn", "btn-sm", "btn-danger"], ["class", "errorMessage", 4, "ngIf"], [1, "errorMessage"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 3, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.LoginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.LoginError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 70px 0;\n  text-align: center;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%], div.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 75%;\n  height: 200px;\n  align-items: center;\n  padding: 70px 0;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 20px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: red;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDSSxZQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRGhCOztBREtJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNIUjs7QURRQTtFQUNJLHVCQUZrQjtBQ0h0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5hbGlnbi1taWRkbGUge1xyXG5cclxuICAgIGRpdi50aXRsZSwgZGl2LmZvcm1Db250ZW50IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5mb3JtQ29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgZGl2LmZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuJElucHV0QnV0dG9uc0JvcmRlcnM6IDFweCBzb2xpZCB3aGl0ZTtcclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcblxyXG5cclxuIiwiZGl2LmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYuYWxpZ24tbWlkZGxlIGRpdi50aXRsZSwgZGl2LmFsaWduLW1pZGRsZSBkaXYuZm9ybUNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbmRpdi5hbGlnbi1taWRkbGUgZGl2LmZvcm1Db250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5kaXYuYWxpZ24tbWlkZGxlIC5lcnJvck1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.router.navigate(['/admin']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 29,
      vars: 0,
      consts: [[1, "container", "d-flex", "justify-content-lg-center"], [1, "image", "img-fluid", "d-none", "d-lg-block"], ["src", "https://dam.ngenespanol.com/wp-content/uploads/2019/06/arbol-mas-alto-del-mundo-770x395.png", "alt", "Fixed Photo"], [1, "mt-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/spinner", 1, "nav-link"], ["routerLink", "/admin/bc/customize-spinner", 1, "nav-link"], ["routerLink", "/admin/bc/email-list", 1, "nav-link"], ["routerLink", "/admin/bc/custom-script", 1, "nav-link"], ["routerLink", "/admin/bc/password-change", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "btn", "btn-danger", "mt-4", "ml-auto", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SPINNER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "CUSTOMIZE SPINNER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "EMAIL LIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CUSTOM SCRIPIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CHANGE PASSWORD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SUPPORT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "REQUEST FEATURE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_27_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  padding-bottom: 20px;\n  background-color: black;\n  height: 100%;\n}\n\ndiv.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  color: white;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n\n@media only screen and (max-width: 991px) {\n  div.container[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcanVhbmNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEp1YW4gTWlndWVsXFxDVVJTTyBIVE1MXFx1cHdvcmtcXFNwaW5uZXItd2l0aC1iYWNrZW5kLWNvbnRyb2xcXFNwaW5uZXJBcHBcXGNsaWVudFxcc3Bpbm5lci1hcHAvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFWTTtFQVdOLGFBWE07RUFZTixrQkFBQTtBQ0RKOztBREtJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNGUjs7QURPQTtFQUNJLGFBQUE7QUNKSjs7QURPQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtFQ0pOO0FBQ0Y7O0FEU0E7RUFDSSx1QkFIa0I7QUNKdEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGltZ1NpemU6IDE1MHB4O1xyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6ICRpbWdTaXplO1xyXG4gICAgaGVpZ2h0OiAkaW1nU2l6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbi5uYXYgLm5hdi1pdGVte1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5cclxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIGRpdi5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4kSW5wdXRCdXR0b25zQm9yZGVyczogMXB4IHNvbGlkIHdoaXRlO1xyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcbiIsImRpdi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5pbWFnZSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICBkaXYuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/password-change/password-change.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/password-change/password-change.component.ts ***!
    \**************************************************************/

  /*! exports provided: PasswordChangeComponent */

  /***/
  function srcAppPasswordChangePasswordChangeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordChangeComponent", function () {
      return PasswordChangeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_change_password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/change-password.service */
    "./src/app/services/change-password.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["modal"];

    function PasswordChangeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wrong Username or Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PasswordChangeComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_26_Template_button_click_1_listener() {
          var modal_r3 = ctx.$implicit;
          return modal_r3.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password Changed Successfully");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_26_Template_button_click_8_listener() {
          var modal_r3 = ctx.$implicit;
          return modal_r3.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PasswordChangeComponent = /*#__PURE__*/function () {
      function PasswordChangeComponent(fb, changePasswordservice, router, modalService) {
        _classCallCheck(this, PasswordChangeComponent);

        this.fb = fb;
        this.changePasswordservice = changePasswordservice;
        this.router = router;
        this.modalService = modalService;
        this.closeResult = '';
        this.createForm();
      }

      _createClass(PasswordChangeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.PasswordChangeError = false;
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.PasswordChangeForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this15 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this15.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this15.closeResult = "Dismissed ".concat(_this15.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          if (this.PasswordChangeForm.status === "VALID") {
            var user = new _services_change_password_service__WEBPACK_IMPORTED_MODULE_3__["passwordChange"](this.PasswordChangeForm.controls.username.value, this.PasswordChangeForm.controls.oldpassword.value, this.PasswordChangeForm.controls.newpassword.value);
            this.changePasswordservice.ChangePassword(user).subscribe(function (resp) {
              if (resp.success === true) {
                _this16.PasswordChangeError = false;

                _this16.open(_this16.modal);
              }
            }, function (err) {
              _this16.PasswordChangeError = true;
            });
          }
        }
      }]);

      return PasswordChangeComponent;
    }();

    PasswordChangeComponent.ɵfac = function PasswordChangeComponent_Factory(t) {
      return new (t || PasswordChangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_change_password_service__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    PasswordChangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PasswordChangeComponent,
      selectors: [["app-password-change"]],
      viewQuery: function PasswordChangeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 28,
      vars: 2,
      consts: [[1, "container"], [1, "align-middle"], [1, "row"], [1, "col-12"], [1, "title", "d-flex", "justify-content-center"], [1, "formContent"], [3, "formGroup", "ngSubmit"], [1, "col-12", "d-flex", "justify-content-center", "mb-2"], [1, "field"], ["formControlName", "username", "type", "text", "placeholder", "Username", "required", ""], ["formControlName", "oldpassword", "type", "password", "placeholder", "Enter your OLD password", "required", ""], ["formControlName", "newpassword", "type", "password", "placeholder", "Enter your NEW password", "required", ""], [1, "col-12", "d-flex", "justify-content-center"], [1, "field", "d-flex", "justify-content-end"], [1, "btn", "btn-sm", "btn-danger"], ["class", "errorMessage", 4, "ngIf"], ["modal", ""], [1, "errorMessage"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "routerLink", "/bc/customize-spinner", 1, "btn", "btn-success", 3, "click"]],
      template: function PasswordChangeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PasswordChangeComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PasswordChangeComponent_div_25_Template, 3, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PasswordChangeComponent_ng_template_26_Template, 10, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.PasswordChangeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PasswordChangeError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  padding-bottom: 70px;\n  padding-right: 0;\n  margin: 0 !important;\n  text-align: center;\n  min-height: 100vh;\n  height: 100%;\n  background-color: white;\n  min-width: 100%;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%], div.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 75%;\n  height: 250px;\n  align-items: center;\n  padding: 70px 0;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 20px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: red;\n}\n\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc3dvcmQtY2hhbmdlL0M6XFxVc2Vyc1xcanVhbmNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEp1YW4gTWlndWVsXFxDVVJTTyBIVE1MXFx1cHdvcmtcXFNwaW5uZXItd2l0aC1iYWNrZW5kLWNvbnRyb2xcXFNwaW5uZXJBcHBcXGNsaWVudFxcc3Bpbm5lci1hcHAvc3JjXFxhcHBcXHBhc3N3b3JkLWNoYW5nZVxccGFzc3dvcmQtY2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXNzd29yZC1jaGFuZ2UvcGFzc3dvcmQtY2hhbmdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDSSxZQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRGhCOztBREtJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNIUjs7QURRQTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQ0xEOztBRFNBO0VBQ0ksdUJBRmtCO0FDSnRCIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQtY2hhbmdlL3Bhc3N3b3JkLWNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5hbGlnbi1taWRkbGUge1xyXG5cclxuICAgIGRpdi50aXRsZSwgZGl2LmZvcm1Db250ZW50IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNzBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5mb3JtQ29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgZGl2LmZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5LCAubW9kYWwtZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiRJbnB1dEJ1dHRvbnNCb3JkZXJzOiAxcHggc29saWQgd2hpdGU7XHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAkSW5wdXRCdXR0b25zQm9yZGVycztcclxufVxyXG4iLCJkaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG5kaXYuYWxpZ24tbWlkZGxlIGRpdi50aXRsZSwgZGl2LmFsaWduLW1pZGRsZSBkaXYuZm9ybUNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbmRpdi5hbGlnbi1taWRkbGUgZGl2LmZvcm1Db250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5kaXYuYWxpZ24tbWlkZGxlIC5lcnJvck1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtYm9keSwgLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordChangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-password-change',
          templateUrl: './password-change.component.html',
          styleUrls: ['./password-change.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_change_password_service__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, {
        modal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/center-image.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/center-image.service.ts ***!
    \**************************************************/

  /*! exports provided: CenterImageService */

  /***/
  function srcAppServicesCenterImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CenterImageService", function () {
      return CenterImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var CenterImageService = /*#__PURE__*/function () {
      function CenterImageService(http, processHTTPMsgService) {
        _classCallCheck(this, CenterImageService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN)
          })
        };
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "api/v1/centerImage");
      }

      _createClass(CenterImageService, [{
        key: "getImageCenter",
        value: function getImageCenter() {
          return this.http.get(this.URL_API, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "sendImageCenter",
        value: function sendImageCenter(Form) {
          return this.http.post(this.URL_API, Form, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "deleteImageCenter",
        value: function deleteImageCenter() {
          return this.http["delete"](this.URL_API, this.httpOptions);
        }
      }]);

      return CenterImageService;
    }();

    CenterImageService.ɵfac = function CenterImageService_Factory(t) {
      return new (t || CenterImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    CenterImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CenterImageService,
      factory: CenterImageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/change-password.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/change-password.service.ts ***!
    \*****************************************************/

  /*! exports provided: ChangePasswordService, passwordChange */

  /***/
  function srcAppServicesChangePasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordService", function () {
      return ChangePasswordService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passwordChange", function () {
      return passwordChange;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var ChangePasswordService = /*#__PURE__*/function () {
      function ChangePasswordService(http, processHTTPMsgService) {
        _classCallCheck(this, ChangePasswordService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN),
            'Content-Type': 'application/json'
          })
        };
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "users/resetPassword");
      }

      _createClass(ChangePasswordService, [{
        key: "ChangePassword",
        value: function ChangePassword(user) {
          return this.http.post(this.URL_API, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return ChangePasswordService;
    }();

    ChangePasswordService.ɵfac = function ChangePasswordService_Factory(t) {
      return new (t || ChangePasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    ChangePasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ChangePasswordService,
      factory: ChangePasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangePasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();

    var passwordChange = function passwordChange(user, oldPass, newPass) {
      _classCallCheck(this, passwordChange);

      this.username = user;
      this.oldpassword = oldPass;
      this.newpassword = newPass;
    };
    /***/

  },

  /***/
  "./src/app/services/csvconverter.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/csvconverter.service.ts ***!
    \**************************************************/

  /*! exports provided: CSVconverterService */

  /***/
  function srcAppServicesCsvconverterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CSVconverterService", function () {
      return CSVconverterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CSVconverterService = /*#__PURE__*/function () {
      function CSVconverterService() {
        _classCallCheck(this, CSVconverterService);
      }

      _createClass(CSVconverterService, [{
        key: "downloadFile",
        value: function downloadFile(data) {
          var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Collected_Emails';
          var csvData = this.ConvertToCSV(data, ['EmailAddress', 'FirstName', 'LastName', 'DateSpin', 'DateCreation', 'Result']);
          var blob = new Blob(["\uFEFF" + csvData], {
            type: 'text/csv;charset=utf-8;'
          });
          var dwldLink = document.createElement("a");
          var url = URL.createObjectURL(blob);
          var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;

          if (isSafariBrowser) {
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
          }

          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", filename + ".csv");
          dwldLink.style.visibility = "hidden";
          document.body.appendChild(dwldLink);
          dwldLink.click();
          document.body.removeChild(dwldLink);
        }
      }, {
        key: "ConvertToCSV",
        value: function ConvertToCSV(objArray, headerList) {
          var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
          var str = '';
          var row = 'Number,';

          for (var index in headerList) {
            row += headerList[index] + ',';
          }

          row = row.slice(0, -1);
          str += row + '\r\n';

          for (var i = 0; i < array.length; i++) {
            var line = i + 1 + '';

            for (var _index in headerList) {
              var head = headerList[_index];
              line += ',' + array[i][head];
            }

            str += line + '\r\n';
          }

          return str;
        }
      }]);

      return CSVconverterService;
    }();

    CSVconverterService.ɵfac = function CSVconverterService_Factory(t) {
      return new (t || CSVconverterService)();
    };

    CSVconverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CSVconverterService,
      factory: CSVconverterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSVconverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/custom-script.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/custom-script.service.ts ***!
    \***************************************************/

  /*! exports provided: CustomScriptService */

  /***/
  function srcAppServicesCustomScriptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomScriptService", function () {
      return CustomScriptService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var CustomScriptService = /*#__PURE__*/function () {
      function CustomScriptService(http, processHTTPMsgService) {
        _classCallCheck(this, CustomScriptService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN),
            'Content-Type': 'application/json'
          })
        };
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "api/v1/headerFooter");
      }

      _createClass(CustomScriptService, [{
        key: "sendHeaderFooter",
        value: function sendHeaderFooter(Form) {
          return this.http.post(this.URL_API, Form, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "deleteHeaderFooter",
        value: function deleteHeaderFooter() {
          return this.http["delete"](this.URL_API, this.httpOptions);
        }
      }]);

      return CustomScriptService;
    }();

    CustomScriptService.ɵfac = function CustomScriptService_Factory(t) {
      return new (t || CustomScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    CustomScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomScriptService,
      factory: CustomScriptService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/emails.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/emails.service.ts ***!
    \********************************************/

  /*! exports provided: EmailsService */

  /***/
  function srcAppServicesEmailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailsService", function () {
      return EmailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var EmailsService = /*#__PURE__*/function () {
      function EmailsService(http, processHTTPMsgService) {
        _classCallCheck(this, EmailsService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "api/v1/results");
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN)
          })
        };
      }

      _createClass(EmailsService, [{
        key: "getEmails",
        value: function getEmails() {
          return this.http.get(this.URL_API, this.httpOptions) //Check and test later
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "sendEmails",
        value: function sendEmails(Form) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.URL_API, Form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "deleteEmails",
        value: function deleteEmails() {
          return this.http["delete"](this.URL_API, this.httpOptions);
        }
      }]);

      return EmailsService;
    }();

    EmailsService.ɵfac = function EmailsService_Factory(t) {
      return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    EmailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmailsService,
      factory: EmailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/guards/login.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/services/guards/login.guard.ts ***!
    \************************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppServicesGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(router) {
        _classCallCheck(this, LoginGuard);

        this.router = router;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem('userToken')) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ɵfac = function LoginGuard_Factory(t) {
      return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginGuard,
      factory: LoginGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/header-footer.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/header-footer.service.ts ***!
    \***************************************************/

  /*! exports provided: HeaderFooterService */

  /***/
  function srcAppServicesHeaderFooterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderFooterService", function () {
      return HeaderFooterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var HeaderFooterService = /*#__PURE__*/function () {
      function HeaderFooterService(http, processHTTPMsgService) {
        _classCallCheck(this, HeaderFooterService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API_HEADER = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_2__["baseHref"], "api/v1/headerFooter");
      }

      _createClass(HeaderFooterService, [{
        key: "getHeaderFooter",
        value: function getHeaderFooter() {
          return this.http.get(this.URL_API_HEADER).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }]);

      return HeaderFooterService;
    }();

    HeaderFooterService.ɵfac = function HeaderFooterService_Factory(t) {
      return new (t || HeaderFooterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    HeaderFooterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeaderFooterService,
      factory: HeaderFooterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderFooterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/image.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/image.service.ts ***!
    \*******************************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppServicesImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");

    var ImageService = /*#__PURE__*/function () {
      function ImageService(http) {
        _classCallCheck(this, ImageService);

        this.http = http;
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_2__["baseHref"], "api/v1/imageUpload");
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN)
          })
        };
      }

      _createClass(ImageService, [{
        key: "uploadImage",
        value: function uploadImage(image) {
          var imageF = new FormData();
          imageF.append('imageFile', image);
          return this.http.post(this.URL_API, imageF, this.httpOptions);
        }
      }]);

      return ImageService;
    }();

    ImageService.ɵfac = function ImageService_Factory(t) {
      return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImageService,
      factory: ImageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService, userLogin */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userLogin", function () {
      return userLogin;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_1__["baseHref"], "users/login");
      }

      _createClass(LoginService, [{
        key: "Login",
        value: function Login(user) {
          return this.http.post(this.URL_API, user);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();

    var userLogin = function userLogin(user, pass) {
      _classCallCheck(this, userLogin);

      this.username = user;
      this.password = pass;
    };
    /***/

  },

  /***/
  "./src/app/services/process-httpmsg.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/process-httpmsg.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProcessHTTPMsgService */

  /***/
  function srcAppServicesProcessHttpmsgServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function () {
      return ProcessHTTPMsgService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ProcessHTTPMsgService = /*#__PURE__*/function () {
      function ProcessHTTPMsgService() {
        _classCallCheck(this, ProcessHTTPMsgService);
      }

      _createClass(ProcessHTTPMsgService, [{
        key: "handleError",
        value: function handleError(error) {
          var errMsg;

          if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
          } else {
            errMsg = "".concat(error.status, " - ").concat(error.statusText || '', " ").concat(error.error);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }
      }]);

      return ProcessHTTPMsgService;
    }();

    ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) {
      return new (t || ProcessHTTPMsgService)();
    };

    ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProcessHTTPMsgService,
      factory: ProcessHTTPMsgService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProcessHTTPMsgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/spinner-customizer-controller.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/spinner-customizer-controller.service.ts ***!
    \*******************************************************************/

  /*! exports provided: SpinnerCustomizerControllerService */

  /***/
  function srcAppServicesSpinnerCustomizerControllerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerCustomizerControllerService", function () {
      return SpinnerCustomizerControllerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var SpinnerCustomizerControllerService = /*#__PURE__*/function () {
      function SpinnerCustomizerControllerService(http, processHTTPMsgService) {
        _classCallCheck(this, SpinnerCustomizerControllerService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.TOKEN = localStorage.getItem('userToken');
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': "Bearer ".concat(this.TOKEN)
          })
        };
        this.URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_2__["baseHref"], "api/v1/spinner");
      }

      _createClass(SpinnerCustomizerControllerService, [{
        key: "sendSpinner",
        value: function sendSpinner(spinnerArray) {
          return this.http.post(this.URL_API, spinnerArray, this.httpOptions);
        }
      }, {
        key: "deleteSpinner",
        value: function deleteSpinner() {
          return this.http["delete"](this.URL_API, this.httpOptions);
        }
      }]);

      return SpinnerCustomizerControllerService;
    }();

    SpinnerCustomizerControllerService.ɵfac = function SpinnerCustomizerControllerService_Factory(t) {
      return new (t || SpinnerCustomizerControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
    };

    SpinnerCustomizerControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpinnerCustomizerControllerService,
      factory: SpinnerCustomizerControllerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerCustomizerControllerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/spinner.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/spinner.service.ts ***!
    \*********************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppServicesSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var SpinnerService = /*#__PURE__*/function () {
      function SpinnerService(http, processHTTPMsgService) {
        _classCallCheck(this, SpinnerService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API_SPINNER = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_2__["baseHref"], "api/v1/spinner");
        this.URL_API_HEADER = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_2__["baseHref"], "api/v1/headerFooter");
      }

      _createClass(SpinnerService, [{
        key: "getSpinner",
        value: function getSpinner() {
          return this.http.get(this.URL_API_SPINNER) //Check and test later
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
        } //Inverter color function

      }, {
        key: "invertColor",
        value: function invertColor(hex) {
          if (hex.indexOf('#') === 0) {
            hex = hex.slice(1);
          } // convert 3-digit hex to 6-digits.


          if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }

          if (hex.length !== 6) {
            throw new Error('Invalid HEX color.');
          } // invert color components


          var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
              g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
              b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16); // pad each with zeros and return

          function padZero(str) {
            var len = 2;
            var zeros = new Array(len).join('0');
            return (zeros + str).slice(-len);
          }

          return '#' + padZero(r) + padZero(g) + padZero(b);
        }
      }]);

      return SpinnerService;
    }();

    SpinnerService.ɵfac = function SpinnerService_Factory(t) {
      return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]));
    };

    SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpinnerService,
      factory: SpinnerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/ImageSnippet.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/ImageSnippet.ts ***!
    \****************************************/

  /*! exports provided: ImageSnippet */

  /***/
  function srcAppSharedImageSnippetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSnippet", function () {
      return ImageSnippet;
    });

    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
      this.pending = false;
      this.status = 'init';
    };
    /***/

  },

  /***/
  "./src/app/shared/baseHref.ts":
  /*!************************************!*\
    !*** ./src/app/shared/baseHref.ts ***!
    \************************************/

  /*! exports provided: baseHref */

  /***/
  function srcAppSharedBaseHrefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "baseHref", function () {
      return baseHref;
    });

    var baseHref = '/'; // /~devsite/

    /***/
  },

  /***/
  "./src/app/shared/form-spinner-controller.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/form-spinner-controller.ts ***!
    \***************************************************/

  /*! exports provided: formSpinnerControl */

  /***/
  function srcAppSharedFormSpinnerControllerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formSpinnerControl", function () {
      return formSpinnerControl;
    });

    var formSpinnerControl = function formSpinnerControl(isImage, image, textOne, percentage, isEmail, textPopUp, email, color) {
      _classCallCheck(this, formSpinnerControl);

      this.isItImage = isImage;
      this.image = image;
      this.textFieldOne = textOne;
      this.percentage = percentage;
      this.isItEmail = isEmail;
      this.textPopUp = textPopUp;
      this.email = email;
      this.bgColor = color;
    };
    /***/

  },

  /***/
  "./src/app/spinner/spinner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/spinner/spinner.component.ts ***!
    \**********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _services_emails_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/emails.service */
    "./src/app/services/emails.service.ts");
    /* harmony import */


    var _services_center_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/center-image.service */
    "./src/app/services/center-image.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["txt"];
    var _c1 = ["spin"];
    var _c2 = ["ResultEmail"];
    var _c3 = ["ResultText"];
    var _c4 = ["wheelSec"];

    function SpinnerComponent_header_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.HeaderFooter.header, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SpinnerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.HeaderFooter.pageTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.HeaderFooter.pageDescription);
      }
    }

    function SpinnerComponent_div_4_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r13 = ctx_r17.index;
        var field_r12 = ctx_r17.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r15.holder[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r15.fieldStyleNth[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r15.imageOrientation[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", field_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_div_4_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r13 = ctx_r18.index;
        var field_r12 = ctx_r18.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r16.holder[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r16.fieldStyleNth[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r16.textOrientation[i_r13]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.textFieldOne, " ");
      }
    }

    function SpinnerComponent_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_4_div_2_div_3_Template, 5, 7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_4_div_2_div_4_Template, 4, 7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r12.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !field_r12.isItImage);
      }
    }

    function SpinnerComponent_div_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.centerImage.centerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_4_div_2_Template, 5, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_div_4_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.rotate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpinnerComponent_div_4_div_6_Template, 2, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.spiningRotate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.SpinnerFields);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.spinMovemente);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.centerImage);
      }
    }

    function SpinnerComponent_footer_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.HeaderFooter.footer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SpinnerComponent_ng_template_8_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r23.FinalResult.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_ng_template_8_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please check information provided, all the fields are required and it must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SpinnerComponent_ng_template_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_ng_template_8_div_4_div_1_Template, 2, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SpinnerComponent_ng_template_8_div_4_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpinnerComponent_ng_template_8_div_4_div_5_Template, 3, 0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_8_div_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var modal_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r21.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.FinalResult.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.FinalResult.textPopUp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r22.sendEmailForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.validForm);
      }
    }

    function SpinnerComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_8_Template_button_click_1_listener() {
          var modal_r21 = ctx.$implicit;
          return modal_r21.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_8_div_4_Template, 17, 4, "div", 33);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.FinalResult);
      }
    }

    function SpinnerComponent_ng_template_10_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r32.FinalResult.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_ng_template_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_ng_template_10_div_4_div_1_Template, 2, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.FinalResult.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.FinalResult.textPopUp);
      }
    }

    function SpinnerComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_10_Template_button_click_1_listener() {
          var modal_r30 = ctx.$implicit;
          return modal_r30.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_10_div_4_Template, 4, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_10_Template_button_click_6_listener() {
          var modal_r30 = ctx.$implicit;
          return modal_r30.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.FinalResult);
      }
    }

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(spinnerService, headerFooterService, emailSevice, modalService, centerImageService, fb) {
        _classCallCheck(this, SpinnerComponent);

        this.spinnerService = spinnerService;
        this.headerFooterService = headerFooterService;
        this.emailSevice = emailSevice;
        this.modalService = modalService;
        this.centerImageService = centerImageService;
        this.fb = fb;
        this.API_IMAGE_URL = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "api/v1/imageUpload/");
        this.bgColorStyle = ['']; // Backgorund color

        this.fontColor = ['']; // Font Color

        this.fieldStyleNth = ['']; //Individual field style

        this.holder = [''];
        this.imageOrientation = [''];
        this.textOrientation = [''];
        this.state = 'default'; //Animations

        this.clicks = 0;
        this.totalDegree = 0;
        this.initialDegreesStart = [''];
        this.initialDegreesEnd = [''];
        this.degreesRotated = 0;
        this.resultingField = 0; /// Modal results

        this.validForm = true;
        this.closeResult = '';
        this.createForm();
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHeaderFooter();
          this.getSpinner();
          this.getImageCenter();
        }
      }, {
        key: "getSpinner",
        value: function getSpinner() {
          var _this17 = this;

          this.spinnerService.getSpinner().subscribe(function (spinnerFields) {
            _this17.SpinnerFields = spinnerFields;
            _this17.angle = 360 / _this17.SpinnerFields.length;

            for (var i = 0; i < _this17.SpinnerFields.length; i++) {
              //Substitute backslashes for slashes
              _this17.SpinnerFields[i].image = _this17.SpinnerFields[i].image.replace(/\\/g, "/");
              _this17.SpinnerFields[i].image = _this17.API_IMAGE_URL + _this17.SpinnerFields[i].image.slice(14);
              _this17.bgColorStyle[i] = _this17.SpinnerFields[i].bgColor; // Backgorund color

              _this17.fontColor[i] = _this17.spinnerService.invertColor(_this17.bgColorStyle[i]); //Font Color

              _this17.holder[i] = {
                'transform': 'rotate(' + _this17.angle * i + 'deg)',
                '-webkit-transform': 'rotate(' + _this17.angle * i + 'deg)',
                '-moz-transform': 'rotate(' + _this17.angle * i + 'deg)',
                '-o-transform': 'rotate(' + _this17.angle * i + 'deg)',
                '-ms-transform': 'rotate(' + _this17.angle * i + 'deg)'
              };
              _this17.fieldStyleNth[i] = {
                'transform': 'rotate(' + _this17.angle + 'deg)',
                '-webkit-transform': 'rotate(' + _this17.angle + 'deg)',
                '-moz-transform': 'rotate(' + _this17.angle + 'deg)',
                '-o-transform': 'rotate(' + _this17.angle + 'deg)',
                '-ms-transform': 'rotate(' + _this17.angle + 'deg)',
                'background-color': _this17.bgColorStyle[i],
                'color': _this17.fontColor[i]
              };
              _this17.imageOrientation[i] = {
                'transform': 'rotate(' + (_this17.angle - _this17.angle * 1.5) + 'deg)',
                '-webkit-transform': 'rotate(' + (_this17.angle - _this17.angle * 1.5) + 'deg)',
                '-moz-transform': 'rotate(' + (_this17.angle - _this17.angle * 1.5) + 'deg)',
                '-o-transform': 'rotate(' + (_this17.angle - _this17.angle * 1.5) + 'deg)',
                '-ms-transform': 'rotate(' + (_this17.angle - _this17.angle * 1.5) + 'deg)',
                'transform-origin': 'bottom center'
              };
              _this17.textOrientation[i] = {
                'transform': 'rotate(' + (90 - _this17.angle / 2) + 'deg)',
                '-webkit-transform': 'rotate(' + (180 + _this17.angle / 4) + 'deg)',
                '-moz-transform': 'rotate(' + (180 + _this17.angle / 4) + 'deg)',
                '-o-transform': 'rotate(' + (180 + _this17.angle / 4) + 'deg)',
                '-ms-transform': 'rotate(' + (180 + _this17.angle / 4) + 'deg)',
                'transform-origin': 'center right'
              };
              _this17.initialDegreesStart[i] = _this17.angle * i;
              _this17.initialDegreesEnd[i] = _this17.initialDegreesStart[i] + _this17.angle;
            }
          });
        }
      }, {
        key: "getHeaderFooter",
        value: function getHeaderFooter() {
          var _this18 = this;

          this.headerFooterService.getHeaderFooter().subscribe(function (headerFooter) {
            _this18.HeaderFooter = headerFooter[0];
          });
        }
      }, {
        key: "getImageCenter",
        value: function getImageCenter() {
          var _this19 = this;

          this.centerImageService.getImageCenter().subscribe(function (centerImage) {
            _this19.centerImage = centerImage[0];
            _this19.centerImage.centerImage = _this19.API_IMAGE_URL + _this19.centerImage.centerImage.slice(14);
          });
        }
      }, {
        key: "rotate",
        value: function rotate() {
          this.getSpinner();
          var degreeSpinn = 360 * 8;
          this.clicks = ++this.clicks; ////

          this.newDegree = degreeSpinn * this.clicks; ////

          this.CalculateDegreesRotated();
          this.totalDegree = this.newDegree + this.extraDegree;
          this.spining();
          this.ExposingResult();
        }
      }, {
        key: "spining",
        value: function spining() {
          this.spiningRotate = {
            'transform': 'rotate(-' + this.totalDegree + 'deg)'
          };
        }
      }, {
        key: "ExposingResult",
        value: function ExposingResult() {
          var _this20 = this;

          //console.log(this.SpinnerFields)
          if (this.SpinnerFields[this.resultingField].isItEmail === true) {
            setTimeout(function () {
              _this20.open(_this20.ResultEmail);
            }, 6500);
          } else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
            setTimeout(function () {
              _this20.open(_this20.ResultText);
            }, 6500);
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.sendEmailForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            result: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          if (this.sendEmailForm.status === "VALID") {
            this.formCopy = this.sendEmailForm.value;
            this.formCopy.result = this.FinalResult.textPopUp;
            this.emailSevice.sendEmails(this.formCopy).subscribe(function (emailForm) {
              _this21.form = emailForm;

              _this21.modalService.dismissAll();

              _this21.validForm = true;
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });
            this.sendEmailForm.reset();
          } else {
            this.validForm = false;
          }
        }
      }, {
        key: "CalculateDegreesRotated",
        value: function CalculateDegreesRotated() {
          var DegreesArray = [];
          var index,
              sum = 0;
          var random = Math.random();
          var random2 = Math.random();

          for (index = 0; index < this.SpinnerFields.length; index++) {
            sum += this.SpinnerFields[index].percentage / 100;
            DegreesArray[index] = sum;
          }

          for (index = 0; random < DegreesArray.length && random >= DegreesArray[index]; index++) {
            ;
          }

          this.extraDegree = this.initialDegreesEnd[index] - this.angle + Math.floor(random2 * (this.initialDegreesEnd[index] - (this.initialDegreesEnd[index] - this.angle) - 1));
          this.resultingField = index;
          this.FinalResult = this.SpinnerFields[index];
        } // Modal results

      }, {
        key: "open",
        value: function open(content) {
          var _this22 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this22.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this22.closeResult = "Dismissed ".concat(_this22.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_6__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_7__["CenterImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      viewQuery: function SpinnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Text = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spin = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ResultEmail = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ResultText = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wheelSecs = _t);
        }
      },
      decls: 12,
      vars: 4,
      consts: [[4, "ngIf"], [1, "sizingBox"], ["class", "my-5 row", 4, "ngIf"], ["id", "wrapper"], ["id", "wheel", 4, "ngIf"], ["id", "txt"], ["txt", ""], ["ResultEmail", ""], ["ResultText", ""], [3, "innerHTML"], [1, "my-5", "row"], ["id", "title", 1, "col-12", "d-flex", "justify-content-center"], ["id", "description", 1, "col-12", "d-flex", "justify-content-center", "mt-3"], ["id", "wheel"], ["id", "inner-wheel"], [4, "ngFor", "ngForOf"], ["id", "spin", 3, "click"], ["spin", ""], ["id", "inner-spin"], ["id", "shine"], ["wheelSec", ""], ["class", "hold", 3, "style", 4, "ngIf"], [1, "hold"], ["id", "wheelSec", 1, "sec"], [1, "imageSpan"], [1, "ImageContainer"], [1, "image", "img-fluid", 3, "src"], [1, "sec"], [1, "TextSpan", "d-flex", "justify-content-center"], [3, "src"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row", 3, "formGroup", "ngSubmit"], ["class", "errorMessage", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-center", "my-3"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name"], [1, "col-12", "d-flex", "justify-content-center", "mb-3"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name"], ["formControlName", "emailAddress", "type", "email", "placeholder", "email"], [1, "modal-footer"], [1, "btn", "btn-success"], [1, "btn", "btn-danger", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "PopUpImage", "image", "img-fluid", 3, "src"], [1, "errorMessage"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_header_0_Template, 2, 1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_2_Template, 7, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_4_Template, 8, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpinnerComponent_footer_7_Template, 2, 1, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpinnerComponent_ng_template_8_Template, 5, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SpinnerComponent_ng_template_10_Template, 8, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SpinnerFields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#wrapper[_ngcontent-%COMP%] {\n  margin: 40px auto 0;\n  width: 372.4px;\n  position: relative;\n}\n\ndiv#wheel[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  border: 8px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  transform: rotate(0deg);\n}\n\n#wheel[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  width: 338.8px;\n  height: 338.8px;\n  border-radius: 50%;\n  z-index: 1000;\n}\n\n#inner-wheel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n}\n\n#inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  clip: rect(0px, 350px, 350px, 175px);\n  left: -7px;\n  top: -9px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  transform-origin: center;\n  opacity: 1;\n  clip: rect(0px, 175px, 350px, 0px);\n  border-radius: 350px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 175px;\n  right: 125px;\n  z-index: 10000000;\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  text-shadow: rgba(255, 255, 255, 0.1) 0px -1px 0px, rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  max-width: 100px;\n  min-height: 145px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 152.1739130435px;\n  right: 175px;\n  min-width: 175px;\n  max-width: 175px;\n  text-justify: inter-word;\n  z-index: 10000000;\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  text-shadow: rgba(255, 255, 255, 0.1) 0px -1px 0px, rgba(0, 0, 0, 0.2) 0px 1px 0px;\n}\n\n#spin[_ngcontent-%COMP%] {\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  position: absolute;\n  top: 157.5px;\n  left: 153.65px;\n  margin: -34px 0 0 -34px;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 0px;\n  z-index: 1000;\n  background: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n#spin[_ngcontent-%COMP%]:after {\n  content: \"\";\n  text-align: center;\n  line-height: 95.2018278751px;\n  color: #CCC;\n  text-shadow: 0 2px 0 #fff, 0 -2px 0 rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 100000;\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  display: block;\n}\n\n#spin[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 20px 28px 20px;\n  border-color: transparent transparent #ffffff transparent;\n  top: -20px;\n  left: 28px;\n}\n\n#inner-spin[_ngcontent-%COMP%] {\n  width: 75.7575757576px;\n  height: 75.7575757576px;\n  position: absolute;\n  top: 36.8421052632px;\n  left: 36.8421052632px;\n  margin: -27px 0 0 -27px;\n  border-radius: 50%;\n  background: red;\n  z-index: 999;\n  box-shadow: white 0px -2px 0px inset, white 0px 2px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 5px;\n  background: white;\n  \n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n  \n  overflow: hidden;\n}\n\n#inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  border-radius: 100%;\n  position: absolute;\n  top: -9px;\n  left: -9px;\n}\n\n#spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px inset;\n}\n\n#spin[_ngcontent-%COMP%]:active:after {\n  font-size: 15px;\n}\n\n#shine[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, rgba(255, 255, 255, 0.99) 1%, rgba(255, 255, 255, 0.91) 9%, rgba(255, 255, 255, 0) 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n  \n  opacity: 0.1;\n}\n\n@-webkit-keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n@keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n.spin[_ngcontent-%COMP%] {\n  -webkit-animation: hh 0.1s;\n  \n  animation: hh 0.1s;\n}\n\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\n.modal-header[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: red;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n\n.sizingBox[_ngcontent-%COMP%] {\n  height: 550px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0REOztBRE1BO0VBQ0MsWUFYVTtFQVlWLGFBWlU7RUFhVixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0VBQ0EsdUJBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBS0Esb0RBQUE7QUNIRDs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsWUEzQ087RUE0Q1AsYUE1Q087RUE2Q1Asb0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BO0VBQ0Msa0JBQUE7RUFDQSxZQXBEVTtFQXFEVixhQXJEVTtFQXNEVix3QkFBQTtFQUdHLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQTNETztBQ3NEWDs7QURXQztFQUVDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxrRkFBQTtFQUNBLGdCQWRjO0VBZWQsaUJBQUE7QUNWRjs7QURZRztFQUNDLGNBQUE7QUNWSjs7QURlQztFQUNDLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0ZBQUE7QUNiRjs7QURtQkE7RUFDQyxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtBQ2hCRjs7QURtQkE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDaEJEOztBRG1CQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNoQkQ7O0FEb0JBO0VBRUMsc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZGQUFBO0VBRUEsaUJBQUE7RUFBOEIsaUJBQUE7RUFDOEUsV0FBQTtFQUM2QyxvQkFBQTtFQUMzQyx5QkFBQTtFQUNMLGNBQUE7RUFDQyxVQUFBO0VBQzFHLHNFQUFBO0VBQWtHLFFBQUE7RUFDbEcsbUhBQUE7RUFBcUgsMENBQUE7RUFFckgsZ0JBQUE7QUNaRDs7QURhQztFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNYRjs7QURnQkE7RUFDQyxnREFBQTtBQ2JEOztBRGdCQTtFQUNDLGVBQUE7QUNiRDs7QURpQkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDa0ssV0FBQTtFQUNvRSxvQkFBQTtFQUNyRSx5QkFBQTtFQUNMLGNBQUE7RUFDQyxVQUFBO0VBQzlKLGlKQUFBO0VBQXNKLFFBQUE7RUFDdEoscUhBQUE7RUFBdUgsMENBQUE7RUFHdkgsWUFBQTtBQ1RBOztBRGdCQTtFQUNDO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ2JEO0VEZ0JEO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ2REO0FBQ0Y7O0FEaUJFO0VBQ0E7SUFDQyx1QkFBQTtJQUNBLCtCQUFBO0VDZkQ7RURrQkQ7SUFDRSx1QkFBQTtJQUNBLCtCQUFBO0VDaEJEO0FBQ0Y7O0FEbUJFO0VBQ0QsMEJBQUE7RUFBNEIsMEJBQUE7RUFDMUIsa0JBQUE7QUNoQkg7O0FEcUJBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0FDbEJEOztBRG1CQztFQUNPLGFBQUE7RUFDQSxVQUFBO0FDakJSOztBRHFCQTtFQUNDLGtCQUFBO0FDbEJEOztBRHFCQTtFQUNDLGFBQUE7QUNsQkQ7O0FEc0JBO0VBQ0ksdUJBRmtCO0FDakJ0QiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiREaWFtZXRlcjogMzUwcHg7XHJcblxyXG4jd3JhcHBlcnsgXHJcblx0bWFyZ2luOiA0MHB4IGF1dG8gMDtcdFxyXG5cdHdpZHRoOiREaWFtZXRlcioxLjA2NDsgXHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuZGl2I3doZWVse1xyXG5cdHdpZHRoOiREaWFtZXRlcjtcclxuXHRoZWlnaHQ6JERpYW1ldGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1x0XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdGJvcmRlcjo4cHggc29saWQgI2ZmZjtcclxuXHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4yKSAwcHggMHB4IDEwcHgsIHJnYmEoMCwwLDAsMC4wNSkgMHB4IDNweCAwcHg7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbn1cclxuXHJcbiN3aGVlbDpiZWZvcmV7XHJcblx0Y29udGVudDonJztcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRib3JkZXI6NHB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuXHR3aWR0aDokRGlhbWV0ZXIqMC45Njg7XHJcblx0aGVpZ2h0OiREaWFtZXRlciowLjk2ODtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHR6LWluZGV4OjEwMDA7XHRcclxufVxyXG5cclxuI2lubmVyLXdoZWVse1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogICAgYWxsIDYgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdC1vLXRyYW5zaXRpb246ICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHQtbXMtdHJhbnNpdGlvbjogICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0dHJhbnNpdGlvbjogICAgICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1x0XHJcbn1cclxuXHJcbiNpbm5lci13aGVlbCBkaXYuaG9sZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAkRGlhbWV0ZXI7XHJcbiAgICBoZWlnaHQ6ICREaWFtZXRlcjtcclxuICAgIGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLCREaWFtZXRlciwkRGlhbWV0ZXIvMik7XHJcbiAgICBsZWZ0OiAtN3B4O1xyXG4gICAgdG9wOiAtOXB4O1xyXG59XHJcblxyXG4jd2hlZWwgZGl2LnNlY3tcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRoZWlnaHQ6ICREaWFtZXRlcjtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcblx0Ly9sZWZ0OiREaWFtZXRlci80O1xyXG5cdC8vdG9wOiREaWFtZXRlci80O1x0XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICBjbGlwOnJlY3QoMHB4LCREaWFtZXRlci8yLCREaWFtZXRlciwwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czokRGlhbWV0ZXI7IFxyXG59XHJcblxyXG4kbWF4V2lkdGhJbWFnZTogMTAwcHg7XHJcblxyXG4jd2hlZWwgZGl2LnNlYyB7XHJcblx0c3Bhbi5pbWFnZVNwYW4ge1xyXG5cdFx0Ly9tYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAkRGlhbWV0ZXIvMjtcclxuXHRcdHJpZ2h0OiAkRGlhbWV0ZXIvMiAtICRtYXhXaWR0aEltYWdlLzI7XHJcblx0XHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOjMwcHg7XHJcblx0XHQvL21hcmdpbi1sZWZ0Oi0xMjBweDtcclxuXHRcdHRleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0xcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAwcHg7XHJcblx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEltYWdlO1xyXG5cdFx0bWluLWhlaWdodDogJG1heFdpZHRoSW1hZ2UqMS40NTtcclxuXHRcdC5JbWFnZUNvbnRhaW5lcntcclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDcwJTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblx0c3Bhbi5UZXh0U3BhbiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206ICREaWFtZXRlci8yLjM7XHJcblx0XHRyaWdodDogJERpYW1ldGVyLzI7XHJcblx0XHRtaW4td2lkdGg6ICREaWFtZXRlci8yO1xyXG5cdFx0bWF4LXdpZHRoOiAkRGlhbWV0ZXIvMjtcclxuXHRcdHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuXHRcdHotaW5kZXg6IDEwMDAwMDAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6MzBweDtcclxuXHRcdHRleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0xcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAwcHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcbiNzcGlue1xyXG5cdHdpZHRoOiREaWFtZXRlci8zLjY3NjQ7ICBcclxuXHRoZWlnaHQ6JERpYW1ldGVyLzMuNjc2NDtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6JERpYW1ldGVyKjAuNDU7ICBcclxuXHRsZWZ0OiREaWFtZXRlciowLjQzOTtcclxuXHRtYXJnaW46LTM0cHggMCAwIC0zNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEpIDBweCAzcHggMHB4O1xyXG5cdHotaW5kZXg6MTAwMDtcclxuXHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgXHJcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7ICAgXHJcbn1cclxuXHJcbiNzcGluOmFmdGVye1xyXG5cdGNvbnRlbnQ6Jyc7XHRcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDokRGlhbWV0ZXIvMy42NzY0O1xyXG5cdGNvbG9yOiNDQ0M7XHJcblx0dGV4dC1zaGFkb3c6IDAgMnB4IDAgI2ZmZiwgMCAtMnB4IDAgcmdiYSgwLDAsMCwwLjMpIDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTAwMDAwO1xyXG5cdHdpZHRoOiREaWFtZXRlci8zLjY3NjQ7XHJcblx0aGVpZ2h0OiREaWFtZXRlci8zLjY3NjQ7XHJcblx0ZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuI3NwaW46YmVmb3Jle1xyXG5cdGNvbnRlbnQ6XCJcIjtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItd2lkdGg6IDAgMjBweCAyOHB4IDIwcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG5cdHRvcDotJERpYW1ldGVyLzE3LjU7ICAvLy0yMHB4XHJcblx0bGVmdDokRGlhbWV0ZXIvMTIuNTsgICAvLzI4cHhcclxufVxyXG5cclxuXHJcbiNpbm5lci1zcGlue1xyXG5cdFxyXG5cdHdpZHRoOiREaWFtZXRlci80LjYyOyAgLy81NHB4XHJcblx0aGVpZ2h0OiREaWFtZXRlci80LjYyOy8vNTRweFxyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDogJERpYW1ldGVyLzkuNTsgICAvLzUwJVxyXG5cdGxlZnQ6JERpYW1ldGVyLzkuNTsgICAvLzUwJVxyXG5cdG1hcmdpbjotMjdweCAwIDAgLTI3cHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0YmFja2dyb3VuZDpyZWQ7XHJcblx0ei1pbmRleDo5OTk7XHJcblx0Ym94LXNoYWRvdzpyZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAtMnB4IDBweCBpbnNldCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggMnB4IDBweCBpbnNldCwgIHJnYmEoMCwwLDAsMC40KSAwcHggMHB4IDVweCA7XHJcblx0XHJcblx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogRkYzLjYrICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG5cdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG5cdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogVzNDICovXHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VhZWFlYScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1x0XHJcblx0XHJcblx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdGltZyB7XHJcblx0XHR3aWR0aDogJERpYW1ldGVyLzMuNjc2NDtcclxuXHRcdGhlaWdodDogJERpYW1ldGVyLzMuNjc2NDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IC05cHg7XHJcblx0XHRsZWZ0OiAtOXB4O1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbiNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbntcclxuXHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC40KSAwcHggMHB4IDVweCBpbnNldDtcclxufVxyXG5cclxuI3NwaW46YWN0aXZlOmFmdGVye1xyXG5cdGZvbnQtc2l6ZToxNXB4O1x0XHJcbn1cclxuXHJcblxyXG4jc2hpbmV7XHJcblx0d2lkdGg6MjUwcHg7XHJcblx0aGVpZ2h0OjI1MHB4O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDowO1xyXG5cdGxlZnQ6MDtcclxuXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcbmJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyAvKiBXM0MgKi9cclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHJcblxyXG5cclxub3BhY2l0eTowLjE7XHJcblx0XHJcbn1cclxuXHJcblxyXG5cclxuLy8gYW5pbWF0aW9uc1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGgge1xyXG5cdDAlLCAxMDAle1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuICBcclxuXHQ1MCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGhoIHtcclxuXHQgMCUsIDEwMCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG4gIFxyXG5cdDUwJXtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGluIHtcclxuXHQtd2Via2l0LWFuaW1hdGlvbjogaGggMC4xczsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcblx0ICBhbmltYXRpb246IGhoIDAuMXM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4ubW9kYWwtaGVhZGVyLCAubW9kYWwtYm9keSwgLm1vZGFsLWZvb3RlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdC5lcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQge1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNpemluZ0JveCB7XHJcblx0aGVpZ2h0OiA1NTBweDtcclxufVxyXG5cclxuJElucHV0QnV0dG9uc0JvcmRlcnM6IDFweCBzb2xpZCB3aGl0ZTtcclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcbiIsIiN3cmFwcGVyIHtcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcbiAgd2lkdGg6IDM3Mi40cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuZGl2I3doZWVsIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMTBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggM3B4IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbiN3aGVlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDMzOC44cHg7XG4gIGhlaWdodDogMzM4LjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jaW5uZXItd2hlZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbn1cblxuI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGNsaXA6IHJlY3QoMHB4LCAzNTBweCwgMzUwcHgsIDE3NXB4KTtcbiAgbGVmdDogLTdweDtcbiAgdG9wOiAtOXB4O1xufVxuXG4jd2hlZWwgZGl2LnNlYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXA6IHJlY3QoMHB4LCAxNzVweCwgMzUwcHgsIDBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDM1MHB4O1xufVxuXG4jd2hlZWwgZGl2LnNlYyBzcGFuLmltYWdlU3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNzVweDtcbiAgcmlnaHQ6IDEyNXB4O1xuICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtMXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxNDVweDtcbn1cbiN3aGVlbCBkaXYuc2VjIHNwYW4uaW1hZ2VTcGFuIC5JbWFnZUNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbiN3aGVlbCBkaXYuc2VjIHNwYW4uVGV4dFNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUyLjE3MzkxMzA0MzVweDtcbiAgcmlnaHQ6IDE3NXB4O1xuICBtaW4td2lkdGg6IDE3NXB4O1xuICBtYXgtd2lkdGg6IDE3NXB4O1xuICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XG4gIHotaW5kZXg6IDEwMDAwMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0xcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAwcHg7XG59XG5cbiNzcGluIHtcbiAgd2lkdGg6IDk1LjIwMTgyNzg3NTFweDtcbiAgaGVpZ2h0OiA5NS4yMDE4Mjc4NzUxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTcuNXB4O1xuICBsZWZ0OiAxNTMuNjVweDtcbiAgbWFyZ2luOiAtMzRweCAwIDAgLTM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jc3BpbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDk1LjIwMTgyNzg3NTFweDtcbiAgY29sb3I6ICNDQ0M7XG4gIHRleHQtc2hhZG93OiAwIDJweCAwICNmZmYsIDAgLTJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIHdpZHRoOiA5NS4yMDE4Mjc4NzUxcHg7XG4gIGhlaWdodDogOTUuMjAxODI3ODc1MXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3NwaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMjBweCAyOHB4IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjhweDtcbn1cblxuI2lubmVyLXNwaW4ge1xuICB3aWR0aDogNzUuNzU3NTc1NzU3NnB4O1xuICBoZWlnaHQ6IDc1Ljc1NzU3NTc1NzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2Ljg0MjEwNTI2MzJweDtcbiAgbGVmdDogMzYuODQyMTA1MjYzMnB4O1xuICBtYXJnaW46IC0yN3B4IDAgMCAtMjdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm94LXNoYWRvdzogd2hpdGUgMHB4IC0ycHggMHB4IGluc2V0LCB3aGl0ZSAwcHggMnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMTAwJSwgI2VhZWFlYSkpO1xuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIE9wZXJhIDEyKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIFczQyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjZWFlYWVhXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2lubmVyLXNwaW4gaW1nIHtcbiAgd2lkdGg6IDk1LjIwMTgyNzg3NTFweDtcbiAgaGVpZ2h0OiA5NS4yMDE4Mjc4NzUxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOXB4O1xuICBsZWZ0OiAtOXB4O1xufVxuXG4jc3BpbjphY3RpdmUgI2lubmVyLXNwaW4ge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCA1cHggaW5zZXQ7XG59XG5cbiNzcGluOmFjdGl2ZTphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI3NoaW5lIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxKSA5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSksIGNvbG9yLXN0b3AoOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpKTtcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OSkgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkgOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBPcGVyYSAxMisgKi9cbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBXM0MgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoaCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoaCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgfVxufVxuLnNwaW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGggMC4xcztcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIGFuaW1hdGlvbjogaGggMC4xcztcbn1cblxuLm1vZGFsLWhlYWRlciwgLm1vZGFsLWJvZHksIC5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vZGFsLWhlYWRlciAuZXJyb3JNZXNzYWdlLCAubW9kYWwtYm9keSAuZXJyb3JNZXNzYWdlLCAubW9kYWwtZm9vdGVyIC5lcnJvck1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpemluZ0JveCB7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.scss']
        }]
      }], function () {
        return [{
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]
        }, {
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__["HeaderFooterService"]
        }, {
          type: _services_emails_service__WEBPACK_IMPORTED_MODULE_6__["EmailsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _services_center_image_service__WEBPACK_IMPORTED_MODULE_7__["CenterImageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, {
        wheelSecs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['wheelSec']
        }],
        Text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['txt']
        }],
        spin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['spin']
        }],
        ResultEmail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ResultEmail']
        }],
        ResultText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ResultText']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\juanc\OneDrive\Documents\Juan Miguel\CURSO HTML\upwork\Spinner-with-backend-control\SpinnerApp\client\spinner-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map