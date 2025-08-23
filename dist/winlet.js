(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],3:[function(require,module,exports){
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],4:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":2}],5:[function(require,module,exports){
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],6:[function(require,module,exports){
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],7:[function(require,module,exports){
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],8:[function(require,module,exports){
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
},{"./isNativeReflectConstruct.js":15,"./setPrototypeOf.js":29}],9:[function(require,module,exports){
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
},{"./toPropertyKey.js":33}],10:[function(require,module,exports){
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
},{"./toPropertyKey.js":33}],11:[function(require,module,exports){
function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],12:[function(require,module,exports){
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
},{"./setPrototypeOf.js":29}],13:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],14:[function(require,module,exports){
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],15:[function(require,module,exports){
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],16:[function(require,module,exports){
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[function(require,module,exports){
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
},{}],18:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],19:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],20:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var assertThisInitialized = require("./assertThisInitialized.js");
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":5,"./typeof.js":34}],21:[function(require,module,exports){
var regeneratorDefine = require("./regeneratorDefine.js");
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
    return this;
  }), regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (module.exports = _regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./regeneratorDefine.js":25}],22:[function(require,module,exports){
var regeneratorAsyncGen = require("./regeneratorAsyncGen.js");
function _regeneratorAsync(n, e, r, t, o) {
  var a = regeneratorAsyncGen(n, e, r, t, o);
  return a.next().then(function (n) {
    return n.done ? n.value : a.next();
  });
}
module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./regeneratorAsyncGen.js":23}],23:[function(require,module,exports){
var regenerator = require("./regenerator.js");
var regeneratorAsyncIterator = require("./regeneratorAsyncIterator.js");
function _regeneratorAsyncGen(r, e, t, o, n) {
  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
}
module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./regenerator.js":21,"./regeneratorAsyncIterator.js":24}],24:[function(require,module,exports){
var OverloadYield = require("./OverloadYield.js");
var regeneratorDefine = require("./regeneratorDefine.js");
function AsyncIterator(t, e) {
  function n(r, o, i, f) {
    try {
      var c = t[r](o),
        u = c.value;
      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
        n("next", t, i, f);
      }, function (t) {
        n("throw", t, i, f);
      }) : e.resolve(u).then(function (t) {
        c.value = t, i(c);
      }, function (t) {
        return n("throw", t, i, f);
      });
    } catch (t) {
      f(t);
    }
  }
  var r;
  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
    return this;
  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
    function f() {
      return new e(function (e, r) {
        n(t, i, e, r);
      });
    }
    return r = r ? r.then(f, f) : f();
  }, !0);
}
module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./OverloadYield.js":1,"./regeneratorDefine.js":25}],25:[function(require,module,exports){
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      var o = function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
}
module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],26:[function(require,module,exports){
function _regeneratorKeys(e) {
  var n = Object(e),
    r = [];
  for (var t in n) r.unshift(t);
  return function e() {
    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
    return e.done = !0, e;
  };
}
module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],27:[function(require,module,exports){
var OverloadYield = require("./OverloadYield.js");
var regenerator = require("./regenerator.js");
var regeneratorAsync = require("./regeneratorAsync.js");
var regeneratorAsyncGen = require("./regeneratorAsyncGen.js");
var regeneratorAsyncIterator = require("./regeneratorAsyncIterator.js");
var regeneratorKeys = require("./regeneratorKeys.js");
var regeneratorValues = require("./regeneratorValues.js");
function _regeneratorRuntime() {
  "use strict";

  var r = regenerator(),
    e = r.m(_regeneratorRuntime),
    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
  function n(r) {
    var e = "function" == typeof r && r.constructor;
    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
  }
  var o = {
    "throw": 1,
    "return": 2,
    "break": 3,
    "continue": 3
  };
  function a(r) {
    var e, t;
    return function (n) {
      e || (e = {
        stop: function stop() {
          return t(n.a, 2);
        },
        "catch": function _catch() {
          return n.v;
        },
        abrupt: function abrupt(r, e) {
          return t(n.a, o[r], e);
        },
        delegateYield: function delegateYield(r, o, a) {
          return e.resultName = o, t(n.d, regeneratorValues(r), a);
        },
        finish: function finish(r) {
          return t(n.f, r);
        }
      }, t = function t(r, _t, o) {
        n.p = e.prev, n.n = e.next;
        try {
          return r(_t, o);
        } finally {
          e.next = n.n;
        }
      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
      try {
        return r.call(this, e);
      } finally {
        n.p = e.prev, n.n = e.next;
      }
    };
  }
  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return {
      wrap: function wrap(e, t, n, o) {
        return r.w(a(e), t, n, o && o.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function awrap(r, e) {
        return new OverloadYield(r, e);
      },
      AsyncIterator: regeneratorAsyncIterator,
      async: function async(r, e, t, o, u) {
        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
      },
      keys: regeneratorKeys,
      values: regeneratorValues
    };
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./OverloadYield.js":1,"./regenerator.js":21,"./regeneratorAsync.js":22,"./regeneratorAsyncGen.js":23,"./regeneratorAsyncIterator.js":24,"./regeneratorKeys.js":26,"./regeneratorValues.js":28}],28:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
function _regeneratorValues(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      r = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function next() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(_typeof(e) + " is not iterable");
}
module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":34}],29:[function(require,module,exports){
function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],30:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");
var iterableToArrayLimit = require("./iterableToArrayLimit.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableRest = require("./nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":3,"./iterableToArrayLimit.js":17,"./nonIterableRest.js":18,"./unsupportedIterableToArray.js":35}],31:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles.js");
var iterableToArray = require("./iterableToArray.js");
var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");
var nonIterableSpread = require("./nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":4,"./iterableToArray.js":16,"./nonIterableSpread.js":19,"./unsupportedIterableToArray.js":35}],32:[function(require,module,exports){
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
},{"./typeof.js":34}],33:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];
var toPrimitive = require("./toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./toPrimitive.js":32,"./typeof.js":34}],34:[function(require,module,exports){
function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],35:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":2}],36:[function(require,module,exports){
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
},{"./construct.js":8,"./getPrototypeOf.js":11,"./isNativeFunction.js":14,"./setPrototypeOf.js":29}],37:[function(require,module,exports){
// TODO(Babel 8): Remove this file.

var runtime = require("../helpers/regeneratorRuntime")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{"../helpers/regeneratorRuntime":27}],38:[function(require,module,exports){
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
  virtualizable: true,
  animationOrigin: null,
  windowOptions: {
    resizableX: true,
    resizableY: true,
    movable: true,
    closable: true,
    minimizable: true,
    maximizable: true,
    maximizableOnDblClick: true,
    focus: true,
    alwaysOnTop: false,
    useGhostWindow: false,
    opacity: 1.0,
    modal: false
  },
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
  splitView: {
    direction: "horizontal",
    panes: []
  },
  statusBar: {
    enabled: false,
    text: "",
    allowHTML: false
  },
  search: {
    enabled: false,
    caseSensitive: false,
    showCaseSensitiveButton: true,
    showRegexButton: true,
    showWholeWordButton: true,
    targetSelector: ""
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
  taskbarOptions: {
    showIconOnly: true
  },
  contextMenu: [],
  customControls: [],
  enableShortcuts: true,
  controlsPosition: "right",
  showLoadingIndicator: true,
  lazyLoad: false,
  disableMoveEvent: false,
  disableResizeEvent: false,
  virtualizationStrategy: "standard",
  virtualizationRestoreMode: "auto",
  showVirtualizationRefreshButton: true,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onResize: function onResize() {},
  onMove: function onMove() {},
  onReload: function onReload() {},
  onBeforeClose: function onBeforeClose() {},
  onMoveStart: function onMoveStart() {},
  onMoveEnd: function onMoveEnd() {},
  onResizeStart: function onResizeStart() {},
  onResizeEnd: function onResizeEnd() {},
  _isPopup: false,
  _parent: null,
  _taskbarItem: null
};

},{}],39:[function(require,module,exports){
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

},{"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/createClass":9,"@babel/runtime/helpers/getPrototypeOf":11,"@babel/runtime/helpers/inherits":12,"@babel/runtime/helpers/interopRequireDefault":13,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/wrapNativeSuper":36}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIMEOUT_RESULT = exports.LIBRARY_NAME = exports.CLOSE_BUTTON_RESULT = void 0;
var LIBRARY_NAME = exports.LIBRARY_NAME = "winlet";
var TIMEOUT_RESULT = exports.TIMEOUT_RESULT = Symbol("timeout");
var CLOSE_BUTTON_RESULT = exports.CLOSE_BUTTON_RESULT = Symbol("close");

},{}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
var _window_manager = _interopRequireDefault(require("./window_manager"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    (0, _defineProperty2["default"])(_this, "statusBarEl", null);
    (0, _defineProperty2["default"])(_this, "searchBarEl", null);
    (0, _defineProperty2["default"])(_this, "searchResults", []);
    (0, _defineProperty2["default"])(_this, "currentSearchIndex", -1);
    (0, _defineProperty2["default"])(_this, "searchOptionsState", {
      caseSensitive: false,
      regex: false,
      wholeWord: false
    });
    (0, _defineProperty2["default"])(_this, "MOBILE_CONTEXT_MENU_TIMEOUT", 700);
    (0, _defineProperty2["default"])(_this, "contextMenuTimer", null);
    (0, _defineProperty2["default"])(_this, "popupCloseCallback", null);
    (0, _defineProperty2["default"])(_this, "childManager", null);
    (0, _defineProperty2["default"])(_this, "debugOverlayEl", null);
    (0, _defineProperty2["default"])(_this, "isContentLoaded", false);
    (0, _defineProperty2["default"])(_this, "throttledEmitMove", null);
    (0, _defineProperty2["default"])(_this, "throttledEmitResize", null);
    (0, _defineProperty2["default"])(_this, "canvasSnapshot", null);
    (0, _defineProperty2["default"])(_this, "canvasOverlayEl", null);
    (0, _defineProperty2["default"])(_this, "virtualizationLevel", "none");
    (0, _defineProperty2["default"])(_this, "minimizeVirtualizeTimer", null);
    (0, _defineProperty2["default"])(_this, "virtualizationHierarchy", ["none", "frozen", "suspended", "unloaded"]);
    _this.id = options.id || _utils["default"].generateId("".concat(_types.LIBRARY_NAME, "-window"));
    if (options.id) {
      var existingEl = document.getElementById(options.id);
      if (existingEl && existingEl.classList.contains("".concat(_types.LIBRARY_NAME, "-window"))) {
        throw new _errors.WinLetError("WinLet: Window with ID \"".concat(options.id, "\" already exists. New window will not be created."));
      }
    }
    _this.manager = manager;
    _this.options = _utils["default"].deepMerge(_utils["default"].deepCopy(_config.defaultConfig), options);
    _this.parentWindow = options._parent || null;
    _this.searchOptionsState.caseSensitive = !!_this.options.search.caseSensitive;
    var throttlingOptions = _this.manager.getGlobalConfig().eventThrottling;
    if (!_this.options.disableMoveEvent) {
      var delay = throttlingOptions === null || throttlingOptions === void 0 ? void 0 : throttlingOptions.moveDelay;
      var emitMove = function emitMove() {
        return _this.emit("move", _this);
      };
      _this.throttledEmitMove = delay && delay > 0 ? _utils["default"].throttle(emitMove, delay) : emitMove;
    }
    if (!_this.options.disableResizeEvent) {
      var _delay = throttlingOptions === null || throttlingOptions === void 0 ? void 0 : throttlingOptions.resizeDelay;
      var emitResize = function emitResize() {
        return _this.emit("resize", _this);
      };
      _this.throttledEmitResize = _delay && _delay > 0 ? _utils["default"].throttle(emitResize, _delay) : emitResize;
    }
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
    if (_this.options.windowOptions.alwaysOnTop) {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-always-on-top"));
    }
    if (_this.options.windowOptions.modal) {
      _this.el.classList.add("".concat(_types.LIBRARY_NAME, "-modal"));
      _this.el.setAttribute("aria-modal", "true");
    }
    _this.titleBarEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-title-bar"));
    _this.iconEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-icon"));
    _this.titleEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-title"));
    _this.mainContentEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-main-content"));
    _this.contentEl = _this.mainContentEl.querySelector(".".concat(_types.LIBRARY_NAME, "-content"));
    _this.loaderEl = _this.mainContentEl.querySelector(".".concat(_types.LIBRARY_NAME, "-loader-overlay"));
    _this.canvasOverlayEl = _this.mainContentEl.querySelector(".".concat(_types.LIBRARY_NAME, "-canvas-overlay"));
    _this.debugOverlayEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-debug-overlay"));
    _this.statusBarEl = _this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-statusbar"));
    _this.applyOptions();
    _this.setupEventListeners();
    _this.updateDebugOverlay();
    if (_this.options.onOpen) _this.on("open", _this.options.onOpen);
    if (_this.options.onClose) _this.on("close", _this.options.onClose);
    if (_this.options.onBeforeClose) _this.on("before-close", _this.options.onBeforeClose);
    if (_this.options.onFocus) _this.on("focus", _this.options.onFocus);
    if (_this.options.onBlur) _this.on("blur", _this.options.onBlur);
    if (_this.options.onMove) _this.on("move", _this.options.onMove);
    if (_this.options.onMoveStart) _this.on("move-start", _this.options.onMoveStart);
    if (_this.options.onMoveEnd) _this.on("move-end", _this.options.onMoveEnd);
    if (_this.options.onResize) _this.on("resize", _this.options.onResize);
    if (_this.options.onResizeStart) _this.on("resize-start", _this.options.onResizeStart);
    if (_this.options.onResizeEnd) _this.on("resize-end", _this.options.onResizeEnd);
    if (_this.options.onReload) _this.on("reload", _this.options.onReload);
    _this.emit("open", _this);
    return _this;
  }
  (0, _inherits2["default"])(WinLetWindow, _WinLetBaseClass);
  return (0, _createClass2["default"])(WinLetWindow, [{
    key: "_calculateTransformOrigin",
    value: function _calculateTransformOrigin(origin) {
      var originX = 0;
      var originY = 0;
      var winRect = this.el.getBoundingClientRect();
      if (!origin && this.manager.getGlobalConfig().animateFromTaskbar && this.options._taskbarItem) {
        origin = this.options._taskbarItem;
      }
      if (origin instanceof HTMLElement) {
        var rect = origin.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
      } else if (typeof origin === "string") {
        var el = document.querySelector(origin);
        if (el) {
          var _rect = el.getBoundingClientRect();
          originX = _rect.left + _rect.width / 2;
          originY = _rect.top + _rect.height / 2;
        }
      } else if (origin instanceof MouseEvent) {
        originX = origin.clientX;
        originY = origin.clientY;
      } else if (origin && (0, _typeof2["default"])(origin) === "object" && "x" in origin && "y" in origin) {
        originX = origin.x;
        originY = origin.y;
      } else {
        return "50% 50%";
      }
      var relativeX = originX - winRect.left;
      var relativeY = originY - winRect.top;
      return "".concat(relativeX, "px ").concat(relativeY, "px");
    }
  }, {
    key: "createDOM",
    value: function createDOM() {
      var _this$options$customC;
      var windowEl = document.createElement("div");
      windowEl.className = "".concat(_types.LIBRARY_NAME, "-window");
      windowEl.id = this.id;
      windowEl.setAttribute("role", "application");
      windowEl.setAttribute("aria-labelledby", "".concat(this.id, "-title"));
      if (this.state === "minimized") {
        windowEl.setAttribute("inert", "");
        windowEl.setAttribute("aria-hidden", "true");
      }
      var handles = [];
      if (this.options.windowOptions.resizableY) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-n\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-s\"></div>"));
      }
      if (this.options.windowOptions.resizableX) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-w\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-e\"></div>"));
      }
      if (this.options.windowOptions.resizableX && this.options.windowOptions.resizableY) {
        handles.push("<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-nw\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-ne\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-sw\"></div>"), "<div class=\"".concat(_types.LIBRARY_NAME, "-resize-handle ").concat(_types.LIBRARY_NAME, "-se\"></div>"));
      }
      var resizableHandlesHTML = handles.join("");
      var hasMenu = this.options.menu.length > 0;
      var hasTabs = this.options.tabs.length > 0;
      var isMergedMenu = this.options.menuStyle === "merged" && hasMenu;
      var isMergedTabs = this.options.tabStyle === "merged" && hasTabs;
      var customControlsHTML = ((_this$options$customC = this.options.customControls) !== null && _this$options$customC !== void 0 ? _this$options$customC : []).map(function (c) {
        return "<button class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-custom-control-btn\" data-name=\"").concat(c.name, "\" title=\"").concat(c.title || "", "\" aria-label=\"").concat(c.title || c.name, "\">").concat(c.html, "</button>");
      }).join("");
      var refreshBtnHTML = "<button class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-refresh-btn\" title=\"Refresh Content\" aria-label=\"Refresh Content\"><i class=\"fas fa-sync-alt\"></i></button>");
      var controlsHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-controls\">\n\t\t\t\t").concat(customControlsHTML, "\n\t\t\t\t").concat(refreshBtnHTML, "\n                ").concat(this.options.windowOptions.minimizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-minimize-btn\" type=\"button\" value=\"\uFF3F\" title=\"Minimize\" aria-label=\"Minimize\"/>") : "", "\n                ").concat(this.options.windowOptions.maximizable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-maximize-btn\" type=\"button\" value=\"\u25A1\" title=\"Maximize\" aria-label=\"Maximize\"/>") : "", "\n                ").concat(this.options.windowOptions.closable ? "<input class=\"".concat(_types.LIBRARY_NAME, "-control-btn ").concat(_types.LIBRARY_NAME, "-close-btn\" type=\"button\" value=\"\u2573\" title=\"Close\" aria-label=\"Close\"/>") : "", "\n            </div>");
      var titleBarContentHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-icon\"></div>\n            ").concat(isMergedMenu ? "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-bar\"></div>") : "", "\n            <div id=\"").concat(this.id, "-title\" class=\"").concat(_types.LIBRARY_NAME, "-title\"></div>\n            ").concat(isMergedTabs ? "<div class=\"".concat(_types.LIBRARY_NAME, "-tab-bar\"></div>") : "", "\n            ").concat(controlsHTML, "\n        ");
      var loaderHTML = "\n            <div class=\"".concat(_types.LIBRARY_NAME, "-loader-overlay\" style=\"display: none;\">\n                <div class=\"").concat(_types.LIBRARY_NAME, "-loader-spinner\"></div>\n            </div>\n        ");
      var statusBarHTML = this.options.statusBar.enabled ? "<div class=\"".concat(_types.LIBRARY_NAME, "-statusbar\"></div>") : "";
      var debugHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-debug-overlay\"></div>");
      var canvasOverlayHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-canvas-overlay\"></div>");
      windowEl.innerHTML = "\n\t\t\t".concat(debugHTML, "\n            <div class=\"").concat(_types.LIBRARY_NAME, "-title-bar ").concat(_types.LIBRARY_NAME, "-us-none\">\n                ").concat(titleBarContentHTML, "\n            </div>\n            <div class=\"").concat(_types.LIBRARY_NAME, "-main-content\">\n                ").concat(!isMergedMenu && hasMenu ? "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-bar\" role=\"menubar\"></div>") : "", "\n                ").concat(!isMergedTabs && hasTabs ? "<div class=\"".concat(_types.LIBRARY_NAME, "-tab-bar\" role=\"tablist\"></div>") : "", "\n                <div class=\"").concat(_types.LIBRARY_NAME, "-content\"></div>\n\t\t\t\t").concat(loaderHTML, "\n\t\t\t\t").concat(canvasOverlayHTML, "\n            </div>\n\t\t\t").concat(statusBarHTML, "\n            ").concat(resizableHandlesHTML, "\n        ");
      return windowEl;
    }
  }, {
    key: "_renderInitialContent",
    value: function _renderInitialContent() {
      if (this.isContentLoaded) return;
      if (this.options.splitView && this.options.splitView.panes.length > 0) {
        this.createSplitView(this.contentEl, this.options.splitView);
      } else if (this.options.tabs.length > 0) {
        this.createTabs();
      } else {
        this.renderContent(this.contentEl, this.options.content);
      }
      this.isContentLoaded = true;
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
        this.titleBarEl.classList.add("".concat(_types.LIBRARY_NAME, "-controls-left"));
      }
      if (!this.options.lazyLoad) {
        this._renderInitialContent();
      } else {
        this.showLoader();
      }
      if (this.options.menu.length > 0) {
        this.createMenu();
      }
      if (this.statusBarEl) {
        this.setStatusBarText(this.options.statusBar.text || "");
      }
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      if (this.options.showLoadingIndicator) {
        this.loaderEl.style.display = "flex";
      }
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loaderEl.style.display = "none";
    }
  }, {
    key: "renderContent",
    value: function renderContent(container, content) {
      var _this2 = this;
      container.innerHTML = "";
      this.hideLoader();
      if (this.virtualizationLevel === "unloaded") {
        return;
      }
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
        this.showLoader();
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
        iframe.addEventListener("load", function () {
          return _this2.hideLoader();
        });
        iframe.addEventListener("error", function () {
          return _this2.hideLoader();
        });
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
      var _this3 = this;
      var menuBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-menu-bar"));
      menuBar.innerHTML = "";
      this.options.menu.forEach(function (menuItemData) {
        var _menuItemData$name;
        var menuItemEl = document.createElement("div");
        menuItemEl.className = "".concat(_types.LIBRARY_NAME, "-menu-item ").concat(_types.LIBRARY_NAME, "-us-none");
        menuItemEl.textContent = (_menuItemData$name = menuItemData.name) !== null && _menuItemData$name !== void 0 ? _menuItemData$name : "";
        menuItemEl.setAttribute("role", "menu");
        if (menuItemData.items) {
          var dropdownEl = _this3.createDropdownMenu(menuItemData.items);
          menuItemEl.addEventListener("click", function (e) {
            e.stopPropagation();
            var isVisible = dropdownEl.style.display === "block";
            _this3.closeAllMenus();
            if (!isVisible) {
              dropdownEl.style.display = "block";
              _this3.isMenuOpen = true;
            }
          }, {
            passive: false
          });
          menuItemEl.addEventListener("mouseenter", function () {
            if (_this3.isMenuOpen) {
              _this3.closeAllMenus();
              dropdownEl.style.display = "block";
              _this3.isMenuOpen = true;
            }
          }, {
            passive: true
          });
          menuItemEl.appendChild(dropdownEl);
        }
        menuBar.appendChild(menuItemEl);
      });
    }
  }, {
    key: "createDropdownMenu",
    value: function createDropdownMenu(items) {
      var _this4 = this;
      var dropdownEl = document.createElement("ul");
      dropdownEl.className = "".concat(_types.LIBRARY_NAME, "-menu-dropdown");
      items.forEach(function (itemData) {
        var itemEl = document.createElement("li");
        if (itemData.separator) {
          itemEl.className = "".concat(_types.LIBRARY_NAME, "-separator");
        } else {
          var _itemData$name;
          var text = (_itemData$name = itemData.name) !== null && _itemData$name !== void 0 ? _itemData$name : "";
          text = "<span>".concat(text, "</span>");
          if (_this4.options.enableShortcuts && itemData.shortcut) {
            text += "<span class=\"".concat(_types.LIBRARY_NAME, "-shortcut-text\">(").concat(itemData.shortcut, ")</span>");
          }
          itemEl.innerHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-menu-dropdown-item\" role=\"menuitem\">").concat(text, "</div>");
          itemEl.addEventListener("click", function (e) {
            var _itemData$action;
            e.stopPropagation();
            _this4.closeAllMenus();
            (_itemData$action = itemData.action) === null || _itemData$action === void 0 || _itemData$action.call(itemData, _this4);
          }, {
            passive: false
          });
          if (itemData.items) {
            itemEl.classList.add("".concat(_types.LIBRARY_NAME, "-has-submenu"));
            var subMenuEl = _this4.createDropdownMenu(itemData.items);
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
        _this5 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      tabBar.innerHTML = "";
      this.tabs = [];
      var tabOpts = (_this$options$tabOpti = this.options.tabOptions) !== null && _this$options$tabOpti !== void 0 ? _this$options$tabOpti : {};
      this.options.tabs.forEach(function (tabData, index) {
        _this5.createTabElement(tabData, index);
      });
      if (tabOpts.addable) {
        this.addTabBtn = document.createElement("div");
        this.addTabBtn.className = "".concat(_types.LIBRARY_NAME, "-tab-add-btn");
        this.addTabBtn.textContent = "+";
        this.addTabBtn.addEventListener("click", function (e) {
          var _tabOpts$onAdd;
          var newTabItem = (_tabOpts$onAdd = tabOpts.onAdd) === null || _tabOpts$onAdd === void 0 ? void 0 : _tabOpts$onAdd.call(tabOpts, _this5);
          if (newTabItem) {
            _this5.addTab(newTabItem);
          }
        }, {
          passive: true
        });
        tabBar.appendChild(this.addTabBtn);
      }
      this.setupTabBarDropZone();
      if (this.tabs.length > 0) this.activateTab(0);
    }
  }, {
    key: "setupTabBarDropZone",
    value: function setupTabBarDropZone() {
      var _this6 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      if (!tabBar || !this.options.tabOptions.reorderable) return;
      tabBar.addEventListener("dragover", function (e) {
        var _e$dataTransfer;
        if ((_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.types.includes("application/winlet-tab")) {
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
          tabBar.classList.add("".concat(_types.LIBRARY_NAME, "-drag-over"));
        }
      }, {
        passive: false
      });
      tabBar.addEventListener("dragleave", function () {
        tabBar.classList.remove("".concat(_types.LIBRARY_NAME, "-drag-over"));
      }, {
        passive: true
      });
      tabBar.addEventListener("drop", function (e) {
        var _e$dataTransfer2, _e$dataTransfer3, _e$dataTransfer4, _this6$manager$contai;
        e.preventDefault();
        tabBar.classList.remove("".concat(_types.LIBRARY_NAME, "-drag-over"));
        var tabDataJSON = (_e$dataTransfer2 = e.dataTransfer) === null || _e$dataTransfer2 === void 0 ? void 0 : _e$dataTransfer2.getData("application/winlet-tab");
        var sourceWindowId = (_e$dataTransfer3 = e.dataTransfer) === null || _e$dataTransfer3 === void 0 ? void 0 : _e$dataTransfer3.getData("application/winlet-source-window-id");
        var sourceTabId = (_e$dataTransfer4 = e.dataTransfer) === null || _e$dataTransfer4 === void 0 ? void 0 : _e$dataTransfer4.getData("text/plain");
        if (!tabDataJSON || !sourceWindowId || !sourceTabId) return;
        var draggingEl = (_this6$manager$contai = _this6.manager.container) === null || _this6$manager$contai === void 0 ? void 0 : _this6$manager$contai.querySelector(".".concat(_types.LIBRARY_NAME, "-tab.").concat(_types.LIBRARY_NAME, "-dragging"));
        if (sourceWindowId === _this6.id) {
          if (draggingEl) {
            _this6.updateTabOrderFromDOM();
          }
          return;
        }
        var sourceWindow = _this6.manager.getWindow(sourceWindowId);
        if (sourceWindow) {
          var _sourceOpts$mergeable, _targetOpts$allowInco;
          var sourceOpts = sourceWindow.options.tabOptions;
          var targetOpts = _this6.options.tabOptions;
          var isMergeable = (_sourceOpts$mergeable = sourceOpts.mergeable) !== null && _sourceOpts$mergeable !== void 0 ? _sourceOpts$mergeable : sourceOpts.detachable;
          var allowsIncoming = (_targetOpts$allowInco = targetOpts.allowIncomingMerge) !== null && _targetOpts$allowInco !== void 0 ? _targetOpts$allowInco : true;
          var customFilterPassed = !targetOpts.onMergeAttempt || targetOpts.onMergeAttempt(sourceWindow, _this6);
          if (!isMergeable || !allowsIncoming || !customFilterPassed) {
            return;
          }
          var tabData = JSON.parse(tabDataJSON);
          _this6.addTab(tabData, true);
          sourceWindow.closeTab(parseInt(sourceTabId, 10));
        }
      }, {
        passive: false
      });
    }
  }, {
    key: "createTabElement",
    value: function createTabElement(tabData, index) {
      var _this$options$tabOpti2,
        _this7 = this;
      var tabBar = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-tab-bar"));
      var tabOpts = (_this$options$tabOpti2 = this.options.tabOptions) !== null && _this$options$tabOpti2 !== void 0 ? _this$options$tabOpti2 : {};
      var tabEl = document.createElement("div");
      tabEl.className = "".concat(_types.LIBRARY_NAME, "-tab");
      tabEl.setAttribute("role", "tab");
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
          var indexToClose = _this7.tabs.findIndex(function (t) {
            return t.tabEl === tabEl;
          });
          if (indexToClose !== -1) {
            _this7.closeTab(indexToClose);
          }
        }, {
          passive: false
        });
        tabEl.appendChild(closeBtn);
      }
      var tabContentEl = document.createElement("div");
      tabContentEl.className = "".concat(_types.LIBRARY_NAME, "-tab-content");
      tabContentEl.setAttribute("role", "tabpanel");
      this.contentEl.appendChild(tabContentEl);
      this.renderContent(tabContentEl, tabData.content);
      tabEl.addEventListener("click", function (e) {
        _this7.activateTab(+tabEl.dataset.tabId);
      }, {
        passive: false
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
      var _this8 = this;
      tabEl.draggable = true;
      tabEl.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", tabEl.dataset.tabId);
        tabEl.classList.add("".concat(_types.LIBRARY_NAME, "-dragging"));
        if (_this8.options.tabOptions.detachable) {
          var tabIndex = parseInt(tabEl.dataset.tabId, 10);
          if (!isNaN(tabIndex) && _this8.options.tabs[tabIndex]) {
            var tabData = _this8.options.tabs[tabIndex];
            e.dataTransfer.setData("application/winlet-tab", JSON.stringify(tabData));
            e.dataTransfer.setData("application/winlet-source-window-id", _this8.id);
            _this8.manager.onTabDragStart(_this8.id);
          }
        }
      }, {
        passive: true
      });
      tabEl.addEventListener("dragend", function () {
        tabEl.classList.remove("".concat(_types.LIBRARY_NAME, "-dragging"));
        _this8.manager.onTabDragEnd();
      }, {
        passive: true
      });
      tabEl.addEventListener("dragover", function (e) {
        var _this8$manager$draggi;
        if (((_this8$manager$draggi = _this8.manager.draggingTabInfo) === null || _this8$manager$draggi === void 0 ? void 0 : _this8$manager$draggi.sourceWindowId) !== _this8.id) {
          return;
        }
        e.preventDefault();
        var draggingEl = document.querySelector(".".concat(_types.LIBRARY_NAME, "-tab.").concat(_types.LIBRARY_NAME, "-dragging"));
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
      var wasActive = (_this$tabs$index = this.tabs[index]) === null || _this$tabs$index === void 0 ? void 0 : _this$tabs$index.tabEl.classList.contains("".concat(_types.LIBRARY_NAME, "-active"));
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
      if (index < 0 || index >= this.tabs.length) return;
      this.tabs.forEach(function (tab, i) {
        var isActive = i === index;
        tab.tabEl.classList.toggle("".concat(_types.LIBRARY_NAME, "-active"), isActive);
        tab.tabEl.setAttribute("aria-selected", String(isActive));
        tab.contentEl.classList.toggle("".concat(_types.LIBRARY_NAME, "-active"), isActive);
      });
      if (this.searchBarEl) {
        this._performSearch();
      }
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
    key: "createSplitView",
    value: function createSplitView(container, options) {
      var _this9 = this;
      container.innerHTML = "";
      var splitViewEl = document.createElement("div");
      splitViewEl.className = "".concat(_types.LIBRARY_NAME, "-split-view ").concat(_types.LIBRARY_NAME, "-split-view-").concat(options.direction);
      container.appendChild(splitViewEl);
      options.panes.forEach(function (paneOptions, index) {
        var paneEl = document.createElement("div");
        paneEl.className = "".concat(_types.LIBRARY_NAME, "-split-pane");
        paneEl.id = paneOptions.id;
        if (paneOptions.size) {
          paneEl.style.flex = "0 0 ".concat(paneOptions.size);
        } else {
          paneEl.style.flex = "1 1 0";
        }
        if (paneOptions.minSize) {
          if (options.direction === "horizontal") {
            paneEl.style.minWidth = paneOptions.minSize;
          } else {
            paneEl.style.minHeight = paneOptions.minSize;
          }
        }
        _this9.renderContent(paneEl, paneOptions.content);
        splitViewEl.appendChild(paneEl);
        if (index < options.panes.length - 1) {
          var resizerEl = document.createElement("div");
          resizerEl.className = "".concat(_types.LIBRARY_NAME, "-split-resizer");
          if (paneOptions.resizable !== false) {
            _this9.makePaneResizable(resizerEl, paneEl, options.direction);
          } else {
            resizerEl.style.pointerEvents = "none";
          }
          splitViewEl.appendChild(resizerEl);
        }
      });
    }
  }, {
    key: "makePaneResizable",
    value: function makePaneResizable(resizer, prevPane, direction) {
      resizer.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        var startX = e.clientX;
        var startY = e.clientY;
        var startWidth = prevPane.offsetWidth;
        var startHeight = prevPane.offsetHeight;
        var onPointerMove = function onPointerMove(moveE) {
          if (direction === "horizontal") {
            var newWidth = startWidth + (moveE.clientX - startX);
            prevPane.style.flexBasis = "".concat(newWidth, "px");
          } else {
            var newHeight = startHeight + (moveE.clientY - startY);
            prevPane.style.flexBasis = "".concat(newHeight, "px");
          }
        };
        var _onPointerUp = function onPointerUp() {
          document.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("pointerup", _onPointerUp);
        };
        document.addEventListener("pointermove", onPointerMove, {
          passive: true
        });
        document.addEventListener("pointerup", _onPointerUp, {
          passive: true
        });
      }, {
        passive: false
      });
    }
  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var _this0 = this;
      this.el.addEventListener("click", function () {
        return _this0.focus();
      }, true);
      this.el.addEventListener("focusin", function () {
        return _this0.focus();
      }, {
        passive: true
      });
      this.boundGlobalClickHandler = function () {
        if (_this0.isMenuOpen) {
          _this0.closeAllMenus();
        }
      };
      document.addEventListener("click", this.boundGlobalClickHandler, {
        passive: true
      });
      var controlsEl = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-controls"));
      controlsEl === null || controlsEl === void 0 || controlsEl.addEventListener("click", function (e) {
        var target = e.target;
        var button = target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn"));
        if (!button) return;
        if (button.classList.contains("".concat(_types.LIBRARY_NAME, "-close-btn"))) {
          e.stopPropagation();
          if (_this0.options._isPopup) {
            var _this0$popupCloseCall;
            (_this0$popupCloseCall = _this0.popupCloseCallback) === null || _this0$popupCloseCall === void 0 || _this0$popupCloseCall.call(_this0, _types.CLOSE_BUTTON_RESULT);
          }
          _this0.close();
        } else if (button.classList.contains("".concat(_types.LIBRARY_NAME, "-maximize-btn"))) {
          e.stopPropagation();
          _this0.toggleMaximize();
        } else if (button.classList.contains("".concat(_types.LIBRARY_NAME, "-minimize-btn"))) {
          e.stopPropagation();
          _this0.minimize();
        } else if (button.classList.contains("".concat(_types.LIBRARY_NAME, "-refresh-btn"))) {
          e.stopPropagation();
          _this0.unvirtualize();
        } else if (button.classList.contains("".concat(_types.LIBRARY_NAME, "-custom-control-btn"))) {
          e.stopPropagation();
          var name = button.dataset.name;
          var control = _this0.options.customControls.find(function (c) {
            return c.name === name;
          });
          control === null || control === void 0 || control.action(_this0);
        }
      }, {
        passive: false
      });
      if (this.options.windowOptions.movable) this.makeMovable();
      if (this.options.windowOptions.resizableX || this.options.windowOptions.resizableY) this.makeResizable();
      if (this.options.contextMenu.length > 0) {
        this.titleBarEl.addEventListener("contextmenu", function (e) {
          var target = e.target;
          if (target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-menu-item, .").concat(_types.LIBRARY_NAME, "-tab"))) {
            return;
          }
          e.preventDefault();
          _this0.manager.showContextMenu(e.clientX, e.clientY, _this0.options.contextMenu, _this0);
        }, {
          passive: false
        });
        this.titleBarEl.addEventListener("pointerdown", function (e) {
          if (e.pointerType !== "touch") return;
          _this0.contextMenuTimer = window.setTimeout(function () {
            _this0.contextMenuTimer = null;
            _this0.manager.showContextMenu(e.clientX, e.clientY, _this0.options.contextMenu, _this0);
          }, _this0.MOBILE_CONTEXT_MENU_TIMEOUT);
        }, {
          passive: true
        });
        var clearContextMenuTimer = function clearContextMenuTimer() {
          if (_this0.contextMenuTimer) {
            clearTimeout(_this0.contextMenuTimer);
            _this0.contextMenuTimer = null;
          }
        };
        this.titleBarEl.addEventListener("pointermove", clearContextMenuTimer, {
          passive: true
        });
        this.titleBarEl.addEventListener("pointerup", clearContextMenuTimer, {
          passive: true
        });
        this.titleBarEl.addEventListener("pointercancel", clearContextMenuTimer, {
          passive: true
        });
      }
      document.addEventListener("keydown", function (e) {
        if (!_this0.focused) return;
        if (_this0.options.search.enabled && e.ctrlKey && e.key === "f") {
          e.preventDefault();
          _this0.openSearch();
        }
        if (e.key === "Escape" && _this0.searchBarEl) {
          _this0.closeSearch();
        }
      }, {
        passive: false
      });
    }
  }, {
    key: "makeMovable",
    value: function makeMovable() {
      var _this1 = this;
      var onPointerDown = function onPointerDown(e) {
        var target = e.target;
        if (target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-resize-handle, .").concat(_types.LIBRARY_NAME, "-menu-item, .").concat(_types.LIBRARY_NAME, "-tab, .").concat(_types.LIBRARY_NAME, "-tab-add-btn"))) {
          return;
        }
        if (e.button !== 0) return;
        e.preventDefault();
        _this1.focus();
        var startX = e.clientX,
          startY = e.clientY;
        var isDragging = false;
        var initialLeft;
        var initialTop;
        var ghostEl = null;
        if (_this1.options.windowOptions.useGhostWindow) {
          var _this1$manager$contai;
          ghostEl = document.createElement("div");
          ghostEl.className = "".concat(_types.LIBRARY_NAME, "-ghost-window");
          (_this1$manager$contai = _this1.manager.container) === null || _this1$manager$contai === void 0 || _this1$manager$contai.appendChild(ghostEl);
          ghostEl.style.left = "".concat(_this1.el.offsetLeft, "px");
          ghostEl.style.top = "".concat(_this1.el.offsetTop, "px");
          ghostEl.style.width = "".concat(_this1.el.offsetWidth, "px");
          ghostEl.style.height = "".concat(_this1.el.offsetHeight, "px");
        }
        _this1.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-dragging"));
        var onPointerMove = function onPointerMove(moveE) {
          var _this1$el, _this1$throttledEmitM;
          if (!((_this1$el = _this1.el) !== null && _this1$el !== void 0 && _this1$el.isConnected)) return;
          if (!isDragging) {
            var deltaX = Math.abs(moveE.clientX - startX);
            var deltaY = Math.abs(moveE.clientY - startY);
            if (deltaX > _this1.DRAG_THRESHOLD || deltaY > _this1.DRAG_THRESHOLD) {
              isDragging = true;
              _this1.el.setPointerCapture(e.pointerId);
              _this1.contentEl.style.pointerEvents = "none";
              _this1.emit("move-start", _this1);
              if (_this1.state === "maximized") {
                var restoredWidth = _this1.lastState.width;
                var clickRatio = e.clientX / _this1.el.offsetWidth;
                var titleBarRect = _this1.titleBarEl.getBoundingClientRect();
                var offsetY = e.clientY - titleBarRect.top;
                var posX = e.clientX - restoredWidth * clickRatio;
                var posY = e.clientY - offsetY;
                _this1.restore();
                _this1.setPosition(posX, posY);
              }
              initialLeft = _this1.el.offsetLeft;
              initialTop = _this1.el.offsetTop;
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
            _this1.setPosition(newLeft, newTop);
          }
          (_this1$throttledEmitM = _this1.throttledEmitMove) === null || _this1$throttledEmitM === void 0 || _this1$throttledEmitM.call(_this1);
        };
        var _onPointerUp2 = function onPointerUp() {
          document.removeEventListener("pointermove", onPointerMove);
          document.removeEventListener("pointerup", _onPointerUp2);
          if (ghostEl) {
            _this1.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
            ghostEl.remove();
          }
          if (isDragging) {
            _this1.el.releasePointerCapture(e.pointerId);
            _this1.contentEl.style.pointerEvents = "auto";
            _this1.emit("move-end", _this1);
            (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
              return _regenerator["default"].wrap(function (_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 1;
                    return _this1.manager.updateVirtualization();
                  case 1:
                    return _context.abrupt("return", _context.sent);
                  case 2:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
          _this1.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-dragging"));
        };
        document.addEventListener("pointermove", onPointerMove, {
          passive: true
        });
        document.addEventListener("pointerup", _onPointerUp2, {
          passive: true
        });
      };
      this.titleBarEl.addEventListener("pointerdown", onPointerDown, {
        passive: false
      });
      if (this.options.windowOptions.maximizable) {
        this.titleBarEl.addEventListener("dblclick", function (e) {
          if (_this1.options.windowOptions.maximizableOnDblClick) {
            var target = e.target;
            if (target.closest(".".concat(_types.LIBRARY_NAME, "-control-btn, .").concat(_types.LIBRARY_NAME, "-menu-item, .").concat(_types.LIBRARY_NAME, "-tab"))) {
              return;
            }
            _this1.toggleMaximize();
          }
        });
      }
    }
  }, {
    key: "makeResizable",
    value: function makeResizable() {
      var _this10 = this;
      this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-resize-handle")).forEach(function (handle) {
        handle.addEventListener("pointerdown", function (e) {
          if (e.button !== 0 || !(handle !== null && handle !== void 0 && handle.isConnected)) return;
          e.preventDefault();
          e.stopPropagation();
          _this10.focus();
          _this10.contentEl.style.pointerEvents = "none";
          handle.setPointerCapture(e.pointerId);
          _this10.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-resizing"));
          _this10.emit("resize-start", _this10);
          var ghostEl = null;
          if (_this10.options.windowOptions.useGhostWindow) {
            var _this10$manager$conta;
            ghostEl = document.createElement("div");
            ghostEl.className = "".concat(_types.LIBRARY_NAME, "-ghost-window");
            (_this10$manager$conta = _this10.manager.container) === null || _this10$manager$conta === void 0 || _this10$manager$conta.appendChild(ghostEl);
          }
          var direction = handle.className.replace("".concat(_types.LIBRARY_NAME, "-resize-handle "), "");
          var startX = e.clientX,
            startY = e.clientY;
          var _this10$el = _this10.el,
            startWidth = _this10$el.offsetWidth,
            startHeight = _this10$el.offsetHeight,
            startLeft = _this10$el.offsetLeft,
            startTop = _this10$el.offsetTop;
          var _this10$options = _this10.options,
            minWidth = _this10$options.minWidth,
            minHeight = _this10$options.minHeight;
          var onPointerMove = function onPointerMove(moveE) {
            var _this10$throttledEmit;
            var newWidth = startWidth,
              newHeight = startHeight,
              newLeft = startLeft,
              newTop = startTop;
            var deltaX = moveE.clientX - startX;
            var deltaY = moveE.clientY - startY;
            if (direction.includes("".concat(_types.LIBRARY_NAME, "-e"))) newWidth = Math.max(minWidth, startWidth + deltaX);
            if (direction.includes("".concat(_types.LIBRARY_NAME, "-w"))) {
              newWidth = Math.max(minWidth, startWidth - deltaX);
              newLeft = startLeft + deltaX;
            }
            if (direction.includes("".concat(_types.LIBRARY_NAME, "-s"))) newHeight = Math.max(minHeight, startHeight + deltaY);
            if (direction.includes("".concat(_types.LIBRARY_NAME, "-n"))) {
              newHeight = Math.max(minHeight, startHeight - deltaY);
              newTop = startTop + deltaY;
            }
            if (ghostEl) {
              ghostEl.style.left = "".concat(newLeft, "px");
              ghostEl.style.top = "".concat(newTop, "px");
              ghostEl.style.width = "".concat(newWidth, "px");
              ghostEl.style.height = "".concat(newHeight, "px");
            } else {
              _this10.setSize(newWidth, newHeight);
              _this10.setPosition(newLeft, newTop);
            }
            (_this10$throttledEmit = _this10.throttledEmitResize) === null || _this10$throttledEmit === void 0 || _this10$throttledEmit.call(_this10);
          };
          var _onPointerUp3 = function onPointerUp() {
            handle.releasePointerCapture(e.pointerId);
            _this10.contentEl.style.pointerEvents = "auto";
            if (ghostEl) {
              _this10.setSize(ghostEl.offsetWidth, ghostEl.offsetHeight);
              _this10.setPosition(ghostEl.offsetLeft, ghostEl.offsetTop);
              ghostEl.remove();
            }
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", _onPointerUp3);
            _this10.emit("resize-end", _this10);
            _this10.updateDebugOverlay();
            (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
              return _regenerator["default"].wrap(function (_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 1;
                    return _this10.manager.updateVirtualization();
                  case 1:
                    return _context2.abrupt("return", _context2.sent);
                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))();
            _this10.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-resizing"));
          };
          document.addEventListener("pointermove", onPointerMove, {
            passive: true
          });
          document.addEventListener("pointerup", _onPointerUp3, {
            passive: true
          });
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
    key: "updateDebugOverlay",
    value: function updateDebugOverlay() {
      if (this.debugOverlayEl) {
        var pos = this.getPosition();
        var size = this.getSize();
        this.debugOverlayEl.textContent = "ID:    ".concat(this.id, "\nState: ").concat(this.state, "\nPos:   x:").concat(Math.round(pos.x), ", y:").concat(Math.round(pos.y), "\nSize:  w:").concat(Math.round(size.width), ", h:").concat(Math.round(size.height), "\nFocus: ").concat(this.focused, "\nz-idx: ").concat(this.el.style.zIndex, "\nVirt:  ").concat(this.virtualizationLevel).trim();
      }
    }
  }, {
    key: "getUnsafeContentLevel",
    value: function getUnsafeContentLevel() {
      if (this.mainContentEl.querySelector("iframe, frame, video, audio, applet, embed, object")) {
        return "frozen";
      }
      if (this.mainContentEl.querySelector("img, input, textarea, select, canvas, [contentEditable=true]")) {
        return "suspended";
      }
      return "unloaded";
    }
  }, {
    key: "virtualize",
    value: (function () {
      var _virtualize = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(level) {
        var currentIndex, targetIndex, restoreMode, strategy, img, _t, _t2;
        return _regenerator["default"].wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (level === "auto") {
                level = this.getUnsafeContentLevel();
              }
              if (!(level === "none")) {
                _context3.next = 1;
                break;
              }
              return _context3.abrupt("return");
            case 1:
              currentIndex = this.virtualizationHierarchy.indexOf(this.virtualizationLevel);
              targetIndex = this.virtualizationHierarchy.indexOf(level);
              if (!(targetIndex <= currentIndex)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              this.cleanupVirtualizationStyles();
              this.el.classList.add("".concat(_types.LIBRARY_NAME, "-virtualization-lock"));
              restoreMode = this.options.virtualizationRestoreMode || this.manager.getGlobalConfig().virtualizationRestoreMode || "auto";
              if (restoreMode === "manual" && this.options.showVirtualizationRefreshButton) {
                this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-virtualized-manual"));
              }
              strategy = this.options.virtualizationStrategy || this.manager.getGlobalConfig().virtualizationStrategy;
              if (!(strategy === "canvas" && level === "unloaded")) {
                _context3.next = 7;
                break;
              }
              this.showLoader();
              _context3.prev = 3;
              _context3.next = 4;
              return this.capture();
            case 4:
              this.canvasSnapshot = _context3.sent;
              if (this.canvasOverlayEl && this.canvasSnapshot) {
                img = document.createElement("img");
                img.src = this.canvasSnapshot;
                this.canvasOverlayEl.innerHTML = "";
                this.canvasOverlayEl.appendChild(img);
                this.canvasOverlayEl.style.display = "block";
              }
              _context3.next = 6;
              break;
            case 5:
              _context3.prev = 5;
              _t = _context3["catch"](3);
              console.error("WinLet: Canvas virtualization failed, falling back to standard.", _t);
              this.canvasSnapshot = null;
            case 6:
              _context3.prev = 6;
              this.hideLoader();
              return _context3.finish(6);
            case 7:
              this.virtualizationLevel = level;
              if (currentIndex === 0 && targetIndex > 0) {
                this.manager.updateTaskbarItem(this, "virtualized");
              }
              _t2 = level;
              _context3.next = _t2 === "frozen" ? 8 : _t2 === "suspended" ? 9 : _t2 === "unloaded" ? 10 : 11;
              break;
            case 8:
              this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-frozen"));
              return _context3.abrupt("continue", 11);
            case 9:
              this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-suspended"));
              return _context3.abrupt("continue", 11);
            case 10:
              this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-virtualized"));
              if (this.tabs.length > 0) {
                this.tabs.forEach(function (tab) {
                  tab.contentEl.innerHTML = "";
                });
              } else {
                this.contentEl.innerHTML = "";
              }
              return _context3.abrupt("continue", 11);
            case 11:
              this.updateDebugOverlay();
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[3, 5, 6, 7]]);
      }));
      function virtualize(_x) {
        return _virtualize.apply(this, arguments);
      }
      return virtualize;
    }())
  }, {
    key: "unvirtualize",
    value: function unvirtualize() {
      var _this11 = this;
      if (this.virtualizationLevel === "none") return;
      this.el.classList.remove("".concat(_types.LIBRARY_NAME, "-virtualization-lock"), "".concat(_types.LIBRARY_NAME, "-is-virtualized-manual"));
      if (this.canvasSnapshot && this.canvasOverlayEl) {
        this.canvasOverlayEl.style.display = "none";
        this.canvasOverlayEl.innerHTML = "";
        this.canvasSnapshot = null;
      }
      this.manager.updateTaskbarItem(this, "unvirtualized");
      var previousLevel = this.virtualizationLevel;
      this.virtualizationLevel = "none";
      this.cleanupVirtualizationStyles();
      if (previousLevel === "unloaded") {
        this.showLoader();
        requestAnimationFrame(function () {
          _this11.isContentLoaded = false;
          _this11._renderInitialContent();
          _this11.hideLoader();
        });
      }
      this.updateDebugOverlay();
    }
  }, {
    key: "cleanupVirtualizationStyles",
    value: function cleanupVirtualizationStyles() {
      this.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-frozen"), "".concat(_types.LIBRARY_NAME, "-is-suspended"), "".concat(_types.LIBRARY_NAME, "-is-virtualized"));
      this.contentEl.style.display = "";
    }
  }, {
    key: "close",
    value: function close() {
      var results = this.emit("before-close", this);
      if (results !== null && results !== void 0 && results.includes(false)) {
        return;
      }
      if (this.boundGlobalClickHandler) {
        document.removeEventListener("click", this.boundGlobalClickHandler);
      }
      this.emit("close", this);
      this.manager.destroyWindow(this.id);
    }
  }, {
    key: "minimize",
    value: function minimize(options) {
      var _this12 = this;
      if (this.virtualizationLevel !== "none") {
        this.unvirtualize();
      }
      if (this.state === "minimized") return;
      if (this.state !== "normal") {
        this.restore();
      }
      var doMinimize = function doMinimize() {
        _this12.state = "minimized";
        _this12.el.classList.add("".concat(_types.LIBRARY_NAME, "-minimized"));
        _this12.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-minimizing"));
        _this12.el.setAttribute("aria-hidden", "true");
        _this12.manager.updateTaskbarItem(_this12, "minimized");
        _this12.blur();
        var globalConfig = _this12.manager.getGlobalConfig();
        if (globalConfig.enableVirtualization && _this12.options.virtualizable) {
          var _globalConfig$virtual;
          if (_this12.minimizeVirtualizeTimer) {
            clearTimeout(_this12.minimizeVirtualizeTimer);
          }
          _this12.minimizeVirtualizeTimer = window.setTimeout(function () {
            _this12.virtualize("auto");
          }, (_globalConfig$virtual = globalConfig.virtualizationDelay) !== null && _globalConfig$virtual !== void 0 ? _globalConfig$virtual : 5000);
        }
        _this12.updateDebugOverlay();
        _this12.manager.updateVirtualization();
      };
      this.el.setAttribute("inert", "");
      if (this.manager.getGlobalConfig().enableAnimations) {
        var originPriority = [options === null || options === void 0 ? void 0 : options.origin, this.options.animationOrigin, this.manager.getGlobalConfig().animateFromTaskbar ? this.options._taskbarItem : null];
        var origin = originPriority.find(function (o) {
          return o != null;
        });
        this.el.style.transformOrigin = this._calculateTransformOrigin(origin);
        this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-minimizing"));
        this.el.addEventListener("transitionend", doMinimize, {
          once: true
        });
      } else {
        doMinimize();
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
      var _this13 = this;
      if (this.virtualizationLevel !== "none") {
        this.unvirtualize();
      }
      if (this.state !== "maximized") {
        if (this.state !== "normal") this.restore();
        this.lastState = {
          x: this.el.offsetLeft,
          y: this.el.offsetTop,
          width: this.el.offsetWidth,
          height: this.el.offsetHeight
        };
        this.state = "maximized";
        this.el.classList.add("".concat(_types.LIBRARY_NAME, "-maximized"));
        var doMaximize = function doMaximize() {
          _this13.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-maximizing"));
          _this13.setPosition(0, 0);
          _this13.setSize("100%", "100%");
          _this13.updateDebugOverlay();
        };
        if (this.manager.getGlobalConfig().enableAnimations) {
          this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-maximizing"));
          this.el.style.top = "0px";
          this.el.style.left = "0px";
          this.el.style.width = "100%";
          this.el.style.height = "100%";
          this.el.addEventListener("transitionend", doMaximize, {
            once: true,
            passive: true
          });
        } else {
          doMaximize();
        }
        var maxBtn = this.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
        if (maxBtn) {
          maxBtn.title = "Restore";
          maxBtn.value = "\u274F";
          maxBtn.setAttribute("aria-label", "Restore");
        }
      }
    }
  }, {
    key: "restore",
    value: function restore(options) {
      var _this14 = this;
      if (this.minimizeVirtualizeTimer) {
        clearTimeout(this.minimizeVirtualizeTimer);
        this.minimizeVirtualizeTimer = null;
      }
      if (this.virtualizationLevel !== "none") {
        this.unvirtualize();
      }
      if (this.state === "minimized") {
        var doRestore = function doRestore() {
          _this14.state = "normal";
          _this14.el.classList.remove("".concat(_types.LIBRARY_NAME, "-is-restoring-from-minimized"));
          _this14.el.style.transformOrigin = "";
          _this14.updateDebugOverlay();
          _this14.manager.updateVirtualization();
        };
        this.el.removeAttribute("aria-hidden");
        this.el.removeAttribute("inert");
        this.el.style.transition = "";
        if (this.manager.getGlobalConfig().enableAnimations) {
          var originPriority = [options === null || options === void 0 ? void 0 : options.origin, this.options.animationOrigin, this.manager.getGlobalConfig().animateFromTaskbar ? this.options._taskbarItem : null];
          var origin = originPriority.find(function (o) {
            return o != null;
          });
          this.el.style.transformOrigin = this._calculateTransformOrigin(origin);
          this.el.classList.remove("".concat(_types.LIBRARY_NAME, "-minimized"));
          this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-restoring-from-minimized"));
          this.el.addEventListener("transitionend", doRestore, {
            once: true
          });
        } else {
          this.el.classList.remove("".concat(_types.LIBRARY_NAME, "-minimized"));
          doRestore();
        }
        this.manager.updateTaskbarItem(this, "restored");
        this.focus();
      } else if (this.state === "maximized") {
        var _doRestore = function _doRestore() {
          _this14.state = "normal";
          _this14.el.classList.remove("".concat(_types.LIBRARY_NAME, "-maximized"), "".concat(_types.LIBRARY_NAME, "-is-restoring"));
          _this14.el.style.transition = "";
          var maxBtn = _this14.el.querySelector(".".concat(_types.LIBRARY_NAME, "-maximize-btn"));
          if (maxBtn) {
            maxBtn.title = "Maximize";
            maxBtn.value = "\u25A1";
            maxBtn.setAttribute("aria-label", "Maximize");
          }
          _this14.updateDebugOverlay();
        };
        if (this.manager.getGlobalConfig().enableAnimations) {
          this.el.style.transition = "top 0.25s ease-in-out, left 0.25s ease-in-out, width 0.25s ease-in-out, height 0.25s ease-in-out";
          this.el.classList.add("".concat(_types.LIBRARY_NAME, "-is-restoring"));
          this.setSize(this.lastState.width, this.lastState.height);
          this.setPosition(this.lastState.x, this.lastState.y);
          this.el.addEventListener("transitionend", _doRestore, {
            once: true
          });
        } else {
          this.setSize(this.lastState.width, this.lastState.height);
          this.setPosition(this.lastState.x, this.lastState.y);
          _doRestore();
        }
      }
      this.updateDebugOverlay();
      (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 1;
              return _this14.manager.updateVirtualization();
            case 1:
              return _context4.abrupt("return", _context4.sent);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.focused) return;
      var restoreMode = this.options.virtualizationRestoreMode || this.manager.getGlobalConfig().virtualizationRestoreMode || "auto";
      if (this.virtualizationLevel !== "none" && restoreMode === "manual") {
        this.unvirtualize();
      }
      if (this.options.lazyLoad && !this.isContentLoaded) {
        this._renderInitialContent();
      }
      if (this.parentWindow) {
        this.parentWindow.focus();
      }
      this.manager.focusWindow(this);
      this.focused = true;
      this.el.classList.add("".concat(_types.LIBRARY_NAME, "-active"));
      this.updateDebugOverlay();
      this.emit("focus", this);
    }
  }, {
    key: "blur",
    value: function blur() {
      if (!this.focused) return;
      this.focused = false;
      this.el.classList.remove("".concat(_types.LIBRARY_NAME, "-active"));
      this.updateDebugOverlay();
      this.emit("blur", this);
    }
  }, {
    key: "shake",
    value: function shake() {
      var _this15 = this;
      var className = "".concat(_types.LIBRARY_NAME, "-is-shaking");
      if (this.el.classList.contains(className)) {
        return;
      }
      this.el.classList.add(className);
      this.el.addEventListener("animationend", function () {
        _this15.el.classList.remove(className);
      }, {
        once: true,
        passive: true
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this16 = this;
      var results = this.emit("reload", this);
      if (results !== null && results !== void 0 && results.includes(false)) {
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
              _this16.renderContent(container, content);
            }
          } else {
            _this16.renderContent(container, content);
          }
        } else {
          _this16.renderContent(container, content);
        }
      };
      if (this.options.tabs.length > 0) {
        var activeTabIndex = this.tabs.findIndex(function (tab) {
          return tab.tabEl.classList.contains("".concat(_types.LIBRARY_NAME, "-active"));
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
        return tab.tabEl.classList.contains("".concat(_types.LIBRARY_NAME, "-active"));
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
    key: "setStatusBarText",
    value: function setStatusBarText(text) {
      if (this.statusBarEl) {
        if (this.options.statusBar.allowHTML) {
          this.statusBarEl.innerHTML = text;
        } else {
          this.statusBarEl.textContent = text;
        }
      }
    }
  }, {
    key: "openSearch",
    value: function openSearch() {
      var _this17 = this;
      if (this.searchBarEl) {
        var _input = this.searchBarEl.querySelector(".".concat(_types.LIBRARY_NAME, "-search-input"));
        _input === null || _input === void 0 || _input.focus();
        _input === null || _input === void 0 || _input.select();
        return;
      }
      this.searchBarEl = document.createElement("div");
      this.searchBarEl.className = "".concat(_types.LIBRARY_NAME, "-search-bar");
      var s = this.options.search;
      var caseBtn = s.showCaseSensitiveButton ? "<button class=\"".concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"case-sensitive\" title=\"Case Sensitive\">Aa</button>") : "";
      var regexBtn = s.showRegexButton ? "<button class=\"".concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"regex\" title=\"Use Regular Expression\">.*</button>") : "";
      var wordBtn = s.showWholeWordButton ? "<button class=\"".concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"whole-word\" title=\"Match Whole Word\">ab</button>") : "";
      this.searchBarEl.innerHTML = "\n\t\t\t<input type=\"text\" class=\"".concat(_types.LIBRARY_NAME, "-search-input\" placeholder=\"Search...\">\n\t\t\t<span class=\"").concat(_types.LIBRARY_NAME, "-search-results\">0/0</span>\n\t\t\t").concat(caseBtn, "\n\t\t\t").concat(regexBtn, "\n\t\t\t").concat(wordBtn, "\n\t\t\t<button class=\"").concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"prev\" title=\"Previous Match\">&uarr;</button>\n\t\t\t<button class=\"").concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"next\" title=\"Next Match\">&darr;</button>\n\t\t\t<button class=\"").concat(_types.LIBRARY_NAME, "-search-btn\" data-action=\"close\" title=\"Close\">&times;</button>\n\t\t");
      this.contentEl.insertBefore(this.searchBarEl, this.contentEl.firstChild);
      this.updateSearchButtonState();
      var input = this.searchBarEl.querySelector(".".concat(_types.LIBRARY_NAME, "-search-input"));
      input.focus();
      input.addEventListener("input", function () {
        return _this17._performSearch();
      }, {
        passive: true
      });
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (e.shiftKey) {
            _this17.navigateSearch("prev");
          } else {
            _this17.navigateSearch("next");
          }
        }
      }, {
        passive: false
      });
      this.searchBarEl.addEventListener("click", function (e) {
        var target = e.target;
        var button = target.closest("[data-action]");
        if (!button) return;
        var action = button.dataset.action;
        switch (action) {
          case "close":
            _this17.closeSearch();
            break;
          case "prev":
            _this17.navigateSearch("prev");
            break;
          case "next":
            _this17.navigateSearch("next");
            break;
          case "case-sensitive":
            _this17.searchOptionsState.caseSensitive = !_this17.searchOptionsState.caseSensitive;
            _this17.updateSearchButtonState(button, _this17.searchOptionsState.caseSensitive);
            _this17._performSearch();
            break;
          case "regex":
            _this17.searchOptionsState.regex = !_this17.searchOptionsState.regex;
            _this17.updateSearchButtonState(button, _this17.searchOptionsState.regex);
            _this17._performSearch();
            break;
          case "whole-word":
            _this17.searchOptionsState.wholeWord = !_this17.searchOptionsState.wholeWord;
            _this17.updateSearchButtonState(button, _this17.searchOptionsState.wholeWord);
            _this17._performSearch();
            break;
        }
      }, {
        passive: true
      });
    }
  }, {
    key: "closeSearch",
    value: function closeSearch() {
      if (this.searchBarEl) {
        this.clearSearchHighlights();
        this.searchBarEl.remove();
        this.searchBarEl = null;
      }
    }
  }, {
    key: "navigateSearch",
    value: function navigateSearch(direction) {
      if (this.searchResults.length === 0) return;
      if (direction === "next") {
        this.currentSearchIndex = (this.currentSearchIndex + 1) % this.searchResults.length;
      } else {
        this.currentSearchIndex = (this.currentSearchIndex - 1 + this.searchResults.length) % this.searchResults.length;
      }
      this.updateSearchResults(this.currentSearchIndex + 1, this.searchResults.length);
      this.highlightCurrentResult();
    }
  }, {
    key: "highlightCurrentResult",
    value: function highlightCurrentResult() {
      var _this18 = this;
      this.searchResults.forEach(function (el, index) {
        el.classList.toggle("".concat(_types.LIBRARY_NAME, "-search-highlight-active"), index === _this18.currentSearchIndex);
      });
      if (this.currentSearchIndex > -1) {
        this.searchResults[this.currentSearchIndex].scrollIntoView({
          behavior: "instant",
          block: "nearest"
        });
      }
    }
  }, {
    key: "clearSearchHighlights",
    value: function clearSearchHighlights() {
      var allContentAreas = this.el.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-content, .").concat(_types.LIBRARY_NAME, "-split-pane"));
      allContentAreas.forEach(function (area) {
        var highlights = area.querySelectorAll(".".concat(_types.LIBRARY_NAME, "-search-highlight"));
        highlights.forEach(function (el) {
          var parent = el.parentNode;
          if (parent) {
            parent.replaceChild(document.createTextNode(el.textContent || ""), el);
            parent.normalize();
          }
        });
      });
      this.searchResults = [];
      this.currentSearchIndex = -1;
    }
  }, {
    key: "updateSearchResults",
    value: function updateSearchResults(current, total) {
      if (this.searchBarEl) {
        var resultsEl = this.searchBarEl.querySelector(".".concat(_types.LIBRARY_NAME, "-search-results"));
        resultsEl.textContent = "".concat(total > 0 ? current : 0, "/").concat(total);
      }
    }
  }, {
    key: "_performSearch",
    value: function _performSearch() {
      if (!this.searchBarEl) return;
      this.clearSearchHighlights();
      var input = this.searchBarEl.querySelector(".".concat(_types.LIBRARY_NAME, "-search-input"));
      var query = input.value;
      if (query.length < 1) {
        this.updateSearchResults(0, 0);
        return;
      }
      var searchRoot = this.contentEl;
      var activeTabIndex = this.tabs.findIndex(function (tab) {
        return tab.tabEl.classList.contains("".concat(_types.LIBRARY_NAME, "-active"));
      });
      if (this.options.tabs.length > 0 && activeTabIndex !== -1 && this.tabs[activeTabIndex]) {
        searchRoot = this.tabs[activeTabIndex].contentEl;
      }
      if (!searchRoot) return;
      var contentArea = this.options.search.targetSelector ? searchRoot.querySelector(this.options.search.targetSelector) : searchRoot;
      if (!contentArea) return;
      if (!this.searchOptionsState.regex) {
        query = _utils["default"].escapeRegex(query);
      }
      if (this.searchOptionsState.wholeWord) {
        query = "\\b".concat(query, "\\b");
      }
      var regex;
      try {
        regex = new RegExp(query, this.searchOptionsState.caseSensitive ? "g" : "gi");
        input.style.borderColor = "";
      } catch (e) {
        input.style.borderColor = "red";
        return;
      }
      var newHighlights = [];
      var nodesToModify = [];
      var walker = document.createTreeWalker(contentArea, NodeFilter.SHOW_TEXT, function (node) {
        var _node$parentElement, _node$parentElement2, _node$parentElement3;
        return ((_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.tagName) === "SCRIPT" || ((_node$parentElement2 = node.parentElement) === null || _node$parentElement2 === void 0 ? void 0 : _node$parentElement2.tagName) === "STYLE" || (_node$parentElement3 = node.parentElement) !== null && _node$parentElement3 !== void 0 && _node$parentElement3.classList.contains("".concat(_types.LIBRARY_NAME, "-search-highlight")) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      });
      var currentNode;
      while (currentNode = walker.nextNode()) {
        var _textNode$textContent;
        var textNode = currentNode;
        if (!((_textNode$textContent = textNode.textContent) !== null && _textNode$textContent !== void 0 && _textNode$textContent.trim())) continue;
        var matches = textNode.textContent.match(regex);
        if (matches) {
          nodesToModify.push({
            node: textNode,
            matches: matches
          });
        }
      }
      var _loop = function _loop() {
        var _nodesToModify$_i = _nodesToModify[_i],
          node = _nodesToModify$_i.node,
          matches = _nodesToModify$_i.matches;
        var parent = node.parentNode;
        if (!parent) return 1;
        var parts = node.textContent.split(regex);
        parts.forEach(function (part, i) {
          if (part) {
            parent.insertBefore(document.createTextNode(part), node);
          }
          if (i < matches.length) {
            var highlight = document.createElement("span");
            highlight.className = "".concat(_types.LIBRARY_NAME, "-search-highlight");
            highlight.textContent = matches[i];
            parent.insertBefore(highlight, node);
            newHighlights.push(highlight);
          }
        });
        parent.removeChild(node);
      };
      for (var _i = 0, _nodesToModify = nodesToModify; _i < _nodesToModify.length; _i++) {
        if (_loop()) continue;
      }
      this.searchResults = newHighlights;
      this.currentSearchIndex = this.searchResults.length > 0 ? 0 : -1;
      this.updateSearchResults(this.currentSearchIndex + 1, this.searchResults.length);
      this.highlightCurrentResult();
    }
  }, {
    key: "updateSearchButtonState",
    value: function updateSearchButtonState(button, isActive) {
      if (!this.searchBarEl) return;
      if (button && typeof isActive === "boolean") {
        button.classList.toggle("".concat(_types.LIBRARY_NAME, "-search-btn-active"), isActive);
      } else {
        var s = this.searchOptionsState;
        var caseBtn = this.searchBarEl.querySelector("[data-action=\"case-sensitive\"]");
        var regexBtn = this.searchBarEl.querySelector("[data-action=\"regex\"]");
        var wordBtn = this.searchBarEl.querySelector("[data-action=\"whole-word\"]");
        caseBtn === null || caseBtn === void 0 || caseBtn.classList.toggle("".concat(_types.LIBRARY_NAME, "-search-btn-active"), s.caseSensitive);
        regexBtn === null || regexBtn === void 0 || regexBtn.classList.toggle("".concat(_types.LIBRARY_NAME, "-search-btn-active"), s.regex);
        wordBtn === null || wordBtn === void 0 || wordBtn.classList.toggle("".concat(_types.LIBRARY_NAME, "-search-btn-active"), s.wholeWord);
      }
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
    key: "createAsyncPopup",
    value: function createAsyncPopup(options) {
      var manager = this.getChildManager();
      var popupOptionsWithParent = _objectSpread(_objectSpread({}, options), {}, {
        _parent: this
      });
      return manager.popupAsync(popupOptionsWithParent);
    }
  }, {
    key: "capture",
    value: function () {
      var _capture = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
        var _this19 = this;
        var e, canvas, _e, _t3;
        return _regenerator["default"].wrap(function (_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(typeof window.html2canvas !== "function")) {
                _context5.next = 1;
                break;
              }
              e = new _errors.WinLetError("The capture() feature requires the 'html2canvas' library. Please include it from a CDN to use this feature. https://html2canvas.hertzen.com/");
              console.warn(e);
              return _context5.abrupt("return", Promise.reject(e));
            case 1:
              _context5.prev = 1;
              _context5.next = 2;
              return window.html2canvas(this.el, {
                allowTaint: true,
                useCORS: true,
                logging: false,
                onclone: function onclone(clonedDoc) {
                  var _clonedDoc$querySelec;
                  (_clonedDoc$querySelec = clonedDoc.querySelector("#".concat(_this19.id))) === null || _clonedDoc$querySelec === void 0 || _clonedDoc$querySelec.classList.remove("".concat(_types.LIBRARY_NAME, "-is-resizing"), "".concat(_types.LIBRARY_NAME, "-is-dragging"));
                }
              });
            case 2:
              canvas = _context5.sent;
              return _context5.abrupt("return", canvas.toDataURL("image/png"));
            case 3:
              _context5.prev = 3;
              _t3 = _context5["catch"](1);
              _e = new _errors.WinLetError("html2canvas failed to capture the window. Error: ".concat(_t3.message));
              _e.stack += "\n\n--- Caused by ---\n" + _t3.stack;
              console.error(_e);
              return _context5.abrupt("return", Promise.reject(_e));
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[1, 3]]);
      }));
      function capture() {
        return _capture.apply(this, arguments);
      }
      return capture;
    }()
  }, {
    key: "print",
    value: function print() {
      var _printFrame$contentWi, _printFrame$contentWi4;
      var contentSource = this.getContent();
      if (contentSource.tagName === "IFRAME") {
        var iframe = contentSource;
        try {
          if (document.readyState === "complete") {
            var _iframe$contentWindow2;
            (_iframe$contentWindow2 = iframe.contentWindow) === null || _iframe$contentWindow2 === void 0 || _iframe$contentWindow2.print();
          } else {
            window.addEventListener("load", function () {
              var _iframe$contentWindow3;
              (_iframe$contentWindow3 = iframe.contentWindow) === null || _iframe$contentWindow3 === void 0 || _iframe$contentWindow3.print();
            });
          }
        } catch (e) {
          console.error("WinLet: Could not print iframe content, possibly due to cross-origin restrictions.", e);
        }
        return;
      }
      var size = this.getSize();
      var printFrame = document.createElement("iframe");
      printFrame.style.position = "absolute";
      printFrame.style.opacity = "0.01";
      printFrame.style.border = "0";
      printFrame.style.top = "0";
      printFrame.style.left = "0";
      printFrame.style.width = size.width + "px";
      printFrame.style.height = size.height + "px";
      printFrame.style.zIndex = "1";
      printFrame.style.transform = "scale(0.5)";
      printFrame.style.pointerEvents = "none";
      printFrame.setAttribute("inert", "");
      document.body.appendChild(printFrame);
      var frameDoc = (_printFrame$contentWi = printFrame.contentWindow) === null || _printFrame$contentWi === void 0 ? void 0 : _printFrame$contentWi.document;
      if (!frameDoc) {
        console.error("WinLet: Could not create a document for printing.");
        document.body.removeChild(printFrame);
        return;
      }
      frameDoc.open();
      frameDoc.write("<!DOCTYPE html><html><head>");
      frameDoc.write("<title>".concat(this.getTitle(), "</title>"));
      var styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      styles.forEach(function (style) {
        frameDoc.write(style.outerHTML);
      });
      frameDoc.write("</head><body>");
      frameDoc.write(contentSource.innerHTML);
      frameDoc.write("</body></html>");
      frameDoc.close();
      var doPrint = function () {
        var _ref4 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
          var _printFrame$contentWi2, _printFrame$contentWi3;
          return _regenerator["default"].wrap(function (_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 1;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 300);
                });
              case 1:
                try {
                  (_printFrame$contentWi2 = printFrame.contentWindow) === null || _printFrame$contentWi2 === void 0 || _printFrame$contentWi2.focus();
                  (_printFrame$contentWi3 = printFrame.contentWindow) === null || _printFrame$contentWi3 === void 0 || _printFrame$contentWi3.print();
                } catch (e) {
                  console.error("WinLet: Printing failed.", e);
                } finally {
                  setTimeout(function () {
                    document.body.removeChild(printFrame);
                  }, 500);
                }
              case 2:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function doPrint() {
          return _ref4.apply(this, arguments);
        };
      }();
      if (((_printFrame$contentWi4 = printFrame.contentWindow) === null || _printFrame$contentWi4 === void 0 ? void 0 : _printFrame$contentWi4.document.readyState) === "complete") {
        doPrint();
      } else {
        var _printFrame$contentWi5;
        (_printFrame$contentWi5 = printFrame.contentWindow) === null || _printFrame$contentWi5 === void 0 || _printFrame$contentWi5.addEventListener("load", doPrint);
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
      this.titleEl.setAttribute("aria-label", _utils["default"].sanitizeHTML(title));
      this.manager.updateTaskbarItem(this, "titleChanged");
    }
  }, {
    key: "setIcon",
    value: function setIcon(icon) {
      this.options.icon = icon;
      this.iconEl.innerHTML = "";
      if (!icon) {
        this.manager.updateTaskbarItem(this, "iconChanged");
        return;
      }
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
      this.manager.updateTaskbarItem(this, "iconChanged");
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
      this.updateDebugOverlay();
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
      this.updateDebugOverlay();
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(opacity) {
      var clampedOpacity = Math.max(0, Math.min(1, opacity));
      this.options.windowOptions.opacity = clampedOpacity;
      this.el.style.opacity = clampedOpacity.toString();
    }
  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.options.windowOptions.opacity;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (typeof options.ifExists === "boolean") {
        this.options.ifExists = options.ifExists;
      }
      if (typeof options.title === "string") {
        this.setTitle(options.title);
      }
      if (typeof options.icon === "string" || options.icon === null) {
        this.setIcon(options.icon);
      }
      var x = null;
      if (typeof options.x === "number" || options.x === "center" || options.x === "left" || options.x === "right") {
        x = options.x;
      }
      var y = null;
      if (typeof options.y === "number" || options.y === "center" || options.y === "top" || options.y === "bottom") {
        y = options.y;
      }
      if (x !== null || y !== null) {
        if (x === null) {
          x = this.getPosition().x;
        }
        if (y === null) {
          y = this.getPosition().y;
        }
        this.setPosition(x, y);
      }
      var width = null;
      if (typeof options.width === "number" || typeof options.width === "string") {
        width = options.width;
      }
      var height = null;
      if (typeof options.height === "number" || typeof options.height === "string") {
        height = options.height;
      }
      if (width !== null || height !== null) {
        if (width === null) {
          width = this.getSize().width;
        }
        if (height === null) {
          height = this.getSize().height;
        }
        this.setSize(width, height);
      }
      var windowOptions = options.windowOptions || {};
      if (typeof windowOptions.opacity === "number") {
        this.setOpacity(windowOptions.opacity);
      }
      if (typeof windowOptions.alwaysOnTop === "boolean") {
        this.options.windowOptions.alwaysOnTop = windowOptions.alwaysOnTop;
        this.el.classList.toggle("".concat(_types.LIBRARY_NAME, "-always-on-top"), windowOptions.alwaysOnTop);
        this.focus();
      }
      if (typeof windowOptions.useGhostWindow === "boolean") {
        this.options.windowOptions.useGhostWindow = windowOptions.useGhostWindow;
      }
    }
  }]);
}(_baseclass["default"]);

},{"../const/config":38,"../const/errors":39,"../const/types":40,"../libs/baseclass":44,"../libs/utils":45,"./window_manager":42,"@babel/runtime/helpers/asyncToGenerator":6,"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/createClass":9,"@babel/runtime/helpers/defineProperty":10,"@babel/runtime/helpers/getPrototypeOf":11,"@babel/runtime/helpers/inherits":12,"@babel/runtime/helpers/interopRequireDefault":13,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/toConsumableArray":31,"@babel/runtime/helpers/typeof":34,"@babel/runtime/regenerator":37}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
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
var _highContrast = require("../style/themes/high-contrast");
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
    (0, _defineProperty2["default"])(_this, "workspaceEl", null);
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
    (0, _defineProperty2["default"])(_this, "bootstrapThemeObserver", null);
    (0, _defineProperty2["default"])(_this, "prefersDarkMatcher", null);
    (0, _defineProperty2["default"])(_this, "prefersColorSchemeListener", null);
    (0, _defineProperty2["default"])(_this, "highContrastMatcher", null);
    (0, _defineProperty2["default"])(_this, "highContrastListener", null);
    _this.globalConfig = initialConfig;
    _this.registerTheme(_default.defaultTheme);
    _this.registerTheme(_dark.darkTheme);
    _this.registerTheme(_highContrast.highContrastTheme);
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
      if (this.container) {
        this.container.classList.toggle("".concat(_types.LIBRARY_NAME, "-animations-disabled"), !this.globalConfig.enableAnimations);
        this.container.classList.toggle("".concat(_types.LIBRARY_NAME, "-debug-mode-enabled"), !!this.globalConfig.enableDebugMode);
        if (this.globalConfig.enableTaskbar) {
          if (!this.taskbarEl) {
            this.createTaskbar();
          }
          this.updateTaskbarLayout();
        } else if (this.taskbarEl) {
          this.taskbarEl.remove();
          this.taskbarEl = null;
          this.container.style.flexDirection = "";
        }
      }
      if (this.globalConfig.autoDetectBootstrapTheme) {
        this.startBootstrapThemeObserver();
      } else {
        this.stopBootstrapThemeObserver();
      }
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
      this.workspaceEl = document.createElement("div");
      this.workspaceEl.className = "".concat(_types.LIBRARY_NAME, "-workspace");
      this.container.appendChild(this.workspaceEl);
      this.applyGlobalConfig(this.globalConfig);
      if (parentEl !== document.body) {
        this.container.classList.add("".concat(_types.LIBRARY_NAME, "-is-nested"));
        var computedStyle = window.getComputedStyle(parentEl);
        if (computedStyle.position === "static") {
          parentEl.style.position = "relative";
        }
      }
      if (this.globalConfig.enableTaskbar) {
        if (!this.taskbarEl) {
          this.createTaskbar();
        }
      }
      if (this.globalConfig.theme) {
        this.setTheme(this.globalConfig.theme);
      } else {
        this.setTheme("default");
      }
      (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return _this2.updateVirtualization();
            case 1:
              return _context.abrupt("return", _context.sent);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
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
        if (!(e.target instanceof HTMLElement)) return;
        var clickedContextMenu = e.target.closest(".".concat(_types.LIBRARY_NAME, "-context-menu"));
        if (!clickedContextMenu) {
          _this2.hideContextMenu();
        }
        if (!_this2.activeWindow || _this2.activeWindow.options.windowOptions.modal) {
          return;
        }
        var clickedWindow = e.target.closest(".".concat(_types.LIBRARY_NAME, "-window"));
        var clickedTaskbar = e.target.closest(".".concat(_types.LIBRARY_NAME, "-taskbar"));
        if (!clickedWindow && !clickedContextMenu && !clickedTaskbar) {
          var active = _this2.activeWindow;
          _this2.activeWindow = null;
          active.blur();
        }
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
      this.workspaceEl.addEventListener("dragover", function (e) {
        var _e$dataTransfer;
        if ((_e$dataTransfer = e.dataTransfer) !== null && _e$dataTransfer !== void 0 && _e$dataTransfer.types.includes("application/winlet-tab")) {
          e.preventDefault();
        }
      });
      this.workspaceEl.addEventListener("drop", function (e) {
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
          var cleanSourceOptions = _utils["default"].deepCopy(sourceWindow.options);
          delete cleanSourceOptions.id;
          delete cleanSourceOptions.animationOrigin;
          delete cleanSourceOptions.content;
          delete cleanSourceOptions.tabs;
          delete cleanSourceOptions.splitView;
          var mergedWindowOptions = _utils["default"].deepMerge(cleanSourceOptions, {
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
      return this.replaceStringVariable(_styles["default"]);
    }
  }, {
    key: "replaceStringVariable",
    value: function replaceStringVariable(str) {
      return str.replace(/\$\[(\w+)\]/g, function (a, p) {
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
        var containerRect = this.workspaceEl.getBoundingClientRect();
        var centerPos = {
          x: (containerRect.width - winWidth) / 2,
          y: (containerRect.height - winHeight) / 2
        };
        var resetCascade = true;
        if (this.lastAutoPosition) {
          var lastPosWindowFound = false;
          var _iterator3 = _createForOfIteratorHelper(this.windows.values()),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _win = _step3.value;
              if (_win.state === "normal" && !_win.options._isPopup) {
                var pos = _win.getPosition();
                if (Math.abs(pos.x - this.lastAutoPosition.x) < 5 && Math.abs(pos.y - this.lastAutoPosition.y) < 5) {
                  lastPosWindowFound = true;
                  break;
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          if (lastPosWindowFound) {
            resetCascade = false;
          }
        }
        var nextPos;
        if (resetCascade) {
          nextPos = centerPos;
        } else {
          nextPos = {
            x: this.lastAutoPosition.x + this.CASCADE_OFFSET,
            y: this.lastAutoPosition.y + this.CASCADE_OFFSET
          };
        }
        if (nextPos.x + winWidth > containerRect.width || nextPos.y + winHeight > containerRect.height) {
          nextPos = centerPos;
        }
        creationOptions.x = nextPos.x;
        creationOptions.y = nextPos.y;
        if (!creationOptions._isPopup) {
          this.lastAutoPosition = {
            x: nextPos.x,
            y: nextPos.y
          };
        }
      }
      var win = new _window2["default"](creationOptions, this);
      this.windows.set(win.id, win);
      WindowManager.allWindows.set(win.id, win);
      this.workspaceEl.appendChild(win.el);
      this.emit("window-created", win);
      if (this.taskbarEl) {
        this.createTaskbarItem(win);
      }
      win.setPosition(creationOptions.x, creationOptions.y);
      if (creationOptions.windowOptions.focus) {
        this.focusWindow(win);
        win.focus();
      } else {
        win.el.style.zIndex = "".concat((win.options.windowOptions.alwaysOnTop ? this.zIndexCounterOnTop : this.zIndexCounter) - 1);
        this.updateVirtualization();
        win.updateDebugOverlay();
      }
      return win;
    }
  }, {
    key: "popup",
    value: function popup(options) {
      var _options$modal,
        _options$alwaysOnTop,
        _options$focus,
        _this4 = this;
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
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = null;
        try {
          var _options$onClose;
          (_options$onClose = options.onClose) === null || _options$onClose === void 0 || _options$onClose.call(options, result);
        } catch (e) {
          console.error(e);
        }
      };
      var messageHTML = "<div class=\"".concat(_types.LIBRARY_NAME, "-popup-message\">").concat(_utils["default"].sanitizeHTML(options.message), "</div>");
      var buttonsHTML = buttons.map(function (btn, index) {
        return "<input class=\"".concat(_types.LIBRARY_NAME, "-popup-button\" data-index=\"").concat(index, "\" type=\"button\" value=\"").concat(_utils["default"].sanitizeHTML(btn.text), "\" role=\"button\"/>");
      }).join("");
      var contentHTML = "".concat(messageHTML, "<div class=\"").concat(_types.LIBRARY_NAME, "-popup-buttons\" role=\"spinbutton\">").concat(buttonsHTML, "</div>");
      var winOptions = {
        id: _utils["default"].generateId("".concat(_types.LIBRARY_NAME, "-popup")),
        title: options.title || "",
        icon: options.icon,
        virtualizable: false,
        windowOptions: {
          resizableX: false,
          resizableY: false,
          movable: true,
          closable: true,
          minimizable: false,
          maximizable: false,
          maximizableOnDblClick: false,
          modal: (_options$modal = options.modal) !== null && _options$modal !== void 0 ? _options$modal : true,
          alwaysOnTop: (_options$alwaysOnTop = options.alwaysOnTop) !== null && _options$alwaysOnTop !== void 0 ? _options$alwaysOnTop : false,
          focus: (_options$focus = options.focus) !== null && _options$focus !== void 0 ? _options$focus : true
        },
        enableShortcuts: false,
        content: {
          html: contentHTML
        },
        _isPopup: true
      };
      if (options.onFocus) winOptions.onFocus = options.onFocus;
      if (options.onBlur) winOptions.onBlur = options.onBlur;
      if (options.autoWidth) {
        var _this$workspaceEl, _this$workspaceEl2;
        var temp = document.createElement("span");
        temp.style.visibility = "hidden";
        temp.style.position = "absolute";
        temp.style.whiteSpace = "pre";
        temp.className = "".concat(_types.LIBRARY_NAME, "-popup-message");
        temp.innerHTML = _utils["default"].sanitizeHTML(options.message);
        (_this$workspaceEl = this.workspaceEl) === null || _this$workspaceEl === void 0 || _this$workspaceEl.appendChild(temp);
        winOptions.width = temp.offsetWidth + 80;
        (_this$workspaceEl2 = this.workspaceEl) === null || _this$workspaceEl2 === void 0 || _this$workspaceEl2.removeChild(temp);
      } else {
        winOptions.width = 300;
      }
      winOptions.height = 150;
      var winWidth = winOptions.width;
      var winHeight = winOptions.height;
      var containerRect = this.workspaceEl.getBoundingClientRect();
      var centerPos = {
        x: (containerRect.width - winWidth) / 2,
        y: (containerRect.height - winHeight) / 2
      };
      var resetCascade = true;
      if (this.lastPopupPosition) {
        var lastPosWindowFound = false;
        var _iterator4 = _createForOfIteratorHelper(this.windows.values()),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _win2 = _step4.value;
            if (_win2.options._isPopup && _win2.state === "normal") {
              var pos = _win2.getPosition();
              if (Math.abs(pos.x - this.lastPopupPosition.x) < 5 && Math.abs(pos.y - this.lastPopupPosition.y) < 5) {
                lastPosWindowFound = true;
                break;
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        if (lastPosWindowFound) {
          resetCascade = false;
        }
      }
      var nextPos;
      if (resetCascade) {
        nextPos = centerPos;
      } else {
        nextPos = {
          x: this.lastPopupPosition.x + this.CASCADE_OFFSET,
          y: this.lastPopupPosition.y + this.CASCADE_OFFSET
        };
      }
      if (nextPos.x + winWidth > containerRect.width || nextPos.y + winHeight > containerRect.height) {
        nextPos = centerPos;
      }
      winOptions.x = nextPos.x;
      winOptions.y = nextPos.y;
      var win = this.createWindow(winOptions);
      this.lastPopupPosition = nextPos;
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
    key: "popupAsync",
    value: function popupAsync(options) {
      var _this5 = this;
      var opt = _utils["default"].deepCopy(options);
      return new Promise(function (resolve) {
        var tmpOnClose = opt.onClose;
        opt.onClose = function (result) {
          tmpOnClose === null || tmpOnClose === void 0 || tmpOnClose(result);
          resolve(result);
        };
        _this5.popup(opt);
      });
    }
  }, {
    key: "destroyWindow",
    value: function destroyWindow(id) {
      var _this6 = this;
      this.ensureInitialized();
      var win = this.windows.get(id);
      if (win) {
        if (win.options._taskbarItem) {
          win.options._taskbarItem.remove();
        }
        if (win.options.windowOptions.modal) {
          this.deactivateFocusTrap();
        }
        this.emit("window-destroyed", win);
        win.el.remove();
        this.windows["delete"](id);
        WindowManager.allWindows["delete"](id);
        if (this.activeWindow === win) {
          this.activeWindow = null;
          var nextWin = Array.from(this.windows.values()).pop();
          if (nextWin) this.focusWindow(nextWin);
        }
        (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
          return _regenerator["default"].wrap(function (_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 1;
                return _this6.updateVirtualization();
              case 1:
                return _context2.abrupt("return", _context2.sent);
              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    }
  }, {
    key: "focusWindow",
    value: function focusWindow(win) {
      var _this$activeWindow,
        _win$options$_taskbar,
        _this7 = this;
      this.ensureInitialized();
      if (this.activeWindow === win && !win.options.windowOptions.modal) return;
      (_this$activeWindow = this.activeWindow) === null || _this$activeWindow === void 0 || _this$activeWindow.blur();
      if (win.options.windowOptions.modal && this.globalConfig.enableFocusTrapping) {
        this.activateFocusTrap(win);
      } else {
        this.deactivateFocusTrap();
      }
      this.activeWindow = win;
      win.el.style.zIndex = "".concat(win.options.windowOptions.alwaysOnTop ? ++this.zIndexCounterOnTop : ++this.zIndexCounter);
      this.windows.forEach(function (w) {
        var _w$options$_taskbarIt;
        return (_w$options$_taskbarIt = w.options._taskbarItem) === null || _w$options$_taskbarIt === void 0 ? void 0 : _w$options$_taskbarIt.classList.remove("".concat(_types.LIBRARY_NAME, "-active"));
      });
      (_win$options$_taskbar = win.options._taskbarItem) === null || _win$options$_taskbar === void 0 || _win$options$_taskbar.classList.add("".concat(_types.LIBRARY_NAME, "-active"));
      (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 1;
              return _this7.updateVirtualization();
            case 1:
              return _context3.abrupt("return", _context3.sent);
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
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
      var _this$workspaceEl3;
      (_this$workspaceEl3 = this.workspaceEl) === null || _this$workspaceEl3 === void 0 || _this$workspaceEl3.classList.add("".concat(_types.LIBRARY_NAME, "-is-tab-dragging"));
      this.draggingTabInfo = {
        sourceWindowId: sourceWindowId
      };
    }
  }, {
    key: "onTabDragEnd",
    value: function onTabDragEnd() {
      var _this$workspaceEl4;
      (_this$workspaceEl4 = this.workspaceEl) === null || _this$workspaceEl4 === void 0 || _this$workspaceEl4.classList.remove("".concat(_types.LIBRARY_NAME, "-is-tab-dragging"));
      this.draggingTabInfo = null;
    }
  }, {
    key: "showContextMenu",
    value: function showContextMenu(x, y, menuItems, contextWindow) {
      var _this8 = this;
      this.ensureInitialized();
      this.hideContextMenu();
      this.contextMenuEl = document.createElement("ul");
      this.contextMenuEl.className = "".concat(_types.LIBRARY_NAME, "-context-menu");
      menuItems.forEach(function (itemData) {
        var itemEl = document.createElement("li");
        if (itemData.separator) {
          itemEl.className = "".concat(_types.LIBRARY_NAME, "-separator");
        } else {
          var _itemData$name;
          itemEl.textContent = (_itemData$name = itemData.name) !== null && _itemData$name !== void 0 ? _itemData$name : "";
          itemEl.addEventListener("click", function (e) {
            var _itemData$action;
            e.stopPropagation();
            (_itemData$action = itemData.action) === null || _itemData$action === void 0 || _itemData$action.call(itemData, contextWindow);
            _this8.hideContextMenu();
          });
        }
        _this8.contextMenuEl.appendChild(itemEl);
      });
      this.workspaceEl.appendChild(this.contextMenuEl);
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
    key: "getRegisteredThemes",
    value: function getRegisteredThemes() {
      return Array.from(this.themes.keys());
    }
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      var themeObj = typeof theme === "string" ? this.themes.get(theme.toLowerCase()) : theme;
      if (!themeObj) {
        console.warn("WinLet: Theme \"".concat(theme, "\" not found."));
        return;
      }
      if (!this.container) {
        console.warn("WinLet: Container not found.");
        return;
      }
      if (this.activeTheme) {
        for (var _i = 0, _Object$entries = Object.entries(this.activeTheme.variables); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (!(key in themeObj.variables)) {
            this.container.style.removeProperty(this.replaceStringVariable(key));
          }
        }
      }
      this.activeTheme = themeObj;
      for (var _i2 = 0, _Object$entries2 = Object.entries(themeObj.variables); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
          _key = _Object$entries2$_i[0],
          _value = _Object$entries2$_i[1];
        this.container.style.setProperty(this.replaceStringVariable(_key), this.replaceStringVariable(_value));
      }
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      return this.activeTheme;
    }
  }, {
    key: "createTaskbar",
    value: function createTaskbar() {
      if (!this.container) return;
      this.taskbarEl = document.createElement("div");
      this.taskbarEl.className = "".concat(_types.LIBRARY_NAME, "-taskbar ").concat(_types.LIBRARY_NAME, "-us-none");
      this.updateTaskbarLayout();
      this.container.appendChild(this.taskbarEl);
    }
  }, {
    key: "updateTaskbarLayout",
    value: function updateTaskbarLayout() {
      if (!this.taskbarEl || !this.container) return;
      var taskbarOpts = this.globalConfig.taskbar || {};
      var position = taskbarOpts.position || "bottom";
      switch (position) {
        case "top":
        case "bottom":
        case "left":
        case "right":
          break;
        default:
          throw new _errors.WinLetError("Invalid taskbar position: ".concat(position));
      }
      this.taskbarEl.className = "".concat(_types.LIBRARY_NAME, "-taskbar ").concat(_types.LIBRARY_NAME, "-us-none");
      this.taskbarEl.classList.add("".concat(_types.LIBRARY_NAME, "-taskbar-").concat(position));
      if (!this.taskbarEl.isConnected) {
        this.container.appendChild(this.taskbarEl);
      }
      this.container.style.flexDirection = "";
      this.taskbarEl.style.order = "";
      if (this.workspaceEl) {
        this.workspaceEl.style.order = "";
      }
      this.container.style.paddingTop = "0";
      this.container.style.paddingBottom = "0";
      this.container.style.paddingLeft = "0";
      this.container.style.paddingRight = "0";
      var computedStyle = window.getComputedStyle(this.taskbarEl);
      var taskbarHeight = computedStyle.height;
      var taskbarWidth = computedStyle.width;
      switch (position) {
        case "top":
          this.container.style.paddingTop = taskbarHeight;
          this.container.style.flexDirection = "column-reverse";
          this.taskbarEl.style.order = "1";
          if (this.workspaceEl) this.workspaceEl.style.order = "2";
          break;
        case "bottom":
          this.container.style.paddingBottom = taskbarHeight;
          this.container.style.flexDirection = "column";
          this.taskbarEl.style.order = "2";
          if (this.workspaceEl) this.workspaceEl.style.order = "1";
          break;
        case "left":
          this.container.style.paddingLeft = taskbarWidth;
          this.container.style.flexDirection = "row-reverse";
          this.taskbarEl.style.order = "1";
          if (this.workspaceEl) this.workspaceEl.style.order = "2";
          break;
        case "right":
          this.container.style.paddingRight = taskbarWidth;
          this.container.style.flexDirection = "row";
          this.taskbarEl.style.order = "2";
          if (this.workspaceEl) this.workspaceEl.style.order = "1";
          break;
      }
    }
  }, {
    key: "createTaskbarItem",
    value: function createTaskbarItem(win) {
      var _this9 = this;
      if (!this.taskbarEl) return;
      var item = document.createElement("div");
      item.className = "".concat(_types.LIBRARY_NAME, "-taskbar-item");
      item.textContent = win.getTitle();
      item.title = win.getTitle();
      item.dataset.windowId = win.id;
      this.updateTaskbarItemContent(item, win);
      item.addEventListener("click", function () {
        if (win.state === "minimized") {
          win.restore({
            origin: item
          });
        } else {
          if (_this9.activeWindow === win) {
            win.minimize({
              origin: item
            });
          } else {
            win.focus();
          }
        }
      });
      win.options._taskbarItem = item;
      this.taskbarEl.appendChild(item);
    }
  }, {
    key: "updateTaskbarItemContent",
    value: function updateTaskbarItemContent(item, win) {
      var _win$options = win.options,
        icon = _win$options.icon,
        taskbarOptions = _win$options.taskbarOptions;
      item.innerHTML = "";
      item.title = win.getTitle();
      var showIconOnly = (taskbarOptions === null || taskbarOptions === void 0 ? void 0 : taskbarOptions.showIconOnly) && icon;
      item.classList.toggle("".concat(_types.LIBRARY_NAME, "-icon-only"), !!showIconOnly);
      if (showIconOnly) {
        var iconEl = document.createElement("div");
        iconEl.className = "".concat(_types.LIBRARY_NAME, "-taskbar-item-icon");
        if (win.isFontAwesome(icon)) {
          var i = document.createElement("i");
          i.className = icon;
          iconEl.appendChild(i);
        } else {
          var img = document.createElement("img");
          img.src = icon;
          img.alt = win.getTitle();
          iconEl.appendChild(img);
        }
        item.appendChild(iconEl);
      } else {
        item.textContent = win.getTitle();
      }
    }
  }, {
    key: "updateTaskbarItem",
    value: function updateTaskbarItem(win, state) {
      var item = win.options._taskbarItem;
      if (!item) return;
      switch (state) {
        case "minimized":
          item.classList.add("".concat(_types.LIBRARY_NAME, "-minimized"));
          break;
        case "restored":
          item.classList.remove("".concat(_types.LIBRARY_NAME, "-minimized"));
          break;
        case "titleChanged":
        case "iconChanged":
          this.updateTaskbarItemContent(item, win);
          break;
        case "virtualized":
          if (this.globalConfig.indicateVirtualizationInTaskbar) {
            item.classList.add("".concat(_types.LIBRARY_NAME, "-virtualized"));
          }
          break;
        case "unvirtualized":
          item.classList.remove("".concat(_types.LIBRARY_NAME, "-virtualized"));
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
  }, {
    key: "updateVirtualization",
    value: (function () {
      var _updateVirtualization = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
        var _this$globalConfig$vi;
        var threshold, _iterator5, _step5, win, windows, viewportRect, i, targetWin, targetRect, samplePoints, isVisible, _i3, _samplePoints, point, inViewport, pointIsOccluded, j, _occluderWin$getOpaci, occluderWin, occluderRect, restoreMode;
        return _regenerator["default"].wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!this.globalConfig.enableVirtualization || !this.workspaceEl)) {
                _context4.next = 1;
                break;
              }
              return _context4.abrupt("return");
            case 1:
              threshold = (_this$globalConfig$vi = this.globalConfig.virtualizationThreshold) !== null && _this$globalConfig$vi !== void 0 ? _this$globalConfig$vi : 5;
              if (!(this.windows.size <= threshold)) {
                _context4.next = 2;
                break;
              }
              _iterator5 = _createForOfIteratorHelper(this.windows.values());
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  win = _step5.value;
                  if (win.virtualizationLevel !== "none" && win.state !== "minimized") {
                    win.unvirtualize();
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              return _context4.abrupt("return");
            case 2:
              windows = Array.from(this.windows.values()).sort(function (a, b) {
                return parseInt(a.el.style.zIndex || "0", 10) - parseInt(b.el.style.zIndex || "0", 10);
              });
              viewportRect = this.workspaceEl.getBoundingClientRect();
              i = 0;
            case 3:
              if (!(i < windows.length)) {
                _context4.next = 16;
                break;
              }
              targetWin = windows[i];
              if (!(!targetWin.options.virtualizable || targetWin.state !== "normal" && targetWin.state !== "minimized" || targetWin === this.activeWindow)) {
                _context4.next = 4;
                break;
              }
              targetWin.unvirtualize();
              return _context4.abrupt("continue", 15);
            case 4:
              targetRect = targetWin.el.getBoundingClientRect();
              if (!(targetRect.width <= 1 || targetRect.height <= 1)) {
                _context4.next = 5;
                break;
              }
              targetWin.virtualize("auto");
              return _context4.abrupt("continue", 15);
            case 5:
              samplePoints = [{
                x: targetRect.left + 1,
                y: targetRect.top + 1
              }, {
                x: targetRect.right - 1,
                y: targetRect.top + 1
              }, {
                x: targetRect.right - 1,
                y: targetRect.bottom - 1
              }, {
                x: targetRect.left + 1,
                y: targetRect.bottom - 1
              }, {
                x: targetRect.left + targetRect.width * 0.5,
                y: targetRect.top + targetRect.height * 0.5
              }];
              isVisible = false;
              _i3 = 0, _samplePoints = samplePoints;
            case 6:
              if (!(_i3 < _samplePoints.length)) {
                _context4.next = 13;
                break;
              }
              point = _samplePoints[_i3];
              inViewport = point.x >= viewportRect.left && point.x < viewportRect.right && point.y >= viewportRect.top && point.y < viewportRect.bottom;
              if (inViewport) {
                _context4.next = 7;
                break;
              }
              return _context4.abrupt("continue", 12);
            case 7:
              pointIsOccluded = false;
              j = i + 1;
            case 8:
              if (!(j < windows.length)) {
                _context4.next = 11;
                break;
              }
              occluderWin = windows[j];
              if (!(occluderWin.state !== "normal" || ((_occluderWin$getOpaci = occluderWin.getOpacity()) !== null && _occluderWin$getOpaci !== void 0 ? _occluderWin$getOpaci : 1) < 0.9)) {
                _context4.next = 9;
                break;
              }
              return _context4.abrupt("continue", 10);
            case 9:
              occluderRect = occluderWin.el.getBoundingClientRect();
              if (!(point.x >= occluderRect.left && point.x < occluderRect.right && point.y >= occluderRect.top && point.y < occluderRect.bottom)) {
                _context4.next = 10;
                break;
              }
              pointIsOccluded = true;
              return _context4.abrupt("continue", 11);
            case 10:
              j++;
              _context4.next = 8;
              break;
            case 11:
              if (pointIsOccluded) {
                _context4.next = 12;
                break;
              }
              isVisible = true;
              return _context4.abrupt("continue", 13);
            case 12:
              _i3++;
              _context4.next = 6;
              break;
            case 13:
              if (!isVisible) {
                _context4.next = 14;
                break;
              }
              restoreMode = targetWin.options.virtualizationRestoreMode || this.globalConfig.virtualizationRestoreMode || "auto";
              if (restoreMode === "auto") {
                targetWin.unvirtualize();
              }
              _context4.next = 15;
              break;
            case 14:
              _context4.next = 15;
              return targetWin.virtualize("auto");
            case 15:
              i++;
              _context4.next = 3;
              break;
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updateVirtualization() {
        return _updateVirtualization.apply(this, arguments);
      }
      return updateVirtualization;
    }())
  }, {
    key: "startBootstrapThemeObserver",
    value: function startBootstrapThemeObserver() {
      var _this0 = this;
      if (this.bootstrapThemeObserver || !this.container) return;
      this.highContrastMatcher = window.matchMedia("(prefers-contrast: more)");
      this.highContrastListener = function (e) {
        if (e.matches) {
          _this0.stopAutoThemeListener();
          _this0.setTheme("high-contrast");
        } else {
          _this0.applyBootstrapTheme(document.documentElement.getAttribute("data-bs-theme"));
        }
      };
      this.highContrastMatcher.addEventListener("change", this.highContrastListener);
      var targetNode = document.documentElement;
      var config = {
        attributes: true,
        attributeFilter: ["data-bs-theme"]
      };
      var callback = function callback(mutationsList) {
        var _this0$highContrastMa;
        if (!((_this0$highContrastMa = _this0.highContrastMatcher) !== null && _this0$highContrastMa !== void 0 && _this0$highContrastMa.matches)) {
          var _iterator6 = _createForOfIteratorHelper(mutationsList),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var mutation = _step6.value;
              if (mutation.type === "attributes" && mutation.attributeName === "data-bs-theme") {
                var themeValue = mutation.target.getAttribute("data-bs-theme");
                _this0.applyBootstrapTheme(themeValue);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      };
      this.bootstrapThemeObserver = new MutationObserver(callback);
      this.bootstrapThemeObserver.observe(targetNode, config);
      if (this.highContrastMatcher.matches) {
        this.setTheme("high-contrast");
      } else {
        this.applyBootstrapTheme(targetNode.getAttribute("data-bs-theme"));
      }
    }
  }, {
    key: "stopBootstrapThemeObserver",
    value: function stopBootstrapThemeObserver() {
      if (this.bootstrapThemeObserver) {
        this.bootstrapThemeObserver.disconnect();
        this.bootstrapThemeObserver = null;
      }
      if (this.highContrastMatcher && this.highContrastListener) {
        this.highContrastMatcher.removeEventListener("change", this.highContrastListener);
      }
      this.stopAutoThemeListener();
    }
  }, {
    key: "applyBootstrapTheme",
    value: function applyBootstrapTheme(themeValue) {
      this.stopAutoThemeListener();
      if (themeValue === "dark") {
        this.setTheme("dark");
      } else if (themeValue === "auto") {
        this.startAutoThemeListener();
      } else {
        this.setTheme("default");
      }
    }
  }, {
    key: "startAutoThemeListener",
    value: function startAutoThemeListener() {
      var _this1 = this;
      if (this.prefersColorSchemeListener || !window.matchMedia) return;
      this.prefersDarkMatcher = window.matchMedia("(prefers-color-scheme: dark)");
      this.prefersColorSchemeListener = function (e) {
        _this1.setTheme(e.matches ? "dark" : "default");
      };
      this.prefersDarkMatcher.addEventListener("change", this.prefersColorSchemeListener);
      this.setTheme(this.prefersDarkMatcher.matches ? "dark" : "default");
    }
  }, {
    key: "stopAutoThemeListener",
    value: function stopAutoThemeListener() {
      if (this.prefersDarkMatcher && this.prefersColorSchemeListener) {
        this.prefersDarkMatcher.removeEventListener("change", this.prefersColorSchemeListener);
      }
      this.prefersDarkMatcher = null;
      this.prefersColorSchemeListener = null;
    }
  }]);
}(_baseclass["default"]);
(0, _defineProperty2["default"])(WindowManager, "allWindows", new Map());

},{"../const/config":38,"../const/errors":39,"../const/types":40,"../libs/baseclass":44,"../libs/utils":45,"../style/styles":46,"../style/themes/dark":47,"../style/themes/default":48,"../style/themes/high-contrast":49,"./window":41,"@babel/runtime/helpers/asyncToGenerator":6,"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/createClass":9,"@babel/runtime/helpers/defineProperty":10,"@babel/runtime/helpers/getPrototypeOf":11,"@babel/runtime/helpers/inherits":12,"@babel/runtime/helpers/interopRequireDefault":13,"@babel/runtime/helpers/possibleConstructorReturn":20,"@babel/runtime/helpers/slicedToArray":30,"@babel/runtime/helpers/typeof":34,"@babel/runtime/regenerator":37}],43:[function(require,module,exports){
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
  libraryPath: selfUrl,
  enableAnimations: true,
  animateFromTaskbar: true,
  enableFocusTrapping: true,
  enableVirtualization: true,
  indicateVirtualizationInTaskbar: true,
  virtualizationThreshold: 5,
  virtualizationDelay: 1000 * 10,
  taskbar: {
    position: "bottom"
  },
  autoDetectBootstrapTheme: true,
  enableDebugMode: false
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
  on: function on(eventName, listener, options) {
    manager.on(eventName, listener, options);
  },
  off: function off(eventName, listener) {
    manager.off(eventName, listener);
  },
  emit: function emit(eventName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return manager.emit.apply(manager, [eventName].concat(args));
  },
  createPopup: function createPopup(options) {
    return manager.popup(options);
  },
  createAsyncPopup: function createAsyncPopup(options) {
    return manager.popupAsync(options);
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
  updateTaskbarItem: function updateTaskbarItem(win, state) {
    manager.updateTaskbarItem(win, state);
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
  registerTheme: function registerTheme(theme) {
    manager.registerTheme(theme);
  },
  getRegisteredThemes: function getRegisteredThemes() {
    return manager.getRegisteredThemes();
  },
  setTheme: function setTheme(theme) {
    manager.setTheme(theme);
  },
  getTheme: function getTheme() {
    return manager.getTheme();
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

},{"./const/config":38,"./const/types":40,"./function/window_manager":42,"./libs/utils":45,"./version":50,"@babel/runtime/helpers/interopRequireDefault":13}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var WinLetBaseClass = exports["default"] = function () {
  function WinLetBaseClass() {
    (0, _classCallCheck2["default"])(this, WinLetBaseClass);
    this.events = new Map();
  }
  return (0, _createClass2["default"])(WinLetBaseClass, [{
    key: "on",
    value: function on(eventName, listener, options) {
      var _this = this;
      if (!this.events.has(eventName)) {
        this.events.set(eventName, []);
      }
      var handler = listener;
      if (options !== null && options !== void 0 && options.once) {
        handler = function handler() {
          _this.off(eventName, listener);
          listener.apply(void 0, arguments);
        };
      }
      this.events.get(eventName).push({
        handler: handler,
        original: listener
      });
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      var handlers = this.events.get(eventName);
      if (handlers) {
        var index = handlers.findIndex(function (h) {
          return h.original === listener;
        });
        if (index > -1) {
          handlers.splice(index, 1);
        }
      }
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var handlers = this.events.get(eventName);
      if (handlers) {
        var results = [];
        (0, _toConsumableArray2["default"])(handlers).forEach(function (handlerObj) {
          try {
            results.push(handlerObj.handler.apply(handlerObj, args));
          } catch (e) {
            console.error("Error in event handler for \"".concat(String(eventName), "\":"), e);
          }
        });
        return results;
      }
    }
  }]);
}();

},{"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/createClass":9,"@babel/runtime/helpers/interopRequireDefault":13,"@babel/runtime/helpers/toConsumableArray":31}],45:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var Utils = exports["default"] = function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }
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
  }, {
    key: "escapeRegex",
    value: function escapeRegex(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
  }, {
    key: "throttle",
    value: function throttle(func, delay) {
      var timeoutId = null;
      var lastArgs = null;
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        lastArgs = args;
        if (timeoutId === null) {
          timeoutId = window.setTimeout(function () {
            if (lastArgs) {
              func.apply(void 0, (0, _toConsumableArray2["default"])(lastArgs));
            }
            timeoutId = null;
          }, delay);
        }
      };
    }
  }]);
}();

},{"@babel/runtime/helpers/classCallCheck":7,"@babel/runtime/helpers/createClass":9,"@babel/runtime/helpers/defineProperty":10,"@babel/runtime/helpers/interopRequireDefault":13,"@babel/runtime/helpers/toConsumableArray":31,"@babel/runtime/helpers/typeof":34}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var styleData = "\n/* ========================================================================\n    1. \u57FA\u672C\u8A2D\u5B9A\u30FB\u5909\u6570\n   ======================================================================== */\n:root {\n    /* \u57FA\u672C\u8272\u30FB\u30B7\u30E3\u30C9\u30A6 */\n    --$[prefix]-text-color: #000;\n    --$[prefix]-bg: #f0f0f0;\n    --$[prefix]-border: #a0a0a0;\n    --$[prefix]-shadow-color-light: rgba(0,0,0,0.15);\n    --$[prefix]-shadow-color-strong: rgba(0,0,0,0.3);\n    --$[prefix]-shadow-color-active: rgba(0,0,0,0.45);\n\n    /* \u30BF\u30A4\u30C8\u30EB\u30D0\u30FC */\n    --$[prefix]-title-bar-height: 32px;\n    --$[prefix]-title-bar-bg: #e0e0e0;\n    --$[prefix]-title-bar-active-bg: #0078d7;\n    --$[prefix]-title-text-color: #000;\n    --$[prefix]-title-text-active-color: #fff;\n\n    /* \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DC\u30BF\u30F3 */\n    --$[prefix]-control-bg: #d0d0d0;\n    --$[prefix]-control-hover-bg: #e5e5e5;\n    --$[prefix]-control-close-hover-bg: #e81123;\n    --$[prefix]-control-close-hover-color: #fff;\n\n    /* \u30E1\u30CB\u30E5\u30FC */\n    --$[prefix]-menu-bg: #fff;\n    --$[prefix]-menu-border: #ccc;\n    --$[prefix]-menu-item-color: #000;\n    --$[prefix]-menu-item-hover-bg: #0078d7;\n    --$[prefix]-menu-item-hover-color: #fff;\n    --$[prefix]-shortcut-text-color: #666;\n\n    /* \u30BF\u30D6 */\n    --$[prefix]-tab-bg: #dcdcdc;\n    --$[prefix]-tab-active-bg: #f0f0f0;\n    --$[prefix]-tab-border: #b0b0b0;\n    --$[prefix]-tab-bar-bg: #e1e1e1;\n    --$[prefix]-tab-close-btn-hover-bg: #ccc;\n    --$[prefix]-tab-active-close-btn-hover-bg: #ddd;\n\n    /* \u691C\u7D22\u30CF\u30A4\u30E9\u30A4\u30C8 */\n    --$[prefix]-search-highlight-bg: yellow;\n    --$[prefix]-search-highlight-active-bg: orange;\n\n    /* \u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30DC\u30BF\u30F3 */\n    --$[prefix]-popup-button-hover-bg: #e9e9e9;\n    --$[prefix]-popup-button-hover-border-color: #bbb;\n\n    /* \u30EA\u30B5\u30A4\u30BA\u30CF\u30F3\u30C9\u30EB */\n    --$[prefix]-resize-handle-size: 8px;\n    --$[prefix]-resize-handle-offset: -4px;\n\n    /* \u30BF\u30B9\u30AF\u30D0\u30FC */\n    --$[prefix]-taskbar-bg: rgba(240, 240, 240, 0.9);\n    --$[prefix]-taskbar-border: #a0a0a0;\n    --$[prefix]-taskbar-item-bg: #d0d0d0;\n    --$[prefix]-taskbar-item-active-bg: #0078d7;\n    --$[prefix]-taskbar-item-active-color: #fff;\n    --$[prefix]-taskbar-height: 40px;\n    --$[prefix]-taskbar-width: 40px;\n\n    /* \u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC */\n    --$[prefix]-loader-bg: rgba(255, 255, 255, 0.7);\n    --$[prefix]-loader-color: var(--$[prefix]-title-bar-active-bg);\n\n    /* \u305D\u306E\u4ED6 */\n    --$[prefix]-scrollbar-thumb-bg: rgba(100, 100, 100, 0.5);\n}\n\n/* ========================================================================\n    2. \u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u30AF\u30E9\u30B9\n   ========================================================================= */\n/**\n * \u30C6\u30AD\u30B9\u30C8\u9078\u629E\u3092\u7121\u52B9\u5316\n */\n.$[prefix]-us-none {\n    user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n/**\n * \u30C6\u30AD\u30B9\u30C8\u9078\u629E\u3092\u6709\u52B9\u5316\n */\n.$[prefix]-us-auto {\n    user-select: auto;\n    -webkit-user-select: auto;\n    -ms-user-select: auto;\n}\n\n/* ========================================================================\n    3. \u30B3\u30F3\u30C6\u30CA\n   ========================================================================= */\n/**\n * \u5168\u3066\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u5185\u5305\u3059\u308B\u6700\u4E0A\u4F4D\u30B3\u30F3\u30C6\u30CA\n */\n.$[prefix]-container {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    pointer-events: none;\n    overflow: hidden;\n    z-index: 999;\n    display: flex;\n    pointer-events: none;\n}\n.$[prefix]-container > * {\n    pointer-events: all; /* \u5B50\u8981\u7D20(workspace, taskbar)\u306E\u30A4\u30D9\u30F3\u30C8\u306F\u6709\u52B9\u5316 */\n}\n/**\n * \u7279\u5B9A\u306E\u8981\u7D20\u5185\u306B\u30CD\u30B9\u30C8\u3055\u308C\u305F\u5834\u5408\u306E\u30B3\u30F3\u30C6\u30CA\n */\n.$[prefix]-container.$[prefix]-is-nested {\n    position: absolute;\n}\n\n.$[prefix]-workspace {\n    position: relative;\n    flex-grow: 1; /* \u6B8B\u308A\u306E\u30B9\u30DA\u30FC\u30B9\u3092\u3059\u3079\u3066\u5360\u6709 */\n    overflow: hidden; /* \u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u306F\u307F\u51FA\u3055\u306A\u3044\u3088\u3046\u306B */\n    min-width: 0; /* flex\u30A2\u30A4\u30C6\u30E0\u306E\u7E2E\u5C0F\u554F\u984C\u3092\u56DE\u907F */\n    min-height: 0; /* flex\u30A2\u30A4\u30C6\u30E0\u306E\u7E2E\u5C0F\u554F\u984C\u3092\u56DE\u907F */\n    pointer-events: none;\n}\n/**\n * \u30BF\u30D6\u306E\u30C9\u30E9\u30C3\u30B0\u4E2D\u306B\u30DD\u30A4\u30F3\u30BF\u30FC\u30A4\u30D9\u30F3\u30C8\u3092\u6709\u52B9\u5316\u3057\u3001\u30C9\u30ED\u30C3\u30D7\u3092\u53D7\u3051\u4ED8\u3051\u308B\n */\n.$[prefix]-workspace.$[prefix]-is-tab-dragging {\n    pointer-events: auto;\n}\n\n/* ========================================================================\n    4. \u4EEE\u60F3\u5316\u6280\u8853\n   ======================================================================== */\n/**\n * \u4EEE\u60F3\u5316(\u30A2\u30F3\u30ED\u30FC\u30C9)\u3055\u308C\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-is-virtualized > .$[prefix]-main-content {\n    display: none;\n}\n.$[prefix]-window.$[prefix]-is-virtualized::after {\n    content: \"Unloaded\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--$[prefix]-border);\n    font-size: 1.5em;\n    font-weight: bold;\n    pointer-events: none;\n}\n\n/**\n * \u4E2D\u65AD\u3055\u308C\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-is-suspended > .$[prefix]-main-content {\n    display: none;\n}\n.$[prefix]-window.$[prefix]-is-suspended::after {\n    content: \"Suspended\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--$[prefix]-border);\n    font-size: 1.5em;\n    font-weight: bold;\n    pointer-events: none;\n    z-index: 15;\n}\n\n/**\n * \u30D5\u30EA\u30FC\u30BA\u3055\u308C\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-is-frozen > .$[prefix]-main-content {\n    pointer-events: none; /* \u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u64CD\u4F5C\u3092\u7121\u52B9\u5316 */\n}\n.$[prefix]-window.$[prefix]-is-frozen > .$[prefix]-main-content iframe {\n    visibility: hidden;\n}\n.$[prefix]-window.$[prefix]-is-frozen::after {\n    content: \"Frozen\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--$[prefix]-border);\n    background: rgba(128, 128, 128, 0.1);\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.5em;\n    font-weight: bold;\n    pointer-events: none;\n    z-index: 15; /* \u30ED\u30FC\u30C0\u30FC\u3088\u308A\u624B\u524D */\n}\n\n/**\n * \u4EEE\u60F3\u5316\u6642\u306E\u64CD\u4F5C\u5236\u9650\n */\n.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-menu-bar,\n.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-tab-bar,\n.$[prefix]-window.$[prefix]-virtualization-lock .$[prefix]-custom-control-btn {\n    pointer-events: none;\n    opacity: 0.5;\n}\n/* ========================================================================\n    5. \u30A6\u30A3\u30F3\u30C9\u30A6\n   ======================================================================== */\n/* --- \u30A6\u30A3\u30F3\u30C9\u30A6\u57FA\u672C\u30B9\u30BF\u30A4\u30EB --- */\n.$[prefix]-window {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    min-height: 150px;\n    border: 1px solid var(--$[prefix]-border);\n    background-color: var(--$[prefix]-bg);\n    box-shadow: 0 5px 15px var(--$[prefix]-shadow-color-strong);\n    box-sizing: border-box;\n    border-radius: 5px;\n    overflow: hidden;\n    pointer-events: all;\n    transition: opacity 0.25s, transform 0.25s;\n    touch-action: none;\n}\n\n/* --- \u30A6\u30A3\u30F3\u30C9\u30A6\u72B6\u614B\u5225\u30B9\u30BF\u30A4\u30EB --- */\n/**\n * \u6700\u5C0F\u5316\u4E2D\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-is-minimizing {\n    transform: scale(0);\n    opacity: 0;\n    pointer-events: none;\n}\n\n/**\n * \u6700\u5C0F\u5316\u5B8C\u4E86\u72B6\u614B\u306E\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-minimized {\n    /* \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u7D42\u72B6\u614B\u3092\u7DAD\u6301 */\n    transform: scale(0);\n    opacity: 0;\n    /* \u8868\u793A\u3068\u64CD\u4F5C\u3092\u7121\u52B9\u5316 */\n    display: none;\n    pointer-events: none;\n}\n/**\n * \u6700\u5927\u5316\u3055\u308C\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-maximized {\n    border-radius: 0;\n}\n/**\n * \u6700\u5927\u5316\u72B6\u614B\u3067\u306F\u30EA\u30B5\u30A4\u30BA\u30CF\u30F3\u30C9\u30EB\u3092\u975E\u8868\u793A\n */\n.$[prefix]-window.$[prefix]-maximized > .$[prefix]-resize-handle {\n    display: none;\n}\n/**\n * \u5FA9\u5143\u4E2D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\uFF08\u73FE\u5728\u306F\u72B6\u614B\u3092\u793A\u3059\u30DE\u30FC\u30AB\u30FC\u3068\u3057\u3066\u306E\u307F\u5229\u7528\uFF09\n */\n.$[prefix]-window.$[prefix]-is-restoring {\n    /* The transition is now handled by the base .winlet-window class */\n}\n\n/**\n * \u30C9\u30E9\u30C3\u30B0\u4E2D\u30FB\u30EA\u30B5\u30A4\u30BA\u4E2D\u306E\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u3092\u77ED\u7E2E\u3057\u3001\u64CD\u4F5C\u6027\u3092\u5411\u4E0A\n */\n.$[prefix]-window.$[prefix]-is-dragging,\n.$[prefix]-window.$[prefix]-is-resizing {\n    transition: opacity 0.1s, transform 0.1s;\n}\n\n/**\n * \u30A2\u30AF\u30C6\u30A3\u30D6\uFF08\u30D5\u30A9\u30FC\u30AB\u30B9\u3055\u308C\u3066\u3044\u308B\uFF09\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-active {\n    box-shadow: 0 8px 25px var(--$[prefix]-shadow-color-active); /* \u30A2\u30AF\u30C6\u30A3\u30D6\u6642\u306E\u30B7\u30E3\u30C9\u30A6 */\n}\n/**\n * \u30A2\u30AF\u30C6\u30A3\u30D6\uFF08\u30D5\u30A9\u30FC\u30AB\u30B9\u3055\u308C\u3066\u3044\u308B\uFF09\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30BF\u30A4\u30C8\u30EB\u30D0\u30FC\n */\n.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar {\n    background-color: var(--$[prefix]-title-bar-active-bg);\n    color: var(--$[prefix]-title-text-active-color);\n}\n.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar .$[prefix]-title {\n    color: var(--$[prefix]-title-text-active-color);\n}\n\n/* --- \u30A6\u30A3\u30F3\u30C9\u30A6\u7279\u6B8A\u30B9\u30BF\u30A4\u30EB --- */\n/**\n * \u300C\u5E38\u306B\u624B\u524D\u306B\u8868\u793A\u300D\u304C\u6709\u52B9\u306A\u30A6\u30A3\u30F3\u30C9\u30A6\n */\n.$[prefix]-window.$[prefix]-always-on-top .$[prefix]-title-bar {\n    background-image: repeating-linear-gradient(\n        -45deg,\n        transparent,\n        transparent 4px,\n        rgba(255, 255, 255, 0.05) 4px,\n        rgba(255, 255, 255, 0.05) 8px\n    );\n}\n\n/**\n * \u30A6\u30A3\u30F3\u30C9\u30A6\u30B7\u30A7\u30A4\u30AF\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\n */\n@keyframes $[prefix]-shake {\n    10%, 90% { transform: translate3d(-1px, 0, 0); }\n    20%, 80% { transform: translate3d(2px, 0, 0); }\n    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }\n    40%, 60% { transform: translate3d(4px, 0, 0); }\n}\n.$[prefix]-window.$[prefix]-is-shaking {\n    animation: $[prefix]-shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n}\n\n/* ========================================================================\n    6. \u30B4\u30FC\u30B9\u30C8\u30A6\u30A3\u30F3\u30C9\u30A6\n   ======================================================================== */\n/**\n * \u30C9\u30E9\u30C3\u30B0\u30FB\u30EA\u30B5\u30A4\u30BA\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u8F2A\u90ED\n */\n.$[prefix]-ghost-window {\n    position: absolute;\n    box-sizing: border-box;\n    border: 2px dashed var(--$[prefix]-title-bar-active-bg);\n    background-color: rgba(0, 120, 215, 0.1);\n    z-index: 99999;\n    pointer-events: none;\n}\n\n/* ========================================================================\n    7. \u30BF\u30A4\u30C8\u30EB\u30D0\u30FC\n   ======================================================================== */\n/* --- \u30BF\u30A4\u30C8\u30EB\u30D0\u30FC\u57FA\u672C\u30B9\u30BF\u30A4\u30EB --- */\n.$[prefix]-title-bar {\n    display: flex;\n    align-items: center;\n    height: var(--$[prefix]-title-bar-height);\n    background-color: var(--$[prefix]-title-bar-bg);\n    color: var(--$[prefix]-title-text-color);\n    cursor: move;\n    flex-shrink: 0;\n    touch-action: none;\n}\n/**\n * \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u5DE6\u5074\u306B\u3042\u308B\u5834\u5408\u306E\u30BF\u30A4\u30C8\u30EB\u30D0\u30FC\n */\n.$[prefix]-title-bar.$[prefix]-controls-left {\n    flex-direction: row-reverse;\n}\n\n/* --- \u30A2\u30A4\u30B3\u30F3\u30FB\u30BF\u30A4\u30C8\u30EB --- */\n.$[prefix]-icon {\n    min-width: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    margin: 0 4px;\n    pointer-events: none;\n    flex-shrink: 0;\n}\n\n.$[prefix]-icon:empty {\n    display: none;\n}\n\n.$[prefix]-icon i {\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n    line-height: calc(var(--$[prefix]-title-bar-height) * 0.75);\n    text-align: center;\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.$[prefix]-icon img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.$[prefix]-title {\n    flex-grow: 1;\n    padding: 0 8px;\n    font-family: sans-serif;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.44);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    pointer-events: none;\n}\n\n.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-title {\n    text-align: right;\n}\n\n/* --- \u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DC\u30BF\u30F3 --- */\n.$[prefix]-controls {\n    display: flex;\n    height: 100%;\n    margin-left: auto;\n    flex-shrink: 0;\n}\n\n.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-controls {\n    margin-left: 0;\n    margin-right: auto;\n    flex-direction: row-reverse;\n}\n\n.$[prefix]-control-btn {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: calc(var(--$[prefix]-title-bar-height) * 1.3);\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    box-sizing: border-box;\n    background-color: transparent;\n    font-size: calc(var(--$[prefix]-title-bar-height) * 0.5);\n    cursor: pointer;\n    text-align: center;\n    vertical-align: middle;\n    font-family: sans-serif;\n    transition: background-color 0.2s;\n    touch-action: auto;\n    padding: 0;\n    margin: 0;\n    color: inherit;\n}\n\n.$[prefix]-custom-control-btn > * {\n    pointer-events: none;\n}\n\n.$[prefix]-control-btn:hover {\n    background-color: var(--$[prefix]-control-hover-bg);\n}\n\n.$[prefix]-control-btn.$[prefix]-close-btn:hover {\n    background-color: var(--$[prefix]-control-close-hover-bg);\n    color: var(--$[prefix]-control-close-hover-color);\n}\n\n.$[prefix]-refresh-btn {\n    display: none;\n}\n\n.$[prefix]-window.$[prefix]-is-virtualized-manual .$[prefix]-refresh-btn {\n    display: inline-flex;\n}\n\n/* ========================================================================\n    8. \u30E1\u30A4\u30F3\u30B3\u30F3\u30C6\u30F3\u30C4\u30A8\u30EA\u30A2\n   ======================================================================== */\n.$[prefix]-main-content {\n    all: initial;\n    position: relative;\n    display:flex;\n    color: var(--$[prefix]-text-color);\n    flex-direction:column;\n    flex-grow:1;\n    overflow:hidden;\n}\n\n.$[prefix]-content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    position: relative;\n    overflow: auto;\n    touch-action: auto;\n}\n\n.$[prefix]-content iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n}\n\n/* --- \u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC --- */\n.$[prefix]-loader-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--$[prefix]-loader-bg);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 20;\n}\n@keyframes $[prefix]-spinner-rotation {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n.$[prefix]-loader-spinner {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    border-bottom-color: var(--$[prefix]-loader-color);\n    animation: $[prefix]-spinner-rotation 1s linear infinite;\n}\n\n.$[prefix]-canvas-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    z-index: 10;\n}\n.$[prefix]-canvas-overlay img {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n}\n\n/* ========================================================================\n    9. \u30E1\u30CB\u30E5\u30FC\u30D0\u30FC\n   ======================================================================== */\n.$[prefix]-menu-bar {\n    color: var(--$[prefix]-menu-item-color);\n    display: flex;\n    background-color: var(--$[prefix]-bg);\n    padding: 2px;\n    flex-shrink: 0;\n    border-bottom: 1px solid var(--$[prefix]-border);\n    touch-action: auto;\n}\n\n.$[prefix]-menu-item {\n    font-family: sans-serif;\n    font-size: clamp(0px , calc(var(--winlet-title-bar-height) * 0.6), 14px);\n    padding: 4px 8px;\n    cursor: default;\n    position: relative;\n}\n\n.$[prefix]-menu-item:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n/* --- \u30C9\u30ED\u30C3\u30D7\u30C0\u30A6\u30F3\u30E1\u30CB\u30E5\u30FC --- */\n.$[prefix]-menu-dropdown {\n    color: var(--$[prefix]-menu-item-color);\n    display: none;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px var(--$[prefix]-shadow-color-light);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 150px;\n    z-index: 10;\n    touch-action: auto;\n}\n\n.$[prefix]-menu-dropdown li {\n    padding: 0 20px;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.$[prefix]-menu-dropdown li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n\n.$[prefix]-menu-dropdown li.$[prefix]-separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n\n.$[prefix]-menu-dropdown-item {\n    display: flex;\n    line-height: 1.6em;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    width: 100%;\n    white-space: nowrap;\n}\n\n/* --- \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC --- */\n.$[prefix]-menu-dropdown li.$[prefix]-has-submenu {\n    position: relative;\n}\n.$[prefix]-menu-dropdown li.$[prefix]-has-submenu::after {\n    content: '\u25B6';\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    margin-top: calc(var(--winlet-title-bar-height) * -0.5);\n    font-size: 0.8em;\n    color: inherit;\n}\n/**\n * \u30CD\u30B9\u30C8\u3055\u308C\u305F\u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306E\u8868\u793A\u4F4D\u7F6E\n */\n.$[prefix]-menu-dropdown li.$[prefix]-has-submenu > .$[prefix]-menu-dropdown {\n    top: -5px; /* li\u306Epadding\u3092\u8003\u616E */\n    left: 100%;\n}\n/**\n * \u30B5\u30D6\u30E1\u30CB\u30E5\u30FC\u306F\u30DB\u30D0\u30FC\u3067\u958B\u304F\n */\n.$[prefix]-menu-dropdown li.$[prefix]-has-submenu:hover > .$[prefix]-menu-dropdown {\n    display: block;\n}\n\n/* --- \u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u30C6\u30AD\u30B9\u30C8 --- */\n.$[prefix]-shortcut-text {\n    color: var(--$[prefix]-shortcut-text-color);\n    margin-left: 1em;\n}\n.$[prefix]-menu-dropdown li:hover .$[prefix]-shortcut-text {\n    color: inherit;\n}\n\n/* --- \u30BF\u30D6 --- */\n.$[prefix]-tab-bar {\n    color: var(--$[prefix]-menu-item-color);\n    overflow-x: auto;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    scrollbar-width: thin;\n    display: flex;\n    background-color: var(--$[prefix]-tab-bar-bg);\n    flex-shrink: 0;\n    align-items: flex-end;\n    touch-action: auto;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar{\n    width: 6px;\n    height: 6px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-thumb {\n    background-color: var(--$[prefix]-scrollbar-thumb-bg);\n    border-radius: 3px;\n}\n\n.$[prefix]-tab-bar::-webkit-scrollbar-track {\n    background-color: transparent;\n}\n\n/* --- \u30BF\u30D6 --- */\n.$[prefix]-tab {\n    white-space: nowrap;\n    padding: 8px 16px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n    border-right: 1px solid var(--$[prefix]-tab-border);\n    background-color: var(--$[prefix]-tab-bg);\n}\n\n.$[prefix]-tab.$[prefix]-active {\n    background-color: var(--$[prefix]-tab-active-bg);\n    border-bottom: 2px solid var(--$[prefix]-title-bar-active-bg);\n}\n\n.$[prefix]-tab.$[prefix]-active .$[prefix]-tab-close-btn:hover {\n    background-color: var(--$[prefix]-tab-active-close-btn-hover-bg);\n}\n\n/**\n * \u30C9\u30E9\u30C3\u30B0\u4E2D\u306E\u30BF\u30D6\u306E\u30B9\u30BF\u30A4\u30EB\n */\n.$[prefix]-tab.$[prefix]-dragging {\n    opacity: 0.5;\n}\n\n/* --- \u30BF\u30D6\u95A2\u9023\u30DC\u30BF\u30F3 --- */\n/**\n * \u30BF\u30D6\u306E\u9589\u3058\u308B\u30DC\u30BF\u30F3\n */\n.$[prefix]-tab-close-btn {\n    margin-left: 8px;\n    padding: 0 4px;\n    border-radius: 50%;\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1;\n}\n.$[prefix]-tab-close-btn:hover {\n    background-color: var(--$[prefix]-tab-close-btn-hover-bg);\n}\n\n/**\n * \u30BF\u30D6\u8FFD\u52A0\u30DC\u30BF\u30F3\n */\n.$[prefix]-tab-add-btn {\n    padding: 8px;\n    font-size: 14px;\n    cursor: pointer;\n    border-bottom: 1px solid var(--$[prefix]-tab-border);\n}\n.$[prefix]-tab-add-btn:hover {\n    background-color: var(--$[prefix]-title-bar-bg);\n}\n\n/* --- \u30BF\u30D6\u30B3\u30F3\u30C6\u30F3\u30C4 --- */\n.$[prefix]-tab-content {\n    display: none;\n}\n\n.$[prefix]-tab-content.$[prefix]-active {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n/* ========================================================================\n    10. \u5206\u5272\u30D3\u30E5\u30FC (Split View)\n   ======================================================================== */\n.$[prefix]-split-view {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n.$[prefix]-split-view-horizontal {\n    flex-direction: row;\n}\n.$[prefix]-split-view-vertical {\n    flex-direction: column;\n}\n.$[prefix]-split-pane {\n    position: relative;\n    overflow: auto;\n}\n.$[prefix]-split-resizer {\n    background-color: var(--$[prefix]-border);\n    flex-shrink: 0;\n    z-index: 1;\n    transition: background-color 0.2s;\n}\n.$[prefix]-split-resizer:hover {\n    background-color: var(--$[prefix]-title-bar-active-bg);\n}\n.$[prefix]-split-view-horizontal > .$[prefix]-split-resizer {\n    width: 4px;\n    cursor: col-resize;\n}\n.$[prefix]-split-view-vertical > .$[prefix]-split-resizer {\n    height: 4px;\n    cursor: row-resize;\n}\n\n/* ========================================================================\n    11. \u30B9\u30C6\u30FC\u30BF\u30B9\u30D0\u30FC (Status Bar)\n   ======================================================================== */\n.$[prefix]-statusbar {\n    flex-shrink: 0;\n    height: 24px;\n    line-height: 24px;\n    padding: 0 8px;\n    background-color: var(--$[prefix]-title-bar-bg);\n    border-top: 1px solid var(--$[prefix]-border);\n    font-size: 12px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    user-select: none;\n}\n\n/* ========================================================================\n    12. \u30A6\u30A3\u30F3\u30C9\u30A6\u5185\u691C\u7D22 (In-window Search)\n   ======================================================================== */\n.$[prefix]-search-bar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-color: var(--$[prefix]-bg);\n    border: 1px solid var(--$[prefix]-border);\n    box-shadow: var(--$[prefix]-shadow-color-light) -2px 2px 5px;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    border-radius: 3px;\n    z-index: 80;\n}\n.$[prefix]-search-input {\n    border: 1px solid var(--$[prefix]-border);\n    padding: 2px 4px;\n    width: 150px;\n}\n.$[prefix]-search-results {\n    font-size: 12px;\n    padding: 0 4px;\n}\n.$[prefix]-search-btn {\n    border: 1px solid var(--$[prefix]-border);\n    background-color: var(--$[prefix]-bg);\n    cursor: pointer;\n    padding: 2px 4px;\n    font-size: 12px;\n    min-width: 22px;\n}\n.$[prefix]-search-btn:hover {\n    background-color: var(--$[prefix]-popup-button-hover-bg);\n}\n.$[prefix]-search-btn-active {\n    background-color: var(--$[prefix]-title-bar-active-bg);\n    color: var(--$[prefix]-title-bar-active-color);\n}\n.$[prefix]-search-highlight {\n    background-color: var(--$[prefix]-search-highlight-bg);\n    color: black;\n}\n.$[prefix]-search-highlight-active {\n    background-color: var(--$[prefix]-search-highlight-active-bg);\n}\n\n/* ========================================================================\n    13. \u30EA\u30B5\u30A4\u30BA\u30CF\u30F3\u30C9\u30EB\n   ======================================================================== */\n.$[prefix]-resize-handle {\n    position: absolute;\n    z-index: 5;\n    touch-action: none;\n}\n\n.$[prefix]-resize-handle.$[prefix]-n { top: var(--$[prefix]-resize-handle-offset); left: 0; right: 0; height: var(--$[prefix]-resize-handle-size); cursor: n-resize; }\n.$[prefix]-resize-handle.$[prefix]-s { bottom: var(--$[prefix]-resize-handle-offset); left: 0; right: 0; height: var(--$[prefix]-resize-handle-size); cursor: s-resize; }\n.$[prefix]-resize-handle.$[prefix]-w { top: 0; bottom: 0; left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: w-resize; }\n.$[prefix]-resize-handle.$[prefix]-e { top: 0; bottom: 0; right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); cursor: e-resize; }\n.$[prefix]-resize-handle.$[prefix]-nw { top: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: nw-resize; }\n.$[prefix]-resize-handle.$[prefix]-ne { top: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: ne-resize; }\n.$[prefix]-resize-handle.$[prefix]-sw { bottom: var(--$[prefix]-resize-handle-offset); left: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: sw-resize; }\n.$[prefix]-resize-handle.$[prefix]-se { bottom: var(--$[prefix]-resize-handle-offset); right: var(--$[prefix]-resize-handle-offset); width: var(--$[prefix]-resize-handle-size); height: var(--$[prefix]-resize-handle-size); cursor: se-resize; }\n\n/* ========================================================================\n    14. \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u30E1\u30CB\u30E5\u30FC\n   ======================================================================== */\n.$[prefix]-context-menu {\n    color: var(--$[prefix]-menu-item-color);\n    pointer-events: all;\n    position: fixed;\n    z-index: 10000;\n    background-color: var(--$[prefix]-menu-bg);\n    border: 1px solid var(--$[prefix]-menu-border);\n    box-shadow: 0 2px 8px var(--$[prefix]-shadow-color-light);\n    list-style: none;\n    margin: 0;\n    padding: 4px 0;\n    min-width: 160px;\n}\n.$[prefix]-context-menu li {\n    padding: 6px 24px;\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n}\n.$[prefix]-context-menu li:hover {\n    background-color: var(--$[prefix]-menu-item-hover-bg);\n    color: var(--$[prefix]-menu-item-hover-color);\n}\n.$[prefix]-context-menu li.$[prefix]-separator {\n    height: 1px;\n    background-color: var(--$[prefix]-menu-border);\n    margin: 4px 0;\n    padding: 0;\n}\n\n/* ========================================================================\n    15. \u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\n   ======================================================================== */\n.$[prefix]-popup-window .$[prefix]-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 20px;\n    box-sizing: border-box;\n}\n.$[prefix]-popup-message {\n    font-family: sans-serif;\n    font-size: 14px;\n    line-height: 1.5;\n    flex-grow: 1;\n    word-wrap: break-word;\n}\n.$[prefix]-popup-buttons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    margin-top: 20px;\n    flex-shrink: 0;\n    touch-action: auto;\n}\n.$[prefix]-popup-button {\n    color: var(--$[prefix]-menu-item-color);\n    min-width: 80px;\n    padding: 8px 12px;\n    margin: 0;\n    border: 1px solid var(--$[prefix]-menu-border);\n    border-radius: 3px;\n    background-color: var(--$[prefix]-bg);\n    cursor: pointer;\n    font-size: 14px;\n    box-shadow: 0 1px 1px var(--$[prefix]-shadow-color-light);\n}\n.$[prefix]-popup-button:hover {\n    border-color: var(--$[prefix]-popup-button-hover-border-color);\n    background-color: var(--$[prefix]-popup-button-hover-bg);\n}\n.$[prefix]-popup-button:active {\n    background-color: var(--$[prefix]-tab-bg);\n}\n\n/* ========================================================================\n    16. \u7D71\u5408\u30B9\u30BF\u30A4\u30EB (Merged Styles)\n   ======================================================================== */\n/* --- \u30E1\u30CB\u30E5\u30FC/\u30BF\u30D6\u7D71\u5408\u6642\u306E\u57FA\u672C\u30BF\u30A4\u30C8\u30EB\u30D0\u30FC --- */\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title-bar,\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title-bar {\n    height: auto;\n    align-items: flex-end;\n    padding: 0;\n}\n\n/* --- \u30E1\u30CB\u30E5\u30FC\u7D71\u5408\u30B9\u30BF\u30A4\u30EB --- */\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-icon {\n    margin-block: auto;\n}\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-title {\n    flex-grow: 1;\n    margin-block: auto;\n}\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-bar {\n    border-bottom: none;\n    background: transparent;\n    padding: 0 6px;\n    align-self: center;\n}\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-menu-item {\n    line-height: var(--$[prefix]-title-bar-height);\n    padding-top: 0;\n    padding-bottom: 0;\n}\n/* \u30A2\u30AF\u30C6\u30A3\u30D6\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u7D71\u5408\u30E1\u30CB\u30E5\u30FC\u306E\u6587\u5B57\u8272 */\n.$[prefix]-window.$[prefix]-menu-style-merged.$[prefix]-active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item {\n    color: var(--winlet-menu-item-hover-color);\n}\n.$[prefix]-window.$[prefix]-menu-style-merged.$[prefix]-active:not(.$[prefix]-tab-style-merged) .$[prefix]-menu-item:hover {\n    background-color: var(--$[prefix]-title-bar-bg);\n    color: var(--$[prefix]-menu-item-color);\n}\n\n/* --- \u30BF\u30D6\u7D71\u5408\u30B9\u30BF\u30A4\u30EB (Chrome\u98A8) --- */\n.$[prefix]-window.$[prefix]-tab-style-merged.$[prefix]-window.$[prefix]-active .$[prefix]-title-bar {\n    background-color: var(--$[prefix]-title-bar-bg);\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-title {\n    display: none;\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar {\n    background-color: transparent;\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0;\n    align-items: flex-end;\n    height: calc(var(--$[prefix]-title-bar-height) + 4px);\n    margin: 0;\n    order: 1; /* controls\u3088\u308A\u524D\u306B\u914D\u7F6E */\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-bar::-webkit-scrollbar{\n    display: none;\n}\n.$[prefix]-window.$[prefix]-title-bar.$[prefix]-controls-left .$[prefix]-tab-bar {\n    order: -1;\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab {\n    border: 1px solid var(--$[prefix]-border);\n    border-bottom: none;\n    border-radius: 6px 6px 0 0;\n    margin-top: 4px;\n    margin-left: -1px;\n    position: relative;\n    bottom: -1px;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab.$[prefix]-active {\n    background-color: var(--$[prefix]-bg);\n    border-color: var(--$[prefix]-border);\n    border-bottom: 1px solid var(--$[prefix]-bg);\n    z-index: 2;\n}\n\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-tab-add-btn {\n    border: none;\n    align-self: center;\n}\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-main-content {\n    border-top: none;\n}\n\n/* --- \u7D71\u5408\u6642\u306E\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DC\u30BF\u30F3 --- */\n.$[prefix]-window.$[prefix]-tab-style-merged .$[prefix]-controls,\n.$[prefix]-window.$[prefix]-menu-style-merged .$[prefix]-controls {\n    align-self: flex-start;\n    order: 2;\n}\n\n/* ========================================================================\n    17. \u30BF\u30B9\u30AF\u30D0\u30FC\n   ======================================================================== */\n.$[prefix]-taskbar {\n    position: absolute;\n    background-color: var(--$[prefix]-taskbar-bg);\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    padding: 0 5px;\n    z-index: 50000;\n    flex-shrink: 0;\n    display: flex;\n    gap: 5px;\n    overflow: auto;\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    backdrop-filter: blur(5px);\n    pointer-events: all;\n}\n.$[prefix]-taskbar::-webkit-scrollbar{\n    display: none;\n}\n\n/* --- \u4F4D\u7F6E --- */\n.$[prefix]-taskbar.$[prefix]-taskbar-bottom {\n    bottom: 0;\n    left: 0;\n    border-top: 1px solid var(--$[prefix]-taskbar-border);\n}\n.$[prefix]-taskbar.$[prefix]-taskbar-top {\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid var(--$[prefix]-taskbar-border);\n}\n.$[prefix]-taskbar.$[prefix]-taskbar-left {\n    top: 0;\n    left: 0;\n    border-right: 1px solid var(--$[prefix]-taskbar-border);\n}\n.$[prefix]-taskbar.$[prefix]-taskbar-right {\n    top: 0;\n    right: 0;\n    border-left: 1px solid var(--$[prefix]-taskbar-border);\n}\n\n.$[prefix]-taskbar.$[prefix]-taskbar-bottom,\n.$[prefix]-taskbar.$[prefix]-taskbar-top {\n    --$[prefix]-taskbar-icon-size: var(--$[prefix]-taskbar-height);\n    width: 100%;\n    height: var(--$[prefix]-taskbar-height);\n    flex-direction: row;\n}\n.$[prefix]-taskbar.$[prefix]-taskbar-left,\n.$[prefix]-taskbar.$[prefix]-taskbar-right {\n    --$[prefix]-taskbar-icon-size: var(--$[prefix]-taskbar-width);\n    width: var(--$[prefix]-taskbar-width);\n    height: 100%;\n    flex-direction: column;\n}\n\n\n.$[prefix]-taskbar-item {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    height: calc(var(--winlet-taskbar-icon-size) - 6px);\n    padding: 0 10px;\n    border-radius: 3px;\n    background-color: var(--$[prefix]-taskbar-item-bg);\n    cursor: pointer;\n    flex-shrink: 0;\n    max-width: 150px;\n    transition: background-color 0.2s;\n    font-family: sans-serif;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-sizing: border-box;\n}\n/* \u7E26\u5411\u304D\u30BF\u30B9\u30AF\u30D0\u30FC\u306E\u30A2\u30A4\u30C6\u30E0 */\n.$[prefix]-taskbar.$[prefix]-taskbar-left .$[prefix]-taskbar-item,\n.$[prefix]-taskbar.$[prefix]-taskbar-right .$[prefix]-taskbar-item {\n    width: calc(var(--winlet-taskbar-icon-size) - 6px);\n    height: auto;\n    min-height: 40px;\n    max-width: none;\n    padding: 10px 0;\n    writing-mode: vertical-rl;\n}\n\n.$[prefix]-taskbar-item-icon {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.$[prefix]-taskbar-item-icon img {\n    width: calc(var(--winlet-taskbar-icon-size) - 6px);\n    height: calc(var(--winlet-taskbar-icon-size) - 6px);\n    object-fit: contain;\n}\n.$[prefix]-taskbar-item-icon i {\n    font-size: calc((var(--winlet-taskbar-icon-size) - 12px) * 0.8);\n    line-height: calc(var(--winlet-taskbar-icon-size) - 18px);\n    text-align: center;\n    object-fit: contain;\n}\n.$[prefix]-taskbar-item.$[prefix]-icon-only {\n    width: calc(var(--winlet-taskbar-icon-size) - 6px);\n    height: calc(var(--winlet-taskbar-icon-size) - 6px);\n    padding: 6px;\n}\n/* \u7E26\u5411\u304D\u30A2\u30A4\u30B3\u30F3\u30E2\u30FC\u30C9 */\n.$[prefix]-taskbar.$[prefix]-taskbar-left .$[prefix]-taskbar-item.$[prefix]-icon-only,\n.$[prefix]-taskbar.$[prefix]-taskbar-right .$[prefix]-taskbar-item.$[prefix]-icon-only {\n    width: calc(var(--winlet-taskbar-icon-size) - 6px);\n    height: calc(var(--winlet-taskbar-icon-size) - 6px);\n}\n\n.$[prefix]-taskbar-item.$[prefix]-active {\n    background-color: var(--$[prefix]-taskbar-item-active-bg);\n    color: var(--$[prefix]-taskbar-item-active-color);\n}\n.$[prefix]-taskbar-item.$[prefix]-minimized {\n    opacity: 0.7;\n}\n\n/**\n * \u4EEE\u60F3\u5316\u3055\u308C\u305F\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u793A\u3059\u30BF\u30B9\u30AF\u30D0\u30FC\u30A2\u30A4\u30C6\u30E0\n */\n.$[prefix]-taskbar-item.$[prefix]-virtualized {\n    filter: grayscale(80%);\n    opacity: 0.7;\n    font-style: italic;\n}\n.$[prefix]-taskbar-item.$[prefix]-virtualized .$[prefix]-taskbar-item-icon img {\n    width: calc(var(--winlet-taskbar-icon-size) - 9px);\n    height: calc(var(--winlet-taskbar-icon-size) - 9px);\n}\n.$[prefix]-taskbar-item.$[prefix]-virtualized .$[prefix]-taskbar-item-icon i {\n    font-size: calc((var(--winlet-taskbar-icon-size) - 18px) * 0.8);\n    line-height: calc(var(--winlet-taskbar-icon-size) - 27px);\n}\n\n/* ========================================================================\n    18. \u30E2\u30D0\u30A4\u30EB\u30FB\u30BF\u30C3\u30C1\u30C7\u30D0\u30A4\u30B9\u5BFE\u5FDC\n   ======================================================================== */\n@media (pointer: coarse), (max-width: 768px) {\n    /* \u30EA\u30B5\u30A4\u30BA\u30CF\u30F3\u30C9\u30EB\u3068\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DC\u30BF\u30F3\u3092\u5927\u304D\u304F\u3057\u3066\u64CD\u4F5C\u3057\u3084\u3059\u304F\u3059\u308B */\n    :root {\n        --$[prefix]-resize-handle-size: 16px;\n        --$[prefix]-resize-handle-offset: -8px;\n    }\n    .$[prefix]-control-btn {\n        width: calc(var(--$[prefix]-title-bar-height) * 1.5);\n    }\n}\n\n/* ========================================================================\n    19. \u30CF\u30A4\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u30E2\u30FC\u30C9\u5BFE\u5FDC\n   ======================================================================== */\n/* high-contrast.ts\u3068\u5408\u308F\u305B\u308B */\n@media (prefers-contrast: more) {\n    .$[prefix]-window,\n    .$[prefix]-window.$[prefix]-active {\n        box-shadow: none;\n    }\n    .$[prefix]-window.$[prefix]-active {\n        border: 2px solid var(--$[prefix]-title-bar-active-bg);\n    }\n}\n\n/* ========================================================================\n    20. \u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u7121\u52B9\u5316\n   ======================================================================== */\n.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window,\n.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-minimized,\n.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-maximized,\n.$[prefix]-container.$[prefix]-animations-disabled .$[prefix]-window.$[prefix]-is-restoring {\n    transition: none;\n}\n\n/* ========================================================================\n    21. \u30C7\u30D0\u30C3\u30B0\u30E2\u30FC\u30C9\n   ======================================================================== */\n.$[prefix]-debug-overlay {\n    display: none;\n    position: absolute;\n    top: calc(var(--$[prefix]-title-bar-height) + 5px);\n    left: 5px;\n    background: rgba(0,0,0,0.5);\n    color: #fff;\n    padding: 5px;\n    border-radius: 3px;\n    font-family: monospace;\n    font-size: 12px;\n    line-height: 1.4;\n    pointer-events: none;\n    z-index: 100;\n    white-space: pre;\n}\n\n.$[prefix]-container.$[prefix]-debug-mode-enabled .$[prefix]-debug-overlay {\n    display: block;\n}\n";
var _default = exports["default"] = styleData;

},{}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkTheme = void 0;
var darkTheme = exports.darkTheme = {
  name: "dark",
  variables: {
    "--$[prefix]-text-color": "#e0e0e0",
    "--$[prefix]-bg": "#2d2d2d",
    "--$[prefix]-border": "#555",
    "--$[prefix]-shadow-color-light": "rgba(0,0,0,0.3)",
    "--$[prefix]-shadow-color-strong": "rgba(0,0,0,0.5)",
    "--$[prefix]-shadow-color-active": "rgba(0,0,0,0.7)",
    "--$[prefix]-title-bar-bg": "#3c3c3c",
    "--$[prefix]-title-text-color": "#e0e0e0",
    "--$[prefix]-title-text-active-color": "#fff",
    "--$[prefix]-control-bg": "#4a4a4a",
    "--$[prefix]-control-hover-bg": "#5a5a5a",
    "--$[prefix]-menu-bg": "#252525",
    "--$[prefix]-menu-border": "#444",
    "--$[prefix]-menu-item-color": "#e0e0e0",
    "--$[prefix]-shortcut-text-color": "#b0b0b0",
    "--$[prefix]-tab-bg": "#383838",
    "--$[prefix]-tab-active-bg": "#2d2d2d",
    "--$[prefix]-tab-border": "#505050",
    "--$[prefix]-tab-bar-bg": "#383838",
    "--$[prefix]-tab-close-btn-hover-bg": "#5a5a5a",
    "--$[prefix]-tab-active-close-btn-hover-bg": "#6a6a6a",
    "--$[prefix]-popup-button-hover-bg": "#5a5a5a",
    "--$[prefix]-popup-button-hover-border-color": "#777",
    "--$[prefix]-taskbar-bg": "rgba(45, 45, 45, 0.9)",
    "--$[prefix]-taskbar-border": "#555",
    "--$[prefix]-taskbar-item-bg": "#5a5a5a",
    "--$[prefix]-scrollbar-thumb-bg": "rgba(180, 180, 180, 0.5)"
  }
};

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;
var defaultTheme = exports.defaultTheme = {
  name: "default",
  variables: {
    "--$[prefix]-text-color": "#000",
    "--$[prefix]-bg": "#f0f0f0",
    "--$[prefix]-border": "#a0a0a0",
    "--$[prefix]-shadow-color-light": "rgba(0,0,0,0.15)",
    "--$[prefix]-shadow-color-strong": "rgba(0,0,0,0.3)",
    "--$[prefix]-shadow-color-active": "rgba(0,0,0,0.45)",
    "--$[prefix]-title-bar-bg": "#e0e0e0",
    "--$[prefix]-title-bar-active-bg": "#0078d7",
    "--$[prefix]-title-text-color": "#000",
    "--$[prefix]-title-text-active-color": "#fff",
    "--$[prefix]-control-bg": "#d0d0d0",
    "--$[prefix]-control-hover-bg": "#e5e5e5",
    "--$[prefix]-control-close-hover-bg": "#e81123",
    "--$[prefix]-control-close-hover-color": "#fff",
    "--$[prefix]-menu-bg": "#fff",
    "--$[prefix]-menu-border": "#ccc",
    "--$[prefix]-menu-item-color": "#000",
    "--$[prefix]-menu-item-hover-bg": "#0078d7",
    "--$[prefix]-menu-item-hover-color": "#fff",
    "--$[prefix]-shortcut-text-color": "#666",
    "--$[prefix]-tab-bg": "#dcdcdc",
    "--$[prefix]-tab-active-bg": "#f0f0f0",
    "--$[prefix]-tab-border": "#b0b0b0",
    "--$[prefix]-tab-bar-bg": "#e1e1e1",
    "--$[prefix]-tab-close-btn-hover-bg": "#ccc",
    "--$[prefix]-tab-active-close-btn-hover-bg": "#ddd",
    "--$[prefix]-search-highlight-bg": "yellow",
    "--$[prefix]-search-highlight-active-bg": "orange",
    "--$[prefix]-popup-button-hover-bg": "#e9e9e9",
    "--$[prefix]-popup-button-hover-border-color": "#bbb",
    "--$[prefix]-taskbar-bg": "rgba(240, 240, 240, 0.9)",
    "--$[prefix]-taskbar-border": "#a0a0a0",
    "--$[prefix]-taskbar-item-bg": "#d0d0d0",
    "--$[prefix]-taskbar-item-active-bg": "#0078d7",
    "--$[prefix]-taskbar-item-active-color": "#fff",
    "--$[prefix]-loader-bg": "rgba(255, 255, 255, 0.7)",
    "--$[prefix]-loader-color": "var(--$[prefix]-title-bar-active-bg)",
    "--$[prefix]-scrollbar-thumb-bg": "rgba(100, 100, 100, 0.5)"
  }
};

},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highContrastTheme = void 0;
var highContrastTheme = exports.highContrastTheme = {
  name: "high-contrast",
  variables: {
    "--$[prefix]-text-color": "#fff",
    "--$[prefix]-bg": "#000",
    "--$[prefix]-border": "#fff",
    "--$[prefix]-shadow-color-light": "transparent",
    "--$[prefix]-shadow-color-strong": "transparent",
    "--$[prefix]-shadow-color-active": "transparent",
    "--$[prefix]-title-bar-bg": "#000",
    "--$[prefix]-title-bar-active-bg": "#0000ff",
    "--$[prefix]-title-text-color": "#fff",
    "--$[prefix]-title-text-active-color": "#000",
    "--$[prefix]-control-bg": "#000",
    "--$[prefix]-control-hover-bg": "#444",
    "--$[prefix]-control-close-hover-bg": "#ff0000",
    "--$[prefix]-control-close-hover-color": "#fff",
    "--$[prefix]-menu-bg": "#000",
    "--$[prefix]-menu-border": "#fff",
    "--$[prefix]-menu-item-color": "#fff",
    "--$[prefix]-menu-item-hover-bg": "#0000ff",
    "--$[prefix]-menu-item-hover-color": "#fff",
    "--$[prefix]-tab-bg": "#000",
    "--$[prefix]-tab-active-bg": "#000",
    "--$[prefix]-tab-border": "#fff",
    "--$[prefix]-taskbar-bg": "rgba(0, 0, 0, 0.9)",
    "--$[prefix]-taskbar-border": "#fff",
    "--$[prefix]-taskbar-item-bg": "#000",
    "--$[prefix]-taskbar-item-active-bg": "#0000ff",
    "--$[prefix]-taskbar-item-active-color": "#fff"
  }
};

},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIB_VERSION = void 0;
var LIB_VERSION = exports.LIB_VERSION = "v1.0.2.7";

},{}]},{},[43])
//# sourceMappingURL=winlet.js.map
