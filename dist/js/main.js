/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/language-select/language-select.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/language-select/language-select.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var breakpoint = window.matchMedia('(min-width:768px)');

if (breakpoint) {
  var buttonLanguage = document.querySelector('.js-language-button');
  var languageList = document.querySelector('.js-language-list');

  var openMobileMenu = function openMobileMenu() {
    buttonLanguage.classList.add('js-language-button--active');
    languageList.classList.add('js-language-list--active');
  };

  var closeMobileMenu = function closeMobileMenu() {
    buttonLanguage.classList.remove('js-language-button--active');
    languageList.classList.remove('js-language-list--active');
  };

  buttonLanguage.addEventListener('click', function () {
    if (buttonLanguage.classList.contains('js-language-button--active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  document.addEventListener('click', function (evt) {
    var targetClick = evt.target;
    var itsMenu = targetClick === languageList || languageList.contains(targetClick);
    var itsHamburger = targetClick === buttonLanguage;
    var menuIsActive = languageList.classList.contains('js-language-list--active');

    if (!itsMenu && !itsHamburger && menuIsActive) {
      closeMobileMenu();
    }
  });
} // export default function openMobileMenu() {
//     const breakpoint = window.matchMedia('(min-width:768px)');
//     const button = document.querySelector('.language-select__open-btn');
//     const menu = document.querySelector('.page-header__navigation');
//     const buttonLanguage = document.querySelector('.menu-item-wrapper__link');
//     const menuBackList = document.querySelector('.menu-back__list');
//     const menuBtnLanguage = document.querySelector('.js-language-btn');
//     const bodyPage = document.querySelector('body');
//     const mainNavigation = document.querySelector('.main-navigation');
//     const closeMenu = () => {
//       menu.style.transition = 'max-height 0.2s';
//       menu.style.maxHeight = 0;
//       bodyPage.style.overflowY = 'scroll';
//       button.classList.remove('language-select__open-btn--active');
//     };
//     const openMenu = () => {
//       menu.style.transition = 'max-height 0.2s';
//       menu.style.maxHeight = 'calc(100vh - 100px)';
//       bodyPage.style.overflowY = 'hidden';
//       button.classList.add('language-select__open-btn--active');
//     };
//     button.addEventListener('click', function () {
//         if (button.classList.contains('language-select__open-btn--active')) {
//             console.log(1)
//             closeMenu();
//         } else {
//             console.log(2)
//             openMenu();
//         }
//     })
//     const removeClassLang = () => {
//       menuBackList.classList.remove('menu-back__list--active');
//       mainNavigation.style.overflowY = 'scroll';
//     };
//     const openMenuLang = () => {
//       menuBackList.style.transition = 'transform 0.2s';
//       menuBackList.classList.add('menu-back__list--active');
//       mainNavigation.style.overflowY = 'hidden';
//       if (menuBackList.classList.contains('menu-back__list--active')) {
//         menuBtnLanguage.addEventListener('click', removeClassLang);
//       } else {
//         menuBtnLanguage.removeEventListener('click', removeClassLang);
//       }
//     };
//     const clickButton = () => {
//       if (button.classList.contains('language-select__open-btn--active')) {
//         closeMenu();
//         buttonLanguage.removeEventListener('click', openMenuLang);
//       } else {
//         openMenu();
//         buttonLanguage.addEventListener('click', openMenuLang);
//       }
//     };
//     const breakpointChecker = () => {
//       if (breakpoint.matches === true) {
//         button.removeEventListener('click', clickButton);
//         bodyPage.style.overflowY = 'scroll';
//         menu.style.maxHeight = menu.scrollHeight + 'px';
//       } else if (breakpoint.matches === false) {
//         button.addEventListener('click', clickButton);
//         menu.style.maxHeight = 0;
//       }
//     };
//     breakpoint.addListener(breakpointChecker);
//     breakpointChecker();
//   }
//   openMobileMenu();

/***/ }),

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

/***/ "./src/blocks/modules/page-main/page-main.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/page-main/page-main.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return characterPopup; });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);

 // TODO: move inside separate utils file

var UINode = document.querySelector('#js-char-popup-ui');
var touchScreen = ('ontouchstart' in document.documentElement);
var popupArea = document.querySelector('#js-char-popup-area');

