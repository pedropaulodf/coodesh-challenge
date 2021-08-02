(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/Button/Button.js":
/*!*************************************!*\
  !*** ./components/Button/Button.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ButtonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonStyles */ "./components/Button/ButtonStyles.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\Button\\Button.js";


function Button({
  text,
  onButtonClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonStyles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {
    type: "button",
    onClick: onButtonClick,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Button/ButtonStyles.js":
/*!*******************************************!*\
  !*** ./components/Button/ButtonStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "ButtonStyles__StyledButton",
  componentId: "sc-1dv62ee-0"
})(["width:100%;height:40px;border:none;background-color:#E0E0E0;border-radius:7px;font-size:0.9em;cursor:pointer;&:hover{background-color:#d0d0d0;}"]);

/***/ }),

/***/ "./components/CategoryBullet/CategoryBullet.js":
/*!*****************************************************!*\
  !*** ./components/CategoryBullet/CategoryBullet.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CategoryBullet; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryBulletStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryBulletStyles */ "./components/CategoryBullet/CategoryBulletStyles.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\CategoryBullet\\CategoryBullet.js";


function CategoryBullet({
  data,
  quantityFirstLetters
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    },
    children: data.map(category => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryBulletStyles__WEBPACK_IMPORTED_MODULE_2__.BulletContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: quantityFirstLetters > 0 ? category.name.substring(0, quantityFirstLetters) : category.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this)
      }, category.id, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CategoryBullet/CategoryBulletStyles.js":
/*!***********************************************************!*\
  !*** ./components/CategoryBullet/CategoryBulletStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletContainer": function() { return /* binding */ BulletContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BulletContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CategoryBulletStyles__BulletContainer",
  componentId: "sc-1tfws5q-0"
})(["display:flex;justify-content:center;align-items:center;height:auto;padding:4px 10px;border:2px solid #ededed;background-color:#f4f4f4;border-radius:7px;font-size:0.7em;width:fit-content;margin-left:4px;"]);

/***/ }),

/***/ "./components/Container/Container.js":
/*!*******************************************!*\
  !*** ./components/Container/Container.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContainerStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContainerStyles */ "./components/Container/ContainerStyles.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\Container\\Container.js";


function Container({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContainerStyles__WEBPACK_IMPORTED_MODULE_2__.StyledContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContainerStyles__WEBPACK_IMPORTED_MODULE_2__.StyledCoGrid, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Container/ContainerStyles.js":
/*!*************************************************!*\
  !*** ./components/Container/ContainerStyles.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledContainer": function() { return /* binding */ StyledContainer; },
/* harmony export */   "StyledCoGrid": function() { return /* binding */ StyledCoGrid; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ContainerStyles__StyledContainer",
  componentId: "sc-te9vg1-0"
})(["width:100%;display:flex;align-items:center;flex-direction:column;justify-content:center;position:relative;margin-bottom:50px;@media(min-width:1024px){padding:0px 20px;}@media(min-width:768px) and (max-width:1023px){padding:0px 20px;}@media(max-width:767px){padding:0px 20px;}@media(max-width:340px){padding:0px 20px;}"]);
const StyledCoGrid = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ContainerStyles__StyledCoGrid",
  componentId: "sc-te9vg1-1"
})(["width:100%;@media(min-width:1024px){max-width:1200px;}@media(min-width:768px) and (max-width:1023px){max-width:900px;}@media(max-width:767px){max-width:800px;}@media(max-width:340px){max-width:340px;}"]);

/***/ }),

/***/ "./components/HeaderSEO/HeaderSEO.js":
/*!*******************************************!*\
  !*** ./components/HeaderSEO/HeaderSEO.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderSEO; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\HeaderSEO\\HeaderSEO.js";


function HeaderSEO({
  metasData,
  headType
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: headType !== 'post-single' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: metasData.title ? `${metasData.title} | Translation, Inc` : 'Translation, Inc'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: metasData.title ? `${metasData.title} | Translation, Inc` : 'Translation, Inc'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: metasData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "38x38",
        href: "../images/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: `${metasData.title} | Translation, Inc`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: metasData.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InputSearch_InputSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputSearch/InputSearch */ "./components/InputSearch/InputSearch.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderStyles */ "./components/Header/HeaderStyles.js");


var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\Header\\Header.js";





function Header({
  searchData,
  switchAction,
  onlyLogo = false
}) {
  const {
    0: switchChecked,
    1: setSwitchChecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: searchText,
    1: setSearchText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: errorText,
    1: setErrorText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');

  function validateSearchValue(text) {
    if (text === undefined) {
      setErrorText('Blank field'); // return { error: 'Blank field' };

      return {
        searchString: ''
      };
    }

    setErrorText('');
    return {
      searchString: text
    };
  }

  function handleSearchValue(text) {
    const search = validateSearchValue(text);
    setSearchText(search.searchString); // searchData(search);
  }

  function handleSearchButtonClick() {
    const search = validateSearchValue(searchText);
    searchData(search);
  }

  function handleSwitch() {
    const switchVal = !switchChecked;
    switchAction(switchVal);
    setSwitchChecked(switchVal);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__.StyledContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__.StyledLogo, {
          src: "../images/logo.png",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), !onlyLogo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__.StyledMostRelevantBox, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__.StyledMostRelevantBoxText, {
        children: "Most Relevant Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_switch__WEBPACK_IMPORTED_MODULE_4___default()), {
        onChange: handleSwitch,
        checked: switchChecked,
        onColor: "#c9e6c4",
        onHandleColor: "#449e5c",
        handleDiameter: 16,
        uncheckedIcon: false,
        checkedIcon: false,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
        activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
        height: 10,
        width: 30,
        className: "react-switch",
        id: "material-switch"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: !onlyLogo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputSearch_InputSearch__WEBPACK_IMPORTED_MODULE_3__.default, {
          onTextChange: handleSearchValue,
          onButtonSearchClick: handleSearchButtonClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_5__.StyledErrorMessage, {
          children: errorText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Header/HeaderStyles.js":
/*!*******************************************!*\
  !*** ./components/Header/HeaderStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledContainer": function() { return /* binding */ StyledContainer; },
/* harmony export */   "StyledLogo": function() { return /* binding */ StyledLogo; },
/* harmony export */   "StyledErrorMessage": function() { return /* binding */ StyledErrorMessage; },
/* harmony export */   "StyledMostRelevantBox": function() { return /* binding */ StyledMostRelevantBox; },
/* harmony export */   "StyledMostRelevantBoxText": function() { return /* binding */ StyledMostRelevantBoxText; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__StyledContainer",
  componentId: "sc-158nfhm-0"
})(["width:100%;display:flex;justify-content:space-between;align-items:flex-end;margin:20px 0px 50px 0px;@media(min-width:1024px){}@media(min-width:768px) and (max-width:1023px){}@media(max-width:767px){flex-direction:column;align-items:center;}@media(max-width:340px){}"]);
const StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "HeaderStyles__StyledLogo",
  componentId: "sc-158nfhm-1"
})(["width:100%;cursor:pointer;"]);
const StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "HeaderStyles__StyledErrorMessage",
  componentId: "sc-158nfhm-2"
})(["position:absolute;color:red;font-size:0.7em;"]);
const StyledMostRelevantBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__StyledMostRelevantBox",
  componentId: "sc-158nfhm-3"
})(["border:2px solid #d2d2d2;border-radius:8px;padding:10px 15px;display:flex;align-items:center;"]);
const StyledMostRelevantBoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "HeaderStyles__StyledMostRelevantBoxText",
  componentId: "sc-158nfhm-4"
})(["font-size:1em;margin-right:14px;"]);

/***/ }),

/***/ "./components/InputSearch/InputSearch.js":
/*!***********************************************!*\
  !*** ./components/InputSearch/InputSearch.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InputSearch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputSearchStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputSearchStyles */ "./components/InputSearch/InputSearchStyles.js");


var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\InputSearch\\InputSearch.js";


function InputSearch({
  onTextChange,
  onButtonSearchClick
}) {
  const {
    0: inputVal,
    1: setInputVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  function handleTextChange(text) {
    setInputVal(text);
    onTextChange(text);
  }

  function handleButtonClick() {
    onButtonSearchClick();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputSearchStyles__WEBPACK_IMPORTED_MODULE_2__.StyledInput, {
      type: "text",
      placeholder: "Search here:",
      defaultValue: inputVal,
      onChange: v => handleTextChange(v.target.value)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputSearchStyles__WEBPACK_IMPORTED_MODULE_2__.StyledButton, {
      onClick: handleButtonClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "../images/search.png",
        alt: "Do search",
        width: "20px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/InputSearch/InputSearchStyles.js":
/*!*****************************************************!*\
  !*** ./components/InputSearch/InputSearchStyles.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledInput": function() { return /* binding */ StyledInput; },
/* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "InputSearchStyles__StyledInput",
  componentId: "sc-61nkwm-0"
})(["width:100%;height:10px;color:black;font-size:0.9em;border-radius:10px;border:2px solid #d2d2d2;padding:18px 10px;"]);
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "InputSearchStyles__StyledButton",
  componentId: "sc-61nkwm-1"
})(["width:50px;height:40px;background-color:#d2d2d2;border-radius:10px;border:none;padding:0px 0px;position:absolute;margin-left:-50px;cursor:pointer;"]);

/***/ }),

/***/ "./components/Loading/Loading.js":
/*!***************************************!*\
  !*** ./components/Loading/Loading.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingStyles */ "./components/Loading/LoadingStyles.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\Loading\\Loading.js";


function Loading() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingStyles__WEBPACK_IMPORTED_MODULE_2__.StyledLoading, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 22
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 33
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 44
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 55
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Loading/LoadingStyles.js":
/*!*********************************************!*\
  !*** ./components/Loading/LoadingStyles.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledLoading": function() { return /* binding */ StyledLoading; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledLoading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LoadingStyles__StyledLoading",
  componentId: "sc-1inhaqv-0"
})(["display:inline-block;position:relative;width:80px;height:80px;div{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:rgb(133,133,133);animation-timing-function:cubic-bezier(0,1,1,0);}div:nth-child(1){left:8px;animation:lds-ellipsis1 0.6s infinite;}div:nth-child(2){left:8px;animation:lds-ellipsis2 0.6s infinite;}div:nth-child(3){left:32px;animation:lds-ellipsis2 0.6s infinite;}div:nth-child(4){left:56px;animation:lds-ellipsis3 0.6s infinite;}@keyframes lds-ellipsis1{0%{transform:scale(0);}100%{transform:scale(1);}}@keyframes lds-ellipsis3{0%{transform:scale(1);}100%{transform:scale(0);}}@keyframes lds-ellipsis2{0%{transform:translate(0,0);}100%{transform:translate(24px,0);}}"]);

