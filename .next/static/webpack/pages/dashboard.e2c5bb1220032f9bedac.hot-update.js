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
      transition: "all 0.3s ease-in-out 0s",
      boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
      ":active": {
        transform: "scale(0.95)"
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
      width: 310
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
        lineNumber: 53,
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
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tcy50c3giXSwibmFtZXMiOlsiQ2FyZFZpZGVvU3ltcHRvbXMiLCJ2aWRlbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJvbkNsaWNrIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZmxleERpcmVjdGlvbiIsInRyYW5zaXRpb24iLCJib3hTaGFkb3ciLCJ0cmFuc2Zvcm0iLCJib3JkZXIiLCJtYXJnaW4iLCJjdXJzb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNBLElBQU1BLGlCQUE2QyxHQUFHLFNBQWhEQSxpQkFBZ0QsT0FNaEQ7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxJQUVJLFFBRkpBLElBRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7QUFDSixzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLFFBQUksRUFBRUQsSUFEUjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsTUFBRSxFQUFDLE9BSEw7QUFJRSxNQUFFLEVBQUUsRUFKTjtBQUtFLE1BQUUsRUFBRSxFQUxOO0FBTUUsTUFBRSxFQUFFO0FBQ0ZFLFlBQU0sRUFBRSxHQUROO0FBR0ZDLGtCQUFZLEVBQUUsRUFIWjtBQUlGQyxtQkFBYSxFQUFFLFFBSmI7QUFLRkMsZ0JBQVUsRUFBRSx5QkFMVjtBQU1GQyxlQUFTLEVBQUUsbUNBTlQ7QUFPRixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFQVCxLQU5OO0FBQUEsNEJBa0JFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xKLG9CQUFZLEVBQUUsRUFEVDtBQUVMSyxjQUFNLEVBQUUsZUFGSDtBQUdMQyxjQUFNLEVBQUU7QUFISCxPQURUO0FBTUUsU0FBRyxFQUFFWixLQU5QO0FBT0UsWUFBTSxFQUFFLEdBUFY7QUFRRSxXQUFLLEVBQUU7QUFSVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGLGVBNkJFLHFFQUFDLDZDQUFEO0FBQ0UsUUFBRSxFQUFFLEVBRE47QUFFRSxhQUFPLEVBQUVJLE9BRlg7QUFHRSxRQUFFLEVBQUU7QUFBRUcscUJBQWEsRUFBRSxRQUFqQjtBQUEyQk0sY0FBTSxFQUFFO0FBQW5DLE9BSE47QUFBQSw4QkFLRSxxRUFBQyw2Q0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsVUFBRSxFQUFDLEtBRkw7QUFHRSxVQUFFLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBSE47QUFBQSxrQkFLR2Q7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFZRSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyxZQUFaO0FBQXlCLFVBQUUsRUFBRTtBQUFFYSxrQkFBUSxFQUFFLENBQVo7QUFBZUUsaUJBQU8sRUFBRTtBQUF4QixTQUE3QjtBQUFBLGtCQUNHZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0F2REQ7O0tBQU1ILGlCO0FBeURTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZTJjNWJiMTIyMDAzMmY5YmVkYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBUZXh0LCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZFZpZGVvU3ltcHRvbXNQcm9wcyB7XHJcbiAgdmlkZW86IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBsaW5rOiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbn1cclxuY29uc3QgQ2FyZFZpZGVvU3ltcHRvbXM6IEZDPENhcmRWaWRlb1N5bXB0b21zUHJvcHM+ID0gKHtcclxuICB2aWRlbyxcclxuICBuYW1lLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGxpbmssXHJcbiAgb25DbGljayxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBocmVmPXtsaW5rfVxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgbXg9ezE1fVxyXG4gICAgICBtYj17MTB9XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzAsXHJcblxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTYsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcInJnYigwIDAgMCAvIDUlKSAxcHggMTBweCAxMHB4IDFweFwiLFxyXG4gICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgICAgICBib3JkZXI6IFwid2hpdGUgc29saWQgMFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNyYz17dmlkZW99XHJcbiAgICAgICAgaGVpZ2h0PXsxODB9XHJcbiAgICAgICAgd2lkdGg9ezMxMH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgbXg9ezE1fVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgc3g9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIGNvbG9yPVwiYmlnU3RvbmVcIlxyXG4gICAgICAgICAgbWI9XCI1cHhcIlxyXG4gICAgICAgICAgc3g9e3sgZm9udFNpemU6IDE1LCBmb250V2VpZ2h0OiBcImhlYWRpbmdcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIm91dGVyU3BhY2VcIiBzeD17eyBmb250U2l6ZTogMCwgb3BhY2l0eTogMC42IH19PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkVmlkZW9TeW1wdG9tcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==