function escapeHTML(unsafe) {
  return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function isCopiedSymbol(num) {
  return !(num < 32 || num === 127 || num >= 128 && num < 160 || num >= 55296 && num <= 57343 || num === 1564);
}

function prepareContent(reference) {
  var data = JSON.parse(reference.getAttribute('data-template'));

  if (data) {
    var symbolNum = data.html_code.match(/\d+/g);
    /* eslint-disable indent */

    var content = "<div id=\"js-char-popup-template\" class=\"char\">\n        <div class=\"char__content\">\n          <div class=\"char__header\">\n            ".concat(data.image ? "<img class=\"char__image\" src=\"".concat(data.image, "\" alt=\"").concat(data.symbol, "\">") : "<span class=\"vchar ".concat(data.css_class ? data.css_class : '', "\">").concat(data.symbol, "</span>"), "\n          </div>\n\n          <div class=\"desc\">\n            <a href=\"").concat(data.url, "\">").concat(data.title, "</a>\n          </div>\n\n          <div class=\"char__codes\">\n            <div class=\"char__code-names\">\n              <div class=\"char__unicode-num\">").concat(UINode.dataset.unicodeNumber, ":</div>\n              <div class=\"char__html-code\">").concat(UINode.dataset.htmlCode, ":</div>\n            </div>\n            <div class=\"char__code-values\">\n              <div class=\"unicode-num\"><span class=\"code\">").concat(escapeHTML(data.number), "</span></div>\n              <div class=\"html-code\"><span class=\"code\">").concat(escapeHTML(data.html_code), "</span></div>\n            </div>\n          </div>\n        </div>\n        \n        \n        ").concat(isCopiedSymbol(symbolNum) ? "<div class=\"char__copy\">\n            <input type=\"button\" class=\"b-copy-char-button b-copy-char-button--block symbol-copy\"\n              data-goal=\"copy_symbol\"\n              data-clipboard-text=\"".concat(data.symbol, "\"\n              data-symbol=\"").concat(data.symbol, "\"\n              value=\"").concat(UINode.dataset.buttonText, "\">\n          </div>") : '', "\n      </div>");
    /* eslint-enable indent */

    return content;
  }

  return false;
}

function characterPopup() {
  if (UINode && popupArea) {
    if (touchScreen) {
      popupArea.addEventListener('click', function (event) {
        if (event.target.classList.contains('js-char-popup-item') || event.target.parentNode.classList.contains('js-char-popup-item')) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }

    if (window.innerWidth < 768) {
      var tippyInstance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_0__["default"])(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        trigger: 'manual',
        appendTo: function appendTo() {
          return document.body;
        },
        content: function content(reference) {
          return prepareContent(reference);
        }
      });
      var overlayFragment = document.createRange().createContextualFragment('<div class="js-char-popup-overlay" style="display: none;"></div>');
      document.body.appendChild(overlayFragment);
      var overlay = document.body.querySelector('.js-char-popup-overlay');

      var hideTippy = function hideTippy() {
        tippyInstance.hide();
        overlay.style.display = 'none';
      };

      overlay.addEventListener('click', hideTippy);

      var showTippy = function showTippy(reference) {
        tippyInstance.setContent(prepareContent(reference));
        overlay.style.display = 'block';
        tippyInstance.show();
      };

      popupArea.addEventListener('click', function (event) {
        if (event.target.classList.contains('js-char-popup-item')) {
          showTippy(event.target);
        } else if (event.target.parentNode.classList.contains('js-char-popup-item')) {
          showTippy(event.target.parentNode);
        }
      });
    } else {
      var openTooltip = function openTooltip() {
        console.log(2);
      };

      delegate(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        placement: 'right-start',
        target: '.js-char-popup-item',
        delay: [400, 200],
        duration: 200,
        appendTo: function appendTo() {
          return document.body;
        },
        content: function content(reference) {
          return prepareContent(reference);
        },
        onShown: function onShown() {
          var button = document.querySelector('.b-copy-char-button'); //   let clipboard = new ClipboardJS(button);
          //   const openTooltip = () => {
          //     const symbol = button.dataset.clipboardText;
          //     let popup = document.querySelector('.set-v2-popup')
          //     let symbolCopy = popup.querySelector('.set-v2-popup-symbol');
          //     symbolCopy.textContent = symbol;
          //     popup.classList.add('set-v2-popup--active');
          //     setTimeout(() => {
          //       popup.classList.remove('set-v2-popup--active')
          //     }, 900)
          //   }

          if (button) {
            button.addEventListener('click', openTooltip);
          }
        },
        onHide: function onHide() {
          var button = document.querySelector('.b-copy-char-button');

          if (button) {
            button.removeEventListener('click', openTooltip);
          }
        }
      });
    }
  }
}

/***/ }),

/***/ "./src/blocks/modules/proposed-sets/proposed-sets.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/proposed-sets/proposed-sets.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return asideMobile; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

function asideMobile() {
  var blogContainer = document.querySelector('.page-content__side');
  var breakpoint = window.matchMedia('(min-width:1024px)');
  var mySwiper;

  function enableSwiper() {
    if (blogContainer) {
      mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](blogContainer, {
        direction: 'horizontal',
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 'auto'
      });
    }
  }

  var breakpointChecker = function breakpointChecker() {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}
asideMobile();

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
/* harmony import */ var _modules_page_main_page_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/page-main/page-main */ "./src/blocks/modules/page-main/page-main.js");
/* harmony import */ var _modules_proposed_sets_proposed_sets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/proposed-sets/proposed-sets */ "./src/blocks/modules/proposed-sets/proposed-sets.js");
/* harmony import */ var _modules_language_select_language_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/language-select/language-select */ "./src/blocks/modules/language-select/language-select.js");
/* harmony import */ var _modules_language_select_language_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_language_select_language_select__WEBPACK_IMPORTED_MODULE_3__);





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


/***/ })

/******/ });
//# sourceMappingURL=main.js.map