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
  nameCard: "Stay home if you???re sick",
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
        mt: -130,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Coronavirus disease (COVID-19) advice for the public",
          content: "Stay aware of the latest information on the COVID-19 outbreak",
          onClick: handleClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
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
              lineNumber: 164,
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
                    lineNumber: 181,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                  lineNumber: 199,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
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
                    lineNumber: 208,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardImageSymptoms__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    image: "/images/cough.PNG",
                    name: "Cough",
                    description: "Such as heart or lung disease or diabetes, may be at higher risk of serious illness"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
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
                  lineNumber: 231,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
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
                lineNumber: 237,
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
                    lineNumber: 255,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Text"], {
                    ml: 10,
                    children: "028-3930-9912"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
              lineNumber: 269,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeCJdLCJuYW1lcyI6WyJJdGVtcyIsImlkIiwibGFiZWwiLCJ2YWx1ZSIsIlByZUl0ZW1zIiwiaW1hZ2UiLCJuYW1lQ2FyZCIsImRlc2NyaXB0aW9uIiwibnVtYmVyRGlzY3Vzc2lvbnMiLCJkYXNoYm9hcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImNsb3NlIiwic2V0Q2xvc2UiLCJ2YWwiLCJzZXRWYWwiLCJoYW5kbGVDbGljayIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZmxleERpcmVjdGlvbiIsIm92ZXJmbG93WSIsImN1cnNvciIsInRyYW5zZm9ybSIsInJlbG9hZCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsWUFGVDtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURZLEVBTVo7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLFVBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOWSxFQVdaO0FBQ0VGLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWFksQ0FBZDtBQWtCQSxJQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxPQUFLLEVBQUUsbUJBRFQ7QUFFRUMsVUFBUSxFQUFFLGlCQUZaO0FBR0VDLGFBQVcsRUFBRSwyREFIZjtBQUlFQyxtQkFBaUIsRUFBRTtBQUpyQixD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QUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQStHRSxxRUFBQyw2Q0FBRDtBQUNFLGNBQUUsRUFBRTtBQUNGWSxzQkFBUSxFQUFFbkIsS0FBSyxHQUFHLE9BQUgsR0FBYSxVQUQxQjtBQUVGb0IsaUJBQUcsRUFBRXBCLEtBQUssR0FBRyxHQUFILEdBQVMsQ0FGakI7QUFHRkssbUJBQUssRUFBRUwsS0FBSyxHQUFHLEdBQUgsR0FBUztBQUhuQixhQUROO0FBQUEsbUNBT0UscUVBQUMsMERBQUQ7QUFBUSxxQkFBTyxFQUFFSTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEvR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErTUQsQ0F4TkQ7O0dBQU1SLFM7VUFDV0UscUQ7OztBQXlORkYsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjUzNjdkNDY0MWUxYmI3NDBiYWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGV4LCBJbWFnZSwgVGV4dCwgQnV0dG9uIH0gZnJvbSBcInRoZW1lLXVpXCI7XHJcbmltcG9ydCBDYXJkQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRCdXR0b25cIjtcclxuaW1wb3J0IENhcmRQcmV2ZW50aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRQcmV2ZW50aW9uXCI7XHJcbmltcG9ydCBDYXJkVmlkZW9TeW1wdG9tcyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkVmlkZW9TeW1wdG9tc1wiO1xyXG5pbXBvcnQgQ2FyZEltYWdlU3ltcHRvbXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZEltYWdlU3ltcHRvbXNcIjtcclxuaW1wb3J0IENhcmREaWFnbm9zaXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZERpYWdub3Npc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIi4uL3B1YmxpYy9tZW51LnN2Z1wiO1xyXG5pbXBvcnQgR2xhc3NJY29uIGZyb20gXCIuLi9wdWJsaWMvZ2xhc3Muc3ZnXCI7XHJcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0aW9uXCI7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSBcIi4uL3B1YmxpYy9waG9uZS5zdmdcIjtcclxuXHJcbmNvbnN0IEl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbGFiZWw6IFwiUHJldmVudGlvblwiLFxyXG4gICAgdmFsdWU6IFwiMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBsYWJlbDogXCJTeW1wdG9tc1wiLFxyXG4gICAgdmFsdWU6IFwiMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBsYWJlbDogXCJEaWFnbm9zaXNcIixcclxuICAgIHZhbHVlOiBcIjNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgUHJlSXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvMS5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIldlYXIgYSBmYWNlbWFza1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiWW91IHNob3VsZCB3ZWFyIGZhY2VtYXNrIHdoZW4geW91IGFyZSBhcm91bmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxNTNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzIuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJBdm9pZCBjbG9zZSBjb250YWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJQdXQgZGlzdGFuY2UgYmV0d2VlbiB5b3Vyc2VsZiBhbmQgb3RoZXIgcGVvcGxlXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCIxMjdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvbG9nbzMuUE5HXCIsXHJcbiAgICBuYW1lQ2FyZDogXCJTdGF5IGhvbWUgaWYgeW914oCZcmUgc2lja1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiU3RheSBob21lIGlmIHlvdSBhcmUgc2ljaywgZXhjZXB0IHRvIGdldCBtZWRpY2FsIGNhcmUuXCIsXHJcbiAgICBudW1iZXJEaXNjdXNzaW9uczogXCI3OFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9sb2dvNC5QTkdcIixcclxuICAgIG5hbWVDYXJkOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNsZWFuIHlvdXIgaGFuZHMgb2Z0ZW5cIixcclxuICAgIG51bWJlckRpc2N1c3Npb25zOiBcIjMyNFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBkYXNoYm9hcmQ6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjbG9zZSwgc2V0Q2xvc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZShcIjFcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjbG9zZSkgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4XHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgYmc9XCIjRjRGMEVCXCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgd2lkdGg6IDM2MCxcclxuICAgICAgICAgIGhlaWdodDogNzAwLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgIG92ZXJmbG93WTogXCJhdXRvXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBiZz1cIiNFRDNEM0RcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBjbG9zZSA/IDkwIDogMjAwLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIG10PXsyMH1cclxuICAgICAgICAgICAgbXg9ezE1fVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZWxvYWQoKX1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjk1KVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvY29yb25hLlBOR1wiIHZhcmlhbnQ9XCJjb3JvbmFcIiAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIjphY3RpdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHbGFzc0ljb24gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgICB7IWNsb3NlICYmIChcclxuICAgICAgICAgIDxGbGV4IG10PXstMTMwfT5cclxuICAgICAgICAgICAgPENhcmRCdXR0b25cclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvcm9uYXZpcnVzIGRpc2Vhc2UgKENPVklELTE5KSBhZHZpY2UgZm9yIHRoZSBwdWJsaWNcIlxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJTdGF5IGF3YXJlIG9mIHRoZSBsYXRlc3QgaW5mb3JtYXRpb24gb24gdGhlIENPVklELTE5IG91dGJyZWFrXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4MCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICBtdD17Y2xvc2UgPyAxMzcgOiAxODV9XHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtJdGVtc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRWYWwodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWNsb3NlICYmIHZhbHVlICE9PSBcIjFcIikgc2V0Q2xvc2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtJdGVtc1swXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHt2YWwgPT09IFwiMVwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge1ByZUl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkUHJldmVudGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVDYXJkPXtpdGVtLm5hbWVDYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyRGlzY3Vzc2lvbnM9e2l0ZW0ubnVtYmVyRGlzY3Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSA6IHZhbCA9PT0gXCIyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFZpZGVvU3ltcHRvbXNcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVdQRjdLYTN0TlNVXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvV1BGN0thM3ROU1VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIldoYXQgQ29yb25hdmlydXMgU3ltcHRvbXMgTG9vayBMaWtlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWZ0ZXIgYmVpbmcgZXhwb3NlZCB0byB0aGUgdmlydXMgdGhhdCBjYXVzZSBDT1ZJRC0xOSwgaXQgY2FuIHRha2UgYXMgMiB0byA0IGRheXMgdG8gZGV2ZWxvcC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggcHg9ezE1fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBtcj17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZVN5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9mZXJ2ZXIuUE5HXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkZldmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIZSBzZXZlcml0eSBvZiBDT1ZJRC0xOSBzeW1wdG9tcyBjYW4gcmFuZ2UgZnJvbSB2ZXJ5IG1pbGQgdG8gc2V2ZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRJbWFnZVN5bXB0b21zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9jb3VnaC5QTkdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ291Z2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlN1Y2ggYXMgaGVhcnQgb3IgbHVuZyBkaXNlYXNlIG9yIGRpYWJldGVzLCBtYXkgYmUgYXQgaGlnaGVyIHJpc2sgb2Ygc2VyaW91cyBpbGxuZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBzeD17eyB3aWR0aDogMzYwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRGlhZ25vc2lzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvRGlhZ25vc2lzLlBOR1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJvb2sgVGVzdCBBcG9vaXRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJJZiB5b3UgZGV2ZWxvcCBzeW1wdG9tcyBvZiBjb3JvbmF2aXJ1cyBkaXNlYXNlIDIwMTkgKEMtT1ZJRC0xOSkgYW5kIHlvdSd2ZSBiZWVuIGV4cG9zZWQgdG8gdGhlIHZpcnVzLCBjb250YWN0IHlvdXIgZG9jdG9yLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmlnU3RvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG10PXszMH1cclxuICAgICAgICAgICAgICAgICAgICBtYj1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiaGVhZGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHaXZlIGEgTWlzcyBDYWxsIE9uXHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQaG9uZUljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG1sPXsxMH0+MDI4LTM5MzAtOTkxMjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNsb3NlID8gXCJmaXhlZFwiIDogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBjbG9zZSA/IDYzMCA6IDAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2xvc2UgPyAzNjAgOiAzNDMsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxGb290ZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9