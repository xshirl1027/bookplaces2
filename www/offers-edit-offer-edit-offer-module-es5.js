(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [defaultHref]=\"'/places/tabs/offers'\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onUpdateOffer()\" [disabled]=\"!form?.valid || !datesValid()\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <form [formGroup]=\"form\" *ngIf=\"!isLoading\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description</ion-label>\n            <ion-textarea formControlName=\"description\" rows=\"3\" formControlName=\"description\" ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price</ion-label>\n            <ion-input formControlName=\"price\" type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available from</ion-label>\n            <ion-datetime\n            [min]=\"currDate.toISOString()\"\n            [max]=\"futureDate.toISOString()\"\n              formControlName=\"dateFrom\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available to</ion-label>\n            <ion-datetime\n            [min]=\"currDate.toISOString()\"\n            [max]=\"futureDate.toISOString()\"\n              formControlName=\"dateTo\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n          <app-location-picker (locationPick)=\"onLocationPicked($event)\" [selectedLocationImage] = 'place.location.staticMapImageUrl'></app-location-picker>\n        </ion-col>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n          <app-image-picker (imagePick)=\"onImagePicked($event)\" [selectedImage] = 'place.imageDataUrl'></app-image-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
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
          this.currDate = new Date();
          this.futureDate = new Date();
        }

        _createClass(EditOfferPage, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.futureDate.setDate(this.futureDate.getDate() + 5 * 365);
          }
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
          key: "datesValid",
          value: function datesValid() {
            console.log('here');
            var startDate = new Date(this.form.value['dateFrom']);
            var endDate = new Date(this.form.value['dateTo']);
            return endDate > startDate;
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
    },

    /***/
    "./src/app/places/place.model.ts":
    /*!***************************************!*\
      !*** ./src/app/places/place.model.ts ***!
      \***************************************/

    /*! exports provided: Place */

    /***/
    function srcAppPlacesPlaceModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Place", function () {
        return Place;
      });

      var Place = function Place(id, title, description, price, availableFrom, availableTo, userId, location, imageDataUrl) {
        _classCallCheck(this, Place);

        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
        this.imageDataUrl = imageDataUrl;
      };
      /***/

    },

    /***/
    "./src/app/places/places.service.ts":
    /*!******************************************!*\
      !*** ./src/app/places/places.service.ts ***!
      \******************************************/

    /*! exports provided: PlacesService */

    /***/
    function srcAppPlacesPlacesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlacesService", function () {
        return PlacesService;
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


      var _place_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./place.model */
      "./src/app/places/place.model.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var PlacesService = /*#__PURE__*/function () {
        function PlacesService(authService, http) {
          _classCallCheck(this, PlacesService);

          this.authService = authService;
          this.http = http;
          this._places = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(PlacesService, [{
          key: "fetchPlaces",
          value: function fetchPlaces() {
            var _this3 = this;

            return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userId) {
              return _this3.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resData) {
                var places = [];

                for (var key in resData) {
                  if (resData.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                  }
                }

                return places;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
                _this3._places.next(places);
              }));
            }));
          }
        }, {
          key: "fetchOffers",
          value: function fetchOffers() {
            var _this4 = this;

            var resData;
            return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              return _this4.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
                resData = res;
                return _this4.authService.checkUserIsAdmin();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userIsAdmin) {
                var places = [];

                for (var key in resData) {
                  if (resData.hasOwnProperty(key) && (resData[key].userId == user.id || userIsAdmin == true)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                  }
                }

                return places;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
                _this4._places.next(places);
              }));
            }));
          }
        }, {
          key: "getPlace",
          value: function getPlace(id) {
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places/").concat(id, ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (placeData) {
              return new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](id, placeData.title, placeData.description, placeData.price, new Date(placeData.availableFrom), new Date(placeData.availableTo), placeData.userId, placeData.location, placeData.imageDataUrl);
            }));
          }
        }, {
          key: "addPlace",
          value: function addPlace(title, description, price, dateFrom, dateTo, location, imageDataURL) {
            var _this5 = this;

            var generatedId;
            var newPlace;
            return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userId) {
              if (!userId) {
                throw new Error('No user found!');
              }

              newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](Math.random().toString(), title, description, price, dateFrom, dateTo, userId, location, imageDataURL);
              return _this5.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json"), Object.assign(Object.assign({}, newPlace), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resData) {
              generatedId = resData.name;
              return _this5.places;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
              newPlace.id = generatedId;

              _this5._places.next(places.concat(newPlace));
            }));
          }
        }, {
          key: "deletePlace",
          value: function deletePlace(placeId) {
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places/").concat(placeId, ".json"));
          }
        }, {
          key: "updatePlace",
          value: function updatePlace(place) {
            var _this6 = this;

            var updatedPlaces;
            return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
              if (!places || places.length <= 0) {
                return _this6.fetchPlaces();
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
              var updatedPlaceIndex = places.findIndex(function (pl) {
                return pl.id === place.id;
              });
              updatedPlaces = _toConsumableArray(places);
              updatedPlaces[updatedPlaceIndex] = place;
              return _this6.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places/").concat(place.id, ".json"), Object.assign(Object.assign({}, updatedPlaces[updatedPlaceIndex]), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this6._places.next(updatedPlaces);
            }));
          }
        }, {
          key: "places",
          get: function get() {
            return this._places.asObservable();
          }
        }]);

        return PlacesService;
      }();

      PlacesService.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      PlacesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PlacesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=offers-edit-offer-edit-offer-module-es5.js.map