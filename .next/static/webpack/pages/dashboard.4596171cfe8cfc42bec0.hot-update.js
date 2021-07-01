webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/CardPrevention.tsx":
/*!***************************************!*\
  !*** ./components/CardPrevention.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _public_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/arrow.svg */ "./public/arrow.svg");


var _jsxFileName = "C:\\Users\\Kiet Nguyen\\Desktop\\corona-app\\components\\CardPrevention.tsx",
    _this = undefined;





var CardPrevention = function CardPrevention(_ref) {
  var image = _ref.image,
      nameCard = _ref.nameCard,
      description = _ref.description,
      numberDiscussions = _ref.numberDiscussions,
      onClick = _ref.onClick,
      onDiscussions = _ref.onDiscussions;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    columns: [2, "1fr 2fr"],
    mx: 15,
    mb: 10,
    p: "7px",
    bg: "white",
    sx: {
      borderRadius: 16,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      boxShadow: "rgb(0 0 0 / 5%) 1px 8px 8px 1px",
      ":active": {
        transform: "scale(0.95)"
      }
    },
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: image,
      variant: "avatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      my: "7px",
      sx: {
        flexDirection: "column"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "bigStone",
        mb: "5px",
        sx: {
          fontSize: 15,
          fontWeight: 700
        },
        children: nameCard
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "outerSpace",
        mb: 9,
        mr: "5px",
        sx: {
          fontSize: 0,
          opacity: 0.6
        },
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        sx: {
          alignItems: "center"
        },
        onClick: onDiscussions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          color: "chelseaCucumber",
          mr: 15,
          sx: {
            fontSize: 14
          },
          children: [numberDiscussions, " Discussions"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_arrow_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c = CardPrevention;
/* harmony default export */ __webpack_exports__["default"] = (CardPrevention);

var _c;

$RefreshReg$(_c, "CardPrevention");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkUHJldmVudGlvbi50c3giXSwibmFtZXMiOlsiQ2FyZFByZXZlbnRpb24iLCJpbWFnZSIsIm5hbWVDYXJkIiwiZGVzY3JpcHRpb24iLCJudW1iZXJEaXNjdXNzaW9ucyIsIm9uQ2xpY2siLCJvbkRpc2N1c3Npb25zIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsInRyYW5zZm9ybSIsImZsZXhEaXJlY3Rpb24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJvcGFjaXR5IiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNQSxjQUF1QyxHQUFHLFNBQTFDQSxjQUEwQyxPQU8xQztBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLGlCQUdJLFFBSEpBLGlCQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsYUFDSSxRQURKQSxhQUNJO0FBQ0osc0JBQ0UscUVBQUMsNkNBQUQ7QUFDRSxXQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksU0FBSixDQURYO0FBRUUsTUFBRSxFQUFFLEVBRk47QUFHRSxNQUFFLEVBQUUsRUFITjtBQUlFLEtBQUMsRUFBRSxLQUpMO0FBS0UsTUFBRSxFQUFDLE9BTEw7QUFNRSxNQUFFLEVBQUU7QUFDRkMsa0JBQVksRUFBRSxFQURaO0FBRUZDLFlBQU0sRUFBRSxTQUZOO0FBR0ZDLGdCQUFVLEVBQUUseUJBSFY7QUFJRkMsZUFBUyxFQUFFLGlDQUpUO0FBS0YsaUJBQVc7QUFDVEMsaUJBQVMsRUFBRTtBQURGO0FBTFQsS0FOTjtBQWVFLFdBQU8sRUFBRU4sT0FmWDtBQUFBLDRCQWlCRSxxRUFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRUosS0FBWjtBQUFtQixhQUFPLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRixlQW1CRSxxRUFBQyw2Q0FBRDtBQUFNLFFBQUUsRUFBQyxLQUFUO0FBQWUsUUFBRSxFQUFFO0FBQUVXLHFCQUFhLEVBQUU7QUFBakIsT0FBbkI7QUFBQSw4QkFDRSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyxVQUFaO0FBQXVCLFVBQUUsRUFBQyxLQUExQjtBQUFnQyxVQUFFLEVBQUU7QUFBRUMsa0JBQVEsRUFBRSxFQUFaO0FBQWdCQyxvQkFBVSxFQUFFO0FBQTVCLFNBQXBDO0FBQUEsa0JBQ0daO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsNkNBQUQ7QUFDRSxhQUFLLEVBQUMsWUFEUjtBQUVFLFVBQUUsRUFBRSxDQUZOO0FBR0UsVUFBRSxFQUFDLEtBSEw7QUFJRSxVQUFFLEVBQUU7QUFBRVcsa0JBQVEsRUFBRSxDQUFaO0FBQWVFLGlCQUFPLEVBQUU7QUFBeEIsU0FKTjtBQUFBLGtCQU1HWjtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVlFLHFFQUFDLDZDQUFEO0FBQU0sVUFBRSxFQUFFO0FBQUVhLG9CQUFVLEVBQUU7QUFBZCxTQUFWO0FBQW9DLGVBQU8sRUFBRVYsYUFBN0M7QUFBQSxnQ0FDRSxxRUFBQyw2Q0FBRDtBQUFNLGVBQUssRUFBQyxpQkFBWjtBQUE4QixZQUFFLEVBQUUsRUFBbEM7QUFBc0MsWUFBRSxFQUFFO0FBQUVPLG9CQUFRLEVBQUU7QUFBWixXQUExQztBQUFBLHFCQUNHVCxpQkFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQWpERDs7S0FBTUosYztBQW1EU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjQ1OTYxNzFjZmU4Y2ZjNDJiZWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgSW1hZ2UsIFRleHQsIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IEFycm93SWNvbiBmcm9tIFwiLi4vcHVibGljL2Fycm93LnN2Z1wiO1xyXG5cclxuaW50ZXJmYWNlIENhcmRQcmV2ZW50aW9uUHJvcHMge1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZUNhcmQ6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIG51bWJlckRpc2N1c3Npb25zOiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgb25EaXNjdXNzaW9ucz86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENhcmRQcmV2ZW50aW9uOiBGQzxDYXJkUHJldmVudGlvblByb3BzPiA9ICh7XHJcbiAgaW1hZ2UsXHJcbiAgbmFtZUNhcmQsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgbnVtYmVyRGlzY3Vzc2lvbnMsXHJcbiAgb25DbGljayxcclxuICBvbkRpc2N1c3Npb25zLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbHVtbnM9e1syLCBcIjFmciAyZnJcIl19XHJcbiAgICAgIG14PXsxNX1cclxuICAgICAgbWI9ezEwfVxyXG4gICAgICBwPXtcIjdweFwifVxyXG4gICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgc3g9e3tcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dCAwc1wiLFxyXG4gICAgICAgIGJveFNoYWRvdzogXCJyZ2IoMCAwIDAgLyA1JSkgMXB4IDhweCA4cHggMXB4XCIsXHJcbiAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB2YXJpYW50PVwiYXZhdGFyXCIgLz5cclxuXHJcbiAgICAgIDxGbGV4IG15PVwiN3B4XCIgc3g9e3sgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cImJpZ1N0b25lXCIgbWI9XCI1cHhcIiBzeD17eyBmb250U2l6ZTogMTUsIGZvbnRXZWlnaHQ6IDcwMCB9fT5cclxuICAgICAgICAgIHtuYW1lQ2FyZH1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHRcclxuICAgICAgICAgIGNvbG9yPVwib3V0ZXJTcGFjZVwiXHJcbiAgICAgICAgICBtYj17OX1cclxuICAgICAgICAgIG1yPVwiNXB4XCJcclxuICAgICAgICAgIHN4PXt7IGZvbnRTaXplOiAwLCBvcGFjaXR5OiAwLjYgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxGbGV4IHN4PXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0gb25DbGljaz17b25EaXNjdXNzaW9uc30+XHJcbiAgICAgICAgICA8VGV4dCBjb2xvcj1cImNoZWxzZWFDdWN1bWJlclwiIG1yPXsxNX0gc3g9e3sgZm9udFNpemU6IDE0IH19PlxyXG4gICAgICAgICAgICB7bnVtYmVyRGlzY3Vzc2lvbnN9IERpc2N1c3Npb25zXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8QXJyb3dJY29uIC8+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRQcmV2ZW50aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9