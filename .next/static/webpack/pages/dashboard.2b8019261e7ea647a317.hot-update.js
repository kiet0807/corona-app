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

  var handleVideo = function handleVideo() {
    router.push("https://www.youtube.com/watch?v=WPF7Ka3tNSU");
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
            lineNumber: 107,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
            src: "/images/corona.PNG",
            variant: "corona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_glass_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
          lineNumber: 119,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
              lineNumber: 146,
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
                    lineNumber: 163,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, _this) : val === "2" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                width: "100%"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardVideoSymptoms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  onClick: handleVideo,
                  video: "https://www.youtube.com/embed/WPF7Ka3tNSU",
                  name: "What Coronavirus Symptoms Look Like",
                  description: "After being exposed to the virus that cause COVID-19, it can take as 2 to 4 days to develop."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                px: 15,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  mr: 10,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/ferver.PNG",
                    name: "Fever",
                    description: "He severity of COVID-19 symptoms can ran-ge from very mild to severe"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                  lineNumber: 212,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
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
                lineNumber: 218,
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
                    lineNumber: 236,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              position: close ? "fixed" : "relative",
              top: close ? 630 : 0,
              width: close ? 360 : 343
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsImhhbmRsZVZpZGVvIiwicHVzaCIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsInpJbmRleCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURZLEVBTVo7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOWSxFQVdaO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWFksQ0FBZDtBQWtCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsVUFBUSxFQUFFLGlCQUZaO0FBR0VDLGFBQVcsRUFBRSwyREFIZjtBQUlFQyxtQkFBaUIsRUFBRTtBQUpyQixDQURlLEVBT2Y7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFVBQVEsRUFBRSxxQkFGWjtBQUdFQyxhQUFXLEVBQUUsZ0RBSGY7QUFJRUMsbUJBQWlCLEVBQUU7QUFKckIsQ0FQZSxFQWFmO0FBQ0VILE9BQUssRUFBRSxtQkFEVDtBQUVFQyxVQUFRLEVBQUUsMEJBRlo7QUFHRUMsYUFBVyxFQUFFLHdEQUhmO0FBSUVDLG1CQUFpQixFQUFFO0FBSnJCLENBYmUsRUFtQmY7QUFDRUgsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFVBQVEsRUFBRSx3QkFGWjtBQUdFQyxhQUFXLEVBQUUsd0JBSGY7QUFJRUMsbUJBQWlCLEVBQUU7QUFKckIsQ0FuQmUsQ0FBakI7O0FBMkJBLElBQU1DLFNBQWEsR0FBRyxTQUFoQkEsU0FBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQwQixrQkFFQUMsc0RBQVEsQ0FBQyxLQUFELENBRlI7QUFBQSxNQUVuQkMsS0FGbUI7QUFBQSxNQUVaQyxRQUZZOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLEdBQUQsQ0FISjtBQUFBLE1BR25CRyxHQUhtQjtBQUFBLE1BR2RDLE1BSGM7O0FBSzFCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSSxDQUFDSixLQUFMLEVBQVlDLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDYixHQUZEOztBQUlBLE1BQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJSLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZLDZDQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLE1BQUUsRUFBRTtBQUNGQyxXQUFLLEVBQUUsTUFETDtBQUVGQyxvQkFBYyxFQUFFLFFBRmQ7QUFHRkMsZ0JBQVUsRUFBRTtBQUhWLEtBRE47QUFBQSwyQkFPRSxxRUFBQyw2Q0FBRDtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFFO0FBQ0ZGLGFBQUssRUFBRSxHQURMO0FBRUZHLGNBQU0sRUFBRSxHQUZOO0FBR0ZDLHFCQUFhLEVBQUUsUUFIYjtBQUlGQyxpQkFBUyxFQUFFO0FBSlQsT0FGTjtBQUFBLDhCQVNFLHFFQUFDLDZDQUFEO0FBQ0UsVUFBRSxFQUFDLFNBREw7QUFFRSxVQUFFLEVBQUU7QUFDRkYsZ0JBQU0sRUFBRVYsS0FBSyxHQUFHLEVBQUgsR0FBUSxHQURuQjtBQUVGTyxlQUFLLEVBQUU7QUFGTCxTQUZOO0FBQUEsK0JBT0UscUVBQUMsNkNBQUQ7QUFDRSxZQUFFLEVBQUUsRUFETjtBQUVFLFlBQUUsRUFBRSxFQUZOO0FBR0UsWUFBRSxFQUFFO0FBQ0ZBLGlCQUFLLEVBQUUsTUFETDtBQUVGRyxrQkFBTSxFQUFFLEVBRk47QUFHRkYsMEJBQWMsRUFBRSxlQUhkO0FBSUZDLHNCQUFVLEVBQUU7QUFKVixXQUhOO0FBQUEsa0NBVUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFLHFFQUFDLDhDQUFEO0FBQU8sZUFBRyxFQUFDLG9CQUFYO0FBQWdDLG1CQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBK0JHLENBQUNULEtBQUQsaUJBQ0MscUVBQUMsNkNBQUQ7QUFDRSxVQUFFLEVBQUUsQ0FBQyxHQURQO0FBRUUsVUFBRSxFQUFFO0FBQ0ZhLGdCQUFNLEVBQUU7QUFETixTQUZOO0FBQUEsK0JBTUUscUVBQUMsOERBQUQ7QUFDRSxlQUFLLEVBQUMsc0RBRFI7QUFFRSxpQkFBTyxFQUFDLCtEQUZWO0FBR0UsaUJBQU8sRUFBRVQ7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDSixlQTZDRSxxRUFBQyw2Q0FBRDtBQUNFLFVBQUUsRUFBRSxDQUFDLEdBRFA7QUFFRSxVQUFFLEVBQUU7QUFDRk0sZ0JBQU0sRUFBRSxHQUROO0FBRUZILGVBQUssRUFBRTtBQUZMLFNBRk47QUFBQSwrQkFPRSxxRUFBQyw2Q0FBRDtBQUNFLFlBQUUsRUFBRVAsS0FBSyxHQUFHLEdBQUgsR0FBUyxHQURwQjtBQUVFLFlBQUUsRUFBRTtBQUNGTyxpQkFBSyxFQUFFLE1BREw7QUFFRkkseUJBQWEsRUFBRTtBQUZiLFdBRk47QUFBQSxrQ0FPRSxxRUFBQyw2Q0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGSixtQkFBSyxFQUFFLE1BREw7QUFFRkksMkJBQWEsRUFBRTtBQUZiLGFBRE47QUFBQSxvQ0FNRSxxRUFBQyw4REFBRDtBQUNFLG1CQUFLLEVBQUV4QixLQURUO0FBRUUscUJBQU8sRUFBRSxpQkFBQ0csS0FBRCxFQUFXO0FBQ2xCYSxzQkFBTSxDQUFDYixLQUFELENBQU47QUFDQSxvQkFBSSxDQUFDVSxLQUFELElBQVVWLEtBQUssS0FBSyxHQUF4QixFQUE2QlcsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUM5QixlQUxIO0FBTUUsMEJBQVksRUFBRWQsS0FBSyxDQUFDLENBQUQ7QUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixFQWNHZSxHQUFHLEtBQUssR0FBUixnQkFDQyxxRUFBQyw2Q0FBRDtBQUNFLGdCQUFFLEVBQUU7QUFDRlMsNkJBQWEsRUFBRSxRQURiO0FBRUZKLHFCQUFLLEVBQUU7QUFGTCxlQUROO0FBQUEsd0JBTUdoQixRQUFRLENBQUN1QixHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsb0NBQ1oscUVBQUMsNkNBQUQ7QUFBQSx5Q0FDRSxxRUFBQyxrRUFBRDtBQUNFLHlCQUFLLEVBQUVELElBQUksQ0FBQ3ZCLEtBRGQ7QUFFRSw0QkFBUSxFQUFFdUIsSUFBSSxDQUFDdEIsUUFGakI7QUFHRSwrQkFBVyxFQUFFc0IsSUFBSSxDQUFDckIsV0FIcEI7QUFJRSxxQ0FBaUIsRUFBRXFCLElBQUksQ0FBQ3BCO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFBV3FCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEWTtBQUFBLGVBQWI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBa0JHZCxHQUFHLEtBQUssR0FBUixnQkFDRixxRUFBQyw2Q0FBRDtBQUNFLGdCQUFFLEVBQUU7QUFDRlMsNkJBQWEsRUFBRSxRQURiO0FBRUZKLHFCQUFLLEVBQUU7QUFGTCxlQUROO0FBQUEsc0NBTUUscUVBQUMsNkNBQUQ7QUFBQSx1Q0FDRSxxRUFBQyxxRUFBRDtBQUNFLHlCQUFPLEVBQUVGLFdBRFg7QUFFRSx1QkFBSyxFQUFDLDJDQUZSO0FBR0Usc0JBQUksRUFBQyxxQ0FIUDtBQUlFLDZCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixlQWNFLHFFQUFDLDZDQUFEO0FBQU0sa0JBQUUsRUFBRSxFQUFWO0FBQUEsd0NBQ0UscUVBQUMsNkNBQUQ7QUFBTSxvQkFBRSxFQUFFLEVBQVY7QUFBQSx5Q0FDRSxxRUFBQyxxRUFBRDtBQUNFLHlCQUFLLEVBQUMsb0JBRFI7QUFFRSx3QkFBSSxFQUFDLE9BRlA7QUFHRSwrQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFRRSxxRUFBQyw2Q0FBRDtBQUFBLHlDQUNFLHFFQUFDLHFFQUFEO0FBQ0UseUJBQUssRUFBQyxtQkFEUjtBQUVFLHdCQUFJLEVBQUMsT0FGUDtBQUdFLCtCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURFLGdCQWlDRixxRUFBQyw2Q0FBRDtBQUNFLGdCQUFFLEVBQUU7QUFDRk0sNkJBQWEsRUFBRSxRQURiO0FBRUZGLDBCQUFVLEVBQUU7QUFGVixlQUROO0FBQUEsc0NBTUUscUVBQUMsNkNBQUQ7QUFBTSxrQkFBRSxFQUFFO0FBQUVGLHVCQUFLLEVBQUU7QUFBVCxpQkFBVjtBQUFBLHVDQUNFLHFFQUFDLGlFQUFEO0FBQ0UsdUJBQUssRUFBQyx1QkFEUjtBQUVFLHVCQUFLLEVBQUMsc0JBRlI7QUFHRSx5QkFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsZUFhRSxxRUFBQyw2Q0FBRDtBQUNFLHFCQUFLLEVBQUMsVUFEUjtBQUVFLGtCQUFFLEVBQUUsRUFGTjtBQUdFLGtCQUFFLEVBQUMsS0FITDtBQUlFLGtCQUFFLEVBQUU7QUFDRlUsMEJBQVEsRUFBRSxFQURSO0FBRUZDLDRCQUFVLEVBQUU7QUFGVixpQkFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiRixlQXdCRSxxRUFBQywrQ0FBRDtBQUFRLHVCQUFPLEVBQUMsT0FBaEI7QUFBQSx1Q0FDRSxxRUFBQyw2Q0FBRDtBQUNFLG9CQUFFLEVBQUU7QUFDRlYsa0NBQWMsRUFBRSxRQURkO0FBRUZDLDhCQUFVLEVBQUU7QUFGVixtQkFETjtBQUFBLDBDQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFPRSxxRUFBQyw2Q0FBRDtBQUFNLHNCQUFFLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQThHRSxxRUFBQyw2Q0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGVSxzQkFBUSxFQUFFbkIsS0FBSyxHQUFHLE9BQUgsR0FBYSxVQUQxQjtBQUVGb0IsaUJBQUcsRUFBRXBCLEtBQUssR0FBRyxHQUFILEdBQVMsQ0FGakI7QUFHRk8sbUJBQUssRUFBRVAsS0FBSyxHQUFHLEdBQUgsR0FBUztBQUhuQixhQUROO0FBQUEsbUNBT0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0xELENBck1EOztHQUFNSixTO1VBQ1dFLHFEOzs7QUFzTUZGLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4yYjgwMTkyNjFlN2VhNjQ3YTMxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgSW1hZ2UsIFRleHQsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkUHJldmVudGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkUHJldmVudGlvblwiO1xyXG5pbXBvcnQgQ2FyZFZpZGVvU3ltcHRvbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFZpZGVvU3ltcHRvbXNcIjtcclxuaW1wb3J0IENhcmRJbWFnZVN5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRJbWFnZVN5bXB0b21zXCI7XHJcbmltcG9ydCBDYXJkRGlhZ25vc2lzIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmREaWFnbm9zaXNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCIuLi9wdWJsaWMvbWVudS5zdmdcIjtcclxuaW1wb3J0IEdsYXNzSWNvbiBmcm9tIFwiLi4vcHVibGljL2dsYXNzLnN2Z1wiO1xyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGlvblwiO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gXCIuLi9wdWJsaWMvcGhvbmUuc3ZnXCI7XHJcblxyXG5jb25zdCBJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGxhYmVsOiBcIlByZXZlbnRpb25cIixcclxuICAgIHZhbHVlOiBcIjFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbGFiZWw6IFwiU3ltcHRvbXNcIixcclxuICAgIHZhbHVlOiBcIjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbGFiZWw6IFwiRGlhZ25vc2lzXCIsXHJcbiAgICB2YWx1ZTogXCIzXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByZUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzEuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJXZWFyIGEgZmFjZW1hc2tcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZVwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMTUzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28yLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiQXZvaWQgY2xvc2UgY29udGFjdFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZVwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMTI3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28zLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiU3RheSBob21lIGlmIHlvdeKAmXJlIHNpY2tcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXkgaG9tZSBpZiB5b3UgYXJlIHNpY2ssIGV4Y2VwdCB0byBnZXQgbWVkaWNhbCBjYXJlLlwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiNzhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzQuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJDbGVhbiB5b3VyIGhhbmRzIG9mdGVuXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDbGVhbiB5b3VyIGhhbmRzIG9mdGVuXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIzMjRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgZGFzaGJvYXJkOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY2xvc2UsIHNldENsb3NlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCIxXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICghY2xvc2UpIHNldENsb3NlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZpZGVvID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVdQRjdLYTN0TlNVXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGJnPVwiI0Y0RjBFQlwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiAzNjAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDcwMCxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYmc9XCIjRUQzRDNEXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2xvc2UgPyA5MCA6IDIwMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17MjB9XHJcbiAgICAgICAgICAgIG14PXsxNX1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2Nvcm9uYS5QTkdcIiB2YXJpYW50PVwiY29yb25hXCIgLz5cclxuICAgICAgICAgICAgPEdsYXNzSWNvbiAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICB7IWNsb3NlICYmIChcclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG10PXstMTMwfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHpJbmRleDogOTksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgYWR2aWNlIGZvciB0aGUgcHVibGljXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiU3RheSBhd2FyZSBvZiB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHRoZSBDT1ZJRC0xOSBvdXRicmVha1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgbXQ9ey0xNjB9XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4MCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17Y2xvc2UgPyAxMzcgOiAxODV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtJdGVtc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRWYWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlICYmIHZhbHVlICE9PSBcIjFcIikgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtJdGVtc1swXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHt2YWwgPT09IFwiMVwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1ByZUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJldmVudGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUNhcmQ9e2l0ZW0ubmFtZUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJEaXNjdXNzaW9ucz17aXRlbS5udW1iZXJEaXNjdXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogdmFsID09PSBcIjJcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVmlkZW9TeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVmlkZW99XHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWRlbz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1dQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXaGF0IENvcm9uYXZpcnVzIFN5bXB0b21zIExvb2sgTGlrZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFmdGVyIGJlaW5nIGV4cG9zZWQgdG8gdGhlIHZpcnVzIHRoYXQgY2F1c2UgQ09WSUQtMTksIGl0IGNhbiB0YWtlIGFzIDIgdG8gNCBkYXlzIHRvIGRldmVsb3AuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IHB4PXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggbXI9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvZmVydmVyLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGZXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGUgc2V2ZXJpdHkgb2YgQ09WSUQtMTkgc3ltcHRvbXMgY2FuIHJhbi1nZSBmcm9tIHZlcnkgbWlsZCB0byBzZXZlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2NvdWdoLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDb3VnaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3VjaCBhcyBoZWFydCBvciBsdW5nIGRpc2Vhc2Ugb3IgZGlhYmV0ZXMsIG1heSBiZSBhdCBoaWdoZXIgcmlzayBvZiBzZXJpb3VzIGlsbG5lc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAzNjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmREaWFnbm9zaXNcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9EaWFnbm9zaXMuUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9vayBUZXN0IEFwb29pdG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIklmIHlvdSBkZXZlbG9wIHN5bXB0b21zIG9mIGNvcm9uYXZpcnVzIGRpc2Vhc2UgMjAxOSAoQy1PVklELTE5KSBhbmQgeW91J3ZlIGJlZW4gZXhwb3NlZCB0byB0aGUgdmlydXMsIGNvbnRhY3QgeW91ciBkb2N0b3IuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJiaWdTdG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIG1iPVwiNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdmUgYSBNaXNzIENhbGwgT25cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwaG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBob25lSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgbWw9ezEwfT4wMjgtMzkzMC05OTEyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2xvc2UgPyBcImZpeGVkXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNsb3NlID8gNjMwIDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjbG9zZSA/IDM2MCA6IDM0MyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==