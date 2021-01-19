(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bookings-bookings-module~discover-place-detail-place-detail-module"],{

/***/ "./src/app/bookings/booking.model.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/booking.model.ts ***!
  \*******************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
class Booking {
    constructor(id, placeId, userEmail, placeTitle, imageDataUrl, firstName, lastName, guestNumber, bookedFrom, bookedTo) {
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
    }
}


/***/ }),

/***/ "./src/app/bookings/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _booking_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.model */ "./src/app/bookings/booking.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");








let BookingService = class BookingService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this._bookings = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get bookings() {
        return this._bookings.asObservable();
    }
    addBooking(placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
        let generatedId;
        let newBooking;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            console.log(dateFrom);
            console.log(dateTo);
            newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](Math.random().toString(), placeId, user.email, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
            console.log(newBooking);
            return this.http
                .post(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/bookings.json`, Object.assign(Object.assign({}, newBooking), { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(resData => {
            generatedId = resData.name;
            return this.bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
            newBooking.id = generatedId;
            this._bookings.next(bookings.concat(newBooking));
        }));
    }
    updateBooking(id, placeId, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo) {
        let generatedId;
        let newBooking;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            console.log(dateFrom);
            console.log(dateTo);
            newBooking = new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](id, placeId, user.email, placeTitle, placeImage, firstName, lastName, guestNumber, dateFrom, dateTo);
            console.log(newBooking);
            return this.http
                .put(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/bookings/${id}.json`, Object.assign(Object.assign({}, newBooking), { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(resData => {
            generatedId = resData.name;
            return this.bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
            newBooking.id = generatedId;
            bookings = bookings.filter(booking => booking.id != id);
            this._bookings.next(bookings.concat(newBooking));
        }));
    }
    cancelBooking(bookingId) {
        return this.http
            .delete(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/bookings/${bookingId}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.bookings;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
            this._bookings.next(bookings.filter(b => b.id !== bookingId));
        }));
    }
    fetchBookings() {
        let bookingData;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            return this.http
                .get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/bookings.json`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(res => {
                bookingData = res;
                return this.authService.checkUserIsAdmin();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(userIsAdmin => {
                const bookings = [];
                for (const key in bookingData) {
                    if (bookingData.hasOwnProperty(key)) {
                        if (bookingData[key].userEmail == user.email || userIsAdmin == true) {
                            bookings.push(new _booking_model__WEBPACK_IMPORTED_MODULE_5__["Booking"](key, bookingData[key].placeId, bookingData[key].userEmail, bookingData[key].placeTitle, bookingData[key].placeImage, bookingData[key].firstName, bookingData[key].lastName, bookingData[key].guestNumber, new Date(bookingData[key].bookedFrom), new Date(bookingData[key].bookedTo)));
                        }
                    }
                }
                return bookings;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(bookings => {
                this._bookings.next(bookings);
            }));
        }));
    }
};
BookingService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], BookingService);



/***/ }),

/***/ "./src/app/places/place.model.ts":
/*!***************************************!*\
  !*** ./src/app/places/place.model.ts ***!
  \***************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
class Place {
    constructor(id, title, description, price, availableFrom, availableTo, userId, location, imageDataUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availableFrom = availableFrom;
        this.availableTo = availableTo;
        this.userId = userId;
        this.location = location;
        this.imageDataUrl = imageDataUrl;
    }
}


/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _place_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place.model */ "./src/app/places/place.model.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let PlacesService = class PlacesService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this._places = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    get places() {
        return this._places.asObservable();
    }
    fetchPlaces() {
        return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(userId => {
            return this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places.json`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resData => {
                const places = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key)) {
                        places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                    }
                }
                return places;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
                this._places.next(places);
            }));
        }));
    }
    fetchOffers() {
        let resData;
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            return this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places.json`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(res => {
                resData = res;
                return this.authService.checkUserIsAdmin();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(userIsAdmin => {
                const places = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key) && (resData[key].userId == user.id || userIsAdmin == true)) {
                        places.push(new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](key, resData[key].title, resData[key].description, resData[key].price, new Date(resData[key].availableFrom), new Date(resData[key].availableTo), resData[key].userId, resData[key].location, resData[key].imageDataUrl));
                    }
                }
                return places;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
                this._places.next(places);
            }));
        }));
    }
    getPlace(id) {
        return this.http
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places/${id}.json`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(placeData => {
            return new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](id, placeData.title, placeData.description, placeData.price, new Date(placeData.availableFrom), new Date(placeData.availableTo), placeData.userId, placeData.location, placeData.imageDataUrl);
        }));
    }
    addPlace(title, description, price, dateFrom, dateTo, location, imageDataURL) {
        let generatedId;
        let newPlace;
        return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(userId => {
            if (!userId) {
                throw new Error('No user found!');
            }
            newPlace = new _place_model__WEBPACK_IMPORTED_MODULE_5__["Place"](Math.random().toString(), title, description, price, dateFrom, dateTo, userId, location, imageDataURL);
            return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places.json`, Object.assign(Object.assign({}, newPlace), { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(resData => {
            generatedId = resData.name;
            return this.places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(places => {
            newPlace.id = generatedId;
            this._places.next(places.concat(newPlace));
        }));
    }
    deletePlace(placeId) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places/${placeId}.json`);
    }
    updatePlace(place) {
        let updatedPlaces;
        return this.places.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            if (!places || places.length <= 0) {
                return this.fetchPlaces();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(places => {
            const updatedPlaceIndex = places.findIndex(pl => pl.id === place.id);
            updatedPlaces = [...places];
            updatedPlaces[updatedPlaceIndex] = place;
            return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places/${place.id}.json`, Object.assign(Object.assign({}, updatedPlaces[updatedPlaceIndex]), { id: null }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this._places.next(updatedPlaces);
        }));
    }
};
PlacesService.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlacesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlacesService);



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    googleMapsAPIKey: 'AIzaSyDMqXL534Jdd0JTcpdJRQNr1gFpjpR_pes',
    firebaseAPIKey: 'AIzaSyBisUq3FML1Kazn-H-JVJ46y_iC9ZPprMI',
    firebaseUrl: 'https://teak-mantis-271722.firebaseio.com/'
};


/***/ })

}]);
//# sourceMappingURL=default~bookings-bookings-module~discover-place-detail-place-detail-module-es2015.js.map