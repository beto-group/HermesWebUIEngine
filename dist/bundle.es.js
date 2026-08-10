(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".hermes-webui-fullscreen-frame{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#030712;box-sizing:border-box}.hermes-iframe-full{position:absolute;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;display:block;background:#030712;z-index:1}.hermes-top-hover-zone{position:absolute;top:0;left:0;right:0;height:36px;z-index:100;pointer-events:auto}.hermes-floating-navbar{position:absolute;top:0;left:50%;transform:translate(-50%) translateY(-100%);display:flex;align-items:center;gap:12px;padding:8px 16px;background:#0a121eeb;border:1px solid rgba(255,255,255,.15);border-top:none;border-radius:0 0 12px 12px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 12px 32px #0009;z-index:1000;transition:transform .28s cubic-bezier(.16,1,.3,1),opacity .28s ease;opacity:0;pointer-events:none;-webkit-user-select:none;user-select:none}.hermes-floating-navbar.visible{transform:translate(-50%) translateY(0)!important;opacity:1!important;pointer-events:auto!important}.hermes-top-edge-indicator{position:absolute;top:0;left:50%;transform:translate(-50%);width:48px;height:3px;background:#10b98166;border-radius:0 0 3px 3px;transition:width .2s ease,background .2s ease}.hermes-top-hover-zone:hover .hermes-top-edge-indicator{width:96px;background:#10b981cc;box-shadow:0 0 8px #10b98199}.hermes-nav-status{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:500;color:#e2e8f0}.status-dot{width:7px;height:7px;border-radius:50%;display:inline-block}.status-dot.online{background:#10b981;box-shadow:0 0 8px #10b981}.status-dot.offline{background:#ef4444}.status-dot.checking{background:#f59e0b;animation:pulse 1s infinite}@keyframes pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}.hermes-nav-actions{display:flex;align-items:center;gap:6px}.hermes-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:#ffffff14;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#f1f5f9;font-size:11px;font-weight:500;text-decoration:none;cursor:pointer;transition:all .15s ease;line-height:1}.hermes-btn:hover:not(:disabled){background:#ffffff29;border-color:#ffffff40;color:#fff}.hermes-btn:disabled{opacity:.45;cursor:not-allowed}.hermes-btn.primary{background:#10b981;color:#030712;border-color:#10b981;font-weight:600}.hermes-btn.primary:hover:not(:disabled){background:#059669}.hermes-btn.danger{background:#ef444426;border-color:#ef44444d;color:#fca5a5}.hermes-btn.danger:hover:not(:disabled){background:#ef44444d;color:#fef2f2}.animate-spin{animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.hermes-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#000000bf;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:16px}.hermes-modal-content{width:100%;max-width:380px;background:#0f172a;border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:20px;box-shadow:0 20px 50px #000c;color:#f8fafc}.hermes-modal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.08)}.hermes-form-group{margin-bottom:12px}.hermes-label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:#94a3b8;margin-bottom:5px}.hermes-input{width:100%;padding:8px 12px;background:#030712;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#f8fafc;font-size:13px;outline:none;box-sizing:border-box}.hermes-input:focus{border-color:#10b981;box-shadow:0 0 0 2px #10b98133}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ns = { exports: {} }, al = {}, rs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), vc = Symbol.for("react.portal"), yc = Symbol.for("react.fragment"), gc = Symbol.for("react.strict_mode"), wc = Symbol.for("react.profiler"), kc = Symbol.for("react.provider"), Sc = Symbol.for("react.context"), xc = Symbol.for("react.forward_ref"), Cc = Symbol.for("react.suspense"), Ec = Symbol.for("react.memo"), _c = Symbol.for("react.lazy"), Wi = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object" ? null : (e = Wi && e[Wi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ls = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, os = Object.assign, is = {};
function pn(e, t, n) {
  this.props = e, this.context = t, this.refs = is, this.updater = n || ls;
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function us() {
}
us.prototype = pn.prototype;
function Qo(e, t, n) {
  this.props = e, this.context = t, this.refs = is, this.updater = n || ls;
}
var Ko = Qo.prototype = new us();
Ko.constructor = Qo;
os(Ko, pn.prototype);
Ko.isPureReactComponent = !0;
var Vi = Array.isArray, ss = Object.prototype.hasOwnProperty, Xo = { current: null }, as = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ss.call(t, r) && !as.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: tr, type: e, key: o, ref: i, props: l, _owner: Xo.current };
}
function Pc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function zc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Bi = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? zc("" + e.key) : t.toString(36);
}
function Nr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case tr:
        case vc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Nl(i, 0) : r, Vi(l) ? (n = "", e != null && (n = e.replace(Bi, "$&/") + "/"), Nr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Yo(l) && (l = Pc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Vi(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Nl(o, u);
    i += Nr(o, t, n, s, l);
  }
  else if (s = Nc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Nl(o, u++), i += Nr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Nr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Tc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null }, Pr = { transition: null }, jc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: Xo };
function fs() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = pn;
L.Fragment = yc;
L.Profiler = wc;
L.PureComponent = Qo;
L.StrictMode = gc;
L.Suspense = Cc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jc;
L.act = fs;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = os({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Xo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ss.call(t, s) && !as.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Sc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: kc, _context: e }, e.Consumer = e;
};
L.createElement = cs;
L.createFactory = function(e) {
  var t = cs.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: xc, render: e };
};
L.isValidElement = Yo;
L.lazy = function(e) {
  return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: Tc };
};
L.memo = function(e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
L.unstable_act = fs;
L.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
L.useContext = function(e) {
  return ce.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
L.useId = function() {
  return ce.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return ce.current.useRef(e);
};
L.useState = function(e) {
  return ce.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return ce.current.useTransition();
};
L.version = "18.3.1";
rs.exports = L;
var H = rs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc = H, Rc = Symbol.for("react.element"), Ic = Symbol.for("react.fragment"), Oc = Object.prototype.hasOwnProperty, Mc = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Dc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ds(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Oc.call(t, r) && !Dc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Rc, type: e, key: o, ref: i, props: l, _owner: Mc.current };
}
al.Fragment = Ic;
al.jsx = ds;
al.jsxs = ds;
ns.exports = al;
var g = ns.exports, ps = { exports: {} }, xe = {}, hs = { exports: {} }, ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(E, z) {
    var j = E.length;
    E.push(z);
    e: for (; 0 < j; ) {
      var K = j - 1 >>> 1, J = E[K];
      if (0 < l(J, z)) E[K] = z, E[j] = J, j = K;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0], j = E.pop();
    if (j !== z) {
      E[0] = j;
      e: for (var K = 0, J = E.length, ir = J >>> 1; K < ir; ) {
        var Et = 2 * (K + 1) - 1, _l = E[Et], _t = Et + 1, ur = E[_t];
        if (0 > l(_l, j)) _t < J && 0 > l(ur, _l) ? (E[K] = ur, E[_t] = j, K = _t) : (E[K] = _l, E[Et] = j, K = Et);
        else if (_t < J && 0 > l(ur, j)) E[K] = ur, E[_t] = j, K = _t;
        else break e;
      }
    }
    return z;
  }
  function l(E, z) {
    var j = E.sortIndex - z.sortIndex;
    return j !== 0 ? j : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, w = !1, k = !1, S = !1, O = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= E) r(c), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(E) {
    if (S = !1, d(E), !k) if (n(s) !== null) k = !0, re(x);
    else {
      var z = n(c);
      z !== null && Be(v, z.startTime - E);
    }
  }
  function x(E, z) {
    k = !1, S && (S = !1, f(P), P = -1), w = !0;
    var j = p;
    try {
      for (d(z), h = n(s); h !== null && (!(h.expirationTime > z) || E && !ye()); ) {
        var K = h.callback;
        if (typeof K == "function") {
          h.callback = null, p = h.priorityLevel;
          var J = K(h.expirationTime <= z);
          z = e.unstable_now(), typeof J == "function" ? h.callback = J : h === n(s) && r(s), d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ir = !0;
      else {
        var Et = n(c);
        Et !== null && Be(v, Et.startTime - z), ir = !1;
      }
      return ir;
    } finally {
      h = null, p = j, w = !1;
    }
  }
  var _ = !1, N = null, P = -1, $ = 5, T = -1;
  function ye() {
    return !(e.unstable_now() - T < $);
  }
  function St() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var z = !0;
      try {
        z = N(!0, E);
      } finally {
        z ? xt() : (_ = !1, N = null);
      }
    } else _ = !1;
  }
  var xt;
  if (typeof a == "function") xt = function() {
    a(St);
  };
  else if (typeof MessageChannel < "u") {
    var Ct = new MessageChannel(), M = Ct.port2;
    Ct.port1.onmessage = St, xt = function() {
      M.postMessage(null);
    };
  } else xt = function() {
    O(St, 0);
  };
  function re(E) {
    N = E, _ || (_ = !0, xt());
  }
  function Be(E, z) {
    P = O(function() {
      E(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    k || w || (k = !0, re(x));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var j = p;
    p = z;
    try {
      return E();
    } finally {
      p = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, z) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var j = p;
    p = E;
    try {
      return z();
    } finally {
      p = j;
    }
  }, e.unstable_scheduleCallback = function(E, z, j) {
    var K = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? K + j : K) : j = K, E) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = j + J, E = { id: m++, callback: z, priorityLevel: E, startTime: j, expirationTime: J, sortIndex: -1 }, j > K ? (E.sortIndex = j, t(c, E), n(s) === null && E === n(c) && (S ? (f(P), P = -1) : S = !0, Be(v, j - K))) : (E.sortIndex = J, t(s, E), k || w || (k = !0, re(x))), E;
  }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(E) {
    var z = p;
    return function() {
      var j = p;
      p = z;
      try {
        return E.apply(this, arguments);
      } finally {
        p = j;
      }
    };
  };
})(ms);
hs.exports = ms;
var Uc = hs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fc = H, Se = Uc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vs = /* @__PURE__ */ new Set(), Fn = {};
function Ft(e, t) {
  on(e, t), on(e + "Capture", t);
}
function on(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) vs.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qi = {}, Ki = {};
function Ac(e) {
  return ql.call(Ki, e) ? !0 : ql.call(Qi, e) ? !1 : $c.test(e) ? Ki[e] = !0 : (Qi[e] = !0, !1);
}
function Hc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wc(e, t, n, r) {
  if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Go = /[\-:]([a-z])/g;
function Zo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Go,
    Zo
  );
  ne[t] = new fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Go, Zo);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Go, Zo);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Wc(t, n, l, r) && (n = null), r || l === null ? Ac(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ht = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), ys = Symbol.for("react.provider"), gs = Symbol.for("react.context"), bo = Symbol.for("react.forward_ref"), eo = Symbol.for("react.suspense"), to = Symbol.for("react.suspense_list"), ei = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), ws = Symbol.for("react.offscreen"), Xi = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object" ? null : (e = Xi && e[Xi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Pl;
