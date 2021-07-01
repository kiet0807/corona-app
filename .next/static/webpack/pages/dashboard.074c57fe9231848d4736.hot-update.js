webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CardButton.tsx":
/*!***********************************!*\
  !*** ./components/CardButton.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _public_whiteArrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/whiteArrow.svg */ "./public/whiteArrow.svg");


var _jsxFileName = "C:\\Users\\Kiet Nguyen\\Desktop\\corona-app\\components\\CardButton.tsx",
    _this = undefined;





var CardButton = function CardButton(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    bg: "white",
    mx: 15,
    sx: {
      borderRadius: 16,
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "rgb(0 0 0 / 5%) 1px 8px 8px 1px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      my: 18,
      ml: 20,
      mr: 80,
      color: "#4F4F7D",
      sx: {
        fontSize: 20,
        lineHeight: "30px",
        fontWeight: "heading"
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#4F4F7D",
      mx: 20,
      sx: {
        fontSize: 1,
        fontWeight: "600",
        opacity: 0.6
      },
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      mx: 20,
      sx: {
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onClick,
        variant: "secondary",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: "https://tuoitre.vn/tim-kiem.htm?keywords=covid",
          target: "_blank",
          mr: 20,
          sx: {
            fontSize: 14,
            color: "white",
            fontWeight: "600"
          },
          children: ["See More", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_whiteArrow_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
        src: "/images/person.PNG",
        variant: "person"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = CardButton;
/* harmony default export */ __webpack_exports__["default"] = (CardButton);

var _c;

$RefreshReg$(_c, "CardButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJDYXJkQnV0dG9uIiwidGl0bGUiLCJjb250ZW50Iiwib25DbGljayIsImJvcmRlclJhZGl1cyIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJveFNoYWRvdyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHQiLCJvcGFjaXR5IiwiYWxpZ25JdGVtcyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVFBLElBQU1BLFVBQStCLEdBQUcsU0FBbENBLFVBQWtDLE9BQWlDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDdkUsc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLE1BQUUsRUFBRSxFQUZOO0FBR0UsTUFBRSxFQUFFO0FBQ0ZDLGtCQUFZLEVBQUUsRUFEWjtBQUVGQyxtQkFBYSxFQUFFLFFBRmI7QUFHRkMsb0JBQWMsRUFBRSxlQUhkO0FBSUZDLGVBQVMsRUFBRTtBQUpULEtBSE47QUFBQSw0QkFVRSxxRUFBQyw2Q0FBRDtBQUNFLFFBQUUsRUFBRSxFQUROO0FBRUUsUUFBRSxFQUFFLEVBRk47QUFHRSxRQUFFLEVBQUUsRUFITjtBQUlFLFdBQUssRUFBQyxTQUpSO0FBS0UsUUFBRSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsRUFEUjtBQUVGQyxrQkFBVSxFQUFFLE1BRlY7QUFHRkMsa0JBQVUsRUFBRTtBQUhWLE9BTE47QUFBQSxnQkFXR1Q7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUF1QkUscUVBQUMsNkNBQUQ7QUFDRSxXQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUUsRUFBRSxFQUZOO0FBR0UsUUFBRSxFQUFFO0FBQ0ZPLGdCQUFRLEVBQUUsQ0FEUjtBQUdGRSxrQkFBVSxFQUFFLEtBSFY7QUFJRkMsZUFBTyxFQUFFO0FBSlAsT0FITjtBQUFBLGdCQVVHVDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkYsZUFvQ0UscUVBQUMsNkNBQUQ7QUFDRSxRQUFFLEVBQUUsRUFETjtBQUVFLFFBQUUsRUFBRTtBQUNGSSxzQkFBYyxFQUFFLGVBRGQ7QUFFRk0sa0JBQVUsRUFBRTtBQUZWLE9BRk47QUFBQSw4QkFPRSxxRUFBQywrQ0FBRDtBQUFRLGVBQU8sRUFBRVQsT0FBakI7QUFBMEIsZUFBTyxFQUFDLFdBQWxDO0FBQUEsK0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxjQUFJLEVBQUMsZ0RBRFA7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxZQUFFLEVBQUUsRUFITjtBQUlFLFlBQUUsRUFBRTtBQUNGSyxvQkFBUSxFQUFFLEVBRFI7QUFFRkssaUJBQUssRUFBRSxPQUZMO0FBR0ZILHNCQUFVLEVBQUU7QUFIVixXQUpOO0FBQUEsOENBV0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFzQkUscUVBQUMsOENBQUQ7QUFBTyxXQUFHLEVBQUMsb0JBQVg7QUFBZ0MsZUFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBaEVEOztLQUFNVixVO0FBa0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuMDc0YzU3ZmU5MjMxODQ4ZDQ3MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZsZXgsIFRleHQsIEltYWdlLCBMaW5rIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBXaGl0ZUFycm93SWNvbiBmcm9tIFwiLi4vcHVibGljL3doaXRlQXJyb3cuc3ZnXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FyZEJ1dHRvblByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ2FyZEJ1dHRvbjogRkM8Q2FyZEJ1dHRvblByb3BzPiA9ICh7IHRpdGxlLCBjb250ZW50LCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgIG14PXsxNX1cclxuICAgICAgc3g9e3tcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCJyZ2IoMCAwIDAgLyA1JSkgMXB4IDhweCA4cHggMXB4XCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgbXk9ezE4fVxyXG4gICAgICAgIG1sPXsyMH1cclxuICAgICAgICBtcj17ODB9XHJcbiAgICAgICAgY29sb3I9XCIjNEY0RjdEXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgY29sb3I9XCIjNEY0RjdEXCJcclxuICAgICAgICBteD17MjB9XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGZvbnRTaXplOiAxLFxyXG5cclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNjAwXCIsXHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIG14PXsyMH1cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90dW9pdHJlLnZuL3RpbS1raWVtLmh0bT9rZXl3b3Jkcz1jb3ZpZFwiXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIG1yPXsyMH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWUgTW9yZVxyXG4gICAgICAgICAgICA8V2hpdGVBcnJvd0ljb24gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9wZXJzb24uUE5HXCIgdmFyaWFudD1cInBlcnNvblwiIC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJ1dHRvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==