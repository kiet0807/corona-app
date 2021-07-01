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
    bg: "white",
    mx: 15,
    mb: 20,
    sx: {
      height: 230,
      borderRadius: 16,
      flexDirection: 'column'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: image,
      variant: "symptoms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      m: 15,
      onClick: onClick,
      sx: {
        flexDirection: 'column',
        cursor: 'pointer'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "bigStone",
        mb: "8px",
        sx: {
          fontSize: 2,
          fontWeight: 'heading'
        },
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "outerSpace",
        sx: {
          fontSize: 13,
          opacity: 0.6
        },
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
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

/***/ }),

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/theme-ui.esm.js");
/* harmony import */ var _components_CardButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CardButton */ "./components/CardButton.tsx");
/* harmony import */ var _components_CardPrevention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardPrevention */ "./components/CardPrevention.tsx");
/* harmony import */ var _components_CardVideoSymptoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardVideoSymptoms */ "./components/CardVideoSymptoms.tsx");
/* harmony import */ var _components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardImageSymptoms */ "./components/CardImageSymptoms.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _public_menu_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/menu.svg */ "./public/menu.svg");
/* harmony import */ var _public_glass_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/glass.svg */ "./public/glass.svg");
/* harmony import */ var _components_Selection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Selection */ "./components/Selection.tsx");


var _jsxFileName = "C:\\Users\\Kiet Nguyen\\Desktop\\corona-app\\pages\\dashboard.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var Items = [{
  id: 1,
  label: "Prevention",
  value: "1"
}, {
  id: 2,
  label: "Symptoms",
  value: "2"
}, {
  id: 3,
  label: "Diagnosis",
  value: "3"
}];
var PreItems = [{
  image: "/images/logo1.PNG",
  nameCard: "Wear a facemask",
  description: "You should wear facemask when you are around other people",
  numberDiscussions: "153"
}, {
  image: "/images/logo2.PNG",
  nameCard: "Avoid close contact",
  description: "Put distance between yourself and other people",
  numberDiscussions: "127"
}, {
  image: "/images/logo3.PNG",
  nameCard: "Stay home if you’re sick",
  description: "Stay home if you are sick, except to get medical care.",
  numberDiscussions: "78"
}, {
  image: "/images/logo4.PNG",
  nameCard: "Clean your hands often",
  description: "Clean your hands often",
  numberDiscussions: "324"
}];

