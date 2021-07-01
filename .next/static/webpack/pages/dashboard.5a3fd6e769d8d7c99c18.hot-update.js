webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CardVideoSymptoms.tsx":
/*!******************************************!*\
  !*** ./components/CardVideoSymptoms.tsx ***!
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


var _jsxFileName = "C:\\Users\\Kiet Nguyen\\Desktop\\corona-app\\components\\CardVideoSymptoms.tsx",
    _this = undefined;




var CardVideoSymptoms = function CardVideoSymptoms(_ref) {
  var video = _ref.video,
      name = _ref.name,
      description = _ref.description,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    bg: "white",
    mx: 15,
    mb: 10,
    sx: {
      height: 270,
      borderRadius: 16,
      flexDirection: "column",
      boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
      ":active": {
        transform: "scale(0.99)"
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
      style: {
        borderRadius: 10,
        border: "white solid 0",
        margin: 10
      },
      src: video,
      height: 180
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      mx: 15,
      onClick: onClick,
      sx: {
        flexDirection: "column",
        cursor: "pointer"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "bigStone",
        mb: "5px",
        sx: {
          fontSize: 15,
          fontWeight: "heading"
        },
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_c = CardVideoSymptoms;
/* harmony default export */ __webpack_exports__["default"] = (CardVideoSymptoms);

var _c;

$RefreshReg$(_c, "CardVideoSymptoms");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZFZpZGVvU3ltcHRvbXMiLCJ2aWRlbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyZWN0aW9uIiwiYm94U2hhZG93IiwidHJhbnNmb3JtIiwiYm9yZGVyIiwibWFyZ2luIiwiY3Vyc29yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxJQUFNQSxpQkFBNkMsR0FBRyxTQUFoREEsaUJBQWdELE9BS2hEO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFLEVBSE47QUFJRSxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLEdBRE47QUFFRkMsa0JBQVksRUFBRSxFQUZaO0FBR0ZDLG1CQUFhLEVBQUUsUUFIYjtBQUlGQyxlQUFTLEVBQUUsbUNBSlQ7QUFLRixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFMVCxLQUpOO0FBQUEsNEJBY0U7QUFDRSxXQUFLLEVBQUU7QUFDTEgsb0JBQVksRUFBRSxFQURUO0FBRUxJLGNBQU0sRUFBRSxlQUZIO0FBR0xDLGNBQU0sRUFBRTtBQUhILE9BRFQ7QUFNRSxTQUFHLEVBQUVWLEtBTlA7QUFPRSxZQUFNLEVBQUU7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEYsZUF3QkUscUVBQUMsNkNBQUQ7QUFDRSxRQUFFLEVBQUUsRUFETjtBQUVFLGFBQU8sRUFBRUcsT0FGWDtBQUdFLFFBQUUsRUFBRTtBQUFFRyxxQkFBYSxFQUFFLFFBQWpCO0FBQTJCSyxjQUFNLEVBQUU7QUFBbkMsT0FITjtBQUFBLDhCQUtFLHFFQUFDLDZDQUFEO0FBQ0UsYUFBSyxFQUFDLFVBRFI7QUFFRSxVQUFFLEVBQUMsS0FGTDtBQUdFLFVBQUUsRUFBRTtBQUFFQyxrQkFBUSxFQUFFLEVBQVo7QUFBZ0JDLG9CQUFVLEVBQUU7QUFBNUIsU0FITjtBQUFBLGtCQUtHWjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQVlFLHFFQUFDLDZDQUFEO0FBQU0sYUFBSyxFQUFDLFlBQVo7QUFBeUIsVUFBRSxFQUFFO0FBQUVXLGtCQUFRLEVBQUUsQ0FBWjtBQUFlRSxpQkFBTyxFQUFFO0FBQXhCLFNBQTdCO0FBQUEsa0JBQ0daO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQWpERDs7S0FBTUgsaUI7QUFtRFNBLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC41YTNmZDZlNzY5ZDhkN2M5OWMxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsZXgsIFRleHQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuXHJcbmludGVyZmFjZSBDYXJkVmlkZW9TeW1wdG9tc1Byb3BzIHtcclxuICB2aWRlbzogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IENhcmRWaWRlb1N5bXB0b21zOiBGQzxDYXJkVmlkZW9TeW1wdG9tc1Byb3BzPiA9ICh7XHJcbiAgdmlkZW8sXHJcbiAgbmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBvbkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICBteD17MTV9XHJcbiAgICAgIG1iPXsxMH1cclxuICAgICAgc3g9e3tcclxuICAgICAgICBoZWlnaHQ6IDI3MCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcInJnYigwIDAgMCAvIDUlKSAxcHggMTBweCAxMHB4IDFweFwiLFxyXG4gICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45OSlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBib3JkZXI6IFwid2hpdGUgc29saWQgMFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNyYz17dmlkZW99XHJcbiAgICAgICAgaGVpZ2h0PXsxODB9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIG14PXsxNX1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIHN4PXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBjb2xvcj1cImJpZ1N0b25lXCJcclxuICAgICAgICAgIG1iPVwiNXB4XCJcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogXCJoZWFkaW5nXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJvdXRlclNwYWNlXCIgc3g9e3sgZm9udFNpemU6IDAsIG9wYWNpdHk6IDAuNiB9fT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFZpZGVvU3ltcHRvbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=