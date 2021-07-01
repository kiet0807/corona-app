webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CardImageSymptoms.tsx":
/*!******************************************!*\
  !*** ./components/CardImageSymptoms.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");


var _jsxFileName = "C:\\Users\\Kiet Nguyen\\Desktop\\corona-app\\components\\CardImageSymptoms.tsx",
    _this = undefined;




var CardImageSymptoms = function CardImageSymptoms(_ref) {
  var image = _ref.image,
      name = _ref.name,
      description = _ref.description,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    onClick: onClick,
    bg: "white",
    sx: {
      height: 215,
      borderRadius: 16,
      flexDirection: "column",
      transition: "all 0.3s ease-in-out 0s",
      boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
      cursor: "pointer",
      ":active": {
        transform: "scale(0.95)"
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: image,
      variant: "symptoms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      mx: 15,
      sx: {
        flexDirection: "column"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "bigStone",
        mb: "3px",
        sx: {
          fontSize: 1,
          fontWeight: "heading"
        },
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "outerSpace",
        sx: {
          fontSize: 0,
          opacity: 0.6
        },
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = CardImageSymptoms;
/* harmony default export */ __webpack_exports__["default"] = (CardImageSymptoms);

var _c;

$RefreshReg$(_c, "CardImageSymptoms");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2VTeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZEltYWdlU3ltcHRvbXMiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImN1cnNvciIsInRyYW5zZm9ybSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsSUFBTUEsaUJBQTZDLEdBQUcsU0FBaERBLGlCQUFnRCxPQUtoRDtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLE9BQ0ksUUFESkEsT0FDSTtBQUNKLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsV0FBTyxFQUFFQSxPQURYO0FBRUUsTUFBRSxFQUFDLE9BRkw7QUFHRSxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLEdBRE47QUFFRkMsa0JBQVksRUFBRSxFQUZaO0FBR0ZDLG1CQUFhLEVBQUUsUUFIYjtBQUlGQyxnQkFBVSxFQUFFLHlCQUpWO0FBS0ZDLGVBQVMsRUFBRSxtQ0FMVDtBQU1GQyxZQUFNLEVBQUUsU0FOTjtBQU9GLGlCQUFXO0FBQ1RDLGlCQUFTLEVBQUU7QUFERjtBQVBULEtBSE47QUFBQSw0QkFlRSxxRUFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRVYsS0FBWjtBQUFtQixhQUFPLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBaUJFLHFFQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFFLEVBQVY7QUFBYyxRQUFFLEVBQUU7QUFBRU0scUJBQWEsRUFBRTtBQUFqQixPQUFsQjtBQUFBLDhCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsYUFBSyxFQUFDLFVBRFI7QUFFRSxVQUFFLEVBQUMsS0FGTDtBQUdFLFVBQUUsRUFBRTtBQUFFSyxrQkFBUSxFQUFFLENBQVo7QUFBZUMsb0JBQVUsRUFBRTtBQUEzQixTQUhOO0FBQUEsa0JBS0dYO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUUscUVBQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUMsWUFBWjtBQUF5QixVQUFFLEVBQUU7QUFBRVUsa0JBQVEsRUFBRSxDQUFaO0FBQWVFLGlCQUFPLEVBQUU7QUFBeEIsU0FBN0I7QUFBQSxrQkFDR1g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBdENEOztLQUFNSCxpQjtBQXdDU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjc3ZWU2YmQyN2NiNzE5ZTZlODNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgVGV4dCwgSW1hZ2UgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmludGVyZmFjZSBDYXJkSW1hZ2VTeW1wdG9tc1Byb3BzIHtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IENhcmRJbWFnZVN5bXB0b21zOiBGQzxDYXJkSW1hZ2VTeW1wdG9tc1Byb3BzPiA9ICh7XHJcbiAgaW1hZ2UsXHJcbiAgbmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBvbkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGhlaWdodDogMjE1LFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcInJnYigwIDAgMCAvIDUlKSAxcHggMTBweCAxMHB4IDFweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB2YXJpYW50PVwic3ltcHRvbXNcIiAvPlxyXG5cclxuICAgICAgPEZsZXggbXg9ezE1fSBzeD17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBjb2xvcj1cImJpZ1N0b25lXCJcclxuICAgICAgICAgIG1iPVwiM3B4XCJcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAxLCBmb250V2VpZ2h0OiBcImhlYWRpbmdcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIm91dGVyU3BhY2VcIiBzeD17eyBmb250U2l6ZTogMCwgb3BhY2l0eTogMC42IH19PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSW1hZ2VTeW1wdG9tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==