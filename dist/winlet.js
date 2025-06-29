(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
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
},{"./isNativeReflectConstruct.js":10,"./setPrototypeOf.js":12}],4:[function(require,module,exports){
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
},{"./toPropertyKey.js":14}],5:[function(require,module,exports){
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
},{"./toPropertyKey.js":14}],6:[function(require,module,exports){
function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],7:[function(require,module,exports){
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
},{"./setPrototypeOf.js":12}],8:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],9:[function(require,module,exports){
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[function(require,module,exports){
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],11:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":1,"./typeof.js":15}],12:[function(require,module,exports){
function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],13:[function(require,module,exports){
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
},{"./typeof.js":15}],14:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":13,"./typeof.js":15}],15:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],16:[function(require,module,exports){
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
},{"./construct.js":3,"./getPrototypeOf.js":6,"./isNativeFunction.js":9,"./setPrototypeOf.js":12}],17:[function(require,module,exports){
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
      sandbox: ""
    },
    template: ""
  },
  menu: [],
  tabs: [],
  tabOptions: {
    reorderable: false,
    closable: false,
    addable: false,
    onAdd: undefined
  },
  contextMenu: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onResize: function onResize() {},
  onMove: function onMove() {},
  onReload: function onReload() {}
};

},{}],18:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11,"@babel/runtime/helpers/wrapNativeSuper":16}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIBRARY_NAME = void 0;
var LIBRARY_NAME = exports.LIBRARY_NAME = "winlet";

},{}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
    _this.id = options.id || _utils["default"].generateId("window");
    if (options.id) {
      var existingEl = document.getElementById(options.id);
      if (existingEl && existingEl.classList.contains("".concat(_types.LIBRARY_NAME, "-window"))) {
        throw new _errors.WinLetError("WinLet: Window with ID \"".concat(options.id, "\" already exists. New window will not be created."));
      }
    }
    _this.manager = manager;
    _this.options = _utils["default"].deepMerge(_config.defaultConfig, options);
    _this.el = _this.createDOM();
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
      windowEl.innerHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-title-bar\">\n                <div class=\"").concat(_types.LIBRARY_NAME, "-icon\"></div>\n                <div class=\"").concat(_types.LIBRARY_NAME, "-title\"></div>\n                <div class=\"").concat(_types.LIBRARY_NAME, "-controls\">\n                    ").concat(this.options.minimizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-minimize-btn\" type=\"button\" value=\"\uFF3F\" title=\"Minimize\" />") : "", "\n                    ").concat(this.options.maximizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-maximize-btn\" type=\"button\" value=\"\u25A1\" title=\"Maximize\" />") : "", "\n                    ").concat(this.options.closable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-close-btn\" type=\"button\" value=\"\u2573\" title=\"Close\">") : "", "\n                </div>\n            </div>\n            <div class=\"").concat(_types.LIBRARY_NAME, "-main-content\">\n                ").concat(this.options.menu.length > 0 ? "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-bar\"></div>") : "", "\n                ").concat(this.options.tabs.length > 0 ? "<div class=\"".concat(_types.LIBRARY_NAME, "-tab-bar\"></div>") : "", "\n                <div class=\"").concat(_types.LIBRARY_NAME, "-content\"></div>\n            </div>\n            ").concat(resizableHandlesHTML, "\n        ");
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
      } else if (_utils["default"].isNonEmptyObject(content.iframe)) {
        var iframe = document.createElement("iframe");
        var iframeConfig = content.iframe;
        if (iframeConfig.src) {
          iframe.src = iframeConfig.src;
        }
        if (iframeConfig.srcdoc) {
          iframe.srcdoc = iframeConfig.srcdoc;
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
        menuItemEl.className = "".concat(_types.LIBRARY_NAME, "-menu-item");
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
            _this4.options.tabs.push(newTabItem);
            var newIndex = _this4.options.tabs.length - 1;
            _this4.createTabElement(newTabItem, newIndex);
            _this4.activateTab(newIndex);
          }
        });
        tabBar.appendChild(this.addTabBtn);
      }
      if (this.tabs.length > 0) this.activateTab(0);
    }
  }, {
    key: "createTabElement",
    value: function createTabElement(tabData, index) {
      var _this$options$tabOpti2,
        _this5 = this;
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
          _this5.closeTab(index);
        });
        tabEl.appendChild(closeBtn);
      }
      var tabContentEl = document.createElement("div");
      tabContentEl.className = "".concat(_types.LIBRARY_NAME, "-tab-content");
      this.contentEl.appendChild(tabContentEl);
      this.renderContent(tabContentEl, tabData.content);
      tabEl.addEventListener("click", function (e) {
        _this5.activateTab(+tabEl.dataset.tabId);
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
      tabEl.draggable = true;
      tabEl.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", tabEl.dataset.tabId);
        tabEl.classList.add("dragging");
      });
      tabEl.addEventListener("dragend", function () {
        return tabEl.classList.remove("dragging");
      });
      tabEl.addEventListener("dragover", function (e) {
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
      this.tabs[index].tabEl.remove();
      this.tabs[index].contentEl.remove();
      this.tabs.splice(index, 1);
      this.options.tabs.splice(index, 1);
      this.tabs.forEach(function (tab, i) {
        return tab.tabEl.dataset.tabId = i.toString();
      });
      if (this.tabs.length > 0) {
        var newActiveIndex = Math.max(0, index - 1);
        this.activateTab(newActiveIndex);
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
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this6 = this;
      this.el.addEventListener("click", function () {
        return _this6.focus();
      }, true);
      this.el.addEventListener("focusin", function () {
        return _this6.focus();
      });
      this.boundGlobalClickHandler = function () {
        if (_this6.isMenuOpen) {
          _this6.closeAllMenus();
        }
      };
      document.addEventListener("click", this.boundGlobalClickHandler);
      var closeBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-close-btn"));
      closeBtn === null || closeBtn === void 0 || closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        _this6.close();
      });
      var maxBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
      maxBtn === null || maxBtn === void 0 || maxBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        _this6.toggleMaximize();
      });
      var minBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-minimize-btn"));
      minBtn === null || minBtn === void 0 || minBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        _this6.minimize();
      });
      if (this.options.movable) this.makeMovable();
      if (this.options.resizableX || this.options.resizableY) this.makeResizable();
      if (this.options.contextMenu.length > 0) {
        this.el.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          _this6.manager.showContextMenu(e.clientX, e.clientY, _this6.options.contextMenu, _this6);
        }, {
          passive: false
        });
      }
    }
  }, {
    key: "makeMovable",
    value: function makeMovable() {
      var _this7 = this;
      var onMouseDown = function onMouseDown(e) {
        if (e.target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-resize-handle, .").concat(_types.LIBRARY_NAME, "-menu-bar, .").concat(_types.LIBRARY_NAME, "-tab-bar"))) return;
        e.preventDefault();
        _this7.focus();
        var startX = e.clientX,
          startY = e.clientY;
        var isDragging = false;
        var initialLeft;
        var initialTop;
        var onMouseMove = function onMouseMove(moveE) {
          if (!isDragging) {
            var deltaX = Math.abs(moveE.clientX - startX);
            var deltaY = Math.abs(moveE.clientY - startY);
            if (deltaX > _this7.DRAG_THRESHOLD || deltaY > _this7.DRAG_THRESHOLD) {
              isDragging = true;
              _this7.contentEl.style.pointerEvents = "none";
              if (_this7.state === "maximized") {
                var restoredWidth = _this7.lastState.width;
                var clickRatio = e.clientX / _this7.el.offsetWidth;
                var titleBarRect = _this7.titleBarEl.getBoundingClientRect();
                var offsetY = e.clientY - titleBarRect.top;
                var posX = e.clientX - restoredWidth * clickRatio;
                var posY = e.clientY - offsetY;
                _this7.restore();
                _this7.setPosition(posX, posY);
              }
              initialLeft = _this7.el.offsetLeft;
              initialTop = _this7.el.offsetTop;
            } else {
              return;
            }
          }
          var newLeft = initialLeft + moveE.clientX - startX;
          var newTop = initialTop + moveE.clientY - startY;
          _this7.setPosition(newLeft, newTop);
        };
        var _onMouseUp = function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", _onMouseUp);
          if (isDragging) {
            _this7.contentEl.style.pointerEvents = "auto";
            _this7.options.onMove(_this7);
          }
        };
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", _onMouseUp);
      };
      this.titleBarEl.addEventListener("mousedown", onMouseDown, {
        passive: false
      });
      if (this.options.maximizable) {
        this.titleBarEl.addEventListener("dblclick", function (e) {
          if (_this7.options.maximizableOnDblClick) {
            if (e.target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn"))) return;
            _this7.toggleMaximize();
          }
        });
      }
    }
  }, {
    key: "makeResizable",
    value: function makeResizable() {
      var _this8 = this;
      this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-resize-handle")).forEach(function (handle) {
        handle.addEventListener("mousedown", function (e) {
          e.preventDefault();
          _this8.focus();
          _this8.contentEl.style.pointerEvents = "none";
          var direction = handle.className.replace("".concat(_types.LIBRARY_NAME, "-resize-handle "), "");
          var startX = e.clientX,
            startY = e.clientY;
          var _this8$el = _this8.el,
            startWidth = _this8$el.offsetWidth,
            startHeight = _this8$el.offsetHeight,
            startLeft = _this8$el.offsetLeft,
            startTop = _this8$el.offsetTop;
          var _this8$options = _this8.options,
            minWidth = _this8$options.minWidth,
            minHeight = _this8$options.minHeight;
          var onMouseMove = function onMouseMove(moveE) {
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
            _this8.setSize(newWidth, newHeight);
            _this8.setPosition(newLeft, newTop);
          };
          var _onMouseUp2 = function onMouseUp() {
            _this8.contentEl.style.pointerEvents = "auto";
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", _onMouseUp2);
            _this8.options.onResize(_this8);
          };
          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", _onMouseUp2);
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
      if (this.state !== "minimized") {
        if (this.state !== "normal") this.restore();
        this.state = "minimized";
        this.el.classList.add("minimized");
        this.blur();
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
        this.setPosition(0, 0);
        this.setSize("100%", "100%");
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
      if (this.state === "minimized") {
        this.state = "normal";
        this.el.classList.remove("minimized");
        this.focus();
      } else if (this.state === "maximized") {
        this.state = "normal";
        this.el.classList.remove("maximized");
        this.setSize(this.lastState.width, this.lastState.height);
        this.setPosition(this.lastState.x, this.lastState.y);
        var maxBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
        if (maxBtn) {
          maxBtn.title = "Maximize";
          maxBtn.value = "\u25A1";
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.focused) return;
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
      var _this9 = this;
      if (this.options.onReload(this) === false) {
        return;
      }
      var reloadContent = function reloadContent(container, content) {
        if (content.iframe) {
          var iframe = container.querySelector("iframe");
          if (iframe && iframe.src && !content.iframe.srcdoc) {
            try {
              var _iframe$contentWindow;
              (_iframe$contentWindow = iframe.contentWindow) === null || _iframe$contentWindow === void 0 || _iframe$contentWindow.location.reload();
            } catch (e) {
              console.warn("WinLet: Cross-origin iframe could not be reloaded directly. Recreating iframe element.", e);
              _this9.renderContent(container, content);
            }
          } else {
            _this9.renderContent(container, content);
          }
        } else {
          _this9.renderContent(container, content);
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
    key: "getTitle",
    value: function getTitle() {
      return this.options.title;
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      this.options.title = title;
      this.titleEl.textContent = _utils["default"].sanitizeHTML(title);
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
      this.el.style.left = "".concat(Math.min(Math.max(150 - winWidth, finalX), parentRect.width - 20), "px");
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
  }]);
}(_baseclass["default"]);

},{"../const/config":17,"../const/errors":18,"../const/types":19,"../libs/baseclass":23,"../libs/utils":24,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
    (0, _defineProperty2["default"])(_this, "activeWindow", null);
    (0, _defineProperty2["default"])(_this, "contextMenuEl", null);
    (0, _defineProperty2["default"])(_this, "isInitialized", false);
    (0, _defineProperty2["default"])(_this, "lastAutoPosition", null);
    (0, _defineProperty2["default"])(_this, "CASCADE_OFFSET", 30);
    _this.globalConfig = initialConfig;
    return _this;
  }
  (0, _inherits2["default"])(WindowManager, _WinLetBaseClass);
  return (0, _createClass2["default"])(WindowManager, [{
    key: "applyGlobalConfig",
    value: function applyGlobalConfig(options) {
      Object.assign(this.globalConfig, options);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      if (this.isInitialized) {
        return;
      }
      if (!document.body) {
        throw new _errors.WinLetError("Cannot initialize before document.body is ready. Please call WinLet.init() after DOMContentLoaded.");
      }
      if (!document.getElementById("".concat(_types.LIBRARY_NAME, "-styles"))) {
        var styleTag = document.createElement("style");
        styleTag.id = "".concat(_types.LIBRARY_NAME, "-styles");
        styleTag.innerHTML = this.getStyleData();
        document.head.appendChild(styleTag);
      }
      var containerEl = document.querySelector(".".concat(_types.LIBRARY_NAME, "-container"));
      if (!containerEl) {
        containerEl = document.createElement("div");
        containerEl.className = "".concat(_types.LIBRARY_NAME, "-container");
        document.body.appendChild(containerEl);
      }
      this.container = containerEl;
      window.addEventListener("blur", function () {
        requestAnimationFrame(function () {
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
      });
      document.addEventListener("mousedown", function () {
        requestAnimationFrame(function () {
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
      this.container.addEventListener("mousedown", function (e) {
        if (e.target === _this2.container) {
          if (_this2.activeWindow) {
            var active = _this2.activeWindow;
            _this2.activeWindow = null;
            active.blur();
          }
        }
      });
      document.addEventListener("click", function () {
        return _this2.hideContextMenu();
      });
      window.addEventListener("message", function (event) {
        if (event.data && event.data.type === "winlet:createWindow" && (0, _typeof2["default"])(event.data.options) === "object") {
          var isSourceValid = false;
          var _iterator = _createForOfIteratorHelper(_this2.windows.values()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var win = _step.value;
              var iframe = win.el.querySelector("iframe");
              if (iframe && iframe.contentWindow === event.source) {
                isSourceValid = true;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          if (isSourceValid) {
            _this2.createWindow(event.data.options);
          } else {
            console.warn("WinLet: Untrusted source attempted to create a window.", event.origin);
          }
        }
      });
      this.isInitialized = true;
      this.setupShortcutListeners();
    }
  }, {
    key: "setupShortcutListeners",
    value: function setupShortcutListeners() {
      var _this3 = this;
      document.addEventListener("keydown", function (e) {
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
      if (!this.isInitialized) {
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
      var creationOptions = _utils["default"].deepMerge(_config.defaultConfig, options);
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
      this.container.appendChild(win.el);
      win.setPosition(creationOptions.x, creationOptions.y);
      this.focusWindow(win);
      return win;
    }
  }, {
    key: "destroyWindow",
    value: function destroyWindow(id) {
      this.ensureInitialized();
      var win = this.windows.get(id);
      if (win) {
        win.el.remove();
        this.windows["delete"](id);
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
      var _this$activeWindow;
      this.ensureInitialized();
      if (this.activeWindow === win) return;
      (_this$activeWindow = this.activeWindow) === null || _this$activeWindow === void 0 || _this$activeWindow.blur();
      this.activeWindow = win;
      win.el.style.zIndex = "".concat(++this.zIndexCounter);
    }
  }, {
    key: "getWindow",
    value: function getWindow(id) {
      this.ensureInitialized();
      return this.windows.get(id);
    }
  }, {
    key: "getActiveWindow",
    value: function getActiveWindow() {
      this.ensureInitialized();
      return this.activeWindow;
    }
  }, {
    key: "showContextMenu",
    value: function showContextMenu(x, y, menuItems, contextWindow) {
      var _this4 = this;
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
            _this4.hideContextMenu();
          });
        }
        _this4.contextMenuEl.appendChild(itemEl);
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

},{"../const/config":17,"../const/errors":18,"../const/types":19,"../libs/baseclass":23,"../libs/utils":24,"../style/styles":25,"./window":20,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11,"@babel/runtime/helpers/typeof":15}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = require("./const/config");
var _window_manager = _interopRequireDefault(require("./function/window_manager"));
var _utils = _interopRequireDefault(require("./libs/utils"));
var _version = require("./version");
var globalConfig = {
  windowSwitchShortcut: "Ctrl+`"
};
var manager = new _window_manager["default"](globalConfig);
var api = {
  init: function init() {
    manager.init();
  },
  createWindow: function createWindow() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return manager.createWindow(options);
  },
  getWindow: function getWindow(id) {
    return manager.getWindow(id);
  },
  getActiveWindow: function getActiveWindow() {
    return manager.getActiveWindow();
  },
  setDefaultConfig: function setDefaultConfig(options) {
    _utils["default"].deepMerge(_config.defaultConfig, options);
  },
  setGlobalConfig: function setGlobalConfig(options) {
    Object.assign(globalConfig, options);
    manager.applyGlobalConfig(globalConfig);
  },
  get version() {
    return _version.LIB_VERSION;
  }
};
window.WinLet = api;
var _default = exports["default"] = api;

},{"./const/config":17,"./function/window_manager":21,"./libs/utils":24,"./version":26,"@babel/runtime/helpers/interopRequireDefault":8}],23:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/interopRequireDefault":8}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _baseclass = _interopRequireDefault(require("./baseclass"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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

},{"./baseclass":23,"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/defineProperty":5,"@babel/runtime/helpers/getPrototypeOf":6,"@babel/runtime/helpers/inherits":7,"@babel/runtime/helpers/interopRequireDefault":8,"@babel/runtime/helpers/possibleConstructorReturn":11}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var styleData = "\n:root {\n    --$[prefix]-bg: #f0f0f0;\n    --$[prefix]-border: #a0a0a0;\n    --$[prefix]-title-bar-height: 32px;\n    --$[prefix]-title-bar-bg: #e0e0e0;\n    --$[prefix]-title-bar-active-bg: #0078d7;\n    --$[prefix]-title-text-color: #000;\n    --$[prefix]-title-text-active-color: #fff;\n    --$[prefix]-control-bg: #d0d0d0;\n    --$[prefix]-control-hover-bg: #e5e5e5;\n    --$[prefix]-control-close-hover-bg: #e81123;\n    --$[prefix]-control-close-hover-color: #fff;\n    --$[prefix]-menu-bg: #fff;\n    --$[prefix]-menu-border: #ccc;\n    --$[prefix]-menu-item-color: #000;\n    --$[prefix]-menu-item-hover-bg: #0078d7;\n    --$[prefix]-menu-item-hover-color: #fff;\n    --$[prefix]-tab-bg: #dcdcdc;\n    --$[prefix]-tab-active-bg: #f0f0f0;\n    --$[prefix]-tab-border: #b0b0b0;\n}\n\n.$[prefix]-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    overflow: hidden;\n    z-index: 999;\n}\n\n.$[prefix]-window {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    min-height: 150px;\n    border: 1px solid var(--$[prefix]-border);\n    background-color: var(--$[prefix]-bg);\n    box-shadow: 0 5px 15px rgba(0,0,0,0.3);\n    border-radius: 5px;\n    overflow: hidden;\n    pointer-events: all;\n    transition: opacity 0.1s, transform 0.1s;\n}\n\n.$[prefix]-window.minimized {\n    display: none; /* Simple hide, could be enhanced with a taskbar */\n}\n\n.$[prefix]-window.maximized {\n    border-radius: 0;\n    border: none;\n}\n\n/* Focus State */\n.$[prefix]-window.active .$[prefix]-title-bar {\n    background-color: var(--$[prefix]-title-bar-active-bg);\n    color: var(--$[prefix]-title-text-active-color);\n}\n.$[prefix]-window.active .$[prefix]-title-bar .$[prefix]-title {\n    color: var(--$[prefix]-title-text-active-color);\n}\n\n.$[prefix]-title-bar {\n    display: flex;\n    align-items: center;\n    height: var(--$[prefix]-title-bar-height);\n    background-color: var(--$[prefix]-title-bar-bg);\n    color: var(--$[prefix]-title-text-color);\n    user-select: none;\n    cursor: move;\n    flex-shrink: 0;\n}\n\n.$[prefix]-title-bar.controls-left {\n    flex-direction: row-reverse;\n}\n\n.$[prefix]-icon {\n    min-width: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    margin: 0 4px;\n    pointer-events: none;\n}\n\n.$[prefix]-icon i {\n        font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n        line-height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n        text-align: center;\n        display: block;\n        width: 100%;\n        height: 100%;\n}\n\n.$[prefix]-icon img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.$[prefix]-title {\n    flex-grow: 1;\n    padding: 0 8px;\n    font-family: sans-serif;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.44);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n\n.$[prefix]-title-bar.controls-left .$[prefix]-title {\n    text-align: right;\n}\n\n.$[prefix]-controls {\n    display: flex;\n    height: 100%;\n    margin-left: auto;\n}\n\n.$[prefix]-title-bar.controls-left .$[prefix]-controls {\n    margin-left: 0;\n    margin-right: auto;\n    flex-direction: row-reverse;\n}\n\n.$[prefix]-control-btn {\n    width: calc(var(--$[prefix]-title-bar-height) * 1.3);\n    height: 100%;\n    border: none;\n    box-sizing: border-box;\n    background-color: transparent;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n    cursor: pointer;\n    text-align: center;\n    vertical-align: middle;\n    font-family: sans-serif;\n    transition: background-color 0.2s;\n}\n\n.$[prefix]-control-btn:hover {\n    background-color: var(--$[prefix]-control-hover-bg);\n}\n\n.$[prefix]-control-btn.$[prefix]-close-btn:hover {\n    background-color: var(--$[prefix]-control-close-hover-bg);\n    color: var(--$[prefix]-control-close-hover-color);\n}\n\n.$[prefix]-main-content {\n    all: initial;\n    display:flex;\n    flex-direction:column;\n    flex-grow:1;\n    overflow:hidden;\n}\n\n.$[prefix]-menu-bar {\n    display: flex;\n    background-color: var(--$[prefix]-bg);\n    padding: 2px;\n    flex-shrink: 0;\n    border-bottom: 1px solid var(--$[prefix]-border);\n}\n\n.$[prefix]-menu-item {\n    font-family: sans-serif;\n    font-size: 14px;\n    padding: 4px 8px;\n    cursor: default;\n    position: relative;\n}\n\n.$[prefix]-menu-item:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n.$[prefix]-menu-dropdown {\n    color: var(--$[prefix]-menu-item-color);\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 150px;\n    z-index: 10;\n}\n\n.$[prefix]-menu-dropdown li {\n    padding: 5px 20px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.$[prefix]-menu-dropdown li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n.$[prefix]-menu-dropdown li.separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n\n.$[prefix]-menu-dropdown-item {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    width: 100%;\n    white-space: nowrap;\n}\n\n/* --- \u30E1\u30CB\u30E5\u30FC --- */\n/* \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u3092\u6301\u3064\u9805\u76EE\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-menu-dropdown li.has-submenu {\n    position: relative;\n}\n.$[prefix]-menu-dropdown li.has-submenu::after {\n    content: '\u25B6';\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    margin-top: -0.65em;\n    font-size: 0.8em;\n    color: inherit;\n}\n\n/* \u30CD\u30B9\u30C8\u3055\u308C\u305F\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306E\u8868\u793A\u4F4D\u7F6E */\n.$[prefix]-menu-dropdown li.has-submenu > .$[prefix]-menu-dropdown {\n    top: -5px; /* li\u306Epadding\u3092\u8003\u616E */\n    left: 100%;\n}\n\n/* \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306F\u30DB\u30D0\u30FC\u3067\u958B\u304F */\n.$[prefix]-menu-dropdown li.has-submenu > .$[prefix]-menu-dropdown {\n    display: none;\n}\n\n.$[prefix]-menu-dropdown li.has-submenu:hover > .$[prefix]-menu-dropdown {\n    display: block;\n}\n\n/* \u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30AD\u30FC\u30C6\u30AD\u30B9\u30C8\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-shortcut-text {\n    color: #666;\n    margin-left: 1em;\n}\n.$[prefix]-menu-dropdown li:hover .$[prefix]-shortcut-text {\n    color: inherit;\n}\n\n/* --- \u30BF\u30D6 --- */\n.$[prefix]-tab-bar {\n    overflow-x: auto;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    scrollbar-width: thin;\n    display: flex;\n    background-color: #e1e1e1;\n    flex-shrink: 0;\n    align-items: flex-end;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar{\n    width: 6px;\n    height: 6px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-thumb {\n    background-color: rgba(100, 100, 100, 0.5);\n    border-radius: 3px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-track {\n    background-color: transparent;\n}\n\n.$[prefix]-tab {\n    white-space: nowrap;\n    padding: 8px 16px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n    border-right: 1px solid var(--$[prefix]-tab-border);\n    background-color: var(--$[prefix]-tab-bg);\n}\n\n.$[prefix]-tab.active {\n    background-color: var(--$[prefix]-tab-active-bg);\n    border-bottom: 2px solid var(--$[prefix]-title-bar-active-bg);\n}\n\n.$[prefix]-tab.active .$[prefix]-tab-close-btn:hover {\n    background-color: #ddd;\n}\n\n/* \u30C9\u30E9\u30C3\u30B0\u4E2D\u306E\u30BF\u30D6\u306E\u30B9\u30BF\u30A4\u30EB */\n.$[prefix]-tab.dragging {\n    opacity: 0.5;\n}\n/* \u30BF\u30D6\u306E\u9589\u3058\u308B\u30DC\u30BF\u30F3 */\n.$[prefix]-tab-close-btn {\n    margin-left: 8px;\n    padding: 0 4px;\n    border-radius: 50%;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1;\n}\n.$[prefix]-tab-close-btn:hover {\n    background-color: #ccc;\n}\n\n.$[prefix]-tab-content {\n    display: none;\n}\n\n.$[prefix]-tab-content.active {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n/* \u30BF\u30D6\u8FFD\u52A0\u30DC\u30BF\u30F3 */\n.$[prefix]-tab-add-btn {\n    padding: 8px;\n    font-size: 14px;\n    cursor: pointer;\n    border-bottom: 1px solid var(--$[prefix]-tab-border);\n}\n.$[prefix]-tab-add-btn:hover {\n    background-color: #e0e0e0;\n}\n\n.$[prefix]-content {\n    flex-grow: 1;\n    position: relative;\n    overflow: auto;\n}\n\n.$[prefix]-content iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n.$[prefix]-resize-handle {\n    position: absolute;\n    z-index: 5;\n}\n\n.$[prefix]-resize-handle.n { top: -4px; left: 0; right: 0; height: 8px; cursor: n-resize; }\n.$[prefix]-resize-handle.s { bottom: -4px; left: 0; right: 0; height: 8px; cursor: s-resize; }\n.$[prefix]-resize-handle.w { top: 0; bottom: 0; left: -4px; width: 8px; cursor: w-resize; }\n.$[prefix]-resize-handle.e { top: 0; bottom: 0; right: -4px; width: 8px; cursor: e-resize; }\n.$[prefix]-resize-handle.nw { top: -4px; left: -4px; width: 8px; height: 8px; cursor: nw-resize; }\n.$[prefix]-resize-handle.ne { top: -4px; right: -4px; width: 8px; height: 8px; cursor: ne-resize; }\n.$[prefix]-resize-handle.sw { bottom: -4px; left: -4px; width: 8px; height: 8px; cursor: sw-resize; }\n.$[prefix]-resize-handle.se { bottom: -4px; right: -4px; width: 8px; height: 8px; cursor: se-resize; }\n\n.$[prefix]-context-menu {\n    color: var(--$[prefix]-menu-item-color);\n    pointer-events: all;\n    position: fixed;\n    z-index: 10000;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 160px;\n}\n.$[prefix]-context-menu li {\n    padding: 6px 24px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n}\n.$[prefix]-context-menu li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n.$[prefix]-context-menu li.separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n";
var _default = exports["default"] = styleData;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIB_VERSION = void 0;
var LIB_VERSION = exports.LIB_VERSION = "v1.0.0.1";

},{}]},{},[22])
//# sourceMappingURL=winlet.js.map
