(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverDiscoverPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <!-- <ion-button (click)=\"onOpenMenu()\">\n        Open\n      </ion-button> -->\n    </ion-buttons>\n    <ion-title #welcome>Welcome {{displayName?displayName:email}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\" value=\"all\">\n    <ion-segment-button value=\"all\">All Camp Sites</ion-segment-button>\n    <ion-segment-button value=\"bookable\">Bookable Camp Sites</ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid\n    *ngIf=\"!isLoading && (!relevantPlaces || relevantPlaces.length <= 0)\"\n  >\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <p>There are no bookable camps right now, please come back later!</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle\n              >{{ relevantPlaces[0].price | currency }} /\n              Night</ion-card-subtitle\n            >\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageDataUrl\"></ion-img>\n          <ion-card-content>\n            <p>{{ relevantPlaces[0].description }}</p>\n          </ion-card-content>\n          <div>\n            <ion-button\n              fill=\"clear\"\n              color=\"primary\"\n              [routerLink]=\"[\n                '/',\n                'places',\n                'tabs',\n                'discover',\n                relevantPlaces[0].id\n              ]\"\n            >\n              More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n              <ion-list *ngIf=\"listedLoadedPlaces.length > 0\">\n              <ion-item-sliding *ngFor=\"let place of listedLoadedPlaces\" #slidingItem>\n                  <ion-item [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\">\n                      <ion-thumbnail slot=\"start\">\n                        <ion-img [src]=\"place.imageDataUrl\"></ion-img>\n                      </ion-thumbnail>\n                      <ion-label>\n                          <h2>{{ place.title }}</h2>\n                          <p>{{ place.description }}</p>\n                      </ion-label>\n                    </ion-item>\n              </ion-item-sliding>\n            </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/places/discover/discover.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/places/discover/discover.module.ts ***!
      \****************************************************/

    /*! exports provided: DiscoverPageModule */

    /***/
    function srcAppPlacesDiscoverDiscoverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function () {
        return DiscoverPageModule;
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


      var _discover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./discover.page */
      "./src/app/places/discover/discover.page.ts");

      var routes = [{
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]
      }];

      var DiscoverPageModule = function DiscoverPageModule() {
        _classCallCheck(this, DiscoverPageModule);
      };

      DiscoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_6__["DiscoverPage"]]
      })], DiscoverPageModule);
      /***/
    },

    /***/
    "./src/app/places/discover/discover.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/places/discover/discover.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesDiscoverDiscoverPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9kaXNjb3Zlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/places/discover/discover.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/places/discover/discover.page.ts ***!
      \**************************************************/

    /*! exports provided: DiscoverPage */

    /***/
    function srcAppPlacesDiscoverDiscoverPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscoverPage", function () {
        return DiscoverPage;
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


      var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../places.service */
      "./src/app/places/places.service.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../auth/auth.service */
      "./src/app/auth/auth.service.ts");

      var DiscoverPage = /*#__PURE__*/function () {
        function DiscoverPage(placesService, menuCtrl, authService) {
          _classCallCheck(this, DiscoverPage);

          this.placesService = placesService;
          this.menuCtrl = menuCtrl;
          this.authService = authService;
          this.isLoading = false;
          this.filter = 'all';
        }

        _createClass(DiscoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userSub = this.authService.user.subscribe(function (user) {
              if (user) {
                _this.displayName = user.displayName;
                _this.email = user.email;
                console.log(user);
                _this.placesSub = _this.placesService.places.subscribe(function (places) {
                  _this.loadedPlaces = places;

                  if (_this.filter === 'all') {
                    _this.relevantPlaces = _this.loadedPlaces;
                    _this.listedLoadedPlaces = _this.relevantPlaces.slice(1);
                  } else {
                    _this.relevantPlaces = _this.loadedPlaces.filter(function (place) {
                      return place.userId !== user.id;
                    });
                    _this.listedLoadedPlaces = _this.relevantPlaces.slice(1);
                  }

                  console.log(_this.listedLoadedPlaces);
                });
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.isLoading = true;
            this.placesService.fetchPlaces().subscribe(function () {
              _this2.isLoading = false;
            });
          }
        }, {
          key: "onOpenMenu",
          value: function onOpenMenu() {
            this.menuCtrl.toggle();
          }
        }, {
          key: "onFilterUpdate",
          value: function onFilterUpdate(event) {
            var _this3 = this;

            this.authService.userId.subscribe(function (userId) {
              _this3.filter = event.detail.value;

              if (_this3.filter === 'all') {
                _this3.relevantPlaces = _this3.loadedPlaces;
                _this3.listedLoadedPlaces = _this3.relevantPlaces.slice(1);
              } else {
                _this3.relevantPlaces = _this3.loadedPlaces.filter(function (place) {
                  return place.userId !== userId;
                });
                _this3.listedLoadedPlaces = _this3.relevantPlaces.slice(1);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.userSub) {
              this.userSub.unsubscribe();
            }

            if (this.placesSub) {
              this.placesSub.unsubscribe();
            }
          }
        }]);

        return DiscoverPage;
      }();

      DiscoverPage.ctorParameters = function () {
        return [{
          type: _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      DiscoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./discover.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/discover.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./discover.page.scss */
        "./src/app/places/discover/discover.page.scss"))["default"]]
      })], DiscoverPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=discover-discover-module-es5.js.map