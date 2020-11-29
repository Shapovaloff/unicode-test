/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/page-header/page-header.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/page-header/page-header.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculateRightBound(item) {
  return item.offsetLeft + item.offsetWidth;
}

function moveItemIntoList(item, list) {
  list.insertBefore(item, list.firstElementChild);
}

function collapsibleDropdownList() {
  var headerMenuWrapper = document.querySelector('.js-dropdown-menu');
  var menuItems = Array.prototype.slice.call(headerMenuWrapper.querySelectorAll('.js-dropdown-menu-item'));
  var dropdownMenuButton = headerMenuWrapper.querySelector('.js-dropdown-menu-button');
  var outOfBoundsItems = [];

  for (var i = menuItems.length - 1; i >= 0; i--) {
    if (calculateRightBound(menuItems[i]) > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      outOfBoundsItems.push(menuItems[i]);
    } else {
      i = -1;
    }
  }

  if (outOfBoundsItems.length) {
    dropdownMenuButton.classList.add('js-enabled');
    var hiddenItemsList = dropdownMenuButton.querySelector('.js-dropdown-menu-list');
    outOfBoundsItems.forEach(function (item) {
      moveItemIntoList(item, hiddenItemsList);
    });
    var buttonRightBound = dropdownMenuButton.offsetLeft + dropdownMenuButton.offsetWidth;

    if (buttonRightBound > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      moveItemIntoList(dropdownMenuButton.previousElementSibling, hiddenItemsList);
    }

    headerMenuWrapper.classList.add('js-enabled');
  } else {
    dropdownMenuButton.remove();
  }

  dropdownMenuButton.classList.add('js-processed');
  headerMenuWrapper.classList.add('js-processed');
}

collapsibleDropdownList();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_header_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/page-header/page-header */ "./src/blocks/modules/page-header/page-header.js");
/* harmony import */ var _modules_page_header_page_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_page_header_page_header__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
 // import Swiper from 'swiper';

/***/ })

/******/ });
//# sourceMappingURL=main.js.map