(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".hermes-webui-fullscreen-frame{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#030712;box-sizing:border-box}.hermes-iframe-full{position:absolute;top:0;left:0;width:100%;height:100%;border:none;margin:0;padding:0;display:block;background:#030712;z-index:1}.hermes-top-hover-zone{position:absolute;top:0;left:0;right:0;height:36px;z-index:100;pointer-events:auto}.hermes-floating-navbar{position:absolute;top:0;left:50%;transform:translate(-50%) translateY(-100%);display:flex;align-items:center;gap:12px;padding:8px 16px;background:#0a121eeb;border:1px solid rgba(255,255,255,.15);border-top:none;border-radius:0 0 12px 12px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 12px 32px #0009;z-index:1000;transition:transform .28s cubic-bezier(.16,1,.3,1),opacity .28s ease;opacity:0;pointer-events:none;-webkit-user-select:none;user-select:none}.hermes-floating-navbar.visible{transform:translate(-50%) translateY(0)!important;opacity:1!important;pointer-events:auto!important}.hermes-top-edge-indicator{position:absolute;top:0;left:50%;transform:translate(-50%);width:48px;height:3px;background:#10b98166;border-radius:0 0 3px 3px;transition:width .2s ease,background .2s ease}.hermes-top-hover-zone:hover .hermes-top-edge-indicator{width:96px;background:#10b981cc;box-shadow:0 0 8px #10b98199}.hermes-nav-status{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:500;color:#e2e8f0}.status-dot{width:7px;height:7px;border-radius:50%;display:inline-block}.status-dot.online{background:#10b981;box-shadow:0 0 8px #10b981}.status-dot.offline{background:#ef4444}.status-dot.checking{background:#f59e0b;animation:pulse 1s infinite}@keyframes pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.85)}}.hermes-nav-actions{display:flex;align-items:center;gap:6px}.hermes-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:#ffffff14;border:1px solid rgba(255,255,255,.12);border-radius:6px;color:#f1f5f9;font-size:11px;font-weight:500;text-decoration:none;cursor:pointer;transition:all .15s ease;line-height:1}.hermes-btn:hover:not(:disabled){background:#ffffff29;border-color:#ffffff40;color:#fff}.hermes-btn:disabled{opacity:.45;cursor:not-allowed}.hermes-btn.primary{background:#10b981;color:#030712;border-color:#10b981;font-weight:600}.hermes-btn.primary:hover:not(:disabled){background:#059669}.hermes-btn.danger{background:#ef444426;border-color:#ef44444d;color:#fca5a5}.hermes-btn.danger:hover:not(:disabled){background:#ef44444d;color:#fef2f2}.animate-spin{animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.hermes-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#000000bf;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:2000;padding:16px}.hermes-modal-content{width:100%;max-width:380px;background:#0f172a;border:1px solid rgba(255,255,255,.15);border-radius:16px;padding:20px;box-shadow:0 20px 50px #000c;color:#f8fafc}.hermes-modal-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.08)}.hermes-form-group{margin-bottom:12px}.hermes-label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:#94a3b8;margin-bottom:5px}.hermes-input{width:100%;padding:8px 12px;background:#030712;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:#f8fafc;font-size:13px;outline:none;box-sizing:border-box}.hermes-input:focus{border-color:#10b981;box-shadow:0 0 0 2px #10b98133}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var qu = { exports: {} }, rl = {}, bu = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element"), dc = Symbol.for("react.portal"), pc = Symbol.for("react.fragment"), hc = Symbol.for("react.strict_mode"), mc = Symbol.for("react.profiler"), vc = Symbol.for("react.provider"), yc = Symbol.for("react.context"), gc = Symbol.for("react.forward_ref"), wc = Symbol.for("react.suspense"), kc = Symbol.for("react.memo"), Sc = Symbol.for("react.lazy"), $i = Symbol.iterator;
function xc(e) {
  return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"], typeof e == "function" ? e : null);
}
var es = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ts = Object.assign, ns = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = ns, this.updater = n || es;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rs() {
}
rs.prototype = un.prototype;
function Wo(e, t, n) {
  this.props = e, this.context = t, this.refs = ns, this.updater = n || es;
}
var Vo = Wo.prototype = new rs();
Vo.constructor = Wo;
ts(Vo, un.prototype);
Vo.isPureReactComponent = !0;
var Ai = Array.isArray, ls = Object.prototype.hasOwnProperty, Bo = { current: null }, os = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) ls.call(t, r) && !os.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Zn, type: e, key: o, ref: i, props: l, _owner: Bo.current };
}
function Cc(e, t) {
  return { $$typeof: Zn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function Ec(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Hi = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ec("" + e.key) : t.toString(36);
}
function Sr(e, t, n, r, l) {
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
        case Zn:
        case dc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + xl(i, 0) : r, Ai(l) ? (n = "", e != null && (n = e.replace(Hi, "$&/") + "/"), Sr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Qo(l) && (l = Cc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Hi, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ai(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + xl(o, u);
    i += Sr(o, t, n, s, l);
  }
  else if (s = xc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + xl(o, u++), i += Sr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function _c(e) {
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
var se = { current: null }, xr = { transition: null }, Nc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: xr, ReactCurrentOwner: Bo };
function us() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = { map: rr, forEach: function(e, t, n) {
  rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
j.Component = un;
j.Fragment = pc;
j.Profiler = mc;
j.PureComponent = Wo;
j.StrictMode = hc;
j.Suspense = wc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
j.act = us;
j.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ts({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Bo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ls.call(t, s) && !os.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
j.createContext = function(e) {
  return e = { $$typeof: yc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: vc, _context: e }, e.Consumer = e;
};
j.createElement = is;
j.createFactory = function(e) {
  var t = is.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: gc, render: e };
};
j.isValidElement = Qo;
j.lazy = function(e) {
  return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: _c };
};
j.memo = function(e, t) {
  return { $$typeof: kc, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
j.unstable_act = us;
j.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
j.useContext = function(e) {
  return se.current.useContext(e);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
j.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
j.useId = function() {
  return se.current.useId();
};
j.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
j.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
j.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
j.useRef = function(e) {
  return se.current.useRef(e);
};
j.useState = function(e) {
  return se.current.useState(e);
};
j.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function() {
  return se.current.useTransition();
};
j.version = "18.3.1";
bu.exports = j;
var oe = bu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pc = oe, zc = Symbol.for("react.element"), Tc = Symbol.for("react.fragment"), jc = Object.prototype.hasOwnProperty, Lc = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) jc.call(t, r) && !Rc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: zc, type: e, key: o, ref: i, props: l, _owner: Lc.current };
}
rl.Fragment = Tc;
rl.jsx = ss;
rl.jsxs = ss;
qu.exports = rl;
var S = qu.exports, as = { exports: {} }, we = {}, cs = { exports: {} }, fs = {};
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
  function t(_, z) {
    var T = _.length;
    _.push(z);
    e: for (; 0 < T; ) {
      var B = T - 1 >>> 1, G = _[B];
      if (0 < l(G, z)) _[B] = z, _[T] = G, T = B;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var z = _[0], T = _.pop();
    if (T !== z) {
      _[0] = T;
      e: for (var B = 0, G = _.length, tr = G >>> 1; B < tr; ) {
        var gt = 2 * (B + 1) - 1, Sl = _[gt], wt = gt + 1, nr = _[wt];
        if (0 > l(Sl, T)) wt < G && 0 > l(nr, Sl) ? (_[B] = nr, _[wt] = T, B = wt) : (_[B] = Sl, _[gt] = T, B = gt);
        else if (wt < G && 0 > l(nr, T)) _[B] = nr, _[wt] = T, B = wt;
        else break e;
      }
    }
    return z;
  }
  function l(_, z) {
    var T = _.sortIndex - z.sortIndex;
    return T !== 0 ? T : _.id - z.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, w = !1, g = !1, x = !1, O = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= _) r(c), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(_) {
    if (x = !1, d(_), !g) if (n(s) !== null) g = !0, wl(C);
    else {
      var z = n(c);
      z !== null && kl(v, z.startTime - _);
    }
  }
  function C(_, z) {
    g = !1, x && (x = !1, f(P), P = -1), w = !0;
    var T = p;
    try {
      for (d(z), h = n(s); h !== null && (!(h.expirationTime > z) || _ && !ze()); ) {
        var B = h.callback;
        if (typeof B == "function") {
          h.callback = null, p = h.priorityLevel;
          var G = B(h.expirationTime <= z);
          z = e.unstable_now(), typeof G == "function" ? h.callback = G : h === n(s) && r(s), d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var tr = !0;
      else {
        var gt = n(c);
        gt !== null && kl(v, gt.startTime - z), tr = !1;
      }
      return tr;
    } finally {
      h = null, p = T, w = !1;
    }
  }
  var k = !1, N = null, P = -1, V = 5, L = -1;
  function ze() {
    return !(e.unstable_now() - L < V);
  }
  function cn() {
    if (N !== null) {
      var _ = e.unstable_now();
      L = _;
      var z = !0;
      try {
        z = N(!0, _);
      } finally {
        z ? fn() : (k = !1, N = null);
      }
    } else k = !1;
  }
  var fn;
  if (typeof a == "function") fn = function() {
    a(cn);
  };
  else if (typeof MessageChannel < "u") {
    var Ui = new MessageChannel(), fc = Ui.port2;
    Ui.port1.onmessage = cn, fn = function() {
      fc.postMessage(null);
    };
  } else fn = function() {
    O(cn, 0);
  };
  function wl(_) {
    N = _, k || (k = !0, fn());
  }
  function kl(_, z) {
    P = O(function() {
      _(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    g || w || (g = !0, wl(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var T = p;
    p = z;
    try {
      return _();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, z) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var T = p;
    p = _;
    try {
      return z();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(_, z, T) {
    var B = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? B + T : B) : T = B, _) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = T + G, _ = { id: m++, callback: z, priorityLevel: _, startTime: T, expirationTime: G, sortIndex: -1 }, T > B ? (_.sortIndex = T, t(c, _), n(s) === null && _ === n(c) && (x ? (f(P), P = -1) : x = !0, kl(v, T - B))) : (_.sortIndex = G, t(s, _), g || w || (g = !0, wl(C))), _;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(_) {
    var z = p;
    return function() {
      var T = p;
      p = z;
      try {
        return _.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(fs);
cs.exports = fs;
var Ic = cs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc = oe, ge = Ic;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ds = /* @__PURE__ */ new Set(), In = {};
function Rt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Mc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wi = {}, Vi = {};
function Dc(e) {
  return Gl.call(Vi, e) ? !0 : Gl.call(Wi, e) ? !1 : Mc.test(e) ? Vi[e] = !0 : (Wi[e] = !0, !1);
}
function Fc(e, t, n, r) {
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
function Uc(e, t, n, r) {
  if (t === null || typeof t > "u" || Fc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ee[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function Yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ko,
    Yo
  );
  ee[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ko, Yo);
  ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ko, Yo);
  ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xo(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Uc(t, n, l, r) && (n = null), r || l === null ? Dc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), Mt = Symbol.for("react.portal"), Dt = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), ps = Symbol.for("react.provider"), hs = Symbol.for("react.context"), Zo = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), Jo = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), ms = Symbol.for("react.offscreen"), Bi = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var H = Object.assign, Cl;
function kn(e) {
  if (Cl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Cl = t && t[1] || "";
  }
  return `
` + Cl + e;
}
var El = !1;
function _l(e, t) {
  if (!e || El) return "";
  El = !0;
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
    El = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function $c(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, !1), e;
    case 11:
      return e = _l(e.type.render, !1), e;
    case 1:
      return e = _l(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Mt:
      return "Portal";
    case Zl:
      return "Profiler";
    case Go:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case hs:
      return (e.displayName || "Context") + ".Consumer";
    case ps:
      return (e._context.displayName || "Context") + ".Provider";
    case Zo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Jo:
      return t = e.displayName || null, t !== null ? t : bl(e.type) || "Memo";
    case qe:
      t = e._payload, e = e._init;
      try {
        return bl(e(t));
      } catch {
      }
  }
  return null;
}
function Ac(e) {
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
      return bl(t);
    case 8:
      return t === Go ? "StrictMode" : "Mode";
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
function pt(e) {
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
function vs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Hc(e) {
  var t = vs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function or(e) {
  e._valueTracker || (e._valueTracker = Hc(e));
}
function ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = vs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, t) {
  var n = t.checked;
  return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Qi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gs(e, t) {
  t = t.checked, t != null && Xo(e, "checked", t, !1);
}
function to(e, t) {
  gs(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? no(e, t.type, n) : t.hasOwnProperty("defaultValue") && no(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ki(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function no(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Yt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function ws(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ks(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ir, Ss = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ir = ir || document.createElement("div"), ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
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
}, Wc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function(e) {
  Wc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), En[t] = En[e];
  });
});
function xs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || En.hasOwnProperty(e) && En[e] ? ("" + t).trim() : t + "px";
}
function Cs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = xs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Vc = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oo(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function io(e, t) {
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
var uo = null;
function qo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var so = null, Xt = null, Gt = null;
function Gi(e) {
  if (e = bn(e)) {
    if (typeof so != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = sl(t), so(e.stateNode, e.type, t));
  }
}
function Es(e) {
  Xt ? Gt ? Gt.push(e) : Gt = [e] : Xt = e;
}
function _s() {
  if (Xt) {
    var e = Xt, t = Gt;
    if (Gt = Xt = null, Gi(e), t) for (e = 0; e < t.length; e++) Gi(t[e]);
  }
}
function Ns(e, t) {
  return e(t);
}
function Ps() {
}
var Nl = !1;
function zs(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return Ns(e, t, n);
  } finally {
    Nl = !1, (Xt !== null || Gt !== null) && (Ps(), _s());
  }
}
function Mn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
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
var ao = !1;
if (Ke) try {
  var pn = {};
  Object.defineProperty(pn, "passive", { get: function() {
    ao = !0;
  } }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
} catch {
  ao = !1;
}
function Bc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var _n = !1, Or = null, Mr = !1, co = null, Qc = { onError: function(e) {
  _n = !0, Or = e;
} };
function Kc(e, t, n, r, l, o, i, u, s) {
  _n = !1, Or = null, Bc.apply(Qc, arguments);
}
function Yc(e, t, n, r, l, o, i, u, s) {
  if (Kc.apply(this, arguments), _n) {
    if (_n) {
      var c = Or;
      _n = !1, Or = null;
    } else throw Error(y(198));
    Mr || (Mr = !0, co = c);
  }
}
function It(e) {
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
function Ts(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Zi(e) {
  if (It(e) !== e) throw Error(y(188));
}
function Xc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = It(e), t === null) throw Error(y(188));
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
        if (o === n) return Zi(l), e;
        if (o === r) return Zi(l), t;
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
function js(e) {
  return e = Xc(e), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ls(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rs = ge.unstable_scheduleCallback, Ji = ge.unstable_cancelCallback, Gc = ge.unstable_shouldYield, Zc = ge.unstable_requestPaint, Q = ge.unstable_now, Jc = ge.unstable_getCurrentPriorityLevel, bo = ge.unstable_ImmediatePriority, Is = ge.unstable_UserBlockingPriority, Dr = ge.unstable_NormalPriority, qc = ge.unstable_LowPriority, Os = ge.unstable_IdlePriority, ll = null, $e = null;
function bc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function") try {
    $e.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ie = Math.clz32 ? Math.clz32 : nf, ef = Math.log, tf = Math.LN2;
function nf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (ef(e) / tf | 0) | 0;
}
var ur = 64, sr = 4194304;
function xn(e) {
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
function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = xn(u) : (o &= i, o !== 0 && (r = xn(o)));
  } else i = n & ~l, i !== 0 ? r = xn(i) : o !== 0 && (r = xn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ie(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function rf(e, t) {
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
function lf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ie(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = rf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function fo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ms() {
  var e = ur;
  return ur <<= 1, !(ur & 4194240) && (ur = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ie(t), e[t] = n;
}
function of(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function ei(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function Ds(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Fs, ti, Us, $s, As, po = !1, ar = [], ot = null, it = null, ut = null, Dn = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), et = [], uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = bn(t), t !== null && ti(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function sf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ot = hn(ot, e, t, n, r, l), !0;
    case "dragenter":
      return it = hn(it, e, t, n, r, l), !0;
    case "mouseover":
      return ut = hn(ut, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, hn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Fn.set(o, hn(Fn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Hs(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ts(n), t !== null) {
          e.blockedOn = t, As(e.priority, function() {
            Us(n);
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
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uo = r, n.target.dispatchEvent(r), uo = null;
    } else return t = bn(n), t !== null && ti(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function bi(e, t, n) {
  Cr(e) && n.delete(t);
}
function af() {
  po = !1, ot !== null && Cr(ot) && (ot = null), it !== null && Cr(it) && (it = null), ut !== null && Cr(ut) && (ut = null), Dn.forEach(bi), Fn.forEach(bi);
}
function mn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, po || (po = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, af)));
}
function Un(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < ar.length) {
    mn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ot !== null && mn(ot, e), it !== null && mn(it, e), ut !== null && mn(ut, e), Dn.forEach(t), Fn.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && (n = et[0], n.blockedOn === null); ) Hs(n), n.blockedOn === null && et.shift();
}
var Zt = Ze.ReactCurrentBatchConfig, Ur = !0;
function cf(e, t, n, r) {
  var l = I, o = Zt.transition;
  Zt.transition = null;
  try {
    I = 1, ni(e, t, n, r);
  } finally {
    I = l, Zt.transition = o;
  }
}
function ff(e, t, n, r) {
  var l = I, o = Zt.transition;
  Zt.transition = null;
  try {
    I = 4, ni(e, t, n, r);
  } finally {
    I = l, Zt.transition = o;
  }
}
function ni(e, t, n, r) {
  if (Ur) {
    var l = ho(e, t, n, r);
    if (l === null) Fl(e, t, r, $r, n), qi(e, r);
    else if (sf(l, e, t, n, r)) r.stopPropagation();
    else if (qi(e, r), t & 4 && -1 < uf.indexOf(e)) {
      for (; l !== null; ) {
        var o = bn(l);
        if (o !== null && Fs(o), o = ho(e, t, n, r), o === null && Fl(e, t, r, $r, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var $r = null;
function ho(e, t, n, r) {
  if ($r = null, e = qo(r), e = xt(e), e !== null) if (t = It(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ts(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return $r = e, null;
}
function Ws(e) {
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
      switch (Jc()) {
        case bo:
          return 1;
        case Is:
          return 4;
        case Dr:
        case qc:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null, ri = null, Er = null;
function Vs() {
  if (Er) return Er;
  var e, t = ri, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return !0;
}
function eu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? cr : eu, this.isPropagationStopped = eu, this;
  }
  return H(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), t;
}
var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, li = ke(sn), qn = H({}, sn, { view: 0, detail: 0 }), df = ke(qn), zl, Tl, vn, ol = H({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (zl = e.screenX - vn.screenX, Tl = e.screenY - vn.screenY) : Tl = zl = 0, vn = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), tu = ke(ol), pf = H({}, ol, { dataTransfer: 0 }), hf = ke(pf), mf = H({}, qn, { relatedTarget: 0 }), jl = ke(mf), vf = H({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yf = ke(vf), gf = H({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), wf = ke(gf), kf = H({}, sn, { data: 0 }), nu = ke(kf), Sf = {
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
}, xf = {
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
}, Cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ef(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function oi() {
  return Ef;
}
var _f = H({}, qn, { key: function(e) {
  if (e.key) {
    var t = Sf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oi, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nf = ke(_f), Pf = H({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ru = ke(Pf), zf = H({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oi }), Tf = ke(zf), jf = H({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = ke(jf), Rf = H({}, ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), If = ke(Rf), Of = [9, 13, 27, 32], ii = Ke && "CompositionEvent" in window, Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var Mf = Ke && "TextEvent" in window && !Nn, Bs = Ke && (!ii || Nn && 8 < Nn && 11 >= Nn), lu = " ", ou = !1;
function Qs(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
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
function Ks(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function Df(e, t) {
  switch (e) {
    case "compositionend":
      return Ks(t);
    case "keypress":
      return t.which !== 32 ? null : (ou = !0, lu);
    case "textInput":
      return e = t.data, e === lu && ou ? null : e;
    default:
      return null;
  }
}
function Ff(e, t) {
  if (Ft) return e === "compositionend" || !ii && Qs(e, t) ? (e = Vs(), Er = ri = nt = null, Ft = !1, e) : null;
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
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uf[e.type] : t === "textarea";
}
function Ys(e, t, n, r) {
  Es(r), t = Ar(t, "onChange"), 0 < t.length && (n = new li("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pn = null, $n = null;
function $f(e) {
  la(e, 0);
}
function il(e) {
  var t = At(e);
  if (ys(t)) return e;
}
function Af(e, t) {
  if (e === "change") return t;
}
var Xs = !1;
if (Ke) {
  var Ll;
  if (Ke) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"), Rl = typeof uu.oninput == "function";
    }
    Ll = Rl;
  } else Ll = !1;
  Xs = Ll && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  Pn && (Pn.detachEvent("onpropertychange", Gs), $n = Pn = null);
}
function Gs(e) {
  if (e.propertyName === "value" && il($n)) {
    var t = [];
    Ys(t, $n, e, qo(e)), zs($f, t);
  }
}
function Hf(e, t, n) {
  e === "focusin" ? (su(), Pn = t, $n = n, Pn.attachEvent("onpropertychange", Gs)) : e === "focusout" && su();
}
function Wf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return il($n);
}
function Vf(e, t) {
  if (e === "click") return il(t);
}
function Bf(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function Qf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Me = typeof Object.is == "function" ? Object.is : Qf;
function An(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cu(e, t) {
  var n = au(e);
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
    n = au(n);
  }
}
function Zs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Js() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Kf(e) {
  var t = Js(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zs(n.ownerDocument.documentElement, n)) {
    if (r !== null && ui(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = cu(n, o);
        var i = cu(
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
var Yf = Ke && "documentMode" in document && 11 >= document.documentMode, Ut = null, mo = null, zn = null, vo = !1;
function fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vo || Ut == null || Ut !== Ir(r) || (r = Ut, "selectionStart" in r && ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zn && An(zn, r) || (zn = r, r = Ar(mo, "onSelect"), 0 < r.length && (t = new li("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ut)));
}
function fr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, Il = {}, qs = {};
Ke && (qs = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function ul(e) {
  if (Il[e]) return Il[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in qs) return Il[e] = t[n];
  return e;
}
var bs = ul("animationend"), ea = ul("animationiteration"), ta = ul("animationstart"), na = ul("transitionend"), ra = /* @__PURE__ */ new Map(), du = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
  ra.set(e, t), Rt(t, [e]);
}
for (var Ol = 0; Ol < du.length; Ol++) {
  var Ml = du[Ol], Xf = Ml.toLowerCase(), Gf = Ml[0].toUpperCase() + Ml.slice(1);
  mt(Xf, "on" + Gf);
}
mt(bs, "onAnimationEnd");
mt(ea, "onAnimationIteration");
mt(ta, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(na, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function pu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yc(r, t, void 0, e), e.currentTarget = null;
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        pu(l, u, c), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        pu(l, u, c), o = s;
      }
    }
  }
  if (Mr) throw e = co, Mr = !1, co = null, e;
}
function D(e, t) {
  var n = t[So];
  n === void 0 && (n = t[So] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (oa(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), oa(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[dr]) {
    e[dr] = !0, ds.forEach(function(n) {
      n !== "selectionchange" && (Zf.has(n) || Dl(n, !1, e), Dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || (t[dr] = !0, Dl("selectionchange", !1, t));
  }
}
function oa(e, t, n, r) {
  switch (Ws(t)) {
    case 1:
      var l = cf;
      break;
    case 4:
      l = ff;
      break;
    default:
      l = ni;
  }
  n = l.bind(null, t, n, e), l = void 0, !ao || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
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
        if (i = xt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  zs(function() {
    var c = o, m = qo(n), h = [];
    e: {
      var p = ra.get(e);
      if (p !== void 0) {
        var w = li, g = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Nf;
            break;
          case "focusin":
            g = "focus", w = jl;
            break;
          case "focusout":
            g = "blur", w = jl;
            break;
          case "beforeblur":
          case "afterblur":
            w = jl;
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
            w = tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Tf;
            break;
          case bs:
          case ea:
          case ta:
            w = yf;
            break;
          case na:
            w = Lf;
            break;
          case "scroll":
            w = df;
            break;
          case "wheel":
            w = If;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = wf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ru;
        }
        var x = (t & 4) !== 0, O = !x && e === "scroll", f = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Mn(a, f), v != null && x.push(Wn(a, v, d)))), O) break;
          a = a.return;
        }
        0 < x.length && (p = new w(p, g, null, n, m), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== uo && (g = n.relatedTarget || n.fromElement) && (xt(g) || g[Ye])) break e;
        if ((w || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = c, g = g ? xt(g) : null, g !== null && (O = It(g), g !== O || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = c), w !== g)) {
          if (x = tu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = ru, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), O = w == null ? p : At(w), d = g == null ? p : At(g), p = new x(v, a + "leave", w, n, m), p.target = O, p.relatedTarget = d, v = null, xt(m) === c && (x = new x(f, a + "enter", g, n, m), x.target = d, x.relatedTarget = O, v = x), O = v, w && g) t: {
            for (x = w, f = g, a = 0, d = x; d; d = Ot(d)) a++;
            for (d = 0, v = f; v; v = Ot(v)) d++;
            for (; 0 < a - d; ) x = Ot(x), a--;
            for (; 0 < d - a; ) f = Ot(f), d--;
            for (; a--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Ot(x), f = Ot(f);
            }
            x = null;
          }
          else x = null;
          w !== null && hu(h, p, w, x, !1), g !== null && O !== null && hu(h, O, g, x, !0);
        }
      }
      e: {
        if (p = c ? At(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var C = Af;
        else if (iu(p)) if (Xs) C = Bf;
        else {
          C = Wf;
          var k = Hf;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = Vf);
        if (C && (C = C(e, c))) {
          Ys(h, C, n, m);
          break e;
        }
        k && k(e, p, c), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && no(p, "number", p.value);
      }
      switch (k = c ? At(c) : window, e) {
        case "focusin":
          (iu(k) || k.contentEditable === "true") && (Ut = k, mo = c, zn = null);
          break;
        case "focusout":
          zn = mo = Ut = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vo = !1, fu(h, n, m);
          break;
        case "selectionchange":
          if (Yf) break;
        case "keydown":
        case "keyup":
          fu(h, n, m);
      }
      var N;
      if (ii) e: {
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
      else Ft ? Qs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Bs && n.locale !== "ko" && (Ft || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ft && (N = Vs()) : (nt = m, ri = "value" in nt ? nt.value : nt.textContent, Ft = !0)), k = Ar(c, P), 0 < k.length && (P = new nu(P, e, null, n, m), h.push({ event: P, listeners: k }), N ? P.data = N : (N = Ks(n), N !== null && (P.data = N)))), (N = Mf ? Df(e, n) : Ff(e, n)) && (c = Ar(c, "onBeforeInput"), 0 < c.length && (m = new nu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = N));
    }
    la(h, t);
  });
}
function Wn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Mn(e, n), o != null && r.unshift(Wn(e, o, l)), o = Mn(e, t), o != null && r.push(Wn(e, o, l))), e = e.return;
  }
  return r;
}
function Ot(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Mn(n, o), s != null && i.unshift(Wn(n, s, u))) : l || (s = Mn(n, o), s != null && i.push(Wn(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Jf = /\r\n?/g, qf = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Jf, `
`).replace(qf, "");
}
function pr(e, t, n) {
  if (t = mu(t), mu(e) !== t && n) throw Error(y(425));
}
function Hr() {
}
var yo = null, go = null;
function wo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0, bf = typeof clearTimeout == "function" ? clearTimeout : void 0, vu = typeof Promise == "function" ? Promise : void 0, ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof vu < "u" ? function(e) {
  return vu.resolve(null).then(e).catch(td);
} : ko;
function td(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Un(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Un(t);
}
function st(e) {
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
function yu(e) {
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
var an = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + an, Vn = "__reactProps$" + an, Ye = "__reactContainer$" + an, So = "__reactEvents$" + an, nd = "__reactListeners$" + an, rd = "__reactHandles$" + an;
function xt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = yu(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = yu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function bn(e) {
  return e = e[Ue] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Vn] || null;
}
var xo = [], Ht = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > Ht || (e.current = xo[Ht], xo[Ht] = null, Ht--);
}
function M(e, t) {
  Ht++, xo[Ht] = e.current, e.current = t;
}
var ht = {}, le = vt(ht), de = vt(!1), Pt = ht;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Wr() {
  F(de), F(le);
}
function gu(e, t, n) {
  if (le.current !== ht) throw Error(y(168));
  M(le, t), M(de, n);
}
function ia(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Ac(e) || "Unknown", l));
  return H({}, n, r);
}
function Vr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht, Pt = le.current, M(le, e), M(de, de.current), !0;
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = ia(e, t, Pt), r.__reactInternalMemoizedMergedChildContext = e, F(de), F(le), M(le, e)) : F(de), M(de, n);
}
var We = null, al = !1, $l = !1;
function ua(e) {
  We === null ? We = [e] : We.push(e);
}
function ld(e) {
  al = !0, ua(e);
}
function yt() {
  if (!$l && We !== null) {
    $l = !0;
    var e = 0, t = I;
    try {
      var n = We;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      We = null, al = !1;
    } catch (l) {
      throw We !== null && (We = We.slice(e + 1)), Rs(bo, yt), l;
    } finally {
      I = t, $l = !1;
    }
  }
  return null;
}
var Wt = [], Vt = 0, Br = null, Qr = 0, xe = [], Ce = 0, zt = null, Ve = 1, Be = "";
function kt(e, t) {
  Wt[Vt++] = Qr, Wt[Vt++] = Br, Br = e, Qr = t;
}
function sa(e, t, n) {
  xe[Ce++] = Ve, xe[Ce++] = Be, xe[Ce++] = zt, zt = e;
  var r = Ve;
  e = Be;
  var l = 32 - Ie(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Ie(t) + l | n << l | r, Be = o + e;
  } else Ve = 1 << o | n << l | r, Be = e;
}
function si(e) {
  e.return !== null && (kt(e, 1), sa(e, 1, 0));
}
function ai(e) {
  for (; e === Br; ) Br = Wt[--Vt], Wt[Vt] = null, Qr = Wt[--Vt], Wt[Vt] = null;
  for (; e === zt; ) zt = xe[--Ce], xe[Ce] = null, Be = xe[--Ce], xe[Ce] = null, Ve = xe[--Ce], xe[Ce] = null;
}
var ye = null, ve = null, U = !1, Re = null;
function aa(e, t) {
  var n = Ee(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ve, overflow: Be } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (Co(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ye;
        t && ku(e, t) ? aa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Co(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function hr(e) {
  if (e !== ye) return !1;
  if (!U) return Su(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Co(e)) throw ca(), Error(y(418));
    for (; t; ) aa(e, t), t = st(t.nextSibling);
  }
  if (Su(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function tn() {
  ve = ye = null, U = !1;
}
function ci(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var od = Ze.ReactCurrentBatchConfig;
function yn(e, t, n) {
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
function mr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function fa(e) {
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
    return f = dt(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var C = d.type;
    return C === Dt ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qe && xu(C) === a.type) ? (v = l(a, d.props), v.ref = yn(f, a, d), v.return = f, v) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = yn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, C) {
    return a === null || a.tag !== 7 ? (a = Nt(d, f.mode, v, C), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Rr(a.type, a.key, a.props, null, f.mode, d), d.ref = yn(f, null, a), d.return = f, d;
        case Mt:
          return a = Yl(a, f.mode, d), a.return = f, a;
        case qe:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Sn(a) || dn(a)) return a = Nt(a, f.mode, d, null), a.return = f, a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var C = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === C ? s(f, a, d, v) : null;
        case Mt:
          return d.key === C ? c(f, a, d, v) : null;
        case qe:
          return C = d._init, p(
            f,
            a,
            C(d._payload),
            v
          );
      }
      if (Sn(d) || dn(d)) return C !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, C) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, C);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, C);
        case Mt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, C);
        case qe:
          var k = v._init;
          return w(f, a, d, k(v._payload), C);
      }
      if (Sn(v) || dn(v)) return f = f.get(d) || null, m(a, f, v, C, null);
      mr(a, v);
    }
    return null;
  }
  function g(f, a, d, v) {
    for (var C = null, k = null, N = a, P = a = 0, V = null; N !== null && P < d.length; P++) {
      N.index > P ? (V = N, N = null) : V = N.sibling;
      var L = p(f, N, d[P], v);
      if (L === null) {
        N === null && (N = V);
        break;
      }
      e && N && L.alternate === null && t(f, N), a = o(L, a, P), k === null ? C = L : k.sibling = L, k = L, N = V;
    }
    if (P === d.length) return n(f, N), U && kt(f, P), C;
    if (N === null) {
      for (; P < d.length; P++) N = h(f, d[P], v), N !== null && (a = o(N, a, P), k === null ? C = N : k.sibling = N, k = N);
      return U && kt(f, P), C;
    }
    for (N = r(f, N); P < d.length; P++) V = w(N, f, P, d[P], v), V !== null && (e && V.alternate !== null && N.delete(V.key === null ? P : V.key), a = o(V, a, P), k === null ? C = V : k.sibling = V, k = V);
    return e && N.forEach(function(ze) {
      return t(f, ze);
    }), U && kt(f, P), C;
  }
  function x(f, a, d, v) {
    var C = dn(d);
    if (typeof C != "function") throw Error(y(150));
    if (d = C.call(d), d == null) throw Error(y(151));
    for (var k = C = null, N = a, P = a = 0, V = null, L = d.next(); N !== null && !L.done; P++, L = d.next()) {
      N.index > P ? (V = N, N = null) : V = N.sibling;
      var ze = p(f, N, L.value, v);
      if (ze === null) {
        N === null && (N = V);
        break;
      }
      e && N && ze.alternate === null && t(f, N), a = o(ze, a, P), k === null ? C = ze : k.sibling = ze, k = ze, N = V;
    }
    if (L.done) return n(
      f,
      N
    ), U && kt(f, P), C;
    if (N === null) {
      for (; !L.done; P++, L = d.next()) L = h(f, L.value, v), L !== null && (a = o(L, a, P), k === null ? C = L : k.sibling = L, k = L);
      return U && kt(f, P), C;
    }
    for (N = r(f, N); !L.done; P++, L = d.next()) L = w(N, f, P, L.value, v), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? P : L.key), a = o(L, a, P), k === null ? C = L : k.sibling = L, k = L);
    return e && N.forEach(function(cn) {
      return t(f, cn);
    }), U && kt(f, P), C;
  }
  function O(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Dt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var C = d.key, k = a; k !== null; ) {
              if (k.key === C) {
                if (C = d.type, C === Dt) {
                  if (k.tag === 7) {
                    n(f, k.sibling), a = l(k, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === qe && xu(C) === k.type) {
                  n(f, k.sibling), a = l(k, d.props), a.ref = yn(f, k, d), a.return = f, f = a;
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            d.type === Dt ? (a = Nt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = yn(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Mt:
          e: {
            for (k = d.key; a !== null; ) {
              if (a.key === k) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = Yl(d, f.mode, v), a.return = f, f = a;
          }
          return i(f);
        case qe:
          return k = d._init, O(f, a, k(d._payload), v);
      }
      if (Sn(d)) return g(f, a, d, v);
      if (dn(d)) return x(f, a, d, v);
      mr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Kl(d, f.mode, v), a.return = f, f = a), i(f)) : n(f, a);
  }
  return O;
}
var nn = fa(!0), da = fa(!1), Kr = vt(null), Yr = null, Bt = null, fi = null;
function di() {
  fi = Bt = Yr = null;
}
function pi(e) {
  var t = Kr.current;
  F(Kr), e._currentValue = t;
}
function _o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Jt(e, t) {
  Yr = e, fi = Bt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (fi !== e) if (e = { context: e, memoizedValue: t, next: null }, Bt === null) {
    if (Yr === null) throw Error(y(308));
    Bt = e, Yr.dependencies = { lanes: 0, firstContext: e };
  } else Bt = Bt.next = e;
  return t;
}
var Ct = null;
function hi(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, hi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function mi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ha(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, hi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Nr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ei(e, n);
  }
}
function Cu(e, t) {
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
function Xr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
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
          var g = e, x = u;
          switch (p = t, w = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                h = g.call(w, h, p);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, p = typeof g == "function" ? g.call(w, h, p) : g, p == null) break e;
              h = H({}, h, p);
              break e;
            case 2:
              be = !0;
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
    jt |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Eu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var er = {}, Ae = vt(er), Bn = vt(er), Qn = vt(er);
function Et(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function vi(e, t) {
  switch (M(Qn, t), M(Bn, e), M(Ae, er), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = lo(t, e);
  }
  F(Ae), M(Ae, t);
}
function rn() {
  F(Ae), F(Bn), F(Qn);
}
function ma(e) {
  Et(Qn.current);
  var t = Et(Ae.current), n = lo(t, e.type);
  t !== n && (M(Bn, e), M(Ae, n));
}
function yi(e) {
  Bn.current === e && (F(Ae), F(Bn));
}
var $ = vt(0);
function Gr(e) {
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
var Al = [];
function gi() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Pr = Ze.ReactCurrentDispatcher, Hl = Ze.ReactCurrentBatchConfig, Tt = 0, A = null, Y = null, Z = null, Zr = !1, Tn = !1, Kn = 0, id = 0;
function te() {
  throw Error(y(321));
}
function wi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Me(e[n], t[n])) return !1;
  return !0;
}
function ki(e, t, n, r, l, o) {
  if (Tt = o, A = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pr.current = e === null || e.memoizedState === null ? cd : fd, e = n(r, l), Tn) {
    o = 0;
    do {
      if (Tn = !1, Kn = 0, 25 <= o) throw Error(y(301));
      o += 1, Z = Y = null, t.updateQueue = null, Pr.current = dd, e = n(r, l);
    } while (Tn);
  }
  if (Pr.current = Jr, t = Y !== null && Y.next !== null, Tt = 0, Z = Y = A = null, Zr = !1, t) throw Error(y(300));
  return e;
}
function Si() {
  var e = Kn !== 0;
  return Kn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? A.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Pe() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) Z = t, Y = e;
  else {
    if (e === null) throw Error(y(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, Z === null ? A.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, o = n.pending;
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
      if ((Tt & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, i = r) : s = s.next = h, A.lanes |= m, jt |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Me(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, A.lanes |= o, jt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Me(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function va() {
}
function ya(e, t) {
  var n = A, r = Pe(), l = t(), o = !Me(r.memoizedState, l);
  if (o && (r.memoizedState = l, fe = !0), r = r.queue, xi(ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xn(9, wa.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Tt & 30 || ga(n, t, l);
  }
  return l;
}
function ga(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wa(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sa(t) && xa(e);
}
function ka(e, t, n) {
  return n(function() {
    Sa(t) && xa(e);
  });
}
function Sa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function xa(e) {
  var t = Xe(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function _u(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = ad.bind(null, A, e), [t.memoizedState, e];
}
function Xn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ca() {
  return Pe().memoizedState;
}
function zr(e, t, n, r) {
  var l = Fe();
  A.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r);
}
function cl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (o = i.destroy, r !== null && wi(r, i.deps)) {
      l.memoizedState = Xn(t, n, o, r);
      return;
    }
  }
  A.flags |= e, l.memoizedState = Xn(1 | t, n, o, r);
}
function Nu(e, t) {
  return zr(8390656, 8, e, t);
}
function xi(e, t) {
  return cl(2048, 8, e, t);
}
function Ea(e, t) {
  return cl(4, 2, e, t);
}
function _a(e, t) {
  return cl(4, 4, e, t);
}
function Na(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Pa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(4, 4, Na.bind(null, t, e), n);
}
function Ci() {
}
function za(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ta(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ja(e, t, n) {
  return Tt & 21 ? (Me(n, t) || (n = Ms(), A.lanes |= n, jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function ud(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, Hl.transition = r;
  }
}
function La() {
  return Pe().memoizedState;
}
function sd(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ra(e)) Ia(t, n);
  else if (n = pa(e, t, n, r), n !== null) {
    var l = ue();
    Oe(n, e, r, l), Oa(n, t, r);
  }
}
function ad(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ra(e)) Ia(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, Me(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, hi(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = pa(e, t, l, r), n !== null && (l = ue(), Oe(n, e, r, l), Oa(n, t, r));
  }
}
function Ra(e) {
  var t = e.alternate;
  return e === A || t !== null && t === A;
}
function Ia(e, t) {
  Tn = Zr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Oa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ei(e, n);
  }
}
var Jr = { readContext: Ne, useCallback: te, useContext: te, useEffect: te, useImperativeHandle: te, useInsertionEffect: te, useLayoutEffect: te, useMemo: te, useReducer: te, useRef: te, useState: te, useDebugValue: te, useDeferredValue: te, useTransition: te, useMutableSource: te, useSyncExternalStore: te, useId: te, unstable_isNewReconciler: !1 }, cd = { readContext: Ne, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: Nu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zr(
    4194308,
    4,
    Na.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return zr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return zr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sd.bind(null, A, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: _u, useDebugValue: Ci, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = _u(!1), t = e[0];
  return e = ud.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = A, l = Fe();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Tt & 30 || ga(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Nu(ka.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Xn(9, wa.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = J.identifierPrefix;
  if (U) {
    var n = Be, r = Ve;
    n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = id++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fd = {
  readContext: Ne,
  useCallback: za,
  useContext: Ne,
  useEffect: xi,
  useImperativeHandle: Pa,
  useInsertionEffect: Ea,
  useLayoutEffect: _a,
  useMemo: Ta,
  useReducer: Wl,
  useRef: Ca,
  useState: function() {
    return Wl(Yn);
  },
  useDebugValue: Ci,
  useDeferredValue: function(e) {
    var t = Pe();
    return ja(t, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Wl(Yn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: va,
  useSyncExternalStore: ya,
  useId: La,
  unstable_isNewReconciler: !1
}, dd = { readContext: Ne, useCallback: za, useContext: Ne, useEffect: xi, useImperativeHandle: Pa, useInsertionEffect: Ea, useLayoutEffect: _a, useMemo: Ta, useReducer: Vl, useRef: Ca, useState: function() {
  return Vl(Yn);
}, useDebugValue: Ci, useDeferredValue: function(e) {
  var t = Pe();
  return Y === null ? t.memoizedState = e : ja(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = Vl(Yn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: va, useSyncExternalStore: ya, useId: La, unstable_isNewReconciler: !1 };
function je(e, t) {
  if (e && e.defaultProps) {
    t = H({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function No(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = { isMounted: function(e) {
  return (e = e._reactInternals) ? It(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = ft(e), o = Qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Oe(t, e, l, r), Nr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ue(), l = ft(e), o = Qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Oe(t, e, l, r), Nr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ue(), r = ft(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Oe(t, e, r, n), Nr(t, e, r));
} };
function Pu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !An(n, r) || !An(l, o) : !0;
}
function Ma(e, t, n) {
  var r = !1, l = ht, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = pe(t) ? Pt : le.current, r = t.contextTypes, o = (r = r != null) ? en(e, l) : ht), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function zu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Po(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, mi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = pe(t) ? Pt : le.current, l.context = en(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (No(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), Xr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ln(e, t) {
  try {
    var n = "", r = t;
    do
      n += $c(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var pd = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    br || (br = !0, Uo = r), zo(e, t);
  }, n;
}
function Fa(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      zo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    zo(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Tu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Pd.bind(null, e, t, n), t.then(e, e));
}
function ju(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var hd = Ze.ReactCurrentOwner, fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? da(t, null, n, r) : nn(t, e.child, n, r);
}
function Ru(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Jt(t, l), r = ki(e, t, n, r, o, l), n = Si(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && n && si(t), t.flags |= 1, ie(e, t, r, l), t.child);
}
function Iu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Li(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ua(e, t, o, r, l)) : (e = Rr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : An, n(i, r) && e.ref === t.ref) return Ge(e, t, l);
  }
  return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (An(o, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ge(e, t, l);
  }
  return To(e, t, n, r, l);
}
function $a(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Kt, me), me |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(Kt, me), me |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, M(Kt, me), me |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, M(Kt, me), me |= r;
  return ie(e, t, l, n), t.child;
}
function Aa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function To(e, t, n, r, l) {
  var o = pe(n) ? Pt : le.current;
  return o = en(t, o), Jt(t, l), n = ki(e, t, n, r, o, l), r = Si(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && r && si(t), t.flags |= 1, ie(e, t, n, l), t.child);
}
function Ou(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Vr(t);
  } else o = !1;
  if (Jt(t, l), t.stateNode === null) Tr(e, t), Ma(t, n, r), Po(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ne(c) : (c = pe(n) ? Pt : le.current, c = en(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && zu(t, i, r, c), be = !1;
    var p = t.memoizedState;
    i.state = p, Xr(t, r, i, l), s = t.memoizedState, u !== r || p !== s || de.current || be ? (typeof m == "function" && (No(t, n, m, r), s = t.memoizedState), (u = be || Pu(t, n, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, ha(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : je(t.type, u), i.props = c, h = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ne(s) : (s = pe(n) ? Pt : le.current, s = en(t, s));
    var w = n.getDerivedStateFromProps;
    (m = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && zu(t, i, r, s), be = !1, p = t.memoizedState, i.state = p, Xr(t, r, i, l);
    var g = t.memoizedState;
    u !== h || p !== g || de.current || be ? (typeof w == "function" && (No(t, n, w, r), g = t.memoizedState), (c = be || Pu(t, n, c, r, p, g, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return jo(e, t, n, r, o, l);
}
function jo(e, t, n, r, l, o) {
  Aa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && wu(t, n, !1), Ge(e, t, o);
  r = t.stateNode, hd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = nn(t, e.child, null, o), t.child = nn(t, null, u, o)) : ie(e, t, u, o), t.memoizedState = r.state, l && wu(t, n, !0), t.child;
}
function Ha(e) {
  var t = e.stateNode;
  t.pendingContext ? gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && gu(e, t.context, !1), vi(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return tn(), ci(l), t.flags |= 256, ie(e, t, n, r), t.child;
}
var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wa(e, t, n) {
  var r = t.pendingProps, l = $.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M($, l & 1), e === null)
    return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = hl(i, r, 0, null), e = Nt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ro(n), t.memoizedState = Lo, e) : Ei(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return md(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = dt(u, o) : (o = Nt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ro(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Lo, r;
  }
  return o = e.child, e = o.sibling, r = dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ei(e, t) {
  return t = hl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vr(e, t, n, r) {
  return r !== null && ci(r), nn(t, e.child, null, n), e = Ei(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function md(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Bl(Error(y(422))), vr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = hl({ mode: "visible", children: r.children }, l, 0, null), o = Nt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && nn(t, e.child, null, i), t.child.memoizedState = Ro(i), t.memoizedState = Lo, o);
  if (!(t.mode & 1)) return vr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(y(419)), r = Bl(o, r, void 0), vr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, fe || u) {
    if (r = J, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Xe(e, l), Oe(r, e, l, -1));
    }
    return ji(), r = Bl(Error(y(421))), vr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ve = st(l.nextSibling), ye = t, U = !0, Re = null, e !== null && (xe[Ce++] = Ve, xe[Ce++] = Be, xe[Ce++] = zt, Ve = e.id, Be = e.overflow, zt = t), t = Ei(t, r.children), t.flags |= 4096, t);
}
function Du(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _o(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Va(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ie(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
      else if (e.tag === 19) Du(e, n, t);
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
  if (M($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Gr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Gr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ql(t, !0, n, null, o);
      break;
    case "together":
      Ql(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function vd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ha(t), tn();
      break;
    case 5:
      ma(t);
      break;
    case 1:
      pe(t.type) && Vr(t);
      break;
    case 4:
      vi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      M(Kr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (M($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wa(e, t, n) : (M($, $.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Va(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, $a(e, t, n);
  }
  return Ge(e, t, n);
}
var Ba, Io, Qa, Ka;
Ba = function(e, t) {
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
Io = function() {
};
Qa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Et(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      case "select":
        l = H({}, l, { value: void 0 }), r = H({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    oo(n, r);
    var i;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (In.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (In.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ka = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U) switch (e.tailMode) {
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
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yd(e, t, n) {
  var r = t.pendingProps;
  switch (ai(t), t.tag) {
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
      return ne(t), null;
    case 1:
      return pe(t.type) && Wr(), ne(t), null;
    case 3:
      return r = t.stateNode, rn(), F(de), F(le), gi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Ho(Re), Re = null))), Io(e, t), ne(t), null;
    case 5:
      yi(t);
      var l = Et(Qn.current);
      if (n = t.type, e !== null && t.stateNode != null) Qa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (e = Et(Ae.current), hr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ue] = t, r[Vn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) D(Cn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Qi(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              Yi(r, o), D("invalid", r);
          }
          oo(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && pr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && pr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : In.hasOwnProperty(i) && u != null && i === "onScroll" && D("scroll", r);
          }
          switch (n) {
            case "input":
              or(r), Ki(r, o, !0);
              break;
            case "textarea":
              or(r), Xi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Hr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ks(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Vn] = r, Ba(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = io(n, r), n) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) D(Cn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Qi(e, r), l = eo(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = H({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Yi(e, r), l = ro(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            oo(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Cs(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ss(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && On(e, s) : typeof s == "number" && On(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (In.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Xo(e, o, s, i));
            }
            switch (n) {
              case "input":
                or(e), Ki(e, r, !1);
                break;
              case "textarea":
                or(e), Xi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yt(e, !!r.multiple, o, !1) : r.defaultValue != null && Yt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
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
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ka(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Et(Qn.current), Et(Ae.current), hr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return ne(t), null;
    case 13:
      if (F($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) ca(), tn(), t.flags |= 98560, o = !1;
        else if (o = hr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Ue] = t;
          } else tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ne(t), o = !1;
        } else Re !== null && (Ho(Re), Re = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? X === 0 && (X = 3) : ji())), t.updateQueue !== null && (t.flags |= 4), ne(t), null);
    case 4:
      return rn(), Io(e, t), e === null && Hn(t.stateNode.containerInfo), ne(t), null;
    case 10:
      return pi(t.type._context), ne(t), null;
    case 17:
      return pe(t.type) && Wr(), ne(t), null;
    case 19:
      if (F($), o = t.memoizedState, o === null) return ne(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) gn(o, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Gr(e), i !== null) {
            for (t.flags |= 128, gn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return M($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Q() > on && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Gr(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !U) return ne(t), null;
        } else 2 * Q() - o.renderingStartTime > on && n !== 1073741824 && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = $.current, M($, r ? n & 1 | 2 : n & 1), t) : (ne(t), null);
    case 22:
    case 23:
      return Ti(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function gd(e, t) {
  switch (ai(t), t.tag) {
    case 1:
      return pe(t.type) && Wr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return rn(), F(de), F(le), gi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return yi(t), null;
    case 13:
      if (F($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F($), null;
    case 4:
      return rn(), null;
    case 10:
      return pi(t.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, re = !1, wd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Oo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Fu = !1;
function kd(e, t) {
  if (yo = Ur, e = Js(), ui(e)) {
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
  for (go = { focusedElem: e, selectionRange: n }, Ur = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, O = g.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : je(t.type, x), O);
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
      W(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return g = Fu, Fu = !1, g;
}
function jn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Oo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
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
function Mo(e) {
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
function Ya(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ya(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Vn], delete t[So], delete t[nd], delete t[rd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xa(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Do(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), e = e.sibling;
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), e = e.sibling;
}
var q = null, Le = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ga(e, t, n), n = n.sibling;
}
function Ga(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function") try {
    $e.onCommitFiberUnmount(ll, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      re || Qt(n, t);
    case 6:
      var r = q, l = Le;
      q = null, Je(e, t, n), q = r, Le = l, q !== null && (Le ? (e = q, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null && (Le ? (e = q, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Un(e)) : Ul(q, n.stateNode));
      break;
    case 4:
      r = q, l = Le, q = n.stateNode.containerInfo, Le = !0, Je(e, t, n), q = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Oo(n, t, i), l = l.next;
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!re && (Qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        W(n, t, u);
      }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (re = (r = re) || n.memoizedState !== null, Je(e, t, n), re = r) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function $u(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wd()), t.forEach(function(r) {
      var l = Td.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            q = u.stateNode, Le = !1;
            break e;
          case 3:
            q = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            q = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (q === null) throw Error(y(160));
      Ga(o, i, l), q = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      W(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Za(t, e), t = t.sibling;
}
function Za(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Te(t, e), De(e), r & 4) {
        try {
          jn(3, e, e.return), dl(3, e);
        } catch (x) {
          W(e, e.return, x);
        }
        try {
          jn(5, e, e.return);
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 1:
      Te(t, e), De(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (Te(t, e), De(e), r & 512 && n !== null && Qt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (x) {
          W(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && gs(l, o), io(u, i);
          var c = io(u, o);
          for (i = 0; i < s.length; i += 2) {
            var m = s[i], h = s[i + 1];
            m === "style" ? Cs(l, h) : m === "dangerouslySetInnerHTML" ? Ss(l, h) : m === "children" ? On(l, h) : Xo(l, m, h, c);
          }
          switch (u) {
            case "input":
              to(l, o);
              break;
            case "textarea":
              ws(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var w = o.value;
              w != null ? Yt(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? Yt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Yt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Vn] = o;
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 6:
      if (Te(t, e), De(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (x) {
          W(e, e.return, x);
        }
      }
      break;
    case 3:
      if (Te(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Un(t.containerInfo);
      } catch (x) {
        W(e, e.return, x);
      }
      break;
    case 4:
      Te(t, e), De(e);
      break;
    case 13:
      Te(t, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Pi = Q())), r & 4 && $u(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (re = (c = re) || m, Te(t, e), re = c) : Te(t, e), De(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (E = e, m = e.child; m !== null; ) {
          for (h = E = m; E !== null; ) {
            switch (p = E, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                jn(4, p, p.return);
                break;
              case 1:
                Qt(p, p.return);
                var g = p.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (x) {
                    W(r, n, x);
                  }
                }
                break;
              case 5:
                Qt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Hu(h);
                  continue;
                }
            }
            w !== null ? (w.return = p, E = w) : Hu(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xs("display", i));
              } catch (x) {
                W(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (x) {
              W(e, e.return, x);
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
      Te(t, e), De(e), r & 4 && $u(e);
      break;
    case 21:
      break;
    default:
      Te(
        t,
        e
      ), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xa(n)) {
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
          r.flags & 32 && (On(l, ""), r.flags &= -33);
          var o = Uu(e);
          Fo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Uu(e);
          Do(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sd(e, t, n) {
  E = e, Ja(e);
}
function Ja(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || yr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || re;
        u = yr;
        var c = re;
        if (yr = i, (re = s) && !c) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? Wu(l) : s !== null ? (s.return = i, E = s) : Wu(l);
        for (; o !== null; ) E = o, Ja(o), o = o.sibling;
        E = l, yr = u, re = c;
      }
      Au(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Au(e);
  }
}
function Au(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            re || dl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !re) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Eu(t, o, r);
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
              Eu(t, i, n);
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
                  h !== null && Un(h);
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
        re || t.flags & 512 && Mo(t);
      } catch (p) {
        W(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Hu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Wu(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mo(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mo(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var xd = Math.ceil, qr = Ze.ReactCurrentDispatcher, _i = Ze.ReactCurrentOwner, _e = Ze.ReactCurrentBatchConfig, R = 0, J = null, K = null, b = 0, me = 0, Kt = vt(0), X = 0, Gn = null, jt = 0, pl = 0, Ni = 0, Ln = null, ce = null, Pi = 0, on = 1 / 0, He = null, br = !1, Uo = null, ct = null, gr = !1, rt = null, el = 0, Rn = 0, $o = null, jr = -1, Lr = 0;
function ue() {
  return R & 6 ? Q() : jr !== -1 ? jr : jr = Q();
}
function ft(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : od.transition !== null ? (Lr === 0 && (Lr = Ms()), Lr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ws(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < Rn) throw Rn = 0, $o = null, Error(y(185));
  Jn(e, n, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (pl |= n), X === 4 && tt(e, b)), he(e, r), n === 1 && R === 0 && !(t.mode & 1) && (on = Q() + 500, al && yt()));
}
function he(e, t) {
  var n = e.callbackNode;
  lf(e, t);
  var r = Fr(e, e === J ? b : 0);
  if (r === 0) n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ji(n), t === 1) e.tag === 0 ? ld(Vu.bind(null, e)) : ua(Vu.bind(null, e)), ed(function() {
      !(R & 6) && yt();
    }), n = null;
    else {
      switch (Ds(r)) {
        case 1:
          n = bo;
          break;
        case 4:
          n = Is;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Os;
          break;
        default:
          n = Dr;
      }
      n = oc(n, qa.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function qa(e, t) {
  if (jr = -1, Lr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Fr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = ec();
    (J !== e || b !== t) && (He = null, on = Q() + 500, _t(e, t));
    do
      try {
        _d();
        break;
      } catch (u) {
        ba(e, u);
      }
    while (!0);
    di(), qr.current = o, R = l, K !== null ? t = 0 : (J = null, b = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = fo(e), l !== 0 && (r = l, t = Ao(e, l))), t === 1) throw n = Gn, _t(e, 0), tt(e, r), he(e, Q()), n;
    if (t === 6) tt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Cd(l) && (t = tl(e, r), t === 2 && (o = fo(e), o !== 0 && (r = o, t = Ao(e, o))), t === 1)) throw n = Gn, _t(e, 0), tt(e, r), he(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          St(e, ce, He);
          break;
        case 3:
          if (tt(e, r), (r & 130023424) === r && (t = Pi + 500 - Q(), 10 < t)) {
            if (Fr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ko(St.bind(null, e, ce, He), t);
            break;
          }
          St(e, ce, He);
          break;
        case 4:
          if (tt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ko(St.bind(null, e, ce, He), r);
            break;
          }
          St(e, ce, He);
          break;
        case 5:
          St(e, ce, He);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, Q()), e.callbackNode === n ? qa.bind(null, e) : null;
}
function Ao(e, t) {
  var n = Ln;
  return e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256), e = tl(e, t), e !== 2 && (t = ce, ce = n, t !== null && Ho(t)), e;
}
function Ho(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Cd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Me(o(), l)) return !1;
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
function tt(e, t) {
  for (t &= ~Ni, t &= ~pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ie(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Vu(e) {
  if (R & 6) throw Error(y(327));
  qt();
  var t = Fr(e, 0);
  if (!(t & 1)) return he(e, Q()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fo(e);
    r !== 0 && (t = r, n = Ao(e, r));
  }
  if (n === 1) throw n = Gn, _t(e, 0), tt(e, t), he(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ce, He), he(e, Q()), null;
}
function zi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (on = Q() + 500, al && yt());
  }
}
function Lt(e) {
  rt !== null && rt.tag === 0 && !(R & 6) && qt();
  var t = R;
  R |= 1;
  var n = _e.transition, r = I;
  try {
    if (_e.transition = null, I = 1, e) return e();
  } finally {
    I = r, _e.transition = n, R = t, !(R & 6) && yt();
  }
}
function Ti() {
  me = Kt.current, F(Kt);
}
function _t(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, bf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (ai(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Wr();
        break;
      case 3:
        rn(), F(de), F(le), gi();
        break;
      case 5:
        yi(r);
        break;
      case 4:
        rn();
        break;
      case 13:
        F($);
        break;
      case 19:
        F($);
        break;
      case 10:
        pi(r.type._context);
        break;
      case 22:
      case 23:
        Ti();
    }
    n = n.return;
  }
  if (J = e, K = e = dt(e.current, null), b = me = t, X = 0, Gn = null, Ni = pl = jt = 0, ce = Ln = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++) if (n = Ct[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Ct = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = K;
    try {
      if (di(), Pr.current = Jr, Zr) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Zr = !1;
      }
      if (Tt = 0, Z = Y = A = null, Tn = !1, Kn = 0, _i.current = null, n === null || n.return === null) {
        X = 1, Gn = t, K = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = b, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var w = ju(i);
          if (w !== null) {
            w.flags &= -257, Lu(w, i, u, o, t), w.mode & 1 && Tu(o, c, t), t = w, s = c;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(s), t.updateQueue = x;
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Tu(o, c, t), ji();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var O = ju(i);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256), Lu(O, i, u, o, t), ci(ln(s, u));
            break e;
          }
        }
        o = s = ln(s, u), X !== 4 && (X = 2), Ln === null ? Ln = [o] : Ln.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Da(o, s, t);
              Cu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Fa(o, u, t);
                Cu(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nc(n);
    } catch (C) {
      t = C, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ec() {
  var e = qr.current;
  return qr.current = Jr, e === null ? Jr : e;
}
function ji() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(jt & 268435455) && !(pl & 268435455) || tt(J, b);
}
function tl(e, t) {
  var n = R;
  R |= 2;
  var r = ec();
  (J !== e || b !== t) && (He = null, _t(e, t));
  do
    try {
      Ed();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (!0);
  if (di(), R = n, qr.current = r, K !== null) throw Error(y(261));
  return J = null, b = 0, X;
}
function Ed() {
  for (; K !== null; ) tc(K);
}
function _d() {
  for (; K !== null && !Gc(); ) tc(K);
}
function tc(e) {
  var t = lc(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, t === null ? nc(e) : K = t, _i.current = null;
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = gd(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = yd(n, t, me), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function St(e, t, n) {
  var r = I, l = _e.transition;
  try {
    _e.transition = null, I = 1, Nd(e, t, n, r);
  } finally {
    _e.transition = l, I = r;
  }
  return null;
}
function Nd(e, t, n, r) {
  do
    qt();
  while (rt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (of(e, o), e === J && (K = J = null, b = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0, oc(Dr, function() {
    return qt(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = _e.transition, _e.transition = null;
    var i = I;
    I = 1;
    var u = R;
    R |= 4, _i.current = null, kd(e, n), Za(n, e), Kf(go), Ur = !!yo, go = yo = null, e.current = n, Sd(n), Zc(), R = u, I = i, _e.transition = o;
  } else e.current = n;
  if (gr && (gr = !1, rt = e, el = l), o = e.pendingLanes, o === 0 && (ct = null), bc(n.stateNode), he(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (br) throw br = !1, e = Uo, Uo = null, e;
  return el & 1 && e.tag !== 0 && qt(), o = e.pendingLanes, o & 1 ? e === $o ? Rn++ : (Rn = 0, $o = e) : Rn = 0, yt(), null;
}
function qt() {
  if (rt !== null) {
    var e = Ds(el), t = _e.transition, n = I;
    try {
      if (_e.transition = null, I = 16 > e ? 16 : e, rt === null) var r = !1;
      else {
        if (e = rt, rt = null, el = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jn(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, E = h;
                  else for (; E !== null; ) {
                    m = E;
                    var p = m.sibling, w = m.return;
                    if (Ya(m), m === c) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, E = p;
                      break;
                    }
                    E = w;
                  }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var O = x.sibling;
                    x.sibling = null, x = O;
                  } while (x !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
          else e: for (; E !== null; ) {
            if (o = E, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                jn(9, o, o.return);
            }
            var f = o.sibling;
            if (f !== null) {
              f.return = o.return, E = f;
              break e;
            }
            E = o.return;
          }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, E = d;
          else e: for (i = a; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dl(9, u);
              }
            } catch (C) {
              W(u, u.return, C);
            }
            if (u === i) {
              E = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, E = v;
              break e;
            }
            E = u.return;
          }
        }
        if (R = l, yt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
          $e.onPostCommitFiberRoot(ll, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, _e.transition = t;
    }
  }
  return !1;
}
function Bu(e, t, n) {
  t = ln(n, t), t = Da(e, t, 1), e = at(e, t, 1), t = ue(), e !== null && (Jn(e, 1, t), he(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Bu(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Bu(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = ln(n, e), e = Fa(t, e, 1), t = at(t, e, 1), e = ue(), t !== null && (Jn(t, 1, e), he(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Pd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, J === e && (b & n) === n && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Pi ? _t(e, 0) : Ni |= n), he(e, t);
}
function rc(e, t) {
  t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
  var n = ue();
  e = Xe(e, t), e !== null && (Jn(e, t, n), he(e, n));
}
function zd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function Td(e, t) {
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
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, vd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, U && t.flags & 1048576 && sa(t, Qr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Tr(e, t), e = t.pendingProps;
      var l = en(t, le.current);
      Jt(t, n), l = ki(null, t, r, e, l, n);
      var o = Si();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = !0, Vr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mi(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, Po(t, r, e, n), t = jo(null, t, r, !0, o, n)) : (t.tag = 0, U && o && si(t), ie(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Ld(r), e = je(r, e), l) {
          case 0:
            t = To(null, t, r, e, n);
            break e;
          case 1:
            t = Ou(null, t, r, e, n);
            break e;
          case 11:
            t = Ru(null, t, r, e, n);
            break e;
          case 14:
            t = Iu(null, t, r, je(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), To(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ou(e, t, r, l, n);
    case 3:
      e: {
        if (Ha(t), e === null) throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, ha(e, t), Xr(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = ln(Error(y(423)), t), t = Mu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = ln(Error(y(424)), t), t = Mu(e, t, r, n, l);
          break e;
        } else for (ve = st(t.stateNode.containerInfo.firstChild), ye = t, U = !0, Re = null, n = da(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (tn(), r === l) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ma(t), e === null && Eo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, wo(r, l) ? i = null : o !== null && wo(r, o) && (t.flags |= 32), Aa(e, t), ie(e, t, i, n), t.child;
    case 6:
      return e === null && Eo(t), null;
    case 13:
      return Wa(e, t, n);
    case 4:
      return vi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nn(t, null, r, n) : ie(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Ru(e, t, r, l, n);
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, M(Kr, r._currentValue), r._currentValue = i, o !== null) if (Me(o.value, i)) {
          if (o.children === l.children && !de.current) {
            t = Ge(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Qe(-1, n & -n), s.tag = 2;
                  var c = o.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), _o(
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
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), _o(i, n, t), i = o.sibling;
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
        ie(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Jt(t, n), l = Ne(l), r = r(l), t.flags |= 1, ie(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), Iu(e, t, r, l, n);
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Tr(e, t), t.tag = 1, pe(r) ? (e = !0, Vr(t)) : e = !1, Jt(t, n), Ma(t, r, l), Po(t, r, l, n), jo(null, t, r, !0, e, n);
    case 19:
      return Va(e, t, n);
    case 22:
      return $a(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function oc(e, t) {
  return Rs(e, t);
}
function jd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, t, n, r) {
  return new jd(e, t, n, r);
}
function Li(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ld(e) {
  if (typeof e == "function") return Li(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zo) return 11;
    if (e === Jo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") Li(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case Dt:
      return Nt(n.children, l, o, t);
    case Go:
      i = 8, l |= 8;
      break;
    case Zl:
      return e = Ee(12, n, t, l | 2), e.elementType = Zl, e.lanes = o, e;
    case Jl:
      return e = Ee(13, n, t, l), e.elementType = Jl, e.lanes = o, e;
    case ql:
      return e = Ee(19, n, t, l), e.elementType = ql, e.lanes = o, e;
    case ms:
      return hl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ps:
          i = 10;
          break e;
        case hs:
          i = 9;
          break e;
        case Zo:
          i = 11;
          break e;
        case Jo:
          i = 14;
          break e;
        case qe:
          i = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = Ee(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Nt(e, t, n, r) {
  return e = Ee(7, e, r, t), e.lanes = n, e;
}
function hl(e, t, n, r) {
  return e = Ee(22, e, r, t), e.elementType = ms, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = Ee(6, e, null, t), e.lanes = n, e;
}
function Yl(e, t, n) {
  return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ri(e, t, n, r, l, o, i, u, s) {
  return e = new Rd(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ee(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mi(o), e;
}
function Id(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ic(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n)) return ia(e, n, t);
  }
  return t;
}
function uc(e, t, n, r, l, o, i, u, s) {
  return e = Ri(n, r, !0, e, l, o, i, u, s), e.context = ic(null), n = e.current, r = ue(), l = ft(n), o = Qe(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, Jn(e, l, r), he(e, r), e;
}
function ml(e, t, n, r) {
  var l = t.current, o = ue(), i = ft(l);
  return n = ic(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, i), e !== null && (Oe(e, l, i, o), Nr(e, l, i)), i;
}
function nl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qu(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ii(e, t) {
  Qu(e, t), (e = e.alternate) && Qu(e, t);
}
function Od() {
  return null;
}
var sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oi(e) {
  this._internalRoot = e;
}
vl.prototype.render = Oi.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
vl.prototype.unmount = Oi.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function() {
      ml(null, e, null, null);
    }), t[Ye] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $s();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++) ;
    et.splice(n, 0, e), n === 0 && Hs(e);
  }
};
function Mi(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ku() {
}
function Md(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = nl(i);
        o.call(c);
      };
    }
    var i = uc(t, r, e, 0, null, !1, !1, "", Ku);
    return e._reactRootContainer = i, e[Ye] = i.current, Hn(e.nodeType === 8 ? e.parentNode : e), Lt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Ri(e, 0, !1, null, null, !1, !1, "", Ku);
  return e._reactRootContainer = s, e[Ye] = s.current, Hn(e.nodeType === 8 ? e.parentNode : e), Lt(function() {
    ml(t, s, n, r);
  }), s;
}
function gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = nl(i);
        u.call(s);
      };
    }
    ml(t, i, e, l);
  } else i = Md(n, t, e, l, r);
  return nl(i);
}
Fs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (ei(t, n | 1), he(t, Q()), !(R & 6) && (on = Q() + 500, yt()));
      }
      break;
    case 13:
      Lt(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ue();
          Oe(r, e, 1, l);
        }
      }), Ii(e, 1);
  }
};
ti = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ue();
      Oe(t, e, 134217728, n);
    }
    Ii(e, 134217728);
  }
};
Us = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = ue();
      Oe(n, e, t, r);
    }
    Ii(e, t);
  }
};
$s = function() {
  return I;
};
As = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
so = function(e, t, n) {
  switch (t) {
    case "input":
      if (to(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ys(r), to(r, l);
          }
        }
      }
      break;
    case "textarea":
      ws(e, n);
      break;
    case "select":
      t = n.value, t != null && Yt(e, !!n.multiple, t, !1);
  }
};
Ns = zi;
Ps = Lt;
var Dd = { usingClientEntryPoint: !1, Events: [bn, At, sl, Es, _s, zi] }, wn = { findFiberByHostInstance: xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Fd = { bundleType: wn.bundleType, version: wn.version, rendererPackageName: wn.rendererPackageName, rendererConfig: wn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = js(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wn.findFiberByHostInstance || Od, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber) try {
    ll = wr.inject(Fd), $e = wr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(t)) throw Error(y(200));
  return Id(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Mi(e)) throw Error(y(299));
  var n = !1, r = "", l = sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ri(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Hn(e.nodeType === 8 ? e.parentNode : e), new Oi(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = js(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Lt(e);
};
we.hydrate = function(e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Mi(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, l, !1, o, i), e[Ye] = t.current, Hn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new vl(t);
};
we.render = function(e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return gl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Lt(function() {
    gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = zi;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), as.exports = we;
var Ud = as.exports, cc, Yu = Ud;
cc = Yu.createRoot, Yu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $d = {
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
const Ad = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Se = (e, t) => {
  const n = oe.forwardRef(
    ({
      color: r = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: s,
      ...c
    }, m) => oe.createElement(
      "svg",
      {
        ref: m,
        ...$d,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${Ad(e)}`, u].join(" "),
        ...c
      },
      [
        ...t.map(([h, p]) => oe.createElement(h, p)),
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
const Hd = Se("AlertCircle", [
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
const Wd = Se("ExternalLink", [
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
const Vd = Se("Globe", [
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
const Bd = Se("Monitor", [
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
const Xu = Se("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = Se("RefreshCw", [
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
const Gu = Se("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = Se("Save", [
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
const Yd = Se("Server", [
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
const Zu = Se("Settings", [
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
const Xd = Se("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = Se("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = Se("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), lt = {
  HOST: "hermes_webui_host",
  PORT: "hermes_webui_port",
  PASSWORD: "hermes_webui_password",
  AUTO_CONNECT: "hermes_webui_auto_connect"
};
function Di() {
  var e, t, n, r;
  return typeof window > "u" ? !1 : !!((t = (e = window.Capacitor) == null ? void 0 : e.isNativePlatform) != null && t.call(e) || (n = window.Capacitor) != null && n.isNative || typeof ((r = window.Capacitor) == null ? void 0 : r.getPlatform) == "function" && window.Capacitor.getPlatform() !== "web" || navigator.userAgent.includes("Android") || navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad"));
}
function Jd() {
  return typeof window < "u" && window.location && window.location.hostname && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" ? window.location.hostname : Di() ? "192.168.1.160" : "127.0.0.1";
}
const Xl = {
  host: "127.0.0.1",
  port: "8787",
  password: "Jm*q*QO#tgPjXWqO5C8ePLl1tQj1^ol6%",
  autoConnect: !0
};
function qd() {
  if (typeof window > "u") return Xl;
  const e = localStorage.getItem(lt.HOST), t = Jd();
  return {
    host: e || t,
    port: localStorage.getItem(lt.PORT) || Xl.port,
    password: localStorage.getItem(lt.PASSWORD) || Xl.password,
    autoConnect: localStorage.getItem(lt.AUTO_CONNECT) !== "false"
  };
}
function kr(e) {
  typeof window > "u" || (e.host !== void 0 && localStorage.setItem(lt.HOST, e.host), e.port !== void 0 && localStorage.setItem(lt.PORT, e.port), e.password !== void 0 && localStorage.setItem(lt.PASSWORD, e.password), e.autoConnect !== void 0 && localStorage.setItem(lt.AUTO_CONNECT, String(e.autoConnect)));
}
function bd() {
  try {
    if (typeof window < "u" && typeof window.require == "function")
      return window.require("child_process");
  } catch {
  }
  return null;
}
async function Fi(e) {
  var r, l;
  const t = bd();
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
  const n = Di() ? "10.0.2.2" : "127.0.0.1";
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
async function Ju(e, t) {
  var n, r;
  if (typeof window < "u" && ((r = (n = window.Capacitor) == null ? void 0 : n.Plugins) != null && r.CapacitorHttp))
    try {
      const l = await window.Capacitor.Plugins.CapacitorHttp.request({
        method: "GET",
        url: `http://${e}:${t}/login`,
        headers: {}
      });
      if (l.status >= 200 && l.status < 500)
        return { online: !0, statusCode: l.status };
    } catch (l) {
      console.warn("[HermesWebUI] CapacitorHttp probe error:", l);
    }
  try {
    if (typeof window < "u" && typeof window.require == "function") {
      const l = window.require("http");
      if (l && typeof l.get == "function")
        return new Promise((o) => {
          const i = l.get(`http://${e}:${t}/login`, { timeout: 2e3 }, (u) => {
            o({ online: !0, statusCode: u.statusCode });
          });
          i.on("error", () => o({ online: !1 })), i.on("timeout", () => {
            i.destroy(), o({ online: !1 });
          });
        });
    }
  } catch {
  }
  try {
    const l = new AbortController(), o = setTimeout(() => l.abort(), 2e3);
    return await fetch(`http://${e}:${t}/login`, { signal: l.signal, mode: "no-cors" }), clearTimeout(o), { online: !0 };
  } catch (l) {
    return { online: !1, error: l.message };
  }
}
async function ep() {
  return await Fi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh start");
}
async function tp() {
  return await Fi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh stop");
}
async function np() {
  return await Fi("cd /Users/blackbird/.hermes/hermes-webui && ./ctl.sh restart");
}
function rp() {
  const [e, t] = oe.useState(qd), [n, r] = oe.useState({ online: !1, checking: !0, lastCheck: Date.now() }), [l, o] = oe.useState(!1), [i, u] = oe.useState(!1), [s, c] = oe.useState(null), [m, h] = oe.useState(1), p = oe.useRef(null), w = Di(), g = oe.useCallback(async () => {
    r((N) => ({ ...N, checking: !0 }));
    let k = await Ju(e.host, e.port);
    if (!k.online && w && e.host === "127.0.0.1") {
      const N = await Ju("10.0.2.2", e.port);
      if (N.online) {
        const P = { ...e, host: "10.0.2.2" };
        t(P), kr(P), k = N;
      }
    }
    r({ online: k.online, checking: !1, statusCode: k.statusCode, lastCheck: Date.now() });
  }, [e, w]);
  oe.useEffect(() => {
    g();
    const k = setInterval(g, 8e3);
    return () => clearInterval(k);
  }, [g]);
  const x = () => {
    p.current && clearTimeout(p.current), o(!0);
  }, O = () => {
    w || (p.current = setTimeout(() => {
      o(!1);
    }, 400));
  }, f = async () => {
    c("start");
    try {
      await ep(), setTimeout(g, 2e3);
    } finally {
      c(null);
    }
  }, a = async () => {
    c("stop");
    try {
      await tp(), setTimeout(g, 1500);
    } finally {
      c(null);
    }
  }, d = async () => {
    c("restart");
    try {
      await np(), setTimeout(g, 2500);
    } finally {
      c(null);
    }
  }, v = () => {
    h((k) => k + 1), g();
  }, C = `http://${e.host}:${e.port}`;
  return /* @__PURE__ */ S.jsxs(
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
        !w && /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "hermes-top-hover-zone",
            onMouseEnter: x,
            onMouseLeave: O,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 36,
              zIndex: 100
            },
            children: /* @__PURE__ */ S.jsx("div", { className: "hermes-top-edge-indicator" })
          }
        ),
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `hermes-floating-navbar ${l || w ? "visible" : ""}`,
            onMouseEnter: x,
            onMouseLeave: O,
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
              /* @__PURE__ */ S.jsxs("div", { className: "hermes-nav-status", children: [
                /* @__PURE__ */ S.jsx(Yd, { size: 14, color: "#10b981" }),
                /* @__PURE__ */ S.jsx("span", { className: `status-dot ${n.checking ? "checking" : n.online ? "online" : "offline"}` }),
                /* @__PURE__ */ S.jsx("span", { style: { fontSize: "11px", fontWeight: "600" }, children: n.online ? `Hermes (${e.host}:${e.port})` : "Offline" })
              ] }),
              /* @__PURE__ */ S.jsxs("div", { className: "hermes-nav-actions", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
                n.online ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                  /* @__PURE__ */ S.jsxs(
                    "button",
                    {
                      className: "hermes-btn",
                      onClick: d,
                      disabled: !!s,
                      title: "Restart Hermes WebUI Daemon",
                      style: { padding: "4px 8px", fontSize: "11px" },
                      children: [
                        /* @__PURE__ */ S.jsx(Gu, { size: 11, className: s === "restart" ? "animate-spin" : "" }),
                        /* @__PURE__ */ S.jsx("span", { children: "Restart" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ S.jsxs(
                    "button",
                    {
                      className: "hermes-btn danger",
                      onClick: a,
                      disabled: !!s,
                      title: "Stop Hermes WebUI Daemon",
                      style: { padding: "4px 8px", fontSize: "11px" },
                      children: [
                        /* @__PURE__ */ S.jsx(Gd, { size: 11 }),
                        /* @__PURE__ */ S.jsx("span", { children: "Stop" })
                      ]
                    }
                  )
                ] }) : /* @__PURE__ */ S.jsxs(
                  "button",
                  {
                    className: "hermes-btn primary",
                    onClick: f,
                    disabled: !!s,
                    title: "Start Hermes WebUI Daemon",
                    style: { padding: "4px 10px", fontSize: "11px", backgroundColor: "#10b981", color: "#030712" },
                    children: [
                      /* @__PURE__ */ S.jsx(Xu, { size: 11 }),
                      /* @__PURE__ */ S.jsx("span", { children: "Start Server" })
                    ]
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  "button",
                  {
                    className: "hermes-btn",
                    onClick: v,
                    title: "Reload Iframe",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ S.jsx(Qd, { size: 11 })
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  "a",
                  {
                    href: C,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "hermes-btn",
                    title: "Open in Browser Window",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ S.jsx(Wd, { size: 11 })
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  "button",
                  {
                    className: "hermes-btn",
                    onClick: () => u(!0),
                    title: "Host & Port Settings",
                    style: { padding: "4px 8px" },
                    children: /* @__PURE__ */ S.jsx(Zu, { size: 11 })
                  }
                )
              ] })
            ]
          }
        ),
        n.online ? /* @__PURE__ */ S.jsx(
          "iframe",
          {
            src: C,
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
        ) : /* @__PURE__ */ S.jsxs("div", { style: {
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
          /* @__PURE__ */ S.jsx("div", { style: {
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2))",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }, children: /* @__PURE__ */ S.jsx(Hd, { size: 28, color: "#f87171" }) }),
          /* @__PURE__ */ S.jsx("h2", { style: { fontSize: "20px", fontWeight: "700", margin: "0 0 8px 0", color: "#f8fafc" }, children: "Hermes Server Offline" }),
          /* @__PURE__ */ S.jsxs("p", { style: { fontSize: "13px", color: "#94a3b8", maxWidth: "380px", margin: "0 0 24px 0", lineHeight: "1.5" }, children: [
            "Could not reach Hermes WebUI at ",
            /* @__PURE__ */ S.jsxs("code", { style: { color: "#38bdf8", background: "rgba(56, 189, 248, 0.1)", padding: "2px 6px", borderRadius: "4px" }, children: [
              e.host,
              ":",
              e.port
            ] }),
            "."
          ] }),
          /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: "300px" }, children: [
            /* @__PURE__ */ S.jsxs(
              "button",
              {
                onClick: f,
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
                  /* @__PURE__ */ S.jsx(Xu, { size: 16 }),
                  /* @__PURE__ */ S.jsx("span", { children: "Start Hermes Daemon" })
                ]
              }
            ),
            /* @__PURE__ */ S.jsxs(
              "button",
              {
                onClick: g,
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
                  /* @__PURE__ */ S.jsx(Gu, { size: 14 }),
                  /* @__PURE__ */ S.jsx("span", { children: "Retry Connection" })
                ]
              }
            ),
            w && /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: "8px", marginTop: "4px" }, children: [
              /* @__PURE__ */ S.jsx(
                "button",
                {
                  onClick: () => {
                    const k = { ...e, host: "10.0.2.2" };
                    t(k), kr(k), setTimeout(g, 300);
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
              /* @__PURE__ */ S.jsx(
                "button",
                {
                  onClick: () => {
                    const k = { ...e, host: "127.0.0.1" };
                    t(k), kr(k), setTimeout(g, 300);
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
            /* @__PURE__ */ S.jsxs(
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
                  /* @__PURE__ */ S.jsx(Zu, { size: 13 }),
                  /* @__PURE__ */ S.jsx("span", { children: "Configure Host & Port" })
                ]
              }
            )
          ] })
        ] }),
        i && /* @__PURE__ */ S.jsx(
          lp,
          {
            config: e,
            onClose: () => u(!1),
            onSave: (k) => {
              t(k), kr(k), setTimeout(g, 500);
            }
          }
        )
      ]
    }
  );
}
function lp({ config: e, onClose: t, onSave: n }) {
  const [r, l] = oe.useState({ ...e }), o = (i) => {
    i.preventDefault(), n(r), t();
  };
  return /* @__PURE__ */ S.jsx("div", { className: "hermes-modal-overlay", onClick: t, children: /* @__PURE__ */ S.jsxs("div", { className: "hermes-modal-content", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ S.jsxs("div", { className: "hermes-modal-header", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ S.jsx(Vd, { size: 16, color: "#10b981" }),
        /* @__PURE__ */ S.jsx("span", { style: { fontSize: 14, fontWeight: 600, color: "#f8fafc" }, children: "Hermes Host & Port Settings" })
      ] }),
      /* @__PURE__ */ S.jsx("button", { className: "hermes-btn", onClick: t, style: { padding: 3 }, children: /* @__PURE__ */ S.jsx(Zd, { size: 14 }) })
    ] }),
    /* @__PURE__ */ S.jsxs("form", { onSubmit: o, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: 6, marginBottom: 14 }, children: [
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            className: "hermes-btn",
            style: { flex: 1, padding: 6, fontSize: 11 },
            onClick: () => l((i) => ({ ...i, host: "127.0.0.1" })),
            children: [
              /* @__PURE__ */ S.jsx(Bd, { size: 12, style: { marginRight: 4 } }),
              " 127.0.0.1"
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          "button",
          {
            type: "button",
            className: "hermes-btn",
            style: { flex: 1, padding: 6, fontSize: 11 },
            onClick: () => l((i) => ({ ...i, host: "10.0.2.2" })),
            children: [
              /* @__PURE__ */ S.jsx(Xd, { size: 12, style: { marginRight: 4 } }),
              " 10.0.2.2 (AVD)"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ S.jsx("label", { className: "hermes-label", children: "Host IP / Domain" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            className: "hermes-input",
            value: r.host,
            onChange: (i) => l((u) => ({ ...u, host: i.target.value })),
            placeholder: "127.0.0.1 or 10.0.2.2",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ S.jsx("label", { className: "hermes-label", children: "Port" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "text",
            className: "hermes-input",
            value: r.port,
            onChange: (i) => l((u) => ({ ...u, port: i.target.value })),
            placeholder: "8787",
            required: !0
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "hermes-form-group", children: [
        /* @__PURE__ */ S.jsx("label", { className: "hermes-label", children: "Password (Optional / Auto-Auth)" }),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "password",
            className: "hermes-input",
            value: r.password,
            onChange: (i) => l((u) => ({ ...u, password: i.target.value })),
            placeholder: "Leave empty if none"
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 18 }, children: [
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "hermes-btn", onClick: t, children: "Cancel" }),
        /* @__PURE__ */ S.jsxs("button", { type: "submit", className: "hermes-btn primary", children: [
          /* @__PURE__ */ S.jsx(Kd, { size: 12, style: { marginRight: 4 } }),
          " Save & Connect"
        ] })
      ] })
    ] })
  ] }) });
}
async function op(e, t = {}) {
  if (!e)
    throw new Error("[HermesWebUIEngine] Target container is null.");
  e.style.position = "relative", e.style.width = "100%", e.style.height = "100%", e.style.minHeight = "100%", e.style.margin = "0", e.style.padding = "0", e.style.overflow = "hidden";
  const n = cc(e);
  return n.render(/* @__PURE__ */ S.jsx(rp, { ...t })), () => {
    try {
      n.unmount();
    } catch {
    }
  };
}
export {
  rp as HermesWebUIEngineApp,
  op as default,
  op as mount_app
};
