webpackHotUpdate_N_E("pages/dashboard",{

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
/* harmony import */ var _components_CardDiagnosis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CardDiagnosis */ "./components/CardDiagnosis.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.tsx");
/* harmony import */ var _public_menu_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/menu.svg */ "./public/menu.svg");
/* harmony import */ var _public_glass_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/glass.svg */ "./public/glass.svg");
/* harmony import */ var _components_Selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Selection */ "./components/Selection.tsx");
/* harmony import */ var _public_phone_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/phone.svg */ "./public/phone.svg");


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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_menu_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            src: "/images/corona.PNG",
            variant: "corona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_glass_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
          lineNumber: 115,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Selection__WEBPACK_IMPORTED_MODULE_12__["default"], {
              items: Items,
              onClick: function onClick(value) {
                setVal(value);
                if (!close && value !== "1") setClose(true);
              },
              selectedItem: Items[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
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
                    lineNumber: 159,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this) : val === "2" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                width: "100%"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardVideoSymptoms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  link: "https://www.youtube.com/watch?v=WPF7Ka3tNSU",
                  video: "https://www.youtube.com/embed/WPF7Ka3tNSU",
                  name: "What Coronavirus Symptoms Look Like",
                  description: "After being exposed to the virus that cause COVID-19, it can take as 2 to 4 days to develop."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                px: 15,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  mr: 10,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/ferver.PNG",
                    name: "Fever",
                    description: "He severity of COVID-19 symptoms can range from very mild to severe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                alignItems: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                sx: {
                  width: 360
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardDiagnosis__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  image: "/images/Diagnosis.PNG",
                  label: "Book Test Apooitment",
                  content: "If you develop symptoms of coronavirus disease 2019 (C-OVID-19) and you've been exposed to the virus, contact your doctor."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                color: "bigStone",
                mt: 30,
                mb: "5px",
                sx: {
                  fontSize: 15,
                  fontWeight: "heading"
                },
                children: "Give a Miss Call On"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                variant: "phone",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  sx: {
                    justifyContent: "center",
                    alignItems: "center"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_phone_svg__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              position: close ? "fixed" : "relative",
              top: close ? 630 : 0,
              width: close ? 360 : 343
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsInpJbmRleCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURZLEVBTVo7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOWSxFQVdaO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWFksQ0FBZDtBQWtCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsVUFBUSxFQUFFLGlCQUZaO0FBR0VDLGFBQVcsRUFBRSwyREFIZjtBQUlFQyxtQkFBaUIsRUFBRTtBQUpyQixDQURlLEVBT2Y7QUFDRUgsT0FBSyxF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QTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdMRCxDQWpNRDs7R0FBTUosUztVQUNXRSxxRDs7O0FBa01GRix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYmZhM2U5NDhkZGJmNzY5ZDZkMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsZXgsIEltYWdlLCBUZXh0LCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IENhcmRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZFByZXZlbnRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFByZXZlbnRpb25cIjtcclxuaW1wb3J0IENhcmRWaWRlb1N5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRWaWRlb1N5bXB0b21zXCI7XHJcbmltcG9ydCBDYXJkSW1hZ2VTeW1wdG9tcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkSW1hZ2VTeW1wdG9tc1wiO1xyXG5pbXBvcnQgQ2FyZERpYWdub3NpcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkRGlhZ25vc2lzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiLi4vcHVibGljL21lbnUuc3ZnXCI7XHJcbmltcG9ydCBHbGFzc0ljb24gZnJvbSBcIi4uL3B1YmxpYy9nbGFzcy5zdmdcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3Rpb25cIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiLi4vcHVibGljL3Bob25lLnN2Z1wiO1xyXG5cclxuY29uc3QgSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBsYWJlbDogXCJQcmV2ZW50aW9uXCIsXHJcbiAgICB2YWx1ZTogXCIxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGxhYmVsOiBcIlN5bXB0b21zXCIsXHJcbiAgICB2YWx1ZTogXCIyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGxhYmVsOiBcIkRpYWdub3Npc1wiLFxyXG4gICAgdmFsdWU6IFwiM1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28xLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiV2VhciBhIGZhY2VtYXNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjE1M1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMi5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkF2b2lkIGNsb3NlIGNvbnRhY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlB1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjEyN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMy5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIlN0YXkgaG9tZSBpZiB5b3XigJlyZSBzaWNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF5IGhvbWUgaWYgeW91IGFyZSBzaWNrLCBleGNlcHQgdG8gZ2V0IG1lZGljYWwgY2FyZS5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjc4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ280LlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMzI0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRhc2hib2FyZDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNsb3NlKSBzZXRDbG9zZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgc3g9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBiZz1cIiNGNEYwRUJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogMzYwLFxyXG4gICAgICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGJnPVwiI0VEM0QzRFwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNsb3NlID8gOTAgOiAyMDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9ezIwfVxyXG4gICAgICAgICAgICBteD17MTV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9jb3JvbmEuUE5HXCIgdmFyaWFudD1cImNvcm9uYVwiIC8+XHJcbiAgICAgICAgICAgIDxHbGFzc0ljb24gLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgeyFjbG9zZSAmJiAoXHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17LTEzMH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB6SW5kZXg6IDk5LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZEJ1dHRvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGFkdmljZSBmb3IgdGhlIHB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlN0YXkgYXdhcmUgb2YgdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBvbiB0aGUgQ09WSUQtMTkgb3V0YnJlYWtcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIG10PXstMTYwfVxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9e2Nsb3NlID8gMTM3IDogMTg1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17SXRlbXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZSAmJiB2YWx1ZSAhPT0gXCIxXCIpIHNldENsb3NlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17SXRlbXNbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7dmFsID09PSBcIjFcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtQcmVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByZXZlbnRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVDYXJkPXtpdGVtLm5hbWVDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyRGlzY3Vzc2lvbnM9e2l0ZW0ubnVtYmVyRGlzY3Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSA6IHZhbCA9PT0gXCIyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFZpZGVvU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVdQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvV1BGN0thM3ROU1VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIldoYXQgQ29yb25hdmlydXMgU3ltcHRvbXMgTG9vayBMaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWZ0ZXIgYmVpbmcgZXhwb3NlZCB0byB0aGUgdmlydXMgdGhhdCBjYXVzZSBDT1ZJRC0xOSwgaXQgY2FuIHRha2UgYXMgMiB0byA0IGRheXMgdG8gZGV2ZWxvcC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggcHg9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBtcj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZVN5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9mZXJ2ZXIuUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZldmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIZSBzZXZlcml0eSBvZiBDT1ZJRC0xOSBzeW1wdG9tcyBjYW4gcmFuZ2UgZnJvbSB2ZXJ5IG1pbGQgdG8gc2V2ZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZVN5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9jb3VnaC5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ291Z2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlN1Y2ggYXMgaGVhcnQgb3IgbHVuZyBkaXNlYXNlIG9yIGRpYWJldGVzLCBtYXkgYmUgYXQgaGlnaGVyIHJpc2sgb2Ygc2VyaW91cyBpbGxuZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBzeD17eyB3aWR0aDogMzYwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRGlhZ25vc2lzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvRGlhZ25vc2lzLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJvb2sgVGVzdCBBcG9vaXRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJJZiB5b3UgZGV2ZWxvcCBzeW1wdG9tcyBvZiBjb3JvbmF2aXJ1cyBkaXNlYXNlIDIwMTkgKEMtT1ZJRC0xOSkgYW5kIHlvdSd2ZSBiZWVuIGV4cG9zZWQgdG8gdGhlIHZpcnVzLCBjb250YWN0IHlvdXIgZG9jdG9yLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmlnU3RvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG10PXszMH1cclxuICAgICAgICAgICAgICAgICAgICBtYj1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHaXZlIGEgTWlzcyBDYWxsIE9uXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQaG9uZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG1sPXsxMH0+MDI4LTM5MzAtOTkxMjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNsb3NlID8gXCJmaXhlZFwiIDogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBjbG9zZSA/IDYzMCA6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2xvc2UgPyAzNjAgOiAzNDMsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=