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
      redirectTo: 'admin/',
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
            //this.headScript.appendChild(this.HeaderFooter.header);

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
      consts: [[1, "row"], [1, "col-12", "col-lg-2", "menuBar", "navbar", "navbar-expand-lg", "p-0"], [1, "ButtonToggler"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], [1, "appNavbar", "d-flex", "justify-content-center", "align-items-start"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse", "click"], [1, "col-12", "col-lg-10", "routerOutletContent"], [1, "routerOutlet"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-navbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackendControlComponent_Template_app_navbar_click_7_listener() {
            return ctx.isMenuCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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


    var _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/ImageSnippet */
    "./src/app/shared/ImageSnippet.ts");
    /* harmony import */


    var _animations_app_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animations/app.animations */
    "./src/app/animations/app.animations.ts");
    /* harmony import */


    var _services_custom_script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/custom-script.service */
    "./src/app/services/custom-script.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomScriptComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomScriptComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CustomScriptComponent = /*#__PURE__*/function () {
      function CustomScriptComponent(customScriptService, imageService, headerandFooterService, fb) {
        _classCallCheck(this, CustomScriptComponent);

        this.customScriptService = customScriptService;
        this.imageService = imageService;
        this.headerandFooterService = headerandFooterService;
        this.fb = fb;
        this.SuccessfullyUpload = false;
        this.UnsuccessfullyUpload = false;
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
        value: function ngOnInit() {
          this.getPreviousData();
        }
      }, {
        key: "getPreviousData",
        value: function getPreviousData() {
          var _this2 = this;

          this.headerandFooterService.getHeaderFooter().subscribe(function (data) {
            _this2.HeaderAndFooterData = data;
            delete _this2.HeaderAndFooterData[0]['createdAt'];
            delete _this2.HeaderAndFooterData[0]['updatedAt'];
            delete _this2.HeaderAndFooterData[0]['_id'];
            delete _this2.HeaderAndFooterData[0]['__v'];

            _this2.setValuesofBackendHeaderAndFooter(_this2.HeaderFooterForm, _this2.HeaderAndFooterData[0]);

            if (_this2.HeaderFooterForm.value.favicon != '') {
              _this2.onSuccess(_this2.HeaderAndFooterData[0].favicon);
            } else if (_this2.HeaderFooterForm.value.favicon == '') {
              _this2.SuccessfullyUpload = false;
              _this2.UnsuccessfullyUpload = false;
            }

            console.log(_this2.SuccessfullyUpload);
            console.log(_this2.UnsuccessfullyUpload);
          }, function (err) {
            _this2.SuccessfullyUpload = false;
            _this2.UnsuccessfullyUpload = false;
            throw new Error(err);
          });
        }
      }, {
        key: "setValuesofBackendHeaderAndFooter",
        value: function setValuesofBackendHeaderAndFooter(form, data) {
          form.patchValue(data);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var _this3 = this;

          this.HeaderFooterForm = this.fb.group({
            header: [''],
            footer: [''],
            pageTitle: [''],
            pageDescription: [''],
            favicon: ['']
          });
          this.HeaderFooterForm.valueChanges.subscribe(function (data) {
            return _this3.onValueChanged(data);
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
          var _this4 = this;

          this.StringOfImageUpload = path;
          this.UnsuccessfullyUpload = false;
          this.SuccessfullyUpload = false;
          setTimeout(function () {
            _this4.SuccessfullyUpload = true;
          }, 400);
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
          var _this5 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this5.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_1__["ImageSnippet"](event.target.result, file);

            _this5.imageService.uploadImage(_this5.selectedFile.file).subscribe(function (res) {
              _this5.onSuccess(res.path);
            }, function (err) {
              _this5.onError();

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this6 = this;

          this.FormSuccessfullySend = true;
          this.customScriptService.deleteHeaderFooter().subscribe(function () {
            _this6.formCopy = _this6.HeaderFooterForm.value;
            _this6.formCopy.favicon = _this6.StringOfImageUpload.replace(/\\/g, "/");

            _this6.customScriptService.sendHeaderFooter(_this6.formCopy).subscribe(function (HFform) {
              _this6.form = HFform;
              setTimeout(function () {
                _this6.FormSuccessfullySend = false;
              }, 2000);
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        }
      }]);

      return CustomScriptComponent;
    }();

    CustomScriptComponent.ɵfac = function CustomScriptComponent_Factory(t) {
      return new (t || CustomScriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_custom_script_service__WEBPACK_IMPORTED_MODULE_3__["CustomScriptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]));
    };

    CustomScriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomScriptComponent,
      selectors: [["app-custom-script"]],
      decls: 43,
      vars: 7,
      consts: [[1, "bgColor"], [1, "container"], [1, "title"], [1, "row"], [1, "col-10", "mr-auto", 3, "hidden"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "header"], ["required", "", "formControlName", "header", "id", "header", "name", "header", "rows", "3", 1, "form-control"], ["for", "footer"], ["required", "", "formControlName", "footer", "id", "footer", "name", "footer", "rows", "3", 1, "form-control"], ["for", "title"], ["required", "", "formControlName", "pageTitle", "type", "text", "id", "title", "name", "title", 1, "form-control"], ["for", "description"], ["required", "", "formControlName", "pageDescription", "id", "description", "name", "description", "rows", "3", 1, "form-control"], ["for", "favicon"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex"], ["id", "FileUploadBox"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["favicon", ""], ["id", "FileUploadMessageBox", 1, "ml-1"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-success"], [1, "customScriptSuccessfullySend", 3, "hidden"], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"]],
      template: function CustomScriptComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Footer:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Page title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Page description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Favicon:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomScriptComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomScriptComponent_Template_input_change_32_listener($event) {
            return ctx.processFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CustomScriptComponent_div_35_Template, 3, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CustomScriptComponent_div_36_Template, 3, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "The custom script has been successfully saved");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SuccessfullyUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UnsuccessfullyUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.FormSuccessfullySend)("@expand", undefined);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 50px 20px 20px 40px;\n  color: white;\n  min-height: 100vh;\n  height: 100%;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.btnInput[_ngcontent-%COMP%], .colorInput[_ngcontent-%COMP%] {\n  height: 33px -2px;\n  width: 90px;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  border: 1px solid black;\n}\n\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .textFieldOne[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n.customScriptSuccessfullySend[_ngcontent-%COMP%] {\n  min-height: 600px;\n  width: 100%;\n}\n\n.ErrorMessage[_ngcontent-%COMP%] {\n  min-height: 20px;\n  max-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNjcmlwdC9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxjdXN0b20tc2NyaXB0XFxjdXN0b20tc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FES0E7RUFDSSx1QkFGa0I7QUNBdEI7O0FES0E7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxZQWRVO0FDWWQ7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0RSOztBREdJO0VBQ0ksWUFBQTtBQ0RSOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYmdDb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XHJcbn1cclxuXHJcbiRJbnB1dEhlaWdodDogMzNweDtcclxuJEJvcmRlclJhZGlvdXM6IDVweDtcclxuJElucHV0QnV0dG9uc0JvcmRlcnM6IDFweCBzb2xpZCB3aGl0ZTtcclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG59XHJcblxyXG4uYnRuSW5wdXQsIC5jb2xvcklucHV0IHtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0IC0ycHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuLkltYWdlVXBsb2FkQW5kTWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodDtcclxuICAgIC5hbGVydCB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICAudGV4dEZpZWxkT25lIHtcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b21TY3JpcHRTdWNjZXNzZnVsbHlTZW5kIHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5FcnJvck1lc3NhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbn0iLCJkaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDIwcHggNDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5idG5JbnB1dCwgLmNvbG9ySW5wdXQge1xuICBoZWlnaHQ6IDMzcHggLTJweDtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2Uge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzNweDtcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLmFsZXJ0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLnRleHRGaWVsZE9uZSB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmN1c3RvbVNjcmlwdFN1Y2Nlc3NmdWxseVNlbmQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5FcnJvck1lc3NhZ2Uge1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xufSJdfQ== */"],
      data: {
        animation: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_2__["expand"])()]
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
          animations: [Object(_animations_app_animations__WEBPACK_IMPORTED_MODULE_2__["expand"])()]
        }]
      }], function () {
        return [{
          type: _services_custom_script_service__WEBPACK_IMPORTED_MODULE_3__["CustomScriptService"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]
        }, {
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_5__["HeaderFooterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
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


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["numberOfFields"];
    var _c1 = ["modalPercentageLessThan100"];
    var _c2 = ["modalPercentageMoreThan100"];
    var _c3 = ["modalNotAllValuesIntroduced"];
    var _c4 = ["percentage"];

    function CustomizeSpinnerComponent_tr_59_td_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_59_td_7_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_59_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_tr_59_td_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          return _r21.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "File Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 67, 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_59_td_7_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.processFile($event, i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomizeSpinnerComponent_tr_59_td_7_div_9_Template, 3, 0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomizeSpinnerComponent_tr_59_td_7_div_10_Template, 3, 0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.SuccessfullyUpload[i_r15]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.UnsuccessfullyUpload[i_r15]);
      }
    }

    function CustomizeSpinnerComponent_tr_59_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_59_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Min 0% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_59_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Max 100% ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_59_Template_select_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var i_r15 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.onChangeImage($event.target.value, i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizeSpinnerComponent_tr_59_td_7_Template, 11, 2, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizeSpinnerComponent_tr_59_td_8_Template, 3, 0, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 58, 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CustomizeSpinnerComponent_tr_59_Template_input_keyup_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var i_r15 = ctx.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.MessageErrorChange(i_r15);
        })("click", function CustomizeSpinnerComponent_tr_59_Template_input_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var i_r15 = ctx.index;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.MessageErrorChange(i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomizeSpinnerComponent_tr_59_div_13_Template, 3, 0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CustomizeSpinnerComponent_tr_59_div_14_Template, 3, 0, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_59_Template_select_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var i_r15 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.onChangeResult($event.target.value, i_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Text Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var spinnerfield_r14 = ctx.$implicit;
        var i_r15 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.itIsImageFile[i_r15]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.itIsTextField[i_r15]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r14.controls.percentage.hasError("required") && ctx_r1.submitPressed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPercentageLessThanZero[i_r15]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPercentageMoreThanHundred[i_r15]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r14.controls.bgColor.hasError("required") && ctx_r1.submitPressed);
      }
    }

    function CustomizeSpinnerComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expand", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.percentageSum, "%");
      }
    }

    function CustomizeSpinnerComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expand", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.percentageSum, "%");
      }
    }

    function CustomizeSpinnerComponent_div_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expand", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.percentageSum, "%");
      }
    }

    function CustomizeSpinnerComponent_div_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_div_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_ng_template_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_103_Template_button_click_1_listener() {
          var modal_r34 = ctx.$implicit;
          return modal_r34.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Warning!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Spinner not saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You need ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " to reach ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " to your total percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_103_Template_button_click_21_listener() {
          var modal_r34 = ctx.$implicit;
          return modal_r34.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.valueToReach100, "%");
      }
    }

    function CustomizeSpinnerComponent_ng_template_105_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_105_Template_button_click_1_listener() {
          var modal_r37 = ctx.$implicit;
          return modal_r37.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Warning!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Spinner not saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your current percentage is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "You have exceed the maximum value by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", Total percentage must be equal to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "100%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_105_Template_button_click_25_listener() {
          var modal_r37 = ctx.$implicit;
          return modal_r37.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.percentageSum, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.valueOver100, "%");
      }
    }

    function CustomizeSpinnerComponent_ng_template_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_107_Template_button_click_1_listener() {
          var modal_r40 = ctx.$implicit;
          return modal_r40.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Warning!!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Spinner not saved");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You must fill all percentage values with at least ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "0%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_ng_template_107_Template_button_click_16_listener() {
          var modal_r40 = ctx.$implicit;
          return modal_r40.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CustomizeSpinnerComponent = /*#__PURE__*/function () {
      function CustomizeSpinnerComponent(formBuilder, // For number of field dropdown
      spinnerService, // Form validations
      imageService, centerImageService, getDataSpinnerService, modalService) {
        _classCallCheck(this, CustomizeSpinnerComponent);

        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.imageService = imageService;
        this.centerImageService = centerImageService;
        this.getDataSpinnerService = getDataSpinnerService;
        this.modalService = modalService;
        this.DidModalOpen = false; //Collapse menu

        this.isMenuCollapsed = true;
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
          'bgColor': ''
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
          'bgColor': {
            'required': 'color is required.'
          }
        };
        this.centerImageButtonAppears = false; //sucessCenterImageSubmition

        this.errorWhileSavingCenterImage = false; // Setting Form Array

        this.spinnerForm = this.formBuilder.group({
          spinnerArray: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.createFormFieldForCenterSpinnerImage();
      }

      _createClass(CustomizeSpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var _i = 0; _i < 6; _i++) {
            this.addControl(_i);
          } // For imageUpload / Text Field


          var i = 0;

          for (i = 0; i <= this.items.length; i++) {
            this.itIsImageFile[i] = true;
            this.itIsTextField[i] = false;
          } // For imageUpload / Text Field
          // For number of field dropdown


          for (i = 0; i <= this.items.length; i++) {
            this.itIsTextPopUp[i] = true;
          }

          this.getSpinnerStoredInfo(); // For number of field dropdown

          this.definingPercentage();
        }
      }, {
        key: "getSpinnerStoredInfo",
        value: function getSpinnerStoredInfo() {
          var _this7 = this;

          this.getDataSpinnerService.getSpinner().subscribe(function (data) {
            _this7.SpinnerFieldsStoreData = data; //Not used elements of the Data Array

            for (var i = 0; i < _this7.SpinnerFieldsStoreData.length; i++) {
              _this7.SpinnerFieldsStoreData[i]['file'] = _this7.SpinnerFieldsStoreData[i]['image'];
              delete _this7.SpinnerFieldsStoreData[i]['image'];
              delete _this7.SpinnerFieldsStoreData[i]['createdAt'];
              delete _this7.SpinnerFieldsStoreData[i]['updatedAt'];
              delete _this7.SpinnerFieldsStoreData[i]['_id'];
              delete _this7.SpinnerFieldsStoreData[i]['__v'];
              delete _this7.SpinnerFieldsStoreData[i]['email'];
            } // Getting Number of fields


            var GetDOMNumberOfFields = _this7.numberOfFields.nativeElement[_this7.SpinnerFieldsStoreData.length - 2];
            GetDOMNumberOfFields.setAttribute('selected', 'selected');

            for (var _i2 = 0; _i2 < _this7.SpinnerFieldsStoreData.length; _i2++) {
              _this7.addControl(_i2);
            }

            _this7.onLoad(GetDOMNumberOfFields.value); //Setting Values


            _this7.setValuesofBackendSpinner(_this7.spinnerArray, _this7.SpinnerFieldsStoreData);

            for (var _i3 = 0; _i3 < _this7.SpinnerFieldsStoreData.length; _i3++) {
              if (_this7.SpinnerFieldsStoreData[_i3].isItImage == true) {
                _this7.onSuccess(_i3, _this7.SpinnerFieldsStoreData[_i3].file);
              } else if (_this7.SpinnerFieldsStoreData[_i3].isItImage == false) {
                _this7.itIsImageFile[_i3] = false;
                _this7.itIsTextField[_i3] = true;
                _this7.SuccessfullyUpload[_i3] = false;
                _this7.UnsuccessfullyUpload[_i3] = false;
              }

              _this7.percentageValues[_i3] = _this7.SpinnerFieldsStoreData[_i3].percentage;
            }

            _this7.checkfullpercentage();
          }, function (err) {
            throw new Error(err);
          });
          this.centerImageService.getImageCenter().subscribe(function (data) {
            _this7.CenterImageFieldStoreData = data;
            delete _this7.CenterImageFieldStoreData[0]['createdAt'];
            delete _this7.CenterImageFieldStoreData[0]['updatedAt'];
            delete _this7.CenterImageFieldStoreData[0]['_id'];
            delete _this7.CenterImageFieldStoreData[0]['__v'];

            _this7.setValuesofBackendSpinner(_this7.CenterImageForm, _this7.CenterImageFieldStoreData[0]);

            if (_this7.CenterImageForm.value.centerImage != '') {
              _this7.onSuccessCenter(_this7.CenterImageFieldStoreData[0].centerImage);
            } else if (_this7.CenterImageForm.value.centerImage == '') {
              _this7.SuccessSpinnerCenter = false;
              _this7.UnsuccessSpinnerCenter = false;
            }
          }, function (err) {
            _this7.SuccessSpinnerCenter = false;
            _this7.UnsuccessSpinnerCenter = false;
            throw new Error(err);
          });
        }
      }, {
        key: "setValuesofBackendSpinner",
        value: function setValuesofBackendSpinner(form, data) {
          form.patchValue(data);
        }
      }, {
        key: "createSpFormGroup",
        value: function createSpFormGroup() {
          var _this8 = this;

          var SpinnerForm = this.formBuilder.group({
            isItImage: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: [''],
            textFieldOne: [''],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            isItEmail: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            textPopUp: [''],
            emails: [''],
            bgColor: ['']
          });
          SpinnerForm.valueChanges.subscribe(function (data) {
            _this8.onValueChanged(SpinnerForm, data);
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
          var _this9 = this;

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
              _this9.isPercentageMoreThanHundred[i] = true;
              _this9.percentageValues[i] = value;
            } else if (value < 0) {
              event.target.value = 0;
              _this9.isPercentageLessThanZero[i] = true;
            } else if (value >= 0 && value <= 100) {
              _this9.isPercentageMoreThanHundred[i] = false;
              _this9.isPercentageLessThanZero[i] = false;
              _this9.percentageValues[i] = value;
            }

            _this9.checkfullpercentage();
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
            this.SumOfPercentageMoreThanHundred = false;
          } else if (this.percentageSum > 100) {
            this.SumOfPercentageMoreThanHundred = true;
            this.SumOfPercentageEqualHundred = false;

            if (this.DidModalOpen === false) {
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
          var _this10 = this;

          this.StringOfImageUpload.push(new UploadFile(index, path));
          this.SuccessfullyUpload[index] = false;
          this.UnsuccessfullyUpload[index] = false;
          setTimeout(function () {
            _this10.SuccessfullyUpload[index] = true;
          }, 400);
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
          var _this11 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this11.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_6__["ImageSnippet"](event.target.result, file);

            _this11.imageService.uploadImage(_this11.selectedFile.file).subscribe(function (res) {
              _this11.onSuccess(index, res.path);
            }, function (err) {
              _this11.onError(index);

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        } //Center spinner image

      }, {
        key: "onSuccessCenter",
        value: function onSuccessCenter(path) {
          var _this12 = this;

          this.StringOfSpinnerCenter = path;
          this.SuccessSpinnerCenter = false;
          this.UnsuccessSpinnerCenter = false;
          setTimeout(function () {
            _this12.SuccessSpinnerCenter = true;
          }, 400);
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
          var _this13 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this13.selectedCenterFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_6__["ImageSnippet"](event.target.result, file);

            _this13.imageService.uploadImage(_this13.selectedCenterFile.file).subscribe(function (res) {
              _this13.onSuccessCenter(res.path);

              _this13.centerImageButtonAppears = true;
            }, function (err) {
              _this13.onErrorCenter();

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        } /////
        // For number of field dropdown

      }, {
        key: "onChange",
        value: function onChange(i) {
          var _this14 = this;

          this.items.length = 0; // eliminates defalut setting before adding other

          this.spinnerForm.reset();
          this.percentageSum = 0;
          this.getDataSpinnerService.getSpinner().subscribe(function (data) {
            _this14.SpinnerFieldsStoreData = data;

            for (var index = 0; index < _this14.SpinnerFieldsStoreData.length; index++) {
              _this14.SpinnerFieldsStoreData[index]['file'] = _this14.SpinnerFieldsStoreData[index]['image'];
              delete _this14.SpinnerFieldsStoreData[index]['image'];
              delete _this14.SpinnerFieldsStoreData[index]['createdAt'];
              delete _this14.SpinnerFieldsStoreData[index]['updatedAt'];
              delete _this14.SpinnerFieldsStoreData[index]['_id'];
              delete _this14.SpinnerFieldsStoreData[index]['__v'];
              delete _this14.SpinnerFieldsStoreData[index]['email'];
            }

            _this14.setValuesofBackendSpinner(_this14.spinnerArray, _this14.SpinnerFieldsStoreData);

            for (var _index = 0; _index < _this14.SpinnerFieldsStoreData.length; _index++) {
              if (_this14.SpinnerFieldsStoreData[_index].isItImage == true) {
                _this14.onSuccess(_index, _this14.SpinnerFieldsStoreData[_index].file);
              } else if (_this14.SpinnerFieldsStoreData[_index].isItImage == false) {
                _this14.itIsImageFile[_index] = false;
                _this14.itIsTextField[_index] = true;
                _this14.SuccessfullyUpload[_index] = false;
                _this14.UnsuccessfullyUpload[_index] = false;
              }
            }

            if (_this14.SpinnerFieldsStoreData.length <= i - 1) {
              for (var _index2 = 0; _index2 < _this14.SpinnerFieldsStoreData.length; _index2++) {
                _this14.percentageValues[_index2] = _this14.SpinnerFieldsStoreData[_index2].percentage;
              }
            } else if (_this14.SpinnerFieldsStoreData.length > i - 1) {
              for (var _index3 = 0; _index3 < i - 1; _index3++) {
                _this14.percentageValues[_index3] = _this14.SpinnerFieldsStoreData[_index3].percentage;
              }
            }

            console.log('percentageVale', _this14.percentageValues);

            _this14.checkfullpercentage();
          }, function (err) {
            _this14.SuccessSpinnerCenter = false;
            _this14.UnsuccessSpinnerCenter = false;
            throw new Error(err);
          });

          for (var index = 0; index < i; index++) {
            this.SuccessfullyUpload[index] = false;
            this.UnsuccessfullyUpload[index] = false;
            this.itIsTextField[index] = false;
          }

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
        key: "onLoad",
        value: function onLoad(i) {
          this.items.length = 0; // eliminates defalut setting before adding other

          this.spinnerForm.reset();
          this.percentageSum = 0;

          for (var index = 0; index < i; index++) {
            this.SuccessfullyUpload[index] = false;
            this.UnsuccessfullyUpload[index] = false;
            this.itIsTextField[index] = false;
          }

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
          var _this15 = this;

          this.centerImageService.deleteImageCenter().subscribe(function () {
            _this15.setValuesofBackendSpinner(_this15.CenterImageForm, {
              'centerImage': ''
            });

            _this15.UnsuccessSpinnerCenter = false;
            _this15.sucessCenterImageSubmition = true;
            _this15.SuccessSpinnerCenter = false;

            _this15.CenterImageForm.reset();

            setTimeout(function () {
              _this15.sucessCenterImageSubmition = false;
            }, 2000);
          }, function (err) {
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
          var _this16 = this;

          var spinner = [];
          this.submitPressed = true; // if a field outside the array is added, change this to this.spinnerForm.value

          if (this.spinnerForm.status === "VALID") {
            if (this.percentageSum === 100) {
              var counter = 0;
              this.spinnerArray.value.forEach(function (element) {
                if (element.bgColor === '') {
                  element.bgColor = '#000000';
                }

                var field = new _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_5__["formSpinnerControl"](element.isItImage, element.image, element.textFieldOne, element.percentage, element.isItEmail, element.textPopUp, element.email, element.bgColor);
                _this16.totalPercentage[counter] = element.percentage;

                _this16.StringOfImageUpload.forEach(function (file) {
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
                _this16.spinnerService.sendSpinner(spinner).subscribe(function (res) {
                  setTimeout(function () {
                    _this16.sucessFormSubmition = false;
                  }, 2000); //this.spinnerForm.reset();
                  //this.StringOfImageUpload = []; // Resets the StringOfImageUpload array
                }, function (err) {
                  throw new Error('Error Sending the information about the spinner');
                });
              }, function (err) {
                throw new Error('Error deleting the information of the previous spineer');
              });
            } else if (this.percentageSum < 100) {
              this.open(this.modalPercentageLessThan100);
              this.valueToReach100 = 100 - this.percentageSum;
              throw new Error("Error Percentage must add up 100%,\n          You have only reached ".concat(this.percentageSum, "%. You \n          still neeed ").concat(this.valueToReach100, "% to go!!"));
            } else if (this.percentageSum > 100) {
              this.valueOver100 = this.percentageSum - 100;
              this.open(this.modalPercentageMoreThan100);
              throw new Error("Error Percentage must add up 100%,\n          You have ".concat(this.percentageSum, "%. \n          You have exceeded by ").concat(this.valueOver100, "%!!"));
            }
          } else if (this.spinnerForm.status === "INVALID") {
            this.open(this.modalNotAllValuesIntroduced);
          }

          ;
        }
      }, {
        key: "onSubmitCenterImage",
        value: function onSubmitCenterImage() {
          var _this17 = this;

          this.centerImageService.deleteImageCenter().subscribe(function () {
            _this17.centerCopy = _this17.CenterImageForm.value;
            _this17.centerCopy.centerImage = _this17.StringOfSpinnerCenter.replace(/\\/g, "/");

            _this17.centerImageService.sendImageCenter(_this17.centerCopy).subscribe(function (HFform) {
              _this17.centerImageButtonAppears = false;
              _this17.sucessCenterImageSubmition = true;
              setTimeout(function () {
                _this17.sucessCenterImageSubmition = false;
              }, 2000);
              _this17.centerform = HFform;
            }, function (err) {
              _this17.errorWhileSavingCenterImage = true;
              setTimeout(function () {
                _this17.errorWhileSavingCenterImage = false;
              }, 2000);
              throw new Error('Error Sending the information about the spinner');
            });

            _this17.CenterImageForm.reset();
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this18 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this18.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this18.closeResult = "Dismissed ".concat(_this18.getDismissReason(reason));
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
      return new (t || CustomizeSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerCustomizerControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_10__["CenterImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_11__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    CustomizeSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizeSpinnerComponent,
      selectors: [["app-customize-spinner"]],
      viewQuery: function CustomizeSpinnerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numberOfFields = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalPercentageLessThan100 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalPercentageMoreThan100 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalNotAllValuesIntroduced = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.percentage = _t);
        }
      },
      decls: 109,
      vars: 19,
      consts: [[1, "bgColor"], [1, "container", "menu1"], [1, "row", "my-5"], [1, "col-12"], ["id", "settingNumber"], ["for", "numberOptions", 1, "mr-3"], ["matNativeControl", "", "name", "numberOptions", "id", "numberOfFields", "required", "", 3, "change"], ["numberOfFields", ""], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6", "selected", ""], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [3, "formGroup", "hidden", "ngSubmit"], [1, "table", "table-responsive-lg", "table-borderless"], ["formArrayName", "spinnerArray"], ["for", "ImageOption"], ["for", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "totalPercentageSum d-flex justify-content-center bg-warning", 4, "ngIf"], ["class", "totalPercentageSum d-flex justify-content-center bg-danger", 4, "ngIf"], ["class", "totalPercentageSum d-flex justify-content-center bg-success", 4, "ngIf"], ["colspan", "2"], ["type", "submit", 1, "btn", "btn-success"], [1, "d-flex", "justify-content-end", "mt-2"], [1, "successFormSend", 3, "hidden"], [2, "color", "red"], [1, "mt-3"], [1, "d-flex"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex", "mr-3"], ["id", "FileUploadBox"], ["type", "button", 1, "btn", "btn-sm", "btn-success", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["centerimageInput", ""], ["id", "FileUploadMessageBox", 1, "ml-1"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "ml-3"], [1, "invisible-button"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "ml-auto", "ml-2", 3, "hidden"], [1, "ml-3", 3, "hidden"], [1, "btn", "btn-warning", "text-white", "btn-sm", 3, "click"], [1, "successImageSend", 3, "hidden"], ["modalPercentageLessThan100", ""], ["modalPercentageMoreThan100", ""], ["modalNotAllValuesIntroduced", ""], [3, "formGroupName"], ["formControlName", "isItImage", "required", "", 1, "inputType", 3, "change"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [4, "ngIf"], [1, "percentageContainer", "d-flex"], ["formControlName", "percentage", "type", "number", "name", "textField", "min", "0", "max", "100", "autocomplete", "off", 1, "PercentageInput", 3, "keyup", "click"], ["percentage", ""], ["class", "errorPercentageMessages ml-1 d-flex justify-content-center", 4, "ngIf"], ["formControlName", "isItEmail", "name", "resultOption", "required", "", 3, "change"], ["formControlName", "textPopUp", "type", "text", "name", "imageFile", 1, "textPopup"], [1, "colorInputContainer"], ["formControlName", "bgColor", "type", "color", 1, "colorInput"], ["id", "ImageUploadBox", 1, "ImageUploadAndMessage", "d-flex"], ["type", "button", 1, "btn", "btn-sm", "btn-success", "btnInput", 3, "click"], ["type", "file", "accept", "image/*", "name", "imageFile", 2, "display", "none", 3, "change"], ["imageInput", ""], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"], [1, "ImageUploadAndMessage", "d-flex"], ["formControlName", "textFieldOne", "type", "text", "name", "textField", 1, "textFieldOne"], [1, "errorPercentageMessages", "ml-1", "d-flex", "justify-content-center"], [1, "totalPercentageSum", "d-flex", "justify-content-center", "bg-warning"], [1, "totalPercentageSum", "d-flex", "justify-content-center", "bg-danger"], [1, "totalPercentageSum", "d-flex", "justify-content-center", "bg-success"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-warning"], [1, "text-success"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "text-danger"]],
      template: function CustomizeSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_select_change_10_listener($event) {
            return ctx.onChange($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_35_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Input type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "File / Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Percentage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "bg Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CustomizeSpinnerComponent_tr_59_Template, 26, 13, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CustomizeSpinnerComponent_div_64_Template, 3, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, CustomizeSpinnerComponent_div_65_Template, 3, 2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CustomizeSpinnerComponent_div_66_Template, 3, 2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The spinner fields data has been successfully saved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "The spinner has not been saved, all percentages fields must have a value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Image for center of spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_81_listener() {
            return ctx.onSubmitCenterImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_85_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89);

            return _r5.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "File Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 38, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_input_change_88_listener($event) {
            return ctx.ProcessCenterImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, CustomizeSpinnerComponent_div_91_Template, 3, 0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, CustomizeSpinnerComponent_div_92_Template, 3, 0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_98_listener() {
            return ctx.deleteImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Default image!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "The spinner center image has been successfully saved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, CustomizeSpinnerComponent_ng_template_103_Template, 23, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, CustomizeSpinnerComponent_ng_template_105_Template, 27, 2, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, CustomizeSpinnerComponent_ng_template_107_Template, 18, 0, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.spinnerForm)("hidden", ctx.sucessFormSubmition || ctx.unsuccessSendingForm)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spinnerArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentageSum && !ctx.SumOfPercentageMoreThanHundred && !ctx.SumOfPercentageEqualHundred);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentageSum && ctx.SumOfPercentageMoreThanHundred);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.percentageSum && ctx.SumOfPercentageEqualHundred);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.sucessFormSubmition)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.unsuccessSendingForm)("@expand", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.CenterImageForm)("hidden", ctx.sucessCenterImageSubmition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SuccessSpinnerCenter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.UnsuccessSpinnerCenter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.centerImageButtonAppears);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.sucessCenterImageSubmition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.sucessCenterImageSubmition)("@expand", undefined);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n  min-height: 100vh;\n  height: 100%;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\ndiv.menu1[_ngcontent-%COMP%] {\n  padding: 50px 20px 30px 20px;\n  color: white;\n}\n.invalid[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\ndiv.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 140px;\n  border: 1px solid white;\n  border-radius: 5px;\n  text-shadow: 0px 0px 5px #3d3d3d;\n  box-shadow: 6px 8px 8px -5px #282828;\n}\nselect[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 5px;\n  height: 33px;\n  text-shadow: 0px 0px 5px #3d3d3d;\n  box-shadow: 6px 8px 8px -5px #282828;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  text-shadow: 0px 0px 5px #3d3d3d;\n  box-shadow: 6px 8px 8px -5px #282828;\n}\n.invisible-button[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n.btnInput[_ngcontent-%COMP%], .colorInput[_ngcontent-%COMP%] {\n  height: 33px -2px;\n  width: 90px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 115px;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  border: 1px solid black;\n}\n.ImageUploadAndMessage[_ngcontent-%COMP%]   .textFieldOne[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.errorPercentageSum[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 73px;\n  background-color: lightgray;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.errorPercentageSum[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .errorPercentageSum[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 15px;\n  margin: 0;\n}\n.percentageContainer[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n}\n.percentageContainer[_ngcontent-%COMP%]   .PercentageInput[_ngcontent-%COMP%] {\n  border: none;\n  width: 130px;\n  height: 33px -3px;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.percentageContainer[_ngcontent-%COMP%]   .errorPercentageMessages[_ngcontent-%COMP%] {\n  min-width: 72.2222222222px;\n  height: 33px -3px;\n  background-color: red;\n  border: 1px solid white;\n  border-radius: 5px;\n  text-align: center;\n}\n.percentageContainer[_ngcontent-%COMP%]   .errorPercentageMessages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  font-size: 14px;\n  margin: 0;\n}\n.textPopup[_ngcontent-%COMP%] {\n  height: 33px;\n}\n.colorInputContainer[_ngcontent-%COMP%]   .colorInput[_ngcontent-%COMP%] {\n  height: 33px;\n  width: 80px !important;\n}\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.successFormSend[_ngcontent-%COMP%] {\n  min-height: 600px;\n  width: 100%;\n}\n.totalPercentageSum[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 33px;\n  font-weight: bold;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  box-shadow: 6px 8px 8px -5px #282828;\n}\n.totalPercentageSum[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px;\n  text-shadow: 0px 0px 5px #3d3d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9taXplLXNwaW5uZXIvQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcY3VzdG9taXplLXNwaW5uZXJcXGN1c3RvbWl6ZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FERUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxnQ0FBQTtBQ0NKO0FEUUE7RUFDSSxZQUFBO0VBQ0EsdUJBUGtCO0VBUWxCLGtCQVBZO0VBUVosZ0NBUFM7RUFRVCxvQ0FQUTtBQ0VaO0FEUUE7RUFDSSx1QkFka0I7RUFlbEIsa0JBZFk7RUFlWixZQWpCVTtFQWtCVixnQ0FmUztFQWdCVCxvQ0FmUTtBQ1VaO0FEU0E7RUFDSSx1QkF2QmtCO0VBd0JsQixnQ0F0QlM7RUF1QlQsb0NBdEJRO0FDZ0JaO0FEU0E7RUFDSSxlQUFBO0FDTko7QURTQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEVUE7RUFDSSxZQUFBO0VBQ0EsWUF6Q1U7QUNrQ2Q7QURRSTtFQUNJLFlBM0NNO0VBNENOLFlBQUE7QUNOUjtBRFFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOUjtBRFFJO0VBQ0ksWUFBQTtBQ05SO0FEVUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBOURrQjtFQStEbEIsa0JBOURZO0FDdURoQjtBRFFJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNOUjtBRFdBO0VBQ0ksWUFGdUI7RUFHdkIsWUE1RVU7QUNvRWQ7QURTSTtFQUNJLFlBQUE7RUFDQSxZQU5tQjtFQU9uQixpQkFBQTtFQUNBLHVCQWhGYztFQWlGZCxrQkFoRlE7QUN5RWhCO0FEU0k7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkF2RmM7RUF3RmQsa0JBdkZRO0VBd0ZSLGtCQUFBO0FDUFI7QURRUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDTlo7QURVQTtFQUNJLFlBcEdVO0FDNkZkO0FEV0k7RUFDSSxZQXpHTTtFQTBHTixzQkFBQTtBQ1JSO0FEYUE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNWRDtBRGFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDVko7QURhQTtFQUNJLFlBakR1QjtFQWtEdkIsWUEzSFU7RUE0SFYsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQTVIWTtFQTZIWixvQ0EzSFE7QUNpSFo7QURXSTtFQUNJLFdBQUE7RUFDQSxnQ0EvSEs7QUNzSGIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBpbnB1dCwgc2VsZWN0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjhhNzQ1O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyAvL3JnYig1NSwgMTkwLCA5NSlcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZGl2Lm1lbnUxIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAzMHB4IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kSW5wdXRIZWlnaHQ6IDMzcHg7XHJcbiRJbnB1dEJ1dHRvbnNCb3JkZXJzOiAxcHggc29saWQgd2hpdGU7XHJcbiRCb3JkZXJSYWRpb3VzOiA1cHg7XHJcbiR0ZXh0U2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDYxLCA2MSwgNjEsIDEpO1xyXG4kYm94U2hhZG93OiA2cHggOHB4IDhweCAtNXB4ICMyODI4Mjg7XHJcblxyXG5kaXYucm93IGlucHV0LCB0ZCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHRleHRTaGFkb3c7XHJcbiAgICBib3gtc2hhZG93OiAkYm94U2hhZG93O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgYm9yZGVyOiAkSW5wdXRCdXR0b25zQm9yZGVycztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRCb3JkZXJSYWRpb3VzO1xyXG4gICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogJHRleHRTaGFkb3c7XHJcbiAgICBib3gtc2hhZG93OiAkYm94U2hhZG93O1xyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgdGV4dC1zaGFkb3c6ICR0ZXh0U2hhZG93O1xyXG4gICAgYm94LXNoYWRvdzogJGJveFNoYWRvdztcclxufVxyXG5cclxuLmludmlzaWJsZS1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYnRuSW5wdXQsIC5jb2xvcklucHV0IHtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0IC0ycHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuXHJcbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQ7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICBoZWlnaHQ6ICRJbnB1dEhlaWdodDtcclxuICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnRleHRGaWVsZE9uZSB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3JQZXJjZW50YWdlU3Vte1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQrIDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbiAgICBwLCBzcGFuIHtcclxuICAgICAgICBjb2xvcjpyZWQ7IFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuJFBlcmNlbnRhZ2VDb250YWluZXJXaWR0aDogMTMwcHg7XHJcbi5wZXJjZW50YWdlQ29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAkUGVyY2VudGFnZUNvbnRhaW5lcldpZHRoO1xyXG4gICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQ7XHJcbiAgICAuUGVyY2VudGFnZUlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6ICRQZXJjZW50YWdlQ29udGFpbmVyV2lkdGg7XHJcbiAgICAgICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQgLTNweDtcclxuICAgICAgICBib3JkZXI6ICRJbnB1dEJ1dHRvbnNCb3JkZXJzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRCb3JkZXJSYWRpb3VzO1xyXG4gICAgfVxyXG4gICAgLmVycm9yUGVyY2VudGFnZU1lc3NhZ2VzIHtcclxuICAgICAgICBtaW4td2lkdGg6ICRQZXJjZW50YWdlQ29udGFpbmVyV2lkdGgvMS44O1xyXG4gICAgICAgIGhlaWdodDogJElucHV0SGVpZ2h0IC0zcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGJvcmRlcjogJElucHV0QnV0dG9uc0JvcmRlcnM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGV4dFBvcHVwIHtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0O1xyXG59XHJcblxyXG4uY29sb3JJbnB1dENvbnRhaW5lciB7XHJcbiAgICAuY29sb3JJbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAkSW5wdXRIZWlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5LCAubW9kYWwtZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWNjZXNzRm9ybVNlbmQge1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvdGFsUGVyY2VudGFnZVN1bSB7XHJcbiAgICB3aWR0aDogJFBlcmNlbnRhZ2VDb250YWluZXJXaWR0aDtcclxuICAgIGhlaWdodDogJElucHV0SGVpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJEJvcmRlclJhZGlvdXM7XHJcbiAgICBib3gtc2hhZG93OiAkYm94U2hhZG93O1xyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6ICR0ZXh0U2hhZG93O1xyXG4gICAgfVxyXG59IiwiLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJnQ29sb3IgdGFibGUge1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdDb2xvciB0YWJsZSBpbnB1dCwgLmJnQ29sb3IgdGFibGUgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJnQ29sb3Igc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZGl2Lm1lbnUxIHtcbiAgcGFkZGluZzogNTBweCAyMHB4IDMwcHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG5kaXYucm93IGlucHV0LCB0ZCBpbnB1dCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMzZDNkM2Q7XG4gIGJveC1zaGFkb3c6IDZweCA4cHggOHB4IC01cHggIzI4MjgyODtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzNkM2QzZDtcbiAgYm94LXNoYWRvdzogNnB4IDhweCA4cHggLTVweCAjMjgyODI4O1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCAjM2QzZDNkO1xuICBib3gtc2hhZG93OiA2cHggOHB4IDhweCAtNXB4ICMyODI4Mjg7XG59XG5cbi5pbnZpc2libGUtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4uYnRuSW5wdXQsIC5jb2xvcklucHV0IHtcbiAgaGVpZ2h0OiAzM3B4IC0ycHg7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uSW1hZ2VVcGxvYWRBbmRNZXNzYWdlIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDMzcHg7XG59XG4uSW1hZ2VVcGxvYWRBbmRNZXNzYWdlIC5idG4ge1xuICBoZWlnaHQ6IDMzcHg7XG4gIHdpZHRoOiAxMTVweDtcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLmFsZXJ0IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5JbWFnZVVwbG9hZEFuZE1lc3NhZ2UgLnRleHRGaWVsZE9uZSB7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLmVycm9yUGVyY2VudGFnZVN1bSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA3M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZXJyb3JQZXJjZW50YWdlU3VtIHAsIC5lcnJvclBlcmNlbnRhZ2VTdW0gc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBlcmNlbnRhZ2VDb250YWluZXIge1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzNweDtcbn1cbi5wZXJjZW50YWdlQ29udGFpbmVyIC5QZXJjZW50YWdlSW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzM3B4IC0zcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGVyY2VudGFnZUNvbnRhaW5lciAuZXJyb3JQZXJjZW50YWdlTWVzc2FnZXMge1xuICBtaW4td2lkdGg6IDcyLjIyMjIyMjIyMjJweDtcbiAgaGVpZ2h0OiAzM3B4IC0zcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBlcmNlbnRhZ2VDb250YWluZXIgLmVycm9yUGVyY2VudGFnZU1lc3NhZ2VzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHRQb3B1cCB7XG4gIGhlaWdodDogMzNweDtcbn1cblxuLmNvbG9ySW5wdXRDb250YWluZXIgLmNvbG9ySW5wdXQge1xuICBoZWlnaHQ6IDMzcHg7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5LCAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Y2Nlc3NGb3JtU2VuZCB7XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvdGFsUGVyY2VudGFnZVN1bSB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiA2cHggOHB4IDhweCAtNXB4ICMyODI4Mjg7XG59XG4udG90YWxQZXJjZW50YWdlU3VtIHAge1xuICBtYXJnaW46IDRweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMzZDNkM2Q7XG59Il19 */"],
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
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_11__["SpinnerService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, {
        numberOfFields: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['numberOfFields']
        }],
        percentage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['percentage']
        }],
        modalPercentageLessThan100: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modalPercentageLessThan100']
        }],
        modalPercentageMoreThan100: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modalPercentageMoreThan100']
        }],
        modalNotAllValuesIntroduced: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['modalNotAllValuesIntroduced']
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
          var _this19 = this;

          this.emailService.getEmails().subscribe(function (emails) {
            emails.forEach(function (email) {
              var EMAIL = new EmailResult(email.emailAddress, email.firstName, email.lastName, email.updatedAt, email.createdAt, email.result);

              _this19.emails.push(EMAIL);
            }); // Order chronologically

            var GetSortOrder = function GetSortOrder(prop) {
              return function (a, b) {
                if (a[prop] > b[prop]) {
                  return -1;
                } else if (a[prop] < b[prop]) {
                  return 1;
                }

                return 0;
              };
            };

            _this19.emails.sort(GetSortOrder('DateSpin'));

            console.log('sort', _this19.emails); // Eliminate the repetead, leave the newest

            var reducer = function reducer(accumulator, currentValue) {
              if (!accumulator.find(function (obj) {
                return obj.EmailAddress === currentValue.EmailAddress;
              })) {
                accumulator.push(currentValue);
              }

              return accumulator;
            };

            _this19.emails = _this19.emails.reduce(reducer, []);
            console.log(_this19.emails);
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
          var _this20 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this20.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this20.closeResult = "Dismissed ".concat(_this20.getDismissReason(reason));
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
      consts: [[1, "bgColor"], [1, "container", "col-12", "col-lg-10"], ["id", "title"], [1, "row"], [1, "col-12", "d-flex", "justify-content-end", "mb-5"], [1, "btn", "btn-info", 3, "click"], ["class", "table-responsive-lg", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end", "mt-5"], [1, "btn", "btn-danger", 3, "click"], ["content", ""], [1, "table-responsive-lg"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mb-4"], ["type", "button", 1, "btn", "btn-danger", "mr-5", 3, "click"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]],
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
          this.initialStatus();
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
          var _this21 = this;

          if (this.LoginForm.status === "VALID") {
            var user = new _services_login_service__WEBPACK_IMPORTED_MODULE_2__["userLogin"](this.LoginForm.controls.username.value, this.LoginForm.controls.password.value);
            this.loginservice.Login(user).subscribe(function (userData) {
              _this21.userLogedIn = userData;
              _this21.LoginError = false;
              localStorage.setItem("userToken", _this21.userLogedIn.token);

              _this21.router.navigate(['admin/bc/customize-spinner']);
            }, function (err) {
              _this21.LoginError = true;
            });
          }
        }
      }, {
        key: "initialStatus",
        value: function initialStatus() {
          this.loginservice.InitialUser().subscribe(function (res) {
            console.log(res);
          });
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
    var _c1 = ["ConfirmationModal"];

    function PasswordChangeComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorry there was an error, try again!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PasswordChangeComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_20_Template_button_click_1_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure you want to change your password?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_20_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSubmit();
        })("click", function PasswordChangeComponent_ng_template_20_Template_button_click_8_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_20_Template_button_click_10_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PasswordChangeComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_22_Template_button_click_1_listener() {
          var modal_r11 = ctx.$implicit;
          return modal_r11.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password Changed Successfully");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_ng_template_22_Template_button_click_8_listener() {
          var modal_r11 = ctx.$implicit;
          return modal_r11.close("Save click");
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
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
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
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.PasswordChangeForm.status === "VALID") {
            this.getCurrent();
          }
        }
      }, {
        key: "getCurrent",
        value: function getCurrent() {
          var _this23 = this;

          this.changePasswordservice.getCurrent().subscribe(function (res) {
            _this23.currentUser = res;
            var user = new _services_change_password_service__WEBPACK_IMPORTED_MODULE_3__["passwordChange"](_this23.PasswordChangeForm.controls.password.value);

            _this23.changePasswordservice.ChangePassword(user, _this23.currentUser.id).subscribe(function (resp) {
              _this23.PasswordChangeError = false;

              _this23.open(_this23.modal);
            }, function (err) {
              _this23.PasswordChangeError = true;
            });
          });
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ConfirmationModal = _t.first);
        }
      },
      decls: 24,
      vars: 2,
      consts: [[1, "container"], [1, "align-middle"], [1, "row"], [1, "col-12"], [1, "title", "d-flex", "justify-content-center"], [1, "formContent"], [3, "formGroup"], [1, "col-12", "d-flex", "justify-content-center", "mb-2"], [1, "field"], ["formControlName", "password", "type", "password", "placeholder", "Enter your NEW password", "required", ""], [1, "col-12", "d-flex", "justify-content-center"], [1, "field", "d-flex", "justify-content-end"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], ["class", "errorMessage", 4, "ngIf"], ["ConfirmationModal", ""], ["modal", ""], [1, "errorMessage"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "routerLink", "/bc/customize-spinner", 1, "btn", "btn-success", 3, "click"]],
      template: function PasswordChangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordChangeComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return ctx.open(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PasswordChangeComponent_div_19_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PasswordChangeComponent_ng_template_20_Template, 12, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PasswordChangeComponent_ng_template_22_Template, 10, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.PasswordChangeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

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
        }],
        ConfirmationModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ConfirmationModal']
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
        this.GET_CURRENT_URL_API = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_3__["baseHref"], "users/current");
      }

      _createClass(ChangePasswordService, [{
        key: "ChangePassword",
        value: function ChangePassword(user, id) {
          return this.http.put("".concat(this.URL_API, "/").concat(id), user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "getCurrent",
        value: function getCurrent() {
          return this.http.get(this.GET_CURRENT_URL_API, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
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

    var passwordChange = function passwordChange(password) {
      _classCallCheck(this, passwordChange);

      this.password = password;
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

            for (var _index4 in headerList) {
              var head = headerList[_index4];
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
        this.initialAdmin = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_1__["baseHref"], "api/v1/initialStatus/initialUser");
      }

      _createClass(LoginService, [{
        key: "Login",
        value: function Login(user) {
          return this.http.post(this.URL_API, user);
        }
      }, {
        key: "InitialUser",
        value: function InitialUser() {
          return this.http.get(this.initialAdmin);
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

    var baseHref = '/~devsite/'; // /~devsite/

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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_baseHref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/baseHref */
    "./src/app/shared/baseHref.ts");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _services_emails_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/emails.service */
    "./src/app/services/emails.service.ts");
    /* harmony import */


    var _services_center_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/center-image.service */
    "./src/app/services/center-image.service.ts");

    var _c0 = ["txt"];
    var _c1 = ["spin"];
    var _c2 = ["ResultEmail"];
    var _c3 = ["ResultText"];
    var _c4 = ["wheelSec"];

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.HeaderFooter.pageTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.HeaderFooter.pageDescription);
      }
    }

    function SpinnerComponent_div_2_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r11 = ctx_r15.index;
        var field_r10 = ctx_r15.$implicit;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r13.holder[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r13.fieldStyleNth[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r13.imageOrientation[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", field_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_div_2_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r11 = ctx_r16.index;
        var field_r10 = ctx_r16.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r14.holder[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r14.fieldStyleNth[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r14.textOrientation[i_r11]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r10.textFieldOne, " ");
      }
    }

    function SpinnerComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_2_div_2_div_3_Template, 5, 7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_2_div_2_div_4_Template, 5, 7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r10.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !field_r10.isItImage);
      }
    }

    function SpinnerComponent_div_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.centerImage.centerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_2_div_2_Template, 5, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_div_2_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.rotate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpinnerComponent_div_2_div_6_Template, 2, 1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.spiningRotate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.SpinnerFields);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.spinMovemente);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.centerImage);
      }
    }

    function SpinnerComponent_ng_template_5_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r21.FinalResult.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_ng_template_5_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please check information provided, all the fields are required and it must be a valid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SpinnerComponent_ng_template_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_ng_template_5_div_4_div_1_Template, 2, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SpinnerComponent_ng_template_5_div_4_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpinnerComponent_ng_template_5_div_4_div_5_Template, 3, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_5_div_4_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var modal_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r19.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.FinalResult.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.FinalResult.textPopUp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.sendEmailForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r20.validForm);
      }
    }

    function SpinnerComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_5_Template_button_click_1_listener() {
          var modal_r19 = ctx.$implicit;
          return modal_r19.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_5_div_4_Template, 17, 4, "div", 32);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.FinalResult);
      }
    }

    function SpinnerComponent_ng_template_7_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r30.FinalResult.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_ng_template_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_ng_template_7_div_4_div_1_Template, 2, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.FinalResult.isItImage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.FinalResult.textPopUp);
      }
    }

    function SpinnerComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_7_Template_button_click_1_listener() {
          var modal_r28 = ctx.$implicit;
          return modal_r28.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_7_div_4_Template, 4, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_7_Template_button_click_6_listener() {
          var modal_r28 = ctx.$implicit;
          return modal_r28.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.FinalResult);
      }
    }

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(spinnerService, headerFooterService, emailSevice, modalService, centerImageService, fb, renderer2, _document) {
        _classCallCheck(this, SpinnerComponent);

        this.spinnerService = spinnerService;
        this.headerFooterService = headerFooterService;
        this.emailSevice = emailSevice;
        this.modalService = modalService;
        this.centerImageService = centerImageService;
        this.fb = fb;
        this.renderer2 = renderer2;
        this._document = _document; //headScript: HTMLLinkElement = document.querySelector('#head');

        this.API_IMAGE_URL = "".concat(_shared_baseHref__WEBPACK_IMPORTED_MODULE_4__["baseHref"], "api/v1/imageUpload/");
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
        this.firedOnce = false;
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
          var _this24 = this;

          this.spinnerService.getSpinner().subscribe(function (spinnerFields) {
            _this24.SpinnerFields = spinnerFields;
            _this24.angle = 360 / _this24.SpinnerFields.length;

            for (var i = 0; i < _this24.SpinnerFields.length; i++) {
              //Substitute backslashes for slashes
              _this24.SpinnerFields[i].image = _this24.SpinnerFields[i].image.replace(/\\/g, "/");
              _this24.SpinnerFields[i].image = _this24.API_IMAGE_URL + _this24.SpinnerFields[i].image.slice(14);
              _this24.bgColorStyle[i] = _this24.SpinnerFields[i].bgColor; // Backgorund color

              _this24.fontColor[i] = _this24.spinnerService.invertColor(_this24.bgColorStyle[i]); //Font Color

              _this24.holder[i] = {
                'transform': 'rotate(' + _this24.angle * i + 'deg)',
                '-webkit-transform': 'rotate(' + _this24.angle * i + 'deg)',
                '-moz-transform': 'rotate(' + _this24.angle * i + 'deg)',
                '-o-transform': 'rotate(' + _this24.angle * i + 'deg)',
                '-ms-transform': 'rotate(' + _this24.angle * i + 'deg)'
              };
              _this24.fieldStyleNth[i] = {
                'transform': 'rotate(' + _this24.angle + 'deg)',
                '-webkit-transform': 'rotate(' + _this24.angle + 'deg)',
                '-moz-transform': 'rotate(' + _this24.angle + 'deg)',
                '-o-transform': 'rotate(' + _this24.angle + 'deg)',
                '-ms-transform': 'rotate(' + _this24.angle + 'deg)',
                'background-color': _this24.bgColorStyle[i],
                'color': _this24.fontColor[i]
              };
              _this24.imageOrientation[i] = {
                'transform': 'rotate(' + (_this24.angle - _this24.angle * 1.5) + 'deg)',
                '-webkit-transform': 'rotate(' + (_this24.angle - _this24.angle * 1.5) + 'deg)',
                '-moz-transform': 'rotate(' + (_this24.angle - _this24.angle * 1.5) + 'deg)',
                '-o-transform': 'rotate(' + (_this24.angle - _this24.angle * 1.5) + 'deg)',
                '-ms-transform': 'rotate(' + (_this24.angle - _this24.angle * 1.5) + 'deg)',
                'transform-origin': 'bottom center'
              };
              _this24.textOrientation[i] = {
                'transform': 'rotate(' + (90 - _this24.angle / 2) + 'deg)',
                '-webkit-transform': 'rotate(' + (180 + _this24.angle / 4) + 'deg)',
                '-moz-transform': 'rotate(' + (180 + _this24.angle / 4) + 'deg)',
                '-o-transform': 'rotate(' + (180 + _this24.angle / 4) + 'deg)',
                '-ms-transform': 'rotate(' + (180 + _this24.angle / 4) + 'deg)',
                'transform-origin': 'center right'
              };
              _this24.initialDegreesStart[i] = _this24.angle * i;
              _this24.initialDegreesEnd[i] = _this24.initialDegreesStart[i] + _this24.angle;
            }
          });
        }
      }, {
        key: "getHeaderFooter",
        value: function getHeaderFooter() {
          var _this25 = this;

          this.headerFooterService.getHeaderFooter().subscribe(function (headerFooter) {
            _this25.HeaderFooter = headerFooter[0]; //Inyecting header

            var headerScript = _this25.renderer2.createElement('script');

            headerScript.type = 'text/javascript';
            headerScript.text = _this25.HeaderFooter.header;

            _this25.renderer2.appendChild(_this25._document.head, headerScript); //Inyecting footer


            var footerScript = _this25.renderer2.createElement('script');

            footerScript.type = 'text/javascript';
            footerScript.text = _this25.HeaderFooter.footer;

            _this25.renderer2.appendChild(_this25._document.body, footerScript);
          });
        }
      }, {
        key: "getImageCenter",
        value: function getImageCenter() {
          var _this26 = this;

          this.centerImageService.getImageCenter().subscribe(function (centerImage) {
            _this26.centerImage = centerImage[0];
            _this26.centerImage.centerImage = _this26.API_IMAGE_URL + _this26.centerImage.centerImage.slice(14);
          });
        }
      }, {
        key: "rotate",
        value: function rotate() {
          if (this.firedOnce) {
            return;
          }

          this.firedOnce = true;
          this.getSpinner();
          var degreeSpinn = 360 * 11;
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
          var _this27 = this;

          //console.log(this.SpinnerFields)
          if (this.SpinnerFields[this.resultingField].isItEmail === true) {
            setTimeout(function () {
              _this27.open(_this27.ResultEmail);
            }, 6500);
          } else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
            setTimeout(function () {
              _this27.open(_this27.ResultText);
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
          var _this28 = this;

          if (this.sendEmailForm.status === "VALID") {
            this.formCopy = this.sendEmailForm.value;
            this.formCopy.result = this.FinalResult.textPopUp;
            this.emailSevice.sendEmails(this.formCopy).subscribe(function (emailForm) {
              _this28.form = emailForm;

              _this28.modalService.dismissAll();

              _this28.validForm = true;
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
          var _this29 = this;

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this29.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this29.closeResult = "Dismissed ".concat(_this29.getDismissReason(reason));
          });
          this.firedOnce = false;
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
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_6__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_7__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_8__["CenterImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
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
      decls: 9,
      vars: 2,
      consts: [["class", "my-5 row", 4, "ngIf"], ["id", "wrapper", 1, "d-flex", "justify-content-center"], ["id", "wheel", 4, "ngIf"], ["id", "txt"], ["txt", ""], ["ResultEmail", ""], ["ResultText", ""], [1, "my-5", "row"], ["id", "title", 1, "col-12", "d-flex", "justify-content-center"], ["id", "description", 1, "col-12", "d-flex", "justify-content-center", "mt-3"], ["id", "wheel"], ["id", "inner-wheel"], [4, "ngFor", "ngForOf"], ["id", "spin", "type", "button", 3, "click"], ["spin", ""], ["id", "inner-spin"], [4, "ngIf"], ["id", "shine"], ["wheelSec", ""], ["class", "hold", 3, "style", 4, "ngIf"], [1, "hold"], ["id", "wheelSec", 1, "sec"], [1, "imageSpan"], [1, "ImageContainer"], [1, "image", "img-fluid", 3, "src"], [1, "sec"], [1, "SpanContainer"], [1, "TextSpan"], [3, "src"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "row", 3, "formGroup", "ngSubmit"], ["class", "errorMessage", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-center", "my-3"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name"], [1, "col-12", "d-flex", "justify-content-center", "mb-3"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name"], ["formControlName", "emailAddress", "type", "email", "placeholder", "email"], [1, "modal-footer"], [1, "btn", "btn-success"], [1, "btn", "btn-danger", 3, "click"], [1, "d-flex", "justify-content-center"], [1, "PopUpImage", "image", "img-fluid", 3, "src"], [1, "errorMessage"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 7, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_2_Template, 8, 6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpinnerComponent_ng_template_5_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpinnerComponent_ng_template_7_Template, 8, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SpinnerFields);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#wrapper[_ngcontent-%COMP%] {\n  margin: 40px auto 0;\n  width: 100%;\n  position: relative;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n  width: 305px;\n  height: 305px;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  border: 8.7142857143px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 17.4285714286px, rgba(0, 0, 0, 0.05) 0px 3.8125px 0px;\n  transform: rotate(0deg);\n  \n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305px;\n  height: 305px;\n  clip: rect(0px, 305px, 305px, 152.5px);\n  left: -8.7142857143px;\n  top: -8.7142857143px;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305px;\n  height: 305px;\n  transform-origin: center;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  clip: rect(0px, 152.5px, 305px, 0px);\n  border-radius: 305px;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 152.5px;\n  right: 108.9285714286px;\n  z-index: 10000000;\n  display: block;\n  text-align: center;\n  font-size: 30.5px;\n  max-width: 87.1428571429px;\n  min-height: 126.3571428571px;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 70%;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 133.4375px;\n  right: 152.5px;\n  min-width: 135.0714285714px;\n  max-width: 135.0714285714px;\n  min-height: 38.125px;\n  max-height: 38.125px;\n  display: flex;\n  display: flex;\n  align-items: center;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 100%;\n  min-height: 100%;\n  z-index: 10000000;\n  display: block;\n  font-size: 20.3333333333px;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n  width: 82.9615928626px;\n  height: 82.9615928626px;\n  position: absolute;\n  top: 102.3049178544px;\n  left: 102.3049178544px;\n  margin: 0;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.8296159286px 0px;\n  z-index: 1000;\n  background: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n  width: 66.0173160173px;\n  height: 66.0173160173px;\n  position: absolute;\n  top: 8.4721384226px;\n  left: 8.4721384226px;\n  margin: 0;\n  border-radius: 50%;\n  background: red;\n  z-index: 999;\n  box-shadow: white -0.8296159286px 0px inset, white 0px 0.8296159286px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 1.0370199108px;\n  background: white;\n  \n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n  \n  overflow: hidden;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 66.0173160173px;\n  height: 66.0173160173px;\n  border-radius: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n  content: \"\";\n  text-align: center;\n  line-height: 82.9615928626px;\n  color: #CCC;\n  text-shadow: 0 0.8296159286px 0 #fff, -0.8296159286px 0 rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 100000;\n  width: 82.9615928626px;\n  height: 82.9615928626px;\n  display: block;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 19.1714285714px 26.84px 19.1714285714px;\n  border-color: transparent transparent #ffffff transparent;\n  top: -18.3678615774px;\n  left: 22.3093678599px;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1.1851656123px inset;\n}\n#wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n  font-size: 3.5560048377px;\n}\n#wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border: 7.625px solid rgba(0, 0, 0, 0.1);\n  width: 295.24px;\n  height: 295.24px;\n  border-radius: 50%;\n  z-index: 1000;\n}\n@media only screen and (min-width: 375px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 9.7142857143px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 19.4285714286px, rgba(0, 0, 0, 0.05) 0px 4.25px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 340px;\n    height: 340px;\n    clip: rect(0px, 340px, 340px, 170px);\n    left: -9.7142857143px;\n    top: -9.7142857143px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 340px;\n    height: 340px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 170px, 340px, 0px);\n    border-radius: 340px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 170px;\n    right: 121.4285714286px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 34px;\n    max-width: 97.1428571429px;\n    min-height: 140.8571428571px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 148.75px;\n    right: 170px;\n    min-width: 150.5714285714px;\n    max-width: 150.5714285714px;\n    min-height: 42.5px;\n    max-height: 42.5px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 22.6666666667px;\n    text-shadow: rgba(255, 255, 255, 0.1) -1.7px 0px, rgba(0, 0, 0, 0.2) -1.7px 0px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 92.4817756501px;\n    height: 92.4817756501px;\n    position: absolute;\n    top: 114.0448264607px;\n    left: 114.0448264607px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 0.9248177565px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 73.5930735931px;\n    height: 73.5930735931px;\n    position: absolute;\n    top: 9.4443510285px;\n    left: 9.4443510285px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -0.9248177565px 0px inset, white 0px 0.9248177565px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 1.1560221956px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 73.5930735931px;\n    height: 73.5930735931px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 92.4817756501px;\n    color: #CCC;\n    text-shadow: 0 0.9248177565px 0 #fff, -0.9248177565px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 92.4817756501px;\n    height: 92.4817756501px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 21.3714285714px 29.92px 21.3714285714px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -20.4756489715px;\n    left: 24.8694592536px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1.3211682236px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 3.9640709666px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 8.5px solid rgba(0, 0, 0, 0.1);\n    width: 329.12px;\n    height: 329.12px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@media only screen and (min-width: 425px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 395px;\n    height: 395px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 11.2857142857px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 22.5714285714px, rgba(0, 0, 0, 0.05) 0px 4.9375px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 395px;\n    height: 395px;\n    clip: rect(0px, 395px, 395px, 197.5px);\n    left: -11.2857142857px;\n    top: -11.2857142857px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 395px;\n    height: 395px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 197.5px, 395px, 0px);\n    border-radius: 395px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 197.5px;\n    right: 141.0714285714px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 39.5px;\n    max-width: 112.8571428571px;\n    min-height: 163.6428571429px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 172.8125px;\n    right: 197.5px;\n    min-width: 174.9285714286px;\n    max-width: 174.9285714286px;\n    min-height: 49.375px;\n    max-height: 49.375px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 26.3333333333px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 107.4420628876px;\n    height: 107.4420628876px;\n    position: absolute;\n    top: 132.4932542705px;\n    left: 132.4932542705px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.0744206289px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 85.4978354978px;\n    height: 85.4978354978px;\n    position: absolute;\n    top: 10.9721136949px;\n    left: 10.9721136949px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -1.0744206289px 0px inset, white 0px 1.0744206289px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 1.3430257861px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 85.4978354978px;\n    height: 85.4978354978px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 107.4420628876px;\n    color: #CCC;\n    text-shadow: 0 1.0744206289px 0 #fff, -1.0744206289px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 107.4420628876px;\n    height: 107.4420628876px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 24.8285714286px 34.76px 24.8285714286px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -23.7878863051px;\n    left: 28.8924600152px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1.5348866127px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 4.6053177406px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 9.875px solid rgba(0, 0, 0, 0.1);\n    width: 382.36px;\n    height: 382.36px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@media only screen and (min-width: 550px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 500px;\n    height: 500px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 14.2857142857px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 28.5714285714px, rgba(0, 0, 0, 0.05) 0px 6.25px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    clip: rect(0px, 500px, 500px, 250px);\n    left: -14.2857142857px;\n    top: -14.2857142857px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 500px;\n    height: 500px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 250px, 500px, 0px);\n    border-radius: 500px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 250px;\n    right: 178.5714285714px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 50px;\n    max-width: 142.8571428571px;\n    min-height: 207.1428571429px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 218.75px;\n    right: 250px;\n    min-width: 221.4285714286px;\n    max-width: 221.4285714286px;\n    min-height: 62.5px;\n    max-height: 62.5px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 33.3333333333px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 136.0026112501px;\n    height: 136.0026112501px;\n    position: absolute;\n    top: 167.7129800892px;\n    left: 167.7129800892px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.3600261125px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 108.2251082251px;\n    height: 108.2251082251px;\n    position: absolute;\n    top: 13.8887515125px;\n    left: 13.8887515125px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -1.3600261125px 0px inset, white 0px 1.3600261125px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 1.7000326406px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 108.2251082251px;\n    height: 108.2251082251px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 136.0026112501px;\n    color: #CCC;\n    text-shadow: 0 1.3600261125px 0 #fff, -1.3600261125px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 136.0026112501px;\n    height: 136.0026112501px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 31.4285714286px 44px 31.4285714286px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -30.1112484875px;\n    left: 36.5727341965px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 1.9428944464px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 5.8295161273px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 12.5px solid rgba(0, 0, 0, 0.1);\n    width: 484px;\n    height: 484px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@media only screen and (min-width: 670px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 640px;\n    height: 640px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 18.2857142857px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 36.5714285714px, rgba(0, 0, 0, 0.05) 0px 8px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 640px;\n    height: 640px;\n    clip: rect(0px, 640px, 640px, 320px);\n    left: -18.2857142857px;\n    top: -18.2857142857px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 640px;\n    height: 640px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 320px, 640px, 0px);\n    border-radius: 640px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 320px;\n    right: 228.5714285714px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 64px;\n    max-width: 182.8571428571px;\n    min-height: 265.1428571429px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 280px;\n    right: 320px;\n    min-width: 283.4285714286px;\n    max-width: 283.4285714286px;\n    min-height: 80px;\n    max-height: 80px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 42.6666666667px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 174.0833424002px;\n    height: 174.0833424002px;\n    position: absolute;\n    top: 214.6726145142px;\n    left: 214.6726145142px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.740833424px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 138.5281385281px;\n    height: 138.5281385281px;\n    position: absolute;\n    top: 17.777601936px;\n    left: 17.777601936px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -1.740833424px 0px inset, white 0px 1.740833424px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 2.17604178px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 138.5281385281px;\n    height: 138.5281385281px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 174.0833424002px;\n    color: #CCC;\n    text-shadow: 0 1.740833424px 0 #fff, -1.740833424px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 174.0833424002px;\n    height: 174.0833424002px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 40.2285714286px 56.32px 40.2285714286px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -38.542398064px;\n    left: 46.8130997715px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2.4869048914px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 7.461780643px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 16px solid rgba(0, 0, 0, 0.1);\n    width: 619.52px;\n    height: 619.52px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@media only screen and (min-width: 768px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 700px;\n    height: 700px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 20px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 40px, rgba(0, 0, 0, 0.05) 0px 8.75px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 700px;\n    height: 700px;\n    clip: rect(0px, 700px, 700px, 350px);\n    left: -20px;\n    top: -20px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 700px;\n    height: 700px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 350px, 700px, 0px);\n    border-radius: 700px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 350px;\n    right: 250px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 70px;\n    max-width: 200px;\n    min-height: 290px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 306.25px;\n    right: 350px;\n    min-width: 310px;\n    max-width: 310px;\n    min-height: 87.5px;\n    max-height: 87.5px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 46.6666666667px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 190.4036557502px;\n    height: 190.4036557502px;\n    position: absolute;\n    top: 234.7981721249px;\n    left: 234.7981721249px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 1.9040365575px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 151.5151515152px;\n    height: 151.5151515152px;\n    position: absolute;\n    top: 19.4442521175px;\n    left: 19.4442521175px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -1.9040365575px 0px inset, white 0px 1.9040365575px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 2.3800456969px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 151.5151515152px;\n    height: 151.5151515152px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 190.4036557502px;\n    color: #CCC;\n    text-shadow: 0 1.9040365575px 0 #fff, -1.9040365575px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 190.4036557502px;\n    height: 190.4036557502px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 44px 61.6px 44px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -42.1557478825px;\n    left: 51.2018278751px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2.720052225px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 8.1613225782px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 17.5px solid rgba(0, 0, 0, 0.1);\n    width: 677.6px;\n    height: 677.6px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  #wrapper[_ngcontent-%COMP%] {\n    margin: 40px auto 0;\n    width: 100%;\n    position: relative;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%] {\n    width: 800px;\n    height: 800px;\n    border-radius: 50%;\n    position: relative;\n    overflow: hidden;\n    border: 22.8571428571px solid #fff;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 45.7142857143px, rgba(0, 0, 0, 0.05) 0px 10px 0px;\n    transform: rotate(0deg);\n    \n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 800px;\n    height: 800px;\n    clip: rect(0px, 800px, 800px, 400px);\n    left: -22.8571428571px;\n    top: -22.8571428571px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 800px;\n    height: 800px;\n    transform-origin: center;\n    left: 0;\n    top: 0;\n    opacity: 1;\n    clip: rect(0px, 400px, 800px, 0px);\n    border-radius: 800px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 400px;\n    right: 285.7142857143px;\n    z-index: 10000000;\n    display: block;\n    text-align: center;\n    font-size: 80px;\n    max-width: 228.5714285714px;\n    min-height: 331.4285714286px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span.imageSpan[_ngcontent-%COMP%]   .ImageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 70%;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 350px;\n    right: 400px;\n    min-width: 354.2857142857px;\n    max-width: 354.2857142857px;\n    min-height: 100px;\n    max-height: 100px;\n    display: flex;\n    display: flex;\n    align-items: center;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   .SpanContainer[_ngcontent-%COMP%]   span.TextSpan[_ngcontent-%COMP%] {\n    max-width: 80%;\n    max-height: 100%;\n    min-height: 100%;\n    z-index: 10000000;\n    display: block;\n    font-size: 53.3333333333px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%] {\n    width: 217.6041780002px;\n    height: 217.6041780002px;\n    position: absolute;\n    top: 268.3407681427px;\n    left: 268.3407681427px;\n    margin: 0;\n    border-radius: 50%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 2.17604178px 0px;\n    z-index: 1000;\n    background: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%] {\n    width: 173.1601731602px;\n    height: 173.1601731602px;\n    position: absolute;\n    top: 22.22200242px;\n    left: 22.22200242px;\n    margin: 0;\n    border-radius: 50%;\n    background: red;\n    z-index: 999;\n    box-shadow: white -2.17604178px 0px inset, white 0px 2.17604178px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 2.720052225px;\n    background: white;\n    \n    \n    \n    \n    \n    \n    background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n    \n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n    \n    overflow: hidden;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]   #inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 173.1601731602px;\n    height: 173.1601731602px;\n    border-radius: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:after {\n    content: \"\";\n    text-align: center;\n    line-height: 217.6041780002px;\n    color: #CCC;\n    text-shadow: 0 2.17604178px 0 #fff, -2.17604178px 0 rgba(0, 0, 0, 0.3);\n    position: relative;\n    z-index: 100000;\n    width: 217.6041780002px;\n    height: 217.6041780002px;\n    display: block;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 50.2857142857px 70.4px 50.2857142857px;\n    border-color: transparent transparent #ffffff transparent;\n    top: -48.17799758px;\n    left: 58.5163747144px;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 3.1086311143px inset;\n  }\n  #wrapper[_ngcontent-%COMP%]   div#wheel[_ngcontent-%COMP%]   #spin[_ngcontent-%COMP%]:active:after {\n    font-size: 9.3272258037px;\n  }\n  #wrapper[_ngcontent-%COMP%]   #wheel[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    border: 20px solid rgba(0, 0, 0, 0.1);\n    width: 774.4px;\n    height: 774.4px;\n    border-radius: 50%;\n    z-index: 1000;\n  }\n}\n@-webkit-keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n@keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n.spin[_ngcontent-%COMP%] {\n  -webkit-animation: hh 0.1s;\n  \n  animation: hh 0.1s;\n}\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n.modal-header[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%], .modal-footer[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: red;\n}\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1JEO0FEVUM7RUFDQyxZQWZTO0VBZ0JULGFBaEJTO0VBaUJULGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNEZBQUE7RUFDQSx1QkFBQTtFQXVKRTs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7QUMvSUo7QURQRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBS0Esb0RBQUE7QUNTSDtBRFJHO0VBQ0Msa0JBQUE7RUFDQSxZQWpDTztFQWtDUCxhQWxDTztFQW1DUCxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNVSjtBRFRJO0VBQ0Msa0JBQUE7RUFDQSxZQXhDTTtFQXlDTixhQXpDTTtFQTBDTix3QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBL0NNO0FDMERYO0FEVks7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSwwQkF2RFU7RUF3RFYsNEJBQUE7QUNXTjtBRFRPO0VBQ0MsY0FBQTtBQ1dSO0FEUEs7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQWhFTTtFQWlFTiwyQkFqRU07RUFrRU4sb0JBakVNO0VBa0VOLG9CQWxFTTtFQW1FTixhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDU047QURSTTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNVUDtBREZFO0VBQ0Msc0JBeEZZO0VBeUZaLHVCQXpGWTtFQTBGWixrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsb0JBQUE7RUFDRixpQkFBQTtBQ0lIO0FESEc7RUFDQyxzQkF4R2dCO0VBeUdoQix1QkF6R2dCO0VBMEdoQixrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBIQUFBO0VBRUEsaUJBQUE7RUFBOEIsaUJBQUE7RUFDOEUsV0FBQTtFQUM2QyxvQkFBQTtFQUMzQyx5QkFBQTtFQUNMLGNBQUE7RUFDQyxVQUFBO0VBQzFHLHNFQUFBO0VBQWtHLFFBQUE7RUFDbEcsbUhBQUE7RUFBcUgsMENBQUE7RUFFckgsZ0JBQUE7QUNXSjtBRFZJO0VBQ0Msc0JBOUhlO0VBK0hmLHVCQS9IZTtFQWdJZixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNZTDtBRE5FO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBN0lZO0VBOElaLFdBQUE7RUFDQSwwRUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQWxKWTtFQW1KWix1QkFuSlk7RUFvSlosY0FBQTtBQ1FIO0FETEU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsdURBQUE7RUFDQSx5REFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNPSDtBREpFO0VBQ0MsMkRBQUE7QUNNSDtBREhFO0VBQ0MseUJBQUE7QUNLSDtBRGVDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNiRjtBRG1CQTtFQVFDO0lBQ0MsbUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUN2QkE7RUR5QkE7SUFDQyxZQWJTO0lBY1QsYUFkUztJQWVULGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0lBQ0EsMEZBQUE7SUFDQSx1QkFBQTtJQXVKRTs7Ozs7Ozs7Ozs7Ozs7O01BQUE7RUM5Skg7RURRQztJQUNDLFdBQUE7SUFDQSxZQUFBO0lBS0Esb0RBQUE7RUNORjtFRE9FO0lBQ0Msa0JBQUE7SUFDQSxZQS9CTztJQWdDUCxhQWhDTztJQWlDUCxvQ0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0JBQUE7RUNMSDtFRE1HO0lBQ0Msa0JBQUE7SUFDQSxZQXRDTTtJQXVDTixhQXZDTTtJQXdDTix3QkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGtDQUFBO0lBQ0Esb0JBN0NNO0VDeUNWO0VES0k7SUFDQyxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLDBCQXJEVTtJQXNEViw0QkFBQTtFQ0pMO0VETU07SUFDQyxjQUFBO0VDSlA7RURRSTtJQUNDLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBOURNO0lBK0ROLDJCQS9ETTtJQWdFTixrQkEvRE07SUFnRU4sa0JBaEVNO0lBaUVOLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNOTDtFRE9LO0lBQ0MsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtJQUNBLCtFQUFBO0VDTE47RURZQztJQUNDLHNCQXRGWTtJQXVGWix1QkF2Rlk7SUF3Rlosa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EscURBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtJQUVBLG9CQUFBO0lBQ0YsaUJBQUE7RUNWRjtFRFdFO0lBQ0Msc0JBdEdnQjtJQXVHaEIsdUJBdkdnQjtJQXdHaEIsa0JBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSwwSEFBQTtJQUVBLGlCQUFBO0lBQThCLGlCQUFBO0lBQzhFLFdBQUE7SUFDNkMsb0JBQUE7SUFDM0MseUJBQUE7SUFDTCxjQUFBO0lBQ0MsVUFBQTtJQUMxRyxzRUFBQTtJQUFrRyxRQUFBO0lBQ2xHLG1IQUFBO0lBQXFILDBDQUFBO0lBRXJILGdCQUFBO0VDSEg7RURJRztJQUNDLHNCQTVIZTtJQTZIZix1QkE3SGU7SUE4SGYsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDRko7RURRQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQTNJWTtJQTRJWixXQUFBO0lBQ0EsMEVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFoSlk7SUFpSlosdUJBakpZO0lBa0paLGNBQUE7RUNORjtFRFNDO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtJQUNBLHVEQUFBO0lBQ0EseURBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0VDUEY7RURVQztJQUNDLDJEQUFBO0VDUkY7RURXQztJQUNDLHlCQUFBO0VDVEY7RUQ2QkE7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQ0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzNCRDtBQUNGO0FEaUNBO0VBUUM7SUFDQyxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ3RDQTtFRHdDQTtJQUNDLFlBYlM7SUFjVCxhQWRTO0lBZVQsa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0NBQUE7SUFDQSw0RkFBQTtJQUNBLHVCQUFBO0lBdUpFOzs7Ozs7Ozs7Ozs7Ozs7TUFBQTtFQzdLSDtFRHVCQztJQUNDLFdBQUE7SUFDQSxZQUFBO0lBS0Esb0RBQUE7RUNyQkY7RURzQkU7SUFDQyxrQkFBQTtJQUNBLFlBL0JPO0lBZ0NQLGFBaENPO0lBaUNQLHNDQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtFQ3BCSDtFRHFCRztJQUNDLGtCQUFBO0lBQ0EsWUF0Q007SUF1Q04sYUF2Q007SUF3Q04sd0JBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7SUFDQSxvQ0FBQTtJQUNBLG9CQTdDTTtFQzBCVjtFRG9CSTtJQUNDLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUVBLDJCQXJEVTtJQXNEViw0QkFBQTtFQ25CTDtFRHFCTTtJQUNDLGNBQUE7RUNuQlA7RUR1Qkk7SUFDQyxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQTlETTtJQStETiwyQkEvRE07SUFnRU4sb0JBL0RNO0lBZ0VOLG9CQWhFTTtJQWlFTixhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDckJMO0VEc0JLO0lBQ0MsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQ3BCTjtFRDRCQztJQUNDLHVCQXRGWTtJQXVGWix3QkF2Rlk7SUF3Rlosa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EscURBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtJQUVBLG9CQUFBO0lBQ0YsaUJBQUE7RUMxQkY7RUQyQkU7SUFDQyxzQkF0R2dCO0lBdUdoQix1QkF2R2dCO0lBd0doQixrQkFBQTtJQUNBLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLDBIQUFBO0lBRUEsaUJBQUE7SUFBOEIsaUJBQUE7SUFDOEUsV0FBQTtJQUM2QyxvQkFBQTtJQUMzQyx5QkFBQTtJQUNMLGNBQUE7SUFDQyxVQUFBO0lBQzFHLHNFQUFBO0lBQWtHLFFBQUE7SUFDbEcsbUhBQUE7SUFBcUgsMENBQUE7SUFFckgsZ0JBQUE7RUNuQkg7RURvQkc7SUFDQyxzQkE1SGU7SUE2SGYsdUJBN0hlO0lBOEhmLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQ2xCSjtFRHdCQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLDZCQTNJWTtJQTRJWixXQUFBO0lBQ0EsMEVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFoSlk7SUFpSlosd0JBakpZO0lBa0paLGNBQUE7RUN0QkY7RUR5QkM7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsdURBQUE7SUFDQSx5REFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7RUN2QkY7RUQwQkM7SUFDQywyREFBQTtFQ3hCRjtFRDJCQztJQUNDLHlCQUFBO0VDekJGO0VENkNBO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esd0NBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUMzQ0Q7QUFDRjtBRGlEQTtFQVFDO0lBQ0MsbUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUN0REE7RUR3REE7SUFDQyxZQWJTO0lBY1QsYUFkUztJQWVULGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtDQUFBO0lBQ0EsMEZBQUE7SUFDQSx1QkFBQTtJQXVKRTs7Ozs7Ozs7Ozs7Ozs7O01BQUE7RUM3TEg7RUR1Q0M7SUFDQyxXQUFBO0lBQ0EsWUFBQTtJQUtBLG9EQUFBO0VDckNGO0VEc0NFO0lBQ0Msa0JBQUE7SUFDQSxZQS9CTztJQWdDUCxhQWhDTztJQWlDUCxvQ0FBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7RUNwQ0g7RURxQ0c7SUFDQyxrQkFBQTtJQUNBLFlBdENNO0lBdUNOLGFBdkNNO0lBd0NOLHdCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxVQUFBO0lBQ0Esa0NBQUE7SUFDQSxvQkE3Q007RUNVVjtFRG9DSTtJQUNDLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEsMkJBckRVO0lBc0RWLDRCQUFBO0VDbkNMO0VEcUNNO0lBQ0MsY0FBQTtFQ25DUDtFRHVDSTtJQUNDLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBOURNO0lBK0ROLDJCQS9ETTtJQWdFTixrQkEvRE07SUFnRU4sa0JBaEVNO0lBaUVOLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNyQ0w7RURzQ0s7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0VDcENOO0VENENDO0lBQ0MsdUJBdEZZO0lBdUZaLHdCQXZGWTtJQXdGWixrQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxxREFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBRUEsb0JBQUE7SUFDRixpQkFBQTtFQzFDRjtFRDJDRTtJQUNDLHVCQXRHZ0I7SUF1R2hCLHdCQXZHZ0I7SUF3R2hCLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsMEhBQUE7SUFFQSxpQkFBQTtJQUE4QixpQkFBQTtJQUM4RSxXQUFBO0lBQzZDLG9CQUFBO0lBQzNDLHlCQUFBO0lBQ0wsY0FBQTtJQUNDLFVBQUE7SUFDMUcsc0VBQUE7SUFBa0csUUFBQTtJQUNsRyxtSEFBQTtJQUFxSCwwQ0FBQTtJQUVySCxnQkFBQTtFQ25DSDtFRG9DRztJQUNDLHVCQTVIZTtJQTZIZix3QkE3SGU7SUE4SGYsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDbENKO0VEd0NDO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBM0lZO0lBNElaLFdBQUE7SUFDQSwwRUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQWhKWTtJQWlKWix3QkFqSlk7SUFrSlosY0FBQTtFQ3RDRjtFRHlDQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxvREFBQTtJQUNBLHlEQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQ3ZDRjtFRDBDQztJQUNDLDJEQUFBO0VDeENGO0VEMkNDO0lBQ0MseUJBQUE7RUN6Q0Y7RUQ2REE7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSx1Q0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDM0REO0FBQ0Y7QURpRUE7RUFRQztJQUNDLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDdEVBO0VEd0VBO0lBQ0MsWUFiUztJQWNULGFBZFM7SUFlVCxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQ0FBQTtJQUNBLHVGQUFBO0lBQ0EsdUJBQUE7SUF1SkU7Ozs7Ozs7Ozs7Ozs7OztNQUFBO0VDN01IO0VEdURDO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFLQSxvREFBQTtFQ3JERjtFRHNERTtJQUNDLGtCQUFBO0lBQ0EsWUEvQk87SUFnQ1AsYUFoQ087SUFpQ1Asb0NBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VDcERIO0VEcURHO0lBQ0Msa0JBQUE7SUFDQSxZQXRDTTtJQXVDTixhQXZDTTtJQXdDTix3QkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGtDQUFBO0lBQ0Esb0JBN0NNO0VDTlY7RURvREk7SUFDQyxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUVBLDJCQXJEVTtJQXNEViw0QkFBQTtFQ25ETDtFRHFETTtJQUNDLGNBQUE7RUNuRFA7RUR1REk7SUFDQyxrQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBOURNO0lBK0ROLDJCQS9ETTtJQWdFTixnQkEvRE07SUFnRU4sZ0JBaEVNO0lBaUVOLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNyREw7RURzREs7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0VDcEROO0VENERDO0lBQ0MsdUJBdEZZO0lBdUZaLHdCQXZGWTtJQXdGWixrQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxvREFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBRUEsb0JBQUE7SUFDRixpQkFBQTtFQzFERjtFRDJERTtJQUNDLHVCQXRHZ0I7SUF1R2hCLHdCQXZHZ0I7SUF3R2hCLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0Esc0hBQUE7SUFFQSxpQkFBQTtJQUE4QixpQkFBQTtJQUM4RSxXQUFBO0lBQzZDLG9CQUFBO0lBQzNDLHlCQUFBO0lBQ0wsY0FBQTtJQUNDLFVBQUE7SUFDMUcsc0VBQUE7SUFBa0csUUFBQTtJQUNsRyxtSEFBQTtJQUFxSCwwQ0FBQTtJQUVySCxnQkFBQTtFQ25ESDtFRG9ERztJQUNDLHVCQTVIZTtJQTZIZix3QkE3SGU7SUE4SGYsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDbERKO0VEd0RDO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBM0lZO0lBNElaLFdBQUE7SUFDQSx3RUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQWhKWTtJQWlKWix3QkFqSlk7SUFrSlosY0FBQTtFQ3RERjtFRHlEQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSx1REFBQTtJQUNBLHlEQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtFQ3ZERjtFRDBEQztJQUNDLDJEQUFBO0VDeERGO0VEMkRDO0lBQ0Msd0JBQUE7RUN6REY7RUQ2RUE7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxxQ0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzNFRDtBQUNGO0FEaUZBO0VBUUM7SUFDQyxtQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ3RGQTtFRHdGQTtJQUNDLFlBYlM7SUFjVCxhQWRTO0lBZVQsa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSwrRUFBQTtJQUNBLHVCQUFBO0lBdUpFOzs7Ozs7Ozs7Ozs7Ozs7TUFBQTtFQzdOSDtFRHVFQztJQUNDLFdBQUE7SUFDQSxZQUFBO0lBS0Esb0RBQUE7RUNyRUY7RURzRUU7SUFDQyxrQkFBQTtJQUNBLFlBL0JPO0lBZ0NQLGFBaENPO0lBaUNQLG9DQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUNwRUg7RURxRUc7SUFDQyxrQkFBQTtJQUNBLFlBdENNO0lBdUNOLGFBdkNNO0lBd0NOLHdCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxVQUFBO0lBQ0Esa0NBQUE7SUFDQSxvQkE3Q007RUN0QlY7RURvRUk7SUFDQyxrQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBRUEsZ0JBckRVO0lBc0RWLGlCQUFBO0VDbkVMO0VEcUVNO0lBQ0MsY0FBQTtFQ25FUDtFRHVFSTtJQUNDLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBOURNO0lBK0ROLGdCQS9ETTtJQWdFTixrQkEvRE07SUFnRU4sa0JBaEVNO0lBaUVOLGFBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNyRUw7RURzRUs7SUFDQyxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLDBCQUFBO0VDcEVOO0VENEVDO0lBQ0MsdUJBdEZZO0lBdUZaLHdCQXZGWTtJQXdGWixrQkFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxxREFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBRUEsb0JBQUE7SUFDRixpQkFBQTtFQzFFRjtFRDJFRTtJQUNDLHVCQXRHZ0I7SUF1R2hCLHdCQXZHZ0I7SUF3R2hCLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsMEhBQUE7SUFFQSxpQkFBQTtJQUE4QixpQkFBQTtJQUM4RSxXQUFBO0lBQzZDLG9CQUFBO0lBQzNDLHlCQUFBO0lBQ0wsY0FBQTtJQUNDLFVBQUE7SUFDMUcsc0VBQUE7SUFBa0csUUFBQTtJQUNsRyxtSEFBQTtJQUFxSCwwQ0FBQTtJQUVySCxnQkFBQTtFQ25FSDtFRG9FRztJQUNDLHVCQTVIZTtJQTZIZix3QkE3SGU7SUE4SGYsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDbEVKO0VEd0VDO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsNkJBM0lZO0lBNElaLFdBQUE7SUFDQSwwRUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQWhKWTtJQWlKWix3QkFqSlk7SUFrSlosY0FBQTtFQ3RFRjtFRHlFQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtJQUNBLHlEQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtFQ3ZFRjtFRDBFQztJQUNDLDBEQUFBO0VDeEVGO0VEMkVDO0lBQ0MseUJBQUE7RUN6RUY7RUQ2RkE7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSx1Q0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDM0ZEO0FBQ0Y7QURpR0E7RUFRQztJQUNDLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDdEdBO0VEd0dBO0lBQ0MsWUFiUztJQWNULGFBZFM7SUFlVCxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQ0FBQTtJQUNBLHdGQUFBO0lBQ0EsdUJBQUE7SUF1SkU7Ozs7Ozs7Ozs7Ozs7OztNQUFBO0VDN09IO0VEdUZDO0lBQ0MsV0FBQTtJQUNBLFlBQUE7SUFLQSxvREFBQTtFQ3JGRjtFRHNGRTtJQUNDLGtCQUFBO0lBQ0EsWUEvQk87SUFnQ1AsYUFoQ087SUFpQ1Asb0NBQUE7SUFDQSxzQkFBQTtJQUNBLHFCQUFBO0VDcEZIO0VEcUZHO0lBQ0Msa0JBQUE7SUFDQSxZQXRDTTtJQXVDTixhQXZDTTtJQXdDTix3QkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGtDQUFBO0lBQ0Esb0JBN0NNO0VDdENWO0VEb0ZJO0lBQ0Msa0JBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFFQSwyQkFyRFU7SUFzRFYsNEJBQUE7RUNuRkw7RURxRk07SUFDQyxjQUFBO0VDbkZQO0VEdUZJO0lBQ0Msa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQTlETTtJQStETiwyQkEvRE07SUFnRU4saUJBL0RNO0lBZ0VOLGlCQWhFTTtJQWlFTixhQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDckZMO0VEc0ZLO0lBQ0MsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSwwQkFBQTtFQ3BGTjtFRDRGQztJQUNDLHVCQXRGWTtJQXVGWix3QkF2Rlk7SUF3Rlosa0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0EsbURBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtJQUVBLG9CQUFBO0lBQ0YsaUJBQUE7RUMxRkY7RUQyRkU7SUFDQyx1QkF0R2dCO0lBdUdoQix3QkF2R2dCO0lBd0doQixrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLHFIQUFBO0lBRUEsaUJBQUE7SUFBOEIsaUJBQUE7SUFDOEUsV0FBQTtJQUM2QyxvQkFBQTtJQUMzQyx5QkFBQTtJQUNMLGNBQUE7SUFDQyxVQUFBO0lBQzFHLHNFQUFBO0lBQWtHLFFBQUE7SUFDbEcsbUhBQUE7SUFBcUgsMENBQUE7SUFFckgsZ0JBQUE7RUNuRkg7RURvRkc7SUFDQyx1QkE1SGU7SUE2SGYsd0JBN0hlO0lBOEhmLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtFQ2xGSjtFRHdGQztJQUNDLFdBQUE7SUFDQSxrQkFBQTtJQUNBLDZCQTNJWTtJQTRJWixXQUFBO0lBQ0Esc0VBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFoSlk7SUFpSlosd0JBakpZO0lBa0paLGNBQUE7RUN0RkY7RUR5RkM7SUFDQyxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0Esc0RBQUE7SUFDQSx5REFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7RUN2RkY7RUQwRkM7SUFDQywyREFBQTtFQ3hGRjtFRDJGQztJQUNDLHlCQUFBO0VDekZGO0VENkdBO0lBQ0MsV0FBQTtJQUNBLGtCQUFBO0lBQ0EscUNBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzNHRDtBQUNGO0FEb0hBO0VBQ0M7SUFDRSx1QkFBQTtJQUNBLCtCQUFBO0VDbEhEO0VEcUhEO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ25IRDtBQUNGO0FEc0hFO0VBQ0E7SUFDQyx1QkFBQTtJQUNBLCtCQUFBO0VDcEhEO0VEdUhEO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ3JIRDtBQUNGO0FEd0hFO0VBQ0QsMEJBQUE7RUFBNEIsMEJBQUE7RUFDMUIsa0JBQUE7QUNySEg7QUR3SEE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNySEQ7QURzSEM7RUFDTyxhQUFBO0VBQ0EsVUFBQTtBQ3BIUjtBRHdIQTtFQUNDLGtCQUFBO0FDckhEO0FEMEhBO0VBQ0ksdUJBRmtCO0FDckh0QiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiREaWFtZXRlcjogMzA1cHg7XHJcbiRXaGVlbEJvcmRlcjogJERpYW1ldGVyLzM1O1xyXG4kbWF4V2lkdGhJbWFnZTogJERpYW1ldGVyLzMuNTtcclxuJFNwaW5EaWFtZXRlcjogJERpYW1ldGVyLzMuNjc2NDtcclxuJElubmVyU3BpbkRpYW1ldGVyOiAkRGlhbWV0ZXIvNC42MjtcclxuJHNwYW5XaWR0aDogJERpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqMjtcclxuJHNwYW5IaWdodDogJERpYW1ldGVyLzg7XHJcblxyXG5cclxuI3dyYXBwZXJ7IFxyXG5cdG1hcmdpbjogNDBweCBhdXRvIDA7XHRcclxuXHR3aWR0aDoxMDAlOyBcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcblx0ZGl2I3doZWVse1xyXG5cdFx0d2lkdGg6JERpYW1ldGVyO1xyXG5cdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6NTAlO1x0XHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdGJvcmRlcjokV2hlZWxCb3JkZXIgc29saWQgI2ZmZjtcclxuXHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjIpIDBweCAwcHggJERpYW1ldGVyKjIvMzUsIHJnYmEoMCwwLDAsMC4wNSkgMHB4ICREaWFtZXRlci84MCAwcHg7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdCNpbm5lci13aGVlbHtcclxuXHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0LW1vei10cmFuc2l0aW9uOiAgICBhbGwgNiBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdC1vLXRyYW5zaXRpb246ICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0LW1zLXRyYW5zaXRpb246ICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHR0cmFuc2l0aW9uOiAgICAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHRcclxuXHRcdFx0ZGl2LmhvbGQge1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0Y2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIsJERpYW1ldGVyLCREaWFtZXRlci8yKTtcclxuXHRcdFx0XHRsZWZ0OiAtJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdHRvcDogLSRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRkaXYuc2Vje1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdFx0dG9wOjA7XHRcclxuXHRcdFx0XHRcdG9wYWNpdHk6MTtcclxuXHRcdFx0XHRcdGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLzIsJERpYW1ldGVyLDBweCk7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiREaWFtZXRlcjsgXHJcblx0XHRcdFx0XHRzcGFuLmltYWdlU3BhbiB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0Ym90dG9tOiAkRGlhbWV0ZXIvMjtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yIC0gJG1heFdpZHRoSW1hZ2UvMjtcclxuXHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogJERpYW1ldGVyLzEwO1xyXG5cdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEltYWdlO1xyXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkbWF4V2lkdGhJbWFnZSoxLjQ1O1xyXG5cdFx0XHRcdFx0XHQuSW1hZ2VDb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0LlNwYW5Db250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdGJvdHRvbTogICREaWFtZXRlci8yIC0gJHNwYW5IaWdodC8yOyAvLyAgJERpYW1ldGVyLzIgICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjNcclxuXHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yOyAgLy8gICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjM7ICAgICsgJHNwYW5IaWdodC8yXHJcblx0XHRcdFx0XHRcdG1pbi13aWR0aDogJHNwYW5XaWR0aDtcclxuXHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkc3BhbldpZHRoO1xyXG5cdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRzcGFuLlRleHRTcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiREaWFtZXRlci8xNTtcclxuXHRcdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHQjc3BpbntcclxuXHRcdFx0d2lkdGg6ICRTcGluRGlhbWV0ZXI7ICBcclxuXHRcdFx0aGVpZ2h0OiAkU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjsgIFxyXG5cdFx0XHRsZWZ0OiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4xKSAwcHggJFNwaW5EaWFtZXRlci8xMDAgMHB4O1xyXG5cdFx0XHR6LWluZGV4OjEwMDA7XHJcblx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdCAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXHJcblx0XHRcdCAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcblx0XHRcdCAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgXHJcblx0XHRcdCAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHQjaW5uZXItc3BpbntcclxuXHRcdFx0XHR3aWR0aDokSW5uZXJTcGluRGlhbWV0ZXI7ICAvLzU0cHhcclxuXHRcdFx0XHRoZWlnaHQ6JElubmVyU3BpbkRpYW1ldGVyOy8vNTRweFxyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogJFNwaW5EaWFtZXRlci8yIC0gJElubmVyU3BpbkRpYW1ldGVyLzI7ICAgLy81MCVcclxuXHRcdFx0XHRsZWZ0OiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAgICAvLzUwJVxyXG5cdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6cmVkO1xyXG5cdFx0XHRcdHotaW5kZXg6OTk5O1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggLSRTcGluRGlhbWV0ZXIvMTAwIDBweCBpbnNldCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggJFNwaW5EaWFtZXRlci8xMDAgMHB4IGluc2V0LCAgcmdiYSgwLDAsMCwwLjQpIDBweCAwcHggJFNwaW5EaWFtZXRlci84MCA7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogRkYzLjYrICovXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogVzNDICovXHJcblx0XHRcdFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VhZWFlYScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1x0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHR3aWR0aDogJElubmVyU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAkSW5uZXJTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR9ICAgICBcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0I3NwaW46YWZ0ZXJ7XHJcblx0XHRcdGNvbnRlbnQ6Jyc7XHRcclxuXHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdGNvbG9yOiNDQ0M7XHJcblx0XHRcdHRleHQtc2hhZG93OiAwICRTcGluRGlhbWV0ZXIvMTAwIDAgI2ZmZiwgMCAtJFNwaW5EaWFtZXRlci8xMDAgMCByZ2JhKDAsMCwwLDAuMykgO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHotaW5kZXg6IDEwMDAwMDtcclxuXHRcdFx0d2lkdGg6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0aGVpZ2h0OiRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCNzcGluOmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDpcIlwiO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0Ym9yZGVyLXdpZHRoOiAwICREaWFtZXRlcioyLjIvMzUgJERpYW1ldGVyKjIuMi8yNSAkRGlhbWV0ZXIqMi4yLzM1O1xyXG5cdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdHRvcDogLSREaWFtZXRlcioyLjIvMjUgKyAoJFNwaW5EaWFtZXRlciAtICRJbm5lclNwaW5EaWFtZXRlcikvMjsgIC8vLTIwcHhcclxuXHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJERpYW1ldGVyKjIuMi8zNTsgICAvLzI4cHhcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0I3NwaW46YWN0aXZlICNpbm5lci1zcGlue1xyXG5cdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvNzAgaW5zZXQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCNzcGluOmFjdGl2ZTphZnRlcntcclxuXHRcdFx0Zm9udC1zaXplOiRTcGluRGlhbWV0ZXIvMjMuMzM7XHRcclxuXHRcdH1cclxuXHRcdCBcdC8qXHJcblx0XHQjc2hpbmV7XHJcblx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHR0b3A6MDtcclxuXHRcdFx0bGVmdDowO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcclxuXHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCBcclxuXHRcdFx0b3BhY2l0eTowLjE7XHJcblx0XHR9Ki9cclxuXHR9XHJcblx0XHJcblx0I3doZWVsOmJlZm9yZXtcclxuXHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdGJvcmRlcjogJERpYW1ldGVyLzQwIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuXHRcdHdpZHRoOiREaWFtZXRlciowLjk2ODtcclxuXHRcdGhlaWdodDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdHotaW5kZXg6MTAwMDtcdFxyXG5cdH1cclxuXHRcclxuXHRcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xyXG5cdCREaWFtZXRlcjogMzQwcHg7XHJcblx0JFdoZWVsQm9yZGVyOiAkRGlhbWV0ZXIvMzU7XHJcblx0JG1heFdpZHRoSW1hZ2U6ICREaWFtZXRlci8zLjU7XHJcblx0JFNwaW5EaWFtZXRlcjogJERpYW1ldGVyLzMuNjc2NDtcclxuXHQkSW5uZXJTcGluRGlhbWV0ZXI6ICREaWFtZXRlci80LjYyO1xyXG5cdCRzcGFuV2lkdGg6ICREaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjI7XHJcblx0JHNwYW5IaWdodDogJERpYW1ldGVyLzg7XHJcblx0I3dyYXBwZXJ7IFxyXG5cdFx0bWFyZ2luOiA0MHB4IGF1dG8gMDtcdFxyXG5cdFx0d2lkdGg6MTAwJTsgXHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcclxuXHRcdGRpdiN3aGVlbHtcclxuXHRcdFx0d2lkdGg6JERpYW1ldGVyO1xyXG5cdFx0XHRoZWlnaHQ6JERpYW1ldGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcdFxyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRib3JkZXI6JFdoZWVsQm9yZGVyIHNvbGlkICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjIpIDBweCAwcHggJERpYW1ldGVyKjIvMzUsIHJnYmEoMCwwLDAsMC4wNSkgMHB4ICREaWFtZXRlci84MCAwcHg7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0XHQjaW5uZXItd2hlZWx7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAgICBhbGwgNiBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAgICAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHRcclxuXHRcdFx0XHRkaXYuaG9sZCB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLCREaWFtZXRlciwkRGlhbWV0ZXIvMik7XHJcblx0XHRcdFx0XHRsZWZ0OiAtJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdFx0dG9wOiAtJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdFx0ZGl2LnNlY3tcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0XHRcdHRvcDowO1x0XHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6MTtcclxuXHRcdFx0XHRcdFx0Y2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIvMiwkRGlhbWV0ZXIsMHB4KTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czokRGlhbWV0ZXI7IFxyXG5cdFx0XHRcdFx0XHRzcGFuLmltYWdlU3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogJERpYW1ldGVyLzI7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yIC0gJG1heFdpZHRoSW1hZ2UvMjtcclxuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAkRGlhbWV0ZXIvMTA7XHJcblx0XHRcdFx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtKCREaWFtZXRlci8xMDApIDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtKCREaWFtZXRlci8xMDApIDBweDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEltYWdlO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6ICRtYXhXaWR0aEltYWdlKjEuNDU7XHJcblx0XHRcdFx0XHRcdFx0LkltYWdlQ29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA3MCU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5TcGFuQ29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAgJERpYW1ldGVyLzIgLSAkc3BhbkhpZ2h0LzI7IC8vICAkRGlhbWV0ZXIvMiAgKyAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqM1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAkRGlhbWV0ZXIvMjsgIC8vICArICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlciozOyAgICArICRzcGFuSGlnaHQvMlxyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogJHNwYW5XaWR0aDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICRzcGFuV2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogJHNwYW5IaWdodDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdHNwYW4uVGV4dFNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6JERpYW1ldGVyLzE1O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0I3NwaW57XHJcblx0XHRcdFx0d2lkdGg6ICRTcGluRGlhbWV0ZXI7ICBcclxuXHRcdFx0XHRoZWlnaHQ6ICRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjsgIFxyXG5cdFx0XHRcdGxlZnQ6ICREaWFtZXRlci8yIC0gJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEpIDBweCAkU3BpbkRpYW1ldGVyLzEwMCAwcHg7XHJcblx0XHRcdFx0ei1pbmRleDoxMDAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHQgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG5cdFx0XHRcdCAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcblx0XHRcdFx0ICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICBcclxuXHRcdFx0XHQgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdCNpbm5lci1zcGlue1xyXG5cdFx0XHRcdFx0d2lkdGg6JElubmVyU3BpbkRpYW1ldGVyOyAgLy81NHB4XHJcblx0XHRcdFx0XHRoZWlnaHQ6JElubmVyU3BpbkRpYW1ldGVyOy8vNTRweFxyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6ICRTcGluRGlhbWV0ZXIvMiAtICRJbm5lclNwaW5EaWFtZXRlci8yOyAgIC8vNTAlXHJcblx0XHRcdFx0XHRsZWZ0OiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAgICAvLzUwJVxyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6cmVkO1xyXG5cdFx0XHRcdFx0ei1pbmRleDo5OTk7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4IC0kU3BpbkRpYW1ldGVyLzEwMCAwcHggaW5zZXQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4ICRTcGluRGlhbWV0ZXIvMTAwIDBweCBpbnNldCwgIHJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvODAgO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIEZGMy42KyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBXM0MgKi9cclxuXHRcdFx0XHRcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlYWVhZWEnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJElubmVyU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICRJbm5lclNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fSAgICAgXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHRcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGNvbG9yOiNDQ0M7XHJcblx0XHRcdFx0dGV4dC1zaGFkb3c6IDAgJFNwaW5EaWFtZXRlci8xMDAgMCAjZmZmLCAwIC0kU3BpbkRpYW1ldGVyLzEwMCAwIHJnYmEoMCwwLDAsMC4zKSA7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDEwMDAwMDtcclxuXHRcdFx0XHR3aWR0aDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OlwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwICREaWFtZXRlcioyLjIvMzUgJERpYW1ldGVyKjIuMi8yNSAkRGlhbWV0ZXIqMi4yLzM1O1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHR0b3A6IC0kRGlhbWV0ZXIqMi4yLzI1ICsgKCRTcGluRGlhbWV0ZXIgLSAkSW5uZXJTcGluRGlhbWV0ZXIpLzI7ICAvLy0yMHB4XHJcblx0XHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJERpYW1ldGVyKjIuMi8zNTsgICAvLzI4cHhcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlICNpbm5lci1zcGlue1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjQpIDBweCAwcHggJFNwaW5EaWFtZXRlci83MCBpbnNldDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlOmFmdGVye1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTokU3BpbkRpYW1ldGVyLzIzLjMzO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHQgLypcclxuXHRcdFx0I3NoaW5le1xyXG5cdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXHJcblx0XHRcdFx0b3BhY2l0eTowLjE7XHJcblx0XHRcdH0qL1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQjd2hlZWw6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0Ym9yZGVyOiAkRGlhbWV0ZXIvNDAgc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG5cdFx0XHR3aWR0aDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHR6LWluZGV4OjEwMDA7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcblx0JERpYW1ldGVyOiAzOTVweDtcclxuXHQkV2hlZWxCb3JkZXI6ICREaWFtZXRlci8zNTtcclxuXHQkbWF4V2lkdGhJbWFnZTogJERpYW1ldGVyLzMuNTtcclxuXHQkU3BpbkRpYW1ldGVyOiAkRGlhbWV0ZXIvMy42NzY0O1xyXG5cdCRJbm5lclNwaW5EaWFtZXRlcjogJERpYW1ldGVyLzQuNjI7XHJcblx0JHNwYW5XaWR0aDogJERpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqMjtcclxuXHQkc3BhbkhpZ2h0OiAkRGlhbWV0ZXIvODtcclxuXHQjd3JhcHBlcnsgXHJcblx0XHRtYXJnaW46IDQwcHggYXV0byAwO1x0XHJcblx0XHR3aWR0aDoxMDAlOyBcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFxyXG5cdFx0ZGl2I3doZWVse1xyXG5cdFx0XHR3aWR0aDokRGlhbWV0ZXI7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1x0XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdGJvcmRlcjokV2hlZWxCb3JkZXIgc29saWQgI2ZmZjtcclxuXHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMikgMHB4IDBweCAkRGlhbWV0ZXIqMi8zNSwgcmdiYSgwLDAsMCwwLjA1KSAwcHggJERpYW1ldGVyLzgwIDBweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHRcdCNpbm5lci13aGVlbHtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtbW96LXRyYW5zaXRpb246ICAgIGFsbCA2IGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246ICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246ICAgICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcdFxyXG5cdFx0XHRcdGRpdi5ob2xkIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0Y2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIsJERpYW1ldGVyLCREaWFtZXRlci8yKTtcclxuXHRcdFx0XHRcdGxlZnQ6IC0kV2hlZWxCb3JkZXI7XHJcblx0XHRcdFx0XHR0b3A6IC0kV2hlZWxCb3JkZXI7XHJcblx0XHRcdFx0XHRkaXYuc2Vje1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0XHRcdFx0dG9wOjA7XHRcclxuXHRcdFx0XHRcdFx0b3BhY2l0eToxO1xyXG5cdFx0XHRcdFx0XHRjbGlwOnJlY3QoMHB4LCREaWFtZXRlci8yLCREaWFtZXRlciwwcHgpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiREaWFtZXRlcjsgXHJcblx0XHRcdFx0XHRcdHNwYW4uaW1hZ2VTcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAkRGlhbWV0ZXIvMjtcclxuXHRcdFx0XHRcdFx0XHRyaWdodDogJERpYW1ldGVyLzIgLSAkbWF4V2lkdGhJbWFnZS8yO1xyXG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICREaWFtZXRlci8xMDtcclxuXHRcdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogJG1heFdpZHRoSW1hZ2U7XHJcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogJG1heFdpZHRoSW1hZ2UqMS40NTtcclxuXHRcdFx0XHRcdFx0XHQuSW1hZ2VDb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDcwJTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LlNwYW5Db250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206ICAkRGlhbWV0ZXIvMiAtICRzcGFuSGlnaHQvMjsgLy8gICREaWFtZXRlci8yICArICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlciozXHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yOyAgLy8gICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjM7ICAgICsgJHNwYW5IaWdodC8yXHJcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAkc3BhbldpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogJHNwYW5XaWR0aDtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6ICRzcGFuSGlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0c3Bhbi5UZXh0U3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTokRGlhbWV0ZXIvMTU7XHJcblx0XHRcdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdCNzcGlue1xyXG5cdFx0XHRcdHdpZHRoOiAkU3BpbkRpYW1ldGVyOyAgXHJcblx0XHRcdFx0aGVpZ2h0OiAkU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogJERpYW1ldGVyLzIgLSAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXI7ICBcclxuXHRcdFx0XHRsZWZ0OiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4xKSAwcHggJFNwaW5EaWFtZXRlci8xMDAgMHB4O1xyXG5cdFx0XHRcdHotaW5kZXg6MTAwMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0ICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyBcclxuXHRcdFx0XHQgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIFxyXG5cdFx0XHRcdCAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgXHJcblx0XHRcdFx0ICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHQjaW5uZXItc3BpbntcclxuXHRcdFx0XHRcdHdpZHRoOiRJbm5lclNwaW5EaWFtZXRlcjsgIC8vNTRweFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiRJbm5lclNwaW5EaWFtZXRlcjsvLzU0cHhcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAvLzUwJVxyXG5cdFx0XHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJElubmVyU3BpbkRpYW1ldGVyLzI7ICAgICAgLy81MCVcclxuXHRcdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJlZDtcclxuXHRcdFx0XHRcdHotaW5kZXg6OTk5O1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAtJFNwaW5EaWFtZXRlci8xMDAgMHB4IGluc2V0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAkU3BpbkRpYW1ldGVyLzEwMCAwcHggaW5zZXQsICByZ2JhKDAsMCwwLDAuNCkgMHB4IDBweCAkU3BpbkRpYW1ldGVyLzgwIDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogT3BlcmEgMTIrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogSUUxMCsgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogVzNDICovXHJcblx0XHRcdFx0XHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZWFlYWVhJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICRJbm5lclNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAkSW5uZXJTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH0gICAgIFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OicnO1x0XHJcblx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRjb2xvcjojQ0NDO1xyXG5cdFx0XHRcdHRleHQtc2hhZG93OiAwICRTcGluRGlhbWV0ZXIvMTAwIDAgI2ZmZiwgMCAtJFNwaW5EaWFtZXRlci8xMDAgMCByZ2JhKDAsMCwwLDAuMykgO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR6LWluZGV4OiAxMDAwMDA7XHJcblx0XHRcdFx0d2lkdGg6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjpiZWZvcmV7XHJcblx0XHRcdFx0Y29udGVudDpcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdGJvcmRlci13aWR0aDogMCAkRGlhbWV0ZXIqMi4yLzM1ICREaWFtZXRlcioyLjIvMjUgJERpYW1ldGVyKjIuMi8zNTtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0dG9wOiAtJERpYW1ldGVyKjIuMi8yNSArICgkU3BpbkRpYW1ldGVyIC0gJElubmVyU3BpbkRpYW1ldGVyKS8yOyAgLy8tMjBweFxyXG5cdFx0XHRcdGxlZnQ6ICRTcGluRGlhbWV0ZXIvMiAtICREaWFtZXRlcioyLjIvMzU7ICAgLy8yOHB4XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbntcclxuXHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvNzAgaW5zZXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFjdGl2ZTphZnRlcntcclxuXHRcdFx0XHRmb250LXNpemU6JFNwaW5EaWFtZXRlci8yMy4zMztcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFx0IC8qXHJcblx0XHRcdCNzaGluZXtcclxuXHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjA7XHJcblx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMSUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSksIGNvbG9yLXN0b3AoOSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50IFxyXG5cdFx0XHRcdG9wYWNpdHk6MC4xO1xyXG5cdFx0XHR9Ki9cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0I3doZWVsOmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdGJvcmRlcjogJERpYW1ldGVyLzQwIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuXHRcdFx0d2lkdGg6JERpYW1ldGVyKjAuOTY4O1xyXG5cdFx0XHRoZWlnaHQ6JERpYW1ldGVyKjAuOTY4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0ei1pbmRleDoxMDAwO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTBweCkge1xyXG5cdCREaWFtZXRlcjogNTAwcHg7XHJcblx0JFdoZWVsQm9yZGVyOiAkRGlhbWV0ZXIvMzU7XHJcblx0JG1heFdpZHRoSW1hZ2U6ICREaWFtZXRlci8zLjU7XHJcblx0JFNwaW5EaWFtZXRlcjogJERpYW1ldGVyLzMuNjc2NDtcclxuXHQkSW5uZXJTcGluRGlhbWV0ZXI6ICREaWFtZXRlci80LjYyO1xyXG5cdCRzcGFuV2lkdGg6ICREaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjI7XHJcblx0JHNwYW5IaWdodDogJERpYW1ldGVyLzg7XHJcblx0I3dyYXBwZXJ7IFxyXG5cdFx0bWFyZ2luOiA0MHB4IGF1dG8gMDtcdFxyXG5cdFx0d2lkdGg6MTAwJTsgXHJcblx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcclxuXHRcdGRpdiN3aGVlbHtcclxuXHRcdFx0d2lkdGg6JERpYW1ldGVyO1xyXG5cdFx0XHRoZWlnaHQ6JERpYW1ldGVyO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcdFxyXG5cdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRib3JkZXI6JFdoZWVsQm9yZGVyIHNvbGlkICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjIpIDBweCAwcHggJERpYW1ldGVyKjIvMzUsIHJnYmEoMCwwLDAsMC4wNSkgMHB4ICREaWFtZXRlci84MCAwcHg7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0XHQjaW5uZXItd2hlZWx7XHJcblx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcclxuXHRcdFx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW1vei10cmFuc2l0aW9uOiAgICBhbGwgNiBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW8tdHJhbnNpdGlvbjogICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1tcy10cmFuc2l0aW9uOiAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAgICAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHRcclxuXHRcdFx0XHRkaXYuaG9sZCB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLCREaWFtZXRlciwkRGlhbWV0ZXIvMik7XHJcblx0XHRcdFx0XHRsZWZ0OiAtJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdFx0dG9wOiAtJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdFx0ZGl2LnNlY3tcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0XHRcdHRvcDowO1x0XHJcblx0XHRcdFx0XHRcdG9wYWNpdHk6MTtcclxuXHRcdFx0XHRcdFx0Y2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIvMiwkRGlhbWV0ZXIsMHB4KTtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czokRGlhbWV0ZXI7IFxyXG5cdFx0XHRcdFx0XHRzcGFuLmltYWdlU3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogJERpYW1ldGVyLzI7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yIC0gJG1heFdpZHRoSW1hZ2UvMjtcclxuXHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAkRGlhbWV0ZXIvMTA7XHJcblx0XHRcdFx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtKCREaWFtZXRlci8xMDApIDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtKCREaWFtZXRlci8xMDApIDBweDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICRtYXhXaWR0aEltYWdlO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6ICRtYXhXaWR0aEltYWdlKjEuNDU7XHJcblx0XHRcdFx0XHRcdFx0LkltYWdlQ29udGFpbmVye1xyXG5cdFx0XHRcdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA3MCU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5TcGFuQ29udGFpbmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAgJERpYW1ldGVyLzIgLSAkc3BhbkhpZ2h0LzI7IC8vICAkRGlhbWV0ZXIvMiAgKyAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqM1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAkRGlhbWV0ZXIvMjsgIC8vICArICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlciozOyAgICArICRzcGFuSGlnaHQvMlxyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogJHNwYW5XaWR0aDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6ICRzcGFuV2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogJHNwYW5IaWdodDtcclxuXHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdHNwYW4uVGV4dFNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiA4MCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6JERpYW1ldGVyLzE1O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly90ZXh0LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAtKCREaWFtZXRlci8yMDApIDBweCwgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAtKCREaWFtZXRlci8yMDApIDBweDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHQjc3BpbntcclxuXHRcdFx0XHR3aWR0aDogJFNwaW5EaWFtZXRlcjsgIFxyXG5cdFx0XHRcdGhlaWdodDogJFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6ICREaWFtZXRlci8yIC0gJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyOyAgXHJcblx0XHRcdFx0bGVmdDogJERpYW1ldGVyLzIgLSAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXI7XHJcblx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMSkgMHB4ICRTcGluRGlhbWV0ZXIvMTAwIDBweDtcclxuXHRcdFx0XHR6LWluZGV4OjEwMDA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xyXG5cdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdCAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXHJcblx0XHRcdFx0ICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICBcclxuXHRcdFx0XHQgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgICAgIFxyXG5cdFx0XHRcdCAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0XHRcdFx0I2lubmVyLXNwaW57XHJcblx0XHRcdFx0XHR3aWR0aDokSW5uZXJTcGluRGlhbWV0ZXI7ICAvLzU0cHhcclxuXHRcdFx0XHRcdGhlaWdodDokSW5uZXJTcGluRGlhbWV0ZXI7Ly81NHB4XHJcblx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogJFNwaW5EaWFtZXRlci8yIC0gJElubmVyU3BpbkRpYW1ldGVyLzI7ICAgLy81MCVcclxuXHRcdFx0XHRcdGxlZnQ6ICRTcGluRGlhbWV0ZXIvMiAtICRJbm5lclNwaW5EaWFtZXRlci8yOyAgICAgIC8vNTAlXHJcblx0XHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpyZWQ7XHJcblx0XHRcdFx0XHR6LWluZGV4Ojk5OTtcclxuXHRcdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggLSRTcGluRGlhbWV0ZXIvMTAwIDBweCBpbnNldCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwcHggJFNwaW5EaWFtZXRlci8xMDAgMHB4IGluc2V0LCAgcmdiYSgwLDAsMCwwLjQpIDBweCAwcHggJFNwaW5EaWFtZXRlci84MCA7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7IC8qIE9sZCBicm93c2VycyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogRkYzLjYrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyMzQsMjM0LDIzNCwxKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIElFMTArICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIFczQyAqL1xyXG5cdFx0XHRcdFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VhZWFlYScsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1x0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAkSW5uZXJTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogJElubmVyU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR9ICAgICBcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWZ0ZXJ7XHJcblx0XHRcdFx0Y29udGVudDonJztcdFxyXG5cdFx0XHRcdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0Y29sb3I6I0NDQztcclxuXHRcdFx0XHR0ZXh0LXNoYWRvdzogMCAkU3BpbkRpYW1ldGVyLzEwMCAwICNmZmYsIDAgLSRTcGluRGlhbWV0ZXIvMTAwIDAgcmdiYSgwLDAsMCwwLjMpIDtcclxuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ei1pbmRleDogMTAwMDAwO1xyXG5cdFx0XHRcdHdpZHRoOiRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YmVmb3Jle1xyXG5cdFx0XHRcdGNvbnRlbnQ6XCJcIjtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0XHRoZWlnaHQ6IDA7XHJcblx0XHRcdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdFx0XHRib3JkZXItd2lkdGg6IDAgJERpYW1ldGVyKjIuMi8zNSAkRGlhbWV0ZXIqMi4yLzI1ICREaWFtZXRlcioyLjIvMzU7XHJcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xyXG5cdFx0XHRcdHRvcDogLSREaWFtZXRlcioyLjIvMjUgKyAoJFNwaW5EaWFtZXRlciAtICRJbm5lclNwaW5EaWFtZXRlcikvMjsgIC8vLTIwcHhcclxuXHRcdFx0XHRsZWZ0OiAkU3BpbkRpYW1ldGVyLzIgLSAkRGlhbWV0ZXIqMi4yLzM1OyAgIC8vMjhweFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjphY3RpdmUgI2lubmVyLXNwaW57XHJcblx0XHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuNCkgMHB4IDBweCAkU3BpbkRpYW1ldGVyLzcwIGluc2V0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjphY3RpdmU6YWZ0ZXJ7XHJcblx0XHRcdFx0Zm9udC1zaXplOiRTcGluRGlhbWV0ZXIvMjMuMzM7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcdCAvKlxyXG5cdFx0XHQjc2hpbmV7XHJcblx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6JERpYW1ldGVyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDowO1xyXG5cdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDElLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkpLCBjb2xvci1zdG9wKDklLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCBcclxuXHRcdFx0XHRvcGFjaXR5OjAuMTtcclxuXHRcdFx0fSovXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCN3aGVlbDpiZWZvcmV7XHJcblx0XHRcdGNvbnRlbnQ6Jyc7XHJcblx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRib3JkZXI6ICREaWFtZXRlci80MCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcblx0XHRcdHdpZHRoOiREaWFtZXRlciowLjk2ODtcclxuXHRcdFx0aGVpZ2h0OiREaWFtZXRlciowLjk2ODtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdHotaW5kZXg6MTAwMDtcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjcwcHgpIHtcclxuXHQkRGlhbWV0ZXI6IDY0MHB4O1xyXG5cdCRXaGVlbEJvcmRlcjogJERpYW1ldGVyLzM1O1xyXG5cdCRtYXhXaWR0aEltYWdlOiAkRGlhbWV0ZXIvMy41O1xyXG5cdCRTcGluRGlhbWV0ZXI6ICREaWFtZXRlci8zLjY3NjQ7XHJcblx0JElubmVyU3BpbkRpYW1ldGVyOiAkRGlhbWV0ZXIvNC42MjtcclxuXHQkc3BhbldpZHRoOiAkRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcioyO1xyXG5cdCRzcGFuSGlnaHQ6ICREaWFtZXRlci84O1xyXG5cdCN3cmFwcGVyeyBcclxuXHRcdG1hcmdpbjogNDBweCBhdXRvIDA7XHRcclxuXHRcdHdpZHRoOjEwMCU7IFxyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHJcblx0XHRkaXYjd2hlZWx7XHJcblx0XHRcdHdpZHRoOiREaWFtZXRlcjtcclxuXHRcdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHRcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdFx0Ym9yZGVyOiRXaGVlbEJvcmRlciBzb2xpZCAjZmZmO1xyXG5cdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4yKSAwcHggMHB4ICREaWFtZXRlcioyLzM1LCByZ2JhKDAsMCwwLDAuMDUpIDBweCAkRGlhbWV0ZXIvODAgMHB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdFx0I2lubmVyLXdoZWVse1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogICAgYWxsIDYgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1vLXRyYW5zaXRpb246ICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogICAgICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1x0XHJcblx0XHRcdFx0ZGl2LmhvbGQge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRjbGlwOnJlY3QoMHB4LCREaWFtZXRlciwkRGlhbWV0ZXIsJERpYW1ldGVyLzIpO1xyXG5cdFx0XHRcdFx0bGVmdDogLSRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRcdHRvcDogLSRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRcdGRpdi5zZWN7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdFx0XHR0b3A6MDtcdFxyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OjE7XHJcblx0XHRcdFx0XHRcdGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLzIsJERpYW1ldGVyLDBweCk7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6JERpYW1ldGVyOyBcclxuXHRcdFx0XHRcdFx0c3Bhbi5pbWFnZVNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206ICREaWFtZXRlci8yO1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAkRGlhbWV0ZXIvMiAtICRtYXhXaWR0aEltYWdlLzI7XHJcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogJERpYW1ldGVyLzEwO1xyXG5cdFx0XHRcdFx0XHRcdC8vdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLSgkRGlhbWV0ZXIvMTAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLSgkRGlhbWV0ZXIvMTAwKSAwcHg7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkbWF4V2lkdGhJbWFnZTtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkbWF4V2lkdGhJbWFnZSoxLjQ1O1xyXG5cdFx0XHRcdFx0XHRcdC5JbWFnZUNvbnRhaW5lcntcclxuXHRcdFx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuU3BhbkNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogICREaWFtZXRlci8yIC0gJHNwYW5IaWdodC8yOyAvLyAgJERpYW1ldGVyLzIgICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjNcclxuXHRcdFx0XHRcdFx0XHRyaWdodDogJERpYW1ldGVyLzI7ICAvLyAgKyAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqMzsgICAgKyAkc3BhbkhpZ2h0LzJcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6ICRzcGFuV2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkc3BhbldpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6ICRzcGFuSGlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogJHNwYW5IaWdodDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRzcGFuLlRleHRTcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogODAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiREaWFtZXRlci8xNTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0I3NwaW57XHJcblx0XHRcdFx0d2lkdGg6ICRTcGluRGlhbWV0ZXI7ICBcclxuXHRcdFx0XHRoZWlnaHQ6ICRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjsgIFxyXG5cdFx0XHRcdGxlZnQ6ICREaWFtZXRlci8yIC0gJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEpIDBweCAkU3BpbkRpYW1ldGVyLzEwMCAwcHg7XHJcblx0XHRcdFx0ei1pbmRleDoxMDAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHQgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG5cdFx0XHRcdCAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcblx0XHRcdFx0ICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICBcclxuXHRcdFx0XHQgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdCNpbm5lci1zcGlue1xyXG5cdFx0XHRcdFx0d2lkdGg6JElubmVyU3BpbkRpYW1ldGVyOyAgLy81NHB4XHJcblx0XHRcdFx0XHRoZWlnaHQ6JElubmVyU3BpbkRpYW1ldGVyOy8vNTRweFxyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6ICRTcGluRGlhbWV0ZXIvMiAtICRJbm5lclNwaW5EaWFtZXRlci8yOyAgIC8vNTAlXHJcblx0XHRcdFx0XHRsZWZ0OiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAgICAvLzUwJVxyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6cmVkO1xyXG5cdFx0XHRcdFx0ei1pbmRleDo5OTk7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4IC0kU3BpbkRpYW1ldGVyLzEwMCAwcHggaW5zZXQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4ICRTcGluRGlhbWV0ZXIvMTAwIDBweCBpbnNldCwgIHJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvODAgO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIEZGMy42KyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBXM0MgKi9cclxuXHRcdFx0XHRcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlYWVhZWEnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJElubmVyU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICRJbm5lclNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fSAgICAgXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHRcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGNvbG9yOiNDQ0M7XHJcblx0XHRcdFx0dGV4dC1zaGFkb3c6IDAgJFNwaW5EaWFtZXRlci8xMDAgMCAjZmZmLCAwIC0kU3BpbkRpYW1ldGVyLzEwMCAwIHJnYmEoMCwwLDAsMC4zKSA7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDEwMDAwMDtcclxuXHRcdFx0XHR3aWR0aDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OlwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwICREaWFtZXRlcioyLjIvMzUgJERpYW1ldGVyKjIuMi8yNSAkRGlhbWV0ZXIqMi4yLzM1O1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHR0b3A6IC0kRGlhbWV0ZXIqMi4yLzI1ICsgKCRTcGluRGlhbWV0ZXIgLSAkSW5uZXJTcGluRGlhbWV0ZXIpLzI7ICAvLy0yMHB4XHJcblx0XHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJERpYW1ldGVyKjIuMi8zNTsgICAvLzI4cHhcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlICNpbm5lci1zcGlue1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjQpIDBweCAwcHggJFNwaW5EaWFtZXRlci83MCBpbnNldDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlOmFmdGVye1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTokU3BpbkRpYW1ldGVyLzIzLjMzO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHQgLypcclxuXHRcdFx0I3NoaW5le1xyXG5cdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXHJcblx0XHRcdFx0b3BhY2l0eTowLjE7XHJcblx0XHRcdH0qL1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQjd2hlZWw6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0Ym9yZGVyOiAkRGlhbWV0ZXIvNDAgc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG5cdFx0XHR3aWR0aDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHR6LWluZGV4OjEwMDA7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcblx0JERpYW1ldGVyOiA3MDBweDtcclxuXHQkV2hlZWxCb3JkZXI6ICREaWFtZXRlci8zNTtcclxuXHQkbWF4V2lkdGhJbWFnZTogJERpYW1ldGVyLzMuNTtcclxuXHQkU3BpbkRpYW1ldGVyOiAkRGlhbWV0ZXIvMy42NzY0O1xyXG5cdCRJbm5lclNwaW5EaWFtZXRlcjogJERpYW1ldGVyLzQuNjI7XHJcblx0JHNwYW5XaWR0aDogJERpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqMjtcclxuXHQkc3BhbkhpZ2h0OiAkRGlhbWV0ZXIvODtcclxuXHQjd3JhcHBlcnsgXHJcblx0XHRtYXJnaW46IDQwcHggYXV0byAwO1x0XHJcblx0XHR3aWR0aDoxMDAlOyBcclxuXHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFxyXG5cdFx0ZGl2I3doZWVse1xyXG5cdFx0XHR3aWR0aDokRGlhbWV0ZXI7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1x0XHJcblx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdGJvcmRlcjokV2hlZWxCb3JkZXIgc29saWQgI2ZmZjtcclxuXHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMikgMHB4IDBweCAkRGlhbWV0ZXIqMi8zNSwgcmdiYSgwLDAsMCwwLjA1KSAwcHggJERpYW1ldGVyLzgwIDBweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHRcdCNpbm5lci13aGVlbHtcclxuXHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDoxMDAlO1xyXG5cdFx0XHRcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtbW96LXRyYW5zaXRpb246ICAgIGFsbCA2IGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtby10cmFuc2l0aW9uOiAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0LW1zLXRyYW5zaXRpb246ICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdHRyYW5zaXRpb246ICAgICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcdFxyXG5cdFx0XHRcdGRpdi5ob2xkIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0Y2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIsJERpYW1ldGVyLCREaWFtZXRlci8yKTtcclxuXHRcdFx0XHRcdGxlZnQ6IC0kV2hlZWxCb3JkZXI7XHJcblx0XHRcdFx0XHR0b3A6IC0kV2hlZWxCb3JkZXI7XHJcblx0XHRcdFx0XHRkaXYuc2Vje1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdGxlZnQ6MDtcclxuXHRcdFx0XHRcdFx0dG9wOjA7XHRcclxuXHRcdFx0XHRcdFx0b3BhY2l0eToxO1xyXG5cdFx0XHRcdFx0XHRjbGlwOnJlY3QoMHB4LCREaWFtZXRlci8yLCREaWFtZXRlciwwcHgpO1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiREaWFtZXRlcjsgXHJcblx0XHRcdFx0XHRcdHNwYW4uaW1hZ2VTcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAkRGlhbWV0ZXIvMjtcclxuXHRcdFx0XHRcdFx0XHRyaWdodDogJERpYW1ldGVyLzIgLSAkbWF4V2lkdGhJbWFnZS8yO1xyXG5cdFx0XHRcdFx0XHRcdHotaW5kZXg6IDEwMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6ICREaWFtZXRlci8xMDtcclxuXHRcdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzEwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogJG1heFdpZHRoSW1hZ2U7XHJcblx0XHRcdFx0XHRcdFx0bWluLWhlaWdodDogJG1heFdpZHRoSW1hZ2UqMS40NTtcclxuXHRcdFx0XHRcdFx0XHQuSW1hZ2VDb250YWluZXJ7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDcwJTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LlNwYW5Db250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206ICAkRGlhbWV0ZXIvMiAtICRzcGFuSGlnaHQvMjsgLy8gICREaWFtZXRlci8yICArICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlciozXHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6ICREaWFtZXRlci8yOyAgLy8gICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjM7ICAgICsgJHNwYW5IaWdodC8yXHJcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAkc3BhbldpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogJHNwYW5XaWR0aDtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkc3BhbkhpZ2h0O1xyXG5cdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6ICRzcGFuSGlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRcdFx0c3Bhbi5UZXh0U3BhbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTokRGlhbWV0ZXIvMTU7XHJcblx0XHRcdFx0XHRcdFx0XHQvL3RleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IC0oJERpYW1ldGVyLzIwMCkgMHB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdCNzcGlue1xyXG5cdFx0XHRcdHdpZHRoOiAkU3BpbkRpYW1ldGVyOyAgXHJcblx0XHRcdFx0aGVpZ2h0OiAkU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHRvcDogJERpYW1ldGVyLzIgLSAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXI7ICBcclxuXHRcdFx0XHRsZWZ0OiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4xKSAwcHggJFNwaW5EaWFtZXRlci8xMDAgMHB4O1xyXG5cdFx0XHRcdHotaW5kZXg6MTAwMDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0ICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyBcclxuXHRcdFx0XHQgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgIFxyXG5cdFx0XHRcdCAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgXHJcblx0XHRcdFx0ICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHRcdFx0XHQjaW5uZXItc3BpbntcclxuXHRcdFx0XHRcdHdpZHRoOiRJbm5lclNwaW5EaWFtZXRlcjsgIC8vNTRweFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiRJbm5lclNwaW5EaWFtZXRlcjsvLzU0cHhcclxuXHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAvLzUwJVxyXG5cdFx0XHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJElubmVyU3BpbkRpYW1ldGVyLzI7ICAgICAgLy81MCVcclxuXHRcdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOnJlZDtcclxuXHRcdFx0XHRcdHotaW5kZXg6OTk5O1xyXG5cdFx0XHRcdFx0Ym94LXNoYWRvdzpyZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAtJFNwaW5EaWFtZXRlci8xMDAgMHB4IGluc2V0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAkU3BpbkRpYW1ldGVyLzEwMCAwcHggaW5zZXQsICByZ2JhKDAsMCwwLDAuNCkgMHB4IDBweCAkU3BpbkRpYW1ldGVyLzgwIDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTsgLyogT2xkIGJyb3dzZXJzICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogT3BlcmEgMTIrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogSUUxMCsgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogVzNDICovXHJcblx0XHRcdFx0XHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZWFlYWVhJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICRJbm5lclNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAkSW5uZXJTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdH0gICAgIFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjphZnRlcntcclxuXHRcdFx0XHRjb250ZW50OicnO1x0XHJcblx0XHRcdFx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRjb2xvcjojQ0NDO1xyXG5cdFx0XHRcdHRleHQtc2hhZG93OiAwICRTcGluRGlhbWV0ZXIvMTAwIDAgI2ZmZiwgMCAtJFNwaW5EaWFtZXRlci8xMDAgMCByZ2JhKDAsMCwwLDAuMykgO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR6LWluZGV4OiAxMDAwMDA7XHJcblx0XHRcdFx0d2lkdGg6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRoZWlnaHQ6JFNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQjc3BpbjpiZWZvcmV7XHJcblx0XHRcdFx0Y29udGVudDpcIlwiO1xyXG5cdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdFx0XHRcdHdpZHRoOiAwO1xyXG5cdFx0XHRcdGhlaWdodDogMDtcclxuXHRcdFx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0XHRcdGJvcmRlci13aWR0aDogMCAkRGlhbWV0ZXIqMi4yLzM1ICREaWFtZXRlcioyLjIvMjUgJERpYW1ldGVyKjIuMi8zNTtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0dG9wOiAtJERpYW1ldGVyKjIuMi8yNSArICgkU3BpbkRpYW1ldGVyIC0gJElubmVyU3BpbkRpYW1ldGVyKS8yOyAgLy8tMjBweFxyXG5cdFx0XHRcdGxlZnQ6ICRTcGluRGlhbWV0ZXIvMiAtICREaWFtZXRlcioyLjIvMzU7ICAgLy8yOHB4XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbntcclxuXHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvNzAgaW5zZXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFjdGl2ZTphZnRlcntcclxuXHRcdFx0XHRmb250LXNpemU6JFNwaW5EaWFtZXRlci8yMy4zMztcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFx0IC8qXHJcblx0XHRcdCNzaGluZXtcclxuXHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdGhlaWdodDokRGlhbWV0ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOjA7XHJcblx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMSUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSksIGNvbG9yLXN0b3AoOSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50IFxyXG5cdFx0XHRcdG9wYWNpdHk6MC4xO1xyXG5cdFx0XHR9Ki9cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0I3doZWVsOmJlZm9yZXtcclxuXHRcdFx0Y29udGVudDonJztcclxuXHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdGJvcmRlcjogJERpYW1ldGVyLzQwIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxuXHRcdFx0d2lkdGg6JERpYW1ldGVyKjAuOTY4O1xyXG5cdFx0XHRoZWlnaHQ6JERpYW1ldGVyKjAuOTY4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0ei1pbmRleDoxMDAwO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHQkRGlhbWV0ZXI6IDgwMHB4O1xyXG5cdCRXaGVlbEJvcmRlcjogJERpYW1ldGVyLzM1O1xyXG5cdCRtYXhXaWR0aEltYWdlOiAkRGlhbWV0ZXIvMy41O1xyXG5cdCRTcGluRGlhbWV0ZXI6ICREaWFtZXRlci8zLjY3NjQ7XHJcblx0JElubmVyU3BpbkRpYW1ldGVyOiAkRGlhbWV0ZXIvNC42MjtcclxuXHQkc3BhbldpZHRoOiAkRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcioyO1xyXG5cdCRzcGFuSGlnaHQ6ICREaWFtZXRlci84O1xyXG5cdCN3cmFwcGVyeyBcclxuXHRcdG1hcmdpbjogNDBweCBhdXRvIDA7XHRcclxuXHRcdHdpZHRoOjEwMCU7IFxyXG5cdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHJcblx0XHRkaXYjd2hlZWx7XHJcblx0XHRcdHdpZHRoOiREaWFtZXRlcjtcclxuXHRcdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czo1MCU7XHRcclxuXHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdG92ZXJmbG93OmhpZGRlbjtcclxuXHRcdFx0Ym9yZGVyOiRXaGVlbEJvcmRlciBzb2xpZCAjZmZmO1xyXG5cdFx0XHRib3gtc2hhZG93OnJnYmEoMCwwLDAsMC4yKSAwcHggMHB4ICREaWFtZXRlcioyLzM1LCByZ2JhKDAsMCwwLDAuMDUpIDBweCAkRGlhbWV0ZXIvODAgMHB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdFx0I2lubmVyLXdoZWVse1xyXG5cdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OjEwMCU7XHJcblx0XHRcdFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1tb3otdHJhbnNpdGlvbjogICAgYWxsIDYgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdFx0XHRcdC1vLXRyYW5zaXRpb246ICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHRcdFx0XHQtbXMtdHJhbnNpdGlvbjogICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogICAgICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1x0XHJcblx0XHRcdFx0ZGl2LmhvbGQge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHR3aWR0aDogJERpYW1ldGVyO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRjbGlwOnJlY3QoMHB4LCREaWFtZXRlciwkRGlhbWV0ZXIsJERpYW1ldGVyLzIpO1xyXG5cdFx0XHRcdFx0bGVmdDogLSRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRcdHRvcDogLSRXaGVlbEJvcmRlcjtcclxuXHRcdFx0XHRcdGRpdi5zZWN7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0d2lkdGg6ICREaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0bGVmdDowO1xyXG5cdFx0XHRcdFx0XHR0b3A6MDtcdFxyXG5cdFx0XHRcdFx0XHRvcGFjaXR5OjE7XHJcblx0XHRcdFx0XHRcdGNsaXA6cmVjdCgwcHgsJERpYW1ldGVyLzIsJERpYW1ldGVyLDBweCk7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6JERpYW1ldGVyOyBcclxuXHRcdFx0XHRcdFx0c3Bhbi5pbWFnZVNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdFx0XHRib3R0b206ICREaWFtZXRlci8yO1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAkRGlhbWV0ZXIvMiAtICRtYXhXaWR0aEltYWdlLzI7XHJcblx0XHRcdFx0XHRcdFx0ei1pbmRleDogMTAwMDAwMDA7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogJERpYW1ldGVyLzEwO1xyXG5cdFx0XHRcdFx0XHRcdC8vdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLSgkRGlhbWV0ZXIvMTAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLSgkRGlhbWV0ZXIvMTAwKSAwcHg7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkbWF4V2lkdGhJbWFnZTtcclxuXHRcdFx0XHRcdFx0XHRtaW4taGVpZ2h0OiAkbWF4V2lkdGhJbWFnZSoxLjQ1O1xyXG5cdFx0XHRcdFx0XHRcdC5JbWFnZUNvbnRhaW5lcntcclxuXHRcdFx0XHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNzAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuU3BhbkNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogICREaWFtZXRlci8yIC0gJHNwYW5IaWdodC8yOyAvLyAgJERpYW1ldGVyLzIgICsgJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyKjNcclxuXHRcdFx0XHRcdFx0XHRyaWdodDogJERpYW1ldGVyLzI7ICAvLyAgKyAkU3BpbkRpYW1ldGVyLzIgLSAkV2hlZWxCb3JkZXIqMzsgICAgKyAkc3BhbkhpZ2h0LzJcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6ICRzcGFuV2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0bWF4LXdpZHRoOiAkc3BhbldpZHRoO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6ICRzcGFuSGlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogJHNwYW5IaWdodDtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0XHRzcGFuLlRleHRTcGFuIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogODAlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWF4LWhlaWdodDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiREaWFtZXRlci8xNTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggLSgkRGlhbWV0ZXIvMjAwKSAwcHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0I3NwaW57XHJcblx0XHRcdFx0d2lkdGg6ICRTcGluRGlhbWV0ZXI7ICBcclxuXHRcdFx0XHRoZWlnaHQ6ICRTcGluRGlhbWV0ZXI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0dG9wOiAkRGlhbWV0ZXIvMiAtICRTcGluRGlhbWV0ZXIvMiAtICRXaGVlbEJvcmRlcjsgIFxyXG5cdFx0XHRcdGxlZnQ6ICREaWFtZXRlci8yIC0gJFNwaW5EaWFtZXRlci8yIC0gJFdoZWVsQm9yZGVyO1xyXG5cdFx0XHRcdG1hcmdpbjowO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjEpIDBweCAkU3BpbkRpYW1ldGVyLzEwMCAwcHg7XHJcblx0XHRcdFx0ei1pbmRleDoxMDAwO1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHQgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxyXG5cdFx0XHRcdCAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgICAgXHJcblx0XHRcdFx0ICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICBcclxuXHRcdFx0XHQgIC1vLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0XHRcdCNpbm5lci1zcGlue1xyXG5cdFx0XHRcdFx0d2lkdGg6JElubmVyU3BpbkRpYW1ldGVyOyAgLy81NHB4XHJcblx0XHRcdFx0XHRoZWlnaHQ6JElubmVyU3BpbkRpYW1ldGVyOy8vNTRweFxyXG5cdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0XHR0b3A6ICRTcGluRGlhbWV0ZXIvMiAtICRJbm5lclNwaW5EaWFtZXRlci8yOyAgIC8vNTAlXHJcblx0XHRcdFx0XHRsZWZ0OiAkU3BpbkRpYW1ldGVyLzIgLSAkSW5uZXJTcGluRGlhbWV0ZXIvMjsgICAgICAvLzUwJVxyXG5cdFx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6cmVkO1xyXG5cdFx0XHRcdFx0ei1pbmRleDo5OTk7XHJcblx0XHRcdFx0XHRib3gtc2hhZG93OnJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4IC0kU3BpbkRpYW1ldGVyLzEwMCAwcHggaW5zZXQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4ICRTcGluRGlhbWV0ZXIvMTAwIDBweCBpbnNldCwgIHJnYmEoMCwwLDAsMC40KSAwcHggMHB4ICRTcGluRGlhbWV0ZXIvODAgO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIEZGMy42KyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBPcGVyYSAxMisgKi9cclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBXM0MgKi9cclxuXHRcdFx0XHRcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlYWVhZWEnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvdmVyZmxvdzpoaWRkZW47XHJcblx0XHRcdFx0XHRpbWcge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJElubmVyU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICRJbm5lclNwaW5EaWFtZXRlcjtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0fSAgICAgXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmFmdGVye1xyXG5cdFx0XHRcdGNvbnRlbnQ6Jyc7XHRcclxuXHRcdFx0XHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGNvbG9yOiNDQ0M7XHJcblx0XHRcdFx0dGV4dC1zaGFkb3c6IDAgJFNwaW5EaWFtZXRlci8xMDAgMCAjZmZmLCAwIC0kU3BpbkRpYW1ldGVyLzEwMCAwIHJnYmEoMCwwLDAsMC4zKSA7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHotaW5kZXg6IDEwMDAwMDtcclxuXHRcdFx0XHR3aWR0aDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGhlaWdodDokU3BpbkRpYW1ldGVyO1xyXG5cdFx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCNzcGluOmJlZm9yZXtcclxuXHRcdFx0XHRjb250ZW50OlwiXCI7XHJcblx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdFx0d2lkdGg6IDA7XHJcblx0XHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0XHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwICREaWFtZXRlcioyLjIvMzUgJERpYW1ldGVyKjIuMi8yNSAkRGlhbWV0ZXIqMi4yLzM1O1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcclxuXHRcdFx0XHR0b3A6IC0kRGlhbWV0ZXIqMi4yLzI1ICsgKCRTcGluRGlhbWV0ZXIgLSAkSW5uZXJTcGluRGlhbWV0ZXIpLzI7ICAvLy0yMHB4XHJcblx0XHRcdFx0bGVmdDogJFNwaW5EaWFtZXRlci8yIC0gJERpYW1ldGVyKjIuMi8zNTsgICAvLzI4cHhcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlICNpbm5lci1zcGlue1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjQpIDBweCAwcHggJFNwaW5EaWFtZXRlci83MCBpbnNldDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0I3NwaW46YWN0aXZlOmFmdGVye1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTokU3BpbkRpYW1ldGVyLzIzLjMzO1x0XHJcblx0XHRcdH1cclxuXHRcdFx0XHQgLypcclxuXHRcdFx0I3NoaW5le1xyXG5cdFx0XHRcdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0XHRcdFx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6MDtcclxuXHRcdFx0XHRsZWZ0OjA7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXHJcblx0XHRcdFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcclxuXHRcdFx0XHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXHJcblx0XHRcdFx0b3BhY2l0eTowLjE7XHJcblx0XHRcdH0qL1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQjd2hlZWw6YmVmb3Jle1xyXG5cdFx0XHRjb250ZW50OicnO1xyXG5cdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRcdFx0Ym9yZGVyOiAkRGlhbWV0ZXIvNDAgc29saWQgcmdiYSgwLDAsMCwwLjEpO1xyXG5cdFx0XHR3aWR0aDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGhlaWdodDokRGlhbWV0ZXIqMC45Njg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6NTAlO1xyXG5cdFx0XHR6LWluZGV4OjEwMDA7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGFuaW1hdGlvbnNcclxuQC13ZWJraXQta2V5ZnJhbWVzIGhoIHtcclxuXHQwJSwgMTAwJXtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcbiAgXHJcblx0NTAle1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBoaCB7XHJcblx0IDAlLCAxMDAle1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuICBcclxuXHQ1MCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcblx0fVxyXG4gIH1cclxuICBcclxuICAuc3BpbiB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGhoIDAuMXM7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG5cdCAgYW5pbWF0aW9uOiBoaCAwLjFzO1xyXG4gIH1cclxuICBcclxuLm1vZGFsLWhlYWRlciwgLm1vZGFsLWJvZHksIC5tb2RhbC1mb290ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHQuZXJyb3JNZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4kSW5wdXRCdXR0b25zQm9yZGVyczogMXB4IHNvbGlkIHdoaXRlO1xyXG4uYnRuIHtcclxuICAgIGJvcmRlcjogJElucHV0QnV0dG9uc0JvcmRlcnM7XHJcbn1cclxuIiwiI3dyYXBwZXIge1xuICBtYXJnaW46IDQwcHggYXV0byAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3dyYXBwZXIgZGl2I3doZWVsIHtcbiAgd2lkdGg6IDMwNXB4O1xuICBoZWlnaHQ6IDMwNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiA4LjcxNDI4NTcxNDNweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDBweCAxNy40Mjg1NzE0Mjg2cHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDMuODEyNXB4IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC8qXG4gICNzaGluZXtcbiAgXHR3aWR0aDogJERpYW1ldGVyO1xuICBcdGhlaWdodDokRGlhbWV0ZXI7XG4gIFx0cG9zaXRpb246YWJzb2x1dGU7XG4gIFx0dG9wOjA7XG4gIFx0bGVmdDowO1xuICBcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICBcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMSUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSksIGNvbG9yLXN0b3AoOSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gIFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gIFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICBcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gIFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gIFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50IFxuICBcdG9wYWNpdHk6MC4xO1xuICB9Ki9cbn1cbiN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbn1cbiN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDVweDtcbiAgaGVpZ2h0OiAzMDVweDtcbiAgY2xpcDogcmVjdCgwcHgsIDMwNXB4LCAzMDVweCwgMTUyLjVweCk7XG4gIGxlZnQ6IC04LjcxNDI4NTcxNDNweDtcbiAgdG9wOiAtOC43MTQyODU3MTQzcHg7XG59XG4jd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDVweDtcbiAgaGVpZ2h0OiAzMDVweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGNsaXA6IHJlY3QoMHB4LCAxNTIuNXB4LCAzMDVweCwgMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMzA1cHg7XG59XG4jd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUyLjVweDtcbiAgcmlnaHQ6IDEwOC45Mjg1NzE0Mjg2cHg7XG4gIHotaW5kZXg6IDEwMDAwMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwLjVweDtcbiAgbWF4LXdpZHRoOiA4Ny4xNDI4NTcxNDI5cHg7XG4gIG1pbi1oZWlnaHQ6IDEyNi4zNTcxNDI4NTcxcHg7XG59XG4jd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4gLkltYWdlQ29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogNzAlO1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEzMy40Mzc1cHg7XG4gIHJpZ2h0OiAxNTIuNXB4O1xuICBtaW4td2lkdGg6IDEzNS4wNzE0Mjg1NzE0cHg7XG4gIG1heC13aWR0aDogMTM1LjA3MTQyODU3MTRweDtcbiAgbWluLWhlaWdodDogMzguMTI1cHg7XG4gIG1heC1oZWlnaHQ6IDM4LjEyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHNwYW4uVGV4dFNwYW4ge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwLjMzMzMzMzMzMzNweDtcbn1cbiN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiB7XG4gIHdpZHRoOiA4Mi45NjE1OTI4NjI2cHg7XG4gIGhlaWdodDogODIuOTYxNTkyODYyNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAyLjMwNDkxNzg1NDRweDtcbiAgbGVmdDogMTAyLjMwNDkxNzg1NDRweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMC44Mjk2MTU5Mjg2cHggMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNzcGluICNpbm5lci1zcGluIHtcbiAgd2lkdGg6IDY2LjAxNzMxNjAxNzNweDtcbiAgaGVpZ2h0OiA2Ni4wMTczMTYwMTczcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4LjQ3MjEzODQyMjZweDtcbiAgbGVmdDogOC40NzIxMzg0MjI2cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm94LXNoYWRvdzogd2hpdGUgLTAuODI5NjE1OTI4NnB4IDBweCBpbnNldCwgd2hpdGUgMHB4IDAuODI5NjE1OTI4NnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMS4wMzcwMTk5MTA4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxMDAlLCAjZWFlYWVhKSk7XG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogT3BlcmEgMTIrICovXG4gIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogSUUxMCsgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogVzNDICovXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNlYWVhZWFcIixHcmFkaWVudFR5cGU9MSApO1xuICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4gI2lubmVyLXNwaW4gaW1nIHtcbiAgd2lkdGg6IDY2LjAxNzMxNjAxNzNweDtcbiAgaGVpZ2h0OiA2Ni4wMTczMTYwMTczcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODIuOTYxNTkyODYyNnB4O1xuICBjb2xvcjogI0NDQztcbiAgdGV4dC1zaGFkb3c6IDAgMC44Mjk2MTU5Mjg2cHggMCAjZmZmLCAtMC44Mjk2MTU5Mjg2cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDAwO1xuICB3aWR0aDogODIuOTYxNTkyODYyNnB4O1xuICBoZWlnaHQ6IDgyLjk2MTU5Mjg2MjZweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMTkuMTcxNDI4NTcxNHB4IDI2Ljg0cHggMTkuMTcxNDI4NTcxNHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XG4gIHRvcDogLTE4LjM2Nzg2MTU3NzRweDtcbiAgbGVmdDogMjIuMzA5MzY3ODU5OXB4O1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbiB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDEuMTg1MTY1NjEyM3B4IGluc2V0O1xufVxuI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFjdGl2ZTphZnRlciB7XG4gIGZvbnQtc2l6ZTogMy41NTYwMDQ4Mzc3cHg7XG59XG4jd3JhcHBlciAjd2hlZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDcuNjI1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMjk1LjI0cHg7XG4gIGhlaWdodDogMjk1LjI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICAjd3JhcHBlciB7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyOiA5LjcxNDI4NTcxNDNweCBzb2xpZCAjZmZmO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMHB4IDE5LjQyODU3MTQyODZweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNC4yNXB4IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAvKlxuICAgICNzaGluZXtcbiAgICBcdHdpZHRoOiAkRGlhbWV0ZXI7XG4gICAgXHRoZWlnaHQ6JERpYW1ldGVyO1xuICAgIFx0cG9zaXRpb246YWJzb2x1dGU7XG4gICAgXHR0b3A6MDtcbiAgICBcdGxlZnQ6MDtcbiAgICBcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbiAgICBcdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50IFxuICAgIFx0b3BhY2l0eTowLjE7XG4gICAgfSovXG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA2IGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIHRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgICBoZWlnaHQ6IDM0MHB4O1xuICAgIGNsaXA6IHJlY3QoMHB4LCAzNDBweCwgMzQwcHgsIDE3MHB4KTtcbiAgICBsZWZ0OiAtOS43MTQyODU3MTQzcHg7XG4gICAgdG9wOiAtOS43MTQyODU3MTQzcHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGhlaWdodDogMzQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY2xpcDogcmVjdCgwcHgsIDE3MHB4LCAzNDBweCwgMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAzNDBweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE3MHB4O1xuICAgIHJpZ2h0OiAxMjEuNDI4NTcxNDI4NnB4O1xuICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgbWF4LXdpZHRoOiA5Ny4xNDI4NTcxNDI5cHg7XG4gICAgbWluLWhlaWdodDogMTQwLjg1NzE0Mjg1NzFweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4gLkltYWdlQ29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNDguNzVweDtcbiAgICByaWdodDogMTcwcHg7XG4gICAgbWluLXdpZHRoOiAxNTAuNTcxNDI4NTcxNHB4O1xuICAgIG1heC13aWR0aDogMTUwLjU3MTQyODU3MTRweDtcbiAgICBtaW4taGVpZ2h0OiA0Mi41cHg7XG4gICAgbWF4LWhlaWdodDogNDIuNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyAuU3BhbkNvbnRhaW5lciBzcGFuLlRleHRTcGFuIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyMi42NjY2NjY2NjY3cHg7XG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAtMS43cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgLTEuN3B4IDBweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4ge1xuICAgIHdpZHRoOiA5Mi40ODE3NzU2NTAxcHg7XG4gICAgaGVpZ2h0OiA5Mi40ODE3NzU2NTAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTE0LjA0NDgyNjQ2MDdweDtcbiAgICBsZWZ0OiAxMTQuMDQ0ODI2NDYwN3B4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAwLjkyNDgxNzc1NjVweCAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiB7XG4gICAgd2lkdGg6IDczLjU5MzA3MzU5MzFweDtcbiAgICBoZWlnaHQ6IDczLjU5MzA3MzU5MzFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA5LjQ0NDM1MTAyODVweDtcbiAgICBsZWZ0OiA5LjQ0NDM1MTAyODVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm94LXNoYWRvdzogd2hpdGUgLTAuOTI0ODE3NzU2NXB4IDBweCBpbnNldCwgd2hpdGUgMHB4IDAuOTI0ODE3NzU2NXB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMS4xNTYwMjIxOTU2cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBGRjMuNisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMTAwJSwgI2VhZWFlYSkpO1xuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBPcGVyYSAxMisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogSUUxMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIFczQyAqL1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNlYWVhZWFcIixHcmFkaWVudFR5cGU9MSApO1xuICAgIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiBpbWcge1xuICAgIHdpZHRoOiA3My41OTMwNzM1OTMxcHg7XG4gICAgaGVpZ2h0OiA3My41OTMwNzM1OTMxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogOTIuNDgxNzc1NjUwMXB4O1xuICAgIGNvbG9yOiAjQ0NDO1xuICAgIHRleHQtc2hhZG93OiAwIDAuOTI0ODE3NzU2NXB4IDAgI2ZmZiwgLTAuOTI0ODE3NzU2NXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgd2lkdGg6IDkyLjQ4MTc3NTY1MDFweDtcbiAgICBoZWlnaHQ6IDkyLjQ4MTc3NTY1MDFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgMjEuMzcxNDI4NTcxNHB4IDI5LjkycHggMjEuMzcxNDI4NTcxNHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IC0yMC40NzU2NDg5NzE1cHg7XG4gICAgbGVmdDogMjQuODY5NDU5MjUzNnB4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphY3RpdmUgI2lubmVyLXNwaW4ge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDEuMzIxMTY4MjIzNnB4IGluc2V0O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphY3RpdmU6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMy45NjQwNzA5NjY2cHg7XG4gIH1cbiAgI3dyYXBwZXIgI3doZWVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiA4LjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDMyOS4xMnB4O1xuICAgIGhlaWdodDogMzI5LjEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI1cHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCB7XG4gICAgd2lkdGg6IDM5NXB4O1xuICAgIGhlaWdodDogMzk1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMTEuMjg1NzE0Mjg1N3B4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMjIuNTcxNDI4NTcxNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0LjkzNzVweCAwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLypcbiAgICAjc2hpbmV7XG4gICAgXHR3aWR0aDogJERpYW1ldGVyO1xuICAgIFx0aGVpZ2h0OiREaWFtZXRlcjtcbiAgICBcdHBvc2l0aW9uOmFic29sdXRlO1xuICAgIFx0dG9wOjA7XG4gICAgXHRsZWZ0OjA7XG4gICAgXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLCByZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLCByZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUscmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMSUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSksIGNvbG9yLXN0b3AoOSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDI1NSwyNTUsMjU1LDApKSk7XG4gICAgXHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCBcbiAgICBcdG9wYWNpdHk6MC4xO1xuICAgIH0qL1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNiBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzk1cHg7XG4gICAgaGVpZ2h0OiAzOTVweDtcbiAgICBjbGlwOiByZWN0KDBweCwgMzk1cHgsIDM5NXB4LCAxOTcuNXB4KTtcbiAgICBsZWZ0OiAtMTEuMjg1NzE0Mjg1N3B4O1xuICAgIHRvcDogLTExLjI4NTcxNDI4NTdweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzk1cHg7XG4gICAgaGVpZ2h0OiAzOTVweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjbGlwOiByZWN0KDBweCwgMTk3LjVweCwgMzk1cHgsIDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMzk1cHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHNwYW4uaW1hZ2VTcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxOTcuNXB4O1xuICAgIHJpZ2h0OiAxNDEuMDcxNDI4NTcxNHB4O1xuICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM5LjVweDtcbiAgICBtYXgtd2lkdGg6IDExMi44NTcxNDI4NTcxcHg7XG4gICAgbWluLWhlaWdodDogMTYzLjY0Mjg1NzE0MjlweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4gLkltYWdlQ29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNzIuODEyNXB4O1xuICAgIHJpZ2h0OiAxOTcuNXB4O1xuICAgIG1pbi13aWR0aDogMTc0LjkyODU3MTQyODZweDtcbiAgICBtYXgtd2lkdGg6IDE3NC45Mjg1NzE0Mjg2cHg7XG4gICAgbWluLWhlaWdodDogNDkuMzc1cHg7XG4gICAgbWF4LWhlaWdodDogNDkuMzc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHNwYW4uVGV4dFNwYW4ge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI2LjMzMzMzMzMzMzNweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4ge1xuICAgIHdpZHRoOiAxMDcuNDQyMDYyODg3NnB4O1xuICAgIGhlaWdodDogMTA3LjQ0MjA2Mjg4NzZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMzIuNDkzMjU0MjcwNXB4O1xuICAgIGxlZnQ6IDEzMi40OTMyNTQyNzA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEuMDc0NDIwNjI4OXB4IDBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluICNpbm5lci1zcGluIHtcbiAgICB3aWR0aDogODUuNDk3ODM1NDk3OHB4O1xuICAgIGhlaWdodDogODUuNDk3ODM1NDk3OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwLjk3MjExMzY5NDlweDtcbiAgICBsZWZ0OiAxMC45NzIxMTM2OTQ5cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJveC1zaGFkb3c6IHdoaXRlIC0xLjA3NDQyMDYyODlweCAwcHggaW5zZXQsIHdoaXRlIDBweCAxLjA3NDQyMDYyODlweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDEuMzQzMDI1Nzg2MXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC8qIE9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogRkYzLjYrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgd2hpdGUpLCBjb2xvci1zdG9wKDEwMCUsICNlYWVhZWEpKTtcbiAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogT3BlcmEgMTIrICovXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIElFMTArICovXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBXM0MgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjZWFlYWVhXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4gI2lubmVyLXNwaW4gaW1nIHtcbiAgICB3aWR0aDogODUuNDk3ODM1NDk3OHB4O1xuICAgIGhlaWdodDogODUuNDk3ODM1NDk3OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwNy40NDIwNjI4ODc2cHg7XG4gICAgY29sb3I6ICNDQ0M7XG4gICAgdGV4dC1zaGFkb3c6IDAgMS4wNzQ0MjA2Mjg5cHggMCAjZmZmLCAtMS4wNzQ0MjA2Mjg5cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICB3aWR0aDogMTA3LjQ0MjA2Mjg4NzZweDtcbiAgICBoZWlnaHQ6IDEwNy40NDIwNjI4ODc2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDI0LjgyODU3MTQyODZweCAzNC43NnB4IDI0LjgyODU3MTQyODZweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XG4gICAgdG9wOiAtMjMuNzg3ODg2MzA1MXB4O1xuICAgIGxlZnQ6IDI4Ljg5MjQ2MDAxNTJweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWN0aXZlICNpbm5lci1zcGluIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCAxLjUzNDg4NjYxMjdweCBpbnNldDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWN0aXZlOmFmdGVyIHtcbiAgICBmb250LXNpemU6IDQuNjA1MzE3NzQwNnB4O1xuICB9XG4gICN3cmFwcGVyICN3aGVlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogOS44NzVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDM4Mi4zNnB4O1xuICAgIGhlaWdodDogMzgyLjM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMTQuMjg1NzE0Mjg1N3B4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMjguNTcxNDI4NTcxNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2LjI1cHggMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC8qXG4gICAgI3NoaW5le1xuICAgIFx0d2lkdGg6ICREaWFtZXRlcjtcbiAgICBcdGhlaWdodDokRGlhbWV0ZXI7XG4gICAgXHRwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBcdHRvcDowO1xuICAgIFx0bGVmdDowO1xuICAgIFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDElLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkpLCBjb2xvci1zdG9wKDklLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXG4gICAgXHRvcGFjaXR5OjAuMTtcbiAgICB9Ki9cbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgY2xpcDogcmVjdCgwcHgsIDUwMHB4LCA1MDBweCwgMjUwcHgpO1xuICAgIGxlZnQ6IC0xNC4yODU3MTQyODU3cHg7XG4gICAgdG9wOiAtMTQuMjg1NzE0Mjg1N3B4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNsaXA6IHJlY3QoMHB4LCAyNTBweCwgNTAwcHgsIDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHNwYW4uaW1hZ2VTcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyNTBweDtcbiAgICByaWdodDogMTc4LjU3MTQyODU3MTRweDtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1heC13aWR0aDogMTQyLjg1NzE0Mjg1NzFweDtcbiAgICBtaW4taGVpZ2h0OiAyMDcuMTQyODU3MTQyOXB4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyBzcGFuLmltYWdlU3BhbiAuSW1hZ2VDb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgLlNwYW5Db250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIxOC43NXB4O1xuICAgIHJpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDIyMS40Mjg1NzE0Mjg2cHg7XG4gICAgbWF4LXdpZHRoOiAyMjEuNDI4NTcxNDI4NnB4O1xuICAgIG1pbi1oZWlnaHQ6IDYyLjVweDtcbiAgICBtYXgtaGVpZ2h0OiA2Mi41cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHNwYW4uVGV4dFNwYW4ge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDMzLjMzMzMzMzMzMzNweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4ge1xuICAgIHdpZHRoOiAxMzYuMDAyNjExMjUwMXB4O1xuICAgIGhlaWdodDogMTM2LjAwMjYxMTI1MDFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNjcuNzEyOTgwMDg5MnB4O1xuICAgIGxlZnQ6IDE2Ny43MTI5ODAwODkycHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEuMzYwMDI2MTEyNXB4IDBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluICNpbm5lci1zcGluIHtcbiAgICB3aWR0aDogMTA4LjIyNTEwODIyNTFweDtcbiAgICBoZWlnaHQ6IDEwOC4yMjUxMDgyMjUxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTMuODg4NzUxNTEyNXB4O1xuICAgIGxlZnQ6IDEzLjg4ODc1MTUxMjVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm94LXNoYWRvdzogd2hpdGUgLTEuMzYwMDI2MTEyNXB4IDBweCBpbnNldCwgd2hpdGUgMHB4IDEuMzYwMDI2MTEyNXB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMS43MDAwMzI2NDA2cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBGRjMuNisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMTAwJSwgI2VhZWFlYSkpO1xuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBPcGVyYSAxMisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogSUUxMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIFczQyAqL1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNlYWVhZWFcIixHcmFkaWVudFR5cGU9MSApO1xuICAgIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiBpbWcge1xuICAgIHdpZHRoOiAxMDguMjI1MTA4MjI1MXB4O1xuICAgIGhlaWdodDogMTA4LjIyNTEwODIyNTFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxMzYuMDAyNjExMjUwMXB4O1xuICAgIGNvbG9yOiAjQ0NDO1xuICAgIHRleHQtc2hhZG93OiAwIDEuMzYwMDI2MTEyNXB4IDAgI2ZmZiwgLTEuMzYwMDI2MTEyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgd2lkdGg6IDEzNi4wMDI2MTEyNTAxcHg7XG4gICAgaGVpZ2h0OiAxMzYuMDAyNjExMjUwMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCAzMS40Mjg1NzE0Mjg2cHggNDRweCAzMS40Mjg1NzE0Mjg2cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmZmZmIHRyYW5zcGFyZW50O1xuICAgIHRvcDogLTMwLjExMTI0ODQ4NzVweDtcbiAgICBsZWZ0OiAzNi41NzI3MzQxOTY1cHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFjdGl2ZSAjaW5uZXItc3BpbiB7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMS45NDI4OTQ0NDY0cHggaW5zZXQ7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFjdGl2ZTphZnRlciB7XG4gICAgZm9udC1zaXplOiA1LjgyOTUxNjEyNzNweDtcbiAgfVxuICAjd3JhcHBlciAjd2hlZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDEyLjVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIGhlaWdodDogNDg0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjcwcHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCB7XG4gICAgd2lkdGg6IDY0MHB4O1xuICAgIGhlaWdodDogNjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMTguMjg1NzE0Mjg1N3B4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMzYuNTcxNDI4NTcxNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA4cHggMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC8qXG4gICAgI3NoaW5le1xuICAgIFx0d2lkdGg6ICREaWFtZXRlcjtcbiAgICBcdGhlaWdodDokRGlhbWV0ZXI7XG4gICAgXHRwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBcdHRvcDowO1xuICAgIFx0bGVmdDowO1xuICAgIFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDElLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkpLCBjb2xvci1zdG9wKDklLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXG4gICAgXHRvcGFjaXR5OjAuMTtcbiAgICB9Ki9cbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDY0MHB4O1xuICAgIGhlaWdodDogNjQwcHg7XG4gICAgY2xpcDogcmVjdCgwcHgsIDY0MHB4LCA2NDBweCwgMzIwcHgpO1xuICAgIGxlZnQ6IC0xOC4yODU3MTQyODU3cHg7XG4gICAgdG9wOiAtMTguMjg1NzE0Mjg1N3B4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2NDBweDtcbiAgICBoZWlnaHQ6IDY0MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNsaXA6IHJlY3QoMHB4LCAzMjBweCwgNjQwcHgsIDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNjQwcHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHNwYW4uaW1hZ2VTcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMjBweDtcbiAgICByaWdodDogMjI4LjU3MTQyODU3MTRweDtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1heC13aWR0aDogMTgyLjg1NzE0Mjg1NzFweDtcbiAgICBtaW4taGVpZ2h0OiAyNjUuMTQyODU3MTQyOXB4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyBzcGFuLmltYWdlU3BhbiAuSW1hZ2VDb250YWluZXIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgLlNwYW5Db250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDI4MHB4O1xuICAgIHJpZ2h0OiAzMjBweDtcbiAgICBtaW4td2lkdGg6IDI4My40Mjg1NzE0Mjg2cHg7XG4gICAgbWF4LXdpZHRoOiAyODMuNDI4NTcxNDI4NnB4O1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgbWF4LWhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgLlNwYW5Db250YWluZXIgc3Bhbi5UZXh0U3BhbiB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNDIuNjY2NjY2NjY2N3B4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiB7XG4gICAgd2lkdGg6IDE3NC4wODMzNDI0MDAycHg7XG4gICAgaGVpZ2h0OiAxNzQuMDgzMzQyNDAwMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIxNC42NzI2MTQ1MTQycHg7XG4gICAgbGVmdDogMjE0LjY3MjYxNDUxNDJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMS43NDA4MzM0MjRweCAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiB7XG4gICAgd2lkdGg6IDEzOC41MjgxMzg1MjgxcHg7XG4gICAgaGVpZ2h0OiAxMzguNTI4MTM4NTI4MXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3Ljc3NzYwMTkzNnB4O1xuICAgIGxlZnQ6IDE3Ljc3NzYwMTkzNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3gtc2hhZG93OiB3aGl0ZSAtMS43NDA4MzM0MjRweCAwcHggaW5zZXQsIHdoaXRlIDBweCAxLjc0MDgzMzQyNHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggMi4xNzYwNDE3OHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC8qIE9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogRkYzLjYrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgd2hpdGUpLCBjb2xvci1zdG9wKDEwMCUsICNlYWVhZWEpKTtcbiAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogT3BlcmEgMTIrICovXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIElFMTArICovXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBXM0MgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjZWFlYWVhXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4gI2lubmVyLXNwaW4gaW1nIHtcbiAgICB3aWR0aDogMTM4LjUyODEzODUyODFweDtcbiAgICBoZWlnaHQ6IDEzOC41MjgxMzg1MjgxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTc0LjA4MzM0MjQwMDJweDtcbiAgICBjb2xvcjogI0NDQztcbiAgICB0ZXh0LXNoYWRvdzogMCAxLjc0MDgzMzQyNHB4IDAgI2ZmZiwgLTEuNzQwODMzNDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICB3aWR0aDogMTc0LjA4MzM0MjQwMDJweDtcbiAgICBoZWlnaHQ6IDE3NC4wODMzNDI0MDAycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDQwLjIyODU3MTQyODZweCA1Ni4zMnB4IDQwLjIyODU3MTQyODZweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XG4gICAgdG9wOiAtMzguNTQyMzk4MDY0cHg7XG4gICAgbGVmdDogNDYuODEzMDk5NzcxNXB4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphY3RpdmUgI2lubmVyLXNwaW4ge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDIuNDg2OTA0ODkxNHB4IGluc2V0O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphY3RpdmU6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogNy40NjE3ODA2NDNweDtcbiAgfVxuICAjd3JhcHBlciAjd2hlZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDE2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiA2MTkuNTJweDtcbiAgICBoZWlnaHQ6IDYxOS41MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICN3cmFwcGVyIHtcbiAgICBtYXJnaW46IDQwcHggYXV0byAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXI6IDIwcHggc29saWQgI2ZmZjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDBweCA0MHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA4Ljc1cHggMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC8qXG4gICAgI3NoaW5le1xuICAgIFx0d2lkdGg6ICREaWFtZXRlcjtcbiAgICBcdGhlaWdodDokRGlhbWV0ZXI7XG4gICAgXHRwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBcdHRvcDowO1xuICAgIFx0bGVmdDowO1xuICAgIFx0YmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDElLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkpLCBjb2xvci1zdG9wKDklLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpO1xuICAgIFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgXG4gICAgXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgXG4gICAgXHRvcGFjaXR5OjAuMTtcbiAgICB9Ki9cbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDYgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgY2xpcDogcmVjdCgwcHgsIDcwMHB4LCA3MDBweCwgMzUwcHgpO1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIHRvcDogLTIwcHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogNzAwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY2xpcDogcmVjdCgwcHgsIDM1MHB4LCA3MDBweCwgMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA3MDBweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDM1MHB4O1xuICAgIHJpZ2h0OiAyNTBweDtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogMjkwcHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIHNwYW4uaW1hZ2VTcGFuIC5JbWFnZUNvbnRhaW5lciBpbWcge1xuICAgIG1heC13aWR0aDogNzAlO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyAuU3BhbkNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzA2LjI1cHg7XG4gICAgcmlnaHQ6IDM1MHB4O1xuICAgIG1pbi13aWR0aDogMzEwcHg7XG4gICAgbWF4LXdpZHRoOiAzMTBweDtcbiAgICBtaW4taGVpZ2h0OiA4Ny41cHg7XG4gICAgbWF4LWhlaWdodDogODcuNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyAuU3BhbkNvbnRhaW5lciBzcGFuLlRleHRTcGFuIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA0Ni42NjY2NjY2NjY3cHg7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluIHtcbiAgICB3aWR0aDogMTkwLjQwMzY1NTc1MDJweDtcbiAgICBoZWlnaHQ6IDE5MC40MDM2NTU3NTAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjM0Ljc5ODE3MjEyNDlweDtcbiAgICBsZWZ0OiAyMzQuNzk4MTcyMTI0OXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxLjkwNDAzNjU1NzVweCAwcHg7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiB7XG4gICAgd2lkdGg6IDE1MS41MTUxNTE1MTUycHg7XG4gICAgaGVpZ2h0OiAxNTEuNTE1MTUxNTE1MnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE5LjQ0NDI1MjExNzVweDtcbiAgICBsZWZ0OiAxOS40NDQyNTIxMTc1cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJveC1zaGFkb3c6IHdoaXRlIC0xLjkwNDAzNjU1NzVweCAwcHggaW5zZXQsIHdoaXRlIDBweCAxLjkwNDAzNjU1NzVweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDIuMzgwMDQ1Njk2OXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC8qIE9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogRkYzLjYrICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgd2hpdGUpLCBjb2xvci1zdG9wKDEwMCUsICNlYWVhZWEpKTtcbiAgICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogT3BlcmEgMTIrICovXG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIElFMTArICovXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBXM0MgKi9cbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjZWFlYWVhXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgICAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW4gI2lubmVyLXNwaW4gaW1nIHtcbiAgICB3aWR0aDogMTUxLjUxNTE1MTUxNTJweDtcbiAgICBoZWlnaHQ6IDE1MS41MTUxNTE1MTUycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTkwLjQwMzY1NTc1MDJweDtcbiAgICBjb2xvcjogI0NDQztcbiAgICB0ZXh0LXNoYWRvdzogMCAxLjkwNDAzNjU1NzVweCAwICNmZmYsIC0xLjkwNDAzNjU1NzVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIHdpZHRoOiAxOTAuNDAzNjU1NzUwMnB4O1xuICAgIGhlaWdodDogMTkwLjQwMzY1NTc1MDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgNDRweCA2MS42cHggNDRweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XG4gICAgdG9wOiAtNDIuMTU1NzQ3ODgyNXB4O1xuICAgIGxlZnQ6IDUxLjIwMTgyNzg3NTFweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWN0aXZlICNpbm5lci1zcGluIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCAyLjcyMDA1MjIyNXB4IGluc2V0O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbjphY3RpdmU6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogOC4xNjEzMjI1NzgycHg7XG4gIH1cbiAgI3dyYXBwZXIgI3doZWVsOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxNy41cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiA2NzcuNnB4O1xuICAgIGhlaWdodDogNjc3LjZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCB7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMjIuODU3MTQyODU3MXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggNDUuNzE0Mjg1NzE0M3B4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxMHB4IDBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAvKlxuICAgICNzaGluZXtcbiAgICBcdHdpZHRoOiAkRGlhbWV0ZXI7XG4gICAgXHRoZWlnaHQ6JERpYW1ldGVyO1xuICAgIFx0cG9zaXRpb246YWJzb2x1dGU7XG4gICAgXHR0b3A6MDtcbiAgICBcdGxlZnQ6MDtcbiAgICBcdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpKSwgY29sb3Itc3RvcCg5JSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU1LDI1NSwyNTUsMCkpKTtcbiAgICBcdGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUscmdiYSgyNTUsMjU1LDI1NSwwLjkxKSA5JSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpOyBcbiAgICBcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IFxuICAgIFx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwZmZmZmZmJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50IFxuICAgIFx0b3BhY2l0eTowLjE7XG4gICAgfSovXG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA2IGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAgIHRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGNsaXA6IHJlY3QoMHB4LCA4MDBweCwgODAwcHgsIDQwMHB4KTtcbiAgICBsZWZ0OiAtMjIuODU3MTQyODU3MXB4O1xuICAgIHRvcDogLTIyLjg1NzE0Mjg1NzFweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjbGlwOiByZWN0KDBweCwgNDAwcHgsIDgwMHB4LCAwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDgwMHB4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjaW5uZXItd2hlZWwgZGl2LmhvbGQgZGl2LnNlYyBzcGFuLmltYWdlU3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDAwcHg7XG4gICAgcmlnaHQ6IDI4NS43MTQyODU3MTQzcHg7XG4gICAgei1pbmRleDogMTAwMDAwMDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBtYXgtd2lkdGg6IDIyOC41NzE0Mjg1NzE0cHg7XG4gICAgbWluLWhlaWdodDogMzMxLjQyODU3MTQyODZweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgc3Bhbi5pbWFnZVNwYW4gLkltYWdlQ29udGFpbmVyIGltZyB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNpbm5lci13aGVlbCBkaXYuaG9sZCBkaXYuc2VjIC5TcGFuQ29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzNTBweDtcbiAgICByaWdodDogNDAwcHg7XG4gICAgbWluLXdpZHRoOiAzNTQuMjg1NzE0Mjg1N3B4O1xuICAgIG1heC13aWR0aDogMzU0LjI4NTcxNDI4NTdweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI2lubmVyLXdoZWVsIGRpdi5ob2xkIGRpdi5zZWMgLlNwYW5Db250YWluZXIgc3Bhbi5UZXh0U3BhbiB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDAwMDAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNTMuMzMzMzMzMzMzM3B4O1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiB7XG4gICAgd2lkdGg6IDIxNy42MDQxNzgwMDAycHg7XG4gICAgaGVpZ2h0OiAyMTcuNjA0MTc4MDAwMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI2OC4zNDA3NjgxNDI3cHg7XG4gICAgbGVmdDogMjY4LjM0MDc2ODE0MjdweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMi4xNzYwNDE3OHB4IDBweDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluICNpbm5lci1zcGluIHtcbiAgICB3aWR0aDogMTczLjE2MDE3MzE2MDJweDtcbiAgICBoZWlnaHQ6IDE3My4xNjAxNzMxNjAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIuMjIyMDAyNDJweDtcbiAgICBsZWZ0OiAyMi4yMjIwMDI0MnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3gtc2hhZG93OiB3aGl0ZSAtMi4xNzYwNDE3OHB4IDBweCBpbnNldCwgd2hpdGUgMHB4IDIuMTc2MDQxNzhweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC40KSAwcHggMHB4IDIuNzIwMDUyMjI1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLyogT2xkIGJyb3dzZXJzICovXG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBGRjMuNisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMTAwJSwgI2VhZWFlYSkpO1xuICAgIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgICAvKiBPcGVyYSAxMisgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gICAgLyogSUUxMCsgKi9cbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCAjZWFlYWVhIDEwMCUpO1xuICAgIC8qIFczQyAqL1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiNlYWVhZWFcIixHcmFkaWVudFR5cGU9MSApO1xuICAgIC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gICN3cmFwcGVyIGRpdiN3aGVlbCAjc3BpbiAjaW5uZXItc3BpbiBpbWcge1xuICAgIHdpZHRoOiAxNzMuMTYwMTczMTYwMnB4O1xuICAgIGhlaWdodDogMTczLjE2MDE3MzE2MDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMTcuNjA0MTc4MDAwMnB4O1xuICAgIGNvbG9yOiAjQ0NDO1xuICAgIHRleHQtc2hhZG93OiAwIDIuMTc2MDQxNzhweCAwICNmZmYsIC0yLjE3NjA0MTc4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICB3aWR0aDogMjE3LjYwNDE3ODAwMDJweDtcbiAgICBoZWlnaHQ6IDIxNy42MDQxNzgwMDAycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI3dyYXBwZXIgZGl2I3doZWVsICNzcGluOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDUwLjI4NTcxNDI4NTdweCA3MC40cHggNTAuMjg1NzE0Mjg1N3B4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcbiAgICB0b3A6IC00OC4xNzc5OTc1OHB4O1xuICAgIGxlZnQ6IDU4LjUxNjM3NDcxNDRweDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWN0aXZlICNpbm5lci1zcGluIHtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCAzLjEwODYzMTExNDNweCBpbnNldDtcbiAgfVxuICAjd3JhcHBlciBkaXYjd2hlZWwgI3NwaW46YWN0aXZlOmFmdGVyIHtcbiAgICBmb250LXNpemU6IDkuMzI3MjI1ODAzN3B4O1xuICB9XG4gICN3cmFwcGVyICN3aGVlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMjBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDc3NC40cHg7XG4gICAgaGVpZ2h0OiA3NzQuNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgaGgge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGgge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gIH1cbn1cbi5zcGluIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGhoIDAuMXM7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICBhbmltYXRpb246IGhoIDAuMXM7XG59XG5cbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5LCAubW9kYWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb2RhbC1oZWFkZXIgLmVycm9yTWVzc2FnZSwgLm1vZGFsLWJvZHkgLmVycm9yTWVzc2FnZSwgLm1vZGFsLWZvb3RlciAuZXJyb3JNZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */"]
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
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
        }, {
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_6__["HeaderFooterService"]
        }, {
          type: _services_emails_service__WEBPACK_IMPORTED_MODULE_7__["EmailsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _services_center_image_service__WEBPACK_IMPORTED_MODULE_8__["CenterImageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
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