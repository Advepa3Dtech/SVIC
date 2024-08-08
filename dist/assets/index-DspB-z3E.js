function Jd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function qd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var nc = { exports: {} },
  ui = {},
  rc = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dr = Symbol.for("react.element"),
  bd = Symbol.for("react.portal"),
  ep = Symbol.for("react.fragment"),
  tp = Symbol.for("react.strict_mode"),
  np = Symbol.for("react.profiler"),
  rp = Symbol.for("react.provider"),
  lp = Symbol.for("react.context"),
  ip = Symbol.for("react.forward_ref"),
  op = Symbol.for("react.suspense"),
  up = Symbol.for("react.memo"),
  sp = Symbol.for("react.lazy"),
  ks = Symbol.iterator;
function ap(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ks && e[ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ic = Object.assign,
  oc = {};
function Vn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oc),
    (this.updater = n || lc);
}
Vn.prototype.isReactComponent = {};
Vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uc() {}
uc.prototype = Vn.prototype;
function Su(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oc),
    (this.updater = n || lc);
}
var xu = (Su.prototype = new uc());
xu.constructor = Su;
ic(xu, Vn.prototype);
xu.isPureReactComponent = !0;
var Es = Array.isArray,
  sc = Object.prototype.hasOwnProperty,
  ku = { current: null },
  ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      sc.call(t, r) && !ac.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Dr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ku.current,
  };
}
function cp(e, t) {
  return {
    $$typeof: Dr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dr;
}
function fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cs = /\/+/g;
function ji(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? fp("" + e.key)
    : t.toString(36);
}
function pl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Dr:
          case bd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + ji(o, 0) : r),
      Es(l)
        ? ((n = ""),
          e != null && (n = e.replace(Cs, "$&/") + "/"),
          pl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Eu(l) &&
            (l = cp(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Cs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Es(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + ji(i, u);
      o += pl(i, t, n, s, l);
    }
  else if (((s = ap(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + ji(i, u++)), (o += pl(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    pl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function dp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  hl = { transition: null },
  pp = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: hl,
    ReactCurrentOwner: ku,
  };
function fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: Gr,
  forEach: function (e, t, n) {
    Gr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Eu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = Vn;
O.Fragment = ep;
O.Profiler = np;
O.PureComponent = Su;
O.StrictMode = tp;
O.Suspense = op;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
O.act = fc;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ic({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ku.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      sc.call(t, s) &&
        !ac.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Dr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: lp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rp, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = cc;
O.createFactory = function (e) {
  var t = cc.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: ip, render: e };
};
O.isValidElement = Eu;
O.lazy = function (e) {
  return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: dp };
};
O.memo = function (e, t) {
  return { $$typeof: up, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
O.unstable_act = fc;
O.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
O.useContext = function (e) {
  return me.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
O.useId = function () {
  return me.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return me.current.useRef(e);
};
O.useState = function (e) {
  return me.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return me.current.useTransition();
};
O.version = "18.3.1";
rc.exports = O;
var N = rc.exports;
const qt = qd(N),
  hp = Jd({ __proto__: null, default: qt }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp = N,
  vp = Symbol.for("react.element"),
  gp = Symbol.for("react.fragment"),
  yp = Object.prototype.hasOwnProperty,
  wp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) yp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: wp.current,
  };
}
ui.Fragment = gp;
ui.jsx = dc;
ui.jsxs = dc;
nc.exports = ui;
var P = nc.exports,
  go = {},
  pc = { exports: {} },
  Re = {},
  hc = { exports: {} },
  mc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, R) {
    var I = _.length;
    _.push(R);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        U = _[F];
      if (0 < l(U, R)) (_[F] = R), (_[I] = U), (I = F);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0],
      I = _.pop();
    if (I !== R) {
      _[0] = I;
      e: for (var F = 0, U = _.length, Ut = U >>> 1; F < Ut; ) {
        var Fe = 2 * (F + 1) - 1,
          dt = _[Fe],
          Ce = Fe + 1,
          et = _[Ce];
        if (0 > l(dt, I))
          Ce < U && 0 > l(et, dt)
            ? ((_[F] = et), (_[Ce] = I), (F = Ce))
            : ((_[F] = dt), (_[Fe] = I), (F = Fe));
        else if (Ce < U && 0 > l(et, I)) (_[F] = et), (_[Ce] = I), (F = Ce);
        else break e;
      }
    }
    return R;
  }
  function l(_, R) {
    var I = _.sortIndex - R.sortIndex;
    return I !== 0 ? I : _.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    y = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= _)
        r(a), (R.sortIndex = R.expirationTime), t(s, R);
      else break;
      R = n(a);
    }
  }
  function v(_) {
    if (((w = !1), d(_), !y))
      if (n(s) !== null) (y = !0), Kn(k);
      else {
        var R = n(a);
        R !== null && Ft(v, R.startTime - _);
      }
  }
  function k(_, R) {
    (y = !1), w && ((w = !1), f(A), (A = -1)), (g = !0);
    var I = m;
    try {
      for (
        d(R), p = n(s);
        p !== null && (!(p.expirationTime > R) || (_ && !Ee()));

      ) {
        var F = p.callback;
        if (typeof F == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var U = F(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof U == "function" ? (p.callback = U) : p === n(s) && r(s),
            d(R);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Ut = !0;
      else {
        var Fe = n(a);
        Fe !== null && Ft(v, Fe.startTime - R), (Ut = !1);
      }
      return Ut;
    } finally {
      (p = null), (m = I), (g = !1);
    }
  }
  var E = !1,
    S = null,
    A = -1,
    B = 5,
    L = -1;
  function Ee() {
    return !(e.unstable_now() - L < B);
  }
  function Mt() {
    if (S !== null) {
      var _ = e.unstable_now();
      L = _;
      var R = !0;
      try {
        R = S(!0, _);
      } finally {
        R ? Dt() : ((E = !1), (S = null));
      }
    } else E = !1;
  }
  var Dt;
  if (typeof c == "function")
    Dt = function () {
      c(Mt);
    };
  else if (typeof MessageChannel < "u") {
    var Yr = new MessageChannel(),
      Ri = Yr.port2;
    (Yr.port1.onmessage = Mt),
      (Dt = function () {
        Ri.postMessage(null);
      });
  } else
    Dt = function () {
      C(Mt, 0);
    };
  function Kn(_) {
    (S = _), E || ((E = !0), Dt());
  }
  function Ft(_, R) {
    A = C(function () {
      _(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Kn(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var I = m;
      m = R;
      try {
        return _();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, R) {
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
      var I = m;
      m = _;
      try {
        return R();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, R, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? F + I : F))
          : (I = F),
        _)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = I + U),
        (_ = {
          id: h++,
          callback: R,
          priorityLevel: _,
          startTime: I,
          expirationTime: U,
          sortIndex: -1,
        }),
        I > F
          ? ((_.sortIndex = I),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (w ? (f(A), (A = -1)) : (w = !0), Ft(v, I - F)))
          : ((_.sortIndex = U), t(s, _), y || g || ((y = !0), Kn(k))),
        _
      );
    }),
    (e.unstable_shouldYield = Ee),
    (e.unstable_wrapCallback = function (_) {
      var R = m;
      return function () {
        var I = m;
        m = R;
        try {
          return _.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    });
})(mc);
hc.exports = mc;
var xp = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kp = N,
  Ae = xp;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vc = new Set(),
  yr = {};
function ln(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) vc.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yo = Object.prototype.hasOwnProperty,
  Ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ps = {},
  _s = {};
function Cp(e) {
  return yo.call(_s, e)
    ? !0
    : yo.call(Ps, e)
    ? !1
    : Ep.test(e)
    ? (_s[e] = !0)
    : ((Ps[e] = !0), !1);
}
function Pp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _p(e, t, n, r) {
  if (t === null || typeof t > "u" || Pp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ve(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cu = /[\-:]([a-z])/g;
function Pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Pu);
    se[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Pu);
    se[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cu, Pu);
  se[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _u(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_p(t, n, l, r) && (n = null),
    r || l === null
      ? Cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xr = Symbol.for("react.element"),
  fn = Symbol.for("react.portal"),
  dn = Symbol.for("react.fragment"),
  Nu = Symbol.for("react.strict_mode"),
  wo = Symbol.for("react.profiler"),
  gc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  zu = Symbol.for("react.forward_ref"),
  So = Symbol.for("react.suspense"),
  xo = Symbol.for("react.suspense_list"),
  Au = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  wc = Symbol.for("react.offscreen"),
  Ns = Symbol.iterator;
function Xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ns && e[Ns]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Ti;
function rr(e) {
  if (Ti === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ti = (t && t[1]) || "";
    }
  return (
    `
` +
    Ti +
    e
  );
}
var Li = !1;
function Oi(e, t) {
  if (!e || Li) return "";
  Li = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Li = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Oi(e.type, !1)), e;
    case 11:
      return (e = Oi(e.type.render, !1)), e;
    case 1:
      return (e = Oi(e.type, !0)), e;
    default:
      return "";
  }
}
function ko(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dn:
      return "Fragment";
    case fn:
      return "Portal";
    case wo:
      return "Profiler";
    case Nu:
      return "StrictMode";
    case So:
      return "Suspense";
    case xo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case yc:
        return (e.displayName || "Context") + ".Consumer";
      case gc:
        return (e._context.displayName || "Context") + ".Provider";
      case zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Au:
        return (
          (t = e.displayName || null), t !== null ? t : ko(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return ko(e(t));
        } catch {}
    }
  return null;
}
function zp(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return ko(t);
    case 8:
      return t === Nu ? "StrictMode" : "Mode";
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
function jt(e) {
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
function Sc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ap(e) {
  var t = Sc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zr(e) {
  e._valueTracker || (e._valueTracker = Ap(e));
}
function xc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Il(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Eo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function kc(e, t) {
  (t = t.checked), t != null && _u(e, "checked", t, !1);
}
function Co(e, t) {
  kc(e, t);
  var n = jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Po(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Po(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function As(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Po(e, t, n) {
  (t !== "number" || Il(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Cn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Rs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: jt(n) };
}
function Ec(e, t) {
  var n = jt(t.value),
    r = jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Jr,
  Pc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Jr = Jr || document.createElement("div"),
          Jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Jr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
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
    strokeWidth: !0,
  },
  Rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function (e) {
  Rp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
  });
});
function _c(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Nc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = _c(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Ip = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function zo(e, t) {
  if (t) {
    if (Ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Ao(e, t) {
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
var Ro = null;
function Ru(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Io = null,
  Pn = null,
  _n = null;
function js(e) {
  if ((e = Br(e))) {
    if (typeof Io != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = di(t)), Io(e.stateNode, e.type, t));
  }
}
function zc(e) {
  Pn ? (_n ? _n.push(e) : (_n = [e])) : (Pn = e);
}
function Ac() {
  if (Pn) {
    var e = Pn,
      t = _n;
    if (((_n = Pn = null), js(e), t)) for (e = 0; e < t.length; e++) js(t[e]);
  }
}
function Rc(e, t) {
  return e(t);
}
function Ic() {}
var $i = !1;
function jc(e, t, n) {
  if ($i) return e(t, n);
  $i = !0;
  try {
    return Rc(e, t, n);
  } finally {
    ($i = !1), (Pn !== null || _n !== null) && (Ic(), Ac());
  }
}
function Sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = di(n);
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var jo = !1;
if (ut)
  try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", Zn, Zn),
      window.removeEventListener("test", Zn, Zn);
  } catch {
    jo = !1;
  }
function jp(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var ar = !1,
  jl = null,
  Tl = !1,
  To = null,
  Tp = {
    onError: function (e) {
      (ar = !0), (jl = e);
    },
  };
function Lp(e, t, n, r, l, i, o, u, s) {
  (ar = !1), (jl = null), jp.apply(Tp, arguments);
}
function Op(e, t, n, r, l, i, o, u, s) {
  if ((Lp.apply(this, arguments), ar)) {
    if (ar) {
      var a = jl;
      (ar = !1), (jl = null);
    } else throw Error(x(198));
    Tl || ((Tl = !0), (To = a));
  }
}
function on(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ts(e) {
  if (on(e) !== e) throw Error(x(188));
}
function $p(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ts(l), e;
        if (i === r) return Ts(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Lc(e) {
  return (e = $p(e)), e !== null ? Oc(e) : null;
}
function Oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $c = Ae.unstable_scheduleCallback,
  Ls = Ae.unstable_cancelCallback,
  Mp = Ae.unstable_shouldYield,
  Dp = Ae.unstable_requestPaint,
  J = Ae.unstable_now,
  Fp = Ae.unstable_getCurrentPriorityLevel,
  Iu = Ae.unstable_ImmediatePriority,
  Mc = Ae.unstable_UserBlockingPriority,
  Ll = Ae.unstable_NormalPriority,
  Up = Ae.unstable_LowPriority,
  Dc = Ae.unstable_IdlePriority,
  si = null,
  qe = null;
function Bp(e) {
  if (qe && typeof qe.onCommitFiberRoot == "function")
    try {
      qe.onCommitFiberRoot(si, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Qp,
  Vp = Math.log,
  Wp = Math.LN2;
function Qp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vp(e) / Wp) | 0)) | 0;
}
var qr = 64,
  br = 4194304;
function ir(e) {
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
function Ol(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = ir(u)) : ((i &= o), i !== 0 && (r = ir(i)));
  } else (o = n & ~l), o !== 0 ? (r = ir(o)) : i !== 0 && (r = ir(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Hp(e, t) {
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
function Yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Qe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Hp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Lo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fc() {
  var e = qr;
  return (qr <<= 1), !(qr & 4194240) && (qr = 64), e;
}
function Mi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qe(t)),
    (e[t] = n);
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Qe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function ju(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var D = 0;
function Uc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bc,
  Tu,
  Vc,
  Wc,
  Qc,
  Oo = !1,
  el = [],
  Et = null,
  Ct = null,
  Pt = null,
  xr = new Map(),
  kr = new Map(),
  yt = [],
  Gp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Os(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      kr.delete(t.pointerId);
  }
}
function Jn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Br(t)), t !== null && Tu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Xp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = Jn(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ct = Jn(Ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = Jn(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return xr.set(i, Jn(xr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), kr.set(i, Jn(kr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hc(e) {
  var t = Qt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tc(n)), t !== null)) {
          (e.blockedOn = t),
            Qc(e.priority, function () {
              Vc(n);
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
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ro = r), n.target.dispatchEvent(r), (Ro = null);
    } else return (t = Br(n)), t !== null && Tu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  ml(e) && n.delete(t);
}
function Zp() {
  (Oo = !1),
    Et !== null && ml(Et) && (Et = null),
    Ct !== null && ml(Ct) && (Ct = null),
    Pt !== null && ml(Pt) && (Pt = null),
    xr.forEach($s),
    kr.forEach($s);
}
function qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oo ||
      ((Oo = !0),
      Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Zp)));
}
function Er(e) {
  function t(l) {
    return qn(l, e);
  }
  if (0 < el.length) {
    qn(el[0], e);
    for (var n = 1; n < el.length; n++) {
      var r = el[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && qn(Et, e),
      Ct !== null && qn(Ct, e),
      Pt !== null && qn(Pt, e),
      xr.forEach(t),
      kr.forEach(t),
      n = 0;
    n < yt.length;
    n++
  )
    (r = yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yt.length && ((n = yt[0]), n.blockedOn === null); )
    Hc(n), n.blockedOn === null && yt.shift();
}
var Nn = ft.ReactCurrentBatchConfig,
  $l = !0;
function Jp(e, t, n, r) {
  var l = D,
    i = Nn.transition;
  Nn.transition = null;
  try {
    (D = 1), Lu(e, t, n, r);
  } finally {
    (D = l), (Nn.transition = i);
  }
}
function qp(e, t, n, r) {
  var l = D,
    i = Nn.transition;
  Nn.transition = null;
  try {
    (D = 4), Lu(e, t, n, r);
  } finally {
    (D = l), (Nn.transition = i);
  }
}
function Lu(e, t, n, r) {
  if ($l) {
    var l = $o(e, t, n, r);
    if (l === null) Ki(e, t, r, Ml, n), Os(e, r);
    else if (Xp(l, e, t, n, r)) r.stopPropagation();
    else if ((Os(e, r), t & 4 && -1 < Gp.indexOf(e))) {
      for (; l !== null; ) {
        var i = Br(l);
        if (
          (i !== null && Bc(i),
          (i = $o(e, t, n, r)),
          i === null && Ki(e, t, r, Ml, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ki(e, t, r, null, n);
  }
}
var Ml = null;
function $o(e, t, n, r) {
  if (((Ml = null), (e = Ru(r)), (e = Qt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ml = e), null;
}
function Yc(e) {
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
      switch (Fp()) {
        case Iu:
          return 1;
        case Mc:
          return 4;
        case Ll:
        case Up:
          return 16;
        case Dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  Ou = null,
  vl = null;
function Kc() {
  if (vl) return vl;
  var e,
    t = Ou,
    n = t.length,
    r,
    l = "value" in St ? St.value : St.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (vl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function gl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function tl() {
  return !0;
}
function Ms() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? tl
        : Ms),
      (this.isPropagationStopped = Ms),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = tl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = tl));
      },
      persist: function () {},
      isPersistent: tl,
    }),
    t
  );
}
var Wn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  $u = Ie(Wn),
  Ur = X({}, Wn, { view: 0, detail: 0 }),
  bp = Ie(Ur),
  Di,
  Fi,
  bn,
  ai = X({}, Ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== bn &&
            (bn && e.type === "mousemove"
              ? ((Di = e.screenX - bn.screenX), (Fi = e.screenY - bn.screenY))
              : (Fi = Di = 0),
            (bn = e)),
          Di);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fi;
    },
  }),
  Ds = Ie(ai),
  eh = X({}, ai, { dataTransfer: 0 }),
  th = Ie(eh),
  nh = X({}, Ur, { relatedTarget: 0 }),
  Ui = Ie(nh),
  rh = X({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lh = Ie(rh),
  ih = X({}, Wn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  oh = Ie(ih),
  uh = X({}, Wn, { data: 0 }),
  Fs = Ie(uh),
  sh = {
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
    MozPrintableKey: "Unidentified",
  },
  ah = {
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
    224: "Meta",
  },
  ch = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
}
function Mu() {
  return fh;
}
var dh = X({}, Ur, {
    key: function (e) {
      if (e.key) {
        var t = sh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = gl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ah[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mu,
    charCode: function (e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? gl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ph = Ie(dh),
  hh = X({}, ai, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Us = Ie(hh),
  mh = X({}, Ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mu,
  }),
  vh = Ie(mh),
  gh = X({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yh = Ie(gh),
  wh = X({}, ai, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sh = Ie(wh),
  xh = [9, 13, 27, 32],
  Du = ut && "CompositionEvent" in window,
  cr = null;
ut && "documentMode" in document && (cr = document.documentMode);
var kh = ut && "TextEvent" in window && !cr,
  Gc = ut && (!Du || (cr && 8 < cr && 11 >= cr)),
  Bs = " ",
  Vs = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return xh.indexOf(t.keyCode) !== -1;
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
function Zc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function Eh(e, t) {
  switch (e) {
    case "compositionend":
      return Zc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vs = !0), Bs);
    case "textInput":
      return (e = t.data), e === Bs && Vs ? null : e;
    default:
      return null;
  }
}
function Ch(e, t) {
  if (pn)
    return e === "compositionend" || (!Du && Xc(e, t))
      ? ((e = Kc()), (vl = Ou = St = null), (pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Gc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ph = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ph[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  zc(r),
    (t = Dl(t, "onChange")),
    0 < t.length &&
      ((n = new $u("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fr = null,
  Cr = null;
function _h(e) {
  af(e, 0);
}
function ci(e) {
  var t = vn(e);
  if (xc(t)) return e;
}
function Nh(e, t) {
  if (e === "change") return t;
}
var qc = !1;
if (ut) {
  var Bi;
  if (ut) {
    var Vi = "oninput" in document;
    if (!Vi) {
      var Qs = document.createElement("div");
      Qs.setAttribute("oninput", "return;"),
        (Vi = typeof Qs.oninput == "function");
    }
    Bi = Vi;
  } else Bi = !1;
  qc = Bi && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  fr && (fr.detachEvent("onpropertychange", bc), (Cr = fr = null));
}
function bc(e) {
  if (e.propertyName === "value" && ci(Cr)) {
    var t = [];
    Jc(t, Cr, e, Ru(e)), jc(_h, t);
  }
}
function zh(e, t, n) {
  e === "focusin"
    ? (Hs(), (fr = t), (Cr = n), fr.attachEvent("onpropertychange", bc))
    : e === "focusout" && Hs();
}
function Ah(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ci(Cr);
}
function Rh(e, t) {
  if (e === "click") return ci(t);
}
function Ih(e, t) {
  if (e === "input" || e === "change") return ci(t);
}
function jh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : jh;
function Pr(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yo.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function Ys(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ks(e, t) {
  var n = Ys(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
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
    n = Ys(n);
  }
}
function ef(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ef(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function tf() {
  for (var e = window, t = Il(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Il(e.document);
  }
  return t;
}
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Th(e) {
  var t = tf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ef(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Fu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Ks(n, i));
        var o = Ks(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Lh = ut && "documentMode" in document && 11 >= document.documentMode,
  hn = null,
  Mo = null,
  dr = null,
  Do = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Do ||
    hn == null ||
    hn !== Il(r) ||
    ((r = hn),
    "selectionStart" in r && Fu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && Pr(dr, r)) ||
      ((dr = r),
      (r = Dl(Mo, "onSelect")),
      0 < r.length &&
        ((t = new $u("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = hn))));
}
function nl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var mn = {
    animationend: nl("Animation", "AnimationEnd"),
    animationiteration: nl("Animation", "AnimationIteration"),
    animationstart: nl("Animation", "AnimationStart"),
    transitionend: nl("Transition", "TransitionEnd"),
  },
  Wi = {},
  nf = {};
ut &&
  ((nf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete mn.animationend.animation,
    delete mn.animationiteration.animation,
    delete mn.animationstart.animation),
  "TransitionEvent" in window || delete mn.transitionend.transition);
function fi(e) {
  if (Wi[e]) return Wi[e];
  if (!mn[e]) return e;
  var t = mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in nf) return (Wi[e] = t[n]);
  return e;
}
var rf = fi("animationend"),
  lf = fi("animationiteration"),
  of = fi("animationstart"),
  uf = fi("transitionend"),
  sf = new Map(),
  Xs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lt(e, t) {
  sf.set(e, t), ln(t, [e]);
}
for (var Qi = 0; Qi < Xs.length; Qi++) {
  var Hi = Xs[Qi],
    Oh = Hi.toLowerCase(),
    $h = Hi[0].toUpperCase() + Hi.slice(1);
  Lt(Oh, "on" + $h);
}
Lt(rf, "onAnimationEnd");
Lt(lf, "onAnimationIteration");
Lt(of, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(uf, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Mh = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function Zs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Op(r, t, void 0, e), (e.currentTarget = null);
}
function af(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Zs(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Zs(l, u, a), (i = s);
        }
    }
  }
  if (Tl) throw ((e = To), (Tl = !1), (To = null), e);
}
function W(e, t) {
  var n = t[Wo];
  n === void 0 && (n = t[Wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cf(t, e, 2, !1), n.add(r));
}
function Yi(e, t, n) {
  var r = 0;
  t && (r |= 4), cf(n, e, r, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[rl]) {
    (e[rl] = !0),
      vc.forEach(function (n) {
        n !== "selectionchange" && (Mh.has(n) || Yi(n, !1, e), Yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || ((t[rl] = !0), Yi("selectionchange", !1, t));
  }
}
function cf(e, t, n, r) {
  switch (Yc(t)) {
    case 1:
      var l = Jp;
      break;
    case 4:
      l = qp;
      break;
    default:
      l = Lu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ki(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Qt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  jc(function () {
    var a = i,
      h = Ru(n),
      p = [];
    e: {
      var m = sf.get(e);
      if (m !== void 0) {
        var g = $u,
          y = e;
        switch (e) {
          case "keypress":
            if (gl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ph;
            break;
          case "focusin":
            (y = "focus"), (g = Ui);
            break;
          case "focusout":
            (y = "blur"), (g = Ui);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ui;
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
            g = Ds;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = vh;
            break;
          case rf:
          case lf:
          case of:
            g = lh;
            break;
          case uf:
            g = yh;
            break;
          case "scroll":
            g = bp;
            break;
          case "wheel":
            g = Sh;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = oh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Us;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Sr(c, f)), v != null && w.push(Nr(c, v, d)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ro &&
            (y = n.relatedTarget || n.fromElement) &&
            (Qt(y) || y[st]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Qt(y) : null),
              y !== null &&
                ((C = on(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = Ds),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Us),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = g == null ? m : vn(g)),
            (d = y == null ? m : vn(y)),
            (m = new w(v, c + "leave", g, n, h)),
            (m.target = C),
            (m.relatedTarget = d),
            (v = null),
            Qt(h) === a &&
              ((w = new w(f, c + "enter", y, n, h)),
              (w.target = d),
              (w.relatedTarget = C),
              (v = w)),
            (C = v),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, d = w; d; d = an(d)) c++;
              for (d = 0, v = f; v; v = an(v)) d++;
              for (; 0 < c - d; ) (w = an(w)), c--;
              for (; 0 < d - c; ) (f = an(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = an(w)), (f = an(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Js(p, m, g, w, !1),
            y !== null && C !== null && Js(p, C, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? vn(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var k = Nh;
        else if (Ws(m))
          if (qc) k = Ih;
          else {
            k = Ah;
            var E = zh;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = Rh);
        if (k && (k = k(e, a))) {
          Jc(p, k, n, h);
          break e;
        }
        E && E(e, m, a),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            Po(m, "number", m.value);
      }
      switch (((E = a ? vn(a) : window), e)) {
        case "focusin":
          (Ws(E) || E.contentEditable === "true") &&
            ((hn = E), (Mo = a), (dr = null));
          break;
        case "focusout":
          dr = Mo = hn = null;
          break;
        case "mousedown":
          Do = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Do = !1), Gs(p, n, h);
          break;
        case "selectionchange":
          if (Lh) break;
        case "keydown":
        case "keyup":
          Gs(p, n, h);
      }
      var S;
      if (Du)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        pn
          ? Xc(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (Gc &&
          n.locale !== "ko" &&
          (pn || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && pn && (S = Kc())
            : ((St = h),
              (Ou = "value" in St ? St.value : St.textContent),
              (pn = !0))),
        (E = Dl(a, A)),
        0 < E.length &&
          ((A = new Fs(A, e, null, n, h)),
          p.push({ event: A, listeners: E }),
          S ? (A.data = S) : ((S = Zc(n)), S !== null && (A.data = S)))),
        (S = kh ? Eh(e, n) : Ch(e, n)) &&
          ((a = Dl(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new Fs("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = S)));
    }
    af(p, t);
  });
}
function Nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Dl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Sr(e, n)),
      i != null && r.unshift(Nr(e, i, l)),
      (i = Sr(e, t)),
      i != null && r.push(Nr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function an(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Js(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Sr(n, i)), s != null && o.unshift(Nr(n, s, u)))
        : l || ((s = Sr(n, i)), s != null && o.push(Nr(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dh = /\r\n?/g,
  Fh = /\u0000|\uFFFD/g;
function qs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dh,
      `
`
    )
    .replace(Fh, "");
}
function ll(e, t, n) {
  if (((t = qs(t)), qs(e) !== t && n)) throw Error(x(425));
}
function Fl() {}
var Fo = null,
  Uo = null;
function Bo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
  Uh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bs = typeof Promise == "function" ? Promise : void 0,
  Bh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bs < "u"
      ? function (e) {
          return bs.resolve(null).then(e).catch(Vh);
        }
      : Vo;
function Vh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Er(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Er(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ea(e) {
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
var Qn = Math.random().toString(36).slice(2),
  Je = "__reactFiber$" + Qn,
  zr = "__reactProps$" + Qn,
  st = "__reactContainer$" + Qn,
  Wo = "__reactEvents$" + Qn,
  Wh = "__reactListeners$" + Qn,
  Qh = "__reactHandles$" + Qn;
function Qt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[Je])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ea(e); e !== null; ) {
          if ((n = e[Je])) return n;
          e = ea(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Br(e) {
  return (
    (e = e[Je] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function di(e) {
  return e[zr] || null;
}
var Qo = [],
  gn = -1;
function Ot(e) {
  return { current: e };
}
function H(e) {
  0 > gn || ((e.current = Qo[gn]), (Qo[gn] = null), gn--);
}
function V(e, t) {
  gn++, (Qo[gn] = e.current), (e.current = t);
}
var Tt = {},
  de = Ot(Tt),
  Se = Ot(!1),
  bt = Tt;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ul() {
  H(Se), H(de);
}
function ta(e, t, n) {
  if (de.current !== Tt) throw Error(x(168));
  V(de, t), V(Se, n);
}
function ff(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, zp(e) || "Unknown", l));
  return X({}, n, r);
}
function Bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
    (bt = de.current),
    V(de, e),
    V(Se, Se.current),
    !0
  );
}
function na(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = ff(e, t, bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Se),
      H(de),
      V(de, e))
    : H(Se),
    V(Se, n);
}
var rt = null,
  pi = !1,
  Xi = !1;
function df(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
function Hh(e) {
  (pi = !0), df(e);
}
function $t() {
  if (!Xi && rt !== null) {
    Xi = !0;
    var e = 0,
      t = D;
    try {
      var n = rt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (rt = null), (pi = !1);
    } catch (l) {
      throw (rt !== null && (rt = rt.slice(e + 1)), $c(Iu, $t), l);
    } finally {
      (D = t), (Xi = !1);
    }
  }
  return null;
}
var yn = [],
  wn = 0,
  Vl = null,
  Wl = 0,
  je = [],
  Te = 0,
  en = null,
  lt = 1,
  it = "";
function Vt(e, t) {
  (yn[wn++] = Wl), (yn[wn++] = Vl), (Vl = e), (Wl = t);
}
function pf(e, t, n) {
  (je[Te++] = lt), (je[Te++] = it), (je[Te++] = en), (en = e);
  var r = lt;
  e = it;
  var l = 32 - Qe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Qe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (lt = (1 << (32 - Qe(t) + l)) | (n << l) | r),
      (it = i + e);
  } else (lt = (1 << i) | (n << l) | r), (it = e);
}
function Uu(e) {
  e.return !== null && (Vt(e, 1), pf(e, 1, 0));
}
function Bu(e) {
  for (; e === Vl; )
    (Vl = yn[--wn]), (yn[wn] = null), (Wl = yn[--wn]), (yn[wn] = null);
  for (; e === en; )
    (en = je[--Te]),
      (je[Te] = null),
      (it = je[--Te]),
      (je[Te] = null),
      (lt = je[--Te]),
      (je[Te] = null);
}
var ze = null,
  Ne = null,
  Y = !1,
  We = null;
function hf(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ra(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ne = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = en !== null ? { id: lt, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (Y) {
    var t = Ne;
    if (t) {
      var n = t;
      if (!ra(e, t)) {
        if (Ho(e)) throw Error(x(418));
        t = _t(n.nextSibling);
        var r = ze;
        t && ra(e, t)
          ? hf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e));
      }
    } else {
      if (Ho(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (ze = e);
    }
  }
}
function la(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function il(e) {
  if (e !== ze) return !1;
  if (!Y) return la(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (Ho(e)) throw (mf(), Error(x(418)));
    for (; t; ) hf(e, t), (t = _t(t.nextSibling));
  }
  if ((la(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ne = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ne = null;
    }
  } else Ne = ze ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function mf() {
  for (var e = Ne; e; ) e = _t(e.nextSibling);
}
function jn() {
  (Ne = ze = null), (Y = !1);
}
function Vu(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Yh = ft.ReactCurrentBatchConfig;
function er(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function ol(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ia(e) {
  var t = e._init;
  return t(e._payload);
}
function vf(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Rt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = no(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var k = d.type;
    return k === dn
      ? h(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === vt &&
            ia(k) === c.type))
      ? ((v = l(c, d.props)), (v.ref = er(f, c, d)), (v.return = f), v)
      : ((v = Cl(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = er(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ro(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, v, k) {
    return c === null || c.tag !== 7
      ? ((c = Xt(d, f.mode, v, k)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = no("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Xr:
          return (
            (d = Cl(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = er(f, null, c)),
            (d.return = f),
            d
          );
        case fn:
          return (c = ro(c, f.mode, d)), (c.return = f), c;
        case vt:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (lr(c) || Xn(c))
        return (c = Xt(c, f.mode, d, null)), (c.return = f), c;
      ol(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var k = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Xr:
          return d.key === k ? s(f, c, d, v) : null;
        case fn:
          return d.key === k ? a(f, c, d, v) : null;
        case vt:
          return (k = d._init), m(f, c, k(d._payload), v);
      }
      if (lr(d) || Xn(d)) return k !== null ? null : h(f, c, d, v, null);
      ol(f, d);
    }
    return null;
  }
  function g(f, c, d, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(c, f, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Xr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, k);
        case fn:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, k);
        case vt:
          var E = v._init;
          return g(f, c, d, E(v._payload), k);
      }
      if (lr(v) || Xn(v)) return (f = f.get(d) || null), h(c, f, v, k, null);
      ol(c, v);
    }
    return null;
  }
  function y(f, c, d, v) {
    for (
      var k = null, E = null, S = c, A = (c = 0), B = null;
      S !== null && A < d.length;
      A++
    ) {
      S.index > A ? ((B = S), (S = null)) : (B = S.sibling);
      var L = m(f, S, d[A], v);
      if (L === null) {
        S === null && (S = B);
        break;
      }
      e && S && L.alternate === null && t(f, S),
        (c = i(L, c, A)),
        E === null ? (k = L) : (E.sibling = L),
        (E = L),
        (S = B);
    }
    if (A === d.length) return n(f, S), Y && Vt(f, A), k;
    if (S === null) {
      for (; A < d.length; A++)
        (S = p(f, d[A], v)),
          S !== null &&
            ((c = i(S, c, A)), E === null ? (k = S) : (E.sibling = S), (E = S));
      return Y && Vt(f, A), k;
    }
    for (S = r(f, S); A < d.length; A++)
      (B = g(S, f, A, d[A], v)),
        B !== null &&
          (e && B.alternate !== null && S.delete(B.key === null ? A : B.key),
          (c = i(B, c, A)),
          E === null ? (k = B) : (E.sibling = B),
          (E = B));
    return (
      e &&
        S.forEach(function (Ee) {
          return t(f, Ee);
        }),
      Y && Vt(f, A),
      k
    );
  }
  function w(f, c, d, v) {
    var k = Xn(d);
    if (typeof k != "function") throw Error(x(150));
    if (((d = k.call(d)), d == null)) throw Error(x(151));
    for (
      var E = (k = null), S = c, A = (c = 0), B = null, L = d.next();
      S !== null && !L.done;
      A++, L = d.next()
    ) {
      S.index > A ? ((B = S), (S = null)) : (B = S.sibling);
      var Ee = m(f, S, L.value, v);
      if (Ee === null) {
        S === null && (S = B);
        break;
      }
      e && S && Ee.alternate === null && t(f, S),
        (c = i(Ee, c, A)),
        E === null ? (k = Ee) : (E.sibling = Ee),
        (E = Ee),
        (S = B);
    }
    if (L.done) return n(f, S), Y && Vt(f, A), k;
    if (S === null) {
      for (; !L.done; A++, L = d.next())
        (L = p(f, L.value, v)),
          L !== null &&
            ((c = i(L, c, A)), E === null ? (k = L) : (E.sibling = L), (E = L));
      return Y && Vt(f, A), k;
    }
    for (S = r(f, S); !L.done; A++, L = d.next())
      (L = g(S, f, A, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && S.delete(L.key === null ? A : L.key),
          (c = i(L, c, A)),
          E === null ? (k = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        S.forEach(function (Mt) {
          return t(f, Mt);
        }),
      Y && Vt(f, A),
      k
    );
  }
  function C(f, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === dn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Xr:
          e: {
            for (var k = d.key, E = c; E !== null; ) {
              if (E.key === k) {
                if (((k = d.type), k === dn)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = l(E, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === vt &&
                    ia(k) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = l(E, d.props)),
                    (c.ref = er(f, E, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === dn
              ? ((c = Xt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Cl(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = er(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case fn:
          e: {
            for (E = d.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ro(d, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case vt:
          return (E = d._init), C(f, c, E(d._payload), v);
      }
      if (lr(d)) return y(f, c, d, v);
      if (Xn(d)) return w(f, c, d, v);
      ol(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = no(d, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return C;
}
var Tn = vf(!0),
  gf = vf(!1),
  Ql = Ot(null),
  Hl = null,
  Sn = null,
  Wu = null;
function Qu() {
  Wu = Sn = Hl = null;
}
function Hu(e) {
  var t = Ql.current;
  H(Ql), (e._currentValue = t);
}
function Ko(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (Hl = e),
    (Wu = Sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (Wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sn === null)) {
      if (Hl === null) throw Error(x(308));
      (Sn = e), (Hl.dependencies = { lanes: 0, firstContext: e });
    } else Sn = Sn.next = e;
  return t;
}
var Ht = null;
function Yu(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function yf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Yu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function Ku(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Yu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function yl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ju(e, n);
  }
}
function oa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yl(e, t, n, r) {
  var l = e.updateQueue;
  gt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(g, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(g, p, m) : y),
                m == null)
              )
                break e;
              p = X({}, p, m);
              break e;
            case 2:
              gt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (nn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function ua(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Vr = {},
  be = Ot(Vr),
  Ar = Ot(Vr),
  Rr = Ot(Vr);
function Yt(e) {
  if (e === Vr) throw Error(x(174));
  return e;
}
function Gu(e, t) {
  switch ((V(Rr, t), V(Ar, e), V(be, Vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = No(t, e));
  }
  H(be), V(be, t);
}
function Ln() {
  H(be), H(Ar), H(Rr);
}
function Sf(e) {
  Yt(Rr.current);
  var t = Yt(be.current),
    n = No(t, e.type);
  t !== n && (V(Ar, e), V(be, n));
}
function Xu(e) {
  Ar.current === e && (H(be), H(Ar));
}
var K = Ot(0);
function Kl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Zi = [];
function Zu() {
  for (var e = 0; e < Zi.length; e++)
    Zi[e]._workInProgressVersionPrimary = null;
  Zi.length = 0;
}
var wl = ft.ReactCurrentDispatcher,
  Ji = ft.ReactCurrentBatchConfig,
  tn = 0,
  G = null,
  te = null,
  re = null,
  Gl = !1,
  pr = !1,
  Ir = 0,
  Kh = 0;
function ae() {
  throw Error(x(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ke(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, l, i) {
  if (
    ((tn = i),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? Jh : qh),
    (e = n(r, l)),
    pr)
  ) {
    i = 0;
    do {
      if (((pr = !1), (Ir = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (re = te = null),
        (t.updateQueue = null),
        (wl.current = bh),
        (e = n(r, l));
    } while (pr);
  }
  if (
    ((wl.current = Xl),
    (t = te !== null && te.next !== null),
    (tn = 0),
    (re = te = G = null),
    (Gl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function bu() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function Xe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (G.memoizedState = re = e) : (re = re.next = e), re;
}
function Me() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? G.memoizedState : re.next;
  if (t !== null) (re = t), (te = e);
  else {
    if (e === null) throw Error(x(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (G.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qi(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = te,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((tn & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (G.lanes |= h),
          (nn |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Ke(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (G.lanes |= i), (nn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bi(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ke(i, t.memoizedState) || (ye = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function xf() {}
function kf(e, t) {
  var n = G,
    r = Me(),
    l = t(),
    i = !Ke(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    es(Pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Tr(9, Cf.bind(null, n, r, l, t), void 0, null),
      ie === null)
    )
      throw Error(x(349));
    tn & 30 || Ef(n, t, l);
  }
  return l;
}
function Ef(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), _f(t) && Nf(e);
}
function Pf(e, t, n) {
  return n(function () {
    _f(t) && Nf(e);
  });
}
function _f(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ke(e, n);
  } catch {
    return !0;
  }
}
function Nf(e) {
  var t = at(e, 1);
  t !== null && He(t, e, 1, -1);
}
function sa(e) {
  var t = Xe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Zh.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function Tr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zf() {
  return Me().memoizedState;
}
function Sl(e, t, n, r) {
  var l = Xe();
  (G.flags |= e),
    (l.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function hi(e, t, n, r) {
  var l = Me();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((i = o.destroy), r !== null && Ju(r, o.deps))) {
      l.memoizedState = Tr(t, n, i, r);
      return;
    }
  }
  (G.flags |= e), (l.memoizedState = Tr(1 | t, n, i, r));
}
function aa(e, t) {
  return Sl(8390656, 8, e, t);
}
function es(e, t) {
  return hi(2048, 8, e, t);
}
function Af(e, t) {
  return hi(4, 2, e, t);
}
function Rf(e, t) {
  return hi(4, 4, e, t);
}
function If(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), hi(4, 4, If.bind(null, t, e), n)
  );
}
function ts() {}
function Tf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Of(e, t, n) {
  return tn & 21
    ? (Ke(n, t) || ((n = Fc()), (G.lanes |= n), (nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function Gh(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ji.transition;
  Ji.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Ji.transition = r);
  }
}
function $f() {
  return Me().memoizedState;
}
function Xh(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mf(e))
  )
    Df(t, n);
  else if (((n = yf(e, t, n, r)), n !== null)) {
    var l = he();
    He(n, e, r, l), Ff(n, t, r);
  }
}
function Zh(e, t, n) {
  var r = At(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mf(e)) Df(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ke(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Yu(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = yf(e, t, l, r)),
      n !== null && ((l = he()), He(n, e, r, l), Ff(n, t, r));
  }
}
function Mf(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function Df(e, t) {
  pr = Gl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ff(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ju(e, n);
  }
}
var Xl = {
    readContext: $e,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  Jh = {
    readContext: $e,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: aa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Sl(4194308, 4, If.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xh.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sa,
    useDebugValue: ts,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e);
    },
    useTransition: function () {
      var e = sa(!1),
        t = e[0];
      return (e = Gh.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        l = Xe();
      if (Y) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(x(349));
        tn & 30 || Ef(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        aa(Pf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Tr(9, Cf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xe(),
        t = ie.identifierPrefix;
      if (Y) {
        var n = it,
          r = lt;
        (n = (r & ~(1 << (32 - Qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qh = {
    readContext: $e,
    useCallback: Tf,
    useContext: $e,
    useEffect: es,
    useImperativeHandle: jf,
    useInsertionEffect: Af,
    useLayoutEffect: Rf,
    useMemo: Lf,
    useReducer: qi,
    useRef: zf,
    useState: function () {
      return qi(jr);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Me();
      return Of(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = qi(jr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: kf,
    useId: $f,
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: $e,
    useCallback: Tf,
    useContext: $e,
    useEffect: es,
    useImperativeHandle: jf,
    useInsertionEffect: Af,
    useLayoutEffect: Rf,
    useMemo: Lf,
    useReducer: bi,
    useRef: zf,
    useState: function () {
      return bi(jr);
    },
    useDebugValue: ts,
    useDeferredValue: function (e) {
      var t = Me();
      return te === null ? (t.memoizedState = e) : Of(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = bi(jr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: kf,
    useId: $f,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var mi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      l = At(e),
      i = ot(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Nt(e, i, l)),
      t !== null && (He(t, e, l, r), yl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      l = At(e),
      i = ot(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Nt(e, i, l)),
      t !== null && (He(t, e, l, r), yl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = he(),
      r = At(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Nt(e, l, r)),
      t !== null && (He(t, e, r, n), yl(t, e, r));
  },
};
function ca(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Pr(n, r) || !Pr(l, i)
      : !0
  );
}
function Uf(e, t, n) {
  var r = !1,
    l = Tt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = $e(i))
      : ((l = xe(t) ? bt : de.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? In(e, l) : Tt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = mi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && mi.enqueueReplaceState(t, t.state, null);
}
function Xo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ku(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = $e(i))
    : ((i = xe(t) ? bt : de.current), (l.context = In(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Go(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && mi.enqueueReplaceState(l, l.state, null),
      Yl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Np(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function eo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var em = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jl || ((Jl = !0), (ou = r)), Zo(e, t);
    }),
    n
  );
}
function Vf(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Zo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Zo(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function da(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new em();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = hm.bind(null, e, t, n)), t.then(e, e));
}
function pa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ha(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tm = ft.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? gf(t, null, n, r) : Tn(t, e.child, n, r);
}
function ma(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    zn(t, l),
    (r = qu(e, t, n, r, i, l)),
    (n = bu()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Y && n && Uu(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function va(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !as(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Wf(e, t, i, r, l))
      : ((e = Cl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Pr), n(o, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Rt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wf(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Pr(i, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return Jo(e, t, n, r, l);
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(kn, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(kn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(kn, _e),
        (_e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(kn, _e),
      (_e |= r);
  return pe(e, t, l, n), t.child;
}
function Hf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Jo(e, t, n, r, l) {
  var i = xe(n) ? bt : de.current;
  return (
    (i = In(t, i)),
    zn(t, l),
    (n = qu(e, t, n, r, i, l)),
    (r = bu()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (Y && r && Uu(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function ga(e, t, n, r, l) {
  if (xe(n)) {
    var i = !0;
    Bl(t);
  } else i = !1;
  if ((zn(t, l), t.stateNode === null))
    xl(e, t), Uf(t, n, r), Xo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = $e(a))
      : ((a = xe(n) ? bt : de.current), (a = In(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && fa(t, o, r, a)),
      (gt = !1);
    var m = t.memoizedState;
    (o.state = m),
      Yl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || Se.current || gt
        ? (typeof h == "function" && (Go(t, n, h, r), (s = t.memoizedState)),
          (u = gt || ca(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      wf(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Be(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = $e(s))
        : ((s = xe(n) ? bt : de.current), (s = In(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && fa(t, o, r, s)),
      (gt = !1),
      (m = t.memoizedState),
      (o.state = m),
      Yl(t, r, o, l);
    var y = t.memoizedState;
    u !== p || m !== y || Se.current || gt
      ? (typeof g == "function" && (Go(t, n, g, r), (y = t.memoizedState)),
        (a = gt || ca(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return qo(e, t, n, r, i, l);
}
function qo(e, t, n, r, l, i) {
  Hf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && na(t, n, !1), ct(e, t, i);
  (r = t.stateNode), (tm.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Tn(t, e.child, null, i)), (t.child = Tn(t, null, u, i)))
      : pe(e, t, u, i),
    (t.memoizedState = r.state),
    l && na(t, n, !0),
    t.child
  );
}
function Yf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ta(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ta(e, t.context, !1),
    Gu(e, t.containerInfo);
}
function ya(e, t, n, r, l) {
  return jn(), Vu(l), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function eu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kf(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(K, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = yi(o, r, 0, null)),
              (e = Xt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = eu(n)),
              (t.memoizedState = bo),
              e)
            : ns(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return nm(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Rt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = Rt(u, i)) : ((i = Xt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? eu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bo),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Rt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ns(e, t) {
  return (
    (t = yi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ul(e, t, n, r) {
  return (
    r !== null && Vu(r),
    Tn(t, e.child, null, n),
    (e = ns(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nm(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = eo(Error(x(422)))), ul(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = yi({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Xt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Tn(t, e.child, null, o),
        (t.child.memoizedState = eu(o)),
        (t.memoizedState = bo),
        i);
  if (!(t.mode & 1)) return ul(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = eo(i, r, void 0)), ul(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ye || u)) {
    if (((r = ie), r !== null)) {
      switch (o & -o) {
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
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), at(e, l), He(r, e, l, -1));
    }
    return ss(), (r = eo(Error(x(421)))), ul(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ne = _t(l.nextSibling)),
      (ze = t),
      (Y = !0),
      (We = null),
      e !== null &&
        ((je[Te++] = lt),
        (je[Te++] = it),
        (je[Te++] = en),
        (lt = e.id),
        (it = e.overflow),
        (en = t)),
      (t = ns(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ko(e.return, t, n);
}
function to(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Gf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((pe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wa(e, n, t);
        else if (e.tag === 19) wa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          to(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        to(t, !0, n, null, i);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Rt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Rt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rm(e, t, n) {
  switch (t.tag) {
    case 3:
      Yf(t), jn();
      break;
    case 5:
      Sf(t);
      break;
    case 1:
      xe(t.type) && Bl(t);
      break;
    case 4:
      Gu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(Ql, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Kf(e, t, n)
          : (V(K, K.current & 1),
            (e = ct(e, t, n)),
            e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qf(e, t, n);
  }
  return ct(e, t, n);
}
var Xf, tu, Zf, Jf;
Xf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tu = function () {};
Zf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Yt(be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Eo(e, l)), (r = Eo(e, r)), (i = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = _o(e, l)), (r = _o(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fl);
    }
    zo(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (yr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (yr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && W("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Jf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function tr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lm(e, t, n) {
  var r = t.pendingProps;
  switch ((Bu(t), t.tag)) {
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
      return ce(t), null;
    case 1:
      return xe(t.type) && Ul(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ln(),
        H(Se),
        H(de),
        Zu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (il(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (au(We), (We = null)))),
        tu(e, t),
        ce(t),
        null
      );
    case 5:
      Xu(t);
      var l = Yt(Rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Zf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return ce(t), null;
        }
        if (((e = Yt(be.current)), il(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Je] = t), (r[zr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < or.length; l++) W(or[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              zs(r, i), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              Rs(r, i), W("invalid", r);
          }
          zo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ll(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      ll(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : yr.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              Zr(r), As(r, i, !0);
              break;
            case "textarea":
              Zr(r), Is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Fl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Je] = t),
            (e[zr] = r),
            Xf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ao(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < or.length; l++) W(or[l], e);
                l = r;
                break;
              case "source":
                W("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (l = r);
                break;
              case "details":
                W("toggle", e), (l = r);
                break;
              case "input":
                zs(e, r), (l = Eo(e, r)), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = X({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Rs(e, r), (l = _o(e, r)), W("invalid", e);
                break;
              default:
                l = r;
            }
            zo(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Nc(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Pc(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && wr(e, s)
                    : typeof s == "number" && wr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (yr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && W("scroll", e)
                      : s != null && _u(e, i, s, o));
              }
            switch (n) {
              case "input":
                Zr(e), As(e, r, !1);
                break;
              case "textarea":
                Zr(e), Is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Cn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Cn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Fl);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Jf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Yt(Rr.current)), Yt(be.current), il(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Je] = t),
            (i = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Je] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Ne !== null && t.mode & 1 && !(t.flags & 128))
          mf(), jn(), (t.flags |= 98560), (i = !1);
        else if (((i = il(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[Je] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (i = !1);
        } else We !== null && (au(We), (We = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ne === 0 && (ne = 3) : ss())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        Ln(), tu(e, t), e === null && _r(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Hu(t.type._context), ce(t), null;
    case 17:
      return xe(t.type) && Ul(), ce(t), null;
    case 19:
      if ((H(K), (i = t.memoizedState), i === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) tr(i, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Kl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    tr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            J() > $n &&
            ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              tr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !Y)
            )
              return ce(t), null;
          } else
            2 * J() - i.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), tr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          V(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        us(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function im(e, t) {
  switch ((Bu(t), t.tag)) {
    case 1:
      return (
        xe(t.type) && Ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ln(),
        H(Se),
        H(de),
        Zu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xu(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return Ln(), null;
    case 10:
      return Hu(t.type._context), null;
    case 22:
    case 23:
      return us(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var sl = !1,
  fe = !1,
  om = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function nu(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Sa = !1;
function um(e, t) {
  if (((Fo = $l), (e = tf()), Fu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Uo = { focusedElem: e, selectionRange: n }, $l = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    C = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Be(t.type, w),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (v) {
          Z(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (y = Sa), (Sa = !1), y;
}
function hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && nu(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function vi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ru(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Je], delete t[zr], delete t[Wo], delete t[Wh], delete t[Qh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; ) lu(e, t, n), (e = e.sibling);
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
var oe = null,
  Ve = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) ed(e, t, n), (n = n.sibling);
}
function ed(e, t, n) {
  if (qe && typeof qe.onCommitFiberUnmount == "function")
    try {
      qe.onCommitFiberUnmount(si, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || xn(n, t);
    case 6:
      var r = oe,
        l = Ve;
      (oe = null),
        ht(e, t, n),
        (oe = r),
        (Ve = l),
        oe !== null &&
          (Ve
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Ve
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gi(e.parentNode, n)
              : e.nodeType === 1 && Gi(e, n),
            Er(e))
          : Gi(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (l = Ve),
        (oe = n.stateNode.containerInfo),
        (Ve = !0),
        ht(e, t, n),
        (oe = r),
        (Ve = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && nu(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ht(e, t, n), (fe = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function ka(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()),
      t.forEach(function (r) {
        var l = vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ue(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (oe = u.stateNode), (Ve = !1);
              break e;
            case 3:
              (oe = u.stateNode.containerInfo), (Ve = !0);
              break e;
            case 4:
              (oe = u.stateNode.containerInfo), (Ve = !0);
              break e;
          }
          u = u.return;
        }
        if (oe === null) throw Error(x(160));
        ed(i, o, l), (oe = null), (Ve = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Z(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) td(t, e), (t = t.sibling);
}
function td(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Ge(e), r & 4)) {
        try {
          hr(3, e, e.return), vi(3, e);
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          hr(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      Ue(t, e), Ge(e), r & 512 && n !== null && xn(n, n.return);
      break;
    case 5:
      if (
        (Ue(t, e),
        Ge(e),
        r & 512 && n !== null && xn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          wr(l, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && kc(l, i),
              Ao(u, o);
            var a = Ao(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? Nc(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Pc(l, p)
                : h === "children"
                ? wr(l, p)
                : _u(l, h, p, a);
            }
            switch (u) {
              case "input":
                Co(l, i);
                break;
              case "textarea":
                Ec(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Cn(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Cn(l, !!i.multiple, i.defaultValue, !0)
                      : Cn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[zr] = i;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ue(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ue(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Er(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      Ue(t, e), Ge(e);
      break;
    case 13:
      Ue(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (is = J())),
        r & 4 && ka(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || h), Ue(t, e), (fe = a)) : Ue(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (z = e, h = e.child; h !== null; ) {
            for (p = z = h; z !== null; ) {
              switch (((m = z), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hr(4, m, m.return);
                  break;
                case 1:
                  xn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  xn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ca(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (z = g)) : Ca(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = _c("display", o)));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ue(t, e), Ge(e), r & 4 && ka(e);
      break;
    case 21:
      break;
    default:
      Ue(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (wr(l, ""), (r.flags &= -33));
          var i = xa(e);
          iu(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = xa(e);
          lu(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sm(e, t, n) {
  (z = e), nd(e);
}
function nd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || sl;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || fe;
        u = sl;
        var a = fe;
        if (((sl = o), (fe = s) && !a))
          for (z = l; z !== null; )
            (o = z),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Pa(l)
                : s !== null
                ? ((s.return = o), (z = s))
                : Pa(l);
        for (; i !== null; ) (z = i), nd(i), (i = i.sibling);
        (z = l), (sl = u), (fe = a);
      }
      Ea(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : Ea(e);
  }
}
function Ea(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || vi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ua(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ua(t, o, n);
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
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Er(p);
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
              throw Error(x(163));
          }
        fe || (t.flags & 512 && ru(t));
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ca(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Pa(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vi(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var i = t.return;
          try {
            ru(t);
          } catch (s) {
            Z(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ru(t);
          } catch (s) {
            Z(t, o, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var am = Math.ceil,
  Zl = ft.ReactCurrentDispatcher,
  rs = ft.ReactCurrentOwner,
  Oe = ft.ReactCurrentBatchConfig,
  $ = 0,
  ie = null,
  b = null,
  ue = 0,
  _e = 0,
  kn = Ot(0),
  ne = 0,
  Lr = null,
  nn = 0,
  gi = 0,
  ls = 0,
  mr = null,
  ge = null,
  is = 0,
  $n = 1 / 0,
  tt = null,
  Jl = !1,
  ou = null,
  zt = null,
  al = !1,
  xt = null,
  ql = 0,
  vr = 0,
  uu = null,
  kl = -1,
  El = 0;
function he() {
  return $ & 6 ? J() : kl !== -1 ? kl : (kl = J());
}
function At(e) {
  return e.mode & 1
    ? $ & 2 && ue !== 0
      ? ue & -ue
      : Yh.transition !== null
      ? (El === 0 && (El = Fc()), El)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yc(e.type))),
        e)
    : 1;
}
function He(e, t, n, r) {
  if (50 < vr) throw ((vr = 0), (uu = null), Error(x(185)));
  Fr(e, n, r),
    (!($ & 2) || e !== ie) &&
      (e === ie && (!($ & 2) && (gi |= n), ne === 4 && wt(e, ue)),
      ke(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && (($n = J() + 500), pi && $t()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Yp(e, t);
  var r = Ol(e, e === ie ? ue : 0);
  if (r === 0)
    n !== null && Ls(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ls(n), t === 1))
      e.tag === 0 ? Hh(_a.bind(null, e)) : df(_a.bind(null, e)),
        Bh(function () {
          !($ & 6) && $t();
        }),
        (n = null);
    else {
      switch (Uc(r)) {
        case 1:
          n = Iu;
          break;
        case 4:
          n = Mc;
          break;
        case 16:
          n = Ll;
          break;
        case 536870912:
          n = Dc;
          break;
        default:
          n = Ll;
      }
      n = cd(n, rd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rd(e, t) {
  if (((kl = -1), (El = 0), $ & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (An() && e.callbackNode !== n) return null;
  var r = Ol(e, e === ie ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var i = id();
    (ie !== e || ue !== t) && ((tt = null), ($n = J() + 500), Gt(e, t));
    do
      try {
        dm();
        break;
      } catch (u) {
        ld(e, u);
      }
    while (!0);
    Qu(),
      (Zl.current = i),
      ($ = l),
      b !== null ? (t = 0) : ((ie = null), (ue = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Lo(e)), l !== 0 && ((r = l), (t = su(e, l)))), t === 1)
    )
      throw ((n = Lr), Gt(e, 0), wt(e, r), ke(e, J()), n);
    if (t === 6) wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !cm(l) &&
          ((t = bl(e, r)),
          t === 2 && ((i = Lo(e)), i !== 0 && ((r = i), (t = su(e, i)))),
          t === 1))
      )
        throw ((n = Lr), Gt(e, 0), wt(e, r), ke(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Wt(e, ge, tt);
          break;
        case 3:
          if (
            (wt(e, r), (r & 130023424) === r && ((t = is + 500 - J()), 10 < t))
          ) {
            if (Ol(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              he(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Vo(Wt.bind(null, e, ge, tt), t);
            break;
          }
          Wt(e, ge, tt);
          break;
        case 4:
          if ((wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * am(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vo(Wt.bind(null, e, ge, tt), r);
            break;
          }
          Wt(e, ge, tt);
          break;
        case 5:
          Wt(e, ge, tt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return ke(e, J()), e.callbackNode === n ? rd.bind(null, e) : null;
}
function su(e, t) {
  var n = mr;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = bl(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && au(t)),
    e
  );
}
function au(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function wt(e, t) {
  for (
    t &= ~ls,
      t &= ~gi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function _a(e) {
  if ($ & 6) throw Error(x(327));
  An();
  var t = Ol(e, 0);
  if (!(t & 1)) return ke(e, J()), null;
  var n = bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lo(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = Lr), Gt(e, 0), wt(e, t), ke(e, J()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wt(e, ge, tt),
    ke(e, J()),
    null
  );
}
function os(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && (($n = J() + 500), pi && $t());
  }
}
function rn(e) {
  xt !== null && xt.tag === 0 && !($ & 6) && An();
  var t = $;
  $ |= 1;
  var n = Oe.transition,
    r = D;
  try {
    if (((Oe.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Oe.transition = n), ($ = t), !($ & 6) && $t();
  }
}
function us() {
  (_e = kn.current), H(kn);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uh(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n;
      switch ((Bu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ul();
          break;
        case 3:
          Ln(), H(Se), H(de), Zu();
          break;
        case 5:
          Xu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          Hu(r.type._context);
          break;
        case 22:
        case 23:
          us();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (b = e = Rt(e.current, null)),
    (ue = _e = t),
    (ne = 0),
    (Lr = null),
    (ls = gi = nn = 0),
    (ge = mr = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ht = null;
  }
  return e;
}
function ld(e, t) {
  do {
    var n = b;
    try {
      if ((Qu(), (wl.current = Xl), Gl)) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gl = !1;
      }
      if (
        ((tn = 0),
        (re = te = G = null),
        (pr = !1),
        (Ir = 0),
        (rs.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Lr = t), (b = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ue),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = pa(o);
          if (g !== null) {
            (g.flags &= -257),
              ha(g, o, u, i, t),
              g.mode & 1 && da(i, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              da(i, a, t), ss();
              break e;
            }
            s = Error(x(426));
          }
        } else if (Y && u.mode & 1) {
          var C = pa(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ha(C, o, u, i, t),
              Vu(On(s, u));
            break e;
          }
        }
        (i = s = On(s, u)),
          ne !== 4 && (ne = 2),
          mr === null ? (mr = [i]) : mr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Bf(i, s, t);
              oa(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (zt === null || !zt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Vf(i, u, t);
                oa(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ud(n);
    } catch (k) {
      (t = k), b === n && n !== null && (b = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function id() {
  var e = Zl.current;
  return (Zl.current = Xl), e === null ? Xl : e;
}
function ss() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    ie === null || (!(nn & 268435455) && !(gi & 268435455)) || wt(ie, ue);
}
function bl(e, t) {
  var n = $;
  $ |= 2;
  var r = id();
  (ie !== e || ue !== t) && ((tt = null), Gt(e, t));
  do
    try {
      fm();
      break;
    } catch (l) {
      ld(e, l);
    }
  while (!0);
  if ((Qu(), ($ = n), (Zl.current = r), b !== null)) throw Error(x(261));
  return (ie = null), (ue = 0), ne;
}
function fm() {
  for (; b !== null; ) od(b);
}
function dm() {
  for (; b !== null && !Mp(); ) od(b);
}
function od(e) {
  var t = ad(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? ud(e) : (b = t),
    (rs.current = null);
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        (n.flags &= 32767), (b = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (b = null);
        return;
      }
    } else if (((n = lm(n, t, _e)), n !== null)) {
      b = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      b = t;
      return;
    }
    b = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Wt(e, t, n) {
  var r = D,
    l = Oe.transition;
  try {
    (Oe.transition = null), (D = 1), pm(e, t, n, r);
  } finally {
    (Oe.transition = l), (D = r);
  }
  return null;
}
function pm(e, t, n, r) {
  do An();
  while (xt !== null);
  if ($ & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Kp(e, i),
    e === ie && ((b = ie = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      al ||
      ((al = !0),
      cd(Ll, function () {
        return An(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Oe.transition), (Oe.transition = null);
    var o = D;
    D = 1;
    var u = $;
    ($ |= 4),
      (rs.current = null),
      um(e, n),
      td(n, e),
      Th(Uo),
      ($l = !!Fo),
      (Uo = Fo = null),
      (e.current = n),
      sm(n),
      Dp(),
      ($ = u),
      (D = o),
      (Oe.transition = i);
  } else e.current = n;
  if (
    (al && ((al = !1), (xt = e), (ql = l)),
    (i = e.pendingLanes),
    i === 0 && (zt = null),
    Bp(n.stateNode),
    ke(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jl) throw ((Jl = !1), (e = ou), (ou = null), e);
  return (
    ql & 1 && e.tag !== 0 && An(),
    (i = e.pendingLanes),
    i & 1 ? (e === uu ? vr++ : ((vr = 0), (uu = e))) : (vr = 0),
    $t(),
    null
  );
}
function An() {
  if (xt !== null) {
    var e = Uc(ql),
      t = Oe.transition,
      n = D;
    try {
      if (((Oe.transition = null), (D = 16 > e ? 16 : e), xt === null))
        var r = !1;
      else {
        if (((e = xt), (xt = null), (ql = 0), $ & 6)) throw Error(x(331));
        var l = $;
        for ($ |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (z = a; z !== null; ) {
                  var h = z;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hr(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (z = p);
                  else
                    for (; z !== null; ) {
                      h = z;
                      var m = h.sibling,
                        g = h.return;
                      if ((qf(h), h === a)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (z = m);
                        break;
                      }
                      z = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hr(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (z = f);
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (z = d);
          else
            e: for (o = c; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vi(9, u);
                  }
                } catch (k) {
                  Z(u, u.return, k);
                }
              if (u === o) {
                z = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (z = v);
                break e;
              }
              z = u.return;
            }
        }
        if (
          (($ = l), $t(), qe && typeof qe.onPostCommitFiberRoot == "function")
        )
          try {
            qe.onPostCommitFiberRoot(si, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Oe.transition = t);
    }
  }
  return !1;
}
function Na(e, t, n) {
  (t = On(n, t)),
    (t = Bf(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = he()),
    e !== null && (Fr(e, 1, t), ke(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Na(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Na(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = On(n, e)),
            (e = Vf(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = he()),
            t !== null && (Fr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (ue & n) === n &&
      (ne === 4 || (ne === 3 && (ue & 130023424) === ue && 500 > J() - is)
        ? Gt(e, 0)
        : (ls |= n)),
    ke(e, t);
}
function sd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = br), (br <<= 1), !(br & 130023424) && (br = 4194304))
      : (t = 1));
  var n = he();
  (e = at(e, t)), e !== null && (Fr(e, t, n), ke(e, n));
}
function mm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), sd(e, n);
}
function vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), sd(e, n);
}
var ad;
ad = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), rm(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), Y && t.flags & 1048576 && pf(t, Wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xl(e, t), (e = t.pendingProps);
      var l = In(t, de.current);
      zn(t, n), (l = qu(null, t, r, e, l, n));
      var i = bu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xe(r) ? ((i = !0), Bl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ku(t),
            (l.updater = mi),
            (t.stateNode = l),
            (l._reactInternals = t),
            Xo(t, r, e, n),
            (t = qo(null, t, r, !0, i, n)))
          : ((t.tag = 0), Y && i && Uu(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ym(r)),
          (e = Be(r, e)),
          l)
        ) {
          case 0:
            t = Jo(null, t, r, e, n);
            break e;
          case 1:
            t = ga(null, t, r, e, n);
            break e;
          case 11:
            t = ma(null, t, r, e, n);
            break e;
          case 14:
            t = va(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Jo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        ga(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Yf(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          wf(e, t),
          Yl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = On(Error(x(423)), t)), (t = ya(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = On(Error(x(424)), t)), (t = ya(e, t, r, n, l));
            break e;
          } else
            for (
              Ne = _t(t.stateNode.containerInfo.firstChild),
                ze = t,
                Y = !0,
                We = null,
                n = gf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sf(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Bo(r, l) ? (o = null) : i !== null && Bo(r, i) && (t.flags |= 32),
        Hf(e, t),
        pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Kf(e, t, n);
    case 4:
      return (
        Gu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        ma(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          V(Ql, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ke(i.value, o)) {
            if (i.children === l.children && !Se.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = ot(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ko(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ko(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (l = $e(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Be(r, t.pendingProps)),
        (l = Be(r.type, l)),
        va(e, t, r, l, n)
      );
    case 15:
      return Wf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        xl(e, t),
        (t.tag = 1),
        xe(r) ? ((e = !0), Bl(t)) : (e = !1),
        zn(t, n),
        Uf(t, r, l),
        Xo(t, r, l, n),
        qo(null, t, r, !0, e, n)
      );
    case 19:
      return Gf(e, t, n);
    case 22:
      return Qf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function cd(e, t) {
  return $c(e, t);
}
function gm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, t, n, r) {
  return new gm(e, t, n, r);
}
function as(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ym(e) {
  if (typeof e == "function") return as(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zu)) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function Rt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Cl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) as(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case dn:
        return Xt(n.children, l, i, t);
      case Nu:
        (o = 8), (l |= 8);
        break;
      case wo:
        return (
          (e = Le(12, n, t, l | 2)), (e.elementType = wo), (e.lanes = i), e
        );
      case So:
        return (e = Le(13, n, t, l)), (e.elementType = So), (e.lanes = i), e;
      case xo:
        return (e = Le(19, n, t, l)), (e.elementType = xo), (e.lanes = i), e;
      case wc:
        return yi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gc:
              o = 10;
              break e;
            case yc:
              o = 9;
              break e;
            case zu:
              o = 11;
              break e;
            case Au:
              o = 14;
              break e;
            case vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Xt(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function yi(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = wc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function no(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function ro(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Mi(0)),
    (this.expirationTimes = Mi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Mi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function cs(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new wm(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Le(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ku(i),
    e
  );
}
function Sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fd(e) {
  if (!e) return Tt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xe(n)) return ff(e, n, t);
  }
  return t;
}
function dd(e, t, n, r, l, i, o, u, s) {
  return (
    (e = cs(n, r, !0, e, l, i, o, u, s)),
    (e.context = fd(null)),
    (n = e.current),
    (r = he()),
    (l = At(n)),
    (i = ot(r, l)),
    (i.callback = t ?? null),
    Nt(n, i, l),
    (e.current.lanes = l),
    Fr(e, l, r),
    ke(e, r),
    e
  );
}
function wi(e, t, n, r) {
  var l = t.current,
    i = he(),
    o = At(l);
  return (
    (n = fd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(l, t, o)),
    e !== null && (He(e, l, o, i), yl(e, l, o)),
    o
  );
}
function ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fs(e, t) {
  za(e, t), (e = e.alternate) && za(e, t);
}
function xm() {
  return null;
}
var pd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ds(e) {
  this._internalRoot = e;
}
Si.prototype.render = ds.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  wi(e, t, null, null);
};
Si.prototype.unmount = ds.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rn(function () {
      wi(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Si(e) {
  this._internalRoot = e;
}
Si.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yt.length && t !== 0 && t < yt[n].priority; n++);
    yt.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function ps(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function xi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Aa() {}
function km(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = ei(o);
        i.call(a);
      };
    }
    var o = dd(t, r, e, 0, null, !1, !1, "", Aa);
    return (
      (e._reactRootContainer = o),
      (e[st] = o.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      rn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = ei(s);
      u.call(a);
    };
  }
  var s = cs(e, 0, !1, null, null, !1, !1, "", Aa);
  return (
    (e._reactRootContainer = s),
    (e[st] = s.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    rn(function () {
      wi(t, s, n, r);
    }),
    s
  );
}
function ki(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ei(o);
        u.call(s);
      };
    }
    wi(t, o, e, l);
  } else o = km(n, t, e, l, r);
  return ei(o);
}
Bc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ir(t.pendingLanes);
        n !== 0 &&
          (ju(t, n | 1), ke(t, J()), !($ & 6) && (($n = J() + 500), $t()));
      }
      break;
    case 13:
      rn(function () {
        var r = at(e, 1);
        if (r !== null) {
          var l = he();
          He(r, e, 1, l);
        }
      }),
        fs(e, 1);
  }
};
Tu = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = he();
      He(t, e, 134217728, n);
    }
    fs(e, 134217728);
  }
};
Vc = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = at(e, t);
    if (n !== null) {
      var r = he();
      He(n, e, t, r);
    }
    fs(e, t);
  }
};
Wc = function () {
  return D;
};
Qc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Io = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Co(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = di(r);
            if (!l) throw Error(x(90));
            xc(r), Co(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ec(e, n);
      break;
    case "select":
      (t = n.value), t != null && Cn(e, !!n.multiple, t, !1);
  }
};
Rc = os;
Ic = rn;
var Em = { usingClientEntryPoint: !1, Events: [Br, vn, di, zc, Ac, os] },
  nr = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Cm = {
    bundleType: nr.bundleType,
    version: nr.version,
    rendererPackageName: nr.rendererPackageName,
    rendererConfig: nr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: nr.findFiberByHostInstance || xm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      (si = cl.inject(Cm)), (qe = cl);
    } catch {}
}
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Re.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ps(t)) throw Error(x(200));
  return Sm(e, t, null, n);
};
Re.createRoot = function (e, t) {
  if (!ps(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = pd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = cs(e, 1, !1, null, null, n, !1, r, l)),
    (e[st] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new ds(t)
  );
};
Re.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Lc(t)), (e = e === null ? null : e.stateNode), e;
};
Re.flushSync = function (e) {
  return rn(e);
};
Re.hydrate = function (e, t, n) {
  if (!xi(t)) throw Error(x(200));
  return ki(null, e, t, !0, n);
};
Re.hydrateRoot = function (e, t, n) {
  if (!ps(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = pd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = dd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[st] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Si(t);
};
Re.render = function (e, t, n) {
  if (!xi(t)) throw Error(x(200));
  return ki(null, e, t, !1, n);
};
Re.unmountComponentAtNode = function (e) {
  if (!xi(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (rn(function () {
        ki(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Re.unstable_batchedUpdates = os;
Re.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!xi(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ki(e, t, n, !1, r);
};
Re.version = "18.3.1-next-f1338f8080-20240426";
function hd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hd);
    } catch (e) {
      console.error(e);
    }
}
hd(), (pc.exports = Re);
var Pm = pc.exports,
  Ra = Pm;
(go.createRoot = Ra.createRoot), (go.hydrateRoot = Ra.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Or() {
  return (
    (Or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Or.apply(this, arguments)
  );
}
var kt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(kt || (kt = {}));
const Ia = "popstate";
function _m(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return cu(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : ti(l);
  }
  return zm(t, n, null, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function md(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Nm() {
  return Math.random().toString(36).substr(2, 8);
}
function ja(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function cu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Or(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Hn(t) : t,
      { state: n, key: (t && t.key) || r || Nm() }
    )
  );
}
function ti(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Hn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function zm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = kt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(Or({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    u = kt.Pop;
    let C = h(),
      f = C == null ? null : C - a;
    (a = C), s && s({ action: u, location: w.location, delta: f });
  }
  function m(C, f) {
    u = kt.Push;
    let c = cu(w.location, C, f);
    a = h() + 1;
    let d = ja(c, a),
      v = w.createHref(c);
    try {
      o.pushState(d, "", v);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(v);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(C, f) {
    u = kt.Replace;
    let c = cu(w.location, C, f);
    a = h();
    let d = ja(c, a),
      v = w.createHref(c);
    o.replaceState(d, "", v),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(C) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof C == "string" ? C : ti(C);
    return (
      (c = c.replace(/ $/, "%20")),
      ee(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ia, p),
        (s = C),
        () => {
          l.removeEventListener(Ia, p), (s = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: y,
    encodeLocation(C) {
      let f = y(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(C) {
      return o.go(C);
    },
  };
  return w;
}
var Ta;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ta || (Ta = {}));
function Am(e, t, n) {
  return n === void 0 && (n = "/"), Rm(e, t, n, !1);
}
function Rm(e, t, n, r) {
  let l = typeof t == "string" ? Hn(t) : t,
    i = hs(l.pathname || "/", n);
  if (i == null) return null;
  let o = vd(e);
  Im(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let a = Vm(i);
    u = Um(o[s], a, r);
  }
  return u;
}
function vd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (ee(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = It([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ee(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      vd(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Dm(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of gd(i.path)) l(i, o, s);
    }),
    t
  );
}
function gd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = gd(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Im(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const jm = /^:[\w-]+$/,
  Tm = 3,
  Lm = 2,
  Om = 1,
  $m = 10,
  Mm = -2,
  La = (e) => e === "*";
function Dm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(La) && (r += Mm),
    t && (r += Lm),
    n
      .filter((l) => !La(l))
      .reduce((l, i) => l + (jm.test(i) ? Tm : i === "" ? Om : $m), r)
  );
}
function Fm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Um(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = i === "/" ? t : t.slice(i.length) || "/",
      p = Oa(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Oa(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      o.push({
        params: l,
        pathname: It([i, p.pathname]),
        pathnameBase: Ym(It([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (i = It([i, p.pathnameBase]));
  }
  return o;
}
function Oa(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[p] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[p];
      return (
        g && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Bm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    md(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Vm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      md(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function hs(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Hn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Qm(n, t)) : t,
    search: Km(r),
    hash: Gm(l),
  };
}
function Qm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function lo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Hm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yd(e, t) {
  let n = Hm(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function wd(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Hn(e))
    : ((l = Or({}, e)),
      ee(
        !l.pathname || !l.pathname.includes("?"),
        lo("?", "pathname", "search", l)
      ),
      ee(
        !l.pathname || !l.pathname.includes("#"),
        lo("#", "pathname", "hash", l)
      ),
      ee(!l.search || !l.search.includes("#"), lo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Wm(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ym = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Km = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Gm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Xm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Sd = ["post", "put", "patch", "delete"];
new Set(Sd);
const Zm = ["get", ...Sd];
new Set(Zm);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
  return (
    ($r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $r.apply(this, arguments)
  );
}
const ms = N.createContext(null),
  Jm = N.createContext(null),
  un = N.createContext(null),
  Ei = N.createContext(null),
  sn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xd = N.createContext(null);
function qm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Wr() || ee(!1);
  let { basename: r, navigator: l } = N.useContext(un),
    { hash: i, pathname: o, search: u } = Ed(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : It([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function Wr() {
  return N.useContext(Ei) != null;
}
function Qr() {
  return Wr() || ee(!1), N.useContext(Ei).location;
}
function kd(e) {
  N.useContext(un).static || N.useLayoutEffect(e);
}
function bm() {
  let { isDataRoute: e } = N.useContext(sn);
  return e ? dv() : ev();
}
function ev() {
  Wr() || ee(!1);
  let e = N.useContext(ms),
    { basename: t, future: n, navigator: r } = N.useContext(un),
    { matches: l } = N.useContext(sn),
    { pathname: i } = Qr(),
    o = JSON.stringify(yd(l, n.v7_relativeSplatPath)),
    u = N.useRef(!1);
  return (
    kd(() => {
      u.current = !0;
    }),
    N.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = wd(a, JSON.parse(o), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : It([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function Ed(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(un),
    { matches: l } = N.useContext(sn),
    { pathname: i } = Qr(),
    o = JSON.stringify(yd(l, r.v7_relativeSplatPath));
  return N.useMemo(() => wd(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function tv(e, t) {
  return nv(e, t);
}
function nv(e, t, n, r) {
  Wr() || ee(!1);
  let { navigator: l } = N.useContext(un),
    { matches: i } = N.useContext(sn),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Qr(),
    h;
  if (t) {
    var p;
    let C = typeof t == "string" ? Hn(t) : t;
    s === "/" || ((p = C.pathname) != null && p.startsWith(s)) || ee(!1),
      (h = C);
  } else h = a;
  let m = h.pathname || "/",
    g = m;
  if (s !== "/") {
    let C = s.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let y = Am(e, { pathname: g }),
    w = uv(
      y &&
        y.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: It([
              s,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? s
                : It([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? N.createElement(
        Ei.Provider,
        {
          value: {
            location: $r(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: kt.Pop,
          },
        },
        w
      )
    : w;
}
function rv() {
  let e = fv(),
    t = Xm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: l }, n) : null,
    null
  );
}
const lv = N.createElement(rv, null);
class iv extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          sn.Provider,
          { value: this.props.routeContext },
          N.createElement(xd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ov(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = N.useContext(ms);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(sn.Provider, { value: t }, r)
  );
}
function uv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = o.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || ee(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, m) => {
    let g,
      y = !1,
      w = null,
      C = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || lv),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (C = null))
          : a === m &&
            ((y = !0), (C = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : y
            ? (d = C)
            : p.route.Component
            ? (d = N.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          N.createElement(ov, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? N.createElement(iv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Cd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Cd || {}),
  ni = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ni || {});
function sv(e) {
  let t = N.useContext(ms);
  return t || ee(!1), t;
}
function av(e) {
  let t = N.useContext(Jm);
  return t || ee(!1), t;
}
function cv(e) {
  let t = N.useContext(sn);
  return t || ee(!1), t;
}
function Pd(e) {
  let t = cv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function fv() {
  var e;
  let t = N.useContext(xd),
    n = av(ni.UseRouteError),
    r = Pd(ni.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dv() {
  let { router: e } = sv(Cd.UseNavigateStable),
    t = Pd(ni.UseNavigateStable),
    n = N.useRef(!1);
  return (
    kd(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, $r({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Pl(e) {
  ee(!1);
}
function pv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = kt.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  Wr() && ee(!1);
  let s = t.replace(/^\/*/, "/"),
    a = N.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: $r({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == "string" && (r = Hn(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = N.useMemo(() => {
      let C = hs(h, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: g, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, g, y, l]);
  return w == null
    ? null
    : N.createElement(
        un.Provider,
        { value: a },
        N.createElement(Ei.Provider, { children: n, value: w })
      );
}
function hv(e) {
  let { children: t, location: n } = e;
  return tv(fu(t), n);
}
new Promise(() => {});
function fu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, l) => {
      if (!N.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === N.Fragment) {
        n.push.apply(n, fu(r.props.children, i));
        return;
      }
      r.type !== Pl && ee(!1), !r.props.index || !r.props.children || ee(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = fu(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function du() {
  return (
    (du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    du.apply(this, arguments)
  );
}
function mv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function vv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !vv(e);
}
const yv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  wv = "6";
try {
  window.__reactRouterVersion = wv;
} catch {}
const Sv = "startTransition",
  $a = hp[Sv];
function xv(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = N.useRef();
  i.current == null && (i.current = _m({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = N.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = N.useCallback(
      (p) => {
        a && $a ? $a(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    N.useLayoutEffect(() => o.listen(h), [o, h]),
    N.createElement(pv, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const kv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ev = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  vs = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = t,
      m = mv(t, yv),
      { basename: g } = N.useContext(un),
      y,
      w = !1;
    if (typeof a == "string" && Ev.test(a) && ((y = a), kv))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
          k = hs(v.pathname, g);
        v.origin === d.origin && k != null
          ? (a = k + v.search + v.hash)
          : (w = !0);
      } catch {}
    let C = qm(a, { relative: l }),
      f = Cv(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return N.createElement(
      "a",
      du({}, m, { href: y || C, onClick: w || i ? r : c, ref: n, target: s })
    );
  });
var Ma;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ma || (Ma = {}));
var Da;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Da || (Da = {}));
function Cv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = bm(),
    a = Qr(),
    h = Ed(e, { relative: o });
  return N.useCallback(
    (p) => {
      if (gv(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : ti(a) === ti(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
var we = function () {
  return (
    (we =
      Object.assign ||
      function (t) {
        for (var n, r = 1, l = arguments.length; r < l; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    we.apply(this, arguments)
  );
};
function ri(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, i; r < l; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Q = "-ms-",
  gr = "-moz-",
  M = "-webkit-",
  _d = "comm",
  Ci = "rule",
  gs = "decl",
  Pv = "@import",
  Nd = "@keyframes",
  _v = "@layer",
  zd = Math.abs,
  ys = String.fromCharCode,
  pu = Object.assign;
function Nv(e, t) {
  return le(e, 0) ^ 45
    ? (((((((t << 2) ^ le(e, 0)) << 2) ^ le(e, 1)) << 2) ^ le(e, 2)) << 2) ^
        le(e, 3)
    : 0;
}
function Ad(e) {
  return e.trim();
}
function nt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function _l(e, t, n) {
  return e.indexOf(t, n);
}
function le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Mn(e, t, n) {
  return e.slice(t, n);
}
function Ze(e) {
  return e.length;
}
function Rd(e) {
  return e.length;
}
function ur(e, t) {
  return t.push(e), e;
}
function zv(e, t) {
  return e.map(t).join("");
}
function Fa(e, t) {
  return e.filter(function (n) {
    return !nt(n, t);
  });
}
var Pi = 1,
  Dn = 1,
  Id = 0,
  De = 0,
  q = 0,
  Yn = "";
function _i(e, t, n, r, l, i, o, u) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: l,
    children: i,
    line: Pi,
    column: Dn,
    length: o,
    return: "",
    siblings: u,
  };
}
function mt(e, t) {
  return pu(
    _i("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function cn(e) {
  for (; e.root; ) e = mt(e.root, { children: [e] });
  ur(e, e.siblings);
}
function Av() {
  return q;
}
function Rv() {
  return (q = De > 0 ? le(Yn, --De) : 0), Dn--, q === 10 && ((Dn = 1), Pi--), q;
}
function Ye() {
  return (
    (q = De < Id ? le(Yn, De++) : 0), Dn++, q === 10 && ((Dn = 1), Pi++), q
  );
}
function Zt() {
  return le(Yn, De);
}
function Nl() {
  return De;
}
function Ni(e, t) {
  return Mn(Yn, e, t);
}
function hu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Iv(e) {
  return (Pi = Dn = 1), (Id = Ze((Yn = e))), (De = 0), [];
}
function jv(e) {
  return (Yn = ""), e;
}
function io(e) {
  return Ad(Ni(De - 1, mu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tv(e) {
  for (; (q = Zt()) && q < 33; ) Ye();
  return hu(e) > 2 || hu(q) > 3 ? "" : " ";
}
function Lv(e, t) {
  for (
    ;
    --t &&
    Ye() &&
    !(q < 48 || q > 102 || (q > 57 && q < 65) || (q > 70 && q < 97));

  );
  return Ni(e, Nl() + (t < 6 && Zt() == 32 && Ye() == 32));
}
function mu(e) {
  for (; Ye(); )
    switch (q) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && mu(q);
        break;
      case 40:
        e === 41 && mu(e);
        break;
      case 92:
        Ye();
        break;
    }
  return De;
}
function Ov(e, t) {
  for (; Ye() && e + q !== 57; ) if (e + q === 84 && Zt() === 47) break;
  return "/*" + Ni(t, De - 1) + "*" + ys(e === 47 ? e : Ye());
}
function $v(e) {
  for (; !hu(Zt()); ) Ye();
  return Ni(e, De);
}
function Mv(e) {
  return jv(zl("", null, null, null, [""], (e = Iv(e)), 0, [0], e));
}
function zl(e, t, n, r, l, i, o, u, s) {
  for (
    var a = 0,
      h = 0,
      p = o,
      m = 0,
      g = 0,
      y = 0,
      w = 1,
      C = 1,
      f = 1,
      c = 0,
      d = "",
      v = l,
      k = i,
      E = r,
      S = d;
    C;

  )
    switch (((y = c), (c = Ye()))) {
      case 40:
        if (y != 108 && le(S, p - 1) == 58) {
          _l((S += j(io(c), "&", "&\f")), "&\f", zd(a ? u[a - 1] : 0)) != -1 &&
            (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += io(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Tv(y);
        break;
      case 92:
        S += Lv(Nl() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            ur(Dv(Ov(Ye(), Nl()), t, n, s), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * w:
        u[a++] = Ze(S) * f;
      case 125 * w:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            C = 0;
          case 59 + h:
            f == -1 && (S = j(S, /\f/g, "")),
              g > 0 &&
                Ze(S) - p &&
                ur(
                  g > 32
                    ? Ba(S + ";", r, n, p - 1, s)
                    : Ba(j(S, " ", "") + ";", r, n, p - 2, s),
                  s
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (ur(
                (E = Ua(S, t, n, a, h, l, u, d, (v = []), (k = []), p, i)),
                i
              ),
              c === 123)
            )
              if (h === 0) zl(S, t, E, E, v, i, p, u, k);
              else
                switch (m === 99 && le(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    zl(
                      e,
                      E,
                      E,
                      r && ur(Ua(e, E, E, 0, 0, l, u, d, l, (v = []), p, k), k),
                      l,
                      k,
                      p,
                      u,
                      r ? v : k
                    );
                    break;
                  default:
                    zl(S, E, E, E, [""], k, 0, u, k);
                }
        }
        (a = h = g = 0), (w = f = 1), (d = S = ""), (p = o);
        break;
      case 58:
        (p = 1 + Ze(S)), (g = y);
      default:
        if (w < 1) {
          if (c == 123) --w;
          else if (c == 125 && w++ == 0 && Rv() == 125) continue;
        }
        switch (((S += ys(c)), c * w)) {
          case 38:
            f = h > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (u[a++] = (Ze(S) - 1) * f), (f = 1);
            break;
          case 64:
            Zt() === 45 && (S += io(Ye())),
              (m = Zt()),
              (h = p = Ze((d = S += $v(Nl())))),
              c++;
            break;
          case 45:
            y === 45 && Ze(S) == 2 && (w = 0);
        }
    }
  return i;
}
function Ua(e, t, n, r, l, i, o, u, s, a, h, p) {
  for (
    var m = l - 1, g = l === 0 ? i : [""], y = Rd(g), w = 0, C = 0, f = 0;
    w < r;
    ++w
  )
    for (var c = 0, d = Mn(e, m + 1, (m = zd((C = o[w])))), v = e; c < y; ++c)
      (v = Ad(C > 0 ? g[c] + " " + d : j(d, /&\f/g, g[c]))) && (s[f++] = v);
  return _i(e, t, n, l === 0 ? Ci : u, s, a, h, p);
}
function Dv(e, t, n, r) {
  return _i(e, t, n, _d, ys(Av()), Mn(e, 2, -2), 0, r);
}
function Ba(e, t, n, r, l) {
  return _i(e, t, n, gs, Mn(e, 0, r), Mn(e, r + 1, -1), r, l);
}
function jd(e, t, n) {
  switch (Nv(e, t)) {
    case 5103:
      return M + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return M + e + e;
    case 4789:
      return gr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + gr + e + Q + e + e;
    case 5936:
      switch (le(e, t + 11)) {
        case 114:
          return M + e + Q + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + Q + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + Q + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return M + e + Q + e + e;
    case 6165:
      return M + e + Q + "flex-" + e + e;
    case 5187:
      return (
        M + e + j(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + Q + "flex-$1$2") + e
      );
    case 5443:
      return (
        M +
        e +
        Q +
        "flex-item-" +
        j(e, /flex-|-self/g, "") +
        (nt(e, /flex-|baseline/)
          ? ""
          : Q + "grid-row-" + j(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        M +
        e +
        Q +
        "flex-line-pack" +
        j(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return M + e + Q + j(e, "shrink", "negative") + e;
    case 5292:
      return M + e + Q + j(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        M +
        "box-" +
        j(e, "-grow", "") +
        M +
        e +
        Q +
        j(e, "grow", "positive") +
        e
      );
    case 4554:
      return M + j(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return (
        j(j(j(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return (
        j(
          j(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + Q + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        M +
        e +
        e
      );
    case 4200:
      if (!nt(e, /flex-|baseline/))
        return Q + "grid-column-align" + Mn(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Q + j(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, l) {
          return (t = l), nt(r.props, /grid-\w+-end/);
        })
        ? ~_l(e + (n = n[t].value), "span", 0)
          ? e
          : Q +
            j(e, "-start", "") +
            e +
            Q +
            "grid-row-span:" +
            (~_l(n, "span", 0) ? nt(n, /\d+/) : +nt(n, /\d+/) - +nt(e, /\d+/)) +
            ";"
        : Q + j(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return nt(r.props, /grid-\w+-start/);
        })
        ? e
        : Q + j(j(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, M + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ze(e) - 1 - t > 6)
        switch (le(e, t + 1)) {
          case 109:
            if (le(e, t + 4) !== 45) break;
          case 102:
            return (
              j(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  M +
                  "$2-$3$1" +
                  gr +
                  (le(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~_l(e, "stretch", 0)
              ? jd(j(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return j(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, l, i, o, u, s, a) {
          return (
            Q +
            l +
            ":" +
            i +
            a +
            (o ? Q + l + "-span:" + (u ? s : +s - +i) + a : "") +
            e
          );
        }
      );
    case 4949:
      if (le(e, t + 6) === 121) return j(e, ":", ":" + M) + e;
      break;
    case 6444:
      switch (le(e, le(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            j(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                M +
                (le(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                M +
                "$2$3$1" +
                Q +
                "$2box$3"
            ) + e
          );
        case 100:
          return j(e, ":", ":" + Q) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function li(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Fv(e, t, n, r) {
  switch (e.type) {
    case _v:
      if (e.children.length) break;
    case Pv:
    case gs:
      return (e.return = e.return || e.value);
    case _d:
      return "";
    case Nd:
      return (e.return = e.value + "{" + li(e.children, r) + "}");
    case Ci:
      if (!Ze((e.value = e.props.join(",")))) return "";
  }
  return Ze((n = li(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Uv(e) {
  var t = Rd(e);
  return function (n, r, l, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](n, r, l, i) || "";
    return o;
  };
}
function Bv(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Vv(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case gs:
        e.return = jd(e.value, e.length, n);
        return;
      case Nd:
        return li([mt(e, { value: j(e.value, "@", "@" + M) })], r);
      case Ci:
        if (e.length)
          return zv((n = e.props), function (l) {
            switch (nt(l, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                cn(mt(e, { props: [j(l, /:(read-\w+)/, ":" + gr + "$1")] })),
                  cn(mt(e, { props: [l] })),
                  pu(e, { props: Fa(n, r) });
                break;
              case "::placeholder":
                cn(
                  mt(e, { props: [j(l, /:(plac\w+)/, ":" + M + "input-$1")] })
                ),
                  cn(mt(e, { props: [j(l, /:(plac\w+)/, ":" + gr + "$1")] })),
                  cn(mt(e, { props: [j(l, /:(plac\w+)/, Q + "input-$1")] })),
                  cn(mt(e, { props: [l] })),
                  pu(e, { props: Fa(n, r) });
                break;
            }
            return "";
          });
    }
}
var Wv = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Pe = {},
  Fn =
    (typeof process < "u" &&
      Pe !== void 0 &&
      (Pe.REACT_APP_SC_ATTR || Pe.SC_ATTR)) ||
    "data-styled",
  Td = "active",
  Ld = "data-styled-version",
  zi = "6.1.12",
  ws = `/*!sc*/
`,
  ii = typeof window < "u" && "HTMLElement" in window,
  Qv = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Pe !== void 0 &&
      Pe.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Pe.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Pe.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Pe.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Pe !== void 0 &&
      Pe.SC_DISABLE_SPEEDY !== void 0 &&
      Pe.SC_DISABLE_SPEEDY !== "" &&
      Pe.SC_DISABLE_SPEEDY !== "false" &&
      Pe.SC_DISABLE_SPEEDY),
  Ai = Object.freeze([]),
  Un = Object.freeze({});
function Hv(e, t, n) {
  return (
    n === void 0 && (n = Un), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Od = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Yv = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Kv = /(^-|-$)/g;
function Va(e) {
  return e.replace(Yv, "-").replace(Kv, "");
}
var Gv = /(a)(d)/gi,
  fl = 52,
  Wa = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function vu(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > fl; t = (t / fl) | 0) n = Wa(t % fl) + n;
  return (Wa(t % fl) + n).replace(Gv, "$1-$2");
}
var oo,
  $d = 5381,
  En = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Md = function (e) {
    return En($d, e);
  };
function Xv(e) {
  return vu(Md(e) >>> 0);
}
function Zv(e) {
  return e.displayName || e.name || "Component";
}
function uo(e) {
  return typeof e == "string" && !0;
}
var Dd = typeof Symbol == "function" && Symbol.for,
  Fd = Dd ? Symbol.for("react.memo") : 60115,
  Jv = Dd ? Symbol.for("react.forward_ref") : 60112,
  qv = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  bv = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Ud = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  e0 =
    (((oo = {})[Jv] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (oo[Fd] = Ud),
    oo);
function Qa(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Fd
    ? Ud
    : "$$typeof" in e
    ? e0[e.$$typeof]
    : qv;
  var t;
}
var t0 = Object.defineProperty,
  n0 = Object.getOwnPropertyNames,
  Ha = Object.getOwnPropertySymbols,
  r0 = Object.getOwnPropertyDescriptor,
  l0 = Object.getPrototypeOf,
  Ya = Object.prototype;
function Bd(e, t, n) {
  if (typeof t != "string") {
    if (Ya) {
      var r = l0(t);
      r && r !== Ya && Bd(e, r, n);
    }
    var l = n0(t);
    Ha && (l = l.concat(Ha(t)));
    for (var i = Qa(e), o = Qa(t), u = 0; u < l.length; ++u) {
      var s = l[u];
      if (!(s in bv || (n && n[s]) || (o && s in o) || (i && s in i))) {
        var a = r0(t, s);
        try {
          t0(e, s, a);
        } catch {}
      }
    }
  }
  return e;
}
function Bn(e) {
  return typeof e == "function";
}
function Ss(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Kt(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ka(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Mr(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function gu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Mr(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = gu(e[r], t[r]);
  else if (Mr(t)) for (var r in t) e[r] = gu(e[r], t[r]);
  return e;
}
function xs(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Hr(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var i0 = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, l = r.length, i = l; t >= i; )
            if ((i <<= 1) < 0) throw Hr(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var o = l; o < i; o++) this.groupSizes[o] = 0;
        }
        for (
          var u = this.indexOfGroup(t + 1), s = ((o = 0), n.length);
          o < s;
          o++
        )
          this.tag.insertRule(u, n[o]) && (this.groupSizes[t]++, u++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            l = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < l; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            l = this.indexOfGroup(t),
            i = l + r,
            o = l;
          o < i;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(ws);
        return n;
      }),
      e
    );
  })(),
  Al = new Map(),
  oi = new Map(),
  Rl = 1,
  dl = function (e) {
    if (Al.has(e)) return Al.get(e);
    for (; oi.has(Rl); ) Rl++;
    var t = Rl++;
    return Al.set(e, t), oi.set(t, e), t;
  },
  o0 = function (e, t) {
    (Rl = t + 1), Al.set(e, t), oi.set(t, e);
  },
  u0 = "style[".concat(Fn, "][").concat(Ld, '="').concat(zi, '"]'),
  s0 = new RegExp(
    "^".concat(Fn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  a0 = function (e, t, n) {
    for (var r, l = n.split(","), i = 0, o = l.length; i < o; i++)
      (r = l[i]) && e.registerName(t, r);
  },
  c0 = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(ws),
        l = [],
        i = 0,
        o = r.length;
      i < o;
      i++
    ) {
      var u = r[i].trim();
      if (u) {
        var s = u.match(s0);
        if (s) {
          var a = 0 | parseInt(s[1], 10),
            h = s[2];
          a !== 0 && (o0(h, a), a0(e, h, s[3]), e.getTag().insertRules(a, l)),
            (l.length = 0);
        } else l.push(u);
      }
    }
  },
  Ga = function (e) {
    for (
      var t = document.querySelectorAll(u0), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var l = t[n];
      l &&
        l.getAttribute(Fn) !== Td &&
        (c0(e, l), l.parentNode && l.parentNode.removeChild(l));
    }
  };
function f0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Vd = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      l = (function (u) {
        var s = Array.from(u.querySelectorAll("style[".concat(Fn, "]")));
        return s[s.length - 1];
      })(n),
      i = l !== void 0 ? l.nextSibling : null;
    r.setAttribute(Fn, Td), r.setAttribute(Ld, zi);
    var o = f0();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
  },
  d0 = (function () {
    function e(t) {
      (this.element = Vd(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, l = 0, i = r.length; l < i; l++) {
            var o = r[l];
            if (o.ownerNode === n) return o;
          }
          throw Hr(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  p0 = (function () {
    function e(t) {
      (this.element = Vd(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  h0 = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Xa = ii,
  m0 = { isServer: !ii, useCSSOMInjection: !Qv },
  Wd = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Un), n === void 0 && (n = {});
      var l = this;
      (this.options = we(we({}, m0), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && ii && Xa && ((Xa = !1), Ga(this)),
        xs(this, function () {
          return (function (i) {
            for (
              var o = i.getTag(),
                u = o.length,
                s = "",
                a = function (p) {
                  var m = (function (f) {
                    return oi.get(f);
                  })(p);
                  if (m === void 0) return "continue";
                  var g = i.names.get(m),
                    y = o.getGroup(p);
                  if (g === void 0 || !g.size || y.length === 0)
                    return "continue";
                  var w = ""
                      .concat(Fn, ".g")
                      .concat(p, '[id="')
                      .concat(m, '"]'),
                    C = "";
                  g !== void 0 &&
                    g.forEach(function (f) {
                      f.length > 0 && (C += "".concat(f, ","));
                    }),
                    (s += ""
                      .concat(y)
                      .concat(w, '{content:"')
                      .concat(C, '"}')
                      .concat(ws));
                },
                h = 0;
              h < u;
              h++
            )
              a(h);
            return s;
          })(l);
        });
    }
    return (
      (e.registerId = function (t) {
        return dl(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && ii && Ga(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            we(we({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                l = n.target;
              return n.isServer ? new h0(l) : r ? new d0(l) : new p0(l);
            })(this.options)),
            new i0(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((dl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(dl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(dl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  v0 = /&/g,
  g0 = /^\s*\/\/.*$/gm;
function Qd(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Qd(n.children, t)),
      n
    );
  });
}
function y0(e) {
  var t,
    n,
    r,
    l = Un,
    i = l.options,
    o = i === void 0 ? Un : i,
    u = l.plugins,
    s = u === void 0 ? Ai : u,
    a = function (m, g, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : m;
    },
    h = s.slice();
  h.push(function (m) {
    m.type === Ci &&
      m.value.includes("&") &&
      (m.props[0] = m.props[0].replace(v0, n).replace(r, a));
  }),
    o.prefix && h.push(Vv),
    h.push(Fv);
  var p = function (m, g, y, w) {
    g === void 0 && (g = ""),
      y === void 0 && (y = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var C = m.replace(g0, ""),
      f = Mv(y || g ? "".concat(y, " ").concat(g, " { ").concat(C, " }") : C);
    o.namespace && (f = Qd(f, o.namespace));
    var c = [];
    return (
      li(
        f,
        Uv(
          h.concat(
            Bv(function (d) {
              return c.push(d);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (p.hash = s.length
      ? s
          .reduce(function (m, g) {
            return g.name || Hr(15), En(m, g.name);
          }, $d)
          .toString()
      : ""),
    p
  );
}
var w0 = new Wd(),
  yu = y0(),
  Hd = qt.createContext({
    shouldForwardProp: void 0,
    styleSheet: w0,
    stylis: yu,
  });
Hd.Consumer;
qt.createContext(void 0);
function Za() {
  return N.useContext(Hd);
}
var S0 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (l, i) {
        i === void 0 && (i = yu);
        var o = r.name + i.hash;
        l.hasNameForId(r.id, o) ||
          l.insertRules(r.id, o, i(r.rules, o, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        xs(this, function () {
          throw Hr(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = yu), this.name + t.hash;
      }),
      e
    );
  })(),
  x0 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Ja(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    x0(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Yd = function (e) {
    return e == null || e === !1 || e === "";
  },
  Kd = function (e) {
    var t,
      n,
      r = [];
    for (var l in e) {
      var i = e[l];
      e.hasOwnProperty(l) &&
        !Yd(i) &&
        ((Array.isArray(i) && i.isCss) || Bn(i)
          ? r.push("".concat(Ja(l), ":"), i, ";")
          : Mr(i)
          ? r.push.apply(r, ri(ri(["".concat(l, " {")], Kd(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Ja(l), ": ")
                .concat(
                  ((t = l),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in Wv ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Jt(e, t, n, r) {
  if (Yd(e)) return [];
  if (Ss(e)) return [".".concat(e.styledComponentId)];
  if (Bn(e)) {
    if (!Bn((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var l = e(t);
    return Jt(l, t, n, r);
  }
  var i;
  return e instanceof S0
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Mr(e)
    ? Kd(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ai,
        e.map(function (o) {
          return Jt(o, t, n, r);
        })
      )
    : [e.toString()];
}
function k0(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Bn(n) && !Ss(n)) return !1;
  }
  return !0;
}
var E0 = Md(zi),
  C0 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && k0(t)),
        (this.componentId = n),
        (this.baseHash = En(E0, n)),
        (this.baseStyle = r),
        Wd.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            l = Kt(l, this.staticRulesId);
          else {
            var i = Ka(Jt(this.rules, t, n, r)),
              o = vu(En(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var u = r(i, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, u);
            }
            (l = Kt(l, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var s = En(this.baseHash, r.hash), a = "", h = 0;
            h < this.rules.length;
            h++
          ) {
            var p = this.rules[h];
            if (typeof p == "string") a += p;
            else if (p) {
              var m = Ka(Jt(p, t, n, r));
              (s = En(s, m + h)), (a += m);
            }
          }
          if (a) {
            var g = vu(s >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(
                this.componentId,
                g,
                r(a, ".".concat(g), void 0, this.componentId)
              ),
              (l = Kt(l, g));
          }
        }
        return l;
      }),
      e
    );
  })(),
  Gd = qt.createContext(void 0);
Gd.Consumer;
var so = {};
function P0(e, t, n) {
  var r = Ss(e),
    l = e,
    i = !uo(e),
    o = t.attrs,
    u = o === void 0 ? Ai : o,
    s = t.componentId,
    a =
      s === void 0
        ? (function (v, k) {
            var E = typeof v != "string" ? "sc" : Va(v);
            so[E] = (so[E] || 0) + 1;
            var S = "".concat(E, "-").concat(Xv(zi + E + so[E]));
            return k ? "".concat(k, "-").concat(S) : S;
          })(t.displayName, t.parentComponentId)
        : s,
    h = t.displayName,
    p =
      h === void 0
        ? (function (v) {
            return uo(v) ? "styled.".concat(v) : "Styled(".concat(Zv(v), ")");
          })(e)
        : h,
    m =
      t.displayName && t.componentId
        ? "".concat(Va(t.displayName), "-").concat(t.componentId)
        : t.componentId || a,
    g = r && l.attrs ? l.attrs.concat(u).filter(Boolean) : u,
    y = t.shouldForwardProp;
  if (r && l.shouldForwardProp) {
    var w = l.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      y = function (v, k) {
        return w(v, k) && C(v, k);
      };
    } else y = w;
  }
  var f = new C0(n, m, r ? l.componentStyle : void 0);
  function c(v, k) {
    return (function (E, S, A) {
      var B = E.attrs,
        L = E.componentStyle,
        Ee = E.defaultProps,
        Mt = E.foldedComponentIds,
        Dt = E.styledComponentId,
        Yr = E.target,
        Ri = qt.useContext(Gd),
        Kn = Za(),
        Ft = E.shouldForwardProp || Kn.shouldForwardProp,
        _ = Hv(S, Ri, Ee) || Un,
        R = (function (dt, Ce, et) {
          for (
            var Gn,
              Bt = we(we({}, Ce), { className: void 0, theme: et }),
              Ii = 0;
            Ii < dt.length;
            Ii += 1
          ) {
            var Kr = Bn((Gn = dt[Ii])) ? Gn(Bt) : Gn;
            for (var pt in Kr)
              Bt[pt] =
                pt === "className"
                  ? Kt(Bt[pt], Kr[pt])
                  : pt === "style"
                  ? we(we({}, Bt[pt]), Kr[pt])
                  : Kr[pt];
          }
          return (
            Ce.className && (Bt.className = Kt(Bt.className, Ce.className)), Bt
          );
        })(B, S, _),
        I = R.as || Yr,
        F = {};
      for (var U in R)
        R[U] === void 0 ||
          U[0] === "$" ||
          U === "as" ||
          (U === "theme" && R.theme === _) ||
          (U === "forwardedAs"
            ? (F.as = R.forwardedAs)
            : (Ft && !Ft(U, I)) || (F[U] = R[U]));
      var Ut = (function (dt, Ce) {
          var et = Za(),
            Gn = dt.generateAndInjectStyles(Ce, et.styleSheet, et.stylis);
          return Gn;
        })(L, R),
        Fe = Kt(Mt, Dt);
      return (
        Ut && (Fe += " " + Ut),
        R.className && (Fe += " " + R.className),
        (F[uo(I) && !Od.has(I) ? "class" : "className"] = Fe),
        (F.ref = A),
        N.createElement(I, F)
      );
    })(d, v, k);
  }
  c.displayName = p;
  var d = qt.forwardRef(c);
  return (
    (d.attrs = g),
    (d.componentStyle = f),
    (d.displayName = p),
    (d.shouldForwardProp = y),
    (d.foldedComponentIds = r
      ? Kt(l.foldedComponentIds, l.styledComponentId)
      : ""),
    (d.styledComponentId = m),
    (d.target = r ? l.target : e),
    Object.defineProperty(d, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var E = [], S = 1; S < arguments.length; S++)
                E[S - 1] = arguments[S];
              for (var A = 0, B = E; A < B.length; A++) gu(k, B[A], !0);
              return k;
            })({}, l.defaultProps, v)
          : v;
      },
    }),
    xs(d, function () {
      return ".".concat(d.styledComponentId);
    }),
    i &&
      Bd(d, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    d
  );
}
function qa(e, t) {
  for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var ba = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function _0(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Bn(e) || Mr(e)) return ba(Jt(qa(Ai, ri([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Jt(r)
    : ba(Jt(qa(r, t)));
}
function wu(e, t, n) {
  if ((n === void 0 && (n = Un), !t)) throw Hr(1, t);
  var r = function (l) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return e(t, n, _0.apply(void 0, ri([l], i, !1)));
  };
  return (
    (r.attrs = function (l) {
      return wu(
        e,
        t,
        we(we({}, n), {
          attrs: Array.prototype.concat(n.attrs, l).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (l) {
      return wu(e, t, we(we({}, n), l));
    }),
    r
  );
}
var Xd = function (e) {
    return wu(P0, e);
  },
  T = Xd;
Od.forEach(function (e) {
  T[e] = Xd(e);
});
const Zd = "assets/logo-svic-DwEGuhK4.png",
  N0 = T.div`
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: #f7f7fb;
  width: 101%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  background-color: ${({ scrolled: e }) => (e ? "#ffffff" : "#f7f7fb")};
  box-shadow: ${({ scrolled: e }) =>
    e ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none"};
`,
  z0 = T.div`
  background-color: #f7f7fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled: e }) => (e ? "5px 20px" : "10px 20px")};
  width: 80%;
  background-color: ${({ scrolled: e }) => (e ? "#ffffff" : "#f7f7fb")};
`,
  A0 = T.div`
  img {
    height: ${({ scrolled: e }) => (e ? "40px" : "60px")};
    transition: height 0.3s;
  }
`,
  ec = T.div`
  display: flex;
  gap: 20px;
`,
  R0 = T(vs)`
  text-decoration: none;
  color: black;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`,
  I0 = () => {
    const [e, t] = N.useState(!1),
      n = Qr();
    N.useEffect(() => {
      const l = () => {
        t(window.scrollY > 300);
      };
      return (
        window.addEventListener("scroll", l),
        () => {
          window.removeEventListener("scroll", l);
        }
      );
    }, []);
    const r = ["/cookie-policy", "/privacy-policy"].includes(n.pathname);
    return P.jsx(N0, {
      scrolled: e,
      children: P.jsxs(z0, {
        scrolled: e,
        children: [
          P.jsx(vs, {
            to: "/",
            children: P.jsx(A0, {
              scrolled: e,
              children: P.jsx("img", { src: Zd, alt: "Logo" }),
            }),
          }),
          r
            ? P.jsx(ec, { children: P.jsx(R0, { to: "/", children: "Home" }) })
            : P.jsxs(ec, {
                children: [
                  P.jsx("a", {
                    className: "anchor-links",
                    href: "#servizi",
                    children: "Servizi",
                  }),
                  P.jsx("a", {
                    className: "anchor-links",
                    href: "#punti-interesse",
                    children: "Punti interesse",
                  }),
                ],
              }),
        ],
      }),
    });
  },
  j0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFcSURBVHgB5VXRUcMwDJVz/ScbkBFggmaEMkHDBHSDlg1ggrJBYAKnE4QNWiZINjBPPSXVuWlqBz644929U+1I79my0xD9Gzjn7sA1uAdrHtNPAZEUXIHWnWDFxNJUoDgHt2CjRDdsKM/f2IRigaKlEuX4wmYDefEGKMhEuJYdpCO5wQYz9buQ+CCRD/VS3a0Y5WquNcZ80siqNqrfU7HnTmjdZMArp+nIQKvbm9DvIwMX3WAWUPAKvg/Ms8gTXTY5ImQHLnK+BfvDNn22cwXCEtzJ1JzCz+MAPuIWVRQDeTfqgNvDN7BQ41WnkXhi1p3e5PK4RWPuEaora0lDVtoMrKyRZ5kbB+ctxgxKlbz1BK3kWBcGNsv9Fmn3L7TloMbd//6OwsDtyn2DVuIzxPnAMq8gFpVv0N3bG4ivEWuV/CFxToHiZ9f12iFLThPQ+/6jdAYxKVWy9Vr1N/EN1Io2aq46zboAAAAASUVORK5CYII=",
  T0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADTSURBVHgB5ZVNEcIwEIW3HQQgIRIqAQk4QAISqAMGBQUHOEBCcBAk4OCxLTlkMsnmB3qAfjPv0G2yL7t7WKK/A8CadWAZ5KNZA0ulkquCxDoQM+MDJYMBedzs+ZBJ7+ZsPY+OyngGYru5DZT7saI6OtvrE8vt+Ua8hTKOgfvTTNxY4xtQGQ8rspVMLW6YbxkEcQ1ampnUkMchXr3YlrWnTFIVIDMWZZkz8BFnUjODmjP2ZNkOiKFJqOBCn3OP/sF7mxnUY5C51c4ILxMpcQ9pm/0sL/YI5B5avQwdAAAAAElFTkSuQmCC",
  L0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEFSURBVHgB7ZXvDYIwEMUPwwCOwAY6gk7gCLqBOoGMABPIBo4AG8AGsAFscL6LJbnwXyp+4pe8AKV917vSQrQygtP3gpm3uBygLU2jgjLHcYrRnjC/QiXP4zGagZn91JkLHnSBzub5jkyCVgAYS8eDMZ8aoIASKQ3Gi+nVPB+pYX5hO26SeV3a1jTQlrIdufGJdICNirEnOzxVMuoKsAiuug+hE82noH+A8vt6DVz1Qj4vm3WQXRzSQGRrVAZ57bvUIif1jUu/J4OiVqvK9Mmfs0jaAkm50U92a9pXoiY6Azlu6yP6ZvrvjKnfGNd1TlU0BExitiMeC+BBL/7+P1CayXm0Moc3qoUIYVIuGyMAAAAASUVORK5CYII=",
  O0 = T.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 213px;
  padding-right: 213px;
  background-color: #f7f7fb;
  padding-top: 80px;
  padding-bottom: 80px;
`,
  $0 = T.div`
  max-width: 50%;
`,
  M0 = T.h2`
  color: #1d1e4b;
  font-size: 24px;
  font-weight: bold;
`,
  D0 = T.h3`
  color: #0703ff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`,
  F0 = T.p`
  color: #555;
  font-size: 16px;
  line-height: 1.5;
`,
  U0 = T.div`
  max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,
  ao = T.div`
  display: flex;
  align-items: start;
  margin-bottom: 20px;
  align-items: center;
`,
  co = T.div`
  background-color: blue;
  border-radius: 10px;
  width: 40px !important;
  height: 40px !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; // Aggiunto per includere padding e border
`,
  fo = T.img`
  width: 20px;
  height: 20px;
  padding: 0px 20px 0px 20px;
`,
  po = T.div`
  margin-left: 15px;
  h4 {
    margin: 0;
    color: #1d1e4b;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    margin: 5px 0 0;
    color: #555;
    font-size: 14px;
    line-height: 1.5;
  }
`,
  B0 = () =>
    P.jsxs(O0, {
      id: "servizi",
      children: [
        P.jsxs($0, {
          children: [
            P.jsx(D0, {
              children: "UN UNIVERSO DIGITALE DI INFINITE POSSIBILITÀ",
            }),
            P.jsx(M0, { children: "Esplorando i servizi del Metaverso" }),
            P.jsx(F0, {
              children:
                "Immagina un universo digitale interconnesso e vibrante, dove milioni di utenti provenienti da tutto il mondo si incontrano, socializzano e creano esperienze uniche. Nel metaverso, puoi esplorare ambienti virtuali mozzafiato, progettare e personalizzare il tuo spazio digitale, partecipare a eventi emozionanti e interagire con altri attraverso avatar personalizzati.",
            }),
          ],
        }),
        P.jsxs(U0, {
          children: [
            P.jsxs(ao, {
              children: [
                P.jsx(co, {
                  children: P.jsx(fo, {
                    className: "iconServices",
                    src: j0,
                    alt: "Ambienti virtuali personalizzabili",
                  }),
                }),
                P.jsxs(po, {
                  children: [
                    P.jsx("h4", {
                      children: "Ambienti virtuali personalizzabili",
                    }),
                    P.jsx("p", {
                      children:
                        "Consente agli utenti di creare e personalizzare i propri spazi virtuali all'interno del metaverso.",
                    }),
                  ],
                }),
              ],
            }),
            P.jsxs(ao, {
              children: [
                P.jsx(co, {
                  children: P.jsx(fo, {
                    className: "iconServices",
                    src: T0,
                    alt: "Socializzazione e intrattenimento",
                  }),
                }),
                P.jsxs(po, {
                  children: [
                    P.jsx("h4", {
                      children: "Socializzazione e intrattenimento",
                    }),
                    P.jsx("p", {
                      children:
                        "Il servizio di socializzazione e intrattenimento include varie attività come eventi virtuali, concerti, spettacoli.",
                    }),
                  ],
                }),
              ],
            }),
            P.jsxs(ao, {
              children: [
                P.jsx(co, {
                  children: P.jsx(fo, {
                    className: "iconServices",
                    src: L0,
                    alt: "Economia virtuale",
                  }),
                }),
                P.jsxs(po, {
                  children: [
                    P.jsx("h4", { children: "Economia virtuale" }),
                    P.jsx("p", {
                      children:
                        "Un'economia virtuale consente agli utenti di comprare, vendere e scambiare beni e servizi all'interno del metaverso.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  V0 = "assets/edificio-privato-CEJBhS4-.png",
  W0 = "assets/lab-sole-CzlNqAt3.png",
  Q0 = "assets/info-BXe8frll.png",
  H0 = T.div`
  background-color: #f7f7fb;
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
  Y0 = T.div`
  background-color: #f7f7fb;
  padding: 40px 20px;
  text-align: center;
  width: 70%;
  display: flex;
  flex-direction: column;
`,
  K0 = T.h2`
  color: #1d1e4b;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`,
  G0 = T.p`
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
`,
  X0 = T.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`,
  ho = T.div`
  max-width: 300px;
  text-align: left;
`,
  mo = T.img`
  width: 100%;
  margin-top: -20px;
  z-index: 1;
`,
  vo = T.h3`
  color: #1d1e4b;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0 5px;
`,
  Z0 = () =>
    P.jsx(H0, {
      id: "punti-interesse",
      children: P.jsxs(Y0, {
        children: [
          P.jsx(K0, { children: "Scopri i Punti d interesse del Metaverso" }),
          P.jsx(G0, {
            children:
              "All interno del metaverso, troverai una vasta gamma di punti d interesse che offrono esperienze straordinarie e coinvolgenti. C è qualcosa di affascinante per ogni tipo di avventuriero digitale.",
          }),
          P.jsxs(X0, {
            children: [
              P.jsxs(ho, {
                children: [
                  P.jsx(mo, { src: V0, alt: "Edificio privato" }),
                  P.jsx(vo, { children: "Edificio privato" }),
                ],
              }),
              P.jsxs(ho, {
                children: [
                  P.jsx(mo, { src: W0, alt: "Laboratorio del sole" }),
                  P.jsx(vo, { children: "Laboratorio del sole" }),
                ],
              }),
              P.jsxs(ho, {
                children: [
                  P.jsx(mo, { src: Q0, alt: "Infopoint" }),
                  P.jsx(vo, { children: "Infopoint" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  J0 = T.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: white;
`,
  q0 = T.div`
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 60%;
`,
  b0 = T.div`
  color: #555;
  font-size: 14px;
`,
  eg = T.img`
  height: 50px;
`,
  tc = T(vs)`
  color: #555;
  font-size: 14px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,
  tg = () =>
    P.jsx(J0, {
      children: P.jsxs(q0, {
        children: [
          P.jsx(b0, {
            children: "Copyright © 2024 Advepa | All Rights Reserved",
          }),
          P.jsx(eg, { src: Zd, alt: "Logo" }),
          P.jsxs("div", {
            children: [
              P.jsx(tc, { to: "/cookie-policy", children: "Cookie Policy" }),
              " |",
              " ",
              P.jsx(tc, { to: "/privacy-policy", children: "Privacy Policy" }),
            ],
          }),
        ],
      }),
    }),
  ng = T.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`,
  rg = T.div`
  width: 95%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
`,
  lg = T.iframe`
  width: 100%;
  height: 98%;
  border: none;
  border-radius: 20px;
`,
  ig = () =>
    P.jsx(ng, {
      children: P.jsx(rg, {
        children: P.jsx(lg, { src: "https://svic.ch/land/index.html" }),
      }),
    }),
  og = T.div`
  padding: 40px;
  text-align: left;
  background-color: #f7f7fb;
  color: #1d1e4b;
  width: 100%;
  height: 70vh;
`,
  ug = T.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
T.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const sg = () =>
    P.jsx(og, { children: P.jsx(ug, { children: "Cookie Policy" }) }),
  ag = T.div`
  padding: 40px;
  text-align: left;
  background-color: #f7f7fb;
  color: #1d1e4b;
  width: 100%;
  height: 70vh;
`,
  cg = T.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
T.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
const fg = () =>
  P.jsx(ag, { children: P.jsx(cg, { children: "Privacy Policy" }) });
function dg() {
  return P.jsxs(xv, {
    children: [
      P.jsx(I0, {}),
      P.jsxs(hv, {
        children: [
          P.jsx(Pl, {
            path: "/",
            element: P.jsxs(P.Fragment, {
              children: [P.jsx(ig, {}), P.jsx(B0, {}), P.jsx(Z0, {})],
            }),
          }),
          P.jsx(Pl, { path: "/cookie-policy", element: P.jsx(sg, {}) }),
          P.jsx(Pl, { path: "/privacy-policy", element: P.jsx(fg, {}) }),
        ],
      }),
      P.jsx(tg, {}),
    ],
  });
}
go.createRoot(document.getElementById("root")).render(
  P.jsx(qt.StrictMode, { children: P.jsx(dg, {}) })
);
