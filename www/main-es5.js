(function () {
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
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          CampBnB\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item lines=\"none\" routerLink=\"/places/tabs/discover\">\n            <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n            <ion-label>Discover Camps</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item lines=\"none\" routerLink=\"/bookings\">\n            <ion-icon name=\"checkbox-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Your Bookings</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item lines=\"none\" routerLink=\"/account\">\n            <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Your Account</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle *ngIf=\"isAdmin\">\n          <ion-item lines=\"none\" routerLink=\"/admin\">\n            <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Admin Panel</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item lines=\"none\" (click)=\"onLogout()\" button>\n            <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\n            <ion-label>Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedMapModalMapModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-title>{{ title }}</ion-title>\n      <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"onCancel()\">{{closeButtonText}}</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div class=\"map\" #map></div>\n  </ion-content>\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedPickersImagePickerImagePickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"picker\">\n  <!-- <ion-img class=\"location-image\" [src]=\"selectedLocationImage\" (click)=\"onPickLocation()\" *ngIf=\"selectedImage\"></ion-img> -->\n  <ion-img\n    role=\"button\"\n    class=\"image\"\n    (click)=\"onPickImage()\"\n    [src]=\"selectedImage\"\n    *ngIf=\"selectedImage\"\n    width=\"80\" height=\"80\"\n  ></ion-img>\n  <ion-button\n    *ngIf=\"!selectedImage\"\n    color=\"primary\"\n    (click)=\"onPickImage()\"\n  >\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>Upload/Take Picture</ion-label>\n  </ion-button>\n</div>\n<input type=\"file\" #filePicker (change)=\"onFileChosen($event)\"/>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedPickersLocationPickerLocationPickerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"picker\">\n  <ion-spinner color=\"primary\" *ngIf=\"isLoading\"></ion-spinner>\n  <ion-img class=\"location-image\" [src]=\"selectedLocationImage\" (click)=\"onPickLocation()\" *ngIf=\"selectedLocationImage\"></ion-img>\n  <ion-button color=\"primary\" (click)=\"onPickLocation()\" *ngIf=\"!isLoading && !selectedLocationImage\">\n    <ion-icon name=\"map\" slot=\"start\"></ion-icon>\n    <ion-label>Select Location</ion-label>\n  </ion-button>\n</div>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/admin.guard */
      "./src/app/auth/admin.guard.ts");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "./src/app/auth/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'places',
        pathMatch: 'full'
      }, {
        path: 'auth',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthPageModule;
          });
        }
      }, {
        path: 'places',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | places-places-module */
          "places-places-module").then(__webpack_require__.bind(null,
          /*! ./places/places.module */
          "./src/app/places/places.module.ts")).then(function (m) {
            return m.PlacesPageModule;
          });
        },
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'bookings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | bookings-bookings-module */
          [__webpack_require__.e("default~bookings-bookings-module~discover-place-detail-place-detail-module"), __webpack_require__.e("bookings-bookings-module")]).then(__webpack_require__.bind(null,
          /*! ./bookings/bookings.module */
          "./src/app/bookings/bookings.module.ts")).then(function (m) {
            return m.BookingsPageModule;
          });
        },
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ./account/account.module */
          "./src/app/account/account.module.ts")).then(function (m) {
            return m.AccountPageModule;
          });
        },
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admin-admin-module */
          "admin-admin-module").then(__webpack_require__.bind(null,
          /*! ./admin/admin.module */
          "./src/app/admin/admin.module.ts")).then(function (m) {
            return m.AdminPageModule;
          });
        },
        canLoad: [_auth_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/auth.service */
      "./src/app/auth/auth.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, authService, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.authService = authService;
          this.router = router;
          this.previousAuthState = false;
          this.isAdmin = false;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            this.platform.ready().then(function () {
              if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Capacitor"].isPluginAvailable('SplashScreen')) {
                _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].SplashScreen.hide();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("authorized: ");
            this.authSub = this.authService.userIsAuthenticated.subscribe(function (isAuth) {
              console.log(isAuth);

              if (!isAuth && _this.previousAuthState !== isAuth) {
                _this.router.navigateByUrl('/auth');
              }

              _this.previousAuthState = isAuth;
            });
            this.adminSub = this.authService.userIsAdmin.subscribe(function (isAdmin) {
              _this.isAdmin = isAdmin;
            });
            this.authService.checkUserIsAdmin().subscribe(function (isAdmin) {
              _this.isAdmin = isAdmin;
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authService.logout();
            this.isAdmin = null;
            this.router.navigateByUrl('/auth');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.authSub) {
              this.authSub.unsubscribe();
            }

            if (this.adminSub) {
              this.adminSub.unsubscribe();
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
      })], AppComponent);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/auth/admin.guard.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/admin.guard.ts ***!
      \*************************************/

    /*! exports provided: AdminGuard */

    /***/
    function srcAppAuthAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(authService, router) {
          _classCallCheck(this, AdminGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AdminGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            var _this2 = this;

            return this.authService.checkUserIsAdmin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (isAdmin) {
              if (!isAdmin) {
                _this2.router.navigateByUrl('/places/tabs/discover');
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isAdmin);
              }
            }));
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminGuard);
      /***/
    },

    /***/
    "./src/app/auth/auth.guard.ts":
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canLoad",
          value: function canLoad(route, segments) {
            var _this3 = this;

            return this.authService.userIsAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (isAuthenticated) {
              if (!isAuthenticated) {
                return _this3.authService.autoLogin();
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(isAuthenticated);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (isAuthenticated) {
              if (!isAuthenticated) {
                _this3.router.navigateByUrl('/auth');
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/auth/auth.service.ts":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user.model */
      "./src/app/auth/user.model.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this._user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this._adminUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this._userIsAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        }

        _createClass(AuthService, [{
          key: "checkUserIsAdmin",
          value: function checkUserIsAdmin() {
            var _this4 = this;

            var tempAdminUsers;
            return this.fetchAdminUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (adminUsers) {
              tempAdminUsers = adminUsers;
              return _this4.userId;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userId) {
              if (tempAdminUsers[userId]) {
                return true;
              } else {
                return false;
              }
            }));
          }
        }, {
          key: "autoLogin",
          value: function autoLogin() {
            var _this5 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage.get({
              key: 'authData'
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (storedData) {
              if (!storedData || !storedData.value) {
                return null;
              }

              var parsedData = JSON.parse(storedData.value);
              var expirationTime = new Date(parsedData.tokenExpirationDate);

              if (expirationTime <= new Date()) {
                return null;
              }

              var user = new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](parsedData.userId, parsedData.displayName, parsedData.email, parsedData.token, expirationTime, parsedData.idToken);
              return user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
              if (user) {
                _this5._user.next(user);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              return !!user;
            }));
          }
        }, {
          key: "signup",
          value: function signup(email, password, displayName) {
            return this.http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey), {
              email: email,
              password: password,
              displayName: displayName,
              returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.setUserData.bind(this)));
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, displayName, email, password, photoUrl) {
            if (password && password != "") {
              return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey), {
                idToken: id,
                displayName: displayName,
                photoUrl: photoUrl,
                email: email,
                password: password,
                returnSecureToken: true
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.logout.bind(this)));
            }

            return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey), {
              idToken: id,
              displayName: displayName,
              photoUrl: photoUrl,
              email: email,
              returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.logout.bind(this)));
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:update?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey), {
              idToken: id
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this6 = this;

            var userId;
            return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseAPIKey), {
              email: email,
              password: password,
              returnSecureToken: true
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(this.setUserData.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              userId = user.localId;
              return _this6.fetchAdminUsers();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (adminUsers) {
              _this6._userIsAdmin.next(userId in adminUsers);
            }));
          }
        }, {
          key: "makeUserAdmin",
          value: function makeUserAdmin(userId) {
            var _this7 = this;

            var name;
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseUrl, "/adminUsers.json"), {
              id: userId
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
              name = res['name'];
              return _this7.adminUsers;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (adminUsers) {
              adminUsers[userId] = name;

              _this7._adminUsers.next(adminUsers);
            }));
          }
        }, {
          key: "deleteUserAdmin",
          value: function deleteUserAdmin(userId, docId) {
            var _this8 = this;

            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseUrl, "/adminUsers/").concat(docId, ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
              return _this8.adminUsers;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (adminUsers) {
              delete adminUsers[userId];

              _this8._adminUsers.next(adminUsers);
            }));
          }
        }, {
          key: "fetchAdminUsers",
          value: function fetchAdminUsers() {
            var _this9 = this;

            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseUrl, "/adminUsers.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resData) {
              var adminUsers = {};

              for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                  adminUsers[resData[key]['id']] = key;
                }
              }

              return adminUsers;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (adminUsers) {
              _this9._adminUsers.next(adminUsers);
            }));
          }
        }, {
          key: "setUserData",
          value: function setUserData(resData) {
            console.log(resData);
            var expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);

            this._user.next(new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](resData.localId, resData.displayName, resData.email, resData.refreshToken, expirationDate, resData.idToken));

            this.StoreAuthData(resData.localId, resData.displayName, resData.refreshToken, expirationDate.toISOString(), resData.email, resData.idToken);
            return resData.localId;
          }
        }, {
          key: "logout",
          value: function logout() {
            if (this.activeLogoutTimer) {
              clearTimeout(this.activeLogoutTimer);
            }

            this._user.next(null);

            this._adminUsers.next(null);

            _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage.remove({
              key: 'authData'
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.activeLogoutTimer) {
              clearTimeout(this.activeLogoutTimer);
            }
          }
        }, {
          key: "StoreAuthData",
          value: function StoreAuthData(userId, displayName, token, tokenExpirationDate, email, idToken) {
            var data = JSON.stringify({
              userId: userId,
              displayName: displayName,
              token: token,
              tokenExpirationDate: tokenExpirationDate,
              email: email,
              idToken: idToken
            });

            _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage.set({
              key: 'authData',
              value: data
            });
          }
        }, {
          key: "userIsAdmin",
          get: function get() {
            return this._userIsAdmin.asObservable();
          }
        }, {
          key: "userIsAuthenticated",
          get: function get() {
            return this._user.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              if (user) {
                return !!user.token;
              } else {
                return false;
              }
            }));
          }
        }, {
          key: "userId",
          get: function get() {
            return this._user.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              if (user) {
                return user.id;
              } else {
                return null;
              }
            }));
          }
        }, {
          key: "user",
          get: function get() {
            return this._user.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              if (user) {
                return user;
              } else {
                return null;
              }
            }));
          }
        }, {
          key: "adminUsers",
          get: function get() {
            return this._adminUsers.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (adminUsers) {
              if (adminUsers) {
                return adminUsers;
              } else {
                return null;
              }
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/auth/user.model.ts":
    /*!************************************!*\
      !*** ./src/app/auth/user.model.ts ***!
      \************************************/

    /*! exports provided: User */

    /***/
    function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = /*#__PURE__*/function () {
        function User(id, displayName, email, _token, tokenExpirationDate, idToken) {
          _classCallCheck(this, User);

          this.id = id;
          this.displayName = displayName;
          this.email = email;
          this._token = _token;
          this.tokenExpirationDate = tokenExpirationDate;
          this.idToken = idToken;
        }

        _createClass(User, [{
          key: "token",
          get: function get() {
            if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
              return null;
            }

            return this._token;
          }
        }]);

        return User;
      }();
      /***/

    },

    /***/
    "./src/app/shared/map-modal/map-modal.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/shared/map-modal/map-modal.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedMapModalMapModalComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n}\n\n.map.visit {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBSUEsVUFBQTtBQUZKOztBQU1BO0VBQ0ksVUFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21hcC1tb2RhbC9tYXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBvcGFjaXR5OiAxO1xuICAgIC8vIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLm1hcC52aXNpdCB7XG4gICAgb3BhY2l0eTogMVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/shared/map-modal/map-modal.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/map-modal/map-modal.component.ts ***!
      \*********************************************************/

    /*! exports provided: MapModalComponent */

    /***/
    function srcAppSharedMapModalMapModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModalComponent", function () {
        return MapModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _map_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./map-modal.service */
      "./src/app/shared/map-modal/map-modal.service.ts");

      var MapModalComponent = /*#__PURE__*/function () {
        function MapModalComponent(modalCtrl, renderer, mapModalService) {
          _classCallCheck(this, MapModalComponent);

          this.modalCtrl = modalCtrl;
          this.renderer = renderer;
          this.mapModalService = mapModalService;
          this.selectable = true;
          this.closeButtonText = "cancel";
          this.title = "Pick Location";
        }

        _createClass(MapModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this10 = this;

            this.mapModalService.getGoogleGeoLocation().subscribe(function (resData) {
              if (!_this10.center) {
                if (!resData && !resData['location']) {
                  console.error('Cannot get current location');
                  return;
                }

                _this10.center = resData['location'];
              }

              console.log(resData);

              _this10.getGoogleMaps().then(function (googleMaps) {
                var mapEl = _this10.mapElementRef.nativeElement;
                var map = new googleMaps.Map(mapEl, {
                  center: _this10.center,
                  zoom: 16
                });
                _this10.googleMaps = googleMaps.event.addListenerOnce(map, 'idle', function () {
                  _this10.renderer.addClass(mapEl, 'visible');
                });

                if (_this10.selectable) {
                  _this10.clickListener = map.addListener('click', function (event) {
                    _this10.center = {
                      lat: event.latLng.lat(),
                      lng: event.latLng.lng()
                    };

                    _this10.modalCtrl.dismiss(_this10.center);
                  });
                } else {}

                var marker = new googleMaps.Marker({
                  position: _this10.center,
                  map: map,
                  title: 'Picked Location'
                });
                marker.setMap(map);
              })["catch"](function (err) {
                console.log(err);
              });
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.modalCtrl.dismiss(this.center);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.googleMaps && this.googleMaps.event && this.clickListener) {
              this.googleMaps.event.removeListener(this.clickListener);
            }

            ;
          }
        }, {
          key: "getGoogleMaps",
          value: function getGoogleMaps() {
            var win = window;
            var googleModule = win.google;

            if (googleModule && googleModule.maps) {
              return Promise.resolve(googleModule.maps);
            }

            return new Promise(function (resolve, reject) {
              var script = document.createElement('script');
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleMapsAPIKey;
              script.async = true;
              script.defer = true;
              document.body.appendChild(script);

              script.onload = function () {
                var loadedGoogleModule = win.google;

                if (loadedGoogleModule && loadedGoogleModule.maps) {
                  resolve(loadedGoogleModule.maps);
                } else {
                  reject('Google maps sdk not available.');
                }
              };
            });
          }
        }]);

        return MapModalComponent;
      }();

      MapModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _map_modal_service__WEBPACK_IMPORTED_MODULE_4__["MapModalService"]
        }];
      };

      MapModalComponent.propDecorators = {
        mapElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['map', {
            "static": null
          }]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        closeButtonText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MapModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./map-modal.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/map-modal/map-modal.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./map-modal.component.scss */
        "./src/app/shared/map-modal/map-modal.component.scss"))["default"]]
      })], MapModalComponent);
      /***/
    },

    /***/
    "./src/app/shared/map-modal/map-modal.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/map-modal/map-modal.service.ts ***!
      \*******************************************************/

    /*! exports provided: MapModalService */

    /***/
    function srcAppSharedMapModalMapModalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapModalService", function () {
        return MapModalService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var MapModalService = /*#__PURE__*/function () {
        function MapModalService(http, alertCtrl) {
          _classCallCheck(this, MapModalService);

          this.http = http;
          this.alertCtrl = alertCtrl;
          this.geoLocationReqBody = {
            "considerIp": "true",
            "wifiAccessPoints": [{
              "macAddress": "dc:a9:04:83:36:9c",
              "signalStrength": -43,
              "signalToNoiseRatio": 0
            }]
          };
        }

        _createClass(MapModalService, [{
          key: "getGoogleGeoLocation",
          value: function getGoogleGeoLocation() {
            return this.http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].googleMapsAPIKey), Object.assign({}, this.geoLocationReqBody));
          } // getGeoLocation(): Coordinates {
          //     if (!Capacitor.isPluginAvailable('GeoLocation')) {
          //       this.alertCtrl.create({header: "Location Unavaiable", message: "GeoLocation is not available"});
          //       return;
          //     }
          //     const coordinates: Coordinates = Plugins.GeoLocation.getCurrentLocation().then((geoPosition) => {
          //       return {
          //         lat: geoPosition.coords.latitude,
          //         lng: geoPosition.coords.longitude
          //       };
          //     }).catch(err => {
          //       this.alertCtrl.create({header: "Location Error", message: "Error fetching Location"});
          //       console.error(err);
          //     });
          //     return coordinates;
          //   }

        }, {
          key: "getAddress",
          value: function getAddress(coord) {
            return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(coord.lat, ",").concat(coord.lng, "&key=").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].googleMapsAPIKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (geoData) {
              if (!geoData || !geoData.results || geoData.results.length === 0) {
                return;
              } else {
                return geoData.results[0].formatted_address;
              }
            }));
          }
        }, {
          key: "getStaticMapImageURL",
          value: function getStaticMapImageURL(lat, lng, zoom) {
            return "https://maps.googleapis.com/maps/api/staticmap?center=".concat(lat, ",").concat(lng, "&zoom=").concat(zoom, "&size=500x300&maptype=roadmap&markers=color:red%7Clabel:S%7C").concat(lat, ",").concat(lng, "&key=").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].googleMapsAPIKey);
          }
        }]);

        return MapModalService;
      }();

      MapModalService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      MapModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MapModalService);
      /***/
    },

    /***/
    "./src/app/shared/pickers/image-picker/image-picker.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedPickersImagePickerImagePickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input[type=file] {\n  display: none;\n}\n\n.picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL2ltYWdlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9J2ZpbGUnXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnBpY2tlcntcbiAgICB3aWR0aDogMzByZW07XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgICBtYXgtaGVpZ2h0OiAzMHZoO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/shared/pickers/image-picker/image-picker.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ImagePickerComponent */

    /***/
    function srcAppSharedPickersImagePickerImagePickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function () {
        return ImagePickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var ImagePickerComponent = /*#__PURE__*/function () {
        function ImagePickerComponent(platform, actionSheetCtrl) {
          _classCallCheck(this, ImagePickerComponent);

          this.platform = platform;
          this.actionSheetCtrl = actionSheetCtrl;
          this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.usePicker = true;
        }

        _createClass(ImagePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.platform.is("mobile") || this.platform.is("hybrid") || this.platform.is("desktop")) {
              this.usePicker = true;
              console.log(this.selectedImage);
            }
          }
        }, {
          key: "onFileChosen",
          value: function onFileChosen($event) {
            var _this11 = this;

            var pickedFile = $event.target.files[0];

            if (!pickedFile) {
              return;
            }

            var fr = new FileReader();

            fr.onload = function () {
              var dataUrl = fr.result.toString();
              _this11.selectedImage = dataUrl;

              _this11.imagePick.emit(dataUrl);
            };

            fr.readAsDataURL(pickedFile);
          }
        }, {
          key: "onPickImage",
          value: function onPickImage() {
            var _this12 = this;

            this.actionSheetCtrl.create({
              header: 'Choose an Action',
              buttons: [{
                text: 'Choose from file',
                handler: function handler() {
                  _this12.filePicker.nativeElement.click();

                  return;
                }
              }, {
                text: 'Take Picture',
                handler: function handler() {
                  _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Camera.getPhoto({
                    quality: 50,
                    source: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt,
                    correctOrientation: true,
                    height: 320,
                    width: 200,
                    resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].DataUrl
                  }).then(function (image) {
                    _this12.selectedImage = image.dataUrl;

                    _this12.imagePick.emit(image.dataUrl);
                  })["catch"](function (error) {
                    if (_this12.usePicker) {
                      _this12.filePicker.nativeElement.click();
                    }

                    return false;
                  });
                }
              }, {
                text: 'Cancel',
                role: 'cancel'
              }]
            }).then(function (actionSheetEl) {
              actionSheetEl.present();
            });
          }
        }]);

        return ImagePickerComponent;
      }();

      ImagePickerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }];
      };

      ImagePickerComponent.propDecorators = {
        filePicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['filePicker', {
            "static": false
          }]
        }],
        imagePick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        selectedImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ImagePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/image-picker/image-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image-picker.component.scss */
        "./src/app/shared/pickers/image-picker/image-picker.component.scss"))["default"]]
      })], ImagePickerComponent);
      /***/
    },

    /***/
    "./src/app/shared/pickers/location-picker/location-picker.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/shared/pickers/location-picker/location-picker.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedPickersLocationPickerLocationPickerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  border: 1px solid var(--ion-color-primary);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.location-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvbG9jYXRpb24tcGlja2VyL2xvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWNrZXJ7XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGhlaWdodDogMjByZW07XG4gICAgbWF4LWhlaWdodDogMzB2aDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG59XG5cbi5sb2NhdGlvbi1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/shared/pickers/location-picker/location-picker.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/pickers/location-picker/location-picker.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LocationPickerComponent */

    /***/
    function srcAppSharedPickersLocationPickerLocationPickerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPickerComponent", function () {
        return LocationPickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../map-modal/map-modal.component */
      "./src/app/shared/map-modal/map-modal.component.ts");
      /* harmony import */


      var _map_modal_map_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../map-modal/map-modal.service */
      "./src/app/shared/map-modal/map-modal.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var LocationPickerComponent = /*#__PURE__*/function () {
        function LocationPickerComponent(modalCtrl, mapModalService, actionSheetCtrl, alertCtrl) {
          _classCallCheck(this, LocationPickerComponent);

          this.modalCtrl = modalCtrl;
          this.mapModalService = mapModalService;
          this.actionSheetCtrl = actionSheetCtrl;
          this.alertCtrl = alertCtrl;
          this.locationPick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.pickedLocation = {
            address: null,
            staticMapImageUrl: null,
            lat: null,
            lng: null
          };
          this.isLoading = false;
        }

        _createClass(LocationPickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPickLocation",
          value: function onPickLocation() {
            var _this13 = this;

            this.actionSheetCtrl.create({
              header: 'Please Choose',
              buttons: [{
                text: 'Auto-Locate',
                handler: function handler() {
                  _this13.locateUsers();
                }
              }, {
                text: 'Pick on Map',
                handler: function handler() {
                  _this13.openMap();
                }
              }, {
                text: 'cancel',
                role: 'cancel'
              }]
            }).then(function (actionSheetEl) {
              actionSheetEl.present();
            });
          }
        }, {
          key: "locateUsers",
          value: function locateUsers() {
            var _this14 = this;

            this.mapModalService.getGoogleGeoLocation().subscribe(function (geoPosition) {
              if (!geoPosition && !geoPosition['location']) {
                _this14.alertCtrl.create({
                  header: "Location Error",
                  message: "Error fetching Location"
                }).then(function (alertEl) {
                  alertEl.present();
                });

                return;
              }

              _this14.pickedLocation.lat = geoPosition['location'].lat;
              _this14.pickedLocation.lng = geoPosition['location'].lng;

              _this14.mapModalService.getAddress(_this14.pickedLocation).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (address) {
                _this14.pickedLocation.address = address;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this14.mapModalService.getStaticMapImageURL(_this14.pickedLocation.lat, _this14.pickedLocation.lng, 14));
              })).subscribe(function (staticImageUrl) {
                _this14.pickedLocation.staticMapImageUrl = staticImageUrl;
                _this14.selectedLocationImage = staticImageUrl;
                _this14.isLoading = false;

                _this14.locationPick.emit(_this14.pickedLocation);
              });
            });
          }
        }, {
          key: "openMap",
          value: function openMap() {
            var _this15 = this;

            this.modalCtrl.create({
              component: _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_3__["MapModalComponent"]
            }).then(function (modalEl) {
              modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData || !modalData.data) {
                  return;
                }

                _this15.pickedLocation = {
                  lat: modalData.data.lat,
                  lng: modalData.data.lng,
                  address: null,
                  staticMapImageUrl: null
                };
                _this15.isLoading = true;

                _this15.mapModalService.getAddress(modalData.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (address) {
                  _this15.pickedLocation.address = address;
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_this15.mapModalService.getStaticMapImageURL(_this15.pickedLocation.lat, _this15.pickedLocation.lng, 14));
                })).subscribe(function (staticImageUrl) {
                  _this15.pickedLocation.staticMapImageUrl = staticImageUrl;
                  _this15.selectedLocationImage = staticImageUrl;
                  _this15.isLoading = false;

                  _this15.locationPick.emit(_this15.pickedLocation);
                });
              });
              modalEl.present();
            });
          }
        }]);

        return LocationPickerComponent;
      }();

      LocationPickerComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _map_modal_map_modal_service__WEBPACK_IMPORTED_MODULE_4__["MapModalService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      LocationPickerComponent.propDecorators = {
        locationPick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        selectedLocationImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      LocationPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-picker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location-picker.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pickers/location-picker/location-picker.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location-picker.component.scss */
        "./src/app/shared/pickers/location-picker/location-picker.component.scss"))["default"]]
      })], LocationPickerComponent);
      /***/
    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pickers/location-picker/location-picker.component */
      "./src/app/shared/pickers/location-picker/location-picker.component.ts");
      /* harmony import */


      var _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-modal/map-modal.component */
      "./src/app/shared/map-modal/map-modal.component.ts");
      /* harmony import */


      var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pickers/image-picker/image-picker.component */
      "./src/app/shared/pickers/image-picker/image-picker.component.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        declarations: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]],
        exports: [_pickers_location_picker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__["LocationPickerComponent"], _map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapModalComponent"], _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_6__["ImagePickerComponent"]]
      })], SharedModule);
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
        production: false,
        googleMapsAPIKey: 'AIzaSyDMqXL534Jdd0JTcpdJRQNr1gFpjpR_pes',
        firebaseAPIKey: 'AIzaSyBisUq3FML1Kazn-H-JVJ46y_iC9ZPprMI',
        firebaseUrl: 'https://teak-mantis-271722.firebaseio.com/'
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


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
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
      /*! /Users/shirleyxia/Projects/bookplaces2/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map