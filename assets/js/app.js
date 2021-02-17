(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

__webpack_require__(/*! ./header */ "./src/js/header.js");

__webpack_require__(/*! ./sticky */ "./src/js/sticky.js");

__webpack_require__(/*! ./owl-carousel */ "./src/js/owl-carousel.js");

__webpack_require__(/*! ./scrollreveal */ "./src/js/scrollreveal.js");


window.axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a;

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.opacity = "0";
  } else {
    document.getElementById("header").style.opacity = "1";
  }
}

/***/ }),

/***/ "./src/js/owl-carousel.js":
/*!********************************!*\
  !*** ./src/js/owl-carousel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");

document.addEventListener('DOMContentLoaded', function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    items: 2,
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    navText: ['<button class="btn"><i class="fas fa-arrow-left"></i> Previous</button>', '<button class="btn">Next <i class="fas fa-arrow-right"></i></button>'],
    responsive: {
      500: {
        items: 1
      },
      1200: {
        items: 2
      }
    }
  });
});

/***/ }),

/***/ "./src/js/scrollreveal.js":
/*!********************************!*\
  !*** ./src/js/scrollreveal.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");

var slide = {
  distance: '20%',
  opacity: 0.1,
  interval: 100,
  cleanup: true
};
Object(scrollreveal__WEBPACK_IMPORTED_MODULE_0__["default"])().reveal('.slide', slide);

/***/ }),

/***/ "./src/js/sticky.js":
/*!**************************!*\
  !*** ./src/js/sticky.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! jquery-sticky */ "./node_modules/jquery-sticky/jquery.sticky.js");

document.addEventListener('DOMContentLoaded', function () {
  $("#sticker").sticky({
    topSpacing: 5,
    bottomSpacing: 550
  });
});

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/sass/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\curriculum-vitae\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\curriculum-vitae\src\sass\app.scss */"./src/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);