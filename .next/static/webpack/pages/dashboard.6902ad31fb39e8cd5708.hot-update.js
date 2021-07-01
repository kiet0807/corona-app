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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              cursor: "pointer",
              ":active": {
                transform: "scale(0.95)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_menu_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            onClick: function onClick() {
              return router.reload();
            },
            sx: {
              cursor: "pointer",
              ":active": {
                transform: "scale(0.95)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
              src: "/images/corona.PNG",
              variant: "corona"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              cursor: "pointer",
              ":active": {
                transform: "scale(0.95)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_glass_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
        sx: {
          zIndex: 99,
          width: 360
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Coronavirus disease (COVID-19) advice for the public",
          content: "Stay aware of the latest information on the COVID-19 outbreak",
          onClick: handleClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
        sx: {
          height: 480,
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
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
              lineNumber: 168,
              columnNumber: 15
            }, _this), val === "1" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
              sx: {
                flexDirection: "column",
                width: "100%"
              },
              children: PreItems.map(function (item, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardPrevention__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    onClick: handleClick,
                    image: item.image,
                    nameCard: item.nameCard,
                    description: item.description,
                    numberDiscussions: item.numberDiscussions
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
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
                  lineNumber: 203,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
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
                    lineNumber: 212,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
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
                  lineNumber: 235,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
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
                lineNumber: 241,
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
                    lineNumber: 259,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 260,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              position: close ? "fixed" : "relative",
              top: close ? 630 : 0,
              width: close ? 360 : 343
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
              onClick: handleClick
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 273,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsImN1cnNvciIsInRyYW5zZm9ybSIsInJlbG9hZCIsInpJbmRleCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURZLEVBTVo7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOWSxFQVdaO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWFksQ0FBZDtBQWtCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsVUFBUSxFQUFFLGlCQUZaO0FBR0VDLGFBQVcsRUFBRSwyREFIZjtBQUlFQyxtQkFBaUIsRUFB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QUUsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBOEdFLHFFQUFDLDZDQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZhLHNCQUFRLEVBQUVwQixLQUFLLEdBQUcsT0FBSCxHQUFhLFVBRDFCO0FBRUZxQixpQkFBRyxFQUFFckIsS0FBSyxHQUFHLEdBQUgsR0FBUyxDQUZqQjtBQUdGSyxtQkFBSyxFQUFFTCxLQUFLLEdBQUcsR0FBSCxHQUFTO0FBSG5CLGFBRE47QUFBQSxtQ0FPRSxxRUFBQywwREFBRDtBQUFRLHFCQUFPLEVBQUVJO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ORCxDQTVORDs7R0FBTVIsUztVQUNXRSxxRDs7O0FBNk5GRix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNjkwMmFkMzFmYjM5ZThjZDU3MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsZXgsIEltYWdlLCBUZXh0LCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IENhcmRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZFByZXZlbnRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFByZXZlbnRpb25cIjtcclxuaW1wb3J0IENhcmRWaWRlb1N5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRWaWRlb1N5bXB0b21zXCI7XHJcbmltcG9ydCBDYXJkSW1hZ2VTeW1wdG9tcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkSW1hZ2VTeW1wdG9tc1wiO1xyXG5pbXBvcnQgQ2FyZERpYWdub3NpcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkRGlhZ25vc2lzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiLi4vcHVibGljL21lbnUuc3ZnXCI7XHJcbmltcG9ydCBHbGFzc0ljb24gZnJvbSBcIi4uL3B1YmxpYy9nbGFzcy5zdmdcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3Rpb25cIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiLi4vcHVibGljL3Bob25lLnN2Z1wiO1xyXG5cclxuY29uc3QgSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBsYWJlbDogXCJQcmV2ZW50aW9uXCIsXHJcbiAgICB2YWx1ZTogXCIxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGxhYmVsOiBcIlN5bXB0b21zXCIsXHJcbiAgICB2YWx1ZTogXCIyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGxhYmVsOiBcIkRpYWdub3Npc1wiLFxyXG4gICAgdmFsdWU6IFwiM1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28xLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiV2VhciBhIGZhY2VtYXNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjE1M1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMi5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkF2b2lkIGNsb3NlIGNvbnRhY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlB1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjEyN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMy5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIlN0YXkgaG9tZSBpZiB5b3XigJlyZSBzaWNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF5IGhvbWUgaWYgeW91IGFyZSBzaWNrLCBleGNlcHQgdG8gZ2V0IG1lZGljYWwgY2FyZS5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjc4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ280LlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMzI0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRhc2hib2FyZDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNsb3NlKSBzZXRDbG9zZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgc3g9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBiZz1cIiNGNEYwRUJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogMzYwLFxyXG4gICAgICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGJnPVwiI0VEM0QzRFwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNsb3NlID8gOTAgOiAyMDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9ezIwfVxyXG4gICAgICAgICAgICBteD17MTV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnJlbG9hZCgpfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9jb3JvbmEuUE5HXCIgdmFyaWFudD1cImNvcm9uYVwiIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEdsYXNzSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIHshY2xvc2UgJiYgKFxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB6SW5kZXg6IDk5LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNjAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgYWR2aWNlIGZvciB0aGUgcHVibGljXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiU3RheSBhd2FyZSBvZiB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHRoZSBDT1ZJRC0xOSBvdXRicmVha1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e0l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghY2xvc2UgJiYgdmFsdWUgIT09IFwiMVwiKSBzZXRDbG9zZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e0l0ZW1zWzBdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge3ZhbCA9PT0gXCIxXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7UHJlSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRQcmV2ZW50aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZUNhcmQ9e2l0ZW0ubmFtZUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJEaXNjdXNzaW9ucz17aXRlbS5udW1iZXJEaXNjdXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogdmFsID09PSBcIjJcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVmlkZW9TeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V1BGN0thM3ROU1VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW89XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9XUEY3S2EzdE5TVVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiV2hhdCBDb3JvbmF2aXJ1cyBTeW1wdG9tcyBMb29rIExpa2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZnRlciBiZWluZyBleHBvc2VkIHRvIHRoZSB2aXJ1cyB0aGF0IGNhdXNlIENPVklELTE5LCBpdCBjYW4gdGFrZSBhcyAyIHRvIDQgZGF5cyB0byBkZXZlbG9wLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBweD17MTV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IG1yPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2ZlcnZlci5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRmV2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhlIHNldmVyaXR5IG9mIENPVklELTE5IHN5bXB0b21zIGNhbiByYW5nZSBmcm9tIHZlcnkgbWlsZCB0byBzZXZlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2NvdWdoLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDb3VnaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3VjaCBhcyBoZWFydCBvciBsdW5nIGRpc2Vhc2Ugb3IgZGlhYmV0ZXMsIG1heSBiZSBhdCBoaWdoZXIgcmlzayBvZiBzZXJpb3VzIGlsbG5lc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAzNjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmREaWFnbm9zaXNcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9EaWFnbm9zaXMuUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9vayBUZXN0IEFwb29pdG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIklmIHlvdSBkZXZlbG9wIHN5bXB0b21zIG9mIGNvcm9uYXZpcnVzIGRpc2Vhc2UgMjAxOSAoQy1PVklELTE5KSBhbmQgeW91J3ZlIGJlZW4gZXhwb3NlZCB0byB0aGUgdmlydXMsIGNvbnRhY3QgeW91ciBkb2N0b3IuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJiaWdTdG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIG1iPVwiNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdmUgYSBNaXNzIENhbGwgT25cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwaG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBob25lSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgbWw9ezEwfT4wMjgtMzkzMC05OTEyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2xvc2UgPyBcImZpeGVkXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNsb3NlID8gNjMwIDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjbG9zZSA/IDM2MCA6IDM0MyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=