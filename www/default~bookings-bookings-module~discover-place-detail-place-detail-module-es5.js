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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bookings-bookings-module~discover-place-detail-place-detail-module"], {
    /***/
    "./src/app/bookings/booking.model.ts":
    /*!*******************************************!*\
      !*** ./src/app/bookings/booking.model.ts ***!
      \*******************************************/

    /*! exports provided: Booking */

    /***/
    function srcAppBookingsBookingModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Booking", function () {
        return Booking;
      });

      var Booking = function Booking(id, placeId, userEmail, placeTitle, imageDataUrl, firstName, lastName, guestNumber, bookedFrom, bookedTo) {
        _classCallCheck(this, Booking);

        this.id = id;
        this.placeId = placeId;
        this.userEmail = userEmail;
        this.placeTitle = placeTitle;
        this.imageDataUrl = imageDataUrl;
        this.firstName = firstName;
        this.lastName = lastName;
        this.guestNumber = guestNumber;
        this.bookedFrom = bookedFrom;
        this.bookedTo = bookedTo;
      };
      /***/

    },

    /***/
    "./src/app/bookings/booking.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/bookings/booking.service.ts ***!
      \*********************************************/

    /*! exports provided: BookingService */

    /***/
    function srcAppBookingsBookingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingService", function () {
        return BookingService;
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


      var _booking_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking.model */
      "./src/app/bookings/booking.model.ts");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../auth/auth.service */
      "./src/app/auth/auth.service.ts");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var BookingService = /*#__PURE__*/function () {
        function BookingService(authService, http) {
          _classCallCheck(this, BookingService);

          this.authService = authService;
          this.http = http;
          this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(BookingService, [{
          key: "addBooking",
          value: function addBooking(placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
            var _this = this;

            var generatedId;
            var newBooking;
            return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              console.log(dateFrom);
              console.log(dateTo);
              newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](Math.random().toString(), placeId, user.email, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
              console.log(newBooking);
              return _this.http.post("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/bookings.json"), Object.assign(Object.assign({}, newBooking), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resData) {
              generatedId = resData.name;
              return _this.bookings;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
              newBooking.id = generatedId;

              _this._bookings.next(bookings.concat(newBooking));
            }));
          }
        }, {
          key: "updateBooking",
          value: function updateBooking(id, placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
            var _this2 = this;

            var generatedId;
            var newBooking;
            return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              console.log(dateFrom);
              console.log(dateTo);
              newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](id, placeId, user.email, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
              console.log(newBooking);
              return _this2.http.put("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/bookings/").concat(id, ".json"), Object.assign(Object.assign({}, newBooking), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resData) {
              generatedId = resData.name;
              return _this2.bookings;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
              newBooking.id = generatedId;
              bookings = bookings.filter(function (booking) {
                return booking.id != id;
              });

              _this2._bookings.next(bookings.concat(newBooking));
            }));
          }
        }, {
          key: "cancelBooking",
          value: function cancelBooking(bookingId) {
            var _this3 = this;

            return this.http["delete"]("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/bookings/").concat(bookingId, ".json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
              return _this3.bookings;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
              _this3._bookings.next(bookings.filter(function (b) {
                return b.id !== bookingId;
              }));
            }));
          }
        }, {
          key: "fetchBookings",
          value: function fetchBookings() {
            var _this4 = this;

            var bookingData;
            return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              return _this4.http.get("".concat(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/bookings.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
                bookingData = res;
                return _this4.authService.checkUserIsAdmin();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userIsAdmin) {
                var bookings = [];

                for (var key in bookingData) {
                  if (bookingData.hasOwnProperty(key)) {
                    if (bookingData[key].userEmail == user.email || userIsAdmin == true) {
                      bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](key, bookingData[key].placeId, bookingData[key].userEmail, bookingData[key].placeTitle, bookingData[key].placeImage, bookingData[key].firstName, bookingData[key].lastName, bookingData[key].guestNumber, new Date(bookingData[key].bookedFrom), new Date(bookingData[key].bookedTo)));
                    }
                  }
                }

                return bookings;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (bookings) {
                _this4._bookings.next(bookings);
              }));
            }));
          }
        }, {
          key: "bookings",
          get: function get() {
            return this._bookings.asObservable();
          }
        }]);

        return BookingService;
      }();

      BookingService.ctorParameters = function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      BookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BookingService);
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
            var _this5 = this;

            return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userId) {
              return _this5.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resData) {
                var places = [];

                for (var key in resData) {
                  if (resData.hasOwnProperty(key)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                  }
                }

                return places;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
                _this5._places.next(places);
              }));
            }));
          }
        }, {
          key: "fetchOffers",
          value: function fetchOffers() {
            var _this6 = this;

            var resData;
            return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
              return _this6.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
                resData = res;
                return _this6.authService.checkUserIsAdmin();
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userIsAdmin) {
                var places = [];

                for (var key in resData) {
                  if (resData.hasOwnProperty(key) && (resData[key].userId == user.id || userIsAdmin == true)) {
                    places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                  }
                }

                return places;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
                _this6._places.next(places);
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
            var _this7 = this;

            var generatedId;
            var newPlace;
            return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userId) {
              if (!userId) {
                throw new Error('No user found!');
              }

              newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](Math.random().toString(), title, description, price, dateFrom, dateTo, userId, location, imageDataURL);
              return _this7.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places.json"), Object.assign(Object.assign({}, newPlace), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resData) {
              generatedId = resData.name;
              return _this7.places;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (places) {
              newPlace.id = generatedId;

              _this7._places.next(places.concat(newPlace));
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
            var _this8 = this;

            var updatedPlaces;
            return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
              if (!places || places.length <= 0) {
                return _this8.fetchPlaces();
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (places) {
              var updatedPlaceIndex = places.findIndex(function (pl) {
                return pl.id === place.id;
              });
              updatedPlaces = _toConsumableArray(places);
              updatedPlaces[updatedPlaceIndex] = place;
              return _this8.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl, "/places/").concat(place.id, ".json"), Object.assign(Object.assign({}, updatedPlaces[updatedPlaceIndex]), {
                id: null
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
              _this8._places.next(updatedPlaces);
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
    },

    /***/
    "./src/environments/environment.prod.ts":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        googleMapsAPIKey: 'AIzaSyDMqXL534Jdd0JTcpdJRQNr1gFpjpR_pes',
        firebaseAPIKey: 'AIzaSyBisUq3FML1Kazn-H-JVJ46y_iC9ZPprMI',
        firebaseUrl: 'https://teak-mantis-271722.firebaseio.com/'
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~bookings-bookings-module~discover-place-detail-place-detail-module-es5.js.map