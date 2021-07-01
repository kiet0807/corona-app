module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__("zqBN");

// CONCATENATED MODULE: ./styles/theme.ts
const theme = {
  fontSizes: [12, 14, 16, 18, 20, 22, 24],
  colors: {
    primary: "blue",
    secondary: "grey",
    white: "#fff",
    bigStone: "#1C2D41",
    outerSpace: "#202E2E",
    chelseaCucumber: "#7DA751",
    chelseaCucumber18: "rgba(125, 167, 81, 0.18)",
    mistGray: "#C2C2B5"
  },
  images: {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 10
    },
    symptoms: {
      m: 10,
      mb: 0,
      height: 110,
      borderRadius: 10
    },
    boarding: {
      width: "100%",
      height: 270
    },
    corona: {
      width: 150,
      height: 25
    },
    person: {
      width: 111,
      height: 130
    },
    diagnosis: {
      mt: 25,
      mb: 15,
      width: 150,
      height: 140
    }
  },
  buttons: {
    primary: {
      bg: "#fff",
      borderRadius: 23,
      height: 45,
      width: 90,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 4px 4px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    secondary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 40,
      width: 135,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    tertiary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 120,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    phone: {
      mt: "5px",
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 200,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    }
  },
  fontWeights: {
    body: 500,
    heading: 900
  }
};
// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_theme_ui_["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ }),

/***/ "zqBN":
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });