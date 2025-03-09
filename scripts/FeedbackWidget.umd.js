(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.NotofoxWidget = {}));
})(this, function(exports2) {
  "use strict";
  function _mergeNamespaces(n, m) {
    for (var i = 0; i < m.length; i++) {
      const e = m[i];
      if (typeof e !== "string" && !Array.isArray(e)) {
        for (const k in e) {
          if (k !== "default" && !(k in n)) {
            const d = Object.getOwnPropertyDescriptor(e, k);
            if (d) {
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: () => e[k]
              });
            }
          }
        }
      }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production;
  function requireReactJsxRuntime_production() {
    if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
    hasRequiredReactJsxRuntime_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    function jsxProd(type, config, maybeKey) {
      var key = null;
      void 0 !== maybeKey && (key = "" + maybeKey);
      void 0 !== config.key && (key = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      config = maybeKey.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== config ? config : null,
        props: maybeKey
      };
    }
    reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_production.jsx = jsxProd;
    reactJsxRuntime_production.jsxs = jsxProd;
    return reactJsxRuntime_production;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_production();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  var react = { exports: {} };
  var react_production = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReact_production;
  function requireReact_production() {
    if (hasRequiredReact_production) return react_production;
    hasRequiredReact_production = 1;
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var ReactNoopUpdateQueue = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, assign = Object.assign, emptyObject = {};
    function Component(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
      if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component.prototype;
    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent;
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    var isArrayImpl = Array.isArray, ReactSharedInternals = { H: null, A: null, T: null, S: null }, hasOwnProperty = Object.prototype.hasOwnProperty;
    function ReactElement(type, key, self2, source, owner, props) {
      self2 = props.ref;
      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref: void 0 !== self2 ? self2 : null,
        props
      };
    }
    function cloneAndReplaceKey(oldElement, newKey) {
      return ReactElement(
        oldElement.type,
        newKey,
        void 0,
        void 0,
        void 0,
        oldElement.props
      );
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
      var escaperLookup = { "=": "=0", ":": "=2" };
      return "$" + key.replace(/[=:]/g, function(match) {
        return escaperLookup[match];
      });
    }
    var userProvidedKeyEscapeRegex = /\/+/g;
    function getElementKey(element, index2) {
      return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index2.toString(36);
    }
    function noop$12() {
    }
    function resolveThenable(thenable) {
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
        default:
          switch ("string" === typeof thenable.status ? thenable.then(noop$12, noop$12) : (thenable.status = "pending", thenable.then(
            function(fulfilledValue) {
              "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
            },
            function(error) {
              "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
            }
          )), thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              throw thenable.reason;
          }
      }
      throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
      var type = typeof children;
      if ("undefined" === type || "boolean" === type) children = null;
      var invokeCallback = false;
      if (null === children) invokeCallback = true;
      else
        switch (type) {
          case "bigint":
          case "string":
          case "number":
            invokeCallback = true;
            break;
          case "object":
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
                break;
              case REACT_LAZY_TYPE:
                return invokeCallback = children._init, mapIntoArray(
                  invokeCallback(children._payload),
                  array,
                  escapedPrefix,
                  nameSoFar,
                  callback
                );
            }
        }
      if (invokeCallback)
        return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
          return c;
        })) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(
          callback,
          escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(
            userProvidedKeyEscapeRegex,
            "$&/"
          ) + "/") + invokeCallback
        )), array.push(callback)), 1;
      invokeCallback = 0;
      var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
      if (isArrayImpl(children))
        for (var i = 0; i < children.length; i++)
          nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if (i = getIteratorFn(children), "function" === typeof i)
        for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
          nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
            nameSoFar,
            array,
            escapedPrefix,
            type,
            callback
          );
      else if ("object" === type) {
        if ("function" === typeof children.then)
          return mapIntoArray(
            resolveThenable(children),
            array,
            escapedPrefix,
            nameSoFar,
            callback
          );
        array = String(children);
        throw Error(
          "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
        );
      }
      return invokeCallback;
    }
    function mapChildren(children, func, context) {
      if (null == children) return children;
      var result = [], count2 = 0;
      mapIntoArray(children, result, "", "", function(child) {
        return func.call(context, child, count2++);
      });
      return result;
    }
    function lazyInitializer(payload) {
      if (-1 === payload._status) {
        var ctor = payload._result;
        ctor = ctor();
        ctor.then(
          function(moduleObject) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 1, payload._result = moduleObject;
          },
          function(error) {
            if (0 === payload._status || -1 === payload._status)
              payload._status = 2, payload._result = error;
          }
        );
        -1 === payload._status && (payload._status = 0, payload._result = ctor);
      }
      if (1 === payload._status) return payload._result.default;
      throw payload._result;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function noop2() {
    }
    react_production.Children = {
      map: mapChildren,
      forEach: function(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function() {
            forEachFunc.apply(this, arguments);
          },
          forEachContext
        );
      },
      count: function(children) {
        var n = 0;
        mapChildren(children, function() {
          n++;
        });
        return n;
      },
      toArray: function(children) {
        return mapChildren(children, function(child) {
          return child;
        }) || [];
      },
      only: function(children) {
        if (!isValidElement(children))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return children;
      }
    };
    react_production.Component = Component;
    react_production.Fragment = REACT_FRAGMENT_TYPE;
    react_production.Profiler = REACT_PROFILER_TYPE;
    react_production.PureComponent = PureComponent;
    react_production.StrictMode = REACT_STRICT_MODE_TYPE;
    react_production.Suspense = REACT_SUSPENSE_TYPE;
    react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    react_production.act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production.cache = function(fn) {
      return function() {
        return fn.apply(null, arguments);
      };
    };
    react_production.cloneElement = function(element, config, children) {
      if (null === element || void 0 === element)
        throw Error(
          "The argument must be a React element, but you passed " + element + "."
        );
      var props = assign({}, element.props), key = element.key, owner = void 0;
      if (null != config)
        for (propName in void 0 !== config.ref && (owner = void 0), void 0 !== config.key && (key = "" + config.key), config)
          !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
      var propName = arguments.length - 2;
      if (1 === propName) props.children = children;
      else if (1 < propName) {
        for (var childArray = Array(propName), i = 0; i < propName; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      return ReactElement(element.type, key, void 0, void 0, owner, props);
    };
    react_production.createContext = function(defaultValue) {
      defaultValue = {
        $$typeof: REACT_CONTEXT_TYPE,
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      };
      defaultValue.Provider = defaultValue;
      defaultValue.Consumer = {
        $$typeof: REACT_CONSUMER_TYPE,
        _context: defaultValue
      };
      return defaultValue;
    };
    react_production.createElement = function(type, config, children) {
      var propName, props = {}, key = null;
      if (null != config)
        for (propName in void 0 !== config.key && (key = "" + config.key), config)
          hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
      var childrenLength = arguments.length - 2;
      if (1 === childrenLength) props.children = children;
      else if (1 < childrenLength) {
        for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
          childArray[i] = arguments[i + 2];
        props.children = childArray;
      }
      if (type && type.defaultProps)
        for (propName in childrenLength = type.defaultProps, childrenLength)
          void 0 === props[propName] && (props[propName] = childrenLength[propName]);
      return ReactElement(type, key, void 0, void 0, null, props);
    };
    react_production.createRef = function() {
      return { current: null };
    };
    react_production.forwardRef = function(render) {
      return { $$typeof: REACT_FORWARD_REF_TYPE, render };
    };
    react_production.isValidElement = isValidElement;
    react_production.lazy = function(ctor) {
      return {
        $$typeof: REACT_LAZY_TYPE,
        _payload: { _status: -1, _result: ctor },
        _init: lazyInitializer
      };
    };
    react_production.memo = function(type, compare) {
      return {
        $$typeof: REACT_MEMO_TYPE,
        type,
        compare: void 0 === compare ? null : compare
      };
    };
    react_production.startTransition = function(scope) {
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      try {
        var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop2, reportGlobalError);
      } catch (error) {
        reportGlobalError(error);
      } finally {
        ReactSharedInternals.T = prevTransition;
      }
    };
    react_production.unstable_useCacheRefresh = function() {
      return ReactSharedInternals.H.useCacheRefresh();
    };
    react_production.use = function(usable) {
      return ReactSharedInternals.H.use(usable);
    };
    react_production.useActionState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useActionState(action, initialState, permalink);
    };
    react_production.useCallback = function(callback, deps) {
      return ReactSharedInternals.H.useCallback(callback, deps);
    };
    react_production.useContext = function(Context) {
      return ReactSharedInternals.H.useContext(Context);
    };
    react_production.useDebugValue = function() {
    };
    react_production.useDeferredValue = function(value, initialValue) {
      return ReactSharedInternals.H.useDeferredValue(value, initialValue);
    };
    react_production.useEffect = function(create, deps) {
      return ReactSharedInternals.H.useEffect(create, deps);
    };
    react_production.useId = function() {
      return ReactSharedInternals.H.useId();
    };
    react_production.useImperativeHandle = function(ref2, create, deps) {
      return ReactSharedInternals.H.useImperativeHandle(ref2, create, deps);
    };
    react_production.useInsertionEffect = function(create, deps) {
      return ReactSharedInternals.H.useInsertionEffect(create, deps);
    };
    react_production.useLayoutEffect = function(create, deps) {
      return ReactSharedInternals.H.useLayoutEffect(create, deps);
    };
    react_production.useMemo = function(create, deps) {
      return ReactSharedInternals.H.useMemo(create, deps);
    };
    react_production.useOptimistic = function(passthrough, reducer) {
      return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
    };
    react_production.useReducer = function(reducer, initialArg, init) {
      return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
    };
    react_production.useRef = function(initialValue) {
      return ReactSharedInternals.H.useRef(initialValue);
    };
    react_production.useState = function(initialState) {
      return ReactSharedInternals.H.useState(initialState);
    };
    react_production.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
      return ReactSharedInternals.H.useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
      );
    };
    react_production.useTransition = function() {
      return ReactSharedInternals.H.useTransition();
    };
    react_production.version = "19.0.0";
    return react_production;
  }
  var hasRequiredReact;
  function requireReact() {
    if (hasRequiredReact) return react.exports;
    hasRequiredReact = 1;
    {
      react.exports = requireReact_production();
    }
    return react.exports;
  }
  var reactExports = requireReact();
  const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  const React$1 = /* @__PURE__ */ _mergeNamespaces({
    __proto__: null,
    default: React
  }, [reactExports]);
  var client = { exports: {} };
  var reactDomClient_production = {};
  var scheduler = { exports: {} };
  var scheduler_production = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredScheduler_production;
  function requireScheduler_production() {
    if (hasRequiredScheduler_production) return scheduler_production;
    hasRequiredScheduler_production = 1;
    (function(exports3) {
      function push(heap, node) {
        var index2 = heap.length;
        heap.push(node);
        a: for (; 0 < index2; ) {
          var parentIndex = index2 - 1 >>> 1, parent = heap[parentIndex];
          if (0 < compare(parent, node))
            heap[parentIndex] = node, heap[index2] = parent, index2 = parentIndex;
          else break a;
        }
      }
      function peek(heap) {
        return 0 === heap.length ? null : heap[0];
      }
      function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
          heap[0] = last;
          a: for (var index2 = 0, length = heap.length, halfLength = length >>> 1; index2 < halfLength; ) {
            var leftIndex = 2 * (index2 + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
            if (0 > compare(left, last))
              rightIndex < length && 0 > compare(right, left) ? (heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex) : (heap[index2] = left, heap[leftIndex] = last, index2 = leftIndex);
            else if (rightIndex < length && 0 > compare(right, last))
              heap[index2] = right, heap[rightIndex] = last, index2 = rightIndex;
            else break a;
          }
        }
        return first;
      }
      function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
      }
      exports3.unstable_now = void 0;
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports3.unstable_now = function() {
          return localPerformance.now();
        };
      } else {
        var localDate = Date, initialTime = localDate.now();
        exports3.unstable_now = function() {
          return localDate.now() - initialTime;
        };
      }
      var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = false, isHostCallbackScheduled = false, isHostTimeoutScheduled = false, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
      function advanceTimers(currentTime) {
        for (var timer = peek(timerQueue); null !== timer; ) {
          if (null === timer.callback) pop(timerQueue);
          else if (timer.startTime <= currentTime)
            pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
          else break;
          timer = peek(timerQueue);
        }
      }
      function handleTimeout(currentTime) {
        isHostTimeoutScheduled = false;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled)
          if (null !== peek(taskQueue))
            isHostCallbackScheduled = true, requestHostCallback();
          else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
      }
      var isMessageLoopRunning = false, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
      function shouldYieldToHost() {
        return exports3.unstable_now() - startTime < frameInterval ? false : true;
      }
      function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
          var currentTime = exports3.unstable_now();
          startTime = currentTime;
          var hasMoreWork = true;
          try {
            a: {
              isHostCallbackScheduled = false;
              isHostTimeoutScheduled && (isHostTimeoutScheduled = false, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
              isPerformingWork = true;
              var previousPriorityLevel = currentPriorityLevel;
              try {
                b: {
                  advanceTimers(currentTime);
                  for (currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost()); ) {
                    var callback = currentTask.callback;
                    if ("function" === typeof callback) {
                      currentTask.callback = null;
                      currentPriorityLevel = currentTask.priorityLevel;
                      var continuationCallback = callback(
                        currentTask.expirationTime <= currentTime
                      );
                      currentTime = exports3.unstable_now();
                      if ("function" === typeof continuationCallback) {
                        currentTask.callback = continuationCallback;
                        advanceTimers(currentTime);
                        hasMoreWork = true;
                        break b;
                      }
                      currentTask === peek(taskQueue) && pop(taskQueue);
                      advanceTimers(currentTime);
                    } else pop(taskQueue);
                    currentTask = peek(taskQueue);
                  }
                  if (null !== currentTask) hasMoreWork = true;
                  else {
                    var firstTimer = peek(timerQueue);
                    null !== firstTimer && requestHostTimeout(
                      handleTimeout,
                      firstTimer.startTime - currentTime
                    );
                    hasMoreWork = false;
                  }
                }
                break a;
              } finally {
                currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = false;
              }
              hasMoreWork = void 0;
            }
          } finally {
            hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = false;
          }
        }
      }
      var schedulePerformWorkUntilDeadline;
      if ("function" === typeof localSetImmediate)
        schedulePerformWorkUntilDeadline = function() {
          localSetImmediate(performWorkUntilDeadline);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
          port.postMessage(null);
        };
      } else
        schedulePerformWorkUntilDeadline = function() {
          localSetTimeout(performWorkUntilDeadline, 0);
        };
      function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = true, schedulePerformWorkUntilDeadline());
      }
      function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
          callback(exports3.unstable_now());
        }, ms);
      }
      exports3.unstable_IdlePriority = 5;
      exports3.unstable_ImmediatePriority = 1;
      exports3.unstable_LowPriority = 4;
      exports3.unstable_NormalPriority = 3;
      exports3.unstable_Profiling = null;
      exports3.unstable_UserBlockingPriority = 2;
      exports3.unstable_cancelCallback = function(task) {
        task.callback = null;
      };
      exports3.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback());
      };
      exports3.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
      };
      exports3.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
      };
      exports3.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
      };
      exports3.unstable_next = function(eventHandler) {
        switch (currentPriorityLevel) {
          case 1:
          case 2:
          case 3:
            var priorityLevel = 3;
            break;
          default:
            priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports3.unstable_pauseExecution = function() {
      };
      exports3.unstable_requestPaint = function() {
      };
      exports3.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch (priorityLevel) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
          return eventHandler();
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
      exports3.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports3.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch (priorityLevel) {
          case 1:
            var timeout = -1;
            break;
          case 2:
            timeout = 250;
            break;
          case 5:
            timeout = 1073741823;
            break;
          case 4:
            timeout = 1e4;
            break;
          default:
            timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
          id: taskIdCounter++,
          callback,
          priorityLevel,
          startTime: options,
          expirationTime: timeout,
          sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = true, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = true, requestHostCallback()));
        return priorityLevel;
      };
      exports3.unstable_shouldYield = shouldYieldToHost;
      exports3.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
          var previousPriorityLevel = currentPriorityLevel;
          currentPriorityLevel = parentPriorityLevel;
          try {
            return callback.apply(this, arguments);
          } finally {
            currentPriorityLevel = previousPriorityLevel;
          }
        };
      };
    })(scheduler_production);
    return scheduler_production;
  }
  var hasRequiredScheduler;
  function requireScheduler() {
    if (hasRequiredScheduler) return scheduler.exports;
    hasRequiredScheduler = 1;
    {
      scheduler.exports = requireScheduler_production();
    }
    return scheduler.exports;
  }
  var reactDom = { exports: {} };
  var reactDom_production = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactDom_production;
  function requireReactDom_production() {
    if (hasRequiredReactDom_production) return reactDom_production;
    hasRequiredReactDom_production = 1;
    var React2 = requireReact();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function noop2() {
    }
    var Internals = {
      d: {
        f: noop2,
        r: function() {
          throw Error(formatProdErrorMessage(522));
        },
        D: noop2,
        C: noop2,
        L: noop2,
        m: noop2,
        X: noop2,
        S: noop2,
        M: noop2
      },
      p: 0,
      findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal");
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    reactDom_production.createPortal = function(children, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children, container, null, key);
    };
    reactDom_production.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    reactDom_production.preconnect = function(href, options) {
      "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    reactDom_production.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    reactDom_production.preinit = function(href, options) {
      if ("string" === typeof href && options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    };
    reactDom_production.preinitModule = function(href, options) {
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as) {
            var crossOrigin = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        } else null == options && Internals.d.M(href);
    };
    reactDom_production.preload = function(href, options) {
      if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
          imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    reactDom_production.preloadModule = function(href, options) {
      if ("string" === typeof href)
        if (options) {
          var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    reactDom_production.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    reactDom_production.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    reactDom_production.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    reactDom_production.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    reactDom_production.version = "19.0.0";
    return reactDom_production;
  }
  var hasRequiredReactDom;
  function requireReactDom() {
    if (hasRequiredReactDom) return reactDom.exports;
    hasRequiredReactDom = 1;
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = requireReactDom_production();
    }
    return reactDom.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactDomClient_production;
  function requireReactDomClient_production() {
    if (hasRequiredReactDomClient_production) return reactDomClient_production;
    hasRequiredReactDomClient_production = 1;
    var Scheduler = requireScheduler(), React2 = requireReact(), ReactDOM2 = requireReactDom();
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function isValidContainer(node) {
      return !(!node || 1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType);
    }
    var REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
      maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    var ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, assign = Object.assign, prefix, suffix;
    function describeBuiltInComponentFrame(name) {
      if (void 0 === prefix)
        try {
          throw Error();
        } catch (x) {
          var match = x.stack.trim().match(/\n( *(at )?)/);
          prefix = match && match[1] || "";
          suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return "\n" + prefix + name + suffix;
    }
    var reentry = false;
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) return "";
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var RunInRootFrame = {
          DetermineComponentFrameRoot: function() {
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if ("object" === typeof Reflect && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    var control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x$0) {
                    control = x$0;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x$1) {
                  control = x$1;
                }
                (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {
                });
              }
            } catch (sample) {
              if (sample && control && "string" === typeof sample.stack)
                return [sample.stack, control.stack];
            }
            return [null, null];
          }
        };
        RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var namePropDescriptor = Object.getOwnPropertyDescriptor(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name"
        );
        namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(
          RunInRootFrame.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
        if (sampleStack && controlStack) {
          var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
          for (namePropDescriptor = RunInRootFrame = 0; RunInRootFrame < sampleLines.length && !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot"); )
            RunInRootFrame++;
          for (; namePropDescriptor < controlLines.length && !controlLines[namePropDescriptor].includes(
            "DetermineComponentFrameRoot"
          ); )
            namePropDescriptor++;
          if (RunInRootFrame === sampleLines.length || namePropDescriptor === controlLines.length)
            for (RunInRootFrame = sampleLines.length - 1, namePropDescriptor = controlLines.length - 1; 1 <= RunInRootFrame && 0 <= namePropDescriptor && sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]; )
              namePropDescriptor--;
          for (; 1 <= RunInRootFrame && 0 <= namePropDescriptor; RunInRootFrame--, namePropDescriptor--)
            if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
              if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
                do
                  if (RunInRootFrame--, namePropDescriptor--, 0 > namePropDescriptor || sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
                    var frame = "\n" + sampleLines[RunInRootFrame].replace(" at new ", " at ");
                    fn.displayName && frame.includes("<anonymous>") && (frame = frame.replace("<anonymous>", fn.displayName));
                    return frame;
                  }
                while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
              }
              break;
            }
        }
      } finally {
        reentry = false, Error.prepareStackTrace = previousPrepareStackTrace;
      }
      return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(previousPrepareStackTrace) : "";
    }
    function describeFiber(fiber) {
      switch (fiber.tag) {
        case 26:
        case 27:
        case 5:
          return describeBuiltInComponentFrame(fiber.type);
        case 16:
          return describeBuiltInComponentFrame("Lazy");
        case 13:
          return describeBuiltInComponentFrame("Suspense");
        case 19:
          return describeBuiltInComponentFrame("SuspenseList");
        case 0:
        case 15:
          return fiber = describeNativeComponentFrame(fiber.type, false), fiber;
        case 11:
          return fiber = describeNativeComponentFrame(fiber.type.render, false), fiber;
        case 1:
          return fiber = describeNativeComponentFrame(fiber.type, true), fiber;
        default:
          return "";
      }
    }
    function getStackByFiberInDevAndProd(workInProgress2) {
      try {
        var info = "";
        do
          info += describeFiber(workInProgress2), workInProgress2 = workInProgress2.return;
        while (workInProgress2);
        return info;
      } catch (x) {
        return "\nError generating stack: " + x.message + "\n" + x.stack;
      }
    }
    function getNearestMountedFiber(fiber) {
      var node = fiber, nearestMounted = fiber;
      if (fiber.alternate) for (; node.return; ) node = node.return;
      else {
        fiber = node;
        do
          node = fiber, 0 !== (node.flags & 4098) && (nearestMounted = node.return), fiber = node.return;
        while (fiber);
      }
      return 3 === node.tag ? nearestMounted : null;
    }
    function getSuspenseInstanceFromFiber(fiber) {
      if (13 === fiber.tag) {
        var suspenseState = fiber.memoizedState;
        null === suspenseState && (fiber = fiber.alternate, null !== fiber && (suspenseState = fiber.memoizedState));
        if (null !== suspenseState) return suspenseState.dehydrated;
      }
      return null;
    }
    function assertIsMounted(fiber) {
      if (getNearestMountedFiber(fiber) !== fiber)
        throw Error(formatProdErrorMessage(188));
    }
    function findCurrentFiberUsingSlowPath(fiber) {
      var alternate = fiber.alternate;
      if (!alternate) {
        alternate = getNearestMountedFiber(fiber);
        if (null === alternate) throw Error(formatProdErrorMessage(188));
        return alternate !== fiber ? null : fiber;
      }
      for (var a = fiber, b = alternate; ; ) {
        var parentA = a.return;
        if (null === parentA) break;
        var parentB = parentA.alternate;
        if (null === parentB) {
          b = parentA.return;
          if (null !== b) {
            a = b;
            continue;
          }
          break;
        }
        if (parentA.child === parentB.child) {
          for (parentB = parentA.child; parentB; ) {
            if (parentB === a) return assertIsMounted(parentA), fiber;
            if (parentB === b) return assertIsMounted(parentA), alternate;
            parentB = parentB.sibling;
          }
          throw Error(formatProdErrorMessage(188));
        }
        if (a.return !== b.return) a = parentA, b = parentB;
        else {
          for (var didFindChild = false, child$2 = parentA.child; child$2; ) {
            if (child$2 === a) {
              didFindChild = true;
              a = parentA;
              b = parentB;
              break;
            }
            if (child$2 === b) {
              didFindChild = true;
              b = parentA;
              a = parentB;
              break;
            }
            child$2 = child$2.sibling;
          }
          if (!didFindChild) {
            for (child$2 = parentB.child; child$2; ) {
              if (child$2 === a) {
                didFindChild = true;
                a = parentB;
                b = parentA;
                break;
              }
              if (child$2 === b) {
                didFindChild = true;
                b = parentB;
                a = parentA;
                break;
              }
              child$2 = child$2.sibling;
            }
            if (!didFindChild) throw Error(formatProdErrorMessage(189));
          }
        }
        if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
      }
      if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
      return a.stateNode.current === a ? fiber : alternate;
    }
    function findCurrentHostFiberImpl(node) {
      var tag = node.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
      for (node = node.child; null !== node; ) {
        tag = findCurrentHostFiberImpl(node);
        if (null !== tag) return tag;
        node = node.sibling;
      }
      return null;
    }
    var isArrayImpl = Array.isArray, ReactDOMSharedInternals = ReactDOM2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, sharedNotPendingObject = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, valueStack = [], index2 = -1;
    function createCursor(defaultValue) {
      return { current: defaultValue };
    }
    function pop(cursor) {
      0 > index2 || (cursor.current = valueStack[index2], valueStack[index2] = null, index2--);
    }
    function push(cursor, value) {
      index2++;
      valueStack[index2] = cursor.current;
      cursor.current = value;
    }
    var contextStackCursor = createCursor(null), contextFiberStackCursor = createCursor(null), rootInstanceStackCursor = createCursor(null), hostTransitionProviderCursor = createCursor(null);
    function pushHostContainer(fiber, nextRootInstance) {
      push(rootInstanceStackCursor, nextRootInstance);
      push(contextFiberStackCursor, fiber);
      push(contextStackCursor, null);
      fiber = nextRootInstance.nodeType;
      switch (fiber) {
        case 9:
        case 11:
          nextRootInstance = (nextRootInstance = nextRootInstance.documentElement) ? (nextRootInstance = nextRootInstance.namespaceURI) ? getOwnHostContext(nextRootInstance) : 0 : 0;
          break;
        default:
          if (fiber = 8 === fiber ? nextRootInstance.parentNode : nextRootInstance, nextRootInstance = fiber.tagName, fiber = fiber.namespaceURI)
            fiber = getOwnHostContext(fiber), nextRootInstance = getChildHostContextProd(fiber, nextRootInstance);
          else
            switch (nextRootInstance) {
              case "svg":
                nextRootInstance = 1;
                break;
              case "math":
                nextRootInstance = 2;
                break;
              default:
                nextRootInstance = 0;
            }
      }
      pop(contextStackCursor);
      push(contextStackCursor, nextRootInstance);
    }
    function popHostContainer() {
      pop(contextStackCursor);
      pop(contextFiberStackCursor);
      pop(rootInstanceStackCursor);
    }
    function pushHostContext(fiber) {
      null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
      var context = contextStackCursor.current;
      var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
      context !== JSCompiler_inline_result && (push(contextFiberStackCursor, fiber), push(contextStackCursor, JSCompiler_inline_result));
    }
    function popHostContext(fiber) {
      contextFiberStackCursor.current === fiber && (pop(contextStackCursor), pop(contextFiberStackCursor));
      hostTransitionProviderCursor.current === fiber && (pop(hostTransitionProviderCursor), HostTransitionContext._currentValue = sharedNotPendingObject);
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty, scheduleCallback$3 = Scheduler.unstable_scheduleCallback, cancelCallback$1 = Scheduler.unstable_cancelCallback, shouldYield = Scheduler.unstable_shouldYield, requestPaint = Scheduler.unstable_requestPaint, now = Scheduler.unstable_now, getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel, ImmediatePriority = Scheduler.unstable_ImmediatePriority, UserBlockingPriority = Scheduler.unstable_UserBlockingPriority, NormalPriority$1 = Scheduler.unstable_NormalPriority, LowPriority = Scheduler.unstable_LowPriority, IdlePriority = Scheduler.unstable_IdlePriority, log$1 = Scheduler.log, unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue, rendererID = null, injectedHook = null;
    function onCommitRoot(root2) {
      if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
        try {
          injectedHook.onCommitFiberRoot(
            rendererID,
            root2,
            void 0,
            128 === (root2.current.flags & 128)
          );
        } catch (err) {
        }
    }
    function setIsStrictModeForDevtools(newIsStrictMode) {
      "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
      if (injectedHook && "function" === typeof injectedHook.setStrictMode)
        try {
          injectedHook.setStrictMode(rendererID, newIsStrictMode);
        } catch (err) {
        }
    }
    var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2;
    function clz32Fallback(x) {
      x >>>= 0;
      return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    var nextTransitionLane = 128, nextRetryLane = 4194304;
    function getHighestPriorityLanes(lanes) {
      var pendingSyncLanes = lanes & 42;
      if (0 !== pendingSyncLanes) return pendingSyncLanes;
      switch (lanes & -lanes) {
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
          return 64;
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
          return lanes & 4194176;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return lanes & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return lanes;
      }
    }
    function getNextLanes(root2, wipLanes) {
      var pendingLanes = root2.pendingLanes;
      if (0 === pendingLanes) return 0;
      var nextLanes = 0, suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, warmLanes = root2.warmLanes;
      root2 = 0 !== root2.finishedLanes;
      var nonIdlePendingLanes = pendingLanes & 134217727;
      0 !== nonIdlePendingLanes ? (pendingLanes = nonIdlePendingLanes & ~suspendedLanes, 0 !== pendingLanes ? nextLanes = getHighestPriorityLanes(pendingLanes) : (pingedLanes &= nonIdlePendingLanes, 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root2 || (warmLanes = nonIdlePendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))))) : (nonIdlePendingLanes = pendingLanes & ~suspendedLanes, 0 !== nonIdlePendingLanes ? nextLanes = getHighestPriorityLanes(nonIdlePendingLanes) : 0 !== pingedLanes ? nextLanes = getHighestPriorityLanes(pingedLanes) : root2 || (warmLanes = pendingLanes & ~warmLanes, 0 !== warmLanes && (nextLanes = getHighestPriorityLanes(warmLanes))));
      return 0 === nextLanes ? 0 : 0 !== wipLanes && wipLanes !== nextLanes && 0 === (wipLanes & suspendedLanes) && (suspendedLanes = nextLanes & -nextLanes, warmLanes = wipLanes & -wipLanes, suspendedLanes >= warmLanes || 32 === suspendedLanes && 0 !== (warmLanes & 4194176)) ? wipLanes : nextLanes;
    }
    function checkIfRootIsPrerendering(root2, renderLanes2) {
      return 0 === (root2.pendingLanes & ~(root2.suspendedLanes & ~root2.pingedLanes) & renderLanes2);
    }
    function computeExpirationTime(lane, currentTime) {
      switch (lane) {
        case 1:
        case 2:
        case 4:
        case 8:
          return currentTime + 250;
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
          return currentTime + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function claimNextTransitionLane() {
      var lane = nextTransitionLane;
      nextTransitionLane <<= 1;
      0 === (nextTransitionLane & 4194176) && (nextTransitionLane = 128);
      return lane;
    }
    function claimNextRetryLane() {
      var lane = nextRetryLane;
      nextRetryLane <<= 1;
      0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
      return lane;
    }
    function createLaneMap(initial) {
      for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
      return laneMap;
    }
    function markRootUpdated$1(root2, updateLane) {
      root2.pendingLanes |= updateLane;
      268435456 !== updateLane && (root2.suspendedLanes = 0, root2.pingedLanes = 0, root2.warmLanes = 0);
    }
    function markRootFinished(root2, finishedLanes, remainingLanes, spawnedLane, updatedLanes, suspendedRetryLanes) {
      var previouslyPendingLanes = root2.pendingLanes;
      root2.pendingLanes = remainingLanes;
      root2.suspendedLanes = 0;
      root2.pingedLanes = 0;
      root2.warmLanes = 0;
      root2.expiredLanes &= remainingLanes;
      root2.entangledLanes &= remainingLanes;
      root2.errorRecoveryDisabledLanes &= remainingLanes;
      root2.shellSuspendCounter = 0;
      var entanglements = root2.entanglements, expirationTimes = root2.expirationTimes, hiddenUpdates = root2.hiddenUpdates;
      for (remainingLanes = previouslyPendingLanes & ~remainingLanes; 0 < remainingLanes; ) {
        var index$7 = 31 - clz32(remainingLanes), lane = 1 << index$7;
        entanglements[index$7] = 0;
        expirationTimes[index$7] = -1;
        var hiddenUpdatesForLane = hiddenUpdates[index$7];
        if (null !== hiddenUpdatesForLane)
          for (hiddenUpdates[index$7] = null, index$7 = 0; index$7 < hiddenUpdatesForLane.length; index$7++) {
            var update = hiddenUpdatesForLane[index$7];
            null !== update && (update.lane &= -536870913);
          }
        remainingLanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, 0);
      0 !== suspendedRetryLanes && 0 === updatedLanes && 0 !== root2.tag && (root2.suspendedLanes |= suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
    }
    function markSpawnedDeferredLane(root2, spawnedLane, entangledLanes) {
      root2.pendingLanes |= spawnedLane;
      root2.suspendedLanes &= ~spawnedLane;
      var spawnedLaneIndex = 31 - clz32(spawnedLane);
      root2.entangledLanes |= spawnedLane;
      root2.entanglements[spawnedLaneIndex] = root2.entanglements[spawnedLaneIndex] | 1073741824 | entangledLanes & 4194218;
    }
    function markRootEntangled(root2, entangledLanes) {
      var rootEntangledLanes = root2.entangledLanes |= entangledLanes;
      for (root2 = root2.entanglements; rootEntangledLanes; ) {
        var index$8 = 31 - clz32(rootEntangledLanes), lane = 1 << index$8;
        lane & entangledLanes | root2[index$8] & entangledLanes && (root2[index$8] |= entangledLanes);
        rootEntangledLanes &= ~lane;
      }
    }
    function lanesToEventPriority(lanes) {
      lanes &= -lanes;
      return 2 < lanes ? 8 < lanes ? 0 !== (lanes & 134217727) ? 32 : 268435456 : 8 : 2;
    }
    function resolveUpdatePriority() {
      var updatePriority = ReactDOMSharedInternals.p;
      if (0 !== updatePriority) return updatePriority;
      updatePriority = window.event;
      return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
    }
    function runWithPriority(priority, fn) {
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        return ReactDOMSharedInternals.p = priority, fn();
      } finally {
        ReactDOMSharedInternals.p = previousPriority;
      }
    }
    var randomKey = Math.random().toString(36).slice(2), internalInstanceKey = "__reactFiber$" + randomKey, internalPropsKey = "__reactProps$" + randomKey, internalContainerInstanceKey = "__reactContainer$" + randomKey, internalEventHandlersKey = "__reactEvents$" + randomKey, internalEventHandlerListenersKey = "__reactListeners$" + randomKey, internalEventHandlesSetKey = "__reactHandles$" + randomKey, internalRootNodeResourcesKey = "__reactResources$" + randomKey, internalHoistableMarker = "__reactMarker$" + randomKey;
    function detachDeletedInstance(node) {
      delete node[internalInstanceKey];
      delete node[internalPropsKey];
      delete node[internalEventHandlersKey];
      delete node[internalEventHandlerListenersKey];
      delete node[internalEventHandlesSetKey];
    }
    function getClosestInstanceFromNode(targetNode) {
      var targetInst = targetNode[internalInstanceKey];
      if (targetInst) return targetInst;
      for (var parentNode = targetNode.parentNode; parentNode; ) {
        if (targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey]) {
          parentNode = targetInst.alternate;
          if (null !== targetInst.child || null !== parentNode && null !== parentNode.child)
            for (targetNode = getParentSuspenseInstance(targetNode); null !== targetNode; ) {
              if (parentNode = targetNode[internalInstanceKey]) return parentNode;
              targetNode = getParentSuspenseInstance(targetNode);
            }
          return targetInst;
        }
        targetNode = parentNode;
        parentNode = targetNode.parentNode;
      }
      return null;
    }
    function getInstanceFromNode(node) {
      if (node = node[internalInstanceKey] || node[internalContainerInstanceKey]) {
        var tag = node.tag;
        if (5 === tag || 6 === tag || 13 === tag || 26 === tag || 27 === tag || 3 === tag)
          return node;
      }
      return null;
    }
    function getNodeFromInstance(inst) {
      var tag = inst.tag;
      if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
      throw Error(formatProdErrorMessage(33));
    }
    function getResourcesFromRoot(root2) {
      var resources = root2[internalRootNodeResourcesKey];
      resources || (resources = root2[internalRootNodeResourcesKey] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() });
      return resources;
    }
    function markNodeAsHoistable(node) {
      node[internalHoistableMarker] = true;
    }
    var allNativeEvents = /* @__PURE__ */ new Set(), registrationNameDependencies = {};
    function registerTwoPhaseEvent(registrationName, dependencies) {
      registerDirectEvent(registrationName, dependencies);
      registerDirectEvent(registrationName + "Capture", dependencies);
    }
    function registerDirectEvent(registrationName, dependencies) {
      registrationNameDependencies[registrationName] = dependencies;
      for (registrationName = 0; registrationName < dependencies.length; registrationName++)
        allNativeEvents.add(dependencies[registrationName]);
    }
    var canUseDOM = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), VALID_ATTRIBUTE_NAME_REGEX = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), illegalAttributeNameCache = {}, validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
        return true;
      if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
        return validatedAttributeNameCache[attributeName] = true;
      illegalAttributeNameCache[attributeName] = true;
      return false;
    }
    function setValueForAttribute(node, name, value) {
      if (isAttributeNameSafe(name))
        if (null === value) node.removeAttribute(name);
        else {
          switch (typeof value) {
            case "undefined":
            case "function":
            case "symbol":
              node.removeAttribute(name);
              return;
            case "boolean":
              var prefix$10 = name.toLowerCase().slice(0, 5);
              if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
                node.removeAttribute(name);
                return;
              }
          }
          node.setAttribute(name, "" + value);
        }
    }
    function setValueForKnownAttribute(node, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttribute(name, "" + value);
      }
    }
    function setValueForNamespacedAttribute(node, namespace, name, value) {
      if (null === value) node.removeAttribute(name);
      else {
        switch (typeof value) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            node.removeAttribute(name);
            return;
        }
        node.setAttributeNS(namespace, name, "" + value);
      }
    }
    function getToStringValue(value) {
      switch (typeof value) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return value;
        case "object":
          return value;
        default:
          return "";
      }
    }
    function isCheckable(elem) {
      var type = elem.type;
      return (elem = elem.nodeName) && "input" === elem.toLowerCase() && ("checkbox" === type || "radio" === type);
    }
    function trackValueOnNode(node) {
      var valueField = isCheckable(node) ? "checked" : "value", descriptor = Object.getOwnPropertyDescriptor(
        node.constructor.prototype,
        valueField
      ), currentValue = "" + node[valueField];
      if (!node.hasOwnProperty(valueField) && "undefined" !== typeof descriptor && "function" === typeof descriptor.get && "function" === typeof descriptor.set) {
        var get = descriptor.get, set = descriptor.set;
        Object.defineProperty(node, valueField, {
          configurable: true,
          get: function() {
            return get.call(this);
          },
          set: function(value) {
            currentValue = "" + value;
            set.call(this, value);
          }
        });
        Object.defineProperty(node, valueField, {
          enumerable: descriptor.enumerable
        });
        return {
          getValue: function() {
            return currentValue;
          },
          setValue: function(value) {
            currentValue = "" + value;
          },
          stopTracking: function() {
            node._valueTracker = null;
            delete node[valueField];
          }
        };
      }
    }
    function track(node) {
      node._valueTracker || (node._valueTracker = trackValueOnNode(node));
    }
    function updateValueIfChanged(node) {
      if (!node) return false;
      var tracker = node._valueTracker;
      if (!tracker) return true;
      var lastValue = tracker.getValue();
      var value = "";
      node && (value = isCheckable(node) ? node.checked ? "true" : "false" : node.value);
      node = value;
      return node !== lastValue ? (tracker.setValue(node), true) : false;
    }
    function getActiveElement(doc) {
      doc = doc || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof doc) return null;
      try {
        return doc.activeElement || doc.body;
      } catch (e) {
        return doc.body;
      }
    }
    var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
    function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
      return value.replace(
        escapeSelectorAttributeValueInsideDoubleQuotesRegex,
        function(ch) {
          return "\\" + ch.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function updateInput(element, value, defaultValue, lastDefaultValue, checked, defaultChecked, type, name) {
      element.name = "";
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type ? element.type = type : element.removeAttribute("type");
      if (null != value)
        if ("number" === type) {
          if (0 === value && "" === element.value || element.value != value)
            element.value = "" + getToStringValue(value);
        } else
          element.value !== "" + getToStringValue(value) && (element.value = "" + getToStringValue(value));
      else
        "submit" !== type && "reset" !== type || element.removeAttribute("value");
      null != value ? setDefaultValue(element, type, getToStringValue(value)) : null != defaultValue ? setDefaultValue(element, type, getToStringValue(defaultValue)) : null != lastDefaultValue && element.removeAttribute("value");
      null == checked && null != defaultChecked && (element.defaultChecked = !!defaultChecked);
      null != checked && (element.checked = checked && "function" !== typeof checked && "symbol" !== typeof checked);
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name ? element.name = "" + getToStringValue(name) : element.removeAttribute("name");
    }
    function initInput(element, value, defaultValue, checked, defaultChecked, type, name, isHydrating2) {
      null != type && "function" !== typeof type && "symbol" !== typeof type && "boolean" !== typeof type && (element.type = type);
      if (null != value || null != defaultValue) {
        if (!("submit" !== type && "reset" !== type || void 0 !== value && null !== value))
          return;
        defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
        value = null != value ? "" + getToStringValue(value) : defaultValue;
        isHydrating2 || value === element.value || (element.value = value);
        element.defaultValue = value;
      }
      checked = null != checked ? checked : defaultChecked;
      checked = "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
      element.checked = isHydrating2 ? element.checked : !!checked;
      element.defaultChecked = !!checked;
      null != name && "function" !== typeof name && "symbol" !== typeof name && "boolean" !== typeof name && (element.name = name);
    }
    function setDefaultValue(node, type, value) {
      "number" === type && getActiveElement(node.ownerDocument) === node || node.defaultValue === "" + value || (node.defaultValue = "" + value);
    }
    function updateOptions(node, multiple, propValue, setDefaultSelected) {
      node = node.options;
      if (multiple) {
        multiple = {};
        for (var i = 0; i < propValue.length; i++)
          multiple["$" + propValue[i]] = true;
        for (propValue = 0; propValue < node.length; propValue++)
          i = multiple.hasOwnProperty("$" + node[propValue].value), node[propValue].selected !== i && (node[propValue].selected = i), i && setDefaultSelected && (node[propValue].defaultSelected = true);
      } else {
        propValue = "" + getToStringValue(propValue);
        multiple = null;
        for (i = 0; i < node.length; i++) {
          if (node[i].value === propValue) {
            node[i].selected = true;
            setDefaultSelected && (node[i].defaultSelected = true);
            return;
          }
          null !== multiple || node[i].disabled || (multiple = node[i]);
        }
        null !== multiple && (multiple.selected = true);
      }
    }
    function updateTextarea(element, value, defaultValue) {
      if (null != value && (value = "" + getToStringValue(value), value !== element.value && (element.value = value), null == defaultValue)) {
        element.defaultValue !== value && (element.defaultValue = value);
        return;
      }
      element.defaultValue = null != defaultValue ? "" + getToStringValue(defaultValue) : "";
    }
    function initTextarea(element, value, defaultValue, children) {
      if (null == value) {
        if (null != children) {
          if (null != defaultValue) throw Error(formatProdErrorMessage(92));
          if (isArrayImpl(children)) {
            if (1 < children.length) throw Error(formatProdErrorMessage(93));
            children = children[0];
          }
          defaultValue = children;
        }
        null == defaultValue && (defaultValue = "");
        value = defaultValue;
      }
      defaultValue = getToStringValue(value);
      element.defaultValue = defaultValue;
      children = element.textContent;
      children === defaultValue && "" !== children && null !== children && (element.value = children);
    }
    function setTextContent(node, text) {
      if (text) {
        var firstChild = node.firstChild;
        if (firstChild && firstChild === node.lastChild && 3 === firstChild.nodeType) {
          firstChild.nodeValue = text;
          return;
        }
      }
      node.textContent = text;
    }
    var unitlessNumbers = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    );
    function setValueForStyle(style2, styleName, value) {
      var isCustomProperty = 0 === styleName.indexOf("--");
      null == value || "boolean" === typeof value || "" === value ? isCustomProperty ? style2.setProperty(styleName, "") : "float" === styleName ? style2.cssFloat = "" : style2[styleName] = "" : isCustomProperty ? style2.setProperty(styleName, value) : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName) ? "float" === styleName ? style2.cssFloat = value : style2[styleName] = ("" + value).trim() : style2[styleName] = value + "px";
    }
    function setValueForStyles(node, styles, prevStyles) {
      if (null != styles && "object" !== typeof styles)
        throw Error(formatProdErrorMessage(62));
      node = node.style;
      if (null != prevStyles) {
        for (var styleName in prevStyles)
          !prevStyles.hasOwnProperty(styleName) || null != styles && styles.hasOwnProperty(styleName) || (0 === styleName.indexOf("--") ? node.setProperty(styleName, "") : "float" === styleName ? node.cssFloat = "" : node[styleName] = "");
        for (var styleName$16 in styles)
          styleName = styles[styleName$16], styles.hasOwnProperty(styleName$16) && prevStyles[styleName$16] !== styleName && setValueForStyle(node, styleName$16, styleName);
      } else
        for (var styleName$17 in styles)
          styles.hasOwnProperty(styleName$17) && setValueForStyle(node, styleName$17, styles[styleName$17]);
    }
    function isCustomElement(tagName) {
      if (-1 === tagName.indexOf("-")) return false;
      switch (tagName) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var aliases = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function sanitizeURL(url) {
      return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    var currentReplayingEvent = null;
    function getEventTarget(nativeEvent) {
      nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
      nativeEvent.correspondingUseElement && (nativeEvent = nativeEvent.correspondingUseElement);
      return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
    }
    var restoreTarget = null, restoreQueue = null;
    function restoreStateOfTarget(target) {
      var internalInstance = getInstanceFromNode(target);
      if (internalInstance && (target = internalInstance.stateNode)) {
        var props = target[internalPropsKey] || null;
        a: switch (target = internalInstance.stateNode, internalInstance.type) {
          case "input":
            updateInput(
              target,
              props.value,
              props.defaultValue,
              props.defaultValue,
              props.checked,
              props.defaultChecked,
              props.type,
              props.name
            );
            internalInstance = props.name;
            if ("radio" === props.type && null != internalInstance) {
              for (props = target; props.parentNode; ) props = props.parentNode;
              props = props.querySelectorAll(
                'input[name="' + escapeSelectorAttributeValueInsideDoubleQuotes(
                  "" + internalInstance
                ) + '"][type="radio"]'
              );
              for (internalInstance = 0; internalInstance < props.length; internalInstance++) {
                var otherNode = props[internalInstance];
                if (otherNode !== target && otherNode.form === target.form) {
                  var otherProps = otherNode[internalPropsKey] || null;
                  if (!otherProps) throw Error(formatProdErrorMessage(90));
                  updateInput(
                    otherNode,
                    otherProps.value,
                    otherProps.defaultValue,
                    otherProps.defaultValue,
                    otherProps.checked,
                    otherProps.defaultChecked,
                    otherProps.type,
                    otherProps.name
                  );
                }
              }
              for (internalInstance = 0; internalInstance < props.length; internalInstance++)
                otherNode = props[internalInstance], otherNode.form === target.form && updateValueIfChanged(otherNode);
            }
            break a;
          case "textarea":
            updateTextarea(target, props.value, props.defaultValue);
            break a;
          case "select":
            internalInstance = props.value, null != internalInstance && updateOptions(target, !!props.multiple, internalInstance, false);
        }
      }
    }
    var isInsideEventHandler = false;
    function batchedUpdates$1(fn, a, b) {
      if (isInsideEventHandler) return fn(a, b);
      isInsideEventHandler = true;
      try {
        var JSCompiler_inline_result = fn(a);
        return JSCompiler_inline_result;
      } finally {
        if (isInsideEventHandler = false, null !== restoreTarget || null !== restoreQueue) {
          if (flushSyncWork$1(), restoreTarget && (a = restoreTarget, fn = restoreQueue, restoreQueue = restoreTarget = null, restoreStateOfTarget(a), fn))
            for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
        }
      }
    }
    function getListener(inst, registrationName) {
      var stateNode = inst.stateNode;
      if (null === stateNode) return null;
      var props = stateNode[internalPropsKey] || null;
      if (null === props) return null;
      stateNode = props[registrationName];
      a: switch (registrationName) {
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
          (props = !props.disabled) || (inst = inst.type, props = !("button" === inst || "input" === inst || "select" === inst || "textarea" === inst));
          inst = !props;
          break a;
        default:
          inst = false;
      }
      if (inst) return null;
      if (stateNode && "function" !== typeof stateNode)
        throw Error(
          formatProdErrorMessage(231, registrationName, typeof stateNode)
        );
      return stateNode;
    }
    var passiveBrowserEventsSupported = false;
    if (canUseDOM)
      try {
        var options = {};
        Object.defineProperty(options, "passive", {
          get: function() {
            passiveBrowserEventsSupported = true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (e) {
        passiveBrowserEventsSupported = false;
      }
    var root = null, startText = null, fallbackText = null;
    function getData() {
      if (fallbackText) return fallbackText;
      var start, startValue = startText, startLength = startValue.length, end, endValue = "value" in root ? root.value : root.textContent, endLength = endValue.length;
      for (start = 0; start < startLength && startValue[start] === endValue[start]; start++) ;
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd && startValue[startLength - end] === endValue[endLength - end]; end++) ;
      return fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0);
    }
    function getEventCharCode(nativeEvent) {
      var keyCode = nativeEvent.keyCode;
      "charCode" in nativeEvent ? (nativeEvent = nativeEvent.charCode, 0 === nativeEvent && 13 === keyCode && (nativeEvent = 13)) : nativeEvent = keyCode;
      10 === nativeEvent && (nativeEvent = 13);
      return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
    }
    function functionThatReturnsTrue() {
      return true;
    }
    function functionThatReturnsFalse() {
      return false;
    }
    function createSyntheticEvent(Interface) {
      function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
        this._reactName = reactName;
        this._targetInst = targetInst;
        this.type = reactEventType;
        this.nativeEvent = nativeEvent;
        this.target = nativeEventTarget;
        this.currentTarget = null;
        for (var propName in Interface)
          Interface.hasOwnProperty(propName) && (reactName = Interface[propName], this[propName] = reactName ? reactName(nativeEvent) : nativeEvent[propName]);
        this.isDefaultPrevented = (null != nativeEvent.defaultPrevented ? nativeEvent.defaultPrevented : false === nativeEvent.returnValue) ? functionThatReturnsTrue : functionThatReturnsFalse;
        this.isPropagationStopped = functionThatReturnsFalse;
        return this;
      }
      assign(SyntheticBaseEvent.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var event = this.nativeEvent;
          event && (event.preventDefault ? event.preventDefault() : "unknown" !== typeof event.returnValue && (event.returnValue = false), this.isDefaultPrevented = functionThatReturnsTrue);
        },
        stopPropagation: function() {
          var event = this.nativeEvent;
          event && (event.stopPropagation ? event.stopPropagation() : "unknown" !== typeof event.cancelBubble && (event.cancelBubble = true), this.isPropagationStopped = functionThatReturnsTrue);
        },
        persist: function() {
        },
        isPersistent: functionThatReturnsTrue
      });
      return SyntheticBaseEvent;
    }
    var EventInterface = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, SyntheticEvent = createSyntheticEvent(EventInterface), UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }), SyntheticUIEvent = createSyntheticEvent(UIEventInterface), lastMovementX, lastMovementY, lastMouseEvent, MouseEventInterface = assign({}, UIEventInterface, {
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
      getModifierState: getEventModifierState,
      button: 0,
      buttons: 0,
      relatedTarget: function(event) {
        return void 0 === event.relatedTarget ? event.fromElement === event.srcElement ? event.toElement : event.fromElement : event.relatedTarget;
      },
      movementX: function(event) {
        if ("movementX" in event) return event.movementX;
        event !== lastMouseEvent && (lastMouseEvent && "mousemove" === event.type ? (lastMovementX = event.screenX - lastMouseEvent.screenX, lastMovementY = event.screenY - lastMouseEvent.screenY) : lastMovementY = lastMovementX = 0, lastMouseEvent = event);
        return lastMovementX;
      },
      movementY: function(event) {
        return "movementY" in event ? event.movementY : lastMovementY;
      }
    }), SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface), DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }), SyntheticDragEvent = createSyntheticEvent(DragEventInterface), FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }), SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface), AnimationEventInterface = assign({}, EventInterface, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface), ClipboardEventInterface = assign({}, EventInterface, {
      clipboardData: function(event) {
        return "clipboardData" in event ? event.clipboardData : window.clipboardData;
      }
    }), SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface), CompositionEventInterface = assign({}, EventInterface, { data: 0 }), SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface), normalizeKey = {
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
    }, translateToKey = {
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
    }, modifierKeyToProp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function modifierStateGetter(keyArg) {
      var nativeEvent = this.nativeEvent;
      return nativeEvent.getModifierState ? nativeEvent.getModifierState(keyArg) : (keyArg = modifierKeyToProp[keyArg]) ? !!nativeEvent[keyArg] : false;
    }
    function getEventModifierState() {
      return modifierStateGetter;
    }
    var KeyboardEventInterface = assign({}, UIEventInterface, {
      key: function(nativeEvent) {
        if (nativeEvent.key) {
          var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
          if ("Unidentified" !== key) return key;
        }
        return "keypress" === nativeEvent.type ? (nativeEvent = getEventCharCode(nativeEvent), 13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent)) : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type ? translateToKey[nativeEvent.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: getEventModifierState,
      charCode: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : 0;
      },
      keyCode: function(event) {
        return "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      },
      which: function(event) {
        return "keypress" === event.type ? getEventCharCode(event) : "keydown" === event.type || "keyup" === event.type ? event.keyCode : 0;
      }
    }), SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface), PointerEventInterface = assign({}, MouseEventInterface, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface), TouchEventInterface = assign({}, UIEventInterface, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: getEventModifierState
    }), SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface), TransitionEventInterface = assign({}, EventInterface, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface), WheelEventInterface = assign({}, MouseEventInterface, {
      deltaX: function(event) {
        return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
      },
      deltaY: function(event) {
        return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface), ToggleEventInterface = assign({}, EventInterface, {
      newState: 0,
      oldState: 0
    }), SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface), END_KEYCODES = [9, 13, 27, 32], canUseCompositionEvent = canUseDOM && "CompositionEvent" in window, documentMode = null;
    canUseDOM && "documentMode" in document && (documentMode = document.documentMode);
    var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode, useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && 8 < documentMode && 11 >= documentMode), SPACEBAR_CHAR = String.fromCharCode(32), hasSpaceKeypress = false;
    function isFallbackCompositionEnd(domEventName, nativeEvent) {
      switch (domEventName) {
        case "keyup":
          return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
        case "keydown":
          return 229 !== nativeEvent.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function getDataFromCustomEvent(nativeEvent) {
      nativeEvent = nativeEvent.detail;
      return "object" === typeof nativeEvent && "data" in nativeEvent ? nativeEvent.data : null;
    }
    var isComposing = false;
    function getNativeBeforeInputChars(domEventName, nativeEvent) {
      switch (domEventName) {
        case "compositionend":
          return getDataFromCustomEvent(nativeEvent);
        case "keypress":
          if (32 !== nativeEvent.which) return null;
          hasSpaceKeypress = true;
          return SPACEBAR_CHAR;
        case "textInput":
          return domEventName = nativeEvent.data, domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName;
        default:
          return null;
      }
    }
    function getFallbackBeforeInputChars(domEventName, nativeEvent) {
      if (isComposing)
        return "compositionend" === domEventName || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent) ? (domEventName = getData(), fallbackText = startText = root = null, isComposing = false, domEventName) : null;
      switch (domEventName) {
        case "paste":
          return null;
        case "keypress":
          if (!(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) || nativeEvent.ctrlKey && nativeEvent.altKey) {
            if (nativeEvent.char && 1 < nativeEvent.char.length)
              return nativeEvent.char;
            if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
          }
          return null;
        case "compositionend":
          return useFallbackCompositionData && "ko" !== nativeEvent.locale ? null : nativeEvent.data;
        default:
          return null;
      }
    }
    var supportedInputTypes = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function isTextInputElement(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return "input" === nodeName ? !!supportedInputTypes[elem.type] : "textarea" === nodeName ? true : false;
    }
    function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
      restoreTarget ? restoreQueue ? restoreQueue.push(target) : restoreQueue = [target] : restoreTarget = target;
      inst = accumulateTwoPhaseListeners(inst, "onChange");
      0 < inst.length && (nativeEvent = new SyntheticEvent(
        "onChange",
        "change",
        null,
        nativeEvent,
        target
      ), dispatchQueue.push({ event: nativeEvent, listeners: inst }));
    }
    var activeElement$1 = null, activeElementInst$1 = null;
    function runEventInBatch(dispatchQueue) {
      processDispatchQueue(dispatchQueue, 0);
    }
    function getInstIfValueChanged(targetInst) {
      var targetNode = getNodeFromInstance(targetInst);
      if (updateValueIfChanged(targetNode)) return targetInst;
    }
    function getTargetInstForChangeEvent(domEventName, targetInst) {
      if ("change" === domEventName) return targetInst;
    }
    var isInputEventSupported = false;
    if (canUseDOM) {
      var JSCompiler_inline_result$jscomp$283;
      if (canUseDOM) {
        var isSupported$jscomp$inline_418 = "oninput" in document;
        if (!isSupported$jscomp$inline_418) {
          var element$jscomp$inline_419 = document.createElement("div");
          element$jscomp$inline_419.setAttribute("oninput", "return;");
          isSupported$jscomp$inline_418 = "function" === typeof element$jscomp$inline_419.oninput;
        }
        JSCompiler_inline_result$jscomp$283 = isSupported$jscomp$inline_418;
      } else JSCompiler_inline_result$jscomp$283 = false;
      isInputEventSupported = JSCompiler_inline_result$jscomp$283 && (!document.documentMode || 9 < document.documentMode);
    }
    function stopWatchingForValueChange() {
      activeElement$1 && (activeElement$1.detachEvent("onpropertychange", handlePropertyChange), activeElementInst$1 = activeElement$1 = null);
    }
    function handlePropertyChange(nativeEvent) {
      if ("value" === nativeEvent.propertyName && getInstIfValueChanged(activeElementInst$1)) {
        var dispatchQueue = [];
        createAndAccumulateChangeEvent(
          dispatchQueue,
          activeElementInst$1,
          nativeEvent,
          getEventTarget(nativeEvent)
        );
        batchedUpdates$1(runEventInBatch, dispatchQueue);
      }
    }
    function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
      "focusin" === domEventName ? (stopWatchingForValueChange(), activeElement$1 = target, activeElementInst$1 = targetInst, activeElement$1.attachEvent("onpropertychange", handlePropertyChange)) : "focusout" === domEventName && stopWatchingForValueChange();
    }
    function getTargetInstForInputEventPolyfill(domEventName) {
      if ("selectionchange" === domEventName || "keyup" === domEventName || "keydown" === domEventName)
        return getInstIfValueChanged(activeElementInst$1);
    }
    function getTargetInstForClickEvent(domEventName, targetInst) {
      if ("click" === domEventName) return getInstIfValueChanged(targetInst);
    }
    function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
      if ("input" === domEventName || "change" === domEventName)
        return getInstIfValueChanged(targetInst);
    }
    function is(x, y) {
      return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is;
    function shallowEqual(objA, objB) {
      if (objectIs(objA, objB)) return true;
      if ("object" !== typeof objA || null === objA || "object" !== typeof objB || null === objB)
        return false;
      var keysA = Object.keys(objA), keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) return false;
      for (keysB = 0; keysB < keysA.length; keysB++) {
        var currentKey = keysA[keysB];
        if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey]))
          return false;
      }
      return true;
    }
    function getLeafNode(node) {
      for (; node && node.firstChild; ) node = node.firstChild;
      return node;
    }
    function getNodeForCharacterOffset(root2, offset2) {
      var node = getLeafNode(root2);
      root2 = 0;
      for (var nodeEnd; node; ) {
        if (3 === node.nodeType) {
          nodeEnd = root2 + node.textContent.length;
          if (root2 <= offset2 && nodeEnd >= offset2)
            return { node, offset: offset2 - root2 };
          root2 = nodeEnd;
        }
        a: {
          for (; node; ) {
            if (node.nextSibling) {
              node = node.nextSibling;
              break a;
            }
            node = node.parentNode;
          }
          node = void 0;
        }
        node = getLeafNode(node);
      }
    }
    function containsNode(outerNode, innerNode) {
      return outerNode && innerNode ? outerNode === innerNode ? true : outerNode && 3 === outerNode.nodeType ? false : innerNode && 3 === innerNode.nodeType ? containsNode(outerNode, innerNode.parentNode) : "contains" in outerNode ? outerNode.contains(innerNode) : outerNode.compareDocumentPosition ? !!(outerNode.compareDocumentPosition(innerNode) & 16) : false : false;
    }
    function getActiveElementDeep(containerInfo) {
      containerInfo = null != containerInfo && null != containerInfo.ownerDocument && null != containerInfo.ownerDocument.defaultView ? containerInfo.ownerDocument.defaultView : window;
      for (var element = getActiveElement(containerInfo.document); element instanceof containerInfo.HTMLIFrameElement; ) {
        try {
          var JSCompiler_inline_result = "string" === typeof element.contentWindow.location.href;
        } catch (err) {
          JSCompiler_inline_result = false;
        }
        if (JSCompiler_inline_result) containerInfo = element.contentWindow;
        else break;
        element = getActiveElement(containerInfo.document);
      }
      return element;
    }
    function hasSelectionCapabilities(elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && ("input" === nodeName && ("text" === elem.type || "search" === elem.type || "tel" === elem.type || "url" === elem.type || "password" === elem.type) || "textarea" === nodeName || "true" === elem.contentEditable);
    }
    function restoreSelection(priorSelectionInformation, containerInfo) {
      var curFocusedElem = getActiveElementDeep(containerInfo);
      containerInfo = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== containerInfo && containerInfo && containerInfo.ownerDocument && containsNode(containerInfo.ownerDocument.documentElement, containerInfo)) {
        if (null !== priorSelectionRange && hasSelectionCapabilities(containerInfo)) {
          if (priorSelectionInformation = priorSelectionRange.start, curFocusedElem = priorSelectionRange.end, void 0 === curFocusedElem && (curFocusedElem = priorSelectionInformation), "selectionStart" in containerInfo)
            containerInfo.selectionStart = priorSelectionInformation, containerInfo.selectionEnd = Math.min(
              curFocusedElem,
              containerInfo.value.length
            );
          else if (curFocusedElem = (priorSelectionInformation = containerInfo.ownerDocument || document) && priorSelectionInformation.defaultView || window, curFocusedElem.getSelection) {
            curFocusedElem = curFocusedElem.getSelection();
            var length = containerInfo.textContent.length, start = Math.min(priorSelectionRange.start, length);
            priorSelectionRange = void 0 === priorSelectionRange.end ? start : Math.min(priorSelectionRange.end, length);
            !curFocusedElem.extend && start > priorSelectionRange && (length = priorSelectionRange, priorSelectionRange = start, start = length);
            length = getNodeForCharacterOffset(containerInfo, start);
            var endMarker = getNodeForCharacterOffset(
              containerInfo,
              priorSelectionRange
            );
            length && endMarker && (1 !== curFocusedElem.rangeCount || curFocusedElem.anchorNode !== length.node || curFocusedElem.anchorOffset !== length.offset || curFocusedElem.focusNode !== endMarker.node || curFocusedElem.focusOffset !== endMarker.offset) && (priorSelectionInformation = priorSelectionInformation.createRange(), priorSelectionInformation.setStart(length.node, length.offset), curFocusedElem.removeAllRanges(), start > priorSelectionRange ? (curFocusedElem.addRange(priorSelectionInformation), curFocusedElem.extend(endMarker.node, endMarker.offset)) : (priorSelectionInformation.setEnd(
              endMarker.node,
              endMarker.offset
            ), curFocusedElem.addRange(priorSelectionInformation)));
          }
        }
        priorSelectionInformation = [];
        for (curFocusedElem = containerInfo; curFocusedElem = curFocusedElem.parentNode; )
          1 === curFocusedElem.nodeType && priorSelectionInformation.push({
            element: curFocusedElem,
            left: curFocusedElem.scrollLeft,
            top: curFocusedElem.scrollTop
          });
        "function" === typeof containerInfo.focus && containerInfo.focus();
        for (containerInfo = 0; containerInfo < priorSelectionInformation.length; containerInfo++)
          curFocusedElem = priorSelectionInformation[containerInfo], curFocusedElem.element.scrollLeft = curFocusedElem.left, curFocusedElem.element.scrollTop = curFocusedElem.top;
      }
    }
    var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && 11 >= document.documentMode, activeElement = null, activeElementInst = null, lastSelection = null, mouseDown = false;
    function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
      var doc = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget.document : 9 === nativeEventTarget.nodeType ? nativeEventTarget : nativeEventTarget.ownerDocument;
      mouseDown || null == activeElement || activeElement !== getActiveElement(doc) || (doc = activeElement, "selectionStart" in doc && hasSelectionCapabilities(doc) ? doc = { start: doc.selectionStart, end: doc.selectionEnd } : (doc = (doc.ownerDocument && doc.ownerDocument.defaultView || window).getSelection(), doc = {
        anchorNode: doc.anchorNode,
        anchorOffset: doc.anchorOffset,
        focusNode: doc.focusNode,
        focusOffset: doc.focusOffset
      }), lastSelection && shallowEqual(lastSelection, doc) || (lastSelection = doc, doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect"), 0 < doc.length && (nativeEvent = new SyntheticEvent(
        "onSelect",
        "select",
        null,
        nativeEvent,
        nativeEventTarget
      ), dispatchQueue.push({ event: nativeEvent, listeners: doc }), nativeEvent.target = activeElement)));
    }
    function makePrefixMap(styleProp, eventName) {
      var prefixes = {};
      prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
      prefixes["Webkit" + styleProp] = "webkit" + eventName;
      prefixes["Moz" + styleProp] = "moz" + eventName;
      return prefixes;
    }
    var vendorPrefixes = {
      animationend: makePrefixMap("Animation", "AnimationEnd"),
      animationiteration: makePrefixMap("Animation", "AnimationIteration"),
      animationstart: makePrefixMap("Animation", "AnimationStart"),
      transitionrun: makePrefixMap("Transition", "TransitionRun"),
      transitionstart: makePrefixMap("Transition", "TransitionStart"),
      transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
      transitionend: makePrefixMap("Transition", "TransitionEnd")
    }, prefixedEventNames = {}, style = {};
    canUseDOM && (style = document.createElement("div").style, "AnimationEvent" in window || (delete vendorPrefixes.animationend.animation, delete vendorPrefixes.animationiteration.animation, delete vendorPrefixes.animationstart.animation), "TransitionEvent" in window || delete vendorPrefixes.transitionend.transition);
    function getVendorPrefixedEventName(eventName) {
      if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
      if (!vendorPrefixes[eventName]) return eventName;
      var prefixMap = vendorPrefixes[eventName], styleProp;
      for (styleProp in prefixMap)
        if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
          return prefixedEventNames[eventName] = prefixMap[styleProp];
      return eventName;
    }
    var ANIMATION_END = getVendorPrefixedEventName("animationend"), ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"), ANIMATION_START = getVendorPrefixedEventName("animationstart"), TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"), TRANSITION_START = getVendorPrefixedEventName("transitionstart"), TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"), TRANSITION_END = getVendorPrefixedEventName("transitionend"), topLevelEventsToReactNames = /* @__PURE__ */ new Map(), simpleEventPluginEvents = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    );
    function registerSimpleEvent(domEventName, reactName) {
      topLevelEventsToReactNames.set(domEventName, reactName);
      registerTwoPhaseEvent(reactName, [domEventName]);
    }
    var concurrentQueues = [], concurrentQueuesIndex = 0, concurrentlyUpdatedLanes = 0;
    function finishQueueingConcurrentUpdates() {
      for (var endIndex = concurrentQueuesIndex, i = concurrentlyUpdatedLanes = concurrentQueuesIndex = 0; i < endIndex; ) {
        var fiber = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var queue = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var update = concurrentQueues[i];
        concurrentQueues[i++] = null;
        var lane = concurrentQueues[i];
        concurrentQueues[i++] = null;
        if (null !== queue && null !== update) {
          var pending = queue.pending;
          null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
          queue.pending = update;
        }
        0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
      }
    }
    function enqueueUpdate$1(fiber, queue, update, lane) {
      concurrentQueues[concurrentQueuesIndex++] = fiber;
      concurrentQueues[concurrentQueuesIndex++] = queue;
      concurrentQueues[concurrentQueuesIndex++] = update;
      concurrentQueues[concurrentQueuesIndex++] = lane;
      concurrentlyUpdatedLanes |= lane;
      fiber.lanes |= lane;
      fiber = fiber.alternate;
      null !== fiber && (fiber.lanes |= lane);
    }
    function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
      enqueueUpdate$1(fiber, queue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function enqueueConcurrentRenderForLane(fiber, lane) {
      enqueueUpdate$1(fiber, null, null, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
      sourceFiber.lanes |= lane;
      var alternate = sourceFiber.alternate;
      null !== alternate && (alternate.lanes |= lane);
      for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
        parent.childLanes |= lane, alternate = parent.alternate, null !== alternate && (alternate.childLanes |= lane), 22 === parent.tag && (sourceFiber = parent.stateNode, null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)), sourceFiber = parent, parent = parent.return;
      isHidden && null !== update && 3 === sourceFiber.tag && (parent = sourceFiber.stateNode, isHidden = 31 - clz32(lane), parent = parent.hiddenUpdates, sourceFiber = parent[isHidden], null === sourceFiber ? parent[isHidden] = [update] : sourceFiber.push(update), update.lane = lane | 536870912);
    }
    function getRootForUpdatedFiber(sourceFiber) {
      if (50 < nestedUpdateCount)
        throw nestedUpdateCount = 0, rootWithNestedUpdates = null, Error(formatProdErrorMessage(185));
      for (var parent = sourceFiber.return; null !== parent; )
        sourceFiber = parent, parent = sourceFiber.return;
      return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
    }
    var emptyContextObject = {}, CapturedStacks = /* @__PURE__ */ new WeakMap();
    function createCapturedValueAtFiber(value, source) {
      if ("object" === typeof value && null !== value) {
        var existing = CapturedStacks.get(value);
        if (void 0 !== existing) return existing;
        source = {
          value,
          source,
          stack: getStackByFiberInDevAndProd(source)
        };
        CapturedStacks.set(value, source);
        return source;
      }
      return {
        value,
        source,
        stack: getStackByFiberInDevAndProd(source)
      };
    }
    var forkStack = [], forkStackIndex = 0, treeForkProvider = null, treeForkCount = 0, idStack = [], idStackIndex = 0, treeContextProvider = null, treeContextId = 1, treeContextOverflow = "";
    function pushTreeFork(workInProgress2, totalChildren) {
      forkStack[forkStackIndex++] = treeForkCount;
      forkStack[forkStackIndex++] = treeForkProvider;
      treeForkProvider = workInProgress2;
      treeForkCount = totalChildren;
    }
    function pushTreeId(workInProgress2, totalChildren, index3) {
      idStack[idStackIndex++] = treeContextId;
      idStack[idStackIndex++] = treeContextOverflow;
      idStack[idStackIndex++] = treeContextProvider;
      treeContextProvider = workInProgress2;
      var baseIdWithLeadingBit = treeContextId;
      workInProgress2 = treeContextOverflow;
      var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
      baseIdWithLeadingBit &= ~(1 << baseLength);
      index3 += 1;
      var length = 32 - clz32(totalChildren) + baseLength;
      if (30 < length) {
        var numberOfOverflowBits = baseLength - baseLength % 5;
        length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
        baseIdWithLeadingBit >>= numberOfOverflowBits;
        baseLength -= numberOfOverflowBits;
        treeContextId = 1 << 32 - clz32(totalChildren) + baseLength | index3 << baseLength | baseIdWithLeadingBit;
        treeContextOverflow = length + workInProgress2;
      } else
        treeContextId = 1 << length | index3 << baseLength | baseIdWithLeadingBit, treeContextOverflow = workInProgress2;
    }
    function pushMaterializedTreeId(workInProgress2) {
      null !== workInProgress2.return && (pushTreeFork(workInProgress2, 1), pushTreeId(workInProgress2, 1, 0));
    }
    function popTreeContext(workInProgress2) {
      for (; workInProgress2 === treeForkProvider; )
        treeForkProvider = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null, treeForkCount = forkStack[--forkStackIndex], forkStack[forkStackIndex] = null;
      for (; workInProgress2 === treeContextProvider; )
        treeContextProvider = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextOverflow = idStack[--idStackIndex], idStack[idStackIndex] = null, treeContextId = idStack[--idStackIndex], idStack[idStackIndex] = null;
    }
    var hydrationParentFiber = null, nextHydratableInstance = null, isHydrating = false, hydrationErrors = null, rootOrSingletonContext = false, HydrationMismatchException = Error(formatProdErrorMessage(519));
    function throwOnHydrationMismatch(fiber) {
      var error = Error(formatProdErrorMessage(418, ""));
      queueHydrationError(createCapturedValueAtFiber(error, fiber));
      throw HydrationMismatchException;
    }
    function prepareToHydrateHostInstance(fiber) {
      var instance = fiber.stateNode, type = fiber.type, props = fiber.memoizedProps;
      instance[internalInstanceKey] = fiber;
      instance[internalPropsKey] = props;
      switch (type) {
        case "dialog":
          listenToNonDelegatedEvent("cancel", instance);
          listenToNonDelegatedEvent("close", instance);
          break;
        case "iframe":
        case "object":
        case "embed":
          listenToNonDelegatedEvent("load", instance);
          break;
        case "video":
        case "audio":
          for (type = 0; type < mediaEventTypes.length; type++)
            listenToNonDelegatedEvent(mediaEventTypes[type], instance);
          break;
        case "source":
          listenToNonDelegatedEvent("error", instance);
          break;
        case "img":
        case "image":
        case "link":
          listenToNonDelegatedEvent("error", instance);
          listenToNonDelegatedEvent("load", instance);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", instance);
          break;
        case "input":
          listenToNonDelegatedEvent("invalid", instance);
          initInput(
            instance,
            props.value,
            props.defaultValue,
            props.checked,
            props.defaultChecked,
            props.type,
            props.name,
            true
          );
          track(instance);
          break;
        case "select":
          listenToNonDelegatedEvent("invalid", instance);
          break;
        case "textarea":
          listenToNonDelegatedEvent("invalid", instance), initTextarea(instance, props.value, props.defaultValue, props.children), track(instance);
      }
      type = props.children;
      "string" !== typeof type && "number" !== typeof type && "bigint" !== typeof type || instance.textContent === "" + type || true === props.suppressHydrationWarning || checkForUnmatchedText(instance.textContent, type) ? (null != props.popover && (listenToNonDelegatedEvent("beforetoggle", instance), listenToNonDelegatedEvent("toggle", instance)), null != props.onScroll && listenToNonDelegatedEvent("scroll", instance), null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance), null != props.onClick && (instance.onclick = noop$12), instance = true) : instance = false;
      instance || throwOnHydrationMismatch(fiber);
    }
    function popToNextHostParent(fiber) {
      for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
        switch (hydrationParentFiber.tag) {
          case 3:
          case 27:
            rootOrSingletonContext = true;
            return;
          case 5:
          case 13:
            rootOrSingletonContext = false;
            return;
          default:
            hydrationParentFiber = hydrationParentFiber.return;
        }
    }
    function popHydrationState(fiber) {
      if (fiber !== hydrationParentFiber) return false;
      if (!isHydrating) return popToNextHostParent(fiber), isHydrating = true, false;
      var shouldClear = false, JSCompiler_temp;
      if (JSCompiler_temp = 3 !== fiber.tag && 27 !== fiber.tag) {
        if (JSCompiler_temp = 5 === fiber.tag)
          JSCompiler_temp = fiber.type, JSCompiler_temp = !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) || shouldSetTextContent(fiber.type, fiber.memoizedProps);
        JSCompiler_temp = !JSCompiler_temp;
      }
      JSCompiler_temp && (shouldClear = true);
      shouldClear && nextHydratableInstance && throwOnHydrationMismatch(fiber);
      popToNextHostParent(fiber);
      if (13 === fiber.tag) {
        fiber = fiber.memoizedState;
        fiber = null !== fiber ? fiber.dehydrated : null;
        if (!fiber) throw Error(formatProdErrorMessage(317));
        a: {
          fiber = fiber.nextSibling;
          for (shouldClear = 0; fiber; ) {
            if (8 === fiber.nodeType)
              if (JSCompiler_temp = fiber.data, "/$" === JSCompiler_temp) {
                if (0 === shouldClear) {
                  nextHydratableInstance = getNextHydratable(fiber.nextSibling);
                  break a;
                }
                shouldClear--;
              } else
                "$" !== JSCompiler_temp && "$!" !== JSCompiler_temp && "$?" !== JSCompiler_temp || shouldClear++;
            fiber = fiber.nextSibling;
          }
          nextHydratableInstance = null;
        }
      } else
        nextHydratableInstance = hydrationParentFiber ? getNextHydratable(fiber.stateNode.nextSibling) : null;
      return true;
    }
    function resetHydrationState() {
      nextHydratableInstance = hydrationParentFiber = null;
      isHydrating = false;
    }
    function queueHydrationError(error) {
      null === hydrationErrors ? hydrationErrors = [error] : hydrationErrors.push(error);
    }
    var SuspenseException = Error(formatProdErrorMessage(460)), SuspenseyCommitException = Error(formatProdErrorMessage(474)), noopSuspenseyCommitThenable = { then: function() {
    } };
    function isThenableResolved(thenable) {
      thenable = thenable.status;
      return "fulfilled" === thenable || "rejected" === thenable;
    }
    function noop$3() {
    }
    function trackUsedThenable(thenableState2, thenable, index3) {
      index3 = thenableState2[index3];
      void 0 === index3 ? thenableState2.push(thenable) : index3 !== thenable && (thenable.then(noop$3, noop$3), thenable = index3);
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          thenableState2 = thenable.reason;
          if (thenableState2 === SuspenseException)
            throw Error(formatProdErrorMessage(483));
          throw thenableState2;
        default:
          if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
          else {
            thenableState2 = workInProgressRoot;
            if (null !== thenableState2 && 100 < thenableState2.shellSuspendCounter)
              throw Error(formatProdErrorMessage(482));
            thenableState2 = thenable;
            thenableState2.status = "pending";
            thenableState2.then(
              function(fulfilledValue) {
                if ("pending" === thenable.status) {
                  var fulfilledThenable = thenable;
                  fulfilledThenable.status = "fulfilled";
                  fulfilledThenable.value = fulfilledValue;
                }
              },
              function(error) {
                if ("pending" === thenable.status) {
                  var rejectedThenable = thenable;
                  rejectedThenable.status = "rejected";
                  rejectedThenable.reason = error;
                }
              }
            );
          }
          switch (thenable.status) {
            case "fulfilled":
              return thenable.value;
            case "rejected":
              thenableState2 = thenable.reason;
              if (thenableState2 === SuspenseException)
                throw Error(formatProdErrorMessage(483));
              throw thenableState2;
          }
          suspendedThenable = thenable;
          throw SuspenseException;
      }
    }
    var suspendedThenable = null;
    function getSuspendedThenable() {
      if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
      var thenable = suspendedThenable;
      suspendedThenable = null;
      return thenable;
    }
    var thenableState$1 = null, thenableIndexCounter$1 = 0;
    function unwrapThenable(thenable) {
      var index3 = thenableIndexCounter$1;
      thenableIndexCounter$1 += 1;
      null === thenableState$1 && (thenableState$1 = []);
      return trackUsedThenable(thenableState$1, thenable, index3);
    }
    function coerceRef(workInProgress2, element) {
      element = element.props.ref;
      workInProgress2.ref = void 0 !== element ? element : null;
    }
    function throwOnInvalidObjectType(returnFiber, newChild) {
      if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
        throw Error(formatProdErrorMessage(525));
      returnFiber = Object.prototype.toString.call(newChild);
      throw Error(
        formatProdErrorMessage(
          31,
          "[object Object]" === returnFiber ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : returnFiber
        )
      );
    }
    function resolveLazy(lazyType) {
      var init = lazyType._init;
      return init(lazyType._payload);
    }
    function createChildReconciler(shouldTrackSideEffects) {
      function deleteChild(returnFiber, childToDelete) {
        if (shouldTrackSideEffects) {
          var deletions = returnFiber.deletions;
          null === deletions ? (returnFiber.deletions = [childToDelete], returnFiber.flags |= 16) : deletions.push(childToDelete);
        }
      }
      function deleteRemainingChildren(returnFiber, currentFirstChild) {
        if (!shouldTrackSideEffects) return null;
        for (; null !== currentFirstChild; )
          deleteChild(returnFiber, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return null;
      }
      function mapRemainingChildren(currentFirstChild) {
        for (var existingChildren = /* @__PURE__ */ new Map(); null !== currentFirstChild; )
          null !== currentFirstChild.key ? existingChildren.set(currentFirstChild.key, currentFirstChild) : existingChildren.set(currentFirstChild.index, currentFirstChild), currentFirstChild = currentFirstChild.sibling;
        return existingChildren;
      }
      function useFiber(fiber, pendingProps) {
        fiber = createWorkInProgress(fiber, pendingProps);
        fiber.index = 0;
        fiber.sibling = null;
        return fiber;
      }
      function placeChild(newFiber, lastPlacedIndex, newIndex) {
        newFiber.index = newIndex;
        if (!shouldTrackSideEffects)
          return newFiber.flags |= 1048576, lastPlacedIndex;
        newIndex = newFiber.alternate;
        if (null !== newIndex)
          return newIndex = newIndex.index, newIndex < lastPlacedIndex ? (newFiber.flags |= 33554434, lastPlacedIndex) : newIndex;
        newFiber.flags |= 33554434;
        return lastPlacedIndex;
      }
      function placeSingleChild(newFiber) {
        shouldTrackSideEffects && null === newFiber.alternate && (newFiber.flags |= 33554434);
        return newFiber;
      }
      function updateTextNode(returnFiber, current, textContent, lanes) {
        if (null === current || 6 !== current.tag)
          return current = createFiberFromText(textContent, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, textContent);
        current.return = returnFiber;
        return current;
      }
      function updateElement(returnFiber, current, element, lanes) {
        var elementType = element.type;
        if (elementType === REACT_FRAGMENT_TYPE)
          return updateFragment(
            returnFiber,
            current,
            element.props.children,
            lanes,
            element.key
          );
        if (null !== current && (current.elementType === elementType || "object" === typeof elementType && null !== elementType && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current.type))
          return current = useFiber(current, element.props), coerceRef(current, element), current.return = returnFiber, current;
        current = createFiberFromTypeAndProps(
          element.type,
          element.key,
          element.props,
          null,
          returnFiber.mode,
          lanes
        );
        coerceRef(current, element);
        current.return = returnFiber;
        return current;
      }
      function updatePortal(returnFiber, current, portal, lanes) {
        if (null === current || 4 !== current.tag || current.stateNode.containerInfo !== portal.containerInfo || current.stateNode.implementation !== portal.implementation)
          return current = createFiberFromPortal(portal, returnFiber.mode, lanes), current.return = returnFiber, current;
        current = useFiber(current, portal.children || []);
        current.return = returnFiber;
        return current;
      }
      function updateFragment(returnFiber, current, fragment, lanes, key) {
        if (null === current || 7 !== current.tag)
          return current = createFiberFromFragment(
            fragment,
            returnFiber.mode,
            lanes,
            key
          ), current.return = returnFiber, current;
        current = useFiber(current, fragment);
        current.return = returnFiber;
        return current;
      }
      function createChild(returnFiber, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return newChild = createFiberFromText(
            "" + newChild,
            returnFiber.mode,
            lanes
          ), newChild.return = returnFiber, newChild;
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return lanes = createFiberFromTypeAndProps(
                newChild.type,
                newChild.key,
                newChild.props,
                null,
                returnFiber.mode,
                lanes
              ), coerceRef(lanes, newChild), lanes.return = returnFiber, lanes;
            case REACT_PORTAL_TYPE:
              return newChild = createFiberFromPortal(
                newChild,
                returnFiber.mode,
                lanes
              ), newChild.return = returnFiber, newChild;
            case REACT_LAZY_TYPE:
              var init = newChild._init;
              newChild = init(newChild._payload);
              return createChild(returnFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return newChild = createFiberFromFragment(
              newChild,
              returnFiber.mode,
              lanes,
              null
            ), newChild.return = returnFiber, newChild;
          if ("function" === typeof newChild.then)
            return createChild(returnFiber, unwrapThenable(newChild), lanes);
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return createChild(
              returnFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function updateSlot(returnFiber, oldFiber, newChild, lanes) {
        var key = null !== oldFiber ? oldFiber.key : null;
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return null !== key ? null : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return newChild.key === key ? updateElement(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_PORTAL_TYPE:
              return newChild.key === key ? updatePortal(returnFiber, oldFiber, newChild, lanes) : null;
            case REACT_LAZY_TYPE:
              return key = newChild._init, newChild = key(newChild._payload), updateSlot(returnFiber, oldFiber, newChild, lanes);
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return null !== key ? null : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateSlot(
              returnFiber,
              oldFiber,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateSlot(
              returnFiber,
              oldFiber,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
        if ("string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild)
          return existingChildren = existingChildren.get(newIdx) || null, updateTextNode(returnFiber, existingChildren, "" + newChild, lanes);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updateElement(returnFiber, existingChildren, newChild, lanes);
            case REACT_PORTAL_TYPE:
              return existingChildren = existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null, updatePortal(returnFiber, existingChildren, newChild, lanes);
            case REACT_LAZY_TYPE:
              var init = newChild._init;
              newChild = init(newChild._payload);
              return updateFromMap(
                existingChildren,
                returnFiber,
                newIdx,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild) || getIteratorFn(newChild))
            return existingChildren = existingChildren.get(newIdx) || null, updateFragment(returnFiber, existingChildren, newChild, lanes, null);
          if ("function" === typeof newChild.then)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return updateFromMap(
              existingChildren,
              returnFiber,
              newIdx,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return null;
      }
      function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null; null !== oldFiber && newIdx < newChildren.length; newIdx++) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(
            returnFiber,
            oldFiber,
            newChildren[newIdx],
            lanes
          );
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (newIdx === newChildren.length)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; newIdx < newChildren.length; newIdx++)
            oldFiber = createChild(returnFiber, newChildren[newIdx], lanes), null !== oldFiber && (currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            ), null === previousNewFiber ? resultingFirstChild = oldFiber : previousNewFiber.sibling = oldFiber, previousNewFiber = oldFiber);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); newIdx < newChildren.length; newIdx++)
          nextOldFiber = updateFromMap(
            oldFiber,
            returnFiber,
            newIdx,
            newChildren[newIdx],
            lanes
          ), null !== nextOldFiber && (shouldTrackSideEffects && null !== nextOldFiber.alternate && oldFiber.delete(
            null === nextOldFiber.key ? newIdx : nextOldFiber.key
          ), currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          ), null === previousNewFiber ? resultingFirstChild = nextOldFiber : previousNewFiber.sibling = nextOldFiber, previousNewFiber = nextOldFiber);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildren, lanes) {
        if (null == newChildren) throw Error(formatProdErrorMessage(151));
        for (var resultingFirstChild = null, previousNewFiber = null, oldFiber = currentFirstChild, newIdx = currentFirstChild = 0, nextOldFiber = null, step = newChildren.next(); null !== oldFiber && !step.done; newIdx++, step = newChildren.next()) {
          oldFiber.index > newIdx ? (nextOldFiber = oldFiber, oldFiber = null) : nextOldFiber = oldFiber.sibling;
          var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
          if (null === newFiber) {
            null === oldFiber && (oldFiber = nextOldFiber);
            break;
          }
          shouldTrackSideEffects && oldFiber && null === newFiber.alternate && deleteChild(returnFiber, oldFiber);
          currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
          null === previousNewFiber ? resultingFirstChild = newFiber : previousNewFiber.sibling = newFiber;
          previousNewFiber = newFiber;
          oldFiber = nextOldFiber;
        }
        if (step.done)
          return deleteRemainingChildren(returnFiber, oldFiber), isHydrating && pushTreeFork(returnFiber, newIdx), resultingFirstChild;
        if (null === oldFiber) {
          for (; !step.done; newIdx++, step = newChildren.next())
            step = createChild(returnFiber, step.value, lanes), null !== step && (currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
          isHydrating && pushTreeFork(returnFiber, newIdx);
          return resultingFirstChild;
        }
        for (oldFiber = mapRemainingChildren(oldFiber); !step.done; newIdx++, step = newChildren.next())
          step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes), null !== step && (shouldTrackSideEffects && null !== step.alternate && oldFiber.delete(null === step.key ? newIdx : step.key), currentFirstChild = placeChild(step, currentFirstChild, newIdx), null === previousNewFiber ? resultingFirstChild = step : previousNewFiber.sibling = step, previousNewFiber = step);
        shouldTrackSideEffects && oldFiber.forEach(function(child) {
          return deleteChild(returnFiber, child);
        });
        isHydrating && pushTreeFork(returnFiber, newIdx);
        return resultingFirstChild;
      }
      function reconcileChildFibersImpl(returnFiber, currentFirstChild, newChild, lanes) {
        "object" === typeof newChild && null !== newChild && newChild.type === REACT_FRAGMENT_TYPE && null === newChild.key && (newChild = newChild.props.children);
        if ("object" === typeof newChild && null !== newChild) {
          switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
              a: {
                for (var key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key) {
                    key = newChild.type;
                    if (key === REACT_FRAGMENT_TYPE) {
                      if (7 === currentFirstChild.tag) {
                        deleteRemainingChildren(
                          returnFiber,
                          currentFirstChild.sibling
                        );
                        lanes = useFiber(
                          currentFirstChild,
                          newChild.props.children
                        );
                        lanes.return = returnFiber;
                        returnFiber = lanes;
                        break a;
                      }
                    } else if (currentFirstChild.elementType === key || "object" === typeof key && null !== key && key.$$typeof === REACT_LAZY_TYPE && resolveLazy(key) === currentFirstChild.type) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.props);
                      coerceRef(lanes, newChild);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    }
                    deleteRemainingChildren(returnFiber, currentFirstChild);
                    break;
                  } else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                newChild.type === REACT_FRAGMENT_TYPE ? (lanes = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                ), lanes.return = returnFiber, returnFiber = lanes) : (lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                ), coerceRef(lanes, newChild), lanes.return = returnFiber, returnFiber = lanes);
              }
              return placeSingleChild(returnFiber);
            case REACT_PORTAL_TYPE:
              a: {
                for (key = newChild.key; null !== currentFirstChild; ) {
                  if (currentFirstChild.key === key)
                    if (4 === currentFirstChild.tag && currentFirstChild.stateNode.containerInfo === newChild.containerInfo && currentFirstChild.stateNode.implementation === newChild.implementation) {
                      deleteRemainingChildren(
                        returnFiber,
                        currentFirstChild.sibling
                      );
                      lanes = useFiber(currentFirstChild, newChild.children || []);
                      lanes.return = returnFiber;
                      returnFiber = lanes;
                      break a;
                    } else {
                      deleteRemainingChildren(returnFiber, currentFirstChild);
                      break;
                    }
                  else deleteChild(returnFiber, currentFirstChild);
                  currentFirstChild = currentFirstChild.sibling;
                }
                lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
                lanes.return = returnFiber;
                returnFiber = lanes;
              }
              return placeSingleChild(returnFiber);
            case REACT_LAZY_TYPE:
              return key = newChild._init, newChild = key(newChild._payload), reconcileChildFibersImpl(
                returnFiber,
                currentFirstChild,
                newChild,
                lanes
              );
          }
          if (isArrayImpl(newChild))
            return reconcileChildrenArray(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          if (getIteratorFn(newChild)) {
            key = getIteratorFn(newChild);
            if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
            newChild = key.call(newChild);
            return reconcileChildrenIterator(
              returnFiber,
              currentFirstChild,
              newChild,
              lanes
            );
          }
          if ("function" === typeof newChild.then)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              unwrapThenable(newChild),
              lanes
            );
          if (newChild.$$typeof === REACT_CONTEXT_TYPE)
            return reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              readContextDuringReconciliation(returnFiber, newChild),
              lanes
            );
          throwOnInvalidObjectType(returnFiber, newChild);
        }
        return "string" === typeof newChild && "" !== newChild || "number" === typeof newChild || "bigint" === typeof newChild ? (newChild = "" + newChild, null !== currentFirstChild && 6 === currentFirstChild.tag ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling), lanes = useFiber(currentFirstChild, newChild), lanes.return = returnFiber, returnFiber = lanes) : (deleteRemainingChildren(returnFiber, currentFirstChild), lanes = createFiberFromText(newChild, returnFiber.mode, lanes), lanes.return = returnFiber, returnFiber = lanes), placeSingleChild(returnFiber)) : deleteRemainingChildren(returnFiber, currentFirstChild);
      }
      return function(returnFiber, currentFirstChild, newChild, lanes) {
        try {
          thenableIndexCounter$1 = 0;
          var firstChildFiber = reconcileChildFibersImpl(
            returnFiber,
            currentFirstChild,
            newChild,
            lanes
          );
          thenableState$1 = null;
          return firstChildFiber;
        } catch (x) {
          if (x === SuspenseException) throw x;
          var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
          fiber.lanes = lanes;
          fiber.return = returnFiber;
          return fiber;
        } finally {
        }
      };
    }
    var reconcileChildFibers = createChildReconciler(true), mountChildFibers = createChildReconciler(false), currentTreeHiddenStackCursor = createCursor(null), prevEntangledRenderLanesCursor = createCursor(0);
    function pushHiddenContext(fiber, context) {
      fiber = entangledRenderLanes;
      push(prevEntangledRenderLanesCursor, fiber);
      push(currentTreeHiddenStackCursor, context);
      entangledRenderLanes = fiber | context.baseLanes;
    }
    function reuseHiddenContextOnStack() {
      push(prevEntangledRenderLanesCursor, entangledRenderLanes);
      push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
    }
    function popHiddenContext() {
      entangledRenderLanes = prevEntangledRenderLanesCursor.current;
      pop(currentTreeHiddenStackCursor);
      pop(prevEntangledRenderLanesCursor);
    }
    var suspenseHandlerStackCursor = createCursor(null), shellBoundary = null;
    function pushPrimaryTreeSuspenseHandler(handler) {
      var current = handler.alternate;
      push(suspenseStackCursor, suspenseStackCursor.current & 1);
      push(suspenseHandlerStackCursor, handler);
      null === shellBoundary && (null === current || null !== currentTreeHiddenStackCursor.current ? shellBoundary = handler : null !== current.memoizedState && (shellBoundary = handler));
    }
    function pushOffscreenSuspenseHandler(fiber) {
      if (22 === fiber.tag) {
        if (push(suspenseStackCursor, suspenseStackCursor.current), push(suspenseHandlerStackCursor, fiber), null === shellBoundary) {
          var current = fiber.alternate;
          null !== current && null !== current.memoizedState && (shellBoundary = fiber);
        }
      } else reuseSuspenseHandlerOnStack();
    }
    function reuseSuspenseHandlerOnStack() {
      push(suspenseStackCursor, suspenseStackCursor.current);
      push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
    }
    function popSuspenseHandler(fiber) {
      pop(suspenseHandlerStackCursor);
      shellBoundary === fiber && (shellBoundary = null);
      pop(suspenseStackCursor);
    }
    var suspenseStackCursor = createCursor(0);
    function findFirstSuspended(row) {
      for (var node = row; null !== node; ) {
        if (13 === node.tag) {
          var state = node.memoizedState;
          if (null !== state && (state = state.dehydrated, null === state || "$?" === state.data || "$!" === state.data))
            return node;
        } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
          if (0 !== (node.flags & 128)) return node;
        } else if (null !== node.child) {
          node.child.return = node;
          node = node.child;
          continue;
        }
        if (node === row) break;
        for (; null === node.sibling; ) {
          if (null === node.return || node.return === row) return null;
          node = node.return;
        }
        node.sibling.return = node.return;
        node = node.sibling;
      }
      return null;
    }
    var AbortControllerLocal = "undefined" !== typeof AbortController ? AbortController : function() {
      var listeners = [], signal = this.signal = {
        aborted: false,
        addEventListener: function(type, listener) {
          listeners.push(listener);
        }
      };
      this.abort = function() {
        signal.aborted = true;
        listeners.forEach(function(listener) {
          return listener();
        });
      };
    }, scheduleCallback$2 = Scheduler.unstable_scheduleCallback, NormalPriority = Scheduler.unstable_NormalPriority, CacheContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function createCache() {
      return {
        controller: new AbortControllerLocal(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function releaseCache(cache) {
      cache.refCount--;
      0 === cache.refCount && scheduleCallback$2(NormalPriority, function() {
        cache.controller.abort();
      });
    }
    var currentEntangledListeners = null, currentEntangledPendingCount = 0, currentEntangledLane = 0, currentEntangledActionThenable = null;
    function entangleAsyncAction(transition, thenable) {
      if (null === currentEntangledListeners) {
        var entangledListeners = currentEntangledListeners = [];
        currentEntangledPendingCount = 0;
        currentEntangledLane = requestTransitionLane();
        currentEntangledActionThenable = {
          status: "pending",
          value: void 0,
          then: function(resolve) {
            entangledListeners.push(resolve);
          }
        };
      }
      currentEntangledPendingCount++;
      thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
      return thenable;
    }
    function pingEngtangledActionScope() {
      if (0 === --currentEntangledPendingCount && null !== currentEntangledListeners) {
        null !== currentEntangledActionThenable && (currentEntangledActionThenable.status = "fulfilled");
        var listeners = currentEntangledListeners;
        currentEntangledListeners = null;
        currentEntangledLane = 0;
        currentEntangledActionThenable = null;
        for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
      }
    }
    function chainThenableValue(thenable, result) {
      var listeners = [], thenableWithOverride = {
        status: "pending",
        value: null,
        reason: null,
        then: function(resolve) {
          listeners.push(resolve);
        }
      };
      thenable.then(
        function() {
          thenableWithOverride.status = "fulfilled";
          thenableWithOverride.value = result;
          for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
        },
        function(error) {
          thenableWithOverride.status = "rejected";
          thenableWithOverride.reason = error;
          for (error = 0; error < listeners.length; error++)
            (0, listeners[error])(void 0);
        }
      );
      return thenableWithOverride;
    }
    var prevOnStartTransitionFinish = ReactSharedInternals.S;
    ReactSharedInternals.S = function(transition, returnValue) {
      "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && entangleAsyncAction(transition, returnValue);
      null !== prevOnStartTransitionFinish && prevOnStartTransitionFinish(transition, returnValue);
    };
    var resumedCache = createCursor(null);
    function peekCacheFromPool() {
      var cacheResumedFromPreviousRender = resumedCache.current;
      return null !== cacheResumedFromPreviousRender ? cacheResumedFromPreviousRender : workInProgressRoot.pooledCache;
    }
    function pushTransition(offscreenWorkInProgress, prevCachePool) {
      null === prevCachePool ? push(resumedCache, resumedCache.current) : push(resumedCache, prevCachePool.pool);
    }
    function getSuspendedCache() {
      var cacheFromPool = peekCacheFromPool();
      return null === cacheFromPool ? null : { parent: CacheContext._currentValue, pool: cacheFromPool };
    }
    var renderLanes = 0, currentlyRenderingFiber$1 = null, currentHook = null, workInProgressHook = null, didScheduleRenderPhaseUpdate = false, didScheduleRenderPhaseUpdateDuringThisPass = false, shouldDoubleInvokeUserFnsInHooksDEV = false, localIdCounter = 0, thenableIndexCounter = 0, thenableState = null, globalClientIdCounter = 0;
    function throwInvalidHookError() {
      throw Error(formatProdErrorMessage(321));
    }
    function areHookInputsEqual(nextDeps, prevDeps) {
      if (null === prevDeps) return false;
      for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
        if (!objectIs(nextDeps[i], prevDeps[i])) return false;
      return true;
    }
    function renderWithHooks(current, workInProgress2, Component, props, secondArg, nextRenderLanes) {
      renderLanes = nextRenderLanes;
      currentlyRenderingFiber$1 = workInProgress2;
      workInProgress2.memoizedState = null;
      workInProgress2.updateQueue = null;
      workInProgress2.lanes = 0;
      ReactSharedInternals.H = null === current || null === current.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      nextRenderLanes = Component(props, secondArg);
      shouldDoubleInvokeUserFnsInHooksDEV = false;
      didScheduleRenderPhaseUpdateDuringThisPass && (nextRenderLanes = renderWithHooksAgain(
        workInProgress2,
        Component,
        props,
        secondArg
      ));
      finishRenderingHooks(current);
      return nextRenderLanes;
    }
    function finishRenderingHooks(current) {
      ReactSharedInternals.H = ContextOnlyDispatcher;
      var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
      didScheduleRenderPhaseUpdate = false;
      thenableIndexCounter = 0;
      thenableState = null;
      if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
      null === current || didReceiveUpdate || (current = current.dependencies, null !== current && checkIfContextChanged(current) && (didReceiveUpdate = true));
    }
    function renderWithHooksAgain(workInProgress2, Component, props, secondArg) {
      currentlyRenderingFiber$1 = workInProgress2;
      var numberOfReRenders = 0;
      do {
        didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
        thenableIndexCounter = 0;
        didScheduleRenderPhaseUpdateDuringThisPass = false;
        if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
        numberOfReRenders += 1;
        workInProgressHook = currentHook = null;
        if (null != workInProgress2.updateQueue) {
          var children = workInProgress2.updateQueue;
          children.lastEffect = null;
          children.events = null;
          children.stores = null;
          null != children.memoCache && (children.memoCache.index = 0);
        }
        ReactSharedInternals.H = HooksDispatcherOnRerender;
        children = Component(props, secondArg);
      } while (didScheduleRenderPhaseUpdateDuringThisPass);
      return children;
    }
    function TransitionAwareHostComponent() {
      var dispatcher = ReactSharedInternals.H, maybeThenable = dispatcher.useState()[0];
      maybeThenable = "function" === typeof maybeThenable.then ? useThenable(maybeThenable) : maybeThenable;
      dispatcher = dispatcher.useState()[0];
      (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher && (currentlyRenderingFiber$1.flags |= 1024);
      return maybeThenable;
    }
    function checkDidRenderIdHook() {
      var didRenderIdHook = 0 !== localIdCounter;
      localIdCounter = 0;
      return didRenderIdHook;
    }
    function bailoutHooks(current, workInProgress2, lanes) {
      workInProgress2.updateQueue = current.updateQueue;
      workInProgress2.flags &= -2053;
      current.lanes &= ~lanes;
    }
    function resetHooksOnUnwind(workInProgress2) {
      if (didScheduleRenderPhaseUpdate) {
        for (workInProgress2 = workInProgress2.memoizedState; null !== workInProgress2; ) {
          var queue = workInProgress2.queue;
          null !== queue && (queue.pending = null);
          workInProgress2 = workInProgress2.next;
        }
        didScheduleRenderPhaseUpdate = false;
      }
      renderLanes = 0;
      workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
      didScheduleRenderPhaseUpdateDuringThisPass = false;
      thenableIndexCounter = localIdCounter = 0;
      thenableState = null;
    }
    function mountWorkInProgressHook() {
      var hook = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook : workInProgressHook = workInProgressHook.next = hook;
      return workInProgressHook;
    }
    function updateWorkInProgressHook() {
      if (null === currentHook) {
        var nextCurrentHook = currentlyRenderingFiber$1.alternate;
        nextCurrentHook = null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
      } else nextCurrentHook = currentHook.next;
      var nextWorkInProgressHook = null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState : workInProgressHook.next;
      if (null !== nextWorkInProgressHook)
        workInProgressHook = nextWorkInProgressHook, currentHook = nextCurrentHook;
      else {
        if (null === nextCurrentHook) {
          if (null === currentlyRenderingFiber$1.alternate)
            throw Error(formatProdErrorMessage(467));
          throw Error(formatProdErrorMessage(310));
        }
        currentHook = nextCurrentHook;
        nextCurrentHook = {
          memoizedState: currentHook.memoizedState,
          baseState: currentHook.baseState,
          baseQueue: currentHook.baseQueue,
          queue: currentHook.queue,
          next: null
        };
        null === workInProgressHook ? currentlyRenderingFiber$1.memoizedState = workInProgressHook = nextCurrentHook : workInProgressHook = workInProgressHook.next = nextCurrentHook;
      }
      return workInProgressHook;
    }
    var createFunctionComponentUpdateQueue;
    createFunctionComponentUpdateQueue = function() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    };
    function useThenable(thenable) {
      var index3 = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      thenable = trackUsedThenable(thenableState, thenable, index3);
      index3 = currentlyRenderingFiber$1;
      null === (null === workInProgressHook ? index3.memoizedState : workInProgressHook.next) && (index3 = index3.alternate, ReactSharedInternals.H = null === index3 || null === index3.memoizedState ? HooksDispatcherOnMount : HooksDispatcherOnUpdate);
      return thenable;
    }
    function use(usable) {
      if (null !== usable && "object" === typeof usable) {
        if ("function" === typeof usable.then) return useThenable(usable);
        if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
      }
      throw Error(formatProdErrorMessage(438, String(usable)));
    }
    function useMemoCache(size2) {
      var memoCache = null, updateQueue = currentlyRenderingFiber$1.updateQueue;
      null !== updateQueue && (memoCache = updateQueue.memoCache);
      if (null == memoCache) {
        var current = currentlyRenderingFiber$1.alternate;
        null !== current && (current = current.updateQueue, null !== current && (current = current.memoCache, null != current && (memoCache = {
          data: current.data.map(function(array) {
            return array.slice();
          }),
          index: 0
        })));
      }
      null == memoCache && (memoCache = { data: [], index: 0 });
      null === updateQueue && (updateQueue = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = updateQueue);
      updateQueue.memoCache = memoCache;
      updateQueue = memoCache.data[memoCache.index];
      if (void 0 === updateQueue)
        for (updateQueue = memoCache.data[memoCache.index] = Array(size2), current = 0; current < size2; current++)
          updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
      memoCache.index++;
      return updateQueue;
    }
    function basicStateReducer(state, action) {
      return "function" === typeof action ? action(state) : action;
    }
    function updateReducer(reducer) {
      var hook = updateWorkInProgressHook();
      return updateReducerImpl(hook, currentHook, reducer);
    }
    function updateReducerImpl(hook, current, reducer) {
      var queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var baseQueue = hook.baseQueue, pendingQueue = queue.pending;
      if (null !== pendingQueue) {
        if (null !== baseQueue) {
          var baseFirst = baseQueue.next;
          baseQueue.next = pendingQueue.next;
          pendingQueue.next = baseFirst;
        }
        current.baseQueue = baseQueue = pendingQueue;
        queue.pending = null;
      }
      pendingQueue = hook.baseState;
      if (null === baseQueue) hook.memoizedState = pendingQueue;
      else {
        current = baseQueue.next;
        var newBaseQueueFirst = baseFirst = null, newBaseQueueLast = null, update = current, didReadFromEntangledAsyncAction$54 = false;
        do {
          var updateLane = update.lane & -536870913;
          if (updateLane !== update.lane ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes & updateLane) === updateLane) {
            var revertLane = update.revertLane;
            if (0 === revertLane)
              null !== newBaseQueueLast && (newBaseQueueLast = newBaseQueueLast.next = {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }), updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction$54 = true);
            else if ((renderLanes & revertLane) === revertLane) {
              update = update.next;
              revertLane === currentEntangledLane && (didReadFromEntangledAsyncAction$54 = true);
              continue;
            } else
              updateLane = {
                lane: 0,
                revertLane: update.revertLane,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = updateLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = updateLane, currentlyRenderingFiber$1.lanes |= revertLane, workInProgressRootSkippedLanes |= revertLane;
            updateLane = update.action;
            shouldDoubleInvokeUserFnsInHooksDEV && reducer(pendingQueue, updateLane);
            pendingQueue = update.hasEagerState ? update.eagerState : reducer(pendingQueue, updateLane);
          } else
            revertLane = {
              lane: updateLane,
              revertLane: update.revertLane,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            }, null === newBaseQueueLast ? (newBaseQueueFirst = newBaseQueueLast = revertLane, baseFirst = pendingQueue) : newBaseQueueLast = newBaseQueueLast.next = revertLane, currentlyRenderingFiber$1.lanes |= updateLane, workInProgressRootSkippedLanes |= updateLane;
          update = update.next;
        } while (null !== update && update !== current);
        null === newBaseQueueLast ? baseFirst = pendingQueue : newBaseQueueLast.next = newBaseQueueFirst;
        if (!objectIs(pendingQueue, hook.memoizedState) && (didReceiveUpdate = true, didReadFromEntangledAsyncAction$54 && (reducer = currentEntangledActionThenable, null !== reducer)))
          throw reducer;
        hook.memoizedState = pendingQueue;
        hook.baseState = baseFirst;
        hook.baseQueue = newBaseQueueLast;
        queue.lastRenderedState = pendingQueue;
      }
      null === baseQueue && (queue.lanes = 0);
      return [hook.memoizedState, queue.dispatch];
    }
    function rerenderReducer(reducer) {
      var hook = updateWorkInProgressHook(), queue = hook.queue;
      if (null === queue) throw Error(formatProdErrorMessage(311));
      queue.lastRenderedReducer = reducer;
      var dispatch = queue.dispatch, lastRenderPhaseUpdate = queue.pending, newState = hook.memoizedState;
      if (null !== lastRenderPhaseUpdate) {
        queue.pending = null;
        var update = lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
        do
          newState = reducer(newState, update.action), update = update.next;
        while (update !== lastRenderPhaseUpdate);
        objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
        hook.memoizedState = newState;
        null === hook.baseQueue && (hook.baseState = newState);
        queue.lastRenderedState = newState;
      }
      return [newState, dispatch];
    }
    function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
      var fiber = currentlyRenderingFiber$1, hook = updateWorkInProgressHook(), isHydrating$jscomp$0 = isHydrating;
      if (isHydrating$jscomp$0) {
        if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
        getServerSnapshot = getServerSnapshot();
      } else getServerSnapshot = getSnapshot();
      var snapshotChanged = !objectIs(
        (currentHook || hook).memoizedState,
        getServerSnapshot
      );
      snapshotChanged && (hook.memoizedState = getServerSnapshot, didReceiveUpdate = true);
      hook = hook.queue;
      updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
        subscribe
      ]);
      if (hook.getSnapshot !== getSnapshot || snapshotChanged || null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1) {
        fiber.flags |= 2048;
        pushEffect(
          9,
          updateStoreInstance.bind(
            null,
            fiber,
            hook,
            getServerSnapshot,
            getSnapshot
          ),
          { destroy: void 0 },
          null
        );
        if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
        isHydrating$jscomp$0 || 0 !== (renderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
      }
      return getServerSnapshot;
    }
    function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
      fiber.flags |= 16384;
      fiber = { getSnapshot, value: renderedSnapshot };
      getSnapshot = currentlyRenderingFiber$1.updateQueue;
      null === getSnapshot ? (getSnapshot = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = getSnapshot, getSnapshot.stores = [fiber]) : (renderedSnapshot = getSnapshot.stores, null === renderedSnapshot ? getSnapshot.stores = [fiber] : renderedSnapshot.push(fiber));
    }
    function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
      inst.value = nextSnapshot;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
    }
    function subscribeToStore(fiber, inst, subscribe) {
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
      });
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return true;
      }
    }
    function forceStoreRerender(fiber) {
      var root2 = enqueueConcurrentRenderForLane(fiber, 2);
      null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2);
    }
    function mountStateImpl(initialState) {
      var hook = mountWorkInProgressHook();
      if ("function" === typeof initialState) {
        var initialStateInitializer = initialState;
        initialState = initialStateInitializer();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            initialStateInitializer();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
      }
      hook.memoizedState = hook.baseState = initialState;
      hook.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: basicStateReducer,
        lastRenderedState: initialState
      };
      return hook;
    }
    function updateOptimisticImpl(hook, current, passthrough, reducer) {
      hook.baseState = passthrough;
      return updateReducerImpl(
        hook,
        currentHook,
        "function" === typeof reducer ? reducer : basicStateReducer
      );
    }
    function dispatchActionState(fiber, actionQueue, setPendingState, setState, payload) {
      if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
      fiber = actionQueue.action;
      if (null !== fiber) {
        var actionNode = {
          payload,
          action: fiber,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(listener) {
            actionNode.listeners.push(listener);
          }
        };
        null !== ReactSharedInternals.T ? setPendingState(true) : actionNode.isTransition = false;
        setState(actionNode);
        setPendingState = actionQueue.pending;
        null === setPendingState ? (actionNode.next = actionQueue.pending = actionNode, runActionStateAction(actionQueue, actionNode)) : (actionNode.next = setPendingState.next, actionQueue.pending = setPendingState.next = actionNode);
      }
    }
    function runActionStateAction(actionQueue, node) {
      var action = node.action, payload = node.payload, prevState = actionQueue.state;
      if (node.isTransition) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = action(prevState, payload), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          handleActionReturnValue(actionQueue, node, returnValue);
        } catch (error) {
          onActionError(actionQueue, node, error);
        } finally {
          ReactSharedInternals.T = prevTransition;
        }
      } else
        try {
          prevTransition = action(prevState, payload), handleActionReturnValue(actionQueue, node, prevTransition);
        } catch (error$60) {
          onActionError(actionQueue, node, error$60);
        }
    }
    function handleActionReturnValue(actionQueue, node, returnValue) {
      null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then ? returnValue.then(
        function(nextState) {
          onActionSuccess(actionQueue, node, nextState);
        },
        function(error) {
          return onActionError(actionQueue, node, error);
        }
      ) : onActionSuccess(actionQueue, node, returnValue);
    }
    function onActionSuccess(actionQueue, actionNode, nextState) {
      actionNode.status = "fulfilled";
      actionNode.value = nextState;
      notifyActionListeners(actionNode);
      actionQueue.state = nextState;
      actionNode = actionQueue.pending;
      null !== actionNode && (nextState = actionNode.next, nextState === actionNode ? actionQueue.pending = null : (nextState = nextState.next, actionNode.next = nextState, runActionStateAction(actionQueue, nextState)));
    }
    function onActionError(actionQueue, actionNode, error) {
      var last = actionQueue.pending;
      actionQueue.pending = null;
      if (null !== last) {
        last = last.next;
        do
          actionNode.status = "rejected", actionNode.reason = error, notifyActionListeners(actionNode), actionNode = actionNode.next;
        while (actionNode !== last);
      }
      actionQueue.action = null;
    }
    function notifyActionListeners(actionNode) {
      actionNode = actionNode.listeners;
      for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
    }
    function actionStateReducer(oldState, newState) {
      return newState;
    }
    function mountActionState(action, initialStateProp) {
      if (isHydrating) {
        var ssrFormState = workInProgressRoot.formState;
        if (null !== ssrFormState) {
          a: {
            var JSCompiler_inline_result = currentlyRenderingFiber$1;
            if (isHydrating) {
              if (nextHydratableInstance) {
                b: {
                  var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
                  for (var inRootOrSingleton = rootOrSingletonContext; 8 !== JSCompiler_inline_result$jscomp$0.nodeType; ) {
                    if (!inRootOrSingleton) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                    JSCompiler_inline_result$jscomp$0 = getNextHydratable(
                      JSCompiler_inline_result$jscomp$0.nextSibling
                    );
                    if (null === JSCompiler_inline_result$jscomp$0) {
                      JSCompiler_inline_result$jscomp$0 = null;
                      break b;
                    }
                  }
                  inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
                  JSCompiler_inline_result$jscomp$0 = "F!" === inRootOrSingleton || "F" === inRootOrSingleton ? JSCompiler_inline_result$jscomp$0 : null;
                }
                if (JSCompiler_inline_result$jscomp$0) {
                  nextHydratableInstance = getNextHydratable(
                    JSCompiler_inline_result$jscomp$0.nextSibling
                  );
                  JSCompiler_inline_result = "F!" === JSCompiler_inline_result$jscomp$0.data;
                  break a;
                }
              }
              throwOnHydrationMismatch(JSCompiler_inline_result);
            }
            JSCompiler_inline_result = false;
          }
          JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
        }
      }
      ssrFormState = mountWorkInProgressHook();
      ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
      JSCompiler_inline_result = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: actionStateReducer,
        lastRenderedState: initialStateProp
      };
      ssrFormState.queue = JSCompiler_inline_result;
      ssrFormState = dispatchSetState.bind(
        null,
        currentlyRenderingFiber$1,
        JSCompiler_inline_result
      );
      JSCompiler_inline_result.dispatch = ssrFormState;
      JSCompiler_inline_result = mountStateImpl(false);
      inRootOrSingleton = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber$1,
        false,
        JSCompiler_inline_result.queue
      );
      JSCompiler_inline_result = mountWorkInProgressHook();
      JSCompiler_inline_result$jscomp$0 = {
        state: initialStateProp,
        dispatch: null,
        action,
        pending: null
      };
      JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
      ssrFormState = dispatchActionState.bind(
        null,
        currentlyRenderingFiber$1,
        JSCompiler_inline_result$jscomp$0,
        inRootOrSingleton,
        ssrFormState
      );
      JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
      JSCompiler_inline_result.memoizedState = action;
      return [initialStateProp, ssrFormState, false];
    }
    function updateActionState(action) {
      var stateHook = updateWorkInProgressHook();
      return updateActionStateImpl(stateHook, currentHook, action);
    }
    function updateActionStateImpl(stateHook, currentStateHook, action) {
      currentStateHook = updateReducerImpl(
        stateHook,
        currentStateHook,
        actionStateReducer
      )[0];
      stateHook = updateReducer(basicStateReducer)[0];
      currentStateHook = "object" === typeof currentStateHook && null !== currentStateHook && "function" === typeof currentStateHook.then ? useThenable(currentStateHook) : currentStateHook;
      var actionQueueHook = updateWorkInProgressHook(), actionQueue = actionQueueHook.queue, dispatch = actionQueue.dispatch;
      action !== actionQueueHook.memoizedState && (currentlyRenderingFiber$1.flags |= 2048, pushEffect(
        9,
        actionStateActionEffect.bind(null, actionQueue, action),
        { destroy: void 0 },
        null
      ));
      return [currentStateHook, dispatch, stateHook];
    }
    function actionStateActionEffect(actionQueue, action) {
      actionQueue.action = action;
    }
    function rerenderActionState(action) {
      var stateHook = updateWorkInProgressHook(), currentStateHook = currentHook;
      if (null !== currentStateHook)
        return updateActionStateImpl(stateHook, currentStateHook, action);
      updateWorkInProgressHook();
      stateHook = stateHook.memoizedState;
      currentStateHook = updateWorkInProgressHook();
      var dispatch = currentStateHook.queue.dispatch;
      currentStateHook.memoizedState = action;
      return [stateHook, dispatch, false];
    }
    function pushEffect(tag, create, inst, deps) {
      tag = { tag, create, inst, deps, next: null };
      create = currentlyRenderingFiber$1.updateQueue;
      null === create && (create = createFunctionComponentUpdateQueue(), currentlyRenderingFiber$1.updateQueue = create);
      inst = create.lastEffect;
      null === inst ? create.lastEffect = tag.next = tag : (deps = inst.next, inst.next = tag, tag.next = deps, create.lastEffect = tag);
      return tag;
    }
    function updateRef2() {
      return updateWorkInProgressHook().memoizedState;
    }
    function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
      var hook = mountWorkInProgressHook();
      currentlyRenderingFiber$1.flags |= fiberFlags;
      hook.memoizedState = pushEffect(
        1 | hookFlags,
        create,
        { destroy: void 0 },
        void 0 === deps ? null : deps
      );
    }
    function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var inst = hook.memoizedState.inst;
      null !== currentHook && null !== deps && areHookInputsEqual(deps, currentHook.memoizedState.deps) ? hook.memoizedState = pushEffect(hookFlags, create, inst, deps) : (currentlyRenderingFiber$1.flags |= fiberFlags, hook.memoizedState = pushEffect(1 | hookFlags, create, inst, deps));
    }
    function mountEffect(create, deps) {
      mountEffectImpl(8390656, 8, create, deps);
    }
    function updateEffect(create, deps) {
      updateEffectImpl(2048, 8, create, deps);
    }
    function updateInsertionEffect(create, deps) {
      return updateEffectImpl(4, 2, create, deps);
    }
    function updateLayoutEffect(create, deps) {
      return updateEffectImpl(4, 4, create, deps);
    }
    function imperativeHandleEffect(create, ref2) {
      if ("function" === typeof ref2) {
        create = create();
        var refCleanup = ref2(create);
        return function() {
          "function" === typeof refCleanup ? refCleanup() : ref2(null);
        };
      }
      if (null !== ref2 && void 0 !== ref2)
        return create = create(), ref2.current = create, function() {
          ref2.current = null;
        };
    }
    function updateImperativeHandle(ref2, create, deps) {
      deps = null !== deps && void 0 !== deps ? deps.concat([ref2]) : null;
      updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref2), deps);
    }
    function mountDebugValue() {
    }
    function updateCallback(callback, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      hook.memoizedState = [callback, deps];
      return callback;
    }
    function updateMemo(nextCreate, deps) {
      var hook = updateWorkInProgressHook();
      deps = void 0 === deps ? null : deps;
      var prevState = hook.memoizedState;
      if (null !== deps && areHookInputsEqual(deps, prevState[1]))
        return prevState[0];
      prevState = nextCreate();
      if (shouldDoubleInvokeUserFnsInHooksDEV) {
        setIsStrictModeForDevtools(true);
        try {
          nextCreate();
        } finally {
          setIsStrictModeForDevtools(false);
        }
      }
      hook.memoizedState = [prevState, deps];
      return prevState;
    }
    function mountDeferredValueImpl(hook, value, initialValue) {
      if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
        return hook.memoizedState = value;
      hook.memoizedState = initialValue;
      hook = requestDeferredLane();
      currentlyRenderingFiber$1.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return initialValue;
    }
    function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
      if (objectIs(value, prevValue)) return value;
      if (null !== currentTreeHiddenStackCursor.current)
        return hook = mountDeferredValueImpl(hook, value, initialValue), objectIs(hook, prevValue) || (didReceiveUpdate = true), hook;
      if (0 === (renderLanes & 42))
        return didReceiveUpdate = true, hook.memoizedState = value;
      hook = requestDeferredLane();
      currentlyRenderingFiber$1.lanes |= hook;
      workInProgressRootSkippedLanes |= hook;
      return prevValue;
    }
    function startTransition(fiber, queue, pendingState, finishedState, callback) {
      var previousPriority = ReactDOMSharedInternals.p;
      ReactDOMSharedInternals.p = 0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
      var prevTransition = ReactSharedInternals.T, currentTransition = {};
      ReactSharedInternals.T = currentTransition;
      dispatchOptimisticSetState(fiber, false, queue, pendingState);
      try {
        var returnValue = callback(), onStartTransitionFinish = ReactSharedInternals.S;
        null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
        if (null !== returnValue && "object" === typeof returnValue && "function" === typeof returnValue.then) {
          var thenableForFinishedState = chainThenableValue(
            returnValue,
            finishedState
          );
          dispatchSetStateInternal(
            fiber,
            queue,
            thenableForFinishedState,
            requestUpdateLane(fiber)
          );
        } else
          dispatchSetStateInternal(
            fiber,
            queue,
            finishedState,
            requestUpdateLane(fiber)
          );
      } catch (error) {
        dispatchSetStateInternal(
          fiber,
          queue,
          { then: function() {
          }, status: "rejected", reason: error },
          requestUpdateLane()
        );
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function noop$2() {
    }
    function startHostTransition(formFiber, pendingState, action, formData) {
      if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
      var queue = ensureFormComponentIsStateful(formFiber).queue;
      startTransition(
        formFiber,
        queue,
        pendingState,
        sharedNotPendingObject,
        null === action ? noop$2 : function() {
          requestFormReset$1(formFiber);
          return action(formData);
        }
      );
    }
    function ensureFormComponentIsStateful(formFiber) {
      var existingStateHook = formFiber.memoizedState;
      if (null !== existingStateHook) return existingStateHook;
      existingStateHook = {
        memoizedState: sharedNotPendingObject,
        baseState: sharedNotPendingObject,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: sharedNotPendingObject
        },
        next: null
      };
      var initialResetState = {};
      existingStateHook.next = {
        memoizedState: initialResetState,
        baseState: initialResetState,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: basicStateReducer,
          lastRenderedState: initialResetState
        },
        next: null
      };
      formFiber.memoizedState = existingStateHook;
      formFiber = formFiber.alternate;
      null !== formFiber && (formFiber.memoizedState = existingStateHook);
      return existingStateHook;
    }
    function requestFormReset$1(formFiber) {
      var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
      dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
    }
    function useHostTransitionStatus() {
      return readContext(HostTransitionContext);
    }
    function updateId() {
      return updateWorkInProgressHook().memoizedState;
    }
    function updateRefresh() {
      return updateWorkInProgressHook().memoizedState;
    }
    function refreshCache(fiber) {
      for (var provider = fiber.return; null !== provider; ) {
        switch (provider.tag) {
          case 24:
          case 3:
            var lane = requestUpdateLane();
            fiber = createUpdate(lane);
            var root$63 = enqueueUpdate(provider, fiber, lane);
            null !== root$63 && (scheduleUpdateOnFiber(root$63, provider, lane), entangleTransitions(root$63, provider, lane));
            provider = { cache: createCache() };
            fiber.payload = provider;
            return;
        }
        provider = provider.return;
      }
    }
    function dispatchReducerAction(fiber, queue, action) {
      var lane = requestUpdateLane();
      action = {
        lane,
        revertLane: 0,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      isRenderPhaseUpdate(fiber) ? enqueueRenderPhaseUpdate(queue, action) : (action = enqueueConcurrentHookUpdate(fiber, queue, action, lane), null !== action && (scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane)));
    }
    function dispatchSetState(fiber, queue, action) {
      var lane = requestUpdateLane();
      dispatchSetStateInternal(fiber, queue, action, lane);
    }
    function dispatchSetStateInternal(fiber, queue, action, lane) {
      var update = {
        lane,
        revertLane: 0,
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
      else {
        var alternate = fiber.alternate;
        if (0 === fiber.lanes && (null === alternate || 0 === alternate.lanes) && (alternate = queue.lastRenderedReducer, null !== alternate))
          try {
            var currentState = queue.lastRenderedState, eagerState = alternate(currentState, action);
            update.hasEagerState = true;
            update.eagerState = eagerState;
            if (objectIs(eagerState, currentState))
              return enqueueUpdate$1(fiber, queue, update, 0), null === workInProgressRoot && finishQueueingConcurrentUpdates(), false;
          } catch (error) {
          } finally {
          }
        action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
        if (null !== action)
          return scheduleUpdateOnFiber(action, fiber, lane), entangleTransitionUpdate(action, queue, lane), true;
      }
      return false;
    }
    function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
      action = {
        lane: 2,
        revertLane: requestTransitionLane(),
        action,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (isRenderPhaseUpdate(fiber)) {
        if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
      } else
        throwIfDuringRender = enqueueConcurrentHookUpdate(
          fiber,
          queue,
          action,
          2
        ), null !== throwIfDuringRender && scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
    }
    function isRenderPhaseUpdate(fiber) {
      var alternate = fiber.alternate;
      return fiber === currentlyRenderingFiber$1 || null !== alternate && alternate === currentlyRenderingFiber$1;
    }
    function enqueueRenderPhaseUpdate(queue, update) {
      didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
      var pending = queue.pending;
      null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
      queue.pending = update;
    }
    function entangleTransitionUpdate(root2, queue, lane) {
      if (0 !== (lane & 4194176)) {
        var queueLanes = queue.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        queue.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    var ContextOnlyDispatcher = {
      readContext,
      use,
      useCallback: throwInvalidHookError,
      useContext: throwInvalidHookError,
      useEffect: throwInvalidHookError,
      useImperativeHandle: throwInvalidHookError,
      useLayoutEffect: throwInvalidHookError,
      useInsertionEffect: throwInvalidHookError,
      useMemo: throwInvalidHookError,
      useReducer: throwInvalidHookError,
      useRef: throwInvalidHookError,
      useState: throwInvalidHookError,
      useDebugValue: throwInvalidHookError,
      useDeferredValue: throwInvalidHookError,
      useTransition: throwInvalidHookError,
      useSyncExternalStore: throwInvalidHookError,
      useId: throwInvalidHookError
    };
    ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
    ContextOnlyDispatcher.useMemoCache = throwInvalidHookError;
    ContextOnlyDispatcher.useHostTransitionStatus = throwInvalidHookError;
    ContextOnlyDispatcher.useFormState = throwInvalidHookError;
    ContextOnlyDispatcher.useActionState = throwInvalidHookError;
    ContextOnlyDispatcher.useOptimistic = throwInvalidHookError;
    var HooksDispatcherOnMount = {
      readContext,
      use,
      useCallback: function(callback, deps) {
        mountWorkInProgressHook().memoizedState = [
          callback,
          void 0 === deps ? null : deps
        ];
        return callback;
      },
      useContext: readContext,
      useEffect: mountEffect,
      useImperativeHandle: function(ref2, create, deps) {
        deps = null !== deps && void 0 !== deps ? deps.concat([ref2]) : null;
        mountEffectImpl(
          4194308,
          4,
          imperativeHandleEffect.bind(null, create, ref2),
          deps
        );
      },
      useLayoutEffect: function(create, deps) {
        return mountEffectImpl(4194308, 4, create, deps);
      },
      useInsertionEffect: function(create, deps) {
        mountEffectImpl(4, 2, create, deps);
      },
      useMemo: function(nextCreate, deps) {
        var hook = mountWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        var nextValue = nextCreate();
        if (shouldDoubleInvokeUserFnsInHooksDEV) {
          setIsStrictModeForDevtools(true);
          try {
            nextCreate();
          } finally {
            setIsStrictModeForDevtools(false);
          }
        }
        hook.memoizedState = [nextValue, deps];
        return nextValue;
      },
      useReducer: function(reducer, initialArg, init) {
        var hook = mountWorkInProgressHook();
        if (void 0 !== init) {
          var initialState = init(initialArg);
          if (shouldDoubleInvokeUserFnsInHooksDEV) {
            setIsStrictModeForDevtools(true);
            try {
              init(initialArg);
            } finally {
              setIsStrictModeForDevtools(false);
            }
          }
        } else initialState = initialArg;
        hook.memoizedState = hook.baseState = initialState;
        reducer = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: reducer,
          lastRenderedState: initialState
        };
        hook.queue = reducer;
        reducer = reducer.dispatch = dispatchReducerAction.bind(
          null,
          currentlyRenderingFiber$1,
          reducer
        );
        return [hook.memoizedState, reducer];
      },
      useRef: function(initialValue) {
        var hook = mountWorkInProgressHook();
        initialValue = { current: initialValue };
        return hook.memoizedState = initialValue;
      },
      useState: function(initialState) {
        initialState = mountStateImpl(initialState);
        var queue = initialState.queue, dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
        queue.dispatch = dispatch;
        return [initialState.memoizedState, dispatch];
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = mountWorkInProgressHook();
        return mountDeferredValueImpl(hook, value, initialValue);
      },
      useTransition: function() {
        var stateHook = mountStateImpl(false);
        stateHook = startTransition.bind(
          null,
          currentlyRenderingFiber$1,
          stateHook.queue,
          true,
          false
        );
        mountWorkInProgressHook().memoizedState = stateHook;
        return [false, stateHook];
      },
      useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
        var fiber = currentlyRenderingFiber$1, hook = mountWorkInProgressHook();
        if (isHydrating) {
          if (void 0 === getServerSnapshot)
            throw Error(formatProdErrorMessage(407));
          getServerSnapshot = getServerSnapshot();
        } else {
          getServerSnapshot = getSnapshot();
          if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
          0 !== (workInProgressRootRenderLanes & 60) || pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
        }
        hook.memoizedState = getServerSnapshot;
        var inst = { value: getServerSnapshot, getSnapshot };
        hook.queue = inst;
        mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
          subscribe
        ]);
        fiber.flags |= 2048;
        pushEffect(
          9,
          updateStoreInstance.bind(
            null,
            fiber,
            inst,
            getServerSnapshot,
            getSnapshot
          ),
          { destroy: void 0 },
          null
        );
        return getServerSnapshot;
      },
      useId: function() {
        var hook = mountWorkInProgressHook(), identifierPrefix = workInProgressRoot.identifierPrefix;
        if (isHydrating) {
          var JSCompiler_inline_result = treeContextOverflow;
          var idWithLeadingBit = treeContextId;
          JSCompiler_inline_result = (idWithLeadingBit & ~(1 << 32 - clz32(idWithLeadingBit) - 1)).toString(32) + JSCompiler_inline_result;
          identifierPrefix = ":" + identifierPrefix + "R" + JSCompiler_inline_result;
          JSCompiler_inline_result = localIdCounter++;
          0 < JSCompiler_inline_result && (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
          identifierPrefix += ":";
        } else
          JSCompiler_inline_result = globalClientIdCounter++, identifierPrefix = ":" + identifierPrefix + "r" + JSCompiler_inline_result.toString(32) + ":";
        return hook.memoizedState = identifierPrefix;
      },
      useCacheRefresh: function() {
        return mountWorkInProgressHook().memoizedState = refreshCache.bind(
          null,
          currentlyRenderingFiber$1
        );
      }
    };
    HooksDispatcherOnMount.useMemoCache = useMemoCache;
    HooksDispatcherOnMount.useHostTransitionStatus = useHostTransitionStatus;
    HooksDispatcherOnMount.useFormState = mountActionState;
    HooksDispatcherOnMount.useActionState = mountActionState;
    HooksDispatcherOnMount.useOptimistic = function(passthrough) {
      var hook = mountWorkInProgressHook();
      hook.memoizedState = hook.baseState = passthrough;
      var queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      hook.queue = queue;
      hook = dispatchOptimisticSetState.bind(
        null,
        currentlyRenderingFiber$1,
        true,
        queue
      );
      queue.dispatch = hook;
      return [passthrough, hook];
    };
    var HooksDispatcherOnUpdate = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: updateReducer,
      useRef: updateRef2,
      useState: function() {
        return updateReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = updateReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId
    };
    HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
    HooksDispatcherOnUpdate.useMemoCache = useMemoCache;
    HooksDispatcherOnUpdate.useHostTransitionStatus = useHostTransitionStatus;
    HooksDispatcherOnUpdate.useFormState = updateActionState;
    HooksDispatcherOnUpdate.useActionState = updateActionState;
    HooksDispatcherOnUpdate.useOptimistic = function(passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
    };
    var HooksDispatcherOnRerender = {
      readContext,
      use,
      useCallback: updateCallback,
      useContext: readContext,
      useEffect: updateEffect,
      useImperativeHandle: updateImperativeHandle,
      useInsertionEffect: updateInsertionEffect,
      useLayoutEffect: updateLayoutEffect,
      useMemo: updateMemo,
      useReducer: rerenderReducer,
      useRef: updateRef2,
      useState: function() {
        return rerenderReducer(basicStateReducer);
      },
      useDebugValue: mountDebugValue,
      useDeferredValue: function(value, initialValue) {
        var hook = updateWorkInProgressHook();
        return null === currentHook ? mountDeferredValueImpl(hook, value, initialValue) : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
      },
      useTransition: function() {
        var booleanOrThenable = rerenderReducer(basicStateReducer)[0], start = updateWorkInProgressHook().memoizedState;
        return [
          "boolean" === typeof booleanOrThenable ? booleanOrThenable : useThenable(booleanOrThenable),
          start
        ];
      },
      useSyncExternalStore: updateSyncExternalStore,
      useId: updateId
    };
    HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
    HooksDispatcherOnRerender.useMemoCache = useMemoCache;
    HooksDispatcherOnRerender.useHostTransitionStatus = useHostTransitionStatus;
    HooksDispatcherOnRerender.useFormState = rerenderActionState;
    HooksDispatcherOnRerender.useActionState = rerenderActionState;
    HooksDispatcherOnRerender.useOptimistic = function(passthrough, reducer) {
      var hook = updateWorkInProgressHook();
      if (null !== currentHook)
        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
      hook.baseState = passthrough;
      return [passthrough, hook.queue.dispatch];
    };
    function applyDerivedStateFromProps(workInProgress2, ctor, getDerivedStateFromProps, nextProps) {
      ctor = workInProgress2.memoizedState;
      getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
      getDerivedStateFromProps = null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps ? ctor : assign({}, ctor, getDerivedStateFromProps);
      workInProgress2.memoizedState = getDerivedStateFromProps;
      0 === workInProgress2.lanes && (workInProgress2.updateQueue.baseState = getDerivedStateFromProps);
    }
    var classComponentUpdater = {
      isMounted: function(component) {
        return (component = component._reactInternals) ? getNearestMountedFiber(component) === component : false;
      },
      enqueueSetState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueReplaceState: function(inst, payload, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 1;
        update.payload = payload;
        void 0 !== callback && null !== callback && (update.callback = callback);
        payload = enqueueUpdate(inst, update, lane);
        null !== payload && (scheduleUpdateOnFiber(payload, inst, lane), entangleTransitions(payload, inst, lane));
      },
      enqueueForceUpdate: function(inst, callback) {
        inst = inst._reactInternals;
        var lane = requestUpdateLane(), update = createUpdate(lane);
        update.tag = 2;
        void 0 !== callback && null !== callback && (update.callback = callback);
        callback = enqueueUpdate(inst, update, lane);
        null !== callback && (scheduleUpdateOnFiber(callback, inst, lane), entangleTransitions(callback, inst, lane));
      }
    };
    function checkShouldComponentUpdate(workInProgress2, ctor, oldProps, newProps, oldState, newState, nextContext) {
      workInProgress2 = workInProgress2.stateNode;
      return "function" === typeof workInProgress2.shouldComponentUpdate ? workInProgress2.shouldComponentUpdate(newProps, newState, nextContext) : ctor.prototype && ctor.prototype.isPureReactComponent ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState) : true;
    }
    function callComponentWillReceiveProps(workInProgress2, instance, newProps, nextContext) {
      workInProgress2 = instance.state;
      "function" === typeof instance.componentWillReceiveProps && instance.componentWillReceiveProps(newProps, nextContext);
      "function" === typeof instance.UNSAFE_componentWillReceiveProps && instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
      instance.state !== workInProgress2 && classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
    }
    function resolveClassComponentProps(Component, baseProps) {
      var newProps = baseProps;
      if ("ref" in baseProps) {
        newProps = {};
        for (var propName in baseProps)
          "ref" !== propName && (newProps[propName] = baseProps[propName]);
      }
      if (Component = Component.defaultProps) {
        newProps === baseProps && (newProps = assign({}, newProps));
        for (var propName$67 in Component)
          void 0 === newProps[propName$67] && (newProps[propName$67] = Component[propName$67]);
      }
      return newProps;
    }
    var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
      if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
        var event = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
          error
        });
        if (!window.dispatchEvent(event)) return;
      } else if ("object" === typeof process && "function" === typeof process.emit) {
        process.emit("uncaughtException", error);
        return;
      }
      console.error(error);
    };
    function defaultOnUncaughtError(error) {
      reportGlobalError(error);
    }
    function defaultOnCaughtError(error) {
      console.error(error);
    }
    function defaultOnRecoverableError(error) {
      reportGlobalError(error);
    }
    function logUncaughtError(root2, errorInfo) {
      try {
        var onUncaughtError = root2.onUncaughtError;
        onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
      } catch (e$68) {
        setTimeout(function() {
          throw e$68;
        });
      }
    }
    function logCaughtError(root2, boundary, errorInfo) {
      try {
        var onCaughtError = root2.onCaughtError;
        onCaughtError(errorInfo.value, {
          componentStack: errorInfo.stack,
          errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
        });
      } catch (e$69) {
        setTimeout(function() {
          throw e$69;
        });
      }
    }
    function createRootErrorUpdate(root2, errorInfo, lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      lane.payload = { element: null };
      lane.callback = function() {
        logUncaughtError(root2, errorInfo);
      };
      return lane;
    }
    function createClassErrorUpdate(lane) {
      lane = createUpdate(lane);
      lane.tag = 3;
      return lane;
    }
    function initializeClassErrorUpdate(update, root2, fiber, errorInfo) {
      var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
      if ("function" === typeof getDerivedStateFromError) {
        var error = errorInfo.value;
        update.payload = function() {
          return getDerivedStateFromError(error);
        };
        update.callback = function() {
          logCaughtError(root2, fiber, errorInfo);
        };
      }
      var inst = fiber.stateNode;
      null !== inst && "function" === typeof inst.componentDidCatch && (update.callback = function() {
        logCaughtError(root2, fiber, errorInfo);
        "function" !== typeof getDerivedStateFromError && (null === legacyErrorBoundariesThatAlreadyFailed ? legacyErrorBoundariesThatAlreadyFailed = /* @__PURE__ */ new Set([this]) : legacyErrorBoundariesThatAlreadyFailed.add(this));
        var stack = errorInfo.stack;
        this.componentDidCatch(errorInfo.value, {
          componentStack: null !== stack ? stack : ""
        });
      });
    }
    function throwException(root2, returnFiber, sourceFiber, value, rootRenderLanes) {
      sourceFiber.flags |= 32768;
      if (null !== value && "object" === typeof value && "function" === typeof value.then) {
        returnFiber = sourceFiber.alternate;
        null !== returnFiber && propagateParentContextChanges(
          returnFiber,
          sourceFiber,
          rootRenderLanes,
          true
        );
        sourceFiber = suspenseHandlerStackCursor.current;
        if (null !== sourceFiber) {
          switch (sourceFiber.tag) {
            case 13:
              return null === shellBoundary ? renderDidSuspendDelayIfPossible() : null === sourceFiber.alternate && 0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 3), sourceFiber.flags &= -257, sourceFiber.flags |= 65536, sourceFiber.lanes = rootRenderLanes, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? sourceFiber.updateQueue = /* @__PURE__ */ new Set([value]) : returnFiber.add(value), attachPingListener(root2, value, rootRenderLanes)), false;
            case 22:
              return sourceFiber.flags |= 65536, value === noopSuspenseyCommitThenable ? sourceFiber.flags |= 16384 : (returnFiber = sourceFiber.updateQueue, null === returnFiber ? (returnFiber = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([value])
              }, sourceFiber.updateQueue = returnFiber) : (sourceFiber = returnFiber.retryQueue, null === sourceFiber ? returnFiber.retryQueue = /* @__PURE__ */ new Set([value]) : sourceFiber.add(value)), attachPingListener(root2, value, rootRenderLanes)), false;
          }
          throw Error(formatProdErrorMessage(435, sourceFiber.tag));
        }
        attachPingListener(root2, value, rootRenderLanes);
        renderDidSuspendDelayIfPossible();
        return false;
      }
      if (isHydrating)
        return returnFiber = suspenseHandlerStackCursor.current, null !== returnFiber ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256), returnFiber.flags |= 65536, returnFiber.lanes = rootRenderLanes, value !== HydrationMismatchException && (root2 = Error(formatProdErrorMessage(422), { cause: value }), queueHydrationError(createCapturedValueAtFiber(root2, sourceFiber)))) : (value !== HydrationMismatchException && (returnFiber = Error(formatProdErrorMessage(423), {
          cause: value
        }), queueHydrationError(
          createCapturedValueAtFiber(returnFiber, sourceFiber)
        )), root2 = root2.current.alternate, root2.flags |= 65536, rootRenderLanes &= -rootRenderLanes, root2.lanes |= rootRenderLanes, value = createCapturedValueAtFiber(value, sourceFiber), rootRenderLanes = createRootErrorUpdate(
          root2.stateNode,
          value,
          rootRenderLanes
        ), enqueueCapturedUpdate(root2, rootRenderLanes), 4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2)), false;
      var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
      wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
      null === workInProgressRootConcurrentErrors ? workInProgressRootConcurrentErrors = [wrapperError] : workInProgressRootConcurrentErrors.push(wrapperError);
      4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
      if (null === returnFiber) return true;
      value = createCapturedValueAtFiber(value, sourceFiber);
      sourceFiber = returnFiber;
      do {
        switch (sourceFiber.tag) {
          case 3:
            return sourceFiber.flags |= 65536, root2 = rootRenderLanes & -rootRenderLanes, sourceFiber.lanes |= root2, root2 = createRootErrorUpdate(sourceFiber.stateNode, value, root2), enqueueCapturedUpdate(sourceFiber, root2), false;
          case 1:
            if (returnFiber = sourceFiber.type, wrapperError = sourceFiber.stateNode, 0 === (sourceFiber.flags & 128) && ("function" === typeof returnFiber.getDerivedStateFromError || null !== wrapperError && "function" === typeof wrapperError.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError))))
              return sourceFiber.flags |= 65536, rootRenderLanes &= -rootRenderLanes, sourceFiber.lanes |= rootRenderLanes, rootRenderLanes = createClassErrorUpdate(rootRenderLanes), initializeClassErrorUpdate(
                rootRenderLanes,
                root2,
                sourceFiber,
                value
              ), enqueueCapturedUpdate(sourceFiber, rootRenderLanes), false;
        }
        sourceFiber = sourceFiber.return;
      } while (null !== sourceFiber);
      return false;
    }
    var SelectiveHydrationException = Error(formatProdErrorMessage(461)), didReceiveUpdate = false;
    function reconcileChildren(current, workInProgress2, nextChildren, renderLanes2) {
      workInProgress2.child = null === current ? mountChildFibers(workInProgress2, null, nextChildren, renderLanes2) : reconcileChildFibers(
        workInProgress2,
        current.child,
        nextChildren,
        renderLanes2
      );
    }
    function updateForwardRef(current, workInProgress2, Component, nextProps, renderLanes2) {
      Component = Component.render;
      var ref2 = workInProgress2.ref;
      if ("ref" in nextProps) {
        var propsWithoutRef = {};
        for (var key in nextProps)
          "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
      } else propsWithoutRef = nextProps;
      prepareToReadContext(workInProgress2);
      nextProps = renderWithHooks(
        current,
        workInProgress2,
        Component,
        propsWithoutRef,
        ref2,
        renderLanes2
      );
      key = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && key && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null === current) {
        var type = Component.type;
        if ("function" === typeof type && !shouldConstruct(type) && void 0 === type.defaultProps && null === Component.compare)
          return workInProgress2.tag = 15, workInProgress2.type = type, updateSimpleMemoComponent(
            current,
            workInProgress2,
            type,
            nextProps,
            renderLanes2
          );
        current = createFiberFromTypeAndProps(
          Component.type,
          null,
          nextProps,
          workInProgress2,
          workInProgress2.mode,
          renderLanes2
        );
        current.ref = workInProgress2.ref;
        current.return = workInProgress2;
        return workInProgress2.child = current;
      }
      type = current.child;
      if (!checkScheduledUpdateOrContext(current, renderLanes2)) {
        var prevProps = type.memoizedProps;
        Component = Component.compare;
        Component = null !== Component ? Component : shallowEqual;
        if (Component(prevProps, nextProps) && current.ref === workInProgress2.ref)
          return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      workInProgress2.flags |= 1;
      current = createWorkInProgress(type, nextProps);
      current.ref = workInProgress2.ref;
      current.return = workInProgress2;
      return workInProgress2.child = current;
    }
    function updateSimpleMemoComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      if (null !== current) {
        var prevProps = current.memoizedProps;
        if (shallowEqual(prevProps, nextProps) && current.ref === workInProgress2.ref)
          if (didReceiveUpdate = false, workInProgress2.pendingProps = nextProps = prevProps, checkScheduledUpdateOrContext(current, renderLanes2))
            0 !== (current.flags & 131072) && (didReceiveUpdate = true);
          else
            return workInProgress2.lanes = current.lanes, bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      }
      return updateFunctionComponent(
        current,
        workInProgress2,
        Component,
        nextProps,
        renderLanes2
      );
    }
    function updateOffscreenComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, nextChildren = nextProps.children, nextIsDetached = 0 !== (workInProgress2.stateNode._pendingVisibility & 2), prevState = null !== current ? current.memoizedState : null;
      markRef(current, workInProgress2);
      if ("hidden" === nextProps.mode || nextIsDetached) {
        if (0 !== (workInProgress2.flags & 128)) {
          nextProps = null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2;
          if (null !== current) {
            nextChildren = workInProgress2.child = current.child;
            for (nextIsDetached = 0; null !== nextChildren; )
              nextIsDetached = nextIsDetached | nextChildren.lanes | nextChildren.childLanes, nextChildren = nextChildren.sibling;
            workInProgress2.childLanes = nextIsDetached & ~nextProps;
          } else workInProgress2.childLanes = 0, workInProgress2.child = null;
          return deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            nextProps,
            renderLanes2
          );
        }
        if (0 !== (renderLanes2 & 536870912))
          workInProgress2.memoizedState = { baseLanes: 0, cachePool: null }, null !== current && pushTransition(
            workInProgress2,
            null !== prevState ? prevState.cachePool : null
          ), null !== prevState ? pushHiddenContext(workInProgress2, prevState) : reuseHiddenContextOnStack(), pushOffscreenSuspenseHandler(workInProgress2);
        else
          return workInProgress2.lanes = workInProgress2.childLanes = 536870912, deferHiddenOffscreenComponent(
            current,
            workInProgress2,
            null !== prevState ? prevState.baseLanes | renderLanes2 : renderLanes2,
            renderLanes2
          );
      } else
        null !== prevState ? (pushTransition(workInProgress2, prevState.cachePool), pushHiddenContext(workInProgress2, prevState), reuseSuspenseHandlerOnStack(), workInProgress2.memoizedState = null) : (null !== current && pushTransition(workInProgress2, null), reuseHiddenContextOnStack(), reuseSuspenseHandlerOnStack());
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    function deferHiddenOffscreenComponent(current, workInProgress2, nextBaseLanes, renderLanes2) {
      var JSCompiler_inline_result = peekCacheFromPool();
      JSCompiler_inline_result = null === JSCompiler_inline_result ? null : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
      workInProgress2.memoizedState = {
        baseLanes: nextBaseLanes,
        cachePool: JSCompiler_inline_result
      };
      null !== current && pushTransition(workInProgress2, null);
      reuseHiddenContextOnStack();
      pushOffscreenSuspenseHandler(workInProgress2);
      null !== current && propagateParentContextChanges(current, workInProgress2, renderLanes2, true);
      return null;
    }
    function markRef(current, workInProgress2) {
      var ref2 = workInProgress2.ref;
      if (null === ref2)
        null !== current && null !== current.ref && (workInProgress2.flags |= 2097664);
      else {
        if ("function" !== typeof ref2 && "object" !== typeof ref2)
          throw Error(formatProdErrorMessage(284));
        if (null === current || current.ref !== ref2)
          workInProgress2.flags |= 2097664;
      }
    }
    function updateFunctionComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      Component = renderWithHooks(
        current,
        workInProgress2,
        Component,
        nextProps,
        void 0,
        renderLanes2
      );
      nextProps = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && nextProps && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, Component, renderLanes2);
      return workInProgress2.child;
    }
    function replayFunctionComponent(current, workInProgress2, nextProps, Component, secondArg, renderLanes2) {
      prepareToReadContext(workInProgress2);
      workInProgress2.updateQueue = null;
      nextProps = renderWithHooksAgain(
        workInProgress2,
        Component,
        nextProps,
        secondArg
      );
      finishRenderingHooks(current);
      Component = checkDidRenderIdHook();
      if (null !== current && !didReceiveUpdate)
        return bailoutHooks(current, workInProgress2, renderLanes2), bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
      isHydrating && Component && pushMaterializedTreeId(workInProgress2);
      workInProgress2.flags |= 1;
      reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
      return workInProgress2.child;
    }
    function updateClassComponent(current, workInProgress2, Component, nextProps, renderLanes2) {
      prepareToReadContext(workInProgress2);
      if (null === workInProgress2.stateNode) {
        var context = emptyContextObject, contextType = Component.contextType;
        "object" === typeof contextType && null !== contextType && (context = readContext(contextType));
        context = new Component(nextProps, context);
        workInProgress2.memoizedState = null !== context.state && void 0 !== context.state ? context.state : null;
        context.updater = classComponentUpdater;
        workInProgress2.stateNode = context;
        context._reactInternals = workInProgress2;
        context = workInProgress2.stateNode;
        context.props = nextProps;
        context.state = workInProgress2.memoizedState;
        context.refs = {};
        initializeUpdateQueue(workInProgress2);
        contextType = Component.contextType;
        context.context = "object" === typeof contextType && null !== contextType ? readContext(contextType) : emptyContextObject;
        context.state = workInProgress2.memoizedState;
        contextType = Component.getDerivedStateFromProps;
        "function" === typeof contextType && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          contextType,
          nextProps
        ), context.state = workInProgress2.memoizedState);
        "function" === typeof Component.getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || (contextType = context.state, "function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount(), contextType !== context.state && classComponentUpdater.enqueueReplaceState(context, context.state, null), processUpdateQueue(workInProgress2, nextProps, context, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction(), context.state = workInProgress2.memoizedState);
        "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308);
        nextProps = true;
      } else if (null === current) {
        context = workInProgress2.stateNode;
        var unresolvedOldProps = workInProgress2.memoizedProps, oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
        context.props = oldProps;
        var oldContext = context.context, contextType$jscomp$0 = Component.contextType;
        contextType = emptyContextObject;
        "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 && (contextType = readContext(contextType$jscomp$0));
        var getDerivedStateFromProps = Component.getDerivedStateFromProps;
        contextType$jscomp$0 = "function" === typeof getDerivedStateFromProps || "function" === typeof context.getSnapshotBeforeUpdate;
        unresolvedOldProps = workInProgress2.pendingProps !== unresolvedOldProps;
        contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (unresolvedOldProps || oldContext !== contextType) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          contextType
        );
        hasForceUpdate = false;
        var oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        oldContext = workInProgress2.memoizedState;
        unresolvedOldProps || oldState !== oldContext || hasForceUpdate ? ("function" === typeof getDerivedStateFromProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          getDerivedStateFromProps,
          nextProps
        ), oldContext = workInProgress2.memoizedState), (oldProps = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          oldProps,
          nextProps,
          oldState,
          oldContext,
          contextType
        )) ? (contextType$jscomp$0 || "function" !== typeof context.UNSAFE_componentWillMount && "function" !== typeof context.componentWillMount || ("function" === typeof context.componentWillMount && context.componentWillMount(), "function" === typeof context.UNSAFE_componentWillMount && context.UNSAFE_componentWillMount()), "function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308)) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = oldContext), context.props = nextProps, context.state = oldContext, context.context = contextType, nextProps = oldProps) : ("function" === typeof context.componentDidMount && (workInProgress2.flags |= 4194308), nextProps = false);
      } else {
        context = workInProgress2.stateNode;
        cloneUpdateQueue(current, workInProgress2);
        contextType = workInProgress2.memoizedProps;
        contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
        context.props = contextType$jscomp$0;
        getDerivedStateFromProps = workInProgress2.pendingProps;
        oldState = context.context;
        oldContext = Component.contextType;
        oldProps = emptyContextObject;
        "object" === typeof oldContext && null !== oldContext && (oldProps = readContext(oldContext));
        unresolvedOldProps = Component.getDerivedStateFromProps;
        (oldContext = "function" === typeof unresolvedOldProps || "function" === typeof context.getSnapshotBeforeUpdate) || "function" !== typeof context.UNSAFE_componentWillReceiveProps && "function" !== typeof context.componentWillReceiveProps || (contextType !== getDerivedStateFromProps || oldState !== oldProps) && callComponentWillReceiveProps(
          workInProgress2,
          context,
          nextProps,
          oldProps
        );
        hasForceUpdate = false;
        oldState = workInProgress2.memoizedState;
        context.state = oldState;
        processUpdateQueue(workInProgress2, nextProps, context, renderLanes2);
        suspendIfUpdateReadFromEntangledAsyncAction();
        var newState = workInProgress2.memoizedState;
        contextType !== getDerivedStateFromProps || oldState !== newState || hasForceUpdate || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies) ? ("function" === typeof unresolvedOldProps && (applyDerivedStateFromProps(
          workInProgress2,
          Component,
          unresolvedOldProps,
          nextProps
        ), newState = workInProgress2.memoizedState), (contextType$jscomp$0 = hasForceUpdate || checkShouldComponentUpdate(
          workInProgress2,
          Component,
          contextType$jscomp$0,
          nextProps,
          oldState,
          newState,
          oldProps
        ) || null !== current && null !== current.dependencies && checkIfContextChanged(current.dependencies)) ? (oldContext || "function" !== typeof context.UNSAFE_componentWillUpdate && "function" !== typeof context.componentWillUpdate || ("function" === typeof context.componentWillUpdate && context.componentWillUpdate(nextProps, newState, oldProps), "function" === typeof context.UNSAFE_componentWillUpdate && context.UNSAFE_componentWillUpdate(
          nextProps,
          newState,
          oldProps
        )), "function" === typeof context.componentDidUpdate && (workInProgress2.flags |= 4), "function" === typeof context.getSnapshotBeforeUpdate && (workInProgress2.flags |= 1024)) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), workInProgress2.memoizedProps = nextProps, workInProgress2.memoizedState = newState), context.props = nextProps, context.state = newState, context.context = oldProps, nextProps = contextType$jscomp$0) : ("function" !== typeof context.componentDidUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 4), "function" !== typeof context.getSnapshotBeforeUpdate || contextType === current.memoizedProps && oldState === current.memoizedState || (workInProgress2.flags |= 1024), nextProps = false);
      }
      context = nextProps;
      markRef(current, workInProgress2);
      nextProps = 0 !== (workInProgress2.flags & 128);
      context || nextProps ? (context = workInProgress2.stateNode, Component = nextProps && "function" !== typeof Component.getDerivedStateFromError ? null : context.render(), workInProgress2.flags |= 1, null !== current && nextProps ? (workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        current.child,
        null,
        renderLanes2
      ), workInProgress2.child = reconcileChildFibers(
        workInProgress2,
        null,
        Component,
        renderLanes2
      )) : reconcileChildren(current, workInProgress2, Component, renderLanes2), workInProgress2.memoizedState = context.state, current = workInProgress2.child) : current = bailoutOnAlreadyFinishedWork(
        current,
        workInProgress2,
        renderLanes2
      );
      return current;
    }
    function mountHostRootWithoutHydrating(current, workInProgress2, nextChildren, renderLanes2) {
      resetHydrationState();
      workInProgress2.flags |= 256;
      reconcileChildren(current, workInProgress2, nextChildren, renderLanes2);
      return workInProgress2.child;
    }
    var SUSPENDED_MARKER = { dehydrated: null, treeContext: null, retryLane: 0 };
    function mountSuspenseOffscreenState(renderLanes2) {
      return { baseLanes: renderLanes2, cachePool: getSuspendedCache() };
    }
    function getRemainingWorkInPrimaryTree(current, primaryTreeDidDefer, renderLanes2) {
      current = null !== current ? current.childLanes & ~renderLanes2 : 0;
      primaryTreeDidDefer && (current |= workInProgressDeferredLane);
      return current;
    }
    function updateSuspenseComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, showFallback = false, didSuspend = 0 !== (workInProgress2.flags & 128), JSCompiler_temp;
      (JSCompiler_temp = didSuspend) || (JSCompiler_temp = null !== current && null === current.memoizedState ? false : 0 !== (suspenseStackCursor.current & 2));
      JSCompiler_temp && (showFallback = true, workInProgress2.flags &= -129);
      JSCompiler_temp = 0 !== (workInProgress2.flags & 32);
      workInProgress2.flags &= -33;
      if (null === current) {
        if (isHydrating) {
          showFallback ? pushPrimaryTreeSuspenseHandler(workInProgress2) : reuseSuspenseHandlerOnStack();
          if (isHydrating) {
            var nextInstance = nextHydratableInstance, JSCompiler_temp$jscomp$0;
            if (JSCompiler_temp$jscomp$0 = nextInstance) {
              c: {
                JSCompiler_temp$jscomp$0 = nextInstance;
                for (nextInstance = rootOrSingletonContext; 8 !== JSCompiler_temp$jscomp$0.nodeType; ) {
                  if (!nextInstance) {
                    nextInstance = null;
                    break c;
                  }
                  JSCompiler_temp$jscomp$0 = getNextHydratable(
                    JSCompiler_temp$jscomp$0.nextSibling
                  );
                  if (null === JSCompiler_temp$jscomp$0) {
                    nextInstance = null;
                    break c;
                  }
                }
                nextInstance = JSCompiler_temp$jscomp$0;
              }
              null !== nextInstance ? (workInProgress2.memoizedState = {
                dehydrated: nextInstance,
                treeContext: null !== treeContextProvider ? { id: treeContextId, overflow: treeContextOverflow } : null,
                retryLane: 536870912
              }, JSCompiler_temp$jscomp$0 = createFiberImplClass(
                18,
                null,
                null,
                0
              ), JSCompiler_temp$jscomp$0.stateNode = nextInstance, JSCompiler_temp$jscomp$0.return = workInProgress2, workInProgress2.child = JSCompiler_temp$jscomp$0, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, JSCompiler_temp$jscomp$0 = true) : JSCompiler_temp$jscomp$0 = false;
            }
            JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress2);
          }
          nextInstance = workInProgress2.memoizedState;
          if (null !== nextInstance && (nextInstance = nextInstance.dehydrated, null !== nextInstance))
            return "$!" === nextInstance.data ? workInProgress2.lanes = 16 : workInProgress2.lanes = 536870912, null;
          popSuspenseHandler(workInProgress2);
        }
        nextInstance = nextProps.children;
        nextProps = nextProps.fallback;
        if (showFallback)
          return reuseSuspenseHandlerOnStack(), showFallback = workInProgress2.mode, nextInstance = mountWorkInProgressOffscreenFiber(
            { mode: "hidden", children: nextInstance },
            showFallback
          ), nextProps = createFiberFromFragment(
            nextProps,
            showFallback,
            renderLanes2,
            null
          ), nextInstance.return = workInProgress2, nextProps.return = workInProgress2, nextInstance.sibling = nextProps, workInProgress2.child = nextInstance, showFallback = workInProgress2.child, showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes2), showFallback.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
        pushPrimaryTreeSuspenseHandler(workInProgress2);
        return mountSuspensePrimaryChildren(workInProgress2, nextInstance);
      }
      JSCompiler_temp$jscomp$0 = current.memoizedState;
      if (null !== JSCompiler_temp$jscomp$0 && (nextInstance = JSCompiler_temp$jscomp$0.dehydrated, null !== nextInstance)) {
        if (didSuspend)
          workInProgress2.flags & 256 ? (pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags &= -257, workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          )) : null !== workInProgress2.memoizedState ? (reuseSuspenseHandlerOnStack(), workInProgress2.child = current.child, workInProgress2.flags |= 128, workInProgress2 = null) : (reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, nextProps = mountWorkInProgressOffscreenFiber(
            { mode: "visible", children: nextProps.children },
            nextInstance
          ), showFallback = createFiberFromFragment(
            showFallback,
            nextInstance,
            renderLanes2,
            null
          ), showFallback.flags |= 2, nextProps.return = workInProgress2, showFallback.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, reconcileChildFibers(
            workInProgress2,
            current.child,
            null,
            renderLanes2
          ), nextProps = workInProgress2.child, nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes2), nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes2
          ), workInProgress2.memoizedState = SUSPENDED_MARKER, workInProgress2 = showFallback);
        else if (pushPrimaryTreeSuspenseHandler(workInProgress2), "$!" === nextInstance.data) {
          JSCompiler_temp = nextInstance.nextSibling && nextInstance.nextSibling.dataset;
          if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
          JSCompiler_temp = digest;
          nextProps = Error(formatProdErrorMessage(419));
          nextProps.stack = "";
          nextProps.digest = JSCompiler_temp;
          queueHydrationError({ value: nextProps, source: null, stack: null });
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else if (didReceiveUpdate || propagateParentContextChanges(current, workInProgress2, renderLanes2, false), JSCompiler_temp = 0 !== (renderLanes2 & current.childLanes), didReceiveUpdate || JSCompiler_temp) {
          JSCompiler_temp = workInProgressRoot;
          if (null !== JSCompiler_temp) {
            nextProps = renderLanes2 & -renderLanes2;
            if (0 !== (nextProps & 42)) nextProps = 1;
            else
              switch (nextProps) {
                case 2:
                  nextProps = 1;
                  break;
                case 8:
                  nextProps = 4;
                  break;
                case 32:
                  nextProps = 16;
                  break;
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
                  nextProps = 64;
                  break;
                case 268435456:
                  nextProps = 134217728;
                  break;
                default:
                  nextProps = 0;
              }
            nextProps = 0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes2)) ? 0 : nextProps;
            if (0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
              throw JSCompiler_temp$jscomp$0.retryLane = nextProps, enqueueConcurrentRenderForLane(current, nextProps), scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps), SelectiveHydrationException;
          }
          "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
          workInProgress2 = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress2,
            renderLanes2
          );
        } else
          "$?" === nextInstance.data ? (workInProgress2.flags |= 128, workInProgress2.child = current.child, workInProgress2 = retryDehydratedSuspenseBoundary.bind(
            null,
            current
          ), nextInstance._reactRetry = workInProgress2, workInProgress2 = null) : (current = JSCompiler_temp$jscomp$0.treeContext, nextHydratableInstance = getNextHydratable(
            nextInstance.nextSibling
          ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = false, null !== current && (idStack[idStackIndex++] = treeContextId, idStack[idStackIndex++] = treeContextOverflow, idStack[idStackIndex++] = treeContextProvider, treeContextId = current.id, treeContextOverflow = current.overflow, treeContextProvider = workInProgress2), workInProgress2 = mountSuspensePrimaryChildren(
            workInProgress2,
            nextProps.children
          ), workInProgress2.flags |= 4096);
        return workInProgress2;
      }
      if (showFallback)
        return reuseSuspenseHandlerOnStack(), showFallback = nextProps.fallback, nextInstance = workInProgress2.mode, JSCompiler_temp$jscomp$0 = current.child, digest = JSCompiler_temp$jscomp$0.sibling, nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
          mode: "hidden",
          children: nextProps.children
        }), nextProps.subtreeFlags = JSCompiler_temp$jscomp$0.subtreeFlags & 31457280, null !== digest ? showFallback = createWorkInProgress(digest, showFallback) : (showFallback = createFiberFromFragment(
          showFallback,
          nextInstance,
          renderLanes2,
          null
        ), showFallback.flags |= 2), showFallback.return = workInProgress2, nextProps.return = workInProgress2, nextProps.sibling = showFallback, workInProgress2.child = nextProps, nextProps = showFallback, showFallback = workInProgress2.child, nextInstance = current.child.memoizedState, null === nextInstance ? nextInstance = mountSuspenseOffscreenState(renderLanes2) : (JSCompiler_temp$jscomp$0 = nextInstance.cachePool, null !== JSCompiler_temp$jscomp$0 ? (digest = CacheContext._currentValue, JSCompiler_temp$jscomp$0 = JSCompiler_temp$jscomp$0.parent !== digest ? { parent: digest, pool: digest } : JSCompiler_temp$jscomp$0) : JSCompiler_temp$jscomp$0 = getSuspendedCache(), nextInstance = {
          baseLanes: nextInstance.baseLanes | renderLanes2,
          cachePool: JSCompiler_temp$jscomp$0
        }), showFallback.memoizedState = nextInstance, showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes2
        ), workInProgress2.memoizedState = SUSPENDED_MARKER, nextProps;
      pushPrimaryTreeSuspenseHandler(workInProgress2);
      renderLanes2 = current.child;
      current = renderLanes2.sibling;
      renderLanes2 = createWorkInProgress(renderLanes2, {
        mode: "visible",
        children: nextProps.children
      });
      renderLanes2.return = workInProgress2;
      renderLanes2.sibling = null;
      null !== current && (JSCompiler_temp = workInProgress2.deletions, null === JSCompiler_temp ? (workInProgress2.deletions = [current], workInProgress2.flags |= 16) : JSCompiler_temp.push(current));
      workInProgress2.child = renderLanes2;
      workInProgress2.memoizedState = null;
      return renderLanes2;
    }
    function mountSuspensePrimaryChildren(workInProgress2, primaryChildren) {
      primaryChildren = mountWorkInProgressOffscreenFiber(
        { mode: "visible", children: primaryChildren },
        workInProgress2.mode
      );
      primaryChildren.return = workInProgress2;
      return workInProgress2.child = primaryChildren;
    }
    function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
      return createFiberFromOffscreen(offscreenProps, mode, 0, null);
    }
    function retrySuspenseComponentWithoutHydrating(current, workInProgress2, renderLanes2) {
      reconcileChildFibers(workInProgress2, current.child, null, renderLanes2);
      current = mountSuspensePrimaryChildren(
        workInProgress2,
        workInProgress2.pendingProps.children
      );
      current.flags |= 2;
      workInProgress2.memoizedState = null;
      return current;
    }
    function scheduleSuspenseWorkOnFiber(fiber, renderLanes2, propagationRoot) {
      fiber.lanes |= renderLanes2;
      var alternate = fiber.alternate;
      null !== alternate && (alternate.lanes |= renderLanes2);
      scheduleContextWorkOnParentPath(fiber.return, renderLanes2, propagationRoot);
    }
    function initSuspenseListRenderState(workInProgress2, isBackwards, tail, lastContentRow, tailMode) {
      var renderState = workInProgress2.memoizedState;
      null === renderState ? workInProgress2.memoizedState = {
        isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail,
        tailMode
      } : (renderState.isBackwards = isBackwards, renderState.rendering = null, renderState.renderingStartTime = 0, renderState.last = lastContentRow, renderState.tail = tail, renderState.tailMode = tailMode);
    }
    function updateSuspenseListComponent(current, workInProgress2, renderLanes2) {
      var nextProps = workInProgress2.pendingProps, revealOrder = nextProps.revealOrder, tailMode = nextProps.tail;
      reconcileChildren(current, workInProgress2, nextProps.children, renderLanes2);
      nextProps = suspenseStackCursor.current;
      if (0 !== (nextProps & 2))
        nextProps = nextProps & 1 | 2, workInProgress2.flags |= 128;
      else {
        if (null !== current && 0 !== (current.flags & 128))
          a: for (current = workInProgress2.child; null !== current; ) {
            if (13 === current.tag)
              null !== current.memoizedState && scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (19 === current.tag)
              scheduleSuspenseWorkOnFiber(current, renderLanes2, workInProgress2);
            else if (null !== current.child) {
              current.child.return = current;
              current = current.child;
              continue;
            }
            if (current === workInProgress2) break a;
            for (; null === current.sibling; ) {
              if (null === current.return || current.return === workInProgress2)
                break a;
              current = current.return;
            }
            current.sibling.return = current.return;
            current = current.sibling;
          }
        nextProps &= 1;
      }
      push(suspenseStackCursor, nextProps);
      switch (revealOrder) {
        case "forwards":
          renderLanes2 = workInProgress2.child;
          for (revealOrder = null; null !== renderLanes2; )
            current = renderLanes2.alternate, null !== current && null === findFirstSuspended(current) && (revealOrder = renderLanes2), renderLanes2 = renderLanes2.sibling;
          renderLanes2 = revealOrder;
          null === renderLanes2 ? (revealOrder = workInProgress2.child, workInProgress2.child = null) : (revealOrder = renderLanes2.sibling, renderLanes2.sibling = null);
          initSuspenseListRenderState(
            workInProgress2,
            false,
            revealOrder,
            renderLanes2,
            tailMode
          );
          break;
        case "backwards":
          renderLanes2 = null;
          revealOrder = workInProgress2.child;
          for (workInProgress2.child = null; null !== revealOrder; ) {
            current = revealOrder.alternate;
            if (null !== current && null === findFirstSuspended(current)) {
              workInProgress2.child = revealOrder;
              break;
            }
            current = revealOrder.sibling;
            revealOrder.sibling = renderLanes2;
            renderLanes2 = revealOrder;
            revealOrder = current;
          }
          initSuspenseListRenderState(
            workInProgress2,
            true,
            renderLanes2,
            null,
            tailMode
          );
          break;
        case "together":
          initSuspenseListRenderState(workInProgress2, false, null, null, void 0);
          break;
        default:
          workInProgress2.memoizedState = null;
      }
      return workInProgress2.child;
    }
    function bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2) {
      null !== current && (workInProgress2.dependencies = current.dependencies);
      workInProgressRootSkippedLanes |= workInProgress2.lanes;
      if (0 === (renderLanes2 & workInProgress2.childLanes))
        if (null !== current) {
          if (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), 0 === (renderLanes2 & workInProgress2.childLanes))
            return null;
        } else return null;
      if (null !== current && workInProgress2.child !== current.child)
        throw Error(formatProdErrorMessage(153));
      if (null !== workInProgress2.child) {
        current = workInProgress2.child;
        renderLanes2 = createWorkInProgress(current, current.pendingProps);
        workInProgress2.child = renderLanes2;
        for (renderLanes2.return = workInProgress2; null !== current.sibling; )
          current = current.sibling, renderLanes2 = renderLanes2.sibling = createWorkInProgress(current, current.pendingProps), renderLanes2.return = workInProgress2;
        renderLanes2.sibling = null;
      }
      return workInProgress2.child;
    }
    function checkScheduledUpdateOrContext(current, renderLanes2) {
      if (0 !== (current.lanes & renderLanes2)) return true;
      current = current.dependencies;
      return null !== current && checkIfContextChanged(current) ? true : false;
    }
    function attemptEarlyBailoutIfNoScheduledUpdate(current, workInProgress2, renderLanes2) {
      switch (workInProgress2.tag) {
        case 3:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
          resetHydrationState();
          break;
        case 27:
        case 5:
          pushHostContext(workInProgress2);
          break;
        case 4:
          pushHostContainer(workInProgress2, workInProgress2.stateNode.containerInfo);
          break;
        case 10:
          pushProvider(
            workInProgress2,
            workInProgress2.type,
            workInProgress2.memoizedProps.value
          );
          break;
        case 13:
          var state = workInProgress2.memoizedState;
          if (null !== state) {
            if (null !== state.dehydrated)
              return pushPrimaryTreeSuspenseHandler(workInProgress2), workInProgress2.flags |= 128, null;
            if (0 !== (renderLanes2 & workInProgress2.child.childLanes))
              return updateSuspenseComponent(current, workInProgress2, renderLanes2);
            pushPrimaryTreeSuspenseHandler(workInProgress2);
            current = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress2,
              renderLanes2
            );
            return null !== current ? current.sibling : null;
          }
          pushPrimaryTreeSuspenseHandler(workInProgress2);
          break;
        case 19:
          var didSuspendBefore = 0 !== (current.flags & 128);
          state = 0 !== (renderLanes2 & workInProgress2.childLanes);
          state || (propagateParentContextChanges(
            current,
            workInProgress2,
            renderLanes2,
            false
          ), state = 0 !== (renderLanes2 & workInProgress2.childLanes));
          if (didSuspendBefore) {
            if (state)
              return updateSuspenseListComponent(
                current,
                workInProgress2,
                renderLanes2
              );
            workInProgress2.flags |= 128;
          }
          didSuspendBefore = workInProgress2.memoizedState;
          null !== didSuspendBefore && (didSuspendBefore.rendering = null, didSuspendBefore.tail = null, didSuspendBefore.lastEffect = null);
          push(suspenseStackCursor, suspenseStackCursor.current);
          if (state) break;
          else return null;
        case 22:
        case 23:
          return workInProgress2.lanes = 0, updateOffscreenComponent(current, workInProgress2, renderLanes2);
        case 24:
          pushProvider(workInProgress2, CacheContext, current.memoizedState.cache);
      }
      return bailoutOnAlreadyFinishedWork(current, workInProgress2, renderLanes2);
    }
    function beginWork(current, workInProgress2, renderLanes2) {
      if (null !== current)
        if (current.memoizedProps !== workInProgress2.pendingProps)
          didReceiveUpdate = true;
        else {
          if (!checkScheduledUpdateOrContext(current, renderLanes2) && 0 === (workInProgress2.flags & 128))
            return didReceiveUpdate = false, attemptEarlyBailoutIfNoScheduledUpdate(
              current,
              workInProgress2,
              renderLanes2
            );
          didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
        }
      else
        didReceiveUpdate = false, isHydrating && 0 !== (workInProgress2.flags & 1048576) && pushTreeId(workInProgress2, treeForkCount, workInProgress2.index);
      workInProgress2.lanes = 0;
      switch (workInProgress2.tag) {
        case 16:
          a: {
            current = workInProgress2.pendingProps;
            var lazyComponent = workInProgress2.elementType, init = lazyComponent._init;
            lazyComponent = init(lazyComponent._payload);
            workInProgress2.type = lazyComponent;
            if ("function" === typeof lazyComponent)
              shouldConstruct(lazyComponent) ? (current = resolveClassComponentProps(lazyComponent, current), workInProgress2.tag = 1, workInProgress2 = updateClassComponent(
                null,
                workInProgress2,
                lazyComponent,
                current,
                renderLanes2
              )) : (workInProgress2.tag = 0, workInProgress2 = updateFunctionComponent(
                null,
                workInProgress2,
                lazyComponent,
                current,
                renderLanes2
              ));
            else {
              if (void 0 !== lazyComponent && null !== lazyComponent) {
                if (init = lazyComponent.$$typeof, init === REACT_FORWARD_REF_TYPE) {
                  workInProgress2.tag = 11;
                  workInProgress2 = updateForwardRef(
                    null,
                    workInProgress2,
                    lazyComponent,
                    current,
                    renderLanes2
                  );
                  break a;
                } else if (init === REACT_MEMO_TYPE) {
                  workInProgress2.tag = 14;
                  workInProgress2 = updateMemoComponent(
                    null,
                    workInProgress2,
                    lazyComponent,
                    current,
                    renderLanes2
                  );
                  break a;
                }
              }
              workInProgress2 = getComponentNameFromType(lazyComponent) || lazyComponent;
              throw Error(formatProdErrorMessage(306, workInProgress2, ""));
            }
          }
          return workInProgress2;
        case 0:
          return updateFunctionComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 1:
          return lazyComponent = workInProgress2.type, init = resolveClassComponentProps(
            lazyComponent,
            workInProgress2.pendingProps
          ), updateClassComponent(
            current,
            workInProgress2,
            lazyComponent,
            init,
            renderLanes2
          );
        case 3:
          a: {
            pushHostContainer(
              workInProgress2,
              workInProgress2.stateNode.containerInfo
            );
            if (null === current) throw Error(formatProdErrorMessage(387));
            var nextProps = workInProgress2.pendingProps;
            init = workInProgress2.memoizedState;
            lazyComponent = init.element;
            cloneUpdateQueue(current, workInProgress2);
            processUpdateQueue(workInProgress2, nextProps, null, renderLanes2);
            var nextState = workInProgress2.memoizedState;
            nextProps = nextState.cache;
            pushProvider(workInProgress2, CacheContext, nextProps);
            nextProps !== init.cache && propagateContextChanges(
              workInProgress2,
              [CacheContext],
              renderLanes2,
              true
            );
            suspendIfUpdateReadFromEntangledAsyncAction();
            nextProps = nextState.element;
            if (init.isDehydrated)
              if (init = {
                element: nextProps,
                isDehydrated: false,
                cache: nextState.cache
              }, workInProgress2.updateQueue.baseState = init, workInProgress2.memoizedState = init, workInProgress2.flags & 256) {
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  nextProps,
                  renderLanes2
                );
                break a;
              } else if (nextProps !== lazyComponent) {
                lazyComponent = createCapturedValueAtFiber(
                  Error(formatProdErrorMessage(424)),
                  workInProgress2
                );
                queueHydrationError(lazyComponent);
                workInProgress2 = mountHostRootWithoutHydrating(
                  current,
                  workInProgress2,
                  nextProps,
                  renderLanes2
                );
                break a;
              } else
                for (nextHydratableInstance = getNextHydratable(
                  workInProgress2.stateNode.containerInfo.firstChild
                ), hydrationParentFiber = workInProgress2, isHydrating = true, hydrationErrors = null, rootOrSingletonContext = true, renderLanes2 = mountChildFibers(
                  workInProgress2,
                  null,
                  nextProps,
                  renderLanes2
                ), workInProgress2.child = renderLanes2; renderLanes2; )
                  renderLanes2.flags = renderLanes2.flags & -3 | 4096, renderLanes2 = renderLanes2.sibling;
            else {
              resetHydrationState();
              if (nextProps === lazyComponent) {
                workInProgress2 = bailoutOnAlreadyFinishedWork(
                  current,
                  workInProgress2,
                  renderLanes2
                );
                break a;
              }
              reconcileChildren(current, workInProgress2, nextProps, renderLanes2);
            }
            workInProgress2 = workInProgress2.child;
          }
          return workInProgress2;
        case 26:
          return markRef(current, workInProgress2), null === current ? (renderLanes2 = getResource(
            workInProgress2.type,
            null,
            workInProgress2.pendingProps,
            null
          )) ? workInProgress2.memoizedState = renderLanes2 : isHydrating || (renderLanes2 = workInProgress2.type, current = workInProgress2.pendingProps, lazyComponent = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          ).createElement(renderLanes2), lazyComponent[internalInstanceKey] = workInProgress2, lazyComponent[internalPropsKey] = current, setInitialProperties(lazyComponent, renderLanes2, current), markNodeAsHoistable(lazyComponent), workInProgress2.stateNode = lazyComponent) : workInProgress2.memoizedState = getResource(
            workInProgress2.type,
            current.memoizedProps,
            workInProgress2.pendingProps,
            current.memoizedState
          ), null;
        case 27:
          return pushHostContext(workInProgress2), null === current && isHydrating && (lazyComponent = workInProgress2.stateNode = resolveSingletonInstance(
            workInProgress2.type,
            workInProgress2.pendingProps,
            rootInstanceStackCursor.current
          ), hydrationParentFiber = workInProgress2, rootOrSingletonContext = true, nextHydratableInstance = getNextHydratable(
            lazyComponent.firstChild
          )), lazyComponent = workInProgress2.pendingProps.children, null !== current || isHydrating ? reconcileChildren(
            current,
            workInProgress2,
            lazyComponent,
            renderLanes2
          ) : workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            lazyComponent,
            renderLanes2
          ), markRef(current, workInProgress2), workInProgress2.child;
        case 5:
          if (null === current && isHydrating) {
            if (init = lazyComponent = nextHydratableInstance)
              lazyComponent = canHydrateInstance(
                lazyComponent,
                workInProgress2.type,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== lazyComponent ? (workInProgress2.stateNode = lazyComponent, hydrationParentFiber = workInProgress2, nextHydratableInstance = getNextHydratable(
                lazyComponent.firstChild
              ), rootOrSingletonContext = false, init = true) : init = false;
            init || throwOnHydrationMismatch(workInProgress2);
          }
          pushHostContext(workInProgress2);
          init = workInProgress2.type;
          nextProps = workInProgress2.pendingProps;
          nextState = null !== current ? current.memoizedProps : null;
          lazyComponent = nextProps.children;
          shouldSetTextContent(init, nextProps) ? lazyComponent = null : null !== nextState && shouldSetTextContent(init, nextState) && (workInProgress2.flags |= 32);
          null !== workInProgress2.memoizedState && (init = renderWithHooks(
            current,
            workInProgress2,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes2
          ), HostTransitionContext._currentValue = init);
          markRef(current, workInProgress2);
          reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2);
          return workInProgress2.child;
        case 6:
          if (null === current && isHydrating) {
            if (current = renderLanes2 = nextHydratableInstance)
              renderLanes2 = canHydrateTextInstance(
                renderLanes2,
                workInProgress2.pendingProps,
                rootOrSingletonContext
              ), null !== renderLanes2 ? (workInProgress2.stateNode = renderLanes2, hydrationParentFiber = workInProgress2, nextHydratableInstance = null, current = true) : current = false;
            current || throwOnHydrationMismatch(workInProgress2);
          }
          return null;
        case 13:
          return updateSuspenseComponent(current, workInProgress2, renderLanes2);
        case 4:
          return pushHostContainer(
            workInProgress2,
            workInProgress2.stateNode.containerInfo
          ), lazyComponent = workInProgress2.pendingProps, null === current ? workInProgress2.child = reconcileChildFibers(
            workInProgress2,
            null,
            lazyComponent,
            renderLanes2
          ) : reconcileChildren(
            current,
            workInProgress2,
            lazyComponent,
            renderLanes2
          ), workInProgress2.child;
        case 11:
          return updateForwardRef(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 7:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps,
            renderLanes2
          ), workInProgress2.child;
        case 8:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 12:
          return reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 10:
          return lazyComponent = workInProgress2.pendingProps, pushProvider(workInProgress2, workInProgress2.type, lazyComponent.value), reconcileChildren(
            current,
            workInProgress2,
            lazyComponent.children,
            renderLanes2
          ), workInProgress2.child;
        case 9:
          return init = workInProgress2.type._context, lazyComponent = workInProgress2.pendingProps.children, prepareToReadContext(workInProgress2), init = readContext(init), lazyComponent = lazyComponent(init), workInProgress2.flags |= 1, reconcileChildren(current, workInProgress2, lazyComponent, renderLanes2), workInProgress2.child;
        case 14:
          return updateMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 15:
          return updateSimpleMemoComponent(
            current,
            workInProgress2,
            workInProgress2.type,
            workInProgress2.pendingProps,
            renderLanes2
          );
        case 19:
          return updateSuspenseListComponent(current, workInProgress2, renderLanes2);
        case 22:
          return updateOffscreenComponent(current, workInProgress2, renderLanes2);
        case 24:
          return prepareToReadContext(workInProgress2), lazyComponent = readContext(CacheContext), null === current ? (init = peekCacheFromPool(), null === init && (init = workInProgressRoot, nextProps = createCache(), init.pooledCache = nextProps, nextProps.refCount++, null !== nextProps && (init.pooledCacheLanes |= renderLanes2), init = nextProps), workInProgress2.memoizedState = {
            parent: lazyComponent,
            cache: init
          }, initializeUpdateQueue(workInProgress2), pushProvider(workInProgress2, CacheContext, init)) : (0 !== (current.lanes & renderLanes2) && (cloneUpdateQueue(current, workInProgress2), processUpdateQueue(workInProgress2, null, null, renderLanes2), suspendIfUpdateReadFromEntangledAsyncAction()), init = current.memoizedState, nextProps = workInProgress2.memoizedState, init.parent !== lazyComponent ? (init = { parent: lazyComponent, cache: lazyComponent }, workInProgress2.memoizedState = init, 0 === workInProgress2.lanes && (workInProgress2.memoizedState = workInProgress2.updateQueue.baseState = init), pushProvider(workInProgress2, CacheContext, lazyComponent)) : (lazyComponent = nextProps.cache, pushProvider(workInProgress2, CacheContext, lazyComponent), lazyComponent !== init.cache && propagateContextChanges(
            workInProgress2,
            [CacheContext],
            renderLanes2,
            true
          ))), reconcileChildren(
            current,
            workInProgress2,
            workInProgress2.pendingProps.children,
            renderLanes2
          ), workInProgress2.child;
        case 29:
          throw workInProgress2.pendingProps;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    var valueCursor = createCursor(null), currentlyRenderingFiber = null, lastContextDependency = null;
    function pushProvider(providerFiber, context, nextValue) {
      push(valueCursor, context._currentValue);
      context._currentValue = nextValue;
    }
    function popProvider(context) {
      context._currentValue = valueCursor.current;
      pop(valueCursor);
    }
    function scheduleContextWorkOnParentPath(parent, renderLanes2, propagationRoot) {
      for (; null !== parent; ) {
        var alternate = parent.alternate;
        (parent.childLanes & renderLanes2) !== renderLanes2 ? (parent.childLanes |= renderLanes2, null !== alternate && (alternate.childLanes |= renderLanes2)) : null !== alternate && (alternate.childLanes & renderLanes2) !== renderLanes2 && (alternate.childLanes |= renderLanes2);
        if (parent === propagationRoot) break;
        parent = parent.return;
      }
    }
    function propagateContextChanges(workInProgress2, contexts, renderLanes2, forcePropagateEntireTree) {
      var fiber = workInProgress2.child;
      null !== fiber && (fiber.return = workInProgress2);
      for (; null !== fiber; ) {
        var list = fiber.dependencies;
        if (null !== list) {
          var nextFiber = fiber.child;
          list = list.firstContext;
          a: for (; null !== list; ) {
            var dependency = list;
            list = fiber;
            for (var i = 0; i < contexts.length; i++)
              if (dependency.context === contexts[i]) {
                list.lanes |= renderLanes2;
                dependency = list.alternate;
                null !== dependency && (dependency.lanes |= renderLanes2);
                scheduleContextWorkOnParentPath(
                  list.return,
                  renderLanes2,
                  workInProgress2
                );
                forcePropagateEntireTree || (nextFiber = null);
                break a;
              }
            list = dependency.next;
          }
        } else if (18 === fiber.tag) {
          nextFiber = fiber.return;
          if (null === nextFiber) throw Error(formatProdErrorMessage(341));
          nextFiber.lanes |= renderLanes2;
          list = nextFiber.alternate;
          null !== list && (list.lanes |= renderLanes2);
          scheduleContextWorkOnParentPath(nextFiber, renderLanes2, workInProgress2);
          nextFiber = null;
        } else nextFiber = fiber.child;
        if (null !== nextFiber) nextFiber.return = fiber;
        else
          for (nextFiber = fiber; null !== nextFiber; ) {
            if (nextFiber === workInProgress2) {
              nextFiber = null;
              break;
            }
            fiber = nextFiber.sibling;
            if (null !== fiber) {
              fiber.return = nextFiber.return;
              nextFiber = fiber;
              break;
            }
            nextFiber = nextFiber.return;
          }
        fiber = nextFiber;
      }
    }
    function propagateParentContextChanges(current, workInProgress2, renderLanes2, forcePropagateEntireTree) {
      current = null;
      for (var parent = workInProgress2, isInsidePropagationBailout = false; null !== parent; ) {
        if (!isInsidePropagationBailout) {
          if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
          else if (0 !== (parent.flags & 262144)) break;
        }
        if (10 === parent.tag) {
          var currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent = currentParent.memoizedProps;
          if (null !== currentParent) {
            var context = parent.type;
            objectIs(parent.pendingProps.value, currentParent.value) || (null !== current ? current.push(context) : current = [context]);
          }
        } else if (parent === hostTransitionProviderCursor.current) {
          currentParent = parent.alternate;
          if (null === currentParent) throw Error(formatProdErrorMessage(387));
          currentParent.memoizedState.memoizedState !== parent.memoizedState.memoizedState && (null !== current ? current.push(HostTransitionContext) : current = [HostTransitionContext]);
        }
        parent = parent.return;
      }
      null !== current && propagateContextChanges(
        workInProgress2,
        current,
        renderLanes2,
        forcePropagateEntireTree
      );
      workInProgress2.flags |= 262144;
    }
    function checkIfContextChanged(currentDependencies) {
      for (currentDependencies = currentDependencies.firstContext; null !== currentDependencies; ) {
        if (!objectIs(
          currentDependencies.context._currentValue,
          currentDependencies.memoizedValue
        ))
          return true;
        currentDependencies = currentDependencies.next;
      }
      return false;
    }
    function prepareToReadContext(workInProgress2) {
      currentlyRenderingFiber = workInProgress2;
      lastContextDependency = null;
      workInProgress2 = workInProgress2.dependencies;
      null !== workInProgress2 && (workInProgress2.firstContext = null);
    }
    function readContext(context) {
      return readContextForConsumer(currentlyRenderingFiber, context);
    }
    function readContextDuringReconciliation(consumer, context) {
      null === currentlyRenderingFiber && prepareToReadContext(consumer);
      return readContextForConsumer(consumer, context);
    }
    function readContextForConsumer(consumer, context) {
      var value = context._currentValue;
      context = { context, memoizedValue: value, next: null };
      if (null === lastContextDependency) {
        if (null === consumer) throw Error(formatProdErrorMessage(308));
        lastContextDependency = context;
        consumer.dependencies = { lanes: 0, firstContext: context };
        consumer.flags |= 524288;
      } else lastContextDependency = lastContextDependency.next = context;
      return value;
    }
    var hasForceUpdate = false;
    function initializeUpdateQueue(fiber) {
      fiber.updateQueue = {
        baseState: fiber.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function cloneUpdateQueue(current, workInProgress2) {
      current = current.updateQueue;
      workInProgress2.updateQueue === current && (workInProgress2.updateQueue = {
        baseState: current.baseState,
        firstBaseUpdate: current.firstBaseUpdate,
        lastBaseUpdate: current.lastBaseUpdate,
        shared: current.shared,
        callbacks: null
      });
    }
    function createUpdate(lane) {
      return { lane, tag: 0, payload: null, callback: null, next: null };
    }
    function enqueueUpdate(fiber, update, lane) {
      var updateQueue = fiber.updateQueue;
      if (null === updateQueue) return null;
      updateQueue = updateQueue.shared;
      if (0 !== (executionContext & 2)) {
        var pending = updateQueue.pending;
        null === pending ? update.next = update : (update.next = pending.next, pending.next = update);
        updateQueue.pending = update;
        update = getRootForUpdatedFiber(fiber);
        markUpdateLaneFromFiberToRoot(fiber, null, lane);
        return update;
      }
      enqueueUpdate$1(fiber, updateQueue, update, lane);
      return getRootForUpdatedFiber(fiber);
    }
    function entangleTransitions(root2, fiber, lane) {
      fiber = fiber.updateQueue;
      if (null !== fiber && (fiber = fiber.shared, 0 !== (lane & 4194176))) {
        var queueLanes = fiber.lanes;
        queueLanes &= root2.pendingLanes;
        lane |= queueLanes;
        fiber.lanes = lane;
        markRootEntangled(root2, lane);
      }
    }
    function enqueueCapturedUpdate(workInProgress2, capturedUpdate) {
      var queue = workInProgress2.updateQueue, current = workInProgress2.alternate;
      if (null !== current && (current = current.updateQueue, queue === current)) {
        var newFirst = null, newLast = null;
        queue = queue.firstBaseUpdate;
        if (null !== queue) {
          do {
            var clone = {
              lane: queue.lane,
              tag: queue.tag,
              payload: queue.payload,
              callback: null,
              next: null
            };
            null === newLast ? newFirst = newLast = clone : newLast = newLast.next = clone;
            queue = queue.next;
          } while (null !== queue);
          null === newLast ? newFirst = newLast = capturedUpdate : newLast = newLast.next = capturedUpdate;
        } else newFirst = newLast = capturedUpdate;
        queue = {
          baseState: current.baseState,
          firstBaseUpdate: newFirst,
          lastBaseUpdate: newLast,
          shared: current.shared,
          callbacks: current.callbacks
        };
        workInProgress2.updateQueue = queue;
        return;
      }
      workInProgress2 = queue.lastBaseUpdate;
      null === workInProgress2 ? queue.firstBaseUpdate = capturedUpdate : workInProgress2.next = capturedUpdate;
      queue.lastBaseUpdate = capturedUpdate;
    }
    var didReadFromEntangledAsyncAction = false;
    function suspendIfUpdateReadFromEntangledAsyncAction() {
      if (didReadFromEntangledAsyncAction) {
        var entangledActionThenable = currentEntangledActionThenable;
        if (null !== entangledActionThenable) throw entangledActionThenable;
      }
    }
    function processUpdateQueue(workInProgress$jscomp$0, props, instance$jscomp$0, renderLanes2) {
      didReadFromEntangledAsyncAction = false;
      var queue = workInProgress$jscomp$0.updateQueue;
      hasForceUpdate = false;
      var firstBaseUpdate = queue.firstBaseUpdate, lastBaseUpdate = queue.lastBaseUpdate, pendingQueue = queue.shared.pending;
      if (null !== pendingQueue) {
        queue.shared.pending = null;
        var lastPendingUpdate = pendingQueue, firstPendingUpdate = lastPendingUpdate.next;
        lastPendingUpdate.next = null;
        null === lastBaseUpdate ? firstBaseUpdate = firstPendingUpdate : lastBaseUpdate.next = firstPendingUpdate;
        lastBaseUpdate = lastPendingUpdate;
        var current = workInProgress$jscomp$0.alternate;
        null !== current && (current = current.updateQueue, pendingQueue = current.lastBaseUpdate, pendingQueue !== lastBaseUpdate && (null === pendingQueue ? current.firstBaseUpdate = firstPendingUpdate : pendingQueue.next = firstPendingUpdate, current.lastBaseUpdate = lastPendingUpdate));
      }
      if (null !== firstBaseUpdate) {
        var newState = queue.baseState;
        lastBaseUpdate = 0;
        current = firstPendingUpdate = lastPendingUpdate = null;
        pendingQueue = firstBaseUpdate;
        do {
          var updateLane = pendingQueue.lane & -536870913, isHiddenUpdate = updateLane !== pendingQueue.lane;
          if (isHiddenUpdate ? (workInProgressRootRenderLanes & updateLane) === updateLane : (renderLanes2 & updateLane) === updateLane) {
            0 !== updateLane && updateLane === currentEntangledLane && (didReadFromEntangledAsyncAction = true);
            null !== current && (current = current.next = {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
            a: {
              var workInProgress2 = workInProgress$jscomp$0, update = pendingQueue;
              updateLane = props;
              var instance = instance$jscomp$0;
              switch (update.tag) {
                case 1:
                  workInProgress2 = update.payload;
                  if ("function" === typeof workInProgress2) {
                    newState = workInProgress2.call(instance, newState, updateLane);
                    break a;
                  }
                  newState = workInProgress2;
                  break a;
                case 3:
                  workInProgress2.flags = workInProgress2.flags & -65537 | 128;
                case 0:
                  workInProgress2 = update.payload;
                  updateLane = "function" === typeof workInProgress2 ? workInProgress2.call(instance, newState, updateLane) : workInProgress2;
                  if (null === updateLane || void 0 === updateLane) break a;
                  newState = assign({}, newState, updateLane);
                  break a;
                case 2:
                  hasForceUpdate = true;
              }
            }
            updateLane = pendingQueue.callback;
            null !== updateLane && (workInProgress$jscomp$0.flags |= 64, isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192), isHiddenUpdate = queue.callbacks, null === isHiddenUpdate ? queue.callbacks = [updateLane] : isHiddenUpdate.push(updateLane));
          } else
            isHiddenUpdate = {
              lane: updateLane,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: pendingQueue.callback,
              next: null
            }, null === current ? (firstPendingUpdate = current = isHiddenUpdate, lastPendingUpdate = newState) : current = current.next = isHiddenUpdate, lastBaseUpdate |= updateLane;
          pendingQueue = pendingQueue.next;
          if (null === pendingQueue)
            if (pendingQueue = queue.shared.pending, null === pendingQueue)
              break;
            else
              isHiddenUpdate = pendingQueue, pendingQueue = isHiddenUpdate.next, isHiddenUpdate.next = null, queue.lastBaseUpdate = isHiddenUpdate, queue.shared.pending = null;
        } while (1);
        null === current && (lastPendingUpdate = newState);
        queue.baseState = lastPendingUpdate;
        queue.firstBaseUpdate = firstPendingUpdate;
        queue.lastBaseUpdate = current;
        null === firstBaseUpdate && (queue.shared.lanes = 0);
        workInProgressRootSkippedLanes |= lastBaseUpdate;
        workInProgress$jscomp$0.lanes = lastBaseUpdate;
        workInProgress$jscomp$0.memoizedState = newState;
      }
    }
    function callCallback(callback, context) {
      if ("function" !== typeof callback)
        throw Error(formatProdErrorMessage(191, callback));
      callback.call(context);
    }
    function commitCallbacks(updateQueue, context) {
      var callbacks = updateQueue.callbacks;
      if (null !== callbacks)
        for (updateQueue.callbacks = null, updateQueue = 0; updateQueue < callbacks.length; updateQueue++)
          callCallback(callbacks[updateQueue], context);
    }
    function commitHookEffectListMount(flags, finishedWork) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              lastEffect = void 0;
              var create = updateQueue.create, inst = updateQueue.inst;
              lastEffect = create();
              inst.destroy = lastEffect;
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor$jscomp$0) {
      try {
        var updateQueue = finishedWork.updateQueue, lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
        if (null !== lastEffect) {
          var firstEffect = lastEffect.next;
          updateQueue = firstEffect;
          do {
            if ((updateQueue.tag & flags) === flags) {
              var inst = updateQueue.inst, destroy = inst.destroy;
              if (void 0 !== destroy) {
                inst.destroy = void 0;
                lastEffect = finishedWork;
                var nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
                try {
                  destroy();
                } catch (error) {
                  captureCommitPhaseError(
                    lastEffect,
                    nearestMountedAncestor,
                    error
                  );
                }
              }
            }
            updateQueue = updateQueue.next;
          } while (updateQueue !== firstEffect);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitClassCallbacks(finishedWork) {
      var updateQueue = finishedWork.updateQueue;
      if (null !== updateQueue) {
        var instance = finishedWork.stateNode;
        try {
          commitCallbacks(updateQueue, instance);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
    }
    function safelyCallComponentWillUnmount(current, nearestMountedAncestor, instance) {
      instance.props = resolveClassComponentProps(
        current.type,
        current.memoizedProps
      );
      instance.state = current.memoizedState;
      try {
        instance.componentWillUnmount();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyAttachRef(current, nearestMountedAncestor) {
      try {
        var ref2 = current.ref;
        if (null !== ref2) {
          var instance = current.stateNode;
          switch (current.tag) {
            case 26:
            case 27:
            case 5:
              var instanceToUse = instance;
              break;
            default:
              instanceToUse = instance;
          }
          "function" === typeof ref2 ? current.refCleanup = ref2(instanceToUse) : ref2.current = instanceToUse;
        }
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      }
    }
    function safelyDetachRef(current, nearestMountedAncestor) {
      var ref2 = current.ref, refCleanup = current.refCleanup;
      if (null !== ref2)
        if ("function" === typeof refCleanup)
          try {
            refCleanup();
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          } finally {
            current.refCleanup = null, current = current.alternate, null != current && (current.refCleanup = null);
          }
        else if ("function" === typeof ref2)
          try {
            ref2(null);
          } catch (error$112) {
            captureCommitPhaseError(current, nearestMountedAncestor, error$112);
          }
        else ref2.current = null;
    }
    function commitHostMount(finishedWork) {
      var type = finishedWork.type, props = finishedWork.memoizedProps, instance = finishedWork.stateNode;
      try {
        a: switch (type) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            props.autoFocus && instance.focus();
            break a;
          case "img":
            props.src ? instance.src = props.src : props.srcSet && (instance.srcset = props.srcSet);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function commitHostUpdate(finishedWork, newProps, oldProps) {
      try {
        var domElement = finishedWork.stateNode;
        updateProperties(domElement, finishedWork.type, oldProps, newProps);
        domElement[internalPropsKey] = newProps;
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
    }
    function isHostParent(fiber) {
      return 5 === fiber.tag || 3 === fiber.tag || 26 === fiber.tag || 27 === fiber.tag || 4 === fiber.tag;
    }
    function getHostSibling(fiber) {
      a: for (; ; ) {
        for (; null === fiber.sibling; ) {
          if (null === fiber.return || isHostParent(fiber.return)) return null;
          fiber = fiber.return;
        }
        fiber.sibling.return = fiber.return;
        for (fiber = fiber.sibling; 5 !== fiber.tag && 6 !== fiber.tag && 27 !== fiber.tag && 18 !== fiber.tag; ) {
          if (fiber.flags & 2) continue a;
          if (null === fiber.child || 4 === fiber.tag) continue a;
          else fiber.child.return = fiber, fiber = fiber.child;
        }
        if (!(fiber.flags & 2)) return fiber.stateNode;
      }
    }
    function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? 8 === parent.nodeType ? parent.parentNode.insertBefore(node, before) : parent.insertBefore(node, before) : (8 === parent.nodeType ? (before = parent.parentNode, before.insertBefore(node, parent)) : (before = parent, before.appendChild(node)), parent = parent._reactRootContainer, null !== parent && void 0 !== parent || null !== before.onclick || (before.onclick = noop$12));
      else if (4 !== tag && 27 !== tag && (node = node.child, null !== node))
        for (insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNodeIntoContainer(node, before, parent), node = node.sibling;
    }
    function insertOrAppendPlacementNode(node, before, parent) {
      var tag = node.tag;
      if (5 === tag || 6 === tag)
        node = node.stateNode, before ? parent.insertBefore(node, before) : parent.appendChild(node);
      else if (4 !== tag && 27 !== tag && (node = node.child, null !== node))
        for (insertOrAppendPlacementNode(node, before, parent), node = node.sibling; null !== node; )
          insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
    }
    var offscreenSubtreeIsHidden = false, offscreenSubtreeWasHidden = false, needsFormReset = false, PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set, nextEffect = null, shouldFireAfterActiveInstanceBlur = false;
    function commitBeforeMutationEffects(root2, firstChild) {
      root2 = root2.containerInfo;
      eventsEnabled = _enabled;
      root2 = getActiveElementDeep(root2);
      if (hasSelectionCapabilities(root2)) {
        if ("selectionStart" in root2)
          var JSCompiler_temp = {
            start: root2.selectionStart,
            end: root2.selectionEnd
          };
        else
          a: {
            JSCompiler_temp = (JSCompiler_temp = root2.ownerDocument) && JSCompiler_temp.defaultView || window;
            var selection = JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
            if (selection && 0 !== selection.rangeCount) {
              JSCompiler_temp = selection.anchorNode;
              var anchorOffset = selection.anchorOffset, focusNode = selection.focusNode;
              selection = selection.focusOffset;
              try {
                JSCompiler_temp.nodeType, focusNode.nodeType;
              } catch (e$20) {
                JSCompiler_temp = null;
                break a;
              }
              var length = 0, start = -1, end = -1, indexWithinAnchor = 0, indexWithinFocus = 0, node = root2, parentNode = null;
              b: for (; ; ) {
                for (var next; ; ) {
                  node !== JSCompiler_temp || 0 !== anchorOffset && 3 !== node.nodeType || (start = length + anchorOffset);
                  node !== focusNode || 0 !== selection && 3 !== node.nodeType || (end = length + selection);
                  3 === node.nodeType && (length += node.nodeValue.length);
                  if (null === (next = node.firstChild)) break;
                  parentNode = node;
                  node = next;
                }
                for (; ; ) {
                  if (node === root2) break b;
                  parentNode === JSCompiler_temp && ++indexWithinAnchor === anchorOffset && (start = length);
                  parentNode === focusNode && ++indexWithinFocus === selection && (end = length);
                  if (null !== (next = node.nextSibling)) break;
                  node = parentNode;
                  parentNode = node.parentNode;
                }
                node = next;
              }
              JSCompiler_temp = -1 === start || -1 === end ? null : { start, end };
            } else JSCompiler_temp = null;
          }
        JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
      } else JSCompiler_temp = null;
      selectionInformation = { focusedElem: root2, selectionRange: JSCompiler_temp };
      _enabled = false;
      for (nextEffect = firstChild; null !== nextEffect; )
        if (firstChild = nextEffect, root2 = firstChild.child, 0 !== (firstChild.subtreeFlags & 1028) && null !== root2)
          root2.return = firstChild, nextEffect = root2;
        else
          for (; null !== nextEffect; ) {
            firstChild = nextEffect;
            focusNode = firstChild.alternate;
            root2 = firstChild.flags;
            switch (firstChild.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (0 !== (root2 & 1024) && null !== focusNode) {
                  root2 = void 0;
                  JSCompiler_temp = firstChild;
                  anchorOffset = focusNode.memoizedProps;
                  focusNode = focusNode.memoizedState;
                  selection = JSCompiler_temp.stateNode;
                  try {
                    var resolvedPrevProps = resolveClassComponentProps(
                      JSCompiler_temp.type,
                      anchorOffset,
                      JSCompiler_temp.elementType === JSCompiler_temp.type
                    );
                    root2 = selection.getSnapshotBeforeUpdate(
                      resolvedPrevProps,
                      focusNode
                    );
                    selection.__reactInternalSnapshotBeforeUpdate = root2;
                  } catch (error) {
                    captureCommitPhaseError(
                      JSCompiler_temp,
                      JSCompiler_temp.return,
                      error
                    );
                  }
                }
                break;
              case 3:
                if (0 !== (root2 & 1024)) {
                  if (root2 = firstChild.stateNode.containerInfo, JSCompiler_temp = root2.nodeType, 9 === JSCompiler_temp)
                    clearContainerSparingly(root2);
                  else if (1 === JSCompiler_temp)
                    switch (root2.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        clearContainerSparingly(root2);
                        break;
                      default:
                        root2.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (0 !== (root2 & 1024)) throw Error(formatProdErrorMessage(163));
            }
            root2 = firstChild.sibling;
            if (null !== root2) {
              root2.return = firstChild.return;
              nextEffect = root2;
              break;
            }
            nextEffect = firstChild.return;
          }
      resolvedPrevProps = shouldFireAfterActiveInstanceBlur;
      shouldFireAfterActiveInstanceBlur = false;
      return resolvedPrevProps;
    }
    function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitHookEffectListMount(5, finishedWork);
          break;
        case 1:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 4)
            if (finishedRoot = finishedWork.stateNode, null === current)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(finishedWork, finishedWork.return, error);
              }
            else {
              var prevProps = resolveClassComponentProps(
                finishedWork.type,
                current.memoizedProps
              );
              current = current.memoizedState;
              try {
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
              } catch (error$111) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$111
                );
              }
            }
          flags & 64 && commitClassCallbacks(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          if (flags & 64 && (flags = finishedWork.updateQueue, null !== flags)) {
            finishedRoot = null;
            if (null !== finishedWork.child)
              switch (finishedWork.child.tag) {
                case 27:
                case 5:
                  finishedRoot = finishedWork.child.stateNode;
                  break;
                case 1:
                  finishedRoot = finishedWork.child.stateNode;
              }
            try {
              commitCallbacks(flags, finishedRoot);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 26:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 27:
        case 5:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          null === current && flags & 4 && commitHostMount(finishedWork);
          flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
          break;
        case 12:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          break;
        case 13:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
          break;
        case 22:
          prevProps = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
          if (!prevProps) {
            current = null !== current && null !== current.memoizedState || offscreenSubtreeWasHidden;
            var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden, prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
            offscreenSubtreeIsHidden = prevProps;
            (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden ? recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              0 !== (finishedWork.subtreeFlags & 8772)
            ) : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
            offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
            offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
          }
          flags & 512 && ("manual" === finishedWork.memoizedProps.mode ? safelyAttachRef(finishedWork, finishedWork.return) : safelyDetachRef(finishedWork, finishedWork.return));
          break;
        default:
          recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      }
    }
    function detachFiberAfterEffects(fiber) {
      var alternate = fiber.alternate;
      null !== alternate && (fiber.alternate = null, detachFiberAfterEffects(alternate));
      fiber.child = null;
      fiber.deletions = null;
      fiber.sibling = null;
      5 === fiber.tag && (alternate = fiber.stateNode, null !== alternate && detachDeletedInstance(alternate));
      fiber.stateNode = null;
      fiber.return = null;
      fiber.dependencies = null;
      fiber.memoizedProps = null;
      fiber.memoizedState = null;
      fiber.pendingProps = null;
      fiber.stateNode = null;
      fiber.updateQueue = null;
    }
    var hostParent = null, hostParentIsContainer = false;
    function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
      for (parent = parent.child; null !== parent; )
        commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent), parent = parent.sibling;
    }
    function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
      if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
        try {
          injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
        } catch (err) {
        }
      switch (deletedFiber.tag) {
        case 26:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          deletedFiber.memoizedState ? deletedFiber.memoizedState.count-- : deletedFiber.stateNode && (deletedFiber = deletedFiber.stateNode, deletedFiber.parentNode.removeChild(deletedFiber));
          break;
        case 27:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          var prevHostParent = hostParent, prevHostParentIsContainer = hostParentIsContainer;
          hostParent = deletedFiber.stateNode;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          deletedFiber = deletedFiber.stateNode;
          for (nearestMountedAncestor = deletedFiber.attributes; nearestMountedAncestor.length; )
            deletedFiber.removeAttributeNode(nearestMountedAncestor[0]);
          detachDeletedInstance(deletedFiber);
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 5:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
        case 6:
          prevHostParentIsContainer = hostParent;
          var prevHostParentIsContainer$119 = hostParentIsContainer;
          hostParent = null;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParentIsContainer;
          hostParentIsContainer = prevHostParentIsContainer$119;
          if (null !== hostParent)
            if (hostParentIsContainer)
              try {
                finishedRoot = hostParent, prevHostParent = deletedFiber.stateNode, 8 === finishedRoot.nodeType ? finishedRoot.parentNode.removeChild(prevHostParent) : finishedRoot.removeChild(prevHostParent);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
            else
              try {
                hostParent.removeChild(deletedFiber.stateNode);
              } catch (error) {
                captureCommitPhaseError(
                  deletedFiber,
                  nearestMountedAncestor,
                  error
                );
              }
          break;
        case 18:
          null !== hostParent && (hostParentIsContainer ? (nearestMountedAncestor = hostParent, deletedFiber = deletedFiber.stateNode, 8 === nearestMountedAncestor.nodeType ? clearSuspenseBoundary(
            nearestMountedAncestor.parentNode,
            deletedFiber
          ) : 1 === nearestMountedAncestor.nodeType && clearSuspenseBoundary(nearestMountedAncestor, deletedFiber), retryIfBlockedOn(nearestMountedAncestor)) : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
          break;
        case 4:
          prevHostParent = hostParent;
          prevHostParentIsContainer = hostParentIsContainer;
          hostParent = deletedFiber.stateNode.containerInfo;
          hostParentIsContainer = true;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          hostParent = prevHostParent;
          hostParentIsContainer = prevHostParentIsContainer;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
          offscreenSubtreeWasHidden || commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 1:
          offscreenSubtreeWasHidden || (safelyDetachRef(deletedFiber, nearestMountedAncestor), prevHostParent = deletedFiber.stateNode, "function" === typeof prevHostParent.componentWillUnmount && safelyCallComponentWillUnmount(
            deletedFiber,
            nearestMountedAncestor,
            prevHostParent
          ));
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 21:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          break;
        case 22:
          offscreenSubtreeWasHidden || safelyDetachRef(deletedFiber, nearestMountedAncestor);
          offscreenSubtreeWasHidden = (prevHostParent = offscreenSubtreeWasHidden) || null !== deletedFiber.memoizedState;
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
          offscreenSubtreeWasHidden = prevHostParent;
          break;
        default:
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      }
    }
    function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
      if (null === finishedWork.memoizedState && (finishedRoot = finishedWork.alternate, null !== finishedRoot && (finishedRoot = finishedRoot.memoizedState, null !== finishedRoot && (finishedRoot = finishedRoot.dehydrated, null !== finishedRoot))))
        try {
          retryIfBlockedOn(finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
    }
    function getRetryCache(finishedWork) {
      switch (finishedWork.tag) {
        case 13:
        case 19:
          var retryCache = finishedWork.stateNode;
          null === retryCache && (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
          return retryCache;
        case 22:
          return finishedWork = finishedWork.stateNode, retryCache = finishedWork._retryCache, null === retryCache && (retryCache = finishedWork._retryCache = new PossiblyWeakSet()), retryCache;
        default:
          throw Error(formatProdErrorMessage(435, finishedWork.tag));
      }
    }
    function attachSuspenseRetryListeners(finishedWork, wakeables) {
      var retryCache = getRetryCache(finishedWork);
      wakeables.forEach(function(wakeable) {
        var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
        retryCache.has(wakeable) || (retryCache.add(wakeable), wakeable.then(retry, retry));
      });
    }
    function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
      var deletions = parentFiber.deletions;
      if (null !== deletions)
        for (var i = 0; i < deletions.length; i++) {
          var childToDelete = deletions[i], root2 = root$jscomp$0, returnFiber = parentFiber, parent = returnFiber;
          a: for (; null !== parent; ) {
            switch (parent.tag) {
              case 27:
              case 5:
                hostParent = parent.stateNode;
                hostParentIsContainer = false;
                break a;
              case 3:
                hostParent = parent.stateNode.containerInfo;
                hostParentIsContainer = true;
                break a;
              case 4:
                hostParent = parent.stateNode.containerInfo;
                hostParentIsContainer = true;
                break a;
            }
            parent = parent.return;
          }
          if (null === hostParent) throw Error(formatProdErrorMessage(160));
          commitDeletionEffectsOnFiber(root2, returnFiber, childToDelete);
          hostParent = null;
          hostParentIsContainer = false;
          root2 = childToDelete.alternate;
          null !== root2 && (root2.return = null);
          childToDelete.return = null;
        }
      if (parentFiber.subtreeFlags & 13878)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitMutationEffectsOnFiber(parentFiber, root$jscomp$0), parentFiber = parentFiber.sibling;
    }
    var currentHoistableRoot = null;
    function commitMutationEffectsOnFiber(finishedWork, root2) {
      var current = finishedWork.alternate, flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (commitHookEffectListUnmount(3, finishedWork, finishedWork.return), commitHookEffectListMount(3, finishedWork), commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
          break;
        case 1:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          flags & 64 && offscreenSubtreeIsHidden && (finishedWork = finishedWork.updateQueue, null !== finishedWork && (flags = finishedWork.callbacks, null !== flags && (current = finishedWork.shared.hiddenCallbacks, finishedWork.shared.hiddenCallbacks = null === current ? flags : current.concat(flags))));
          break;
        case 26:
          var hoistableRoot = currentHoistableRoot;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (flags & 4) {
            var currentResource = null !== current ? current.memoizedState : null;
            flags = finishedWork.memoizedState;
            if (null === current)
              if (null === flags)
                if (null === finishedWork.stateNode) {
                  a: {
                    flags = finishedWork.type;
                    current = finishedWork.memoizedProps;
                    hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
                    b: switch (flags) {
                      case "title":
                        currentResource = hoistableRoot.getElementsByTagName("title")[0];
                        if (!currentResource || currentResource[internalHoistableMarker] || currentResource[internalInstanceKey] || "http://www.w3.org/2000/svg" === currentResource.namespaceURI || currentResource.hasAttribute("itemprop"))
                          currentResource = hoistableRoot.createElement(flags), hoistableRoot.head.insertBefore(
                            currentResource,
                            hoistableRoot.querySelector("head > title")
                          );
                        setInitialProperties(currentResource, flags, current);
                        currentResource[internalInstanceKey] = finishedWork;
                        markNodeAsHoistable(currentResource);
                        flags = currentResource;
                        break a;
                      case "link":
                        var maybeNodes = getHydratableHoistableCache(
                          "link",
                          "href",
                          hoistableRoot
                        ).get(flags + (current.href || ""));
                        if (maybeNodes) {
                          for (var i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("href") === (null == current.href ? null : current.href) && currentResource.getAttribute("rel") === (null == current.rel ? null : current.rel) && currentResource.getAttribute("title") === (null == current.title ? null : current.title) && currentResource.getAttribute("crossorigin") === (null == current.crossOrigin ? null : current.crossOrigin)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      case "meta":
                        if (maybeNodes = getHydratableHoistableCache(
                          "meta",
                          "content",
                          hoistableRoot
                        ).get(flags + (current.content || ""))) {
                          for (i = 0; i < maybeNodes.length; i++)
                            if (currentResource = maybeNodes[i], currentResource.getAttribute("content") === (null == current.content ? null : "" + current.content) && currentResource.getAttribute("name") === (null == current.name ? null : current.name) && currentResource.getAttribute("property") === (null == current.property ? null : current.property) && currentResource.getAttribute("http-equiv") === (null == current.httpEquiv ? null : current.httpEquiv) && currentResource.getAttribute("charset") === (null == current.charSet ? null : current.charSet)) {
                              maybeNodes.splice(i, 1);
                              break b;
                            }
                        }
                        currentResource = hoistableRoot.createElement(flags);
                        setInitialProperties(currentResource, flags, current);
                        hoistableRoot.head.appendChild(currentResource);
                        break;
                      default:
                        throw Error(formatProdErrorMessage(468, flags));
                    }
                    currentResource[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(currentResource);
                    flags = currentResource;
                  }
                  finishedWork.stateNode = flags;
                } else
                  mountHoistable(
                    hoistableRoot,
                    finishedWork.type,
                    finishedWork.stateNode
                  );
              else
                finishedWork.stateNode = acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                );
            else
              currentResource !== flags ? (null === currentResource ? null !== current.stateNode && (current = current.stateNode, current.parentNode.removeChild(current)) : currentResource.count--, null === flags ? mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              ) : acquireResource(
                hoistableRoot,
                flags,
                finishedWork.memoizedProps
              )) : null === flags && null !== finishedWork.stateNode && commitHostUpdate(
                finishedWork,
                finishedWork.memoizedProps,
                current.memoizedProps
              );
          }
          break;
        case 27:
          if (flags & 4 && null === finishedWork.alternate) {
            hoistableRoot = finishedWork.stateNode;
            currentResource = finishedWork.memoizedProps;
            try {
              for (var node = hoistableRoot.firstChild; node; ) {
                var nextNode = node.nextSibling, nodeName = node.nodeName;
                node[internalHoistableMarker] || "HEAD" === nodeName || "BODY" === nodeName || "SCRIPT" === nodeName || "STYLE" === nodeName || "LINK" === nodeName && "stylesheet" === node.rel.toLowerCase() || hoistableRoot.removeChild(node);
                node = nextNode;
              }
              for (var type = finishedWork.type, attributes = hoistableRoot.attributes; attributes.length; )
                hoistableRoot.removeAttributeNode(attributes[0]);
              setInitialProperties(hoistableRoot, type, currentResource);
              hoistableRoot[internalInstanceKey] = finishedWork;
              hoistableRoot[internalPropsKey] = currentResource;
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
        case 5:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          if (finishedWork.flags & 32) {
            hoistableRoot = finishedWork.stateNode;
            try {
              setTextContent(hoistableRoot, "");
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          flags & 4 && null != finishedWork.stateNode && (hoistableRoot = finishedWork.memoizedProps, commitHostUpdate(
            finishedWork,
            hoistableRoot,
            null !== current ? current.memoizedProps : hoistableRoot
          ));
          flags & 1024 && (needsFormReset = true);
          break;
        case 6:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          if (flags & 4) {
            if (null === finishedWork.stateNode)
              throw Error(formatProdErrorMessage(162));
            flags = finishedWork.memoizedProps;
            current = finishedWork.stateNode;
            try {
              current.nodeValue = flags;
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          }
          break;
        case 3:
          tagCaches = null;
          hoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(root2.containerInfo);
          recursivelyTraverseMutationEffects(root2, finishedWork);
          currentHoistableRoot = hoistableRoot;
          commitReconciliationEffects(finishedWork);
          if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
            try {
              retryIfBlockedOn(root2.containerInfo);
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          needsFormReset && (needsFormReset = false, recursivelyResetForms(finishedWork));
          break;
        case 4:
          flags = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(
            finishedWork.stateNode.containerInfo
          );
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          currentHoistableRoot = flags;
          break;
        case 12:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          break;
        case 13:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          finishedWork.child.flags & 8192 && null !== finishedWork.memoizedState !== (null !== current && null !== current.memoizedState) && (globalMostRecentFallbackTime = now());
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 22:
          flags & 512 && (offscreenSubtreeWasHidden || null === current || safelyDetachRef(current, current.return));
          node = null !== finishedWork.memoizedState;
          nextNode = null !== current && null !== current.memoizedState;
          nodeName = offscreenSubtreeIsHidden;
          type = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = nodeName || node;
          offscreenSubtreeWasHidden = type || nextNode;
          recursivelyTraverseMutationEffects(root2, finishedWork);
          offscreenSubtreeWasHidden = type;
          offscreenSubtreeIsHidden = nodeName;
          commitReconciliationEffects(finishedWork);
          root2 = finishedWork.stateNode;
          root2._current = finishedWork;
          root2._visibility &= -3;
          root2._visibility |= root2._pendingVisibility & 2;
          if (flags & 8192 && (root2._visibility = node ? root2._visibility & -2 : root2._visibility | 1, node && (root2 = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden, null === current || nextNode || root2 || recursivelyTraverseDisappearLayoutEffects(finishedWork)), null === finishedWork.memoizedProps || "manual" !== finishedWork.memoizedProps.mode))
            a: for (current = null, root2 = finishedWork; ; ) {
              if (5 === root2.tag || 26 === root2.tag || 27 === root2.tag) {
                if (null === current) {
                  nextNode = current = root2;
                  try {
                    if (hoistableRoot = nextNode.stateNode, node)
                      currentResource = hoistableRoot.style, "function" === typeof currentResource.setProperty ? currentResource.setProperty(
                        "display",
                        "none",
                        "important"
                      ) : currentResource.display = "none";
                    else {
                      maybeNodes = nextNode.stateNode;
                      i = nextNode.memoizedProps.style;
                      var display = void 0 !== i && null !== i && i.hasOwnProperty("display") ? i.display : null;
                      maybeNodes.style.display = null == display || "boolean" === typeof display ? "" : ("" + display).trim();
                    }
                  } catch (error) {
                    captureCommitPhaseError(nextNode, nextNode.return, error);
                  }
                }
              } else if (6 === root2.tag) {
                if (null === current) {
                  nextNode = root2;
                  try {
                    nextNode.stateNode.nodeValue = node ? "" : nextNode.memoizedProps;
                  } catch (error) {
                    captureCommitPhaseError(nextNode, nextNode.return, error);
                  }
                }
              } else if ((22 !== root2.tag && 23 !== root2.tag || null === root2.memoizedState || root2 === finishedWork) && null !== root2.child) {
                root2.child.return = root2;
                root2 = root2.child;
                continue;
              }
              if (root2 === finishedWork) break a;
              for (; null === root2.sibling; ) {
                if (null === root2.return || root2.return === finishedWork) break a;
                current === root2 && (current = null);
                root2 = root2.return;
              }
              current === root2 && (current = null);
              root2.sibling.return = root2.return;
              root2 = root2.sibling;
            }
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (current = flags.retryQueue, null !== current && (flags.retryQueue = null, attachSuspenseRetryListeners(finishedWork, current))));
          break;
        case 19:
          recursivelyTraverseMutationEffects(root2, finishedWork);
          commitReconciliationEffects(finishedWork);
          flags & 4 && (flags = finishedWork.updateQueue, null !== flags && (finishedWork.updateQueue = null, attachSuspenseRetryListeners(finishedWork, flags)));
          break;
        case 21:
          break;
        default:
          recursivelyTraverseMutationEffects(root2, finishedWork), commitReconciliationEffects(finishedWork);
      }
    }
    function commitReconciliationEffects(finishedWork) {
      var flags = finishedWork.flags;
      if (flags & 2) {
        try {
          if (27 !== finishedWork.tag) {
            a: {
              for (var parent = finishedWork.return; null !== parent; ) {
                if (isHostParent(parent)) {
                  var JSCompiler_inline_result = parent;
                  break a;
                }
                parent = parent.return;
              }
              throw Error(formatProdErrorMessage(160));
            }
            switch (JSCompiler_inline_result.tag) {
              case 27:
                var parent$jscomp$0 = JSCompiler_inline_result.stateNode, before = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, before, parent$jscomp$0);
                break;
              case 5:
                var parent$113 = JSCompiler_inline_result.stateNode;
                JSCompiler_inline_result.flags & 32 && (setTextContent(parent$113, ""), JSCompiler_inline_result.flags &= -33);
                var before$114 = getHostSibling(finishedWork);
                insertOrAppendPlacementNode(finishedWork, before$114, parent$113);
                break;
              case 3:
              case 4:
                var parent$115 = JSCompiler_inline_result.stateNode.containerInfo, before$116 = getHostSibling(finishedWork);
                insertOrAppendPlacementNodeIntoContainer(
                  finishedWork,
                  before$116,
                  parent$115
                );
                break;
              default:
                throw Error(formatProdErrorMessage(161));
            }
          }
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        finishedWork.flags &= -3;
      }
      flags & 4096 && (finishedWork.flags &= -4097);
    }
    function recursivelyResetForms(parentFiber) {
      if (parentFiber.subtreeFlags & 1024)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var fiber = parentFiber;
          recursivelyResetForms(fiber);
          5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
          parentFiber = parentFiber.sibling;
        }
    }
    function recursivelyTraverseLayoutEffects(root2, parentFiber) {
      if (parentFiber.subtreeFlags & 8772)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitLayoutEffectOnFiber(root2, parentFiber.alternate, parentFiber), parentFiber = parentFiber.sibling;
    }
    function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedWork = parentFiber;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 1:
            safelyDetachRef(finishedWork, finishedWork.return);
            var instance = finishedWork.stateNode;
            "function" === typeof instance.componentWillUnmount && safelyCallComponentWillUnmount(
              finishedWork,
              finishedWork.return,
              instance
            );
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 26:
          case 27:
          case 5:
            safelyDetachRef(finishedWork, finishedWork.return);
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          case 22:
            safelyDetachRef(finishedWork, finishedWork.return);
            null === finishedWork.memoizedState && recursivelyTraverseDisappearLayoutEffects(finishedWork);
            break;
          default:
            recursivelyTraverseDisappearLayoutEffects(finishedWork);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseReappearLayoutEffects(finishedRoot$jscomp$0, parentFiber, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var current = parentFiber.alternate, finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(4, finishedWork);
            break;
          case 1:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            current = finishedWork;
            finishedRoot = current.stateNode;
            if ("function" === typeof finishedRoot.componentDidMount)
              try {
                finishedRoot.componentDidMount();
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            current = finishedWork;
            finishedRoot = current.updateQueue;
            if (null !== finishedRoot) {
              var instance = current.stateNode;
              try {
                var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
                if (null !== hiddenCallbacks)
                  for (finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0; finishedRoot < hiddenCallbacks.length; finishedRoot++)
                    callCallback(hiddenCallbacks[finishedRoot], instance);
              } catch (error) {
                captureCommitPhaseError(current, current.return, error);
              }
            }
            includeWorkInProgressEffects && flags & 64 && commitClassCallbacks(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 26:
          case 27:
          case 5:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && null === current && flags & 4 && commitHostMount(finishedWork);
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          case 12:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            break;
          case 13:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
            break;
          case 22:
            null === finishedWork.memoizedState && recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
            safelyAttachRef(finishedWork, finishedWork.return);
            break;
          default:
            recursivelyTraverseReappearLayoutEffects(
              finishedRoot,
              finishedWork,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitOffscreenPassiveMountEffects(current, finishedWork) {
      var previousCache = null;
      null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (previousCache = current.memoizedState.cachePool.pool);
      current = null;
      null !== finishedWork.memoizedState && null !== finishedWork.memoizedState.cachePool && (current = finishedWork.memoizedState.cachePool.pool);
      current !== previousCache && (null != current && current.refCount++, null != previousCache && releaseCache(previousCache));
    }
    function commitCachePassiveMountEffect(current, finishedWork) {
      current = null;
      null !== finishedWork.alternate && (current = finishedWork.alternate.memoizedState.cache);
      finishedWork = finishedWork.memoizedState.cache;
      finishedWork !== current && (finishedWork.refCount++, null != current && releaseCache(current));
    }
    function recursivelyTraversePassiveMountEffects(root2, parentFiber, committedLanes, committedTransitions) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveMountOnFiber(
            root2,
            parentFiber,
            committedLanes,
            committedTransitions
          ), parentFiber = parentFiber.sibling;
    }
    function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
      var flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitHookEffectListMount(9, finishedWork);
          break;
        case 3:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && (finishedRoot = null, null !== finishedWork.alternate && (finishedRoot = finishedWork.alternate.memoizedState.cache), finishedWork = finishedWork.memoizedState.cache, finishedWork !== finishedRoot && (finishedWork.refCount++, null != finishedRoot && releaseCache(finishedRoot)));
          break;
        case 12:
          if (flags & 2048) {
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
            finishedRoot = finishedWork.stateNode;
            try {
              var _finishedWork$memoize2 = finishedWork.memoizedProps, id = _finishedWork$memoize2.id, onPostCommit = _finishedWork$memoize2.onPostCommit;
              "function" === typeof onPostCommit && onPostCommit(
                id,
                null === finishedWork.alternate ? "mount" : "update",
                finishedRoot.passiveEffectDuration,
                -0
              );
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
          } else
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            );
          break;
        case 23:
          break;
        case 22:
          _finishedWork$memoize2 = finishedWork.stateNode;
          null !== finishedWork.memoizedState ? _finishedWork$memoize2._visibility & 4 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork) : _finishedWork$memoize2._visibility & 4 ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          ) : (_finishedWork$memoize2._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256)
          ));
          flags & 2048 && commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
          break;
        case 24:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
          flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          );
      }
    }
    function recursivelyTraverseReconnectPassiveEffects(finishedRoot$jscomp$0, parentFiber, committedLanes$jscomp$0, committedTransitions$jscomp$0, includeWorkInProgressEffects) {
      includeWorkInProgressEffects = includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, committedLanes = committedLanes$jscomp$0, committedTransitions = committedTransitions$jscomp$0, flags = finishedWork.flags;
        switch (finishedWork.tag) {
          case 0:
          case 11:
          case 15:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            commitHookEffectListMount(8, finishedWork);
            break;
          case 23:
            break;
          case 22:
            var instance = finishedWork.stateNode;
            null !== finishedWork.memoizedState ? instance._visibility & 4 ? recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ) : recursivelyTraverseAtomicPassiveEffects(
              finishedRoot,
              finishedWork
            ) : (instance._visibility |= 4, recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
            includeWorkInProgressEffects && flags & 2048 && commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
            break;
          case 24:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
            includeWorkInProgressEffects && flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
            break;
          default:
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            );
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function recursivelyTraverseAtomicPassiveEffects(finishedRoot$jscomp$0, parentFiber) {
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; ) {
          var finishedRoot = finishedRoot$jscomp$0, finishedWork = parentFiber, flags = finishedWork.flags;
          switch (finishedWork.tag) {
            case 22:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitOffscreenPassiveMountEffects(
                finishedWork.alternate,
                finishedWork
              );
              break;
            case 24:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
              flags & 2048 && commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
              break;
            default:
              recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          }
          parentFiber = parentFiber.sibling;
        }
    }
    var suspenseyCommitFlag = 8192;
    function recursivelyAccumulateSuspenseyCommit(parentFiber) {
      if (parentFiber.subtreeFlags & suspenseyCommitFlag)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          accumulateSuspenseyCommitOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function accumulateSuspenseyCommitOnFiber(fiber) {
      switch (fiber.tag) {
        case 26:
          recursivelyAccumulateSuspenseyCommit(fiber);
          fiber.flags & suspenseyCommitFlag && null !== fiber.memoizedState && suspendResource(
            currentHoistableRoot,
            fiber.memoizedState,
            fiber.memoizedProps
          );
          break;
        case 5:
          recursivelyAccumulateSuspenseyCommit(fiber);
          break;
        case 3:
        case 4:
          var previousHoistableRoot = currentHoistableRoot;
          currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
          recursivelyAccumulateSuspenseyCommit(fiber);
          currentHoistableRoot = previousHoistableRoot;
          break;
        case 22:
          null === fiber.memoizedState && (previousHoistableRoot = fiber.alternate, null !== previousHoistableRoot && null !== previousHoistableRoot.memoizedState ? (previousHoistableRoot = suspenseyCommitFlag, suspenseyCommitFlag = 16777216, recursivelyAccumulateSuspenseyCommit(fiber), suspenseyCommitFlag = previousHoistableRoot) : recursivelyAccumulateSuspenseyCommit(fiber));
          break;
        default:
          recursivelyAccumulateSuspenseyCommit(fiber);
      }
    }
    function detachAlternateSiblings(parentFiber) {
      var previousFiber = parentFiber.alternate;
      if (null !== previousFiber && (parentFiber = previousFiber.child, null !== parentFiber)) {
        previousFiber.child = null;
        do
          previousFiber = parentFiber.sibling, parentFiber.sibling = null, parentFiber = previousFiber;
        while (null !== parentFiber);
      }
    }
    function recursivelyTraversePassiveUnmountEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      if (parentFiber.subtreeFlags & 10256)
        for (parentFiber = parentFiber.child; null !== parentFiber; )
          commitPassiveUnmountOnFiber(parentFiber), parentFiber = parentFiber.sibling;
    }
    function commitPassiveUnmountOnFiber(finishedWork) {
      switch (finishedWork.tag) {
        case 0:
        case 11:
        case 15:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          finishedWork.flags & 2048 && commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
          break;
        case 3:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 12:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        case 22:
          var instance = finishedWork.stateNode;
          null !== finishedWork.memoizedState && instance._visibility & 4 && (null === finishedWork.return || 13 !== finishedWork.return.tag) ? (instance._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(finishedWork)) : recursivelyTraversePassiveUnmountEffects(finishedWork);
          break;
        default:
          recursivelyTraversePassiveUnmountEffects(finishedWork);
      }
    }
    function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
      var deletions = parentFiber.deletions;
      if (0 !== (parentFiber.flags & 16)) {
        if (null !== deletions)
          for (var i = 0; i < deletions.length; i++) {
            var childToDelete = deletions[i];
            nextEffect = childToDelete;
            commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
              childToDelete,
              parentFiber
            );
          }
        detachAlternateSiblings(parentFiber);
      }
      for (parentFiber = parentFiber.child; null !== parentFiber; ) {
        deletions = parentFiber;
        switch (deletions.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, deletions, deletions.return);
            recursivelyTraverseDisconnectPassiveEffects(deletions);
            break;
          case 22:
            i = deletions.stateNode;
            i._visibility & 4 && (i._visibility &= -5, recursivelyTraverseDisconnectPassiveEffects(deletions));
            break;
          default:
            recursivelyTraverseDisconnectPassiveEffects(deletions);
        }
        parentFiber = parentFiber.sibling;
      }
    }
    function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
      for (; null !== nextEffect; ) {
        var fiber = nextEffect;
        switch (fiber.tag) {
          case 0:
          case 11:
          case 15:
            commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
            break;
          case 23:
          case 22:
            if (null !== fiber.memoizedState && null !== fiber.memoizedState.cachePool) {
              var cache = fiber.memoizedState.cachePool.pool;
              null != cache && cache.refCount++;
            }
            break;
          case 24:
            releaseCache(fiber.memoizedState.cache);
        }
        cache = fiber.child;
        if (null !== cache) cache.return = fiber, nextEffect = cache;
        else
          a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
            cache = nextEffect;
            var sibling = cache.sibling, returnFiber = cache.return;
            detachFiberAfterEffects(cache);
            if (cache === fiber) {
              nextEffect = null;
              break a;
            }
            if (null !== sibling) {
              sibling.return = returnFiber;
              nextEffect = sibling;
              break a;
            }
            nextEffect = returnFiber;
          }
      }
    }
    function FiberNode(tag, pendingProps, key, mode) {
      this.tag = tag;
      this.key = key;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.refCleanup = this.ref = null;
      this.pendingProps = pendingProps;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = mode;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function createFiberImplClass(tag, pendingProps, key, mode) {
      return new FiberNode(tag, pendingProps, key, mode);
    }
    function shouldConstruct(Component) {
      Component = Component.prototype;
      return !(!Component || !Component.isReactComponent);
    }
    function createWorkInProgress(current, pendingProps) {
      var workInProgress2 = current.alternate;
      null === workInProgress2 ? (workInProgress2 = createFiberImplClass(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      ), workInProgress2.elementType = current.elementType, workInProgress2.type = current.type, workInProgress2.stateNode = current.stateNode, workInProgress2.alternate = current, current.alternate = workInProgress2) : (workInProgress2.pendingProps = pendingProps, workInProgress2.type = current.type, workInProgress2.flags = 0, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null);
      workInProgress2.flags = current.flags & 31457280;
      workInProgress2.childLanes = current.childLanes;
      workInProgress2.lanes = current.lanes;
      workInProgress2.child = current.child;
      workInProgress2.memoizedProps = current.memoizedProps;
      workInProgress2.memoizedState = current.memoizedState;
      workInProgress2.updateQueue = current.updateQueue;
      pendingProps = current.dependencies;
      workInProgress2.dependencies = null === pendingProps ? null : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
      workInProgress2.sibling = current.sibling;
      workInProgress2.index = current.index;
      workInProgress2.ref = current.ref;
      workInProgress2.refCleanup = current.refCleanup;
      return workInProgress2;
    }
    function resetWorkInProgress(workInProgress2, renderLanes2) {
      workInProgress2.flags &= 31457282;
      var current = workInProgress2.alternate;
      null === current ? (workInProgress2.childLanes = 0, workInProgress2.lanes = renderLanes2, workInProgress2.child = null, workInProgress2.subtreeFlags = 0, workInProgress2.memoizedProps = null, workInProgress2.memoizedState = null, workInProgress2.updateQueue = null, workInProgress2.dependencies = null, workInProgress2.stateNode = null) : (workInProgress2.childLanes = current.childLanes, workInProgress2.lanes = current.lanes, workInProgress2.child = current.child, workInProgress2.subtreeFlags = 0, workInProgress2.deletions = null, workInProgress2.memoizedProps = current.memoizedProps, workInProgress2.memoizedState = current.memoizedState, workInProgress2.updateQueue = current.updateQueue, workInProgress2.type = current.type, renderLanes2 = current.dependencies, workInProgress2.dependencies = null === renderLanes2 ? null : {
        lanes: renderLanes2.lanes,
        firstContext: renderLanes2.firstContext
      });
      return workInProgress2;
    }
    function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
      var fiberTag = 0;
      owner = type;
      if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
      else if ("string" === typeof type)
        fiberTag = isHostHoistableType(
          type,
          pendingProps,
          contextStackCursor.current
        ) ? 26 : "html" === type || "head" === type || "body" === type ? 27 : 5;
      else
        a: switch (type) {
          case REACT_FRAGMENT_TYPE:
            return createFiberFromFragment(pendingProps.children, mode, lanes, key);
          case REACT_STRICT_MODE_TYPE:
            fiberTag = 8;
            mode |= 24;
            break;
          case REACT_PROFILER_TYPE:
            return type = createFiberImplClass(12, pendingProps, key, mode | 2), type.elementType = REACT_PROFILER_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_TYPE:
            return type = createFiberImplClass(13, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_TYPE, type.lanes = lanes, type;
          case REACT_SUSPENSE_LIST_TYPE:
            return type = createFiberImplClass(19, pendingProps, key, mode), type.elementType = REACT_SUSPENSE_LIST_TYPE, type.lanes = lanes, type;
          case REACT_OFFSCREEN_TYPE:
            return createFiberFromOffscreen(pendingProps, mode, lanes, key);
          default:
            if ("object" === typeof type && null !== type)
              switch (type.$$typeof) {
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                  fiberTag = 10;
                  break a;
                case REACT_CONSUMER_TYPE:
                  fiberTag = 9;
                  break a;
                case REACT_FORWARD_REF_TYPE:
                  fiberTag = 11;
                  break a;
                case REACT_MEMO_TYPE:
                  fiberTag = 14;
                  break a;
                case REACT_LAZY_TYPE:
                  fiberTag = 16;
                  owner = null;
                  break a;
              }
            fiberTag = 29;
            pendingProps = Error(
              formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
            );
            owner = null;
        }
      key = createFiberImplClass(fiberTag, pendingProps, key, mode);
      key.elementType = type;
      key.type = owner;
      key.lanes = lanes;
      return key;
    }
    function createFiberFromFragment(elements, mode, lanes, key) {
      elements = createFiberImplClass(7, elements, key, mode);
      elements.lanes = lanes;
      return elements;
    }
    function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
      pendingProps = createFiberImplClass(22, pendingProps, key, mode);
      pendingProps.elementType = REACT_OFFSCREEN_TYPE;
      pendingProps.lanes = lanes;
      var primaryChildInstance = {
        _visibility: 1,
        _pendingVisibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
        _current: null,
        detach: function() {
          var fiber = primaryChildInstance._current;
          if (null === fiber) throw Error(formatProdErrorMessage(456));
          if (0 === (primaryChildInstance._pendingVisibility & 2)) {
            var root2 = enqueueConcurrentRenderForLane(fiber, 2);
            null !== root2 && (primaryChildInstance._pendingVisibility |= 2, scheduleUpdateOnFiber(root2, fiber, 2));
          }
        },
        attach: function() {
          var fiber = primaryChildInstance._current;
          if (null === fiber) throw Error(formatProdErrorMessage(456));
          if (0 !== (primaryChildInstance._pendingVisibility & 2)) {
            var root2 = enqueueConcurrentRenderForLane(fiber, 2);
            null !== root2 && (primaryChildInstance._pendingVisibility &= -3, scheduleUpdateOnFiber(root2, fiber, 2));
          }
        }
      };
      pendingProps.stateNode = primaryChildInstance;
      return pendingProps;
    }
    function createFiberFromText(content, mode, lanes) {
      content = createFiberImplClass(6, content, null, mode);
      content.lanes = lanes;
      return content;
    }
    function createFiberFromPortal(portal, mode, lanes) {
      mode = createFiberImplClass(
        4,
        null !== portal.children ? portal.children : [],
        portal.key,
        mode
      );
      mode.lanes = lanes;
      mode.stateNode = {
        containerInfo: portal.containerInfo,
        pendingChildren: null,
        implementation: portal.implementation
      };
      return mode;
    }
    function markUpdate(workInProgress2) {
      workInProgress2.flags |= 4;
    }
    function preloadResourceAndSuspendIfNeeded(workInProgress2, resource) {
      if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
        workInProgress2.flags &= -16777217;
      else if (workInProgress2.flags |= 16777216, !preloadResource(resource)) {
        resource = suspenseHandlerStackCursor.current;
        if (null !== resource && ((workInProgressRootRenderLanes & 4194176) === workInProgressRootRenderLanes ? null !== shellBoundary : (workInProgressRootRenderLanes & 62914560) !== workInProgressRootRenderLanes && 0 === (workInProgressRootRenderLanes & 536870912) || resource !== shellBoundary))
          throw suspendedThenable = noopSuspenseyCommitThenable, SuspenseyCommitException;
        workInProgress2.flags |= 8192;
      }
    }
    function scheduleRetryEffect(workInProgress2, retryQueue) {
      null !== retryQueue && (workInProgress2.flags |= 4);
      workInProgress2.flags & 16384 && (retryQueue = 22 !== workInProgress2.tag ? claimNextRetryLane() : 536870912, workInProgress2.lanes |= retryQueue, workInProgressSuspendedRetryLanes |= retryQueue);
    }
    function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
      if (!isHydrating)
        switch (renderState.tailMode) {
          case "hidden":
            hasRenderedATailFallback = renderState.tail;
            for (var lastTailNode = null; null !== hasRenderedATailFallback; )
              null !== hasRenderedATailFallback.alternate && (lastTailNode = hasRenderedATailFallback), hasRenderedATailFallback = hasRenderedATailFallback.sibling;
            null === lastTailNode ? renderState.tail = null : lastTailNode.sibling = null;
            break;
          case "collapsed":
            lastTailNode = renderState.tail;
            for (var lastTailNode$131 = null; null !== lastTailNode; )
              null !== lastTailNode.alternate && (lastTailNode$131 = lastTailNode), lastTailNode = lastTailNode.sibling;
            null === lastTailNode$131 ? hasRenderedATailFallback || null === renderState.tail ? renderState.tail = null : renderState.tail.sibling = null : lastTailNode$131.sibling = null;
        }
    }
    function bubbleProperties(completedWork) {
      var didBailout = null !== completedWork.alternate && completedWork.alternate.child === completedWork.child, newChildLanes = 0, subtreeFlags = 0;
      if (didBailout)
        for (var child$132 = completedWork.child; null !== child$132; )
          newChildLanes |= child$132.lanes | child$132.childLanes, subtreeFlags |= child$132.subtreeFlags & 31457280, subtreeFlags |= child$132.flags & 31457280, child$132.return = completedWork, child$132 = child$132.sibling;
      else
        for (child$132 = completedWork.child; null !== child$132; )
          newChildLanes |= child$132.lanes | child$132.childLanes, subtreeFlags |= child$132.subtreeFlags, subtreeFlags |= child$132.flags, child$132.return = completedWork, child$132 = child$132.sibling;
      completedWork.subtreeFlags |= subtreeFlags;
      completedWork.childLanes = newChildLanes;
      return didBailout;
    }
    function completeWork(current, workInProgress2, renderLanes2) {
      var newProps = workInProgress2.pendingProps;
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bubbleProperties(workInProgress2), null;
        case 1:
          return bubbleProperties(workInProgress2), null;
        case 3:
          renderLanes2 = workInProgress2.stateNode;
          newProps = null;
          null !== current && (newProps = current.memoizedState.cache);
          workInProgress2.memoizedState.cache !== newProps && (workInProgress2.flags |= 2048);
          popProvider(CacheContext);
          popHostContainer();
          renderLanes2.pendingContext && (renderLanes2.context = renderLanes2.pendingContext, renderLanes2.pendingContext = null);
          if (null === current || null === current.child)
            popHydrationState(workInProgress2) ? markUpdate(workInProgress2) : null === current || current.memoizedState.isDehydrated && 0 === (workInProgress2.flags & 256) || (workInProgress2.flags |= 1024, null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null));
          bubbleProperties(workInProgress2);
          return null;
        case 26:
          return renderLanes2 = workInProgress2.memoizedState, null === current ? (markUpdate(workInProgress2), null !== renderLanes2 ? (bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217)) : renderLanes2 ? renderLanes2 !== current.memoizedState ? (markUpdate(workInProgress2), bubbleProperties(workInProgress2), preloadResourceAndSuspendIfNeeded(workInProgress2, renderLanes2)) : (bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217) : (current.memoizedProps !== newProps && markUpdate(workInProgress2), bubbleProperties(workInProgress2), workInProgress2.flags &= -16777217), null;
        case 27:
          popHostContext(workInProgress2);
          renderLanes2 = rootInstanceStackCursor.current;
          var type = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            popHydrationState(workInProgress2) ? prepareToHydrateHostInstance(workInProgress2) : (current = resolveSingletonInstance(type, newProps, renderLanes2), workInProgress2.stateNode = current, markUpdate(workInProgress2));
          }
          bubbleProperties(workInProgress2);
          return null;
        case 5:
          popHostContext(workInProgress2);
          renderLanes2 = workInProgress2.type;
          if (null !== current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if (!newProps) {
              if (null === workInProgress2.stateNode)
                throw Error(formatProdErrorMessage(166));
              bubbleProperties(workInProgress2);
              return null;
            }
            current = contextStackCursor.current;
            if (popHydrationState(workInProgress2))
              prepareToHydrateHostInstance(workInProgress2);
            else {
              type = getOwnerDocumentFromRootContainer(
                rootInstanceStackCursor.current
              );
              switch (current) {
                case 1:
                  current = type.createElementNS(
                    "http://www.w3.org/2000/svg",
                    renderLanes2
                  );
                  break;
                case 2:
                  current = type.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    renderLanes2
                  );
                  break;
                default:
                  switch (renderLanes2) {
                    case "svg":
                      current = type.createElementNS(
                        "http://www.w3.org/2000/svg",
                        renderLanes2
                      );
                      break;
                    case "math":
                      current = type.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        renderLanes2
                      );
                      break;
                    case "script":
                      current = type.createElement("div");
                      current.innerHTML = "<script><\/script>";
                      current = current.removeChild(current.firstChild);
                      break;
                    case "select":
                      current = "string" === typeof newProps.is ? type.createElement("select", { is: newProps.is }) : type.createElement("select");
                      newProps.multiple ? current.multiple = true : newProps.size && (current.size = newProps.size);
                      break;
                    default:
                      current = "string" === typeof newProps.is ? type.createElement(renderLanes2, { is: newProps.is }) : type.createElement(renderLanes2);
                  }
              }
              current[internalInstanceKey] = workInProgress2;
              current[internalPropsKey] = newProps;
              a: for (type = workInProgress2.child; null !== type; ) {
                if (5 === type.tag || 6 === type.tag)
                  current.appendChild(type.stateNode);
                else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
                  type.child.return = type;
                  type = type.child;
                  continue;
                }
                if (type === workInProgress2) break a;
                for (; null === type.sibling; ) {
                  if (null === type.return || type.return === workInProgress2)
                    break a;
                  type = type.return;
                }
                type.sibling.return = type.return;
                type = type.sibling;
              }
              workInProgress2.stateNode = current;
              a: switch (setInitialProperties(current, renderLanes2, newProps), renderLanes2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  current = !!newProps.autoFocus;
                  break a;
                case "img":
                  current = true;
                  break a;
                default:
                  current = false;
              }
              current && markUpdate(workInProgress2);
            }
          }
          bubbleProperties(workInProgress2);
          workInProgress2.flags &= -16777217;
          return null;
        case 6:
          if (current && null != workInProgress2.stateNode)
            current.memoizedProps !== newProps && markUpdate(workInProgress2);
          else {
            if ("string" !== typeof newProps && null === workInProgress2.stateNode)
              throw Error(formatProdErrorMessage(166));
            current = rootInstanceStackCursor.current;
            if (popHydrationState(workInProgress2)) {
              current = workInProgress2.stateNode;
              renderLanes2 = workInProgress2.memoizedProps;
              newProps = null;
              type = hydrationParentFiber;
              if (null !== type)
                switch (type.tag) {
                  case 27:
                  case 5:
                    newProps = type.memoizedProps;
                }
              current[internalInstanceKey] = workInProgress2;
              current = current.nodeValue === renderLanes2 || null !== newProps && true === newProps.suppressHydrationWarning || checkForUnmatchedText(current.nodeValue, renderLanes2) ? true : false;
              current || throwOnHydrationMismatch(workInProgress2);
            } else
              current = getOwnerDocumentFromRootContainer(current).createTextNode(
                newProps
              ), current[internalInstanceKey] = workInProgress2, workInProgress2.stateNode = current;
          }
          bubbleProperties(workInProgress2);
          return null;
        case 13:
          newProps = workInProgress2.memoizedState;
          if (null === current || null !== current.memoizedState && null !== current.memoizedState.dehydrated) {
            type = popHydrationState(workInProgress2);
            if (null !== newProps && null !== newProps.dehydrated) {
              if (null === current) {
                if (!type) throw Error(formatProdErrorMessage(318));
                type = workInProgress2.memoizedState;
                type = null !== type ? type.dehydrated : null;
                if (!type) throw Error(formatProdErrorMessage(317));
                type[internalInstanceKey] = workInProgress2;
              } else
                resetHydrationState(), 0 === (workInProgress2.flags & 128) && (workInProgress2.memoizedState = null), workInProgress2.flags |= 4;
              bubbleProperties(workInProgress2);
              type = false;
            } else
              null !== hydrationErrors && (queueRecoverableErrors(hydrationErrors), hydrationErrors = null), type = true;
            if (!type) {
              if (workInProgress2.flags & 256)
                return popSuspenseHandler(workInProgress2), workInProgress2;
              popSuspenseHandler(workInProgress2);
              return null;
            }
          }
          popSuspenseHandler(workInProgress2);
          if (0 !== (workInProgress2.flags & 128))
            return workInProgress2.lanes = renderLanes2, workInProgress2;
          renderLanes2 = null !== newProps;
          current = null !== current && null !== current.memoizedState;
          if (renderLanes2) {
            newProps = workInProgress2.child;
            type = null;
            null !== newProps.alternate && null !== newProps.alternate.memoizedState && null !== newProps.alternate.memoizedState.cachePool && (type = newProps.alternate.memoizedState.cachePool.pool);
            var cache$144 = null;
            null !== newProps.memoizedState && null !== newProps.memoizedState.cachePool && (cache$144 = newProps.memoizedState.cachePool.pool);
            cache$144 !== type && (newProps.flags |= 2048);
          }
          renderLanes2 !== current && renderLanes2 && (workInProgress2.child.flags |= 8192);
          scheduleRetryEffect(workInProgress2, workInProgress2.updateQueue);
          bubbleProperties(workInProgress2);
          return null;
        case 4:
          return popHostContainer(), null === current && listenToAllSupportedEvents(workInProgress2.stateNode.containerInfo), bubbleProperties(workInProgress2), null;
        case 10:
          return popProvider(workInProgress2.type), bubbleProperties(workInProgress2), null;
        case 19:
          pop(suspenseStackCursor);
          type = workInProgress2.memoizedState;
          if (null === type) return bubbleProperties(workInProgress2), null;
          newProps = 0 !== (workInProgress2.flags & 128);
          cache$144 = type.rendering;
          if (null === cache$144)
            if (newProps) cutOffTailIfNeeded(type, false);
            else {
              if (0 !== workInProgressRootExitStatus || null !== current && 0 !== (current.flags & 128))
                for (current = workInProgress2.child; null !== current; ) {
                  cache$144 = findFirstSuspended(current);
                  if (null !== cache$144) {
                    workInProgress2.flags |= 128;
                    cutOffTailIfNeeded(type, false);
                    current = cache$144.updateQueue;
                    workInProgress2.updateQueue = current;
                    scheduleRetryEffect(workInProgress2, current);
                    workInProgress2.subtreeFlags = 0;
                    current = renderLanes2;
                    for (renderLanes2 = workInProgress2.child; null !== renderLanes2; )
                      resetWorkInProgress(renderLanes2, current), renderLanes2 = renderLanes2.sibling;
                    push(
                      suspenseStackCursor,
                      suspenseStackCursor.current & 1 | 2
                    );
                    return workInProgress2.child;
                  }
                  current = current.sibling;
                }
              null !== type.tail && now() > workInProgressRootRenderTargetTime && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
            }
          else {
            if (!newProps)
              if (current = findFirstSuspended(cache$144), null !== current) {
                if (workInProgress2.flags |= 128, newProps = true, current = current.updateQueue, workInProgress2.updateQueue = current, scheduleRetryEffect(workInProgress2, current), cutOffTailIfNeeded(type, true), null === type.tail && "hidden" === type.tailMode && !cache$144.alternate && !isHydrating)
                  return bubbleProperties(workInProgress2), null;
              } else
                2 * now() - type.renderingStartTime > workInProgressRootRenderTargetTime && 536870912 !== renderLanes2 && (workInProgress2.flags |= 128, newProps = true, cutOffTailIfNeeded(type, false), workInProgress2.lanes = 4194304);
            type.isBackwards ? (cache$144.sibling = workInProgress2.child, workInProgress2.child = cache$144) : (current = type.last, null !== current ? current.sibling = cache$144 : workInProgress2.child = cache$144, type.last = cache$144);
          }
          if (null !== type.tail)
            return workInProgress2 = type.tail, type.rendering = workInProgress2, type.tail = workInProgress2.sibling, type.renderingStartTime = now(), workInProgress2.sibling = null, current = suspenseStackCursor.current, push(suspenseStackCursor, newProps ? current & 1 | 2 : current & 1), workInProgress2;
          bubbleProperties(workInProgress2);
          return null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), newProps = null !== workInProgress2.memoizedState, null !== current ? null !== current.memoizedState !== newProps && (workInProgress2.flags |= 8192) : newProps && (workInProgress2.flags |= 8192), newProps ? 0 !== (renderLanes2 & 536870912) && 0 === (workInProgress2.flags & 128) && (bubbleProperties(workInProgress2), workInProgress2.subtreeFlags & 6 && (workInProgress2.flags |= 8192)) : bubbleProperties(workInProgress2), renderLanes2 = workInProgress2.updateQueue, null !== renderLanes2 && scheduleRetryEffect(workInProgress2, renderLanes2.retryQueue), renderLanes2 = null, null !== current && null !== current.memoizedState && null !== current.memoizedState.cachePool && (renderLanes2 = current.memoizedState.cachePool.pool), newProps = null, null !== workInProgress2.memoizedState && null !== workInProgress2.memoizedState.cachePool && (newProps = workInProgress2.memoizedState.cachePool.pool), newProps !== renderLanes2 && (workInProgress2.flags |= 2048), null !== current && pop(resumedCache), null;
        case 24:
          return renderLanes2 = null, null !== current && (renderLanes2 = current.memoizedState.cache), workInProgress2.memoizedState.cache !== renderLanes2 && (workInProgress2.flags |= 2048), popProvider(CacheContext), bubbleProperties(workInProgress2), null;
        case 25:
          return null;
      }
      throw Error(formatProdErrorMessage(156, workInProgress2.tag));
    }
    function unwindWork(current, workInProgress2) {
      popTreeContext(workInProgress2);
      switch (workInProgress2.tag) {
        case 1:
          return current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 3:
          return popProvider(CacheContext), popHostContainer(), current = workInProgress2.flags, 0 !== (current & 65536) && 0 === (current & 128) ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 26:
        case 27:
        case 5:
          return popHostContext(workInProgress2), null;
        case 13:
          popSuspenseHandler(workInProgress2);
          current = workInProgress2.memoizedState;
          if (null !== current && null !== current.dehydrated) {
            if (null === workInProgress2.alternate)
              throw Error(formatProdErrorMessage(340));
            resetHydrationState();
          }
          current = workInProgress2.flags;
          return current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 19:
          return pop(suspenseStackCursor), null;
        case 4:
          return popHostContainer(), null;
        case 10:
          return popProvider(workInProgress2.type), null;
        case 22:
        case 23:
          return popSuspenseHandler(workInProgress2), popHiddenContext(), null !== current && pop(resumedCache), current = workInProgress2.flags, current & 65536 ? (workInProgress2.flags = current & -65537 | 128, workInProgress2) : null;
        case 24:
          return popProvider(CacheContext), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function unwindInterruptedWork(current, interruptedWork) {
      popTreeContext(interruptedWork);
      switch (interruptedWork.tag) {
        case 3:
          popProvider(CacheContext);
          popHostContainer();
          break;
        case 26:
        case 27:
        case 5:
          popHostContext(interruptedWork);
          break;
        case 4:
          popHostContainer();
          break;
        case 13:
          popSuspenseHandler(interruptedWork);
          break;
        case 19:
          pop(suspenseStackCursor);
          break;
        case 10:
          popProvider(interruptedWork.type);
          break;
        case 22:
        case 23:
          popSuspenseHandler(interruptedWork);
          popHiddenContext();
          null !== current && pop(resumedCache);
          break;
        case 24:
          popProvider(CacheContext);
      }
    }
    var DefaultAsyncDispatcher = {
      getCacheForType: function(resourceType) {
        var cache = readContext(CacheContext), cacheForType = cache.data.get(resourceType);
        void 0 === cacheForType && (cacheForType = resourceType(), cache.data.set(resourceType, cacheForType));
        return cacheForType;
      }
    }, PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, executionContext = 0, workInProgressRoot = null, workInProgress = null, workInProgressRootRenderLanes = 0, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, workInProgressRootDidSkipSuspendedSiblings = false, workInProgressRootIsPrerendering = false, workInProgressRootDidAttachPingListener = false, entangledRenderLanes = 0, workInProgressRootExitStatus = 0, workInProgressRootSkippedLanes = 0, workInProgressRootInterleavedUpdatedLanes = 0, workInProgressRootPingedLanes = 0, workInProgressDeferredLane = 0, workInProgressSuspendedRetryLanes = 0, workInProgressRootConcurrentErrors = null, workInProgressRootRecoverableErrors = null, workInProgressRootDidIncludeRecursiveRenderUpdate = false, globalMostRecentFallbackTime = 0, workInProgressRootRenderTargetTime = Infinity, workInProgressTransitions = null, legacyErrorBoundariesThatAlreadyFailed = null, rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = null, pendingPassiveEffectsLanes = 0, pendingPassiveEffectsRemainingLanes = 0, pendingPassiveTransitions = null, nestedUpdateCount = 0, rootWithNestedUpdates = null;
    function requestUpdateLane() {
      if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
        return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
      if (null !== ReactSharedInternals.T) {
        var actionScopeLane = currentEntangledLane;
        return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
      }
      return resolveUpdatePriority();
    }
    function requestDeferredLane() {
      0 === workInProgressDeferredLane && (workInProgressDeferredLane = 0 === (workInProgressRootRenderLanes & 536870912) || isHydrating ? claimNextTransitionLane() : 536870912);
      var suspenseHandler = suspenseHandlerStackCursor.current;
      null !== suspenseHandler && (suspenseHandler.flags |= 32);
      return workInProgressDeferredLane;
    }
    function scheduleUpdateOnFiber(root2, fiber, lane) {
      if (root2 === workInProgressRoot && 2 === workInProgressSuspendedReason || null !== root2.cancelPendingCommit)
        prepareFreshStack(root2, 0), markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        );
      markRootUpdated$1(root2, lane);
      if (0 === (executionContext & 2) || root2 !== workInProgressRoot)
        root2 === workInProgressRoot && (0 === (executionContext & 2) && (workInProgressRootInterleavedUpdatedLanes |= lane), 4 === workInProgressRootExitStatus && markRootSuspended(
          root2,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane,
          false
        )), ensureRootIsScheduled(root2);
    }
    function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      var shouldTimeSlice = !forceSync && 0 === (lanes & 60) && 0 === (lanes & root$jscomp$0.expiredLanes) || checkIfRootIsPrerendering(root$jscomp$0, lanes), exitStatus = shouldTimeSlice ? renderRootConcurrent(root$jscomp$0, lanes) : renderRootSync(root$jscomp$0, lanes, true), renderWasConcurrent = shouldTimeSlice;
      do {
        if (0 === exitStatus) {
          workInProgressRootIsPrerendering && !shouldTimeSlice && markRootSuspended(root$jscomp$0, lanes, 0, false);
          break;
        } else if (6 === exitStatus)
          markRootSuspended(
            root$jscomp$0,
            lanes,
            0,
            !workInProgressRootDidSkipSuspendedSiblings
          );
        else {
          forceSync = root$jscomp$0.current.alternate;
          if (renderWasConcurrent && !isRenderConsistentWithExternalStores(forceSync)) {
            exitStatus = renderRootSync(root$jscomp$0, lanes, false);
            renderWasConcurrent = false;
            continue;
          }
          if (2 === exitStatus) {
            renderWasConcurrent = lanes;
            if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
              var JSCompiler_inline_result = 0;
            else
              JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913, JSCompiler_inline_result = 0 !== JSCompiler_inline_result ? JSCompiler_inline_result : JSCompiler_inline_result & 536870912 ? 536870912 : 0;
            if (0 !== JSCompiler_inline_result) {
              lanes = JSCompiler_inline_result;
              a: {
                var root2 = root$jscomp$0;
                exitStatus = workInProgressRootConcurrentErrors;
                var wasRootDehydrated = root2.current.memoizedState.isDehydrated;
                wasRootDehydrated && (prepareFreshStack(root2, JSCompiler_inline_result).flags |= 256);
                JSCompiler_inline_result = renderRootSync(
                  root2,
                  JSCompiler_inline_result,
                  false
                );
                if (2 !== JSCompiler_inline_result) {
                  if (workInProgressRootDidAttachPingListener && !wasRootDehydrated) {
                    root2.errorRecoveryDisabledLanes |= renderWasConcurrent;
                    workInProgressRootInterleavedUpdatedLanes |= renderWasConcurrent;
                    exitStatus = 4;
                    break a;
                  }
                  renderWasConcurrent = workInProgressRootRecoverableErrors;
                  workInProgressRootRecoverableErrors = exitStatus;
                  null !== renderWasConcurrent && queueRecoverableErrors(renderWasConcurrent);
                }
                exitStatus = JSCompiler_inline_result;
              }
              renderWasConcurrent = false;
              if (2 !== exitStatus) continue;
            }
          }
          if (1 === exitStatus) {
            prepareFreshStack(root$jscomp$0, 0);
            markRootSuspended(root$jscomp$0, lanes, 0, true);
            break;
          }
          a: {
            shouldTimeSlice = root$jscomp$0;
            switch (exitStatus) {
              case 0:
              case 1:
                throw Error(formatProdErrorMessage(345));
              case 4:
                if ((lanes & 4194176) === lanes) {
                  markRootSuspended(
                    shouldTimeSlice,
                    lanes,
                    workInProgressDeferredLane,
                    !workInProgressRootDidSkipSuspendedSiblings
                  );
                  break a;
                }
                break;
              case 2:
                workInProgressRootRecoverableErrors = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(formatProdErrorMessage(329));
            }
            shouldTimeSlice.finishedWork = forceSync;
            shouldTimeSlice.finishedLanes = lanes;
            if ((lanes & 62914560) === lanes && (renderWasConcurrent = globalMostRecentFallbackTime + 300 - now(), 10 < renderWasConcurrent)) {
              markRootSuspended(
                shouldTimeSlice,
                lanes,
                workInProgressDeferredLane,
                !workInProgressRootDidSkipSuspendedSiblings
              );
              if (0 !== getNextLanes(shouldTimeSlice, 0)) break a;
              shouldTimeSlice.timeoutHandle = scheduleTimeout(
                commitRootWhenReady.bind(
                  null,
                  shouldTimeSlice,
                  forceSync,
                  workInProgressRootRecoverableErrors,
                  workInProgressTransitions,
                  workInProgressRootDidIncludeRecursiveRenderUpdate,
                  lanes,
                  workInProgressDeferredLane,
                  workInProgressRootInterleavedUpdatedLanes,
                  workInProgressSuspendedRetryLanes,
                  workInProgressRootDidSkipSuspendedSiblings,
                  2,
                  -0,
                  0
                ),
                renderWasConcurrent
              );
              break a;
            }
            commitRootWhenReady(
              shouldTimeSlice,
              forceSync,
              workInProgressRootRecoverableErrors,
              workInProgressTransitions,
              workInProgressRootDidIncludeRecursiveRenderUpdate,
              lanes,
              workInProgressDeferredLane,
              workInProgressRootInterleavedUpdatedLanes,
              workInProgressSuspendedRetryLanes,
              workInProgressRootDidSkipSuspendedSiblings,
              0,
              -0,
              0
            );
          }
        }
        break;
      } while (1);
      ensureRootIsScheduled(root$jscomp$0);
    }
    function queueRecoverableErrors(errors) {
      null === workInProgressRootRecoverableErrors ? workInProgressRootRecoverableErrors = errors : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        errors
      );
    }
    function commitRootWhenReady(root2, finishedWork, recoverableErrors, transitions2, didIncludeRenderPhaseUpdate, lanes, spawnedLane, updatedLanes, suspendedRetryLanes, didSkipSuspendedSiblings, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
      var subtreeFlags = finishedWork.subtreeFlags;
      if (subtreeFlags & 8192 || 16785408 === (subtreeFlags & 16785408)) {
        if (suspendedState = { stylesheets: null, count: 0, unsuspend: noop2 }, accumulateSuspenseyCommitOnFiber(finishedWork), finishedWork = waitForCommitToBeReady(), null !== finishedWork) {
          root2.cancelPendingCommit = finishedWork(
            commitRoot.bind(
              null,
              root2,
              recoverableErrors,
              transitions2,
              didIncludeRenderPhaseUpdate,
              spawnedLane,
              updatedLanes,
              suspendedRetryLanes,
              1,
              completedRenderStartTime,
              completedRenderEndTime
            )
          );
          markRootSuspended(root2, lanes, spawnedLane, !didSkipSuspendedSiblings);
          return;
        }
      }
      commitRoot(
        root2,
        recoverableErrors,
        transitions2,
        didIncludeRenderPhaseUpdate,
        spawnedLane,
        updatedLanes,
        suspendedRetryLanes,
        suspendedCommitReason,
        completedRenderStartTime,
        completedRenderEndTime
      );
    }
    function isRenderConsistentWithExternalStores(finishedWork) {
      for (var node = finishedWork; ; ) {
        var tag = node.tag;
        if ((0 === tag || 11 === tag || 15 === tag) && node.flags & 16384 && (tag = node.updateQueue, null !== tag && (tag = tag.stores, null !== tag)))
          for (var i = 0; i < tag.length; i++) {
            var check = tag[i], getSnapshot = check.getSnapshot;
            check = check.value;
            try {
              if (!objectIs(getSnapshot(), check)) return false;
            } catch (error) {
              return false;
            }
          }
        tag = node.child;
        if (node.subtreeFlags & 16384 && null !== tag)
          tag.return = node, node = tag;
        else {
          if (node === finishedWork) break;
          for (; null === node.sibling; ) {
            if (null === node.return || node.return === finishedWork) return true;
            node = node.return;
          }
          node.sibling.return = node.return;
          node = node.sibling;
        }
      }
      return true;
    }
    function markRootSuspended(root2, suspendedLanes, spawnedLane, didAttemptEntireTree) {
      suspendedLanes &= ~workInProgressRootPingedLanes;
      suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
      root2.suspendedLanes |= suspendedLanes;
      root2.pingedLanes &= ~suspendedLanes;
      didAttemptEntireTree && (root2.warmLanes |= suspendedLanes);
      didAttemptEntireTree = root2.expirationTimes;
      for (var lanes = suspendedLanes; 0 < lanes; ) {
        var index$6 = 31 - clz32(lanes), lane = 1 << index$6;
        didAttemptEntireTree[index$6] = -1;
        lanes &= ~lane;
      }
      0 !== spawnedLane && markSpawnedDeferredLane(root2, spawnedLane, suspendedLanes);
    }
    function flushSyncWork$1() {
      return 0 === (executionContext & 6) ? (flushSyncWorkAcrossRoots_impl(0), false) : true;
    }
    function resetWorkInProgressStack() {
      if (null !== workInProgress) {
        if (0 === workInProgressSuspendedReason)
          var interruptedWork = workInProgress.return;
        else
          interruptedWork = workInProgress, lastContextDependency = currentlyRenderingFiber = null, resetHooksOnUnwind(interruptedWork), thenableState$1 = null, thenableIndexCounter$1 = 0, interruptedWork = workInProgress;
        for (; null !== interruptedWork; )
          unwindInterruptedWork(interruptedWork.alternate, interruptedWork), interruptedWork = interruptedWork.return;
        workInProgress = null;
      }
    }
    function prepareFreshStack(root2, lanes) {
      root2.finishedWork = null;
      root2.finishedLanes = 0;
      var timeoutHandle = root2.timeoutHandle;
      -1 !== timeoutHandle && (root2.timeoutHandle = -1, cancelTimeout(timeoutHandle));
      timeoutHandle = root2.cancelPendingCommit;
      null !== timeoutHandle && (root2.cancelPendingCommit = null, timeoutHandle());
      resetWorkInProgressStack();
      workInProgressRoot = root2;
      workInProgress = timeoutHandle = createWorkInProgress(root2.current, null);
      workInProgressRootRenderLanes = lanes;
      workInProgressSuspendedReason = 0;
      workInProgressThrownValue = null;
      workInProgressRootDidSkipSuspendedSiblings = false;
      workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root2, lanes);
      workInProgressRootDidAttachPingListener = false;
      workInProgressSuspendedRetryLanes = workInProgressDeferredLane = workInProgressRootPingedLanes = workInProgressRootInterleavedUpdatedLanes = workInProgressRootSkippedLanes = workInProgressRootExitStatus = 0;
      workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors = null;
      workInProgressRootDidIncludeRecursiveRenderUpdate = false;
      0 !== (lanes & 8) && (lanes |= lanes & 32);
      var allEntangledLanes = root2.entangledLanes;
      if (0 !== allEntangledLanes)
        for (root2 = root2.entanglements, allEntangledLanes &= lanes; 0 < allEntangledLanes; ) {
          var index$4 = 31 - clz32(allEntangledLanes), lane = 1 << index$4;
          lanes |= root2[index$4];
          allEntangledLanes &= ~lane;
        }
      entangledRenderLanes = lanes;
      finishQueueingConcurrentUpdates();
      return timeoutHandle;
    }
    function handleThrow(root2, thrownValue) {
      currentlyRenderingFiber$1 = null;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      thrownValue === SuspenseException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 3) : thrownValue === SuspenseyCommitException ? (thrownValue = getSuspendedThenable(), workInProgressSuspendedReason = 4) : workInProgressSuspendedReason = thrownValue === SelectiveHydrationException ? 8 : null !== thrownValue && "object" === typeof thrownValue && "function" === typeof thrownValue.then ? 6 : 1;
      workInProgressThrownValue = thrownValue;
      null === workInProgress && (workInProgressRootExitStatus = 1, logUncaughtError(
        root2,
        createCapturedValueAtFiber(thrownValue, root2.current)
      ));
    }
    function pushDispatcher() {
      var prevDispatcher = ReactSharedInternals.H;
      ReactSharedInternals.H = ContextOnlyDispatcher;
      return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
    }
    function pushAsyncDispatcher() {
      var prevAsyncDispatcher = ReactSharedInternals.A;
      ReactSharedInternals.A = DefaultAsyncDispatcher;
      return prevAsyncDispatcher;
    }
    function renderDidSuspendDelayIfPossible() {
      workInProgressRootExitStatus = 4;
      workInProgressRootDidSkipSuspendedSiblings || (workInProgressRootRenderLanes & 4194176) !== workInProgressRootRenderLanes && null !== suspenseHandlerStackCursor.current || (workInProgressRootIsPrerendering = true);
      0 === (workInProgressRootSkippedLanes & 134217727) && 0 === (workInProgressRootInterleavedUpdatedLanes & 134217727) || null === workInProgressRoot || markRootSuspended(
        workInProgressRoot,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane,
        false
      );
    }
    function renderRootSync(root2, lanes, shouldYieldForPrerendering) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      if (workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes)
        workInProgressTransitions = null, prepareFreshStack(root2, lanes);
      lanes = false;
      var exitStatus = workInProgressRootExitStatus;
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            var unitOfWork = workInProgress, thrownValue = workInProgressThrownValue;
            switch (workInProgressSuspendedReason) {
              case 8:
                resetWorkInProgressStack();
                exitStatus = 6;
                break a;
              case 3:
              case 2:
              case 6:
                null === suspenseHandlerStackCursor.current && (lanes = true);
                var reason = workInProgressSuspendedReason;
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
                if (shouldYieldForPrerendering && workInProgressRootIsPrerendering) {
                  exitStatus = 0;
                  break a;
                }
                break;
              default:
                reason = workInProgressSuspendedReason, workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, reason);
            }
          }
          workLoopSync();
          exitStatus = workInProgressRootExitStatus;
          break;
        } catch (thrownValue$164) {
          handleThrow(root2, thrownValue$164);
        }
      while (1);
      lanes && root2.shellSuspendCounter++;
      lastContextDependency = currentlyRenderingFiber = null;
      executionContext = prevExecutionContext;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      null === workInProgress && (workInProgressRoot = null, workInProgressRootRenderLanes = 0, finishQueueingConcurrentUpdates());
      return exitStatus;
    }
    function workLoopSync() {
      for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
    }
    function renderRootConcurrent(root2, lanes) {
      var prevExecutionContext = executionContext;
      executionContext |= 2;
      var prevDispatcher = pushDispatcher(), prevAsyncDispatcher = pushAsyncDispatcher();
      workInProgressRoot !== root2 || workInProgressRootRenderLanes !== lanes ? (workInProgressTransitions = null, workInProgressRootRenderTargetTime = now() + 500, prepareFreshStack(root2, lanes)) : workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
        root2,
        lanes
      );
      a: do
        try {
          if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
            lanes = workInProgress;
            var thrownValue = workInProgressThrownValue;
            b: switch (workInProgressSuspendedReason) {
              case 1:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 1);
                break;
              case 2:
                if (isThenableResolved(thrownValue)) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  replaySuspendedUnitOfWork(lanes);
                  break;
                }
                lanes = function() {
                  2 === workInProgressSuspendedReason && workInProgressRoot === root2 && (workInProgressSuspendedReason = 7);
                  ensureRootIsScheduled(root2);
                };
                thrownValue.then(lanes, lanes);
                break a;
              case 3:
                workInProgressSuspendedReason = 7;
                break a;
              case 4:
                workInProgressSuspendedReason = 5;
                break a;
              case 7:
                isThenableResolved(thrownValue) ? (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, replaySuspendedUnitOfWork(lanes)) : (workInProgressSuspendedReason = 0, workInProgressThrownValue = null, throwAndUnwindWorkLoop(root2, lanes, thrownValue, 7));
                break;
              case 5:
                var resource = null;
                switch (workInProgress.tag) {
                  case 26:
                    resource = workInProgress.memoizedState;
                  case 5:
                  case 27:
                    var hostFiber = workInProgress;
                    if (resource ? preloadResource(resource) : 1) {
                      workInProgressSuspendedReason = 0;
                      workInProgressThrownValue = null;
                      var sibling = hostFiber.sibling;
                      if (null !== sibling) workInProgress = sibling;
                      else {
                        var returnFiber = hostFiber.return;
                        null !== returnFiber ? (workInProgress = returnFiber, completeUnitOfWork(returnFiber)) : workInProgress = null;
                      }
                      break b;
                    }
                }
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 5);
                break;
              case 6:
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                throwAndUnwindWorkLoop(root2, lanes, thrownValue, 6);
                break;
              case 8:
                resetWorkInProgressStack();
                workInProgressRootExitStatus = 6;
                break a;
              default:
                throw Error(formatProdErrorMessage(462));
            }
          }
          workLoopConcurrent();
          break;
        } catch (thrownValue$166) {
          handleThrow(root2, thrownValue$166);
        }
      while (1);
      lastContextDependency = currentlyRenderingFiber = null;
      ReactSharedInternals.H = prevDispatcher;
      ReactSharedInternals.A = prevAsyncDispatcher;
      executionContext = prevExecutionContext;
      if (null !== workInProgress) return 0;
      workInProgressRoot = null;
      workInProgressRootRenderLanes = 0;
      finishQueueingConcurrentUpdates();
      return workInProgressRootExitStatus;
    }
    function workLoopConcurrent() {
      for (; null !== workInProgress && !shouldYield(); )
        performUnitOfWork(workInProgress);
    }
    function performUnitOfWork(unitOfWork) {
      var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function replaySuspendedUnitOfWork(unitOfWork) {
      var next = unitOfWork;
      var current = next.alternate;
      switch (next.tag) {
        case 15:
        case 0:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type,
            void 0,
            workInProgressRootRenderLanes
          );
          break;
        case 11:
          next = replayFunctionComponent(
            current,
            next,
            next.pendingProps,
            next.type.render,
            next.ref,
            workInProgressRootRenderLanes
          );
          break;
        case 5:
          resetHooksOnUnwind(next);
        default:
          unwindInterruptedWork(current, next), next = workInProgress = resetWorkInProgress(next, entangledRenderLanes), next = beginWork(current, next, entangledRenderLanes);
      }
      unitOfWork.memoizedProps = unitOfWork.pendingProps;
      null === next ? completeUnitOfWork(unitOfWork) : workInProgress = next;
    }
    function throwAndUnwindWorkLoop(root2, unitOfWork, thrownValue, suspendedReason) {
      lastContextDependency = currentlyRenderingFiber = null;
      resetHooksOnUnwind(unitOfWork);
      thenableState$1 = null;
      thenableIndexCounter$1 = 0;
      var returnFiber = unitOfWork.return;
      try {
        if (throwException(
          root2,
          returnFiber,
          unitOfWork,
          thrownValue,
          workInProgressRootRenderLanes
        )) {
          workInProgressRootExitStatus = 1;
          logUncaughtError(
            root2,
            createCapturedValueAtFiber(thrownValue, root2.current)
          );
          workInProgress = null;
          return;
        }
      } catch (error) {
        if (null !== returnFiber) throw workInProgress = returnFiber, error;
        workInProgressRootExitStatus = 1;
        logUncaughtError(
          root2,
          createCapturedValueAtFiber(thrownValue, root2.current)
        );
        workInProgress = null;
        return;
      }
      if (unitOfWork.flags & 32768) {
        if (isHydrating || 1 === suspendedReason) root2 = true;
        else if (workInProgressRootIsPrerendering || 0 !== (workInProgressRootRenderLanes & 536870912))
          root2 = false;
        else if (workInProgressRootDidSkipSuspendedSiblings = root2 = true, 2 === suspendedReason || 3 === suspendedReason || 6 === suspendedReason)
          suspendedReason = suspenseHandlerStackCursor.current, null !== suspendedReason && 13 === suspendedReason.tag && (suspendedReason.flags |= 16384);
        unwindUnitOfWork(unitOfWork, root2);
      } else completeUnitOfWork(unitOfWork);
    }
    function completeUnitOfWork(unitOfWork) {
      var completedWork = unitOfWork;
      do {
        if (0 !== (completedWork.flags & 32768)) {
          unwindUnitOfWork(
            completedWork,
            workInProgressRootDidSkipSuspendedSiblings
          );
          return;
        }
        unitOfWork = completedWork.return;
        var next = completeWork(
          completedWork.alternate,
          completedWork,
          entangledRenderLanes
        );
        if (null !== next) {
          workInProgress = next;
          return;
        }
        completedWork = completedWork.sibling;
        if (null !== completedWork) {
          workInProgress = completedWork;
          return;
        }
        workInProgress = completedWork = unitOfWork;
      } while (null !== completedWork);
      0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
    }
    function unwindUnitOfWork(unitOfWork, skipSiblings) {
      do {
        var next = unwindWork(unitOfWork.alternate, unitOfWork);
        if (null !== next) {
          next.flags &= 32767;
          workInProgress = next;
          return;
        }
        next = unitOfWork.return;
        null !== next && (next.flags |= 32768, next.subtreeFlags = 0, next.deletions = null);
        if (!skipSiblings && (unitOfWork = unitOfWork.sibling, null !== unitOfWork)) {
          workInProgress = unitOfWork;
          return;
        }
        workInProgress = unitOfWork = next;
      } while (null !== unitOfWork);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
    function commitRoot(root2, recoverableErrors, transitions2, didIncludeRenderPhaseUpdate, spawnedLane, updatedLanes, suspendedRetryLanes, suspendedCommitReason, completedRenderStartTime, completedRenderEndTime) {
      var prevTransition = ReactSharedInternals.T, previousUpdateLanePriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 2, ReactSharedInternals.T = null, commitRootImpl(
          root2,
          recoverableErrors,
          transitions2,
          didIncludeRenderPhaseUpdate,
          previousUpdateLanePriority,
          spawnedLane,
          updatedLanes,
          suspendedRetryLanes,
          suspendedCommitReason,
          completedRenderStartTime,
          completedRenderEndTime
        );
      } finally {
        ReactSharedInternals.T = prevTransition, ReactDOMSharedInternals.p = previousUpdateLanePriority;
      }
    }
    function commitRootImpl(root2, recoverableErrors, transitions2, didIncludeRenderPhaseUpdate, renderPriorityLevel, spawnedLane, updatedLanes, suspendedRetryLanes) {
      do
        flushPassiveEffects();
      while (null !== rootWithPendingPassiveEffects);
      if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
      var finishedWork = root2.finishedWork;
      didIncludeRenderPhaseUpdate = root2.finishedLanes;
      if (null === finishedWork) return null;
      root2.finishedWork = null;
      root2.finishedLanes = 0;
      if (finishedWork === root2.current) throw Error(formatProdErrorMessage(177));
      root2.callbackNode = null;
      root2.callbackPriority = 0;
      root2.cancelPendingCommit = null;
      var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
      remainingLanes |= concurrentlyUpdatedLanes;
      markRootFinished(
        root2,
        didIncludeRenderPhaseUpdate,
        remainingLanes,
        spawnedLane,
        updatedLanes,
        suspendedRetryLanes
      );
      root2 === workInProgressRoot && (workInProgress = workInProgressRoot = null, workInProgressRootRenderLanes = 0);
      0 === (finishedWork.subtreeFlags & 10256) && 0 === (finishedWork.flags & 10256) || rootDoesHavePassiveEffects || (rootDoesHavePassiveEffects = true, pendingPassiveEffectsRemainingLanes = remainingLanes, pendingPassiveTransitions = transitions2, scheduleCallback$1(NormalPriority$1, function() {
        flushPassiveEffects();
        return null;
      }));
      transitions2 = 0 !== (finishedWork.flags & 15990);
      0 !== (finishedWork.subtreeFlags & 15990) || transitions2 ? (transitions2 = ReactSharedInternals.T, ReactSharedInternals.T = null, spawnedLane = ReactDOMSharedInternals.p, ReactDOMSharedInternals.p = 2, updatedLanes = executionContext, executionContext |= 4, commitBeforeMutationEffects(root2, finishedWork), commitMutationEffectsOnFiber(finishedWork, root2), restoreSelection(selectionInformation, root2.containerInfo), _enabled = !!eventsEnabled, selectionInformation = eventsEnabled = null, root2.current = finishedWork, commitLayoutEffectOnFiber(root2, finishedWork.alternate, finishedWork), requestPaint(), executionContext = updatedLanes, ReactDOMSharedInternals.p = spawnedLane, ReactSharedInternals.T = transitions2) : root2.current = finishedWork;
      rootDoesHavePassiveEffects ? (rootDoesHavePassiveEffects = false, rootWithPendingPassiveEffects = root2, pendingPassiveEffectsLanes = didIncludeRenderPhaseUpdate) : releaseRootPooledCache(root2, remainingLanes);
      remainingLanes = root2.pendingLanes;
      0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
      onCommitRoot(finishedWork.stateNode);
      ensureRootIsScheduled(root2);
      if (null !== recoverableErrors)
        for (renderPriorityLevel = root2.onRecoverableError, finishedWork = 0; finishedWork < recoverableErrors.length; finishedWork++)
          remainingLanes = recoverableErrors[finishedWork], renderPriorityLevel(remainingLanes.value, {
            componentStack: remainingLanes.stack
          });
      0 !== (pendingPassiveEffectsLanes & 3) && flushPassiveEffects();
      remainingLanes = root2.pendingLanes;
      0 !== (didIncludeRenderPhaseUpdate & 4194218) && 0 !== (remainingLanes & 42) ? root2 === rootWithNestedUpdates ? nestedUpdateCount++ : (nestedUpdateCount = 0, rootWithNestedUpdates = root2) : nestedUpdateCount = 0;
      flushSyncWorkAcrossRoots_impl(0);
      return null;
    }
    function releaseRootPooledCache(root2, remainingLanes) {
      0 === (root2.pooledCacheLanes &= remainingLanes) && (remainingLanes = root2.pooledCache, null != remainingLanes && (root2.pooledCache = null, releaseCache(remainingLanes)));
    }
    function flushPassiveEffects() {
      if (null !== rootWithPendingPassiveEffects) {
        var root$170 = rootWithPendingPassiveEffects, remainingLanes = pendingPassiveEffectsRemainingLanes;
        pendingPassiveEffectsRemainingLanes = 0;
        var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes), prevTransition = ReactSharedInternals.T, previousPriority = ReactDOMSharedInternals.p;
        try {
          ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
          ReactSharedInternals.T = null;
          if (null === rootWithPendingPassiveEffects)
            var JSCompiler_inline_result = false;
          else {
            renderPriority = pendingPassiveTransitions;
            pendingPassiveTransitions = null;
            var root2 = rootWithPendingPassiveEffects, lanes = pendingPassiveEffectsLanes;
            rootWithPendingPassiveEffects = null;
            pendingPassiveEffectsLanes = 0;
            if (0 !== (executionContext & 6))
              throw Error(formatProdErrorMessage(331));
            var prevExecutionContext = executionContext;
            executionContext |= 4;
            commitPassiveUnmountOnFiber(root2.current);
            commitPassiveMountOnFiber(root2, root2.current, lanes, renderPriority);
            executionContext = prevExecutionContext;
            flushSyncWorkAcrossRoots_impl(0, false);
            if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
              try {
                injectedHook.onPostCommitFiberRoot(rendererID, root2);
              } catch (err) {
              }
            JSCompiler_inline_result = true;
          }
          return JSCompiler_inline_result;
        } finally {
          ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition, releaseRootPooledCache(root$170, remainingLanes);
        }
      }
      return false;
    }
    function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
      sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
      sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
      rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
      null !== rootFiber && (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
    }
    function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
      if (3 === sourceFiber.tag)
        captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
      else
        for (; null !== nearestMountedAncestor; ) {
          if (3 === nearestMountedAncestor.tag) {
            captureCommitPhaseErrorOnRoot(
              nearestMountedAncestor,
              sourceFiber,
              error
            );
            break;
          } else if (1 === nearestMountedAncestor.tag) {
            var instance = nearestMountedAncestor.stateNode;
            if ("function" === typeof nearestMountedAncestor.type.getDerivedStateFromError || "function" === typeof instance.componentDidCatch && (null === legacyErrorBoundariesThatAlreadyFailed || !legacyErrorBoundariesThatAlreadyFailed.has(instance))) {
              sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
              error = createClassErrorUpdate(2);
              instance = enqueueUpdate(nearestMountedAncestor, error, 2);
              null !== instance && (initializeClassErrorUpdate(
                error,
                instance,
                nearestMountedAncestor,
                sourceFiber
              ), markRootUpdated$1(instance, 2), ensureRootIsScheduled(instance));
              break;
            }
          }
          nearestMountedAncestor = nearestMountedAncestor.return;
        }
    }
    function attachPingListener(root2, wakeable, lanes) {
      var pingCache = root2.pingCache;
      if (null === pingCache) {
        pingCache = root2.pingCache = new PossiblyWeakMap();
        var threadIDs = /* @__PURE__ */ new Set();
        pingCache.set(wakeable, threadIDs);
      } else
        threadIDs = pingCache.get(wakeable), void 0 === threadIDs && (threadIDs = /* @__PURE__ */ new Set(), pingCache.set(wakeable, threadIDs));
      threadIDs.has(lanes) || (workInProgressRootDidAttachPingListener = true, threadIDs.add(lanes), root2 = pingSuspendedRoot.bind(null, root2, wakeable, lanes), wakeable.then(root2, root2));
    }
    function pingSuspendedRoot(root2, wakeable, pingedLanes) {
      var pingCache = root2.pingCache;
      null !== pingCache && pingCache.delete(wakeable);
      root2.pingedLanes |= root2.suspendedLanes & pingedLanes;
      root2.warmLanes &= ~pingedLanes;
      workInProgressRoot === root2 && (workInProgressRootRenderLanes & pingedLanes) === pingedLanes && (4 === workInProgressRootExitStatus || 3 === workInProgressRootExitStatus && (workInProgressRootRenderLanes & 62914560) === workInProgressRootRenderLanes && 300 > now() - globalMostRecentFallbackTime ? 0 === (executionContext & 2) && prepareFreshStack(root2, 0) : workInProgressRootPingedLanes |= pingedLanes, workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes && (workInProgressSuspendedRetryLanes = 0));
      ensureRootIsScheduled(root2);
    }
    function retryTimedOutBoundary(boundaryFiber, retryLane) {
      0 === retryLane && (retryLane = claimNextRetryLane());
      boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
      null !== boundaryFiber && (markRootUpdated$1(boundaryFiber, retryLane), ensureRootIsScheduled(boundaryFiber));
    }
    function retryDehydratedSuspenseBoundary(boundaryFiber) {
      var suspenseState = boundaryFiber.memoizedState, retryLane = 0;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function resolveRetryWakeable(boundaryFiber, wakeable) {
      var retryLane = 0;
      switch (boundaryFiber.tag) {
        case 13:
          var retryCache = boundaryFiber.stateNode;
          var suspenseState = boundaryFiber.memoizedState;
          null !== suspenseState && (retryLane = suspenseState.retryLane);
          break;
        case 19:
          retryCache = boundaryFiber.stateNode;
          break;
        case 22:
          retryCache = boundaryFiber.stateNode._retryCache;
          break;
        default:
          throw Error(formatProdErrorMessage(314));
      }
      null !== retryCache && retryCache.delete(wakeable);
      retryTimedOutBoundary(boundaryFiber, retryLane);
    }
    function scheduleCallback$1(priorityLevel, callback) {
      return scheduleCallback$3(priorityLevel, callback);
    }
    var firstScheduledRoot = null, lastScheduledRoot = null, didScheduleMicrotask = false, mightHavePendingSyncWork = false, isFlushingWork = false, currentEventTransitionLane = 0;
    function ensureRootIsScheduled(root2) {
      root2 !== lastScheduledRoot && null === root2.next && (null === lastScheduledRoot ? firstScheduledRoot = lastScheduledRoot = root2 : lastScheduledRoot = lastScheduledRoot.next = root2);
      mightHavePendingSyncWork = true;
      didScheduleMicrotask || (didScheduleMicrotask = true, scheduleImmediateTask(processRootScheduleInMicrotask));
    }
    function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
      if (!isFlushingWork && mightHavePendingSyncWork) {
        isFlushingWork = true;
        do {
          var didPerformSomeWork = false;
          for (var root$172 = firstScheduledRoot; null !== root$172; ) {
            if (0 !== syncTransitionLanes) {
              var pendingLanes = root$172.pendingLanes;
              if (0 === pendingLanes) var JSCompiler_inline_result = 0;
              else {
                var suspendedLanes = root$172.suspendedLanes, pingedLanes = root$172.pingedLanes;
                JSCompiler_inline_result = (1 << 31 - clz32(42 | syncTransitionLanes) + 1) - 1;
                JSCompiler_inline_result &= pendingLanes & ~(suspendedLanes & ~pingedLanes);
                JSCompiler_inline_result = JSCompiler_inline_result & 201326677 ? JSCompiler_inline_result & 201326677 | 1 : JSCompiler_inline_result ? JSCompiler_inline_result | 2 : 0;
              }
              0 !== JSCompiler_inline_result && (didPerformSomeWork = true, performSyncWorkOnRoot(root$172, JSCompiler_inline_result));
            } else
              JSCompiler_inline_result = workInProgressRootRenderLanes, JSCompiler_inline_result = getNextLanes(
                root$172,
                root$172 === workInProgressRoot ? JSCompiler_inline_result : 0
              ), 0 === (JSCompiler_inline_result & 3) || checkIfRootIsPrerendering(root$172, JSCompiler_inline_result) || (didPerformSomeWork = true, performSyncWorkOnRoot(root$172, JSCompiler_inline_result));
            root$172 = root$172.next;
          }
        } while (didPerformSomeWork);
        isFlushingWork = false;
      }
    }
    function processRootScheduleInMicrotask() {
      mightHavePendingSyncWork = didScheduleMicrotask = false;
      var syncTransitionLanes = 0;
      0 !== currentEventTransitionLane && (shouldAttemptEagerTransition() && (syncTransitionLanes = currentEventTransitionLane), currentEventTransitionLane = 0);
      for (var currentTime = now(), prev = null, root2 = firstScheduledRoot; null !== root2; ) {
        var next = root2.next, nextLanes = scheduleTaskForRootDuringMicrotask(root2, currentTime);
        if (0 === nextLanes)
          root2.next = null, null === prev ? firstScheduledRoot = next : prev.next = next, null === next && (lastScheduledRoot = prev);
        else if (prev = root2, 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
          mightHavePendingSyncWork = true;
        root2 = next;
      }
      flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
    }
    function scheduleTaskForRootDuringMicrotask(root2, currentTime) {
      for (var suspendedLanes = root2.suspendedLanes, pingedLanes = root2.pingedLanes, expirationTimes = root2.expirationTimes, lanes = root2.pendingLanes & -62914561; 0 < lanes; ) {
        var index$5 = 31 - clz32(lanes), lane = 1 << index$5, expirationTime = expirationTimes[index$5];
        if (-1 === expirationTime) {
          if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
            expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
        } else expirationTime <= currentTime && (root2.expiredLanes |= lane);
        lanes &= ~lane;
      }
      currentTime = workInProgressRoot;
      suspendedLanes = workInProgressRootRenderLanes;
      suspendedLanes = getNextLanes(
        root2,
        root2 === currentTime ? suspendedLanes : 0
      );
      pingedLanes = root2.callbackNode;
      if (0 === suspendedLanes || root2 === currentTime && 2 === workInProgressSuspendedReason || null !== root2.cancelPendingCommit)
        return null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes), root2.callbackNode = null, root2.callbackPriority = 0;
      if (0 === (suspendedLanes & 3) || checkIfRootIsPrerendering(root2, suspendedLanes)) {
        currentTime = suspendedLanes & -suspendedLanes;
        if (currentTime === root2.callbackPriority) return currentTime;
        null !== pingedLanes && cancelCallback$1(pingedLanes);
        switch (lanesToEventPriority(suspendedLanes)) {
          case 2:
          case 8:
            suspendedLanes = UserBlockingPriority;
            break;
          case 32:
            suspendedLanes = NormalPriority$1;
            break;
          case 268435456:
            suspendedLanes = IdlePriority;
            break;
          default:
            suspendedLanes = NormalPriority$1;
        }
        pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root2);
        suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
        root2.callbackPriority = currentTime;
        root2.callbackNode = suspendedLanes;
        return currentTime;
      }
      null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
      root2.callbackPriority = 2;
      root2.callbackNode = null;
      return 2;
    }
    function performWorkOnRootViaSchedulerTask(root2, didTimeout) {
      var originalCallbackNode = root2.callbackNode;
      if (flushPassiveEffects() && root2.callbackNode !== originalCallbackNode)
        return null;
      var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
      workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
        root2,
        root2 === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0
      );
      if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
      performWorkOnRoot(root2, workInProgressRootRenderLanes$jscomp$0, didTimeout);
      scheduleTaskForRootDuringMicrotask(root2, now());
      return null != root2.callbackNode && root2.callbackNode === originalCallbackNode ? performWorkOnRootViaSchedulerTask.bind(null, root2) : null;
    }
    function performSyncWorkOnRoot(root2, lanes) {
      if (flushPassiveEffects()) return null;
      performWorkOnRoot(root2, lanes, true);
    }
    function scheduleImmediateTask(cb) {
      scheduleMicrotask(function() {
        0 !== (executionContext & 6) ? scheduleCallback$3(ImmediatePriority, cb) : cb();
      });
    }
    function requestTransitionLane() {
      0 === currentEventTransitionLane && (currentEventTransitionLane = claimNextTransitionLane());
      return currentEventTransitionLane;
    }
    function coerceFormActionProp(actionProp) {
      return null == actionProp || "symbol" === typeof actionProp || "boolean" === typeof actionProp ? null : "function" === typeof actionProp ? actionProp : sanitizeURL("" + actionProp);
    }
    function createFormDataWithSubmitter(form, submitter) {
      var temp = submitter.ownerDocument.createElement("input");
      temp.name = submitter.name;
      temp.value = submitter.value;
      form.id && temp.setAttribute("form", form.id);
      submitter.parentNode.insertBefore(temp, submitter);
      form = new FormData(form);
      temp.parentNode.removeChild(temp);
      return form;
    }
    function extractEvents$1(dispatchQueue, domEventName, maybeTargetInst, nativeEvent, nativeEventTarget) {
      if ("submit" === domEventName && maybeTargetInst && maybeTargetInst.stateNode === nativeEventTarget) {
        var action = coerceFormActionProp(
          (nativeEventTarget[internalPropsKey] || null).action
        ), submitter = nativeEvent.submitter;
        submitter && (domEventName = (domEventName = submitter[internalPropsKey] || null) ? coerceFormActionProp(domEventName.formAction) : submitter.getAttribute("formAction"), null !== domEventName && (action = domEventName, submitter = null));
        var event = new SyntheticEvent(
          "action",
          "action",
          null,
          nativeEvent,
          nativeEventTarget
        );
        dispatchQueue.push({
          event,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (nativeEvent.defaultPrevented) {
                  if (0 !== currentEventTransitionLane) {
                    var formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget);
                    startHostTransition(
                      maybeTargetInst,
                      {
                        pending: true,
                        data: formData,
                        method: nativeEventTarget.method,
                        action
                      },
                      null,
                      formData
                    );
                  }
                } else
                  "function" === typeof action && (event.preventDefault(), formData = submitter ? createFormDataWithSubmitter(nativeEventTarget, submitter) : new FormData(nativeEventTarget), startHostTransition(
                    maybeTargetInst,
                    {
                      pending: true,
                      data: formData,
                      method: nativeEventTarget.method,
                      action
                    },
                    action,
                    formData
                  ));
              },
              currentTarget: nativeEventTarget
            }
          ]
        });
      }
    }
    for (var i$jscomp$inline_1439 = 0; i$jscomp$inline_1439 < simpleEventPluginEvents.length; i$jscomp$inline_1439++) {
      var eventName$jscomp$inline_1440 = simpleEventPluginEvents[i$jscomp$inline_1439], domEventName$jscomp$inline_1441 = eventName$jscomp$inline_1440.toLowerCase(), capitalizedEvent$jscomp$inline_1442 = eventName$jscomp$inline_1440[0].toUpperCase() + eventName$jscomp$inline_1440.slice(1);
      registerSimpleEvent(
        domEventName$jscomp$inline_1441,
        "on" + capitalizedEvent$jscomp$inline_1442
      );
    }
    registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
    registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
    registerSimpleEvent(ANIMATION_START, "onAnimationStart");
    registerSimpleEvent("dblclick", "onDoubleClick");
    registerSimpleEvent("focusin", "onFocus");
    registerSimpleEvent("focusout", "onBlur");
    registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
    registerSimpleEvent(TRANSITION_START, "onTransitionStart");
    registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
    registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
    registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
    registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
    registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
    registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
    registerTwoPhaseEvent(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(" ")
    );
    registerTwoPhaseEvent(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    registerTwoPhaseEvent("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]);
    registerTwoPhaseEvent(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    registerTwoPhaseEvent(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var mediaEventTypes = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), nonDelegatedEvents = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mediaEventTypes)
    );
    function processDispatchQueue(dispatchQueue, eventSystemFlags) {
      eventSystemFlags = 0 !== (eventSystemFlags & 4);
      for (var i = 0; i < dispatchQueue.length; i++) {
        var _dispatchQueue$i = dispatchQueue[i], event = _dispatchQueue$i.event;
        _dispatchQueue$i = _dispatchQueue$i.listeners;
        a: {
          var previousInstance = void 0;
          if (eventSystemFlags)
            for (var i$jscomp$0 = _dispatchQueue$i.length - 1; 0 <= i$jscomp$0; i$jscomp$0--) {
              var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
          else
            for (i$jscomp$0 = 0; i$jscomp$0 < _dispatchQueue$i.length; i$jscomp$0++) {
              _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
              instance = _dispatchListeners$i.instance;
              currentTarget = _dispatchListeners$i.currentTarget;
              _dispatchListeners$i = _dispatchListeners$i.listener;
              if (instance !== previousInstance && event.isPropagationStopped())
                break a;
              previousInstance = _dispatchListeners$i;
              event.currentTarget = currentTarget;
              try {
                previousInstance(event);
              } catch (error) {
                reportGlobalError(error);
              }
              event.currentTarget = null;
              previousInstance = instance;
            }
        }
      }
    }
    function listenToNonDelegatedEvent(domEventName, targetElement) {
      var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
      void 0 === JSCompiler_inline_result && (JSCompiler_inline_result = targetElement[internalEventHandlersKey] = /* @__PURE__ */ new Set());
      var listenerSetKey = domEventName + "__bubble";
      JSCompiler_inline_result.has(listenerSetKey) || (addTrappedEventListener(targetElement, domEventName, 2, false), JSCompiler_inline_result.add(listenerSetKey));
    }
    function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
      var eventSystemFlags = 0;
      isCapturePhaseListener && (eventSystemFlags |= 4);
      addTrappedEventListener(
        target,
        domEventName,
        eventSystemFlags,
        isCapturePhaseListener
      );
    }
    var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
    function listenToAllSupportedEvents(rootContainerElement) {
      if (!rootContainerElement[listeningMarker]) {
        rootContainerElement[listeningMarker] = true;
        allNativeEvents.forEach(function(domEventName) {
          "selectionchange" !== domEventName && (nonDelegatedEvents.has(domEventName) || listenToNativeEvent(domEventName, false, rootContainerElement), listenToNativeEvent(domEventName, true, rootContainerElement));
        });
        var ownerDocument = 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
        null === ownerDocument || ownerDocument[listeningMarker] || (ownerDocument[listeningMarker] = true, listenToNativeEvent("selectionchange", false, ownerDocument));
      }
    }
    function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener) {
      switch (getEventPriority(domEventName)) {
        case 2:
          var listenerWrapper = dispatchDiscreteEvent;
          break;
        case 8:
          listenerWrapper = dispatchContinuousEvent;
          break;
        default:
          listenerWrapper = dispatchEvent;
      }
      eventSystemFlags = listenerWrapper.bind(
        null,
        domEventName,
        eventSystemFlags,
        targetContainer
      );
      listenerWrapper = void 0;
      !passiveBrowserEventsSupported || "touchstart" !== domEventName && "touchmove" !== domEventName && "wheel" !== domEventName || (listenerWrapper = true);
      isCapturePhaseListener ? void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        capture: true,
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, true) : void 0 !== listenerWrapper ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
        passive: listenerWrapper
      }) : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
    }
    function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst$jscomp$0, targetContainer) {
      var ancestorInst = targetInst$jscomp$0;
      if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2) && null !== targetInst$jscomp$0)
        a: for (; ; ) {
          if (null === targetInst$jscomp$0) return;
          var nodeTag = targetInst$jscomp$0.tag;
          if (3 === nodeTag || 4 === nodeTag) {
            var container = targetInst$jscomp$0.stateNode.containerInfo;
            if (container === targetContainer || 8 === container.nodeType && container.parentNode === targetContainer)
              break;
            if (4 === nodeTag)
              for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
                var grandTag = nodeTag.tag;
                if (3 === grandTag || 4 === grandTag) {
                  if (grandTag = nodeTag.stateNode.containerInfo, grandTag === targetContainer || 8 === grandTag.nodeType && grandTag.parentNode === targetContainer)
                    return;
                }
                nodeTag = nodeTag.return;
              }
            for (; null !== container; ) {
              nodeTag = getClosestInstanceFromNode(container);
              if (null === nodeTag) return;
              grandTag = nodeTag.tag;
              if (5 === grandTag || 6 === grandTag || 26 === grandTag || 27 === grandTag) {
                targetInst$jscomp$0 = ancestorInst = nodeTag;
                continue a;
              }
              container = container.parentNode;
            }
          }
          targetInst$jscomp$0 = targetInst$jscomp$0.return;
        }
      batchedUpdates$1(function() {
        var targetInst = ancestorInst, nativeEventTarget = getEventTarget(nativeEvent), dispatchQueue = [];
        a: {
          var reactName = topLevelEventsToReactNames.get(domEventName);
          if (void 0 !== reactName) {
            var SyntheticEventCtor = SyntheticEvent, reactEventType = domEventName;
            switch (domEventName) {
              case "keypress":
                if (0 === getEventCharCode(nativeEvent)) break a;
              case "keydown":
              case "keyup":
                SyntheticEventCtor = SyntheticKeyboardEvent;
                break;
              case "focusin":
                reactEventType = "focus";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "focusout":
                reactEventType = "blur";
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "beforeblur":
              case "afterblur":
                SyntheticEventCtor = SyntheticFocusEvent;
                break;
              case "click":
                if (2 === nativeEvent.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                SyntheticEventCtor = SyntheticMouseEvent;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                SyntheticEventCtor = SyntheticDragEvent;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                SyntheticEventCtor = SyntheticTouchEvent;
                break;
              case ANIMATION_END:
              case ANIMATION_ITERATION:
              case ANIMATION_START:
                SyntheticEventCtor = SyntheticAnimationEvent;
                break;
              case TRANSITION_END:
                SyntheticEventCtor = SyntheticTransitionEvent;
                break;
              case "scroll":
              case "scrollend":
                SyntheticEventCtor = SyntheticUIEvent;
                break;
              case "wheel":
                SyntheticEventCtor = SyntheticWheelEvent;
                break;
              case "copy":
              case "cut":
              case "paste":
                SyntheticEventCtor = SyntheticClipboardEvent;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                SyntheticEventCtor = SyntheticPointerEvent;
                break;
              case "toggle":
              case "beforetoggle":
                SyntheticEventCtor = SyntheticToggleEvent;
            }
            var inCapturePhase = 0 !== (eventSystemFlags & 4), accumulateTargetOnly = !inCapturePhase && ("scroll" === domEventName || "scrollend" === domEventName), reactEventName = inCapturePhase ? null !== reactName ? reactName + "Capture" : null : reactName;
            inCapturePhase = [];
            for (var instance = targetInst, lastHostComponent; null !== instance; ) {
              var _instance = instance;
              lastHostComponent = _instance.stateNode;
              _instance = _instance.tag;
              5 !== _instance && 26 !== _instance && 27 !== _instance || null === lastHostComponent || null === reactEventName || (_instance = getListener(instance, reactEventName), null != _instance && inCapturePhase.push(
                createDispatchListener(instance, _instance, lastHostComponent)
              ));
              if (accumulateTargetOnly) break;
              instance = instance.return;
            }
            0 < inCapturePhase.length && (reactName = new SyntheticEventCtor(
              reactName,
              reactEventType,
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
          }
        }
        if (0 === (eventSystemFlags & 7)) {
          a: {
            reactName = "mouseover" === domEventName || "pointerover" === domEventName;
            SyntheticEventCtor = "mouseout" === domEventName || "pointerout" === domEventName;
            if (reactName && nativeEvent !== currentReplayingEvent && (reactEventType = nativeEvent.relatedTarget || nativeEvent.fromElement) && (getClosestInstanceFromNode(reactEventType) || reactEventType[internalContainerInstanceKey]))
              break a;
            if (SyntheticEventCtor || reactName) {
              reactName = nativeEventTarget.window === nativeEventTarget ? nativeEventTarget : (reactName = nativeEventTarget.ownerDocument) ? reactName.defaultView || reactName.parentWindow : window;
              if (SyntheticEventCtor) {
                if (reactEventType = nativeEvent.relatedTarget || nativeEvent.toElement, SyntheticEventCtor = targetInst, reactEventType = reactEventType ? getClosestInstanceFromNode(reactEventType) : null, null !== reactEventType && (accumulateTargetOnly = getNearestMountedFiber(reactEventType), inCapturePhase = reactEventType.tag, reactEventType !== accumulateTargetOnly || 5 !== inCapturePhase && 27 !== inCapturePhase && 6 !== inCapturePhase))
                  reactEventType = null;
              } else SyntheticEventCtor = null, reactEventType = targetInst;
              if (SyntheticEventCtor !== reactEventType) {
                inCapturePhase = SyntheticMouseEvent;
                _instance = "onMouseLeave";
                reactEventName = "onMouseEnter";
                instance = "mouse";
                if ("pointerout" === domEventName || "pointerover" === domEventName)
                  inCapturePhase = SyntheticPointerEvent, _instance = "onPointerLeave", reactEventName = "onPointerEnter", instance = "pointer";
                accumulateTargetOnly = null == SyntheticEventCtor ? reactName : getNodeFromInstance(SyntheticEventCtor);
                lastHostComponent = null == reactEventType ? reactName : getNodeFromInstance(reactEventType);
                reactName = new inCapturePhase(
                  _instance,
                  instance + "leave",
                  SyntheticEventCtor,
                  nativeEvent,
                  nativeEventTarget
                );
                reactName.target = accumulateTargetOnly;
                reactName.relatedTarget = lastHostComponent;
                _instance = null;
                getClosestInstanceFromNode(nativeEventTarget) === targetInst && (inCapturePhase = new inCapturePhase(
                  reactEventName,
                  instance + "enter",
                  reactEventType,
                  nativeEvent,
                  nativeEventTarget
                ), inCapturePhase.target = lastHostComponent, inCapturePhase.relatedTarget = accumulateTargetOnly, _instance = inCapturePhase);
                accumulateTargetOnly = _instance;
                if (SyntheticEventCtor && reactEventType)
                  b: {
                    inCapturePhase = SyntheticEventCtor;
                    reactEventName = reactEventType;
                    instance = 0;
                    for (lastHostComponent = inCapturePhase; lastHostComponent; lastHostComponent = getParent(lastHostComponent))
                      instance++;
                    lastHostComponent = 0;
                    for (_instance = reactEventName; _instance; _instance = getParent(_instance))
                      lastHostComponent++;
                    for (; 0 < instance - lastHostComponent; )
                      inCapturePhase = getParent(inCapturePhase), instance--;
                    for (; 0 < lastHostComponent - instance; )
                      reactEventName = getParent(reactEventName), lastHostComponent--;
                    for (; instance--; ) {
                      if (inCapturePhase === reactEventName || null !== reactEventName && inCapturePhase === reactEventName.alternate)
                        break b;
                      inCapturePhase = getParent(inCapturePhase);
                      reactEventName = getParent(reactEventName);
                    }
                    inCapturePhase = null;
                  }
                else inCapturePhase = null;
                null !== SyntheticEventCtor && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  reactName,
                  SyntheticEventCtor,
                  inCapturePhase,
                  false
                );
                null !== reactEventType && null !== accumulateTargetOnly && accumulateEnterLeaveListenersForEvent(
                  dispatchQueue,
                  accumulateTargetOnly,
                  reactEventType,
                  inCapturePhase,
                  true
                );
              }
            }
          }
          a: {
            reactName = targetInst ? getNodeFromInstance(targetInst) : window;
            SyntheticEventCtor = reactName.nodeName && reactName.nodeName.toLowerCase();
            if ("select" === SyntheticEventCtor || "input" === SyntheticEventCtor && "file" === reactName.type)
              var getTargetInstFunc = getTargetInstForChangeEvent;
            else if (isTextInputElement(reactName))
              if (isInputEventSupported)
                getTargetInstFunc = getTargetInstForInputOrChangeEvent;
              else {
                getTargetInstFunc = getTargetInstForInputEventPolyfill;
                var handleEventFunc = handleEventsForInputEventPolyfill;
              }
            else
              SyntheticEventCtor = reactName.nodeName, !SyntheticEventCtor || "input" !== SyntheticEventCtor.toLowerCase() || "checkbox" !== reactName.type && "radio" !== reactName.type ? targetInst && isCustomElement(targetInst.elementType) && (getTargetInstFunc = getTargetInstForChangeEvent) : getTargetInstFunc = getTargetInstForClickEvent;
            if (getTargetInstFunc && (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))) {
              createAndAccumulateChangeEvent(
                dispatchQueue,
                getTargetInstFunc,
                nativeEvent,
                nativeEventTarget
              );
              break a;
            }
            handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
            "focusout" === domEventName && targetInst && "number" === reactName.type && null != targetInst.memoizedProps.value && setDefaultValue(reactName, "number", reactName.value);
          }
          handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
          switch (domEventName) {
            case "focusin":
              if (isTextInputElement(handleEventFunc) || "true" === handleEventFunc.contentEditable)
                activeElement = handleEventFunc, activeElementInst = targetInst, lastSelection = null;
              break;
            case "focusout":
              lastSelection = activeElementInst = activeElement = null;
              break;
            case "mousedown":
              mouseDown = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              mouseDown = false;
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
              break;
            case "selectionchange":
              if (skipSelectionChangeEvent) break;
            case "keydown":
            case "keyup":
              constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          }
          var fallbackData;
          if (canUseCompositionEvent)
            b: {
              switch (domEventName) {
                case "compositionstart":
                  var eventType = "onCompositionStart";
                  break b;
                case "compositionend":
                  eventType = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  eventType = "onCompositionUpdate";
                  break b;
              }
              eventType = void 0;
            }
          else
            isComposing ? isFallbackCompositionEnd(domEventName, nativeEvent) && (eventType = "onCompositionEnd") : "keydown" === domEventName && 229 === nativeEvent.keyCode && (eventType = "onCompositionStart");
          eventType && (useFallbackCompositionData && "ko" !== nativeEvent.locale && (isComposing || "onCompositionStart" !== eventType ? "onCompositionEnd" === eventType && isComposing && (fallbackData = getData()) : (root = nativeEventTarget, startText = "value" in root ? root.value : root.textContent, isComposing = true)), handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType), 0 < handleEventFunc.length && (eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          ), dispatchQueue.push({ event: eventType, listeners: handleEventFunc }), fallbackData ? eventType.data = fallbackData : (fallbackData = getDataFromCustomEvent(nativeEvent), null !== fallbackData && (eventType.data = fallbackData))));
          if (fallbackData = canUseTextInputEvent ? getNativeBeforeInputChars(domEventName, nativeEvent) : getFallbackBeforeInputChars(domEventName, nativeEvent))
            eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput"), 0 < eventType.length && (handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            ), dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }), handleEventFunc.data = fallbackData);
          extractEvents$1(
            dispatchQueue,
            domEventName,
            targetInst,
            nativeEvent,
            nativeEventTarget
          );
        }
        processDispatchQueue(dispatchQueue, eventSystemFlags);
      });
    }
    function createDispatchListener(instance, listener, currentTarget) {
      return {
        instance,
        listener,
        currentTarget
      };
    }
    function accumulateTwoPhaseListeners(targetFiber, reactName) {
      for (var captureName = reactName + "Capture", listeners = []; null !== targetFiber; ) {
        var _instance2 = targetFiber, stateNode = _instance2.stateNode;
        _instance2 = _instance2.tag;
        5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2 || null === stateNode || (_instance2 = getListener(targetFiber, captureName), null != _instance2 && listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ), _instance2 = getListener(targetFiber, reactName), null != _instance2 && listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
        targetFiber = targetFiber.return;
      }
      return listeners;
    }
    function getParent(inst) {
      if (null === inst) return null;
      do
        inst = inst.return;
      while (inst && 5 !== inst.tag && 27 !== inst.tag);
      return inst ? inst : null;
    }
    function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
      for (var registrationName = event._reactName, listeners = []; null !== target && target !== common; ) {
        var _instance3 = target, alternate = _instance3.alternate, stateNode = _instance3.stateNode;
        _instance3 = _instance3.tag;
        if (null !== alternate && alternate === common) break;
        5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3 || null === stateNode || (alternate = stateNode, inCapturePhase ? (stateNode = getListener(target, registrationName), null != stateNode && listeners.unshift(
          createDispatchListener(target, stateNode, alternate)
        )) : inCapturePhase || (stateNode = getListener(target, registrationName), null != stateNode && listeners.push(
          createDispatchListener(target, stateNode, alternate)
        )));
        target = target.return;
      }
      0 !== listeners.length && dispatchQueue.push({ event, listeners });
    }
    var NORMALIZE_NEWLINES_REGEX = /\r\n?/g, NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
    function normalizeMarkupForTextOrAttribute(markup) {
      return ("string" === typeof markup ? markup : "" + markup).replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
    }
    function checkForUnmatchedText(serverText, clientText) {
      clientText = normalizeMarkupForTextOrAttribute(clientText);
      return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
    }
    function noop$12() {
    }
    function setProp(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "children":
          "string" === typeof value ? "body" === tag || "textarea" === tag && "" === value || setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && "body" !== tag && setTextContent(domElement, "" + value);
          break;
        case "className":
          setValueForKnownAttribute(domElement, "class", value);
          break;
        case "tabIndex":
          setValueForKnownAttribute(domElement, "tabindex", value);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          setValueForKnownAttribute(domElement, key, value);
          break;
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "data":
          if ("object" !== tag) {
            setValueForKnownAttribute(domElement, "data", value);
            break;
          }
        case "src":
        case "href":
          if ("" === value && ("a" !== tag || "href" !== key)) {
            domElement.removeAttribute(key);
            break;
          }
          if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "action":
        case "formAction":
          if ("function" === typeof value) {
            domElement.setAttribute(
              key,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            "function" === typeof prevValue && ("formAction" === key ? ("input" !== tag && setProp(domElement, tag, "name", props.name, props, null), setProp(
              domElement,
              tag,
              "formEncType",
              props.formEncType,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formMethod",
              props.formMethod,
              props,
              null
            ), setProp(
              domElement,
              tag,
              "formTarget",
              props.formTarget,
              props,
              null
            )) : (setProp(domElement, tag, "encType", props.encType, props, null), setProp(domElement, tag, "method", props.method, props, null), setProp(domElement, tag, "target", props.target, props, null)));
          if (null == value || "symbol" === typeof value || "boolean" === typeof value) {
            domElement.removeAttribute(key);
            break;
          }
          value = sanitizeURL("" + value);
          domElement.setAttribute(key, value);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$12);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "multiple":
          domElement.multiple = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "muted":
          domElement.muted = value && "function" !== typeof value && "symbol" !== typeof value;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (null == value || "function" === typeof value || "boolean" === typeof value || "symbol" === typeof value) {
            domElement.removeAttribute("xlink:href");
            break;
          }
          key = sanitizeURL("" + value);
          domElement.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            key
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "" + value) : domElement.removeAttribute(key);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, "") : domElement.removeAttribute(key);
          break;
        case "capture":
        case "download":
          true === value ? domElement.setAttribute(key, "") : false !== value && null != value && "function" !== typeof value && "symbol" !== typeof value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != value && "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value ? domElement.setAttribute(key, value) : domElement.removeAttribute(key);
          break;
        case "rowSpan":
        case "start":
          null == value || "function" === typeof value || "symbol" === typeof value || isNaN(value) ? domElement.removeAttribute(key) : domElement.setAttribute(key, value);
          break;
        case "popover":
          listenToNonDelegatedEvent("beforetoggle", domElement);
          listenToNonDelegatedEvent("toggle", domElement);
          setValueForAttribute(domElement, "popover", value);
          break;
        case "xlinkActuate":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:actuate",
            value
          );
          break;
        case "xlinkArcrole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:arcrole",
            value
          );
          break;
        case "xlinkRole":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:role",
            value
          );
          break;
        case "xlinkShow":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:show",
            value
          );
          break;
        case "xlinkTitle":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:title",
            value
          );
          break;
        case "xlinkType":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/1999/xlink",
            "xlink:type",
            value
          );
          break;
        case "xmlBase":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:base",
            value
          );
          break;
        case "xmlLang":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:lang",
            value
          );
          break;
        case "xmlSpace":
          setValueForNamespacedAttribute(
            domElement,
            "http://www.w3.org/XML/1998/namespace",
            "xml:space",
            value
          );
          break;
        case "is":
          setValueForAttribute(domElement, "is", value);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!(2 < key.length) || "o" !== key[0] && "O" !== key[0] || "n" !== key[1] && "N" !== key[1])
            key = aliases.get(key) || key, setValueForAttribute(domElement, key, value);
      }
    }
    function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
      switch (key) {
        case "style":
          setValueForStyles(domElement, value, prevValue);
          break;
        case "dangerouslySetInnerHTML":
          if (null != value) {
            if ("object" !== typeof value || !("__html" in value))
              throw Error(formatProdErrorMessage(61));
            key = value.__html;
            if (null != key) {
              if (null != props.children) throw Error(formatProdErrorMessage(60));
              domElement.innerHTML = key;
            }
          }
          break;
        case "children":
          "string" === typeof value ? setTextContent(domElement, value) : ("number" === typeof value || "bigint" === typeof value) && setTextContent(domElement, "" + value);
          break;
        case "onScroll":
          null != value && listenToNonDelegatedEvent("scroll", domElement);
          break;
        case "onScrollEnd":
          null != value && listenToNonDelegatedEvent("scrollend", domElement);
          break;
        case "onClick":
          null != value && (domElement.onclick = noop$12);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!registrationNameDependencies.hasOwnProperty(key))
            a: {
              if ("o" === key[0] && "n" === key[1] && (props = key.endsWith("Capture"), tag = key.slice(2, props ? key.length - 7 : void 0), prevValue = domElement[internalPropsKey] || null, prevValue = null != prevValue ? prevValue[key] : null, "function" === typeof prevValue && domElement.removeEventListener(tag, prevValue, props), "function" === typeof value)) {
                "function" !== typeof prevValue && null !== prevValue && (key in domElement ? domElement[key] = null : domElement.hasAttribute(key) && domElement.removeAttribute(key));
                domElement.addEventListener(tag, value, props);
                break a;
              }
              key in domElement ? domElement[key] = value : true === value ? domElement.setAttribute(key, "") : setValueForAttribute(domElement, key, value);
            }
      }
    }
    function setInitialProperties(domElement, tag, props) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          var hasSrc = false, hasSrcSet = false, propKey;
          for (propKey in props)
            if (props.hasOwnProperty(propKey)) {
              var propValue = props[propKey];
              if (null != propValue)
                switch (propKey) {
                  case "src":
                    hasSrc = true;
                    break;
                  case "srcSet":
                    hasSrcSet = true;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(formatProdErrorMessage(137, tag));
                  default:
                    setProp(domElement, tag, propKey, propValue, props, null);
                }
            }
          hasSrcSet && setProp(domElement, tag, "srcSet", props.srcSet, props, null);
          hasSrc && setProp(domElement, tag, "src", props.src, props, null);
          return;
        case "input":
          listenToNonDelegatedEvent("invalid", domElement);
          var defaultValue = propKey = propValue = hasSrcSet = null, checked = null, defaultChecked = null;
          for (hasSrc in props)
            if (props.hasOwnProperty(hasSrc)) {
              var propValue$186 = props[hasSrc];
              if (null != propValue$186)
                switch (hasSrc) {
                  case "name":
                    hasSrcSet = propValue$186;
                    break;
                  case "type":
                    propValue = propValue$186;
                    break;
                  case "checked":
                    checked = propValue$186;
                    break;
                  case "defaultChecked":
                    defaultChecked = propValue$186;
                    break;
                  case "value":
                    propKey = propValue$186;
                    break;
                  case "defaultValue":
                    defaultValue = propValue$186;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != propValue$186)
                      throw Error(formatProdErrorMessage(137, tag));
                    break;
                  default:
                    setProp(domElement, tag, hasSrc, propValue$186, props, null);
                }
            }
          initInput(
            domElement,
            propKey,
            defaultValue,
            checked,
            defaultChecked,
            propValue,
            hasSrcSet,
            false
          );
          track(domElement);
          return;
        case "select":
          listenToNonDelegatedEvent("invalid", domElement);
          hasSrc = propValue = propKey = null;
          for (hasSrcSet in props)
            if (props.hasOwnProperty(hasSrcSet) && (defaultValue = props[hasSrcSet], null != defaultValue))
              switch (hasSrcSet) {
                case "value":
                  propKey = defaultValue;
                  break;
                case "defaultValue":
                  propValue = defaultValue;
                  break;
                case "multiple":
                  hasSrc = defaultValue;
                default:
                  setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
              }
          tag = propKey;
          props = propValue;
          domElement.multiple = !!hasSrc;
          null != tag ? updateOptions(domElement, !!hasSrc, tag, false) : null != props && updateOptions(domElement, !!hasSrc, props, true);
          return;
        case "textarea":
          listenToNonDelegatedEvent("invalid", domElement);
          propKey = hasSrcSet = hasSrc = null;
          for (propValue in props)
            if (props.hasOwnProperty(propValue) && (defaultValue = props[propValue], null != defaultValue))
              switch (propValue) {
                case "value":
                  hasSrc = defaultValue;
                  break;
                case "defaultValue":
                  hasSrcSet = defaultValue;
                  break;
                case "children":
                  propKey = defaultValue;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != defaultValue) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  setProp(domElement, tag, propValue, defaultValue, props, null);
              }
          initTextarea(domElement, hasSrc, hasSrcSet, propKey);
          track(domElement);
          return;
        case "option":
          for (checked in props)
            if (props.hasOwnProperty(checked) && (hasSrc = props[checked], null != hasSrc))
              switch (checked) {
                case "selected":
                  domElement.selected = hasSrc && "function" !== typeof hasSrc && "symbol" !== typeof hasSrc;
                  break;
                default:
                  setProp(domElement, tag, checked, hasSrc, props, null);
              }
          return;
        case "dialog":
          listenToNonDelegatedEvent("cancel", domElement);
          listenToNonDelegatedEvent("close", domElement);
          break;
        case "iframe":
        case "object":
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "video":
        case "audio":
          for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
            listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
          break;
        case "image":
          listenToNonDelegatedEvent("error", domElement);
          listenToNonDelegatedEvent("load", domElement);
          break;
        case "details":
          listenToNonDelegatedEvent("toggle", domElement);
          break;
        case "embed":
        case "source":
        case "link":
          listenToNonDelegatedEvent("error", domElement), listenToNonDelegatedEvent("load", domElement);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (defaultChecked in props)
            if (props.hasOwnProperty(defaultChecked) && (hasSrc = props[defaultChecked], null != hasSrc))
              switch (defaultChecked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(formatProdErrorMessage(137, tag));
                default:
                  setProp(domElement, tag, defaultChecked, hasSrc, props, null);
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (propValue$186 in props)
              props.hasOwnProperty(propValue$186) && (hasSrc = props[propValue$186], void 0 !== hasSrc && setPropOnCustomElement(
                domElement,
                tag,
                propValue$186,
                hasSrc,
                props,
                void 0
              ));
            return;
          }
      }
      for (defaultValue in props)
        props.hasOwnProperty(defaultValue) && (hasSrc = props[defaultValue], null != hasSrc && setProp(domElement, tag, defaultValue, hasSrc, props, null));
    }
    function updateProperties(domElement, tag, lastProps, nextProps) {
      switch (tag) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var name = null, type = null, value = null, defaultValue = null, lastDefaultValue = null, checked = null, defaultChecked = null;
          for (propKey in lastProps) {
            var lastProp = lastProps[propKey];
            if (lastProps.hasOwnProperty(propKey) && null != lastProp)
              switch (propKey) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  lastDefaultValue = lastProp;
                default:
                  nextProps.hasOwnProperty(propKey) || setProp(domElement, tag, propKey, null, nextProps, lastProp);
              }
          }
          for (var propKey$203 in nextProps) {
            var propKey = nextProps[propKey$203];
            lastProp = lastProps[propKey$203];
            if (nextProps.hasOwnProperty(propKey$203) && (null != propKey || null != lastProp))
              switch (propKey$203) {
                case "type":
                  type = propKey;
                  break;
                case "name":
                  name = propKey;
                  break;
                case "checked":
                  checked = propKey;
                  break;
                case "defaultChecked":
                  defaultChecked = propKey;
                  break;
                case "value":
                  value = propKey;
                  break;
                case "defaultValue":
                  defaultValue = propKey;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  propKey !== lastProp && setProp(
                    domElement,
                    tag,
                    propKey$203,
                    propKey,
                    nextProps,
                    lastProp
                  );
              }
          }
          updateInput(
            domElement,
            value,
            defaultValue,
            lastDefaultValue,
            checked,
            defaultChecked,
            type,
            name
          );
          return;
        case "select":
          propKey = value = defaultValue = propKey$203 = null;
          for (type in lastProps)
            if (lastDefaultValue = lastProps[type], lastProps.hasOwnProperty(type) && null != lastDefaultValue)
              switch (type) {
                case "value":
                  break;
                case "multiple":
                  propKey = lastDefaultValue;
                default:
                  nextProps.hasOwnProperty(type) || setProp(
                    domElement,
                    tag,
                    type,
                    null,
                    nextProps,
                    lastDefaultValue
                  );
              }
          for (name in nextProps)
            if (type = nextProps[name], lastDefaultValue = lastProps[name], nextProps.hasOwnProperty(name) && (null != type || null != lastDefaultValue))
              switch (name) {
                case "value":
                  propKey$203 = type;
                  break;
                case "defaultValue":
                  defaultValue = type;
                  break;
                case "multiple":
                  value = type;
                default:
                  type !== lastDefaultValue && setProp(
                    domElement,
                    tag,
                    name,
                    type,
                    nextProps,
                    lastDefaultValue
                  );
              }
          tag = defaultValue;
          lastProps = value;
          nextProps = propKey;
          null != propKey$203 ? updateOptions(domElement, !!lastProps, propKey$203, false) : !!nextProps !== !!lastProps && (null != tag ? updateOptions(domElement, !!lastProps, tag, true) : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
          return;
        case "textarea":
          propKey = propKey$203 = null;
          for (defaultValue in lastProps)
            if (name = lastProps[defaultValue], lastProps.hasOwnProperty(defaultValue) && null != name && !nextProps.hasOwnProperty(defaultValue))
              switch (defaultValue) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  setProp(domElement, tag, defaultValue, null, nextProps, name);
              }
          for (value in nextProps)
            if (name = nextProps[value], type = lastProps[value], nextProps.hasOwnProperty(value) && (null != name || null != type))
              switch (value) {
                case "value":
                  propKey$203 = name;
                  break;
                case "defaultValue":
                  propKey = name;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != name) throw Error(formatProdErrorMessage(91));
                  break;
                default:
                  name !== type && setProp(domElement, tag, value, name, nextProps, type);
              }
          updateTextarea(domElement, propKey$203, propKey);
          return;
        case "option":
          for (var propKey$219 in lastProps)
            if (propKey$203 = lastProps[propKey$219], lastProps.hasOwnProperty(propKey$219) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$219))
              switch (propKey$219) {
                case "selected":
                  domElement.selected = false;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    propKey$219,
                    null,
                    nextProps,
                    propKey$203
                  );
              }
          for (lastDefaultValue in nextProps)
            if (propKey$203 = nextProps[lastDefaultValue], propKey = lastProps[lastDefaultValue], nextProps.hasOwnProperty(lastDefaultValue) && propKey$203 !== propKey && (null != propKey$203 || null != propKey))
              switch (lastDefaultValue) {
                case "selected":
                  domElement.selected = propKey$203 && "function" !== typeof propKey$203 && "symbol" !== typeof propKey$203;
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    lastDefaultValue,
                    propKey$203,
                    nextProps,
                    propKey
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var propKey$224 in lastProps)
            propKey$203 = lastProps[propKey$224], lastProps.hasOwnProperty(propKey$224) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$224) && setProp(domElement, tag, propKey$224, null, nextProps, propKey$203);
          for (checked in nextProps)
            if (propKey$203 = nextProps[checked], propKey = lastProps[checked], nextProps.hasOwnProperty(checked) && propKey$203 !== propKey && (null != propKey$203 || null != propKey))
              switch (checked) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (null != propKey$203)
                    throw Error(formatProdErrorMessage(137, tag));
                  break;
                default:
                  setProp(
                    domElement,
                    tag,
                    checked,
                    propKey$203,
                    nextProps,
                    propKey
                  );
              }
          return;
        default:
          if (isCustomElement(tag)) {
            for (var propKey$229 in lastProps)
              propKey$203 = lastProps[propKey$229], lastProps.hasOwnProperty(propKey$229) && void 0 !== propKey$203 && !nextProps.hasOwnProperty(propKey$229) && setPropOnCustomElement(
                domElement,
                tag,
                propKey$229,
                void 0,
                nextProps,
                propKey$203
              );
            for (defaultChecked in nextProps)
              propKey$203 = nextProps[defaultChecked], propKey = lastProps[defaultChecked], !nextProps.hasOwnProperty(defaultChecked) || propKey$203 === propKey || void 0 === propKey$203 && void 0 === propKey || setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$203,
                nextProps,
                propKey
              );
            return;
          }
      }
      for (var propKey$234 in lastProps)
        propKey$203 = lastProps[propKey$234], lastProps.hasOwnProperty(propKey$234) && null != propKey$203 && !nextProps.hasOwnProperty(propKey$234) && setProp(domElement, tag, propKey$234, null, nextProps, propKey$203);
      for (lastProp in nextProps)
        propKey$203 = nextProps[lastProp], propKey = lastProps[lastProp], !nextProps.hasOwnProperty(lastProp) || propKey$203 === propKey || null == propKey$203 && null == propKey || setProp(domElement, tag, lastProp, propKey$203, nextProps, propKey);
    }
    var eventsEnabled = null, selectionInformation = null;
    function getOwnerDocumentFromRootContainer(rootContainerElement) {
      return 9 === rootContainerElement.nodeType ? rootContainerElement : rootContainerElement.ownerDocument;
    }
    function getOwnHostContext(namespaceURI) {
      switch (namespaceURI) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function getChildHostContextProd(parentNamespace, type) {
      if (0 === parentNamespace)
        switch (type) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === parentNamespace && "foreignObject" === type ? 0 : parentNamespace;
    }
    function shouldSetTextContent(type, props) {
      return "textarea" === type || "noscript" === type || "string" === typeof props.children || "number" === typeof props.children || "bigint" === typeof props.children || "object" === typeof props.dangerouslySetInnerHTML && null !== props.dangerouslySetInnerHTML && null != props.dangerouslySetInnerHTML.__html;
    }
    var currentPopstateTransitionEvent = null;
    function shouldAttemptEagerTransition() {
      var event = window.event;
      if (event && "popstate" === event.type) {
        if (event === currentPopstateTransitionEvent) return false;
        currentPopstateTransitionEvent = event;
        return true;
      }
      currentPopstateTransitionEvent = null;
      return false;
    }
    var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0, cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0, localPromise = "function" === typeof Promise ? Promise : void 0, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof localPromise ? function(callback) {
      return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    } : scheduleTimeout;
    function handleErrorInNextTick(error) {
      setTimeout(function() {
        throw error;
      });
    }
    function clearSuspenseBoundary(parentInstance, suspenseInstance) {
      var node = suspenseInstance, depth = 0;
      do {
        var nextNode = node.nextSibling;
        parentInstance.removeChild(node);
        if (nextNode && 8 === nextNode.nodeType)
          if (node = nextNode.data, "/$" === node) {
            if (0 === depth) {
              parentInstance.removeChild(nextNode);
              retryIfBlockedOn(suspenseInstance);
              return;
            }
            depth--;
          } else "$" !== node && "$?" !== node && "$!" !== node || depth++;
        node = nextNode;
      } while (node);
      retryIfBlockedOn(suspenseInstance);
    }
    function clearContainerSparingly(container) {
      var nextNode = container.firstChild;
      nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
      for (; nextNode; ) {
        var node = nextNode;
        nextNode = nextNode.nextSibling;
        switch (node.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            clearContainerSparingly(node);
            detachDeletedInstance(node);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === node.rel.toLowerCase()) continue;
        }
        container.removeChild(node);
      }
    }
    function canHydrateInstance(instance, type, props, inRootOrSingleton) {
      for (; 1 === instance.nodeType; ) {
        var anyProps = props;
        if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
          if (!inRootOrSingleton && ("INPUT" !== instance.nodeName || "hidden" !== instance.type))
            break;
        } else if (!inRootOrSingleton)
          if ("input" === type && "hidden" === instance.type) {
            var name = null == anyProps.name ? null : "" + anyProps.name;
            if ("hidden" === anyProps.type && instance.getAttribute("name") === name)
              return instance;
          } else return instance;
        else if (!instance[internalHoistableMarker])
          switch (type) {
            case "meta":
              if (!instance.hasAttribute("itemprop")) break;
              return instance;
            case "link":
              name = instance.getAttribute("rel");
              if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
                break;
              else if (name !== anyProps.rel || instance.getAttribute("href") !== (null == anyProps.href ? null : anyProps.href) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) || instance.getAttribute("title") !== (null == anyProps.title ? null : anyProps.title))
                break;
              return instance;
            case "style":
              if (instance.hasAttribute("data-precedence")) break;
              return instance;
            case "script":
              name = instance.getAttribute("src");
              if ((name !== (null == anyProps.src ? null : anyProps.src) || instance.getAttribute("type") !== (null == anyProps.type ? null : anyProps.type) || instance.getAttribute("crossorigin") !== (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) && name && instance.hasAttribute("async") && !instance.hasAttribute("itemprop"))
                break;
              return instance;
            default:
              return instance;
          }
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) break;
      }
      return null;
    }
    function canHydrateTextInstance(instance, text, inRootOrSingleton) {
      if ("" === text) return null;
      for (; 3 !== instance.nodeType; ) {
        if ((1 !== instance.nodeType || "INPUT" !== instance.nodeName || "hidden" !== instance.type) && !inRootOrSingleton)
          return null;
        instance = getNextHydratable(instance.nextSibling);
        if (null === instance) return null;
      }
      return instance;
    }
    function getNextHydratable(node) {
      for (; null != node; node = node.nextSibling) {
        var nodeType = node.nodeType;
        if (1 === nodeType || 3 === nodeType) break;
        if (8 === nodeType) {
          nodeType = node.data;
          if ("$" === nodeType || "$!" === nodeType || "$?" === nodeType || "F!" === nodeType || "F" === nodeType)
            break;
          if ("/$" === nodeType) return null;
        }
      }
      return node;
    }
    function getParentSuspenseInstance(targetInstance) {
      targetInstance = targetInstance.previousSibling;
      for (var depth = 0; targetInstance; ) {
        if (8 === targetInstance.nodeType) {
          var data = targetInstance.data;
          if ("$" === data || "$!" === data || "$?" === data) {
            if (0 === depth) return targetInstance;
            depth--;
          } else "/$" === data && depth++;
        }
        targetInstance = targetInstance.previousSibling;
      }
      return null;
    }
    function resolveSingletonInstance(type, props, rootContainerInstance) {
      props = getOwnerDocumentFromRootContainer(rootContainerInstance);
      switch (type) {
        case "html":
          type = props.documentElement;
          if (!type) throw Error(formatProdErrorMessage(452));
          return type;
        case "head":
          type = props.head;
          if (!type) throw Error(formatProdErrorMessage(453));
          return type;
        case "body":
          type = props.body;
          if (!type) throw Error(formatProdErrorMessage(454));
          return type;
        default:
          throw Error(formatProdErrorMessage(451));
      }
    }
    var preloadPropsMap = /* @__PURE__ */ new Map(), preconnectsSet = /* @__PURE__ */ new Set();
    function getHoistableRoot(container) {
      return "function" === typeof container.getRootNode ? container.getRootNode() : container.ownerDocument;
    }
    var previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
      f: flushSyncWork,
      r: requestFormReset,
      D: prefetchDNS,
      C: preconnect,
      L: preload,
      m: preloadModule,
      X: preinitScript,
      S: preinitStyle,
      M: preinitModuleScript
    };
    function flushSyncWork() {
      var previousWasRendering = previousDispatcher.f(), wasRendering = flushSyncWork$1();
      return previousWasRendering || wasRendering;
    }
    function requestFormReset(form) {
      var formInst = getInstanceFromNode(form);
      null !== formInst && 5 === formInst.tag && "form" === formInst.type ? requestFormReset$1(formInst) : previousDispatcher.r(form);
    }
    var globalDocument = "undefined" === typeof document ? null : document;
    function preconnectAs(rel, href, crossOrigin) {
      var ownerDocument = globalDocument;
      if (ownerDocument && "string" === typeof href && href) {
        var limitedEscapedHref = escapeSelectorAttributeValueInsideDoubleQuotes(href);
        limitedEscapedHref = 'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
        "string" === typeof crossOrigin && (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
        preconnectsSet.has(limitedEscapedHref) || (preconnectsSet.add(limitedEscapedHref), rel = { rel, crossOrigin, href }, null === ownerDocument.querySelector(limitedEscapedHref) && (href = ownerDocument.createElement("link"), setInitialProperties(href, "link", rel), markNodeAsHoistable(href), ownerDocument.head.appendChild(href)));
      }
    }
    function prefetchDNS(href) {
      previousDispatcher.D(href);
      preconnectAs("dns-prefetch", href, null);
    }
    function preconnect(href, crossOrigin) {
      previousDispatcher.C(href, crossOrigin);
      preconnectAs("preconnect", href, crossOrigin);
    }
    function preload(href, as, options2) {
      previousDispatcher.L(href, as, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href && as) {
        var preloadSelector = 'link[rel="preload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"]';
        "image" === as ? options2 && options2.imageSrcSet ? (preloadSelector += '[imagesrcset="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSrcSet
        ) + '"]', "string" === typeof options2.imageSizes && (preloadSelector += '[imagesizes="' + escapeSelectorAttributeValueInsideDoubleQuotes(
          options2.imageSizes
        ) + '"]')) : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]' : preloadSelector += '[href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]';
        var key = preloadSelector;
        switch (as) {
          case "style":
            key = getStyleKey(href);
            break;
          case "script":
            key = getScriptKey(href);
        }
        preloadPropsMap.has(key) || (href = assign(
          {
            rel: "preload",
            href: "image" === as && options2 && options2.imageSrcSet ? void 0 : href,
            as
          },
          options2
        ), preloadPropsMap.set(key, href), null !== ownerDocument.querySelector(preloadSelector) || "style" === as && ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) || "script" === as && ownerDocument.querySelector(getScriptSelectorFromKey(key)) || (as = ownerDocument.createElement("link"), setInitialProperties(as, "link", href), markNodeAsHoistable(as), ownerDocument.head.appendChild(as)));
      }
    }
    function preloadModule(href, options2) {
      previousDispatcher.m(href, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var as = options2 && "string" === typeof options2.as ? options2.as : "script", preloadSelector = 'link[rel="modulepreload"][as="' + escapeSelectorAttributeValueInsideDoubleQuotes(as) + '"][href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"]', key = preloadSelector;
        switch (as) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            key = getScriptKey(href);
        }
        if (!preloadPropsMap.has(key) && (href = assign({ rel: "modulepreload", href }, options2), preloadPropsMap.set(key, href), null === ownerDocument.querySelector(preloadSelector))) {
          switch (as) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
                return;
          }
          as = ownerDocument.createElement("link");
          setInitialProperties(as, "link", href);
          markNodeAsHoistable(as);
          ownerDocument.head.appendChild(as);
        }
      }
    }
    function preinitStyle(href, precedence, options2) {
      previousDispatcher.S(href, precedence, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && href) {
        var styles = getResourcesFromRoot(ownerDocument).hoistableStyles, key = getStyleKey(href);
        precedence = precedence || "default";
        var resource = styles.get(key);
        if (!resource) {
          var state = { loading: 0, preload: null };
          if (resource = ownerDocument.querySelector(
            getStylesheetSelectorFromKey(key)
          ))
            state.loading = 5;
          else {
            href = assign(
              { rel: "stylesheet", href, "data-precedence": precedence },
              options2
            );
            (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(href, options2);
            var link = resource = ownerDocument.createElement("link");
            markNodeAsHoistable(link);
            setInitialProperties(link, "link", href);
            link._p = new Promise(function(resolve, reject) {
              link.onload = resolve;
              link.onerror = reject;
            });
            link.addEventListener("load", function() {
              state.loading |= 1;
            });
            link.addEventListener("error", function() {
              state.loading |= 2;
            });
            state.loading |= 4;
            insertStylesheet(resource, precedence, ownerDocument);
          }
          resource = {
            type: "stylesheet",
            instance: resource,
            count: 1,
            state
          };
          styles.set(key, resource);
        }
      }
    }
    function preinitScript(src, options2) {
      previousDispatcher.X(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function preinitModuleScript(src, options2) {
      previousDispatcher.M(src, options2);
      var ownerDocument = globalDocument;
      if (ownerDocument && src) {
        var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts, key = getScriptKey(src), resource = scripts.get(key);
        resource || (resource = ownerDocument.querySelector(getScriptSelectorFromKey(key)), resource || (src = assign({ src, async: true, type: "module" }, options2), (options2 = preloadPropsMap.get(key)) && adoptPreloadPropsForScript(src, options2), resource = ownerDocument.createElement("script"), markNodeAsHoistable(resource), setInitialProperties(resource, "link", src), ownerDocument.head.appendChild(resource)), resource = {
          type: "script",
          instance: resource,
          count: 1,
          state: null
        }, scripts.set(key, resource));
      }
    }
    function getResource(type, currentProps, pendingProps, currentResource) {
      var JSCompiler_inline_result = (JSCompiler_inline_result = rootInstanceStackCursor.current) ? getHoistableRoot(JSCompiler_inline_result) : null;
      if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
      switch (type) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" === typeof pendingProps.precedence && "string" === typeof pendingProps.href ? (currentProps = getStyleKey(pendingProps.href), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableStyles, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if ("stylesheet" === pendingProps.rel && "string" === typeof pendingProps.href && "string" === typeof pendingProps.precedence) {
            type = getStyleKey(pendingProps.href);
            var styles$242 = getResourcesFromRoot(
              JSCompiler_inline_result
            ).hoistableStyles, resource$243 = styles$242.get(type);
            resource$243 || (JSCompiler_inline_result = JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result, resource$243 = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null }
            }, styles$242.set(type, resource$243), (styles$242 = JSCompiler_inline_result.querySelector(
              getStylesheetSelectorFromKey(type)
            )) && !styles$242._p && (resource$243.instance = styles$242, resource$243.state.loading = 5), preloadPropsMap.has(type) || (pendingProps = {
              rel: "preload",
              as: "style",
              href: pendingProps.href,
              crossOrigin: pendingProps.crossOrigin,
              integrity: pendingProps.integrity,
              media: pendingProps.media,
              hrefLang: pendingProps.hrefLang,
              referrerPolicy: pendingProps.referrerPolicy
            }, preloadPropsMap.set(type, pendingProps), styles$242 || preloadStylesheet(
              JSCompiler_inline_result,
              type,
              pendingProps,
              resource$243.state
            )));
            if (currentProps && null === currentResource)
              throw Error(formatProdErrorMessage(528, ""));
            return resource$243;
          }
          if (currentProps && null !== currentResource)
            throw Error(formatProdErrorMessage(529, ""));
          return null;
        case "script":
          return currentProps = pendingProps.async, pendingProps = pendingProps.src, "string" === typeof pendingProps && currentProps && "function" !== typeof currentProps && "symbol" !== typeof currentProps ? (currentProps = getScriptKey(pendingProps), pendingProps = getResourcesFromRoot(
            JSCompiler_inline_result
          ).hoistableScripts, currentResource = pendingProps.get(currentProps), currentResource || (currentResource = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, pendingProps.set(currentProps, currentResource)), currentResource) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(formatProdErrorMessage(444, type));
      }
    }
    function getStyleKey(href) {
      return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
    }
    function getStylesheetSelectorFromKey(key) {
      return 'link[rel="stylesheet"][' + key + "]";
    }
    function stylesheetPropsFromRawProps(rawProps) {
      return assign({}, rawProps, {
        "data-precedence": rawProps.precedence,
        precedence: null
      });
    }
    function preloadStylesheet(ownerDocument, key, preloadProps, state) {
      ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]") ? state.loading = 1 : (key = ownerDocument.createElement("link"), state.preload = key, key.addEventListener("load", function() {
        return state.loading |= 1;
      }), key.addEventListener("error", function() {
        return state.loading |= 2;
      }), setInitialProperties(key, "link", preloadProps), markNodeAsHoistable(key), ownerDocument.head.appendChild(key));
    }
    function getScriptKey(src) {
      return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
    }
    function getScriptSelectorFromKey(key) {
      return "script[async]" + key;
    }
    function acquireResource(hoistableRoot, resource, props) {
      resource.count++;
      if (null === resource.instance)
        switch (resource.type) {
          case "style":
            var instance = hoistableRoot.querySelector(
              'style[data-href~="' + escapeSelectorAttributeValueInsideDoubleQuotes(props.href) + '"]'
            );
            if (instance)
              return resource.instance = instance, markNodeAsHoistable(instance), instance;
            var styleProps = assign({}, props, {
              "data-href": props.href,
              "data-precedence": props.precedence,
              href: null,
              precedence: null
            });
            instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
              "style"
            );
            markNodeAsHoistable(instance);
            setInitialProperties(instance, "style", styleProps);
            insertStylesheet(instance, props.precedence, hoistableRoot);
            return resource.instance = instance;
          case "stylesheet":
            styleProps = getStyleKey(props.href);
            var instance$248 = hoistableRoot.querySelector(
              getStylesheetSelectorFromKey(styleProps)
            );
            if (instance$248)
              return resource.state.loading |= 4, resource.instance = instance$248, markNodeAsHoistable(instance$248), instance$248;
            instance = stylesheetPropsFromRawProps(props);
            (styleProps = preloadPropsMap.get(styleProps)) && adoptPreloadPropsForStylesheet(instance, styleProps);
            instance$248 = (hoistableRoot.ownerDocument || hoistableRoot).createElement("link");
            markNodeAsHoistable(instance$248);
            var linkInstance = instance$248;
            linkInstance._p = new Promise(function(resolve, reject) {
              linkInstance.onload = resolve;
              linkInstance.onerror = reject;
            });
            setInitialProperties(instance$248, "link", instance);
            resource.state.loading |= 4;
            insertStylesheet(instance$248, props.precedence, hoistableRoot);
            return resource.instance = instance$248;
          case "script":
            instance$248 = getScriptKey(props.src);
            if (styleProps = hoistableRoot.querySelector(
              getScriptSelectorFromKey(instance$248)
            ))
              return resource.instance = styleProps, markNodeAsHoistable(styleProps), styleProps;
            instance = props;
            if (styleProps = preloadPropsMap.get(instance$248))
              instance = assign({}, props), adoptPreloadPropsForScript(instance, styleProps);
            hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
            styleProps = hoistableRoot.createElement("script");
            markNodeAsHoistable(styleProps);
            setInitialProperties(styleProps, "link", instance);
            hoistableRoot.head.appendChild(styleProps);
            return resource.instance = styleProps;
          case "void":
            return null;
          default:
            throw Error(formatProdErrorMessage(443, resource.type));
        }
      else
        "stylesheet" === resource.type && 0 === (resource.state.loading & 4) && (instance = resource.instance, resource.state.loading |= 4, insertStylesheet(instance, props.precedence, hoistableRoot));
      return resource.instance;
    }
    function insertStylesheet(instance, precedence, root2) {
      for (var nodes = root2.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), last = nodes.length ? nodes[nodes.length - 1] : null, prior = last, i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.dataset.precedence === precedence) prior = node;
        else if (prior !== last) break;
      }
      prior ? prior.parentNode.insertBefore(instance, prior.nextSibling) : (precedence = 9 === root2.nodeType ? root2.head : root2, precedence.insertBefore(instance, precedence.firstChild));
    }
    function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
      null == stylesheetProps.crossOrigin && (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
      null == stylesheetProps.referrerPolicy && (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
      null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
    }
    function adoptPreloadPropsForScript(scriptProps, preloadProps) {
      null == scriptProps.crossOrigin && (scriptProps.crossOrigin = preloadProps.crossOrigin);
      null == scriptProps.referrerPolicy && (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
      null == scriptProps.integrity && (scriptProps.integrity = preloadProps.integrity);
    }
    var tagCaches = null;
    function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
      if (null === tagCaches) {
        var cache = /* @__PURE__ */ new Map();
        var caches = tagCaches = /* @__PURE__ */ new Map();
        caches.set(ownerDocument, cache);
      } else
        caches = tagCaches, cache = caches.get(ownerDocument), cache || (cache = /* @__PURE__ */ new Map(), caches.set(ownerDocument, cache));
      if (cache.has(type)) return cache;
      cache.set(type, null);
      ownerDocument = ownerDocument.getElementsByTagName(type);
      for (caches = 0; caches < ownerDocument.length; caches++) {
        var node = ownerDocument[caches];
        if (!(node[internalHoistableMarker] || node[internalInstanceKey] || "link" === type && "stylesheet" === node.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== node.namespaceURI) {
          var nodeKey = node.getAttribute(keyAttribute) || "";
          nodeKey = type + nodeKey;
          var existing = cache.get(nodeKey);
          existing ? existing.push(node) : cache.set(nodeKey, [node]);
        }
      }
      return cache;
    }
    function mountHoistable(hoistableRoot, type, instance) {
      hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
      hoistableRoot.head.insertBefore(
        instance,
        "title" === type ? hoistableRoot.querySelector("head > title") : null
      );
    }
    function isHostHoistableType(type, props, hostContext) {
      if (1 === hostContext || null != props.itemProp) return false;
      switch (type) {
        case "meta":
        case "title":
          return true;
        case "style":
          if ("string" !== typeof props.precedence || "string" !== typeof props.href || "" === props.href)
            break;
          return true;
        case "link":
          if ("string" !== typeof props.rel || "string" !== typeof props.href || "" === props.href || props.onLoad || props.onError)
            break;
          switch (props.rel) {
            case "stylesheet":
              return type = props.disabled, "string" === typeof props.precedence && null == type;
            default:
              return true;
          }
        case "script":
          if (props.async && "function" !== typeof props.async && "symbol" !== typeof props.async && !props.onLoad && !props.onError && props.src && "string" === typeof props.src)
            return true;
      }
      return false;
    }
    function preloadResource(resource) {
      return "stylesheet" === resource.type && 0 === (resource.state.loading & 3) ? false : true;
    }
    var suspendedState = null;
    function noop2() {
    }
    function suspendResource(hoistableRoot, resource, props) {
      if (null === suspendedState) throw Error(formatProdErrorMessage(475));
      var state = suspendedState;
      if ("stylesheet" === resource.type && ("string" !== typeof props.media || false !== matchMedia(props.media).matches) && 0 === (resource.state.loading & 4)) {
        if (null === resource.instance) {
          var key = getStyleKey(props.href), instance = hoistableRoot.querySelector(
            getStylesheetSelectorFromKey(key)
          );
          if (instance) {
            hoistableRoot = instance._p;
            null !== hoistableRoot && "object" === typeof hoistableRoot && "function" === typeof hoistableRoot.then && (state.count++, state = onUnsuspend.bind(state), hoistableRoot.then(state, state));
            resource.state.loading |= 4;
            resource.instance = instance;
            markNodeAsHoistable(instance);
            return;
          }
          instance = hoistableRoot.ownerDocument || hoistableRoot;
          props = stylesheetPropsFromRawProps(props);
          (key = preloadPropsMap.get(key)) && adoptPreloadPropsForStylesheet(props, key);
          instance = instance.createElement("link");
          markNodeAsHoistable(instance);
          var linkInstance = instance;
          linkInstance._p = new Promise(function(resolve, reject) {
            linkInstance.onload = resolve;
            linkInstance.onerror = reject;
          });
          setInitialProperties(instance, "link", props);
          resource.instance = instance;
        }
        null === state.stylesheets && (state.stylesheets = /* @__PURE__ */ new Map());
        state.stylesheets.set(resource, hoistableRoot);
        (hoistableRoot = resource.state.preload) && 0 === (resource.state.loading & 3) && (state.count++, resource = onUnsuspend.bind(state), hoistableRoot.addEventListener("load", resource), hoistableRoot.addEventListener("error", resource));
      }
    }
    function waitForCommitToBeReady() {
      if (null === suspendedState) throw Error(formatProdErrorMessage(475));
      var state = suspendedState;
      state.stylesheets && 0 === state.count && insertSuspendedStylesheets(state, state.stylesheets);
      return 0 < state.count ? function(commit) {
        var stylesheetTimer = setTimeout(function() {
          state.stylesheets && insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4);
        state.unsuspend = commit;
        return function() {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
        };
      } : null;
    }
    function onUnsuspend() {
      this.count--;
      if (0 === this.count) {
        if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
        else if (this.unsuspend) {
          var unsuspend = this.unsuspend;
          this.unsuspend = null;
          unsuspend();
        }
      }
    }
    var precedencesByRoot = null;
    function insertSuspendedStylesheets(state, resources) {
      state.stylesheets = null;
      null !== state.unsuspend && (state.count++, precedencesByRoot = /* @__PURE__ */ new Map(), resources.forEach(insertStylesheetIntoRoot, state), precedencesByRoot = null, onUnsuspend.call(state));
    }
    function insertStylesheetIntoRoot(root2, resource) {
      if (!(resource.state.loading & 4)) {
        var precedences = precedencesByRoot.get(root2);
        if (precedences) var last = precedences.get(null);
        else {
          precedences = /* @__PURE__ */ new Map();
          precedencesByRoot.set(root2, precedences);
          for (var nodes = root2.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if ("LINK" === node.nodeName || "not all" !== node.getAttribute("media"))
              precedences.set(node.dataset.precedence, node), last = node;
          }
          last && precedences.set(null, last);
        }
        nodes = resource.instance;
        node = nodes.getAttribute("data-precedence");
        i = precedences.get(node) || last;
        i === last && precedences.set(null, nodes);
        precedences.set(node, nodes);
        this.count++;
        last = onUnsuspend.bind(this);
        nodes.addEventListener("load", last);
        nodes.addEventListener("error", last);
        i ? i.parentNode.insertBefore(nodes, i.nextSibling) : (root2 = 9 === root2.nodeType ? root2.head : root2, root2.insertBefore(nodes, root2.firstChild));
        resource.state.loading |= 4;
      }
    }
    var HostTransitionContext = {
      $$typeof: REACT_CONTEXT_TYPE,
      Provider: null,
      Consumer: null,
      _currentValue: sharedNotPendingObject,
      _currentValue2: sharedNotPendingObject,
      _threadCount: 0
    };
    function FiberRootNode(containerInfo, tag, hydrate, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, formState) {
      this.tag = 1;
      this.containerInfo = containerInfo;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
      this.callbackPriority = 0;
      this.expirationTimes = createLaneMap(-1);
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = createLaneMap(0);
      this.hiddenUpdates = createLaneMap(null);
      this.identifierPrefix = identifierPrefix;
      this.onUncaughtError = onUncaughtError;
      this.onCaughtError = onCaughtError;
      this.onRecoverableError = onRecoverableError;
      this.pooledCache = null;
      this.pooledCacheLanes = 0;
      this.formState = formState;
      this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function createFiberRoot(containerInfo, tag, hydrate, initialChildren, hydrationCallbacks, isStrictMode, identifierPrefix, onUncaughtError, onCaughtError, onRecoverableError, transitionCallbacks, formState) {
      containerInfo = new FiberRootNode(
        containerInfo,
        tag,
        hydrate,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        formState
      );
      tag = 1;
      true === isStrictMode && (tag |= 24);
      isStrictMode = createFiberImplClass(3, null, null, tag);
      containerInfo.current = isStrictMode;
      isStrictMode.stateNode = containerInfo;
      tag = createCache();
      tag.refCount++;
      containerInfo.pooledCache = tag;
      tag.refCount++;
      isStrictMode.memoizedState = {
        element: initialChildren,
        isDehydrated: hydrate,
        cache: tag
      };
      initializeUpdateQueue(isStrictMode);
      return containerInfo;
    }
    function getContextForSubtree(parentComponent) {
      if (!parentComponent) return emptyContextObject;
      parentComponent = emptyContextObject;
      return parentComponent;
    }
    function updateContainerImpl(rootFiber, lane, element, container, parentComponent, callback) {
      parentComponent = getContextForSubtree(parentComponent);
      null === container.context ? container.context = parentComponent : container.pendingContext = parentComponent;
      container = createUpdate(lane);
      container.payload = { element };
      callback = void 0 === callback ? null : callback;
      null !== callback && (container.callback = callback);
      element = enqueueUpdate(rootFiber, container, lane);
      null !== element && (scheduleUpdateOnFiber(element, rootFiber, lane), entangleTransitions(element, rootFiber, lane));
    }
    function markRetryLaneImpl(fiber, retryLane) {
      fiber = fiber.memoizedState;
      if (null !== fiber && null !== fiber.dehydrated) {
        var a = fiber.retryLane;
        fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
      }
    }
    function markRetryLaneIfNotHydrated(fiber, retryLane) {
      markRetryLaneImpl(fiber, retryLane);
      (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
    }
    function attemptContinuousHydration(fiber) {
      if (13 === fiber.tag) {
        var root2 = enqueueConcurrentRenderForLane(fiber, 67108864);
        null !== root2 && scheduleUpdateOnFiber(root2, fiber, 67108864);
        markRetryLaneIfNotHydrated(fiber, 67108864);
      }
    }
    var _enabled = true;
    function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 2, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
      var prevTransition = ReactSharedInternals.T;
      ReactSharedInternals.T = null;
      var previousPriority = ReactDOMSharedInternals.p;
      try {
        ReactDOMSharedInternals.p = 8, dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
      } finally {
        ReactDOMSharedInternals.p = previousPriority, ReactSharedInternals.T = prevTransition;
      }
    }
    function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (_enabled) {
        var blockedOn = findInstanceBlockingEvent(nativeEvent);
        if (null === blockedOn)
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          ), clearIfContinuousEvent(domEventName, nativeEvent);
        else if (queueIfContinuousEvent(
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        ))
          nativeEvent.stopPropagation();
        else if (clearIfContinuousEvent(domEventName, nativeEvent), eventSystemFlags & 4 && -1 < discreteReplayableEvents.indexOf(domEventName)) {
          for (; null !== blockedOn; ) {
            var fiber = getInstanceFromNode(blockedOn);
            if (null !== fiber)
              switch (fiber.tag) {
                case 3:
                  fiber = fiber.stateNode;
                  if (fiber.current.memoizedState.isDehydrated) {
                    var lanes = getHighestPriorityLanes(fiber.pendingLanes);
                    if (0 !== lanes) {
                      var root2 = fiber;
                      root2.pendingLanes |= 2;
                      for (root2.entangledLanes |= 2; lanes; ) {
                        var lane = 1 << 31 - clz32(lanes);
                        root2.entanglements[1] |= lane;
                        lanes &= ~lane;
                      }
                      ensureRootIsScheduled(fiber);
                      0 === (executionContext & 6) && (workInProgressRootRenderTargetTime = now() + 500, flushSyncWorkAcrossRoots_impl(0));
                    }
                  }
                  break;
                case 13:
                  root2 = enqueueConcurrentRenderForLane(fiber, 2), null !== root2 && scheduleUpdateOnFiber(root2, fiber, 2), flushSyncWork$1(), markRetryLaneIfNotHydrated(fiber, 2);
              }
            fiber = findInstanceBlockingEvent(nativeEvent);
            null === fiber && dispatchEventForPluginEventSystem(
              domEventName,
              eventSystemFlags,
              nativeEvent,
              return_targetInst,
              targetContainer
            );
            if (fiber === blockedOn) break;
            blockedOn = fiber;
          }
          null !== blockedOn && nativeEvent.stopPropagation();
        } else
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            null,
            targetContainer
          );
      }
    }
    function findInstanceBlockingEvent(nativeEvent) {
      nativeEvent = getEventTarget(nativeEvent);
      return findInstanceBlockingTarget(nativeEvent);
    }
    var return_targetInst = null;
    function findInstanceBlockingTarget(targetNode) {
      return_targetInst = null;
      targetNode = getClosestInstanceFromNode(targetNode);
      if (null !== targetNode) {
        var nearestMounted = getNearestMountedFiber(targetNode);
        if (null === nearestMounted) targetNode = null;
        else {
          var tag = nearestMounted.tag;
          if (13 === tag) {
            targetNode = getSuspenseInstanceFromFiber(nearestMounted);
            if (null !== targetNode) return targetNode;
            targetNode = null;
          } else if (3 === tag) {
            if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
              return 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            targetNode = null;
          } else nearestMounted !== targetNode && (targetNode = null);
        }
      }
      return_targetInst = targetNode;
      return null;
    }
    function getEventPriority(domEventName) {
      switch (domEventName) {
        case "beforetoggle":
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
        case "toggle":
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
          return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (getCurrentPriorityLevel()) {
            case ImmediatePriority:
              return 2;
            case UserBlockingPriority:
              return 8;
            case NormalPriority$1:
            case LowPriority:
              return 32;
            case IdlePriority:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hasScheduledReplayAttempt = false, queuedFocus = null, queuedDrag = null, queuedMouse = null, queuedPointers = /* @__PURE__ */ new Map(), queuedPointerCaptures = /* @__PURE__ */ new Map(), queuedExplicitHydrationTargets = [], discreteReplayableEvents = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
    function clearIfContinuousEvent(domEventName, nativeEvent) {
      switch (domEventName) {
        case "focusin":
        case "focusout":
          queuedFocus = null;
          break;
        case "dragenter":
        case "dragleave":
          queuedDrag = null;
          break;
        case "mouseover":
        case "mouseout":
          queuedMouse = null;
          break;
        case "pointerover":
        case "pointerout":
          queuedPointers.delete(nativeEvent.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          queuedPointerCaptures.delete(nativeEvent.pointerId);
      }
    }
    function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      if (null === existingQueuedEvent || existingQueuedEvent.nativeEvent !== nativeEvent)
        return existingQueuedEvent = {
          blockedOn,
          domEventName,
          eventSystemFlags,
          nativeEvent,
          targetContainers: [targetContainer]
        }, null !== blockedOn && (blockedOn = getInstanceFromNode(blockedOn), null !== blockedOn && attemptContinuousHydration(blockedOn)), existingQueuedEvent;
      existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
      blockedOn = existingQueuedEvent.targetContainers;
      null !== targetContainer && -1 === blockedOn.indexOf(targetContainer) && blockedOn.push(targetContainer);
      return existingQueuedEvent;
    }
    function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
      switch (domEventName) {
        case "focusin":
          return queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedFocus,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "dragenter":
          return queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedDrag,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "mouseover":
          return queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedMouse,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          ), true;
        case "pointerover":
          var pointerId = nativeEvent.pointerId;
          queuedPointers.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointers.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          );
          return true;
        case "gotpointercapture":
          return pointerId = nativeEvent.pointerId, queuedPointerCaptures.set(
            pointerId,
            accumulateOrCreateContinuousQueuedReplayableEvent(
              queuedPointerCaptures.get(pointerId) || null,
              blockedOn,
              domEventName,
              eventSystemFlags,
              targetContainer,
              nativeEvent
            )
          ), true;
      }
      return false;
    }
    function attemptExplicitHydrationTarget(queuedTarget) {
      var targetInst = getClosestInstanceFromNode(queuedTarget.target);
      if (null !== targetInst) {
        var nearestMounted = getNearestMountedFiber(targetInst);
        if (null !== nearestMounted) {
          if (targetInst = nearestMounted.tag, 13 === targetInst) {
            if (targetInst = getSuspenseInstanceFromFiber(nearestMounted), null !== targetInst) {
              queuedTarget.blockedOn = targetInst;
              runWithPriority(queuedTarget.priority, function() {
                if (13 === nearestMounted.tag) {
                  var lane = requestUpdateLane(), root2 = enqueueConcurrentRenderForLane(nearestMounted, lane);
                  null !== root2 && scheduleUpdateOnFiber(root2, nearestMounted, lane);
                  markRetryLaneIfNotHydrated(nearestMounted, lane);
                }
              });
              return;
            }
          } else if (3 === targetInst && nearestMounted.stateNode.current.memoizedState.isDehydrated) {
            queuedTarget.blockedOn = 3 === nearestMounted.tag ? nearestMounted.stateNode.containerInfo : null;
            return;
          }
        }
      }
      queuedTarget.blockedOn = null;
    }
    function attemptReplayContinuousQueuedEvent(queuedEvent) {
      if (null !== queuedEvent.blockedOn) return false;
      for (var targetContainers = queuedEvent.targetContainers; 0 < targetContainers.length; ) {
        var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
        if (null === nextBlockedOn) {
          nextBlockedOn = queuedEvent.nativeEvent;
          var nativeEventClone = new nextBlockedOn.constructor(
            nextBlockedOn.type,
            nextBlockedOn
          );
          currentReplayingEvent = nativeEventClone;
          nextBlockedOn.target.dispatchEvent(nativeEventClone);
          currentReplayingEvent = null;
        } else
          return targetContainers = getInstanceFromNode(nextBlockedOn), null !== targetContainers && attemptContinuousHydration(targetContainers), queuedEvent.blockedOn = nextBlockedOn, false;
        targetContainers.shift();
      }
      return true;
    }
    function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
      attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
    }
    function replayUnblockedEvents() {
      hasScheduledReplayAttempt = false;
      null !== queuedFocus && attemptReplayContinuousQueuedEvent(queuedFocus) && (queuedFocus = null);
      null !== queuedDrag && attemptReplayContinuousQueuedEvent(queuedDrag) && (queuedDrag = null);
      null !== queuedMouse && attemptReplayContinuousQueuedEvent(queuedMouse) && (queuedMouse = null);
      queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
      queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
    }
    function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
      queuedEvent.blockedOn === unblocked && (queuedEvent.blockedOn = null, hasScheduledReplayAttempt || (hasScheduledReplayAttempt = true, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
    }
    var lastScheduledReplayQueue = null;
    function scheduleReplayQueueIfNeeded(formReplayingQueue) {
      lastScheduledReplayQueue !== formReplayingQueue && (lastScheduledReplayQueue = formReplayingQueue, Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        function() {
          lastScheduledReplayQueue === formReplayingQueue && (lastScheduledReplayQueue = null);
          for (var i = 0; i < formReplayingQueue.length; i += 3) {
            var form = formReplayingQueue[i], submitterOrAction = formReplayingQueue[i + 1], formData = formReplayingQueue[i + 2];
            if ("function" !== typeof submitterOrAction)
              if (null === findInstanceBlockingTarget(submitterOrAction || form))
                continue;
              else break;
            var formInst = getInstanceFromNode(form);
            null !== formInst && (formReplayingQueue.splice(i, 3), i -= 3, startHostTransition(
              formInst,
              {
                pending: true,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
          }
        }
      ));
    }
    function retryIfBlockedOn(unblocked) {
      function unblock(queuedEvent) {
        return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
      }
      null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
      null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
      null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
      queuedPointers.forEach(unblock);
      queuedPointerCaptures.forEach(unblock);
      for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
        var queuedTarget = queuedExplicitHydrationTargets[i];
        queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
      }
      for (; 0 < queuedExplicitHydrationTargets.length && (i = queuedExplicitHydrationTargets[0], null === i.blockedOn); )
        attemptExplicitHydrationTarget(i), null === i.blockedOn && queuedExplicitHydrationTargets.shift();
      i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
      if (null != i)
        for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
          var form = i[queuedTarget], submitterOrAction = i[queuedTarget + 1], formProps = form[internalPropsKey] || null;
          if ("function" === typeof submitterOrAction)
            formProps || scheduleReplayQueueIfNeeded(i);
          else if (formProps) {
            var action = null;
            if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
              if (form = submitterOrAction, formProps = submitterOrAction[internalPropsKey] || null)
                action = formProps.formAction;
              else {
                if (null !== findInstanceBlockingTarget(form)) continue;
              }
            else action = formProps.action;
            "function" === typeof action ? i[queuedTarget + 1] = action : (i.splice(queuedTarget, 3), queuedTarget -= 3);
            scheduleReplayQueueIfNeeded(i);
          }
        }
    }
    function ReactDOMRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
      var root2 = this._internalRoot;
      if (null === root2) throw Error(formatProdErrorMessage(409));
      var current = root2.current, lane = requestUpdateLane();
      updateContainerImpl(current, lane, children, root2, null, null);
    };
    ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
      var root2 = this._internalRoot;
      if (null !== root2) {
        this._internalRoot = null;
        var container = root2.containerInfo;
        0 === root2.tag && flushPassiveEffects();
        updateContainerImpl(root2.current, 2, null, root2, null, null);
        flushSyncWork$1();
        container[internalContainerInstanceKey] = null;
      }
    };
    function ReactDOMHydrationRoot(internalRoot) {
      this._internalRoot = internalRoot;
    }
    ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function(target) {
      if (target) {
        var updatePriority = resolveUpdatePriority();
        target = { blockedOn: null, target, priority: updatePriority };
        for (var i = 0; i < queuedExplicitHydrationTargets.length && 0 !== updatePriority && updatePriority < queuedExplicitHydrationTargets[i].priority; i++) ;
        queuedExplicitHydrationTargets.splice(i, 0, target);
        0 === i && attemptExplicitHydrationTarget(target);
      }
    };
    var isomorphicReactPackageVersion$jscomp$inline_1686 = React2.version;
    if ("19.0.0" !== isomorphicReactPackageVersion$jscomp$inline_1686)
      throw Error(
        formatProdErrorMessage(
          527,
          isomorphicReactPackageVersion$jscomp$inline_1686,
          "19.0.0"
        )
      );
    ReactDOMSharedInternals.findDOMNode = function(componentOrElement) {
      var fiber = componentOrElement._reactInternals;
      if (void 0 === fiber) {
        if ("function" === typeof componentOrElement.render)
          throw Error(formatProdErrorMessage(188));
        componentOrElement = Object.keys(componentOrElement).join(",");
        throw Error(formatProdErrorMessage(268, componentOrElement));
      }
      componentOrElement = findCurrentFiberUsingSlowPath(fiber);
      componentOrElement = null !== componentOrElement ? findCurrentHostFiberImpl(componentOrElement) : null;
      componentOrElement = null === componentOrElement ? null : componentOrElement.stateNode;
      return componentOrElement;
    };
    var internals$jscomp$inline_2165 = {
      bundleType: 0,
      version: "19.0.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: ReactSharedInternals,
      findFiberByHostInstance: getClosestInstanceFromNode,
      reconcilerVersion: "19.0.0"
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var hook$jscomp$inline_2166 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!hook$jscomp$inline_2166.isDisabled && hook$jscomp$inline_2166.supportsFiber)
        try {
          rendererID = hook$jscomp$inline_2166.inject(
            internals$jscomp$inline_2165
          ), injectedHook = hook$jscomp$inline_2166;
        } catch (err) {
        }
    }
    reactDomClient_production.createRoot = function(container, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks));
      options2 = createFiberRoot(
        container,
        1,
        false,
        null,
        null,
        isStrictMode,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        transitionCallbacks,
        null
      );
      container[internalContainerInstanceKey] = options2.current;
      listenToAllSupportedEvents(
        8 === container.nodeType ? container.parentNode : container
      );
      return new ReactDOMRoot(options2);
    };
    reactDomClient_production.hydrateRoot = function(container, initialChildren, options2) {
      if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
      var isStrictMode = false, identifierPrefix = "", onUncaughtError = defaultOnUncaughtError, onCaughtError = defaultOnCaughtError, onRecoverableError = defaultOnRecoverableError, transitionCallbacks = null, formState = null;
      null !== options2 && void 0 !== options2 && (true === options2.unstable_strictMode && (isStrictMode = true), void 0 !== options2.identifierPrefix && (identifierPrefix = options2.identifierPrefix), void 0 !== options2.onUncaughtError && (onUncaughtError = options2.onUncaughtError), void 0 !== options2.onCaughtError && (onCaughtError = options2.onCaughtError), void 0 !== options2.onRecoverableError && (onRecoverableError = options2.onRecoverableError), void 0 !== options2.unstable_transitionCallbacks && (transitionCallbacks = options2.unstable_transitionCallbacks), void 0 !== options2.formState && (formState = options2.formState));
      initialChildren = createFiberRoot(
        container,
        1,
        true,
        initialChildren,
        null != options2 ? options2 : null,
        isStrictMode,
        identifierPrefix,
        onUncaughtError,
        onCaughtError,
        onRecoverableError,
        transitionCallbacks,
        formState
      );
      initialChildren.context = getContextForSubtree(null);
      options2 = initialChildren.current;
      isStrictMode = requestUpdateLane();
      identifierPrefix = createUpdate(isStrictMode);
      identifierPrefix.callback = null;
      enqueueUpdate(options2, identifierPrefix, isStrictMode);
      initialChildren.current.lanes = isStrictMode;
      markRootUpdated$1(initialChildren, isStrictMode);
      ensureRootIsScheduled(initialChildren);
      container[internalContainerInstanceKey] = initialChildren.current;
      listenToAllSupportedEvents(container);
      return new ReactDOMHydrationRoot(initialChildren);
    };
    reactDomClient_production.version = "19.0.0";
    return reactDomClient_production;
  }
  var hasRequiredClient;
  function requireClient() {
    if (hasRequiredClient) return client.exports;
    hasRequiredClient = 1;
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      client.exports = requireReactDomClient_production();
    }
    return client.exports;
  }
  var clientExports = requireClient();
  const ReactDOM$1 = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
  function AnotherTestWidget() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "red", fontSize: 32, padding: "5px" }, className: "text-3xl font-semibold text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Another Test Widget" }) });
  }
  function keys(object) {
    return Object.keys(object);
  }
  function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
  function deepMerge(target, source) {
    const result = { ...target };
    const _source = source;
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(_source[key])) {
          if (!(key in target)) {
            result[key] = _source[key];
          } else {
            result[key] = deepMerge(result[key], _source[key]);
          }
        } else {
          result[key] = _source[key];
        }
      });
    }
    return result;
  }
  function camelToKebabCase(value) {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  }
  function getTransformedScaledValue(value) {
    var _a;
    if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
      return value;
    }
    return (_a = value.match(/^calc\((.*?)\)$/)) == null ? void 0 : _a[1].split("*")[0].trim();
  }
  function px(value) {
    const transformedValue = getTransformedScaledValue(value);
    if (typeof transformedValue === "number") {
      return transformedValue;
    }
    if (typeof transformedValue === "string") {
      if (transformedValue.includes("calc") || transformedValue.includes("var")) {
        return transformedValue;
      }
      if (transformedValue.includes("px")) {
        return Number(transformedValue.replace("px", ""));
      }
      if (transformedValue.includes("rem")) {
        return Number(transformedValue.replace("rem", "")) * 16;
      }
      if (transformedValue.includes("em")) {
        return Number(transformedValue.replace("em", "")) * 16;
      }
      return Number(transformedValue);
    }
    return NaN;
  }
  function scaleRem(remValue) {
    if (remValue === "0rem") {
      return "0rem";
    }
    return `calc(${remValue} * var(--mantine-scale))`;
  }
  function createConverter(units, { shouldScale = false } = {}) {
    function converter(value) {
      if (value === 0 || value === "0") {
        return `0${units}`;
      }
      if (typeof value === "number") {
        const val = `${value / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
      if (typeof value === "string") {
        if (value === "") {
          return value;
        }
        if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
          return value;
        }
        if (value.includes(",")) {
          return value.split(",").map((val) => converter(val)).join(",");
        }
        if (value.includes(" ")) {
          return value.split(" ").map((val) => converter(val)).join(" ");
        }
        if (value.includes(units)) {
          return shouldScale ? scaleRem(value) : value;
        }
        const replaced = value.replace("px", "");
        if (!Number.isNaN(Number(replaced))) {
          const val = `${Number(replaced) / 16}${units}`;
          return shouldScale ? scaleRem(val) : val;
        }
      }
      return value;
    }
    return converter;
  }
  const rem = createConverter("rem", { shouldScale: true });
  const em = createConverter("em");
  function filterProps(props) {
    return Object.keys(props).reduce((acc, key) => {
      if (props[key] !== void 0) {
        acc[key] = props[key];
      }
      return acc;
    }, {});
  }
  function isNumberLike(value) {
    if (typeof value === "number") {
      return true;
    }
    if (typeof value === "string") {
      if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
        return true;
      }
      const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
      const values2 = value.trim().split(/\s+/);
      return values2.every((val) => cssUnitsRegex.test(val));
    }
    return false;
  }
  function isElement$1(value) {
    if (Array.isArray(value) || value === null) {
      return false;
    }
    if (typeof value === "object") {
      if (value.type === reactExports.Fragment) {
        return false;
      }
      return true;
    }
    return false;
  }
  function createSafeContext(errorMessage) {
    const Context = reactExports.createContext(null);
    const useSafeContext = () => {
      const ctx = reactExports.useContext(Context);
      if (ctx === null) {
        throw new Error(errorMessage);
      }
      return ctx;
    };
    const Provider = ({ children, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    return [Provider, useSafeContext];
  }
  function createOptionalContext(initialValue = null) {
    const Context = reactExports.createContext(initialValue);
    const useOptionalContext = () => reactExports.useContext(Context);
    const Provider = ({ children, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    return [Provider, useOptionalContext];
  }
  const elevations = {
    app: 100,
    modal: 200,
    popover: 300,
    overlay: 400,
    max: 9999
  };
  function getDefaultZIndex(level) {
    return elevations[level];
  }
  const noop$1 = () => {
  };
  function closeOnEscape(callback, options = { active: true }) {
    if (typeof callback !== "function" || !options.active) {
      return options.onKeyDown || noop$1;
    }
    return (event) => {
      var _a;
      if (event.key === "Escape") {
        callback(event);
        (_a = options.onTrigger) == null ? void 0 : _a.call(options);
      }
    };
  }
  function getSize(size2, prefix = "size", convertToRem = true) {
    if (size2 === void 0) {
      return void 0;
    }
    return isNumberLike(size2) ? convertToRem ? rem(size2) : size2 : `var(--${prefix}-${size2})`;
  }
  function getSpacing(size2) {
    return getSize(size2, "mantine-spacing");
  }
  function getRadius(size2) {
    if (size2 === void 0) {
      return "var(--mantine-radius-default)";
    }
    return getSize(size2, "mantine-radius");
  }
  function getFontSize(size2) {
    return getSize(size2, "mantine-font-size");
  }
  function getShadow(size2) {
    if (!size2) {
      return void 0;
    }
    return getSize(size2, "mantine-shadow", false);
  }
  function randomId(prefix = "mantine-") {
    return `${prefix}${Math.random().toString(36).slice(2, 11)}`;
  }
  const DEFAULT_EVENTS = ["mousedown", "touchstart"];
  function useClickOutside(handler, events, nodes) {
    const ref2 = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const listener = (event) => {
        const { target } = event ?? {};
        if (Array.isArray(nodes)) {
          const shouldIgnore = (target == null ? void 0 : target.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(target) && target.tagName !== "HTML";
          const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
          shouldTrigger && !shouldIgnore && handler();
        } else if (ref2.current && !ref2.current.contains(target)) {
          handler();
        }
      };
      (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
      return () => {
        (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
      };
    }, [ref2, handler, nodes]);
    return ref2;
  }
  function attachMediaListener(query, callback) {
    try {
      query.addEventListener("change", callback);
      return () => query.removeEventListener("change", callback);
    } catch (e) {
      query.addListener(callback);
      return () => query.removeListener(callback);
    }
  }
  function getInitialValue(query, initialValue) {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      return window.matchMedia(query).matches;
    }
    return false;
  }
  function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
    getInitialValueInEffect: true
  }) {
    const [matches, setMatches] = reactExports.useState(
      getInitialValueInEffect ? initialValue : getInitialValue(query)
    );
    const queryRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      if ("matchMedia" in window) {
        queryRef.current = window.matchMedia(query);
        setMatches(queryRef.current.matches);
        return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
      }
      return void 0;
    }, [query]);
    return matches;
  }
  const useIsomorphicEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  function useDidUpdate(fn, dependencies) {
    const mounted = reactExports.useRef(false);
    reactExports.useEffect(
      () => () => {
        mounted.current = false;
      },
      []
    );
    reactExports.useEffect(() => {
      if (mounted.current) {
        return fn();
      }
      mounted.current = true;
      return void 0;
    }, dependencies);
  }
  function useFocusReturn({ opened, shouldReturnFocus = true }) {
    const lastActiveElement = reactExports.useRef(null);
    const returnFocus = () => {
      var _a;
      if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
        (_a = lastActiveElement.current) == null ? void 0 : _a.focus({ preventScroll: true });
      }
    };
    useDidUpdate(() => {
      let timeout = -1;
      const clearFocusTimeout = (event) => {
        if (event.key === "Tab") {
          window.clearTimeout(timeout);
        }
      };
      document.addEventListener("keydown", clearFocusTimeout);
      if (opened) {
        lastActiveElement.current = document.activeElement;
      } else if (shouldReturnFocus) {
        timeout = window.setTimeout(returnFocus, 10);
      }
      return () => {
        window.clearTimeout(timeout);
        document.removeEventListener("keydown", clearFocusTimeout);
      };
    }, [opened, shouldReturnFocus]);
    return returnFocus;
  }
  const TABBABLE_NODES = /input|select|textarea|button|object/;
  const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
  function hidden(element) {
    return element.style.display === "none";
  }
  function visible(element) {
    const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
    if (isHidden) {
      return false;
    }
    let parentElement = element;
    while (parentElement) {
      if (parentElement === document.body || parentElement.nodeType === 11) {
        break;
      }
      if (hidden(parentElement)) {
        return false;
      }
      parentElement = parentElement.parentNode;
    }
    return true;
  }
  function getElementTabIndex(element) {
    let tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null) {
      tabIndex = void 0;
    }
    return parseInt(tabIndex, 10);
  }
  function focusable(element) {
    const nodeName = element.nodeName.toLowerCase();
    const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
    const res = (
      // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
      TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
    );
    return res && visible(element);
  }
  function tabbable(element) {
    const tabIndex = getElementTabIndex(element);
    const isTabIndexNaN = Number.isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
  }
  function findTabbableDescendants(element) {
    return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
  }
  function scopeTab(node, event) {
    const tabbable2 = findTabbableDescendants(node);
    if (!tabbable2.length) {
      event.preventDefault();
      return;
    }
    const finalTabbable = tabbable2[event.shiftKey ? 0 : tabbable2.length - 1];
    const root = node.getRootNode();
    let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
    const activeElement = root.activeElement;
    const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
    if (activeElementIsRadio) {
      const activeRadioGroup = tabbable2.filter(
        (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name")
      );
      leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
    }
    if (!leavingFinalTabbable) {
      return;
    }
    event.preventDefault();
    const target = tabbable2[event.shiftKey ? tabbable2.length - 1 : 0];
    if (target) {
      target.focus();
    }
  }
  function useFocusTrap(active = true) {
    const ref2 = reactExports.useRef(null);
    const focusNode = (node) => {
      let focusElement = node.querySelector("[data-autofocus]");
      if (!focusElement) {
        const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
        focusElement = children.find(tabbable) || children.find(focusable) || null;
        if (!focusElement && focusable(node)) {
          focusElement = node;
        }
      }
      if (focusElement) {
        focusElement.focus({ preventScroll: true });
      }
    };
    const setRef = reactExports.useCallback(
      (node) => {
        if (!active) {
          return;
        }
        if (node === null) {
          return;
        }
        if (ref2.current === node) {
          return;
        }
        if (node) {
          setTimeout(() => {
            if (node.getRootNode()) {
              focusNode(node);
            }
          });
          ref2.current = node;
        } else {
          ref2.current = null;
        }
      },
      [active]
    );
    reactExports.useEffect(() => {
      if (!active) {
        return void 0;
      }
      ref2.current && setTimeout(() => focusNode(ref2.current));
      const handleKeyDown = (event) => {
        if (event.key === "Tab" && ref2.current) {
          scopeTab(ref2.current, event);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [active]);
    return setRef;
  }
  const __useId = React["useId".toString()] || (() => void 0);
  function useReactId$1() {
    const id = __useId();
    return id ? `mantine-${id.replace(/:/g, "")}` : "";
  }
  function useId$1(staticId) {
    const reactId = useReactId$1();
    const [uuid, setUuid] = reactExports.useState(reactId);
    useIsomorphicEffect(() => {
      setUuid(randomId());
    }, []);
    if (typeof staticId === "string") {
      return staticId;
    }
    if (typeof window === "undefined") {
      return reactId;
    }
    return uuid;
  }
  function assignRef(ref2, value) {
    if (typeof ref2 === "function") {
      return ref2(value);
    } else if (typeof ref2 === "object" && ref2 !== null && "current" in ref2) {
      ref2.current = value;
    }
  }
  function mergeRefs(...refs) {
    const cleanupMap = /* @__PURE__ */ new Map();
    return (node) => {
      refs.forEach((ref2) => {
        const cleanup = assignRef(ref2, node);
        if (cleanup) {
          cleanupMap.set(ref2, cleanup);
        }
      });
      if (cleanupMap.size > 0) {
        return () => {
          refs.forEach((ref2) => {
            const cleanup = cleanupMap.get(ref2);
            if (cleanup) {
              cleanup();
            } else {
              assignRef(ref2, null);
            }
          });
          cleanupMap.clear();
        };
      }
    };
  }
  function useMergedRef(...refs) {
    return reactExports.useCallback(mergeRefs(...refs), refs);
  }
  function useUncontrolled({
    value,
    defaultValue,
    finalValue,
    onChange = () => {
    }
  }) {
    const [uncontrolledValue, setUncontrolledValue] = reactExports.useState(
      defaultValue !== void 0 ? defaultValue : finalValue
    );
    const handleUncontrolledChange = (val, ...payload) => {
      setUncontrolledValue(val);
      onChange == null ? void 0 : onChange(val, ...payload);
    };
    if (value !== void 0) {
      return [value, onChange, true];
    }
    return [uncontrolledValue, handleUncontrolledChange, false];
  }
  function useReducedMotion(initialValue, options) {
    return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
  }
  function useDisclosure(initialState = false, callbacks) {
    const { onOpen, onClose } = {};
    const [opened, setOpened] = reactExports.useState(initialState);
    const open = reactExports.useCallback(() => {
      setOpened((isOpened) => {
        if (!isOpened) {
          onOpen == null ? void 0 : onOpen();
          return true;
        }
        return isOpened;
      });
    }, [onOpen]);
    const close = reactExports.useCallback(() => {
      setOpened((isOpened) => {
        if (isOpened) {
          onClose == null ? void 0 : onClose();
          return false;
        }
        return isOpened;
      });
    }, [onClose]);
    const toggle = reactExports.useCallback(() => {
      opened ? close() : open();
    }, [close, open, opened]);
    return [opened, { open, close, toggle }];
  }
  function getEnv() {
    if (typeof process !== "undefined" && process.env && "production") {
      return "production";
    }
    return "development";
  }
  function getRefProp(element) {
    var _a;
    const version = React.version;
    if (typeof React.version !== "string") {
      return element == null ? void 0 : element.ref;
    }
    if (version.startsWith("18.")) {
      return element == null ? void 0 : element.ref;
    }
    return (_a = element == null ? void 0 : element.props) == null ? void 0 : _a.ref;
  }
  function createVarsResolver(resolver) {
    return resolver;
  }
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  const EMPTY_CLASS_NAMES = {};
  function mergeClassNames(objects) {
    const merged = {};
    objects.forEach((obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (merged[key]) {
          merged[key] = clsx(merged[key], value);
        } else {
          merged[key] = value;
        }
      });
    });
    return merged;
  }
  function resolveClassNames({ theme, classNames, props, stylesCtx }) {
    const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
    const resolvedClassNames = arrayClassNames.map(
      (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
    );
    return mergeClassNames(resolvedClassNames);
  }
  function resolveStyles({ theme, styles, props, stylesCtx }) {
    const arrayStyles = Array.isArray(styles) ? styles : [styles];
    return arrayStyles.reduce((acc, style) => {
      if (typeof style === "function") {
        return { ...acc, ...style(theme, props, stylesCtx) };
      }
      return { ...acc, ...style };
    }, {});
  }
  const MantineContext = reactExports.createContext(null);
  function useMantineContext() {
    const ctx = reactExports.useContext(MantineContext);
    if (!ctx) {
      throw new Error("[@mantine/core] MantineProvider was not found in tree");
    }
    return ctx;
  }
  function useMantineCssVariablesResolver() {
    return useMantineContext().cssVariablesResolver;
  }
  function useMantineClassNamesPrefix() {
    return useMantineContext().classNamesPrefix;
  }
  function useMantineStyleNonce() {
    return useMantineContext().getStyleNonce;
  }
  function useMantineWithStaticClasses() {
    return useMantineContext().withStaticClasses;
  }
  function useMantineIsHeadless() {
    return useMantineContext().headless;
  }
  function useMantineSxTransform() {
    var _a;
    return (_a = useMantineContext().stylesTransform) == null ? void 0 : _a.sx;
  }
  function useMantineStylesTransform() {
    var _a;
    return (_a = useMantineContext().stylesTransform) == null ? void 0 : _a.styles;
  }
  function isHexColor(hex) {
    const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
    return HEX_REGEXP.test(hex);
  }
  function hexToRgba(color) {
    let hexString = color.replace("#", "");
    if (hexString.length === 3) {
      const shorthandHex = hexString.split("");
      hexString = [
        shorthandHex[0],
        shorthandHex[0],
        shorthandHex[1],
        shorthandHex[1],
        shorthandHex[2],
        shorthandHex[2]
      ].join("");
    }
    if (hexString.length === 8) {
      const alpha2 = parseInt(hexString.slice(6, 8), 16) / 255;
      return {
        r: parseInt(hexString.slice(0, 2), 16),
        g: parseInt(hexString.slice(2, 4), 16),
        b: parseInt(hexString.slice(4, 6), 16),
        a: alpha2
      };
    }
    const parsed = parseInt(hexString, 16);
    const r2 = parsed >> 16 & 255;
    const g = parsed >> 8 & 255;
    const b = parsed & 255;
    return {
      r: r2,
      g,
      b,
      a: 1
    };
  }
  function rgbStringToRgba(color) {
    const [r2, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
    return { r: r2, g, b, a: a || 1 };
  }
  function hslStringToRgba(hslaString) {
    const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
    const matches = hslaString.match(hslaRegex);
    if (!matches) {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
    }
    const h = parseInt(matches[1], 10);
    const s = parseInt(matches[2], 10) / 100;
    const l = parseInt(matches[3], 10) / 100;
    const a = matches[5] ? parseFloat(matches[5]) : void 0;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const huePrime = h / 60;
    const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
    const m = l - chroma / 2;
    let r2;
    let g;
    let b;
    if (huePrime >= 0 && huePrime < 1) {
      r2 = chroma;
      g = x;
      b = 0;
    } else if (huePrime >= 1 && huePrime < 2) {
      r2 = x;
      g = chroma;
      b = 0;
    } else if (huePrime >= 2 && huePrime < 3) {
      r2 = 0;
      g = chroma;
      b = x;
    } else if (huePrime >= 3 && huePrime < 4) {
      r2 = 0;
      g = x;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r2 = x;
      g = 0;
      b = chroma;
    } else {
      r2 = chroma;
      g = 0;
      b = x;
    }
    return {
      r: Math.round((r2 + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
      a: a || 1
    };
  }
  function toRgba(color) {
    if (isHexColor(color)) {
      return hexToRgba(color);
    }
    if (color.startsWith("rgb")) {
      return rgbStringToRgba(color);
    }
    if (color.startsWith("hsl")) {
      return hslStringToRgba(color);
    }
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  function darken(color, alpha2) {
    if (color.startsWith("var(")) {
      return `color-mix(in srgb, ${color}, black ${alpha2 * 100}%)`;
    }
    const { r: r2, g, b, a } = toRgba(color);
    const f = 1 - alpha2;
    const dark = (input) => Math.round(input * f);
    return `rgba(${dark(r2)}, ${dark(g)}, ${dark(b)}, ${a})`;
  }
  function getPrimaryShade(theme, colorScheme) {
    if (typeof theme.primaryShade === "number") {
      return theme.primaryShade;
    }
    if (colorScheme === "dark") {
      return theme.primaryShade.dark;
    }
    return theme.primaryShade.light;
  }
  function gammaCorrect(c) {
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  }
  function getLightnessFromOklch(oklchColor) {
    const match = oklchColor.match(/oklch\((.*?)%\s/);
    return match ? parseFloat(match[1]) : null;
  }
  function luminance(color) {
    if (color.startsWith("oklch(")) {
      return (getLightnessFromOklch(color) || 0) / 100;
    }
    const { r: r2, g, b } = toRgba(color);
    const sR = r2 / 255;
    const sG = g / 255;
    const sB = b / 255;
    const rLinear = gammaCorrect(sR);
    const gLinear = gammaCorrect(sG);
    const bLinear = gammaCorrect(sB);
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  }
  function isLightColor(color, luminanceThreshold = 0.179) {
    if (color.startsWith("var(")) {
      return false;
    }
    return luminance(color) > luminanceThreshold;
  }
  function parseThemeColor({
    color,
    theme,
    colorScheme
  }) {
    if (typeof color !== "string") {
      throw new Error(
        `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
      );
    }
    if (color === "bright") {
      return {
        color,
        value: colorScheme === "dark" ? theme.white : theme.black,
        shade: void 0,
        isThemeColor: false,
        isLight: isLightColor(
          colorScheme === "dark" ? theme.white : theme.black,
          theme.luminanceThreshold
        ),
        variable: "--mantine-color-bright"
      };
    }
    if (color === "dimmed") {
      return {
        color,
        value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
        shade: void 0,
        isThemeColor: false,
        isLight: isLightColor(
          colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
          theme.luminanceThreshold
        ),
        variable: "--mantine-color-dimmed"
      };
    }
    if (color === "white" || color === "black") {
      return {
        color,
        value: color === "white" ? theme.white : theme.black,
        shade: void 0,
        isThemeColor: false,
        isLight: isLightColor(
          color === "white" ? theme.white : theme.black,
          theme.luminanceThreshold
        ),
        variable: `--mantine-color-${color}`
      };
    }
    const [_color, shade] = color.split(".");
    const colorShade = shade ? Number(shade) : void 0;
    const isThemeColor = _color in theme.colors;
    if (isThemeColor) {
      const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][getPrimaryShade(theme, colorScheme || "light")];
      return {
        color: _color,
        value: colorValue,
        shade: colorShade,
        isThemeColor,
        isLight: isLightColor(colorValue, theme.luminanceThreshold),
        variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
      };
    }
    return {
      color,
      value: color,
      isThemeColor,
      isLight: isLightColor(color, theme.luminanceThreshold),
      shade: colorShade,
      variable: void 0
    };
  }
  function getThemeColor(color, theme) {
    const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
    return parsed.variable ? `var(${parsed.variable})` : color;
  }
  function getGradient(gradient, theme) {
    const merged = {
      from: (gradient == null ? void 0 : gradient.from) || theme.defaultGradient.from,
      to: (gradient == null ? void 0 : gradient.to) || theme.defaultGradient.to,
      deg: (gradient == null ? void 0 : gradient.deg) ?? theme.defaultGradient.deg ?? 0
    };
    const fromColor = getThemeColor(merged.from, theme);
    const toColor = getThemeColor(merged.to, theme);
    return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
  }
  function rgba(color, alpha2) {
    if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
      return "rgba(0, 0, 0, 1)";
    }
    if (color.startsWith("var(")) {
      const mixPercentage = (1 - alpha2) * 100;
      return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
    }
    if (color.startsWith("oklch")) {
      if (color.includes("/")) {
        return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
      }
      return color.replace(")", ` / ${alpha2})`);
    }
    const { r: r2, g, b } = toRgba(color);
    return `rgba(${r2}, ${g}, ${b}, ${alpha2})`;
  }
  const alpha = rgba;
  const defaultVariantColorsResolver = ({
    color,
    theme,
    variant,
    gradient,
    autoContrast
  }) => {
    const parsed = parseThemeColor({ color, theme });
    const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
    if (variant === "filled") {
      const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: `var(--mantine-color-${color}-filled)`,
            hover: `var(--mantine-color-${color}-filled-hover)`,
            color: textColor,
            border: `${rem(1)} solid transparent`
          };
        }
        return {
          background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
          hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
          color: textColor,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: color,
        hover: darken(color, 0.1),
        color: textColor,
        border: `${rem(1)} solid transparent`
      };
    }
    if (variant === "light") {
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: `var(--mantine-color-${color}-light)`,
            hover: `var(--mantine-color-${color}-light-hover)`,
            color: `var(--mantine-color-${color}-light-color)`,
            border: `${rem(1)} solid transparent`
          };
        }
        const parsedColor = theme.colors[parsed.color][parsed.shade];
        return {
          background: rgba(parsedColor, 0.1),
          hover: rgba(parsedColor, 0.12),
          color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: rgba(color, 0.1),
        hover: rgba(color, 0.12),
        color,
        border: `${rem(1)} solid transparent`
      };
    }
    if (variant === "outline") {
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: "transparent",
            hover: `var(--mantine-color-${color}-outline-hover)`,
            color: `var(--mantine-color-${color}-outline)`,
            border: `${rem(1)} solid var(--mantine-color-${color}-outline)`
          };
        }
        return {
          background: "transparent",
          hover: rgba(theme.colors[parsed.color][parsed.shade], 0.05),
          color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
          border: `${rem(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
        };
      }
      return {
        background: "transparent",
        hover: rgba(color, 0.05),
        color,
        border: `${rem(1)} solid ${color}`
      };
    }
    if (variant === "subtle") {
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: "transparent",
            hover: `var(--mantine-color-${color}-light-hover)`,
            color: `var(--mantine-color-${color}-light-color)`,
            border: `${rem(1)} solid transparent`
          };
        }
        const parsedColor = theme.colors[parsed.color][parsed.shade];
        return {
          background: "transparent",
          hover: rgba(parsedColor, 0.12),
          color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: rgba(color, 0.12),
        color,
        border: `${rem(1)} solid transparent`
      };
    }
    if (variant === "transparent") {
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: "transparent",
            hover: "transparent",
            color: `var(--mantine-color-${color}-light-color)`,
            border: `${rem(1)} solid transparent`
          };
        }
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color,
        border: `${rem(1)} solid transparent`
      };
    }
    if (variant === "white") {
      if (parsed.isThemeColor) {
        if (parsed.shade === void 0) {
          return {
            background: "var(--mantine-color-white)",
            hover: darken(theme.white, 0.01),
            color: `var(--mantine-color-${color}-filled)`,
            border: `${rem(1)} solid transparent`
          };
        }
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
          border: `${rem(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color,
        border: `${rem(1)} solid transparent`
      };
    }
    if (variant === "gradient") {
      return {
        background: getGradient(gradient, theme),
        hover: getGradient(gradient, theme),
        color: "var(--mantine-color-white)",
        border: "none"
      };
    }
    if (variant === "default") {
      return {
        background: "var(--mantine-color-default)",
        hover: "var(--mantine-color-default-hover)",
        color: "var(--mantine-color-default-color)",
        border: `${rem(1)} solid var(--mantine-color-default-border)`
      };
    }
    return {};
  };
  const DEFAULT_COLORS = {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969",
      "#424242",
      "#3b3b3b",
      "#2e2e2e",
      "#242424",
      "#1f1f1f",
      "#141414"
    ],
    gray: [
      "#f8f9fa",
      "#f1f3f5",
      "#e9ecef",
      "#dee2e6",
      "#ced4da",
      "#adb5bd",
      "#868e96",
      "#495057",
      "#343a40",
      "#212529"
    ],
    red: [
      "#fff5f5",
      "#ffe3e3",
      "#ffc9c9",
      "#ffa8a8",
      "#ff8787",
      "#ff6b6b",
      "#fa5252",
      "#f03e3e",
      "#e03131",
      "#c92a2a"
    ],
    pink: [
      "#fff0f6",
      "#ffdeeb",
      "#fcc2d7",
      "#faa2c1",
      "#f783ac",
      "#f06595",
      "#e64980",
      "#d6336c",
      "#c2255c",
      "#a61e4d"
    ],
    grape: [
      "#f8f0fc",
      "#f3d9fa",
      "#eebefa",
      "#e599f7",
      "#da77f2",
      "#cc5de8",
      "#be4bdb",
      "#ae3ec9",
      "#9c36b5",
      "#862e9c"
    ],
    violet: [
      "#f3f0ff",
      "#e5dbff",
      "#d0bfff",
      "#b197fc",
      "#9775fa",
      "#845ef7",
      "#7950f2",
      "#7048e8",
      "#6741d9",
      "#5f3dc4"
    ],
    indigo: [
      "#edf2ff",
      "#dbe4ff",
      "#bac8ff",
      "#91a7ff",
      "#748ffc",
      "#5c7cfa",
      "#4c6ef5",
      "#4263eb",
      "#3b5bdb",
      "#364fc7"
    ],
    blue: [
      "#e7f5ff",
      "#d0ebff",
      "#a5d8ff",
      "#74c0fc",
      "#4dabf7",
      "#339af0",
      "#228be6",
      "#1c7ed6",
      "#1971c2",
      "#1864ab"
    ],
    cyan: [
      "#e3fafc",
      "#c5f6fa",
      "#99e9f2",
      "#66d9e8",
      "#3bc9db",
      "#22b8cf",
      "#15aabf",
      "#1098ad",
      "#0c8599",
      "#0b7285"
    ],
    teal: [
      "#e6fcf5",
      "#c3fae8",
      "#96f2d7",
      "#63e6be",
      "#38d9a9",
      "#20c997",
      "#12b886",
      "#0ca678",
      "#099268",
      "#087f5b"
    ],
    green: [
      "#ebfbee",
      "#d3f9d8",
      "#b2f2bb",
      "#8ce99a",
      "#69db7c",
      "#51cf66",
      "#40c057",
      "#37b24d",
      "#2f9e44",
      "#2b8a3e"
    ],
    lime: [
      "#f4fce3",
      "#e9fac8",
      "#d8f5a2",
      "#c0eb75",
      "#a9e34b",
      "#94d82d",
      "#82c91e",
      "#74b816",
      "#66a80f",
      "#5c940d"
    ],
    yellow: [
      "#fff9db",
      "#fff3bf",
      "#ffec99",
      "#ffe066",
      "#ffd43b",
      "#fcc419",
      "#fab005",
      "#f59f00",
      "#f08c00",
      "#e67700"
    ],
    orange: [
      "#fff4e6",
      "#ffe8cc",
      "#ffd8a8",
      "#ffc078",
      "#ffa94d",
      "#ff922b",
      "#fd7e14",
      "#f76707",
      "#e8590c",
      "#d9480f"
    ]
  };
  const DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
  const DEFAULT_THEME = {
    scale: 1,
    fontSmoothing: true,
    focusRing: "auto",
    white: "#fff",
    black: "#000",
    colors: DEFAULT_COLORS,
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "blue",
    variantColorResolver: defaultVariantColorsResolver,
    autoContrast: false,
    luminanceThreshold: 0.3,
    fontFamily: DEFAULT_FONT_FAMILY,
    fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    respectReducedMotion: false,
    cursorType: "default",
    defaultGradient: { from: "blue", to: "cyan", deg: 45 },
    defaultRadius: "sm",
    activeClassName: "mantine-active",
    focusClassName: "",
    headings: {
      fontFamily: DEFAULT_FONT_FAMILY,
      fontWeight: "700",
      textWrap: "wrap",
      sizes: {
        h1: { fontSize: rem(34), lineHeight: "1.3" },
        h2: { fontSize: rem(26), lineHeight: "1.35" },
        h3: { fontSize: rem(22), lineHeight: "1.4" },
        h4: { fontSize: rem(18), lineHeight: "1.45" },
        h5: { fontSize: rem(16), lineHeight: "1.5" },
        h6: { fontSize: rem(14), lineHeight: "1.5" }
      }
    },
    fontSizes: {
      xs: rem(12),
      sm: rem(14),
      md: rem(16),
      lg: rem(18),
      xl: rem(20)
    },
    lineHeights: {
      xs: "1.4",
      sm: "1.45",
      md: "1.55",
      lg: "1.6",
      xl: "1.65"
    },
    radius: {
      xs: rem(2),
      sm: rem(4),
      md: rem(8),
      lg: rem(16),
      xl: rem(32)
    },
    spacing: {
      xs: rem(10),
      sm: rem(12),
      md: rem(16),
      lg: rem(20),
      xl: rem(32)
    },
    breakpoints: {
      xs: "36em",
      sm: "48em",
      md: "62em",
      lg: "75em",
      xl: "88em"
    },
    shadows: {
      xs: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), 0 ${rem(1)} ${rem(2)} rgba(0, 0, 0, 0.1)`,
      sm: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(10)} ${rem(
        15
      )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(7)} ${rem(7)} ${rem(-5)}`,
      md: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(20)} ${rem(
        25
      )} ${rem(-5)}, rgba(0, 0, 0, 0.04) 0 ${rem(10)} ${rem(10)} ${rem(-5)}`,
      lg: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(28)} ${rem(
        23
      )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(12)} ${rem(12)} ${rem(-7)}`,
      xl: `0 ${rem(1)} ${rem(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${rem(36)} ${rem(
        28
      )} ${rem(-7)}, rgba(0, 0, 0, 0.04) 0 ${rem(17)} ${rem(17)} ${rem(-7)}`
    },
    other: {},
    components: {}
  };
  function isMantineColorScheme(value) {
    return value === "auto" || value === "dark" || value === "light";
  }
  function localStorageColorSchemeManager({
    key = "mantine-color-scheme-value"
  } = {}) {
    let handleStorageEvent;
    return {
      get: (defaultValue) => {
        if (typeof window === "undefined") {
          return defaultValue;
        }
        try {
          const storedColorScheme = window.localStorage.getItem(key);
          return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
        } catch {
          return defaultValue;
        }
      },
      set: (value) => {
        try {
          window.localStorage.setItem(key, value);
        } catch (error) {
          console.warn(
            "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
            error
          );
        }
      },
      subscribe: (onUpdate) => {
        handleStorageEvent = (event) => {
          if (event.storageArea === window.localStorage && event.key === key) {
            isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
          }
        };
        window.addEventListener("storage", handleStorageEvent);
      },
      unsubscribe: () => {
        window.removeEventListener("storage", handleStorageEvent);
      },
      clear: () => {
        window.localStorage.removeItem(key);
      }
    };
  }
  const INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color";
  const INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
  function isValidPrimaryShade(shade) {
    if (shade < 0 || shade > 9) {
      return false;
    }
    return parseInt(shade.toString(), 10) === shade;
  }
  function validateMantineTheme(theme) {
    if (!(theme.primaryColor in theme.colors)) {
      throw new Error(INVALID_PRIMARY_COLOR_ERROR);
    }
    if (typeof theme.primaryShade === "object") {
      if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
        throw new Error(INVALID_PRIMARY_SHADE_ERROR);
      }
    }
    if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  function mergeMantineTheme(currentTheme, themeOverride) {
    var _a;
    if (!themeOverride) {
      validateMantineTheme(currentTheme);
      return currentTheme;
    }
    const result = deepMerge(currentTheme, themeOverride);
    if (themeOverride.fontFamily && !((_a = themeOverride.headings) == null ? void 0 : _a.fontFamily)) {
      result.headings.fontFamily = themeOverride.fontFamily;
    }
    validateMantineTheme(result);
    return result;
  }
  const MantineThemeContext = reactExports.createContext(null);
  const useSafeMantineTheme = () => reactExports.useContext(MantineThemeContext) || DEFAULT_THEME;
  function useMantineTheme() {
    const ctx = reactExports.useContext(MantineThemeContext);
    if (!ctx) {
      throw new Error(
        "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
      );
    }
    return ctx;
  }
  function MantineThemeProvider({
    theme,
    children,
    inherit = true
  }) {
    const parentTheme = useSafeMantineTheme();
    const mergedTheme = reactExports.useMemo(
      () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
      [theme, parentTheme, inherit]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MantineThemeContext.Provider, { value: mergedTheme, children });
  }
  MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";
  function MantineClasses() {
    const theme = useMantineTheme();
    const nonce = useMantineStyleNonce();
    const classes2 = keys(theme.breakpoints).reduce((acc, breakpoint) => {
      const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
      const pxValue = px(theme.breakpoints[breakpoint]);
      const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : em(pxValue - 0.1);
      const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : em(pxValue);
      return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
    }, "");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        "data-mantine-styles": "classes",
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: { __html: classes2 }
      }
    );
  }
  function cssVariablesObjectToString(variables) {
    return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
  }
  function wrapWithSelector(selectors, code) {
    const _selectors = Array.isArray(selectors) ? selectors : [selectors];
    return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
  }
  function convertCssVariables(input, selector) {
    const sharedVariables = cssVariablesObjectToString(input.variables);
    const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
    const dark = cssVariablesObjectToString(input.dark);
    const light = cssVariablesObjectToString(input.light);
    const darkForced = dark ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="dark"])`, dark) : wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
    const lightForced = light ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="light"])`, light) : wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
    return `${shared}${darkForced}${lightForced}`;
  }
  function getContrastColor({ color, theme, autoContrast }) {
    const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
    if (!_autoContrast) {
      return "var(--mantine-color-white)";
    }
    const parsed = parseThemeColor({ color: color || theme.primaryColor, theme });
    return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
  }
  function getPrimaryContrastColor(theme, colorScheme) {
    return getContrastColor({
      color: theme.colors[theme.primaryColor][getPrimaryShade(theme, colorScheme)],
      theme,
      autoContrast: null
    });
  }
  function getCSSColorVariables({
    theme,
    color,
    colorScheme,
    name = color,
    withColorValues = true
  }) {
    if (!theme.colors[color]) {
      return {};
    }
    if (colorScheme === "light") {
      const primaryShade2 = getPrimaryShade(theme, "light");
      const dynamicVariables2 = {
        [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
        [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
        [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
        [`--mantine-color-${name}-light`]: alpha(theme.colors[color][primaryShade2], 0.1),
        [`--mantine-color-${name}-light-hover`]: alpha(theme.colors[color][primaryShade2], 0.12),
        [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
        [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
        [`--mantine-color-${name}-outline-hover`]: alpha(theme.colors[color][primaryShade2], 0.05)
      };
      if (!withColorValues) {
        return dynamicVariables2;
      }
      return {
        [`--mantine-color-${name}-0`]: theme.colors[color][0],
        [`--mantine-color-${name}-1`]: theme.colors[color][1],
        [`--mantine-color-${name}-2`]: theme.colors[color][2],
        [`--mantine-color-${name}-3`]: theme.colors[color][3],
        [`--mantine-color-${name}-4`]: theme.colors[color][4],
        [`--mantine-color-${name}-5`]: theme.colors[color][5],
        [`--mantine-color-${name}-6`]: theme.colors[color][6],
        [`--mantine-color-${name}-7`]: theme.colors[color][7],
        [`--mantine-color-${name}-8`]: theme.colors[color][8],
        [`--mantine-color-${name}-9`]: theme.colors[color][9],
        ...dynamicVariables2
      };
    }
    const primaryShade = getPrimaryShade(theme, "dark");
    const dynamicVariables = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
      [`--mantine-color-${name}-light`]: alpha(
        theme.colors[color][Math.max(0, primaryShade - 2)],
        0.15
      ),
      [`--mantine-color-${name}-light-hover`]: alpha(
        theme.colors[color][Math.max(0, primaryShade - 2)],
        0.2
      ),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
      [`--mantine-color-${name}-outline-hover`]: alpha(
        theme.colors[color][Math.max(primaryShade - 4, 0)],
        0.05
      )
    };
    if (!withColorValues) {
      return dynamicVariables;
    }
    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables
    };
  }
  function isVirtualColor(value) {
    return !!value && typeof value === "object" && "mantine-virtual-color" in value;
  }
  function assignSizeVariables(variables, sizes, name) {
    keys(sizes).forEach(
      (size2) => Object.assign(variables, { [`--mantine-${name}-${size2}`]: sizes[size2] })
    );
  }
  const defaultCssVariablesResolver = (theme) => {
    const lightPrimaryShade = getPrimaryShade(theme, "light");
    const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : rem(theme.defaultRadius);
    const result = {
      variables: {
        "--mantine-scale": theme.scale.toString(),
        "--mantine-cursor-type": theme.cursorType,
        "--mantine-color-scheme": "light dark",
        "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
        "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
        "--mantine-color-white": theme.white,
        "--mantine-color-black": theme.black,
        "--mantine-line-height": theme.lineHeights.md,
        "--mantine-font-family": theme.fontFamily,
        "--mantine-font-family-monospace": theme.fontFamilyMonospace,
        "--mantine-font-family-headings": theme.headings.fontFamily,
        "--mantine-heading-font-weight": theme.headings.fontWeight,
        "--mantine-heading-text-wrap": theme.headings.textWrap,
        "--mantine-radius-default": defaultRadius,
        // Primary colors
        "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
        "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
        "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
        "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
        "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
      },
      light: {
        "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
        "--mantine-color-bright": "var(--mantine-color-black)",
        "--mantine-color-text": theme.black,
        "--mantine-color-body": theme.white,
        "--mantine-color-error": "var(--mantine-color-red-6)",
        "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
        "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
        "--mantine-color-default": "var(--mantine-color-white)",
        "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
        "--mantine-color-default-color": "var(--mantine-color-black)",
        "--mantine-color-default-border": "var(--mantine-color-gray-4)",
        "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
      },
      dark: {
        "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
        "--mantine-color-bright": "var(--mantine-color-white)",
        "--mantine-color-text": "var(--mantine-color-dark-0)",
        "--mantine-color-body": "var(--mantine-color-dark-7)",
        "--mantine-color-error": "var(--mantine-color-red-8)",
        "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
        "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
        "--mantine-color-default": "var(--mantine-color-dark-6)",
        "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
        "--mantine-color-default-color": "var(--mantine-color-white)",
        "--mantine-color-default-border": "var(--mantine-color-dark-4)",
        "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
      }
    };
    assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
    assignSizeVariables(result.variables, theme.spacing, "spacing");
    assignSizeVariables(result.variables, theme.fontSizes, "font-size");
    assignSizeVariables(result.variables, theme.lineHeights, "line-height");
    assignSizeVariables(result.variables, theme.shadows, "shadow");
    assignSizeVariables(result.variables, theme.radius, "radius");
    theme.colors[theme.primaryColor].forEach((_, index2) => {
      result.variables[`--mantine-primary-color-${index2}`] = `var(--mantine-color-${theme.primaryColor}-${index2})`;
    });
    keys(theme.colors).forEach((color) => {
      const value = theme.colors[color];
      if (isVirtualColor(value)) {
        Object.assign(
          result.light,
          getCSSColorVariables({
            theme,
            name: value.name,
            color: value.light,
            colorScheme: "light",
            withColorValues: true
          })
        );
        Object.assign(
          result.dark,
          getCSSColorVariables({
            theme,
            name: value.name,
            color: value.dark,
            colorScheme: "dark",
            withColorValues: true
          })
        );
        return;
      }
      value.forEach((shade, index2) => {
        result.variables[`--mantine-color-${color}-${index2}`] = shade;
      });
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          color,
          colorScheme: "light",
          withColorValues: false
        })
      );
      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          color,
          colorScheme: "dark",
          withColorValues: false
        })
      );
    });
    const headings2 = theme.headings.sizes;
    keys(headings2).forEach((heading) => {
      result.variables[`--mantine-${heading}-font-size`] = headings2[heading].fontSize;
      result.variables[`--mantine-${heading}-line-height`] = headings2[heading].lineHeight;
      result.variables[`--mantine-${heading}-font-weight`] = headings2[heading].fontWeight || theme.headings.fontWeight;
    });
    return result;
  };
  function getMergedVariables({ theme, generator }) {
    const defaultResolver = defaultCssVariablesResolver(theme);
    const providerGenerator = generator == null ? void 0 : generator(theme);
    return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
  }
  const defaultCssVariables = defaultCssVariablesResolver(DEFAULT_THEME);
  function removeDefaultVariables(input) {
    const cleaned = {
      variables: {},
      light: {},
      dark: {}
    };
    keys(input.variables).forEach((key) => {
      if (defaultCssVariables.variables[key] !== input.variables[key]) {
        cleaned.variables[key] = input.variables[key];
      }
    });
    keys(input.light).forEach((key) => {
      if (defaultCssVariables.light[key] !== input.light[key]) {
        cleaned.light[key] = input.light[key];
      }
    });
    keys(input.dark).forEach((key) => {
      if (defaultCssVariables.dark[key] !== input.dark[key]) {
        cleaned.dark[key] = input.dark[key];
      }
    });
    return cleaned;
  }
  function getColorSchemeCssVariables(selector) {
    return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
  }
  function MantineCssVariables({
    cssVariablesSelector,
    deduplicateCssVariables
  }) {
    const theme = useMantineTheme();
    const nonce = useMantineStyleNonce();
    const generator = useMantineCssVariablesResolver();
    const mergedVariables = getMergedVariables({ theme, generator });
    const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
    const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
    const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
    if (css) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          "data-mantine-styles": true,
          nonce: nonce == null ? void 0 : nonce(),
          dangerouslySetInnerHTML: {
            __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
          }
        }
      );
    }
    return null;
  }
  MantineCssVariables.displayName = "@mantine/CssVariables";
  function suppressNextjsWarning() {
    const originalError = console.error;
    console.error = (...args) => {
      if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ;
      else {
        originalError(...args);
      }
    };
  }
  function setColorSchemeAttribute(colorScheme, getRootElement) {
    var _a, _b;
    const hasDarkColorScheme = typeof window !== "undefined" && "matchMedia" in window && ((_a = window.matchMedia("(prefers-color-scheme: dark)")) == null ? void 0 : _a.matches);
    const computedColorScheme = colorScheme !== "auto" ? colorScheme : hasDarkColorScheme ? "dark" : "light";
    (_b = getRootElement()) == null ? void 0 : _b.setAttribute("data-mantine-color-scheme", computedColorScheme);
  }
  function useProviderColorScheme({
    manager,
    defaultColorScheme,
    getRootElement,
    forceColorScheme
  }) {
    const media = reactExports.useRef(null);
    const [value, setValue] = reactExports.useState(() => manager.get(defaultColorScheme));
    const colorSchemeValue = forceColorScheme || value;
    const setColorScheme = reactExports.useCallback(
      (colorScheme) => {
        if (!forceColorScheme) {
          setColorSchemeAttribute(colorScheme, getRootElement);
          setValue(colorScheme);
          manager.set(colorScheme);
        }
      },
      [manager.set, colorSchemeValue, forceColorScheme]
    );
    const clearColorScheme = reactExports.useCallback(() => {
      setValue(defaultColorScheme);
      setColorSchemeAttribute(defaultColorScheme, getRootElement);
      manager.clear();
    }, [manager.clear, defaultColorScheme]);
    reactExports.useEffect(() => {
      manager.subscribe(setColorScheme);
      return manager.unsubscribe;
    }, [manager.subscribe, manager.unsubscribe]);
    useIsomorphicEffect(() => {
      setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
    }, []);
    reactExports.useEffect(() => {
      var _a;
      if (forceColorScheme) {
        setColorSchemeAttribute(forceColorScheme, getRootElement);
        return () => {
        };
      }
      if (forceColorScheme === void 0) {
        setColorSchemeAttribute(value, getRootElement);
      }
      if (typeof window !== "undefined" && "matchMedia" in window) {
        media.current = window.matchMedia("(prefers-color-scheme: dark)");
      }
      const listener = (event) => {
        if (value === "auto") {
          setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
        }
      };
      (_a = media.current) == null ? void 0 : _a.addEventListener("change", listener);
      return () => {
        var _a2;
        return (_a2 = media.current) == null ? void 0 : _a2.removeEventListener("change", listener);
      };
    }, [value, forceColorScheme]);
    return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
  }
  function useRespectReduceMotion({
    respectReducedMotion,
    getRootElement
  }) {
    useIsomorphicEffect(() => {
      var _a;
      if (respectReducedMotion) {
        (_a = getRootElement()) == null ? void 0 : _a.setAttribute("data-respect-reduced-motion", "true");
      }
    }, [respectReducedMotion]);
  }
  suppressNextjsWarning();
  function MantineProvider({
    theme,
    children,
    getStyleNonce,
    withStaticClasses = true,
    withGlobalClasses = true,
    deduplicateCssVariables = true,
    withCssVariables = true,
    cssVariablesSelector = ":root",
    classNamesPrefix = "mantine",
    colorSchemeManager = localStorageColorSchemeManager(),
    defaultColorScheme = "light",
    getRootElement = () => document.documentElement,
    cssVariablesResolver,
    forceColorScheme,
    stylesTransform
  }) {
    const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
      defaultColorScheme,
      forceColorScheme,
      manager: colorSchemeManager,
      getRootElement
    });
    useRespectReduceMotion({
      respectReducedMotion: (theme == null ? void 0 : theme.respectReducedMotion) || false,
      getRootElement
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      MantineContext.Provider,
      {
        value: {
          colorScheme,
          setColorScheme,
          clearColorScheme,
          getRootElement,
          classNamesPrefix,
          getStyleNonce,
          cssVariablesResolver,
          cssVariablesSelector,
          withStaticClasses,
          stylesTransform
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(MantineThemeProvider, { theme, children: [
          withCssVariables && /* @__PURE__ */ jsxRuntimeExports.jsx(
            MantineCssVariables,
            {
              cssVariablesSelector,
              deduplicateCssVariables
            }
          ),
          withGlobalClasses && /* @__PURE__ */ jsxRuntimeExports.jsx(MantineClasses, {}),
          children
        ] })
      }
    );
  }
  MantineProvider.displayName = "@mantine/core/MantineProvider";
  function useResolvedStylesApi({
    classNames,
    styles,
    props,
    stylesCtx
  }) {
    const theme = useMantineTheme();
    return {
      resolvedClassNames: resolveClassNames({
        theme,
        classNames,
        props,
        stylesCtx: stylesCtx || void 0
      }),
      resolvedStyles: resolveStyles({
        theme,
        styles,
        props,
        stylesCtx: stylesCtx || void 0
      })
    };
  }
  const FOCUS_CLASS_NAMES = {
    always: "mantine-focus-always",
    auto: "mantine-focus-auto",
    never: "mantine-focus-never"
  };
  function getGlobalClassNames({ theme, options, unstyled }) {
    return clsx(
      (options == null ? void 0 : options.focusable) && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
      (options == null ? void 0 : options.active) && !unstyled && theme.activeClassName
    );
  }
  function getOptionsClassNames({
    selector,
    stylesCtx,
    options,
    props,
    theme
  }) {
    return resolveClassNames({
      theme,
      classNames: options == null ? void 0 : options.classNames,
      props: (options == null ? void 0 : options.props) || props,
      stylesCtx
    })[selector];
  }
  function getResolvedClassNames({
    selector,
    stylesCtx,
    theme,
    classNames,
    props
  }) {
    return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
  }
  function getRootClassName({ rootSelector, selector, className }) {
    return rootSelector === selector ? className : void 0;
  }
  function getSelectorClassName({ selector, classes: classes2, unstyled }) {
    return unstyled ? void 0 : classes2[selector];
  }
  function getStaticClassNames({
    themeName,
    classNamesPrefix,
    selector,
    withStaticClass
  }) {
    if (withStaticClass === false) {
      return [];
    }
    return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
  }
  function getThemeClassNames({
    themeName,
    theme,
    selector,
    props,
    stylesCtx
  }) {
    return themeName.map(
      (n) => {
        var _a, _b;
        return (_b = resolveClassNames({
          theme,
          classNames: (_a = theme.components[n]) == null ? void 0 : _a.classNames,
          props,
          stylesCtx
        })) == null ? void 0 : _b[selector];
      }
    );
  }
  function getVariantClassName({
    options,
    classes: classes2,
    selector,
    unstyled
  }) {
    return (options == null ? void 0 : options.variant) && !unstyled ? classes2[`${selector}--${options.variant}`] : void 0;
  }
  function getClassName({
    theme,
    options,
    themeName,
    selector,
    classNamesPrefix,
    classNames,
    classes: classes2,
    unstyled,
    className,
    rootSelector,
    props,
    stylesCtx,
    withStaticClasses,
    headless,
    transformedStyles
  }) {
    return clsx(
      getGlobalClassNames({ theme, options, unstyled: unstyled || headless }),
      getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
      getVariantClassName({ options, classes: classes2, selector, unstyled }),
      getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
      getResolvedClassNames({ selector, stylesCtx, theme, classNames: transformedStyles, props }),
      getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
      getRootClassName({ rootSelector, selector, className }),
      getSelectorClassName({ selector, classes: classes2, unstyled: unstyled || headless }),
      withStaticClasses && !headless && getStaticClassNames({
        themeName,
        classNamesPrefix,
        selector,
        withStaticClass: options == null ? void 0 : options.withStaticClass
      }),
      options == null ? void 0 : options.className
    );
  }
  function getThemeStyles({
    theme,
    themeName,
    props,
    stylesCtx,
    selector
  }) {
    return themeName.map(
      (n) => {
        var _a;
        return resolveStyles({
          theme,
          styles: (_a = theme.components[n]) == null ? void 0 : _a.styles,
          props,
          stylesCtx
        })[selector];
      }
    ).reduce((acc, val) => ({ ...acc, ...val }), {});
  }
  function resolveStyle({ style, theme }) {
    if (Array.isArray(style)) {
      return [...style].reduce(
        (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
        {}
      );
    }
    if (typeof style === "function") {
      return style(theme);
    }
    if (style == null) {
      return {};
    }
    return style;
  }
  function mergeVars(vars) {
    return vars.reduce((acc, current) => {
      if (current) {
        Object.keys(current).forEach((key) => {
          acc[key] = { ...acc[key], ...filterProps(current[key]) };
        });
      }
      return acc;
    }, {});
  }
  function resolveVars({
    vars,
    varsResolver: varsResolver2,
    theme,
    props,
    stylesCtx,
    selector,
    themeName,
    headless
  }) {
    var _a;
    return (_a = mergeVars([
      headless ? {} : varsResolver2 == null ? void 0 : varsResolver2(theme, props, stylesCtx),
      ...themeName.map((name) => {
        var _a2, _b, _c;
        return (_c = (_b = (_a2 = theme.components) == null ? void 0 : _a2[name]) == null ? void 0 : _b.vars) == null ? void 0 : _c.call(_b, theme, props, stylesCtx);
      }),
      vars == null ? void 0 : vars(theme, props, stylesCtx)
    ])) == null ? void 0 : _a[selector];
  }
  function getStyle({
    theme,
    themeName,
    selector,
    options,
    props,
    stylesCtx,
    rootSelector,
    styles,
    style,
    vars,
    varsResolver: varsResolver2,
    headless,
    withStylesTransform
  }) {
    return {
      ...!withStylesTransform && getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
      ...!withStylesTransform && resolveStyles({ theme, styles, props, stylesCtx })[selector],
      ...!withStylesTransform && resolveStyles({ theme, styles: options == null ? void 0 : options.styles, props: (options == null ? void 0 : options.props) || props, stylesCtx })[selector],
      ...resolveVars({ theme, props, stylesCtx, vars, varsResolver: varsResolver2, selector, themeName, headless }),
      ...rootSelector === selector ? resolveStyle({ style, theme }) : null,
      ...resolveStyle({ style: options == null ? void 0 : options.style, theme })
    };
  }
  function useStylesTransform({ props, stylesCtx, themeName }) {
    var _a;
    const theme = useMantineTheme();
    const stylesTransform = (_a = useMantineStylesTransform()) == null ? void 0 : _a();
    const getTransformedStyles = (styles) => {
      if (!stylesTransform) {
        return [];
      }
      const transformedStyles = styles.map(
        (style) => stylesTransform(style, { props, theme, ctx: stylesCtx })
      );
      return [
        ...transformedStyles,
        ...themeName.map(
          (n) => {
            var _a2;
            return stylesTransform((_a2 = theme.components[n]) == null ? void 0 : _a2.styles, { props, theme, ctx: stylesCtx });
          }
        )
      ].filter(Boolean);
    };
    return {
      getTransformedStyles,
      withStylesTransform: !!stylesTransform
    };
  }
  function useStyles({
    name,
    classes: classes2,
    props,
    stylesCtx,
    className,
    style,
    rootSelector = "root",
    unstyled,
    classNames,
    styles,
    vars,
    varsResolver: varsResolver2
  }) {
    const theme = useMantineTheme();
    const classNamesPrefix = useMantineClassNamesPrefix();
    const withStaticClasses = useMantineWithStaticClasses();
    const headless = useMantineIsHeadless();
    const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
    const { withStylesTransform, getTransformedStyles } = useStylesTransform({
      props,
      stylesCtx,
      themeName
    });
    return (selector, options) => ({
      className: getClassName({
        theme,
        options,
        themeName,
        selector,
        classNamesPrefix,
        classNames,
        classes: classes2,
        unstyled,
        className,
        rootSelector,
        props,
        stylesCtx,
        withStaticClasses,
        headless,
        transformedStyles: getTransformedStyles([options == null ? void 0 : options.styles, styles])
      }),
      style: getStyle({
        theme,
        themeName,
        selector,
        options,
        props,
        stylesCtx,
        rootSelector,
        styles,
        style,
        vars,
        varsResolver: varsResolver2,
        headless,
        withStylesTransform
      })
    });
  }
  function getAutoContrastValue(autoContrast, theme) {
    return typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  }
  function useProps(component, defaultProps2, props) {
    var _a;
    const theme = useMantineTheme();
    const contextPropsPayload = (_a = theme.components[component]) == null ? void 0 : _a.defaultProps;
    const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
    return { ...defaultProps2, ...contextProps, ...filterProps(props) };
  }
  function createTheme(theme) {
    return theme;
  }
  function cssObjectToString(css) {
    return keys(css).reduce(
      (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
      ""
    ).trim();
  }
  function stylesToString({ selector, styles, media, container }) {
    const baseStyles = styles ? cssObjectToString(styles) : "";
    const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
    const containerStyles = !Array.isArray(container) ? [] : container.map(
      (item) => `@container ${item.query}{${selector}{${cssObjectToString(item.styles)}}}`
    );
    return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
  }
  function InlineStyles(props) {
    const nonce = useMantineStyleNonce();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        "data-mantine-styles": "inline",
        nonce: nonce == null ? void 0 : nonce(),
        dangerouslySetInnerHTML: { __html: stylesToString(props) }
      }
    );
  }
  function extractStyleProps(others) {
    const {
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      me,
      ms,
      p,
      px: px2,
      py,
      pt,
      pb,
      pl,
      pr,
      pe,
      ps,
      bd,
      bg,
      c,
      opacity,
      ff,
      fz,
      fw,
      lts,
      ta,
      lh,
      fs,
      tt,
      td,
      w,
      miw,
      maw,
      h,
      mih,
      mah,
      bgsz,
      bgp,
      bgr,
      bga,
      pos,
      top,
      left,
      bottom,
      right,
      inset,
      display,
      flex,
      hiddenFrom,
      visibleFrom,
      lightHidden,
      darkHidden,
      sx,
      ...rest
    } = others;
    const styleProps = filterProps({
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      me,
      ms,
      p,
      px: px2,
      py,
      pt,
      pb,
      pl,
      pr,
      pe,
      ps,
      bd,
      bg,
      c,
      opacity,
      ff,
      fz,
      fw,
      lts,
      ta,
      lh,
      fs,
      tt,
      td,
      w,
      miw,
      maw,
      h,
      mih,
      mah,
      bgsz,
      bgp,
      bgr,
      bga,
      pos,
      top,
      left,
      bottom,
      right,
      inset,
      display,
      flex,
      hiddenFrom,
      visibleFrom,
      lightHidden,
      darkHidden,
      sx
    });
    return { styleProps, rest };
  }
  const STYlE_PROPS_DATA = {
    m: { type: "spacing", property: "margin" },
    mt: { type: "spacing", property: "marginTop" },
    mb: { type: "spacing", property: "marginBottom" },
    ml: { type: "spacing", property: "marginLeft" },
    mr: { type: "spacing", property: "marginRight" },
    ms: { type: "spacing", property: "marginInlineStart" },
    me: { type: "spacing", property: "marginInlineEnd" },
    mx: { type: "spacing", property: "marginInline" },
    my: { type: "spacing", property: "marginBlock" },
    p: { type: "spacing", property: "padding" },
    pt: { type: "spacing", property: "paddingTop" },
    pb: { type: "spacing", property: "paddingBottom" },
    pl: { type: "spacing", property: "paddingLeft" },
    pr: { type: "spacing", property: "paddingRight" },
    ps: { type: "spacing", property: "paddingInlineStart" },
    pe: { type: "spacing", property: "paddingInlineEnd" },
    px: { type: "spacing", property: "paddingInline" },
    py: { type: "spacing", property: "paddingBlock" },
    bd: { type: "border", property: "border" },
    bg: { type: "color", property: "background" },
    c: { type: "textColor", property: "color" },
    opacity: { type: "identity", property: "opacity" },
    ff: { type: "fontFamily", property: "fontFamily" },
    fz: { type: "fontSize", property: "fontSize" },
    fw: { type: "identity", property: "fontWeight" },
    lts: { type: "size", property: "letterSpacing" },
    ta: { type: "identity", property: "textAlign" },
    lh: { type: "lineHeight", property: "lineHeight" },
    fs: { type: "identity", property: "fontStyle" },
    tt: { type: "identity", property: "textTransform" },
    td: { type: "identity", property: "textDecoration" },
    w: { type: "spacing", property: "width" },
    miw: { type: "spacing", property: "minWidth" },
    maw: { type: "spacing", property: "maxWidth" },
    h: { type: "spacing", property: "height" },
    mih: { type: "spacing", property: "minHeight" },
    mah: { type: "spacing", property: "maxHeight" },
    bgsz: { type: "size", property: "backgroundSize" },
    bgp: { type: "identity", property: "backgroundPosition" },
    bgr: { type: "identity", property: "backgroundRepeat" },
    bga: { type: "identity", property: "backgroundAttachment" },
    pos: { type: "identity", property: "position" },
    top: { type: "size", property: "top" },
    left: { type: "size", property: "left" },
    bottom: { type: "size", property: "bottom" },
    right: { type: "size", property: "right" },
    inset: { type: "size", property: "inset" },
    display: { type: "identity", property: "display" },
    flex: { type: "identity", property: "flex" }
  };
  function colorResolver(color, theme) {
    const parsedColor = parseThemeColor({ color, theme });
    if (parsedColor.color === "dimmed") {
      return "var(--mantine-color-dimmed)";
    }
    if (parsedColor.color === "bright") {
      return "var(--mantine-color-bright)";
    }
    return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
  }
  function textColorResolver(color, theme) {
    const parsedColor = parseThemeColor({ color, theme });
    if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
      return `var(--mantine-color-${parsedColor.color}-text)`;
    }
    return colorResolver(color, theme);
  }
  function borderResolver(value, theme) {
    if (typeof value === "number") {
      return rem(value);
    }
    if (typeof value === "string") {
      const [size2, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
      let result = `${rem(size2)}`;
      style && (result += ` ${style}`);
      colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(" "), theme)}`);
      return result.trim();
    }
    return value;
  }
  const values = {
    text: "var(--mantine-font-family)",
    mono: "var(--mantine-font-family-monospace)",
    monospace: "var(--mantine-font-family-monospace)",
    heading: "var(--mantine-font-family-headings)",
    headings: "var(--mantine-font-family-headings)"
  };
  function fontFamilyResolver(fontFamily) {
    if (typeof fontFamily === "string" && fontFamily in values) {
      return values[fontFamily];
    }
    return fontFamily;
  }
  const headings$1 = ["h1", "h2", "h3", "h4", "h5", "h6"];
  function fontSizeResolver(value, theme) {
    if (typeof value === "string" && value in theme.fontSizes) {
      return `var(--mantine-font-size-${value})`;
    }
    if (typeof value === "string" && headings$1.includes(value)) {
      return `var(--mantine-${value}-font-size)`;
    }
    if (typeof value === "number") {
      return rem(value);
    }
    if (typeof value === "string") {
      return rem(value);
    }
    return value;
  }
  function identityResolver(value) {
    return value;
  }
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  function lineHeightResolver(value, theme) {
    if (typeof value === "string" && value in theme.lineHeights) {
      return `var(--mantine-line-height-${value})`;
    }
    if (typeof value === "string" && headings.includes(value)) {
      return `var(--mantine-${value}-line-height)`;
    }
    return value;
  }
  function sizeResolver(value) {
    if (typeof value === "number") {
      return rem(value);
    }
    return value;
  }
  function spacingResolver(value, theme) {
    if (typeof value === "number") {
      return rem(value);
    }
    if (typeof value === "string") {
      const mod = value.replace("-", "");
      if (!(mod in theme.spacing)) {
        return rem(value);
      }
      const variable = `--mantine-spacing-${mod}`;
      return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
    }
    return value;
  }
  const resolvers = {
    color: colorResolver,
    textColor: textColorResolver,
    fontSize: fontSizeResolver,
    spacing: spacingResolver,
    identity: identityResolver,
    size: sizeResolver,
    lineHeight: lineHeightResolver,
    fontFamily: fontFamilyResolver,
    border: borderResolver
  };
  function replaceMediaQuery(query) {
    return query.replace("(min-width: ", "").replace("em)", "");
  }
  function sortMediaQueries({
    media,
    ...props
  }) {
    const breakpoints = Object.keys(media);
    const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
    return { ...props, media: sortedMedia };
  }
  function hasResponsiveStyles(styleProp) {
    if (typeof styleProp !== "object" || styleProp === null) {
      return false;
    }
    const breakpoints = Object.keys(styleProp);
    if (breakpoints.length === 1 && breakpoints[0] === "base") {
      return false;
    }
    return true;
  }
  function getBaseValue(value) {
    if (typeof value === "object" && value !== null) {
      if ("base" in value) {
        return value.base;
      }
      return void 0;
    }
    return value;
  }
  function getBreakpointKeys(value) {
    if (typeof value === "object" && value !== null) {
      return keys(value).filter((key) => key !== "base");
    }
    return [];
  }
  function getBreakpointValue(value, breakpoint) {
    if (typeof value === "object" && value !== null && breakpoint in value) {
      return value[breakpoint];
    }
    return value;
  }
  function parseStyleProps({
    styleProps,
    data,
    theme
  }) {
    return sortMediaQueries(
      keys(styleProps).reduce(
        (acc, styleProp) => {
          if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
            return acc;
          }
          const propertyData = data[styleProp];
          const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
          const baseValue = getBaseValue(styleProps[styleProp]);
          if (!hasResponsiveStyles(styleProps[styleProp])) {
            properties.forEach((property) => {
              acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
            });
            return acc;
          }
          acc.hasResponsiveStyles = true;
          const breakpoints = getBreakpointKeys(styleProps[styleProp]);
          properties.forEach((property) => {
            if (baseValue) {
              acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
            }
            breakpoints.forEach((breakpoint) => {
              const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
              acc.media[bp] = {
                ...acc.media[bp],
                [property]: resolvers[propertyData.type](
                  getBreakpointValue(styleProps[styleProp], breakpoint),
                  theme
                )
              };
            });
          });
          return acc;
        },
        {
          hasResponsiveStyles: false,
          styles: {},
          inlineStyles: {},
          media: {}
        }
      )
    );
  }
  function useRandomClassName() {
    const id = reactExports.useId().replace(/:/g, "");
    return `__m__-${id}`;
  }
  function createPolymorphicComponent(component) {
    return component;
  }
  function transformModKey(key) {
    return key.startsWith("data-") ? key : `data-${key}`;
  }
  function getMod(props) {
    return Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (value === void 0 || value === "" || value === false || value === null) {
        return acc;
      }
      acc[transformModKey(key)] = props[key];
      return acc;
    }, {});
  }
  function getBoxMod(mod) {
    if (!mod) {
      return null;
    }
    if (typeof mod === "string") {
      return { [transformModKey(mod)]: true };
    }
    if (Array.isArray(mod)) {
      return [...mod].reduce(
        (acc, value) => ({ ...acc, ...getBoxMod(value) }),
        {}
      );
    }
    return getMod(mod);
  }
  function mergeStyles(styles, theme) {
    if (Array.isArray(styles)) {
      return [...styles].reduce(
        (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
        {}
      );
    }
    if (typeof styles === "function") {
      return styles(theme);
    }
    if (styles == null) {
      return {};
    }
    return styles;
  }
  function getBoxStyle({
    theme,
    style,
    vars,
    styleProps
  }) {
    const _style = mergeStyles(style, theme);
    const _vars = mergeStyles(vars, theme);
    return { ..._style, ..._vars, ...styleProps };
  }
  const _Box = reactExports.forwardRef(
    ({
      component,
      style,
      __vars,
      className,
      variant,
      mod,
      size: size2,
      hiddenFrom,
      visibleFrom,
      lightHidden,
      darkHidden,
      renderRoot,
      __size,
      ...others
    }, ref2) => {
      var _a;
      const theme = useMantineTheme();
      const Element2 = component || "div";
      const { styleProps, rest } = extractStyleProps(others);
      const useSxTransform = useMantineSxTransform();
      const transformedSx = (_a = useSxTransform == null ? void 0 : useSxTransform()) == null ? void 0 : _a(styleProps.sx);
      const responsiveClassName = useRandomClassName();
      const parsedStyleProps = parseStyleProps({
        styleProps,
        theme,
        data: STYlE_PROPS_DATA
      });
      const props = {
        ref: ref2,
        style: getBoxStyle({
          theme,
          style,
          vars: __vars,
          styleProps: parsedStyleProps.inlineStyles
        }),
        className: clsx(className, transformedSx, {
          [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
          "mantine-light-hidden": lightHidden,
          "mantine-dark-hidden": darkHidden,
          [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
          [`mantine-visible-from-${visibleFrom}`]: visibleFrom
        }),
        "data-variant": variant,
        "data-size": isNumberLike(size2) ? void 0 : size2 || void 0,
        size: __size,
        ...getBoxMod(mod),
        ...rest
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ jsxRuntimeExports.jsx(
          InlineStyles,
          {
            selector: `.${responsiveClassName}`,
            styles: parsedStyleProps.styles,
            media: parsedStyleProps.media
          }
        ),
        typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ jsxRuntimeExports.jsx(Element2, { ...props })
      ] });
    }
  );
  _Box.displayName = "@mantine/core/Box";
  const Box = createPolymorphicComponent(_Box);
  function identity(value) {
    return value;
  }
  function factory(ui) {
    const Component = reactExports.forwardRef(ui);
    Component.extend = identity;
    Component.withProps = (fixedProps) => {
      const Extended = reactExports.forwardRef((props, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...fixedProps, ...props, ref: ref2 }));
      Extended.extend = Component.extend;
      Extended.displayName = `WithProps(${Component.displayName})`;
      return Extended;
    };
    return Component;
  }
  function polymorphicFactory(ui) {
    const Component = reactExports.forwardRef(ui);
    Component.withProps = (fixedProps) => {
      const Extended = reactExports.forwardRef((props, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...fixedProps, ...props, ref: ref2 }));
      Extended.extend = Component.extend;
      Extended.displayName = `WithProps(${Component.displayName})`;
      return Extended;
    };
    Component.extend = identity;
    return Component;
  }
  const DirectionContext = reactExports.createContext({
    dir: "ltr",
    toggleDirection: () => {
    },
    setDirection: () => {
    }
  });
  function useDirection() {
    return reactExports.useContext(DirectionContext);
  }
  var reactDomExports = requireReactDom();
  const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
  var classes$a = { "root": "m_87cf2631" };
  const defaultProps$p = {
    __staticSelector: "UnstyledButton"
  };
  const UnstyledButton = polymorphicFactory(
    (_props, ref2) => {
      const props = useProps("UnstyledButton", defaultProps$p, _props);
      const {
        className,
        component = "button",
        __staticSelector,
        unstyled,
        classNames,
        styles,
        style,
        ...others
      } = props;
      const getStyles = useStyles({
        name: __staticSelector,
        props,
        classes: classes$a,
        className,
        style,
        classNames,
        styles,
        unstyled
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ...getStyles("root", { focusable: true }),
          component,
          ref: ref2,
          type: component === "button" ? "button" : void 0,
          ...others
        }
      );
    }
  );
  UnstyledButton.classes = classes$a;
  UnstyledButton.displayName = "@mantine/core/UnstyledButton";
  var classes$9 = { "root": "m_515a97f8" };
  const defaultProps$o = {};
  const VisuallyHidden = factory((_props, ref2) => {
    const props = useProps("VisuallyHidden", defaultProps$o, _props);
    const { classNames, className, style, styles, unstyled, vars, ...others } = props;
    const getStyles = useStyles({
      name: "VisuallyHidden",
      classes: classes$9,
      props,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ref: ref2, ...getStyles("root"), ...others });
  });
  VisuallyHidden.classes = classes$9;
  VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isTopLayer(element) {
    return [":popover-open", ":modal"].some((selector) => {
      try {
        return element.matches(selector);
      } catch (e) {
        return false;
      }
    });
  }
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = (v) => ({
    x: v,
    y: v
  });
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  const oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  const arrow$3 = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  const flip$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  function getBoundingRect(rects) {
    const minX = min(...rects.map((rect) => rect.left));
    const minY = min(...rects.map((rect) => rect.top));
    const maxX = max(...rects.map((rect) => rect.right));
    const maxY = max(...rects.map((rect) => rect.bottom));
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
    const groups = [];
    let prevRect = null;
    for (let i = 0; i < sortedRects.length; i++) {
      const rect = sortedRects[i];
      if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
        groups.push([rect]);
      } else {
        groups[groups.length - 1].push(rect);
      }
      prevRect = rect;
    }
    return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
  }
  const inline$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "inline",
      options,
      async fn(state) {
        const {
          placement,
          elements,
          rects,
          platform: platform2,
          strategy
        } = state;
        const {
          padding = 2,
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getPaddingObject(padding);
        function getBoundingClientRect2() {
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }
          if (clientRects.length >= 2) {
            if (getSideAxis(placement) === "y") {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === "top";
              const top2 = firstRect.top;
              const bottom2 = lastRect.bottom;
              const left2 = isTop ? firstRect.left : lastRect.left;
              const right2 = isTop ? firstRect.right : lastRect.right;
              const width2 = right2 - left2;
              const height2 = bottom2 - top2;
              return {
                top: top2,
                bottom: bottom2,
                left: left2,
                right: right2,
                width: width2,
                height: height2,
                x: left2,
                y: top2
              };
            }
            const isLeftSide = getSide(placement) === "left";
            const maxRight = max(...clientRects.map((rect) => rect.right));
            const minLeft = min(...clientRects.map((rect) => rect.left));
            const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = await platform2.getElementRects({
          reference: {
            getBoundingClientRect: getBoundingClientRect2
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  const offset$2 = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  const shift$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y2
              } = _ref;
              return {
                x: x2,
                y: y2
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  const limitShift$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      options,
      fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset: offset2 = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const crossAxis = getSideAxis(placement);
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset2, state);
        const computedOffset = typeof rawOffset === "number" ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === "y" ? "height" : "width";
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === "y" ? "width" : "height";
          const isOriginSide = ["top", "left"].includes(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };
  const size$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };
  function getCssDimensions(element) {
    const css = getComputedStyle(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }
  const noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
      ignoreScrollbarX = false;
    }
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
      // RTL <body> scrollbar.
      getWindowScrollBarX(documentElement, htmlRect)
    ));
    const y = htmlRect.top + scroll.scrollTop;
    return {
      x,
      y
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle(body).direction === "rtl") {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x,
      y,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const offset$1 = offset$2;
  const shift$1 = shift$2;
  const flip$1 = flip$2;
  const size$1 = size$2;
  const arrow$2 = arrow$3;
  const inline$1 = inline$2;
  const limitShift$1 = limitShift$2;
  const computePosition = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  var index$3 = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (typeof a !== typeof b) {
      return false;
    }
    if (typeof a === "function" && a.toString() === b.toString()) {
      return true;
    }
    let length;
    let i;
    let keys2;
    if (a && b && typeof a === "object") {
      if (Array.isArray(a)) {
        length = a.length;
        if (length !== b.length) return false;
        for (i = length; i-- !== 0; ) {
          if (!deepEqual(a[i], b[i])) {
            return false;
          }
        }
        return true;
      }
      keys2 = Object.keys(a);
      length = keys2.length;
      if (length !== Object.keys(b).length) {
        return false;
      }
      for (i = length; i-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b, keys2[i])) {
          return false;
        }
      }
      for (i = length; i-- !== 0; ) {
        const key = keys2[i];
        if (key === "_owner" && a.$$typeof) {
          continue;
        }
        if (!deepEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref2 = reactExports.useRef(value);
    index$3(() => {
      ref2.current = value;
    });
    return ref2;
  }
  function useFloating$1(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = reactExports.useState({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = reactExports.useState(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = reactExports.useState(null);
    const [_floating, _setFloating] = reactExports.useState(null);
    const setReference = reactExports.useCallback((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = reactExports.useCallback((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = reactExports.useRef(null);
    const floatingRef = reactExports.useRef(null);
    const dataRef = reactExports.useRef(data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const openRef = useLatestRef(open);
    const update = reactExports.useCallback(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = {
          ...data2,
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          reactDomExports.flushSync(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index$3(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => ({
          ...data2,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = reactExports.useRef(false);
    index$3(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index$3(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        }
        update();
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = reactExports.useMemo(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = reactExports.useMemo(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = reactExports.useMemo(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x = roundByDPR(elements.floating, data.x);
      const y = roundByDPR(elements.floating, data.y);
      if (transform) {
        return {
          ...initialStyles,
          transform: "translate(" + x + "px, " + y + "px)",
          ...getDPR(elements.floating) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy,
        left: x,
        top: y
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return reactExports.useMemo(() => ({
      ...data,
      update,
      refs,
      elements,
      floatingStyles
    }), [data, update, refs, elements, floatingStyles]);
  }
  const arrow$1 = (options) => {
    function isRef(value) {
      return {}.hasOwnProperty.call(value, "current");
    }
    return {
      name: "arrow",
      options,
      fn(state) {
        const {
          element,
          padding
        } = typeof options === "function" ? options(state) : options;
        if (element && isRef(element)) {
          if (element.current != null) {
            return arrow$2({
              element: element.current,
              padding
            }).fn(state);
          }
          return {};
        }
        if (element) {
          return arrow$2({
            element,
            padding
          }).fn(state);
        }
        return {};
      }
    };
  };
  const offset = (options, deps) => ({
    ...offset$1(options),
    options: [options, deps]
  });
  const shift = (options, deps) => ({
    ...shift$1(options),
    options: [options, deps]
  });
  const limitShift = (options, deps) => ({
    ...limitShift$1(options),
    options: [options, deps]
  });
  const flip = (options, deps) => ({
    ...flip$1(options),
    options: [options, deps]
  });
  const size = (options, deps) => ({
    ...size$1(options),
    options: [options, deps]
  });
  const inline = (options, deps) => ({
    ...inline$1(options),
    options: [options, deps]
  });
  const arrow = (options, deps) => ({
    ...arrow$1(options),
    options: [options, deps]
  });
  const SafeReact = {
    ...React$1
  };
  const useInsertionEffect = SafeReact.useInsertionEffect;
  const useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
  function useEffectEvent(callback) {
    const ref2 = reactExports.useRef(() => {
    });
    useSafeInsertionEffect(() => {
      ref2.current = callback;
    });
    return reactExports.useCallback(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref2.current == null ? void 0 : ref2.current(...args);
    }, []);
  }
  var index$2 = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
  let serverHandoffComplete = false;
  let count = 0;
  const genId = () => (
    // Ensure the id is unique with multiple independent versions of Floating UI
    // on <React 18
    "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
  );
  function useFloatingId() {
    const [id, setId] = reactExports.useState(() => serverHandoffComplete ? genId() : void 0);
    index$2(() => {
      if (id == null) {
        setId(genId());
      }
    }, []);
    reactExports.useEffect(() => {
      serverHandoffComplete = true;
    }, []);
    return id;
  }
  const useReactId = SafeReact.useId;
  const useId = useReactId || useFloatingId;
  function createPubSub() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        var _map$get;
        (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
      },
      on(event, listener) {
        map.set(event, [...map.get(event) || [], listener]);
      },
      off(event, listener) {
        var _map$get2;
        map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l) => l !== listener)) || []);
      }
    };
  }
  const FloatingNodeContext = /* @__PURE__ */ reactExports.createContext(null);
  const FloatingTreeContext = /* @__PURE__ */ reactExports.createContext(null);
  const useFloatingParentNodeId = () => {
    var _React$useContext;
    return ((_React$useContext = reactExports.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
  };
  const useFloatingTree = () => reactExports.useContext(FloatingTreeContext);
  function useFloatingRootContext(options) {
    const {
      open = false,
      onOpenChange: onOpenChangeProp,
      elements: elementsProp
    } = options;
    const floatingId = useId();
    const dataRef = reactExports.useRef({});
    const [events] = reactExports.useState(() => createPubSub());
    const nested = useFloatingParentNodeId() != null;
    const [positionReference, setPositionReference] = reactExports.useState(elementsProp.reference);
    const onOpenChange = useEffectEvent((open2, event, reason) => {
      dataRef.current.openEvent = open2 ? event : void 0;
      events.emit("openchange", {
        open: open2,
        event,
        reason,
        nested
      });
      onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
    });
    const refs = reactExports.useMemo(() => ({
      setPositionReference
    }), []);
    const elements = reactExports.useMemo(() => ({
      reference: positionReference || elementsProp.reference || null,
      floating: elementsProp.floating || null,
      domReference: elementsProp.reference
    }), [positionReference, elementsProp.reference, elementsProp.floating]);
    return reactExports.useMemo(() => ({
      dataRef,
      open,
      onOpenChange,
      elements,
      events,
      floatingId,
      refs
    }), [open, onOpenChange, elements, events, floatingId, refs]);
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      nodeId
    } = options;
    const internalRootContext = useFloatingRootContext({
      ...options,
      elements: {
        reference: null,
        floating: null,
        ...options.elements
      }
    });
    const rootContext = options.rootContext || internalRootContext;
    const computedElements = rootContext.elements;
    const [_domReference, setDomReference] = reactExports.useState(null);
    const [positionReference, _setPositionReference] = reactExports.useState(null);
    const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
    const domReference = optionDomReference || _domReference;
    const domReferenceRef = reactExports.useRef(null);
    const tree = useFloatingTree();
    index$2(() => {
      if (domReference) {
        domReferenceRef.current = domReference;
      }
    }, [domReference]);
    const position = useFloating$1({
      ...options,
      elements: {
        ...computedElements,
        ...positionReference && {
          reference: positionReference
        }
      }
    });
    const setPositionReference = reactExports.useCallback((node) => {
      const computedPositionReference = isElement(node) ? {
        getBoundingClientRect: () => node.getBoundingClientRect(),
        contextElement: node
      } : node;
      _setPositionReference(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    }, [position.refs]);
    const setReference = reactExports.useCallback((node) => {
      if (isElement(node) || node === null) {
        domReferenceRef.current = node;
        setDomReference(node);
      }
      if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node !== null && !isElement(node)) {
        position.refs.setReference(node);
      }
    }, [position.refs]);
    const refs = reactExports.useMemo(() => ({
      ...position.refs,
      setReference,
      setPositionReference,
      domReference: domReferenceRef
    }), [position.refs, setReference, setPositionReference]);
    const elements = reactExports.useMemo(() => ({
      ...position.elements,
      domReference
    }), [position.elements, domReference]);
    const context = reactExports.useMemo(() => ({
      ...position,
      ...rootContext,
      refs,
      elements,
      nodeId
    }), [position, refs, elements, nodeId, rootContext]);
    index$2(() => {
      rootContext.dataRef.current.floatingContext = context;
      const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
      if (node) {
        node.context = context;
      }
    });
    return reactExports.useMemo(() => ({
      ...position,
      context,
      refs,
      elements
    }), [position, refs, elements, context]);
  }
  function getFloatingPosition(dir, position) {
    if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
      const [side, placement] = position.split("-");
      const flippedPosition = side === "right" ? "left" : "right";
      return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
    }
    return position;
  }
  function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
    if (placement === "center" || arrowPosition === "center") {
      return { top: arrowY };
    }
    if (placement === "end") {
      return { bottom: arrowOffset };
    }
    if (placement === "start") {
      return { top: arrowOffset };
    }
    return {};
  }
  function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
    if (placement === "center" || arrowPosition === "center") {
      return { left: arrowX };
    }
    if (placement === "end") {
      return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
    }
    if (placement === "start") {
      return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
    }
    return {};
  }
  const radiusByFloatingSide = {
    bottom: "borderTopLeftRadius",
    left: "borderTopRightRadius",
    right: "borderBottomLeftRadius",
    top: "borderBottomRightRadius"
  };
  function getArrowPositionStyles({
    position,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    arrowX,
    arrowY,
    dir
  }) {
    const [side, placement = "center"] = position.split("-");
    const baseStyles = {
      width: arrowSize,
      height: arrowSize,
      transform: "rotate(45deg)",
      position: "absolute",
      [radiusByFloatingSide[side]]: arrowRadius
    };
    const arrowPlacement = -arrowSize / 2;
    if (side === "left") {
      return {
        ...baseStyles,
        ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
        right: arrowPlacement,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent",
        clipPath: "polygon(100% 0, 0 0, 100% 100%)"
      };
    }
    if (side === "right") {
      return {
        ...baseStyles,
        ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
        left: arrowPlacement,
        borderRightColor: "transparent",
        borderTopColor: "transparent",
        clipPath: "polygon(0 100%, 0 0, 100% 100%)"
      };
    }
    if (side === "top") {
      return {
        ...baseStyles,
        ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
        bottom: arrowPlacement,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
      };
    }
    if (side === "bottom") {
      return {
        ...baseStyles,
        ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
        top: arrowPlacement,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        clipPath: "polygon(0 100%, 0 0, 100% 0)"
      };
    }
    return {};
  }
  const FloatingArrow = reactExports.forwardRef(
    ({
      position,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      visible: visible2,
      arrowX,
      arrowY,
      style,
      ...others
    }, ref2) => {
      const { dir } = useDirection();
      if (!visible2) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ...others,
          ref: ref2,
          style: {
            ...style,
            ...getArrowPositionStyles({
              position,
              arrowSize,
              arrowOffset,
              arrowRadius,
              arrowPosition,
              dir,
              arrowX,
              arrowY
            })
          }
        }
      );
    }
  );
  FloatingArrow.displayName = "@mantine/core/FloatingArrow";
  var classes$8 = { "root": "m_9814e45f" };
  const defaultProps$n = {
    zIndex: getDefaultZIndex("modal")
  };
  const varsResolver$f = createVarsResolver(
    (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
      root: {
        "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && rgba(color || "#000", backgroundOpacity ?? 0.6) || void 0,
        "--overlay-filter": blur ? `blur(${rem(blur)})` : void 0,
        "--overlay-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--overlay-z-index": zIndex == null ? void 0 : zIndex.toString()
      }
    })
  );
  const Overlay = polymorphicFactory((_props, ref2) => {
    const props = useProps("Overlay", defaultProps$n, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      fixed,
      center,
      children,
      radius,
      zIndex,
      gradient,
      blur,
      color,
      backgroundOpacity,
      mod,
      ...others
    } = props;
    const getStyles = useStyles({
      name: "Overlay",
      props,
      classes: classes$8,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$f
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ref: ref2, ...getStyles("root"), mod: [{ center, fixed }, mod], ...others, children });
  });
  Overlay.classes = classes$8;
  Overlay.displayName = "@mantine/core/Overlay";
  function createPortalNode(props) {
    const node = document.createElement("div");
    node.setAttribute("data-portal", "true");
    typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
    typeof props.style === "object" && Object.assign(node.style, props.style);
    typeof props.id === "string" && node.setAttribute("id", props.id);
    return node;
  }
  const defaultProps$m = {};
  const Portal = reactExports.forwardRef((props, ref2) => {
    const { children, target, ...others } = useProps("Portal", defaultProps$m, props);
    const [mounted, setMounted] = reactExports.useState(false);
    const nodeRef = reactExports.useRef(null);
    useIsomorphicEffect(() => {
      setMounted(true);
      nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
      assignRef(ref2, nodeRef.current);
      if (!target && nodeRef.current) {
        document.body.appendChild(nodeRef.current);
      }
      return () => {
        if (!target && nodeRef.current) {
          document.body.removeChild(nodeRef.current);
        }
      };
    }, [target]);
    if (!mounted || !nodeRef.current) {
      return null;
    }
    return reactDomExports.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children }), nodeRef.current);
  });
  Portal.displayName = "@mantine/core/Portal";
  function OptionalPortal({ withinPortal = true, children, ...others }) {
    if (withinPortal) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...others, children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  OptionalPortal.displayName = "@mantine/core/OptionalPortal";
  const popIn = (from) => ({
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: `scale(.9) translateY(${from === "bottom" ? 10 : -10}px)` },
    transitionProperty: "transform, opacity"
  });
  const transitions = {
    fade: {
      in: { opacity: 1 },
      out: { opacity: 0 },
      transitionProperty: "opacity"
    },
    "fade-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(30px)" },
      transitionProperty: "opacity, transform"
    },
    "fade-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-30px)" },
      transitionProperty: "opacity, transform"
    },
    "fade-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(30px)" },
      transitionProperty: "opacity, transform"
    },
    "fade-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-30px)" },
      transitionProperty: "opacity, transform"
    },
    scale: {
      in: { opacity: 1, transform: "scale(1)" },
      out: { opacity: 0, transform: "scale(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity"
    },
    "scale-y": {
      in: { opacity: 1, transform: "scaleY(1)" },
      out: { opacity: 0, transform: "scaleY(0)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity"
    },
    "scale-x": {
      in: { opacity: 1, transform: "scaleX(1)" },
      out: { opacity: 0, transform: "scaleX(0)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity"
    },
    "skew-up": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(-20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity"
    },
    "skew-down": {
      in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
      out: { opacity: 0, transform: "translateY(20px) skew(-10deg, -5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity"
    },
    "rotate-left": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(-5deg)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity"
    },
    "rotate-right": {
      in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
      out: { opacity: 0, transform: "translateY(20px) rotate(5deg)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity"
    },
    "slide-down": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(-100%)" },
      common: { transformOrigin: "top" },
      transitionProperty: "transform, opacity"
    },
    "slide-up": {
      in: { opacity: 1, transform: "translateY(0)" },
      out: { opacity: 0, transform: "translateY(100%)" },
      common: { transformOrigin: "bottom" },
      transitionProperty: "transform, opacity"
    },
    "slide-left": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(100%)" },
      common: { transformOrigin: "left" },
      transitionProperty: "transform, opacity"
    },
    "slide-right": {
      in: { opacity: 1, transform: "translateX(0)" },
      out: { opacity: 0, transform: "translateX(-100%)" },
      common: { transformOrigin: "right" },
      transitionProperty: "transform, opacity"
    },
    pop: {
      ...popIn("bottom"),
      common: { transformOrigin: "center center" }
    },
    "pop-bottom-left": {
      ...popIn("bottom"),
      common: { transformOrigin: "bottom left" }
    },
    "pop-bottom-right": {
      ...popIn("bottom"),
      common: { transformOrigin: "bottom right" }
    },
    "pop-top-left": {
      ...popIn("top"),
      common: { transformOrigin: "top left" }
    },
    "pop-top-right": {
      ...popIn("top"),
      common: { transformOrigin: "top right" }
    }
  };
  const transitionStatuses = {
    entering: "in",
    entered: "in",
    exiting: "out",
    exited: "out",
    "pre-exiting": "out",
    "pre-entering": "out"
  };
  function getTransitionStyles({
    transition,
    state,
    duration,
    timingFunction
  }) {
    const shared = {
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction
    };
    if (typeof transition === "string") {
      if (!(transition in transitions)) {
        return {};
      }
      return {
        transitionProperty: transitions[transition].transitionProperty,
        ...shared,
        ...transitions[transition].common,
        ...transitions[transition][transitionStatuses[state]]
      };
    }
    return {
      transitionProperty: transition.transitionProperty,
      ...shared,
      ...transition.common,
      ...transition[transitionStatuses[state]]
    };
  }
  function useTransition({
    duration,
    exitDuration,
    timingFunction,
    mounted,
    onEnter,
    onExit,
    onEntered,
    onExited,
    enterDelay,
    exitDelay
  }) {
    const theme = useMantineTheme();
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
    const [transitionDuration, setTransitionDuration] = reactExports.useState(reduceMotion ? 0 : duration);
    const [transitionStatus, setStatus] = reactExports.useState(mounted ? "entered" : "exited");
    const transitionTimeoutRef = reactExports.useRef(-1);
    const delayTimeoutRef = reactExports.useRef(-1);
    const rafRef = reactExports.useRef(-1);
    const handleStateChange = (shouldMount) => {
      const preHandler = shouldMount ? onEnter : onExit;
      const handler = shouldMount ? onEntered : onExited;
      window.clearTimeout(transitionTimeoutRef.current);
      const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
      setTransitionDuration(newTransitionDuration);
      if (newTransitionDuration === 0) {
        typeof preHandler === "function" && preHandler();
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      } else {
        rafRef.current = requestAnimationFrame(() => {
          ReactDOM.flushSync(() => {
            setStatus(shouldMount ? "pre-entering" : "pre-exiting");
          });
          rafRef.current = requestAnimationFrame(() => {
            typeof preHandler === "function" && preHandler();
            setStatus(shouldMount ? "entering" : "exiting");
            transitionTimeoutRef.current = window.setTimeout(() => {
              typeof handler === "function" && handler();
              setStatus(shouldMount ? "entered" : "exited");
            }, newTransitionDuration);
          });
        });
      }
    };
    const handleTransitionWithDelay = (shouldMount) => {
      window.clearTimeout(delayTimeoutRef.current);
      const delay = shouldMount ? enterDelay : exitDelay;
      if (typeof delay !== "number") {
        handleStateChange(shouldMount);
        return;
      }
      delayTimeoutRef.current = window.setTimeout(
        () => {
          handleStateChange(shouldMount);
        },
        shouldMount ? enterDelay : exitDelay
      );
    };
    useDidUpdate(() => {
      handleTransitionWithDelay(mounted);
    }, [mounted]);
    reactExports.useEffect(
      () => () => {
        window.clearTimeout(transitionTimeoutRef.current);
        cancelAnimationFrame(rafRef.current);
      },
      []
    );
    return {
      transitionDuration,
      transitionStatus,
      transitionTimingFunction: timingFunction || "ease"
    };
  }
  function Transition({
    keepMounted,
    transition = "fade",
    duration = 250,
    exitDuration = duration,
    mounted,
    children,
    timingFunction = "ease",
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  }) {
    const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
      mounted,
      exitDuration,
      duration,
      timingFunction,
      onExit,
      onEntered,
      onEnter,
      onExited,
      enterDelay,
      exitDelay
    });
    if (transitionDuration === 0) {
      return mounted ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
    }
    return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children(
      getTransitionStyles({
        transition,
        duration: transitionDuration,
        state: transitionStatus,
        timingFunction: transitionTimingFunction
      })
    ) });
  }
  Transition.displayName = "@mantine/core/Transition";
  const [PopoverContextProvider, usePopoverContext] = createSafeContext(
    "Popover component was not found in the tree"
  );
  function FocusTrap({
    children,
    active = true,
    refProp = "ref",
    innerRef
  }) {
    const focusTrapRef = useFocusTrap(active);
    const ref2 = useMergedRef(focusTrapRef, innerRef);
    if (!isElement$1(children)) {
      return children;
    }
    return reactExports.cloneElement(children, { [refProp]: ref2 });
  }
  function FocusTrapInitialFocus(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHidden, { tabIndex: -1, "data-autofocus": true, ...props });
  }
  FocusTrap.displayName = "@mantine/core/FocusTrap";
  FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
  FocusTrap.InitialFocus = FocusTrapInitialFocus;
  var classes$7 = { "dropdown": "m_38a85659", "arrow": "m_a31dc6c1", "overlay": "m_3d7bc908" };
  const defaultProps$l = {};
  const PopoverDropdown = factory((_props, ref2) => {
    var _a, _b, _c, _d;
    const props = useProps("PopoverDropdown", defaultProps$l, _props);
    const {
      className,
      style,
      vars,
      children,
      onKeyDownCapture,
      variant,
      classNames,
      styles,
      ...others
    } = props;
    const ctx = usePopoverContext();
    const returnFocus = useFocusReturn({
      opened: ctx.opened,
      shouldReturnFocus: ctx.returnFocus
    });
    const accessibleProps = ctx.withRoles ? {
      "aria-labelledby": ctx.getTargetId(),
      id: ctx.getDropdownId(),
      role: "dialog",
      tabIndex: -1
    } : {};
    const mergedRef = useMergedRef(ref2, ctx.floating);
    if (ctx.disabled) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(OptionalPortal, { ...ctx.portalProps, withinPortal: ctx.withinPortal, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Transition,
      {
        mounted: ctx.opened,
        ...ctx.transitionProps,
        transition: ((_a = ctx.transitionProps) == null ? void 0 : _a.transition) || "fade",
        duration: ((_b = ctx.transitionProps) == null ? void 0 : _b.duration) ?? 150,
        keepMounted: ctx.keepMounted,
        exitDuration: typeof ((_c = ctx.transitionProps) == null ? void 0 : _c.exitDuration) === "number" ? ctx.transitionProps.exitDuration : (_d = ctx.transitionProps) == null ? void 0 : _d.duration,
        children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, { active: ctx.trapFocus && ctx.opened, innerRef: mergedRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box,
          {
            ...accessibleProps,
            ...others,
            variant,
            onKeyDownCapture: closeOnEscape(ctx.onClose, {
              active: ctx.closeOnEscape,
              onTrigger: returnFocus,
              onKeyDown: onKeyDownCapture
            }),
            "data-position": ctx.placement,
            "data-fixed": ctx.floatingStrategy === "fixed" || void 0,
            ...ctx.getStyles("dropdown", {
              className,
              props,
              classNames,
              styles,
              style: [
                {
                  ...transitionStyles,
                  zIndex: ctx.zIndex,
                  top: ctx.y ?? 0,
                  left: ctx.x ?? 0,
                  width: ctx.width === "target" ? void 0 : rem(ctx.width)
                },
                ctx.resolvedStyles.dropdown,
                styles == null ? void 0 : styles.dropdown,
                style
              ]
            }),
            children: [
              children,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FloatingArrow,
                {
                  ref: ctx.arrowRef,
                  arrowX: ctx.arrowX,
                  arrowY: ctx.arrowY,
                  visible: ctx.withArrow,
                  position: ctx.placement,
                  arrowSize: ctx.arrowSize,
                  arrowRadius: ctx.arrowRadius,
                  arrowOffset: ctx.arrowOffset,
                  arrowPosition: ctx.arrowPosition,
                  ...ctx.getStyles("arrow", {
                    props,
                    classNames,
                    styles
                  })
                }
              )
            ]
          }
        ) })
      }
    ) });
  });
  PopoverDropdown.classes = classes$7;
  PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";
  const defaultProps$k = {
    refProp: "ref",
    popupType: "dialog"
  };
  const PopoverTarget = factory((props, ref2) => {
    const { children, refProp, popupType, ...others } = useProps(
      "PopoverTarget",
      defaultProps$k,
      props
    );
    if (!isElement$1(children)) {
      throw new Error(
        "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
      );
    }
    const forwardedProps = others;
    const ctx = usePopoverContext();
    const targetRef = useMergedRef(ctx.reference, getRefProp(children), ref2);
    const accessibleProps = ctx.withRoles ? {
      "aria-haspopup": popupType,
      "aria-expanded": ctx.opened,
      "aria-controls": ctx.getDropdownId(),
      id: ctx.getTargetId()
    } : {};
    return reactExports.cloneElement(children, {
      ...forwardedProps,
      ...accessibleProps,
      ...ctx.targetProps,
      className: clsx(
        ctx.targetProps.className,
        forwardedProps.className,
        children.props.className
      ),
      [refProp]: targetRef,
      ...!ctx.controlled ? { onClick: ctx.onToggle } : null
    });
  });
  PopoverTarget.displayName = "@mantine/core/PopoverTarget";
  function useFloatingAutoUpdate({
    opened,
    floating,
    position,
    positionDependencies
  }) {
    const [delayedUpdate, setDelayedUpdate] = reactExports.useState(0);
    reactExports.useEffect(() => {
      if (floating.refs.reference.current && floating.refs.floating.current && opened) {
        return autoUpdate(
          floating.refs.reference.current,
          floating.refs.floating.current,
          floating.update
        );
      }
      return void 0;
    }, [
      floating.refs.reference.current,
      floating.refs.floating.current,
      opened,
      delayedUpdate,
      position
    ]);
    useDidUpdate(() => {
      floating.update();
    }, positionDependencies);
    useDidUpdate(() => {
      setDelayedUpdate((c) => c + 1);
    }, [opened]);
  }
  function getDefaultMiddlewares(middlewares) {
    if (middlewares === void 0) {
      return { shift: true, flip: true };
    }
    const result = { ...middlewares };
    if (middlewares.shift === void 0) {
      result.shift = true;
    }
    if (middlewares.flip === void 0) {
      result.flip = true;
    }
    return result;
  }
  function getPopoverMiddlewares(options, getFloating) {
    const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
    const middlewares = [offset(options.offset)];
    if (middlewaresOptions.shift) {
      middlewares.push(
        shift(
          typeof middlewaresOptions.shift === "boolean" ? { limiter: limitShift(), padding: 5 } : { limiter: limitShift(), padding: 5, ...middlewaresOptions.shift }
        )
      );
    }
    if (middlewaresOptions.flip) {
      middlewares.push(
        typeof middlewaresOptions.flip === "boolean" ? flip() : flip(middlewaresOptions.flip)
      );
    }
    if (middlewaresOptions.inline) {
      middlewares.push(
        typeof middlewaresOptions.inline === "boolean" ? inline() : inline(middlewaresOptions.inline)
      );
    }
    middlewares.push(arrow({ element: options.arrowRef, padding: options.arrowOffset }));
    if (middlewaresOptions.size || options.width === "target") {
      middlewares.push(
        size({
          ...typeof middlewaresOptions.size === "boolean" ? {} : middlewaresOptions.size,
          apply({ rects, availableWidth, availableHeight, ...rest }) {
            var _a;
            const floating = getFloating();
            const styles = ((_a = floating.refs.floating.current) == null ? void 0 : _a.style) ?? {};
            if (middlewaresOptions.size) {
              if (typeof middlewaresOptions.size === "object" && !!middlewaresOptions.size.apply) {
                middlewaresOptions.size.apply({ rects, availableWidth, availableHeight, ...rest });
              } else {
                Object.assign(styles, {
                  maxWidth: `${availableWidth}px`,
                  maxHeight: `${availableHeight}px`
                });
              }
            }
            if (options.width === "target") {
              Object.assign(styles, {
                width: `${rects.reference.width}px`
              });
            }
          }
        })
      );
    }
    return middlewares;
  }
  function usePopover(options) {
    const [_opened, setOpened] = useUncontrolled({
      value: options.opened,
      defaultValue: options.defaultOpened,
      finalValue: false,
      onChange: options.onChange
    });
    const previouslyOpened = reactExports.useRef(_opened);
    const onClose = () => {
      if (_opened) {
        setOpened(false);
      }
    };
    const onToggle = () => setOpened(!_opened);
    const floating = useFloating({
      strategy: options.strategy,
      placement: options.position,
      middleware: getPopoverMiddlewares(options, () => floating)
    });
    useFloatingAutoUpdate({
      opened: _opened,
      position: options.position,
      positionDependencies: options.positionDependencies || [],
      floating
    });
    useDidUpdate(() => {
      var _a;
      (_a = options.onPositionChange) == null ? void 0 : _a.call(options, floating.placement);
    }, [floating.placement]);
    useDidUpdate(() => {
      var _a, _b;
      if (_opened !== previouslyOpened.current) {
        if (!_opened) {
          (_a = options.onClose) == null ? void 0 : _a.call(options);
        } else {
          (_b = options.onOpen) == null ? void 0 : _b.call(options);
        }
      }
      previouslyOpened.current = _opened;
    }, [_opened, options.onClose, options.onOpen]);
    return {
      floating,
      controlled: typeof options.opened === "boolean",
      opened: _opened,
      onClose,
      onToggle
    };
  }
  const defaultProps$j = {
    position: "bottom",
    offset: 8,
    positionDependencies: [],
    transitionProps: { transition: "fade", duration: 150 },
    middlewares: { flip: true, shift: true, inline: false },
    arrowSize: 7,
    arrowOffset: 5,
    arrowRadius: 0,
    arrowPosition: "side",
    closeOnClickOutside: true,
    withinPortal: true,
    closeOnEscape: true,
    trapFocus: false,
    withRoles: true,
    returnFocus: false,
    withOverlay: false,
    clickOutsideEvents: ["mousedown", "touchstart"],
    zIndex: getDefaultZIndex("popover"),
    __staticSelector: "Popover",
    width: "max-content"
  };
  const varsResolver$e = createVarsResolver((_, { radius, shadow }) => ({
    dropdown: {
      "--popover-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--popover-shadow": getShadow(shadow)
    }
  }));
  function Popover(_props) {
    var _a, _b, _c, _d, _e, _f;
    const props = useProps("Popover", defaultProps$j, _props);
    const {
      children,
      position,
      offset: offset2,
      onPositionChange,
      positionDependencies,
      opened,
      transitionProps,
      onExitTransitionEnd,
      onEnterTransitionEnd,
      width,
      middlewares,
      withArrow,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      unstyled,
      classNames,
      styles,
      closeOnClickOutside,
      withinPortal,
      portalProps,
      closeOnEscape: closeOnEscape2,
      clickOutsideEvents,
      trapFocus,
      onClose,
      onOpen,
      onChange,
      zIndex,
      radius,
      shadow,
      id,
      defaultOpened,
      __staticSelector,
      withRoles,
      disabled,
      returnFocus,
      variant,
      keepMounted,
      vars,
      floatingStrategy,
      withOverlay,
      overlayProps,
      ...others
    } = props;
    const getStyles = useStyles({
      name: __staticSelector,
      props,
      classes: classes$7,
      classNames,
      styles,
      unstyled,
      rootSelector: "dropdown",
      vars,
      varsResolver: varsResolver$e
    });
    const { resolvedStyles } = useResolvedStylesApi({ classNames, styles, props });
    const arrowRef = reactExports.useRef(null);
    const [targetNode, setTargetNode] = reactExports.useState(null);
    const [dropdownNode, setDropdownNode] = reactExports.useState(null);
    const { dir } = useDirection();
    const uid = useId$1(id);
    const popover = usePopover({
      middlewares,
      width,
      position: getFloatingPosition(dir, position),
      offset: typeof offset2 === "number" ? offset2 + (withArrow ? arrowSize / 2 : 0) : offset2,
      arrowRef,
      arrowOffset,
      onPositionChange,
      positionDependencies,
      opened,
      defaultOpened,
      onChange,
      onOpen,
      onClose,
      strategy: floatingStrategy
    });
    useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
      targetNode,
      dropdownNode
    ]);
    const reference = reactExports.useCallback(
      (node) => {
        setTargetNode(node);
        popover.floating.refs.setReference(node);
      },
      [popover.floating.refs.setReference]
    );
    const floating = reactExports.useCallback(
      (node) => {
        setDropdownNode(node);
        popover.floating.refs.setFloating(node);
      },
      [popover.floating.refs.setFloating]
    );
    const onExited = reactExports.useCallback(() => {
      var _a2;
      (_a2 = transitionProps == null ? void 0 : transitionProps.onExited) == null ? void 0 : _a2.call(transitionProps);
      onExitTransitionEnd == null ? void 0 : onExitTransitionEnd();
    }, [transitionProps == null ? void 0 : transitionProps.onExited, onExitTransitionEnd]);
    const onEntered = reactExports.useCallback(() => {
      var _a2;
      (_a2 = transitionProps == null ? void 0 : transitionProps.onEntered) == null ? void 0 : _a2.call(transitionProps);
      onEnterTransitionEnd == null ? void 0 : onEnterTransitionEnd();
    }, [transitionProps == null ? void 0 : transitionProps.onEntered, onEnterTransitionEnd]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      PopoverContextProvider,
      {
        value: {
          returnFocus,
          disabled,
          controlled: popover.controlled,
          reference,
          floating,
          x: popover.floating.x,
          y: popover.floating.y,
          arrowX: (_c = (_b = (_a = popover.floating) == null ? void 0 : _a.middlewareData) == null ? void 0 : _b.arrow) == null ? void 0 : _c.x,
          arrowY: (_f = (_e = (_d = popover.floating) == null ? void 0 : _d.middlewareData) == null ? void 0 : _e.arrow) == null ? void 0 : _f.y,
          opened: popover.opened,
          arrowRef,
          transitionProps: { ...transitionProps, onExited, onEntered },
          width,
          withArrow,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          placement: popover.floating.placement,
          trapFocus,
          withinPortal,
          portalProps,
          zIndex,
          radius,
          shadow,
          closeOnEscape: closeOnEscape2,
          onClose: popover.onClose,
          onToggle: popover.onToggle,
          getTargetId: () => `${uid}-target`,
          getDropdownId: () => `${uid}-dropdown`,
          withRoles,
          targetProps: others,
          __staticSelector,
          classNames,
          styles,
          unstyled,
          variant,
          keepMounted,
          getStyles,
          resolvedStyles,
          floatingStrategy
        },
        children: [
          children,
          withOverlay && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Transition,
            {
              transition: "fade",
              mounted: popover.opened,
              duration: (transitionProps == null ? void 0 : transitionProps.duration) || 250,
              exitDuration: (transitionProps == null ? void 0 : transitionProps.exitDuration) || 250,
              children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionalPortal, { withinPortal, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Overlay,
                {
                  ...overlayProps,
                  ...getStyles("overlay", {
                    className: overlayProps == null ? void 0 : overlayProps.className,
                    style: [transitionStyles, overlayProps == null ? void 0 : overlayProps.style]
                  })
                }
              ) })
            }
          )
        ]
      }
    );
  }
  Popover.Target = PopoverTarget;
  Popover.Dropdown = PopoverDropdown;
  Popover.displayName = "@mantine/core/Popover";
  Popover.extend = (input) => input;
  var classes$6 = { "root": "m_5ae2e3c", "barsLoader": "m_7a2bd4cd", "bar": "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", "dotsLoader": "m_4e3f22d7", "dot": "m_870c4af", "loader-dots-animation": "m_aac34a1", "ovalLoader": "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
  const Bars = reactExports.forwardRef(({ className, ...others }, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$6.barsLoader, className), ...others, ref: ref2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.bar }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.bar }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.bar })
  ] }));
  Bars.displayName = "@mantine/core/Bars";
  const Dots = reactExports.forwardRef(({ className, ...others }, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { component: "span", className: clsx(classes$6.dotsLoader, className), ...others, ref: ref2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.dot }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.dot }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes$6.dot })
  ] }));
  Dots.displayName = "@mantine/core/Dots";
  const Oval = reactExports.forwardRef(({ className, ...others }, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", className: clsx(classes$6.ovalLoader, className), ...others, ref: ref2 }));
  Oval.displayName = "@mantine/core/Oval";
  const defaultLoaders = {
    bars: Bars,
    oval: Oval,
    dots: Dots
  };
  const defaultProps$i = {
    loaders: defaultLoaders,
    type: "oval"
  };
  const varsResolver$d = createVarsResolver((theme, { size: size2, color }) => ({
    root: {
      "--loader-size": getSize(size2, "loader-size"),
      "--loader-color": color ? getThemeColor(color, theme) : void 0
    }
  }));
  const Loader = factory((_props, ref2) => {
    const props = useProps("Loader", defaultProps$i, _props);
    const {
      size: size2,
      color,
      type,
      vars,
      className,
      style,
      classNames,
      styles,
      unstyled,
      loaders,
      variant,
      children,
      ...others
    } = props;
    const getStyles = useStyles({
      name: "Loader",
      props,
      classes: classes$6,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$d
    });
    if (children) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("root"), ref: ref2, ...others, children });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("root"),
        ref: ref2,
        component: loaders[type],
        variant,
        size: size2,
        ...others
      }
    );
  });
  Loader.defaultLoaders = defaultLoaders;
  Loader.classes = classes$6;
  Loader.displayName = "@mantine/core/Loader";
  var classes$5 = { "root": "m_8d3f4000", "icon": "m_8d3afb97", "loader": "m_302b9fb1", "group": "m_1a0f1b21", "groupSection": "m_437b6484" };
  const defaultProps$h = {
    orientation: "horizontal"
  };
  const varsResolver$c = createVarsResolver((_, { borderWidth }) => ({
    group: { "--ai-border-width": rem(borderWidth) }
  }));
  const ActionIconGroup = factory((_props, ref2) => {
    const props = useProps("ActionIconGroup", defaultProps$h, _props);
    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant,
      mod,
      ...others
    } = useProps("ActionIconGroup", defaultProps$h, _props);
    const getStyles = useStyles({
      name: "ActionIconGroup",
      props,
      classes: classes$5,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$c,
      rootSelector: "group"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("group"),
        ref: ref2,
        variant,
        mod: [{ "data-orientation": orientation }, mod],
        role: "group",
        ...others
      }
    );
  });
  ActionIconGroup.classes = classes$5;
  ActionIconGroup.displayName = "@mantine/core/ActionIconGroup";
  const defaultProps$g = {};
  const varsResolver$b = createVarsResolver(
    (theme, { radius, color, gradient, variant, autoContrast, size: size2 }) => {
      const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
      });
      return {
        groupSection: {
          "--section-height": getSize(size2, "section-height"),
          "--section-padding-x": getSize(size2, "section-padding-x"),
          "--section-fz": getFontSize(size2),
          "--section-radius": radius === void 0 ? void 0 : getRadius(radius),
          "--section-bg": color || variant ? colors.background : void 0,
          "--section-color": colors.color,
          "--section-bd": color || variant ? colors.border : void 0
        }
      };
    }
  );
  const ActionIconGroupSection = factory((_props, ref2) => {
    const props = useProps("ActionIconGroupSection", defaultProps$g, _props);
    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      variant,
      gradient,
      radius,
      autoContrast,
      ...others
    } = useProps("ActionIconGroupSection", defaultProps$g, _props);
    const getStyles = useStyles({
      name: "ActionIconGroupSection",
      props,
      classes: classes$5,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$b,
      rootSelector: "groupSection"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("groupSection"), ref: ref2, variant, ...others });
  });
  ActionIconGroupSection.classes = classes$5;
  ActionIconGroupSection.displayName = "@mantine/core/ActionIconGroupSection";
  const defaultProps$f = {};
  const varsResolver$a = createVarsResolver(
    (theme, { size: size2, radius, variant, gradient, color, autoContrast }) => {
      const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
      });
      return {
        root: {
          "--ai-size": getSize(size2, "ai-size"),
          "--ai-radius": radius === void 0 ? void 0 : getRadius(radius),
          "--ai-bg": color || variant ? colors.background : void 0,
          "--ai-hover": color || variant ? colors.hover : void 0,
          "--ai-hover-color": color || variant ? colors.hoverColor : void 0,
          "--ai-color": colors.color,
          "--ai-bd": color || variant ? colors.border : void 0
        }
      };
    }
  );
  const ActionIcon = polymorphicFactory((_props, ref2) => {
    const props = useProps("ActionIcon", defaultProps$f, _props);
    const {
      className,
      unstyled,
      variant,
      classNames,
      styles,
      style,
      loading,
      loaderProps,
      size: size2,
      color,
      radius,
      __staticSelector,
      gradient,
      vars,
      children,
      disabled,
      "data-disabled": dataDisabled,
      autoContrast,
      mod,
      ...others
    } = props;
    const getStyles = useStyles({
      name: ["ActionIcon", __staticSelector],
      props,
      className,
      style,
      classes: classes$5,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$a
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      UnstyledButton,
      {
        ...getStyles("root", { active: !disabled && !loading && !dataDisabled }),
        ...others,
        unstyled,
        variant,
        size: size2,
        disabled: disabled || loading,
        ref: ref2,
        mod: [{ loading, disabled: disabled || dataDisabled }, mod],
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, { mounted: !!loading, transition: "slide-down", duration: 150, children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...loaderProps }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", mod: { loading }, ...getStyles("icon"), children })
        ]
      }
    );
  });
  ActionIcon.classes = classes$5;
  ActionIcon.displayName = "@mantine/core/ActionIcon";
  ActionIcon.Group = ActionIconGroup;
  ActionIcon.GroupSection = ActionIconGroupSection;
  const CloseIcon = reactExports.forwardRef(
    ({ size: size2 = "var(--cb-icon-size, 70%)", style, ...others }, ref2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 15 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: { ...style, width: size2, height: size2 },
        ref: ref2,
        ...others,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
          }
        )
      }
    )
  );
  CloseIcon.displayName = "@mantine/core/CloseIcon";
  var classes$4 = { "root": "m_86a44da5", "root--subtle": "m_220c80f2" };
  const defaultProps$e = {
    variant: "subtle"
  };
  const varsResolver$9 = createVarsResolver((_, { size: size2, radius, iconSize }) => ({
    root: {
      "--cb-size": getSize(size2, "cb-size"),
      "--cb-radius": radius === void 0 ? void 0 : getRadius(radius),
      "--cb-icon-size": rem(iconSize)
    }
  }));
  const CloseButton = polymorphicFactory((_props, ref2) => {
    const props = useProps("CloseButton", defaultProps$e, _props);
    const {
      iconSize,
      children,
      vars,
      radius,
      className,
      classNames,
      style,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      disabled,
      variant,
      icon,
      mod,
      __staticSelector,
      ...others
    } = props;
    const getStyles = useStyles({
      name: __staticSelector || "CloseButton",
      props,
      className,
      style,
      classes: classes$4,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$9
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      UnstyledButton,
      {
        ref: ref2,
        ...others,
        unstyled,
        variant,
        disabled,
        mod: [{ disabled: disabled || dataDisabled }, mod],
        ...getStyles("root", { variant, active: !disabled && !dataDisabled }),
        children: [
          icon || /* @__PURE__ */ jsxRuntimeExports.jsx(CloseIcon, {}),
          children
        ]
      }
    );
  });
  CloseButton.classes = classes$4;
  CloseButton.displayName = "@mantine/core/CloseButton";
  const [InputContext, useInputContext] = createOptionalContext({
    size: "sm"
  });
  const defaultProps$d = {};
  const InputClearButton = factory((_props, ref2) => {
    const props = useProps("InputClearButton", defaultProps$d, _props);
    const { size: size2, variant, vars, classNames, styles, ...others } = props;
    const ctx = useInputContext();
    const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
      classNames,
      styles,
      props
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CloseButton,
      {
        variant: variant || "transparent",
        ref: ref2,
        size: size2 || (ctx == null ? void 0 : ctx.size) || "sm",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        __staticSelector: "InputClearButton",
        ...others
      }
    );
  });
  InputClearButton.displayName = "@mantine/core/InputClearButton";
  const [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
    offsetBottom: false,
    offsetTop: false,
    describedBy: void 0,
    getStyles: null,
    inputId: void 0,
    labelId: void 0
  });
  var classes$3 = { "wrapper": "m_6c018570", "input": "m_8fb7ebe7", "section": "m_82577fc2", "placeholder": "m_88bacfd0", "root": "m_46b77525", "label": "m_8fdc1311", "required": "m_78a94662", "error": "m_8f816625", "description": "m_fe47ce59" };
  const defaultProps$c = {};
  const varsResolver$8 = createVarsResolver((_, { size: size2 }) => ({
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize(size2)} - ${rem(2)})`
    }
  }));
  const InputDescription = factory((_props, ref2) => {
    const props = useProps("InputDescription", defaultProps$c, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
      __staticSelector,
      __inheritStyles = true,
      variant,
      ...others
    } = useProps("InputDescription", defaultProps$c, props);
    const ctx = useInputWrapperContext();
    const _getStyles = useStyles({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "description",
      vars,
      varsResolver: varsResolver$8
    });
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "p",
        ref: ref2,
        variant,
        size: size2,
        ...getStyles("description", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
        ...others
      }
    );
  });
  InputDescription.classes = classes$3;
  InputDescription.displayName = "@mantine/core/InputDescription";
  const defaultProps$b = {};
  const varsResolver$7 = createVarsResolver((_, { size: size2 }) => ({
    error: {
      "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize(size2)} - ${rem(2)})`
    }
  }));
  const InputError = factory((_props, ref2) => {
    const props = useProps("InputError", defaultProps$b, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
      __staticSelector,
      __inheritStyles = true,
      variant,
      ...others
    } = props;
    const _getStyles = useStyles({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "error",
      vars,
      varsResolver: varsResolver$7
    });
    const ctx = useInputWrapperContext();
    const getStyles = __inheritStyles && (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        component: "p",
        ref: ref2,
        variant,
        size: size2,
        ...getStyles("error", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
        ...others
      }
    );
  });
  InputError.classes = classes$3;
  InputError.displayName = "@mantine/core/InputError";
  const defaultProps$a = {
    labelElement: "label"
  };
  const varsResolver$6 = createVarsResolver((_, { size: size2 }) => ({
    label: {
      "--input-label-size": getFontSize(size2),
      "--input-asterisk-color": void 0
    }
  }));
  const InputLabel = factory((_props, ref2) => {
    const props = useProps("InputLabel", defaultProps$a, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      labelElement,
      size: size2,
      required,
      htmlFor,
      onMouseDown,
      children,
      __staticSelector,
      variant,
      mod,
      ...others
    } = useProps("InputLabel", defaultProps$a, props);
    const _getStyles = useStyles({
      name: ["InputWrapper", __staticSelector],
      props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "label",
      vars,
      varsResolver: varsResolver$6
    });
    const ctx = useInputWrapperContext();
    const getStyles = (ctx == null ? void 0 : ctx.getStyles) || _getStyles;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        ...getStyles("label", (ctx == null ? void 0 : ctx.getStyles) ? { className, style } : void 0),
        component: labelElement,
        variant,
        size: size2,
        ref: ref2,
        htmlFor: labelElement === "label" ? htmlFor : void 0,
        mod: [{ required }, mod],
        onMouseDown: (event) => {
          onMouseDown == null ? void 0 : onMouseDown(event);
          if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
          }
        },
        ...others,
        children: [
          children,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getStyles("required"), "aria-hidden": true, children: " *" })
        ]
      }
    );
  });
  InputLabel.classes = classes$3;
  InputLabel.displayName = "@mantine/core/InputLabel";
  const defaultProps$9 = {};
  const InputPlaceholder = factory((_props, ref2) => {
    const props = useProps("InputPlaceholder", defaultProps$9, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      __staticSelector,
      variant,
      error,
      mod,
      ...others
    } = useProps("InputPlaceholder", defaultProps$9, props);
    const getStyles = useStyles({
      name: ["InputPlaceholder", __staticSelector],
      props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      rootSelector: "placeholder"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("placeholder"),
        mod: [{ error: !!error }, mod],
        component: "span",
        variant,
        ref: ref2,
        ...others
      }
    );
  });
  InputPlaceholder.classes = classes$3;
  InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";
  function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
    const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
    const aboveInput = inputWrapperOrder.slice(0, inputIndex);
    const belowInput = inputWrapperOrder.slice(inputIndex + 1);
    const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
    const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
    return { offsetBottom, offsetTop };
  }
  const defaultProps$8 = {
    labelElement: "label",
    inputContainer: (children) => children,
    inputWrapperOrder: ["label", "description", "input", "error"]
  };
  const varsResolver$5 = createVarsResolver((_, { size: size2 }) => ({
    label: {
      "--input-label-size": getFontSize(size2),
      "--input-asterisk-color": void 0
    },
    error: {
      "--input-error-size": size2 === void 0 ? void 0 : `calc(${getFontSize(size2)} - ${rem(2)})`
    },
    description: {
      "--input-description-size": size2 === void 0 ? void 0 : `calc(${getFontSize(size2)} - ${rem(2)})`
    }
  }));
  const InputWrapper = factory((_props, ref2) => {
    const props = useProps("InputWrapper", defaultProps$8, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      size: size2,
      variant,
      __staticSelector,
      inputContainer,
      inputWrapperOrder,
      label,
      error,
      description,
      labelProps,
      descriptionProps,
      errorProps,
      labelElement,
      children,
      withAsterisk,
      id,
      required,
      __stylesApiProps,
      mod,
      ...others
    } = props;
    const getStyles = useStyles({
      name: ["InputWrapper", __staticSelector],
      props: __stylesApiProps || props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$5
    });
    const sharedProps = {
      size: size2,
      variant,
      __staticSelector
    };
    const idBase = useId$1(id);
    const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
    const errorId = (errorProps == null ? void 0 : errorProps.id) || `${idBase}-error`;
    const descriptionId = (descriptionProps == null ? void 0 : descriptionProps.id) || `${idBase}-description`;
    const inputId = idBase;
    const hasError = !!error && typeof error !== "boolean";
    const hasDescription = !!description;
    const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
    const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
    const labelId = (labelProps == null ? void 0 : labelProps.id) || `${idBase}-label`;
    const _label = label && /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputLabel,
      {
        labelElement,
        id: labelId,
        htmlFor: inputId,
        required: isRequired,
        ...sharedProps,
        ...labelProps,
        children: label
      },
      "label"
    );
    const _description = hasDescription && /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputDescription,
      {
        ...descriptionProps,
        ...sharedProps,
        size: (descriptionProps == null ? void 0 : descriptionProps.size) || sharedProps.size,
        id: (descriptionProps == null ? void 0 : descriptionProps.id) || descriptionId,
        children: description
      },
      "description"
    );
    const _input = /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, { children: inputContainer(children) }, "input");
    const _error = hasError && /* @__PURE__ */ reactExports.createElement(
      InputError,
      {
        ...errorProps,
        ...sharedProps,
        size: (errorProps == null ? void 0 : errorProps.size) || sharedProps.size,
        key: "error",
        id: (errorProps == null ? void 0 : errorProps.id) || errorId
      },
      error
    );
    const content = inputWrapperOrder.map((part) => {
      switch (part) {
        case "label":
          return _label;
        case "input":
          return _input;
        case "description":
          return _description;
        case "error":
          return _error;
        default:
          return null;
      }
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputWrapperProvider,
      {
        value: {
          getStyles,
          describedBy,
          inputId,
          labelId,
          ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box,
          {
            ref: ref2,
            variant,
            size: size2,
            mod: [{ error: !!error }, mod],
            ...getStyles("root"),
            ...others,
            children: content
          }
        )
      }
    );
  });
  InputWrapper.classes = classes$3;
  InputWrapper.displayName = "@mantine/core/InputWrapper";
  const defaultProps$7 = {
    variant: "default",
    leftSectionPointerEvents: "none",
    rightSectionPointerEvents: "none",
    withAria: true,
    withErrorStyles: true
  };
  const varsResolver$4 = createVarsResolver((_, props, ctx) => ({
    wrapper: {
      "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
      "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
      "--input-height": getSize(props.size, "input-height"),
      "--input-fz": getFontSize(props.size),
      "--input-radius": props.radius === void 0 ? void 0 : getRadius(props.radius),
      "--input-left-section-width": props.leftSectionWidth !== void 0 ? rem(props.leftSectionWidth) : void 0,
      "--input-right-section-width": props.rightSectionWidth !== void 0 ? rem(props.rightSectionWidth) : void 0,
      "--input-padding-y": props.multiline ? getSize(props.size, "input-padding-y") : void 0,
      "--input-left-section-pointer-events": props.leftSectionPointerEvents,
      "--input-right-section-pointer-events": props.rightSectionPointerEvents
    }
  }));
  const Input = polymorphicFactory((_props, ref2) => {
    const props = useProps("Input", defaultProps$7, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      required,
      __staticSelector,
      __stylesApiProps,
      size: size2,
      wrapperProps,
      error,
      disabled,
      leftSection,
      leftSectionProps,
      leftSectionWidth,
      rightSection,
      rightSectionProps,
      rightSectionWidth,
      rightSectionPointerEvents,
      leftSectionPointerEvents,
      variant,
      vars,
      pointer,
      multiline,
      radius,
      id,
      withAria,
      withErrorStyles,
      mod,
      inputSize,
      __clearSection,
      __clearable,
      __defaultRightSection,
      ...others
    } = props;
    const { styleProps, rest } = extractStyleProps(others);
    const ctx = useInputWrapperContext();
    const stylesCtx = { offsetBottom: ctx == null ? void 0 : ctx.offsetBottom, offsetTop: ctx == null ? void 0 : ctx.offsetTop };
    const getStyles = useStyles({
      name: ["Input", __staticSelector],
      props: __stylesApiProps || props,
      classes: classes$3,
      className,
      style,
      classNames,
      styles,
      unstyled,
      stylesCtx,
      rootSelector: "wrapper",
      vars,
      varsResolver: varsResolver$4
    });
    const ariaAttributes = withAria ? {
      required,
      disabled,
      "aria-invalid": !!error,
      "aria-describedby": ctx == null ? void 0 : ctx.describedBy,
      id: (ctx == null ? void 0 : ctx.inputId) || id
    } : {};
    const _rightSection = rightSection || __clearable && __clearSection || __defaultRightSection;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(InputContext, { value: { size: size2 || "sm" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box,
      {
        ...getStyles("wrapper"),
        ...styleProps,
        ...wrapperProps,
        mod: [
          {
            error: !!error && withErrorStyles,
            pointer,
            disabled,
            multiline,
            "data-with-right-section": !!_rightSection,
            "data-with-left-section": !!leftSection
          },
          mod
        ],
        variant,
        size: size2,
        children: [
          leftSection && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ...leftSectionProps,
              "data-position": "left",
              ...getStyles("section", {
                className: leftSectionProps == null ? void 0 : leftSectionProps.className,
                style: leftSectionProps == null ? void 0 : leftSectionProps.style
              }),
              children: leftSection
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box,
            {
              component: "input",
              ...rest,
              ...ariaAttributes,
              ref: ref2,
              required,
              mod: { disabled, error: !!error && withErrorStyles },
              variant,
              __size: inputSize,
              ...getStyles("input")
            }
          ),
          _rightSection && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ...rightSectionProps,
              "data-position": "right",
              ...getStyles("section", {
                className: rightSectionProps == null ? void 0 : rightSectionProps.className,
                style: rightSectionProps == null ? void 0 : rightSectionProps.style
              }),
              children: _rightSection
            }
          )
        ]
      }
    ) });
  });
  Input.classes = classes$3;
  Input.Wrapper = InputWrapper;
  Input.Label = InputLabel;
  Input.Error = InputError;
  Input.Description = InputDescription;
  Input.Placeholder = InputPlaceholder;
  Input.ClearButton = InputClearButton;
  Input.displayName = "@mantine/core/Input";
  function useInputProps(component, defaultProps2, _props) {
    const props = useProps(component, defaultProps2, _props);
    const {
      label,
      description,
      error,
      required,
      classNames,
      styles,
      className,
      unstyled,
      __staticSelector,
      __stylesApiProps,
      errorProps,
      labelProps,
      descriptionProps,
      wrapperProps: _wrapperProps,
      id,
      size: size2,
      style,
      inputContainer,
      inputWrapperOrder,
      withAsterisk,
      variant,
      vars,
      mod,
      ...others
    } = props;
    const { styleProps, rest } = extractStyleProps(others);
    const wrapperProps = {
      label,
      description,
      error,
      required,
      classNames,
      className,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      errorProps,
      labelProps,
      descriptionProps,
      unstyled,
      styles,
      size: size2,
      style,
      inputContainer,
      inputWrapperOrder,
      withAsterisk,
      variant,
      id,
      mod,
      ..._wrapperProps
    };
    return {
      ...rest,
      classNames,
      styles,
      unstyled,
      wrapperProps: { ...wrapperProps, ...styleProps },
      inputProps: {
        required,
        classNames,
        styles,
        unstyled,
        size: size2,
        __staticSelector,
        __stylesApiProps: __stylesApiProps || props,
        error,
        variant,
        id
      }
    };
  }
  const defaultProps$6 = {
    __staticSelector: "InputBase",
    withAria: true
  };
  const InputBase = polymorphicFactory((props, ref2) => {
    const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", defaultProps$6, props);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Input.Wrapper, { ...wrapperProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...inputProps, ...others, ref: ref2 }) });
  });
  InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
  InputBase.displayName = "@mantine/core/InputBase";
  function CheckIcon({ size: size2, style, ...others }) {
    const _style = size2 !== void 0 ? { width: rem(size2), height: rem(size2), ...style } : style;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: _style,
        "aria-hidden": true,
        ...others,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd"
          }
        )
      }
    );
  }
  var classes$2 = { "root": "m_77c9d27d", "inner": "m_80f1301b", "label": "m_811560b9", "section": "m_a74036a", "loader": "m_a25b86ee", "group": "m_80d6d844", "groupSection": "m_70be2a01" };
  const defaultProps$5 = {
    orientation: "horizontal"
  };
  const varsResolver$3 = createVarsResolver((_, { borderWidth }) => ({
    group: { "--button-border-width": rem(borderWidth) }
  }));
  const ButtonGroup = factory((_props, ref2) => {
    const props = useProps("ButtonGroup", defaultProps$5, _props);
    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      orientation,
      vars,
      borderWidth,
      variant,
      mod,
      ...others
    } = useProps("ButtonGroup", defaultProps$5, _props);
    const getStyles = useStyles({
      name: "ButtonGroup",
      props,
      classes: classes$2,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$3,
      rootSelector: "group"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        ...getStyles("group"),
        ref: ref2,
        variant,
        mod: [{ "data-orientation": orientation }, mod],
        role: "group",
        ...others
      }
    );
  });
  ButtonGroup.classes = classes$2;
  ButtonGroup.displayName = "@mantine/core/ButtonGroup";
  const defaultProps$4 = {};
  const varsResolver$2 = createVarsResolver(
    (theme, { radius, color, gradient, variant, autoContrast, size: size2 }) => {
      const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
      });
      return {
        groupSection: {
          "--section-height": getSize(size2, "section-height"),
          "--section-padding-x": getSize(size2, "section-padding-x"),
          "--section-fz": (size2 == null ? void 0 : size2.includes("compact")) ? getFontSize(size2.replace("compact-", "")) : getFontSize(size2),
          "--section-radius": radius === void 0 ? void 0 : getRadius(radius),
          "--section-bg": color || variant ? colors.background : void 0,
          "--section-color": colors.color,
          "--section-bd": color || variant ? colors.border : void 0
        }
      };
    }
  );
  const ButtonGroupSection = factory((_props, ref2) => {
    const props = useProps("ButtonGroupSection", defaultProps$4, _props);
    const {
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      variant,
      gradient,
      radius,
      autoContrast,
      ...others
    } = useProps("ButtonGroupSection", defaultProps$4, _props);
    const getStyles = useStyles({
      name: "ButtonGroupSection",
      props,
      classes: classes$2,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$2,
      rootSelector: "groupSection"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { ...getStyles("groupSection"), ref: ref2, variant, ...others });
  });
  ButtonGroupSection.classes = classes$2;
  ButtonGroupSection.displayName = "@mantine/core/ButtonGroupSection";
  const loaderTransition = {
    in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${rem(1)}))` },
    out: { opacity: 0, transform: "translate(-50%, -200%)" },
    common: { transformOrigin: "center" },
    transitionProperty: "transform, opacity"
  };
  const defaultProps$3 = {};
  const varsResolver$1 = createVarsResolver(
    (theme, { radius, color, gradient, variant, size: size2, justify, autoContrast }) => {
      const colors = theme.variantColorResolver({
        color: color || theme.primaryColor,
        theme,
        gradient,
        variant: variant || "filled",
        autoContrast
      });
      return {
        root: {
          "--button-justify": justify,
          "--button-height": getSize(size2, "button-height"),
          "--button-padding-x": getSize(size2, "button-padding-x"),
          "--button-fz": (size2 == null ? void 0 : size2.includes("compact")) ? getFontSize(size2.replace("compact-", "")) : getFontSize(size2),
          "--button-radius": radius === void 0 ? void 0 : getRadius(radius),
          "--button-bg": color || variant ? colors.background : void 0,
          "--button-hover": color || variant ? colors.hover : void 0,
          "--button-color": colors.color,
          "--button-bd": color || variant ? colors.border : void 0,
          "--button-hover-color": color || variant ? colors.hoverColor : void 0
        }
      };
    }
  );
  const Button = polymorphicFactory((_props, ref2) => {
    const props = useProps("Button", defaultProps$3, _props);
    const {
      style,
      vars,
      className,
      color,
      disabled,
      children,
      leftSection,
      rightSection,
      fullWidth,
      variant,
      radius,
      loading,
      loaderProps,
      gradient,
      classNames,
      styles,
      unstyled,
      "data-disabled": dataDisabled,
      autoContrast,
      mod,
      ...others
    } = props;
    const getStyles = useStyles({
      name: "Button",
      props,
      classes: classes$2,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver: varsResolver$1
    });
    const hasLeftSection = !!leftSection;
    const hasRightSection = !!rightSection;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      UnstyledButton,
      {
        ref: ref2,
        ...getStyles("root", { active: !disabled && !loading && !dataDisabled }),
        unstyled,
        variant,
        disabled: disabled || loading,
        mod: [
          {
            disabled: disabled || dataDisabled,
            loading,
            block: fullWidth,
            "with-left-section": hasLeftSection,
            "with-right-section": hasRightSection
          },
          mod
        ],
        ...others,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Loader,
            {
              color: "var(--button-color)",
              size: "calc(var(--button-height) / 1.8)",
              ...loaderProps
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ...getStyles("inner"), children: [
            leftSection && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("section"), mod: { position: "left" }, children: leftSection }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", mod: { loading }, ...getStyles("label"), children }),
            rightSection && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", ...getStyles("section"), mod: { position: "right" }, children: rightSection })
          ] })
        ]
      }
    );
  });
  Button.classes = classes$2;
  Button.displayName = "@mantine/core/Button";
  Button.Group = ButtonGroup;
  Button.GroupSection = ButtonGroupSection;
  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r2 in t) ({}).hasOwnProperty.call(t, r2) && (n[r2] = t[r2]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }
  function _objectWithoutPropertiesLoose(r2, e) {
    if (null == r2) return {};
    var t = {};
    for (var n in r2) if ({}.hasOwnProperty.call(r2, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r2[n];
    }
    return t;
  }
  var index$1 = reactExports.useLayoutEffect;
  var useLatest = function useLatest2(value) {
    var ref2 = React.useRef(value);
    index$1(function() {
      ref2.current = value;
    });
    return ref2;
  };
  var updateRef = function updateRef2(ref2, value) {
    if (typeof ref2 === "function") {
      ref2(value);
      return;
    }
    ref2.current = value;
  };
  var useComposedRef = function useComposedRef2(libRef, userRef) {
    var prevUserRef = React.useRef();
    return React.useCallback(function(instance) {
      libRef.current = instance;
      if (prevUserRef.current) {
        updateRef(prevUserRef.current, null);
      }
      prevUserRef.current = userRef;
      if (!userRef) {
        return;
      }
      updateRef(userRef, instance);
    }, [userRef]);
  };
  var HIDDEN_TEXTAREA_STYLE = {
    "min-height": "0",
    "max-height": "none",
    height: "0",
    visibility: "hidden",
    overflow: "hidden",
    position: "absolute",
    "z-index": "-1000",
    top: "0",
    right: "0",
    display: "block"
  };
  var forceHiddenStyles = function forceHiddenStyles2(node) {
    Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
      node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
    });
  };
  var forceHiddenStyles$1 = forceHiddenStyles;
  var hiddenTextarea = null;
  var getHeight = function getHeight2(node, sizingData) {
    var height = node.scrollHeight;
    if (sizingData.sizingStyle.boxSizing === "border-box") {
      return height + sizingData.borderSize;
    }
    return height - sizingData.paddingSize;
  };
  function calculateNodeHeight(sizingData, value, minRows, maxRows) {
    if (minRows === void 0) {
      minRows = 1;
    }
    if (maxRows === void 0) {
      maxRows = Infinity;
    }
    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement("textarea");
      hiddenTextarea.setAttribute("tabindex", "-1");
      hiddenTextarea.setAttribute("aria-hidden", "true");
      forceHiddenStyles$1(hiddenTextarea);
    }
    if (hiddenTextarea.parentNode === null) {
      document.body.appendChild(hiddenTextarea);
    }
    var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
    var boxSizing = sizingStyle.boxSizing;
    Object.keys(sizingStyle).forEach(function(_key) {
      var key = _key;
      hiddenTextarea.style[key] = sizingStyle[key];
    });
    forceHiddenStyles$1(hiddenTextarea);
    hiddenTextarea.value = value;
    var height = getHeight(hiddenTextarea, sizingData);
    hiddenTextarea.value = value;
    height = getHeight(hiddenTextarea, sizingData);
    hiddenTextarea.value = "x";
    var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
    var minHeight = rowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    var maxHeight = rowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
    return [height, rowHeight];
  }
  var noop = function noop2() {
  };
  var pick = function pick2(props, obj) {
    return props.reduce(function(acc, prop) {
      acc[prop] = obj[prop];
      return acc;
    }, {});
  };
  var SIZING_STYLE = [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "boxSizing",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    // non-standard
    "tabSize",
    "textIndent",
    // non-standard
    "textRendering",
    "textTransform",
    "width",
    "wordBreak",
    "wordSpacing",
    "scrollbarGutter"
  ];
  var isIE = !!document.documentElement.currentStyle;
  var getSizingData = function getSizingData2(node) {
    var style = window.getComputedStyle(node);
    if (style === null) {
      return null;
    }
    var sizingStyle = pick(SIZING_STYLE, style);
    var boxSizing = sizingStyle.boxSizing;
    if (boxSizing === "") {
      return null;
    }
    if (isIE && boxSizing === "border-box") {
      sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
    }
    var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
    var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
    return {
      sizingStyle,
      paddingSize,
      borderSize
    };
  };
  var getSizingData$1 = getSizingData;
  function useListener(target, type, listener) {
    var latestListener = useLatest(listener);
    reactExports.useLayoutEffect(function() {
      var handler = function handler2(ev) {
        return latestListener.current(ev);
      };
      if (!target) {
        return;
      }
      target.addEventListener(type, handler);
      return function() {
        return target.removeEventListener(type, handler);
      };
    }, []);
  }
  var useWindowResizeListener = function useWindowResizeListener2(listener) {
    useListener(window, "resize", listener);
  };
  var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
    useListener(document.fonts, "loadingdone", listener);
  };
  var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
  var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
    var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    var isControlled = props.value !== void 0;
    var libRef = reactExports.useRef(null);
    var ref2 = useComposedRef(libRef, userRef);
    var heightRef = reactExports.useRef(0);
    var measurementsCacheRef = reactExports.useRef();
    var resizeTextarea = function resizeTextarea2() {
      var node = libRef.current;
      var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
      if (!nodeSizingData) {
        return;
      }
      measurementsCacheRef.current = nodeSizingData;
      var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
      if (heightRef.current !== height) {
        heightRef.current = height;
        node.style.setProperty("height", height + "px", "important");
        onHeightChange(height, {
          rowHeight
        });
      }
    };
    var handleChange = function handleChange2(event) {
      if (!isControlled) {
        resizeTextarea();
      }
      onChange(event);
    };
    {
      reactExports.useLayoutEffect(resizeTextarea);
      useWindowResizeListener(resizeTextarea);
      useFontsLoadedListener(resizeTextarea);
      return /* @__PURE__ */ reactExports.createElement("textarea", _extends({}, props, {
        onChange: handleChange,
        ref: ref2
      }));
    }
  };
  var index = /* @__PURE__ */ reactExports.forwardRef(TextareaAutosize);
  const defaultProps$2 = {};
  const Textarea = factory((props, ref2) => {
    const { autosize, maxRows, minRows, __staticSelector, resize, ...others } = useProps(
      "Textarea",
      defaultProps$2,
      props
    );
    const shouldAutosize = autosize && getEnv() !== "test";
    const autosizeProps = shouldAutosize ? { maxRows, minRows } : {};
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      InputBase,
      {
        component: shouldAutosize ? index : "textarea",
        ref: ref2,
        ...others,
        __staticSelector: __staticSelector || "Textarea",
        multiline: true,
        "data-no-overflow": autosize && maxRows === void 0 || void 0,
        __vars: { "--input-resize": resize },
        ...autosizeProps
      }
    );
  });
  Textarea.classes = InputBase.classes;
  Textarea.displayName = "@mantine/core/Textarea";
  const [StepperProvider, useStepperContext] = createSafeContext(
    "Stepper component was not found in tree"
  );
  const StepperCompleted = () => null;
  StepperCompleted.displayName = "@mantine/core/StepperCompleted";
  var classes$1 = { "root": "m_cbb4ea7e", "steps": "m_aaf89d0b", "separator": "m_2a371ac9", "content": "m_78da155d", "step": "m_cbb57068", "step--horizontal": "m_f56b1e2c", "step--vertical": "m_833edb7e", "verticalSeparator": "m_6496b3f3", "stepWrapper": "m_818e70b", "stepIcon": "m_1959ad01", "stepCompletedIcon": "m_a79331dc", "stepBody": "m_1956aa2a", "stepLabel": "m_12051f6c", "stepDescription": "m_164eea74" };
  const getStepFragment = (Fragment, step) => {
    if (typeof Fragment === "function") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Fragment, { step: step || 0 });
    }
    return Fragment;
  };
  const defaultProps$1 = {
    withIcon: true,
    allowStepClick: true,
    iconPosition: "left"
  };
  const StepperStep = factory((props, ref2) => {
    const {
      classNames,
      className,
      style,
      styles,
      vars,
      step,
      state,
      color,
      icon,
      completedIcon,
      progressIcon,
      label,
      description,
      withIcon,
      iconSize,
      loading,
      allowStepClick,
      allowStepSelect,
      iconPosition,
      orientation,
      mod,
      ...others
    } = useProps("StepperStep", defaultProps$1, props);
    const ctx = useStepperContext();
    const theme = useMantineTheme();
    const stylesApi = { classNames, styles };
    const _icon = state === "stepCompleted" ? null : state === "stepProgress" ? progressIcon : icon;
    const dataAttributes = {
      "data-progress": state === "stepProgress" || void 0,
      "data-completed": state === "stepCompleted" || void 0
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      UnstyledButton,
      {
        ...ctx.getStyles("step", { className, style, variant: ctx.orientation, ...stylesApi }),
        mod: [
          { "icon-position": iconPosition || ctx.iconPosition, "allow-click": allowStepClick },
          mod
        ],
        ref: ref2,
        ...dataAttributes,
        ...others,
        __vars: { "--step-color": color ? getThemeColor(color, theme) : void 0 },
        tabIndex: allowStepClick ? 0 : -1,
        children: [
          withIcon && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ...ctx.getStyles("stepWrapper", stylesApi), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ...ctx.getStyles("stepIcon", stylesApi), ...dataAttributes, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, { mounted: state === "stepCompleted", transition: "pop", duration: 200, children: (transitionStyles) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  ...ctx.getStyles("stepCompletedIcon", { style: transitionStyles, ...stylesApi }),
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Loader,
                    {
                      color: "var(--mantine-color-white)",
                      size: "calc(var(--stepper-icon-size) / 2)",
                      ...ctx.getStyles("stepLoader", stylesApi)
                    }
                  ) : getStepFragment(completedIcon, step) || /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon, { size: "60%" })
                }
              ) }),
              state !== "stepCompleted" ? loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Loader,
                {
                  ...ctx.getStyles("stepLoader", stylesApi),
                  size: "calc(var(--stepper-icon-size) / 2)",
                  color
                }
              ) : getStepFragment(_icon || icon, step) : null
            ] }),
            orientation === "vertical" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                ...ctx.getStyles("verticalSeparator", stylesApi),
                "data-active": state === "stepCompleted" || void 0
              }
            )
          ] }),
          (label || description) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              ...ctx.getStyles("stepBody", stylesApi),
              "data-orientation": ctx.orientation,
              "data-icon-position": iconPosition || ctx.iconPosition,
              children: [
                label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...ctx.getStyles("stepLabel", stylesApi), children: getStepFragment(label, step) }),
                description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...ctx.getStyles("stepDescription", stylesApi), children: getStepFragment(description, step) })
              ]
            }
          )
        ]
      }
    );
  });
  StepperStep.classes = classes$1;
  StepperStep.displayName = "@mantine/core/StepperStep";
  const defaultProps = {
    orientation: "horizontal",
    iconPosition: "left",
    allowNextStepsSelect: true,
    wrap: true
  };
  const varsResolver = createVarsResolver(
    (theme, { color, iconSize, size: size2, contentPadding, radius, autoContrast }) => ({
      root: {
        "--stepper-color": color ? getThemeColor(color, theme) : void 0,
        "--stepper-icon-color": getAutoContrastValue(autoContrast, theme) ? getContrastColor({ color, theme, autoContrast }) : void 0,
        "--stepper-icon-size": iconSize === void 0 ? getSize(size2, "stepper-icon-size") : rem(iconSize),
        "--stepper-content-padding": getSpacing(contentPadding),
        "--stepper-radius": radius === void 0 ? void 0 : getRadius(radius),
        "--stepper-fz": getFontSize(size2),
        "--stepper-spacing": getSpacing(size2)
      }
    })
  );
  const Stepper = factory((_props, ref2) => {
    var _a, _b, _c;
    const props = useProps("Stepper", defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      children,
      onStepClick,
      active,
      icon,
      completedIcon,
      progressIcon,
      color,
      iconSize,
      contentPadding,
      orientation,
      iconPosition,
      size: size2,
      radius,
      allowNextStepsSelect,
      wrap,
      autoContrast,
      ...others
    } = props;
    const getStyles = useStyles({
      name: "Stepper",
      classes: classes$1,
      props,
      className,
      style,
      classNames,
      styles,
      unstyled,
      vars,
      varsResolver
    });
    const convertedChildren = reactExports.Children.toArray(children);
    const _children = convertedChildren.filter(
      (child) => child.type !== StepperCompleted
    );
    const completedStep = convertedChildren.find(
      (item) => item.type === StepperCompleted
    );
    const items = _children.reduce(
      (acc, item, index2) => {
        const state = active === index2 ? "stepProgress" : active > index2 ? "stepCompleted" : "stepInactive";
        const shouldAllowSelect = () => {
          if (typeof onStepClick !== "function") {
            return false;
          }
          if (typeof item.props.allowStepSelect === "boolean") {
            return item.props.allowStepSelect;
          }
          return state === "stepCompleted" || allowNextStepsSelect;
        };
        const isStepSelectionEnabled = shouldAllowSelect();
        acc.push(
          reactExports.cloneElement(item, {
            icon: item.props.icon || icon || index2 + 1,
            key: index2,
            step: index2,
            state,
            onClick: () => isStepSelectionEnabled && (onStepClick == null ? void 0 : onStepClick(index2)),
            allowStepClick: isStepSelectionEnabled,
            completedIcon: item.props.completedIcon || completedIcon,
            progressIcon: item.props.progressIcon || progressIcon,
            color: item.props.color || color,
            iconSize,
            iconPosition: item.props.iconPosition || iconPosition,
            orientation
          })
        );
        if (orientation === "horizontal" && index2 !== _children.length - 1) {
          acc.push(
            /* @__PURE__ */ reactExports.createElement(
              "div",
              {
                ...getStyles("separator"),
                "data-active": index2 < active || void 0,
                "data-orientation": orientation,
                key: `separator-${index2}`
              }
            )
          );
        }
        return acc;
      },
      []
    );
    const stepContent = (_b = (_a = _children[active]) == null ? void 0 : _a.props) == null ? void 0 : _b.children;
    const completedContent = (_c = completedStep == null ? void 0 : completedStep.props) == null ? void 0 : _c.children;
    const content = active > _children.length - 1 ? completedContent : stepContent;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StepperProvider, { value: { getStyles, orientation, iconPosition }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { ...getStyles("root"), ref: ref2, size: size2, ...others, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          ...getStyles("steps"),
          mod: {
            orientation,
            "icon-position": iconPosition,
            wrap: wrap && orientation !== "vertical"
          },
          children: items
        }
      ),
      content && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ...getStyles("content"), children: content })
    ] }) });
  });
  Stepper.classes = classes$1;
  Stepper.displayName = "@mantine/core/Stepper";
  Stepper.Completed = StepperCompleted;
  Stepper.Step = StepperStep;
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var defaultAttributes = {
    outline: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    filled: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none"
    }
  };
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
    const Component = reactExports.forwardRef(
      ({ color = "currentColor", size: size2 = 24, stroke = 2, title, className, children, ...rest }, ref2) => reactExports.createElement(
        "svg",
        {
          ref: ref2,
          ...defaultAttributes[type],
          width: size2,
          height: size2,
          className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(" "),
          ...type === "filled" ? {
            fill: color
          } : {
            strokeWidth: stroke,
            stroke: color
          },
          ...rest
        },
        [
          title && reactExports.createElement("title", { key: "svg-title" }, title),
          ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      )
    );
    Component.displayName = `${iconNamePascal}`;
    return Component;
  };
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconArrowLeft = createReactComponent("outline", "arrow-left", "IconArrowLeft", [["path", { "d": "M5 12l14 0", "key": "svg-0" }], ["path", { "d": "M5 12l6 6", "key": "svg-1" }], ["path", { "d": "M5 12l6 -6", "key": "svg-2" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconBug = createReactComponent("outline", "bug", "IconBug", [["path", { "d": "M9 9v-1a3 3 0 0 1 6 0v1", "key": "svg-0" }], ["path", { "d": "M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3", "key": "svg-1" }], ["path", { "d": "M3 13l4 0", "key": "svg-2" }], ["path", { "d": "M17 13l4 0", "key": "svg-3" }], ["path", { "d": "M12 20l0 -6", "key": "svg-4" }], ["path", { "d": "M4 19l3.35 -2", "key": "svg-5" }], ["path", { "d": "M20 19l-3.35 -2", "key": "svg-6" }], ["path", { "d": "M4 7l3.75 2.4", "key": "svg-7" }], ["path", { "d": "M20 7l-3.75 2.4", "key": "svg-8" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconCamera = createReactComponent("outline", "camera", "IconCamera", [["path", { "d": "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2", "key": "svg-0" }], ["path", { "d": "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", "key": "svg-1" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconChevronRight = createReactComponent("outline", "chevron-right", "IconChevronRight", [["path", { "d": "M9 6l6 6l-6 6", "key": "svg-0" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconTargetArrow = createReactComponent("outline", "target-arrow", "IconTargetArrow", [["path", { "d": "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "key": "svg-0" }], ["path", { "d": "M12 7a5 5 0 1 0 5 5", "key": "svg-1" }], ["path", { "d": "M13 3.055a9 9 0 1 0 7.941 7.945", "key": "svg-2" }], ["path", { "d": "M15 6v3h3l3 -3h-3v-3z", "key": "svg-3" }], ["path", { "d": "M15 9l-3 3", "key": "svg-4" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconX = createReactComponent("outline", "x", "IconX", [["path", { "d": "M18 6l-12 12", "key": "svg-0" }], ["path", { "d": "M6 6l12 12", "key": "svg-1" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconBulbFilled = createReactComponent("filled", "bulb-filled", "IconBulbFilled", [["path", { "d": "M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", "key": "svg-0" }], ["path", { "d": "M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z", "key": "svg-1" }], ["path", { "d": "M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z", "key": "svg-2" }], ["path", { "d": "M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z", "key": "svg-3" }], ["path", { "d": "M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z", "key": "svg-4" }], ["path", { "d": "M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z", "key": "svg-5" }], ["path", { "d": "M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z", "key": "svg-6" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconCircleCheckFilled = createReactComponent("filled", "circle-check-filled", "IconCircleCheckFilled", [["path", { "d": "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", "key": "svg-0" }]]);
  /**
   * @license @tabler/icons-react v3.30.0 - MIT
   *
   * This source code is licensed under the MIT license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var IconHelpHexagonFilled = createReactComponent("filled", "help-hexagon-filled", "IconHelpHexagonFilled", [["path", { "d": "M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 13.586a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z", "key": "svg-0" }]]);
  function useHtmlColorScheme() {
    const [colorScheme, setColorScheme] = reactExports.useState(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    reactExports.useEffect(() => {
      const observer = new MutationObserver(() => {
        setColorScheme(
          document.documentElement.classList.contains("dark") ? "dark" : "light"
        );
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
      return () => observer.disconnect();
    }, []);
    return colorScheme;
  }
  function on(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (obj && obj.addEventListener) {
      obj.addEventListener.apply(obj, args);
    }
  }
  function off(obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (obj && obj.removeEventListener) {
      obj.removeEventListener.apply(obj, args);
    }
  }
  var isBrowser = typeof window !== "undefined";
  var useEffectOnce = function(effect) {
    reactExports.useEffect(effect, []);
  };
  var useUnmount = function(fn) {
    var fnRef = reactExports.useRef(fn);
    fnRef.current = fn;
    useEffectOnce(function() {
      return function() {
        return fnRef.current();
      };
    });
  };
  var useRafState = function(initialState) {
    var frame = reactExports.useRef(0);
    var _a = reactExports.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = reactExports.useCallback(function(value) {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(function() {
        setState(value);
      });
    }, []);
    useUnmount(function() {
      cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
  };
  var useWindowSize = function(_a) {
    var _b = {}, _c = _b.initialWidth, initialWidth = _c === void 0 ? Infinity : _c, _d = _b.initialHeight, initialHeight = _d === void 0 ? Infinity : _d, onChange = _b.onChange;
    var _e = useRafState({
      width: isBrowser ? window.innerWidth : initialWidth,
      height: isBrowser ? window.innerHeight : initialHeight
    }), state = _e[0], setState = _e[1];
    reactExports.useEffect(function() {
      if (isBrowser) {
        var handler_1 = function() {
          var width = window.innerWidth;
          var height = window.innerHeight;
          setState({
            width,
            height
          });
          if (onChange)
            onChange(width, height);
        };
        on(window, "resize", handler_1);
        return function() {
          off(window, "resize", handler_1);
        };
      }
    }, []);
    return state;
  };
  var tweenFunctions_1;
  var hasRequiredTweenFunctions;
  function requireTweenFunctions() {
    if (hasRequiredTweenFunctions) return tweenFunctions_1;
    hasRequiredTweenFunctions = 1;
    var tweenFunctions = {
      linear: function(t, b, _c, d) {
        var c = _c - b;
        return c * t / d + b;
      },
      easeInQuad: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function(t, b, _c, d) {
        var c = _c - b;
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t + b;
        } else {
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
      },
      easeInCubic: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function(t, b, _c, d) {
        var c = _c - b;
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
      },
      easeInQuart: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function(t, b, _c, d) {
        var c = _c - b;
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t + b;
        } else {
          return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
      },
      easeInQuint: function(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function(t, b, _c, d) {
        var c = _c - b;
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return c / 2 * t * t * t * t * t + b;
        } else {
          return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
      },
      easeInSine: function(t, b, _c, d) {
        var c = _c - b;
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function(t, b, _c, d) {
        var c = _c - b;
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function(t, b, _c, d) {
        var c = _c - b;
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function(t, b, _c, d) {
        var c = _c - b;
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function(t, b, _c, d) {
        var c = _c - b;
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOutExpo: function(t, b, _c, d) {
        var c = _c - b;
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        } else {
          return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
      },
      easeInCirc: function(t, b, _c, d) {
        var c = _c - b;
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function(t, b, _c, d) {
        var c = _c - b;
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d / 2) < 1) {
          return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        } else {
          return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
      },
      easeInElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d) === 1) {
          return b + c;
        }
        if (!p) {
          p = d * 0.3;
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function(t, b, _c, d) {
        var c = _c - b;
        var a, p, s;
        s = 1.70158;
        p = 0;
        a = c;
        if (t === 0) {
          return b;
        } else if ((t /= d / 2) === 2) {
          return b + c;
        }
        if (!p) {
          p = d * (0.3 * 1.5);
        }
        if (a < Math.abs(c)) {
          a = c;
          s = p / 4;
        } else {
          s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
          return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        } else {
          return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        }
      },
      easeInBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function(t, b, _c, d, s) {
        var c = _c - b;
        if (s === void 0) {
          s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        } else {
          return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
      },
      easeInBounce: function(t, b, _c, d) {
        var c = _c - b;
        var v;
        v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
      },
      easeOutBounce: function(t, b, _c, d) {
        var c = _c - b;
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOutBounce: function(t, b, _c, d) {
        var c = _c - b;
        var v;
        if (t < d / 2) {
          v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
          return v * 0.5 + b;
        } else {
          v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
          return v * 0.5 + c * 0.5 + b;
        }
      }
    };
    tweenFunctions_1 = tweenFunctions;
    return tweenFunctions_1;
  }
  var tweenFunctionsExports = requireTweenFunctions();
  function degreesToRads(degrees) {
    return degrees * Math.PI / 180;
  }
  function randomRange(min2, max2) {
    return min2 + Math.random() * (max2 - min2);
  }
  function randomInt(min2, max2) {
    return Math.floor(min2 + Math.random() * (max2 - min2 + 1));
  }
  var ParticleShape;
  (function(ParticleShape2) {
    ParticleShape2[ParticleShape2["Circle"] = 0] = "Circle";
    ParticleShape2[ParticleShape2["Square"] = 1] = "Square";
    ParticleShape2[ParticleShape2["Strip"] = 2] = "Strip";
  })(ParticleShape || (ParticleShape = {}));
  var RotationDirection;
  (function(RotationDirection2) {
    RotationDirection2[RotationDirection2["Positive"] = 1] = "Positive";
    RotationDirection2[RotationDirection2["Negative"] = -1] = "Negative";
  })(RotationDirection || (RotationDirection = {}));
  class Particle {
    constructor(context, getOptions, x, y) {
      this.getOptions = getOptions;
      const { colors, initialVelocityX, initialVelocityY } = this.getOptions();
      this.context = context;
      this.x = x;
      this.y = y;
      this.w = randomRange(5, 20);
      this.h = randomRange(5, 20);
      this.radius = randomRange(5, 10);
      this.vx = typeof initialVelocityX === "number" ? randomRange(-initialVelocityX, initialVelocityX) : randomRange(initialVelocityX.min, initialVelocityX.max);
      this.vy = typeof initialVelocityY === "number" ? randomRange(-initialVelocityY, 0) : randomRange(initialVelocityY.min, initialVelocityY.max);
      this.shape = randomInt(0, 2);
      this.angle = degreesToRads(randomRange(0, 360));
      this.angularSpin = randomRange(-0.2, 0.2);
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.rotateY = randomRange(0, 1);
      this.rotationDirection = randomRange(0, 1) ? RotationDirection.Positive : RotationDirection.Negative;
    }
    update() {
      const { gravity, wind, friction, opacity, drawShape } = this.getOptions();
      this.x += this.vx;
      this.y += this.vy;
      this.vy += gravity;
      this.vx += wind;
      this.vx *= friction;
      this.vy *= friction;
      if (this.rotateY >= 1 && this.rotationDirection === RotationDirection.Positive) {
        this.rotationDirection = RotationDirection.Negative;
      } else if (this.rotateY <= -1 && this.rotationDirection === RotationDirection.Negative) {
        this.rotationDirection = RotationDirection.Positive;
      }
      const rotateDelta = 0.1 * this.rotationDirection;
      this.rotateY += rotateDelta;
      this.angle += this.angularSpin;
      this.context.save();
      this.context.translate(this.x, this.y);
      this.context.rotate(this.angle);
      this.context.scale(1, this.rotateY);
      this.context.rotate(this.angle);
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.strokeStyle = this.color;
      this.context.globalAlpha = opacity;
      this.context.lineCap = "round";
      this.context.lineWidth = 2;
      if (drawShape && typeof drawShape === "function") {
        drawShape.call(this, this.context);
      } else {
        switch (this.shape) {
          case ParticleShape.Circle: {
            this.context.beginPath();
            this.context.arc(0, 0, this.radius, 0, 2 * Math.PI);
            this.context.fill();
            break;
          }
          case ParticleShape.Square: {
            this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
            break;
          }
          case ParticleShape.Strip: {
            this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
            break;
          }
        }
      }
      this.context.closePath();
      this.context.restore();
    }
  }
  class ParticleGenerator {
    constructor(canvas, getOptions) {
      this.x = 0;
      this.y = 0;
      this.w = 0;
      this.h = 0;
      this.lastNumberOfPieces = 0;
      this.tweenInitTime = Date.now();
      this.particles = [];
      this.particlesGenerated = 0;
      this.removeParticleAt = (i) => {
        this.particles.splice(i, 1);
      };
      this.getParticle = () => {
        const newParticleX = randomRange(this.x, this.w + this.x);
        const newParticleY = randomRange(this.y, this.h + this.y);
        return new Particle(this.context, this.getOptions, newParticleX, newParticleY);
      };
      this.animate = () => {
        const { canvas: canvas2, context, particlesGenerated, lastNumberOfPieces } = this;
        const { run, recycle, numberOfPieces, debug, tweenFunction, tweenDuration } = this.getOptions();
        if (!run) {
          return false;
        }
        const nP = this.particles.length;
        const activeCount = recycle ? nP : particlesGenerated;
        const now = Date.now();
        if (activeCount < numberOfPieces) {
          if (lastNumberOfPieces !== numberOfPieces) {
            this.tweenInitTime = now;
            this.lastNumberOfPieces = numberOfPieces;
          }
          const { tweenInitTime } = this;
          const progressTime = now - tweenInitTime > tweenDuration ? tweenDuration : Math.max(0, now - tweenInitTime);
          const tweenedVal = tweenFunction(progressTime, activeCount, numberOfPieces, tweenDuration);
          const numToAdd = Math.round(tweenedVal - activeCount);
          for (let i = 0; i < numToAdd; i++) {
            this.particles.push(this.getParticle());
          }
          this.particlesGenerated += numToAdd;
        }
        if (debug) {
          context.font = "12px sans-serif";
          context.fillStyle = "#333";
          context.textAlign = "right";
          context.fillText(`Particles: ${nP}`, canvas2.width - 10, canvas2.height - 20);
        }
        this.particles.forEach((p, i) => {
          p.update();
          if (p.y > canvas2.height || p.y < -100 || p.x > canvas2.width + 100 || p.x < -100) {
            if (recycle && activeCount <= numberOfPieces) {
              this.particles[i] = this.getParticle();
            } else {
              this.removeParticleAt(i);
            }
          }
        });
        return nP > 0 || activeCount < numberOfPieces;
      };
      this.canvas = canvas;
      const ctx = this.canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Could not get canvas context");
      }
      this.context = ctx;
      this.getOptions = getOptions;
    }
  }
  const confettiDefaults = {
    width: typeof window !== "undefined" ? window.innerWidth : 300,
    height: typeof window !== "undefined" ? window.innerHeight : 200,
    numberOfPieces: 200,
    friction: 0.99,
    wind: 0,
    gravity: 0.1,
    initialVelocityX: 4,
    initialVelocityY: 10,
    colors: [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFEB3B",
      "#FFC107",
      "#FF9800",
      "#FF5722",
      "#795548"
    ],
    opacity: 1,
    debug: false,
    tweenFunction: tweenFunctionsExports.easeInOutQuad,
    tweenDuration: 5e3,
    recycle: true,
    run: true
  };
  class Confetti {
    constructor(canvas, opts) {
      this.lastFrameTime = Date.now();
      this.setOptionsWithDefaults = (opts2) => {
        const computedConfettiDefaults = {
          confettiSource: {
            x: 0,
            y: 0,
            w: this.canvas.width,
            h: 0
          }
        };
        this._options = {
          ...computedConfettiDefaults,
          ...confettiDefaults,
          ...opts2
        };
        Object.assign(this, opts2.confettiSource);
      };
      this.update = () => {
        const { options: { run, onConfettiComplete, frameRate }, canvas: canvas2, context } = this;
        if (frameRate) {
          const now = Date.now();
          const elapsed = now - this.lastFrameTime;
          if (elapsed < 1e3 / frameRate) {
            this.rafId = requestAnimationFrame(this.update);
            return;
          }
          this.lastFrameTime = now - elapsed % frameRate;
        }
        if (run) {
          context.fillStyle = "white";
          context.clearRect(0, 0, canvas2.width, canvas2.height);
        }
        if (this.generator.animate()) {
          this.rafId = requestAnimationFrame(this.update);
        } else {
          if (onConfettiComplete && typeof onConfettiComplete === "function" && this.generator.particlesGenerated > 0) {
            onConfettiComplete.call(this, this);
          }
          this._options.run = false;
        }
      };
      this.reset = () => {
        if (this.generator && this.generator.particlesGenerated > 0) {
          this.generator.particlesGenerated = 0;
          this.generator.particles = [];
          this.generator.lastNumberOfPieces = 0;
        }
      };
      this.stop = () => {
        this.options = { run: false };
        if (this.rafId) {
          cancelAnimationFrame(this.rafId);
          this.rafId = void 0;
        }
      };
      this.canvas = canvas;
      const ctx = this.canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Could not get canvas context");
      }
      this.context = ctx;
      this.generator = new ParticleGenerator(this.canvas, () => this.options);
      this.options = opts;
      this.update();
    }
    get options() {
      return this._options;
    }
    set options(opts) {
      var _a, _b;
      const lastRunState = (_a = this._options) == null ? void 0 : _a.run;
      const lastRecycleState = (_b = this._options) == null ? void 0 : _b.recycle;
      this.setOptionsWithDefaults(opts);
      if (this.generator) {
        Object.assign(this.generator, this.options.confettiSource);
        if (typeof opts.recycle === "boolean" && opts.recycle && lastRecycleState === false) {
          this.generator.lastNumberOfPieces = this.generator.particles.length;
        }
      }
      if (typeof opts.run === "boolean" && opts.run && lastRunState === false) {
        this.update();
      }
    }
  }
  const ref = React.createRef();
  class ReactConfettiInternal extends React.Component {
    constructor(props) {
      super(props);
      this.canvas = React.createRef();
      this.canvas = props.canvasRef || ref;
    }
    componentDidMount() {
      if (this.canvas.current) {
        const opts = extractCanvasProps(this.props)[0];
        this.confetti = new Confetti(this.canvas.current, opts);
      }
    }
    componentDidUpdate() {
      const confettiOptions = extractCanvasProps(this.props)[0];
      if (this.confetti) {
        this.confetti.options = confettiOptions;
      }
    }
    componentWillUnmount() {
      if (this.confetti) {
        this.confetti.stop();
      }
      this.confetti = void 0;
    }
    render() {
      const [confettiOptions, passedProps] = extractCanvasProps(this.props);
      const canvasStyles = {
        zIndex: 2,
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        ...passedProps.style
      };
      return jsxRuntimeExports.jsx("canvas", { width: confettiOptions.width, height: confettiOptions.height, ref: this.canvas, ...passedProps, style: canvasStyles });
    }
  }
  ReactConfettiInternal.defaultProps = {
    ...confettiDefaults
  };
  ReactConfettiInternal.displayName = "ReactConfetti";
  function extractCanvasProps(props) {
    const confettiOptions = {};
    const refs = {};
    const rest = {};
    const confettiOptionKeys = [
      ...Object.keys(confettiDefaults),
      "confettiSource",
      "drawShape",
      "onConfettiComplete",
      "frameRate"
    ];
    const refProps = ["canvasRef"];
    for (const prop in props) {
      const val = props[prop];
      if (confettiOptionKeys.includes(prop)) {
        confettiOptions[prop] = val;
      } else if (refProps.includes(prop)) {
        refProps[prop] = val;
      } else {
        rest[prop] = val;
      }
    }
    return [confettiOptions, rest, refs];
  }
  const ReactConfetti = React.forwardRef((props, ref2) => jsxRuntimeExports.jsx(ReactConfettiInternal, { canvasRef: ref2, ...props }));
  const poweredByBadge = "_poweredByBadge_7d9c4_13";
  const feedbackIcon = "_feedbackIcon_7d9c4_17";
  const feedbackText = "_feedbackText_7d9c4_25";
  const feedbackIconContainer = "_feedbackIconContainer_7d9c4_31";
  const classes = {
    poweredByBadge,
    feedbackIcon,
    feedbackText,
    feedbackIconContainer
  };
  const NotoBadge = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `space-x-1 flex w-full items-center justify-center mx-auto dark:text-mantine-gray-300 text-gray-500`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      target: "_blank",
      href: "#",
      className: `${classes.poweredByBadge} transition-all duration-100 hover:-translate-y-0.5 border border-white hover:border-mantine-border dark:hover:border-mantine-dark-500 dark:border-mantine-dark-600 hover:shadow-xs rounded-lg px-2 py-1 flex space-x-1 items-center group`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Powered by" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-1 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "object-fit", style: { width: rem(15), height: rem(15) }, src: `images/notofox.svg` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-0.5 text-orange-500 font-semibold duration-100 transition-all", children: "notofox" })
        ] })
      ]
    }
  ) });
  const FeedbackWidget = () => {
    var _a;
    const { width, height } = useWindowSize();
    const [feedbackType, setFeedbackType] = reactExports.useState("");
    const [feedbackText2, setFeedbackText] = reactExports.useState("");
    const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);
    useHtmlColorScheme();
    const [active, setActive] = reactExports.useState(0);
    const nextStep = () => setActive((current) => current < 3 ? current + 1 : current);
    const prevStep = () => setActive((current) => current > 0 ? current - 1 : current);
    const submitFeedback = () => {
      console.log("Submitting feedback widget feedback: ", feedbackText2);
    };
    const [showConfetti, setShowConfetti] = reactExports.useState(true);
    const getPlaceholder = (type) => {
      switch (type.toLowerCase()) {
        case "bug":
          return "What's the bug and how can we reproduce it?";
        case "feature":
          return "What's your feature? How would it help Footprint's users?";
        case "other":
          return "What's on your mind? We're open to new ideas and suggestions.";
      }
    };
    const getTitle = (type) => {
      switch (type.toLowerCase()) {
        case "bug":
          return {
            title: "Bug Report",
            icon: IconBug
          };
        case "feature":
          return {
            title: "Feature Request",
            icon: IconTargetArrow
          };
        case "other":
          return {
            title: "Feedback",
            icon: IconHelpHexagonFilled
          };
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block", children: [
      active > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prevStep,
            className: `p-2 rounded-full dark:hover:bg-mantine-dark-600 hover:bg-gray-100 transition-colors ${active != 1 ? "invisible" : ""}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconArrowLeft, { size: 20 })
          }
        ),
        active == 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-lg font-500 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: (_a = getTitle(feedbackType)) == null ? void 0 : _a.title }) }) }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "p-2 items-end rounded-full dark:hover:bg-mantine-dark-600 hover:bg-gray-100 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 20 })
          }
        )
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Stepper,
        {
          "data-autofocus": true,
          active,
          onStepClick: setActive,
          className: "w-full px-2.5",
          styles: {
            root: { backgroundColor: "transparent" },
            separator: { display: "none" },
            stepBody: { display: "none" },
            step: { display: "none" },
            stepIcon: { display: "none" },
            stepCompletedIcon: { display: "none" },
            stepLabel: { display: "none" },
            stepDescription: { display: "none" }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper.Step, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "justify-start dark:text-mantine-gray-100 text-[#343a40] text-left flex font-semibold text-lg", children: "Share your feedback" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 grid-rows-3 gap-y-2.5 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    onClick: () => {
                      setFeedbackType("bug");
                      nextStep();
                    },
                    className: `border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-1 flex w-full space-x-2.5 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classes.feedbackIcon, children: "🐛" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`, children: "Bug Report" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:text-mantine-dark-200 text-mantine-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { style: { width: rem(20), height: rem(20) } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    onClick: () => {
                      setFeedbackType("feature");
                      nextStep();
                    },
                    className: `border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full space-x-2.5 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classes.feedbackIcon, children: "💡" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`, children: "Feature Request" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:text-mantine-dark-200 text-mantine-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { style: { width: rem(20), height: rem(20) } }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    onClick: () => {
                      setFeedbackType("question");
                      nextStep();
                    },
                    className: `border-gray-200 hover:border-mantine-gray-600/60 border-2 hover:cursor-pointer flex w-full col-span-1 transition-all duration-200 rounded-lg px-2.5 py-1 hover:dark:border-mantine-dark-300 dark:border-mantine-dark-500 dark:bg-mantine-dark-600 bg-white justify-between items-center`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full space-x-2.5 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackIconContainer} flex justify-center items-center text-center bg-mantine-gray-100/40 dark:bg-mantine-dark-500/70 rounded-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classes.feedbackIcon, children: "❓" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${classes.feedbackText} text-mantine-gray-700 dark:text-mantine-gray-400`, children: "Question" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:text-mantine-dark-200 text-mantine-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { style: { width: rem(20), height: rem(20) } }) })
                    ]
                  }
                )
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper.Step, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full min-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  onChange: (e) => {
                    console.log("Setting new feedback text: ", e.target.value);
                    setFeedbackText(e.target.value);
                  },
                  color: "#ffb263",
                  size: "md",
                  radius: "md",
                  placeholder: getPlaceholder(feedbackType),
                  className: "w-full",
                  minRows: 4,
                  styles: {
                    input: {
                      width: "100%",
                      // minWidth: '300px',
                      minHeight: "120px",
                      "&:focus": {
                        borderColor: "#ffb263"
                      }
                    }
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "items-center flex w-full gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    loaderProps: { type: "dots" },
                    loading: submitButtonLoading,
                    onClick: () => {
                      submitFeedback();
                      toggleSubmitButton();
                      setTimeout(() => {
                        toggleSubmitButton();
                        nextStep();
                      }, 1e3);
                    },
                    fullWidth: true,
                    color: "#ffb263",
                    radius: "md",
                    children: "Submit Feedback"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ActionIcon, { color: "#ffb263", radius: "md", variant: "light", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCamera, { size: 22, stroke: 1.5 }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper.Completed, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
              showConfetti && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1e3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReactConfetti,
                {
                  width,
                  height,
                  recycle: false
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-1 flex mx-auto justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleCheckFilled, { className: "text-orange-500/80", size: 48 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-2 font-medium text-xl", children: "Your report has been received!" })
              ] })
            ] }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotoBadge, {}) })
    ] });
  };
  function WidgetWrapper({ children }) {
    const appTheme = [
      "#fff3e0",
      "#ffe7ca",
      "#ffcd99",
      "#ffb263",
      "#ff9a36",
      "#ff8b18",
      "#ff8405",
      "#e47100",
      "#cc6300",
      "#b15400"
    ];
    const theme = createTheme({
      /* Put your mantine theme override here */
      colors: {
        appTheme
      },
      primaryColor: "appTheme"
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(MantineProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children }) });
  }
  const FloatingFeedbackWidget = () => {
    const { width, height } = useWindowSize();
    const [opened, { toggle }] = useDisclosure(false);
    const [popoverOpened, setPopoverOpened] = reactExports.useState(false);
    const [feedbackType, setFeedbackType] = reactExports.useState("");
    const [feedbackText2, setFeedbackText] = reactExports.useState("");
    const [submitButtonLoading, { toggle: toggleSubmitButton }] = useDisclosure(false);
    const htmlColorScheme = useHtmlColorScheme();
    const [active, setActive] = reactExports.useState(0);
    const [showConfetti, setShowConfetti] = reactExports.useState(true);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(WidgetWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "floating-widget", className: "fixed bottom-6 right-6 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Popover,
      {
        closeOnClickOutside: false,
        offset: {
          crossAxis: -30,
          mainAxis: 15
        },
        shadow: "sm",
        radius: "lg",
        position: "top-end",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Popover.Target, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ActionIcon,
            {
              size: 53,
              radius: "xl",
              color: "#ffb263",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBulbFilled, { size: 30, className: "text-white" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Popover.Dropdown,
            {
              styles: {
                dropdown: {
                  // width: "20rem",
                  width: rem("23rem"),
                  backgroundColor: htmlColorScheme == "dark" ? "#1f1f1f" : "#FFFFFF"
                  // width: rem(20)
                  // padding: 0,
                }
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeedbackWidget, {})
            }
          )
        ]
      }
    ) }) });
  };
  if (typeof window !== "undefined" && typeof window.process === "undefined") {
    window.process = { env: { NODE_ENV: "production" } };
  }
  function FeedbackWidgetTrigger() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-semibold p-12 z-50", style: { border: "1px solid #ccc", padding: "1rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Hello World Test Widget" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Project: Notofox" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Theme: Default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Locale: English" })
    ] });
  }
  let widgetRoot = null;
  const NotofoxWidget = {
    init(config) {
      console.log("[+] FeedbackWidgetTrigger init function called, adding/updating widget for: ", JSON.stringify(config));
      const containerId = config.containerId || "notofox-widget";
      let container = document.getElementById(containerId);
      if (!container) {
        container = document.createElement("div");
        container.id = containerId;
        document.body.appendChild(container);
      }
      if (!widgetRoot) {
        widgetRoot = ReactDOM$1.createRoot(container);
        console.log("[+] Creating new window.React root called: " + containerId);
      } else {
        console.log("[!] window.React root already exists, updating instead of re-creating.");
      }
      if (!widgetRoot) {
        console.log("[X] Widget root is not available. Widget cannot initialize.");
      } else {
        console.log("[+] Widget root is available. Rendering AnotherTestWidget");
        console.log("Inside widget window.React version:", React.version);
        console.log("Inside widget window.ReactDOM version:", ReactDOM$1.version);
        console.log("[+] Checking AnotherTestWidget before rendering:", AnotherTestWidget);
        widgetRoot.render(
          // <GiveFeedbackButton size="md"/>
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingFeedbackWidget, {})
        );
      }
    }
  };
  if (typeof window !== "undefined") {
    window.NotofoxWidget = NotofoxWidget;
  }
  exports2.FeedbackWidgetTrigger = FeedbackWidgetTrigger;
  exports2.NotofoxWidget = NotofoxWidget;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
