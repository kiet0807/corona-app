webpackHotUpdate_N_E("pages/_app",{

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
var theme = {
  fontSizes: [12, 14, 16, 18, 20, 22, 24],
  colors: {
    primary: "blue",
    secondary: "grey",
    white: "#fff",
    bigStone: "#1C2D41",
    outerSpace: "#202E2E",
    chelseaCucumber: "#7DA751",
    chelseaCucumber18: "rgba(125, 167, 81, 0.18)",
    mistGray: "#C2C2B5"
  },
  images: {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 10
    },
    symptoms: {
      m: 10,
      mb: 0,
      height: 110,
      borderRadius: 10
    },
    boarding: {
      width: "100%",
      height: 270
    },
    corona: {
      width: 150,
      height: 25
    },
    person: {
      width: 111,
      height: 130
    },
    diagnosis: {
      mt: 25,
      mb: 15,
      width: 150,
      height: 140
    }
  },
  buttons: {
    primary: {
      bg: "#fff",
      borderRadius: 23,
      height: 45,
      width: 90,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 4px 4px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    secondary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 40,
      width: 135,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    tertiary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 160,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    },
    phone: {
      alignItems: "center",
      justifyContent: "center",
      mt: "5px",
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 200,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1
      },
      ":active": {
        transform: "scale(0.95)"
      }
    }
  },
  fontWeights: {
    body: 500,
    heading: 900
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3RoZW1lLnRzIl0sIm5hbWVzIjpbInRoZW1lIiwiZm9udFNpemVzIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIndoaXRlIiwiYmlnU3RvbmUiLCJvdXRlclNwYWNlIiwiY2hlbHNlYUN1Y3VtYmVyIiwiY2hlbHNlYUN1Y3VtYmVyMTgiLCJtaXN0R3JheSIsImltYWdlcyIsImF2YXRhciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwic3ltcHRvbXMiLCJtIiwibWIiLCJib2FyZGluZyIsImNvcm9uYSIsInBlcnNvbiIsImRpYWdub3NpcyIsIm10IiwiYnV0dG9ucyIsImJnIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJ0cmFuc2Zvcm0iLCJ0ZXJ0aWFyeSIsInBob25lIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFdlaWdodHMiLCJib2R5IiwiaGVhZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBTyxJQUFNQSxLQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsQ0FEZTtBQUcxQkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxNQURIO0FBRU5DLGFBQVMsRUFBRSxNQUZMO0FBR05DLFNBQUssRUFBRSxNQUhEO0FBSU5DLFlBQVEsRUFBRSxTQUpKO0FBS05DLGNBQVUsRUFBRSxTQUxOO0FBTU5DLG1CQUFlLEVBQUUsU0FOWDtBQU9OQyxxQkFBaUIsRUFBRSwwQkFQYjtBQVFOQyxZQUFRLEVBQUU7QUFSSixHQUhrQjtBQWMxQkMsUUFBTSxFQUFFO0FBQ05DLFVBQU0sRUFBRTtBQUNOQyxXQUFLLEVBQUUsR0FERDtBQUVOQyxZQUFNLEVBQUUsR0FGRjtBQUdOQyxrQkFBWSxFQUFFO0FBSFIsS0FERjtBQU1OQyxZQUFRLEVBQUU7QUFDUkMsT0FBQyxFQUFFLEVBREs7QUFFUkMsUUFBRSxFQUFFLENBRkk7QUFHUkosWUFBTSxFQUFFLEdBSEE7QUFJUkMsa0JBQVksRUFBRTtBQUpOLEtBTko7QUFZTkksWUFBUSxFQUFFO0FBQ1JOLFdBQUssRUFBRSxNQURDO0FBRVJDLFlBQU0sRUFBRTtBQUZBLEtBWko7QUFnQk5NLFVBQU0sRUFBRTtBQUNOUCxXQUFLLEVBQUUsR0FERDtBQUVOQyxZQUFNLEVBQUU7QUFGRixLQWhCRjtBQW9CTk8sVUFBTSxFQUFFO0FBQ05SLFdBQUssRUFBRSxHQUREO0FBRU5DLFlBQU0sRUFBRTtBQUZGLEtBcEJGO0FBd0JOUSxhQUFTLEVBQUU7QUFDVEMsUUFBRSxFQUFFLEVBREs7QUFFVEwsUUFBRSxFQUFFLEVBRks7QUFHVEwsV0FBSyxFQUFFLEdBSEU7QUFJVEMsWUFBTSxFQUFFO0FBSkM7QUF4QkwsR0Fka0I7QUE4QzFCVSxTQUFPLEVBQUU7QUFDUHJCLFdBQU8sRUFBRTtBQUNQc0IsUUFBRSxFQUFFLE1BREc7QUFFUFYsa0JBQVksRUFBRSxFQUZQO0FBR1BELFlBQU0sRUFBRSxFQUhEO0FBSVBELFdBQUssRUFBRSxFQUpBO0FBS1BhLFlBQU0sRUFBRSxTQUxEO0FBTVBDLGdCQUFVLEVBQUUseUJBTkw7QUFPUEMsYUFBTyxFQUFFLEdBUEY7QUFRUEMsZUFBUyxFQUFFLGtDQVJKO0FBU1AsZ0JBQVU7QUFDUkQsZUFBTyxFQUFFO0FBREQsT0FUSDtBQVlQLGlCQUFXO0FBQ1RFLGlCQUFTLEVBQUU7QUFERjtBQVpKLEtBREY7QUFpQlAxQixhQUFTLEVBQUU7QUFDVHFCLFFBQUUsRUFBRSxpQkFESztBQUVUVixrQkFBWSxFQUFFLEdBRkw7QUFHVEQsWUFBTSxFQUFFLEVBSEM7QUFJVEQsV0FBSyxFQUFFLEdBSkU7QUFLVGEsWUFBTSxFQUFFLFNBTEM7QUFNVEMsZ0JBQVUsRUFBRSx5QkFOSDtBQU9UQyxhQUFPLEVBQUUsR0FQQTtBQVFUQyxlQUFTLEVBQUUsa0NBUkY7QUFTVCxnQkFBVTtBQUNSRCxlQUFPLEVBQUU7QUFERCxPQVREO0FBWVQsaUJBQVc7QUFDVEUsaUJBQVMsRUFBRTtBQURGO0FBWkYsS0FqQko7QUFpQ1BDLFlBQVEsRUFBRTtBQUNSTixRQUFFLEVBQUUsaUJBREk7QUFFUlYsa0JBQVksRUFBRSxHQUZOO0FBR1JELFlBQU0sRUFBRSxFQUhBO0FBSVJELFdBQUssRUFBRSxHQUpDO0FBS1JhLFlBQU0sRUFBRSxTQUxBO0FBTVJDLGdCQUFVLEVBQUUseUJBTko7QUFPUkMsYUFBTyxFQUFFLEdBUEQ7QUFRUkMsZUFBUyxFQUFFLGtDQVJIO0FBU1IsZ0JBQVU7QUFDUkQsZUFBTyxFQUFFO0FBREQsT0FURjtBQVlSLGlCQUFXO0FBQ1RFLGlCQUFTLEVBQUU7QUFERjtBQVpILEtBakNIO0FBaURQRSxTQUFLLEVBQUU7QUFDTEMsZ0JBQVUsRUFBRSxRQURQO0FBRUxDLG9CQUFjLEVBQUUsUUFGWDtBQUdMWCxRQUFFLEVBQUUsS0FIQztBQUlMRSxRQUFFLEVBQUUsaUJBSkM7QUFLTFYsa0JBQVksRUFBRSxHQUxUO0FBTUxELFlBQU0sRUFBRSxFQU5IO0FBT0xELFdBQUssRUFBRSxHQVBGO0FBUUxhLFlBQU0sRUFBRSxTQVJIO0FBU0xDLGdCQUFVLEVBQUUseUJBVFA7QUFVTEMsYUFBTyxFQUFFLEdBVko7QUFXTEMsZUFBUyxFQUFFLGtDQVhOO0FBWUwsZ0JBQVU7QUFDUkQsZUFBTyxFQUFFO0FBREQsT0FaTDtBQWVMLGlCQUFXO0FBQ1RFLGlCQUFTLEVBQUU7QUFERjtBQWZOO0FBakRBLEdBOUNpQjtBQW1IMUJLLGFBQVcsRUFBRTtBQUNYQyxRQUFJLEVBQUUsR0FESztBQUVYQyxXQUFPLEVBQUU7QUFGRTtBQW5IYSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIwZTRiZmI3ZWJjMmQxYmI5YTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xyXG5leHBvcnQgY29uc3QgdGhlbWU6IFRoZW1lID0ge1xyXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDE4LCAyMCwgMjIsIDI0XSxcclxuXHJcbiAgY29sb3JzOiB7XHJcbiAgICBwcmltYXJ5OiBcImJsdWVcIixcclxuICAgIHNlY29uZGFyeTogXCJncmV5XCIsXHJcbiAgICB3aGl0ZTogXCIjZmZmXCIsXHJcbiAgICBiaWdTdG9uZTogXCIjMUMyRDQxXCIsXHJcbiAgICBvdXRlclNwYWNlOiBcIiMyMDJFMkVcIixcclxuICAgIGNoZWxzZWFDdWN1bWJlcjogXCIjN0RBNzUxXCIsXHJcbiAgICBjaGVsc2VhQ3VjdW1iZXIxODogXCJyZ2JhKDEyNSwgMTY3LCA4MSwgMC4xOClcIixcclxuICAgIG1pc3RHcmF5OiBcIiNDMkMyQjVcIixcclxuICB9LFxyXG5cclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIH0sXHJcbiAgICBzeW1wdG9tczoge1xyXG4gICAgICBtOiAxMCxcclxuICAgICAgbWI6IDAsXHJcbiAgICAgIGhlaWdodDogMTEwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgfSxcclxuICAgIGJvYXJkaW5nOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiAyNzAsXHJcbiAgICB9LFxyXG4gICAgY29yb25hOiB7XHJcbiAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgIGhlaWdodDogMjUsXHJcbiAgICB9LFxyXG4gICAgcGVyc29uOiB7XHJcbiAgICAgIHdpZHRoOiAxMTEsXHJcbiAgICAgIGhlaWdodDogMTMwLFxyXG4gICAgfSxcclxuICAgIGRpYWdub3Npczoge1xyXG4gICAgICBtdDogMjUsXHJcbiAgICAgIG1iOiAxNSxcclxuICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgaGVpZ2h0OiAxNDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgYmc6IFwiI2ZmZlwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDIzLFxyXG4gICAgICBoZWlnaHQ6IDQ1LFxyXG4gICAgICB3aWR0aDogOTAsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHNcIixcclxuICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gMTAlKSAxcHggNHB4IDRweCAxcHhcIixcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIGJnOiBcImNoZWxzZWFDdWN1bWJlclwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDE1MCxcclxuICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgd2lkdGg6IDEzNSxcclxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlLWluLW91dCAwc1wiLFxyXG4gICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgIGJveFNoYWRvdzogXCJyZ2IoMCAwIDAgLyAxMCUpIDFweCA2cHggNnB4IDFweFwiLFxyXG4gICAgICBcIjpob3ZlclwiOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgfSxcclxuICAgICAgXCI6YWN0aXZlXCI6IHtcclxuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMC45NSlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXJ0aWFyeToge1xyXG4gICAgICBiZzogXCJjaGVsc2VhQ3VjdW1iZXJcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxNTAsXHJcbiAgICAgIGhlaWdodDogNDUsXHJcbiAgICAgIHdpZHRoOiAxNjAsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHNcIixcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gMTAlKSAxcHggNnB4IDZweCAxcHhcIixcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGhvbmU6IHtcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIG10OiBcIjVweFwiLFxyXG4gICAgICBiZzogXCJjaGVsc2VhQ3VjdW1iZXJcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiAxNTAsXHJcbiAgICAgIGhlaWdodDogNDUsXHJcbiAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHNcIixcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICBib3hTaGFkb3c6IFwicmdiKDAgMCAwIC8gMTAlKSAxcHggNnB4IDZweCAxcHhcIixcclxuICAgICAgXCI6aG92ZXJcIjoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiOmFjdGl2ZVwiOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDAuOTUpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6IDUwMCxcclxuICAgIGhlYWRpbmc6IDkwMCxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9