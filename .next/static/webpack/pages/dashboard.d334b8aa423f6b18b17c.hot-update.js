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
        lineNumber: 42,
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
        lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZFZpZGVvU3ltcHRvbXMiLCJ2aWRlbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyZWN0aW9uIiwiYm94U2hhZG93IiwidHJhbnNmb3JtIiwiYm9yZGVyIiwibWFyZ2luIiwiY3Vyc29yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxJQUFNQSxpQkFBNkMsR0FBRyxTQUFoREEsaUJBQWdELE9BS2hEO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFLEVBSE47QUFJRSxNQUFFLEVBQUU7QUFDRkMsWUFBTSxFQUFFLEdBRE47QUFFRkMsa0JBQVksRUFBRSxFQUZaO0FBR0ZDLG1CQUFhLEVBQUUsUUFIYjtBQUlGQyxlQUFTLEVBQUUsbUNBSlQ7QUFLRixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFMVCxLQUpOO0FBQUEsNEJBY0U7QUFDRSxXQUFLLEVBQUU7QUFDTEgsb0JBQVksRUFBRSxFQURUO0FBRUxJLGNBQU0sRUFBRSxlQUZIO0FBR0xDLGNBQU0sRUFBRTtBQUhILE9BRFQ7QUFNRSxTQUFHLEVBQUVWLEtBTlA7QUFPRSxZQUFNLEVBQUU7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEYsZUF3QkUscUVBQUMsNkNBQUQ7QUFBTSxRQUFFLEVBQUUsRUFBVjtBQUFjLFFBQUUsRUFBRTtBQUFFTSxxQkFBYSxFQUFFLFFBQWpCO0FBQTJCSyxjQUFNLEVBQUU7QUFBbkMsT0FBbEI7QUFBQSw4QkFDRSxxRUFBQyw2Q0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsVUFBRSxFQUFDLEtBRkw7QUFHRSxVQUFFLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBSE47QUFBQSxrQkFLR1o7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyxZQUFaO0FBQXlCLFVBQUUsRUFBRTtBQUFFVyxrQkFBUSxFQUFFLENBQVo7QUFBZUUsaUJBQU8sRUFBRTtBQUF4QixTQUE3QjtBQUFBLGtCQUNHWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1Q0QsQ0E3Q0Q7O0tBQU1ILGlCO0FBK0NTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZDMzNGI4YWE0MjNmNmIxOGIxN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFZpZGVvU3ltcHRvbXNQcm9wcyB7XHJcbiAgdmlkZW86IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5jb25zdCBDYXJkVmlkZW9TeW1wdG9tczogRkM8Q2FyZFZpZGVvU3ltcHRvbXNQcm9wcz4gPSAoe1xyXG4gIHZpZGVvLFxyXG4gIG5hbWUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgb25DbGljayxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgbXg9ezE1fVxyXG4gICAgICBtYj17MTB9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCJyZ2IoMCAwIDAgLyA1JSkgMXB4IDEwcHggMTBweCAxcHhcIixcclxuICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTkpXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIndoaXRlIHNvbGlkIDBcIixcclxuICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzcmM9e3ZpZGVvfVxyXG4gICAgICAgIGhlaWdodD17MTgwfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEZsZXggbXg9ezE1fSBzeD17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgIDxUZXh0XHJcbiAgICAgICAgICBjb2xvcj1cImJpZ1N0b25lXCJcclxuICAgICAgICAgIG1iPVwiNXB4XCJcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAxNSwgZm9udFdlaWdodDogXCJoZWFkaW5nXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bmFtZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJvdXRlclNwYWNlXCIgc3g9e3sgZm9udFNpemU6IDAsIG9wYWNpdHk6IDAuNiB9fT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFZpZGVvU3ltcHRvbXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=