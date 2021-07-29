(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ "./services/api.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\pages\\index.js";




async function getStaticProps(context) {
  // O que eu passar aqui, ele vai virar SEO
  const response = await _services_api__WEBPACK_IMPORTED_MODULE_4__.default.get("posts").then(response => {
    return response.data;
  }).catch(error => {
    console.log(error);
    return false;
  }); // will be passed to the page component as props

  return {
    props: {
      response
    }
  };
}
function Home({
  response
}) {
  const {
    0: allPosts,
    1: setAllPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(response);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Translation, Inc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "Translation, Inc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "38x38",
        href: "../images/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Coodesh Challenge"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), allPosts.data.map(post => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: post.title
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 16
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
} // Styled Components

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["*{font-family:sans-serif;}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-12168fx-0"
})(["text-align:center;"]);

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.get["Access-Control-Allow-Origin"]) = '*';
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vc2VydmljZXMvYXBpLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXNwb25zZSIsImFwaSIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIkhvbWUiLCJhbGxQb3N0cyIsInNldEFsbFBvc3RzIiwidXNlU3RhdGUiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJpZCIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJheGlvcyIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFTyxlQUFlQSxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxzREFBQSxDQUNoQixPQURnQixFQUVwQkMsSUFGb0IsQ0FFZEYsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0csSUFBaEI7QUFDRCxHQUpvQixFQUtwQkMsS0FMb0IsQ0FLYkMsS0FBRCxJQUFXO0FBQ2hCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFdBQU8sS0FBUDtBQUNELEdBUm9CLENBQXZCLENBRjRDLENBWTVDOztBQUNBLFNBQU87QUFDTEcsU0FBSyxFQUFFO0FBQ0xSO0FBREs7QUFERixHQUFQO0FBS0Q7QUFFYyxTQUFTUyxJQUFULENBQWM7QUFBRVQ7QUFBRixDQUFkLEVBQTRCO0FBQ3pDLFFBQU07QUFBQSxPQUFDVSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQ1osUUFBRCxDQUF4QztBQUVBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSw0QkFDRSw4REFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUNFLFdBQUcsRUFBQyxNQUROO0FBRUUsWUFBSSxFQUFDLFdBRlA7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLFlBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFlR1UsUUFBUSxDQUFDUCxJQUFULENBQWNVLEdBQWQsQ0FBbUJDLElBQUQsSUFBVTtBQUMzQiwwQkFBTztBQUFBLGtCQUFvQkEsSUFBSSxDQUFDQztBQUF6QixTQUFVRCxJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0QsS0FGQSxDQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJELEMsQ0FFRDs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLG9FQUFILGdDQUFqQjtBQU1BLE1BQU1DLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsMEJBQWYsQzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFFQUMsa0dBQUEsR0FBNEQsR0FBNUQ7QUFFQSxNQUFNcEIsR0FBRyxHQUFHb0IsbURBQUEsQ0FBYTtBQUN2QkMsU0FBTyxFQUFFO0FBRGMsQ0FBYixDQUFaO0FBSUEsK0RBQWVyQixHQUFmLEU7Ozs7Ozs7Ozs7O0FDUkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gTyBxdWUgZXUgcGFzc2FyIGFxdWksIGVsZSB2YWkgdmlyYXIgU0VPXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlcclxuICAgIC5nZXQoXCJwb3N0c1wiKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHJlc3BvbnNlLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzcG9uc2UgfSkge1xyXG4gIGNvbnN0IFthbGxQb3N0cywgc2V0QWxsUG9zdHNdID0gdXNlU3RhdGUocmVzcG9uc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UcmFuc2xhdGlvbiwgSW5jPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRyYW5zbGF0aW9uLCBJbmNcIiAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxyXG4gICAgICAgICAgc2l6ZXM9XCIzOHgzOFwiXHJcbiAgICAgICAgICBocmVmPVwiLi4vaW1hZ2VzL2Zhdmljb24ucG5nXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8cD5Db29kZXNoIENoYWxsZW5nZTwvcD5cclxuXHJcbiAgICAgIHthbGxQb3N0cy5kYXRhLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9kaXY+O1xyXG4gICAgICB9KX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFN0eWxlZCBDb21wb25lbnRzXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAqIHtcclxuICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuZ2V0WydBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nXSA9ICcqJztcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYXBpLmJldGEubWVqb3Jjb25zYWx1ZC5jb20vd3AtanNvbi9tYy92Mi8nLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9