function _n(e) {
  if (Pl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Pl = t && t[1] || "";
  }
  return `
` + Pl + e;
}
var zl = !1;
function Tl(e, t) {
  if (!e || zl) return "";
  zl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    zl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Vc(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Tl(e.type, !1), e;
    case 11:
      return e = Tl(e.type.render, !1), e;
    case 1:
      return e = Tl(e.type, !0), e;
    default:
      return "";
  }
}
function no(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Ht:
      return "Portal";
    case bl:
      return "Profiler";
    case qo:
      return "StrictMode";
    case eo:
      return "Suspense";
    case to:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case gs:
      return (e.displayName || "Context") + ".Consumer";
    case ys:
      return (e._context.displayName || "Context") + ".Provider";
    case bo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ei:
      return t = e.displayName || null, t !== null ? t : no(e.type) || "Memo";
    case nt:
      t = e._payload, e = e._init;
      try {
        return no(e(t));
      } catch {
      }
  }
  return null;
}
function Bc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return no(t);
    case 8:
      return t === qo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ks(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qc(e) {
  var t = ks(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function Ss(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ks(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Fr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ro(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = vt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function xs(e, t) {
  t = t.checked, t != null && Jo(e, "checked", t, !1);
}
function lo(e, t) {
  xs(e, t);
  var n = vt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && oo(e, t.type, vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Gi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function oo(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function bt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function io(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Zi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Cs(e, t) {
  var n = vt(t.value), r = vt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ji(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Es(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function uo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Es(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, _s = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
  Kc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e];
  });
});
function Ns(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px";
}
function Ps(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ns(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Xc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function so(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ao(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var co = null;
function ti(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fo = null, en = null, tn = null;
function qi(e) {
  if (e = lr(e)) {
    if (typeof fo != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = hl(t), fo(e.stateNode, e.type, t));
  }
}
function zs(e) {
  en ? tn ? tn.push(e) : tn = [e] : en = e;
}
function Ts() {
  if (en) {
    var e = en, t = tn;
    if (tn = en = null, qi(e), t) for (e = 0; e < t.length; e++) qi(t[e]);
  }
}
function js(e, t) {
  return e(t);
}
function Ls() {
}
var jl = !1;
function Rs(e, t, n) {
  if (jl) return e(t, n);
  jl = !0;
  try {
    return js(e, t, n);
  } finally {
    jl = !1, (en !== null || tn !== null) && (Ls(), Ts());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var po = !1;
if (Ze) try {
  var yn = {};
  Object.defineProperty(yn, "passive", { get: function() {
    po = !0;
  } }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
} catch {
  po = !1;
}
function Yc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var jn = !1, $r = null, Ar = !1, ho = null, Gc = { onError: function(e) {
  jn = !0, $r = e;
} };
function Zc(e, t, n, r, l, o, i, u, s) {
  jn = !1, $r = null, Yc.apply(Gc, arguments);
}
function Jc(e, t, n, r, l, o, i, u, s) {
  if (Zc.apply(this, arguments), jn) {
    if (jn) {
      var c = $r;
      jn = !1, $r = null;
    } else throw Error(y(198));
    Ar || (Ar = !0, ho = c);
  }
}
function $t(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Is(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function bi(e) {
  if ($t(e) !== e) throw Error(y(188));
}
function qc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return bi(l), e;
        if (o === r) return bi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Os(e) {
  return e = qc(e), e !== null ? Ms(e) : null;
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ms(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ds = Se.unstable_scheduleCallback, eu = Se.unstable_cancelCallback, bc = Se.unstable_shouldYield, ef = Se.unstable_requestPaint, X = Se.unstable_now, tf = Se.unstable_getCurrentPriorityLevel, ni = Se.unstable_ImmediatePriority, Us = Se.unstable_UserBlockingPriority, Hr = Se.unstable_NormalPriority, nf = Se.unstable_LowPriority, Fs = Se.unstable_IdlePriority, cl = null, We = null;
function rf(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var De = Math.clz32 ? Math.clz32 : uf, lf = Math.log, of = Math.LN2;
function uf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (lf(e) / of | 0) | 0;
}
var dr = 64, pr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Wr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Pn(u) : (o &= i, o !== 0 && (r = Pn(o)));
  } else i = n & ~l, i !== 0 ? r = Pn(i) : o !== 0 && (r = Pn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - De(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function sf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function af(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - De(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = sf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function mo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $s() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - De(t), e[t] = n;
}
function cf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - De(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ri(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function As(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hs, li, Ws, Vs, Bs, vo = !1, hr = [], st = null, at = null, ct = null, Hn = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), lt = [], ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Hn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && li(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function df(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return st = gn(st, e, t, n, r, l), !0;
    case "dragenter":
      return at = gn(at, e, t, n, r, l), !0;
    case "mouseover":
      return ct = gn(ct, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Hn.set(o, gn(Hn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Wn.set(o, gn(Wn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Qs(e) {
  var t = zt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Is(n), t !== null) {
          e.blockedOn = t, Bs(e.priority, function() {
            Ws(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      co = r, n.target.dispatchEvent(r), co = null;
    } else return t = lr(n), t !== null && li(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  zr(e) && n.delete(t);
}
function pf() {
  vo = !1, st !== null && zr(st) && (st = null), at !== null && zr(at) && (at = null), ct !== null && zr(ct) && (ct = null), Hn.forEach(nu), Wn.forEach(nu);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, pf)));
}
function Vn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < hr.length) {
    wn(hr[0], e);
    for (var n = 1; n < hr.length; n++) {
      var r = hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (st !== null && wn(st, e), at !== null && wn(at, e), ct !== null && wn(ct, e), Hn.forEach(t), Wn.forEach(t), n = 0; n < lt.length; n++) r = lt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && (n = lt[0], n.blockedOn === null); ) Qs(n), n.blockedOn === null && lt.shift();
}
var nn = et.ReactCurrentBatchConfig, Vr = !0;
function hf(e, t, n, r) {
  var l = I, o = nn.transition;
  nn.transition = null;
  try {
    I = 1, oi(e, t, n, r);
  } finally {
    I = l, nn.transition = o;
  }
}
function mf(e, t, n, r) {
  var l = I, o = nn.transition;
  nn.transition = null;
  try {
    I = 4, oi(e, t, n, r);
  } finally {
    I = l, nn.transition = o;
  }
}
function oi(e, t, n, r) {
  if (Vr) {
    var l = yo(e, t, n, r);
    if (l === null) Hl(e, t, r, Br, n), tu(e, r);
    else if (df(l, e, t, n, r)) r.stopPropagation();
    else if (tu(e, r), t & 4 && -1 < ff.indexOf(e)) {
      for (; l !== null; ) {
        var o = lr(l);
        if (o !== null && Hs(o), o = yo(e, t, n, r), o === null && Hl(e, t, r, Br, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Br = null;
function yo(e, t, n, r) {
  if (Br = null, e = ti(r), e = zt(e), e !== null) if (t = $t(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Is(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Br = e, null;
}
function Ks(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tf()) {
        case ni:
          return 1;
        case Us:
          return 4;
        case Hr:
        case nf:
          return 16;
        case Fs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null, ii = null, Tr = null;
function Xs() {
  if (Tr) return Tr;
  var e, t = ii, n = t.length, r, l = "value" in it ? it.value : it.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Tr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function jr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function mr() {
  return !0;
}
function ru() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? mr : ru, this.isPropagationStopped = ru, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mr);
  }, persist: function() {
  }, isPersistent: mr }), t;
}
var hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ui = Ce(hn), rr = B({}, hn, { view: 0, detail: 0 }), vf = Ce(rr), Rl, Il, kn, fl = B({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: si, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (Rl = e.screenX - kn.screenX, Il = e.screenY - kn.screenY) : Il = Rl = 0, kn = e), Rl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Il;
} }), lu = Ce(fl), yf = B({}, fl, { dataTransfer: 0 }), gf = Ce(yf), wf = B({}, rr, { relatedTarget: 0 }), Ol = Ce(wf), kf = B({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sf = Ce(kf), xf = B({}, hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cf = Ce(xf), Ef = B({}, hn, { data: 0 }), ou = Ce(Ef), _f = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Pf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pf[e]) ? !!t[e] : !1;
}
function si() {
  return zf;
}
var Tf = B({}, rr, { key: function(e) {
  if (e.key) {
    var t = _f[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: si, charCode: function(e) {
  return e.type === "keypress" ? jr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), jf = Ce(Tf), Lf = B({}, fl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), iu = Ce(Lf), Rf = B({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: si }), If = Ce(Rf), Of = B({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mf = Ce(Of), Df = B({}, fl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = Ce(Df), Ff = [9, 13, 27, 32], ai = Ze && "CompositionEvent" in window, Ln = null;
Ze && "documentMode" in document && (Ln = document.documentMode);
var $f = Ze && "TextEvent" in window && !Ln, Ys = Ze && (!ai || Ln && 8 < Ln && 11 >= Ln), uu = " ", su = !1;
function Gs(e, t) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Zs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function Af(e, t) {
  switch (e) {
    case "compositionend":
      return Zs(t);
    case "keypress":
      return t.which !== 32 ? null : (su = !0, uu);
    case "textInput":
      return e = t.data, e === uu && su ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (Vt) return e === "compositionend" || !ai && Gs(e, t) ? (e = Xs(), Tr = ii = it = null, Vt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wf[e.type] : t === "textarea";
}
function Js(e, t, n, r) {
  zs(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ui("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Bn = null;
function Vf(e) {
  sa(e, 0);
}
function dl(e) {
  var t = Kt(e);
  if (Ss(t)) return e;
}
function Bf(e, t) {
  if (e === "change") return t;
}
var qs = !1;
if (Ze) {
  var Ml;
  if (Ze) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"), Dl = typeof cu.oninput == "function";
    }
    Ml = Dl;
  } else Ml = !1;
  qs = Ml && (!document.documentMode || 9 < document.documentMode);
}
function fu() {
  Rn && (Rn.detachEvent("onpropertychange", bs), Bn = Rn = null);
}
function bs(e) {
  if (e.propertyName === "value" && dl(Bn)) {
    var t = [];
    Js(t, Bn, e, ti(e)), Rs(Vf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin" ? (fu(), Rn = t, Bn = n, Rn.attachEvent("onpropertychange", bs)) : e === "focusout" && fu();
}
function Kf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return dl(Bn);
}
function Xf(e, t) {
  if (e === "click") return dl(t);
}
function Yf(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function Gf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Gf;
function Qn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ql.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = du(n);
  }
}
function ea(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ea(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ta() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function ci(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zf(e) {
  var t = ta(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ea(n.ownerDocument.documentElement, n)) {
    if (r !== null && ci(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = pu(n, o);
        var i = pu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Jf = Ze && "documentMode" in document && 11 >= document.documentMode, Bt = null, go = null, In = null, wo = !1;
function hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wo || Bt == null || Bt !== Fr(r) || (r = Bt, "selectionStart" in r && ci(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), In && Qn(In, r) || (In = r, r = Qr(go, "onSelect"), 0 < r.length && (t = new ui("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bt)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Qt = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, Ul = {}, na = {};
Ze && (na = document.createElement("div").style, "AnimationEvent" in window || (delete Qt.animationend.animation, delete Qt.animationiteration.animation, delete Qt.animationstart.animation), "TransitionEvent" in window || delete Qt.transitionend.transition);
function pl(e) {
  if (Ul[e]) return Ul[e];
  if (!Qt[e]) return e;
  var t = Qt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in na) return Ul[e] = t[n];
  return e;
}
var ra = pl("animationend"), la = pl("animationiteration"), oa = pl("animationstart"), ia = pl("transitionend"), ua = /* @__PURE__ */ new Map(), mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function gt(e, t) {
  ua.set(e, t), Ft(t, [e]);
}
for (var Fl = 0; Fl < mu.length; Fl++) {
  var $l = mu[Fl], qf = $l.toLowerCase(), bf = $l[0].toUpperCase() + $l.slice(1);
  gt(qf, "on" + bf);
}
gt(ra, "onAnimationEnd");
gt(la, "onAnimationIteration");
gt(oa, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(ia, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function vu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Jc(r, t, void 0, e), e.currentTarget = null;
}
function sa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        vu(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        vu(l, u, c), o = s;
      }
    }
  }
  if (Ar) throw e = ho, Ar = !1, ho = null, e;
}
function U(e, t) {
  var n = t[Eo];
  n === void 0 && (n = t[Eo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (aa(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), aa(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[yr]) {
    e[yr] = !0, vs.forEach(function(n) {
      n !== "selectionchange" && (ed.has(n) || Al(n, !1, e), Al(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Al("selectionchange", !1, t));
  }
}
function aa(e, t, n, r) {
  switch (Ks(t)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = mf;
      break;
    default:
      l = oi;
  }
  n = l.bind(null, t, n, e), l = void 0, !po || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = zt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Rs(function() {
    var c = o, m = ti(n), h = [];
    e: {
      var p = ua.get(e);
      if (p !== void 0) {
        var w = ui, k = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = jf;
            break;
          case "focusin":
            k = "focus", w = Ol;
            break;
          case "focusout":
            k = "blur", w = Ol;
            break;
          case "beforeblur":
          case "afterblur":
            w = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = gf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = If;
            break;
          case ra:
          case la:
          case oa:
            w = Sf;
            break;
          case ia:
            w = Mf;
            break;
          case "scroll":
            w = vf;
            break;
          case "wheel":
            w = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = iu;
        }
        var S = (t & 4) !== 0, O = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = An(a, f), v != null && S.push(Xn(a, v, d)))), O) break;
          a = a.return;
        }
        0 < S.length && (p = new w(p, k, null, n, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== co && (k = n.relatedTarget || n.fromElement) && (zt(k) || k[Je])) break e;
        if ((w || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = c, k = k ? zt(k) : null, k !== null && (O = $t(k), k !== O || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = c), w !== k)) {
          if (S = lu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = iu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), O = w == null ? p : Kt(w), d = k == null ? p : Kt(k), p = new S(v, a + "leave", w, n, m), p.target = O, p.relatedTarget = d, v = null, zt(m) === c && (S = new S(f, a + "enter", k, n, m), S.target = d, S.relatedTarget = O, v = S), O = v, w && k) t: {
            for (S = w, f = k, a = 0, d = S; d; d = At(d)) a++;
            for (d = 0, v = f; v; v = At(v)) d++;
            for (; 0 < a - d; ) S = At(S), a--;
            for (; 0 < d - a; ) f = At(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break t;
              S = At(S), f = At(f);
            }
            S = null;
          }
          else S = null;
          w !== null && yu(h, p, w, S, !1), k !== null && O !== null && yu(h, O, k, S, !0);
        }
      }
      e: {
        if (p = c ? Kt(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var x = Bf;
        else if (au(p)) if (qs) x = Yf;
        else {
          x = Kf;
          var _ = Qf;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = Xf);
        if (x && (x = x(e, c))) {
          Js(h, x, n, m);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && oo(p, "number", p.value);
      }
      switch (_ = c ? Kt(c) : window, e) {
        case "focusin":
          (au(_) || _.contentEditable === "true") && (Bt = _, go = c, In = null);
          break;
        case "focusout":
          In = go = Bt = null;
          break;
        case "mousedown":
          wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wo = !1, hu(h, n, m);
          break;
        case "selectionchange":
          if (Jf) break;
        case "keydown":
        case "keyup":
          hu(h, n, m);
      }
      var N;
      if (ai) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Vt ? Gs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Ys && n.locale !== "ko" && (Vt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Vt && (N = Xs()) : (it = m, ii = "value" in it ? it.value : it.textContent, Vt = !0)), _ = Qr(c, P), 0 < _.length && (P = new ou(P, e, null, n, m), h.push({ event: P, listeners: _ }), N ? P.data = N : (N = Zs(n), N !== null && (P.data = N)))), (N = $f ? Af(e, n) : Hf(e, n)) && (c = Qr(c, "onBeforeInput"), 0 < c.length && (m = new ou("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = N));
    }
    sa(h, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = An(e, n), o != null && r.unshift(Xn(e, o, l)), o = An(e, t), o != null && r.push(Xn(e, o, l))), e = e.return;
  }
  return r;
}
function At(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = An(n, o), s != null && i.unshift(Xn(n, s, u))) : l || (s = An(n, o), s != null && i.push(Xn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var td = /\r\n?/g, nd = /\u0000|\uFFFD/g;
function gu(e) {
  return (typeof e == "string" ? e : "" + e).replace(td, `
`).replace(nd, "");
}
function gr(e, t, n) {
  if (t = gu(t), gu(e) !== t && n) throw Error(y(425));
}
function Kr() {
}
var ko = null, So = null;
function xo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, rd = typeof clearTimeout == "function" ? clearTimeout : void 0, wu = typeof Promise == "function" ? Promise : void 0, ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof wu < "u" ? function(e) {
  return wu.resolve(null).then(e).catch(od);
} : Co;
function od(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Vn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ku(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mn = Math.random().toString(36).slice(2), He = "__reactFiber$" + mn, Yn = "__reactProps$" + mn, Je = "__reactContainer$" + mn, Eo = "__reactEvents$" + mn, id = "__reactListeners$" + mn, ud = "__reactHandles$" + mn;
function zt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[He]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ku(e); e !== null; ) {
        if (n = e[He]) return n;
        e = ku(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[He] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function hl(e) {
  return e[Yn] || null;
}
var _o = [], Xt = -1;
function wt(e) {
  return { current: e };
}
function F(e) {
  0 > Xt || (e.current = _o[Xt], _o[Xt] = null, Xt--);
}
function D(e, t) {
  Xt++, _o[Xt] = e.current, e.current = t;
}
var yt = {}, ue = wt(yt), he = wt(!1), It = yt;
function un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function me(e) {
  return e = e.childContextTypes, e != null;
}
function Xr() {
  F(he), F(ue);
}
function Su(e, t, n) {
  if (ue.current !== yt) throw Error(y(168));
  D(ue, t), D(he, n);
}
function ca(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Bc(e) || "Unknown", l));
  return B({}, n, r);
}
function Yr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt, It = ue.current, D(ue, e), D(he, he.current), !0;
}
function xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ca(e, t, It), r.__reactInternalMemoizedMergedChildContext = e, F(he), F(ue), D(ue, e)) : F(he), D(he, n);
}
var Ke = null, ml = !1, Vl = !1;
function fa(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function sd(e) {
  ml = !0, fa(e);
}
function kt() {
  if (!Vl && Ke !== null) {
    Vl = !0;
    var e = 0, t = I;
    try {
      var n = Ke;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, ml = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Ds(ni, kt), l;
    } finally {
      I = t, Vl = !1;
    }
  }
  return null;
}
var Yt = [], Gt = 0, Gr = null, Zr = 0, _e = [], Ne = 0, Ot = null, Xe = 1, Ye = "";
function Nt(e, t) {
  Yt[Gt++] = Zr, Yt[Gt++] = Gr, Gr = e, Zr = t;
}
function da(e, t, n) {
  _e[Ne++] = Xe, _e[Ne++] = Ye, _e[Ne++] = Ot, Ot = e;
  var r = Xe;
  e = Ye;
  var l = 32 - De(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - De(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Xe = 1 << 32 - De(t) + l | n << l | r, Ye = o + e;
  } else Xe = 1 << o | n << l | r, Ye = e;
}
function fi(e) {
  e.return !== null && (Nt(e, 1), da(e, 1, 0));
}
function di(e) {
  for (; e === Gr; ) Gr = Yt[--Gt], Yt[Gt] = null, Zr = Yt[--Gt], Yt[Gt] = null;
  for (; e === Ot; ) Ot = _e[--Ne], _e[Ne] = null, Ye = _e[--Ne], _e[Ne] = null, Xe = _e[--Ne], _e[Ne] = null;
}
var ke = null, we = null, A = !1, Me = null;
function pa(e, t) {
  var n = ze(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, we = ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? { id: Xe, overflow: Ye } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ke = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function No(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Po(e) {
  if (A) {
    var t = we;
    if (t) {
      var n = t;
      if (!Cu(e, t)) {
        if (No(e)) throw Error(y(418));
        t = ft(n.nextSibling);
        var r = ke;
        t && Cu(e, t) ? pa(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ke = e);
      }
    } else {
      if (No(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, A = !1, ke = e;
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function wr(e) {
  if (e !== ke) return !1;
  if (!A) return Eu(e), A = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps)), t && (t = we)) {
    if (No(e)) throw ha(), Error(y(418));
    for (; t; ) pa(e, t), t = ft(t.nextSibling);
  }
  if (Eu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = ke ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function ha() {
  for (var e = we; e; ) e = ft(e.nextSibling);
}
function sn() {
  we = ke = null, A = !1;
}
function pi(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var ad = et.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function ma(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = mt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Zl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var x = d.type;
    return x === Wt ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === x || typeof x == "object" && x !== null && x.$$typeof === nt && _u(x) === a.type) ? (v = l(a, d.props), v.ref = Sn(f, a, d), v.return = f, v) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = Sn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Jl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, x) {
    return a === null || a.tag !== 7 ? (a = Rt(d, f.mode, v, x), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Zl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return d = Ur(a.type, a.key, a.props, null, f.mode, d), d.ref = Sn(f, null, a), d.return = f, d;
        case Ht:
          return a = Jl(a, f.mode, d), a.return = f, a;
        case nt:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Nn(a) || vn(a)) return a = Rt(a, f.mode, d, null), a.return = f, a;
      kr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var x = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === x ? s(f, a, d, v) : null;
        case Ht:
          return d.key === x ? c(f, a, d, v) : null;
        case nt:
          return x = d._init, p(
            f,
            a,
            x(d._payload),
            v
          );
      }
      if (Nn(d) || vn(d)) return x !== null ? null : m(f, a, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, x);
        case Ht:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, x);
        case nt:
          var _ = v._init;
          return w(f, a, d, _(v._payload), x);
      }
      if (Nn(v) || vn(v)) return f = f.get(d) || null, m(a, f, v, x, null);
      kr(a, v);
    }
    return null;
  }
  function k(f, a, d, v) {
    for (var x = null, _ = null, N = a, P = a = 0, $ = null; N !== null && P < d.length; P++) {
      N.index > P ? ($ = N, N = null) : $ = N.sibling;
      var T = p(f, N, d[P], v);
      if (T === null) {
        N === null && (N = $);
        break;
      }
      e && N && T.alternate === null && t(f, N), a = o(T, a, P), _ === null ? x = T : _.sibling = T, _ = T, N = $;
    }
    if (P === d.length) return n(f, N), A && Nt(f, P), x;
    if (N === null) {
      for (; P < d.length; P++) N = h(f, d[P], v), N !== null && (a = o(N, a, P), _ === null ? x = N : _.sibling = N, _ = N);
      return A && Nt(f, P), x;
    }
    for (N = r(f, N); P < d.length; P++) $ = w(N, f, P, d[P], v), $ !== null && (e && $.alternate !== null && N.delete($.key === null ? P : $.key), a = o($, a, P), _ === null ? x = $ : _.sibling = $, _ = $);
    return e && N.forEach(function(ye) {
      return t(f, ye);
    }), A && Nt(f, P), x;
  }
  function S(f, a, d, v) {
    var x = vn(d);
    if (typeof x != "function") throw Error(y(150));
    if (d = x.call(d), d == null) throw Error(y(151));
    for (var _ = x = null, N = a, P = a = 0, $ = null, T = d.next(); N !== null && !T.done; P++, T = d.next()) {
      N.index > P ? ($ = N, N = null) : $ = N.sibling;
      var ye = p(f, N, T.value, v);
      if (ye === null) {
        N === null && (N = $);
        break;
      }
      e && N && ye.alternate === null && t(f, N), a = o(ye, a, P), _ === null ? x = ye : _.sibling = ye, _ = ye, N = $;
    }
    if (T.done) return n(
      f,
      N
    ), A && Nt(f, P), x;
    if (N === null) {
      for (; !T.done; P++, T = d.next()) T = h(f, T.value, v), T !== null && (a = o(T, a, P), _ === null ? x = T : _.sibling = T, _ = T);
      return A && Nt(f, P), x;
    }
    for (N = r(f, N); !T.done; P++, T = d.next()) T = w(N, f, P, T.value, v), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? P : T.key), a = o(T, a, P), _ === null ? x = T : _.sibling = T, _ = T);
    return e && N.forEach(function(St) {
      return t(f, St);
    }), A && Nt(f, P), x;
  }
  function O(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Wt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var x = d.key, _ = a; _ !== null; ) {
              if (_.key === x) {
                if (x = d.type, x === Wt) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === nt && _u(x) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = Sn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Wt ? (a = Rt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Ur(d.type, d.key, d.props, null, f.mode, v), v.ref = Sn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Ht:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Jl(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case nt:
          return _ = d._init, O(f, a, _(d._payload), v);
      }
      if (Nn(d)) return k(f, a, d, v);
      if (vn(d)) return S(f, a, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Zl(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return O;
}
var an = ma(!0), va = ma(!1), Jr = wt(null), qr = null, Zt = null, hi = null;
function mi() {
  hi = Zt = qr = null;
}
function vi(e) {
  var t = Jr.current;
  F(Jr), e._currentValue = t;
}
function zo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function rn(e, t) {
  qr = e, hi = Zt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (hi !== e) if (e = { context: e, memoizedValue: t, next: null }, Zt === null) {
    if (qr === null) throw Error(y(308));
    Zt = e, qr.dependencies = { lanes: 0, firstContext: e };
  } else Zt = Zt.next = e;
  return t;
}
var Tt = null;
function yi(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function ya(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, yi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function gi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ga(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, yi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n);
  }
}
function Nu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function br(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = c = s = null, u = o;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var k = e, S = u;
          switch (p = t, w = n, S.tag) {
            case 1:
              if (k = S.payload, typeof k == "function") {
                h = k.call(w, h, p);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = S.payload, p = typeof k == "function" ? k.call(w, h, p) : k, p == null) break e;
              h = B({}, h, p);
              break e;
            case 2:
              rt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = w, s = h) : m = m.next = w, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Dt |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Pu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var or = {}, Ve = wt(or), Gn = wt(or), Zn = wt(or);
function jt(e) {
  if (e === or) throw Error(y(174));
  return e;
}
function wi(e, t) {
  switch (D(Zn, t), D(Gn, e), D(Ve, or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = uo(t, e);
  }
  F(Ve), D(Ve, t);
}
function cn() {
  F(Ve), F(Gn), F(Zn);
}
function wa(e) {
  jt(Zn.current);
  var t = jt(Ve.current), n = uo(t, e.type);
  t !== n && (D(Gn, e), D(Ve, n));
}
function ki(e) {
  Gn.current === e && (F(Ve), F(Gn));
}
var W = wt(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Bl = [];
function Si() {
  for (var e = 0; e < Bl.length; e++) Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Rr = et.ReactCurrentDispatcher, Ql = et.ReactCurrentBatchConfig, Mt = 0, V = null, G = null, q = null, tl = !1, On = !1, Jn = 0, cd = 0;
function le() {
  throw Error(y(321));
}
function xi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Ci(e, t, n, r, l, o) {
  if (Mt = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Rr.current = e === null || e.memoizedState === null ? hd : md, e = n(r, l), On) {
    o = 0;
    do {
      if (On = !1, Jn = 0, 25 <= o) throw Error(y(301));
      o += 1, q = G = null, t.updateQueue = null, Rr.current = vd, e = n(r, l);
    } while (On);
  }
  if (Rr.current = nl, t = G !== null && G.next !== null, Mt = 0, q = G = V = null, tl = !1, t) throw Error(y(300));
  return e;
}
function Ei() {
  var e = Jn !== 0;
  return Jn = 0, e;
}
function Ae() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? V.memoizedState = q = e : q = q.next = e, q;
}
function Le() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) q = t, G = e;
  else {
    if (e === null) throw Error(y(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, q === null ? V.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kl(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Mt & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, V.lanes |= m, Dt |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Fe(r, t.memoizedState) || (pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, V.lanes |= o, Dt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = Le(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Fe(o, t.memoizedState) || (pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function ka() {
}
function Sa(e, t) {
  var n = V, r = Le(), l = t(), o = !Fe(r.memoizedState, l);
  if (o && (r.memoizedState = l, pe = !0), r = r.queue, _i(Ea.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, bn(9, Ca.bind(null, n, r, l, t), void 0, null), b === null) throw Error(y(349));
    Mt & 30 || xa(n, t, l);
  }
  return l;
}
function xa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ca(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _a(t) && Na(e);
}
function Ea(e, t, n) {
  return n(function() {
    _a(t) && Na(e);
  });
}
function _a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Na(e) {
  var t = qe(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function zu(e) {
  var t = Ae();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qn, lastRenderedState: e }, t.queue = e, e = e.dispatch = pd.bind(null, V, e), [t.memoizedState, e];
}
function bn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pa() {
  return Le().memoizedState;
}
function Ir(e, t, n, r) {
  var l = Ae();
  V.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r);
}
function vl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var i = G.memoizedState;
    if (o = i.destroy, r !== null && xi(r, i.deps)) {
      l.memoizedState = bn(t, n, o, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = bn(1 | t, n, o, r);
}
function Tu(e, t) {
  return Ir(8390656, 8, e, t);
}
function _i(e, t) {
  return vl(2048, 8, e, t);
}
function za(e, t) {
  return vl(4, 2, e, t);
}
function Ta(e, t) {
  return vl(4, 4, e, t);
}
function ja(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function La(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vl(4, 4, ja.bind(null, t, e), n);
}
function Ni() {
}
function Ra(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ia(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Oa(e, t, n) {
  return Mt & 21 ? (Fe(n, t) || (n = $s(), V.lanes |= n, Dt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, pe = !0), e.memoizedState = n);
}
function fd(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ql.transition;
  Ql.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, Ql.transition = r;
  }
}
function Ma() {
  return Le().memoizedState;
}
function dd(e, t, n) {
  var r = ht(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Da(e)) Ua(t, n);
  else if (n = ya(e, t, n, r), n !== null) {
    var l = ae();
    Ue(n, e, r, l), Fa(n, t, r);
  }
}
function pd(e, t, n) {
  var r = ht(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Da(e)) Ua(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, yi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ya(e, t, l, r), n !== null && (l = ae(), Ue(n, e, r, l), Fa(n, t, r));
  }
}
function Da(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function Ua(e, t) {
  On = tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ri(e, n);
  }
}
var nl = { readContext: je, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, hd = { readContext: je, useCallback: function(e, t) {
  return Ae().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Tu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ir(
    4194308,
    4,
    ja.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ir(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ir(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ae();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ae();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = dd.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ae();
  return e = { current: e }, t.memoizedState = e;
}, useState: zu, useDebugValue: Ni, useDeferredValue: function(e) {
  return Ae().memoizedState = e;
}, useTransition: function() {
  var e = zu(!1), t = e[0];
  return e = fd.bind(null, e[1]), Ae().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = Ae();
  if (A) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), b === null) throw Error(y(349));
    Mt & 30 || xa(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Tu(Ea.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, bn(9, Ca.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Ae(), t = b.identifierPrefix;
  if (A) {
    var n = Ye, r = Xe;
    n = (r & ~(1 << 32 - De(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = cd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, md = {
  readContext: je,
  useCallback: Ra,
  useContext: je,
  useEffect: _i,
  useImperativeHandle: La,
  useInsertionEffect: za,
  useLayoutEffect: Ta,
  useMemo: Ia,
  useReducer: Kl,
  useRef: Pa,
  useState: function() {
    return Kl(qn);
  },
  useDebugValue: Ni,
  useDeferredValue: function(e) {
    var t = Le();
    return Oa(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = Kl(qn)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: ka,
  useSyncExternalStore: Sa,
  useId: Ma,
  unstable_isNewReconciler: !1
}, vd = { readContext: je, useCallback: Ra, useContext: je, useEffect: _i, useImperativeHandle: La, useInsertionEffect: za, useLayoutEffect: Ta, useMemo: Ia, useReducer: Xl, useRef: Pa, useState: function() {
  return Xl(qn);
}, useDebugValue: Ni, useDeferredValue: function(e) {
  var t = Le();
  return G === null ? t.memoizedState = e : Oa(t, G.memoizedState, e);
}, useTransition: function() {
  var e = Xl(qn)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: ka, useSyncExternalStore: Sa, useId: Ma, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function To(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ht(e), o = Ge(r, l);
  o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Ue(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ht(e), o = Ge(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Ue(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = ht(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Ue(t, e, r, n), Lr(t, e, r));
} };
function ju(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Qn(n, r) || !Qn(l, o) : !0;
}
function $a(e, t, n) {
  var r = !1, l = yt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = je(o) : (l = me(t) ? It : ue.current, r = t.contextTypes, o = (r = r != null) ? un(e, l) : yt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Lu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, gi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = je(o) : (o = me(t) ? It : ue.current, l.context = un(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (To(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && yl.enqueueReplaceState(l, l.state, null), br(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var yd = typeof WeakMap == "function" ? WeakMap : Map;
function Aa(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ll || (ll = !0, Ho = r), Lo(e, t);
  }, n;
}
function Ha(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Lo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Lo(e, t), typeof r != "function" && (pt === null ? pt = /* @__PURE__ */ new Set([this]) : pt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ru(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ld.bind(null, e, t, n), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ou(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
}
var gd = et.ReactCurrentOwner, pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? va(t, null, n, r) : an(t, e.child, n, r);
}
function Mu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return rn(t, l), r = Ci(e, t, n, r, o, l), n = Ei(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (A && n && fi(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function Du(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Oi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Wa(e, t, o, r, l)) : (e = Ur(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qn, n(i, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qn(o, r) && e.ref === t.ref) if (pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (pe = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return Ro(e, t, n, r, l);
}
function Va(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(qt, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(qt, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, D(qt, ge), ge |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(qt, ge), ge |= r;
  return se(e, t, l, n), t.child;
}
function Ba(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ro(e, t, n, r, l) {
  var o = me(n) ? It : ue.current;
  return o = un(t, o), rn(t, l), n = Ci(e, t, n, r, o, l), r = Ei(), e !== null && !pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (A && r && fi(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function Uu(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Yr(t);
  } else o = !1;
  if (rn(t, l), t.stateNode === null) Or(e, t), $a(t, n, r), jo(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = je(c) : (c = me(n) ? It : ue.current, c = un(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Lu(t, i, r, c), rt = !1;
    var p = t.memoizedState;
    i.state = p, br(t, r, i, l), s = t.memoizedState, u !== r || p !== s || he.current || rt ? (typeof m == "function" && (To(t, n, m, r), s = t.memoizedState), (u = rt || ju(t, n, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, ga(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Ie(t.type, u), i.props = c, h = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = je(s) : (s = me(n) ? It : ue.current, s = un(t, s));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Lu(t, i, r, s), rt = !1, p = t.memoizedState, i.state = p, br(t, r, i, l);
    var k = t.memoizedState;
    u !== h || p !== k || he.current || rt ? (typeof w == "function" && (To(t, n, w, r), k = t.memoizedState), (c = rt || ju(t, n, c, r, p, k, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Io(e, t, n, r, o, l);
}
function Io(e, t, n, r, l, o) {
  Ba(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && xu(t, n, !1), be(e, t, o);
  r = t.stateNode, gd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = an(t, e.child, null, o), t.child = an(t, null, u, o)) : se(e, t, u, o), t.memoizedState = r.state, l && xu(t, n, !0), t.child;
}
function Qa(e) {
  var t = e.stateNode;
  t.pendingContext ? Su(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Su(e, t.context, !1), wi(e, t.containerInfo);
}
function Fu(e, t, n, r, l) {
  return sn(), pi(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Oo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ka(e, t, n) {
  var r = t.pendingProps, l = W.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(W, l & 1), e === null)
    return Po(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = kl(i, r, 0, null), e = Rt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Mo(n), t.memoizedState = Oo, e) : Pi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return wd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = mt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = mt(u, o) : (o = Rt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Mo(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Oo, r;
  }
  return o = e.child, e = o.sibling, r = mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pi(e, t) {
  return t = kl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && pi(r), an(t, e.child, null, n), e = Pi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(y(422))), Sr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), o = Rt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && an(t, e.child, null, i), t.child.memoizedState = Mo(i), t.memoizedState = Oo, o);
  if (!(t.mode & 1)) return Sr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Yl(o, r, void 0), Sr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, pe || u) {
    if (r = b, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, qe(e, l), Ue(r, e, l, -1));
    }
    return Ii(), r = Yl(Error(y(421))), Sr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Rd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, we = ft(l.nextSibling), ke = t, A = !0, Me = null, e !== null && (_e[Ne++] = Xe, _e[Ne++] = Ye, _e[Ne++] = Ot, Xe = e.id, Ye = e.overflow, Ot = t), t = Pi(t, r.children), t.flags |= 4096, t);
}
function $u(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zo(e.return, t, n);
}
function Gl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Xa(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (se(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && $u(e, n, t);
      else if (e.tag === 19) $u(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (D(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && el(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Gl(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && el(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Gl(t, !0, n, null, o);
      break;
    case "together":
      Gl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Or(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function be(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Dt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kd(e, t, n) {
  switch (t.tag) {
    case 3:
      Qa(t), sn();
      break;
    case 5:
      wa(t);
      break;
    case 1:
      me(t.type) && Yr(t);
      break;
    case 4:
      wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(Jr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ka(e, t, n) : (D(W, W.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      D(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xa(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Va(e, t, n);
  }
  return be(e, t, n);
}
var Ya, Do, Ga, Za;
Ya = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Do = function() {
};
Ga = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, jt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = io(e, l), r = io(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
    }
    so(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Fn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Fn.hasOwnProperty(c) ? (s != null && c === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Za = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!A) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Sd(e, t, n) {
  var r = t.pendingProps;
  switch (di(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && Xr(), oe(t), null;
    case 3:
      return r = t.stateNode, cn(), F(he), F(ue), Si(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Bo(Me), Me = null))), Do(e, t), oe(t), null;
    case 5:
      ki(t);
      var l = jt(Zn.current);
      if (n = t.type, e !== null && t.stateNode != null) Ga(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return oe(t), null;
        }
        if (e = jt(Ve.current), wr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[He] = t, r[Yn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zn.length; l++) U(zn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Yi(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              Zi(r, o), U("invalid", r);
          }
          so(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && gr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Fn.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              cr(r), Gi(r, o, !0);
              break;
            case "textarea":
              cr(r), Ji(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Es(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[Yn] = r, Ya(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ao(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++) U(zn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                Yi(e, r), l = ro(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                Zi(e, r), l = io(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            so(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ps(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && _s(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && $n(e, s) : typeof s == "number" && $n(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fn.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && Jo(e, o, s, i));
            }
            switch (n) {
              case "input":
                cr(e), Gi(e, r, !1);
                break;
              case "textarea":
                cr(e), Ji(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? bt(e, !!r.multiple, o, !1) : r.defaultValue != null && bt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) Za(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = jt(Zn.current), jt(Ve.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (o = r.nodeValue !== n) && (e = ke, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
      }
      return oe(t), null;
    case 13:
      if (F(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (A && we !== null && t.mode & 1 && !(t.flags & 128)) ha(), sn(), t.flags |= 98560, o = !1;
        else if (o = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[He] = t;
          } else sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          oe(t), o = !1;
        } else Me !== null && (Bo(Me), Me = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? Z === 0 && (Z = 3) : Ii())), t.updateQueue !== null && (t.flags |= 4), oe(t), null);
    case 4:
      return cn(), Do(e, t), e === null && Kn(t.stateNode.containerInfo), oe(t), null;
    case 10:
      return vi(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && Xr(), oe(t), null;
    case 19:
      if (F(W), o = t.memoizedState, o === null) return oe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) xn(o, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = el(e), i !== null) {
            for (t.flags |= 128, xn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return D(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && X() > dn && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = el(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A) return oe(t), null;
        } else 2 * X() - o.renderingStartTime > dn && n !== 1073741824 && (t.flags |= 128, r = !0, xn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, n = W.current, D(W, r ? n & 1 | 2 : n & 1), t) : (oe(t), null);
    case 22:
    case 23:
      return Ri(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : oe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function xd(e, t) {
  switch (di(t), t.tag) {
    case 1:
      return me(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return cn(), F(he), F(ue), Si(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ki(t), null;
    case 13:
      if (F(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        sn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(W), null;
    case 4:
      return cn(), null;
    case 10:
      return vi(t.type._context), null;
    case 22:
    case 23:
      return Ri(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1, ie = !1, Cd = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function Uo(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var Au = !1;
function Ed(e, t) {
  if (ko = Vr, e = ta(), ci(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, c = 0, m = 0, h = e, p = null;
        t: for (; ; ) {
          for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (w = h.firstChild) !== null; )
            p = h, h = w;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++c === l && (u = i), p === o && ++m === r && (s = i), (w = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = w;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (So = { focusedElem: e, selectionRange: n }, Vr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var S = k.memoizedProps, O = k.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Ie(t.type, S), O);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      Q(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return k = Au, Au = !1, k;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Uo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function gl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Ja(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ja(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[Yn], delete t[Eo], delete t[id], delete t[ud])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || qa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $o(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($o(e, t, n), e = e.sibling; e !== null; ) $o(e, t, n), e = e.sibling;
}
function Ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ao(e, t, n), e = e.sibling; e !== null; ) Ao(e, t, n), e = e.sibling;
}
var ee = null, Oe = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) ba(e, t, n), n = n.sibling;
}
function ba(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(cl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ie || Jt(n, t);
    case 6:
      var r = ee, l = Oe;
      ee = null, tt(e, t, n), ee = r, Oe = l, ee !== null && (Oe ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Oe ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Vn(e)) : Wl(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Oe, ee = n.stateNode.containerInfo, Oe = !0, tt(e, t, n), ee = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Uo(n, t, i), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ie && (Jt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, tt(e, t, n), ie = r) : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function Wu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cd()), t.forEach(function(r) {
      var l = Id.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ee = u.stateNode, Oe = !1;
            break e;
          case 3:
            ee = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            ee = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (ee === null) throw Error(y(160));
      ba(o, i, l), ee = null, Oe = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      Q(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ec(t, e), t = t.sibling;
}
function ec(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(t, e), $e(e), r & 4) {
        try {
          Mn(3, e, e.return), gl(3, e);
        } catch (S) {
          Q(e, e.return, S);
        }
        try {
          Mn(5, e, e.return);
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 1:
      Re(t, e), $e(e), r & 512 && n !== null && Jt(n, n.return);
      break;
    case 5:
      if (Re(t, e), $e(e), r & 512 && n !== null && Jt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && xs(l, o), ao(u, i);
          var c = ao(u, o);
          for (i = 0; i < s.length; i += 2) {
            var m = s[i], h = s[i + 1];
            m === "style" ? Ps(l, h) : m === "dangerouslySetInnerHTML" ? _s(l, h) : m === "children" ? $n(l, h) : Jo(l, m, h, c);
          }
          switch (u) {
            case "input":
              lo(l, o);
              break;
            case "textarea":
              Cs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? bt(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? bt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : bt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Yn] = o;
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Re(t, e), $e(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Re(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vn(t.containerInfo);
      } catch (S) {
        Q(e, e.return, S);
      }
      break;
    case 4:
      Re(t, e), $e(e);
      break;
    case 13:
      Re(t, e), $e(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ji = X())), r & 4 && Wu(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (c = ie) || m, Re(t, e), ie = c) : Re(t, e), $e(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (C = e, m = e.child; m !== null; ) {
          for (h = C = m; C !== null; ) {
            switch (p = C, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mn(4, p, p.return);
                break;
              case 1:
                Jt(p, p.return);
                var k = p.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (S) {
                    Q(r, n, S);
                  }
                }
                break;
              case 5:
                Jt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Bu(h);
                  continue;
                }
            }
            w !== null ? (w.return = p, C = w) : Bu(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ns("display", i));
              } catch (S) {
                Q(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (S) {
              Q(e, e.return, S);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Re(t, e), $e(e), r & 4 && Wu(e);
      break;
    case 21:
      break;
    default:
      Re(
        t,
        e
      ), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qa(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), r.flags &= -33);
          var o = Hu(e);
          Ao(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Hu(e);
          $o(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _d(e, t, n) {
  C = e, tc(e);
}
function tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ie;
        u = xr;
        var c = ie;
        if (xr = i, (ie = s) && !c) for (C = l; C !== null; ) i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? Qu(l) : s !== null ? (s.return = i, C = s) : Qu(l);
        for (; o !== null; ) C = o, tc(o), o = o.sibling;
        C = l, xr = u, ie = c;
      }
      Vu(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : Vu(e);
  }
}
function Vu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ie || gl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Pu(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Pu(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Vn(h);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(y(163));
        }
        ie || t.flags & 512 && Fo(t);
      } catch (p) {
        Q(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Bu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function Qu(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var o = t.return;
          try {
            Fo(t);
          } catch (s) {
            Q(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Fo(t);
          } catch (s) {
            Q(t, i, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var Nd = Math.ceil, rl = et.ReactCurrentDispatcher, zi = et.ReactCurrentOwner, Te = et.ReactCurrentBatchConfig, R = 0, b = null, Y = null, te = 0, ge = 0, qt = wt(0), Z = 0, er = null, Dt = 0, wl = 0, Ti = 0, Dn = null, de = null, ji = 0, dn = 1 / 0, Qe = null, ll = !1, Ho = null, pt = null, Cr = !1, ut = null, ol = 0, Un = 0, Wo = null, Mr = -1, Dr = 0;
function ae() {
  return R & 6 ? X() : Mr !== -1 ? Mr : Mr = X();
}
function ht(e) {
  return e.mode & 1 ? R & 2 && te !== 0 ? te & -te : ad.transition !== null ? (Dr === 0 && (Dr = $s()), Dr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ks(e.type)), e) : 1;
}
function Ue(e, t, n, r) {
  if (50 < Un) throw Un = 0, Wo = null, Error(y(185));
  nr(e, n, r), (!(R & 2) || e !== b) && (e === b && (!(R & 2) && (wl |= n), Z === 4 && ot(e, te)), ve(e, r), n === 1 && R === 0 && !(t.mode & 1) && (dn = X() + 500, ml && kt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  af(e, t);
  var r = Wr(e, e === b ? te : 0);
  if (r === 0) n !== null && eu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && eu(n), t === 1) e.tag === 0 ? sd(Ku.bind(null, e)) : fa(Ku.bind(null, e)), ld(function() {
      !(R & 6) && kt();
    }), n = null;
    else {
      switch (As(r)) {
        case 1:
          n = ni;
          break;
        case 4:
          n = Us;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = Fs;
          break;
        default:
          n = Hr;
      }
      n = ac(n, nc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nc(e, t) {
  if (Mr = -1, Dr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (ln() && e.callbackNode !== n) return null;
  var r = Wr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = lc();
    (b !== e || te !== t) && (Qe = null, dn = X() + 500, Lt(e, t));
    do
      try {
        Td();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    mi(), rl.current = o, R = l, Y !== null ? t = 0 : (b = null, te = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = mo(e), l !== 0 && (r = l, t = Vo(e, l))), t === 1) throw n = er, Lt(e, 0), ot(e, r), ve(e, X()), n;
    if (t === 6) ot(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Pd(l) && (t = il(e, r), t === 2 && (o = mo(e), o !== 0 && (r = o, t = Vo(e, o))), t === 1)) throw n = er, Lt(e, 0), ot(e, r), ve(e, X()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Pt(e, de, Qe);
          break;
        case 3:
          if (ot(e, r), (r & 130023424) === r && (t = ji + 500 - X(), 10 < t)) {
            if (Wr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Co(Pt.bind(null, e, de, Qe), t);
            break;
          }
          Pt(e, de, Qe);
          break;
        case 4:
          if (ot(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - De(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = X() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(Pt.bind(null, e, de, Qe), r);
            break;
          }
          Pt(e, de, Qe);
          break;
        case 5:
          Pt(e, de, Qe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ve(e, X()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function Vo(e, t) {
  var n = Dn;
  return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = de, de = n, t !== null && Bo(t)), e;
}
function Bo(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function Pd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function ot(e, t) {
  for (t &= ~Ti, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - De(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ku(e) {
  if (R & 6) throw Error(y(327));
  ln();
  var t = Wr(e, 0);
  if (!(t & 1)) return ve(e, X()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = mo(e);
    r !== 0 && (t = r, n = Vo(e, r));
  }
  if (n === 1) throw n = er, Lt(e, 0), ot(e, t), ve(e, X()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, de, Qe), ve(e, X()), null;
}
function Li(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (dn = X() + 500, ml && kt());
  }
}
function Ut(e) {
  ut !== null && ut.tag === 0 && !(R & 6) && ln();
  var t = R;
  R |= 1;
  var n = Te.transition, r = I;
  try {
    if (Te.transition = null, I = 1, e) return e();
  } finally {
    I = r, Te.transition = n, R = t, !(R & 6) && kt();
  }
}
function Ri() {
  ge = qt.current, F(qt);
}
function Lt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, rd(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (di(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xr();
        break;
      case 3:
        cn(), F(he), F(ue), Si();
        break;
      case 5:
        ki(r);
        break;
      case 4:
        cn();
        break;
      case 13:
        F(W);
        break;
      case 19:
        F(W);
        break;
      case 10:
        vi(r.type._context);
        break;
      case 22:
      case 23:
        Ri();
    }
    n = n.return;
  }
  if (b = e, Y = e = mt(e.current, null), te = ge = t, Z = 0, er = null, Ti = wl = Dt = 0, de = Dn = null, Tt !== null) {
    for (t = 0; t < Tt.length; t++) if (n = Tt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Tt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var n = Y;
    try {
      if (mi(), Rr.current = nl, tl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        tl = !1;
      }
      if (Mt = 0, q = G = V = null, On = !1, Jn = 0, zi.current = null, n === null || n.return === null) {
        Z = 1, er = t, Y = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var w = Iu(i);
          if (w !== null) {
            w.flags &= -257, Ou(w, i, u, o, t), w.mode & 1 && Ru(o, c, t), t = w, s = c;
            var k = t.updateQueue;
            if (k === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), t.updateQueue = S;
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ru(o, c, t), Ii();
              break e;
            }
            s = Error(y(426));
          }
        } else if (A && u.mode & 1) {
          var O = Iu(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Ou(O, i, u, o, t), pi(fn(s, u));
            break e;
          }
        }
        o = s = fn(s, u), Z !== 4 && (Z = 2), Dn === null ? Dn = [o] : Dn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Aa(o, s, t);
              Nu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (pt === null || !pt.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Ha(o, u, t);
                Nu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ic(n);
    } catch (x) {
      t = x, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function lc() {
  var e = rl.current;
  return rl.current = nl, e === null ? nl : e;
}
function Ii() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || !(Dt & 268435455) && !(wl & 268435455) || ot(b, te);
}
function il(e, t) {
  var n = R;
  R |= 2;
  var r = lc();
  (b !== e || te !== t) && (Qe = null, Lt(e, t));
  do
    try {
      zd();
      break;
    } catch (l) {
      rc(e, l);
    }
  while (!0);
  if (mi(), R = n, rl.current = r, Y !== null) throw Error(y(261));
  return b = null, te = 0, Z;
}
function zd() {
  for (; Y !== null; ) oc(Y);
}
function Td() {
  for (; Y !== null && !bc(); ) oc(Y);
}
function oc(e) {
  var t = sc(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? ic(e) : Y = t, zi.current = null;
}
function ic(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xd(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, Y = null;
        return;
      }
    } else if (n = Sd(n, t, ge), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Pt(e, t, n) {
  var r = I, l = Te.transition;
  try {
    Te.transition = null, I = 1, jd(e, t, n, r);
  } finally {
    Te.transition = l, I = r;
  }
  return null;
}
function jd(e, t, n, r) {
  do
    ln();
  while (ut !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (cf(e, o), e === b && (Y = b = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cr || (Cr = !0, ac(Hr, function() {
    return ln(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Te.transition, Te.transition = null;
    var i = I;
    I = 1;
    var u = R;
    R |= 4, zi.current = null, Ed(e, n), ec(n, e), Zf(So), Vr = !!ko, So = ko = null, e.current = n, _d(n), ef(), R = u, I = i, Te.transition = o;
  } else e.current = n;
  if (Cr && (Cr = !1, ut = e, ol = l), o = e.pendingLanes, o === 0 && (pt = null), rf(n.stateNode), ve(e, X()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll) throw ll = !1, e = Ho, Ho = null, e;
  return ol & 1 && e.tag !== 0 && ln(), o = e.pendingLanes, o & 1 ? e === Wo ? Un++ : (Un = 0, Wo = e) : Un = 0, kt(), null;
}
function ln() {
  if (ut !== null) {
    var e = As(ol), t = Te.transition, n = I;
    try {
      if (Te.transition = null, I = 16 > e ? 16 : e, ut === null) var r = !1;
      else {
        if (e = ut, ut = null, ol = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, C = h;
                  else for (; C !== null; ) {
                    m = C;
                    var p = m.sibling, w = m.return;
                    if (Ja(m), m === c) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, C = p;
                      break;
                    }
                    C = w;
                  }
                }
              }
              var k = o.alternate;
              if (k !== null) {
                var S = k.child;
                if (S !== null) {
                  k.child = null;
                  do {
                    var O = S.sibling;
                    S.sibling = null, S = O;
                  } while (S !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, C = i;
          else e: for (; C !== null; ) {
            if (o = C, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Mn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, C = f;
              break e;
            }
            C = o.return;
          }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          i = C;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, C = d;
          else e: for (i = a; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  gl(9, u);
              }
            } catch (x) {
              Q(u, u.return, x);
            }
            if (u === i) {
              C = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, C = v;
              break e;
            }
            C = u.return;
          }
        }
        if (R = l, kt(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(cl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, Te.transition = t;
    }
  }
  return !1;
}
function Xu(e, t, n) {
  t = fn(n, t), t = Aa(e, t, 1), e = dt(e, t, 1), t = ae(), e !== null && (nr(e, 1, t), ve(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Xu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Xu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r))) {
        e = fn(n, e), e = Ha(t, e, 1), t = dt(t, e, 1), e = ae(), t !== null && (nr(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ld(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, b === e && (te & n) === n && (Z === 4 || Z === 3 && (te & 130023424) === te && 500 > X() - ji ? Lt(e, 0) : Ti |= n), ve(e, t);
}
function uc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = ae();
  e = qe(e, t), e !== null && (nr(e, t, n), ve(e, n));
}
function Rd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uc(e, n);
}
function Id(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), uc(e, n);
}
var sc;
sc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return pe = !1, kd(e, t, n);
    pe = !!(e.flags & 131072);
  }
  else pe = !1, A && t.flags & 1048576 && da(t, Zr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Or(e, t), e = t.pendingProps;
      var l = un(t, ue.current);
      rn(t, n), l = Ci(null, t, r, e, l, n);
      var o = Ei();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Yr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, gi(t), l.updater = yl, t.stateNode = l, l._reactInternals = t, jo(t, r, e, n), t = Io(null, t, r, !0, o, n)) : (t.tag = 0, A && o && fi(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Or(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Md(r), e = Ie(r, e), l) {
          case 0:
            t = Ro(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Mu(null, t, r, e, n);
            break e;
          case 14:
            t = Du(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Ro(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Uu(e, t, r, l, n);
    case 3:
      e: {
        if (Qa(t), e === null) throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, ga(e, t), br(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = fn(Error(y(423)), t), t = Fu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = fn(Error(y(424)), t), t = Fu(e, t, r, n, l);
          break e;
        } else for (we = ft(t.stateNode.containerInfo.firstChild), ke = t, A = !0, Me = null, n = va(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (sn(), r === l) {
            t = be(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wa(t), e === null && Po(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (t.flags |= 32), Ba(e, t), se(e, t, i, n), t.child;
    case 6:
      return e === null && Po(t), null;
    case 13:
      return Ka(e, t, n);
    case 4:
      return wi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = an(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Mu(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(Jr, r._currentValue), r._currentValue = i, o !== null) if (Fe(o.value, i)) {
          if (o.children === l.children && !he.current) {
            t = be(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Ge(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), zo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(y(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), zo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, rn(t, n), l = je(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Du(e, t, r, l, n);
    case 15:
      return Wa(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Or(e, t), t.tag = 1, me(r) ? (e = !0, Yr(t)) : e = !1, rn(t, n), $a(t, r, l), jo(t, r, l, n), Io(null, t, r, !0, e, n);
    case 19:
      return Xa(e, t, n);
    case 22:
      return Va(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ac(e, t) {
  return Ds(e, t);
}
function Od(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ze(e, t, n, r) {
  return new Od(e, t, n, r);
}
function Oi(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Md(e) {
  if (typeof e == "function") return Oi(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === bo) return 11;
    if (e === ei) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Oi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Wt:
      return Rt(n.children, l, o, t);
    case qo:
      i = 8, l |= 8;
      break;
    case bl:
      return e = ze(12, n, t, l | 2), e.elementType = bl, e.lanes = o, e;
    case eo:
      return e = ze(13, n, t, l), e.elementType = eo, e.lanes = o, e;
    case to:
      return e = ze(19, n, t, l), e.elementType = to, e.lanes = o, e;
    case ws:
      return kl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ys:
          i = 10;
          break e;
        case gs:
          i = 9;
          break e;
        case bo:
          i = 11;
          break e;
        case ei:
          i = 14;
          break e;
        case nt:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = ze(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Rt(e, t, n, r) {
  return e = ze(7, e, r, t), e.lanes = n, e;
}
function kl(e, t, n, r) {
  return e = ze(22, e, r, t), e.elementType = ws, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Zl(e, t, n) {
  return e = ze(6, e, null, t), e.lanes = n, e;
}
function Jl(e, t, n) {
  return t = ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Dd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ll(0), this.expirationTimes = Ll(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ll(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Mi(e, t, n, r, l, o, i, u, s) {
  return e = new Dd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = ze(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, gi(o), e;
}
function Ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ht, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return ca(e, n, t);
  }
  return t;
}
function fc(e, t, n, r, l, o, i, u, s) {
  return e = Mi(n, r, !0, e, l, o, i, u, s), e.context = cc(null), n = e.current, r = ae(), l = ht(n), o = Ge(r, l), o.callback = t ?? null, dt(n, o, l), e.current.lanes = l, nr(e, l, r), ve(e, r), e;
}
function Sl(e, t, n, r) {
  var l = t.current, o = ae(), i = ht(l);
  return n = cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, i), e !== null && (Ue(e, l, i, o), Lr(e, l, i)), i;
}
function ul(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Yu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Di(e, t) {
  Yu(e, t), (e = e.alternate) && Yu(e, t);
}
function Fd() {
  return null;
}
var dc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ui(e) {
  this._internalRoot = e;
}
xl.prototype.render = Ui.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Sl(e, t, null, null);
};
xl.prototype.unmount = Ui.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function() {
      Sl(null, e, null, null);
    }), t[Je] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++) ;
    lt.splice(n, 0, e), n === 0 && Qs(e);
  }
};
function Fi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Gu() {
}
function $d(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = ul(i);
        o.call(c);
      };
    }
    var i = fc(t, r, e, 0, null, !1, !1, "", Gu);
    return e._reactRootContainer = i, e[Je] = i.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ut(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ul(s);
      u.call(c);
    };
  }
  var s = Mi(e, 0, !1, null, null, !1, !1, "", Gu);
  return e._reactRootContainer = s, e[Je] = s.current, Kn(e.nodeType === 8 ? e.parentNode : e), Ut(function() {
    Sl(t, s, n, r);
  }), s;
}
function El(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ul(i);
        u.call(s);
      };
    }
    Sl(t, i, e, l);
  } else i = $d(n, t, e, l, r);
  return ul(i);
}
Hs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (ri(t, n | 1), ve(t, X()), !(R & 6) && (dn = X() + 500, kt()));
      }
      break;
    case 13:
      Ut(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ae();
          Ue(r, e, 1, l);
        }
      }), Di(e, 1);
  }
};
li = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ae();
      Ue(t, e, 134217728, n);
    }
    Di(e, 134217728);
  }
};
Ws = function(e) {
  if (e.tag === 13) {
    var t = ht(e), n = qe(e, t);
    if (n !== null) {
      var r = ae();
      Ue(n, e, t, r);
    }
    Di(e, t);
  }
};
Vs = function() {
  return I;
};
Bs = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
fo = function(e, t, n) {
  switch (t) {
    case "input":
      if (lo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(y(90));
            Ss(r), lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Cs(e, n);
      break;
    case "select":
      t = n.value, t != null && bt(e, !!n.multiple, t, !1);
  }
};
js = Li;
Ls = Ut;
var Ad = { usingClientEntryPoint: !1, Events: [lr, Kt, hl, zs, Ts, Li] }, Cn = { findFiberByHostInstance: zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hd = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Os(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || Fd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Er.isDisabled && Er.supportsFiber) try {
    cl = Er.inject(Hd), We = Er;
  } catch {
  }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
xe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fi(t)) throw Error(y(200));
  return Ud(e, t, null, n);
};
xe.createRoot = function(e, t) {
  if (!Fi(e)) throw Error(y(299));
  var n = !1, r = "", l = dc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Mi(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, Kn(e.nodeType === 8 ? e.parentNode : e), new Ui(t);
};
xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Os(t), e = e === null ? null : e.stateNode, e;
};
xe.flushSync = function(e) {
  return Ut(e);
};
xe.hydrate = function(e, t, n) {
  if (!Cl(t)) throw Error(y(200));
  return El(null, e, t, !0, n);
};
xe.hydrateRoot = function(e, t, n) {
  if (!Fi(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = dc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, l, !1, o, i), e[Je] = t.current, Kn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
xe.render = function(e, t, n) {
  if (!Cl(t)) throw Error(y(200));
  return El(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function(e) {
  if (!Cl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Ut(function() {
    El(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
xe.unstable_batchedUpdates = Li;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return El(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function pc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), ps.exports = xe;
var Wd = ps.exports, hc, Zu = Wd;
hc = Zu.createRoot, Zu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Ee = (e, t) => {
  const n = H.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: s,
      ...c
    }, m) => H.createElement(
      "svg",
      {
        ref: m,
        ...Vd,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Bd(e)}`, u].join(" "),
        ...c
      },
      [
        ...t.map(([h, p]) => H.createElement(h, p)),
        ...Array.isArray(s) ? s : [s]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = Ee("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = Ee("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = Ee("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = Ee("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = Ee("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = Ee("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bu = Ee("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = Ee("Save", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = Ee("Server", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = Ee("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = Ee("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = Ee("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = Ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Pe = {
  PROTOCOL: "hermes_webui_protocol",
  CUSTOM_URL: "hermes_webui_custom_url",
  HOST: "hermes_webui_host",
  PORT: "hermes_webui_port",
  PASSWORD: "hermes_webui_password",
  AUTO_CONNECT: "hermes_webui_auto_connect"
};
function $i() {
  var e, t, n, r;
  return typeof window > "u" ? !1 : !!((t = (e = window.Capacitor) == null ? void 0 : e.isNativePlatform) != null && t.call(e) || (n = window.Capacitor) != null && n.isNative || typeof ((r = window.Capacitor) == null ? void 0 : r.getPlatform) == "function" && window.Capacitor.getPlatform() !== "web" || navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad"));
}
function mc() {
  return typeof window < "u" && window.location && window.location.hostname && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? window.location.hostname : $i() ? "192.168.1.160" : "127.0.0.1";
}
const En = {
  protocol: "https",
  customUrl: "",
  host: "127.0.0.1",
  port: "8787",
  password: "Jm*q*QO#tgPjXWqO5C8ePLl1tQj1^ol6%",
  autoConnect: !0
};
function sl(e) {
  if (e || (e = Ai()), e.customUrl && e.customUrl.trim().length > 0) {
    let l = e.customUrl.trim();
    return !l.startsWith("http://") && !l.startsWith("https://") && (l = "https://" + l), l.replace(/\/+$/, "");
  }
  const t = e.protocol || "https", n = e.host || mc(), r = e.port || "8787";
  return t === "https" && r === "443" || t === "http" && r === "80" ? `${t}://${n}` : `${t}://${n}:${r}`;
}
function Ai() {
  if (typeof window > "u") return En;
  const e = window.grexNativeBridge, t = e ? e.getHost() : null, n = e ? e.getPort() : null, r = localStorage.getItem(Pe.HOST), l = mc();
  return {
    protocol: localStorage.getItem(Pe.PROTOCOL) || En.protocol,
    customUrl: localStorage.getItem(Pe.CUSTOM_URL) || En.customUrl,
    host: t || r || l,
    port: n || localStorage.getItem(Pe.PORT) || En.port,
    password: localStorage.getItem(Pe.PASSWORD) || En.password,
    autoConnect: localStorage.getItem(Pe.AUTO_CONNECT) !== "false"
  };
}
function _r(e) {
  typeof window > "u" || (e.protocol !== void 0 && localStorage.setItem(Pe.PROTOCOL, e.protocol), e.customUrl !== void 0 && localStorage.setItem(Pe.CUSTOM_URL, e.customUrl), e.host !== void 0 && localStorage.setItem(Pe.HOST, e.host), e.port !== void 0 && localStorage.setItem(Pe.PORT, e.port), e.password !== void 0 && localStorage.setItem(Pe.PASSWORD, e.password), e.autoConnect !== void 0 && localStorage.setItem(Pe.AUTO_CONNECT, String(e.autoConnect)));
}
function ep() {
  try {
    if (typeof window < "u" && typeof window.require == "function")
      return window.require("child_process");
  } catch {
  }
  return null;
}
async function Hi(e) {
  var r, l;
  const t = ep();
  if (t && typeof t.exec == "function")
    return new Promise((o) => {
      t.exec(e, (i, u, s) => {
        i ? (console.warn("[HermesWebUI] Node child_process error:", s || i.message), o({ ok: !1, error: s || i.message, code: i.code })) : o({ ok: !0, stdout: u.trim(), code: 0 });
      });
    });
  if (typeof window < "u" && ((l = (r = window.grexPlatformAPI) == null ? void 0 : r.cli) != null && l.exec))
    try {
      const o = await window.grexPlatformAPI.cli.exec(e);
      return { ok: o.code === 0, ...o };
    } catch (o) {
      console.warn("[HermesWebUI] grexPlatformAPI.cli.exec failed:", o);
    }
  const n = $i() ? "10.0.2.2" : "127.0.0.1";
  try {
    const o = await fetch(`http://${n}:7777/api/exec`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command: e })
    });
    if (o.ok)
      return await o.json();
  } catch {
  }
  return { ok: !1, error: "No execution bridge available." };
}
async function ts(e, t) {
  var l, o;
  let n = "";
  typeof e == "object" && e !== null ? n = sl(e) : typeof e == "string" ? e.startsWith("http://") || e.startsWith("https://") ? n = e : n = `http://${e}:8787` : n = sl(Ai());
  const r = `${n.replace(/\/+$/, "")}/login`;
  if (typeof window < "u" && ((o = (l = window.Capacitor) == null ? void 0 : l.Plugins) != null && o.CapacitorHttp))
    try {
      const i = await window.Capacitor.Plugins.CapacitorHttp.request({
        method: "GET",
        url: r,
        headers: {}
      });
      if (i.status >= 200 && i.status < 500)
        return { online: !0, statusCode: i.status, url: n };
    } catch (i) {
      console.warn("[HermesWebUI] CapacitorHttp probe error:", i);
    }
  try {
    if (typeof window < "u" && typeof window.require == "function") {
      const i = r.startsWith("https://"), u = window.require(i ? "https" : "http");
      if (u && typeof u.get == "function")
        return new Promise((s) => {
          const c = u.get(r, { timeout: 3e3, rejectUnauthorized: !1 }, (m) => {
            s({ online: !0, statusCode: m.statusCode, url: n });
          });
          c.on("error", () => s({ online: !1 })), c.on("timeout", () => {
            c.destroy(), s({ online: !1 });
          });
        });
    }
  } catch {
  }
  try {
    const i = new AbortController(), u = setTimeout(() => i.abort(), 3e3);
    return await fetch(r, { signal: i.signal, mode: "no-cors" }), clearTimeout(u), { online: !0, url: n };
  } catch (i) {
    return { online: !1, error: i.message };
  }
}
async function tp() {
  return await Hi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh start");
}
async function np() {
  return await Hi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh stop");
}
async function rp() {
  return await Hi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh restart");
}
function lp() {
  const [e, t] = H.useState(Ai), [n, r] = H.useState({ online: !1, checking: !0, lastCheck: Date.now() }), [l, o] = H.useState(!1), [i, u] = H.useState(!1), [s, c] = H.useState(null), [m, h] = H.useState(1), p = H.useRef(null), w = $i(), [k, S] = H.useState(!1), O = H.useRef(0), f = H.useCallback(async () => {
    r((re) => ({ ...re, checking: !0 }));
    let M = await ts(e);
    if (!M.online && w && e.host === "127.0.0.1" && !e.customUrl) {
      const re = { ...e, host: "10.0.2.2" }, Be = await ts(re);
      Be.online && (t(re), _r(re), M = Be);
    }
    M.online ? (O.current = 0, S(!0), r({ online: !0, checking: !1, statusCode: M.statusCode, lastCheck: Date.now() })) : (O.current += 1, O.current >= 3 || !k ? r({ online: !1, checking: !1, statusCode: M.statusCode, lastCheck: Date.now() }) : r((re) => ({ ...re, checking: !1, lastCheck: Date.now() })));
  }, [e, w, k]);
  H.useEffect(() => {
    f();
    const M = setInterval(f, 12e3);
    return () => clearInterval(M);
  }, [f]);
  const [a, d] = H.useState(!1), v = H.useRef(null), x = H.useRef(0), _ = H.useRef(0), N = H.useCallback((M = 6e3) => {
    d(!0), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
      d(!1);
    }, M);
  }, []);
  H.useEffect(() => {
    if (!w) return;
    const M = (re) => {
      if (re.touches && re.touches.length >= 3) {
        N(6e3);
        return;
      }
      if (re.type === "click" || re.type === "touchend") {
        const Be = Date.now();
        Be - x.current < 450 ? (_.current += 1, _.current >= 3 && (N(6e3), _.current = 0)) : _.current = 1, x.current = Be;
      }
    };
    return window.addEventListener("touchstart", M, { passive: !0 }), window.addEventListener("click", M), () => {
      window.removeEventListener("touchstart", M), window.removeEventListener("click", M), v.current && clearTimeout(v.current);
    };
  }, [w, N]);
  const P = () => {
    p.current && clearTimeout(p.current), o(!0);
  }, $ = () => {
    w || (p.current = setTimeout(() => {
      o(!1);
    }, 400));
  }, T = async () => {
    c("start");
    try {
      await tp(), setTimeout(f, 2e3);
    } finally {
      c(null);
    }
  }, ye = async () => {
    c("stop");
    try {
      await np(), setTimeout(f, 1500);
    } finally {
      c(null);
    }
  }, St = async () => {
    c("restart");
    try {
      await rp(), setTimeout(f, 2500);
    } finally {
      c(null);
    }
  }, xt = () => {
    h((M) => M + 1), f();
  }, Ct = sl(e);
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: "hermes-webui-fullscreen-frame",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#030712",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        !w && /* @__PURE__ */ g.jsx(
          "div",
          {
            className: "hermes-top-hover-zone",
            onMouseEnter: P,
            onMouseLeave: $,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 36,
              zIndex: 100
            },
            children: /* @__PURE__ */ g.jsx("div", { className: "hermes-top-edge-indicator" })
          }
        ),
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: `hermes-floating-navbar ${(w ? a : l) ? "visible" : ""}`,
            onMouseEnter: P,
            onMouseLeave: $,
            onClick: () => w && N(6e3),
            style: {
              position: "absolute",
              top: w ? "calc(env(safe-area-inset-top, 8px) + 36px)" : 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1e3,
              maxWidth: "92vw",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              padding: "6px 14px"
            },
            children: [
              /* @__PURE__ */ g.jsxs("div", { className: "hermes-nav-status", children: [
                /* @__PURE__ */ g.jsx(Zd, { size: 14, color: "#10b981" }),
                /* @__PURE__ */ g.jsx("span", { className: `status-dot ${n.checking ? "checking" : n.online ? "online" : "offline"}` }),
                /* @__PURE__ */ g.jsx("span", { style: { fontSize: "11px", fontWeight: "600" }, children: n.online ? `Hermes (${Ct})` : "Offline" })
              ] }),
              /* @__PURE__ */ g.jsxs("div", { className: "hermes-nav-actions", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                n.online ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsxs(
                    "button",
                    {
                      className: "hermes-btn",
                      onClick: St,
                      disabled: !!s,
                      title: "Restart Hermes WebUI Daemon",
                      style: { padding: "4px 8px", fontSize: "11px" },
                      children: [
                        /* @__PURE__ */ g.jsx(bu, { size: 11, className: s === "restart" ? "animate-spin" : "" }),
                        /* @__PURE__ */ g.jsx("span", { children: "Restart" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ g.jsxs(
                    "button",
                    {
                      className: "hermes-btn danger",
                      onClick: ye,
                      disabled: !!s,
                      title: "Stop Hermes WebUI Daemon",
                      style: { padding: "4px 8px", fontSize: "11px" },
                      children: [
                        /* @__PURE__ */ g.jsx(qd, { size: 11 }),
                        /* @__PURE__ */ g.jsx("span", { children: "Stop" })
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ g.jsxs(
                  "button",
                  {
                    className: "hermes-btn primary",
                    onClick: T,
                    disabled: !!s,
                    title: "Start Hermes WebUI Daemon",
                    style: { padding: "4px 10px", fontSize: "11px", backgroundColor: "#10b981", color: "#030712" },
                    children: [
                      /* @__PURE__ */ g.jsx(qu, { size: 11 }),
                      /* @__PURE__ */ g.jsx("span", { children: "Start Server" })
                    ]
                  }
                ),
                /* @__PURE__ */ g.jsx(
                  "button",
                  {
                    className: "hermes-btn",
                    onClick: xt,
                    title: "Reload Iframe",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ g.jsx(Yd, { size: 11 })
                  }
                ),
                /* @__PURE__ */ g.jsx(
                  "a",
                  {
                    href: Ct,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hermes-btn",
                    title: "Open in Browser Window",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ g.jsx(Qd, { size: 11 })
                  }
                ),
                /* @__PURE__ */ g.jsx(
                  "button",
                  {
                    className: "hermes-btn",
                    onClick: () => u(!0),
                    title: "Host & Port Settings",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ g.jsx(es, { size: 11 })
                  }
                )
              ] })
            ]
          }
        ),
        n.online || k ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsx(
            "iframe",
            {
              src: Ct,
              className: "hermes-iframe-full",
              title: "Hermes WebUI",
              allow: "clipboard-read; clipboard-write; microphone; camera; display-capture",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                margin: 0,
                padding: 0,
                display: "block",
                background: "#030712",
                zIndex: 1
              }
            },
            m
          ),
          !n.online && /* @__PURE__ */ g.jsxs("div", { style: {
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(239, 68, 68, 0.9)",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "700",
            zIndex: 9999,
            boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }, children: [
            /* @__PURE__ */ g.jsx(Ju, { size: 14 }),
            " Reconnecting to Hermes..."
          ] })
        ] }) : /* @__PURE__ */ g.jsxs("div", { style: {
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px",
          textAlign: "center",
          color: "#e2e8f0",
          background: "radial-gradient(circle at 50% 30%, #0f172a 0%, #030712 100%)",
          zIndex: 2
        }, children: [
          /* @__PURE__ */ g.jsx("div", { style: {
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }, children: /* @__PURE__ */ g.jsx(Ju, { size: 28, color: "#f87171" }) }),
          /* @__PURE__ */ g.jsx("h2", { style: { fontSize: "20px", fontWeight: "700", margin: "0 0 8px 0", color: "#f8fafc" }, children: "Hermes Server Offline" }),
          /* @__PURE__ */ g.jsxs("p", { style: { fontSize: "13px", color: "#94a3b8", maxWidth: "380px", margin: "0 0 24px 0", lineHeight: "1.5" }, children: [
            "Could not reach Hermes WebUI at ",
            /* @__PURE__ */ g.jsx("code", { style: { color: "#38bdf8", background: "rgba(56, 189, 248, 0.1)", padding: "2px 6px", borderRadius: "4px" }, children: Ct }),
            "."
          ] }),
          /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "300px" }, children: [
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: T,
                disabled: !!s,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 18px",
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)"
                },
                children: [
                  /* @__PURE__ */ g.jsx(qu, { size: 16 }),
                  /* @__PURE__ */ g.jsx("span", { children: "Start Hermes Daemon" })
                ]
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: f,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer"
                },
                children: [
                  /* @__PURE__ */ g.jsx(bu, { size: 14 }),
                  /* @__PURE__ */ g.jsx("span", { children: "Retry Connection" })
                ]
              }
            ),
            w && /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: "8px", marginTop: "4px" }, children: [
              /* @__PURE__ */ g.jsx(
                "button",
                {
                  onClick: () => {
                    const M = { ...e, host: "10.0.2.2" };
                    t(M), _r(M), setTimeout(f, 300);
                  },
                  style: {
                    flex: 1,
                    padding: "8px 10px",
                    fontSize: "11px",
                    fontWeight: "600",
                    backgroundColor: e.host === "10.0.2.2" ? "rgba(168, 85, 247, 0.2)" : "rgba(255, 255, 255, 0.04)",
                    color: e.host === "10.0.2.2" ? "#c084fc" : "#94a3b8",
                    border: `1px solid ${e.host === "10.0.2.2" ? "#a855f7" : "rgba(255, 255, 255, 0.1)"}`,
                    borderRadius: "8px",
                    cursor: "pointer"
                  },
                  children: "📱 10.0.2.2 (AVD)"
                }
              ),
              /* @__PURE__ */ g.jsx(
                "button",
                {
                  onClick: () => {
                    const M = { ...e, host: "127.0.0.1" };
                    t(M), _r(M), setTimeout(f, 300);
                  },
                  style: {
                    flex: 1,
                    padding: "8px 10px",
                    fontSize: "11px",
                    fontWeight: "600",
                    backgroundColor: e.host === "127.0.0.1" ? "rgba(168, 85, 247, 0.2)" : "rgba(255, 255, 255, 0.04)",
                    color: e.host === "127.0.0.1" ? "#c084fc" : "#94a3b8",
                    border: `1px solid ${e.host === "127.0.0.1" ? "#a855f7" : "rgba(255, 255, 255, 0.1)"}`,
                    borderRadius: "8px",
                    cursor: "pointer"
                  },
                  children: "⚡ 127.0.0.1 (ADB)"
                }
              )
            ] }),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => u(!0),
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "8px 12px",
                  background: "transparent",
                  color: "#94a3b8",
                  border: "none",
                  fontSize: "12px",
                  cursor: "pointer",
                  marginTop: "4px"
                },
                children: [
                  /* @__PURE__ */ g.jsx(es, { size: 13 }),
                  /* @__PURE__ */ g.jsx("span", { children: "Configure Host & Port" })
                ]
              }
            )
          ] })
        ] }),
        i && /* @__PURE__ */ g.jsx(
          op,
          {
            config: e,
            onClose: () => u(!1),
            onSave: (M) => {
              t(M), _r(M), setTimeout(f, 500);
            }
          }
        )
      ]
    }
  );
}
function op({ config: e, onClose: t, onSave: n }) {
  const [r, l] = H.useState({ ...e }), o = sl(r), i = (u) => {
    u.preventDefault(), n(r), t();
  };
  return /* @__PURE__ */ g.jsx("div", { className: "hermes-modal-overlay", onClick: t, children: /* @__PURE__ */ g.jsxs("div", { className: "hermes-modal-content", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ g.jsxs("div", { className: "hermes-modal-header", children: [
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ g.jsx(Kd, { size: 16, color: "#10b981" }),
        /* @__PURE__ */ g.jsx("span", { style: { fontSize: 14, fontWeight: 600, color: "#f8fafc" }, children: "Hermes Connection & Protocol Settings" })
      ] }),
      /* @__PURE__ */ g.jsx("button", { className: "hermes-btn", onClick: t, style: { padding: 3 }, children: /* @__PURE__ */ g.jsx(bd, { size: 14 }) })
    ] }),
    /* @__PURE__ */ g.jsxs("form", { onSubmit: i, children: [
      /* @__PURE__ */ g.jsxs("div", { style: {
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        border: "1px solid rgba(16, 185, 129, 0.3)",
        borderRadius: "10px",
        padding: "10px 12px",
        marginBottom: "16px"
      }, children: [
        /* @__PURE__ */ g.jsx("div", { style: { fontSize: "11px", color: "#94a3b8", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "2px" }, children: "Active Target URL Preview" }),
        /* @__PURE__ */ g.jsx("div", { style: { fontSize: "13px", color: "#34d399", fontWeight: "700", fontFamily: "monospace", wordBreak: "break-all" }, children: o })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: 6, marginBottom: 16 }, children: [
        /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: "hermes-btn",
            style: { flex: 1, padding: 6, fontSize: 11 },
            onClick: () => l((u) => ({ ...u, customUrl: "", host: "127.0.0.1", port: "8787", protocol: "http" })),
            children: [
              /* @__PURE__ */ g.jsx(Xd, { size: 12, style: { marginRight: 4 } }),
              " Localhost (8787)"
            ]
          }
        ),
        /* @__PURE__ */ g.jsxs(
          "button",
          {
            type: "button",
            className: "hermes-btn",
            style: { flex: 1, padding: 6, fontSize: 11 },
            onClick: () => l((u) => ({ ...u, customUrl: "", host: "10.0.2.2", port: "8787", protocol: "http" })),
            children: [
              /* @__PURE__ */ g.jsx(Jd, { size: 12, style: { marginRight: 4 } }),
              " 10.0.2.2 (AVD)"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ g.jsx("label", { className: "hermes-label", children: "Protocol" }),
        /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              type: "button",
              className: "hermes-btn",
              style: {
                flex: 1,
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: "700",
                backgroundColor: r.protocol === "https" ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: r.protocol === "https" ? "#34d399" : "#94a3b8",
                border: `1px solid ${r.protocol === "https" ? "#10b981" : "rgba(255, 255, 255, 0.1)"}`,
                borderRadius: "8px",
                cursor: "pointer"
              },
              onClick: () => l((u) => ({ ...u, protocol: "https" })),
              children: "🔒 HTTPS (Secure)"
            }
          ),
          /* @__PURE__ */ g.jsx(
            "button",
            {
              type: "button",
              className: "hermes-btn",
              style: {
                flex: 1,
                padding: "8px 12px",
                fontSize: "12px",
                fontWeight: "700",
                backgroundColor: r.protocol === "http" ? "rgba(56, 189, 248, 0.2)" : "rgba(255, 255, 255, 0.05)",
                color: r.protocol === "http" ? "#38bdf8" : "#94a3b8",
                border: `1px solid ${r.protocol === "http" ? "#38bdf8" : "rgba(255, 255, 255, 0.1)"}`,
                borderRadius: "8px",
                cursor: "pointer"
              },
              onClick: () => l((u) => ({ ...u, protocol: "http" })),
              children: "🌐 HTTP (Plain)"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ g.jsx("label", { className: "hermes-label", children: "Custom Full URL (Optional Override)" }),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "text",
            className: "hermes-input",
            value: r.customUrl || "",
            onChange: (u) => l((s) => ({ ...s, customUrl: u.target.value })),
            placeholder: "e.g. https://hermes.example.com or https://vps.mydomain.com:8787"
          }
        ),
        /* @__PURE__ */ g.jsx("span", { style: { fontSize: "11px", color: "#64748b", marginTop: "4px", display: "block" }, children: "If set, this full URL overrides Host and Port below." })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", gap: 10 }, children: [
        /* @__PURE__ */ g.jsxs("div", { className: "hermes-form-group", style: { flex: 2 }, children: [
          /* @__PURE__ */ g.jsx("label", { className: "hermes-label", children: "Host IP / Domain" }),
          /* @__PURE__ */ g.jsx(
            "input",
            {
              type: "text",
              className: "hermes-input",
              value: r.host || "",
              onChange: (u) => l((s) => ({ ...s, host: u.target.value })),
              placeholder: "192.168.1.160 or mydomain.com",
              required: !r.customUrl
            }
          )
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "hermes-form-group", style: { flex: 1 }, children: [
          /* @__PURE__ */ g.jsx("label", { className: "hermes-label", children: "Port" }),
          /* @__PURE__ */ g.jsx(
            "input",
            {
              type: "text",
              className: "hermes-input",
              value: r.port || "",
              onChange: (u) => l((s) => ({ ...s, port: u.target.value })),
              placeholder: "8787",
              required: !r.customUrl
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ g.jsx("label", { className: "hermes-label", children: "Password (Optional / Auto-Auth)" }),
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "password",
            className: "hermes-input",
            value: r.password || "",
            onChange: (u) => l((s) => ({ ...s, password: u.target.value })),
            placeholder: "Leave empty if none"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 }, children: [
        /* @__PURE__ */ g.jsx("button", { type: "button", className: "hermes-btn", onClick: t, children: "Cancel" }),
        /* @__PURE__ */ g.jsxs("button", { type: "submit", className: "hermes-btn primary", children: [
          /* @__PURE__ */ g.jsx(Gd, { size: 12, style: { marginRight: 4 } }),
          " Save & Connect"
        ] })
      ] })
    ] })
  ] }) });
}
async function ip(e, t = {}) {
  if (!e)
    throw new Error("[HermesWebUIEngine] Target container is null.");
  e.style.position = "relative", e.style.width = "100%", e.style.height = "100%", e.style.minHeight = "100%", e.style.margin = "0", e.style.padding = "0", e.style.overflow = "hidden";
  const n = hc(e);
  return n.render(/* @__PURE__ */ g.jsx(lp, { ...t })), () => {
    try {
      n.unmount();
    } catch {
    }
  };
}
export {
  lp as HermesWebUIEngineApp,
  ip as default,
  ip as mount_app
};
