(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_error"],{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

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

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
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

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://nextjs.org/docs/messages/client-side-exception-occurred"
      }, "developer guidance"), ")"), "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error! ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! next/dist/pages/_error */ "./node_modules/next/dist/pages/_error.js");
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvP2JlNDUiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwib2JqIiwiX19lc01vZHVsZSIsIkFtcFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsImlzSW5BbXBNb2RlIiwidXNlQW1wIiwiX2FtcENvbnRleHQiLCJhbXBGaXJzdCIsImh5YnJpZCIsImhhc1F1ZXJ5IiwidXNlQ29udGV4dCIsImRlZmF1bHRIZWFkIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2lkZUVmZmVjdCIsIl9oZWFkTWFuYWdlckNvbnRleHQiLCJfYW1wIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwiaW5BbXBNb2RlIiwiaGVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyU2V0IiwicHVzaCIsIm5hbWUiLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImluZGV4T2YiLCJzbGljZSIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlZHVjZUNvbXBvbmVudHMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudCIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJyZXZlcnNlIiwiZmlsdGVyIiwibWFwIiwiYyIsImNsb25lRWxlbWVudCIsIkhlYWQiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJfZGVmYXVsdCIsImlzU2VydmVyIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsInVwZGF0ZUhlYWQiLCJtb3VudGVkSW5zdGFuY2VzIiwiQ29tcG9uZW50IiwiX2hlYWQiLCJzdGF0dXNDb2RlcyIsIl9nZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiLCJzdGF0dXNDb2RlIiwiRXJyb3IiLCJ0aXRsZSIsInN0eWxlIiwic3R5bGVzIiwiZXJyb3IiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiaDIiLCJocmVmIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFBQUEsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCLEtBQUssQ0FBN0I7O0FBQStCLElBQUlDLE1BQU0sR0FBQ0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFqQzs7QUFBb0QsU0FBU0Qsc0JBQVQsQ0FBZ0NFLEdBQWhDLEVBQW9DO0FBQUMsU0FBT0EsR0FBRyxJQUFFQSxHQUFHLENBQUNDLFVBQVQsR0FBb0JELEdBQXBCLEdBQXdCO0FBQUMsZUFBUUE7QUFBVCxHQUEvQjtBQUE4Qzs7QUFBQSxJQUFNRSxlQUFlLEdBQUMsYUFBYUwsTUFBTSxXQUFOLENBQWVNLGFBQWYsQ0FBNkIsRUFBN0IsQ0FBbkM7O0FBQW9FUCx1QkFBQSxHQUF3Qk0sZUFBeEI7O0FBQXdDLFVBQXVDO0FBQUNBLGlCQUFlLENBQUNFLFdBQWhCLEdBQTRCLGlCQUE1QjtBQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBalk7Ozs7QUFBQVIsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLG1CQUFBLEdBQW9CUyxXQUFwQjtBQUFnQ1QsY0FBQSxHQUFlVSxNQUFmOztBQUFzQixJQUFJVCxNQUFNLEdBQUNDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlRLFdBQVcsR0FBQ1IsbUJBQU8sQ0FBQyw4RUFBRCxDQUF2Qjs7QUFBeUMsU0FBU0Qsc0JBQVQsQ0FBZ0NFLEdBQWhDLEVBQW9DO0FBQUMsU0FBT0EsR0FBRyxJQUFFQSxH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QUF3Qk0sZUFBVyxFQUFDLDRCQUFwQztBQUFpRUMsVUFBTSxFQUFDLENBQXhFO0FBQTBFQyxlQUFXLEVBQUMsTUFBdEY7QUFBNkZDLFdBQU8sRUFBQyxrQkFBckc7QUFBd0hDLFlBQVEsRUFBQyxNQUFqSTtBQUF3SUMsY0FBVSxFQUFDLEdBQW5KO0FBQXVKTixpQkFBYSxFQUFDO0FBQXJLLEdBQTVZO0FBQXdqQmQsSUFBRSxFQUFDO0FBQUNtQixZQUFRLEVBQUMsTUFBVjtBQUFpQkMsY0FBVSxFQUFDLFFBQTVCO0FBQXFDUCxjQUFVLEVBQUMsU0FBaEQ7QUFBMERHLFVBQU0sRUFBQyxDQUFqRTtBQUFtRUUsV0FBTyxFQUFDO0FBQTNFO0FBQTNqQixDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDF4QztBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsd0VBQXdCO0FBQy9DO0FBQ0EiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBBbXBTdGF0ZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PUFtcFN0YXRlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7QW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lPSdBbXBTdGF0ZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNJbkFtcE1vZGU9aXNJbkFtcE1vZGU7ZXhwb3J0cy51c2VBbXA9dXNlQW1wO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGlzSW5BbXBNb2RlKHthbXBGaXJzdD1mYWxzZSxoeWJyaWQ9ZmFsc2UsaGFzUXVlcnk9ZmFsc2V9PXt9KXtyZXR1cm4gYW1wRmlyc3R8fGh5YnJpZCYmaGFzUXVlcnk7fWZ1bmN0aW9uIHVzZUFtcCgpey8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbnJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHRIZWFkPWRlZmF1bHRIZWFkO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2lkZUVmZmVjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZGUtZWZmZWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9hbXA9cmVxdWlyZShcIi4vYW1wXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGU9ZmFsc2Upe2NvbnN0IGhlYWQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtjaGFyU2V0OlwidXRmLThcIn0pXTtpZighaW5BbXBNb2RlKXtoZWFkLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIn0pKTt9cmV0dXJuIGhlYWQ7fWZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCxjaGlsZCl7Ly8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbmlmKHR5cGVvZiBjaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgY2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGxpc3Q7fS8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbmlmKGNoaWxkLnR5cGU9PT1fcmVhY3QuZGVmYXVsdC5GcmFnbWVudCl7cmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LGZyYWdtZW50Q2hpbGQpPT57aWYodHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGZyYWdtZW50TGlzdDt9cmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7fSxbXSkpO31yZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO31jb25zdCBNRVRBVFlQRVM9WyduYW1lJywnaHR0cEVxdWl2JywnY2hhclNldCcsJ2l0ZW1Qcm9wJ107LypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovZnVuY3Rpb24gdW5pcXVlKCl7Y29uc3Qga2V5cz1uZXcgU2V0KCk7Y29uc3QgdGFncz1uZXcgU2V0KCk7Y29uc3QgbWV0YVR5cGVzPW5ldyBTZXQoKTtjb25zdCBtZXRhQ2F0ZWdvcmllcz17fTtyZXR1cm4gaD0+e2xldCBpc1VuaXF1ZT10cnVlO2xldCBoYXNLZXk9ZmFsc2U7aWYoaC5rZXkmJnR5cGVvZiBoLmtleSE9PSdudW1iZXInJiZoLmtleS5pbmRleE9mKCckJyk+MCl7aGFzS2V5PXRydWU7Y29uc3Qga2V5PWgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSsxKTtpZihrZXlzLmhhcyhrZXkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtrZXlzLmFkZChrZXkpO319Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuc3dpdGNoKGgudHlwZSl7Y2FzZSd0aXRsZSc6Y2FzZSdiYXNlJzppZih0YWdzLmhhcyhoLnR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXt0YWdzLmFkZChoLnR5cGUpO31icmVhaztjYXNlJ21ldGEnOmZvcihsZXQgaT0wLGxlbj1NRVRBVFlQRVMubGVuZ3RoO2k8bGVuO2krKyl7Y29uc3QgbWV0YXR5cGU9TUVUQVRZUEVTW2ldO2lmKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSljb250aW51ZTtpZihtZXRhdHlwZT09PSdjaGFyU2V0Jyl7aWYobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle21ldGFUeXBlcy5hZGQobWV0YXR5cGUpO319ZWxzZXtjb25zdCBjYXRlZ29yeT1oLnByb3BzW21ldGF0eXBlXTtjb25zdCBjYXRlZ29yaWVzPW1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXXx8bmV3IFNldCgpO2lmKChtZXRhdHlwZSE9PSduYW1lJ3x8IWhhc0tleSkmJmNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7Y2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO21ldGFDYXRlZ29yaWVzW21ldGF0eXBlXT1jYXRlZ29yaWVzO319fWJyZWFrO31yZXR1cm4gaXNVbmlxdWU7fTt9LyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL2Z1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLHByb3BzKXtyZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCxoZWFkRWxlbWVudCk9Pntjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO3JldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTt9LFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCxbXSkucmV2ZXJzZSgpLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsaSk9Pntjb25zdCBrZXk9Yy5rZXl8fGk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFwcm9wcy5pbkFtcE1vZGUpe2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiYvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cblsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLCdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXS5zb21lKHVybD0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDsvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG5uZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXT10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyxuZXdQcm9wcyk7fX1yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMse2tleX0pO30pO30vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovZnVuY3Rpb24gSGVhZCh7Y2hpbGRyZW59KXtjb25zdCBhbXBTdGF0ZT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtjb25zdCBoZWFkTWFuYWdlcj0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQse3JlZHVjZUNvbXBvbmVudHNUb1N0YXRlOnJlZHVjZUNvbXBvbmVudHMsaGVhZE1hbmFnZXI6aGVhZE1hbmFnZXIsaW5BbXBNb2RlOigwLF9hbXAuaXNJbkFtcE1vZGUpKGFtcFN0YXRlKX0sY2hpbGRyZW4pO312YXIgX2RlZmF1bHQ9SGVhZDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7Y29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnO2NsYXNzIF9kZWZhdWx0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXZvaWQgMDt0aGlzLmVtaXRDaGFuZ2U9KCk9PntpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sdGhpcy5wcm9wcykpO319O3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXRoaXMucHJvcHMuaGVhZE1hbmFnZXImJnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztpZihpc1NlcnZlciYmdGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7dGhpcy5lbWl0Q2hhbmdlKCk7fX1jb21wb25lbnREaWRNb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50RGlkVXBkYXRlKCl7dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31yZW5kZXIoKXtyZXR1cm4gbnVsbDt9fWV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7Y29uc3Qgc3RhdHVzQ29kZXM9ezQwMDonQmFkIFJlcXVlc3QnLDQwNDonVGhpcyBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZCcsNDA1OidNZXRob2QgTm90IEFsbG93ZWQnLDUwMDonSW50ZXJuYWwgU2VydmVyIEVycm9yJ307ZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyh7cmVzLGVycn0pe2NvbnN0IHN0YXR1c0NvZGU9cmVzJiZyZXMuc3RhdHVzQ29kZT9yZXMuc3RhdHVzQ29kZTplcnI/ZXJyLnN0YXR1c0NvZGU6NDA0O3JldHVybntzdGF0dXNDb2RlfTt9LyoqXG4gKiBgRXJyb3JgIGNvbXBvbmVudCB1c2VkIGZvciBoYW5kbGluZyBlcnJvcnMuXG4gKi9jbGFzcyBFcnJvciBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtyZW5kZXIoKXtjb25zdHtzdGF0dXNDb2RlfT10aGlzLnByb3BzO2NvbnN0IHRpdGxlPXRoaXMucHJvcHMudGl0bGV8fHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdfHwnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnN0eWxlcy5lcnJvcn0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIixudWxsLHN0YXR1c0NvZGU/YCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YDonQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOidib2R5IHsgbWFyZ2luOiAwIH0nfX0pLHN0YXR1c0NvZGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLHtzdHlsZTpzdHlsZXMuaDF9LHN0YXR1c0NvZGUpOm51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c3R5bGVzLmRlc2N9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDJcIix7c3R5bGU6c3R5bGVzLmgyfSx0aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2RlP3RpdGxlOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsXCJBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkIChcIiwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIix7aHJlZjpcImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NsaWVudC1zaWRlLWV4Y2VwdGlvbi1vY2N1cnJlZFwifSxcImRldmVsb3BlciBndWlkYW5jZVwiKSxcIilcIiksXCIuXCIpKSkpO319ZXhwb3J0cy5kZWZhdWx0PUVycm9yO0Vycm9yLmRpc3BsYXlOYW1lPSdFcnJvclBhZ2UnO0Vycm9yLmdldEluaXRpYWxQcm9wcz1fZ2V0SW5pdGlhbFByb3BzO0Vycm9yLm9yaWdHZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztjb25zdCBzdHlsZXM9e2Vycm9yOntjb2xvcjonIzAwMCcsYmFja2dyb3VuZDonI2ZmZicsZm9udEZhbWlseTonLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxoZWlnaHQ6JzEwMHZoJyx0ZXh0QWxpZ246J2NlbnRlcicsZGlzcGxheTonZmxleCcsZmxleERpcmVjdGlvbjonY29sdW1uJyxhbGlnbkl0ZW1zOidjZW50ZXInLGp1c3RpZnlDb250ZW50OidjZW50ZXInfSxkZXNjOntkaXNwbGF5OidpbmxpbmUtYmxvY2snLHRleHRBbGlnbjonbGVmdCcsbGluZUhlaWdodDonNDlweCcsaGVpZ2h0Oic0OXB4Jyx2ZXJ0aWNhbEFsaWduOidtaWRkbGUnfSxoMTp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyxib3JkZXJSaWdodDonMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLG1hcmdpbjowLG1hcmdpblJpZ2h0OicyMHB4JyxwYWRkaW5nOicxMHB4IDIzcHggMTBweCAwJyxmb250U2l6ZTonMjRweCcsZm9udFdlaWdodDo1MDAsdmVydGljYWxBbGlnbjondG9wJ30saDI6e2ZvbnRTaXplOicxNHB4Jyxmb250V2VpZ2h0Oidub3JtYWwnLGxpbmVIZWlnaHQ6J2luaGVyaXQnLG1hcmdpbjowLHBhZGRpbmc6MH19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2Vycm9yLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwibmV4dC9kaXN0L3BhZ2VzL19lcnJvclwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==