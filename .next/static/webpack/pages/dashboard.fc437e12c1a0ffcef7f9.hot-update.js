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
          py: 10,
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
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
              lineNumber: 129,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
              lineNumber: 140,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
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
          lineNumber: 151,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
              lineNumber: 178,
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
                    lineNumber: 195,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
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
                  lineNumber: 213,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
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
                    lineNumber: 222,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
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
                  lineNumber: 245,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
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
                lineNumber: 251,
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
                    lineNumber: 269,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
              lineNumber: 283,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsInpJbmRleCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJyZWxvYWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3NpdGlvbiIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEWSxFQU1aO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTlksRUFXWjtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhZLENBQWQ7QUFrQkEsSUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUMsT0FBSyxFQUFFLG1CQURUO0FBRUVDLFVBQVEsRUFBRSxpQkFGWjtBQUdFQyxhQUFXLEVBQUUsMkRBSGY7QUFJ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O0FBQUEsdUJBYkYsZUF3QkUscUVBQUMsK0NBQUQ7QUFBUSx1QkFBTyxFQUFDLE9BQWhCO0FBQUEsdUNBQ0UscUVBQUMsNkNBQUQ7QUFDRSxvQkFBRSxFQUFFO0FBQ0ZkLGtDQUFjLEVBQUUsUUFEZDtBQUVGQyw4QkFBVSxFQUFFO0FBRlYsbUJBRE47QUFBQSwwQ0FNRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBT0UscUVBQUMsNkNBQUQ7QUFBTSxzQkFBRSxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUErR0UscUVBQUMsNkNBQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRmMsc0JBQVEsRUFBRXJCLEtBQUssR0FBRyxPQUFILEdBQWEsVUFEMUI7QUFFRnNCLGlCQUFHLEVBQUV0QixLQUFLLEdBQUcsR0FBSCxHQUFTLENBRmpCO0FBR0ZLLG1CQUFLLEVBQUVMLEtBQUssR0FBRyxHQUFILEdBQVM7QUFIbkIsYUFETjtBQUFBLG1DQU9FLHFFQUFDLDBEQUFEO0FBQVEscUJBQU8sRUFBRUk7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNk5ELENBdE9EOztHQUFNUixTO1VBQ1dFLHFEOzs7QUF1T0ZGLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5mYzQzN2UxMmMxYTBmZmNlZjdmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxleCwgSW1hZ2UsIFRleHQsIEJ1dHRvbiwgR3JpZCB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5pbXBvcnQgQ2FyZEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkQnV0dG9uXCI7XHJcbmltcG9ydCBDYXJkUHJldmVudGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkUHJldmVudGlvblwiO1xyXG5pbXBvcnQgQ2FyZFZpZGVvU3ltcHRvbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFZpZGVvU3ltcHRvbXNcIjtcclxuaW1wb3J0IENhcmRJbWFnZVN5bXB0b21zIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRJbWFnZVN5bXB0b21zXCI7XHJcbmltcG9ydCBDYXJkRGlhZ25vc2lzIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmREaWFnbm9zaXNcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCIuLi9wdWJsaWMvbWVudS5zdmdcIjtcclxuaW1wb3J0IEdsYXNzSWNvbiBmcm9tIFwiLi4vcHVibGljL2dsYXNzLnN2Z1wiO1xyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGlvblwiO1xyXG5pbXBvcnQgUGhvbmVJY29uIGZyb20gXCIuLi9wdWJsaWMvcGhvbmUuc3ZnXCI7XHJcblxyXG5jb25zdCBJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGxhYmVsOiBcIlByZXZlbnRpb25cIixcclxuICAgIHZhbHVlOiBcIjFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbGFiZWw6IFwiU3ltcHRvbXNcIixcclxuICAgIHZhbHVlOiBcIjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbGFiZWw6IFwiRGlhZ25vc2lzXCIsXHJcbiAgICB2YWx1ZTogXCIzXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByZUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzEuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJXZWFyIGEgZmFjZW1hc2tcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIllvdSBzaG91bGQgd2VhciBmYWNlbWFzayB3aGVuIHlvdSBhcmUgYXJvdW5kIG90aGVyIHBlb3BsZVwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMTUzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28yLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiQXZvaWQgY2xvc2UgY29udGFjdFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUHV0IGRpc3RhbmNlIGJldHdlZW4geW91cnNlbGYgYW5kIG90aGVyIHBlb3BsZVwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiMTI3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL2xvZ28zLlBOR1wiLFxyXG4gICAgbmFtZUNhcmQ6IFwiU3RheSBob21lIGlmIHlvdeKAmXJlIHNpY2tcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlN0YXkgaG9tZSBpZiB5b3UgYXJlIHNpY2ssIGV4Y2VwdCB0byBnZXQgbWVkaWNhbCBjYXJlLlwiLFxyXG4gICAgbnVtYmVyRGlzY3Vzc2lvbnM6IFwiNzhcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzQuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJDbGVhbiB5b3VyIGhhbmRzIG9mdGVuXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDbGVhbiB5b3VyIGhhbmRzIG9mdGVuXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIzMjRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgZGFzaGJvYXJkOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY2xvc2UsIHNldENsb3NlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmFsLCBzZXRWYWxdID0gdXNlU3RhdGUoXCIxXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmICghY2xvc2UpIHNldENsb3NlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGJnPVwiI0Y0RjBFQlwiXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHdpZHRoOiAzNjAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDcwMCxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICBvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYmc9XCIjRUQzRDNEXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogY2xvc2UgPyA5MCA6IDIwMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBiZz1cIiNFRDNEM0RcIlxyXG4gICAgICAgICAgICBtdD17MjB9XHJcbiAgICAgICAgICAgIG14PXsxNX1cclxuICAgICAgICAgICAgcHk9ezEwfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45MClcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2Nvcm9uYS5QTkdcIiB2YXJpYW50PVwiY29yb25hXCIgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dCAwc1wiLFxyXG4gICAgICAgICAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R2xhc3NJY29uIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgeyFjbG9zZSAmJiAoXHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17LTEzMH1cclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICB6SW5kZXg6IDk5LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZEJ1dHRvblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29yb25hdmlydXMgZGlzZWFzZSAoQ09WSUQtMTkpIGFkdmljZSBmb3IgdGhlIHB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgY29udGVudD1cIlN0YXkgYXdhcmUgb2YgdGhlIGxhdGVzdCBpbmZvcm1hdGlvbiBvbiB0aGUgQ09WSUQtMTkgb3V0YnJlYWtcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIG10PXstMTYwfVxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgbXQ9e2Nsb3NlID8gMTM3IDogMTg1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17SXRlbXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0VmFsKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFjbG9zZSAmJiB2YWx1ZSAhPT0gXCIxXCIpIHNldENsb3NlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbT17SXRlbXNbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7dmFsID09PSBcIjFcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtQcmVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFByZXZlbnRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lQ2FyZD17aXRlbS5uYW1lQ2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckRpc2N1c3Npb25zPXtpdGVtLm51bWJlckRpc2N1c3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICkgOiB2YWwgPT09IFwiMlwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRWaWRlb1N5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XUEY3S2EzdE5TVVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWRlbz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1dQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJXaGF0IENvcm9uYXZpcnVzIFN5bXB0b21zIExvb2sgTGlrZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFmdGVyIGJlaW5nIGV4cG9zZWQgdG8gdGhlIHZpcnVzIHRoYXQgY2F1c2UgQ09WSUQtMTksIGl0IGNhbiB0YWtlIGFzIDIgdG8gNCBkYXlzIHRvIGRldmVsb3AuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbHVtbnM9ezJ9IHB4PXsxNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2ZlcnZlci5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRmV2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhlIHNldmVyaXR5IG9mIENPVklELTE5IHN5bXB0b21zIGNhbiByYW5nZSBmcm9tIHZlcnkgbWlsZCB0byBzZXZlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEltYWdlU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL2NvdWdoLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJDb3VnaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3VjaCBhcyBoZWFydCBvciBsdW5nIGRpc2Vhc2Ugb3IgZGlhYmV0ZXMsIG1heSBiZSBhdCBoaWdoZXIgcmlzayBvZiBzZXJpb3VzIGlsbG5lc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IHN4PXt7IHdpZHRoOiAzNjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmREaWFnbm9zaXNcclxuICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9EaWFnbm9zaXMuUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9vayBUZXN0IEFwb29pdG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIklmIHlvdSBkZXZlbG9wIHN5bXB0b21zIG9mIGNvcm9uYXZpcnVzIGRpc2Vhc2UgMjAxOSAoQy1PVklELTE5KSBhbmQgeW91J3ZlIGJlZW4gZXhwb3NlZCB0byB0aGUgdmlydXMsIGNvbnRhY3QgeW91ciBkb2N0b3IuXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJiaWdTdG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgIG1iPVwiNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJoZWFkaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdmUgYSBNaXNzIENhbGwgT25cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwaG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBob25lSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgbWw9ezEwfT4wMjgtMzkzMC05OTEyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2xvc2UgPyBcImZpeGVkXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGNsb3NlID8gNjMwIDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjbG9zZSA/IDM2MCA6IDM0MyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=