function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    var _services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/guards/login.guard */
    "./src/app/services/guards/login.guard.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: 'spinner',
      component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"]
    }, {
      path: 'customize-spinner',
      component: _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_1__["CustomizeSpinnerComponent"],
      canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]]
    }, {
      path: 'email-list',
      component: _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_2__["EmailListComponent"],
      canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]]
    }, {
      path: 'custom-script',
      component: _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_3__["CustomScriptComponent"],
      canActivate: [_services_guards_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuard"]]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/login',
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


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(headerFooterService, metaService, Pagetitle) {
        _classCallCheck(this, AppComponent);

        this.headerFooterService = headerFooterService;
        this.metaService = metaService;
        this.Pagetitle = Pagetitle;
        this.API_IMAGE_URL = '/api/v1/imageUpload/';
        this.favIcon = document.querySelector('#favIcon');
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
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_1__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]));
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
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_1__["HeaderFooterService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
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
      providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"], _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"], _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _customize_spinner_customize_spinner_component__WEBPACK_IMPORTED_MODULE_8__["CustomizeSpinnerComponent"], _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_10__["EmailListComponent"], _custom_script_custom_script_component__WEBPACK_IMPORTED_MODULE_11__["CustomScriptComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
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


    var _services_custom_script_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/custom-script.service */
    "./src/app/services/custom-script.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomScriptComponent_div_33_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomScriptComponent_div_33_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomScriptComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomScriptComponent_div_33_div_1_Template, 3, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomScriptComponent_div_33_div_2_Template, 3, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.SuccessfullyUpload);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.UnsuccessfullyUpload);
      }
    }

    var CustomScriptComponent = /*#__PURE__*/function () {
      function CustomScriptComponent(customScriptService, imageService, fb) {
        _classCallCheck(this, CustomScriptComponent);

        this.customScriptService = customScriptService;
        this.imageService = imageService;
        this.fb = fb;
        this.isMenuCollapsed = true;
        this.formErrors = {
          'Header': '',
          'Footer': '',
          'PageTitle': '',
          'pageDescription': '',
          'favicon': ''
        };
        this.createForm();
      }

      _createClass(CustomScriptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createForm",
        value: function createForm() {
          this.HeaderFooterForm = this.fb.group({
            header: [''],
            footer: [''],
            pageTitle: [''],
            pageDescription: [''],
            favicon: ['']
          });
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
          var _this2 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this2.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_1__["ImageSnippet"](event.target.result, file);

            _this2.imageService.uploadImage(_this2.selectedFile.file).subscribe(function (res) {
              _this2.onSuccess(res.path);
            }, function (err) {
              _this2.onError();

              throw new Error(err);
            });
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.customScriptService.deleteHeaderFooter().subscribe(function () {
            _this3.formCopy = _this3.HeaderFooterForm.value;
            _this3.formCopy.favicon = _this3.StringOfImageUpload.replace(/\\/g, "/");
            console.log(_this3.formCopy);

            _this3.customScriptService.sendHeaderFooter(_this3.formCopy).subscribe(function (HFform) {
              _this3.form = HFform;
              console.log(_this3.form);
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });

            _this3.HeaderFooterForm.reset();
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
        }
      }]);

      return CustomScriptComponent;
    }();

    CustomScriptComponent.ɵfac = function CustomScriptComponent_Factory(t) {
      return new (t || CustomScriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_custom_script_service__WEBPACK_IMPORTED_MODULE_2__["CustomScriptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
    };

    CustomScriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomScriptComponent,
      selectors: [["app-custom-script"]],
      decls: 37,
      vars: 3,
      consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "col-12", "col-lg-10"], [1, "title"], [1, "row"], [1, "col-10", "mr-auto"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "header"], ["formControlName", "header", "id", "header", "name", "header", "rows", "3", 1, "form-control"], ["for", "footer"], ["formControlName", "footer", "id", "footer", "name", "footer", "rows", "3", 1, "form-control"], ["for", "title"], ["formControlName", "pageTitle", "type", "text", "id", "title", "name", "title", 1, "form-control"], ["for", "description"], ["formControlName", "pageDescription", "id", "description", "name", "description", "rows", "3", 1, "form-control"], ["for", "favicon"], ["formControlName", "favicon", "type", "file", 3, "change"], ["class", "col-3", "id", "FileUploadMessageBox", 4, "ngIf"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info"], ["id", "FileUploadMessageBox", 1, "col-3"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"]],
      template: function CustomScriptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomScriptComponent_Template_button_click_2_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomScriptComponent_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomScriptComponent_Template_input_change_32_listener($event) {
            return ctx.processFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CustomScriptComponent_div_33_Template, 3, 2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.HeaderFooterForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 50px 20px 20px 40px;\n  color: white;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLXNjcmlwdC9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxjdXN0b20tc2NyaXB0XFxjdXN0b20tc2NyaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tc2NyaXB0L2N1c3RvbS1zY3JpcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJnQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCA5MiwgOTIpO1xyXG59IiwiZGl2LmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZ0NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1Yztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomScriptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-script',
          templateUrl: './custom-script.component.html',
          styleUrls: ['./custom-script.component.scss']
        }]
      }], function () {
        return [{
          type: _services_custom_script_service__WEBPACK_IMPORTED_MODULE_2__["CustomScriptService"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
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


    var _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/form-spinner-controller */
    "./src/app/shared/form-spinner-controller.ts");
    /* harmony import */


    var _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/ImageSnippet */
    "./src/app/shared/ImageSnippet.ts");
    /* harmony import */


    var _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/spinner-customizer-controller.service */
    "./src/app/services/spinner-customizer-controller.service.ts");
    /* harmony import */


    var _services_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/image.service */
    "./src/app/services/image.service.ts");
    /* harmony import */


    var _services_center_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/center-image.service */
    "./src/app/services/center-image.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CustomizeSpinnerComponent_tr_63_td_7_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2714");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_7_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2716");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_7_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomizeSpinnerComponent_tr_63_td_7_div_5_div_1_Template, 3, 0, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomizeSpinnerComponent_tr_63_td_7_div_5_div_2_Template, 3, 0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.SuccessfullyUpload[i_r2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.UnsuccessfullyUpload[i_r2]);
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 44, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_td_7_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.processFile($event, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomizeSpinnerComponent_tr_63_td_7_div_5_Template, 3, 2, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedFile);
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_63_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomizeSpinnerComponent_tr_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_Template_select_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r2 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onChangeImage($event.target.value, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomizeSpinnerComponent_tr_63_td_7_Template, 6, 1, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomizeSpinnerComponent_tr_63_td_8_Template, 2, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_tr_63_Template_select_change_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r2 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onChangeResult($event.target.value, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Text Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email Popup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomizeSpinnerComponent_tr_63_td_17_Template, 2, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CustomizeSpinnerComponent_tr_63_td_18_Template, 2, 0, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var spinnerfield_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsTextPopUp[i_r2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.itIsEmailPopUp[i_r2]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", spinnerfield_r1.controls.color.hasError("required") && ctx_r0.submitPressed);
      }
    }

    var CustomizeSpinnerComponent = /*#__PURE__*/function () {
      function CustomizeSpinnerComponent(formBuilder, // For number of field dropdown
      spinnerService, // Form validations
      imageService, centerImageService) {
        _classCallCheck(this, CustomizeSpinnerComponent);

        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.imageService = imageService;
        this.centerImageService = centerImageService; //Collapse menu

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

        this.totalPercentage = []; // Setting Form Array

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

        }
      }, {
        key: "createSpFormGroup",
        value: function createSpFormGroup() {
          return this.formBuilder.group({
            isItImage: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            file: [''],
            textFieldOne: [''],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/)]],
            isItEmail: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            textPopUp: [''],
            emails: [''],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "createFormFieldForCenterSpinnerImage",
        value: function createFormFieldForCenterSpinnerImage() {
          this.CenterImageForm = this.formBuilder.group({
            centerImage: ['']
          });
        }
      }, {
        key: "submitCenterImage",
        value: function submitCenterImage() {} //Image Upload

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
          var _this4 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this4.selectedFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_3__["ImageSnippet"](event.target.result, file);

            _this4.imageService.uploadImage(_this4.selectedFile.file).subscribe(function (res) {
              _this4.onSuccess(index, res.path);
            }, function (err) {
              _this4.onError(index);

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
          var _this5 = this;

          var files = image.srcElement.files;
          var file = files[0];
          var reader = new FileReader();
          reader.addEventListener('load', function (event) {
            _this5.selectedCenterFile = new _shared_ImageSnippet__WEBPACK_IMPORTED_MODULE_3__["ImageSnippet"](event.target.result, file);

            _this5.imageService.uploadImage(_this5.selectedCenterFile.file).subscribe(function (res) {
              _this5.onSuccessCenter(res.path);
            }, function (err) {
              _this5.onErrorCenter();

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
          var _this6 = this;

          var spinner = [];
          this.submitPressed = true; // if a field outside the array is added, change this to this.spinnerForm.value

          if (this.spinnerForm.status === "VALID") {
            var counter = 0;
            this.spinnerArray.value.forEach(function (element) {
              var field = new _shared_form_spinner_controller__WEBPACK_IMPORTED_MODULE_2__["formSpinnerControl"](element.isItImage, element.image, element.textFieldOne, element.percentage, element.isItEmail, element.textPopUp, element.email, element.color);
              _this6.totalPercentage[counter] = element.percentage;

              _this6.StringOfImageUpload.forEach(function (file) {
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
            console.log(this.percentageSum);
          }

          if (this.percentageSum === 100) {
            this.spinnerService.deleteSpinner().subscribe(function () {
              _this6.spinnerService.sendSpinner(spinner).subscribe(function (res) {
                _this6.spinnerForm.reset();

                _this6.StringOfImageUpload = []; // Resets the StringOfImageUpload array
              }, function (err) {
                throw new Error('Error Sending the information about the spinner');
              });
            }, function (err) {
              throw new Error('Error deleting the information of the previous spineer');
            });
          } else {
            throw new Error('Error Percentage must add up 100%');
          }
        }
      }, {
        key: "onSubmitCenterImage",
        value: function onSubmitCenterImage() {
          var _this7 = this;

          this.centerImageService.deleteImageCenter().subscribe(function () {
            _this7.centerCopy = _this7.CenterImageForm.value;
            _this7.centerCopy.centerImage = _this7.StringOfSpinnerCenter.replace(/\\/g, "/");
            console.log(_this7.centerCopy);

            _this7.centerImageService.sendImageCenter(_this7.centerCopy).subscribe(function (HFform) {
              _this7.centerform = HFform;
              console.log(_this7.centerform);
            }, function (err) {
              throw new Error('Error Sending the information about the spinner');
            });

            _this7.CenterImageForm.reset();
          }, function (err) {
            throw new Error('Error deleting the information of the previous spineer');
          });
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
      return new (t || CustomizeSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerCustomizerControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_6__["CenterImageService"]));
    };

    CustomizeSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomizeSpinnerComponent,
      selectors: [["app-customize-spinner"]],
      decls: 74,
      vars: 4,
      consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "menu1", "col-12", "col-lg-10"], [1, "row", "my-5"], [1, "col-12"], ["id", "settingNumber"], ["for", "numberOptions", 1, "mr-3"], ["matNativeControl", "", "name", "numberOptions", "required", "", 3, "change"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6", "selected", ""], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], [3, "formGroup", "ngSubmit"], [1, "table-responsive"], [1, "table", "table-borderless"], ["formArrayName", "spinnerArray"], ["for", "ImageOption"], ["for", ""], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", "ml-auto"], [1, "mt-3"], ["formControlName", "centerImage", "type", "file", 1, "mr-5", 3, "change"], [1, "btn", "btn-danger", "ml-auto", 3, "click"], [3, "formGroupName"], ["formControlName", "isItImage", "required", "", 3, "change"], ["selected", "", 3, "ngValue"], [3, "ngValue"], [4, "ngIf"], ["formControlName", "percentage", "type", "number", "name", "textField"], ["formControlName", "isItEmail", "name", "resultOption", "required", "", 3, "change"], [1, "col-2"], ["formControlName", "color", "type", "color"], ["id", "ImageUploadBox"], ["id", "FileUploadBox"], ["formControlName", "file", "type", "file", "accept", "image/*", "name", "imageFile", 3, "change"], ["imageInput", ""], ["id", "FileUploadMessageBox", 4, "ngIf"], ["id", "FileUploadMessageBox"], ["class", "alert alert-success d-flex justify-content-center", 4, "ngIf"], ["class", "alert alert-danger d-flex justify-content-center", 4, "ngIf"], [1, "alert", "alert-success", "d-flex", "justify-content-center"], [1, "alert", "alert-danger", "d-flex", "justify-content-center"], ["formControlName", "textFieldOne", "type", "text", "name", "textField"], ["formControlName", "textPopUp", "type", "text", "name", "imageFile"], ["formControlName", "emails", "type", "email", "name", "textField"]],
      template: function CustomizeSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_2_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_select_change_15_listener($event) {
            return ctx.onChange($event.target.value);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_39_listener() {
            return ctx.onSubmit();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Image for middle of spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomizeSpinnerComponent_Template_form_ngSubmit_68_listener() {
            return ctx.onSubmitCenterImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizeSpinnerComponent_Template_input_change_69_listener($event) {
            return ctx.ProcessCenterImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizeSpinnerComponent_Template_button_click_72_listener() {
            return ctx.deleteImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Delete image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.spinnerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spinnerArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.CenterImageForm);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapse"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
      styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .bgColor[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n.bgColor[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: #37be5f;\n  color: white;\n}\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\ndiv.menu1[_ngcontent-%COMP%] {\n  padding: 50px 20px 30px 20px;\n  color: white;\n}\n.invalid[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  border-radius: 2px;\n}\ndiv.row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 140px;\n}\ndiv#ImageUploadBox[_ngcontent-%COMP%]   div#FileUploadMessageBox[_ngcontent-%COMP%] {\n  height: 15px;\n}\ndiv#ImageUploadBox[_ngcontent-%COMP%]   div#FileUploadMessageBox[_ngcontent-%COMP%]   div.alert[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9taXplLXNwaW5uZXIvQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcY3VzdG9taXplLXNwaW5uZXJcXGN1c3RvbWl6ZS1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0VSO0FERUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBREdJO0VBQ0ksWUFBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21pemUtc3Bpbm5lci9jdXN0b21pemUtc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMTkwLCA5NSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgMTkwLCA5NSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmRpdi5tZW51MSB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggMzBweCAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbmRpdi5yb3cgaW5wdXQsIHRkIGlucHV0IHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuZGl2I0ltYWdlVXBsb2FkQm94IHtcclxuICAgIGRpdiNGaWxlVXBsb2FkTWVzc2FnZUJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGRpdi5hbGVydCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIuYmdDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG59XG4uYmdDb2xvciB0YWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iZ0NvbG9yIHRhYmxlIGlucHV0LCAuYmdDb2xvciB0YWJsZSBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmdDb2xvciBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdiZTVmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5kaXYubWVudTEge1xuICBwYWRkaW5nOiA1MHB4IDIwcHggMzBweCAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbmRpdi5yb3cgaW5wdXQsIHRkIGlucHV0IHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5kaXYjSW1hZ2VVcGxvYWRCb3ggZGl2I0ZpbGVVcGxvYWRNZXNzYWdlQm94IHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuZGl2I0ltYWdlVXBsb2FkQm94IGRpdiNGaWxlVXBsb2FkTWVzc2FnZUJveCBkaXYuYWxlcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizeSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customize-spinner',
          templateUrl: './customize-spinner.component.html',
          styleUrls: ['./customize-spinner.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_spinner_customizer_controller_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerCustomizerControllerService"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_5__["ImageService"]
        }, {
          type: _services_center_image_service__WEBPACK_IMPORTED_MODULE_6__["CenterImageService"]
        }];
      }, null);
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


    var _services_emails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/emails.service */
    "./src/app/services/emails.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmailListComponent_div_14_tr_15_Template(rf, ctx) {
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
        var email_r2 = ctx.$implicit;

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
      }
    }

    function EmailListComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.emails);
      }
    }

    var EmailListComponent = /*#__PURE__*/function () {
      function EmailListComponent(emailService) {
        _classCallCheck(this, EmailListComponent);

        this.emailService = emailService;
        this.isMenuCollapsed = true;
      }

      _createClass(EmailListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getEmails();
        }
      }, {
        key: "getEmails",
        value: function getEmails() {
          var _this8 = this;

          this.emailService.getEmails().subscribe(function (emails) {
            _this8.emails = emails;
            console.log(_this8.emails);
          });
        }
      }]);

      return EmailListComponent;
    }();

    EmailListComponent.ɵfac = function EmailListComponent_Factory(t) {
      return new (t || EmailListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"]));
    };

    EmailListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailListComponent,
      selectors: [["app-email-list"]],
      decls: 15,
      vars: 2,
      consts: [[1, "row", "bgColor"], [1, "col-12", "col-lg-2", "navbar", "navbar-expand-lg", "p-0", "bg-dark"], ["type", "button", 1, "navbar-toggler", "pl-4", 3, "click"], [1, "btn", "btn-secondary"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "container", "col-12", "col-lg-10"], ["id", "title"], [1, "row"], [1, "col-12", "d-flex", "justify-content-end", "mb-5"], [1, "btn", "btn-info"], ["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"]],
      template: function EmailListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailListComponent_Template_button_click_2_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emails);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [".bgColor[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\n\ndiv.container[_ngcontent-%COMP%] {\n  padding: 50px 30px 40px 30px;\n  min-height: 100vh;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtbGlzdC9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxlbWFpbC1saXN0XFxlbWFpbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbWFpbC1saXN0L2VtYWlsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLWxpc3QvZW1haWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgOTIsIDkyKTtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggNDBweCAzMHB4OyAgIFxyXG4gICAgbWluLWhlaWdodDogMTAwdmg7IFxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59IiwiLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjO1xufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweCAzMHB4IDQwcHggMzBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbnRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
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
          type: _services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"]
        }];
      }, null);
    })();
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
          var _this9 = this;

          if (this.LoginForm.status === "VALID") {
            var user = new _services_login_service__WEBPACK_IMPORTED_MODULE_2__["userLogin"](this.LoginForm.controls.username.value, this.LoginForm.controls.password.value);
            this.loginservice.Login(user).subscribe(function (resp) {
              if (resp.success === true) {
                _this9.LoginError = false;
                localStorage.setItem("userToken", resp.token);

                _this9.router.navigate(['/customize-spinner']);
              }
            }, function (err) {
              _this9.LoginError = true;
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
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding: 70px 0;\n  text-align: center;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%], div.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 200px;\n  align-items: center;\n  padding: 70px 0;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 20px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   div.formContent[_ngcontent-%COMP%]   div.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  border: none;\n}\n\ndiv.align-middle[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdWFuY1xcT25lRHJpdmVcXERvY3VtZW50c1xcSnVhbiBNaWd1ZWxcXENVUlNPIEhUTUxcXHVwd29ya1xcU3Bpbm5lci13aXRoLWJhY2tlbmQtY29udHJvbFxcU3Bpbm5lckFwcFxcY2xpZW50XFxzcGlubmVyLWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FESUk7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FESVE7RUFDSSxZQUFBO0FDRlo7O0FER1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRGhCOztBREtJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5hbGlnbi1taWRkbGUge1xyXG5cclxuICAgIGRpdi50aXRsZSwgZGl2LmZvcm1Db250ZW50IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICBkaXYuZm9ybUNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgICAgIGRpdi5maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXJyb3JNZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJkaXYuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdi5hbGlnbi1taWRkbGUgZGl2LnRpdGxlLCBkaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbmRpdi5hbGlnbi1taWRkbGUgZGl2LmZvcm1Db250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5kaXYuYWxpZ24tbWlkZGxlIGRpdi5mb3JtQ29udGVudCBkaXYuZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5kaXYuYWxpZ24tbWlkZGxlIC5lcnJvck1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"]
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
          this.router.navigate(['/login']);
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
      decls: 26,
      vars: 0,
      consts: [[1, "container", "align-items-start", "pl-4"], [1, "image", "img-fluid"], ["src", "https://dam.ngenespanol.com/wp-content/uploads/2019/06/arbol-mas-alto-del-mundo-770x395.png", "alt", "Fixed Photo"], [1, "mt-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["routerLink", "/spinner", 1, "nav-link"], ["routerLink", "/customize-spinner", 1, "nav-link"], ["routerLink", "/email-list", 1, "nav-link"], ["routerLink", "/custom-script", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "btn", "btn-danger", "ml-auto", 3, "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SUPPORT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "REQUEST FEATURE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_24_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["div.container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  background-color: black;\n  height: 100vh;\n}\n\ndiv.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 3px 0;\n  color: white;\n}\n\n.nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcanVhbmNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEp1YW4gTWlndWVsXFxDVVJTTyBIVE1MXFx1cHdvcmtcXFNwaW5uZXItd2l0aC1iYWNrZW5kLWNvbnRyb2xcXFNwaW5uZXJBcHBcXGNsaWVudFxcc3Bpbm5lci1hcHAvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBVE07RUFVTixhQVZNO0VBV04sa0JBQUE7QUNESjs7QURLSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDRlI7O0FET0E7RUFDSSxhQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGltZ1NpemU6IDE1MHB4O1xyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuZGl2LmltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogJGltZ1NpemU7XHJcbiAgICBoZWlnaHQ6ICRpbWdTaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuLm5hdiAubmF2LWl0ZW17XHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufSBcclxuXHJcblxyXG4ubmF2IC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufSIsImRpdi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmRpdi5pbWFnZSBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgcGFkZGluZzogM3B4IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHllbGxvdztcbn0iXX0= */"]
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


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var CenterImageService = /*#__PURE__*/function () {
      function CenterImageService(http, processHTTPMsgService) {
        _classCallCheck(this, CenterImageService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "/api/v1/centerImage";
      }

      _createClass(CenterImageService, [{
        key: "getImageCenter",
        value: function getImageCenter() {
          return this.http.get(this.URL_API).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "sendImageCenter",
        value: function sendImageCenter(Form) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.URL_API, Form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "deleteImageCenter",
        value: function deleteImageCenter() {
          return this.http["delete"](this.URL_API);
        }
      }]);

      return CenterImageService;
    }();

    CenterImageService.ɵfac = function CenterImageService_Factory(t) {
      return new (t || CenterImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
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
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
        }];
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


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var CustomScriptService = /*#__PURE__*/function () {
      function CustomScriptService(http, processHTTPMsgService) {
        _classCallCheck(this, CustomScriptService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "/api/v1/headerFooter";
      }

      _createClass(CustomScriptService, [{
        key: "sendHeaderFooter",
        value: function sendHeaderFooter(Form) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(this.URL_API, Form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
        }
      }, {
        key: "deleteHeaderFooter",
        value: function deleteHeaderFooter() {
          return this.http["delete"](this.URL_API);
        }
      }]);

      return CustomScriptService;
    }();

    CustomScriptService.ɵfac = function CustomScriptService_Factory(t) {
      return new (t || CustomScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
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
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
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


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var EmailsService = /*#__PURE__*/function () {
      function EmailsService(http, processHTTPMsgService) {
        _classCallCheck(this, EmailsService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API = "/api/v1/results";
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
      }]);

      return EmailsService;
    }();

    EmailsService.ɵfac = function EmailsService_Factory(t) {
      return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
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
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var HeaderFooterService = /*#__PURE__*/function () {
      function HeaderFooterService(http, processHTTPMsgService) {
        _classCallCheck(this, HeaderFooterService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API_HEADER = "/api/v1/headerFooter";
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
      return new (t || HeaderFooterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
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

    var ImageService = /*#__PURE__*/function () {
      function ImageService(http) {
        _classCallCheck(this, ImageService);

        this.http = http;
        this.URL_API = "/api/v1/imageUpload";
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.URL_API = "/users/login";
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
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
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


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
        this.URL_API = "/api/v1/spinner";
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
      return new (t || SpinnerCustomizerControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]));
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
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_2__["ProcessHTTPMsgService"]
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./process-httpmsg.service */
    "./src/app/services/process-httpmsg.service.ts");

    var SpinnerService = /*#__PURE__*/function () {
      function SpinnerService(http, processHTTPMsgService) {
        _classCallCheck(this, SpinnerService);

        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.URL_API_SPINNER = "/api/v1/spinner";
        this.URL_API_HEADER = "/api/v1/headerFooter";
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
      return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"]
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _services_header_footer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/header-footer.service */
    "./src/app/services/header-footer.service.ts");
    /* harmony import */


    var _services_emails_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/emails.service */
    "./src/app/services/emails.service.ts");
    /* harmony import */


    var _services_center_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/center-image.service */
    "./src/app/services/center-image.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.HeaderFooter.header, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SpinnerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

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

    function SpinnerComponent_div_3_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", field_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r12.image, " ");
      }
    }

    function SpinnerComponent_div_3_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r12.textFieldOne);
      }
    }

    function SpinnerComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_3_div_2_div_3_Template, 6, 6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_3_div_2_div_4_Template, 5, 5, "div", 20);

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

    function SpinnerComponent_div_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n<<<<<<< HEAD ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n======= ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n>>>>>>> 6be21e8745f81911319a594ee7b8941746555e75 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.centerImage.centerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.centerImage.centerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_3_div_2_Template, 5, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_div_3_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.rotate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpinnerComponent_div_3_div_6_Template, 7, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 18);

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

    function SpinnerComponent_footer_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.HeaderFooter.footer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function SpinnerComponent_ng_template_7_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SpinnerComponent_ng_template_7_div_4_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_7_div_4_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var modal_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return modal_r22.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.FinalResult.textPopUp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r23.sendEmailForm);
      }
    }

    function SpinnerComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_7_Template_button_click_1_listener() {
          var modal_r22 = ctx.$implicit;
          return modal_r22.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_7_div_4_Template, 15, 2, "div", 31);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.FinalResult);
      }
    }

    function SpinnerComponent_ng_template_9_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.FinalResult.textPopUp);
      }
    }

    function SpinnerComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_9_Template_button_click_1_listener() {
          var modal_r29 = ctx.$implicit;
          return modal_r29.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_ng_template_9_div_4_Template, 3, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpinnerComponent_ng_template_9_Template_button_click_6_listener() {
          var modal_r29 = ctx.$implicit;
          return modal_r29.close("Save click");
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
        this.API_IMAGE_URL = '/api/v1/imageUpload/';
        this.bgColorStyle = ['']; // Backgorund color

        this.fontColor = ['']; // Font Color

        this.fieldStyleNth = ['']; //Individual field style

        this.holder = [''];
        this.state = 'default'; //Animations

        this.clicks = 0;
        this.totalDegree = 0;
        this.initialDegreesStart = [''];
        this.initialDegreesEnd = [''];
        this.degreesRotated = 0;
        this.resultingField = 0; /// Modal results

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
          var _this10 = this;

          this.spinnerService.getSpinner().subscribe(function (spinnerFields) {
            _this10.SpinnerFields = spinnerFields;
            _this10.angle = 360 / _this10.SpinnerFields.length;

            for (var i = 0; i < _this10.SpinnerFields.length; i++) {
              //Substitute backslashes for slashes
              _this10.SpinnerFields[i].image = _this10.SpinnerFields[i].image.replace(/\\/g, "/");
              _this10.SpinnerFields[i].image = _this10.API_IMAGE_URL + _this10.SpinnerFields[i].image.slice(14);
              _this10.bgColorStyle[i] = _this10.SpinnerFields[i].bgColor; // Backgorund color

              _this10.fontColor[i] = _this10.spinnerService.invertColor(_this10.bgColorStyle[i]); //Font Color

              _this10.holder[i] = {
                'transform': 'rotate(' + _this10.angle * i + 'deg)',
                '-webkit-transform': 'rotate(' + _this10.angle * i + 'deg)',
                '-moz-transform': 'rotate(' + _this10.angle * i + 'deg)',
                '-o-transform': 'rotate(' + _this10.angle * i + 'deg)',
                '-ms-transform': 'rotate(' + _this10.angle * i + 'deg)'
              };
              _this10.fieldStyleNth[i] = {
                'transform': 'rotate(' + _this10.angle + 'deg)',
                '-webkit-transform': 'rotate(' + _this10.angle + 'deg)',
                '-moz-transform': 'rotate(' + _this10.angle + 'deg)',
                '-o-transform': 'rotate(' + _this10.angle + 'deg)',
                '-ms-transform': 'rotate(' + _this10.angle + 'deg)',
                'background-color': _this10.bgColorStyle[i],
                'color': _this10.fontColor[i]
              };
              _this10.initialDegreesStart[i] = _this10.angle * i;
              _this10.initialDegreesEnd[i] = _this10.initialDegreesStart[i] + _this10.angle;
            }
          });
        }
      }, {
        key: "getHeaderFooter",
        value: function getHeaderFooter() {
          var _this11 = this;

          this.headerFooterService.getHeaderFooter().subscribe(function (headerFooter) {
            _this11.HeaderFooter = headerFooter[0];
          });
        }
      }, {
        key: "getImageCenter",
        value: function getImageCenter() {
          var _this12 = this;

          this.centerImageService.getImageCenter().subscribe(function (centerImage) {
            _this12.centerImage = centerImage[0];
            _this12.centerImage.centerImage = _this12.API_IMAGE_URL + _this12.centerImage.centerImage.slice(14);
            console.log(centerImage);
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
          var _this13 = this;

          console.log(this.SpinnerFields);

          if (this.SpinnerFields[this.resultingField].isItEmail === true) {
            setTimeout(function () {
              _this13.open(_this13.ResultEmail);
            }, 6500);
          } else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
            setTimeout(function () {
              _this13.open(_this13.ResultText);
            }, 6500);
          }
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.sendEmailForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            emailAddress: [''],
            result: ['']
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          this.formCopy = this.sendEmailForm.value;
          this.formCopy.result = this.FinalResult.textPopUp;
          console.log(this.formCopy);
          this.emailSevice.sendEmails(this.formCopy).subscribe(function (emailForm) {
            _this14.form = emailForm;
            console.log(_this14.form);
          }, function (err) {
            throw new Error('Error Sending the information about the spinner');
          });
          this.sendEmailForm.reset();
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
          console.log(index);
          this.FinalResult = this.SpinnerFields[index];
          console.log(this.FinalResult);
        } // Modal results

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
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_header_footer_service__WEBPACK_IMPORTED_MODULE_3__["HeaderFooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_4__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_center_image_service__WEBPACK_IMPORTED_MODULE_5__["CenterImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]));
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
      decls: 11,
      vars: 4,
      consts: [[4, "ngIf"], ["class", "my-5 row", 4, "ngIf"], ["id", "wrapper"], ["id", "wheel", 4, "ngIf"], ["id", "txt"], ["txt", ""], ["ResultEmail", ""], ["ResultText", ""], [3, "innerHTML"], [1, "my-5", "row"], ["id", "title", 1, "col-12", "d-flex", "justify-content-center"], ["id", "description", 1, "col-12", "d-flex", "justify-content-center", "mt-3"], ["id", "wheel"], ["id", "inner-wheel"], [4, "ngFor", "ngForOf"], ["id", "spin", 3, "click"], ["spin", ""], ["id", "inner-spin"], ["id", "shine"], ["wheelSec", ""], ["class", "hold", 3, "style", 4, "ngIf"], [1, "hold"], ["id", "wheelSec", 1, "sec"], ["alt", "", 3, "src"], [1, "sec"], ["alt", "CenterImage", 3, "src"], ["Image", ""], [3, "src"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [1, "row", 3, "formGroup", "ngSubmit"], [1, "col-12", "d-flex", "justify-content-center", "my-3"], ["formControlName", "firstName", "type", "text", "placeholder", "First Name"], [1, "col-12", "d-flex", "justify-content-center", "mb-3"], ["formControlName", "lastName", "type", "text", "placeholder", "Last Name"], ["formControlName", "emailAddress", "type", "email", "placeholder", "email"], [1, "modal-footer"], [1, "btn", "btn-success"], [1, "btn", "btn-danger", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_header_0_Template, 2, 1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_div_1_Template, 7, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_3_Template, 8, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpinnerComponent_footer_6_Template, 2, 1, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpinnerComponent_ng_template_7_Template, 5, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpinnerComponent_ng_template_9_Template, 8, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.SpinnerFields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.HeaderFooter);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]],
      styles: ["#wrapper[_ngcontent-%COMP%] {\n  margin: 40px auto 0;\n  width: 372.4px;\n  position: relative;\n}\n\ndiv#wheel[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n  border: 8px solid #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px, rgba(0, 0, 0, 0.05) 0px 3px 0px;\n  transform: rotate(0deg);\n}\n\n#wheel[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  width: 338.8px;\n  height: 338.8px;\n  border-radius: 50%;\n  z-index: 1000;\n}\n\n#inner-wheel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: all 6s cubic-bezier(0, 0.99, 0.44, 0.99);\n}\n\n#inner-wheel[_ngcontent-%COMP%]   div.hold[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  clip: rect(0px, 350px, 350px, 175px);\n  left: -7px;\n  top: -9px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  transform-origin: center;\n  opacity: 1;\n  clip: rect(0px, 175px, 350px, 0px);\n  border-radius: 350px;\n}\n\n#wheel[_ngcontent-%COMP%]   div.sec[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  position: relative;\n  z-index: 10000000;\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  margin-left: -120px;\n  text-shadow: rgba(255, 255, 255, 0.1) 0px -1px 0px, rgba(0, 0, 0, 0.2) 0px 1px 0px;\n  transform: rotate(-120deg);\n  -webkit-transform: rotate(-120deg);\n  -moz-transform: rotate(-120deg);\n  -ms-transform: rotate(-120deg);\n  -o-transform: rotate(-120deg);\n}\n\n#spin[_ngcontent-%COMP%] {\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  position: absolute;\n  top: 157.5px;\n  left: 153.65px;\n  margin: -34px 0 0 -34px;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 0px;\n  z-index: 1000;\n  background: #fff;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n#spin[_ngcontent-%COMP%]:after {\n  content: \"\";\n  text-align: center;\n  line-height: 95.2018278751px;\n  color: #CCC;\n  text-shadow: 0 2px 0 #fff, 0 -2px 0 rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 100000;\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  display: block;\n}\n\n#spin[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 20px 28px 20px;\n  border-color: transparent transparent #ffffff transparent;\n  top: -20px;\n  left: 28px;\n}\n\n#inner-spin[_ngcontent-%COMP%] {\n  width: 75.7575757576px;\n  height: 75.7575757576px;\n  position: absolute;\n  top: 36.8421052632px;\n  left: 36.8421052632px;\n  margin: -27px 0 0 -27px;\n  border-radius: 50%;\n  background: red;\n  z-index: 999;\n  box-shadow: white 0px -2px 0px inset, white 0px 2px 0px inset, rgba(0, 0, 0, 0.4) 0px 0px 5px;\n  background: white;\n  \n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, #eaeaea 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#eaeaea\",GradientType=1 );\n  \n  overflow: hidden;\n}\n\n#inner-spin[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95.2018278751px;\n  height: 95.2018278751px;\n  border-radius: 100%;\n  position: absolute;\n  top: -9px;\n  left: -9px;\n}\n\n#spin[_ngcontent-%COMP%]:active   #inner-spin[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px inset;\n}\n\n#spin[_ngcontent-%COMP%]:active:after {\n  font-size: 15px;\n}\n\n#shine[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  \n  \n  \n  \n  \n  background: radial-gradient(ellipse at center, white 0%, rgba(255, 255, 255, 0.99) 1%, rgba(255, 255, 255, 0.91) 9%, rgba(255, 255, 255, 0) 100%);\n  \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n  \n  opacity: 0.1;\n}\n\n@-webkit-keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n@keyframes hh {\n  0%, 100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(7deg);\n    -webkit-transform: rotate(7deg);\n  }\n}\n\n.spin[_ngcontent-%COMP%] {\n  -webkit-animation: hh 0.1s;\n  \n  animation: hh 0.1s;\n}\n\n.modal-header[_ngcontent-%COMP%], .modal-body[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9DOlxcVXNlcnNcXGp1YW5jXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxKdWFuIE1pZ3VlbFxcQ1VSU08gSFRNTFxcdXB3b3JrXFxTcGlubmVyLXdpdGgtYmFja2VuZC1jb250cm9sXFxTcGlubmVyQXBwXFxjbGllbnRcXHNwaW5uZXItYXBwL3NyY1xcYXBwXFxzcGlubmVyXFxzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0REOztBRE1BO0VBQ0MsWUFYVTtFQVlWLGFBWlU7RUFhVixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0VBQ0EsdUJBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNIRDs7QURNQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBS0Esb0RBQUE7QUNIRDs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsWUEzQ087RUE0Q1AsYUE1Q087RUE2Q1Asb0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0hKOztBRE1BO0VBQ0Msa0JBQUE7RUFDQSxZQXBEVTtFQXFEVixhQXJEVTtFQXNEVix3QkFBQTtFQUdHLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQTNETztBQ3NEWDs7QURRQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtGQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0xEOztBRFFBO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0MseUJBQUE7RUFDQSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNMRDs7QURRQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNMRDs7QURTQTtFQUVDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2RkFBQTtFQUVBLGlCQUFBO0VBQThCLGlCQUFBO0VBQzhFLFdBQUE7RUFDNkMsb0JBQUE7RUFDM0MseUJBQUE7RUFDTCxjQUFBO0VBQ0MsVUFBQTtFQUMxRyxzRUFBQTtFQUFrRyxRQUFBO0VBQ2xHLG1IQUFBO0VBQXFILDBDQUFBO0VBRXJILGdCQUFBO0FDREQ7O0FERUM7RUFDQyxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUY7O0FES0E7RUFDQyxnREFBQTtBQ0ZEOztBREtBO0VBQ0MsZUFBQTtBQ0ZEOztBRE1BO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ2tLLFdBQUE7RUFDb0Usb0JBQUE7RUFDckUseUJBQUE7RUFDTCxjQUFBO0VBQ0MsVUFBQTtFQUM5SixpSkFBQTtFQUFzSixRQUFBO0VBQ3RKLHFIQUFBO0VBQXVILDBDQUFBO0VBR3ZILFlBQUE7QUNFQTs7QURLQTtFQUNDO0lBQ0UsdUJBQUE7SUFDQSwrQkFBQTtFQ0ZEO0VES0Q7SUFDRSx1QkFBQTtJQUNBLCtCQUFBO0VDSEQ7QUFDRjs7QURNRTtFQUNBO0lBQ0MsdUJBQUE7SUFDQSwrQkFBQTtFQ0pEO0VET0Q7SUFDRSx1QkFBQTtJQUNBLCtCQUFBO0VDTEQ7QUFDRjs7QURRRTtFQUNELDBCQUFBO0VBQTRCLDBCQUFBO0VBQzFCLGtCQUFBO0FDTEg7O0FEVUE7RUFDQyx1QkFBQTtFQUNBLFlBQUE7QUNQRDs7QURVQTtFQUNDLGtCQUFBO0FDUEQiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkRGlhbWV0ZXI6IDM1MHB4O1xyXG5cclxuI3dyYXBwZXJ7IFxyXG5cdG1hcmdpbjogNDBweCBhdXRvIDA7XHRcclxuXHR3aWR0aDokRGlhbWV0ZXIqMS4wNjQ7IFxyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbmRpdiN3aGVlbHtcclxuXHR3aWR0aDokRGlhbWV0ZXI7XHJcblx0aGVpZ2h0OiREaWFtZXRlcjtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcdFxyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OmhpZGRlbjtcclxuXHRib3JkZXI6OHB4IHNvbGlkICNmZmY7XHJcblx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMikgMHB4IDBweCAxMHB4LCByZ2JhKDAsMCwwLDAuMDUpIDBweCAzcHggMHB4O1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4jd2hlZWw6YmVmb3Jle1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0Ym9yZGVyOjRweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcblx0d2lkdGg6JERpYW1ldGVyKjAuOTY4O1xyXG5cdGhlaWdodDokRGlhbWV0ZXIqMC45Njg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0ei1pbmRleDoxMDAwO1x0XHJcbn1cclxuXHJcbiNpbm5lci13aGVlbHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHQtbW96LXRyYW5zaXRpb246ICAgIGFsbCA2IGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcclxuXHQtby10cmFuc2l0aW9uOiAgICAgIGFsbCA2cyBjdWJpYy1iZXppZXIoMCwuOTksLjQ0LC45OSk7XHJcblx0LW1zLXRyYW5zaXRpb246ICAgICBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsLjk5LC40NCwuOTkpO1xyXG5cdHRyYW5zaXRpb246ICAgICAgICAgYWxsIDZzIGN1YmljLWJlemllcigwLC45OSwuNDQsLjk5KTtcdFxyXG59XHJcblxyXG4jaW5uZXItd2hlZWwgZGl2LmhvbGQge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogJERpYW1ldGVyO1xyXG4gICAgaGVpZ2h0OiAkRGlhbWV0ZXI7XHJcbiAgICBjbGlwOnJlY3QoMHB4LCREaWFtZXRlciwkRGlhbWV0ZXIsJERpYW1ldGVyLzIpO1xyXG4gICAgbGVmdDogLTdweDtcclxuICAgIHRvcDogLTlweDtcclxufVxyXG5cclxuI3doZWVsIGRpdi5zZWN7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAkRGlhbWV0ZXI7XHJcblx0aGVpZ2h0OiAkRGlhbWV0ZXI7XHJcblx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xyXG5cdC8vbGVmdDokRGlhbWV0ZXIvNDtcclxuXHQvL3RvcDokRGlhbWV0ZXIvNDtcdFxyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgY2xpcDpyZWN0KDBweCwkRGlhbWV0ZXIvMiwkRGlhbWV0ZXIsMHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6JERpYW1ldGVyOyBcclxufVxyXG5cclxuI3doZWVsIGRpdi5zZWMgc3BhbntcclxuXHRtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDAwMDAwMDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOjMwcHg7XHJcblx0bWFyZ2luLWxlZnQ6LTEyMHB4O1xyXG5cdHRleHQtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IC0xcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAwcHg7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcclxuXHQtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcclxuXHQtby10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcclxufVxyXG5cclxuI3NwaW57XHJcblx0d2lkdGg6JERpYW1ldGVyLzMuNjc2NDsgIFxyXG5cdGhlaWdodDokRGlhbWV0ZXIvMy42NzY0O1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDokRGlhbWV0ZXIqMC40NTsgIFxyXG5cdGxlZnQ6JERpYW1ldGVyKjAuNDM5O1xyXG5cdG1hcmdpbjotMzRweCAwIDAgLTM0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czo1MCU7XHJcblx0Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLDAuMSkgMHB4IDNweCAwcHg7XHJcblx0ei1pbmRleDoxMDAwO1xyXG5cdGJhY2tncm91bmQ6I2ZmZjtcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyBcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAgICBcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7ICAgICBcclxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTsgICBcclxufVxyXG5cclxuI3NwaW46YWZ0ZXJ7XHJcblx0Y29udGVudDonJztcdFxyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiREaWFtZXRlci8zLjY3NjQ7XHJcblx0Y29sb3I6I0NDQztcclxuXHR0ZXh0LXNoYWRvdzogMCAycHggMCAjZmZmLCAwIC0ycHggMCByZ2JhKDAsMCwwLDAuMykgO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAxMDAwMDA7XHJcblx0d2lkdGg6JERpYW1ldGVyLzMuNjc2NDtcclxuXHRoZWlnaHQ6JERpYW1ldGVyLzMuNjc2NDtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4jc3BpbjpiZWZvcmV7XHJcblx0Y29udGVudDpcIlwiO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMCAyMHB4IDI4cHggMjBweDtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XHJcblx0dG9wOi0kRGlhbWV0ZXIvMTcuNTsgIC8vLTIwcHhcclxuXHRsZWZ0OiREaWFtZXRlci8xMi41OyAgIC8vMjhweFxyXG59XHJcblxyXG5cclxuI2lubmVyLXNwaW57XHJcblx0XHJcblx0d2lkdGg6JERpYW1ldGVyLzQuNjI7ICAvLzU0cHhcclxuXHRoZWlnaHQ6JERpYW1ldGVyLzQuNjI7Ly81NHB4XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOiAkRGlhbWV0ZXIvOS41OyAgIC8vNTAlXHJcblx0bGVmdDokRGlhbWV0ZXIvOS41OyAgIC8vNTAlXHJcblx0bWFyZ2luOi0yN3B4IDAgMCAtMjdweDtcclxuXHRib3JkZXItcmFkaXVzOjUwJTtcclxuXHRiYWNrZ3JvdW5kOnJlZDtcclxuXHR6LWluZGV4Ojk5OTtcclxuXHRib3gtc2hhZG93OnJnYmEoMjU1LDI1NSwyNTUsMSkgMHB4IC0ycHggMHB4IGluc2V0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDBweCAycHggMHB4IGluc2V0LCAgcmdiYSgwLDAsMCwwLjQpIDBweCAwcHggNXB4IDtcclxuXHRcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyAvKiBPbGQgYnJvd3NlcnMgKi9cclxuXHRiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBGRjMuNisgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyMzQsMjM0LDIzNCwxKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXHJcblx0YmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMzQsMjM0LDIzNCwxKSAxMDAlKTsgLyogT3BlcmEgMTIrICovXHJcblx0YmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjM0LDIzNCwyMzQsMSkgMTAwJSk7IC8qIElFMTArICovXHJcblx0YmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDIzNCwyMzQsMjM0LDEpIDEwMCUpOyAvKiBXM0MgKi9cclxuXHRmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZWFlYWVhJyxHcmFkaWVudFR5cGU9MSApOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXHRcclxuXHRcclxuXHRvdmVyZmxvdzpoaWRkZW47XHJcblx0aW1nIHtcclxuXHRcdHdpZHRoOiAkRGlhbWV0ZXIvMy42NzY0O1xyXG5cdFx0aGVpZ2h0OiAkRGlhbWV0ZXIvMy42NzY0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTlweDtcclxuXHRcdGxlZnQ6IC05cHg7XHJcblx0fVxyXG5cclxufVxyXG5cclxuI3NwaW46YWN0aXZlICNpbm5lci1zcGlue1xyXG5cdGJveC1zaGFkb3c6cmdiYSgwLDAsMCwwLjQpIDBweCAwcHggNXB4IGluc2V0O1xyXG59XHJcblxyXG4jc3BpbjphY3RpdmU6YWZ0ZXJ7XHJcblx0Zm9udC1zaXplOjE1cHg7XHRcclxufVxyXG5cclxuXHJcbiNzaGluZXtcclxuXHR3aWR0aDoyNTBweDtcclxuXHRoZWlnaHQ6MjUwcHg7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjA7XHJcblx0bGVmdDowO1xyXG5cdGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC45OSkgMSUsIHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIEZGMy42KyAqL1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDElLHJnYmEoMjU1LDI1NSwyNTUsMC45OSkpLCBjb2xvci1zdG9wKDklLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyNTUsMjU1LDI1NSwwKSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTkpIDElLHJnYmEoMjU1LDI1NSwyNTUsMC45MSkgOSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cclxuYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIE9wZXJhIDEyKyAqL1xyXG5iYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIElFMTArICovXHJcbmJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyNTUsMjU1LDI1NSwwLjk5KSAxJSxyZ2JhKDI1NSwyNTUsMjU1LDAuOTEpIDklLHJnYmEoMjU1LDI1NSwyNTUsMCkgMTAwJSk7IC8qIFczQyAqL1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7IC8qIElFNi05IGZhbGxiYWNrIG9uIGhvcml6b250YWwgZ3JhZGllbnQgKi9cclxuXHJcblxyXG5vcGFjaXR5OjAuMTtcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG4vLyBhbmltYXRpb25zXHJcbkAtd2Via2l0LWtleWZyYW1lcyBoaCB7XHJcblx0MCUsIDEwMCV7XHJcblx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0fVxyXG4gIFxyXG5cdDUwJXtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcclxuXHR9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgaGgge1xyXG5cdCAwJSwgMTAwJXtcclxuXHQgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdCAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcbiAgXHJcblx0NTAle1xyXG5cdCAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XHJcblx0ICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLnNwaW4ge1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBoaCAwLjFzOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuXHQgIGFuaW1hdGlvbjogaGggMC4xcztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbi5tb2RhbC1oZWFkZXIsIC5tb2RhbC1ib2R5IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iLCIjd3JhcHBlciB7XG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XG4gIHdpZHRoOiAzNzIuNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmRpdiN3aGVlbCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMHB4IDEwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDNweCAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xufVxuXG4jd2hlZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAzMzguOHB4O1xuICBoZWlnaHQ6IDMzOC44cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuI2lubmVyLXdoZWVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNnMgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNDQsIDAuOTkpO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA2IGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDZzIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjQ0LCAwLjk5KTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG4gIHRyYW5zaXRpb246IGFsbCA2cyBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC40NCwgMC45OSk7XG59XG5cbiNpbm5lci13aGVlbCBkaXYuaG9sZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBjbGlwOiByZWN0KDBweCwgMzUwcHgsIDM1MHB4LCAxNzVweCk7XG4gIGxlZnQ6IC03cHg7XG4gIHRvcDogLTlweDtcbn1cblxuI3doZWVsIGRpdi5zZWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xuICBjbGlwOiByZWN0KDBweCwgMTc1cHgsIDM1MHB4LCAwcHgpO1xuICBib3JkZXItcmFkaXVzOiAzNTBweDtcbn1cblxuI3doZWVsIGRpdi5zZWMgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDAwMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMjBweDtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggLTFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XG59XG5cbiNzcGluIHtcbiAgd2lkdGg6IDk1LjIwMTgyNzg3NTFweDtcbiAgaGVpZ2h0OiA5NS4yMDE4Mjc4NzUxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTcuNXB4O1xuICBsZWZ0OiAxNTMuNjVweDtcbiAgbWFyZ2luOiAtMzRweCAwIDAgLTM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAzcHggMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jc3BpbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDk1LjIwMTgyNzg3NTFweDtcbiAgY29sb3I6ICNDQ0M7XG4gIHRleHQtc2hhZG93OiAwIDJweCAwICNmZmYsIDAgLTJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIHdpZHRoOiA5NS4yMDE4Mjc4NzUxcHg7XG4gIGhlaWdodDogOTUuMjAxODI3ODc1MXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3NwaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMjBweCAyOHB4IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjhweDtcbn1cblxuI2lubmVyLXNwaW4ge1xuICB3aWR0aDogNzUuNzU3NTc1NzU3NnB4O1xuICBoZWlnaHQ6IDc1Ljc1NzU3NTc1NzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2Ljg0MjEwNTI2MzJweDtcbiAgbGVmdDogMzYuODQyMTA1MjYzMnB4O1xuICBtYXJnaW46IC0yN3B4IDAgMCAtMjdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgYm94LXNoYWRvdzogd2hpdGUgMHB4IC0ycHggMHB4IGluc2V0LCB3aGl0ZSAwcHggMnB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjQpIDBweCAwcHggNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCB3aGl0ZSksIGNvbG9yLXN0b3AoMTAwJSwgI2VhZWFlYSkpO1xuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgI2VhZWFlYSAxMDAlKTtcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIE9wZXJhIDEyKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgd2hpdGUgMCUsICNlYWVhZWEgMTAwJSk7XG4gIC8qIFczQyAqL1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiNmZmZmZmZcIiwgZW5kQ29sb3JzdHI9XCIjZWFlYWVhXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2lubmVyLXNwaW4gaW1nIHtcbiAgd2lkdGg6IDk1LjIwMTgyNzg3NTFweDtcbiAgaGVpZ2h0OiA5NS4yMDE4Mjc4NzUxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOXB4O1xuICBsZWZ0OiAtOXB4O1xufVxuXG4jc3BpbjphY3RpdmUgI2lubmVyLXNwaW4ge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDBweCA1cHggaW5zZXQ7XG59XG5cbiNzcGluOmFjdGl2ZTphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI3NoaW5lIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCB3aGl0ZSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSAxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxKSA5JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHdoaXRlKSwgY29sb3Itc3RvcCgxJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5KSksIGNvbG9yLXN0b3AoOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpKTtcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3Zlciwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OSkgMSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MSkgOSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBPcGVyYSAxMisgKi9cbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHdoaXRlIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTkpIDElLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpIDklLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICAvKiBXM0MgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9XCIjZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoaCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoaCB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoN2RlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3ZGVnKTtcbiAgfVxufVxuLnNwaW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGggMC4xcztcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIGFuaW1hdGlvbjogaGggMC4xcztcbn1cblxuLm1vZGFsLWhlYWRlciwgLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"]
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
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"]
        }, {
          type: _services_header_footer_service__WEBPACK_IMPORTED_MODULE_3__["HeaderFooterService"]
        }, {
          type: _services_emails_service__WEBPACK_IMPORTED_MODULE_4__["EmailsService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _services_center_image_service__WEBPACK_IMPORTED_MODULE_5__["CenterImageService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
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