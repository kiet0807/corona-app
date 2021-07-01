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
      link = _ref.link,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: link,
    target: "_blank",
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
      height: 180,
      width: 300
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 52,
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
        lineNumber: 59,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZFZpZGVvU3ltcHRvbXMiLCJ2aWRlbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJvbkNsaWNrIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZmxleERpcmVjdGlvbiIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsImJvcmRlciIsIm1hcmdpbiIsImN1cnNvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsSUFBTUEsaUJBQTZDLEdBQUcsU0FBaERBLGlCQUFnRCxPQU1oRDtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLFdBR0ksUUFISkEsV0FHSTtBQUFBLE1BRkpDLElBRUksUUFGSkEsSUFFSTtBQUFBLE1BREpDLE9BQ0ksUUFESkEsT0FDSTtBQUNKLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFRCxJQURSO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxNQUFFLEVBQUMsT0FITDtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxNQUFFLEVBQUU7QUFDRkUsWUFBTSxFQUFFLEdBRE47QUFHRkMsa0JBQVksRUFBRSxFQUhaO0FBSUZDLG1CQUFhLEVBQUUsUUFKYjtBQUtGQyxlQUFTLEVBQUUsbUNBTFQ7QUFNRixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFOVCxLQU5OO0FBQUEsNEJBaUJFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xILG9CQUFZLEVBQUUsRUFEVDtBQUVMSSxjQUFNLEVBQUUsZUFGSDtBQUdMQyxjQUFNLEVBQUU7QUFISCxPQURUO0FBTUUsU0FBRyxFQUFFWCxLQU5QO0FBT0UsWUFBTSxFQUFFLEdBUFY7QUFRRSxXQUFLLEVBQUU7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLGVBNEJFLHFFQUFDLDZDQUFEO0FBQ0UsUUFBRSxFQUFFLEVBRE47QUFFRSxhQUFPLEVBQUVJLE9BRlg7QUFHRSxRQUFFLEVBQUU7QUFBRUcscUJBQWEsRUFBRSxRQUFqQjtBQUEyQkssY0FBTSxFQUFFO0FBQW5DLE9BSE47QUFBQSw4QkFLRSxxRUFBQyw2Q0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsVUFBRSxFQUFDLEtBRkw7QUFHRSxVQUFFLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBSE47QUFBQSxrQkFLR2I7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFZRSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyxZQUFaO0FBQXlCLFVBQUUsRUFBRTtBQUFFWSxrQkFBUSxFQUFFLENBQVo7QUFBZUUsaUJBQU8sRUFBRTtBQUF4QixTQUE3QjtBQUFBLGtCQUNHYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQ0QsQ0F0REQ7O0tBQU1ILGlCO0FBd0RTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYmRlMzk0ZGZkOTdjYmIwNWRlMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBUZXh0LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFZpZGVvU3ltcHRvbXNQcm9wcyB7XHJcbiAgdmlkZW86IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuY29uc3QgQ2FyZFZpZGVvU3ltcHRvbXM6IEZDPENhcmRWaWRlb1N5bXB0b21zUHJvcHM+ID0gKHtcclxuICB2aWRlbyxcclxuICBuYW1lLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGxpbmssXHJcbiAgb25DbGljayxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgbXg9ezE1fVxyXG4gICAgICBtYj17MTB9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzAsXHJcblxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gNSUpIDFweCAxMHB4IDEwcHggMXB4XCIsXHJcbiAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk5KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZCAwXCIsXHJcbiAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3JjPXt2aWRlb31cclxuICAgICAgICBoZWlnaHQ9ezE4MH1cclxuICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBteD17MTV9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBzeD17eyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgY29sb3I9XCJiaWdTdG9uZVwiXHJcbiAgICAgICAgICBtYj1cIjVweFwiXHJcbiAgICAgICAgICBzeD17eyBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IFwiaGVhZGluZ1wiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge25hbWV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGNvbG9yPVwib3V0ZXJTcGFjZVwiIHN4PXt7IGZvbnRTaXplOiAwLCBvcGFjaXR5OiAwLjYgfX0+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRWaWRlb1N5bXB0b21zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9