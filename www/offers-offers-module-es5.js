(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOfferItemOfferItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imageDataUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{ offer.title }}</h1>\n    <div class=\"offer-details\">\n      <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{\n        offer.availableFrom | date\n      }}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" class=\"space-left\" color=\"primary\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{\n        offer.availableTo | date\n      }}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n          <ion-spinner color=\"primary\"></ion-spinner>\n        </div>\n        <div class=\"ion-text-center\" *ngIf=\"!isLoading && offers && offers.length <= 0\">\n          <p>No offers found! Please create one first!</p>\n          <ion-button color=\"primary\" routerLink=\"/places/tabs/offers/new\"\n            >Offer New Place</ion-button\n          >\n        </div>\n        <ion-list *ngIf=\"!isLoading && offers && offers.length > 0\">\n          <ion-item-sliding *ngFor=\"let offer of offers\" #slidingItem>\n            <app-offer-item [offer]=\"offer\"></app-offer-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option\n                color=\"primary\"\n                (click)=\"onDelete(offer.id, slidingItem)\"\n              >\n              <ion-icon name=\"trash\"  slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              <ion-item-option\n                color=\"secondary\"\n                (click)=\"onEdit(offer.id, slidingItem)\"\n              >\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/places/offers/offer-item/offer-item.component.scss":
    /*!********************************************************************!*\
      !*** ./src/app/places/offers/offer-item/offer-item.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesOffersOfferItemOfferItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-primary);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-primary);\n}\n\n.offer-details {\n  display: flex;\n  align-items: center;\n}\n\n.offer-details .space-left {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL29mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGxhY2VzL29mZmVycy9vZmZlci1pdGVtL29mZmVyLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm9mZmVyLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5zcGFjZS1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/places/offers/offer-item/offer-item.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/places/offers/offer-item/offer-item.component.ts ***!
      \******************************************************************/

    /*! exports provided: OfferItemComponent */

    /***/
    function srcAppPlacesOffersOfferItemOfferItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OfferItemComponent", function () {
        return OfferItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OfferItemComponent = /*#__PURE__*/function () {
        function OfferItemComponent() {
          _classCallCheck(this, OfferItemComponent);
        }

        _createClass(OfferItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OfferItemComponent;
      }();

      OfferItemComponent.ctorParameters = function () {
        return [];
      };

      OfferItemComponent.propDecorators = {
        offer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      OfferItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offer-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./offer-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offer-item/offer-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./offer-item.component.scss */
        "./src/app/places/offers/offer-item/offer-item.component.scss"))["default"]]
      })], OfferItemComponent);
      /***/
    },

    /***/
    "./src/app/places/offers/offers.module.ts":
    /*!************************************************!*\
      !*** ./src/app/places/offers/offers.module.ts ***!
      \************************************************/

    /*! exports provided: OffersPageModule */

    /***/
    function srcAppPlacesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
        return OffersPageModule;
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


      var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./offers.page */
      "./src/app/places/offers/offers.page.ts");
      /* harmony import */


      var _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./offer-item/offer-item.component */
      "./src/app/places/offers/offer-item/offer-item.component.ts");

      var routes = [{
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]
      }];

      var OffersPageModule = function OffersPageModule() {
        _classCallCheck(this, OffersPageModule);
      };

      OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"], _offer_item_offer_item_component__WEBPACK_IMPORTED_MODULE_7__["OfferItemComponent"]]
      })], OffersPageModule);
      /***/
    },

    /***/
    "./src/app/places/offers/offers.page.scss":
    /*!************************************************!*\
      !*** ./src/app/places/offers/offers.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesOffersOffersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/places/offers/offers.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/places/offers/offers.page.ts ***!
      \**********************************************/

    /*! exports provided: OffersPage */

    /***/
    function srcAppPlacesOffersOffersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
        return OffersPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../places.service */
      "./src/app/places/places.service.ts");
      /* harmony import */


      var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/auth/auth.service */
      "./src/app/auth/auth.service.ts");

      var OffersPage = /*#__PURE__*/function () {
        function OffersPage(placesService, router, authService, loadingCtrl, alertCtrl) {
          _classCallCheck(this, OffersPage);

          this.placesService = placesService;
          this.router = router;
          this.authService = authService;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.isLoading = false;
        }

        _createClass(OffersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.userId.subscribe(function (userId) {
              _this.placesSub = _this.placesService.places.subscribe(function (places) {
                _this.offers = places;
              });
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.isLoading = true;
            this.placesService.fetchOffers().subscribe(function () {
              _this2.isLoading = false;
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(offerId, slidingItem) {
            slidingItem.close();
            this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
          }
        }, {
          key: "onDelete",
          value: function onDelete(offerId, slidingItem) {
            var _this3 = this;

            this.alertCtrl.create({
              header: "Delete",
              message: "Are you sure you want to delete booking?",
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: function handler() {
                  slidingItem.close();
                  console.log('Cancel clicked');
                }
              }, {
                text: 'Delete',
                handler: function handler() {
                  slidingItem.close();

                  _this3.loadingCtrl.create({
                    message: 'deleting...'
                  }).then(function (loadingEl) {
                    loadingEl.present();
                    _this3.isLoading = true;

                    _this3.placesService.deletePlace(offerId).subscribe(function () {
                      _this3.placesService.fetchPlaces().subscribe(function () {
                        _this3.isLoading = false;
                        loadingEl.dismiss();
                      });
                    });
                  });
                }
              }]
            }).then(function (ctrl) {
              ctrl.present();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.placesSub) {
              this.placesSub.unsubscribe();
            }
          }
        }]);

        return OffersPage;
      }();

      OffersPage.ctorParameters = function () {
        return [{
          type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./offers.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/offers.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./offers.page.scss */
        "./src/app/places/offers/offers.page.scss"))["default"]]
      })], OffersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=offers-offers-module-es5.js.map