/***/ }),

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaginationStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaginationStyles */ "./components/Pagination/PaginationStyles.js");

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\Pagination\\Pagination.js";


const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2; //Referência https://www.youtube.com/watch?v=v91BLoapVDw

function Pagination({
  limit,
  total,
  offset,
  setOffset,
  actualPage
}) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
    actualPage(page);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledUl, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledPaginationButton, {
        onClick: () => onPageChange(1),
        disabled: currentPage === 1,
        children: "Primeiro"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledPaginationButton, {
        onClick: () => onPageChange(currentPage - 1),
        disabled: currentPage === 1,
        children: "Anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), Array.from({
      length: Math.min(MAX_ITENS, pages)
    }).map((_, index) => index + first).map(page => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledPaginationButton, {
        onClick: () => onPageChange(page),
        className: page === currentPage ? 'active' : '',
        disabled: page === currentPage ? true : page > total ? true : false,
        children: page
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this)
    }, page, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledPaginationButton, {
        onClick: () => onPageChange(currentPage + 1),
        disabled: currentPage === pages || currentPage === total,
        children: "Pr\xF3ximo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PaginationStyles__WEBPACK_IMPORTED_MODULE_2__.StyledPaginationButton, {
        onClick: () => onPageChange(total),
        disabled: currentPage === total,
        children: "\xDAltimo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Pagination/PaginationStyles.js":
/*!***************************************************!*\
  !*** ./components/Pagination/PaginationStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledUl": function() { return /* binding */ StyledUl; },
/* harmony export */   "StyledPaginationButton": function() { return /* binding */ StyledPaginationButton; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "PaginationStyles__StyledUl",
  componentId: "sc-je51d4-0"
})(["display:flex;justify-content:center;align-items:center;margin-top:30px;list-style:none;flex-wrap:wrap;gap:5px 0px;li + li{margin-left:6px;}.active{background-color:#a9a9a9;color:white;}"]);
const StyledPaginationButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "PaginationStyles__StyledPaginationButton",
  componentId: "sc-je51d4-1"
})(["width:fit-content;height:40px;padding:12px;border:none;background-color:#E4E4E4;border-radius:4px;font-weight:bold;cursor:pointer;&:hover{background-color:#C0C0C0;}"]);

/***/ }),

/***/ "./components/PostCard/PostCard.js":
/*!*****************************************!*\
  !*** ./components/PostCard/PostCard.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.js");
/* harmony import */ var _CategoryBullet_CategoryBullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategoryBullet/CategoryBullet */ "./components/CategoryBullet/CategoryBullet.js");
/* harmony import */ var _PostCardStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostCardStyles */ "./components/PostCard/PostCardStyles.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\components\\PostCard\\PostCard.js";





function PostCard({
  postData,
  onCardButtonClick
}) {
  const {
    0: dateFormatted,
    1: setDateFormatted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  function handleButtonClick(postId) {
    onCardButtonClick(postId);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setDateFormatted(new Date(postData.published).toLocaleDateString());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardContainer, {
    children: [postData.featured_media ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardThumbnail, {
      src: postData.featured_media.thumbnail,
      alt: postData.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardDateCategory, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardDate, {
        children: dateFormatted
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryBullet_CategoryBullet__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: postData.categories,
        quantityFirstLetters: 4
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardTitle, {
      children: postData.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostCardStyles__WEBPACK_IMPORTED_MODULE_4__.StyledCardSubText, {
      children: postData.headline
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: {
        pathname: `/single/${postData.id}`,
        query: {
          slug: postData.slug
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
          text: "read more",
          onButtonClick: () => handleButtonClick(postData.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/PostCard/PostCardStyles.js":
/*!***********************************************!*\
  !*** ./components/PostCard/PostCardStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledCardContainer": function() { return /* binding */ StyledCardContainer; },
/* harmony export */   "StyledCardDateCategory": function() { return /* binding */ StyledCardDateCategory; },
/* harmony export */   "StyledCardDate": function() { return /* binding */ StyledCardDate; },
/* harmony export */   "StyledCardThumbnail": function() { return /* binding */ StyledCardThumbnail; },
/* harmony export */   "StyledCardTitle": function() { return /* binding */ StyledCardTitle; },
/* harmony export */   "StyledCardSubText": function() { return /* binding */ StyledCardSubText; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PostCardStyles__StyledCardContainer",
  componentId: "sc-1x8vpvj-0"
})(["width:100%;padding:16px;border:2px solid #EDEDED;background-color:#F9F9F9;border-radius:8px;"]);
const StyledCardDateCategory = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PostCardStyles__StyledCardDateCategory",
  componentId: "sc-1x8vpvj-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:8px 0px;"]);
const StyledCardDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "PostCardStyles__StyledCardDate",
  componentId: "sc-1x8vpvj-2"
})(["font-size:0.8em;"]);
const StyledCardThumbnail = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "PostCardStyles__StyledCardThumbnail",
  componentId: "sc-1x8vpvj-3"
})(["width:100%;border-radius:10px;height:190px;object-fit:cover;"]);
const StyledCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "PostCardStyles__StyledCardTitle",
  componentId: "sc-1x8vpvj-4"
})(["font-family:'Hammersmith One',sans-serif;margin-bottom:12px;"]);
const StyledCardSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "PostCardStyles__StyledCardSubText",
  componentId: "sc-1x8vpvj-5"
})(["font-size:1em;margin-bottom:18px;width:100%;line-height:1.2em;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;"]);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname = rewritesResult.resolvedHref;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
      const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname = rewritesResult.resolvedHref;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