var dashboard = function dashboard() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      close = _useState[0],
      setClose = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("1"),
      val = _useState2[0],
      setVal = _useState2[1];

  var handleClick = function handleClick() {
    if (!close) setClose(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    sx: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
      bg: "#F4F0EB",
      sx: {
        width: 360,
        height: 700,
        flexDirection: "column",
        overflowY: "auto"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        bg: "#ED3D3D",
        sx: {
          height: close ? 90 : 200,
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
          mt: 20,
          mx: 15,
          sx: {
            width: "100%",
            height: 30,
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_menu_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            src: "/images/corona.PNG",
            variant: "corona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_glass_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), !close && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        mt: -130,
        sx: {
          zIndex: 99
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Coronavirus disease (COVID-19) advice for the public",
          content: "Stay aware of the latest information on the COVID-19 outbreak",
          onClick: handleClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        mt: -160,
        sx: {
          height: 480,
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
          mt: close ? 137 : 185,
          sx: {
            width: "100%",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              width: "100%",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Selection__WEBPACK_IMPORTED_MODULE_11__["default"], {
              items: Items,
              onClick: function onClick(value) {
                setVal(value);
                if (!close && value !== "1") setClose(true);
              },
              selectedItem: Items[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), val === "1" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                width: "100%"
              },
              children: PreItems.map(function (item, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardPrevention__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    image: item.image,
                    nameCard: item.nameCard,
                    description: item.description,
                    numberDiscussions: item.numberDiscussions
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, _this) : val === "2" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                width: "100%"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardVideoSymptoms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  video: "https://www.youtube.com/embed/WPF7Ka3tNSU",
                  name: "What Coronavirus Symptoms Look Like",
                  description: "After being exposed to the virus that cause COVID-19, it can take as 2 to 4 days to develop."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  image: "https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-user-sign-icon-person-symbol-human-avatar-.jpg",
                  name: "Fever",
                  description: "He severity of COVID-19 symptoms can ran-ge from very mild to severe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              children: "ahihi"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              position: close ? "fixed" : "relative",
              top: close ? 630 : 0,
              width: close ? 360 : 343
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, _this);
};

_s(dashboard, "rnABRmfWytv7KnwI+rReePfpjSo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (dashboard);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkSW1hZ2VTeW1wdG9tcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC50c3giXSwibmFtZXMiOlsiQ2FyZEltYWdlU3ltcHRvbXMiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmbGV4RGlyZWN0aW9uIiwiY3Vyc29yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSIsIkl0ZW1zIiwiaWQiLCJsYWJlbCIsInZhbHVlIiwiUHJlSXRlbXMiLCJuYW1lQ2FyZCIsIm51bWJlckRpc2N1c3Npb25zIiwiZGFzaGJvYXJkIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJjbG9zZSIsInNldENsb3NlIiwidmFsIiwic2V0VmFsIiwiaGFuZGxlQ2xpY2siLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93WSIsInpJbmRleCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVFBLElBQU1BLGlCQUE4QyxHQUFHLFNBQWpEQSxpQkFBaUQsT0FBeUM7QUFBQSxNQUF2Q0MsS0FBdUMsUUFBdkNBLEtBQXVDO0FBQUEsTUFBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFDNUYsc0JBQ0kscUVBQUMsNkNBQUQ7QUFDSSxNQUFFLEVBQUcsT0FEVDtBQUVJLE1BQUUsRUFBSSxFQUZWO0FBR0ksTUFBRSxFQUFJLEVBSFY7QUFJSSxNQUFFLEVBQUk7QUFDRkMsWUFBTSxFQUFFLEdBRE47QUFFRkMsa0JBQVksRUFBRSxFQUZaO0FBR0ZDLG1CQUFhLEVBQUU7QUFIYixL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SCxHQUFTLENBRmpCO0FBR0ZLLG1CQUFLLEVBQUVMLEtBQUssR0FBRyxHQUFILEdBQVM7QUFIbkIsYUFETjtBQUFBLG1DQU9FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJJRCxDQXBKRDs7R0FBTUosUztVQUNXRSxxRDs7O0FBcUpGRix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuMzIxNmIyN2Q0NjcwMmQ0YjliNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGbGV4LCBUZXh0LCBJbWFnZX0gZnJvbSAndGhlbWUtdWknXHJcblxyXG5pbnRlcmZhY2UgQ2FyZEltYWdlU3ltcHRvbXNQcm9wcyB7XHJcbiAgICBpbWFnZTogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkLFxyXG59XHJcbmNvbnN0IENhcmRJbWFnZVN5bXB0b21zOiBGQyA8Q2FyZEltYWdlU3ltcHRvbXNQcm9wcz4gPSAoe2ltYWdlLCBuYW1lLCBkZXNjcmlwdGlvbiwgb25DbGlja30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgYmcgPSAnd2hpdGUnXHJcbiAgICAgICAgICAgIG14ID0gezE1fVxyXG4gICAgICAgICAgICBtYiA9IHsyMH1cclxuICAgICAgICAgICAgc3ggPSB7e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMzAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPEltYWdlIHNyYyA9IHtpbWFnZX0gdmFyaWFudCA9J3N5bXB0b21zJy8+XHJcblxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgbSA9IHsxNX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7b25DbGlja31cclxuICAgICAgICAgICAgICAgIHN4ID0ge3tmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyAsY3Vyc29yOiAncG9pbnRlcicsIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJ2JpZ1N0b25lJ1xyXG4gICAgICAgICAgICAgICAgbWIgPSAnOHB4J1xyXG4gICAgICAgICAgICAgICAgc3ggPSB7e2ZvbnRTaXplOiAyLCBmb250V2VpZ2h0OiAnaGVhZGluZyd9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAnb3V0ZXJTcGFjZSdcclxuICAgICAgICAgICAgICAgIHN4ID0ge3tmb250U2l6ZTogMTMsIG9wYWNpdHk6IDAuNn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSW1hZ2VTeW1wdG9tc1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBJbWFnZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkUHJldmVudGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkUHJldmVudGlvblwiO1xyXG5pbXBvcnQgQ2FyZFZpZGVvU3ltcHRvbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFZpZGVvU3ltcHRvbXNcIjtcclxuaW1wb3J0IENhcmRJbWFnZVN5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRJbWFnZVN5bXB0b21zXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiLi4vcHVibGljL21lbnUuc3ZnXCI7XHJcbmltcG9ydCBHbGFzc0ljb24gZnJvbSBcIi4uL3B1YmxpYy9nbGFzcy5zdmdcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3Rpb25cIjtcclxuXHJcbmNvbnN0IEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbGFiZWw6IFwiUHJldmVudGlvblwiLFxyXG4gICAgdmFsdWU6IFwiMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBsYWJlbDogXCJTeW1wdG9tc1wiLFxyXG4gICAgdmFsdWU6IFwiMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBsYWJlbDogXCJEaWFnbm9zaXNcIixcclxuICAgIHZhbHVlOiBcIjNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJlSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMS5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIldlYXIgYSBmYWNlbWFza1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxNTNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzIuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJBdm9pZCBjbG9zZSBjb250YWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxMjdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzMuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJTdGF5IGhvbWUgaWYgeW914oCZcmUgc2lja1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3RheSBob21lIGlmIHlvdSBhcmUgc2ljaywgZXhjZXB0IHRvIGdldCBtZWRpY2FsIGNhcmUuXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCI3OFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvNC5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjMyNFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXNoYm9hcmQ6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIjFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjbG9zZSkgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgYmc9XCIjRjRGMEVCXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IDM2MCxcclxuICAgICAgICAgIGhlaWdodDogNzAwLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBiZz1cIiNFRDNEM0RcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBjbG9zZSA/IDkwIDogMjAwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG10PXsyMH1cclxuICAgICAgICAgICAgbXg9ezE1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvY29yb25hLlBOR1wiIHZhcmlhbnQ9XCJjb3JvbmFcIiAvPlxyXG4gICAgICAgICAgICA8R2xhc3NJY29uIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIHshY2xvc2UgJiYgKFxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9ey0xMzB9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmRCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSBhZHZpY2UgZm9yIHRoZSBwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJTdGF5IGF3YXJlIG9mIHRoZSBsYXRlc3QgaW5mb3JtYXRpb24gb24gdGhlIENPVklELTE5IG91dGJyZWFrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBtdD17LTE2MH1cclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDgwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG10PXtjbG9zZSA/IDEzNyA6IDE4NX1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e0l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghY2xvc2UgJiYgdmFsdWUgIT09IFwiMVwiKSBzZXRDbG9zZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e0l0ZW1zWzBdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3ZhbCA9PT0gXCIxXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7UHJlSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRQcmV2ZW50aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQ2FyZD17aXRlbS5uYW1lQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckRpc2N1c3Npb25zPXtpdGVtLm51bWJlckRpc2N1c3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkgOiB2YWwgPT09IFwiMlwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRWaWRlb1N5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWRlbz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1dQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXaGF0IENvcm9uYXZpcnVzIFN5bXB0b21zIExvb2sgTGlrZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFmdGVyIGJlaW5nIGV4cG9zZWQgdG8gdGhlIHZpcnVzIHRoYXQgY2F1c2UgQ09WSUQtMTksIGl0IGNhbiB0YWtlIGFzIDIgdG8gNCBkYXlzIHRvIGRldmVsb3AuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3ByZXZpZXdzLjEyM3JmLmNvbS9pbWFnZXMvaW5lZ3Zpbi9pbmVndmluMTcwMS9pbmVndmluMTcwMTAwMDc3LzY5ODgyMTEyLXVzZXItc2lnbi1pY29uLXBlcnNvbi1zeW1ib2wtaHVtYW4tYXZhdGFyLS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZldmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGUgc2V2ZXJpdHkgb2YgQ09WSUQtMTkgc3ltcHRvbXMgY2FuIHJhbi1nZSBmcm9tIHZlcnkgbWlsZCB0byBzZXZlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZsZXg+YWhpaGk8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2xvc2UgPyBcImZpeGVkXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNsb3NlID8gNjMwIDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjbG9zZSA/IDM2MCA6IDM0MyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==