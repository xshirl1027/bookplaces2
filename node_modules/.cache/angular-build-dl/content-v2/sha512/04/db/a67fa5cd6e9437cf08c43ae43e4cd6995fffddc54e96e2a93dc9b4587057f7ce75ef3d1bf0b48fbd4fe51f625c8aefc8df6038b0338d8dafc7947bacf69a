(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isLogin ? 'Login' : 'Signup' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf='isLogin' id=signIn>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">E-Mail</ion-label>\n              <ion-input\n                type=\"email\"\n                ngModel\n                name=\"email\"\n                required\n                email\n                #emailCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!emailCtrl.valid && emailCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Should be a valid email address.\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                type=\"password\"\n                ngModel\n                name=\"password\"\n                required\n                minlength=\"6\"\n                #passwordCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Should at least be 6 characters long.\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button \n          type=\"button\" \n          color=\"primary\" \n          fill=\"clear\" \n          expand=\"block\"\n          (click)=\"onSwitchAuthMode()\">\n            Switch to {{ !isLogin ? 'Login' : 'Signup' }}\n          </ion-button>\n          <ion-button\n            type=\"submit\"\n            color=\"primary\"\n            expand=\"block\"\n            [disabled]=\"!f.valid\"\n          >\n          Login \n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" *ngIf='!isLogin' id='signup'>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input\n                type=\"Username\"\n                ngModel\n                name=\"username\"\n                required\n                username\n                #usernameCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!usernameCtrl.valid && usernameCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Should be a valid username.\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">E-Mail</ion-label>\n              <ion-input\n                type=\"email\"\n                ngModel\n                name=\"email\"\n                required\n                email\n                #emailCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!emailCtrl.valid && emailCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Should be a valid email address.\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input\n                type=\"password\"\n                ngModel\n                name=\"password\"\n                required\n                minlength=\"6\"\n                #passwordCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n            <ion-item\n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Should at least be 6 characters long.\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button \n          type=\"button\" \n          color=\"primary\" \n          fill=\"clear\" \n          expand=\"block\"\n          (click)=\"onSwitchAuthMode()\">\n            Switch to Login\n          </ion-button>\n          <ion-button\n            type=\"submit\"\n            color=\"primary\"\n            expand=\"block\"\n            [disabled]=\"!f.valid\"\n          >\n            Signup\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/auth/auth.module.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthPageModule */

    /***/
    function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
        return AuthPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.page */
      "./src/app/auth/auth.page.ts");

      var routes = [{
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
      }];

      var AuthPageModule = function AuthPageModule() {
        _classCallCheck(this, AuthPageModule);
      };

      AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
      })], AuthPageModule);
      /***/
    },

    /***/
    "./src/app/auth/auth.page.scss":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/auth/auth.page.ts":
    /*!***********************************!*\
      !*** ./src/app/auth/auth.page.ts ***!
      \***********************************/

    /*! exports provided: AuthPage */

    /***/
    function srcAppAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
        return AuthPage;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/auth/auth.service.ts");

      var AuthPage = /*#__PURE__*/function () {
        function AuthPage(authService, router, loadingCtrl, alertCtrl) {
          _classCallCheck(this, AuthPage);

          this.authService = authService;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl; // @ViewChild('f2', { static: false }) form2: NgForm;

          this.isLoading = false;
          this.isLogin = true;
          this.isLogin = true;
        }

        _createClass(AuthPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showAlert",
          value: function showAlert(header, message) {
            this.alertCtrl.create({
              header: header,
              message: message,
              buttons: ['okay']
            }).then(function (ctrl) {
              ctrl.present();
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin(email, password, displayName) {
            var _this = this;

            this.isLoading = true;
            this.loadingCtrl.create({
              keyboardClose: true,
              message: 'Logging in...'
            }).then(function (loadingEl) {
              loadingEl.present();
              console.log(_this.isLogin);
              var authObs;

              if (_this.isLogin) {
                authObs = _this.authService.login(email, password);
              } else {
                authObs = _this.authService.signup(email, password, displayName);
              }

              authObs.subscribe(function (resData) {
                _this.isLoading = false;
                loadingEl.dismiss();

                if (_this.isLogin) {
                  _this.router.navigateByUrl('/places/tabs/discover');
                } else {
                  var header = 'Sign up Successful';
                  var message = 'Back to login page';

                  _this.showAlert(header, message);

                  _this.isLogin = !_this.isLogin;
                }
              }, function (error) {
                var header = "Authentication failed";
                loadingEl.dismiss();
                var code = error.error.error.message;
                var message = 'could not sign up, please try again';
                console.log(code);

                if (code === 'EMAIL_EXISTS') {
                  message = 'this email already exists';
                }

                if (code === 'EMAIL_NOT_FOUND') {
                  message = 'this email has not been registered';
                }

                if (code === 'INVALID_PASSWORD') {
                  message = 'this password is invalid';
                }

                _this.showAlert(header, message);
              });
            });
          }
        }, {
          key: "onSwitchAuthMode",
          value: function onSwitchAuthMode() {
            this.isLogin = !this.isLogin;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            if (!form.valid) {
              return;
            }

            var email = form.value.email;
            var password = form.value.password;

            if (!this.isLogin) {
              var displayName = form.value.username;
              this.onLogin(email, password, displayName);
            } else {
              this.onLogin(email, password);
            }
          }
        }]);

        return AuthPage;
      }();

      AuthPage.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      AuthPage.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['f', {
            "static": false
          }]
        }]
      };
      AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./auth.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./auth.page.scss */
        "./src/app/auth/auth.page.scss"))["default"]]
      })], AuthPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map