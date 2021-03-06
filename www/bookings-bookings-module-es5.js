(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBookingsBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\" class=\"ion-text-center\" *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"!isLoading && (!loadedBookings || loadedBookings.length <= 0)\"\n        class=\"ion-text-center\"\n      >\n        <p>No bookings found!</p>\n      </ion-col>\n      <ion-col\n        size-md=\"6\"\n        offset-md=\"3\"\n        *ngIf=\"!isLoading && loadedBookings && loadedBookings.length > 0\"\n      >\n        <ion-list>\n          <ion-item-sliding\n            *ngFor=\"let booking of loadedBookings\"\n            #slidingBooking\n          >\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                  <ion-img src=\"https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200\"></ion-img>\n              </ion-avatar>\n              <ion-label>\n                <h5>{{ booking.placeTitle }}</h5>\n                <p class=\"date\"><b>From:</b> {{ booking.bookedFrom.toLocaleString() }} <b>To:</b>{{ booking.bookedTo.toLocaleString() }}</p>\n                <p>Guests: {{ booking.guestNumber }} User Email: {{booking.userEmail}}</p>\n                \n              </ion-label>\n            </ion-item>\n            <ion-item-options>\n              <ion-item-option\n                color=\"danger\"\n                (click)=\"onCancelBooking(booking.id, slidingBooking)\"\n              >\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n              <ion-item-option\n              color=\"secondary\"\n              (click)=\"onEdit(booking, slidingBooking)\"\n            >\n              <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n            </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/edit-booking/edit-booking.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/edit-booking/edit-booking.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppBookingsEditBookingEditBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ selectedPlace.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\" padding>\n  <form (ngSubmit)=\"onBookPlace()\" #f=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input\n              type=\"text\"\n              [ngModel]='selectedBooking.firstName'\n              name=\"first-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Last Name</ion-label>\n            <ion-input\n              type=\"text\"\n              [ngModel]='selectedBooking.lastName'\n              name=\"last-name\"\n              required\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Number of Guests</ion-label>\n            <ion-select [ngModel]=\"selectedBooking.guestNumber\" name=\"guest-number\">\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"3\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">From</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"selectedPlace.availableFrom.toISOString()\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"selectedBooking.bookedFrom.toISOString()\"\n              name=\"date-from\"\n              required\n              #startDateCtrl=\"ngModel\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">To</ion-label>\n            <ion-datetime\n              display-format=\"MMM DD YYYY\"\n              picker-format=\"YY MMM DD\"\n              [min]=\"startDateCtrl.value\"\n              [max]=\"selectedPlace.availableTo.toISOString()\"\n              [ngModel]=\"selectedBooking.bookedTo.toISOString()\"\n              name=\"date-to\"\n              required\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-button\n            type=\"submit\"\n            color=\"primary\"\n            expand=\"block\"\n            [disabled]=\"!f.valid || !datesValid()\"\n          >\n            Save!\n          </ion-button>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-button\n            type=\"close\"\n            color=\"primary\"\n            expand=\"block\"\n            (click)=\"onCancel()\"\n          >\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/bookings/bookings.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.module.ts ***!
      \*********************************************/

    /*! exports provided: BookingsPageModule */

    /***/
    function srcAppBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function () {
        return BookingsPageModule;
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


      var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookings.page */
      "./src/app/bookings/bookings.page.ts");
      /* harmony import */


      var _edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-booking/edit-booking.component */
      "./src/app/bookings/edit-booking/edit-booking.component.ts");

      var routes = [{
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]
      }];

      var BookingsPageModule = function BookingsPageModule() {
        _classCallCheck(this, BookingsPageModule);
      };

      BookingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"], _edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_7__["EditBookingComponent"]],
        entryComponents: [_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_7__["EditBookingComponent"]]
      })], BookingsPageModule);
      /***/
    },

    /***/
    "./src/app/bookings/bookings.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/bookings/bookings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppBookingsBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".date {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRle1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/bookings/bookings.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/bookings/bookings.page.ts ***!
      \*******************************************/

    /*! exports provided: BookingsPage */

    /***/
    function srcAppBookingsBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
        return BookingsPage;
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


      var _booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booking.service */
      "./src/app/bookings/booking.service.ts");
      /* harmony import */


      var _edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-booking/edit-booking.component */
      "./src/app/bookings/edit-booking/edit-booking.component.ts");
      /* harmony import */


      var _places_places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../places/places.service */
      "./src/app/places/places.service.ts");

      var BookingsPage = /*#__PURE__*/function () {
        function BookingsPage(bookingService, loadingCtrl, alertCtrl, placesService, modalCtrl) {
          _classCallCheck(this, BookingsPage);

          this.bookingService = bookingService;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.placesService = placesService;
          this.modalCtrl = modalCtrl;
          this.isLoading = false;
        }

        _createClass(BookingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.bookingSub = this.bookingService.bookings.subscribe(function (bookings) {
              _this.loadedBookings = bookings;
              console.log(bookings);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.isLoading = true;
            this.bookingService.fetchBookings().subscribe(function () {
              _this2.isLoading = false;
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(booking, slidingEl) {
            var _this3 = this;

            console.log(booking);
            this.placesService.getPlace(booking.placeId).subscribe(function (place) {
              _this3.modalCtrl.create({
                component: _edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_4__["EditBookingComponent"],
                componentProps: {
                  selectedPlace: place,
                  selectedBooking: booking
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

                    _this3.bookingService.updateBooking(booking.id, place.id, place.title, place.imageDataUrl, data.firstName, data.lastName, data.guestNumber, new Date(data.startDate), new Date(data.endDate)).subscribe(function () {
                      loadingEl.dismiss();
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "onCancelBooking",
          value: function onCancelBooking(bookingId, slidingEl) {
            var _this4 = this;

            this.alertCtrl.create({
              header: "Delete",
              message: "Are you sure you want to delete booking?",
              buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: function handler() {
                  slidingEl.close();
                  console.log('Cancel clicked');
                }
              }, {
                text: 'Delete',
                handler: function handler() {
                  slidingEl.close();

                  _this4.loadingCtrl.create({
                    message: 'Cancelling...'
                  }).then(function (loadingEl) {
                    loadingEl.present();

                    _this4.bookingService.cancelBooking(bookingId).subscribe(function () {
                      loadingEl.dismiss();
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
            if (this.bookingSub) {
              this.bookingSub.unsubscribe();
            }
          }
        }]);

        return BookingsPage;
      }();

      BookingsPage.ctorParameters = function () {
        return [{
          type: _booking_service__WEBPACK_IMPORTED_MODULE_3__["BookingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _places_places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      BookingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bookings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/bookings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bookings.page.scss */
        "./src/app/bookings/bookings.page.scss"))["default"]]
      })], BookingsPage);
      /***/
    },

    /***/
    "./src/app/bookings/edit-booking/edit-booking.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/bookings/edit-booking/edit-booking.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppBookingsEditBookingEditBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2VkaXQtYm9va2luZy9lZGl0LWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/bookings/edit-booking/edit-booking.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/bookings/edit-booking/edit-booking.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EditBookingComponent */

    /***/
    function srcAppBookingsEditBookingEditBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditBookingComponent", function () {
        return EditBookingComponent;
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

      var EditBookingComponent = /*#__PURE__*/function () {
        function EditBookingComponent(modalCtrl) {
          _classCallCheck(this, EditBookingComponent);

          this.modalCtrl = modalCtrl;
        }

        _createClass(EditBookingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var availableFrom = new Date(this.selectedPlace.availableFrom);
            var availableTo = new Date(this.selectedPlace.availableTo);
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
                guestNumber: this.form.value['guest-number'],
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

        return EditBookingComponent;
      }();

      EditBookingComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      EditBookingComponent.propDecorators = {
        selectedPlace: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectedBooking: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['f', {
            "static": false
          }]
        }]
      };
      EditBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-booking.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/bookings/edit-booking/edit-booking.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-booking.component.scss */
        "./src/app/bookings/edit-booking/edit-booking.component.scss"))["default"]]
      })], EditBookingComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=bookings-bookings-module-es5.js.map