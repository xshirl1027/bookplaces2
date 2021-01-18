(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-edit-offer-edit-offer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offer/edit-offer.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offer/edit-offer.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersEditOfferEditOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [defaultHref]=\"'/places/tabs/offers'\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onUpdateOffer()\" [disabled]=\"!form?.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea formControlName=\"description\" rows=\"3\" formControlName=\"description\" ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available from</ion-label>\n            <ion-datetime\n              min=\"2019-01-01\"\n              max=\"2025-12-31\"\n              formControlName=\"dateFrom\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available to</ion-label>\n            <ion-datetime\n              min=\"2019-01-02\"\n              max=\"2025-12-31\"\n              formControlName=\"dateTo\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n          <app-location-picker (locationPick)=\"onLocationPicked($event)\" [selectedLocationImage] = 'place.location.staticMapImageUrl'></app-location-picker>\n        </ion-col>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n          <app-image-picker (imagePick)=\"onImagePicked($event)\" [selectedImage] = 'place.imageDataUrl'></app-image-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/places/offers/edit-offer/edit-offer.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/places/offers/edit-offer/edit-offer.module.ts ***!
      \***************************************************************/

    /*! exports provided: EditOfferPageModule */

    /***/
    function srcAppPlacesOffersEditOfferEditOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function () {
        return EditOfferPageModule;
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


      var _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-offer.page */
      "./src/app/places/offers/edit-offer/edit-offer.page.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]
      }];

      var EditOfferPageModule = function EditOfferPageModule() {
        _classCallCheck(this, EditOfferPageModule);
      };

      EditOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_6__["EditOfferPage"]]
      })], EditOfferPageModule);
      /***/
    },

    /***/
    "./src/app/places/offers/edit-offer/edit-offer.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/places/offers/edit-offer/edit-offer.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesOffersEditOfferEditOfferPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvZWRpdC1vZmZlci9lZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/places/offers/edit-offer/edit-offer.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/places/offers/edit-offer/edit-offer.page.ts ***!
      \*************************************************************/

    /*! exports provided: EditOfferPage */

    /***/
    function srcAppPlacesOffersEditOfferEditOfferPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditOfferPage", function () {
        return EditOfferPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../places.service */
      "./src/app/places/places.service.ts");

      var EditOfferPage = /*#__PURE__*/function () {
        function EditOfferPage(route, placesService, navCtrl, router, loadingCtrl, alertCtrl) {
          _classCallCheck(this, EditOfferPage);

          this.route = route;
          this.placesService = placesService;
          this.navCtrl = navCtrl;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.isLoading = false;
        }

        _createClass(EditOfferPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/offers');

                return;
              }

              _this.placeId = paramMap.get('placeId');
              _this.isLoading = true;
              _this.placeSub = _this.placesService.getPlace(paramMap.get('placeId')).subscribe(function (place) {
                _this.place = place;
                _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                  title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.title, {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  }),
                  description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.description, {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(180)]
                  }),
                  price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.price, {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]
                  }),
                  dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.availableFrom.toISOString(), {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  }),
                  dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.availableTo.toISOString(), {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  }),
                  location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.location, {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  }),
                  image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.place.imageDataUrl, {
                    updateOn: 'blur',
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  })
                });
                _this.isLoading = false;
              }, function (error) {
                _this.alertCtrl.create({
                  header: 'An error occurred!',
                  message: 'Place could not be fetched. Please try again later.',
                  buttons: [{
                    text: 'Okay',
                    handler: function handler() {
                      _this.router.navigate(['/places/tabs/offers']);
                    }
                  }]
                }).then(function (alertEl) {
                  alertEl.present();
                });
              });
            });
          }
        }, {
          key: "onUpdateOffer",
          value: function onUpdateOffer() {
            var _this2 = this;

            if (!this.form.valid) {
              return;
            }

            this.loadingCtrl.create({
              message: 'Updating place...'
            }).then(function (loadingEl) {
              loadingEl.present();
              console.log('form ' + _this2.form);
              _this2.place.title = _this2.form.value.title;
              _this2.place.availableFrom = new Date(_this2.form.value.dateFrom);
              _this2.place.availableTo = new Date(_this2.form.value.dateTo);
              _this2.place.price = _this2.form.value.price;
              _this2.place.location = _this2.form.value.location;
              _this2.place.description = _this2.form.value.description;
              _this2.place.imageDataUrl = _this2.form.value.image;

              _this2.placesService.updatePlace(_this2.place).subscribe(function () {
                loadingEl.dismiss();

                _this2.form.reset();

                _this2.router.navigate(['/places/tabs/offers']);
              });
            });
          }
        }, {
          key: "onLocationPicked",
          value: function onLocationPicked(location) {
            this.form.patchValue({
              location: location
            });
          }
        }, {
          key: "onImagePicked",
          value: function onImagePicked(imageData) {
            this.form.patchValue({
              image: imageData
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.placeSub) {
              this.placeSub.unsubscribe();
            }
          }
        }]);

        return EditOfferPage;
      }();

      EditOfferPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      EditOfferPage.propDecorators = {
        dateFrom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['dateFrom', {
            "static": false
          }]
        }],
        dateTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['dateTo', {
            "static": false
          }]
        }]
      };
      EditOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-offer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-offer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/edit-offer/edit-offer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-offer.page.scss */
        "./src/app/places/offers/edit-offer/edit-offer.page.scss"))["default"]]
      })], EditOfferPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=offers-edit-offer-edit-offer-module-es5.js.map