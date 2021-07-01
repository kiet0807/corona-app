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
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
                columns: 2,
                px: 15,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsInpJbmRleCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJyZWxvYWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3NpdGlvbiIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEWSxFQU1aO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTlksRUFXWjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhZLENBQWQ7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFVBQVEsRUFBRSxpQkFGWjtBQUdFQyxhQUFXLEVBQUUsMkRBSGY7QUFJ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QUFDLCtDQUFEO0FBQVEsdUJBQU8sRUFBQyxPQUFoQjtBQUFBLHVDQUNFLHFFQUFDLDZDQUFEO0FBQ0Usb0JBQUUsRUFBRTtBQUNGZCxrQ0FBYyxFQUFFLFFBRGQ7QUFFRkMsOEJBQVUsRUFBRTtBQUZWLG1CQUROO0FBQUEsMENBTUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORixlQU9FLHFFQUFDLDZDQUFEO0FBQU0sc0JBQUUsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBK0dFLHFFQUFDLDZDQUFEO0FBQ0UsY0FBRSxFQUFFO0FBQ0ZjLHNCQUFRLEVBQUVyQixLQUFLLEdBQUcsT0FBSCxHQUFhLFVBRDFCO0FBRUZzQixpQkFBRyxFQUFFdEIsS0FBSyxHQUFHLEdBQUgsR0FBUyxDQUZqQjtBQUdGSyxtQkFBSyxFQUFFTCxLQUFLLEdBQUcsR0FBSCxHQUFTO0FBSG5CLGFBRE47QUFBQSxtQ0FPRSxxRUFBQywwREFBRDtBQUFRLHFCQUFPLEVBQUVJO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9HRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRORCxDQXJPRDs7R0FBTVIsUztVQUNXRSxxRDs7O0FBc09GRix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuMjBjYWRiMTJmMGEyN2M1NWVlMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsZXgsIEltYWdlLCBUZXh0LCBCdXR0b24sIEdyaWQgfSBmcm9tIFwidGhlbWUtdWlcIjtcclxuaW1wb3J0IENhcmRCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEJ1dHRvblwiO1xyXG5pbXBvcnQgQ2FyZFByZXZlbnRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFByZXZlbnRpb25cIjtcclxuaW1wb3J0IENhcmRWaWRlb1N5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRWaWRlb1N5bXB0b21zXCI7XHJcbmltcG9ydCBDYXJkSW1hZ2VTeW1wdG9tcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkSW1hZ2VTeW1wdG9tc1wiO1xyXG5pbXBvcnQgQ2FyZERpYWdub3NpcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkRGlhZ25vc2lzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiLi4vcHVibGljL21lbnUuc3ZnXCI7XHJcbmltcG9ydCBHbGFzc0ljb24gZnJvbSBcIi4uL3B1YmxpYy9nbGFzcy5zdmdcIjtcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3Rpb25cIjtcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tIFwiLi4vcHVibGljL3Bob25lLnN2Z1wiO1xyXG5cclxuY29uc3QgSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBsYWJlbDogXCJQcmV2ZW50aW9uXCIsXHJcbiAgICB2YWx1ZTogXCIxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGxhYmVsOiBcIlN5bXB0b21zXCIsXHJcbiAgICB2YWx1ZTogXCIyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGxhYmVsOiBcIkRpYWdub3Npc1wiLFxyXG4gICAgdmFsdWU6IFwiM1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28xLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiV2VhciBhIGZhY2VtYXNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJZb3Ugc2hvdWxkIHdlYXIgZmFjZW1hc2sgd2hlbiB5b3UgYXJlIGFyb3VuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjE1M1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMi5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkF2b2lkIGNsb3NlIGNvbnRhY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlB1dCBkaXN0YW5jZSBiZXR3ZWVuIHlvdXJzZWxmIGFuZCBvdGhlciBwZW9wbGVcIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjEyN1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMy5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIlN0YXkgaG9tZSBpZiB5b3XigJlyZSBzaWNrXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJTdGF5IGhvbWUgaWYgeW91IGFyZSBzaWNrLCBleGNlcHQgdG8gZ2V0IG1lZGljYWwgY2FyZS5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjc4XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ280LlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2xlYW4geW91ciBoYW5kcyBvZnRlblwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMzI0XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRhc2hib2FyZDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2Nsb3NlLCBzZXRDbG9zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZhbCwgc2V0VmFsXSA9IHVzZVN0YXRlKFwiMVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWNsb3NlKSBzZXRDbG9zZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgc3g9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBiZz1cIiNGNEYwRUJcIlxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB3aWR0aDogMzYwLFxyXG4gICAgICAgICAgaGVpZ2h0OiA3MDAsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgb3ZlcmZsb3dZOiBcImF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGJnPVwiI0VEM0QzRFwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNsb3NlID8gOTAgOiAyMDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgYmc9XCIjRUQzRDNEXCJcclxuICAgICAgICAgICAgbXQ9ezIwfVxyXG4gICAgICAgICAgICBteD17MTV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHNcIixcclxuICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjkwKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHNcIixcclxuICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvY29yb25hLlBOR1wiIHZhcmlhbnQ9XCJjb3JvbmFcIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHbGFzc0ljb24gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICB7IWNsb3NlICYmIChcclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG10PXstMTMwfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHpJbmRleDogOTksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb3JvbmF2aXJ1cyBkaXNlYXNlIChDT1ZJRC0xOSkgYWR2aWNlIGZvciB0aGUgcHVibGljXCJcclxuICAgICAgICAgICAgICBjb250ZW50PVwiU3RheSBhd2FyZSBvZiB0aGUgbGF0ZXN0IGluZm9ybWF0aW9uIG9uIHRoZSBDT1ZJRC0xOSBvdXRicmVha1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgbXQ9ey0xNjB9XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4MCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17Y2xvc2UgPyAxMzcgOiAxODV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtJdGVtc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRWYWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlICYmIHZhbHVlICE9PSBcIjFcIikgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtJdGVtc1swXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHt2YWwgPT09IFwiMVwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1ByZUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJldmVudGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVDYXJkPXtpdGVtLm5hbWVDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyRGlzY3Vzc2lvbnM9e2l0ZW0ubnVtYmVyRGlzY3Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSA6IHZhbCA9PT0gXCIyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFZpZGVvU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVdQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvV1BGN0thM3ROU1VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIldoYXQgQ29yb25hdmlydXMgU3ltcHRvbXMgTG9vayBMaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWZ0ZXIgYmVpbmcgZXhwb3NlZCB0byB0aGUgdmlydXMgdGhhdCBjYXVzZSBDT1ZJRC0xOSwgaXQgY2FuIHRha2UgYXMgMiB0byA0IGRheXMgdG8gZGV2ZWxvcC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0gcHg9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvZmVydmVyLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJGZXZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGUgc2V2ZXJpdHkgb2YgQ09WSUQtMTkgc3ltcHRvbXMgY2FuIHJhbmdlIGZyb20gdmVyeSBtaWxkIHRvIHNldmVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW1hZ2VTeW1wdG9tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvY291Z2guUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkNvdWdoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTdWNoIGFzIGhlYXJ0IG9yIGx1bmcgZGlzZWFzZSBvciBkaWFiZXRlcywgbWF5IGJlIGF0IGhpZ2hlciByaXNrIG9mIHNlcmlvdXMgaWxsbmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggc3g9e3sgd2lkdGg6IDM2MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERpYWdub3Npc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL0RpYWdub3Npcy5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCb29rIFRlc3QgQXBvb2l0bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiSWYgeW91IGRldmVsb3Agc3ltcHRvbXMgb2YgY29yb25hdmlydXMgZGlzZWFzZSAyMDE5IChDLU9WSUQtMTkpIGFuZCB5b3UndmUgYmVlbiBleHBvc2VkIHRvIHRoZSB2aXJ1cywgY29udGFjdCB5b3VyIGRvY3Rvci5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJpZ1N0b25lXCJcclxuICAgICAgICAgICAgICAgICAgICBtdD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWI9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgR2l2ZSBhIE1pc3MgQ2FsbCBPblxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInBob25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGhvbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtbD17MTB9PjAyOC0zOTMwLTk5MTI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjbG9zZSA/IFwiZml4ZWRcIiA6IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgIHRvcDogY2xvc2UgPyA2MzAgOiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNsb3NlID8gMzYwIDogMzQzLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9vdGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==