const getSafeParamName = paramName => {
  let newParamName = '';

  for (let i = 0; i < paramName.length; i++) {
    const charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  const params = {};
  let initialQueryValues = [];

  if (true) {
    initialQueryValues = Object.values(req.__NEXT_INIT_QUERY);
  }

  if (false) {}

  const allMatch = has.every(hasItem => {
    let value;
    let key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          // preserve initial encoding of query values
          value = query[key];

          if (initialQueryValues.includes(value || '')) {
            value = encodeURIComponent(value);
          }

          break;
        }

      case 'host':
        {
          const {
            host
          } = (req == null ? void 0 : req.headers) || {}; // remove port from host if present

          const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      const matcher = new RegExp(`^${hasItem.value}$`);
      const matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(groupKey => {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireWildcard(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _router = __webpack_require__(/*! ../router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  let matchedPage = false;
  let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
  let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(parsedAs.pathname), locales).pathname);
  let resolvedHref;

  const handleRewrite = rewrite => {
    const matcher = customRouteMatcher(rewrite.source);
    let params = matcher(parsedAs.pathname);

    if (rewrite.has && params) {
      const hasParams = (0, _prepareDestination.matchHas)({
        headers: {
          host: document.location.hostname
        },
        cookies: document.cookie.split('; ').reduce((acc, item) => {
          const [key, ...value] = item.split('=');
          acc[key] = value.join('=');
          return acc;
        }, {})
      }, rewrite.has, parsedAs.query);

      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }

    if (params) {
      if (!rewrite.destination) {
        // this is a proxied rewrite which isn't handled on the client
        return true;
      }

      const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales).pathname);

      if (pages.includes(fsPathname)) {
        // check if we now match a page as this means we are done
        // resolving the rewrites
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      } // check if we match a dynamic-route, if so we break the rewrites chain


      resolvedHref = resolveHref(fsPathname);

      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };

  let finished = false;

  for (let i = 0; i < rewrites.beforeFiles.length; i++) {
    // we don't end after match in beforeFiles to allow
    // continuing through all beforeFiles rewrites
    handleRewrite(rewrites.beforeFiles[i]);
  }

  matchedPage = pages.includes(fsPathname);

  if (!matchedPage) {
    if (!finished) {
      for (let i = 0; i < rewrites.afterFiles.length; i++) {
        if (handleRewrite(rewrites.afterFiles[i])) {
          finished = true;
          break;
        }
      }
    } // check dynamic route before processing fallback rewrites


    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }

    if (!finished) {
      for (let i = 0; i < rewrites.fallback.length; i++) {
        if (handleRewrite(rewrites.fallback[i])) {
          finished = true;
          break;
        }
      }
    }
  }

  return {
    asPath,
    parsedAs,
    matchedPage,
    resolvedHref
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.js");
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container/Container */ "./components/Container/Container.js");
/* harmony import */ var _components_HeaderSEO_HeaderSEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeaderSEO/HeaderSEO */ "./components/HeaderSEO/HeaderSEO.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCard/PostCard */ "./components/PostCard/PostCard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Pagination/Pagination */ "./components/Pagination/Pagination.js");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loading/Loading */ "./components/Loading/Loading.js");


var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const PAGINATION_LIMIT = 12; // export async function getStaticProps(context) {
//   // O que eu passar aqui, ele vai virar SEO
//   const response = await api.get("posts", { params: { page: '1' }})
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//       return false;
//     });
//   // will be passed to the page component as props
//   return {
//     props: {
//       response,
//     },
//   };
// }

function Home() {
  const {
    0: allPosts,
    1: setAllPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: offset,
    1: setOffset
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: actualPage,
    1: setActualPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: searchParams,
    1: setsearchParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    params: {
      page: '1'
    }
  });
  const {
    0: searchText,
    1: setSearchText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: mostRelevantPosts,
    1: setMostRelevantPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const metasData = {
    title: "Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum vel velit sit amet scelerisque. Suspendisse in vestibulum sapien. Suspendisse nisl ipsum, hendrerit in odio ac, bibendum luctus nulla."
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAllPosts();
    setLoading(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    searchPosts();
  }, [searchParams]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(actualPage);
  }, [actualPage]);

  async function searchPosts(params) {
    setLoading(true);
    console.log(searchParams); // O que eu passar aqui, ele vai virar SEO

    await _services_api__WEBPACK_IMPORTED_MODULE_8__.default.get("posts", searchParams).then(response => {
      setAllPosts(response.data);
      setLoading(false);
      return;
    }).catch(error => {
      console.log(error);
      return false;
    });
  }

  function handleCardButtonClick(postId) {// console.log('card-button-clicked', postId);
  }

  function handleSearch(search) {
    if (search.error) {
      setSearchText('');
      console.log(search.error);
      return;
    }

    if (search.searchString.length > 0) {
      setsearchParams({
        params: _objectSpread(_objectSpread({}, searchParams.params), {}, {
          search: search.searchString
        })
      });
    } else {
      delete searchParams.params.search;
      setsearchParams({
        params: _objectSpread({}, searchParams.params)
      });
    }

    setSearchText(search.searchString); // searchPosts();
  }

  function handleSwitchAction(switchChecked) {
    if (switchChecked) {
      setsearchParams({
        params: _objectSpread(_objectSpread({}, searchParams.params), {}, {
          orderby: 'relevance'
        })
      }); // searchPosts({params: {...searchParams.params, orderby: 'relevance' }});
    } else {
      delete searchParams.params.orderby;
      setsearchParams({
        params: _objectSpread({}, searchParams.params)
      });
    }

    setMostRelevantPosts(switchChecked); // searchPosts({params: {...searchParams.params }});
  } // function handleSearch(search){
  //   searchPosts(search);
  // }


  function handlePaginationClick(page) {
    setsearchParams({
      params: _objectSpread(_objectSpread({}, searchParams.params), {}, {
        page: page
      })
    });
    setActualPage(page);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderSEO_HeaderSEO__WEBPACK_IMPORTED_MODULE_4__.default, {
      metasData: metasData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, {
      searchData: handleSearch,
      switchAction: handleSwitchAction
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeadTitle, {
      children: "Welcome to the Translation, Inc Blog!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this), !loading ? allPosts.data.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NoPostsFindedMessage, {
      children: "Nenhum post encontrado! #2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 12
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          textAlign: 'right'
        },
        children: allPosts.data.length === 1 ? '1 post finded' : `${allPosts.data.length} posts finded`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__.default, {
        limit: PAGINATION_LIMIT,
        total: allPosts.pages,
        offset: offset,
        setOffset: setOffset,
        actualPage: handlePaginationClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridPosts, {
        children: allPosts.data.map(post => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard_PostCard__WEBPACK_IMPORTED_MODULE_6__.default, {
            postData: post,
            onCardButtonClick: handleCardButtonClick
          }, post.id, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_9__.default, {
        limit: PAGINATION_LIMIT,
        total: allPosts.pages,
        offset: offset,
        setOffset: setOffset,
        actualPage: handlePaginationClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: "Carregando..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, this);
}
const GridPosts = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
  displayName: "pages__GridPosts",
  componentId: "sc-12168fx-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px 10px;margin-top:20px;@media(min-width:1024px){}@media(min-width:768px) and (max-width:1023px){grid-template-columns:1fr 1fr 1fr;}@media(max-width:767px){grid-template-columns:1fr 1fr;}@media(max-width:460px){grid-template-columns:1fr;}"]);
const HeadTitle = styled_components__WEBPACK_IMPORTED_MODULE_7___default().h1.withConfig({
  displayName: "pages__HeadTitle",
  componentId: "sc-12168fx-1"
})(["font-size:2em;border-left:5px solid #cccccc;padding-left:10px;"]);
const NoPostsFindedMessage = styled_components__WEBPACK_IMPORTED_MODULE_7___default().h3.withConfig({
  displayName: "pages__NoPostsFindedMessage",
  componentId: "sc-12168fx-2"
})(["font-size:1.6em;text-align:center;margin-top:50px;color:#bbbbbb;"]);

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
 // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Credentials'] = 'false';
// axios.defaults.headers.get['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers';

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./styles/GlobalStyles.js":
/*!********************************!*\
  !*** ./styles/GlobalStyles.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GlobalStyles; },
/* harmony export */   "GlobalStyle": function() { return /* binding */ GlobalStyle; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\DEV-VSCODE\\coodesh-challenge\\styles\\GlobalStyles.js";


function GlobalStyles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
} // Styled Components

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["*{margin:0;padding:0;outline:0;box-sizing:border-box;font-family:'Montserrat',sans-serif;}body{-webkit-font-smoothing:antialiased !important;}body html #root{height:100%;}.flex-row-right{display:flex;justify-content:flex-end;align-items:center;flex-direction:row;}"]);

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-switch");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL0NhdGVnb3J5QnVsbGV0L0NhdGVnb3J5QnVsbGV0LmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vY29tcG9uZW50cy9DYXRlZ29yeUJ1bGxldC9DYXRlZ29yeUJ1bGxldFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvSGVhZGVyU0VPL0hlYWRlclNFTy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvSW5wdXRTZWFyY2gvSW5wdXRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL0lucHV0U2VhcmNoL0lucHV0U2VhcmNoU3R5bGVzLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZ1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9jb21wb25lbnRzL1Bvc3RDYXJkL1Bvc3RDYXJkLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC9Qb3N0Q2FyZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9zZXJ2aWNlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvLi9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9jb29kZXNoLWNoYWxsZW5nZS9leHRlcm5hbCBcInJlYWN0LXN3aXRjaFwiIiwid2VicGFjazovL2Nvb2Rlc2gtY2hhbGxlbmdlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29vZGVzaC1jaGFsbGVuZ2UvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRleHQiLCJvbkJ1dHRvbkNsaWNrIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiQ2F0ZWdvcnlCdWxsZXQiLCJkYXRhIiwicXVhbnRpdHlGaXJzdExldHRlcnMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcCIsImNhdGVnb3J5IiwibmFtZSIsInN1YnN0cmluZyIsImlkIiwiQnVsbGV0Q29udGFpbmVyIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJTdHlsZWRDb250YWluZXIiLCJTdHlsZWRDb0dyaWQiLCJIZWFkZXJTRU8iLCJtZXRhc0RhdGEiLCJoZWFkVHlwZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJIZWFkZXIiLCJzZWFyY2hEYXRhIiwic3dpdGNoQWN0aW9uIiwib25seUxvZ28iLCJzd2l0Y2hDaGVja2VkIiwic2V0U3dpdGNoQ2hlY2tlZCIsInVzZVN0YXRlIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJlcnJvclRleHQiLCJzZXRFcnJvclRleHQiLCJ2YWxpZGF0ZVNlYXJjaFZhbHVlIiwidW5kZWZpbmVkIiwic2VhcmNoU3RyaW5nIiwiaGFuZGxlU2VhcmNoVmFsdWUiLCJzZWFyY2giLCJoYW5kbGVTZWFyY2hCdXR0b25DbGljayIsImhhbmRsZVN3aXRjaCIsInN3aXRjaFZhbCIsIlN0eWxlZExvZ28iLCJTdHlsZWRFcnJvck1lc3NhZ2UiLCJTdHlsZWRNb3N0UmVsZXZhbnRCb3giLCJTdHlsZWRNb3N0UmVsZXZhbnRCb3hUZXh0IiwiSW5wdXRTZWFyY2giLCJvblRleHRDaGFuZ2UiLCJvbkJ1dHRvblNlYXJjaENsaWNrIiwiaW5wdXRWYWwiLCJzZXRJbnB1dFZhbCIsImhhbmRsZVRleHRDaGFuZ2UiLCJoYW5kbGVCdXR0b25DbGljayIsInYiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlN0eWxlZElucHV0IiwiTG9hZGluZyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiU3R5bGVkTG9hZGluZyIsIk1BWF9JVEVOUyIsIk1BWF9MRUZUIiwiUGFnaW5hdGlvbiIsImxpbWl0IiwidG90YWwiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJhY3R1YWxQYWdlIiwiY3VycmVudFBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiZmlyc3QiLCJtYXgiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWluIiwiXyIsImluZGV4IiwiU3R5bGVkVWwiLCJTdHlsZWRQYWdpbmF0aW9uQnV0dG9uIiwiUG9zdENhcmQiLCJwb3N0RGF0YSIsIm9uQ2FyZEJ1dHRvbkNsaWNrIiwiZGF0ZUZvcm1hdHRlZCIsInNldERhdGVGb3JtYXR0ZWQiLCJwb3N0SWQiLCJ1c2VFZmZlY3QiLCJEYXRlIiwicHVibGlzaGVkIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZmVhdHVyZWRfbWVkaWEiLCJ0aHVtYm5haWwiLCJjYXRlZ29yaWVzIiwiaGVhZGxpbmUiLCJwYXRobmFtZSIsInF1ZXJ5Iiwic2x1ZyIsIlN0eWxlZENhcmRDb250YWluZXIiLCJTdHlsZWRDYXJkRGF0ZUNhdGVnb3J5IiwiU3R5bGVkQ2FyZERhdGUiLCJTdHlsZWRDYXJkVGh1bWJuYWlsIiwiU3R5bGVkQ2FyZFRpdGxlIiwiU3R5bGVkQ2FyZFN1YlRleHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsIm1hdGNoSGFzIiwiY29tcGlsZU5vblBhdGgiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJnZXRTYWZlUGFyYW1OYW1lIiwicGFyYW1OYW1lIiwibmV3UGFyYW1OYW1lIiwiaSIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsInJlcSIsImluaXRpYWxRdWVyeVZhbHVlcyIsInZhbHVlcyIsIl9fTkVYVF9JTklUX1FVRVJZIiwiYWxsTWF0Y2giLCJoYXNJdGVtIiwiaGVhZGVycyIsImNvb2tpZXMiLCJSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJncm91cEtleSIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsIl9fbmV4dExvY2FsZSIsIl9fbmV4dERlZmF1bHRMb2NhbGUiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInBhcmFtS2V5cyIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZXNvbHZlUmV3cml0ZXMiLCJfcGF0aE1hdGNoIiwiX3ByZXBhcmVEZXN0aW5hdGlvbiIsImN1c3RvbVJvdXRlTWF0Y2hlciIsImZzUGF0aG5hbWUiLCJoYW5kbGVSZXdyaXRlIiwicmV3cml0ZSIsInNvdXJjZSIsImhhc1BhcmFtcyIsImNvb2tpZSIsInJlZHVjZSIsImFjYyIsImRlc3RSZXMiLCJmaW5pc2hlZCIsImJlZm9yZUZpbGVzIiwiYWZ0ZXJGaWxlcyIsImZhbGxiYWNrIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIlBBR0lOQVRJT05fTElNSVQiLCJIb21lIiwiYWxsUG9zdHMiLCJzZXRBbGxQb3N0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0QWN0dWFsUGFnZSIsInNldHNlYXJjaFBhcmFtcyIsIm1vc3RSZWxldmFudFBvc3RzIiwic2V0TW9zdFJlbGV2YW50UG9zdHMiLCJzZWFyY2hQb3N0cyIsImxvZyIsImFwaSIsInJlc3BvbnNlIiwiaGFuZGxlQ2FyZEJ1dHRvbkNsaWNrIiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlU3dpdGNoQWN0aW9uIiwib3JkZXJieSIsImhhbmRsZVBhZ2luYXRpb25DbGljayIsInRleHRBbGlnbiIsInBvc3QiLCJHcmlkUG9zdHMiLCJIZWFkVGl0bGUiLCJOb1Bvc3RzRmluZGVkTWVzc2FnZSIsImF4aW9zIiwiYmFzZVVSTCIsIkdsb2JhbFN0eWxlcyIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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O0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsaUM7Ozs7Ozs7Ozs7O0FDclphLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTdHlsZWRCdXR0b24gfSBmcm9tICcuL0J1dHRvblN0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7dGV4dCwgb25CdXR0b25DbGlja30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25CdXR0b25DbGlja30+e3RleHR9PC9TdHlsZWRCdXR0b24+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDBkMDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnVsbGV0Q29udGFpbmVyIH0gZnJvbSAnLi9DYXRlZ29yeUJ1bGxldFN0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5QnVsbGV0KHtkYXRhLCBxdWFudGl0eUZpcnN0TGV0dGVyc30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wifX0+XHJcbiAgICAgIHtkYXRhLm1hcChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCdWxsZXRDb250YWluZXIga2V5PXtjYXRlZ29yeS5pZH0+XHJcbiAgICAgICAgICAgIDxwPntxdWFudGl0eUZpcnN0TGV0dGVycyA+IDAgPyBjYXRlZ29yeS5uYW1lLnN1YnN0cmluZygwLCBxdWFudGl0eUZpcnN0TGV0dGVycykgOiBjYXRlZ29yeS5uYW1lfTwvcD5cclxuICAgICAgICAgIDwvQnVsbGV0Q29udGFpbmVyPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCdWxsZXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2VkZWRlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIC8qIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XHJcbiAgfSAqL1xyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBTdHlsZWRDb250YWluZXIsIFN0eWxlZENvR3JpZCB9IGZyb20gJy4vQ29udGFpbmVyU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyKHtjaGlsZHJlbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgPFN0eWxlZENvR3JpZD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvU3R5bGVkQ29HcmlkPlxyXG4gICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTsgKi9cclxuICB9XHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ29HcmlkID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBtZWRpYShtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyAqL1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247ICovXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjsgKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1heC13aWR0aDogMzQwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzQwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uOyAqL1xyXG4gIH1cclxuYDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJTRU8oe21ldGFzRGF0YSwgaGVhZFR5cGV9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgXHJcbiAgICAgIHtoZWFkVHlwZSAhPT0gJ3Bvc3Qtc2luZ2xlJyBcclxuICAgICAgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDx0aXRsZT57bWV0YXNEYXRhLnRpdGxlID8gYCR7bWV0YXNEYXRhLnRpdGxlfSB8IFRyYW5zbGF0aW9uLCBJbmNgOiAnVHJhbnNsYXRpb24sIEluYyd9PC90aXRsZT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGFzRGF0YS50aXRsZSA/IGAke21ldGFzRGF0YS50aXRsZX0gfCBUcmFuc2xhdGlvbiwgSW5jYDogJ1RyYW5zbGF0aW9uLCBJbmMnfSAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXttZXRhc0RhdGEuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgc2l6ZXM9XCIzOHgzOFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIuLi9pbWFnZXMvZmF2aWNvbi5wbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICAgIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8dGl0bGU+e2Ake21ldGFzRGF0YS50aXRsZX0gfCBUcmFuc2xhdGlvbiwgSW5jYH08L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YXNEYXRhLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgey8qIFR3aXR0ZXIgKi99XHJcbiAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIga2V5PVwidHdjYXJkXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PXt0d2l0dGVySGFuZGxlfSBrZXk9XCJ0d2hhbmRsZVwiIC8+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiBPcGVuIEdyYXBoICovfVxyXG4gICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17Y3VycmVudFVSTH0ga2V5PVwib2d1cmxcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3ByZXZpZXdJbWFnZX0ga2V5PVwib2dpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e3NpdGVOYW1lfSBrZXk9XCJvZ3NpdGVuYW1lXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IGtleT1cIm9ndGl0bGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSBrZXk9XCJvZ2Rlc2NcIiAvPiAqL31cclxuICAgICAgICA8Lz5cclxuICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRTZWFyY2ggZnJvbSAnLi4vSW5wdXRTZWFyY2gvSW5wdXRTZWFyY2gnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVkQ29udGFpbmVyLCBTdHlsZWRFcnJvck1lc3NhZ2UsIFN0eWxlZExvZ28sIFN0eWxlZE1vc3RSZWxldmFudEJveCwgU3R5bGVkTW9zdFJlbGV2YW50Qm94VGV4dCB9IGZyb20gJy4vSGVhZGVyU3R5bGVzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHtzZWFyY2hEYXRhLCBzd2l0Y2hBY3Rpb24sIG9ubHlMb2dvID0gZmFsc2V9KSB7XHJcblxyXG4gIGNvbnN0IFtzd2l0Y2hDaGVja2VkLCBzZXRTd2l0Y2hDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Vycm9yVGV4dCwgc2V0RXJyb3JUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2hWYWx1ZSh0ZXh0KXtcclxuICAgIFxyXG4gICAgaWYodGV4dCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgc2V0RXJyb3JUZXh0KCdCbGFuayBmaWVsZCcpO1xyXG4gICAgICAvLyByZXR1cm4geyBlcnJvcjogJ0JsYW5rIGZpZWxkJyB9O1xyXG4gICAgICByZXR1cm4geyBzZWFyY2hTdHJpbmc6ICcnIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3JUZXh0KCcnKTtcclxuICAgIHJldHVybiB7IHNlYXJjaFN0cmluZzogdGV4dCB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoVmFsdWUodGV4dCl7XHJcbiAgICBjb25zdCBzZWFyY2ggPSB2YWxpZGF0ZVNlYXJjaFZhbHVlKHRleHQpO1xyXG4gICAgc2V0U2VhcmNoVGV4dChzZWFyY2guc2VhcmNoU3RyaW5nKTtcclxuICAgIC8vIHNlYXJjaERhdGEoc2VhcmNoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaEJ1dHRvbkNsaWNrKCl7XHJcbiAgICBjb25zdCBzZWFyY2ggPSB2YWxpZGF0ZVNlYXJjaFZhbHVlKHNlYXJjaFRleHQpO1xyXG4gICAgc2VhcmNoRGF0YShzZWFyY2gpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3dpdGNoKCl7XHJcbiAgICBjb25zdCBzd2l0Y2hWYWwgPSAhc3dpdGNoQ2hlY2tlZDtcclxuICAgIHN3aXRjaEFjdGlvbihzd2l0Y2hWYWwpO1xyXG4gICAgc2V0U3dpdGNoQ2hlY2tlZChzd2l0Y2hWYWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxTdHlsZWRMb2dvIHNyYz1cIi4uL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgICFvbmx5TG9nbyAmJiAoXHJcbiAgICAgICAgICA8U3R5bGVkTW9zdFJlbGV2YW50Qm94PlxyXG4gICAgICAgICAgPFN0eWxlZE1vc3RSZWxldmFudEJveFRleHQ+TW9zdCBSZWxldmFudCBQb3N0czwvU3R5bGVkTW9zdFJlbGV2YW50Qm94VGV4dD4gXHJcbiAgICAgICAgICA8U3dpdGNoIFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3dpdGNofSBcclxuICAgICAgICAgICAgY2hlY2tlZD17c3dpdGNoQ2hlY2tlZH0gXHJcbiAgICAgICAgICAgIG9uQ29sb3I9XCIjYzllNmM0XCJcclxuICAgICAgICAgICAgb25IYW5kbGVDb2xvcj1cIiM0NDllNWNcIlxyXG4gICAgICAgICAgICBoYW5kbGVEaWFtZXRlcj17MTZ9XHJcbiAgICAgICAgICAgIHVuY2hlY2tlZEljb249e2ZhbHNlfVxyXG4gICAgICAgICAgICBjaGVja2VkSWNvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgIGJveFNoYWRvdz1cIjBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KVwiXHJcbiAgICAgICAgICAgIGFjdGl2ZUJveFNoYWRvdz1cIjBweCAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXsxMH1cclxuICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1zd2l0Y2hcIlxyXG4gICAgICAgICAgICBpZD1cIm1hdGVyaWFsLXN3aXRjaFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU3R5bGVkTW9zdFJlbGV2YW50Qm94PlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgeyFvbmx5TG9nbyAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW5wdXRTZWFyY2ggb25UZXh0Q2hhbmdlPXtoYW5kbGVTZWFyY2hWYWx1ZX0gb25CdXR0b25TZWFyY2hDbGljaz17aGFuZGxlU2VhcmNoQnV0dG9uQ2xpY2t9Lz5cclxuICAgICAgICAgICAgPFN0eWxlZEVycm9yTWVzc2FnZT57ZXJyb3JUZXh0fTwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICBcImNvbC0xIGNvbC00XCJcclxuICA7XHJcbiAgICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgbWFyZ2luOiAyMHB4IDBweCA1MHB4IDBweDtcclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHggMjBweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHggMjBweDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC8qIHBhZGRpbmc6IDBweCAyMHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhKG1heC13aWR0aDogMzQwcHgpIHtcclxuICAgIC8qIHBhZGRpbmc6IDBweCAyMHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAqL1xyXG4gIH1cclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRXJyb3JNZXNzYWdlID0gc3R5bGVkLnBgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNb3N0UmVsZXZhbnRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMmQyZDI7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9zdFJlbGV2YW50Qm94VGV4dCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBTdHlsZWRJbnB1dCwgU3R5bGVkQnV0dG9uIH0gZnJvbSAnLi9JbnB1dFNlYXJjaFN0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0U2VhcmNoKHtvblRleHRDaGFuZ2UsIG9uQnV0dG9uU2VhcmNoQ2xpY2t9KSB7XHJcblxyXG4gIGNvbnN0IFtpbnB1dFZhbCwgc2V0SW5wdXRWYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRleHRDaGFuZ2UodGV4dCl7XHJcbiAgICBzZXRJbnB1dFZhbCh0ZXh0KTtcclxuICAgIG9uVGV4dENoYW5nZSh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCl7XHJcbiAgICBvbkJ1dHRvblNlYXJjaENsaWNrKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZTpcIiBkZWZhdWx0VmFsdWU9e2lucHV0VmFsfSBvbkNoYW5nZT17diA9PiBoYW5kbGVUZXh0Q2hhbmdlKHYudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uL2ltYWdlcy9zZWFyY2gucG5nXCIgYWx0PVwiRG8gc2VhcmNoXCIgd2lkdGg9XCIyMHB4XCIvPlxyXG4gICAgICA8L1N0eWxlZEJ1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZDJkMmQyO1xyXG4gIHBhZGRpbmc6IDE4cHggMTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkMmQyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU3R5bGVkTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZ1N0eWxlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMjBweCd9fT5cclxuICAgICAgPFN0eWxlZExvYWRpbmc+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L1N0eWxlZExvYWRpbmc+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMb2FkaW5nID0gc3R5bGVkLmRpdmBcclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBcclxuICBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMzLCAxMzMsIDEzMyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMxIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI0cHgsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmA7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTdHlsZWRQYWdpbmF0aW9uQnV0dG9uLCBTdHlsZWRVbCB9IGZyb20gJy4vUGFnaW5hdGlvblN0eWxlcyc7XHJcblxyXG5jb25zdCBNQVhfSVRFTlMgPSA5O1xyXG5jb25zdCBNQVhfTEVGVCA9IChNQVhfSVRFTlMgLSAxKSAvIDI7XHJcblxyXG4vL1JlZmVyw6puY2lhIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9djkxQkxvYXBWRHdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7bGltaXQsIHRvdGFsLCBvZmZzZXQsIHNldE9mZnNldCwgYWN0dWFsUGFnZX0pIHtcclxuICBcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IG9mZnNldCA/IChvZmZzZXQgLyBsaW1pdCkgKyAxIDogMTtcclxuICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KTtcclxuICBjb25zdCBmaXJzdCA9IE1hdGgubWF4KGN1cnJlbnRQYWdlIC0gTUFYX0xFRlQsIDEpO1xyXG5cclxuICBmdW5jdGlvbiBvblBhZ2VDaGFuZ2UocGFnZSl7XHJcbiAgICBzZXRPZmZzZXQoKHBhZ2UgLSAxKSAqIGxpbWl0KTtcclxuICAgIGFjdHVhbFBhZ2UocGFnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFVsPlxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxTdHlsZWRQYWdpbmF0aW9uQnV0dG9uIFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKDEpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSAxfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFByaW1laXJvXHJcbiAgICAgICAgPC9TdHlsZWRQYWdpbmF0aW9uQnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxTdHlsZWRQYWdpbmF0aW9uQnV0dG9uIFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2hhbmdlKGN1cnJlbnRQYWdlIC0gMSl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQW50ZXJpb3JcclxuICAgICAgICA8L1N0eWxlZFBhZ2luYXRpb25CdXR0b24+XHJcbiAgICAgIDwvbGk+XHJcblxyXG4gICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogTWF0aC5taW4oTUFYX0lURU5TLCBwYWdlcykgfSlcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+IGluZGV4ICsgZmlyc3QpXHJcbiAgICAgIC5tYXAoKHBhZ2UpID0+IChcclxuICAgICAgICA8bGkga2V5PXtwYWdlfT5cclxuICAgICAgICAgIDxTdHlsZWRQYWdpbmF0aW9uQnV0dG9uIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UocGFnZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZSA9PT0gY3VycmVudFBhZ2UgPyAnYWN0aXZlJzogJyd9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSBjdXJyZW50UGFnZSA/IHRydWUgOiBwYWdlID4gdG90YWwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgPC9TdHlsZWRQYWdpbmF0aW9uQnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxTdHlsZWRQYWdpbmF0aW9uQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgKyAxKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gcGFnZXMgfHwgY3VycmVudFBhZ2UgPT09IHRvdGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFByw7N4aW1vXHJcbiAgICAgICAgPC9TdHlsZWRQYWdpbmF0aW9uQnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxTdHlsZWRQYWdpbmF0aW9uQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDaGFuZ2UodG90YWwpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSB0b3RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDDmmx0aW1vXHJcbiAgICAgICAgPC9TdHlsZWRQYWdpbmF0aW9uQnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG5cclxuICAgIDwvU3R5bGVkVWw+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVWwgPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA1cHggMHB4O1xyXG5cclxuICBsaSArIGxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIC8qIG9wYWNpdHk6IDAuNTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQYWdpbmF0aW9uQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEU0RTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDMEMwO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgQ2F0ZWdvcnlCdWxsZXQgZnJvbSAnLi4vQ2F0ZWdvcnlCdWxsZXQvQ2F0ZWdvcnlCdWxsZXQnXHJcblxyXG5pbXBvcnQgeyBTdHlsZWRDYXJkQ29udGFpbmVyLCBTdHlsZWRDYXJkVGl0bGUsIFN0eWxlZENhcmRTdWJUZXh0LCBTdHlsZWRDYXJkRGF0ZUNhdGVnb3J5LCBTdHlsZWRDYXJkVGh1bWJuYWlsLCBTdHlsZWRDYXJkRGF0ZSwgfSBmcm9tICcuL1Bvc3RDYXJkU3R5bGVzJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Q2FyZCh7cG9zdERhdGEsIG9uQ2FyZEJ1dHRvbkNsaWNrfSkge1xyXG4gIFxyXG4gIGNvbnN0IFtkYXRlRm9ybWF0dGVkLCBzZXREYXRlRm9ybWF0dGVkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2socG9zdElkKXtcclxuICAgIG9uQ2FyZEJ1dHRvbkNsaWNrKHBvc3RJZCk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RGF0ZUZvcm1hdHRlZCgobmV3IERhdGUocG9zdERhdGEucHVibGlzaGVkKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ2FyZENvbnRhaW5lcj5cclxuXHJcbiAgICB7cG9zdERhdGEuZmVhdHVyZWRfbWVkaWFcclxuICAgICAgP1xyXG4gICAgICAgIDxTdHlsZWRDYXJkVGh1bWJuYWlsIHNyYz17cG9zdERhdGEuZmVhdHVyZWRfbWVkaWEudGh1bWJuYWlsfSBhbHQ9e3Bvc3REYXRhLnRpdGxlfSAvPlxyXG4gICAgICA6IG51bGx9XHJcblxyXG4gICAgICA8U3R5bGVkQ2FyZERhdGVDYXRlZ29yeT5cclxuXHJcbiAgICAgICAgPFN0eWxlZENhcmREYXRlPntkYXRlRm9ybWF0dGVkfTwvU3R5bGVkQ2FyZERhdGU+XHJcbiAgICAgICAgPENhdGVnb3J5QnVsbGV0IGRhdGE9e3Bvc3REYXRhLmNhdGVnb3JpZXN9IHF1YW50aXR5Rmlyc3RMZXR0ZXJzPXs0fSAvPlxyXG5cclxuICAgICAgPC9TdHlsZWRDYXJkRGF0ZUNhdGVnb3J5PlxyXG5cclxuICAgICAgPFN0eWxlZENhcmRUaXRsZT57cG9zdERhdGEudGl0bGV9PC9TdHlsZWRDYXJkVGl0bGU+XHJcblxyXG4gICAgICA8U3R5bGVkQ2FyZFN1YlRleHQ+e3Bvc3REYXRhLmhlYWRsaW5lfTwvU3R5bGVkQ2FyZFN1YlRleHQ+XHJcblxyXG4gICAgICA8TGluayBocmVmPXt7XHJcbiAgICAgICAgcGF0aG5hbWU6IGAvc2luZ2xlLyR7cG9zdERhdGEuaWR9YCxcclxuICAgICAgICBxdWVyeTogeyBzbHVnOiBwb3N0RGF0YS5zbHVnIH1cclxuICAgICAgICB9fSA+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJyZWFkIG1vcmVcIiBvbkJ1dHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhwb3N0RGF0YS5pZCl9Lz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICA8L1N0eWxlZENhcmRDb250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjRURFREVEO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcmREYXRlQ2F0ZWdvcnkgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDhweCAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FyZERhdGUgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZENhcmRUaHVtYm5haWwgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxOTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDYXJkVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1mYW1pbHk6ICdIYW1tZXJzbWl0aCBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkQ2FyZFN1YlRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xyXG5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGF0aFRvUmVnZXhwPWV4cG9ydHMuZGVmYXVsdD1leHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ZXhwb3J0cy5tYXRjaGVyT3B0aW9ucz12b2lkIDA7dmFyIHBhdGhUb1JlZ2V4cD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwXCIpKTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1wYXRoVG9SZWdleHA7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31jb25zdCBtYXRjaGVyT3B0aW9ucz17c2Vuc2l0aXZlOmZhbHNlLGRlbGltaXRlcjonLyd9O2V4cG9ydHMubWF0Y2hlck9wdGlvbnM9bWF0Y2hlck9wdGlvbnM7Y29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz17Li4ubWF0Y2hlck9wdGlvbnMsc3RyaWN0OnRydWV9O2V4cG9ydHMuY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucz1jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zO3ZhciBfZGVmYXVsdD0oY3VzdG9tUm91dGU9ZmFsc2UpPT57cmV0dXJuIHBhdGg9Pntjb25zdCBrZXlzPVtdO2NvbnN0IG1hdGNoZXJSZWdleD1wYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKHBhdGgsa2V5cyxjdXN0b21Sb3V0ZT9jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOm1hdGNoZXJPcHRpb25zKTtjb25zdCBtYXRjaGVyPXBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCxrZXlzKTtyZXR1cm4ocGF0aG5hbWUscGFyYW1zKT0+e2NvbnN0IHJlcz1wYXRobmFtZT09bnVsbD9mYWxzZTptYXRjaGVyKHBhdGhuYW1lKTtpZighcmVzKXtyZXR1cm4gZmFsc2U7fWlmKGN1c3RvbVJvdXRlKXtmb3IoY29uc3Qga2V5IG9mIGtleXMpey8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbi8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuaWYodHlwZW9mIGtleS5uYW1lPT09J251bWJlcicpe2RlbGV0ZSByZXMucGFyYW1zW2tleS5uYW1lXTt9fX1yZXR1cm57Li4ucGFyYW1zLC4uLnJlcy5wYXJhbXN9O307fTt9O2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGgtbWF0Y2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXRjaEhhcz1tYXRjaEhhcztleHBvcnRzLmNvbXBpbGVOb25QYXRoPWNvbXBpbGVOb25QYXRoO2V4cG9ydHMuZGVmYXVsdD1wcmVwYXJlRGVzdGluYXRpb247ZXhwb3J0cy5nZXRTYWZlUGFyYW1OYW1lPXZvaWQgMDt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIHBhdGhUb1JlZ2V4cD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIGVuc3VyZSBvbmx5IGEtekEtWiBhcmUgdXNlZCBmb3IgcGFyYW0gbmFtZXMgZm9yIHByb3BlciBpbnRlcnBvbGF0aW5nXG4vLyB3aXRoIHBhdGgtdG8tcmVnZXhwXG5jb25zdCBnZXRTYWZlUGFyYW1OYW1lPXBhcmFtTmFtZT0+e2xldCBuZXdQYXJhbU5hbWU9Jyc7Zm9yKGxldCBpPTA7aTxwYXJhbU5hbWUubGVuZ3RoO2krKyl7Y29uc3QgY2hhckNvZGU9cGFyYW1OYW1lLmNoYXJDb2RlQXQoaSk7aWYoY2hhckNvZGU+NjQmJmNoYXJDb2RlPDkxfHwvLyBBLVpcbmNoYXJDb2RlPjk2JiZjaGFyQ29kZTwxMjMvLyBhLXpcbil7bmV3UGFyYW1OYW1lKz1wYXJhbU5hbWVbaV07fX1yZXR1cm4gbmV3UGFyYW1OYW1lO307ZXhwb3J0cy5nZXRTYWZlUGFyYW1OYW1lPWdldFNhZmVQYXJhbU5hbWU7ZnVuY3Rpb24gbWF0Y2hIYXMocmVxLGhhcyxxdWVyeSl7Y29uc3QgcGFyYW1zPXt9O2xldCBpbml0aWFsUXVlcnlWYWx1ZXM9W107aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtpbml0aWFsUXVlcnlWYWx1ZXM9T2JqZWN0LnZhbHVlcyhyZXEuX19ORVhUX0lOSVRfUVVFUlkpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe2luaXRpYWxRdWVyeVZhbHVlcz1BcnJheS5mcm9tKG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS52YWx1ZXMoKSk7fWNvbnN0IGFsbE1hdGNoPWhhcy5ldmVyeShoYXNJdGVtPT57bGV0IHZhbHVlO2xldCBrZXk9aGFzSXRlbS5rZXk7c3dpdGNoKGhhc0l0ZW0udHlwZSl7Y2FzZSdoZWFkZXInOntrZXk9a2V5LnRvTG93ZXJDYXNlKCk7dmFsdWU9cmVxLmhlYWRlcnNba2V5XTticmVhazt9Y2FzZSdjb29raWUnOnt2YWx1ZT1yZXEuY29va2llc1toYXNJdGVtLmtleV07YnJlYWs7fWNhc2UncXVlcnknOnsvLyBwcmVzZXJ2ZSBpbml0aWFsIGVuY29kaW5nIG9mIHF1ZXJ5IHZhbHVlc1xudmFsdWU9cXVlcnlba2V5XTtpZihpbml0aWFsUXVlcnlWYWx1ZXMuaW5jbHVkZXModmFsdWV8fCcnKSl7dmFsdWU9ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTt9YnJlYWs7fWNhc2UnaG9zdCc6e2NvbnN0e2hvc3R9PShyZXE9PW51bGw/dm9pZCAwOnJlcS5oZWFkZXJzKXx8e307Ly8gcmVtb3ZlIHBvcnQgZnJvbSBob3N0IGlmIHByZXNlbnRcbmNvbnN0IGhvc3RuYW1lPWhvc3Q9PW51bGw/dm9pZCAwOmhvc3Quc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO3ZhbHVlPWhvc3RuYW1lO2JyZWFrO31kZWZhdWx0OnticmVhazt9fWlmKCFoYXNJdGVtLnZhbHVlJiZ2YWx1ZSl7cGFyYW1zW2dldFNhZmVQYXJhbU5hbWUoa2V5KV09dmFsdWU7cmV0dXJuIHRydWU7fWVsc2UgaWYodmFsdWUpe2NvbnN0IG1hdGNoZXI9bmV3IFJlZ0V4cChgXiR7aGFzSXRlbS52YWx1ZX0kYCk7Y29uc3QgbWF0Y2hlcz12YWx1ZS5tYXRjaChtYXRjaGVyKTtpZihtYXRjaGVzKXtpZihtYXRjaGVzLmdyb3Vwcyl7T2JqZWN0LmtleXMobWF0Y2hlcy5ncm91cHMpLmZvckVhY2goZ3JvdXBLZXk9PntwYXJhbXNbZ3JvdXBLZXldPW1hdGNoZXMuZ3JvdXBzW2dyb3VwS2V5XTt9KTt9ZWxzZSBpZihoYXNJdGVtLnR5cGU9PT0naG9zdCcmJm1hdGNoZXNbMF0pe3BhcmFtcy5ob3N0PW1hdGNoZXNbMF07fXJldHVybiB0cnVlO319cmV0dXJuIGZhbHNlO30pO2lmKGFsbE1hdGNoKXtyZXR1cm4gcGFyYW1zO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyl7aWYoIXZhbHVlLmluY2x1ZGVzKCc6Jykpe3JldHVybiB2YWx1ZTt9Zm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYXJhbXMpKXtpZih2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKXt2YWx1ZT12YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1NgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTmApLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwnZycpLGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCdnJyksYC0tRVNDQVBFRF9QQVJBTV9DT0xPTiR7a2V5fWApO319dmFsdWU9dmFsdWUucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCdcXFxcJDEnKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCcrJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX0NPTE9OL2csJzonKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywnPycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywnKicpOy8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG5yZXR1cm4gcGF0aFRvUmVnZXhwLmNvbXBpbGUoYC8ke3ZhbHVlfWAse3ZhbGlkYXRlOmZhbHNlfSkocGFyYW1zKS5zdWJzdHIoMSk7fWZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihkZXN0aW5hdGlvbixwYXJhbXMscXVlcnksYXBwZW5kUGFyYW1zVG9RdWVyeSl7bGV0IHBhcnNlZERlc3RpbmF0aW9uPXt9Oy8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbnF1ZXJ5PU9iamVjdC5hc3NpZ24oe30scXVlcnkpO2NvbnN0IGhhZExvY2FsZT1xdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZTtkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZTtpZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe3BhcnNlZERlc3RpbmF0aW9uPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTt9ZWxzZXtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsaGFzaCxob3N0bmFtZSxwb3J0LHByb3RvY29sLHNlYXJjaCxocmVmfT1uZXcgVVJMKGRlc3RpbmF0aW9uKTtwYXJzZWREZXN0aW5hdGlvbj17cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksaGFzaCxwcm90b2NvbCxob3N0bmFtZSxwb3J0LHNlYXJjaCxocmVmfTt9Y29uc3QgZGVzdFF1ZXJ5PXBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5O2NvbnN0IGRlc3RQYXRoPWAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lfSR7cGFyc2VkRGVzdGluYXRpb24uaGFzaHx8Jyd9YDtjb25zdCBkZXN0UGF0aFBhcmFtS2V5cz1bXTtwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLGRlc3RQYXRoUGFyYW1LZXlzKTtjb25zdCBkZXN0UGF0aFBhcmFtcz1kZXN0UGF0aFBhcmFtS2V5cy5tYXAoa2V5PT5rZXkubmFtZSk7bGV0IGRlc3RpbmF0aW9uQ29tcGlsZXI9cGF0aFRvUmVnZXhwLmNvbXBpbGUoZGVzdFBhdGgsLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbi8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4vLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4vLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG57dmFsaWRhdGU6ZmFsc2V9KTtsZXQgbmV3VXJsOy8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuZm9yKGNvbnN0W2tleSxzdHJPckFycmF5XW9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpe2xldCB2YWx1ZT1BcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpP3N0ck9yQXJyYXlbMF06c3RyT3JBcnJheTtpZih2YWx1ZSl7Ly8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4vLyBjb3JyZWN0bHlcbnZhbHVlPWNvbXBpbGVOb25QYXRoKHZhbHVlLHBhcmFtcyk7fWRlc3RRdWVyeVtrZXldPXZhbHVlO30vLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4vLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxubGV0IHBhcmFtS2V5cz1PYmplY3Qua2V5cyhwYXJhbXMpOy8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuaWYoaGFkTG9jYWxlKXtwYXJhbUtleXM9cGFyYW1LZXlzLmZpbHRlcihuYW1lPT5uYW1lIT09J25leHRJbnRlcm5hbExvY2FsZScpO31pZihhcHBlbmRQYXJhbXNUb1F1ZXJ5JiYhcGFyYW1LZXlzLnNvbWUoa2V5PT5kZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKSl7Zm9yKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpe2lmKCEoa2V5IGluIGRlc3RRdWVyeSkpe2Rlc3RRdWVyeVtrZXldPXBhcmFtc1trZXldO319fXRyeXtuZXdVcmw9ZGVzdGluYXRpb25Db21waWxlcihwYXJhbXMpO2NvbnN0W3BhdGhuYW1lLGhhc2hdPW5ld1VybC5zcGxpdCgnIycpO3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lPXBhdGhuYW1lO3BhcnNlZERlc3RpbmF0aW9uLmhhc2g9YCR7aGFzaD8nIyc6Jyd9JHtoYXNofHwnJ31gO2RlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2g7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5Lykpe3Rocm93IG5ldyBFcnJvcihgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLW11bHRpLW1hdGNoYCk7fXRocm93IGVycjt9Ly8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3Rcbi8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xucGFyc2VkRGVzdGluYXRpb24ucXVlcnk9ey4uLnF1ZXJ5LC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5fTtyZXR1cm57bmV3VXJsLHBhcnNlZERlc3RpbmF0aW9ufTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVwYXJlLWRlc3RpbmF0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9cmVzb2x2ZVJld3JpdGVzO3ZhciBfcGF0aE1hdGNoPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGF0aC1tYXRjaFwiKSk7dmFyIF9wcmVwYXJlRGVzdGluYXRpb249X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcHJlcGFyZS1kZXN0aW5hdGlvblwiKSk7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vcm91dGVyXCIpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXI9KDAsX3BhdGhNYXRjaC5kZWZhdWx0KSh0cnVlKTtmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoYXNQYXRoLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHJlc29sdmVIcmVmLGxvY2FsZXMpe2xldCBtYXRjaGVkUGFnZT1mYWxzZTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtsZXQgZnNQYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoKDAsX3JvdXRlci5kZWxCYXNlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUpLGxvY2FsZXMpLnBhdGhuYW1lKTtsZXQgcmVzb2x2ZWRIcmVmO2NvbnN0IGhhbmRsZVJld3JpdGU9cmV3cml0ZT0+e2NvbnN0IG1hdGNoZXI9Y3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKTtsZXQgcGFyYW1zPW1hdGNoZXIocGFyc2VkQXMucGF0aG5hbWUpO2lmKHJld3JpdGUuaGFzJiZwYXJhbXMpe2NvbnN0IGhhc1BhcmFtcz0oMCxfcHJlcGFyZURlc3RpbmF0aW9uLm1hdGNoSGFzKSh7aGVhZGVyczp7aG9zdDpkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZX0sY29va2llczpkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykucmVkdWNlKChhY2MsaXRlbSk9Pntjb25zdFtrZXksLi4udmFsdWVdPWl0ZW0uc3BsaXQoJz0nKTthY2Nba2V5XT12YWx1ZS5qb2luKCc9Jyk7cmV0dXJuIGFjYzt9LHt9KX0scmV3cml0ZS5oYXMscGFyc2VkQXMucXVlcnkpO2lmKGhhc1BhcmFtcyl7T2JqZWN0LmFzc2lnbihwYXJhbXMsaGFzUGFyYW1zKTt9ZWxzZXtwYXJhbXM9ZmFsc2U7fX1pZihwYXJhbXMpe2lmKCFyZXdyaXRlLmRlc3RpbmF0aW9uKXsvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxucmV0dXJuIHRydWU7fWNvbnN0IGRlc3RSZXM9KDAsX3ByZXBhcmVEZXN0aW5hdGlvbi5kZWZhdWx0KShyZXdyaXRlLmRlc3RpbmF0aW9uLHBhcmFtcyxxdWVyeSx0cnVlKTtwYXJzZWRBcz1kZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uO2FzUGF0aD1kZXN0UmVzLm5ld1VybDtPYmplY3QuYXNzaWduKHF1ZXJ5LGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpO2ZzUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKCgwLF9yb3V0ZXIuZGVsQmFzZVBhdGgpKGFzUGF0aCksbG9jYWxlcykucGF0aG5hbWUpO2lmKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKXsvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbi8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbm1hdGNoZWRQYWdlPXRydWU7cmVzb2x2ZWRIcmVmPWZzUGF0aG5hbWU7cmV0dXJuIHRydWU7fS8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG5yZXNvbHZlZEhyZWY9cmVzb2x2ZUhyZWYoZnNQYXRobmFtZSk7aWYocmVzb2x2ZWRIcmVmIT09YXNQYXRoJiZwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKXttYXRjaGVkUGFnZT10cnVlO3JldHVybiB0cnVlO319fTtsZXQgZmluaXNoZWQ9ZmFsc2U7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5iZWZvcmVGaWxlcy5sZW5ndGg7aSsrKXsvLyB3ZSBkb24ndCBlbmQgYWZ0ZXIgbWF0Y2ggaW4gYmVmb3JlRmlsZXMgdG8gYWxsb3dcbi8vIGNvbnRpbnVpbmcgdGhyb3VnaCBhbGwgYmVmb3JlRmlsZXMgcmV3cml0ZXNcbmhhbmRsZVJld3JpdGUocmV3cml0ZXMuYmVmb3JlRmlsZXNbaV0pO31tYXRjaGVkUGFnZT1wYWdlcy5pbmNsdWRlcyhmc1BhdGhuYW1lKTtpZighbWF0Y2hlZFBhZ2Upe2lmKCFmaW5pc2hlZCl7Zm9yKGxldCBpPTA7aTxyZXdyaXRlcy5hZnRlckZpbGVzLmxlbmd0aDtpKyspe2lmKGhhbmRsZVJld3JpdGUocmV3cml0ZXMuYWZ0ZXJGaWxlc1tpXSkpe2ZpbmlzaGVkPXRydWU7YnJlYWs7fX19Ly8gY2hlY2sgZHluYW1pYyByb3V0ZSBiZWZvcmUgcHJvY2Vzc2luZyBmYWxsYmFjayByZXdyaXRlc1xuaWYoIWZpbmlzaGVkKXtyZXNvbHZlZEhyZWY9cmVzb2x2ZUhyZWYoZnNQYXRobmFtZSk7bWF0Y2hlZFBhZ2U9cGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKTtmaW5pc2hlZD1tYXRjaGVkUGFnZTt9aWYoIWZpbmlzaGVkKXtmb3IobGV0IGk9MDtpPHJld3JpdGVzLmZhbGxiYWNrLmxlbmd0aDtpKyspe2lmKGhhbmRsZVJld3JpdGUocmV3cml0ZXMuZmFsbGJhY2tbaV0pKXtmaW5pc2hlZD10cnVlO2JyZWFrO319fX1yZXR1cm57YXNQYXRoLHBhcnNlZEFzLG1hdGNoZWRQYWdlLHJlc29sdmVkSHJlZn07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzb2x2ZS1yZXdyaXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbFN0eWxlc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXJcIjtcclxuaW1wb3J0IEhlYWRlclNFTyBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJTRU8vSGVhZGVyU0VPXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmQvUG9zdENhcmRcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9QYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgUEFHSU5BVElPTl9MSU1JVCA9IDEyO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBcclxuLy8gICAvLyBPIHF1ZSBldSBwYXNzYXIgYXF1aSwgZWxlIHZhaSB2aXJhciBTRU9cclxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXCJwb3N0c1wiLCB7IHBhcmFtczogeyBwYWdlOiAnMScgfX0pXHJcbi8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuLy8gICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgcmVzcG9uc2UsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgXHJcbiAgY29uc3QgW2FsbFBvc3RzLCBzZXRBbGxQb3N0c10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2FjdHVhbFBhZ2UsIHNldEFjdHVhbFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldHNlYXJjaFBhcmFtc10gPSB1c2VTdGF0ZSh7cGFyYW1zOiB7IHBhZ2U6ICcxJ319KTtcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vc3RSZWxldmFudFBvc3RzLCBzZXRNb3N0UmVsZXZhbnRQb3N0c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1ldGFzRGF0YSA9IHtcclxuICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgdmVzdGlidWx1bSB2ZWwgdmVsaXQgc2l0IGFtZXQgc2NlbGVyaXNxdWUuIFN1c3BlbmRpc3NlIGluIHZlc3RpYnVsdW0gc2FwaWVuLiBTdXNwZW5kaXNzZSBuaXNsIGlwc3VtLCBoZW5kcmVyaXQgaW4gb2RpbyBhYywgYmliZW5kdW0gbHVjdHVzIG51bGxhLlwiXHJcbiAgfTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIHNldEFsbFBvc3RzKCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9LFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2VhcmNoUG9zdHMoKVxyXG4gIH0sIFtzZWFyY2hQYXJhbXNdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0dWFsUGFnZSk7XHJcbiAgfSwgW2FjdHVhbFBhZ2VdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hQb3N0cyhwYXJhbXMpe1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2VhcmNoUGFyYW1zKTtcclxuXHJcbiAgICAvLyBPIHF1ZSBldSBwYXNzYXIgYXF1aSwgZWxlIHZhaSB2aXJhciBTRU9cclxuICAgIGF3YWl0IGFwaS5nZXQoXCJwb3N0c1wiLCBzZWFyY2hQYXJhbXMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldEFsbFBvc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2FyZEJ1dHRvbkNsaWNrKHBvc3RJZCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnY2FyZC1idXR0b24tY2xpY2tlZCcsIHBvc3RJZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goc2VhcmNoKXtcclxuICAgIFxyXG4gICAgaWYoc2VhcmNoLmVycm9yKXtcclxuICAgICAgc2V0U2VhcmNoVGV4dCgnJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaC5lcnJvcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYoc2VhcmNoLnNlYXJjaFN0cmluZy5sZW5ndGggPiAwKXtcclxuICAgICAgc2V0c2VhcmNoUGFyYW1zKHtwYXJhbXM6IHsuLi5zZWFyY2hQYXJhbXMucGFyYW1zLCBzZWFyY2g6IHNlYXJjaC5zZWFyY2hTdHJpbmcgfX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHNlYXJjaFBhcmFtcy5wYXJhbXMuc2VhcmNoXHJcbiAgICAgIHNldHNlYXJjaFBhcmFtcyh7cGFyYW1zOiB7Li4uc2VhcmNoUGFyYW1zLnBhcmFtcyB9fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VhcmNoVGV4dChzZWFyY2guc2VhcmNoU3RyaW5nKTtcclxuICAgIC8vIHNlYXJjaFBvc3RzKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTd2l0Y2hBY3Rpb24oc3dpdGNoQ2hlY2tlZCl7XHJcbiAgICBcclxuICAgIGlmKHN3aXRjaENoZWNrZWQpe1xyXG4gICAgICBzZXRzZWFyY2hQYXJhbXMoe3BhcmFtczogey4uLnNlYXJjaFBhcmFtcy5wYXJhbXMsIG9yZGVyYnk6ICdyZWxldmFuY2UnIH19KTtcclxuICAgICAgLy8gc2VhcmNoUG9zdHMoe3BhcmFtczogey4uLnNlYXJjaFBhcmFtcy5wYXJhbXMsIG9yZGVyYnk6ICdyZWxldmFuY2UnIH19KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSBzZWFyY2hQYXJhbXMucGFyYW1zLm9yZGVyYnlcclxuICAgICAgc2V0c2VhcmNoUGFyYW1zKHtwYXJhbXM6IHsuLi5zZWFyY2hQYXJhbXMucGFyYW1zIH19KTtcclxuICAgIH1cclxuICAgIHNldE1vc3RSZWxldmFudFBvc3RzKHN3aXRjaENoZWNrZWQpO1xyXG4gICAgLy8gc2VhcmNoUG9zdHMoe3BhcmFtczogey4uLnNlYXJjaFBhcmFtcy5wYXJhbXMgfX0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gaGFuZGxlU2VhcmNoKHNlYXJjaCl7XHJcbiAgLy8gICBzZWFyY2hQb3N0cyhzZWFyY2gpO1xyXG4gIC8vIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlUGFnaW5hdGlvbkNsaWNrKHBhZ2Upe1xyXG4gICAgc2V0c2VhcmNoUGFyYW1zKHtwYXJhbXM6IHsuLi5zZWFyY2hQYXJhbXMucGFyYW1zLCBwYWdlOiBwYWdlIH19KTtcclxuICAgIHNldEFjdHVhbFBhZ2UocGFnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICA8SGVhZGVyU0VPIG1ldGFzRGF0YT17bWV0YXNEYXRhfS8+XHJcbiAgICAgIDxIZWFkZXIgc2VhcmNoRGF0YT17aGFuZGxlU2VhcmNofSBzd2l0Y2hBY3Rpb249e2hhbmRsZVN3aXRjaEFjdGlvbn0vPlxyXG5cclxuICAgICAgPEhlYWRUaXRsZT5XZWxjb21lIHRvIHRoZSBUcmFuc2xhdGlvbiwgSW5jIEJsb2chPC9IZWFkVGl0bGU+XHJcblxyXG4gICAgICB7IWxvYWRpbmcgXHJcbiAgICAgID8gYWxsUG9zdHMuZGF0YS5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgPyAoPE5vUG9zdHNGaW5kZWRNZXNzYWdlPk5lbmh1bSBwb3N0IGVuY29udHJhZG8hICMyPC9Ob1Bvc3RzRmluZGVkTWVzc2FnZT4pIFxyXG4gICAgICAgIDogKFxyXG4gICAgICAgICAgPD5cclxuICBcclxuICAgICAgICAgICAgPHAgc3R5bGU9e3t0ZXh0QWxpZ246ICdyaWdodCd9fT57YWxsUG9zdHMuZGF0YS5sZW5ndGggPT09IDEgPyAnMSBwb3N0IGZpbmRlZCcgOiBgJHthbGxQb3N0cy5kYXRhLmxlbmd0aH0gcG9zdHMgZmluZGVkYCB9PC9wPlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luYXRpb24gXHJcbiAgICAgICAgICAgICAgbGltaXQ9e1BBR0lOQVRJT05fTElNSVR9IFxyXG4gICAgICAgICAgICAgIHRvdGFsPXthbGxQb3N0cy5wYWdlc30gXHJcbiAgICAgICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XHJcbiAgICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgICAgYWN0dWFsUGFnZT17aGFuZGxlUGFnaW5hdGlvbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRQb3N0cz5cclxuICAgICAgICAgICAgICB7YWxsUG9zdHMuZGF0YS5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBcclxuICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfSBcclxuICAgICAgICAgICAgICAgICAgcG9zdERhdGE9e3Bvc3R9IFxyXG4gICAgICAgICAgICAgICAgICBvbkNhcmRCdXR0b25DbGljaz17aGFuZGxlQ2FyZEJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9HcmlkUG9zdHM+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICBsaW1pdD17UEFHSU5BVElPTl9MSU1JVH0gXHJcbiAgICAgICAgICAgICAgdG90YWw9e2FsbFBvc3RzLnBhZ2VzfSBcclxuICAgICAgICAgICAgICBvZmZzZXQ9e29mZnNldH1cclxuICAgICAgICAgICAgICBzZXRPZmZzZXQ9e3NldE9mZnNldH1cclxuICAgICAgICAgICAgICBhY3R1YWxQYWdlPXtoYW5kbGVQYWdpbmF0aW9uQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgICA6ICg8TG9hZGluZz5DYXJyZWdhbmRvLi4uPC9Mb2FkaW5nPikgfVxyXG5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IEdyaWRQb3N0cyA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgZ2FwOiAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7fVxyXG4gIFxyXG4gIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDJlbTtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTm9Qb3N0c0ZpbmRlZE1lc3NhZ2UgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1zaXplOiAxLjZlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBjb2xvcjogI2JiYmJiYjtcclxuYDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5nZXRbJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiddID0gJyonO1xyXG4vLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmdldFsnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnXSA9ICdmYWxzZSc7XHJcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuZ2V0WydBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJ10gPSAnR0VULEhFQUQsT1BUSU9OUyxQT1NULFBVVCc7XHJcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuZ2V0WydBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJ10gPSAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycywgT3JpZ2luLEFjY2VwdCwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2Nlc3MtQ29udHJvbC1SZXF1ZXN0LU1ldGhvZCwgQWNjZXNzLUNvbnRyb2wtUmVxdWVzdC1IZWFkZXJzJztcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYXBpLmJldGEubWVqb3Jjb25zYWx1ZC5jb20vd3AtanNvbi9tYy92Mi8nLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdsb2JhbFN0eWxlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBTdHlsZWQgQ29tcG9uZW50c1xyXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGJvZHkgaHRtbCAjcm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZmxleC1yb3ctcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICBcclxuYDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpdGNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9