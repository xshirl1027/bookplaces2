(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

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
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            return this.http
                .get(`${src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/bookings.json`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(bookingData => {
                const bookings = [];
                for (const key in bookingData) {
                    if (bookingData.hasOwnProperty(key)) {
                        if (bookingData[key].userEmail == user.email || user.email == 'admin@admin.com') {
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
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(user => {
            return this.http
                .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseUrl}/places.json`)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resData => {
                const places = [];
                for (const key in resData) {
                    if (resData.hasOwnProperty(key) && (resData[key].userId == user.id || user.email == 'admin@admin.com')) {
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
//# sourceMappingURL=common-es2015.js.map