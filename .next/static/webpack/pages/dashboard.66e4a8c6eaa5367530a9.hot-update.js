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
      height: 180
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
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
        lineNumber: 50,
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
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZFZpZGVvU3ltcHRvbXMiLCJ2aWRlbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJvbkNsaWNrIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZmxleERpcmVjdGlvbiIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsImJvcmRlciIsIm1hcmdpbiIsImN1cnNvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsSUFBTUEsaUJBQTZDLEdBQUcsU0FBaERBLGlCQUFnRCxPQU1oRDtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLElBSUksUUFKSkEsSUFJSTtBQUFBLE1BSEpDLFdBR0ksUUFISkEsV0FHSTtBQUFBLE1BRkpDLElBRUksUUFGSkEsSUFFSTtBQUFBLE1BREpDLE9BQ0ksUUFESkEsT0FDSTtBQUNKLHNCQUNFLHFFQUFDLDZDQUFEO0FBQ0UsUUFBSSxFQUFFRCxJQURSO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxNQUFFLEVBQUMsT0FITDtBQUlFLE1BQUUsRUFBRSxFQUpOO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFNRSxNQUFFLEVBQUU7QUFDRkUsWUFBTSxFQUFFLEdBRE47QUFFRkMsa0JBQVksRUFBRSxFQUZaO0FBR0ZDLG1CQUFhLEVBQUUsUUFIYjtBQUlGQyxlQUFTLEVBQUUsbUNBSlQ7QUFLRixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFMVCxLQU5OO0FBQUEsNEJBZ0JFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xILG9CQUFZLEVBQUUsRUFEVDtBQUVMSSxjQUFNLEVBQUUsZUFGSDtBQUdMQyxjQUFNLEVBQUU7QUFISCxPQURUO0FBTUUsU0FBRyxFQUFFWCxLQU5QO0FBT0UsWUFBTSxFQUFFO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRixlQTBCRSxxRUFBQyw2Q0FBRDtBQUNFLFFBQUUsRUFBRSxFQUROO0FBRUUsYUFBTyxFQUFFSSxPQUZYO0FBR0UsUUFBRSxFQUFFO0FBQUVHLHFCQUFhLEVBQUUsUUFBakI7QUFBMkJLLGNBQU0sRUFBRTtBQUFuQyxPQUhOO0FBQUEsOEJBS0UscUVBQUMsNkNBQUQ7QUFDRSxhQUFLLEVBQUMsVUFEUjtBQUVFLFVBQUUsRUFBQyxLQUZMO0FBR0UsVUFBRSxFQUFFO0FBQUVDLGtCQUFRLEVBQUUsRUFBWjtBQUFnQkMsb0JBQVUsRUFBRTtBQUE1QixTQUhOO0FBQUEsa0JBS0diO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBWUUscUVBQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUMsWUFBWjtBQUF5QixVQUFFLEVBQUU7QUFBRVksa0JBQVEsRUFBRSxDQUFaO0FBQWVFLGlCQUFPLEVBQUU7QUFBeEIsU0FBN0I7QUFBQSxrQkFDR2I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBcEREOztLQUFNSCxpQjtBQXNEU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjY2ZTRhOGM2ZWFhNTM2NzUzMGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgVGV4dCwgTGluayB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRWaWRlb1N5bXB0b21zUHJvcHMge1xyXG4gIHZpZGVvOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59XHJcbmNvbnN0IENhcmRWaWRlb1N5bXB0b21zOiBGQzxDYXJkVmlkZW9TeW1wdG9tc1Byb3BzPiA9ICh7XHJcbiAgdmlkZW8sXHJcbiAgbmFtZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBsaW5rLFxyXG4gIG9uQ2xpY2ssXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgaHJlZj17bGlua31cclxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgIG14PXsxNX1cclxuICAgICAgbWI9ezEwfVxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIGhlaWdodDogMjcwLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gNSUpIDFweCAxMHB4IDEwcHggMXB4XCIsXHJcbiAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk5KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgICAgICAgIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZCAwXCIsXHJcbiAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3JjPXt2aWRlb31cclxuICAgICAgICBoZWlnaHQ9ezE4MH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgbXg9ezE1fVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgc3g9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIGNvbG9yPVwiYmlnU3RvbmVcIlxyXG4gICAgICAgICAgbWI9XCI1cHhcIlxyXG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiBcImhlYWRpbmdcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIm91dGVyU3BhY2VcIiBzeD17eyBmb250U2l6ZTogMCwgb3BhY2l0eTogMC42IH19PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkVmlkZW9TeW1wdG9tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==