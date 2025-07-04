(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":1}],4:[function(require,module,exports){
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],5:[function(require,module,exports){
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],6:[function(require,module,exports){
var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");
var setPrototypeOf = require("./setPrototypeOf.js");
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./isNativeReflectConstruct.js":13,"./setPrototypeOf.js":19}],7:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":23}],8:[function(require,module,exports){
var toPropertyKey = require("./toPropertyKey.js");
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPropertyKey.js":23}],9:[function(require,module,exports){
function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":19}],11:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],12:[function(require,module,exports){
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],13:[function(require,module,exports){
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],14:[function(require,module,exports){
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],15:[function(require,module,exports){
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],16:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],18:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":4,"./typeof.js":24}],19:[function(require,module,exports){
function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],20:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":15,"./nonIterableRest.js":16,"./unsupportedIterableToArray.js":25}],21:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":3,"./iterableToArray.js":14,"./nonIterableSpread.js":17,"./unsupportedIterableToArray.js":25}],22:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":24}],23:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":22,"./typeof.js":24}],24:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],25:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":1}],26:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");
var setPrototypeOf = require("./setPrototypeOf.js");
var isNativeFunction = require("./isNativeFunction.js");
var construct = require("./construct.js");
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return construct(t, arguments, getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), setPrototypeOf(Wrapper, t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./construct.js":6,"./getPrototypeOf.js":9,"./isNativeFunction.js":12,"./setPrototypeOf.js":19}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = void 0;
var defaultConfig = exports.defaultConfig = {
  id: null,
  ifExists: "focus",
  title: "New Window",
  icon: null,
  x: "auto",
  y: "auto",
  width: 500,
  height: 400,
  minWidth: 200,
  minHeight: 150,
  resizableX: true,
  resizableY: true,
  movable: true,
  closable: true,
  minimizable: true,
  maximizable: true,
  maximizableOnDblClick: true,
  enableShortcuts: true,
  controlsPosition: "right",
  content: {
    html: "",
    iframe: {
      src: "",
      srcdoc: "",
      allow: "",
      referrerPolicy: "",
      loading: "lazy",
      sandbox: "",
      loadWinLet: false
    },
    template: ""
  },
  menu: [],
  menuStyle: "default",
  tabs: [],
  tabStyle: "default",
  tabOptions: {
    reorderable: false,
    closable: false,
    addable: false,
    detachable: false,
    mergeable: false,
    allowIncomingMerge: false,
    onAdd: undefined,
    onMergeAttempt: undefined
  },
  contextMenu: [],
  focus: true,
  alwaysOnTop: false,
  useGhostWindow: false,
  modal: false,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onResize: function onResize() {},
  onMove: function onMove() {},
  onReload: function onReload() {},
  _isPopup: false,
  _parent: null,
  _taskbarItem: null
};

},{}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WinLetError = exports.WinLetBaseError = exports.SimpleError = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var WinLetBaseError = exports.WinLetBaseError = function (_Error) {
  function WinLetBaseError(message) {
    var _this;
    (0, _classCallCheck2["default"])(this, WinLetBaseError);
    _this = _callSuper(this, WinLetBaseError, [message]);
    _this.name = _this.constructor.name;
    var BuiltInError = Error;
    if (BuiltInError.captureStackTrace) {
      BuiltInError.captureStackTrace(_this, _this.constructor);
    }
    return _this;
  }
  (0, _inherits2["default"])(WinLetBaseError, _Error);
  return (0, _createClass2["default"])(WinLetBaseError);
}((0, _wrapNativeSuper2["default"])(Error));
var SimpleError = exports.SimpleError = function (_WinLetBaseError) {
  function SimpleError(message) {
    (0, _classCallCheck2["default"])(this, SimpleError);
    return _callSuper(this, SimpleError, [message]);
  }
  (0, _inherits2["default"])(SimpleError, _WinLetBaseError);
  return (0, _createClass2["default"])(SimpleError);
}(WinLetBaseError);
var WinLetError = exports.WinLetError = function (_SimpleError) {
  function WinLetError() {
    (0, _classCallCheck2["default"])(this, WinLetError);
    return _callSuper(this, WinLetError, arguments);
  }
  (0, _inherits2["default"])(WinLetError, _SimpleError);
  return (0, _createClass2["default"])(WinLetError);
}(SimpleError);

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/interopRequireDefault":11,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/wrapNativeSuper":26}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIMEOUT_RESULT = exports.LIBRARY_NAME = exports.CLOSE_BUTTON_RESULT = void 0;
var LIBRARY_NAME = exports.LIBRARY_NAME = "winlet";
var TIMEOUT_RESULT = exports.TIMEOUT_RESULT = Symbol("timeout");
var CLOSE_BUTTON_RESULT = exports.CLOSE_BUTTON_RESULT = Symbol("close");

},{}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _config = require("../const/config");
var _errors = require("../const/errors");
var _types = require("../const/types");
var _baseclass = _interopRequireDefault(require("../libs/baseclass"));
var _utils = _interopRequireDefault(require("../libs/utils"));
var _window_manager = _interopRequireDefault(require("./window_manager"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var WinLetWindow = exports["default"] = function (_WinLetBaseClass) {
  function WinLetWindow(options, manager) {
    var _this;
    (0, _classCallCheck2["default"])(this, WinLetWindow);
    _this = _callSuper(this, WinLetWindow);
    (0, _defineProperty2["default"])(_this, "state", "normal");
    (0, _defineProperty2["default"])(_this, "lastState", {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
    (0, _defineProperty2["default"])(_this, "focused", false);
    (0, _defineProperty2["default"])(_this, "DRAG_THRESHOLD", 5);
    (0, _defineProperty2["default"])(_this, "tabs", []);
    (0, _defineProperty2["default"])(_this, "addTabBtn", null);
    (0, _defineProperty2["default"])(_this, "isMenuOpen", false);
    (0, _defineProperty2["default"])(_this, "boundGlobalClickHandler", null);
    (0, _defineProperty2["default"])(_this, "MOBILE_CONTEXT_MENU_TIMEOUT", 700);
    (0, _defineProperty2["default"])(_this, "contextMenuTimer", null);
    (0, _defineProperty2["default"])(_this, "popupCloseCallback", null);
    (0, _defineProperty2["default"])(_this, "childManager", null);
    _this.id = options.id || _utils["default"].generateId("window");
    if (options.id) {
      var existingEl = document.getElementById(options.id);
      if (existingEl && existingEl.classList.contains("".concat(_types.LIBRARY_NAME, "-window"))) {
        throw new _errors.WinLetError("WinLet: Window with ID \"".concat(options.id, "\" already exists. New window will not be created."));
      }
    }
    _this.manager = manager;
    _this.options = _utils["default"].deepMerge(_utils["default"].deepCopy(_config.defaultConfig), options);
    _this.parentWindow = options._parent || null;
    _this.el = _this.createDOM();
    if (_this.options._isPopup) {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-popup-window"));
    }
    if (_this.options.tabStyle === "merged") {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-tab-style-merged"));
    }
    if (_this.options.menuStyle === "merged") {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-menu-style-merged"));
    }
    if (_this.options.alwaysOnTop) {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-always-on-top"));
    }
    if (_this.options.modal) {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-modal"));
    }
    _this.titleBarEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-title-bar"));
    _this.iconEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-icon"));
    _this.titleEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-title"));
    _this.contentEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-content"));
    _this.applyOptions();
    _this.setupEventListeners();
    _this.options.onOpen(_this);
    return _this;
  }
  (0, _inherits2["default"])(WinLetWindow, _WinLetBaseClass);
  return (0, _createClass2["default"])(WinLetWindow, [{
    key: "createDOM",
    value: function createDOM() {
      var windowEl = document.createElement("div");
      windowEl.className = "".concat(_types.LIBRARY_NAME, "-window");
      windowEl.id = this.id;
      var handles = [];
      if (this.options.resizableY) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle n\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle s\"></div>"));
      }
      if (this.options.resizableX) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle w\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle e\"></div>"));
      }
      if (this.options.resizableX && this.options.resizableY) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle nw\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ne\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle sw\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle se\"></div>"));
      }
      var resizableHandlesHTML = handles.join("");
      var hasMenu = this.options.menu.length > 0;
      var hasTabs = this.options.tabs.length > 0;
      var isMergedMenu = this.options.menuStyle === "merged" && hasMenu;
      var isMergedTabs = this.options.tabStyle === "merged" && hasTabs;
      var controlsHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-controls\">\n                ").concat(this.options.minimizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-minimize-btn\" type=\"button\" value=\"\uFF3F\" title=\"Minimize\" />") : "", "\n                ").concat(this.options.maximizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-maximize-btn\" type=\"button\" value=\"\u25A1\" title=\"Maximize\" />") : "", "\n                ").concat(this.options.closable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-close-btn\" type=\"button\" value=\"\u2573\" title=\"Close\">") : "", "\n            </div>");
      var titleBarContentHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-icon\"></div>\n            ").concat(isMergedMenu ? "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-bar\"></div>") : "", "\n            <div class=\"").concat(_types.LIBRARY_NAME, "-title\"></div>\n            ").concat(isMergedTabs ? "<div class=\"".concat(_types.LIBRARY_NAME, "-tab-bar\"></div>") : "", "\n            ").concat(controlsHTML, "\n        ");
      windowEl.innerHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-title-bar ").concat(_types.LIBRARY_NAME, "-us-none\">\n                ").concat(titleBarContentHTML, "\n            </div>\n            <div class=\"").concat(_types.LIBRARY_NAME, "-main-content\">\n                ").concat(!isMergedMenu && hasMenu ? "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-bar\"></div>") : "", "\n                ").concat(!isMergedTabs && hasTabs ? "<div class=\"".concat(_types.LIBRARY_NAME, "-tab-bar\"></div>") : "", "\n                <div class=\"").concat(_types.LIBRARY_NAME, "-content\"></div>\n            </div>\n            ").concat(resizableHandlesHTML, "\n        ");
      return windowEl;
    }
  }, {
    key: "applyOptions",
    value: function applyOptions() {
      this.setTitle(this.options.title);
      this.setIcon(this.options.icon);
      this.setSize(this.options.width, this.options.height);
      this.el.style.minWidth = "".concat(this.options.minWidth, "px");
      this.el.style.minHeight = "".concat(this.options.minHeight, "px");
      if (this.options.controlsPosition === "left") {
        this.titleBarEl.classList.add("controls-left");
      }
      if (this.options.tabs.length > 0) {
        this.createTabs();
      } else {
        this.renderContent(this.contentEl, this.options.content);
      }
      if (this.options.menu.length > 0) {
        this.createMenu();
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent(container, content) {
      container.innerHTML = "";
      if (content.template) {
        var template = document.querySelector(content.template);
        if ((template === null || template === void 0 ? void 0 : template.tagName) === "TEMPLATE") {
          container.appendChild(template.content.cloneNode(true));
        } else {
          container.innerHTML = "Error: Template not found or invalid.";
          console.warn("WinLet Warning: Template not found or invalid.");
        }
      } else if (content.html) {
        container.innerHTML = content.html;
      } else if (_utils["default"].isNonEmptyObject(content.iframe) && (content.iframe.src || content.iframe.srcdoc)) {
        var iframe = document.createElement("iframe");
        var iframeConfig = content.iframe;
        if (iframeConfig.src) {
          iframe.src = iframeConfig.src;
        }
        if (iframeConfig.srcdoc) {
          var finalSrcDoc = iframeConfig.srcdoc;
          if (iframeConfig.loadWinLet) {
            var globalConfig = this.manager.getGlobalConfig();
            if (globalConfig.libraryPath) {
              var scriptTag = "<script src=\"".concat(globalConfig.libraryPath, "\"></script>");
              var initScript = "<script>document.addEventListener('DOMContentLoaded', () => window.WinLet.init({ container: document.body }));</script>";
              finalSrcDoc = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">".concat(scriptTag).concat(initScript, "</head><body>").concat(iframeConfig.srcdoc, "</body></html>");
            } else {
              console.warn("WinLet Warning: `loadWinLet` is true, but `libraryPath` is not set in global config.");
            }
          }
          iframe.srcdoc = finalSrcDoc;
        }
        if (iframeConfig.allow) {
          iframe.allow = iframeConfig.allow;
        }
        if (iframeConfig.referrerPolicy) {
          iframe.referrerPolicy = iframeConfig.referrerPolicy;
        }
        if (iframeConfig.loading) {
          iframe.loading = iframeConfig.loading;
        }
        if (iframeConfig.sandbox) {
          if (!Array.isArray(iframeConfig.sandbox)) {
            iframeConfig.sandbox = [iframeConfig.sandbox];
          }
          if (iframeConfig.sandbox.length > 0) {
            iframe.setAttribute("sandbox", iframeConfig.sandbox.join(" "));
          }
        }
        container.appendChild(iframe);
      } else {
        container.innerHTML = "";
      }
    }
  }, {
    key: "closeAllMenus",
    value: function closeAllMenus() {
      this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-menu-item > .").concat(_types.LIBRARY_NAME, "-menu-dropdown")).forEach(function (dd) {
        dd.style.display = "none";
      });
      this.isMenuOpen = false;
    }
  }, {
    key: "createMenu",
    value: function createMenu() {
      var _this2 = this;
      var menuBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-menu-bar"));
      menuBar.innerHTML = "";
      this.options.menu.forEach(function (menuItemData) {
        var _menuItemData$name;
        var menuItemEl = document.createElement("div");
        menuItemEl.className = "".concat(_types.LIBRARY_NAME, "-menu-item ").concat(_types.LIBRARY_NAME, "-us-none");
        menuItemEl.textContent = (_menuItemData$name = menuItemData.name) !== null && _menuItemData$name !== void 0 ? _menuItemData$name : "";
        if (menuItemData.items) {
          var dropdownEl = _this2.createDropdownMenu(menuItemData.items);
          menuItemEl.addEventListener("click", function (e) {
            e.stopPropagation();
            var isVisible = dropdownEl.style.display === "block";
            _this2.closeAllMenus();
            if (!isVisible) {
              dropdownEl.style.display = "block";
              _this2.isMenuOpen = true;
            }
          });
          menuItemEl.addEventListener("mouseenter", function () {
            if (_this2.isMenuOpen) {
              _this2.closeAllMenus();
              dropdownEl.style.display = "block";
              _this2.isMenuOpen = true;
            }
          });
          menuItemEl.appendChild(dropdownEl);
        }
        menuBar.appendChild(menuItemEl);
      });
    }
  }, {
    key: "createDropdownMenu",
    value: function createDropdownMenu(items) {
      var _this3 = this;
      var dropdownEl = document.createElement("ul");
      dropdownEl.className = "".concat(_types.LIBRARY_NAME, "-menu-dropdown");
      items.forEach(function (itemData) {
        var itemEl = document.createElement("li");
        if (itemData.separator) {
          itemEl.className = "separator";
        } else {
          var _itemData$name;
          var text = (_itemData$name = itemData.name) !== null && _itemData$name !== void 0 ? _itemData$name : "";
          text = "<span>".concat(text, "</span>");
          if (_this3.options.enableShortcuts && itemData.shortcut) {
            text += "<span class=\"".concat(_types.LIBRARY_NAME, "-shortcut-text\">(").concat(itemData.shortcut, ")</span>");
          }
          itemEl.innerHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-dropdown-item\">").concat(text, "</div>");
          itemEl.addEventListener("click", function (e) {
            var _itemData$action;
            e.stopPropagation();
            _this3.closeAllMenus();
            (_itemData$action = itemData.action) === null || _itemData$action === void 0 || _itemData$action.call(itemData, _this3);
          });
          if (itemData.items) {
            itemEl.classList.add("has-submenu");
            var subMenuEl = _this3.createDropdownMenu(itemData.items);
            itemEl.appendChild(subMenuEl);
          }
        }
        dropdownEl.appendChild(itemEl);
      });
      return dropdownEl;
    }
  }, {
    key: "createTabs",
    value: function createTabs() {
      var _this$options$tabOpti,
        _this4 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      tabBar.innerHTML = "";
      this.tabs = [];
      var tabOpts = (_this$options$tabOpti = this.options.tabOptions) !== null && _this$options$tabOpti !== void 0 ? _this$options$tabOpti : {};
      this.options.tabs.forEach(function (tabData, index) {
        _this4.createTabElement(tabData, index);
      });
      if (tabOpts.addable) {
        this.addTabBtn = document.createElement("div");
        this.addTabBtn.className = "".concat(_types.LIBRARY_NAME, "-tab-add-btn");
        this.addTabBtn.textContent = "+";
        this.addTabBtn.addEventListener("click", function (e) {
          var _tabOpts$onAdd;
          var newTabItem = (_tabOpts$onAdd = tabOpts.onAdd) === null || _tabOpts$onAdd === void 0 ? void 0 : _tabOpts$onAdd.call(tabOpts, _this4);
          if (newTabItem) {
            _this4.addTab(newTabItem);
          }
        });
        tabBar.appendChild(this.addTabBtn);
      }
      this.setupTabBarDropZone();
      if (this.tabs.length > 0) this.activateTab(0);
    }
  }, {
    key: "setupTabBarDropZone",
    value: function setupTabBarDropZone() {
      var _this5 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      if (!tabBar || !this.options.tabOptions.reorderable) return;
      tabBar.addEventListener("dragover", function (e) {
        var _e$dataTransfer;
        if ((_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.types.includes("application/winlet-tab")) {
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
          tabBar.classList.add("drag-over");
        }
      });
      tabBar.addEventListener("dragleave", function () {
        tabBar.classList.remove("drag-over");
      });
      tabBar.addEventListener("drop", function (e) {
        var _e$dataTransfer2, _e$dataTransfer3, _e$dataTransfer4, _this5$manager$contai;
        e.preventDefault();
        tabBar.classList.remove("drag-over");
        var tabDataJSON = (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.getData("application/winlet-tab");
        var sourceWindowId = (_e$dataTransfer3 = e.dataTransfer) === null || _e$dataTransfer3 === void 0 ? void 0 : _e$dataTransfer3.getData("application/winlet-source-window-id");
        var sourceTabId = (_e$dataTransfer4 = e.dataTransfer) === null || _e$dataTransfer4 === void 0 ? void 0 : _e$dataTransfer4.getData("text/plain");
        if (!tabDataJSON || !sourceWindowId || !sourceTabId) return;
        var draggingEl = (_this5$manager$contai = _this5.manager.container) === null || _this5$manager$contai === void 0 ? void 0 : _this5$manager$contai.querySelector(".".concat(_types.LIBRARY_NAME, "-tab.dragging"));
        if (sourceWindowId === _this5.id) {
          if (draggingEl) {
            _this5.updateTabOrderFromDOM();
          }
          return;
        }
        var sourceWindow = _this5.manager.getWindow(sourceWindowId);
        if (sourceWindow) {
          var _sourceOpts$mergeable, _targetOpts$allowInco;
          var sourceOpts = sourceWindow.options.tabOptions;
          var targetOpts = _this5.options.tabOptions;
          var isMergeable = (_sourceOpts$mergeable = sourceOpts.mergeable) !== null && _sourceOpts$mergeable !== void 0 ? _sourceOpts$mergeable : sourceOpts.detachable;
          var allowsIncoming = (_targetOpts$allowInco = targetOpts.allowIncomingMerge) !== null && _targetOpts$allowInco !== void 0 ? _targetOpts$allowInco : true;
          var customFilterPassed = !targetOpts.onMergeAttempt || targetOpts.onMergeAttempt(sourceWindow, _this5);
          if (!isMergeable || !allowsIncoming || !customFilterPassed) {
            return;
          }
          var tabData = JSON.parse(tabDataJSON);
          _this5.addTab(tabData, true);
          sourceWindow.closeTab(parseInt(sourceTabId, 10));
        }
      });
    }
  }, {
    key: "createTabElement",
    value: function createTabElement(tabData, index) {
      var _this$options$tabOpti2,
        _this6 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      var tabOpts = (_this$options$tabOpti2 = this.options.tabOptions) !== null && _this$options$tabOpti2 !== void 0 ? _this$options$tabOpti2 : {};
      var tabEl = document.createElement("div");
      tabEl.className = "".concat(_types.LIBRARY_NAME, "-tab");
      tabEl.dataset.tabId = index.toString();
      var titleEl = document.createElement("span");
      titleEl.textContent = tabData.title;
      tabEl.appendChild(titleEl);
      tabBar.insertBefore(tabEl, this.addTabBtn);
      if (tabOpts.closable) {
        var closeBtn = document.createElement("span");
        closeBtn.className = "".concat(_types.LIBRARY_NAME, "-tab-close-btn");
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          var indexToClose = _this6.tabs.findIndex(function (t) {
            return t.tabEl === tabEl;
          });
          if (indexToClose !== -1) {
            _this6.closeTab(indexToClose);
          }
        });
        tabEl.appendChild(closeBtn);
      }
      var tabContentEl = document.createElement("div");
      tabContentEl.className = "".concat(_types.LIBRARY_NAME, "-tab-content");
      this.contentEl.appendChild(tabContentEl);
      this.renderContent(tabContentEl, tabData.content);
      tabEl.addEventListener("click", function (e) {
        _this6.activateTab(+tabEl.dataset.tabId);
      });
      this.tabs.splice(index, 0, {
        tabEl: tabEl,
        contentEl: tabContentEl
      });
      if (tabOpts.reorderable) {
        this.makeTabReorderable(tabEl);
      }
    }
  }, {
    key: "makeTabReorderable",
    value: function makeTabReorderable(tabEl) {
      var _this7 = this;
      tabEl.draggable = true;
      tabEl.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", tabEl.dataset.tabId);
        tabEl.classList.add("dragging");
        if (_this7.options.tabOptions.detachable) {
          var tabIndex = parseInt(tabEl.dataset.tabId, 10);
          if (!isNaN(tabIndex) && _this7.options.tabs[tabIndex]) {
            var tabData = _this7.options.tabs[tabIndex];
            e.dataTransfer.setData("application/winlet-tab", JSON.stringify(tabData));
            e.dataTransfer.setData("application/winlet-source-window-id", _this7.id);
            _this7.manager.onTabDragStart(_this7.id);
          }
        }
      });
      tabEl.addEventListener("dragend", function () {
        tabEl.classList.remove("dragging");
        _this7.manager.onTabDragEnd();
      });
      tabEl.addEventListener("dragover", function (e) {
        var _this7$manager$draggi;
        if (((_this7$manager$draggi = _this7.manager.draggingTabInfo) === null || _this7$manager$draggi === void 0 ? void 0 : _this7$manager$draggi.sourceWindowId) !== _this7.id) {
          return;
        }
        e.preventDefault();
        var draggingEl = document.querySelector(".".concat(_types.LIBRARY_NAME, "-tab.dragging"));
        if (draggingEl && draggingEl !== tabEl) {
          var rect = tabEl.getBoundingClientRect();
          var isAfter = e.clientX > rect.left + rect.width / 2;
          var parent = tabEl.parentNode;
          if (isAfter) {
            parent.insertBefore(draggingEl, tabEl.nextSibling);
          } else {
            parent.insertBefore(draggingEl, tabEl);
          }
        }
      }, {
        passive: false
      });
      tabEl.addEventListener("drop", function (e) {
        e.preventDefault();
      }, {
        passive: false
      });
    }
  }, {
    key: "closeTab",
    value: function closeTab(index) {
      var _this$tabs$index;
      var wasActive = (_this$tabs$index = this.tabs[index]) === null || _this$tabs$index === void 0 ? void 0 : _this$tabs$index.tabEl.classList.contains("active");
      this.tabs[index].tabEl.remove();
      this.tabs[index].contentEl.remove();
      this.tabs.splice(index, 1);
      this.options.tabs.splice(index, 1);
      this.tabs.forEach(function (tab, i) {
        return tab.tabEl.dataset.tabId = i.toString();
      });
      if (this.tabs.length > 0) {
        if (wasActive) {
          var newActiveIndex = Math.max(0, index - 1);
          this.activateTab(newActiveIndex);
        }
      } else {
        this.close();
      }
    }
  }, {
    key: "activateTab",
    value: function activateTab(index) {
      this.tabs.forEach(function (tab, i) {
        tab.tabEl.classList.toggle("active", i === index);
        tab.contentEl.classList.toggle("active", i === index);
      });
    }
  }, {
    key: "addTab",
    value: function addTab(tabItem) {
      var setActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.options.tabs.push(tabItem);
      var newIndex = this.options.tabs.length - 1;
      this.createTabElement(tabItem, newIndex);
      if (setActive) {
        this.activateTab(newIndex);
        this.focus();
      }
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this.tabs;
    }
  }, {
    key: "updateTabOrderFromDOM",
    value: function updateTabOrderFromDOM() {
      var tabElements = Array.from(this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-tab-bar > .").concat(_types.LIBRARY_NAME, "-tab")));
      var newTabs = [];
      var newOptionsTabs = [];
      var oldTabs = (0, _toConsumableArray2["default"])(this.tabs);
      var oldOptionsTabs = (0, _toConsumableArray2["default"])(this.options.tabs);
      tabElements.forEach(function (tabEl) {
        var oldIndex = oldTabs.findIndex(function (t) {
          return t.tabEl === tabEl;
        });
        if (oldIndex !== -1) {
          newTabs.push(oldTabs[oldIndex]);
          newOptionsTabs.push(oldOptionsTabs[oldIndex]);
        }
      });
      this.tabs = newTabs;
      this.options.tabs = newOptionsTabs;
      this.tabs.forEach(function (tab, i) {
        return tab.tabEl.dataset.tabId = i.toString();
      });
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this8 = this;
      this.el.addEventListener("click", function () {
        return _this8.focus();
      }, true);
      this.el.addEventListener("focusin", function () {
        return _this8.focus();
      });
      this.boundGlobalClickHandler = function () {
        if (_this8.isMenuOpen) {
          _this8.closeAllMenus();
        }
      };
      document.addEventListener("click", this.boundGlobalClickHandler);
      var closeBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-close-btn"));
      closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (_this8.options._isPopup) {
          var _this8$popupCloseCall;
          (_this8$popupCloseCall = _this8.popupCloseCallback) === null || _this8$popupCloseCall === void 0 || _this8$popupCloseCall.call(_this8, _types.CLOSE_BUTTON_RESULT);
        }
        _this8.close();
      });
      var maxBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
      maxBtn === null || maxBtn === void 0 || maxBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        _this8.toggleMaximize();
      });
      var minBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-minimize-btn"));
      minBtn === null || minBtn === void 0 || minBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        _this8.minimize();
      });
      if (this.options.movable) this.makeMovable();
      if (this.options.resizableX || this.options.resizableY) this.makeResizable();
      if (this.options.contextMenu.length > 0) {
        this.el.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          _this8.manager.showContextMenu(e.clientX, e.clientY, _this8.options.contextMenu, _this8);
        }, {
          passive: false
        });
        this.el.addEventListener("pointerdown", function (e) {
          if (e.pointerType !== "touch") return;
          _this8.contextMenuTimer = window.setTimeout(function () {
            _this8.contextMenuTimer = null;
            _this8.manager.showContextMenu(e.clientX, e.clientY, _this8.options.contextMenu, _this8);
          }, _this8.MOBILE_CONTEXT_MENU_TIMEOUT);
        });
        var clearContextMenuTimer = function clearContextMenuTimer() {
          if (_this8.contextMenuTimer) {
            clearTimeout(_this8.contextMenuTimer);
            _this8.contextMenuTimer = null;
          }
        };
        this.el.addEventListener("pointermove", clearContextMenuTimer);
        this.el.addEventListener("pointerup", clearContextMenuTimer);
        this.el.addEventListener("pointercancel", clearContextMenuTimer);
      }
    }
  }, {
    key: "makeMovable",
    value: function makeMovable() {
      var _this9 = this;
      var onPointerDown = function onPointerDown(e) {
        var target = e.target;
        if (target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-resize-handle, .").concat(_types.LIBRARY_NAME, "-menu-item, .").concat(_types.LIBRARY_NAME, "-tab, .").concat(_types.LIBRARY_NAME, "-tab-add-btn"))) {
          return;
        }
        if (e.button !== 0) return;
        e.preventDefault();
        _this9.focus();
        var startX = e.clientX,
          startY = e.clientY;
        var isDragging = false;
        var initialLeft;
        var initialTop;
        var ghostEl = null;
        if (_this9.options.useGhostWindow) {
          var _this9$manager$contai;
          ghostEl = document.createElement("div");
          ghostEl.className = "".concat(_types.LIBRARY_NAME, "-ghost-window");
          (_this9$manager$contai = _this9.manager.container) === null || _this9$manager$contai === void 0 || _this9$manager$contai.appendChild(ghostEl);
          ghostEl.style.left = "".concat(_this9.el.offsetLeft, "px");
          ghostEl.style.top = "".concat(_this9.el.offsetTop, "px");
          ghostEl.style.width = "".concat(_this9.el.offsetWidth, "px");
          ghostEl.style.height = "".concat(_this9.el.offsetHeight, "px");
        }
        _this9.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-dragging"));
        var onPointerMove = function onPointerMove(moveE) {
          var _this9$el;
          if (!((_this9$el = _this9.el) !== null && _this9$el !== void 0 && _this9$el.isConnected)) return;
          if (!isDragging) {
            var deltaX = Math.abs(moveE.clientX - startX);
            var deltaY = Math.abs(moveE.clientY - startY);
            if (deltaX > _this9.DRAG_THRESHOLD || deltaY > _this9.DRAG_THRESHOLD) {
              isDragging = true;
              _this9.el.setPointerCapture(e.pointerId);
              _this9.contentEl.style.pointerEvents = "none";
              if (_this9.state === "maximized") {
                var restoredWidth = _this9.lastState.width;
                var clickRatio = e.clientX / _this9.el.offsetWidth;
                var titleBarRect = _this9.titleBarEl.getBoundingClientRect();
                var offsetY = e.clientY - titleBarRect.top;
                var posX = e.clientX - restoredWidth * clickRatio;
                var posY = e.clientY - offsetY;
                _this9.restore();
                _this9.setPosition(posX, posY);
              }
              initialLeft = _this9.el.offsetLeft;
              initialTop = _this9.el.offsetTop;
            } else {
              return;
            }
          }
          var newLeft = initialLeft + moveE.clientX - startX;
          var newTop = initialTop + moveE.clientY - startY;
          if (ghostEl) {
            ghostEl.style.left = "".concat(newLeft, "px");
            ghostEl.style.top = "".concat(newTop, "px");
          } else {
            _this9.setPosition(newLeft, newTop);
          }
        };
        var onPointerUp = function onPointerUp() {
          document.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("pointerup", onPointerMove);
          if (ghostEl) {
            _this9.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
            ghostEl.remove();
          }
          if (isDragging) {
            _this9.el.releasePointerCapture(e.pointerId);
            _this9.contentEl.style.pointerEvents = "auto";
            _this9.options.onMove(_this9);
          }
          _this9.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-dragging"));
        };
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
      };
      this.titleBarEl.addEventListener("pointerdown", onPointerDown, {
        passive: false
      });
      if (this.options.maximizable) {
        this.titleBarEl.addEventListener("dblclick", function (e) {
          if (_this9.options.maximizableOnDblClick) {
            var target = e.target;
            if (target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-menu-item, .").concat(_types.LIBRARY_NAME, "-tab"))) {
              return;
            }
            _this9.toggleMaximize();
          }
        });
      }
    }
  }, {
    key: "makeResizable",
    value: function makeResizable() {
      var _this0 = this;
      this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-resize-handle")).forEach(function (handle) {
        handle.addEventListener("pointerdown", function (e) {
          if (e.button !== 0 || !(handle !== null && handle !== void 0 && handle.isConnected)) return;
          e.preventDefault();
          e.stopPropagation();
          _this0.focus();
          _this0.contentEl.style.pointerEvents = "none";
          handle.setPointerCapture(e.pointerId);
          _this0.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-resizing"));
          var ghostEl = null;
          if (_this0.options.useGhostWindow) {
            var _this0$manager$contai;
            ghostEl = document.createElement("div");
            ghostEl.className = "".concat(_types.LIBRARY_NAME, "-ghost-window");
            (_this0$manager$contai = _this0.manager.container) === null || _this0$manager$contai === void 0 || _this0$manager$contai.appendChild(ghostEl);
          }
          var direction = handle.className.replace("".concat(_types.LIBRARY_NAME, "-resize-handle "), "");
          var startX = e.clientX,
            startY = e.clientY;
          var _this0$el = _this0.el,
            startWidth = _this0$el.offsetWidth,
            startHeight = _this0$el.offsetHeight,
            startLeft = _this0$el.offsetLeft,
            startTop = _this0$el.offsetTop;
          var _this0$options = _this0.options,
            minWidth = _this0$options.minWidth,
            minHeight = _this0$options.minHeight;
          var onPointerMove = function onPointerMove(moveE) {
            var newWidth = startWidth,
              newHeight = startHeight,
              newLeft = startLeft,
              newTop = startTop;
            var deltaX = moveE.clientX - startX;
            var deltaY = moveE.clientY - startY;
            if (direction.includes("e")) newWidth = Math.max(minWidth, startWidth + deltaX);
            if (direction.includes("w")) {
              newWidth = Math.max(minWidth, startWidth - deltaX);
              newLeft = startLeft + deltaX;
            }
            if (direction.includes("s")) newHeight = Math.max(minHeight, startHeight + deltaY);
            if (direction.includes("n")) {
              newHeight = Math.max(minHeight, startHeight - deltaY);
              newTop = startTop + deltaY;
            }
            if (ghostEl) {
              ghostEl.style.left = "".concat(newLeft, "px");
              ghostEl.style.top = "".concat(newTop, "px");
              ghostEl.style.width = "".concat(newWidth, "px");
              ghostEl.style.height = "".concat(newHeight, "px");
            } else {
              _this0.setSize(newWidth, newHeight);
              _this0.setPosition(newLeft, newTop);
            }
          };
          var _onPointerUp = function onPointerUp() {
            handle.releasePointerCapture(e.pointerId);
            _this0.contentEl.style.pointerEvents = "auto";
            if (ghostEl) {
              _this0.setSize(ghostEl.offsetWidth, ghostEl.offsetHeight);
              _this0.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
              ghostEl.remove();
            }
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", _onPointerUp);
            _this0.options.onResize(_this0);
            _this0.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-resizing"));
          };
          document.addEventListener("pointermove", onPointerMove);
          document.addEventListener("pointerup", _onPointerUp);
        }, {
          passive: false
        });
      });
    }
  }, {
    key: "isFontAwesome",
    value: function isFontAwesome(classStr) {
      var classes = classStr.trim().split(/\s+/);
      var hasPrefix = classes.some(function (c) {
        return /^fa[bslr]?$/.test(c);
      });
      var hasIcon = classes.some(function (c) {
        return /^fa-[a-z0-9-]+$/.test(c);
      });
      return hasPrefix && hasIcon;
    }
  }, {
    key: "close",
    value: function close() {
      if (this.boundGlobalClickHandler) {
        document.removeEventListener("click", this.boundGlobalClickHandler);
      }
      this.options.onClose(this);
      this.manager.destroyWindow(this.id);
    }
  }, {
    key: "minimize",
    value: function minimize() {
      var _this1 = this;
      if (this.state !== "minimized") {
        if (this.state !== "normal") this.restore();
        var doMinimize = function doMinimize() {
          _this1.state = "minimized";
          _this1.el.classList.add("minimized");
          _this1.el.classList.remove("is-minimizing");
          _this1.manager.updateTaskbarItem(_this1, "minimized");
          _this1.blur();
        };
        if (this.manager.getGlobalConfig().enableAnimations) {
          this.el.classList.add("is-minimizing");
          this.el.addEventListener("transitionend", doMinimize, {
            once: true
          });
        } else {
          doMinimize();
        }
      }
    }
  }, {
    key: "toggleMaximize",
    value: function toggleMaximize() {
      this.state === "maximized" ? this.restore() : this.maximize();
    }
  }, {
    key: "maximize",
    value: function maximize() {
      var _this10 = this;
      if (this.state !== "maximized") {
        if (this.state !== "normal") this.restore();
        this.lastState = {
          x: this.el.offsetLeft,
          y: this.el.offsetTop,
          width: this.el.offsetWidth,
          height: this.el.offsetHeight
        };
        this.state = "maximized";
        this.el.classList.add("maximized");
        var doMaximize = function doMaximize() {
          _this10.el.classList.remove("is-maximizing");
          _this10.setPosition(0, 0);
          _this10.setSize("100%", "100%");
        };
        if (this.manager.getGlobalConfig().enableAnimations) {
          this.el.classList.add("is-maximizing");
          this.el.style.top = "0px";
          this.el.style.left = "0px";
          this.el.style.width = "100%";
          this.el.style.height = "100%";
          this.el.addEventListener("transitionend", doMaximize, {
            once: true
          });
        } else {
          doMaximize();
        }
        var maxBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
        if (maxBtn) {
          maxBtn.title = "Restore";
          maxBtn.value = "\u274F";
        }
      }
    }
  }, {
    key: "restore",
    value: function restore() {
      var _this11 = this;
      var wasMinimized = this.state === "minimized";
      if (this.state === "minimized") {
        this.state = "normal";
        this.el.classList.remove("minimized");
        this.manager.updateTaskbarItem(this, "restored");
        this.focus();
      } else if (this.state === "maximized") {
        var doRestore = function doRestore() {
          _this11.state = "normal";
          _this11.el.classList.remove("maximized", "is-restoring");
          var maxBtn = _this11.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
          if (maxBtn) {
            maxBtn.title = "Maximize";
            maxBtn.value = "\u25A1";
          }
        };
        if (this.manager.getGlobalConfig().enableAnimations && !wasMinimized) {
          this.el.classList.add("is-restoring");
          this.setSize(this.lastState.width, this.lastState.height);
          this.setPosition(this.lastState.x, this.lastState.y);
          this.el.addEventListener("transitionend", doRestore, {
            once: true
          });
        } else {
          this.setSize(this.lastState.width, this.lastState.height);
          this.setPosition(this.lastState.x, this.lastState.y);
          doRestore();
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.focused) return;
      if (this.parentWindow) {
        this.parentWindow.focus();
      }
      this.manager.focusWindow(this);
      this.focused = true;
      this.el.classList.add("active");
      this.options.onFocus(this);
    }
  }, {
    key: "blur",
    value: function blur() {
      if (!this.focused) return;
      this.focused = false;
      this.el.classList.remove("active");
      this.options.onBlur(this);
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this12 = this;
      if (this.options.onReload(this) === false) {
        return;
      }
      var reloadContent = function reloadContent(container, content) {
        if (_utils["default"].isNonEmptyObject(content.iframe) && (content.iframe.src || content.iframe.srcdoc)) {
          var iframe = container.querySelector("iframe");
          if (iframe && iframe.src && !content.iframe.srcdoc) {
            try {
              var _iframe$contentWindow;
              (_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 || _iframe$contentWindow.location.reload();
            } catch (e) {
              console.warn("WinLet: Cross-origin iframe could not be reloaded directly. Recreating iframe element.", e);
              _this12.renderContent(container, content);
            }
          } else {
            _this12.renderContent(container, content);
          }
        } else {
          _this12.renderContent(container, content);
        }
      };
      if (this.options.tabs.length > 0) {
        var activeTabIndex = this.tabs.findIndex(function (tab) {
          return tab.tabEl.classList.contains("active");
        });
        if (activeTabIndex > -1) {
          var activeTab = this.tabs[activeTabIndex];
          var tabContentOptions = this.options.tabs[activeTabIndex].content;
          reloadContent(activeTab.contentEl, tabContentOptions);
        }
      } else {
        reloadContent(this.contentEl, this.options.content);
      }
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var contentContainer;
      var activeTabIndex = this.tabs.findIndex(function (tab) {
        return tab.tabEl.classList.contains("active");
      });
      if (activeTabIndex > -1) {
        contentContainer = this.tabs[activeTabIndex].contentEl;
      } else {
        contentContainer = this.contentEl;
      }
      var iframe = contentContainer.querySelector("iframe");
      return iframe || contentContainer;
    }
  }, {
    key: "getChildManager",
    value: function getChildManager() {
      if (!this.childManager) {
        var childConfig = {};
        this.childManager = new _window_manager["default"](childConfig);
        this.childManager.applyGlobalConfig({
          container: this.contentEl
        });
        this.childManager.init();
      }
      return this.childManager;
    }
  }, {
    key: "createWindow",
    value: function createWindow() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var iframe = this.contentEl.querySelector("iframe");
      if (iframe && iframe.contentWindow) {
        var message = {
          type: "winlet:createWindow",
          options: options
        };
        iframe.contentWindow.postMessage(message, "*");
        console.warn("WinLet: Window creation inside an iframe is asynchronous and does not return an instance directly.");
        return null;
      }
      var manager = this.getChildManager();
      options._parent = this;
      return manager.createWindow(options);
    }
  }, {
    key: "createPopup",
    value: function createPopup(options) {
      var manager = this.getChildManager();
      var winOptions = {
        _parent: this
      };
      return manager.popup(Object.assign(options, winOptions));
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.options.title;
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.options.title = title;
      this.titleEl.textContent = _utils["default"].sanitizeHTML(title);
      this.manager.updateTaskbarItem(this, "titleChanged");
    }
  }, {
    key: "setIcon",
    value: function setIcon(icon) {
      this.options.icon = icon;
      this.iconEl.innerHTML = "";
      if (!icon) return;
      if (this.isFontAwesome(icon)) {
        var i = document.createElement("i");
        i.className = icon;
        this.iconEl.appendChild(i);
      } else {
        var img = document.createElement("img");
        img.src = icon;
        img.alt = "window icon";
        this.iconEl.appendChild(img);
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      if (this.state === "maximized") {
        return {
          x: this.lastState.x,
          y: this.lastState.y
        };
      }
      return {
        x: this.el.offsetLeft,
        y: this.el.offsetTop
      };
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      if (!this.manager.container) {
        console.warn("WinLet Warning: setPosition called before manager is initialized.");
        return;
      }
      var parentRect = this.manager.container.getBoundingClientRect();
      var winWidth = this.el.offsetWidth;
      var winHeight = this.el.offsetHeight;
      var finalX;
      var finalY;
      switch (x) {
        case "left":
          finalX = 0;
          break;
        case "center":
          finalX = (parentRect.width - winWidth) / 2;
          break;
        case "right":
          finalX = parentRect.width - winWidth;
          break;
        default:
          finalX = x;
          break;
      }
      switch (y) {
        case "top":
          finalY = 0;
          break;
        case "center":
          finalY = (parentRect.height - winHeight) / 2;
          break;
        case "bottom":
          finalY = parentRect.height - winHeight;
          break;
        default:
          finalY = y;
          break;
      }
      this.el.style.left = "".concat(Math.min(Math.max(150 - winWidth, finalX), parentRect.width - 150), "px");
      this.el.style.top = "".concat(Math.min(Math.max(0, finalY), parentRect.height - 50), "px");
    }
  }, {
    key: "getSize",
    value: function getSize() {
      if (this.state === "maximized") {
        return {
          width: this.lastState.width,
          height: this.lastState.height
        };
      }
      return {
        width: this.el.offsetWidth,
        height: this.el.offsetHeight
      };
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.el.style.width = typeof width === "number" ? "".concat(width, "px") : width;
      this.el.style.height = typeof height === "number" ? "".concat(height, "px") : height;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (typeof options.title === "string") {
        this.setTitle(options.title);
      }
      if (typeof options.icon === "string" || options.icon === null) {
        this.setIcon(options.icon);
      }
      if (typeof options.alwaysOnTop === "boolean") {
        this.options.alwaysOnTop = options.alwaysOnTop;
        this.el.classList.toggle("".concat(_types.LIBRARY_NAME, "-always-on-top"), this.options.alwaysOnTop);
        this.focus();
      }
      if (typeof options.useGhostWindow === "boolean") {
        this.options.useGhostWindow = options.useGhostWindow;
      }
    }
  }]);
}(_baseclass["default"]);

},{"../const/config":27,"../const/errors":28,"../const/types":29,"../libs/baseclass":33,"../libs/utils":34,"./window_manager":31,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/interopRequireDefault":11,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/toConsumableArray":21}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _config = require("../const/config");
var _errors = require("../const/errors");
var _types = require("../const/types");
var _baseclass = _interopRequireDefault(require("../libs/baseclass"));
var _utils = _interopRequireDefault(require("../libs/utils"));
var _styles = _interopRequireDefault(require("../style/styles"));
var _dark = require("../style/themes/dark");
var _default = require("../style/themes/default");
var _window2 = _interopRequireDefault(require("./window"));
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var WindowManager = exports["default"] = function (_WinLetBaseClass) {
  function WindowManager(initialConfig) {
    var _this;
    (0, _classCallCheck2["default"])(this, WindowManager);
    _this = _callSuper(this, WindowManager);
    (0, _defineProperty2["default"])(_this, "container", null);
    (0, _defineProperty2["default"])(_this, "windows", new Map());
    (0, _defineProperty2["default"])(_this, "zIndexCounter", 1000);
    (0, _defineProperty2["default"])(_this, "zIndexCounterOnTop", 50000);
    (0, _defineProperty2["default"])(_this, "activeWindow", null);
    (0, _defineProperty2["default"])(_this, "contextMenuEl", null);
    (0, _defineProperty2["default"])(_this, "_isInitialized", false);
    (0, _defineProperty2["default"])(_this, "lastAutoPosition", null);
    (0, _defineProperty2["default"])(_this, "lastPopupPosition", null);
    (0, _defineProperty2["default"])(_this, "CASCADE_OFFSET", 30);
    (0, _defineProperty2["default"])(_this, "draggingTabInfo", null);
    (0, _defineProperty2["default"])(_this, "taskbarEl", null);
    (0, _defineProperty2["default"])(_this, "themes", new Map());
    (0, _defineProperty2["default"])(_this, "activeTheme", null);
    (0, _defineProperty2["default"])(_this, "boundTabPressHandler", null);
    _this.globalConfig = initialConfig;
    _this.registerTheme(_default.defaultTheme);
    _this.registerTheme(_dark.darkTheme);
    return _this;
  }
  (0, _inherits2["default"])(WindowManager, _WinLetBaseClass);
  return (0, _createClass2["default"])(WindowManager, [{
    key: "isInitialized",
    get: function get() {
      return this._isInitialized;
    }
  }, {
    key: "applyGlobalConfig",
    value: function applyGlobalConfig(options) {
      Object.assign(this.globalConfig, options);
    }
  }, {
    key: "getGlobalConfig",
    value: function getGlobalConfig() {
      return this.globalConfig;
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      if (this._isInitialized) {
        return;
      }
      var parentEl = null;
      if (typeof this.globalConfig.container === "string") {
        parentEl = document.querySelector(this.globalConfig.container);
        if (!parentEl) {
          throw new _errors.WinLetError("WinLet: The specified container \"".concat(this.globalConfig.container, "\" was not found."));
        }
      } else if (this.globalConfig.container instanceof HTMLElement) {
        parentEl = this.globalConfig.container;
      }
      if (!parentEl) {
        if (!document.body) {
          throw new _errors.WinLetError("Cannot initialize before document.body is ready. Please call WinLet.init() after DOMContentLoaded.");
        }
        parentEl = document.body;
      }
      if (!document.getElementById("".concat(_types.LIBRARY_NAME, "-styles"))) {
        var styleTag = document.createElement("style");
        styleTag.id = "".concat(_types.LIBRARY_NAME, "-styles");
        styleTag.innerHTML = this.getStyleData();
        document.head.appendChild(styleTag);
      }
      var containerEl = parentEl.querySelector(".".concat(_types.LIBRARY_NAME, "-container"));
      if (!containerEl) {
        containerEl = document.createElement("div");
        containerEl.className = "".concat(_types.LIBRARY_NAME, "-container");
        parentEl.appendChild(containerEl);
      }
      this.container = containerEl;
      if (parentEl !== document.body) {
        this.container.classList.add("".concat(_types.LIBRARY_NAME, "-is-nested"));
        var computedStyle = window.getComputedStyle(parentEl);
        if (computedStyle.position === "static") {
          parentEl.style.position = "relative";
        }
      }
      if (this.globalConfig.enableTaskbar) {
        this.createTaskbar();
      }
      if (this.globalConfig.theme) {
        this.setTheme(this.globalConfig.theme);
      } else {
        this.setTheme("Default");
      }
      window.addEventListener("blur", function () {
        return (requestAnimationFrame(function () {
            var activeEl = document.activeElement;
            if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME") {
              var winEl = activeEl.closest(".".concat(_types.LIBRARY_NAME, "-window"));
              if (winEl) {
                var win = _this2.windows.get(winEl.id);
                if (win && _this2.activeWindow !== win) {
                  win.focus();
                }
              }
            }
          })
        );
      });
      document.addEventListener("pointerdown", function () {
        return requestAnimationFrame(function () {
          var activeEl = document.activeElement;
          if ((activeEl === null || activeEl === void 0 ? void 0 : activeEl.tagName) === "IFRAME") {
            var winEl = activeEl.closest(".".concat(_types.LIBRARY_NAME, "-window"));
            if (winEl) {
              var win = _this2.windows.get(winEl.id);
              if (win && _this2.activeWindow !== win) {
                win.focus();
              }
            }
          }
        });
      }, true);
      document.addEventListener("pointerdown", function (e) {
        if (!(e.target instanceof HTMLElement) || !_this2.activeWindow || _this2.activeWindow.options.modal) {
          return;
        }
        var clickedWindow = e.target.closest(".".concat(_types.LIBRARY_NAME, "-window"));
        var clickedContextMenu = e.target.closest(".".concat(_types.LIBRARY_NAME, "-context-menu"));
        var clickedTaskbar = e.target.closest(".".concat(_types.LIBRARY_NAME, "-taskbar"));
        if (!clickedWindow && !clickedContextMenu && !clickedTaskbar) {
          var active = _this2.activeWindow;
          _this2.activeWindow = null;
          active.blur();
        }
      });
      document.addEventListener("click", function () {
        return _this2.hideContextMenu();
      });
      window.addEventListener("message", function (event) {
        if (event.data && event.data.type === "winlet:createWindow" && (0, _typeof2["default"])(event.data.options) === "object") {
          var isSourceValid = false;
          var sourceWindow = null;
          var _iterator = _createForOfIteratorHelper(_this2.windows.values()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var win = _step.value;
              var iframe = win.el.querySelector("iframe");
              if (iframe && iframe.contentWindow === event.source) {
                isSourceValid = true;
                sourceWindow = win;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (isSourceValid) {
            if (sourceWindow) {
              sourceWindow.createWindow(event.data.options);
            } else {
              _this2.createWindow(event.data.options);
            }
          } else {
            console.warn("WinLet: Untrusted source attempted to create a window.", event.origin);
          }
        }
      });
      this._isInitialized = true;
      this.setupShortcutListeners();
      this.container.addEventListener("dragover", function (e) {
        var _e$dataTransfer;
        if ((_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.types.includes("application/winlet-tab")) {
          e.preventDefault();
        }
      });
      this.container.addEventListener("drop", function (e) {
        var _e$dataTransfer2, _e$dataTransfer3, _e$dataTransfer4;
        var targetEl = e.target;
        if (targetEl.closest(".".concat(_types.LIBRARY_NAME, "-window"))) {
          return;
        }
        e.preventDefault();
        var tabDataJSON = (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.getData("application/winlet-tab");
        var sourceWindowId = (_e$dataTransfer3 = e.dataTransfer) === null || _e$dataTransfer3 === void 0 ? void 0 : _e$dataTransfer3.getData("application/winlet-source-window-id");
        var sourceTabId = (_e$dataTransfer4 = e.dataTransfer) === null || _e$dataTransfer4 === void 0 ? void 0 : _e$dataTransfer4.getData("text/plain");
        if (tabDataJSON && sourceWindowId && sourceTabId) {
          var sourceWindow = _this2.windows.get(sourceWindowId);
          if (!sourceWindow || !sourceWindow.options.tabOptions.detachable) return;
          var tabData = JSON.parse(tabDataJSON);
          var newTab = {
            title: tabData.title,
            content: tabData.content
          };
          var mergedWindowOptions = _utils["default"].deepMerge(_utils["default"].deepCopy(sourceWindow.options), {
            tabs: [newTab],
            x: e.clientX,
            y: e.clientY,
            width: sourceWindow.getSize().width,
            height: sourceWindow.getSize().height
          });
          _this2.createWindow(mergedWindowOptions);
          sourceWindow.closeTab(parseInt(sourceTabId, 10));
        }
      });
    }
  }, {
    key: "setupShortcutListeners",
    value: function setupShortcutListeners() {
      var _this3 = this;
      document.addEventListener("keydown", function (e) {
        var _targetWindow$options, _targetWindow$options2;
        if (_this3.globalConfig.windowSwitchShortcut) {
          var shortcut = _this3.parseShortcut(_this3.globalConfig.windowSwitchShortcut);
          if (e.key.toLowerCase() === shortcut.key.toLowerCase() && e.ctrlKey === shortcut.ctrl && e.altKey === shortcut.alt && e.shiftKey === shortcut.shift) {
            e.preventDefault();
            var windows = Array.from(_this3.windows.values());
            var currentIndex = _this3.activeWindow ? windows.findIndex(function (w) {
              return w === _this3.activeWindow;
            }) : -1;
            var nextIndex = (currentIndex + 1) % windows.length;
            var win = windows[nextIndex];
            if (win.state === "minimized") {
              win.restore();
            }
            win.focus();
            return;
          }
        }
        var targetWindow = _this3.activeWindow;
        if (!targetWindow || !targetWindow.options.enableShortcuts) {
          return;
        }
        if (e.ctrlKey && e.shiftKey && ((_targetWindow$options = (_targetWindow$options2 = targetWindow.options.tabs) === null || _targetWindow$options2 === void 0 ? void 0 : _targetWindow$options2.length) !== null && _targetWindow$options !== void 0 ? _targetWindow$options : 0) > 0) {
          if (e.code.startsWith("Digit")) {
            e.preventDefault();
            e.stopPropagation();
            var keyNum = parseInt(e.code.replace("Digit", ""), 10);
            var tabs = targetWindow.getTabs();
            var numTabs = tabs.length;
            var tabIndex = -1;
            if (keyNum >= 1 && keyNum <= 8) {
              tabIndex = keyNum - 1;
            } else if (keyNum === 9) {
              tabIndex = numTabs - 1;
            }
            if (tabIndex >= 0 && tabIndex < numTabs) {
              targetWindow.activateTab(tabIndex);
            }
            return;
          }
        }
        var _findAndExecShortcut = function findAndExecShortcut(menuItems) {
          var _iterator2 = _createForOfIteratorHelper(menuItems),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              if (item.shortcut) {
                var _shortcut = _this3.parseShortcut(item.shortcut);
                if (e.key.toUpperCase() === _shortcut.key.toUpperCase() && e.ctrlKey === _shortcut.ctrl && e.altKey === _shortcut.alt && e.shiftKey === _shortcut.shift) {
                  var _item$action;
                  e.preventDefault();
                  e.stopPropagation();
                  (_item$action = item.action) === null || _item$action === void 0 || _item$action.call(item, targetWindow);
                  return true;
                }
              }
              if (item.items && _findAndExecShortcut(item.items)) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return false;
        };
        _findAndExecShortcut(targetWindow.options.menu);
      }, {
        passive: false
      });
    }
  }, {
    key: "ensureInitialized",
    value: function ensureInitialized() {
      if (!this._isInitialized) {
        this.init();
      }
    }
  }, {
    key: "getStyleData",
    value: function getStyleData() {
      return _styles["default"].replace(/\$\[(\w+)\]/g, function (a, p) {
        switch (p) {
          case "prefix":
            return _types.LIBRARY_NAME;
        }
        return p;
      });
    }
  }, {
    key: "createWindow",
    value: function createWindow(options) {
      var _options$ifExists;
      this.ensureInitialized();
      var ifExists = (_options$ifExists = options.ifExists) !== null && _options$ifExists !== void 0 ? _options$ifExists : "focus";
      if (options.id && ifExists !== "create") {
        var existingWindow = this.getWindow(options.id);
        if (existingWindow) {
          if (ifExists === "prevent") {
            return existingWindow;
          }
          if (ifExists === "focus") {
            if (existingWindow.state === "minimized") {
              existingWindow.restore();
            }
            existingWindow.focus();
            return existingWindow;
          }
        }
      }
      var creationOptions = _utils["default"].deepMerge(_utils["default"].deepCopy(_config.defaultConfig), options);
      if (creationOptions.x === "auto" || creationOptions.y === "auto") {
        var winWidth = creationOptions.width;
        var winHeight = creationOptions.height;
        var containerRect = this.container.getBoundingClientRect();
        var nextX;
        var nextY;
        if (this.lastAutoPosition === null) {
          nextX = 0;
          nextY = 0;
        } else {
          nextX = this.lastAutoPosition.x + this.CASCADE_OFFSET;
          nextY = this.lastAutoPosition.y + this.CASCADE_OFFSET;
        }
        if (nextX + winWidth > containerRect.width) {
          nextX = 0;
        }
        if (nextY + winHeight > containerRect.height) {
          nextY = 0;
        }
        creationOptions.x = nextX;
        creationOptions.y = nextY;
        this.lastAutoPosition = {
          x: nextX,
          y: nextY
        };
      }
      var win = new _window2["default"](creationOptions, this);
      this.windows.set(win.id, win);
      WindowManager.allWindows.set(win.id, win);
      this.container.appendChild(win.el);
      if (this.taskbarEl) {
        this.createTaskbarItem(win);
      }
      win.setPosition(creationOptions.x, creationOptions.y);
      if (creationOptions.focus) {
        this.focusWindow(win);
        win.focus();
      } else {
        win.el.style.zIndex = "".concat(win.options.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter);
      }
      return win;
    }
  }, {
    key: "popup",
    value: function popup(options) {
      var _this4 = this;
      this.ensureInitialized();
      var buttons;
      var buttonPresets = {
        Ok: [{
          text: "OK",
          value: 1
        }],
        OkCancel: [{
          text: "OK",
          value: 1
        }, {
          text: "Cancel",
          value: 2
        }],
        Yes: [{
          text: "Yes",
          value: 6
        }],
        YesNo: [{
          text: "Yes",
          value: 6
        }, {
          text: "No",
          value: 7
        }],
        YesNoCancel: [{
          text: "Yes",
          value: 6
        }, {
          text: "No",
          value: 7
        }, {
          text: "Cancel",
          value: 2
        }],
        Retry: [{
          text: "Retry",
          value: 4
        }],
        RetryCancel: [{
          text: "Retry",
          value: 4
        }, {
          text: "Cancel",
          value: 2
        }],
        AbortRetryIgnore: [{
          text: "Abort",
          value: 3
        }, {
          text: "Retry",
          value: 4
        }, {
          text: "Ignore",
          value: 5
        }]
      };
      if (Array.isArray(options.buttons)) {
        buttons = options.buttons;
      } else {
        buttons = buttonPresets[options.buttons || "Ok"] || buttonPresets.Ok;
      }
      var timeoutId = null;
      var closeCallback = function closeCallback(result) {
        var _options$onClose;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = null;
        (_options$onClose = options.onClose) === null || _options$onClose === void 0 || _options$onClose.call(options, result);
      };
      var messageHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-popup-message\">").concat(_utils["default"].sanitizeHTML(options.message), "</div>");
      var buttonsHTML = buttons.map(function (btn, index) {
        return "<input class=\"".concat(_types.LIBRARY_NAME, "-popup-button\" data-index=\"").concat(index, "\" type=\"button\" value=\"").concat(_utils["default"].sanitizeHTML(btn.text), "\"/>");
      }).join("");
      var contentHTML = "".concat(messageHTML, "<div class=\"").concat(_types.LIBRARY_NAME, "-popup-buttons\">").concat(buttonsHTML, "</div>");
      var winOptions = {
        id: "popup-".concat(_utils["default"].generateId()),
        title: options.title || "",
        icon: options.icon,
        resizableX: false,
        resizableY: false,
        movable: true,
        closable: true,
        minimizable: false,
        maximizable: false,
        maximizableOnDblClick: false,
        enableShortcuts: false,
        content: {
          html: contentHTML
        },
        focus: options.focus,
        _isPopup: true
      };
      if (options.onFocus) winOptions.onFocus = options.onFocus;
      if (options.onBlur) winOptions.onBlur = options.onBlur;
      if (options.autoWidth) {
        var _this$container, _this$container2;
        var temp = document.createElement("span");
        temp.style.visibility = "hidden";
        temp.style.position = "absolute";
        temp.style.whiteSpace = "pre";
        temp.className = "".concat(_types.LIBRARY_NAME, "-popup-message");
        temp.innerHTML = _utils["default"].sanitizeHTML(options.message);
        (_this$container = this.container) === null || _this$container === void 0 || _this$container.appendChild(temp);
        winOptions.width = temp.offsetWidth + 80;
        (_this$container2 = this.container) === null || _this$container2 === void 0 || _this$container2.removeChild(temp);
      } else {
        winOptions.width = 300;
      }
      winOptions.height = 150;
      winOptions.x = "center";
      winOptions.y = "center";
      var win = this.createWindow(winOptions);
      var winPosition = win.getPosition();
      if (this.lastPopupPosition && this.lastPopupPosition.x === winPosition.x && this.lastPopupPosition.y === winPosition.y) {
        win.setPosition(this.lastPopupPosition.x + this.CASCADE_OFFSET, this.lastPopupPosition.y + this.CASCADE_OFFSET);
        winPosition = win.getPosition();
      }
      this.lastPopupPosition = winPosition;
      win.popupCloseCallback = closeCallback;
      win.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-popup-button")).forEach(function (button) {
        button.addEventListener("click", function () {
          var index = parseInt(button.dataset.index, 10);
          var result = buttons[index].value;
          closeCallback(result);
          win.close();
        });
      });
      if (options.timeout && options.timeout > 0) {
        timeoutId = window.setTimeout(function () {
          if (_this4.windows.has(win.id)) {
            closeCallback(_types.TIMEOUT_RESULT);
            win.close();
          }
        }, options.timeout);
      }
      return win;
    }
  }, {
    key: "destroyWindow",
    value: function destroyWindow(id) {
      this.ensureInitialized();
      var win = this.windows.get(id);
      if (win) {
        if (win.options._taskbarItem) {
          win.options._taskbarItem.remove();
        }
        if (win.options.modal) {
          this.deactivateFocusTrap();
        }
        win.el.remove();
        this.windows["delete"](id);
        WindowManager.allWindows["delete"](id);
        if (this.activeWindow === win) {
          this.activeWindow = null;
          var nextWin = Array.from(this.windows.values()).pop();
          if (nextWin) this.focusWindow(nextWin);
        }
      }
    }
  }, {
    key: "focusWindow",
    value: function focusWindow(win) {
      var _this$activeWindow, _win$options$_taskbar;
      this.ensureInitialized();
      if (this.activeWindow === win && !win.options.modal) return;
      (_this$activeWindow = this.activeWindow) === null || _this$activeWindow === void 0 || _this$activeWindow.blur();
      if (win.options.modal && this.globalConfig.enableFocusTrapping) {
        this.activateFocusTrap(win);
      } else {
        this.deactivateFocusTrap();
      }
      this.activeWindow = win;
      win.el.style.zIndex = "".concat(win.options.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter);
      this.windows.forEach(function (w) {
        var _w$options$_taskbarIt;
        return (_w$options$_taskbarIt = w.options._taskbarItem) === null || _w$options$_taskbarIt === void 0 ? void 0 : _w$options$_taskbarIt.classList.remove("active");
      });
      (_win$options$_taskbar = win.options._taskbarItem) === null || _win$options$_taskbar === void 0 || _win$options$_taskbar.classList.add("active");
    }
  }, {
    key: "getWindow",
    value: function getWindow(id) {
      this.ensureInitialized();
      return this.windows.get(id);
    }
  }, {
    key: "getWindowFromElement",
    value: function getWindowFromElement(element) {
      this.ensureInitialized();
      var winEl = element.closest(".".concat(_types.LIBRARY_NAME, "-window"));
      if (winEl !== null && winEl !== void 0 && winEl.id) {
        return WindowManager.allWindows.get(winEl.id);
      }
      return undefined;
    }
  }, {
    key: "getActiveWindow",
    value: function getActiveWindow() {
      this.ensureInitialized();
      return this.activeWindow;
    }
  }, {
    key: "onTabDragStart",
    value: function onTabDragStart(sourceWindowId) {
      var _this$container3;
      (_this$container3 = this.container) === null || _this$container3 === void 0 || _this$container3.classList.add("".concat(_types.LIBRARY_NAME, "-is-tab-dragging"));
      this.draggingTabInfo = {
        sourceWindowId: sourceWindowId
      };
    }
  }, {
    key: "onTabDragEnd",
    value: function onTabDragEnd() {
      var _this$container4;
      (_this$container4 = this.container) === null || _this$container4 === void 0 || _this$container4.classList.remove("".concat(_types.LIBRARY_NAME, "-is-tab-dragging"));
      this.draggingTabInfo = null;
    }
  }, {
    key: "showContextMenu",
    value: function showContextMenu(x, y, menuItems, contextWindow) {
      var _this5 = this;
      this.ensureInitialized();
      this.hideContextMenu();
      this.contextMenuEl = document.createElement("ul");
      this.contextMenuEl.className = "".concat(_types.LIBRARY_NAME, "-context-menu");
      menuItems.forEach(function (itemData) {
        var itemEl = document.createElement("li");
        if (itemData.separator) {
          itemEl.className = "separator";
        } else {
          var _itemData$name;
          itemEl.textContent = (_itemData$name = itemData.name) !== null && _itemData$name !== void 0 ? _itemData$name : "";
          itemEl.addEventListener("click", function (e) {
            var _itemData$action;
            e.stopPropagation();
            (_itemData$action = itemData.action) === null || _itemData$action === void 0 || _itemData$action.call(itemData, contextWindow);
            _this5.hideContextMenu();
          });
        }
        _this5.contextMenuEl.appendChild(itemEl);
      });
      this.container.appendChild(this.contextMenuEl);
      var _this$contextMenuEl = this.contextMenuEl,
        menuWidth = _this$contextMenuEl.offsetWidth,
        menuHeight = _this$contextMenuEl.offsetHeight;
      var _window = window,
        screenWidth = _window.innerWidth,
        screenHeight = _window.innerHeight;
      this.contextMenuEl.style.left = x + menuWidth > screenWidth ? "".concat(screenWidth - menuWidth, "px") : "".concat(x, "px");
      this.contextMenuEl.style.top = y + menuHeight > screenHeight ? "".concat(screenHeight - menuHeight, "px") : "".concat(y, "px");
    }
  }, {
    key: "hideContextMenu",
    value: function hideContextMenu() {
      var _this$contextMenuEl2;
      (_this$contextMenuEl2 = this.contextMenuEl) === null || _this$contextMenuEl2 === void 0 || _this$contextMenuEl2.remove();
      this.contextMenuEl = null;
    }
  }, {
    key: "registerTheme",
    value: function registerTheme(theme) {
      this.themes.set(theme.name, theme);
    }
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      var themeObj = typeof theme === "string" ? this.themes.get(theme) : theme;
      if (!themeObj) {
        console.warn("WinLet: Theme \"".concat(theme, "\" not found."));
        return;
      }
      this.activeTheme = themeObj;
      if (this.container) {
        for (var _i = 0, _Object$entries = Object.entries(themeObj.variables); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          this.container.style.setProperty(key, value);
        }
      }
    }
  }, {
    key: "createTaskbar",
    value: function createTaskbar() {
      if (!this.container) return;
      this.taskbarEl = document.createElement("div");
      this.taskbarEl.className = "".concat(_types.LIBRARY_NAME, "-taskbar");
      this.container.appendChild(this.taskbarEl);
    }
  }, {
    key: "createTaskbarItem",
    value: function createTaskbarItem(win) {
      var _this6 = this;
      if (!this.taskbarEl) return;
      var item = document.createElement("div");
      item.className = "".concat(_types.LIBRARY_NAME, "-taskbar-item");
      item.textContent = win.getTitle();
      item.title = win.getTitle();
      item.dataset.windowId = win.id;
      item.addEventListener("click", function () {
        if (win.state === "minimized") {
          win.restore();
        } else {
          if (_this6.activeWindow === win) {
            win.minimize();
          } else {
            win.focus();
          }
        }
      });
      win.options._taskbarItem = item;
      this.taskbarEl.appendChild(item);
    }
  }, {
    key: "updateTaskbarItem",
    value: function updateTaskbarItem(win, state) {
      var item = win.options._taskbarItem;
      if (!item) return;
      switch (state) {
        case "minimized":
          item.classList.add("minimized");
          break;
        case "restored":
          item.classList.remove("minimized");
          break;
        case "titleChanged":
          item.textContent = win.getTitle();
          item.title = win.getTitle();
          break;
      }
    }
  }, {
    key: "activateFocusTrap",
    value: function activateFocusTrap(win) {
      this.deactivateFocusTrap();
      this.boundTabPressHandler = function (e) {
        if (e.key === "Tab") {
          e.preventDefault();
          var focusableElements = Array.from(win.el.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter(function (el) {
            return !el.hasAttribute("disabled") && !el.closest(".minimized");
          });
          if (focusableElements.length === 0) return;
          var currentIndex = focusableElements.indexOf(document.activeElement);
          var nextIndex = e.shiftKey ? currentIndex - 1 : currentIndex + 1;
          if (nextIndex >= focusableElements.length) {
            nextIndex = 0;
          }
          if (nextIndex < 0) {
            nextIndex = focusableElements.length - 1;
          }
          focusableElements[nextIndex].focus();
        }
      };
      document.addEventListener("keydown", this.boundTabPressHandler);
    }
  }, {
    key: "deactivateFocusTrap",
    value: function deactivateFocusTrap() {
      if (this.boundTabPressHandler) {
        document.removeEventListener("keydown", this.boundTabPressHandler);
        this.boundTabPressHandler = null;
      }
    }
  }, {
    key: "parseShortcut",
    value: function parseShortcut(shortcut) {
      var keys = shortcut.split("+");
      var key = keys.pop() || "";
      var ctrl = keys.includes("Ctrl");
      var alt = keys.includes("Alt");
      var shift = keys.includes("Shift");
      return {
        ctrl: ctrl,
        alt: alt,
        shift: shift,
        key: key
      };
    }
  }]);
}(_baseclass["default"]);
(0, _defineProperty2["default"])(WindowManager, "allWindows", new Map());

},{"../const/config":27,"../const/errors":28,"../const/types":29,"../libs/baseclass":33,"../libs/utils":34,"../style/styles":35,"../style/themes/dark":36,"../style/themes/default":37,"./window":30,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/interopRequireDefault":11,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/slicedToArray":20,"@babel/runtime/helpers/typeof":24}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = require("./const/config");
var _types = require("./const/types");
var _window_manager = _interopRequireDefault(require("./function/window_manager"));
var _utils = _interopRequireDefault(require("./libs/utils"));
var _version = require("./version");
var _document;
var selfUrl = ((_document = document) === null || _document === void 0 || (_document = _document.currentScript) === null || _document === void 0 ? void 0 : _document.src) || "";
var globalConfig = {
  windowSwitchShortcut: "Ctrl+`",
  libraryPath: selfUrl
};
var manager = new _window_manager["default"](globalConfig);
var api = {
  init: function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    api.setGlobalConfig(options);
    manager.init();
  },
  createWindow: function createWindow() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return manager.createWindow(options);
  },
  createPopup: function createPopup(options) {
    return manager.popup(options);
  },
  getWindow: function getWindow(id) {
    return manager.getWindow(id);
  },
  getWindowFromElement: function getWindowFromElement(element) {
    return manager.getWindowFromElement(element);
  },
  getActiveWindow: function getActiveWindow() {
    return manager.getActiveWindow();
  },
  setDefaultConfig: function setDefaultConfig(options) {
    _utils["default"].deepMerge(_config.defaultConfig, options);
  },
  setGlobalConfig: function setGlobalConfig(options) {
    if (manager.isInitialized && options.container) {
      console.warn("WinLet: The container cannot be changed after initialization.");
      delete options.container;
    }
    Object.assign(globalConfig, options);
    manager.applyGlobalConfig(globalConfig);
  },
  setTheme: function setTheme(theme) {
    manager.setTheme(theme);
  },
  get version() {
    return _version.LIB_VERSION;
  },
  POPUP_TIMEOUT_RESULT: _types.TIMEOUT_RESULT,
  POPUP_CLOSE_BUTTON_RESULT: _types.CLOSE_BUTTON_RESULT
};
if (typeof window !== "undefined") {
  window.WinLet = api;
}
var _default = exports["default"] = api;

},{"./const/config":27,"./const/types":29,"./function/window_manager":31,"./libs/utils":34,"./version":38,"@babel/runtime/helpers/interopRequireDefault":11}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var WinLetBaseClass = exports["default"] = (0, _createClass2["default"])(function WinLetBaseClass() {
  (0, _classCallCheck2["default"])(this, WinLetBaseClass);
});

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":11}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _baseclass = _interopRequireDefault(require("./baseclass"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Utils = exports["default"] = function (_WinLetBaseClass) {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
    return _callSuper(this, Utils, arguments);
  }
  (0, _inherits2["default"])(Utils, _WinLetBaseClass);
  return (0, _createClass2["default"])(Utils, null, [{
    key: "generateId",
    value: function generateId() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "win";
      return "".concat(prefix, "-").concat(Math.random().toString(36).substring(2, 9));
    }
  }, {
    key: "deepCopy",
    value: function deepCopy(value) {
      var _this = this;
      var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
      if (value === null || (0, _typeof2["default"])(value) !== "object") return value;
      if (value instanceof Date) return new Date(value.getTime());
      if (value instanceof Map) {
        var copiedMap = new Map();
        value.forEach(function (v, k) {
          copiedMap.set(_this.deepCopy(k, seen), _this.deepCopy(v, seen));
        });
        return copiedMap;
      }
      if (value instanceof Set) {
        var copiedSet = new Set();
        value.forEach(function (v) {
          copiedSet.add(_this.deepCopy(v, seen));
        });
        return copiedSet;
      }
      if (Array.isArray(value)) {
        if (seen.has(value)) return seen.get(value);
        var arrCopy = [];
        seen.set(value, arrCopy);
        var _iterator = _createForOfIteratorHelper(value),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            arrCopy.push(this.deepCopy(item, seen));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return arrCopy;
      }
      if (seen.has(value)) return seen.get(value);
      var copiedObj = {};
      seen.set(value, copiedObj);
      for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          copiedObj[key] = this.deepCopy(value[key], seen);
        }
      }
      return copiedObj;
    }
  }, {
    key: "deepMerge",
    value: function deepMerge(target, source) {
      var output = _objectSpread({}, target);
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          var sourceValue = source[key];
          var targetValue = target[key];
          if (Array.isArray(sourceValue)) {
            output[key] = sourceValue;
          } else if (sourceValue instanceof Object && typeof sourceValue !== "function" && targetValue instanceof Object) {
            output[key] = this.deepMerge(targetValue, sourceValue);
          } else {
            output[key] = sourceValue;
          }
        }
      }
      return output;
    }
  }, {
    key: "isNonEmptyObject",
    value: function isNonEmptyObject(obj) {
      if (!obj) return false;
      for (var _ in obj) return true;
      return false;
    }
  }, {
    key: "sanitizeHTML",
    value: function sanitizeHTML(str) {
      var temp = document.createElement("div");
      temp.textContent = str;
      return temp.innerHTML;
    }
  }]);
}(_baseclass["default"]);

},{"./baseclass":33,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/interopRequireDefault":11,"@babel/runtime/helpers/possibleConstructorReturn":18,"@babel/runtime/helpers/typeof":24}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var styleData = "\n:root {\n    --$[prefix]-bg: #f0f0f0;\n    --$[prefix]-border: #a0a0a0;\n    --$[prefix]-title-bar-height: 32px;\n    --$[prefix]-title-bar-bg: #e0e0e0;\n    --$[prefix]-title-bar-active-bg: #0078d7;\n    --$[prefix]-title-text-color: #000;\n    --$[prefix]-title-text-active-color: #fff;\n    --$[prefix]-control-bg: #d0d0d0;\n    --$[prefix]-control-hover-bg: #e5e5e5;\n    --$[prefix]-control-close-hover-bg: #e81123;\n    --$[prefix]-control-close-hover-color: #fff;\n    --$[prefix]-menu-bg: #fff;\n    --$[prefix]-menu-border: #ccc;\n    --$[prefix]-menu-item-color: #000;\n    --$[prefix]-menu-item-hover-bg: #0078d7;\n    --$[prefix]-menu-item-hover-color: #fff;\n    --$[prefix]-tab-bg: #dcdcdc;\n    --$[prefix]-tab-active-bg: #f0f0f0;\n    --$[prefix]-tab-border: #b0b0b0;\n    --$[prefix]-resize-handle-size: 8px;\n    --$[prefix]-resize-handle-offset: -4px;\n    --$[prefix]-taskbar-bg: rgba(240, 240, 240, 0.9);\n    --$[prefix]-taskbar-border: #a0a0a0;\n    --$[prefix]-taskbar-item-bg: #d0d0d0;\n    --$[prefix]-taskbar-item-active-bg: #0078d7;\n    --$[prefix]-taskbar-item-active-color: #fff;\n}\n\n.$[prefix]-us-none {\n    user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\n.$[prefix]-us-auto {\n    user-select: auto;\n    -webkit-user-select: auto;\n    -ms-user-select: auto;\n}\n\n\n.$[prefix]-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    overflow: hidden;\n    z-index: 999;\n}\n\n.$[prefix]-container.$[prefix]-is-nested {\n    position: absolute;\n}\n\n.$[prefix]-container.$[prefix]-is-tab-dragging {\n    pointer-events: auto;\n}\n\n.$[prefix]-window {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    min-height: 150px;\n    border: 1px solid var(--$[prefix]-border);\n    background-color: var(--$[prefix]-bg);\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n    border-radius: 5px;\n    overflow: hidden;\n    pointer-events: all;\n    transition: opacity 0.2s, transform 0.2s, top 0.25s ease-in-out, left 0.25s ease-in-out, width 0.25s ease-in-out, height 0.25s ease-in-out; /* transition\u3092\u66F4\u65B0 */\n    touch-action: none;\n}\n\n.$[prefix]-window.$[prefix]-is-dragging,\n.$[prefix]-window.$[prefix]-is-resizing {\n    transition: opacity 0.1s, transform 0.1s;\n}\n\n.$[prefix]-window.minimized {\n    transform: scale(0.5);\n    opacity: 0;\n    transition: opacity 0.25s, transform 0.25s;\n}\n\n.$[prefix]-window.maximized {\n    transition: top 0.25s ease-in-out, left 0.25s ease-in-out, width 0.25s ease-in-out, height 0.25s ease-in-out;\n}\n\n.$[prefix]-window.maximized > .$[prefix]-resize-handle {\n    display: none;\n}\n\n.$[prefix]-window.is-restoring {\n    transition: top 0.25s ease-in-out, left 0.25s ease-in-out, width 0.25s ease-in-out, height 0.25s ease-in-out;\n}\n\n/* \u5E38\u306B\u624B\u524D\u306B\u8868\u793A */\n.$[prefix]-window.always-on-top .$[prefix]-title-bar {\n    background-image: repeating-linear-gradient(\n        -45deg,\n        transparent,\n        transparent 4px,\n        rgba(255, 255, 255, 0.05) 4px,\n        rgba(255, 255, 255, 0.05) 8px\n    );\n}\n\n/* --- \u30B4\u30FC\u30B9\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6 --- */\n.$[prefix]-ghost-window {\n    position: absolute;\n    box-sizing: border-box;\n    border: 2px dashed var(--$[prefix]-title-bar-active-bg);\n    background-color: rgba(0, 120, 215, 0.1);\n    z-index: 99999;\n    pointer-events: none;\n}\n\n/* Focus State */\n.$[prefix]-window.active .$[prefix]-title-bar {\n    background-color: var(--$[prefix]-title-bar-active-bg);\n    color: var(--$[prefix]-title-text-active-color);\n}\n.$[prefix]-window.active .$[prefix]-title-bar .$[prefix]-title {\n    color: var(--$[prefix]-title-text-active-color);\n}\n\n.$[prefix]-title-bar {\n    display: flex;\n    align-items: center;\n    height: var(--$[prefix]-title-bar-height);\n    background-color: var(--$[prefix]-title-bar-bg);\n    color: var(--$[prefix]-title-text-color);\n    cursor: move;\n    flex-shrink: 0;\n    touch-action: none;\n}\n\n.$[prefix]-title-bar.controls-left {\n    flex-direction: row-reverse;\n}\n\n.$[prefix]-icon {\n    min-width: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    margin: 0 4px;\n    pointer-events: none;\n    flex-shrink: 0;\n}\n\n.$[prefix]-icon:empty {\n    display: none;\n}\n\n.$[prefix]-icon i {\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n    line-height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    text-align: center;\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.$[prefix]-icon img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.$[prefix]-title {\n    flex-grow: 1;\n    padding: 0 8px;\n    font-family: sans-serif;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.44);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n\n.$[prefix]-title-bar.controls-left .$[prefix]-title {\n    text-align: right;\n}\n\n.$[prefix]-controls {\n    display: flex;\n    height: 100%;\n    margin-left: auto;\n    flex-shrink: 0;\n}\n\n.$[prefix]-title-bar.controls-left .$[prefix]-controls {\n    margin-left: 0;\n    margin-right: auto;\n    flex-direction: row-reverse;\n}\n\n.$[prefix]-control-btn {\n    width: calc(var(--$[prefix]-title-bar-height) * 1.3);\n    height: 100%;\n    border: none;\n    box-sizing: border-box;\n    background-color: transparent;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n    cursor: pointer;\n    text-align: center;\n    vertical-align: middle;\n    font-family: sans-serif;\n    transition: background-color 0.2s;\n    touch-action: auto;\n}\n\n.$[prefix]-control-btn:hover {\n    background-color: var(--$[prefix]-control-hover-bg);\n}\n\n.$[prefix]-control-btn.$[prefix]-close-btn:hover {\n    background-color: var(--$[prefix]-control-close-hover-bg);\n    color: var(--$[prefix]-control-close-hover-color);\n}\n\n.$[prefix]-main-content {\n    all: initial;\n    display:flex;\n    flex-direction:column;\n    flex-grow:1;\n    overflow:hidden;\n}\n\n.$[prefix]-menu-bar {\n    color: var(--$[prefix]-menu-item-color);\n    display: flex;\n    background-color: var(--$[prefix]-bg);\n    padding: 2px;\n    flex-shrink: 0;\n    border-bottom: 1px solid var(--$[prefix]-border);\n    touch-action: auto;\n}\n\n.$[prefix]-menu-item {\n    font-family: sans-serif;\n    font-size: 14px;\n    padding: 4px 8px;\n    cursor: default;\n    position: relative;\n}\n\n.$[prefix]-menu-item:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n.$[prefix]-menu-dropdown {\n    color: var(--$[prefix]-menu-item-color);\n    line-height: 1.6em;\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 150px;\n    z-index: 10;\n    touch-action: auto;\n}\n\n.$[prefix]-menu-dropdown li {\n    padding: 0 20px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.$[prefix]-menu-dropdown li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n.$[prefix]-menu-dropdown li.separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n\n.$[prefix]-menu-dropdown-item {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    width: 100%;\n    white-space: nowrap;\n}\n\n/* --- \u30E1\u30CB\u30E5\u30FC --- */\n/* \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u6301\u3064\u9805\u76EE\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-menu-dropdown li.has-submenu {\n    position: relative;\n}\n.$[prefix]-menu-dropdown li.has-submenu::after {\n    content: '\u25B6';\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    margin-top: -0.65em;\n    font-size: 0.8em;\n    color: inherit;\n}\n\n/* \u30CD\u30B9\u30C8\u3055\u308C\u305F\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306E\u8868\u793A\u4F4D\u7F6E */\n.$[prefix]-menu-dropdown li.has-submenu > .$[prefix]-menu-dropdown {\n    top: -5px; /* li\u306Epadding\u3092\u8003\u616E */\n    left: 100%;\n}\n\n/* \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306F\u30DB\u30D0\u30FC\u3067\u958B\u304F */\n.$[prefix]-menu-dropdown li.has-submenu:hover > .$[prefix]-menu-dropdown {\n    display: block;\n}\n\n/* \u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30AD\u30FC\u30C6\u30AD\u30B9\u30C8\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-shortcut-text {\n    color: #666;\n    margin-left: 1em;\n}\n.$[prefix]-menu-dropdown li:hover .$[prefix]-shortcut-text {\n    color: inherit;\n}\n\n/* --- \u30BF\u30D6 --- */\n.$[prefix]-tab-bar {\n    color: var(--$[prefix]-menu-item-color);\n    overflow-x: auto;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    scrollbar-width: thin;\n    display: flex;\n    background-color: #e1e1e1;\n    flex-shrink: 0;\n    align-items: flex-end;\n    touch-action: auto;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar{\n    width: 6px;\n    height: 6px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-thumb {\n    background-color: rgba(100, 100, 100, 0.5);\n    border-radius: 3px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-track {\n    background-color: transparent;\n}\n\n.$[prefix]-tab {\n    white-space: nowrap;\n    padding: 8px 16px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n    border-right: 1px solid var(--$[prefix]-tab-border);\n    background-color: var(--$[prefix]-tab-bg);\n}\n\n.$[prefix]-tab.active {\n    background-color: var(--$[prefix]-tab-active-bg);\n    border-bottom: 2px solid var(--$[prefix]-title-bar-active-bg);\n}\n\n.$[prefix]-tab.active .$[prefix]-tab-close-btn:hover {\n    background-color: #ddd;\n}\n\n/* \u30C9\u30E9\u30C3\u30B0\u4E2D\u306E\u30BF\u30D6\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-tab.dragging {\n    opacity: 0.5;\n}\n/* \u30BF\u30D6\u306E\u9589\u3058\u308B\u30DC\u30BF\u30F3 */\n.$[prefix]-tab-close-btn {\n    margin-left: 8px;\n    padding: 0 4px;\n    border-radius: 50%;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1;\n}\n.$[prefix]-tab-close-btn:hover {\n    background-color: #ccc;\n}\n\n.$[prefix]-tab-content {\n    display: none;\n}\n\n.$[prefix]-tab-content.active {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n/* \u30BF\u30D6\u8FFD\u52A0\u30DC\u30BF\u30F3 */\n.$[prefix]-tab-add-btn {\n    padding: 8px;\n    font-size: 14px;\n    cursor: pointer;\n    border-bottom: 1px solid var(--$[prefix]-tab-border);\n}\n.$[prefix]-tab-add-btn:hover {\n    background-color: #e0e0e0;\n}\n\n.$[prefix]-content {\n    flex-grow: 1;\n    position: relative;\n    overflow: auto;\n    touch-action: auto;\n}\n\n.$[prefix]-content iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n.$[prefix]-resize-handle {\n    position: absolute;\n    z-index: 5;\n    touch-action: none;\n}\n\n.$[prefix]-resize-handle.n { top: var(--$[prefix]-resize-handle-offset); left: 0; right: 0; height: var(--$[prefix]-resize-handle-size); cursor: n-resize; }\n.$[prefix]-resize-handle.s { bottom: var(--$[prefix]-resize-handle-offset); left: 0; right: 0; height: var(--$[prefix]-resize-handle-size); cursor: s-resize; }\n.$[prefix]-resize-handle.w { top: 0; bottom: 0; left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: w-resize; }\n.$[prefix]-resize-handle.e { top: 0; bottom: 0; right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: e-resize; }\n.$[prefix]-resize-handle.nw { top: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: nw-resize; }\n.$[prefix]-resize-handle.ne { top: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: ne-resize; }\n.$[prefix]-resize-handle.sw { bottom: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: sw-resize; }\n.$[prefix]-resize-handle.se { bottom: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: se-resize; }\n\n.$[prefix]-context-menu {\n    color: var(--$[prefix]-menu-item-color);\n    pointer-events: all;\n    position: fixed;\n    z-index: 10000;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 160px;\n}\n.$[prefix]-context-menu li {\n    padding: 6px 24px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n}\n.$[prefix]-context-menu li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n.$[prefix]-context-menu li.separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n\n/* --- Popup Styles --- */\n.$[prefix]-popup-window .$[prefix]-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px;\n    box-sizing: border-box;\n}\n.$[prefix]-popup-message {\n    font-family: sans-serif;\n    font-size: 14px;\n    line-height: 1.5;\n    flex-grow: 1;\n    word-wrap: break-word;\n}\n.$[prefix]-popup-buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    margin-top: 20px;\n    flex-shrink: 0;\n    touch-action: auto;\n}\n.$[prefix]-popup-button {\n    min-width: 80px;\n    padding: 8px 12px;\n    margin: 0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    background-color: #f0f0f0;\n    cursor: pointer;\n    font-size: 14px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n.$[prefix]-popup-button:hover {\n    border-color: #bbb;\n    background-color: #e9e9e9;\n}\n.$[prefix]-popup-button:active {\n    background-color: #dcdcdc;\n}\n\n/* --- Merged Menu/Tab Styles --- */\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title-bar,\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title-bar {\n    height: auto;\n    align-items: flex-end;\n    padding: 0;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged.$[prefix]-window.active .$[prefix]-title-bar {\n    background-color: var(--$[prefix]-title-bar-bg);\n}\n\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-icon {\n    margin-block: auto;\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title {\n    display: none;\n}\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title {\n    flex-grow: 1;\n    margin-block: auto;\n}\n\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-bar {\n    border-bottom: none;\n    background: transparent;\n    padding: 0 6px;\n    align-self: center;\n}\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-item {\n    line-height: var(--$[prefix]-title-bar-height);\n    padding-top: 0;\n    padding-bottom: 0;\n}\n\n.$[prefix]-window.$[prefix]-menu-style-merged.active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item {\n    color: var(--winlet-menu-item-hover-color);\n}\n.$[prefix]-window.$[prefix]-menu-style-merged.active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item:hover {\n    background-color: var(--$[prefix]-title-bar-bg);\n    color: var(--$[prefix]-menu-item-color);\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar {\n    background-color: transparent;\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0;\n    align-items: flex-end;\n    height: calc(var(--$[prefix]-title-bar-height) + 4px);\n    margin: 0;\n    order: 1; /* controls\u3088\u308A\u524D\u306B\u914D\u7F6E */\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar::-webkit-scrollbar{\n    width: 0px;\n    height: 0px;\n}\n\n.$[prefix]-window.$[prefix]-title-bar.controls-left .$[prefix]-tab-bar {\n    order: -1;\n}\n\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab {\n    border: 1px solid var(--$[prefix]-border);\n    border-bottom: none;\n    border-radius: 6px 6px 0 0;\n    margin-top: 4px;\n    margin-left: -1px;\n    position: relative;\n    bottom: -1px;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab.active {\n    background-color: var(--$[prefix]-bg);\n    border-color: var(--$[prefix]-border);\n    border-bottom: 1px solid var(--$[prefix]-bg);\n    z-index: 2;\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-add-btn {\n    border: none;\n    align-self: center;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-main-content {\n    border-top: none;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-controls,\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-controls {\n    align-self: flex-start;\n    order: 2;\n}\n\n/* --- \u30BF\u30B9\u30AF\u30D0\u30FC --- */\n.$[prefix]-taskbar {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 40px;\n    background-color: var(--$[prefix]-taskbar-bg);\n    border-top: 1px solid var(--$[prefix]-taskbar-border);\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    padding: 0 5px;\n    z-index: 50000;\n    gap: 5px;\n    overflow-x: auto;\n    backdrop-filter: blur(5px);\n}\n.$[prefix]-taskbar-item {\n    display: flex;\n    align-items: center;\n    height: 30px;\n    padding: 0 10px;\n    border-radius: 3px;\n    background-color: var(--$[prefix]-taskbar-item-bg);\n    cursor: pointer;\n    flex-shrink: 0;\n    max-width: 150px;\n    transition: background-color 0.2s;\n    font-family: sans-serif;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.$[prefix]-taskbar-item.active {\n    background-color: var(--$[prefix]-taskbar-item-active-bg);\n    color: var(--$[prefix]-taskbar-item-active-color);\n}\n.$[prefix]-taskbar-item.minimized {\n    opacity: 0.7;\n}\n\n/* --- Mobile / Touch Device Adjustments --- */\n@media (pointer: coarse), (max-width: 768px) {\n    :root {\n        --$[prefix]-resize-handle-size: 16px;\n        --$[prefix]-resize-handle-offset: -8px;\n    }\n    .$[prefix]-control-btn {\n        width: calc(var(--$[prefix]-title-bar-height) * 1.5);\n    }\n}\n";
var _default = exports["default"] = styleData;

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = void 0;
var darkTheme = exports.darkTheme = {
  name: "Dark",
  variables: {
    "--winlet-bg": "#2d2d2d",
    "--winlet-border": "#555",
    "--winlet-title-bar-height": "32px",
    "--winlet-title-bar-bg": "#3c3c3c",
    "--winlet-title-bar-active-bg": "#0078d7",
    "--winlet-title-text-color": "#e0e0e0",
    "--winlet-title-text-active-color": "#fff",
    "--winlet-control-bg": "#4a4a4a",
    "--winlet-control-hover-bg": "#5a5a5a",
    "--winlet-control-close-hover-bg": "#e81123",
    "--winlet-control-close-hover-color": "#fff",
    "--winlet-menu-bg": "#252525",
    "--winlet-menu-border": "#444",
    "--winlet-menu-item-color": "#e0e0e0",
    "--winlet-menu-item-hover-bg": "#0078d7",
    "--winlet-menu-item-hover-color": "#fff",
    "--winlet-tab-bg": "#383838",
    "--winlet-tab-active-bg": "#2d2d2d",
    "--winlet-tab-border": "#505050",
    "--winlet-resize-handle-size": "8px",
    "--winlet-resize-handle-offset": "-4px",
    "--winlet-taskbar-bg": "rgba(45, 45, 45, 0.9)",
    "--winlet-taskbar-border": "#555",
    "--winlet-taskbar-item-bg": "#5a5a5a",
    "--winlet-taskbar-item-active-bg": "#0078d7",
    "--winlet-taskbar-item-active-color": "#fff"
  }
};

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;
var defaultTheme = exports.defaultTheme = {
  name: "Default",
  variables: {
    "--winlet-bg": "#f0f0f0",
    "--winlet-border": "#a0a0a0",
    "--winlet-title-bar-height": "32px",
    "--winlet-title-bar-bg": "#e0e0e0",
    "--winlet-title-bar-active-bg": "#0078d7",
    "--winlet-title-text-color": "#000",
    "--winlet-title-text-active-color": "#fff",
    "--winlet-control-bg": "#d0d0d0",
    "--winlet-control-hover-bg": "#e5e5e5",
    "--winlet-control-close-hover-bg": "#e81123",
    "--winlet-control-close-hover-color": "#fff",
    "--winlet-menu-bg": "#fff",
    "--winlet-menu-border": "#ccc",
    "--winlet-menu-item-color": "#000",
    "--winlet-menu-item-hover-bg": "#0078d7",
    "--winlet-menu-item-hover-color": "#fff",
    "--winlet-tab-bg": "#dcdcdc",
    "--winlet-tab-active-bg": "#f0f0f0",
    "--winlet-tab-border": "#b0b0b0",
    "--winlet-resize-handle-size": "8px",
    "--winlet-resize-handle-offset": "-4px",
    "--winlet-taskbar-bg": "rgba(240, 240, 240, 0.9)",
    "--winlet-taskbar-border": "#a0a0a0",
    "--winlet-taskbar-item-bg": "#d0d0d0",
    "--winlet-taskbar-item-active-bg": "#0078d7",
    "--winlet-taskbar-item-active-color": "#fff"
  }
};

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIB_VERSION = void 0;
var LIB_VERSION = exports.LIB_VERSION = "v1.0.1.1";

},{}]},{},[32])
//# sourceMappingURL=winlet.js.map
