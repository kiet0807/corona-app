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
          bg: "#ED3D3D",
          mt: 20,
          mx: 15,
          sx: {
            width: "100%",
            height: 30,
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 99
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              cursor: "pointer",
              transition: "all 0.3s ease-in-out 0s",
              ":active": {
                transform: "scale(0.90)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_menu_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            onClick: function onClick() {
              router.reload();
            },
            sx: {
              cursor: "pointer",
              transition: "all 0.3s ease-in-out 0s",
              ":active": {
                transform: "scale(0.95)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
              src: "/images/corona.PNG",
              variant: "corona"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
            sx: {
              cursor: "pointer",
              transition: "all 0.3s ease-in-out 0s",
              ":active": {
                transform: "scale(0.95)"
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_glass_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
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
          lineNumber: 150,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
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
              lineNumber: 177,
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
                    lineNumber: 194,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
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
                  lineNumber: 212,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
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
                    lineNumber: 221,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
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
                  lineNumber: 244,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
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
                lineNumber: 250,
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
                    lineNumber: 268,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
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
              lineNumber: 282,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsInpJbmRleCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJyZWxvYWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3NpdGlvbiIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEWSxFQU1aO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTlksRUFXWjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhZLENBQWQ7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFVBQVEsRUFBRSxpQkFGWjtBQUdFQyxhQUFXLEVBQUUsMkRBSGY7QUFJ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QywrQ0FBRDtBQUFRLHVCQUFPLEVBQUMsT0FBaEI7QUFBQSx1Q0FDRSxxRUFBQyw2Q0FBRDtBQUNFLG9CQUFFLEVBQUU7QUFDRmQsa0NBQWMsRUFBRSxRQURkO0FBRUZDLDhCQUFVLEVBQUU7QUFGVixtQkFETjtBQUFBLDBDQU1FLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFPRSxxRUFBQyw2Q0FBRDtBQUFNLHNCQUFFLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQStHRSxxRUFBQyw2Q0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGYyxzQkFBUSxFQUFFckIsS0FBSyxHQUFHLE9BQUgsR0FBYSxVQUQxQjtBQUVGc0IsaUJBQUcsRUFBRXRCLEtBQUssR0FBRyxHQUFILEdBQVMsQ0FGakI7QUFHRkssbUJBQUssRUFBRUwsS0FBSyxHQUFHLEdBQUgsR0FBUztBQUhuQixhQUROO0FBQUEsbUNBT0UscUVBQUMsMERBQUQ7QUFBUSxxQkFBTyxFQUFFSTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0TkQsQ0FyT0Q7O0dBQU1SLFM7VUFDV0UscUQ7OztBQXNPRkYsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjljODJiZWVmZTZmMTcxNjkyMzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBJbWFnZSwgVGV4dCwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBDYXJkQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRCdXR0b25cIjtcclxuaW1wb3J0IENhcmRQcmV2ZW50aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRQcmV2ZW50aW9uXCI7XHJcbmltcG9ydCBDYXJkVmlkZW9TeW1wdG9tcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tc1wiO1xyXG5pbXBvcnQgQ2FyZEltYWdlU3ltcHRvbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEltYWdlU3ltcHRvbXNcIjtcclxuaW1wb3J0IENhcmREaWFnbm9zaXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZERpYWdub3Npc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIi4uL3B1YmxpYy9tZW51LnN2Z1wiO1xyXG5pbXBvcnQgR2xhc3NJY29uIGZyb20gXCIuLi9wdWJsaWMvZ2xhc3Muc3ZnXCI7XHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0aW9uXCI7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSBcIi4uL3B1YmxpYy9waG9uZS5zdmdcIjtcclxuXHJcbmNvbnN0IEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbGFiZWw6IFwiUHJldmVudGlvblwiLFxyXG4gICAgdmFsdWU6IFwiMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBsYWJlbDogXCJTeW1wdG9tc1wiLFxyXG4gICAgdmFsdWU6IFwiMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBsYWJlbDogXCJEaWFnbm9zaXNcIixcclxuICAgIHZhbHVlOiBcIjNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJlSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMS5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIldlYXIgYSBmYWNlbWFza1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxNTNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzIuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJBdm9pZCBjbG9zZSBjb250YWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxMjdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzMuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJTdGF5IGhvbWUgaWYgeW914oCZcmUgc2lja1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3RheSBob21lIGlmIHlvdSBhcmUgc2ljaywgZXhjZXB0IHRvIGdldCBtZWRpY2FsIGNhcmUuXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCI3OFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvNC5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjMyNFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXNoYm9hcmQ6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIjFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjbG9zZSkgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgYmc9XCIjRjRGMEVCXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IDM2MCxcclxuICAgICAgICAgIGhlaWdodDogNzAwLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBiZz1cIiNFRDNEM0RcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBjbG9zZSA/IDkwIDogMjAwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGJnPVwiI0VEM0QzRFwiXHJcbiAgICAgICAgICAgIG10PXsyMH1cclxuICAgICAgICAgICAgbXg9ezE1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45MClcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2Nvcm9uYS5QTkdcIiB2YXJpYW50PVwiY29yb25hXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dCAwc1wiLFxyXG4gICAgICAgICAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R2xhc3NJY29uIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgeyFjbG9zZSAmJiAoXHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17LTEzMH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB6SW5kZXg6IDk5LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZEJ1dHRvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGFkdmljZSBmb3IgdGhlIHB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlN0YXkgYXdhcmUgb2YgdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBvbiB0aGUgQ09WSUQtMTkgb3V0YnJlYWtcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIG10PXstMTYwfVxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9e2Nsb3NlID8gMTM3IDogMTg1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17SXRlbXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZSAmJiB2YWx1ZSAhPT0gXCIxXCIpIHNldENsb3NlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17SXRlbXNbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7dmFsID09PSBcIjFcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtQcmVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByZXZlbnRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQ2FyZD17aXRlbS5uYW1lQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckRpc2N1c3Npb25zPXtpdGVtLm51bWJlckRpc2N1c3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkgOiB2YWwgPT09IFwiMlwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRWaWRlb1N5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XUEY3S2EzdE5TVVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWRlbz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1dQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXaGF0IENvcm9uYXZpcnVzIFN5bXB0b21zIExvb2sgTGlrZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFmdGVyIGJlaW5nIGV4cG9zZWQgdG8gdGhlIHZpcnVzIHRoYXQgY2F1c2UgQ09WSUQtMTksIGl0IGNhbiB0YWtlIGFzIDIgdG8gNCBkYXlzIHRvIGRldmVsb3AuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IHB4PXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggbXI9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvZmVydmVyLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGZXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGUgc2V2ZXJpdHkgb2YgQ09WSUQtMTkgc3ltcHRvbXMgY2FuIHJhbmdlIGZyb20gdmVyeSBtaWxkIHRvIHNldmVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvY291Z2guUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNvdWdoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTdWNoIGFzIGhlYXJ0IG9yIGx1bmcgZGlzZWFzZSBvciBkaWFiZXRlcywgbWF5IGJlIGF0IGhpZ2hlciByaXNrIG9mIHNlcmlvdXMgaWxsbmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggc3g9e3sgd2lkdGg6IDM2MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERpYWdub3Npc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL0RpYWdub3Npcy5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb29rIFRlc3QgQXBvb2l0bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiSWYgeW91IGRldmVsb3Agc3ltcHRvbXMgb2YgY29yb25hdmlydXMgZGlzZWFzZSAyMDE5IChDLU9WSUQtMTkpIGFuZCB5b3UndmUgYmVlbiBleHBvc2VkIHRvIHRoZSB2aXJ1cywgY29udGFjdCB5b3VyIGRvY3Rvci5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJpZ1N0b25lXCJcclxuICAgICAgICAgICAgICAgICAgICBtdD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWI9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l2ZSBhIE1pc3MgQ2FsbCBPblxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInBob25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGhvbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtbD17MTB9PjAyOC0zOTMwLTk5MTI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjbG9zZSA/IFwiZml4ZWRcIiA6IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHRvcDogY2xvc2UgPyA2MzAgOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNsb3NlID8gMzYwIDogMzQzLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9vdGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==