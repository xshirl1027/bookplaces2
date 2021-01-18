(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBookingsCreateBookingCreateBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ selectedPlace.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\" padding>\n  <form (ngSubmit)=\"onBookPlace()\" #f=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name(*)</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"first-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name(*)</ion-label>\n            <ion-input\n              type=\"text\"\n              ngModel\n              name=\"last-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of Guests(*)</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guest-number\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">From(*)</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"startDate\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To(*)</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"endDate\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color=\"primary\"\n            expand=\"block\"\n            [disabled]=\"!f.valid || !datesValid()\"\n          >\n            Book!\n          </ion-button>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-button\n            type=\"close\"\n            color=\"primary\"\n            expand=\"block\"\n            (click)=\"onCancel()\"\n          >\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesDiscoverPlaceDetailPlaceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ isLoading ? 'Loading...' : place.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid class=\"ion-no-padding\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-no-padding\">\n        <ion-img [src]=\"place.imageDataUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n        <p>{{ place.description }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center address-text\" padding>\n          <p>{{ place.location.address }}</p>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\" padding>\n          <ion-img class=\"location-image\" (click)=\"openMapModal()\" [src]=\"place.location.staticMapImageUrl\"></ion-img>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\">\n      <ion-col size-sm=\"6\" offset-sm=\"3\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" margin (click)=\"onBookPlace()\">Book</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/bookings/create-booking/create-booking.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/bookings/create-booking/create-booking.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBookingsCreateBookingCreateBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2NyZWF0ZS1ib29raW5nL2NyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/bookings/create-booking/create-booking.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/bookings/create-booking/create-booking.component.ts ***!
      \*********************************************************************/

    /*! exports provided: CreateBookingComponent */

    /***/
    function srcAppBookingsCreateBookingCreateBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function () {
        return CreateBookingComponent;
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

      var CreateBookingComponent = /*#__PURE__*/function () {
        function CreateBookingComponent(modalCtrl) {
          _classCallCheck(this, CreateBookingComponent);

          this.modalCtrl = modalCtrl;
        }

        _createClass(CreateBookingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var availableFrom = new Date(this.selectedPlace.availableFrom);
            var availableTo = new Date(this.selectedPlace.availableTo);

            if (this.selectedMode === 'random') {
              this.startDate = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())).toISOString();
              this.endDate = new Date(new Date(this.startDate).getTime() + Math.random() * (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())).toISOString();
            }
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.modalCtrl.dismiss(null, 'cancel');
          }
        }, {
          key: "onBookPlace",
          value: function onBookPlace() {
            if (!this.form.valid || !this.datesValid()) {
              return;
            }

            this.modalCtrl.dismiss({
              bookingData: {
                firstName: this.form.value['first-name'],
                lastName: this.form.value['last-name'],
                guestNumber: +this.form.value['guest-number'],
                startDate: new Date(this.form.value['date-from']),
                endDate: new Date(this.form.value['date-to'])
              }
            }, 'confirm');
          }
        }, {
          key: "datesValid",
          value: function datesValid() {
            if (!this.form) {
              return false;
            }

            var startDate = new Date(this.form.value['date-from']);
            var endDate = new Date(this.form.value['date-to']);
            return endDate > startDate;
          }
        }]);

        return CreateBookingComponent;
      }();

      CreateBookingComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      CreateBookingComponent.propDecorators = {
        selectedPlace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['f', {
            "static": false
          }]
        }]
      };
      CreateBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-booking.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/create-booking/create-booking.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-booking.component.scss */
        "./src/app/bookings/create-booking/create-booking.component.scss"))["default"]]
      })], CreateBookingComponent);
      /***/
    },

    /***/
    "./src/app/places/discover/place-detail/place-detail.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/places/discover/place-detail/place-detail.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PlaceDetailPageModule */

    /***/
    function srcAppPlacesDiscoverPlaceDetailPlaceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function () {
        return PlaceDetailPageModule;
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


      var _place_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./place-detail.page */
      "./src/app/places/discover/place-detail/place-detail.page.ts");
      /* harmony import */


      var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../bookings/create-booking/create-booking.component */
      "./src/app/bookings/create-booking/create-booking.component.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"]
      }];

      var PlaceDetailPageModule = function PlaceDetailPageModule() {
        _classCallCheck(this, PlaceDetailPageModule);
      };

      PlaceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_6__["PlaceDetailPage"], _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]],
        entryComponents: [_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_7__["CreateBookingComponent"]]
      })], PlaceDetailPageModule);
      /***/
    },

    /***/
    "./src/app/places/discover/place-detail/place-detail.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/places/discover/place-detail/place-detail.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesDiscoverPlaceDetailPlaceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".address-text p {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9kaXNjb3Zlci9wbGFjZS1kZXRhaWwvcGxhY2UtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzLXRleHQgcHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/places/discover/place-detail/place-detail.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/places/discover/place-detail/place-detail.page.ts ***!
      \*******************************************************************/

    /*! exports provided: PlaceDetailPage */

    /***/
    function srcAppPlacesDiscoverPlaceDetailPlaceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function () {
        return PlaceDetailPage;
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


      var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../places.service */
      "./src/app/places/places.service.ts");
      /* harmony import */


      var _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../bookings/create-booking/create-booking.component */
      "./src/app/bookings/create-booking/create-booking.component.ts");
      /* harmony import */


      var _bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../bookings/booking.service */
      "./src/app/bookings/booking.service.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/map-modal/map-modal.component */
      "./src/app/shared/map-modal/map-modal.component.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PlaceDetailPage = /*#__PURE__*/function () {
        function PlaceDetailPage(navCtrl, route, placesService, modalCtrl, actionSheetCtrl, bookingService, loadingCtrl, authService, alertCtrl, router) {
          _classCallCheck(this, PlaceDetailPage);

          this.navCtrl = navCtrl;
          this.route = route;
          this.placesService = placesService;
          this.modalCtrl = modalCtrl;
          this.actionSheetCtrl = actionSheetCtrl;
          this.bookingService = bookingService;
          this.loadingCtrl = loadingCtrl;
          this.authService = authService;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.isBookable = false;
          this.isLoading = false;
        }

        _createClass(PlaceDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('placeId')) {
                _this.navCtrl.navigateBack('/places/tabs/discover');

                return;
              }

              _this.isLoading = true;
              var fetchedUserId;

              _this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (userId) {
                if (!userId) {
                  throw new Error('User not found !');
                }

                fetchedUserId = userId;
                return _this.placesService.getPlace(paramMap.get('placeId'));
              })).subscribe(function (place) {
                _this.place = place;
                _this.isBookable = place.userId !== fetchedUserId;
                _this.isLoading = false;
              }, function (error) {
                _this.alertCtrl.create({
                  header: 'An error ocurred!',
                  message: 'Could not load place.',
                  buttons: [{
                    text: 'Okay',
                    handler: function handler() {
                      _this.router.navigate(['/places/tabs/discover']);
                    }
                  }]
                }).then(function (alertEl) {
                  return alertEl.present();
                });
              });
            });
          }
        }, {
          key: "onBookPlace",
          value: function onBookPlace() {
            var _this2 = this;

            this.actionSheetCtrl.create({
              header: 'Choose an Action',
              buttons: [{
                text: 'Select Date',
                handler: function handler() {
                  _this2.openBookingModal('select');
                }
              }, {
                text: 'Random Date',
                handler: function handler() {
                  _this2.openBookingModal('random');
                }
              }, {
                text: 'Cancel',
                role: 'cancel'
              }]
            }).then(function (actionSheetEl) {
              actionSheetEl.present();
            });
          }
        }, {
          key: "openBookingModal",
          value: function openBookingModal(mode) {
            var _this3 = this;

            console.log(mode);
            this.modalCtrl.create({
              component: _bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["CreateBookingComponent"],
              componentProps: {
                selectedPlace: this.place,
                selectedMode: mode
              }
            }).then(function (modalEl) {
              modalEl.present();
              return modalEl.onDidDismiss();
            }).then(function (resultData) {
              if (resultData.role === 'confirm') {
                _this3.loadingCtrl.create({
                  message: 'Booking place...'
                }).then(function (loadingEl) {
                  loadingEl.present();
                  var data = resultData.data.bookingData;
                  console.log(data);

                  _this3.bookingService.addBooking(_this3.place.id, _this3.place.title, _this3.place.imageDataUrl, data.firstName, data.lastName, data.guestNumber, new Date(data.startDate), new Date(data.endDate)).subscribe(function () {
                    loadingEl.dismiss();
                  });
                });
              }
            });
          }
        }, {
          key: "openMapModal",
          value: function openMapModal() {
            this.modalCtrl.create({
              component: src_app_shared_map_modal_map_modal_component__WEBPACK_IMPORTED_MODULE_8__["MapModalComponent"],
              componentProps: {
                center: {
                  lat: this.place.location.lat,
                  lng: this.place.location.lng
                },
                selectable: false,
                title: this.place.location.address,
                closeButtonText: "Close"
              }
            }).then(function (modalEl) {
              modalEl.onDidDismiss().then(function (modalData) {
                if (!modalData || !modalData.data) {
                  return;
                }
              });
              modalEl.present();
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

        return PlaceDetailPage;
      }();

      PlaceDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _bookings_booking_service__WEBPACK_IMPORTED_MODULE_6__["BookingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      PlaceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-place-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./place-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/discover/place-detail/place-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./place-detail.page.scss */
        "./src/app/places/discover/place-detail/place-detail.page.scss"))["default"]]
      })], PlaceDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=discover-place-detail-place-detail-module-es5.js.map