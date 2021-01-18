(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-offer-new-offer-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlacesOffersNewOfferNewOfferPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateOffer()\" [disabled]=\"!form.valid\">\n        <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Title(*)</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Short Description(*)</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        *ngIf=\"\n          !form.get('description').valid && form.get('description').touched\n        \"\n      >\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <p>Description must be between 1 and 180 characters.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Price(*)</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row\n      *ngIf=\"\n        !form.get('price').valid && form.get('price').touched\n      \"\n    >\n      <ion-col size-sm=\"6\" offset-sm=\"3\">\n        <p>Price must be greater than 1 dollar</p>\n      </ion-col>\n    </ion-row>\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available from(*)</ion-label>\n            <ion-datetime\n              [min]=\"currDate.toISOString()\"\n              max=\"2025-12-31\"\n              formControlName=\"dateFrom\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\">Available to(*)</ion-label>\n            <ion-datetime\n              [min]=\"currDate.toISOString()\"\n              max=\"2025-12-31\"\n              formControlName=\"dateTo\"\n            ></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col offset-sm=\"3\" size-sm=\"6\">\n          <app-location-picker (locationPick)=\"onLocationPicked($event)\" class=\"ion-text-center\" padding></app-location-picker>\n        </ion-col>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <app-image-picker (imagePick)=\"onImagePicked($event)\" class=\"ion-text-center\" padding></app-image-picker>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/places/offers/new-offer/new-offer.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/places/offers/new-offer/new-offer.module.ts ***!
      \*************************************************************/

    /*! exports provided: NewOfferPageModule */

    /***/
    function srcAppPlacesOffersNewOfferNewOfferModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function () {
        return NewOfferPageModule;
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


      var _new_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-offer.page */
      "./src/app/places/offers/new-offer/new-offer.page.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var routes = [{
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]
      }];

      var NewOfferPageModule = function NewOfferPageModule() {
        _classCallCheck(this, NewOfferPageModule);
      };

      NewOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_6__["NewOfferPage"]]
      })], NewOfferPageModule);
      /***/
    },

    /***/
    "./src/app/places/offers/new-offer/new-offer.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/places/offers/new-offer/new-offer.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlacesOffersNewOfferNewOfferPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3LW9mZmVyL25ldy1vZmZlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/places/offers/new-offer/new-offer.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/places/offers/new-offer/new-offer.page.ts ***!
      \***********************************************************/

    /*! exports provided: NewOfferPage */

    /***/
    function srcAppPlacesOffersNewOfferNewOfferPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewOfferPage", function () {
        return NewOfferPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _places_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../places.service */
      "./src/app/places/places.service.ts");

      function base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          var begin = sliceIndex * sliceSize;
          var end = Math.min(begin + sliceSize, bytesLength);
          var bytes = new Array(end - begin);

          for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
          }

          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }

        return new Blob(byteArrays, {
          type: contentType
        });
      }

      var NewOfferPage = /*#__PURE__*/function () {
        function NewOfferPage(placesService, router, loadingCtrl) {
          _classCallCheck(this, NewOfferPage);

          this.placesService = placesService;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.currDate = new Date();
        }

        _createClass(NewOfferPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            function dateFromValidator(control) {}

            var curr_date = new Date();
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(180)]
              }),
              price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
              }),
              dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }),
              dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }),
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              })
            });
          }
        }, {
          key: "onCreateOffer",
          value: function onCreateOffer() {
            var _this = this;

            if (!this.form.valid) {
              return;
            }

            this.loadingCtrl.create({
              message: 'Creating place...'
            }).then(function (loadingEl) {
              loadingEl.present();

              _this.placesService.addPlace(_this.form.value.title, _this.form.value.description, +_this.form.value.price, new Date(_this.form.value.dateFrom), new Date(_this.form.value.dateTo), _this.form.value.location, _this.form.value.image).subscribe(function () {
                loadingEl.dismiss();

                _this.form.reset();

                _this.router.navigate(['/places/tabs/offers']);
              });
            });
          }
        }, {
          key: "onImagePicked",
          value: function onImagePicked(imageData) {
            console.log(imageData);
            this.form.patchValue({
              image: imageData
            });
          }
        }, {
          key: "onLocationPicked",
          value: function onLocationPicked(location) {
            console.log("valid location");
            this.form.patchValue({
              location: location
            });
          }
        }]);

        return NewOfferPage;
      }();

      NewOfferPage.ctorParameters = function () {
        return [{
          type: _places_service__WEBPACK_IMPORTED_MODULE_5__["PlacesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      NewOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-offer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new-offer.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/places/offers/new-offer/new-offer.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new-offer.page.scss */
        "./src/app/places/offers/new-offer/new-offer.page.scss"))["default"]]
      })], NewOfferPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=offers-new-offer-new-offer-module-es5.js.map