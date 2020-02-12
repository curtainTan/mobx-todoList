/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mobx.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$mobx", function() { return $mobx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCancellationError", function() { return FlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableSet", function() { return ObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChanges", function() { return allowStateChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateChangesInsideComputed", function() { return allowStateChangesInsideComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsEnd", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_allowStateReadsStart", function() { return allowStateReadsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_endAction", function() { return _endAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getAdministration", function() { return getAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_interceptReads", function() { return interceptReads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isComputingDerivation", function() { return isComputingDerivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_resetGlobalState", function() { return resetGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_startAction", function() { return _startAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorate", function() { return decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return entries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtom", function() { return getAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugName", function() { return getDebugName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDependencyTree", function() { return getDependencyTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObserverTree", function() { return getObserverTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputedProp", function() { return isComputedProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlowCancellationError", function() { return isFlowCancellationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableProp", function() { return isObservableProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableSet", function() { return isObservableSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeObserved", function() { return onBecomeObserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBecomeUnobserved", function() { return onBecomeUnobserved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onReactionError", function() { return onReactionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false)
        {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) &&
        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail( true &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (true) {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail( true &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            // state propagation can occur outside of action/reactive context #2195
            var prevAllowStateReads = allowStateReadsStart(true);
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            allowStateReadsEnd(prevAllowStateReads);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        allowStateReadsEnd(prevAllowStateReads);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return false;
        }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail( true &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail( true &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
        {}
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () { }, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (true) {
        if (isFunctionNameConfigurable) {
            Object.defineProperty(res, "name", { value: actionName });
        }
    }
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    }
    finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false,  true &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false)
            {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED"
];
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}());
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false)
        {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (false)
        {}
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false)
        {}
    if (change)
        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {}
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function () {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function () {
                return undefined;
            },
            set: function (value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function () {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function (v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function () {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    }
    else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural
        ? comparer.structural
        : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effectAction(value, r);
        if (!firstTime && changed === true)
            effectAction(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        }
        catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true &&
        invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function (prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true &&
            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
        if (newDescriptor)
            Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties))
                        fail("'extendObservabe' only accepts plain objects as second argument");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if ( true && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = Object.create(Error.prototype);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1)
        fail( true && "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                }
                catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done)
                    return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise)
                    cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            }
            catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function")
        promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail( true &&
                "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail( true &&
            "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail( true &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true &&
            "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if ( true &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail( true &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string")
        return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) { return index; });
    }
    return fail( true &&
        "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return obj[key]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return obj.get(key); });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true &&
        "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) { return [key, obj[key]]; });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) { return [index, key]; });
    }
    return fail( true &&
        "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail( true &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    }
    else if (isObservableMap(obj)) {
        obj.delete(key);
    }
    else if (isObservableSet(obj)) {
        obj.delete(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    }
    else {
        return fail( true &&
            "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    }
    else if (isObservableMap(obj)) {
        return obj.has(key);
    }
    else if (isObservableSet(obj)) {
        return obj.has(key);
    }
    else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    }
    else {
        return fail( true &&
            "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key))
        return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    }
    else if (isObservableMap(obj)) {
        return obj.get(key);
    }
    else if (isObservableArray(obj)) {
        return obj[key];
    }
    else {
        return fail( true &&
            "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles)
        map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
        return source;
    if (typeof source !== "object")
        return source;
    // Directly return null if source is null
    if (source === null)
        return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date)
        return source;
    if (isObservableValue(source))
        return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source))
        keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++)
            res_1[i] = toAdd[i];
        return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        }
        else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        }
        else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean")
        options = { detectCycles: options };
    if (!options)
        options = defaultOptions;
    options.detectCycles =
        options.detectCycles === undefined
            ? options.recurseEverything === true
            : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
        __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
        return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError)
                    opts.onError(error);
                else
                    throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError)
        return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
        cancel = function () {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread((interceptable.interceptors || []));
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change)
                break;
        }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_b) {
                    var _c = __read(_b, 2), key = _c[0], value = _c[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && "development" !== "production")
                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && "development" !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && "development" !== "production")
            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && "development" !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
     true &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail( true &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail( true &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail( true &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) { depth = -1; }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
        case "[object Map]":
        case "[object Set]":
            // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
            // Hide this extra level by increasing the depth.
            if (depth >= 0) {
                depth++;
            }
            break;
    }
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    }
    else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/mobx.js":
/*!*********************!*\
  !*** ./src/mobx.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


var Store = (_class =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    _initializerDefineProperty(this, "num", _descriptor, this);

    _initializerDefineProperty(this, "str", _descriptor2, this);

    _initializerDefineProperty(this, "bool", _descriptor3, this);

    _initializerDefineProperty(this, "obj", _descriptor4, this);

    _initializerDefineProperty(this, "array", _descriptor5, this);
  }

  _createClass(Store, [{
    key: "bar",
    value: function bar() {
      this.str = "修改值了--";
      this.num = 89;
      this.bool = true;
    }
  }, {
    key: "mixed",
    get: function get() {
      return this.obj.age + "-----" + this.str;
    }
  }]);

  return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "num", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 22;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "str", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "string";
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "bool", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "obj", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      name: "tan",
      age: 12
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "array", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "mixed", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "mixed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "bar", [mobx__WEBPACK_IMPORTED_MODULE_0__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "bar"), _class.prototype)), _class);
var store = new Store(); // 测试 computed

var foo = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
  return store.str + "/" + store.obj.age;
});
console.log(foo.get());
console.log(store.mixed);
foo.observe(function (change) {
  console.log("computed 值改变：");
  console.log("修改值：", change);
}); // 测试 autorun 

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["autorun"])(function () {
  console.log("autorun运行：");
  console.log(store.str + "/" + store.obj.age);
}); // 测试 wen

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["when"])(function () {
  return store.bool;
}, function () {
  return console.log("变成 true 了...");
}); // 测试 reaction

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () {
  return [store.str, store.obj.age];
}, function (arr) {
  return console.log("reaction 运行：", arr);
});
console.log("开始测试：------- wen ------");
store.bool = true;
console.log("开始测试：------- 其他三个 ------");
store.obj.age = 13; // console.log( store.mixed )
// store.num = 78
// console.log( store.mixed )
// when( ()=> store.bool , ()=> console.log( "变成 true 了..." ) )
// store.bool = true
// reaction( () => [ store.obj.age ], arr => console.log( arr ) )
// store.bool = true
// store.num = 78
// store.str = "999999"
// console.log( store.mixed )
// store.bar()
// action( function(){
// console.log( "触发事件---" )
// store.str = "ppppppp"
// store.num = 8765
// store.obj.age = 45
// })()

Object(mobx__WEBPACK_IMPORTED_MODULE_0__["reaction"])(function () {
  return [store.str, store.obj.age];
}, function (arr) {
  return console.log("reaction 运行：", arr);
}); // 不用 action 改变值

console.log("不用 action 改变值：");
store.obj.age = 11;
store.str = "你好---"; // 使用 @action

console.log("使用 action 修饰器改变多个值");
store.bar(); // 使用 action   执行

console.log("使用 action 修饰器改变多个值");
Object(mobx__WEBPACK_IMPORTED_MODULE_0__["action"])(function () {
  store.str = "ppppppp";
  store.obj.age = 45;
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ieC5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsInN0ciIsIm51bSIsImJvb2wiLCJvYmoiLCJhZ2UiLCJvYnNlcnZhYmxlIiwibmFtZSIsImNvbXB1dGVkIiwiYWN0aW9uIiwic3RvcmUiLCJmb28iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwibWl4ZWQiLCJvYnNlcnZlIiwiY2hhbmdlIiwiYXV0b3J1biIsIndoZW4iLCJyZWFjdGlvbiIsImFyciIsImJhciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOEJBQThCO0FBQzVEO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsbUJBQW1CLEVBQUU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsbUJBQW1CLEVBQUU7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBcUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDLFFBQVEsRUFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JLDJCQUEyQjtBQUM5SjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxVQUFVLGtCQUFrQjtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxRQUFRLGFBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUU2a0M7Ozs7Ozs7Ozs7Ozs7QUNoOUk3a0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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R0FBVixHQUFnQixFQUFoQjtBQUNBSyxLQUFLLENBQUNULEdBQU4sR0FBWSxPQUFaLEMsQ0FDQTs7QUFDQVcsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQWI7QUFDQUgsS0FBSyxDQUFDWSxHQUFOLEcsQ0FDQTs7QUFDQVYsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQWI7QUFDQUosbURBQU0sQ0FBRSxZQUFNO0FBQ1ZDLE9BQUssQ0FBQ1QsR0FBTixHQUFZLFNBQVo7QUFDQVMsT0FBSyxDQUFDTixHQUFOLENBQVVDLEdBQVYsR0FBZ0IsRUFBaEI7QUFDSCxDQUhLLENBQU4sRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9ieC5qc1wiKTtcbiIsIi8qKiBNb2JYIC0gKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDIwIC0gTUlUIExpY2Vuc2VkICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxuXG52YXIgT0JGVVNDQVRFRF9FUlJPUiA9IFwiQW4gaW52YXJpYW50IGZhaWxlZCwgaG93ZXZlciB0aGUgZXJyb3IgaXMgb2JmdXNjYXRlZCBiZWNhdXNlIHRoaXMgaXMgYSBwcm9kdWN0aW9uIGJ1aWxkLlwiO1xyXG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcclxuT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XHJcbnZhciBFTVBUWV9PQkpFQ1QgPSB7fTtcclxuT2JqZWN0LmZyZWV6ZShFTVBUWV9PQkpFQ1QpO1xyXG5mdW5jdGlvbiBnZXROZXh0SWQoKSB7XHJcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZS5tb2J4R3VpZDtcclxufVxyXG5mdW5jdGlvbiBmYWlsKG1lc3NhZ2UpIHtcclxuICAgIGludmFyaWFudChmYWxzZSwgbWVzc2FnZSk7XHJcbiAgICB0aHJvdyBcIlhcIjsgLy8gdW5yZWFjaGFibGVcclxufVxyXG5mdW5jdGlvbiBpbnZhcmlhbnQoY2hlY2ssIG1lc3NhZ2UpIHtcclxuICAgIGlmICghY2hlY2spXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIFwiICsgKG1lc3NhZ2UgfHwgT0JGVVNDQVRFRF9FUlJPUikpO1xyXG59XHJcbi8qKlxyXG4gKiBQcmludHMgYSBkZXByZWNhdGlvbiBtZXNzYWdlLCBidXQgb25seSBvbmUgdGltZS5cclxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZGVwcmVjYXRlZCBtZXNzYWdlIHdhcyBhbHJlYWR5IHByaW50ZWQgYmVmb3JlXHJcbiAqL1xyXG52YXIgZGVwcmVjYXRlZE1lc3NhZ2VzID0gW107XHJcbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobXNnLCB0aGluZykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAodGhpbmcpIHtcclxuICAgICAgICByZXR1cm4gZGVwcmVjYXRlZChcIidcIiArIG1zZyArIFwiJywgdXNlICdcIiArIHRoaW5nICsgXCInIGluc3RlYWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlcHJlY2F0ZWRNZXNzYWdlcy5pbmRleE9mKG1zZykgIT09IC0xKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGRlcHJlY2F0ZWRNZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiW21vYnhdIERlcHJlY2F0ZWQ6IFwiICsgbXNnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbi8qKlxyXG4gKiBNYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGlzIGludm9rZWQgYXQgbW9zdCBvbmNlLlxyXG4gKi9cclxuZnVuY3Rpb24gb25jZShmdW5jKSB7XHJcbiAgICB2YXIgaW52b2tlZCA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoaW52b2tlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGludm9rZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcbnZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xyXG5mdW5jdGlvbiB1bmlxdWUobGlzdCkge1xyXG4gICAgdmFyIHJlcyA9IFtdO1xyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKHJlcy5pbmRleE9mKGl0ZW0pID09PSAtMSlcclxuICAgICAgICAgICAgcmVzLnB1c2goaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XHJcbn1cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG4gICAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvID09PSBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkSGlkZGVuRmluYWxQcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc1Byb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkge1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XHJcbiAgICByZXR1cm4gIWRlc2NyaXB0b3IgfHwgKGRlc2NyaXB0b3IuY29uZmlndXJhYmxlICE9PSBmYWxzZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlICE9PSBmYWxzZSk7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1Byb3BlcnR5Q29uZmlndXJhYmxlKG9iamVjdCwgcHJvcCkpXHJcbiAgICAgICAgZmFpbChcIkNhbm5vdCBtYWtlIHByb3BlcnR5ICdcIiArIHByb3AudG9TdHJpbmcoKSArIFwiJyBvYnNlcnZhYmxlLCBpdCBpcyBub3QgY29uZmlndXJhYmxlIGFuZCB3cml0YWJsZSBpbiB0aGUgdGFyZ2V0IG9iamVjdFwiKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKG5hbWUsIGNsYXp6KSB7XHJcbiAgICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcclxuICAgIGNsYXp6LnByb3RvdHlwZVtwcm9wTmFtZV0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIHhbcHJvcE5hbWVdID09PSB0cnVlO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSwgZGlzcmVnYXJkaW5nIG9ic2VydmFiaWxpdHkuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh4KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSB8fCBpc09ic2VydmFibGVBcnJheSh4KTtcclxufVxyXG5mdW5jdGlvbiBpc0VTNk1hcCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgTWFwO1xyXG59XHJcbmZ1bmN0aW9uIGlzRVM2U2V0KHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiBTZXQ7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZvbGxvd2luZzogb3duIGtleXMsIHByb3RvdHlwZSBrZXlzICYgb3duIHN5bWJvbCBrZXlzLCBpZiB0aGV5IGFyZSBlbnVtZXJhYmxlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGxhaW5PYmplY3RLZXlzKG9iamVjdCkge1xyXG4gICAgdmFyIGVudW1lcmFibGVzID0gbmV3IFNldCgpO1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdClcclxuICAgICAgICBlbnVtZXJhYmxlcy5hZGQoa2V5KTsgLy8gKmFsbCogZW51bWVyYWJsZXNcclxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrKS5lbnVtZXJhYmxlKVxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlcy5hZGQoayk7XHJcbiAgICB9KTsgLy8gKm93biogc3ltYm9sc1xyXG4gICAgLy8gTm90ZTogdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBtaXNzaW5nIGVudW1lcmFibGUsIGluaGVyaXRlZCwgc3ltYm9saWMgcHJvcGVydHkgbmFtZXMhIFRoYXQgd291bGQgaG93ZXZlciBwcmV0dHkgZXhwZW5zaXZlIHRvIGFkZCxcclxuICAgIC8vIGFzIHRoZXJlIGlzIG5vIGVmZmljaWVudCBpdGVyYXRvciB0aGF0IHJldHVybnMgKmFsbCogcHJvcGVydGllc1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZW51bWVyYWJsZXMpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeUtleShrZXkpIHtcclxuICAgIGlmIChrZXkgJiYga2V5LnRvU3RyaW5nKVxyXG4gICAgICAgIHJldHVybiBrZXkudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZyhrZXkpLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWFwTGlrZUtleXMobWFwKSB7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdChtYXApKVxyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwKSlcclxuICAgICAgICByZXR1cm4gbWFwLm1hcChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgdmFyIF9iID0gX19yZWFkKF9hLCAxKSwga2V5ID0gX2JbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBpZiAoaXNFUzZNYXAobWFwKSB8fCBpc09ic2VydmFibGVNYXAobWFwKSlcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAua2V5cygpKTtcclxuICAgIHJldHVybiBmYWlsKFwiQ2Fubm90IGdldCBrZXlzIGZyb20gJ1wiICsgbWFwICsgXCInXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJcIiArIHZhbHVlIDogdmFsdWU7XHJcbn1cblxudmFyICRtb2J4ID0gU3ltYm9sKFwibW9ieCBhZG1pbmlzdHJhdGlvblwiKTtcclxudmFyIEF0b20gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxyXG4gICAgICogVGhlIG9uQmVjb21lT2JzZXJ2ZWQgYW5kIG9uQmVjb21lVW5vYnNlcnZlZCBjYWxsYmFja3MgY2FuIGJlIHVzZWQgZm9yIHJlc291cmNlIG1hbmFnZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEF0b20obmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiQXRvbUBcIiArIGdldE5leHRJZCgpOyB9XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTsgLy8gZm9yIGVmZmVjdGl2ZSB1bm9ic2VydmluZy4gQmFzZUF0b20gaGFzIHRydWUsIGZvciBleHRyYSBvcHRpbWl6YXRpb24sIHNvIGl0cyBvbkJlY29tZVVub2JzZXJ2ZWQgbmV2ZXIgZ2V0cyBjYWxsZWQsIGJlY2F1c2UgaXQncyBub3QgbmVlZGVkXHJcbiAgICAgICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XHJcbiAgICB9XHJcbiAgICBBdG9tLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBsaXN0ZW5lcigpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQXRvbS5wcm90b3R5cGUub25CZWNvbWVVbm9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xyXG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBpcyBjdXJyZW50bHkgYSByZWFjdGl2ZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBBdG9tLnByb3RvdHlwZS5yZXBvcnRPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcmVwb3J0T2JzZXJ2ZWQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2UgdGhpcyBtZXRob2QgX2FmdGVyXyB0aGlzIG1ldGhvZCBoYXMgY2hhbmdlZCB0byBzaWduYWwgbW9ieCB0aGF0IGFsbCBpdHMgb2JzZXJ2ZXJzIHNob3VsZCBpbnZhbGlkYXRlLlxyXG4gICAgICovXHJcbiAgICBBdG9tLnByb3RvdHlwZS5yZXBvcnRDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xyXG4gICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICB9O1xyXG4gICAgQXRvbS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXRvbTtcclxufSgpKTtcclxudmFyIGlzQXRvbSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJBdG9tXCIsIEF0b20pO1xyXG5mdW5jdGlvbiBjcmVhdGVBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XHJcbiAgICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkgeyBvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9IG5vb3A7IH1cclxuICAgIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9IG5vb3A7IH1cclxuICAgIHZhciBhdG9tID0gbmV3IEF0b20obmFtZSk7XHJcbiAgICAvLyBkZWZhdWx0IGBub29wYCBsaXN0ZW5lciB3aWxsIG5vdCBpbml0aWFsaXplIHRoZSBob29rIFNldFxyXG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XHJcbiAgICAgICAgb25CZWNvbWVPYnNlcnZlZChhdG9tLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciAhPT0gbm9vcCkge1xyXG4gICAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChhdG9tLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhdG9tO1xyXG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5Q29tcGFyZXIoYSwgYikge1xyXG4gICAgcmV0dXJuIGEgPT09IGI7XHJcbn1cclxuZnVuY3Rpb24gc3RydWN0dXJhbENvbXBhcmVyKGEsIGIpIHtcclxuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYik7XHJcbn1cclxuZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmVyKGEsIGIpIHtcclxuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgMSk7XHJcbn1cclxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcclxuICAgIHJldHVybiBPYmplY3QuaXMoYSwgYik7XHJcbn1cclxudmFyIGNvbXBhcmVyID0ge1xyXG4gICAgaWRlbnRpdHk6IGlkZW50aXR5Q29tcGFyZXIsXHJcbiAgICBzdHJ1Y3R1cmFsOiBzdHJ1Y3R1cmFsQ29tcGFyZXIsXHJcbiAgICBkZWZhdWx0OiBkZWZhdWx0Q29tcGFyZXIsXHJcbiAgICBzaGFsbG93OiBzaGFsbG93Q29tcGFyZXJcclxufTtcblxudmFyIG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sID0gU3ltYm9sKFwibW9ieCBkaWQgcnVuIGxhenkgaW5pdGlhbGl6ZXJzXCIpO1xyXG52YXIgbW9ieFBlbmRpbmdEZWNvcmF0b3JzID0gU3ltYm9sKFwibW9ieCBwZW5kaW5nIGRlY29yYXRvcnNcIik7XHJcbnZhciBlbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlID0ge307XHJcbnZhciBub25FbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlID0ge307XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5SW5pdGlhbGl6ZXJEZXNjcmlwdG9yKHByb3AsIGVudW1lcmFibGUpIHtcclxuICAgIHZhciBjYWNoZSA9IGVudW1lcmFibGUgPyBlbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlIDogbm9uRW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZTtcclxuICAgIHJldHVybiAoY2FjaGVbcHJvcF0gfHxcclxuICAgICAgICAoY2FjaGVbcHJvcF0gPSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZW51bWVyYWJsZSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1twcm9wXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxufVxyXG5mdW5jdGlvbiBpbml0aWFsaXplSW5zdGFuY2UodGFyZ2V0KSB7XHJcbiAgICB2YXIgZV8xLCBfYTtcclxuICAgIGlmICh0YXJnZXRbbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2xdID09PSB0cnVlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZhciBkZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9yc107XHJcbiAgICBpZiAoZGVjb3JhdG9ycykge1xyXG4gICAgICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gQnVpbGQgcHJvcGVydHkga2V5IGFycmF5IGZyb20gYm90aCBzdHJpbmdzIGFuZCBzeW1ib2xzXHJcbiAgICAgICAgdmFyIGtleXMgPSBfX3NwcmVhZChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGRlY29yYXRvcnMpLCBPYmplY3Qua2V5cyhkZWNvcmF0b3JzKSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5c18xID0gX192YWx1ZXMoa2V5cyksIGtleXNfMV8xID0ga2V5c18xLm5leHQoKTsgIWtleXNfMV8xLmRvbmU7IGtleXNfMV8xID0ga2V5c18xLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBkZWNvcmF0b3JzW2tleV07XHJcbiAgICAgICAgICAgICAgICBkLnByb3BlcnR5Q3JlYXRvcih0YXJnZXQsIGQucHJvcCwgZC5kZXNjcmlwdG9yLCBkLmRlY29yYXRvclRhcmdldCwgZC5kZWNvcmF0b3JBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3BEZWNvcmF0b3IocHJvcGVydHlJbml0aWFsbHlFbnVtZXJhYmxlLCBwcm9wZXJ0eUNyZWF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3JGYWN0b3J5KCkge1xyXG4gICAgICAgIHZhciBkZWNvcmF0b3JBcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIGRlY29yYXRvciA9IGZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvciwgYXBwbHlJbW1lZGlhdGVseVxyXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzcGVjaWFsIHBhcmFtZXRlciB0byBzaWduYWwgdGhlIGRpcmVjdCBhcHBsaWNhdGlvbiBvZiBhIGRlY29yYXRvciwgYWxsb3cgZXh0ZW5kT2JzZXJ2YWJsZSB0byBza2lwIHRoZSBlbnRpcmUgdHlwZSBkZWNvcmF0aW9uIHBhcnQsXHJcbiAgICAgICAgLy8gYXMgdGhlIGluc3RhbmNlIHRvIGFwcGx5IHRoZSBkZWNvcmF0b3IgdG8gZXF1YWxzIHRoZSB0YXJnZXRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKGFwcGx5SW1tZWRpYXRlbHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5Q3JlYXRvcih0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IsIHRhcmdldCwgZGVjb3JhdG9yQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXF1YWNrc0xpa2VBRGVjb3JhdG9yKGFyZ3VtZW50cykpXHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiVGhpcyBmdW5jdGlvbiBpcyBhIGRlY29yYXRvciwgYnV0IGl0IHdhc24ndCBpbnZva2VkIGxpa2UgYSBkZWNvcmF0b3JcIik7XHJcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgbW9ieFBlbmRpbmdEZWNvcmF0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluaGVyaXRlZERlY29yYXRvcnMgPSB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzXTtcclxuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCBtb2J4UGVuZGluZ0RlY29yYXRvcnMsIF9fYXNzaWduKHt9LCBpbmhlcml0ZWREZWNvcmF0b3JzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9yc11bcHJvcF0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wOiBwcm9wLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yOiBwcm9wZXJ0eUNyZWF0b3IsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yOiBkZXNjcmlwdG9yLFxyXG4gICAgICAgICAgICAgICAgZGVjb3JhdG9yVGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHM6IGRlY29yYXRvckFyZ3VtZW50c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlUHJvcGVydHlJbml0aWFsaXplckRlc2NyaXB0b3IocHJvcCwgcHJvcGVydHlJbml0aWFsbHlFbnVtZXJhYmxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChxdWFja3NMaWtlQURlY29yYXRvcihhcmd1bWVudHMpKSB7XHJcbiAgICAgICAgICAgIC8vIEBkZWNvcmF0b3JcclxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gRU1QVFlfQVJSQVk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEBkZWNvcmF0b3IoYXJncylcclxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHF1YWNrc0xpa2VBRGVjb3JhdG9yKGFyZ3MpIHtcclxuICAgIHJldHVybiAoKChhcmdzLmxlbmd0aCA9PT0gMiB8fCBhcmdzLmxlbmd0aCA9PT0gMykgJiZcclxuICAgICAgICAodHlwZW9mIGFyZ3NbMV0gPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZ3NbMV0gPT09IFwic3ltYm9sXCIpKSB8fFxyXG4gICAgICAgIChhcmdzLmxlbmd0aCA9PT0gNCAmJiBhcmdzWzNdID09PSB0cnVlKSk7XHJcbn1cblxuZnVuY3Rpb24gZGVlcEVuaGFuY2VyKHYsIF8sIG5hbWUpIHtcclxuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2KSlcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCB7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWU6IG5hbWUgfSk7XHJcbiAgICBpZiAoaXNFUzZNYXAodikpXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIHsgbmFtZTogbmFtZSB9KTtcclxuICAgIGlmIChpc0VTNlNldCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zZXQodiwgeyBuYW1lOiBuYW1lIH0pO1xyXG4gICAgcmV0dXJuIHY7XHJcbn1cclxuZnVuY3Rpb24gc2hhbGxvd0VuaGFuY2VyKHYsIF8sIG5hbWUpIHtcclxuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodikgfHwgaXNPYnNlcnZhYmxlQXJyYXkodikgfHwgaXNPYnNlcnZhYmxlTWFwKHYpIHx8IGlzT2JzZXJ2YWJsZVNldCh2KSlcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XHJcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSlcclxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xyXG4gICAgaWYgKGlzRVM2TWFwKHYpKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xyXG4gICAgaWYgKGlzRVM2U2V0KHYpKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xyXG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgXCJUaGUgc2hhbGxvdyBtb2RpZmllciAvIGRlY29yYXRvciBjYW4gb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYXJyYXlzLCBvYmplY3RzLCBtYXBzIGFuZCBzZXRzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHJlZmVyZW5jZUVuaGFuY2VyKG5ld1ZhbHVlKSB7XHJcbiAgICAvLyBuZXZlciB0dXJuIGludG8gYW4gb2JzZXJ2YWJsZVxyXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIHJlZlN0cnVjdEVuaGFuY2VyKHYsIG9sZFZhbHVlLCBuYW1lKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzT2JzZXJ2YWJsZSh2KSlcclxuICAgICAgICB0aHJvdyBcIm9ic2VydmFibGUuc3RydWN0IHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIG9ic2VydmFibGUgdmFsdWVzXCI7XHJcbiAgICBpZiAoZGVlcEVxdWFsKHYsIG9sZFZhbHVlKSlcclxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XHJcbiAgICByZXR1cm4gdjtcclxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihlbmhhbmNlcikge1xyXG4gICAgaW52YXJpYW50KGVuaGFuY2VyKTtcclxuICAgIHZhciBkZWNvcmF0b3IgPSBjcmVhdGVQcm9wRGVjb3JhdG9yKHRydWUsIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgX2RlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaW52YXJpYW50KCFkZXNjcmlwdG9yIHx8ICFkZXNjcmlwdG9yLmdldCwgXCJAb2JzZXJ2YWJsZSBjYW5ub3QgYmUgdXNlZCBvbiBnZXR0ZXIgKHByb3BlcnR5IFxcXCJcIiArIHN0cmluZ2lmeUtleShwcm9wZXJ0eU5hbWUpICsgXCJcXFwiKSwgdXNlIEBjb21wdXRlZCBpbnN0ZWFkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IGRlc2NyaXB0b3JcclxuICAgICAgICAgICAgPyBkZXNjcmlwdG9yLmluaXRpYWxpemVyXHJcbiAgICAgICAgICAgICAgICA/IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIuY2FsbCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICA6IGRlc2NyaXB0b3IudmFsdWVcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkuYWRkT2JzZXJ2YWJsZVByb3AocHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGVuaGFuY2VyKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJlcyA9IFxyXG4gICAgLy8gRXh0cmEgcHJvY2VzcyBjaGVja3MsIGFzIHRoaXMgaGFwcGVucyBkdXJpbmcgbW9kdWxlIGluaXRpYWxpemF0aW9uXHJcbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICA/IGZ1bmN0aW9uIG9ic2VydmFibGVEZWNvcmF0b3IoKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgd3JhcHBlciBmdW5jdGlvbiBpcyBqdXN0IHRvIGRldGVjdCBpbGxlZ2FsIGRlY29yYXRvciBpbnZvY2F0aW9ucywgZGVwcmVjYXRlIGluIGEgbmV4dCB2ZXJzaW9uXHJcbiAgICAgICAgICAgIC8vIGFuZCBzaW1wbHkgcmV0dXJuIHRoZSBjcmVhdGVkIHByb3AgZGVjb3JhdG9yXHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiSW5jb3JyZWN0IGRlY29yYXRvciBpbnZvY2F0aW9uLiBAb2JzZXJ2YWJsZSBkZWNvcmF0b3IgZG9lc24ndCBleHBlY3QgYW55IGFyZ3VtZW50c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6IGRlY29yYXRvcjtcclxuICAgIHJlcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xyXG4gICAgcmV0dXJuIHJlcztcclxufVxuXG4vLyBQcmVkZWZpbmVkIGJhZ3Mgb2YgY3JlYXRlIG9ic2VydmFibGUgb3B0aW9ucywgdG8gYXZvaWQgYWxsb2NhdGluZyB0ZW1wb3JhcmlseSBvcHRpb24gb2JqZWN0c1xyXG4vLyBpbiB0aGUgbWFqb3JpdHkgb2YgY2FzZXNcclxudmFyIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyA9IHtcclxuICAgIGRlZXA6IHRydWUsXHJcbiAgICBuYW1lOiB1bmRlZmluZWQsXHJcbiAgICBkZWZhdWx0RGVjb3JhdG9yOiB1bmRlZmluZWQsXHJcbiAgICBwcm94eTogdHJ1ZVxyXG59O1xyXG5PYmplY3QuZnJlZXplKGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk7XHJcbmZ1bmN0aW9uIGFzc2VydFZhbGlkT3B0aW9uKGtleSkge1xyXG4gICAgaWYgKCEvXihkZWVwfG5hbWV8ZXF1YWxzfGRlZmF1bHREZWNvcmF0b3J8cHJveHkpJC8udGVzdChrZXkpKVxyXG4gICAgICAgIGZhaWwoXCJpbnZhbGlkIG9wdGlvbiBmb3IgKGV4dGVuZClvYnNlcnZhYmxlOiBcIiArIGtleSk7XHJcbn1cclxuZnVuY3Rpb24gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyh0aGluZykge1xyXG4gICAgaWYgKHRoaW5nID09PSBudWxsIHx8IHRoaW5nID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucztcclxuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogdGhpbmcsIGRlZXA6IHRydWUsIHByb3h5OiB0cnVlIH07XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGluZyAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJleHBlY3RlZCBvcHRpb25zIG9iamVjdFwiKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChhc3NlcnRWYWxpZE9wdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpbmc7XHJcbn1cclxudmFyIGRlZXBEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihkZWVwRW5oYW5jZXIpO1xyXG52YXIgc2hhbGxvd0RlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyKHNoYWxsb3dFbmhhbmNlcik7XHJcbnZhciByZWZEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZlcmVuY2VFbmhhbmNlcik7XHJcbnZhciByZWZTdHJ1Y3REZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZTdHJ1Y3RFbmhhbmNlcik7XHJcbmZ1bmN0aW9uIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvclxyXG4gICAgICAgID8gb3B0aW9ucy5kZWZhdWx0RGVjb3JhdG9yLmVuaGFuY2VyXHJcbiAgICAgICAgOiBvcHRpb25zLmRlZXAgPT09IGZhbHNlXHJcbiAgICAgICAgICAgID8gcmVmZXJlbmNlRW5oYW5jZXJcclxuICAgICAgICAgICAgOiBkZWVwRW5oYW5jZXI7XHJcbn1cclxuLyoqXHJcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cclxuICogQHBhcmFtIHYgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZWNvbWUgb2JzZXJ2YWJsZS5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGUodiwgYXJnMiwgYXJnMykge1xyXG4gICAgLy8gQG9ic2VydmFibGUgc29tZVByb3A7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZXBEZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2KSlcclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XHJcbiAgICB2YXIgcmVzID0gaXNQbGFpbk9iamVjdCh2KVxyXG4gICAgICAgID8gb2JzZXJ2YWJsZS5vYmplY3QodiwgYXJnMiwgYXJnMylcclxuICAgICAgICA6IEFycmF5LmlzQXJyYXkodilcclxuICAgICAgICAgICAgPyBvYnNlcnZhYmxlLmFycmF5KHYsIGFyZzIpXHJcbiAgICAgICAgICAgIDogaXNFUzZNYXAodilcclxuICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMilcclxuICAgICAgICAgICAgICAgIDogaXNFUzZTZXQodilcclxuICAgICAgICAgICAgICAgICAgICA/IG9ic2VydmFibGUuc2V0KHYsIGFyZzIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2O1xyXG4gICAgLy8gdGhpcyB2YWx1ZSBjb3VsZCBiZSBjb252ZXJ0ZWQgdG8gYSBuZXcgb2JzZXJ2YWJsZSBkYXRhIHN0cnVjdHVyZSwgcmV0dXJuIGl0XHJcbiAgICBpZiAocmVzICE9PSB2KVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAvLyBvdGhlcndpc2UsIGp1c3QgYm94IGl0XHJcbiAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiVGhlIHByb3ZpZGVkIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhbiBvYnNlcnZhYmxlLiBJZiB5b3Ugd2FudCBqdXN0IGNyZWF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHVzZSAnb2JzZXJ2YWJsZS5ib3godmFsdWUpJ1wiKTtcclxufVxyXG52YXIgb2JzZXJ2YWJsZUZhY3RvcmllcyA9IHtcclxuICAgIGJveDogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImJveFwiKTtcclxuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSwgdHJ1ZSwgby5lcXVhbHMpO1xyXG4gICAgfSxcclxuICAgIGFycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcclxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJhcnJheVwiKTtcclxuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xyXG4gICAgfSxcclxuICAgIG1hcDogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwibWFwXCIpO1xyXG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVNYXAoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxyXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcInNldFwiKTtcclxuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlU2V0KGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XHJcbiAgICB9LFxyXG4gICAgb2JqZWN0OiBmdW5jdGlvbiAocHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJvYmplY3RcIik7XHJcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvLnByb3h5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZSh7fSwgcHJvcHMsIGRlY29yYXRvcnMsIG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGRlZmF1bHREZWNvcmF0b3IgPSBnZXREZWZhdWx0RGVjb3JhdG9yRnJvbU9iamVjdE9wdGlvbnMobyk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gZXh0ZW5kT2JzZXJ2YWJsZSh7fSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG8pO1xyXG4gICAgICAgICAgICB2YXIgcHJveHkgPSBjcmVhdGVEeW5hbWljT2JzZXJ2YWJsZU9iamVjdChiYXNlKTtcclxuICAgICAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHByb3h5LCBwcm9wcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVmOiByZWZEZWNvcmF0b3IsXHJcbiAgICBzaGFsbG93OiBzaGFsbG93RGVjb3JhdG9yLFxyXG4gICAgZGVlcDogZGVlcERlY29yYXRvcixcclxuICAgIHN0cnVjdDogcmVmU3RydWN0RGVjb3JhdG9yXHJcbn07XHJcbnZhciBvYnNlcnZhYmxlID0gY3JlYXRlT2JzZXJ2YWJsZTtcclxuLy8gd2VpcmQgdHJpY2sgdG8ga2VlcCBvdXIgdHlwaW5ncyBuaWNlbHkgd2l0aCBvdXIgZnVuY3MsIGFuZCBzdGlsbCBleHRlbmQgdGhlIG9ic2VydmFibGUgZnVuY3Rpb25cclxuT2JqZWN0LmtleXMob2JzZXJ2YWJsZUZhY3RvcmllcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKG9ic2VydmFibGVbbmFtZV0gPSBvYnNlcnZhYmxlRmFjdG9yaWVzW25hbWVdKTsgfSk7XHJcbmZ1bmN0aW9uIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKG1ldGhvZE5hbWUpIHtcclxuICAgIGZhaWwoXHJcbiAgICAvLyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgIFwiRXhwZWN0ZWQgb25lIG9yIHR3byBhcmd1bWVudHMgdG8gb2JzZXJ2YWJsZS5cIiArIG1ldGhvZE5hbWUgKyBcIi4gRGlkIHlvdSBhY2NpZGVudGFsbHkgdHJ5IHRvIHVzZSBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiIGFzIGRlY29yYXRvcj9cIik7XHJcbn1cblxudmFyIGNvbXB1dGVkRGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvcihmYWxzZSwgZnVuY3Rpb24gKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGRlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xyXG4gICAgdmFyIGdldCA9IGRlc2NyaXB0b3IuZ2V0LCBzZXQgPSBkZXNjcmlwdG9yLnNldDsgLy8gaW5pdGlhbFZhbHVlIGlzIHRoZSBkZXNjcmlwdG9yIGZvciBnZXQgLyBzZXQgcHJvcHNcclxuICAgIC8vIE9wdGltaXphdGlvbjogZmFzdGVyIG9uIGRlY29yYXRvciB0YXJnZXQgb3IgaW5zdGFuY2U/IEFzc3VtaW5nIHRhcmdldFxyXG4gICAgLy8gT3B0aW1pemF0aW9uOiBmaW5kIG91dCBpZiBkZWNsYXJpbmcgb24gaW5zdGFuY2UgaXNuJ3QganVzdCBmYXN0ZXIuIChhbHNvIG1ha2VzIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNpbXBsZXIpLiBCdXQsIG1vcmUgbWVtb3J5IHVzYWdlLi5cclxuICAgIC8vIEZvcmNpbmcgaW5zdGFuY2Ugbm93LCBmaXhlcyBob3QgcmVsb2FkaWcgaXNzdWVzIG9uIFJlYWN0IE5hdGl2ZTpcclxuICAgIHZhciBvcHRpb25zID0gZGVjb3JhdG9yQXJnc1swXSB8fCB7fTtcclxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdChpbnN0YW5jZSkuYWRkQ29tcHV0ZWRQcm9wKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIF9fYXNzaWduKHsgZ2V0OiBnZXQsXHJcbiAgICAgICAgc2V0OiBzZXQsIGNvbnRleHQ6IGluc3RhbmNlIH0sIG9wdGlvbnMpKTtcclxufSk7XHJcbnZhciBjb21wdXRlZFN0cnVjdERlY29yYXRvciA9IGNvbXB1dGVkRGVjb3JhdG9yKHsgZXF1YWxzOiBjb21wYXJlci5zdHJ1Y3R1cmFsIH0pO1xyXG4vKipcclxuICogRGVjb3JhdG9yIGZvciBjbGFzcyBwcm9wZXJ0aWVzOiBAY29tcHV0ZWQgZ2V0IHZhbHVlKCkgeyByZXR1cm4gZXhwcjsgfS5cclxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xyXG4gKi9cclxudmFyIGNvbXB1dGVkID0gZnVuY3Rpb24gY29tcHV0ZWQoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgLy8gQGNvbXB1dGVkXHJcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJnMSAhPT0gbnVsbCAmJiB0eXBlb2YgYXJnMSA9PT0gXCJvYmplY3RcIiAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgLy8gQGNvbXB1dGVkKHsgb3B0aW9ucyB9KVxyXG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gICAgLy8gY29tcHV0ZWQoZXhwciwgb3B0aW9ucz8pXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIsIFwiRmlyc3QgYXJndW1lbnQgdG8gYGNvbXB1dGVkYCBzaG91bGQgYmUgYW4gZXhwcmVzc2lvbi5cIik7XHJcbiAgICAgICAgaW52YXJpYW50KGFyZ3VtZW50cy5sZW5ndGggPCAzLCBcIkNvbXB1dGVkIHRha2VzIG9uZSBvciB0d28gYXJndW1lbnRzIGlmIHVzZWQgYXMgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICB2YXIgb3B0cyA9IHR5cGVvZiBhcmcyID09PSBcIm9iamVjdFwiID8gYXJnMiA6IHt9O1xyXG4gICAgb3B0cy5nZXQgPSBhcmcxO1xyXG4gICAgb3B0cy5zZXQgPSB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiID8gYXJnMiA6IG9wdHMuc2V0O1xyXG4gICAgb3B0cy5uYW1lID0gb3B0cy5uYW1lIHx8IGFyZzEubmFtZSB8fCBcIlwiOyAvKiBmb3IgZ2VuZXJhdGVkIG5hbWUgKi9cclxuICAgIHJldHVybiBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRzKTtcclxufTtcclxuY29tcHV0ZWQuc3RydWN0ID0gY29tcHV0ZWRTdHJ1Y3REZWNvcmF0b3I7XG5cbnZhciBJRGVyaXZhdGlvblN0YXRlO1xyXG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGUpIHtcclxuICAgIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcclxuICAgIC8vIGF0IHRoaXMgcG9pbnQgZGVyaXZhdGlvbiBpcyBub3QgaG9sZGluZyBhbnkgZGF0YSBhYm91dCBkZXBlbmRlbmN5IHRyZWVcclxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIk5PVF9UUkFDS0lOR1wiXSA9IC0xXSA9IFwiTk9UX1RSQUNLSU5HXCI7XHJcbiAgICAvLyBubyBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uXHJcbiAgICAvLyB3b24ndCByZWNhbGN1bGF0ZSBkZXJpdmF0aW9uXHJcbiAgICAvLyB0aGlzIGlzIHdoYXQgbWFrZXMgbW9ieCBmYXN0XHJcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJVUF9UT19EQVRFXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVcIjtcclxuICAgIC8vIHNvbWUgZGVlcCBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCBkb24ndCBrbm93IGlmIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkXHJcbiAgICAvLyB3aWxsIHJlcXVpcmUgdG8gY2hlY2sgZmlyc3QgaWYgVVBfVE9fREFURSBvciBQT1NTSUJMWV9TVEFMRVxyXG4gICAgLy8gY3VycmVudGx5IG9ubHkgQ29tcHV0ZWRWYWx1ZSB3aWxsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRVxyXG4gICAgLy9cclxuICAgIC8vIGhhdmluZyB0aGlzIHN0YXRlIGlzIHNlY29uZCBiaWcgb3B0aW1pemF0aW9uOlxyXG4gICAgLy8gZG9uJ3QgaGF2ZSB0byByZWNvbXB1dGUgb24gZXZlcnkgZGVwZW5kZW5jeSBjaGFuZ2UsIGJ1dCBvbmx5IHdoZW4gaXQncyBuZWVkZWRcclxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIlBPU1NJQkxZX1NUQUxFXCJdID0gMV0gPSBcIlBPU1NJQkxZX1NUQUxFXCI7XHJcbiAgICAvLyBBIHNoYWxsb3cgZGVwZW5kZW5jeSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uIGFuZCB0aGUgZGVyaXZhdGlvblxyXG4gICAgLy8gd2lsbCBuZWVkIHRvIHJlY29tcHV0ZSB3aGVuIGl0J3MgbmVlZGVkIG5leHQuXHJcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJTVEFMRVwiXSA9IDJdID0gXCJTVEFMRVwiO1xyXG59KShJRGVyaXZhdGlvblN0YXRlIHx8IChJRGVyaXZhdGlvblN0YXRlID0ge30pKTtcclxudmFyIFRyYWNlTW9kZTtcclxuKGZ1bmN0aW9uIChUcmFjZU1vZGUpIHtcclxuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcclxuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJMT0dcIl0gPSAxXSA9IFwiTE9HXCI7XHJcbiAgICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiQlJFQUtcIl0gPSAyXSA9IFwiQlJFQUtcIjtcclxufSkoVHJhY2VNb2RlIHx8IChUcmFjZU1vZGUgPSB7fSkpO1xyXG52YXIgQ2F1Z2h0RXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2F1Z2h0RXhjZXB0aW9uKGNhdXNlKSB7XHJcbiAgICAgICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xyXG4gICAgICAgIC8vIEVtcHR5XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2F1Z2h0RXhjZXB0aW9uO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBpc0NhdWdodEV4Y2VwdGlvbihlKSB7XHJcbiAgICByZXR1cm4gZSBpbnN0YW5jZW9mIENhdWdodEV4Y2VwdGlvbjtcclxufVxyXG4vKipcclxuICogRmluZHMgb3V0IHdoZXRoZXIgYW55IGRlcGVuZGVuY3kgb2YgdGhlIGRlcml2YXRpb24gaGFzIGFjdHVhbGx5IGNoYW5nZWQuXHJcbiAqIElmIGRlcGVuZGVuY2llc1N0YXRlIGlzIDEgdGhlbiBpdCB3aWxsIHJlY2FsY3VsYXRlIGRlcGVuZGVuY2llcyxcclxuICogaWYgYW55IGRlcGVuZGVuY3kgY2hhbmdlZCBpdCB3aWxsIHByb3BhZ2F0ZSBpdCBieSBjaGFuZ2luZyBkZXBlbmRlbmNpZXNTdGF0ZSB0byAyLlxyXG4gKlxyXG4gKiBCeSBpdGVyYXRpbmcgb3ZlciB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSB3ZXJlIHJlcG9ydGVkIGFuZFxyXG4gKiBzdG9wcGluZyBvbiB0aGUgZmlyc3QgY2hhbmdlLCBhbGwgdGhlIHJlY2FsY3VsYXRpb25zIGFyZSBvbmx5IGNhbGxlZCBmb3IgQ29tcHV0ZWRWYWx1ZXNcclxuICogdGhhdCB3aWxsIGJlIHRyYWNrZWQgYnkgZGVyaXZhdGlvbi4gVGhhdCBpcyBiZWNhdXNlIHdlIGFzc3VtZSB0aGF0IGlmIHRoZSBmaXJzdCB4XHJcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgZGVyaXZhdGlvbiBkb2Vzbid0IGNoYW5nZSB0aGVuIHRoZSBkZXJpdmF0aW9uIHNob3VsZCBydW4gdGhlIHNhbWUgd2F5XHJcbiAqIHVwIHVudGlsIGFjY2Vzc2luZyB4LXRoIGRlcGVuZGVuY3kuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG91bGRDb21wdXRlKGRlcml2YXRpb24pIHtcclxuICAgIHN3aXRjaCAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORzpcclxuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuU1RBTEU6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRToge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSBwcm9wYWdhdGlvbiBjYW4gb2NjdXIgb3V0c2lkZSBvZiBhY3Rpb24vcmVhY3RpdmUgY29udGV4dCAjMjE5NVxyXG4gICAgICAgICAgICB2YXIgcHJldkFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xyXG4gICAgICAgICAgICB2YXIgcHJldlVudHJhY2tlZCA9IHVudHJhY2tlZFN0YXJ0KCk7IC8vIG5vIG5lZWQgZm9yIHRob3NlIGNvbXB1dGVkcyB0byBiZSByZXBvcnRlZCwgdGhleSB3aWxsIGJlIHBpY2tlZCB1cCBpbiB0cmFja0Rlcml2ZWRGdW5jdGlvbi5cclxuICAgICAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nLCBsID0gb2JzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBvYnNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBDb21wdXRlZFZhbHVlIGBvYmpgIGFjdHVhbGx5IGNoYW5nZWQgaXQgd2lsbCBiZSBjb21wdXRlZCBhbmQgcHJvcGFnYXRlZCB0byBpdHMgb2JzZXJ2ZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhcmlhbnRTaG91bGRDb21wdXRlKGRlcml2YXRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcclxuICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xyXG4gICAgICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uOiBJRGVyaXZhdGlvbikge1xyXG4vLyAgICAgY29uc3QgbmV3RGVwU3RhdGUgPSAoZGVyaXZhdGlvbiBhcyBhbnkpLmRlcGVuZGVuY2llc1N0YXRlXHJcbi8vICAgICBpZiAoXHJcbi8vICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiICYmXHJcbi8vICAgICAgICAgKG5ld0RlcFN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFIHx8XHJcbi8vICAgICAgICAgICAgIG5ld0RlcFN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORylcclxuLy8gICAgIClcclxuLy8gICAgICAgICBmYWlsKFwiSWxsZWdhbCBkZXBlbmRlbmN5IHN0YXRlXCIpXHJcbi8vIH1cclxuZnVuY3Rpb24gaXNDb21wdXRpbmdEZXJpdmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiAhPT0gbnVsbDsgLy8gZmlsdGVyIG91dCBhY3Rpb25zIGluc2lkZSBjb21wdXRhdGlvbnNcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZChhdG9tKSB7XHJcbiAgICB2YXIgaGFzT2JzZXJ2ZXJzID0gYXRvbS5vYnNlcnZlcnMuc2l6ZSA+IDA7XHJcbiAgICAvLyBTaG91bGQgbmV2ZXIgYmUgcG9zc2libGUgdG8gY2hhbmdlIGFuIG9ic2VydmVkIG9ic2VydmFibGUgZnJvbSBpbnNpZGUgY29tcHV0ZWQsIHNlZSAjNzk4XHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA+IDAgJiYgaGFzT2JzZXJ2ZXJzKVxyXG4gICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIiArIGF0b20ubmFtZSk7XHJcbiAgICAvLyBTaG91bGQgbm90IGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBvYnNlcnZlZCBzdGF0ZSBvdXRzaWRlIHN0cmljdCBtb2RlLCBleGNlcHQgZHVyaW5nIGluaXRpYWxpemF0aW9uLCBzZWUgIzU2M1xyXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyAmJiAoaGFzT2JzZXJ2ZXJzIHx8IGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zID09PSBcInN0cmljdFwiKSlcclxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAoZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnNcclxuICAgICAgICAgICAgICAgID8gXCJTaW5jZSBzdHJpY3QtbW9kZSBpcyBlbmFibGVkLCBjaGFuZ2luZyBvYnNlcnZlZCBvYnNlcnZhYmxlIHZhbHVlcyBvdXRzaWRlIGFjdGlvbnMgaXMgbm90IGFsbG93ZWQuIFBsZWFzZSB3cmFwIHRoZSBjb2RlIGluIGFuIGBhY3Rpb25gIGlmIHRoaXMgY2hhbmdlIGlzIGludGVuZGVkLiBUcmllZCB0byBtb2RpZnk6IFwiXHJcbiAgICAgICAgICAgICAgICA6IFwiU2lkZSBlZmZlY3RzIGxpa2UgY2hhbmdpbmcgc3RhdGUgYXJlIG5vdCBhbGxvd2VkIGF0IHRoaXMgcG9pbnQuIEFyZSB5b3UgdHJ5aW5nIHRvIG1vZGlmeSBzdGF0ZSBmcm9tLCBmb3IgZXhhbXBsZSwgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gVHJpZWQgdG8gbW9kaWZ5OiBcIikgK1xyXG4gICAgICAgICAgICAgICAgYXRvbS5uYW1lKTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgJiZcclxuICAgICAgICBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBPYnNlcnZhYmxlIFwiICsgb2JzZXJ2YWJsZS5uYW1lICsgXCIgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogRXhlY3V0ZXMgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGBmYCBhbmQgdHJhY2tzIHdoaWNoIG9ic2VydmFibGVzIGFyZSBiZWluZyBhY2Nlc3NlZC5cclxuICogVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGRlcml2YXRpb25gIG9iamVjdCBhbmQgdGhlIGRlcml2YXRpb24gaXMgcmVnaXN0ZXJlZFxyXG4gKiBhcyBvYnNlcnZlciBvZiBhbnkgb2YgdGhlIGFjY2Vzc2VkIG9ic2VydmFibGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhY2tEZXJpdmVkRnVuY3Rpb24oZGVyaXZhdGlvbiwgZiwgY29udGV4dCkge1xyXG4gICAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcclxuICAgIC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcclxuICAgIC8vIGFycmF5IHdpbGwgYmUgdHJpbW1lZCBieSBiaW5kRGVwZW5kZW5jaWVzXHJcbiAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcclxuICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nLmxlbmd0aCArIDEwMCk7XHJcbiAgICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQgPSAwO1xyXG4gICAgZGVyaXZhdGlvbi5ydW5JZCA9ICsrZ2xvYmFsU3RhdGUucnVuSWQ7XHJcbiAgICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xyXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2VHJhY2tpbmc7XHJcbiAgICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xyXG4gICAgd2FybkFib3V0RGVyaXZhdGlvbldpdGhvdXREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XHJcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHdhcm5BYm91dERlcml2YXRpb25XaXRob3V0RGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGRlcml2YXRpb24ub2JzZXJ2aW5nLmxlbmd0aCAhPT0gMClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gRGVyaXZhdGlvbiBcIiArIGRlcml2YXRpb24ubmFtZSArIFwiIGlzIGNyZWF0ZWQvdXBkYXRlZCB3aXRob3V0IHJlYWRpbmcgYW55IG9ic2VydmFibGUgdmFsdWVcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIGRpZmZzIG5ld09ic2VydmluZyB3aXRoIG9ic2VydmluZy5cclxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcclxuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXHJcbiAqL1xyXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcclxuICAgIC8vIGludmFyaWFudChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORywgXCJJTlRFUk5BTCBFUlJPUiBiaW5kRGVwZW5kZW5jaWVzIGV4cGVjdHMgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XHJcbiAgICB2YXIgcHJldk9ic2VydmluZyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nO1xyXG4gICAgdmFyIG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nKTtcclxuICAgIHZhciBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XHJcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKHRoaXMgbGlzdCBjYW4gY29udGFpbiBkdXBsaWNhdGVzKTpcclxuICAgIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcclxuICAgIC8vICAgMTogZXh0cmEgb2NjdXJyZW5jZSwgZHJvcCBpdFxyXG4gICAgdmFyIGkwID0gMCwgbCA9IGRlcml2YXRpb24udW5ib3VuZERlcHNDb3VudDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGRlcCA9IG9ic2VydmluZ1tpXTtcclxuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMTtcclxuICAgICAgICAgICAgaWYgKGkwICE9PSBpKVxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2aW5nW2kwXSA9IGRlcDtcclxuICAgICAgICAgICAgaTArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVXBjYXN0IGlzICdzYWZlJyBoZXJlLCBiZWNhdXNlIGlmIGRlcCBpcyBJT2JzZXJ2YWJsZSwgYGRlcGVuZGVuY2llc1N0YXRlYCB3aWxsIGJlIHVuZGVmaW5lZCxcclxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXHJcbiAgICAgICAgaWYgKGRlcC5kZXBlbmRlbmNpZXNTdGF0ZSA+IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSkge1xyXG4gICAgICAgICAgICBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBkZXAuZGVwZW5kZW5jaWVzU3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb2JzZXJ2aW5nLmxlbmd0aCA9IGkwO1xyXG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBuZXdPYnNlcnZpbmcgc2hvdWxkbid0IGJlIG5lZWRlZCBvdXRzaWRlIHRyYWNraW5nIChzdGF0ZW1lbnQgbW92ZWQgZG93biB0byB3b3JrIGFyb3VuZCBGRiBidWcsIHNlZSAjNjE0KVxyXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgb2xkIG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChpdCBpcyB1bmlxdWUgYWZ0ZXIgbGFzdCBiaW5kRGVwZW5kZW5jaWVzKVxyXG4gICAgLy8gICAwOiBpdCdzIG5vdCBpbiBuZXcgb2JzZXJ2YWJsZXMsIHVub2JzZXJ2ZSBpdFxyXG4gICAgLy8gICAxOiBpdCBrZWVwcyBiZWluZyBvYnNlcnZlZCwgZG9uJ3Qgd2FudCB0byBub3RpZnkgaXQuIGNoYW5nZSB0byAwXHJcbiAgICBsID0gcHJldk9ic2VydmluZy5sZW5ndGg7XHJcbiAgICB3aGlsZSAobC0tKSB7XHJcbiAgICAgICAgdmFyIGRlcCA9IHByZXZPYnNlcnZpbmdbbF07XHJcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIoZGVwLCBkZXJpdmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICB9XHJcbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxyXG4gICAgLy8gICAwOiBpdCB3YXMgc2V0IHRvIDAgaW4gbGFzdCBsb29wLiBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxyXG4gICAgLy8gICAxOiBpdCB3YXNuJ3Qgb2JzZXJ2ZWQsIGxldCdzIG9ic2VydmUgaXQuIHNldCBiYWNrIHRvIDBcclxuICAgIHdoaWxlIChpMC0tKSB7XHJcbiAgICAgICAgdmFyIGRlcCA9IG9ic2VydmluZ1tpMF07XHJcbiAgICAgICAgaWYgKGRlcC5kaWZmVmFsdWUgPT09IDEpIHtcclxuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIGFkZE9ic2VydmVyKGRlcCwgZGVyaXZhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU29tZSBuZXcgb2JzZXJ2ZWQgZGVyaXZhdGlvbnMgbWF5IGJlY29tZSBzdGFsZSBkdXJpbmcgdGhpcyBkZXJpdmF0aW9uIGNvbXB1dGF0aW9uXHJcbiAgICAvLyBzbyB0aGV5IGhhdmUgaGFkIG5vIGNoYW5jZSB0byBwcm9wYWdhdGUgc3RhbGVuZXNzICgjOTE2KVxyXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XHJcbiAgICAgICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZTtcclxuICAgICAgICBkZXJpdmF0aW9uLm9uQmVjb21lU3RhbGUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbGVhck9ic2VydmluZyhkZXJpdmF0aW9uKSB7XHJcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcclxuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcclxuICAgIGRlcml2YXRpb24ub2JzZXJ2aW5nID0gW107XHJcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaS0tKVxyXG4gICAgICAgIHJlbW92ZU9ic2VydmVyKG9ic1tpXSwgZGVyaXZhdGlvbik7XHJcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XHJcbn1cclxuZnVuY3Rpb24gdW50cmFja2VkKGFjdGlvbikge1xyXG4gICAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB1bnRyYWNrZWRFbmQocHJldik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdW50cmFja2VkU3RhcnQoKSB7XHJcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcclxuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XHJcbiAgICByZXR1cm4gcHJldjtcclxufVxyXG5mdW5jdGlvbiB1bnRyYWNrZWRFbmQocHJldikge1xyXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldjtcclxufVxyXG5mdW5jdGlvbiBhbGxvd1N0YXRlUmVhZHNTdGFydChhbGxvd1N0YXRlUmVhZHMpIHtcclxuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzO1xyXG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbn1cclxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXYpIHtcclxuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9IHByZXY7XHJcbn1cclxuLyoqXHJcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbikge1xyXG4gICAgaWYgKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nO1xyXG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSlcclxuICAgICAgICBvYnNbaV0ubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcclxufVxuXG4vLyB3ZSBkb24ndCB1c2UgZ2xvYmFsU3RhdGUgZm9yIHRoZXNlIGluIG9yZGVyIHRvIGF2b2lkIHBvc3NpYmxlIGlzc3VlcyB3aXRoIG11bHRpcGxlXHJcbi8vIG1vYnggdmVyc2lvbnNcclxudmFyIGN1cnJlbnRBY3Rpb25JZCA9IDA7XHJcbnZhciBuZXh0QWN0aW9uSWQgPSAxO1xyXG52YXIgZnVuY3Rpb25OYW1lRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnVuY3Rpb24gKCkgeyB9LCBcIm5hbWVcIik7XHJcbnZhciBpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSA9IGZ1bmN0aW9uTmFtZURlc2NyaXB0b3IgJiYgZnVuY3Rpb25OYW1lRGVzY3JpcHRvci5jb25maWd1cmFibGU7XHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgcmVmKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiLCBcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcclxuICAgICAgICAgICAgZmFpbChcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHJlZiB8fCB0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICAgIHJlcy5pc01vYnhBY3Rpb24gPSB0cnVlO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzLCBcIm5hbWVcIiwgeyB2YWx1ZTogYWN0aW9uTmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHNjb3BlLCBhcmdzKSB7XHJcbiAgICB2YXIgcnVuSW5mbyA9IF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncyk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcnVuSW5mby5lcnJvciA9IGVycjtcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBfZW5kQWN0aW9uKHJ1bkluZm8pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIF9zdGFydEFjdGlvbihhY3Rpb25OYW1lLCBzY29wZSwgYXJncykge1xyXG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpICYmICEhYWN0aW9uTmFtZTtcclxuICAgIHZhciBzdGFydFRpbWUgPSAwO1xyXG4gICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHZhciBsID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHx8IDA7XHJcbiAgICAgICAgdmFyIGZsYXR0ZW5kQXJncyA9IG5ldyBBcnJheShsKTtcclxuICAgICAgICBpZiAobCA+IDApXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgZmxhdHRlbmRBcmdzW2ldID0gYXJnc1tpXTtcclxuICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIG9iamVjdDogc2NvcGUsXHJcbiAgICAgICAgICAgIGFyZ3VtZW50czogZmxhdHRlbmRBcmdzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJldkRlcml2YXRpb24gPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgdmFyIHByZXZBbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XHJcbiAgICB2YXIgcHJldkFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xyXG4gICAgdmFyIHJ1bkluZm8gPSB7XHJcbiAgICAgICAgcHJldkRlcml2YXRpb246IHByZXZEZXJpdmF0aW9uLFxyXG4gICAgICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlczogcHJldkFsbG93U3RhdGVDaGFuZ2VzLFxyXG4gICAgICAgIHByZXZBbGxvd1N0YXRlUmVhZHM6IHByZXZBbGxvd1N0YXRlUmVhZHMsXHJcbiAgICAgICAgbm90aWZ5U3B5OiBub3RpZnlTcHksXHJcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXHJcbiAgICAgICAgYWN0aW9uSWQ6IG5leHRBY3Rpb25JZCsrLFxyXG4gICAgICAgIHBhcmVudEFjdGlvbklkOiBjdXJyZW50QWN0aW9uSWRcclxuICAgIH07XHJcbiAgICBjdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLmFjdGlvbklkO1xyXG4gICAgcmV0dXJuIHJ1bkluZm87XHJcbn1cclxuZnVuY3Rpb24gX2VuZEFjdGlvbihydW5JbmZvKSB7XHJcbiAgICBpZiAoY3VycmVudEFjdGlvbklkICE9PSBydW5JbmZvLmFjdGlvbklkKSB7XHJcbiAgICAgICAgZmFpbChcImludmFsaWQgYWN0aW9uIHN0YWNrLiBkaWQgeW91IGZvcmdldCB0byBmaW5pc2ggYW4gYWN0aW9uP1wiKTtcclxuICAgIH1cclxuICAgIGN1cnJlbnRBY3Rpb25JZCA9IHJ1bkluZm8ucGFyZW50QWN0aW9uSWQ7XHJcbiAgICBpZiAocnVuSW5mby5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlcyk7XHJcbiAgICBhbGxvd1N0YXRlUmVhZHNFbmQocnVuSW5mby5wcmV2QWxsb3dTdGF0ZVJlYWRzKTtcclxuICAgIGVuZEJhdGNoKCk7XHJcbiAgICB1bnRyYWNrZWRFbmQocnVuSW5mby5wcmV2RGVyaXZhdGlvbik7XHJcbiAgICBpZiAocnVuSW5mby5ub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgc3B5UmVwb3J0RW5kKHsgdGltZTogRGF0ZS5ub3coKSAtIHJ1bkluZm8uc3RhcnRUaW1lIH0pO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycyA9IGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XHJcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xyXG4gICAgdmFyIHJlcztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzID0gZnVuYygpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpIHtcclxuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xyXG4gICAgcmV0dXJuIHByZXY7XHJcbn1cclxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xyXG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBwcmV2O1xyXG59XHJcbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQoZnVuYykge1xyXG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoO1xyXG4gICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA9IDA7XHJcbiAgICB2YXIgcmVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXMgPSBmdW5jKCk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoID0gcHJldjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cblxudmFyIE9ic2VydmFibGVWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIGVuaGFuY2VyLCBuYW1lLCBub3RpZnlTcHksIGVxdWFscykge1xyXG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICBpZiAobm90aWZ5U3B5ID09PSB2b2lkIDApIHsgbm90aWZ5U3B5ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChlcXVhbHMgPT09IHZvaWQgMCkgeyBlcXVhbHMgPSBjb21wYXJlci5kZWZhdWx0OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5lbmhhbmNlciA9IGVuaGFuY2VyO1xyXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIF90aGlzLmVxdWFscyA9IGVxdWFscztcclxuICAgICAgICBfdGhpcy5oYXNVbnJlcG9ydGVkQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgX3RoaXMudmFsdWUgPSBlbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkLCBuYW1lKTtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIGlzU3B5RW5hYmxlZCgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAvLyBvbmx5IG5vdGlmeSBzcHkgaWYgdGhpcyBpcyBhIHN0YW5kLWFsb25lIG9ic2VydmFibGVcclxuICAgICAgICAgICAgc3B5UmVwb3J0KHsgdHlwZTogXCJjcmVhdGVcIiwgbmFtZTogX3RoaXMubmFtZSwgbmV3VmFsdWU6IFwiXCIgKyBfdGhpcy52YWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUucHJlcGFyZU5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLlVOQ0hBTkdFRDtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFwcGx5IG1vZGlmaWVyXHJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVxdWFscyh0aGlzLnZhbHVlLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldE5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xyXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICBsaXN0ZW5lcih7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcclxufShBdG9tKSk7XHJcbnZhciBpc09ic2VydmFibGVWYWx1ZSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlVmFsdWVcIiwgT2JzZXJ2YWJsZVZhbHVlKTtcblxuLyoqXHJcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxyXG4gKlxyXG4gKiBDb21wdXRlZFZhbHVlIHdpbGwgcmVtZW1iZXIgdGhlIHJlc3VsdCBvZiB0aGUgY29tcHV0YXRpb24gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgYmF0Y2gsIG9yXHJcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxyXG4gKlxyXG4gKiBEdXJpbmcgdGhpcyB0aW1lIGl0IHdpbGwgcmVjb21wdXRlIG9ubHkgd2hlbiBvbmUgb2YgaXRzIGRpcmVjdCBkZXBlbmRlbmNpZXMgY2hhbmdlZCxcclxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cclxuICpcclxuICogSW1wbGVtZW50YXRpb24gZGVzY3JpcHRpb246XHJcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxyXG4gKiAgICBnaXZlIGJhY2sgcmVtZW1iZXJlZCByZXN1bHQgdW50aWwgMi4gaGFwcGVuc1xyXG4gKiAyLiBGaXJzdCB0aW1lIGFueSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlLCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEUgdG8gYWxsIG9ic2VydmVycywgd2FpdCBmb3IgMy5cclxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxyXG4gKiAgICBpZiByZXN1bHQgY2hhbmdlZDogcHJvcGFnYXRlIFNUQUxFIHRvIGFsbCBvYnNlcnZlcnMsIHRoYXQgd2VyZSBQT1NTSUJMWV9TVEFMRSBmcm9tIHRoZSBsYXN0IHN0ZXAuXHJcbiAqICAgIGdvIHRvIHN0ZXAgMi4gZWl0aGVyIHdheVxyXG4gKlxyXG4gKiBJZiBhdCBhbnkgcG9pbnQgaXQncyBvdXRzaWRlIGJhdGNoIGFuZCBpdCBpc24ndCBvYnNlcnZlZDogcmVzZXQgZXZlcnl0aGluZyBhbmQgZ28gdG8gMS5cclxuICovXHJcbnZhciBDb21wdXRlZFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgdmFsdWUgYmFzZWQgb24gYSBmdW5jdGlvbiBleHByZXNzaW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXHJcbiAgICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcclxuICAgICAqIGNvbXBhcmVzIGJhc2VkIG9uIGlkZW50aXR5IGNvbXBhcmlzb24gKD09PSksIGFuZCBgc3RydWN0dWFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxyXG4gICAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhIG5ldyBhZ2dyZWdhdGVkIG9iamVjdCBhbmRcclxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXHJcbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xyXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gbnVsbDsgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXHJcbiAgICAgICAgdGhpcy5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0QWNjZXNzZWRCeSA9IDA7XHJcbiAgICAgICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fX21hcGlkID0gXCIjXCIgKyBnZXROZXh0SWQoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcclxuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7IC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcclxuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XHJcbiAgICAgICAgaW52YXJpYW50KG9wdGlvbnMuZ2V0LCBcIm1pc3Npbmcgb3B0aW9uIGZvciBjb21wdXRlZDogZ2V0XCIpO1xyXG4gICAgICAgIHRoaXMuZGVyaXZhdGlvbiA9IG9wdGlvbnMuZ2V0O1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBcIkNvbXB1dGVkVmFsdWVAXCIgKyBnZXROZXh0SWQoKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5zZXQpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gY3JlYXRlQWN0aW9uKHRoaXMubmFtZSArIFwiLXNldHRlclwiLCBvcHRpb25zLnNldCk7XHJcbiAgICAgICAgdGhpcy5lcXVhbHMgPVxyXG4gICAgICAgICAgICBvcHRpb25zLmVxdWFscyB8fFxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMuY29tcGFyZVN0cnVjdHVyYWwgfHwgb3B0aW9ucy5zdHJ1Y3RcclxuICAgICAgICAgICAgICAgICAgICA/IGNvbXBhcmVyLnN0cnVjdHVyYWxcclxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBhcmVyLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLmNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uID0gISFvcHRpb25zLnJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICAgICAgdGhpcy5rZWVwQWxpdmUgPSAhIW9wdGlvbnMua2VlcEFsaXZlO1xyXG4gICAgfVxyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub25CZWNvbWVTdGFsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUub25CZWNvbWVPYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcyBjb21wdXRlZCB2YWx1ZS5cclxuICAgICAqIFdpbGwgZXZhbHVhdGUgaXRzIGNvbXB1dGF0aW9uIGZpcnN0IGlmIG5lZWRlZC5cclxuICAgICAqL1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29tcHV0aW5nKVxyXG4gICAgICAgICAgICBmYWlsKFwiQ3ljbGUgZGV0ZWN0ZWQgaW4gY29tcHV0YXRpb24gXCIgKyB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLmRlcml2YXRpb24pO1xyXG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwICYmIHRoaXMub2JzZXJ2ZXJzLnNpemUgPT09IDAgJiYgIXRoaXMua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWQoKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTsgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVwb3J0T2JzZXJ2ZWQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRDb21wdXRlKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcclxuICAgICAgICAgICAgdGhyb3cgcmVzdWx0LmNhdXNlO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUucGVlayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVzID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXMpKVxyXG4gICAgICAgICAgICB0aHJvdyByZXMuY2F1c2U7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0ZXIpIHtcclxuICAgICAgICAgICAgaW52YXJpYW50KCF0aGlzLmlzUnVubmluZ1NldHRlciwgXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIHRoaXMubmFtZSArIFwiJyBpcyB0cnlpbmcgdG8gdXBkYXRlIGl0c2VsZi4gRGlkIHlvdSBpbnRlbmQgdG8gdXBkYXRlIGFuIF9vYnNlcnZhYmxlXyB2YWx1ZSwgaW5zdGVhZCBvZiB0aGUgY29tcHV0ZWQgcHJvcGVydHk/XCIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRlci5jYWxsKHRoaXMuc2NvcGUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBpbnZhcmlhbnQoZmFsc2UsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgXCJbQ29tcHV0ZWRWYWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIik7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudHJhY2tBbmRDb21wdXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgc3B5UmVwb3J0KHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5zY29wZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciB3YXNTdXNwZW5kZWQgPSBcclxuICAgICAgICAvKiBzZWUgIzEyMDggKi8gdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlVmFsdWUodHJ1ZSk7XHJcbiAgICAgICAgdmFyIGNoYW5nZWQgPSB3YXNTdXNwZW5kZWQgfHxcclxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24ob2xkVmFsdWUpIHx8XHJcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fFxyXG4gICAgICAgICAgICAhdGhpcy5lcXVhbHMob2xkVmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLmNvbXB1dGVWYWx1ZSA9IGZ1bmN0aW9uICh0cmFjaykge1xyXG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGgrKztcclxuICAgICAgICB2YXIgcmVzO1xyXG4gICAgICAgIGlmICh0cmFjaykge1xyXG4gICAgICAgICAgICByZXMgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCB0aGlzLmRlcml2YXRpb24sIHRoaXMuc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHRoaXMuZGVyaXZhdGlvbi5jYWxsKHRoaXMuc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoLS07XHJcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuc3VzcGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkOyAvLyBkb24ndCBob2xkIG9uIHRvIGNvbXB1dGVkIHZhbHVlIVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xyXG4gICAgICAgIHZhciBwcmV2VmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGF1dG9ydW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdFRpbWUgfHwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHByZXZWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS53YXJuQWJvdXRVbnRyYWNrZWRSZWFkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlc1JlYWN0aW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGZhaWwoXCJbbW9ieF0gQ29tcHV0ZWQgdmFsdWUgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIHRoaXMubmFtZSArIFwiJyBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZSArIFwiIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcclxuICAgIH07XHJcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xyXG4gICAgfTtcclxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wdXRlZFZhbHVlO1xyXG59KCkpO1xyXG52YXIgaXNDb21wdXRlZFZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkNvbXB1dGVkVmFsdWVcIiwgQ29tcHV0ZWRWYWx1ZSk7XG5cbi8qKlxyXG4gKiBUaGVzZSB2YWx1ZXMgd2lsbCBwZXJzaXN0IGlmIGdsb2JhbCBzdGF0ZSBpcyByZXNldFxyXG4gKi9cclxudmFyIHBlcnNpc3RlbnRLZXlzID0gW1xyXG4gICAgXCJtb2J4R3VpZFwiLFxyXG4gICAgXCJzcHlMaXN0ZW5lcnNcIixcclxuICAgIFwiZW5mb3JjZUFjdGlvbnNcIixcclxuICAgIFwiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsXHJcbiAgICBcInJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlXCIsXHJcbiAgICBcIm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uXCIsXHJcbiAgICBcImFsbG93U3RhdGVSZWFkc1wiLFxyXG4gICAgXCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzXCIsXHJcbiAgICBcInJ1bklkXCIsXHJcbiAgICBcIlVOQ0hBTkdFRFwiXHJcbl07XHJcbnZhciBNb2JYR2xvYmFscyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1vYlhHbG9iYWxzKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vYlhHbG9iYWxzIHZlcnNpb24uXHJcbiAgICAgICAgICogTW9iWCBjb21wYXRpYmxpdHkgd2l0aCBvdGhlciB2ZXJzaW9ucyBsb2FkZWQgaW4gbWVtb3J5IGFzIGxvbmcgYXMgdGhpcyB2ZXJzaW9uIG1hdGNoZXMuXHJcbiAgICAgICAgICogSXQgaW5kaWNhdGVzIHRoYXQgdGhlIGdsb2JhbCBzdGF0ZSBzdGlsbCBzdG9yZXMgc2ltaWxhciBpbmZvcm1hdGlvblxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogTi5COiB0aGlzIHZlcnNpb24gaXMgdW5yZWxhdGVkIHRvIHRoZSBwYWNrYWdlIHZlcnNpb24gb2YgTW9iWCwgYW5kIGlzIG9ubHkgdGhlIHZlcnNpb24gb2YgdGhlXHJcbiAgICAgICAgICogaW50ZXJuYWwgc3RhdGUgc3RvcmFnZSBvZiBNb2JYLCBhbmQgY2FuIGJlIHRoZSBzYW1lIGFjcm9zcyBtYW55IGRpZmZlcmVudCBwYWNrYWdlIHZlcnNpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gNTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBnbG9iYWxseSB1bmlxdWUgdG9rZW4gdG8gc2lnbmFsIHVuY2hhbmdlZFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuVU5DSEFOR0VEID0ge307XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3VycmVudGx5IHJ1bm5pbmcgZGVyaXZhdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMudHJhY2tpbmdEZXJpdmF0aW9uID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBcmUgd2UgcnVubmluZyBhIGNvbXB1dGF0aW9uIGN1cnJlbnRseT8gKG5vdCBhIHJlYWN0aW9uKVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29tcHV0YXRpb25EZXB0aCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRWFjaCB0aW1lIGEgZGVyaXZhdGlvbiBpcyB0cmFja2VkLCBpdCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBydW4taWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJ1bklkID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAnZ3VpZCcgZm9yIGdlbmVyYWwgcHVycG9zZS4gV2lsbCBiZSBwZXJzaXN0ZWQgYW1vbmdzdCByZXNldHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tb2J4R3VpZCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQXJlIHdlIGluIGEgYmF0Y2ggYmxvY2s/IChhbmQgaG93IG1hbnkgb2YgdGhlbSlcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmluQmF0Y2ggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE9ic2VydmFibGVzIHRoYXQgZG9uJ3QgaGF2ZSBvYnNlcnZlcnMgYW55bW9yZSwgYW5kIGFyZSBhYm91dCB0byBiZVxyXG4gICAgICAgICAqIHN1c3BlbmRlZCwgdW5sZXNzIHNvbWVib2R5IGVsc2UgYWNjZXNzZXMgaXQgaW4gdGhlIHNhbWUgYmF0Y2hcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtJT2JzZXJ2YWJsZVtdfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGlzdCBvZiBzY2hlZHVsZWQsIG5vdCB5ZXQgZXhlY3V0ZWQsIHJlYWN0aW9ucy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBlbmRpbmdSZWFjdGlvbnMgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBcmUgd2UgY3VycmVudGx5IHByb2Nlc3NpbmcgcmVhY3Rpb25zP1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSXMgaXQgYWxsb3dlZCB0byBjaGFuZ2Ugb2JzZXJ2YWJsZXMgYXQgdGhpcyBwb2ludD9cclxuICAgICAgICAgKiBJbiBnZW5lcmFsLCBNb2JYIGRvZXNuJ3QgYWxsb3cgdGhhdCB3aGVuIHJ1bm5pbmcgY29tcHV0YXRpb25zIGFuZCBSZWFjdC5yZW5kZXIuXHJcbiAgICAgICAgICogVG8gZW5zdXJlIHRoYXQgdGhvc2UgZnVuY3Rpb25zIHN0YXkgcHVyZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFsbG93U3RhdGVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJcyBpdCBhbGxvd2VkIHRvIHJlYWQgb2JzZXJ2YWJsZXMgYXQgdGhpcyBwb2ludD9cclxuICAgICAgICAgKiBVc2VkIHRvIGhvbGQgdGhlIHN0YXRlIG5lZWRlZCBmb3IgYG9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uYFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZVJlYWRzID0gdHJ1ZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBzdHJpY3QgbW9kZSBpcyBlbmFibGVkLCBzdGF0ZSBjaGFuZ2VzIGFyZSBieSBkZWZhdWx0IG5vdCBhbGxvd2VkXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5lbmZvcmNlQWN0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNweSBjYWxsYmFja3NcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNweUxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdsb2JhbGx5IGF0dGFjaGVkIGVycm9yIGhhbmRsZXJzIHRoYXQgcmVhY3Qgc3BlY2lmaWNhbGx5IHRvIGVycm9ycyBpbiByZWFjdGlvbnNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdhcm4gaWYgY29tcHV0ZWQgdmFsdWVzIGFyZSBhY2Nlc3NlZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogKEV4cGVyaW1lbnRhbClcclxuICAgICAgICAgKiBXYXJuIGlmIHlvdSB0cnkgdG8gY3JlYXRlIHRvIGRlcml2YXRpb24gLyByZWFjdGl2ZSBjb250ZXh0IHdpdGhvdXQgYWNjZXNzaW5nIGFueSBvYnNlcnZhYmxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAoRXhwZXJpbWVudGFsKVxyXG4gICAgICAgICAqIFdhcm4gaWYgb2JzZXJ2YWJsZXMgYXJlIGFjY2Vzc2VkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsbG93cyBvdmVyd3JpdGluZyBvZiBjb21wdXRlZCBwcm9wZXJ0aWVzLCB1c2VmdWwgaW4gdGVzdHMgYnV0IG5vdCBwcm9kIGFzIGl0IGNhbiBjYXVzZVxyXG4gICAgICAgICAqIG1lbW9yeSBsZWFrcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTg2N1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZWRDb25maWd1cmFibGUgPSBmYWxzZTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIERvbid0IGNhdGNoIGFuZCByZXRocm93IGV4Y2VwdGlvbnMuIFRoaXMgaXMgdXNlZnVsIGZvciBpbnNwZWN0aW5nIHRoZSBzdGF0ZSBvZlxyXG4gICAgICAgICAqIHRoZSBzdGFjayB3aGVuIGFuIGV4Y2VwdGlvbiBvY2N1cnMgd2hpbGUgZGVidWdnaW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IGZhbHNlO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogSWYgdHJ1ZSwgd2UgYXJlIGFscmVhZHkgaGFuZGxpbmcgYW4gZXhjZXB0aW9uIGluIGFuIGFjdGlvbi4gQW55IGVycm9ycyBpbiByZWFjdGlvbnMgc2hvdWxkIGJlIHN1cHByZXNzZWQsIGFzXHJcbiAgICAgICAgICogdGhleSBhcmUgbm90IHRoZSBjYXVzZSwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzE4MzZcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNb2JYR2xvYmFscztcclxufSgpKTtcclxudmFyIG1vY2tHbG9iYWwgPSB7fTtcclxuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9ja0dsb2JhbDtcclxufVxyXG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XHJcbnZhciBpc29sYXRlQ2FsbGVkID0gZmFsc2U7XHJcbnZhciBnbG9iYWxTdGF0ZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XHJcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPiAwICYmICFnbG9iYWwuX19tb2J4R2xvYmFscylcclxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgJiYgZ2xvYmFsLl9fbW9ieEdsb2JhbHMudmVyc2lvbiAhPT0gbmV3IE1vYlhHbG9iYWxzKCkudmVyc2lvbilcclxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XHJcbiAgICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc29sYXRlQ2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiVGhlcmUgYXJlIG11bHRpcGxlLCBkaWZmZXJlbnQgdmVyc2lvbnMgb2YgTW9iWCBhY3RpdmUuIE1ha2Ugc3VyZSBNb2JYIGlzIGxvYWRlZCBvbmx5IG9uY2Ugb3IgdXNlIGBjb25maWd1cmUoeyBpc29sYXRlR2xvYmFsU3RhdGU6IHRydWUgfSlgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNb2JYR2xvYmFscygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcclxuICAgICAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCArPSAxO1xyXG4gICAgICAgIGlmICghZ2xvYmFsLl9fbW9ieEdsb2JhbHMuVU5DSEFOR0VEKVxyXG4gICAgICAgICAgICBnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQgPSB7fTsgLy8gbWFrZSBtZXJnZSBiYWNrd2FyZCBjb21wYXRpYmxlXHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xyXG4gICAgICAgIHJldHVybiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKSk7XHJcbiAgICB9XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIGlzb2xhdGVHbG9iYWxTdGF0ZSgpIHtcclxuICAgIGlmIChnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fFxyXG4gICAgICAgIGdsb2JhbFN0YXRlLmluQmF0Y2ggfHxcclxuICAgICAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMpXHJcbiAgICAgICAgZmFpbChcImlzb2xhdGVHbG9iYWxTdGF0ZSBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBNb2JYIGlzIHJ1bm5pbmcgYW55IHJlYWN0aW9uc1wiKTtcclxuICAgIGlzb2xhdGVDYWxsZWQgPSB0cnVlO1xyXG4gICAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcclxuICAgICAgICBpZiAoLS1nZXRHbG9iYWwoKS5fX21vYnhJbnN0YW5jZUNvdW50ID09PSAwKVxyXG4gICAgICAgICAgICBnZXRHbG9iYWwoKS5fX21vYnhHbG9iYWxzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2xvYmFsU3RhdGUoKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGU7XHJcbn1cclxuLyoqXHJcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXHJcbiAqIGJ1dCBjYW4gYmUgdXNlZCB0byBnZXQgYmFjayBhdCBhIHN0YWJsZSBzdGF0ZSBhZnRlciB0aHJvd2luZyBlcnJvcnNcclxuICovXHJcbmZ1bmN0aW9uIHJlc2V0R2xvYmFsU3RhdGUoKSB7XHJcbiAgICB2YXIgZGVmYXVsdEdsb2JhbHMgPSBuZXcgTW9iWEdsb2JhbHMoKTtcclxuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0R2xvYmFscylcclxuICAgICAgICBpZiAocGVyc2lzdGVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IGRlZmF1bHRHbG9iYWxzW2tleV07XHJcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFnbG9iYWxTdGF0ZS5lbmZvcmNlQWN0aW9ucztcclxufVxuXG5mdW5jdGlvbiBoYXNPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzICYmIG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPiAwO1xyXG59XHJcbmZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlKSB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnM7XHJcbn1cclxuLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XHJcbi8vICAgICBjb25zdCBsaXN0ID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNcclxuLy8gICAgIGNvbnN0IG1hcCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzSW5kZXhlc1xyXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4vLyAgICAgICAgIGNvbnN0IGlkID0gbGlzdFtpXS5fX21hcGlkXHJcbi8vICAgICAgICAgaWYgKGkpIHtcclxuLy8gICAgICAgICAgICAgaW52YXJpYW50KG1hcFtpZF0gPT09IGksIFwiSU5URVJOQUwgRVJST1IgbWFwcyBkZXJpdmF0aW9uLl9fbWFwaWQgdG8gaW5kZXggaW4gbGlzdFwiKSAvLyBmb3IgcGVyZm9ybWFuY2VcclxuLy8gICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2VcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBpbnZhcmlhbnQoXHJcbi8vICAgICAgICAgbGlzdC5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXMobWFwKS5sZW5ndGggPT09IGxpc3QubGVuZ3RoIC0gMSxcclxuLy8gICAgICAgICBcIklOVEVSTkFMIEVSUk9SIHRoZXJlIGlzIG5vIGp1bmsgaW4gbWFwXCJcclxuLy8gICAgIClcclxuLy8gfVxyXG5mdW5jdGlvbiBhZGRPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XHJcbiAgICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XHJcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XHJcbiAgICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XHJcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5hZGQobm9kZSk7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID4gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSlcclxuICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBub2RlLmRlcGVuZGVuY2llc1N0YXRlO1xyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xyXG4gICAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SLCByZW1vdmUgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcclxuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZGVsZXRlKG5vZGUpO1xyXG4gICAgaWYgKG9ic2VydmFibGUub2JzZXJ2ZXJzLnNpemUgPT09IDApIHtcclxuICAgICAgICAvLyBkZWxldGluZyBsYXN0IG9ic2VydmVyXHJcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xyXG4gICAgfVxyXG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xyXG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKSB7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMubGVuZ3RoID09PSAwLCBcIklOVEVSTkFMIEVSUk9SLCBzaG91bGQgb25seSBxdWV1ZSBmb3IgdW5vYnNlcnZhdGlvbiB1bm9ic2VydmVkIG9ic2VydmFibGVzXCIpO1xyXG4gICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zLnB1c2gob2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEJhdGNoIHN0YXJ0cyBhIHRyYW5zYWN0aW9uLCBhdCBsZWFzdCBmb3IgcHVycG9zZXMgb2YgbWVtb2l6aW5nIENvbXB1dGVkVmFsdWVzIHdoZW4gbm90aGluZyBlbHNlIGRvZXMuXHJcbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cclxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcclxuICAgIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcclxufVxyXG5mdW5jdGlvbiBlbmRCYXRjaCgpIHtcclxuICAgIGlmICgtLWdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDApIHtcclxuICAgICAgICBydW5SZWFjdGlvbnMoKTtcclxuICAgICAgICAvLyB0aGUgYmF0Y2ggaXMgYWN0dWFsbHkgYWJvdXQgdG8gZmluaXNoLCBhbGwgdW5vYnNlcnZpbmcgc2hvdWxkIGhhcHBlbiBoZXJlLlxyXG4gICAgICAgIHZhciBsaXN0ID0gZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGxpc3RbaV07XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBvYnNlcnZhYmxlIGhhZCByZWFjdGl2ZSBvYnNlcnZlcnMsIHRyaWdnZXIgdGhlIGhvb2tzXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQmVjb21lVW5vYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZWQgdmFsdWVzIGFyZSBhdXRvbWF0aWNhbGx5IHRlYXJlZCBkb3duIHdoZW4gdGhlIGxhc3Qgb2JzZXJ2ZXIgbGVhdmVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBwcm9jZXNzIGhhcHBlbnMgcmVjdXJzaXZlbHksIHRoaXMgY29tcHV0ZWQgbWlnaHQgYmUgdGhlIGxhc3Qgb2JzZXJ2YWJlIG9mIGFub3RoZXIsIGV0Yy4uXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zdXNwZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpO1xyXG4gICAgdmFyIGRlcml2YXRpb24gPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XHJcbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNpbXBsZSBvcHRpbWl6YXRpb24sIGdpdmUgZWFjaCBkZXJpdmF0aW9uIHJ1biBhbiB1bmlxdWUgaWQgKHJ1bklkKVxyXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcclxuICAgICAgICAgKiBpZiB0aGlzIGlzIHRoZSBjYXNlLCB0aGUgcmVsYXRpb24gaXMgYWxyZWFkeSBrbm93blxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUubGFzdEFjY2Vzc2VkQnkgPSBkZXJpdmF0aW9uLnJ1bklkO1xyXG4gICAgICAgICAgICAvLyBUcmllZCBzdG9yaW5nIG5ld09ic2VydmluZywgb3Igb2JzZXJ2aW5nLCBvciBib3RoIGFzIFNldCwgYnV0IHBlcmZvcm1hbmNlIGRpZG4ndCBjb21lIGNsb3NlLi4uXHJcbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCsrXSA9IG9ic2VydmFibGU7XHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmFibGUub25CZWNvbWVPYnNlcnZlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCAmJiBnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCkge1xyXG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vLyBmdW5jdGlvbiBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZTogSU9ic2VydmFibGUsIG1zZzogc3RyaW5nKSB7XHJcbi8vICAgICAvLyBpdCdzIGV4cGVuc2l2ZSBzbyBiZXR0ZXIgbm90IHJ1biBpdCBpbiBwcm9kdWNpdG9uLiBidXQgdGVtcG9yYXJpbHkgaGVscGZ1bCBmb3IgdGVzdGluZ1xyXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXHJcbi8vICAgICBpZiAobWluID49IG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSkgcmV0dXJuIC8vIDwtIHRoZSBvbmx5IGFzc3VtcHRpb24gYWJvdXQgYGxvd2VzdE9ic2VydmVyU3RhdGVgXHJcbi8vICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXHJcbi8vICAgICAgICAgICAgIG1zZyArXHJcbi8vICAgICAgICAgICAgIFwiIGJlY2F1c2UgXCIgK1xyXG4vLyAgICAgICAgICAgICBtaW4gK1xyXG4vLyAgICAgICAgICAgICBcIiA8IFwiICtcclxuLy8gICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXHJcbi8vICAgICApXHJcbi8vIH1cclxuLyoqXHJcbiAqIE5PVEU6IGN1cnJlbnQgcHJvcGFnYXRpb24gbWVjaGFuaXNtIHdpbGwgaW4gY2FzZSBvZiBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGJlaGF2ZSB1bmV4cGVjdGVkbHlcclxuICogSXQgd2lsbCBwcm9wYWdhdGUgY2hhbmdlcyB0byBvYnNlcnZlcnMgZnJvbSBwcmV2aW91cyBydW5cclxuICogSXQncyBoYXJkIG9yIG1heWJlIGltcG9zc2libGUgKHdpdGggcmVhc29uYWJsZSBwZXJmKSB0byBnZXQgaXQgcmlnaHQgd2l0aCBjdXJyZW50IGFwcHJvYWNoXHJcbiAqIEhvcGVmdWxseSBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGFyZW4ndCBhIGZlYXR1cmUgcGVvcGxlIHNob3VsZCBkZXBlbmQgb25cclxuICogQWxzbyBtb3N0IGJhc2ljIHVzZSBjYXNlcyBzaG91bGQgYmUgb2tcclxuICovXHJcbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcclxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlZChvYnNlcnZhYmxlKSB7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIHN0YXJ0XCIpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgLy8gSWRlYWxseSB3ZSB1c2UgZm9yLi5vZiBoZXJlLCBidXQgdGhlIGRvd25jb21waWxlZCB2ZXJzaW9uIGlzIHJlYWxseSBzbG93Li4uXHJcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xyXG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjaGFuZ2VkIGVuZFwiKTtcclxufVxyXG4vLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxyXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xyXG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xyXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFKVxyXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcclxuICAgICAgICBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUgLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xyXG59XHJcbi8vIFVzZWQgYnkgY29tcHV0ZWQgd2hlbiBpdHMgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgd2UgZG9uJ3Qgd2FuJ3QgdG8gaW1tZWRpYXRlbHkgcmVjb21wdXRlLlxyXG5mdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xyXG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XHJcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcclxuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XHJcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFO1xyXG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBlbmRcIik7XHJcbn1cclxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJ1wiKTtcclxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XHJcbiAgICAgICAgdmFyIGxpbmVzID0gW107XHJcbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7XHJcbiAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICAgICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJ1xcblxcbllvdSBhcmUgZW50ZXJpbmcgdGhpcyBicmVhayBwb2ludCBiZWNhdXNlIGRlcml2YXRpb24gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIGlzIGJlaW5nIHRyYWNlZCBhbmQgJ1wiICsgb2JzZXJ2YWJsZS5uYW1lICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XHJcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDEwMDApIHtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiKGFuZCBtYW55IG1vcmUpXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxpbmVzLnB1c2goXCJcIiArIG5ldyBBcnJheShkZXB0aCkuam9pbihcIlxcdFwiKSArIHRyZWUubmFtZSk7IC8vIE1XRTogbm90IHRoZSBmYXN0ZXN0LCBidXQgdGhlIGVhc2llc3Qgd2F5IDopXHJcbiAgICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpXHJcbiAgICAgICAgdHJlZS5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSk7IH0pO1xyXG59XG5cbnZhciBSZWFjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlYWN0aW9uKG5hbWUsIG9uSW52YWxpZGF0ZSwgZXJyb3JIYW5kbGVyLCByZXF1aXJlc09ic2VydmFibGUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCk7IH1cclxuICAgICAgICBpZiAocmVxdWlyZXNPYnNlcnZhYmxlID09PSB2b2lkIDApIHsgcmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7IH1cclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMub25JbnZhbGlkYXRlID0gb25JbnZhbGlkYXRlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xyXG4gICAgICAgIHRoaXMucmVxdWlyZXNPYnNlcnZhYmxlID0gcmVxdWlyZXNPYnNlcnZhYmxlO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xyXG4gICAgICAgIHRoaXMubmV3T2JzZXJ2aW5nID0gW107XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xyXG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcclxuICAgICAgICB0aGlzLnJ1bklkID0gMDtcclxuICAgICAgICB0aGlzLnVuYm91bmREZXBzQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XHJcbiAgICB9XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUub25CZWNvbWVTdGFsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNTY2hlZHVsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIHJ1blJlYWN0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxyXG4gICAgICovXHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucnVuUmVhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc1RyYWNrUGVuZGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NweUVuYWJsZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHlSZXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzY2hlZHVsZWQtcmVhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJSZWFjdGlvbiBhbHJlYWR5IGRpc3Bvc2VkXCIpIC8vIE5vdGU6IE5vdCBhIHdhcm5pbmcgLyBlcnJvciBpbiBtb2J4IDQgZWl0aGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZTtcclxuICAgICAgICBpZiAobm90aWZ5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlYWN0aW9uXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRyYWNrRGVyaXZlZEZ1bmN0aW9uKHRoaXMsIGZuLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlZCkge1xyXG4gICAgICAgICAgICAvLyBkaXNwb3NlZCBkdXJpbmcgbGFzdCBydW4uIENsZWFuIHVwIGV2ZXJ5dGhpbmcgdGhhdCB3YXMgYm91bmQgYWZ0ZXIgdGhlIGRpc3Bvc2UgY2FsbC5cclxuICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXN1bHQpKVxyXG4gICAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbihyZXN1bHQuY2F1c2UpO1xyXG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCh7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcihlcnJvciwgdGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpXHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXMgKyBcIidcIjtcclxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuc3VwcHJlc3NSZWFjdGlvbkVycm9ycykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZSArIFwiJyBzdXBwcmVzc2VkLCBmaXggZXJyb3Igb2YgY2F1c2luZyBhY3Rpb24gYmVsb3cpXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyb3IpO1xyXG4gICAgICAgICAgICAvKiogSWYgZGVidWdnaW5nIGJyb3VnaHQgeW91IGhlcmUsIHBsZWFzZSwgcmVhZCB0aGUgYWJvdmUgbWVzc2FnZSA6LSkuIFRueCEgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpKSB7XHJcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiXCIgKyBlcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoZXJyb3IsIF90aGlzKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGRpc3Bvc2VkIHdoaWxlIHJ1bm5pbmcsIGNsZWFuIHVwIGxhdGVyLiBNYXliZSBub3Qgb3B0aW1hbCwgYnV0IHJhcmUgY2FzZVxyXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgciA9IHRoaXMuZGlzcG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHJbJG1vYnhdID0gdGhpcztcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcclxuICAgIH07XHJcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudHJhY2UgPSBmdW5jdGlvbiAoZW50ZXJCcmVha1BvaW50KSB7XHJcbiAgICAgICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7IGVudGVyQnJlYWtQb2ludCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdHJhY2UodGhpcywgZW50ZXJCcmVha1BvaW50KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVhY3Rpb247XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIG9uUmVhY3Rpb25FcnJvcihoYW5kbGVyKSB7XHJcbiAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChpZHggPj0gMClcclxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogTWFnaWMgbnVtYmVyIGFsZXJ0IVxyXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcclxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxyXG4gKi9cclxudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xyXG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xyXG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XHJcbiAgICAvLyBUcmFtcG9saW5pbmcsIGlmIHJ1blJlYWN0aW9ucyBhcmUgYWxyZWFkeSBydW5uaW5nLCBuZXcgcmVhY3Rpb25zIHdpbGwgYmUgcGlja2VkIHVwXHJcbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XHJcbn1cclxuZnVuY3Rpb24gcnVuUmVhY3Rpb25zSGVscGVyKCkge1xyXG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcclxuICAgIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xyXG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxyXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcclxuICAgIC8vIHdlIGNvbnZlcmdlIHRvIG5vIHJlbWFpbmluZyByZWFjdGlvbnMgYWZ0ZXIgYSB3aGlsZS5cclxuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdGlvbiBkb2Vzbid0IGNvbnZlcmdlIHRvIGEgc3RhYmxlIHN0YXRlIGFmdGVyIFwiICsgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgKyBcIiBpdGVyYXRpb25zLlwiICtcclxuICAgICAgICAgICAgICAgIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pKTtcclxuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgcmVtYWluaW5nUmVhY3Rpb25zW2ldLnJ1blJlYWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcclxufVxyXG52YXIgaXNSZWFjdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XHJcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XHJcbiAgICB2YXIgYmFzZVNjaGVkdWxlciA9IHJlYWN0aW9uU2NoZWR1bGVyO1xyXG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZm4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTsgfSk7IH07XHJcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhIWdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGg7XHJcbn1cclxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgIHJldHVybjsgLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxyXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnM7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXHJcbiAgICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcclxufVxyXG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICByZXR1cm47XHJcbiAgICB2YXIgY2hhbmdlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGV2ZW50KSwgeyBzcHlSZXBvcnRTdGFydDogdHJ1ZSB9KTtcclxuICAgIHNweVJlcG9ydChjaGFuZ2UpO1xyXG59XHJcbnZhciBFTkRfRVZFTlQgPSB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9O1xyXG5mdW5jdGlvbiBzcHlSZXBvcnRFbmQoY2hhbmdlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChjaGFuZ2UpXHJcbiAgICAgICAgc3B5UmVwb3J0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9KSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgc3B5UmVwb3J0KEVORF9FVkVOVCk7XHJcbn1cclxuZnVuY3Rpb24gc3B5KGxpc3RlbmVyKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gZG9udFJlYXNzaWduRmllbGRzKCkge1xyXG4gICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJAYWN0aW9uIGZpZWxkcyBhcmUgbm90IHJlYXNzaWduYWJsZVwiKTtcclxufVxyXG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvcihuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgIGlmIChkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJAYWN0aW9uIGNhbm5vdCBiZSB1c2VkIHdpdGggZ2V0dGVyc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBiYWJlbCAvIHR5cGVzY3JpcHRcclxuICAgICAgICAgICAgLy8gQGFjdGlvbiBtZXRob2QoKSB7IH1cclxuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHR5cGVzY3JpcHRcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNyZWF0ZUFjdGlvbihuYW1lLCBkZXNjcmlwdG9yLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUgLy8gZm9yIHR5cGVzY3JpcHQsIHRoaXMgbXVzdCBiZSB3cml0YWJsZSwgb3RoZXJ3aXNlIGl0IGNhbm5vdCBpbmhlcml0IDovIChzZWUgaW5oZXJpdGFibGUgYWN0aW9ucyB0ZXN0KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBiYWJlbCBvbmx5OiBAYWN0aW9uIG1ldGhvZCA9ICgpID0+IHt9XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsaXplcl8xID0gZGVzY3JpcHRvci5pbml0aWFsaXplcjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE4uQjogd2UgY2FuJ3QgaW1tZWRpYXRlbHkgaW52b2tlIGluaXRpYWxpemVyOyB0aGlzIHdvdWxkIGJlIHdyb25nXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbihuYW1lLCBpbml0aWFsaXplcl8xLmNhbGwodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBib3VuZCBpbnN0YW5jZSBtZXRob2RzXHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpIHtcclxuICAgIC8vIFNpbXBsZSBwcm9wZXJ0eSB0aGF0IHdyaXRlcyBvbiBmaXJzdCBpbnZvY2F0aW9uIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgZGVzY3JpcHRvcikge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWRkSGlkZGVuUHJvcCh0aGlzLCBwcm9wLCBhY3Rpb24obmFtZSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBib3VuZEFjdGlvbkRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgYXBwbHlUb0luc3RhbmNlKSB7XHJcbiAgICBpZiAoYXBwbHlUb0luc3RhbmNlID09PSB0cnVlKSB7XHJcbiAgICAgICAgZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlc2NyaXB0b3IpIHtcclxuICAgICAgICAvLyBpZiAoZGVzY3JpcHRvci52YWx1ZSlcclxuICAgICAgICAvLyBUeXBlc2NyaXB0IC8gQmFiZWw6IEBhY3Rpb24uYm91bmQgbWV0aG9kKCkgeyB9XHJcbiAgICAgICAgLy8gYWxzbzogYmFiZWwgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGVmaW5lQm91bmRBY3Rpb24odGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yLnZhbHVlIHx8IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIuY2FsbCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1twcm9wZXJ0eU5hbWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGRvbnRSZWFzc2lnbkZpZWxkc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBmaWVsZCBkZWNvcmF0b3IgVHlwZXNjcmlwdCBAYWN0aW9uLmJvdW5kIG1ldGhvZCA9ICgpID0+IHt9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgdik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XG5cbnZhciBhY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xyXG4gICAgLy8gYWN0aW9uKGZuKCkge30pXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcclxuICAgIC8vIGFjdGlvbihcIm5hbWVcIiwgZm4oKSB7fSlcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBhcmcyID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbihhcmcxLCBhcmcyKTtcclxuICAgIC8vIEBhY3Rpb24oXCJuYW1lXCIpIGZuKCkge31cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBuYW1lZEFjdGlvbkRlY29yYXRvcihhcmcxKTtcclxuICAgIC8vIEBhY3Rpb24gZm4oKSB7fVxyXG4gICAgaWYgKGFyZzQgPT09IHRydWUpIHtcclxuICAgICAgICAvLyBhcHBseSB0byBpbnN0YW5jZSBpbW1lZGlhdGVseVxyXG4gICAgICAgIGFkZEhpZGRlblByb3AoYXJnMSwgYXJnMiwgY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBhcmcyLCBhcmczLnZhbHVlLCB0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IoYXJnMikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgIH1cclxufTtcclxuYWN0aW9uLmJvdW5kID0gYm91bmRBY3Rpb25EZWNvcmF0b3I7XHJcbmZ1bmN0aW9uIHJ1bkluQWN0aW9uKGFyZzEsIGFyZzIpIHtcclxuICAgIHZhciBhY3Rpb25OYW1lID0gdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIgPyBhcmcxIDogYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xyXG4gICAgdmFyIGZuID0gdHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzEgOiBhcmcyO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiAmJiBmbi5sZW5ndGggPT09IDAsIFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb24gd2l0aG91dCBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25OYW1lICE9PSBcInN0cmluZ1wiIHx8ICFhY3Rpb25OYW1lKVxyXG4gICAgICAgICAgICBmYWlsKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHRoaXMsIHVuZGVmaW5lZCk7XHJcbn1cclxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IFwiZnVuY3Rpb25cIiAmJiB0aGluZy5pc01vYnhBY3Rpb24gPT09IHRydWU7XHJcbn1cclxuZnVuY3Rpb24gZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGZuKSB7XHJcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcGVydHlOYW1lLCBjcmVhdGVBY3Rpb24ocHJvcGVydHlOYW1lLCBmbi5iaW5kKHRhcmdldCkpKTtcclxufVxuXG4vKipcclxuICogQ3JlYXRlcyBhIG5hbWVkIHJlYWN0aXZlIHZpZXcgYW5kIGtlZXBzIGl0IGFsaXZlLCBzbyB0aGF0IHRoZSB2aWV3IGlzIGFsd2F5c1xyXG4gKiB1cGRhdGVkIGlmIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGNoYW5nZXMsIGV2ZW4gd2hlbiB0aGUgdmlldyBpcyBub3QgZnVydGhlciB1c2VkIGJ5IHNvbWV0aGluZyBlbHNlLlxyXG4gKiBAcGFyYW0gdmlldyBUaGUgcmVhY3RpdmUgdmlld1xyXG4gKiBAcmV0dXJucyBkaXNwb3NlciBmdW5jdGlvbiwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3RvcCB0aGUgdmlldyBmcm9tIGJlaW5nIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZS5cclxuICovXHJcbmZ1bmN0aW9uIGF1dG9ydW4odmlldywgb3B0cykge1xyXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUOyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiB2aWV3ID09PSBcImZ1bmN0aW9uXCIsIFwiQXV0b3J1biBleHBlY3RzIGEgZnVuY3Rpb24gYXMgZmlyc3QgYXJndW1lbnRcIik7XHJcbiAgICAgICAgaW52YXJpYW50KGlzQWN0aW9uKHZpZXcpID09PSBmYWxzZSwgXCJBdXRvcnVuIGRvZXMgbm90IGFjY2VwdCBhY3Rpb25zIHNpbmNlIGFjdGlvbnMgYXJlIHVudHJhY2thYmxlXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPSAob3B0cyAmJiBvcHRzLm5hbWUpIHx8IHZpZXcubmFtZSB8fCBcIkF1dG9ydW5AXCIgKyBnZXROZXh0SWQoKTtcclxuICAgIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xyXG4gICAgdmFyIHJlYWN0aW9uO1xyXG4gICAgaWYgKHJ1blN5bmMpIHtcclxuICAgICAgICAvLyBub3JtYWwgYXV0b3J1blxyXG4gICAgICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy50cmFjayhyZWFjdGlvblJ1bm5lcik7XHJcbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgc2NoZWR1bGVyXzEgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcclxuICAgICAgICAvLyBkZWJvdW5jZWQgYXV0b3J1blxyXG4gICAgICAgIHZhciBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XHJcbiAgICAgICAgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWlzU2NoZWR1bGVkXzEpIHtcclxuICAgICAgICAgICAgICAgIGlzU2NoZWR1bGVkXzEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyXzEoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2NoZWR1bGVkXzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlYWN0aW9uLmlzRGlzcG9zZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcclxuICAgICAgICB2aWV3KHJlYWN0aW9uKTtcclxuICAgIH1cclxuICAgIHJlYWN0aW9uLnNjaGVkdWxlKCk7XHJcbiAgICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXIoKTtcclxufVxyXG52YXIgcnVuID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcclxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cykge1xyXG4gICAgcmV0dXJuIG9wdHMuc2NoZWR1bGVyXHJcbiAgICAgICAgPyBvcHRzLnNjaGVkdWxlclxyXG4gICAgICAgIDogb3B0cy5kZWxheVxyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChmKSB7IHJldHVybiBzZXRUaW1lb3V0KGYsIG9wdHMuZGVsYXkpOyB9XHJcbiAgICAgICAgICAgIDogcnVuO1xyXG59XHJcbmZ1bmN0aW9uIHJlYWN0aW9uKGV4cHJlc3Npb24sIGVmZmVjdCwgb3B0cykge1xyXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUOyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIsIFwiRmlyc3QgYXJndW1lbnQgdG8gcmVhY3Rpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiBvcHRzID09PSBcIm9iamVjdFwiLCBcIlRoaXJkIGFyZ3VtZW50IG9mIHJlYWN0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPSBvcHRzLm5hbWUgfHwgXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgdmFyIGVmZmVjdEFjdGlvbiA9IGFjdGlvbihuYW1lLCBvcHRzLm9uRXJyb3IgPyB3cmFwRXJyb3JIYW5kbGVyKG9wdHMub25FcnJvciwgZWZmZWN0KSA6IGVmZmVjdCk7XHJcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcclxuICAgIHZhciBzY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcclxuICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xyXG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XHJcbiAgICB2YXIgdmFsdWU7XHJcbiAgICB2YXIgZXF1YWxzID0gb3B0cy5jb21wYXJlU3RydWN0dXJhbFxyXG4gICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxyXG4gICAgICAgIDogb3B0cy5lcXVhbHMgfHwgY29tcGFyZXIuZGVmYXVsdDtcclxuICAgIHZhciByID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcclxuICAgICAgICAgICAgcmVhY3Rpb25SdW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XHJcbiAgICAgICAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2NoZWR1bGVyKHJlYWN0aW9uUnVubmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcclxuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xyXG4gICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7IC8vIFE6IG1vdmUgaW50byByZWFjdGlvbiBydW5uZXI/XHJcbiAgICAgICAgaWYgKHIuaXNEaXNwb3NlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgci50cmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBleHByZXNzaW9uKHIpO1xyXG4gICAgICAgICAgICBjaGFuZ2VkID0gZmlyc3RUaW1lIHx8ICFlcXVhbHModmFsdWUsIG5leHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhbHVlID0gbmV4dFZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpXHJcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbih2YWx1ZSwgcik7XHJcbiAgICAgICAgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCByKTtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lKVxyXG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHIuc2NoZWR1bGUoKTtcclxuICAgIHJldHVybiByLmdldERpc3Bvc2VyKCk7XHJcbn1cclxuZnVuY3Rpb24gd3JhcEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsIGJhc2VGbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlci5jYWxsKHRoaXMsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gb25CZWNvbWVPYnNlcnZlZCh0aGluZywgYXJnMiwgYXJnMykge1xyXG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soXCJvbkJlY29tZU9ic2VydmVkXCIsIHRoaW5nLCBhcmcyLCBhcmczKTtcclxufVxyXG5mdW5jdGlvbiBvbkJlY29tZVVub2JzZXJ2ZWQodGhpbmcsIGFyZzIsIGFyZzMpIHtcclxuICAgIHJldHVybiBpbnRlcmNlcHRIb29rKFwib25CZWNvbWVVbm9ic2VydmVkXCIsIHRoaW5nLCBhcmcyLCBhcmczKTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcmNlcHRIb29rKGhvb2ssIHRoaW5nLCBhcmcyLCBhcmczKSB7XHJcbiAgICB2YXIgYXRvbSA9IHR5cGVvZiBhcmczID09PSBcImZ1bmN0aW9uXCIgPyBnZXRBdG9tKHRoaW5nLCBhcmcyKSA6IGdldEF0b20odGhpbmcpO1xyXG4gICAgdmFyIGNiID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzMgOiBhcmcyO1xyXG4gICAgdmFyIGxpc3RlbmVyc0tleSA9IGhvb2sgKyBcIkxpc3RlbmVyc1wiO1xyXG4gICAgaWYgKGF0b21bbGlzdGVuZXJzS2V5XSkge1xyXG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XS5hZGQoY2IpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXRvbVtsaXN0ZW5lcnNLZXldID0gbmV3IFNldChbY2JdKTtcclxuICAgIH1cclxuICAgIHZhciBvcmlnID0gYXRvbVtob29rXTtcclxuICAgIGlmICh0eXBlb2Ygb3JpZyAhPT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcIk5vdCBhbiBhdG9tIHRoYXQgY2FuIGJlICh1bilvYnNlcnZlZFwiKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhvb2tMaXN0ZW5lcnMgPSBhdG9tW2xpc3RlbmVyc0tleV07XHJcbiAgICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgaG9va0xpc3RlbmVycy5kZWxldGUoY2IpO1xyXG4gICAgICAgICAgICBpZiAoaG9va0xpc3RlbmVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxuXG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xyXG4gICAgdmFyIGVuZm9yY2VBY3Rpb25zID0gb3B0aW9ucy5lbmZvcmNlQWN0aW9ucywgY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24sIGNvbXB1dGVkQ29uZmlndXJhYmxlID0gb3B0aW9ucy5jb21wdXRlZENvbmZpZ3VyYWJsZSwgZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IG9wdGlvbnMuZGlzYWJsZUVycm9yQm91bmRhcmllcywgcmVhY3Rpb25TY2hlZHVsZXIgPSBvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyLCByZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IG9wdGlvbnMucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUsIG9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcclxuICAgIGlmIChvcHRpb25zLmlzb2xhdGVHbG9iYWxTdGF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlzb2xhdGVHbG9iYWxTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuZm9yY2VBY3Rpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVuZm9yY2VBY3Rpb25zID09PSBcImJvb2xlYW5cIiB8fCBlbmZvcmNlQWN0aW9ucyA9PT0gXCJzdHJpY3RcIilcclxuICAgICAgICAgICAgZGVwcmVjYXRlZChcIkRlcHJlY2F0ZWQgdmFsdWUgZm9yICdlbmZvcmNlQWN0aW9ucycsIHVzZSAnZmFsc2UnID0+ICdcXFwibmV2ZXJcXFwiJywgJ3RydWUnID0+ICdcXFwib2JzZXJ2ZWRcXFwiJywgJ1xcXCJzdHJpY3RcXFwiJyA9PiBcXFwiJ2Fsd2F5cydcXFwiIGluc3RlYWRcIik7XHJcbiAgICAgICAgdmFyIGVhID0gdm9pZCAwO1xyXG4gICAgICAgIHN3aXRjaCAoZW5mb3JjZUFjdGlvbnMpIHtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBjYXNlIFwib2JzZXJ2ZWRcIjpcclxuICAgICAgICAgICAgICAgIGVhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBjYXNlIFwibmV2ZXJcIjpcclxuICAgICAgICAgICAgICAgIGVhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0cmljdFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWx3YXlzXCI6XHJcbiAgICAgICAgICAgICAgICBlYSA9IFwic3RyaWN0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGZhaWwoXCJJbnZhbGlkIHZhbHVlIGZvciAnZW5mb3JjZUFjdGlvbnMnOiAnXCIgKyBlbmZvcmNlQWN0aW9ucyArIFwiJywgZXhwZWN0ZWQgJ25ldmVyJywgJ2Fsd2F5cycgb3IgJ29ic2VydmVkJ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBcInN0cmljdFwiID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gISFjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb247XHJcbiAgICB9XHJcbiAgICBpZiAocmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlID0gISFyZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZTtcclxuICAgIH1cclxuICAgIGlmIChvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb24gPSAhIW9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uO1xyXG4gICAgICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyA9ICFnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcclxuICAgIH1cclxuICAgIGlmIChjb21wdXRlZENvbmZpZ3VyYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0ZWRDb25maWd1cmFibGUgPSAhIWNvbXB1dGVkQ29uZmlndXJhYmxlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpc2FibGVFcnJvckJvdW5kYXJpZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBEZWJ1ZyBmZWF0dXJlIG9ubHkuIE1vYlggd2lsbCBOT1QgcmVjb3ZlciBmcm9tIGVycm9ycyB3aGVuIGBkaXNhYmxlRXJyb3JCb3VuZGFyaWVzYCBpcyBlbmFibGVkLlwiKTtcclxuICAgICAgICBnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID0gISFkaXNhYmxlRXJyb3JCb3VuZGFyaWVzO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlYWN0aW9uU2NoZWR1bGVyKSB7XHJcbiAgICAgICAgc2V0UmVhY3Rpb25TY2hlZHVsZXIocmVhY3Rpb25TY2hlZHVsZXIpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKHRoaW5nLCBkZWNvcmF0b3JzKSB7XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICBpbnZhcmlhbnQoaXNQbGFpbk9iamVjdChkZWNvcmF0b3JzKSwgXCJEZWNvcmF0b3JzIHNob3VsZCBiZSBhIGtleSB2YWx1ZSBtYXBcIik7XHJcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgPyB0aGluZy5wcm90b3R5cGUgOiB0aGluZztcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICB2YXIgcHJvcGVydHlEZWNvcmF0b3JzID0gZGVjb3JhdG9yc1twcm9wXTtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcGVydHlEZWNvcmF0b3JzKSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eURlY29yYXRvcnMgPSBbcHJvcGVydHlEZWNvcmF0b3JzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIGludmFyaWFudChwcm9wZXJ0eURlY29yYXRvcnMuZXZlcnkoZnVuY3Rpb24gKGRlY29yYXRvcikgeyByZXR1cm4gdHlwZW9mIGRlY29yYXRvciA9PT0gXCJmdW5jdGlvblwiOyB9KSwgXCJEZWNvcmF0ZTogZXhwZWN0ZWQgYSBkZWNvcmF0b3IgZnVuY3Rpb24gb3IgYXJyYXkgb2YgZGVjb3JhdG9yIGZ1bmN0aW9ucyBmb3IgJ1wiICsgcHJvcCArIFwiJ1wiKTtcclxuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wKTtcclxuICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHByb3BlcnR5RGVjb3JhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGFjY0Rlc2NyaXB0b3IsIGRlY29yYXRvcikgeyByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcCwgYWNjRGVzY3JpcHRvcik7IH0sIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgIGlmIChuZXdEZXNjcmlwdG9yKVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wLCBuZXdEZXNjcmlwdG9yKTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIGRlY29yYXRvcnMpIHtcclxuICAgICAgICBfbG9vcF8xKHByb3ApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaW5nO1xyXG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0LCBwcm9wZXJ0aWVzLCBkZWNvcmF0b3JzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaW52YXJpYW50KGFyZ3VtZW50cy5sZW5ndGggPj0gMiAmJiBhcmd1bWVudHMubGVuZ3RoIDw9IDQsIFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdGVkIDItNCBhcmd1bWVudHNcIik7XHJcbiAgICAgICAgaW52YXJpYW50KHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIsIFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xyXG4gICAgICAgIGludmFyaWFudCghaXNPYnNlcnZhYmxlTWFwKHRhcmdldCksIFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIHZhciBkZWZhdWx0RGVjb3JhdG9yID0gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRhcmdldCk7IC8vIEZpeGVzICMxNzQwXHJcbiAgICBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zLm5hbWUsIGRlZmF1bHREZWNvcmF0b3IuZW5oYW5jZXIpOyAvLyBtYWtlIHN1cmUgb2JqZWN0IGlzIG9ic2VydmFibGUsIGV2ZW4gd2l0aG91dCBpbml0aWFsIHByb3BzXHJcbiAgICBpZiAocHJvcGVydGllcylcclxuICAgICAgICBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXModGFyZ2V0LCBwcm9wZXJ0aWVzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKTtcclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHREZWNvcmF0b3IgfHwgKG9wdGlvbnMuZGVlcCA9PT0gZmFsc2UgPyByZWZEZWNvcmF0b3IgOiBkZWVwRGVjb3JhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXModGFyZ2V0LCBwcm9wZXJ0aWVzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKSB7XHJcbiAgICB2YXIgZV8xLCBfYSwgZV8yLCBfYjtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpbnZhcmlhbnQoIWlzT2JzZXJ2YWJsZShwcm9wZXJ0aWVzKSwgXCJFeHRlbmRpbmcgYW4gb2JqZWN0IHdpdGggYW5vdGhlciBvYnNlcnZhYmxlIChvYmplY3QpIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBjb25zdHJ1Y3QgYW4gZXhwbGljaXQgcHJvcGVydHltYXAsIHVzaW5nIGB0b0pTYCBpZiBuZWVkLiBTZWUgaXNzdWUgIzU0MFwiKTtcclxuICAgICAgICBpZiAoZGVjb3JhdG9ycykge1xyXG4gICAgICAgICAgICB2YXIga2V5cyA9IGdldFBsYWluT2JqZWN0S2V5cyhkZWNvcmF0b3JzKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleXNfMSA9IF9fdmFsdWVzKGtleXMpLCBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCk7ICFrZXlzXzFfMS5kb25lOyBrZXlzXzFfMSA9IGtleXNfMS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xXzEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIHByb3BlcnRpZXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKFwiVHJ5aW5nIHRvIGRlY2xhcmUgYSBkZWNvcmF0b3IgZm9yIHVuc3BlY2lmaWVkIHByb3BlcnR5ICdcIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCInXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5c18xXzEgJiYgIWtleXNfMV8xLmRvbmUgJiYgKF9hID0ga2V5c18xLnJldHVybikpIF9hLmNhbGwoa2V5c18xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGtleXMgPSBnZXRQbGFpbk9iamVjdEtleXMocHJvcGVydGllcyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5c18yID0gX192YWx1ZXMoa2V5cyksIGtleXNfMl8xID0ga2V5c18yLm5leHQoKTsgIWtleXNfMl8xLmRvbmU7IGtleXNfMl8xID0ga2V5c18yLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMl8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BlcnRpZXMsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1BsYWluT2JqZWN0KHByb3BlcnRpZXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKFwiJ2V4dGVuZE9ic2VydmFiZScgb25seSBhY2NlcHRzIHBsYWluIG9iamVjdHMgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkKGRlc2NyaXB0b3IudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKFwiUGFzc2luZyBhICdjb21wdXRlZCcgYXMgaW5pdGlhbCBwcm9wZXJ0eSB2YWx1ZSBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGJ5IGV4dGVuZE9ic2VydmFibGUuIFVzZSBhIGdldHRlciBvciBkZWNvcmF0b3IgaW5zdGVhZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzICYmIGtleSBpbiBkZWNvcmF0b3JzXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkZWNvcmF0b3JzW2tleV1cclxuICAgICAgICAgICAgICAgICAgICA6IGRlc2NyaXB0b3IuZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29tcHV0ZWREZWNvcmF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0RGVjb3JhdG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgZGVjb3JhdG9yICE9PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChcIk5vdCBhIHZhbGlkIGRlY29yYXRvciBmb3IgJ1wiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIicsIGdvdDogXCIgKyBkZWNvcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdERlc2NyaXB0b3IgPSBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdERlc2NyaXB0b3IgLy8gb3RoZXJ3aXNlLCBhc3N1bWUgYWxyZWFkeSBhcHBsaWVkLCBkdWUgdG8gYGFwcGx5VG9JbnN0YW5jZWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHJlc3VsdERlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5c18yXzEgJiYgIWtleXNfMl8xLmRvbmUgJiYgKF9iID0ga2V5c18yLnJldHVybikpIF9iLmNhbGwoa2V5c18yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSh0aGluZywgcHJvcGVydHkpIHtcclxuICAgIHJldHVybiBub2RlVG9EZXBlbmRlbmN5VHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xyXG59XHJcbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcclxuICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgbmFtZTogbm9kZS5uYW1lXHJcbiAgICB9O1xyXG4gICAgaWYgKG5vZGUub2JzZXJ2aW5nICYmIG5vZGUub2JzZXJ2aW5nLmxlbmd0aCA+IDApXHJcbiAgICAgICAgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZykubWFwKG5vZGVUb0RlcGVuZGVuY3lUcmVlKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xyXG59XHJcbmZ1bmN0aW9uIG5vZGVUb09ic2VydmVyVHJlZShub2RlKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIG5hbWU6IG5vZGUubmFtZVxyXG4gICAgfTtcclxuICAgIGlmIChoYXNPYnNlcnZlcnMobm9kZSkpXHJcbiAgICAgICAgcmVzdWx0Lm9ic2VydmVycyA9IEFycmF5LmZyb20oZ2V0T2JzZXJ2ZXJzKG5vZGUpKS5tYXAobm9kZVRvT2JzZXJ2ZXJUcmVlKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cblxudmFyIGdlbmVyYXRvcklkID0gMDtcclxuZnVuY3Rpb24gRmxvd0NhbmNlbGxhdGlvbkVycm9yKCkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJGTE9XX0NBTkNFTExFRFwiO1xyXG59XHJcbkZsb3dDYW5jZWxsYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XHJcbmZ1bmN0aW9uIGlzRmxvd0NhbmNlbGxhdGlvbkVycm9yKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBGbG93Q2FuY2VsbGF0aW9uRXJyb3I7XHJcbn1cclxuZnVuY3Rpb24gZmxvdyhnZW5lcmF0b3IpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKVxyXG4gICAgICAgIGZhaWwoISFwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBcIkZsb3cgZXhwZWN0cyAxIGFyZ3VtZW50IGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBkZWNvcmF0b3JcIik7XHJcbiAgICB2YXIgbmFtZSA9IGdlbmVyYXRvci5uYW1lIHx8IFwiPHVubmFtZWQgZmxvdz5cIjtcclxuICAgIC8vIEltcGxlbWVudGF0aW9uIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ai9jby9ibG9iL21hc3Rlci9pbmRleC5qc1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3R4ID0gdGhpcztcclxuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgcnVuSWQgPSArK2dlbmVyYXRvcklkO1xyXG4gICAgICAgIHZhciBnZW4gPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGluaXRcIiwgZ2VuZXJhdG9yKS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgICAgIHZhciByZWplY3RvcjtcclxuICAgICAgICB2YXIgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBzdGVwSWQgPSAwO1xyXG4gICAgICAgICAgICByZWplY3RvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgZnVuY3Rpb24gb25GdWxmaWxsZWQocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLm5leHQpLmNhbGwoZ2VuLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV4dChyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0geWllbGQgXCIgKyBzdGVwSWQrKywgZ2VuLnRocm93KS5jYWxsKGdlbiwgZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHQocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuIGFzeW5jIGl0ZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0LmRvbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVuZGluZ1Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25GdWxmaWxsZWQodW5kZWZpbmVkKTsgLy8ga2ljayBvZmYgdGhlIHByb2Nlc3NcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9taXNlLmNhbmNlbCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nUHJvbWlzZSlcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHBlbmRpbmdQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgYmxvY2sgY2FuIHJldHVybiAob3IgeWllbGQpIHN0dWZmLi5cclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSBnZW4ucmV0dXJuKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBlYXQgYW55dGhpbmcgdGhhdCBwcm9taXNlIHdvdWxkIGRvLCBpdCdzIGNhbmNlbGxlZCFcclxuICAgICAgICAgICAgICAgIHZhciB5aWVsZGVkUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgeWllbGRlZFByb21pc2UudGhlbihub29wLCBub29wKTtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXHJcbiAgICAgICAgICAgICAgICAvLyByZWplY3Qgb3VyIG9yaWdpbmFsIHByb21pc2VcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yKG5ldyBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdG9yKGUpOyAvLyB0aGVyZSBjb3VsZCBiZSBhIHRocm93aW5nIGZpbmFsbHkgYmxvY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjYW5jZWxQcm9taXNlKHByb21pc2UpIHtcclxuICAgIGlmICh0eXBlb2YgcHJvbWlzZS5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBwcm9taXNlLmNhbmNlbCgpO1xyXG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdFJlYWRzKHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XHJcbiAgICB2YXIgdGFyZ2V0O1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVZhbHVlKHRoaW5nKSkge1xyXG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHByb3BPckhhbmRsZXIgIT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgXCJJbnRlcmNlcHRSZWFkcyBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBzcGVjaWZpYyBwcm9wZXJ0eSwgbm90IHdpdGggYW4gb2JqZWN0IGluIGdlbmVyYWxcIik7XHJcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BPckhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQuZGVoYW5jZXIgIT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xyXG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdHlwZW9mIHByb3BPckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BPckhhbmRsZXIgOiBoYW5kbGVyO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0YXJnZXQuZGVoYW5jZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdCh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xyXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgcmV0dXJuIGludGVyY2VwdFByb3BlcnR5KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XHJcbn1cclxuZnVuY3Rpb24gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgaGFuZGxlcikge1xyXG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHQoaGFuZGxlcik7XHJcbn1cclxuZnVuY3Rpb24gaW50ZXJjZXB0UHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBoYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5pbnRlcmNlcHQoaGFuZGxlcik7XHJcbn1cblxuZnVuY3Rpb24gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpID09PSBmYWxzZSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghdmFsdWVbJG1vYnhdLnZhbHVlcy5oYXMocHJvcGVydHkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZShhdG9tKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29tcHV0ZWQodmFsdWUpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCJpc0NvbXB1dGVkIGV4cGVjdHMgb25seSAxIGFyZ3VtZW50LiBVc2UgaXNPYnNlcnZhYmxlUHJvcCB0byBpbnNwZWN0IHRoZSBvYnNlcnZhYmlsaXR5IG9mIGEgcHJvcGVydHlcIik7XHJcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29tcHV0ZWRQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCJpc0NvbXB1dGVkIGV4cGVjdGVkIGEgcHJvcGVydHkgbmFtZSBhcyBzZWNvbmQgYXJndW1lbnRcIik7XHJcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BOYW1lKTtcclxufVxuXG5mdW5jdGlvbiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsKFwiaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiKTtcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVbJG1vYnhdLnZhbHVlcy5oYXMocHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgZmlyc3QgY2hlY2ssIHNlZSAjNzAxXHJcbiAgICByZXR1cm4gKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgfHxcclxuICAgICAgICAhIXZhbHVlWyRtb2J4XSB8fFxyXG4gICAgICAgIGlzQXRvbSh2YWx1ZSkgfHxcclxuICAgICAgICBpc1JlYWN0aW9uKHZhbHVlKSB8fFxyXG4gICAgICAgIGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSkpO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXHJcbiAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCJpc09ic2VydmFibGUgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcclxuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBpc09ic2VydmFibGVQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xyXG4gICAgcmV0dXJuIF9pc09ic2VydmFibGUodmFsdWUsIHByb3BOYW1lKTtcclxufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialskbW9ieF0uZ2V0S2V5cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmtleXMoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBpbmRleDsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICBcIidrZXlzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMsIHNldHMgYW5kIG1hcHNcIik7XHJcbn1cclxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqLmdldChrZXkpOyB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai52YWx1ZXMoKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmouc2xpY2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgIFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGVudHJpZXMob2JqKSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBba2V5LCBvYmpba2V5XV07IH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqLmdldChrZXkpXTsgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmouZW50cmllcygpKTtcclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoZnVuY3Rpb24gKGtleSwgaW5kZXgpIHsgcmV0dXJuIFtpbmRleCwga2V5XTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICBcIidlbnRyaWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XHJcbn1cclxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgICAgIHZhciB2YWx1ZXNfMSA9IGtleTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXlfMSBpbiB2YWx1ZXNfMSlcclxuICAgICAgICAgICAgICAgIHNldChvYmosIGtleV8xLCB2YWx1ZXNfMVtrZXlfMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IG9ialskbW9ieF07XHJcbiAgICAgICAgdmFyIGV4aXN0aW5nT2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nT2JzZXJ2YWJsZSkge1xyXG4gICAgICAgICAgICBhZG0ud3JpdGUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZG0uYWRkT2JzZXJ2YWJsZVByb3Aoa2V5LCB2YWx1ZSwgYWRtLmRlZmF1bHRFbmhhbmNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICBvYmouc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcclxuICAgICAgICBvYmouYWRkKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xyXG4gICAgICAgIGludmFyaWFudChrZXkgPj0gMCwgXCJOb3QgYSB2YWxpZCBpbmRleDogJ1wiICsga2V5ICsgXCInXCIpO1xyXG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcclxuICAgICAgICBpZiAoa2V5ID49IG9iai5sZW5ndGgpXHJcbiAgICAgICAgICAgIG9iai5sZW5ndGggPSBrZXkgKyAxO1xyXG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIidzZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW1vdmUob2JqLCBrZXkpIHtcclxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIG9ialskbW9ieF0ucmVtb3ZlKGtleSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xyXG4gICAgICAgIG9iai5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgb2JqLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcclxuICAgICAgICBpbnZhcmlhbnQoa2V5ID49IDAsIFwiTm90IGEgdmFsaWQgaW5kZXg6ICdcIiArIGtleSArIFwiJ1wiKTtcclxuICAgICAgICBvYmouc3BsaWNlKGtleSwgMSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICAgICAgXCIncmVtb3ZlKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaGFzKG9iaiwga2V5KSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcclxuICAgICAgICAvLyByZXR1cm4ga2V5cyhvYmopLmluZGV4T2Yoa2V5KSA+PSAwXHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbWluaXN0cmF0aW9uKG9iaik7XHJcbiAgICAgICAgcmV0dXJuIGFkbS5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcclxuICAgICAgICByZXR1cm4ga2V5ID49IDAgJiYga2V5IDwgb2JqLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIidoYXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXQob2JqLCBrZXkpIHtcclxuICAgIGlmICghaGFzKG9iaiwga2V5KSlcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqLmdldChrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIidnZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgaWYgKHR5cGVvZiBjYk9yRmlyZSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUpO1xyXG59XHJcbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XHJcbn1cclxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XHJcbn1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgZGV0ZWN0Q3ljbGVzOiB0cnVlLFxyXG4gICAgZXhwb3J0TWFwc0FzT2JqZWN0czogdHJ1ZSxcclxuICAgIHJlY3Vyc2VFdmVyeXRoaW5nOiBmYWxzZVxyXG59O1xyXG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zLmRldGVjdEN5Y2xlcylcclxuICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSB7XHJcbiAgICBpZiAoIW9wdGlvbnMucmVjdXJzZUV2ZXJ5dGhpbmcgJiYgIWlzT2JzZXJ2YWJsZShzb3VyY2UpKVxyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgLy8gRGlyZWN0bHkgcmV0dXJuIG51bGwgaWYgc291cmNlIGlzIG51bGxcclxuICAgIGlmIChzb3VyY2UgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAvLyBEaXJlY3RseSByZXR1cm4gdGhlIERhdGUgb2JqZWN0IGl0c2VsZiBpZiBjb250YWluZWQgaW4gdGhlIG9ic2VydmFibGVcclxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBEYXRlKVxyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlVmFsdWUoc291cmNlKSlcclxuICAgICAgICByZXR1cm4gdG9KU0hlbHBlcihzb3VyY2UuZ2V0KCksIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xyXG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyYWNrIHRoZSBrZXlzIG9mIHRoZSBvYmplY3RcclxuICAgIGlmIChpc09ic2VydmFibGUoc291cmNlKSlcclxuICAgICAgICBrZXlzKHNvdXJjZSk7XHJcbiAgICB2YXIgZGV0ZWN0Q3ljbGVzID0gb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHRydWU7XHJcbiAgICBpZiAoZGV0ZWN0Q3ljbGVzICYmIHNvdXJjZSAhPT0gbnVsbCAmJiBfX2FscmVhZHlTZWVuLmhhcyhzb3VyY2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYWxyZWFkeVNlZW4uZ2V0KHNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoc291cmNlKSB8fCBBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcclxuICAgICAgICB2YXIgcmVzXzEgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIFtdLCBvcHRpb25zKTtcclxuICAgICAgICB2YXIgdG9BZGQgPSBzb3VyY2UubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7IH0pO1xyXG4gICAgICAgIHJlc18xLmxlbmd0aCA9IHRvQWRkLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRvQWRkLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuICAgICAgICAgICAgcmVzXzFbaV0gPSB0b0FkZFtpXTtcclxuICAgICAgICByZXR1cm4gcmVzXzE7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IFNldC5wcm90b3R5cGUpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5leHBvcnRNYXBzQXNPYmplY3RzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzXzIgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzXzIuYWRkKHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNfMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXNfMyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc18zLnB1c2godG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc18zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc09ic2VydmFibGVNYXAoc291cmNlKSB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc291cmNlKSA9PT0gTWFwLnByb3RvdHlwZSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmV4cG9ydE1hcHNBc09iamVjdHMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNfNCA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc180LnNldChrZXksIHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNfNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXNfNSA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzXzVba2V5XSA9IHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc181O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZhbGxiYWNrIHRvIHRoZSBzaXR1YXRpb24gdGhhdCBzb3VyY2UgaXMgYW4gT2JzZXJ2YWJsZU9iamVjdCBvciBhIHBsYWluIG9iamVjdFxyXG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30sIG9wdGlvbnMpO1xyXG4gICAgZ2V0UGxhaW5PYmplY3RLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmVzW2tleV0gPSB0b0pTSGVscGVyKHNvdXJjZVtrZXldLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICBvcHRpb25zID0geyBkZXRlY3RDeWNsZXM6IG9wdGlvbnMgfTtcclxuICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XHJcbiAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9XHJcbiAgICAgICAgb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IG9wdGlvbnMucmVjdXJzZUV2ZXJ5dGhpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgOiBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcclxuICAgIHZhciBfX2FscmVhZHlTZWVuO1xyXG4gICAgaWYgKG9wdGlvbnMuZGV0ZWN0Q3ljbGVzKVxyXG4gICAgICAgIF9fYWxyZWFkeVNlZW4gPSBuZXcgTWFwKCk7XHJcbiAgICByZXR1cm4gdG9KU0hlbHBlcihzb3VyY2UsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xyXG59XG5cbmZ1bmN0aW9uIHRyYWNlKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGVudGVyQnJlYWtQb2ludCA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgIGVudGVyQnJlYWtQb2ludCA9IGFyZ3MucG9wKCk7XHJcbiAgICB2YXIgZGVyaXZhdGlvbiA9IGdldEF0b21Gcm9tQXJncyhhcmdzKTtcclxuICAgIGlmICghZGVyaXZhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBcIid0cmFjZShicmVhaz8pJyBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhIHRyYWNrZWQgY29tcHV0ZWQgdmFsdWUgb3IgYSBSZWFjdGlvbi4gQ29uc2lkZXIgcGFzc2luZyBpbiB0aGUgY29tcHV0ZWQgdmFsdWUgb3IgcmVhY3Rpb24gZXhwbGljaXRseVwiKTtcclxuICAgIH1cclxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLk5PTkUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgdHJhY2luZyBlbmFibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZGVyaXZhdGlvbi5pc1RyYWNpbmcgPSBlbnRlckJyZWFrUG9pbnQgPyBUcmFjZU1vZGUuQlJFQUsgOiBUcmFjZU1vZGUuTE9HO1xyXG59XHJcbmZ1bmN0aW9uIGdldEF0b21Gcm9tQXJncyhhcmdzKSB7XHJcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgcmV0dXJuIGdldEF0b20oYXJnc1swXSk7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdLCBhcmdzWzFdKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXHJcbiAqIFRoZSB0cmFuc2FjdGlvbiB3aWxsIGJlIHJ1biBzeW5jaHJvbm91c2x5IG5vbmV0aGVsZXNzLlxyXG4gKlxyXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcclxuICogQHJldHVybnMgYW55IHZhbHVlIHRoYXQgd2FzIHJldHVybmVkIGJ5IHRoZSAnYWN0aW9uJyBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2FjdGlvbihhY3Rpb24sIHRoaXNBcmcpIHtcclxuICAgIGlmICh0aGlzQXJnID09PSB2b2lkIDApIHsgdGhpc0FyZyA9IHVuZGVmaW5lZDsgfVxyXG4gICAgc3RhcnRCYXRjaCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uLmFwcGx5KHRoaXNBcmcpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZW5kQmF0Y2goKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgfHwgKGFyZzEgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIpKVxyXG4gICAgICAgIHJldHVybiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIGFyZzEpO1xyXG4gICAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSk7XHJcbn1cclxuZnVuY3Rpb24gX3doZW4ocHJlZGljYXRlLCBlZmZlY3QsIG9wdHMpIHtcclxuICAgIHZhciB0aW1lb3V0SGFuZGxlO1xyXG4gICAgaWYgKHR5cGVvZiBvcHRzLnRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICB0aW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghZGlzcG9zZXJbJG1vYnhdLmlzRGlzcG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJXSEVOX1RJTUVPVVRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMub25FcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBvcHRzLnRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgb3B0cy5uYW1lID0gb3B0cy5uYW1lIHx8IFwiV2hlbkBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgdmFyIGVmZmVjdEFjdGlvbiA9IGNyZWF0ZUFjdGlvbihvcHRzLm5hbWUgKyBcIi1lZmZlY3RcIiwgZWZmZWN0KTtcclxuICAgIHZhciBkaXNwb3NlciA9IGF1dG9ydW4oZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICBpZiAocHJlZGljYXRlKCkpIHtcclxuICAgICAgICAgICAgci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlKVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRIYW5kbGUpO1xyXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBvcHRzKTtcclxuICAgIHJldHVybiBkaXNwb3NlcjtcclxufVxyXG5mdW5jdGlvbiB3aGVuUHJvbWlzZShwcmVkaWNhdGUsIG9wdHMpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgb3B0cyAmJiBvcHRzLm9uRXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIGZhaWwoXCJ0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRcIik7XHJcbiAgICB2YXIgY2FuY2VsO1xyXG4gICAgdmFyIHJlcyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgZGlzcG9zZXIgPSBfd2hlbihwcmVkaWNhdGUsIHJlc29sdmUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRzKSwgeyBvbkVycm9yOiByZWplY3QgfSkpO1xyXG4gICAgICAgIGNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGlzcG9zZXIoKTtcclxuICAgICAgICAgICAgcmVqZWN0KFwiV0hFTl9DQU5DRUxMRURcIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmVzLmNhbmNlbCA9IGNhbmNlbDtcclxuICAgIHJldHVybiByZXM7XHJcbn1cblxuZnVuY3Rpb24gZ2V0QWRtKHRhcmdldCkge1xyXG4gICAgcmV0dXJuIHRhcmdldFskbW9ieF07XHJcbn1cclxuZnVuY3Rpb24gaXNQcm9wZXJ0eUtleSh2YWwpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcclxufVxyXG4vLyBPcHRpbWl6YXRpb246IHdlIGRvbid0IG5lZWQgdGhlIGludGVybWVkaWF0ZSBvYmplY3RzIGFuZCBjb3VsZCBoYXZlIGEgY29tcGxldGVseSBjdXN0b20gYWRtaW5pc3RyYXRpb24gZm9yIER5bmFtaWNPYmplY3RzLFxyXG4vLyBhbmQgc2tpcCBlaXRoZXIgdGhlIGludGVybmFsIHZhbHVlcyBtYXAsIG9yIHRoZSBiYXNlIG9iamVjdCB3aXRoIGl0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycyFcclxudmFyIG9iamVjdFByb3h5VHJhcHMgPSB7XHJcbiAgICBoYXM6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYnggfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiIHx8IG5hbWUgPT09IG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XHJcbiAgICAgICAgLy8gTVdFOiBzaG91bGQgYGluYCBvcGVyYXRvciBiZSByZWFjdGl2ZT8gSWYgbm90LCBiZWxvdyBjb2RlIHBhdGggd2lsbCBiZSBmYXN0ZXIgLyBtb3JlIG1lbW9yeSBlZmZpY2llbnRcclxuICAgICAgICAvLyBUT0RPOiBjaGVjayBwZXJmb3JtYW5jZSBzdGF0cyFcclxuICAgICAgICAvLyBpZiAoYWRtLnZhbHVlcy5nZXQobmFtZSBhcyBzdHJpbmcpKSByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIGlmIChpc1Byb3BlcnR5S2V5KG5hbWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gYWRtLmhhcyhuYW1lKTtcclxuICAgICAgICByZXR1cm4gbmFtZSBpbiB0YXJnZXQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICRtb2J4IHx8IG5hbWUgPT09IFwiY29uc3RydWN0b3JcIiB8fCBuYW1lID09PSBtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbClcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcclxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBhZG0udmFsdWVzLmdldChuYW1lKTtcclxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEF0b20pIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9ic2VydmFibGUuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmaXhlcyAjMTc5NiwgYmVjYXVzZSBkZWxldGluZyBhIHByb3AgdGhhdCBoYXMgYW5cclxuICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCB2YWx1ZSB3b24ndCByZXRyaWdnZXIgYSBvYnNlcnZlciAobm8gdmlzaWJsZSBlZmZlY3QpLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGF1dG9ydW4gd291bGRuJ3Qgc3Vic2NyaWJlIHRvIGZ1dHVyZSBrZXkgY2hhbmdlcyAoc2VlIGFsc28gbmV4dCBjb21tZW50KVxyXG4gICAgICAgICAgICAgICAgYWRtLmhhcyhuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc3RhcnQgbGlzdGVuaW5nIHRvIGZ1dHVyZSBrZXlzXHJcbiAgICAgICAgLy8gbm90ZSB0aGF0IHdlIG9ubHkgZG8gdGhpcyBoZXJlIGZvciBvcHRpbWl6YXRpb25cclxuICAgICAgICBpZiAoaXNQcm9wZXJ0eUtleShuYW1lKSlcclxuICAgICAgICAgICAgYWRtLmhhcyhuYW1lKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIWlzUHJvcGVydHlLZXkobmFtZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICBpZiAoIWlzUHJvcGVydHlLZXkobmFtZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtKHRhcmdldCk7XHJcbiAgICAgICAgYWRtLnJlbW92ZShuYW1lKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBvd25LZXlzOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xyXG4gICAgICAgIGFkbS5rZXlzQXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHJldHVybiBSZWZsZWN0Lm93bktleXModGFyZ2V0KTtcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGZhaWwoXCJEeW5hbWljIG9ic2VydmFibGUgb2JqZWN0cyBjYW5ub3QgYmUgZnJvemVuXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QoYmFzZSkge1xyXG4gICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGJhc2UsIG9iamVjdFByb3h5VHJhcHMpO1xyXG4gICAgYmFzZVskbW9ieF0ucHJveHkgPSBwcm94eTtcclxuICAgIHJldHVybiBwcm94eTtcclxufVxuXG5mdW5jdGlvbiBoYXNJbnRlcmNlcHRvcnMoaW50ZXJjZXB0YWJsZSkge1xyXG4gICAgcmV0dXJuIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzICE9PSB1bmRlZmluZWQgJiYgaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMubGVuZ3RoID4gMDtcclxufVxyXG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcclxuICAgIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyB8fCAoaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgPSBbXSk7XHJcbiAgICBpbnRlcmNlcHRvcnMucHVzaChoYW5kbGVyKTtcclxuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaWR4ID0gaW50ZXJjZXB0b3JzLmluZGV4T2YoaGFuZGxlcik7XHJcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXHJcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcclxuICAgIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEludGVyY2VwdG9yIGNhbiBtb2RpZnkgdGhlIGFycmF5LCBjb3B5IGl0IHRvIGF2b2lkIGNvbmN1cnJlbnQgbW9kaWZpY2F0aW9uLCBzZWUgIzE5NTBcclxuICAgICAgICB2YXIgaW50ZXJjZXB0b3JzID0gX19zcHJlYWQoKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzIHx8IFtdKSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpbnRlcmNlcHRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpbnZhcmlhbnQoIWNoYW5nZSB8fCBjaGFuZ2UudHlwZSwgXCJJbnRlcmNlcHQgaGFuZGxlcnMgc2hvdWxkIHJldHVybiBub3RoaW5nIG9yIGEgY2hhbmdlIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gaGFzTGlzdGVuZXJzKGxpc3RlbmFibGUpIHtcclxuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA+IDA7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5hYmxlLCBoYW5kbGVyKSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgfHwgKGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzID0gW10pO1xyXG4gICAgbGlzdGVuZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChpZHggIT09IC0xKVxyXG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMobGlzdGVuYWJsZSwgY2hhbmdlKSB7XHJcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzO1xyXG4gICAgaWYgKCFsaXN0ZW5lcnMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBsaXN0ZW5lcnNbaV0oY2hhbmdlKTtcclxuICAgIH1cclxuICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XHJcbn1cblxudmFyIE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwOyAvLyBTZWUgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzg1OVxyXG52YXIgYXJyYXlUcmFwcyA9IHtcclxuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieClcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFskbW9ieF07XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwibGVuZ3RoXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdLmdldEFycmF5TGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnMuZ2V0LmNhbGwodGFyZ2V0LCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiICYmICFpc05hTihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlFeHRlbnNpb25zLmdldC5jYWxsKHRhcmdldCwgcGFyc2VJbnQobmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyYXlFeHRlbnNpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFskbW9ieF0uc2V0QXJyYXlMZW5ndGgodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgYXJyYXlFeHRlbnNpb25zLnNldC5jYWxsKHRhcmdldCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIgfHwgaXNOYU4obmFtZSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBudW1lcmljIHN0cmluZ1xyXG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGZhaWwoXCJPYnNlcnZhYmxlIGFycmF5cyBjYW5ub3QgYmUgZnJvemVuXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xyXG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKTsgfVxyXG4gICAgaWYgKG93bmVkID09PSB2b2lkIDApIHsgb3duZWQgPSBmYWxzZTsgfVxyXG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpO1xyXG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFkbS52YWx1ZXMsICRtb2J4LCBhZG0pO1xyXG4gICAgdmFyIHByb3h5ID0gbmV3IFByb3h5KGFkbS52YWx1ZXMsIGFycmF5VHJhcHMpO1xyXG4gICAgYWRtLnByb3h5ID0gcHJveHk7XHJcbiAgICBpZiAoaW5pdGlhbFZhbHVlcyAmJiBpbml0aWFsVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKTtcclxuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xyXG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XHJcbnZhciBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCkge1xyXG4gICAgICAgIHRoaXMub3duZWQgPSBvd25lZDtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJveHkgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYXRvbSA9IG5ldyBBdG9tKG5hbWUgfHwgXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSk7XHJcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xyXG4gICAgfVxyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmRlaGFuY2VWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7IGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcih7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBhZGRlZDogdGhpcy52YWx1ZXMuc2xpY2UoKSxcclxuICAgICAgICAgICAgICAgIGFkZGVkQ291bnQ6IHRoaXMudmFsdWVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG5ld0xlbmd0aCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmV3TGVuZ3RoICE9PSBcIm51bWJlclwiIHx8IG5ld0xlbmd0aCA8IDApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcclxuICAgICAgICB2YXIgY3VycmVudExlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcclxuICAgICAgICBpZiAobmV3TGVuZ3RoID09PSBjdXJyZW50TGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZWxzZSBpZiAobmV3TGVuZ3RoID4gY3VycmVudExlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgbmV3SXRlbXMgPSBuZXcgQXJyYXkobmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgbmV3SXRlbXNbaV0gPSB1bmRlZmluZWQ7IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxyXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShjdXJyZW50TGVuZ3RoLCAwLCBuZXdJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zcGxpY2VXaXRoQXJyYXkobmV3TGVuZ3RoLCBjdXJyZW50TGVuZ3RoIC0gbmV3TGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiAob2xkTGVuZ3RoLCBkZWx0YSkge1xyXG4gICAgICAgIGlmIChvbGRMZW5ndGggIT09IHRoaXMubGFzdEtub3duTGVuZ3RoKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9kaWZpY2F0aW9uIGV4Y2VwdGlvbjogdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiBhbiBvYnNlcnZhYmxlIGFycmF5IHdhcyBjaGFuZ2VkLlwiKTtcclxuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCArPSBkZWx0YTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuYXRvbSk7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcclxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxyXG4gICAgICAgICAgICBpbmRleCA9IGxlbmd0aDtcclxuICAgICAgICBlbHNlIGlmIChpbmRleCA8IDApXHJcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IGxlbmd0aCAtIGluZGV4O1xyXG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XHJcbiAgICAgICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gRU1QVFlfQVJSQVk7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQ6IGRlbGV0ZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWTtcclxuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSBjaGFuZ2UucmVtb3ZlZENvdW50O1xyXG4gICAgICAgICAgICBuZXdJdGVtcyA9IGNoYW5nZS5hZGRlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3SXRlbXMgPSBuZXdJdGVtcy5sZW5ndGggPT09IDAgPyBuZXdJdGVtcyA6IG5ld0l0ZW1zLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gX3RoaXMuZW5oYW5jZXIodiwgdW5kZWZpbmVkKTsgfSk7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcnJheUxlbmd0aChsZW5ndGgsIGxlbmd0aERlbHRhKTsgLy8gY2hlY2tzIGlmIGludGVybmFsIGFycmF5IHdhc24ndCBtb2RpZmllZFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzID0gdGhpcy5zcGxpY2VJdGVtc0ludG9WYWx1ZXMoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUNvdW50ICE9PSAwIHx8IG5ld0l0ZW1zLmxlbmd0aCAhPT0gMClcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnlBcnJheVNwbGljZShpbmRleCwgbmV3SXRlbXMsIHJlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlcyhyZXMpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zcGxpY2VJdGVtc0ludG9WYWx1ZXMgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoX2EgPSB0aGlzLnZhbHVlcykuc3BsaWNlLmFwcGx5KF9hLCBfX3NwcmVhZChbaW5kZXgsIGRlbGV0ZUNvdW50XSwgbmV3SXRlbXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLnZhbHVlcy5zbGljZShpbmRleCwgaW5kZXggKyBkZWxldGVDb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXNcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcclxuICAgICAgICAgICAgICAgIC5jb25jYXQobmV3SXRlbXMsIHRoaXMudmFsdWVzLnNsaWNlKGluZGV4ICsgZGVsZXRlQ291bnQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUgPSBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZCAmJiBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XHJcbiAgICAgICAgLy8gY2F1c2UgYW55IHJ1bnRpbWUgb3ZlcmhlYWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSB3aXRob3V0IE5PREVfRU5WIHNldCwgdW5sZXNzIHNweWluZyBpcyBlbmFibGVkXHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMuYXRvbS5uYW1lIH0pKTtcclxuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUubm90aWZ5QXJyYXlTcGxpY2UgPSBmdW5jdGlvbiAoaW5kZXgsIGFkZGVkLCByZW1vdmVkKSB7XHJcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcclxuICAgICAgICAgICAgICAgIGFkZGVkOiBhZGRlZCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogcmVtb3ZlZC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMuYXRvbS5uYW1lIH0pKTtcclxuICAgICAgICB0aGlzLmF0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uO1xyXG59KCkpO1xyXG52YXIgYXJyYXlFeHRlbnNpb25zID0ge1xyXG4gICAgaW50ZXJjZXB0OiBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5pbnRlcmNlcHQoaGFuZGxlcik7XHJcbiAgICB9LFxyXG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHsgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7IH1cclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgcmV0dXJuIGFkbS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xyXG4gICAgfSxcclxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDApO1xyXG4gICAgfSxcclxuICAgIHJlcGxhY2U6IGZ1bmN0aW9uIChuZXdJdGVtcykge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheSgwLCBhZG0udmFsdWVzLmxlbmd0aCwgbmV3SXRlbXMpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhpcyBhcnJheSBiYWNrIHRvIGEgKHNoYWxsb3cpIGphdmFzY3JpcHQgc3RydWN0dXJlLlxyXG4gICAgICogRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTXHJcbiAgICAgKi9cclxuICAgIHRvSlM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xyXG4gICAgfSxcclxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcclxuICAgICAgICByZXR1cm4gdGhpcy50b0pTKCk7XHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgICAqIGZ1bmN0aW9ucyB0aGF0IGRvIGFsdGVyIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCAoYmFzZWQgb24gbGliLmVzNi5kLnRzKVxyXG4gICAgICogc2luY2UgdGhlc2UgZnVuY3Rpb25zIGFsdGVyIHRoZSBpbm5lciBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMuXHJcbiAgICAgKiBCZWNhdXNlIHRoZSBoYXZlIHNpZGUgZWZmZWN0cywgdGhleSBzaG91bGQgbm90IGJlIHVzZWQgaW4gY29tcHV0ZWQgZnVuY3Rpb24sXHJcbiAgICAgKiBhbmQgZm9yIHRoYXQgcmVhc29uIHRoZSBkbyBub3QgY2FsbCBkZXBlbmRlbmN5U3RhdGUubm90aWZ5T2JzZXJ2ZWRcclxuICAgICAqL1xyXG4gICAgc3BsaWNlOiBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XHJcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgbmV3SXRlbXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCk7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xyXG4gICAgfSxcclxuICAgIHNwbGljZVdpdGhBcnJheTogZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XHJcbiAgICB9LFxyXG4gICAgcHVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KGFkbS52YWx1ZXMubGVuZ3RoLCAwLCBpdGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHBvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzWyRtb2J4XS52YWx1ZXMubGVuZ3RoIC0gMSwgMCksIDEpWzBdO1xyXG4gICAgfSxcclxuICAgIHNoaWZ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIDEpWzBdO1xyXG4gICAgfSxcclxuICAgIHVuc2hpZnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBpdGVtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpdGVtcyk7XHJcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHJldmVyc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcclxuICAgICAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXHJcbiAgICAgICAgLy8gc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBkZWZhdWx0IGFuZCBqdXN0IG1ha2UgaXQgYW4gZGVydml0YXRpb25cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LnJldmVyc2UoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBhcnJheSBpbiBwbGFjZS4gVXNlIGBvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5yZXZlcnNlKClgIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZyBhbmQgcGVyZm9ybSB0aGUgb3BlcmF0aW9uIG9uIGEgY29weSwgb3IgYG9ic2VydmFibGVBcnJheS5yZXBsYWNlKG9ic2VydmFibGVBcnJheS5zbGljZSgpLnJldmVyc2UoKSlgIHRvIHJldmVyc2UgJiB1cGRhdGUgaW4gcGxhY2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc2xpY2UoKTtcclxuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcclxuICAgIH0sXHJcbiAgICBzb3J0OiBmdW5jdGlvbiAoY29tcGFyZUZuKSB7XHJcbiAgICAgICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XHJcbiAgICAgICAgLy8gd2hpY2ggZ29lcyBhZ2FpbnN0IGFsbCBnb29kIHByYWN0aWNlcy4gTGV0J3Mgbm90IGNoYW5nZSB0aGUgYXJyYXkgaW4gcGxhY2UhXHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5zb3J0KClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpYCB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYW5kIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvbiBhIGNvcHksIG9yIGBvYnNlcnZhYmxlQXJyYXkucmVwbGFjZShvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5zb3J0KCkpYCB0byBzb3J0ICYgdXBkYXRlIGluIHBsYWNlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lLnNvcnQuYXBwbHkoY2xvbmUsIGFyZ3VtZW50cyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgdmFyIGlkeCA9IGFkbS5kZWhhbmNlVmFsdWVzKGFkbS52YWx1ZXMpLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xyXG4gICAgICAgIGlmIChhZG0pIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgYWRtLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGFkbS5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLmRlaGFuY2VWYWx1ZShhZG0udmFsdWVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguYXJyYXldIEF0dGVtcHQgdG8gcmVhZCBhbiBhcnJheSBpbmRleCAoXCIgKyBpbmRleCArIFwiKSB0aGF0IGlzIG91dCBvZiBib3VuZHMgKFwiICsgYWRtLnZhbHVlcy5sZW5ndGggKyBcIikuIFBsZWFzZSBjaGVjayBsZW5ndGggZmlyc3QuIE91dCBvZiBib3VuZCBpbmRpY2VzIHdpbGwgbm90IGJlIHRyYWNrZWQgYnkgTW9iWFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFkbS52YWx1ZXM7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgYXQgaW5kZXggaW4gcmFuZ2VcclxuICAgICAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYWRtLmF0b20pO1xyXG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UoYWRtLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGFkbS5wcm94eSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gYWRtLmVuaGFuY2VyKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkID0gbmV3VmFsdWUgIT09IG9sZFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYWRtLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IGl0ZW1cclxuICAgICAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgMCwgW25ld1ZhbHVlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBvdXQgb2YgYm91bmRzXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzLCBcIiArIGluZGV4ICsgXCIgaXMgbGFyZ2VyIHRoYW4gXCIgKyB2YWx1ZXMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbltcclxuICAgIFwiY29uY2F0XCIsXHJcbiAgICBcImV2ZXJ5XCIsXHJcbiAgICBcImZpbHRlclwiLFxyXG4gICAgXCJmb3JFYWNoXCIsXHJcbiAgICBcImluZGV4T2ZcIixcclxuICAgIFwiam9pblwiLFxyXG4gICAgXCJsYXN0SW5kZXhPZlwiLFxyXG4gICAgXCJtYXBcIixcclxuICAgIFwicmVkdWNlXCIsXHJcbiAgICBcInJlZHVjZVJpZ2h0XCIsXHJcbiAgICBcInNsaWNlXCIsXHJcbiAgICBcInNvbWVcIixcclxuICAgIFwidG9TdHJpbmdcIixcclxuICAgIFwidG9Mb2NhbGVTdHJpbmdcIlxyXG5dLmZvckVhY2goZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XHJcbiAgICBhcnJheUV4dGVuc2lvbnNbZnVuY05hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcclxuICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xyXG4gICAgICAgIHZhciByZXMgPSBhZG0uZGVoYW5jZVZhbHVlcyhhZG0udmFsdWVzKTtcclxuICAgICAgICByZXR1cm4gcmVzW2Z1bmNOYW1lXS5hcHBseShyZXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59KTtcclxudmFyIGlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24pO1xyXG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHRoaW5nKSAmJiBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKHRoaW5nWyRtb2J4XSk7XHJcbn1cblxudmFyIF9hO1xyXG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xyXG4vLyBqdXN0IGV4dGVuZCBNYXA/IFNlZSBhbHNvIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL25lc3RoYXJ1cy8xM2I0ZDc0ZjJlZjRhMmY0MzU3ZGJkM2ZjMjNjMWU1NFxyXG4vLyBCdXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTU1NlxyXG52YXIgT2JzZXJ2YWJsZU1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVNYXAoaW5pdGlhbERhdGEsIGVuaGFuY2VyLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7IH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKTsgfVxyXG4gICAgICAgIHRoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXNbX2FdID0gT2JzZXJ2YWJsZU1hcE1hcmtlcjtcclxuICAgICAgICB0aGlzLl9rZXlzQXRvbSA9IGNyZWF0ZUF0b20odGhpcy5uYW1lICsgXCIua2V5cygpXCIpO1xyXG4gICAgICAgIHRoaXNbU3ltYm9sLnRvU3RyaW5nVGFnXSA9IFwiTWFwXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4Lm1hcCByZXF1aXJlcyBNYXAgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L21hcC5qc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLl9oYXNNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsRGF0YSk7XHJcbiAgICB9XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5faGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLmhhcyhrZXkpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzKGtleSk7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmICghZW50cnkpIHtcclxuICAgICAgICAgICAgLy8gdG9kbzogcmVwbGFjZSB3aXRoIGF0b20gKGJyZWFraW5nIGNoYW5nZSlcclxuICAgICAgICAgICAgdmFyIG5ld0VudHJ5ID0gKGVudHJ5ID0gbmV3IE9ic2VydmFibGVWYWx1ZSh0aGlzLl9oYXMoa2V5KSwgcmVmZXJlbmNlRW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIj9cIiwgZmFsc2UpKTtcclxuICAgICAgICAgICAgdGhpcy5faGFzTWFwLnNldChrZXksIG5ld0VudHJ5KTtcclxuICAgICAgICAgICAgb25CZWNvbWVVbm9ic2VydmVkKG5ld0VudHJ5LCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5faGFzTWFwLmRlbGV0ZShrZXkpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGhhc0tleSA9IHRoaXMuX2hhcyhrZXkpO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBoYXNLZXkgPyBcInVwZGF0ZVwiIDogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgdmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYXNLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9hZGRWYWx1ZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faGFzKGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHRoaXMuX2RhdGEuZ2V0KGtleSkudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNoYW5nZSksIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkoa2V5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IF90aGlzLl9kYXRhLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2RhdGEuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX3VwZGF0ZUhhc01hcEVudHJ5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnNldE5ld1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XHJcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fYWRkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5fa2V5c0F0b20pO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBfdGhpcy5lbmhhbmNlciwgX3RoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSksIGZhbHNlKTtcclxuICAgICAgICAgICAgX3RoaXMuX2RhdGEuc2V0KGtleSwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gdmFsdWUgbWlnaHQgaGF2ZSBiZWVuIGNoYW5nZWRcclxuICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhcyhrZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodGhpcy5fZGF0YS5nZXQoa2V5KS5nZXQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2tleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcclxuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGtleXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmdldChrZXlzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIGtleXMgPSBBcnJheS5mcm9tKHRoaXMua2V5cygpKTtcclxuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbmRleCA8IGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbbmV4dEluZGV4KytdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBba2V5LCBzZWxmLmdldChrZXkpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGVbKF9hID0gJG1vYngsIFN5bWJvbC5pdGVyYXRvcildID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgdmFyIGVfMSwgX2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9lID0gX19yZWFkKF9kLnZhbHVlLCAyKSwga2V5ID0gX2VbMF0sIHZhbHVlID0gX2VbMV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKiogTWVyZ2UgYW5vdGhlciBvYmplY3QgaW50byB0aGlzIG9iamVjdCwgcmV0dXJucyB0aGlzLiAqL1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAob3RoZXIpKSB7XHJcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KG90aGVyKSlcclxuICAgICAgICAgICAgICAgIGdldFBsYWluT2JqZWN0S2V5cyhvdGhlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBfdGhpcy5zZXQoa2V5LCBvdGhlcltrZXldKTsgfSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKVxyXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBfX3JlYWQoX2IsIDIpLCBrZXkgPSBfY1swXSwgdmFsdWUgPSBfY1sxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2TWFwKG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLmNvbnN0cnVjdG9yICE9PSBNYXApXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIGZyb20gY2xhc3NlcyB0aGF0IGluaGVyaXQgZnJvbSBNYXA6IFwiICsgb3RoZXIuY29uc3RydWN0b3IubmFtZSk7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIG1hcCBmcm9tIFwiICsgb3RoZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVfMiwgX2I7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoX3RoaXMua2V5cygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gZ3JhYiBhbGwgdGhlIGtleXMgdGhhdCBhcmUgcHJlc2VudCBpbiB0aGUgbmV3IG1hcCBidXQgbm90IHByZXNlbnQgaW4gdGhlIGN1cnJlbnQgbWFwXHJcbiAgICAgICAgICAgIC8vIGFuZCBkZWxldGUgdGhlbSBmcm9tIHRoZSBtYXAsIHRoZW4gbWVyZ2UgdGhlIG5ldyBtYXBcclxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGNhdXNlIHJlYWN0aW9ucyBvbmx5IG9uIGNoYW5nZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIHZhciBuZXdLZXlzID0gZ2V0TWFwTGlrZUtleXModmFsdWVzKTtcclxuICAgICAgICAgICAgdmFyIG9sZEtleXMgPSBBcnJheS5mcm9tKF90aGlzLmtleXMoKSk7XHJcbiAgICAgICAgICAgIHZhciBtaXNzaW5nS2V5cyA9IG9sZEtleXMuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBuZXdLZXlzLmluZGV4T2YoaykgPT09IC0xOyB9KTtcclxuICAgICAgICAgICAgbWlzc2luZ0tleXMuZm9yRWFjaChmdW5jdGlvbiAoaykgeyByZXR1cm4gX3RoaXMuZGVsZXRlKGspOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMubWVyZ2UodmFsdWVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwbGFpbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoaXMgbWFwLlxyXG4gICAgICogTm90ZSB0aGF0IGFsbCB0aGUga2V5cyBiZWluZyBzdHJpbmdpZmllZC5cclxuICAgICAqIElmIHRoZXJlIGFyZSBkdXBsaWNhdGluZyBrZXlzIGFmdGVyIGNvbnZlcnRpbmcgdGhlbSB0byBzdHJpbmdzLCBiZWhhdmlvdXIgaXMgdW5kZXRlcm1pbmVkLlxyXG4gICAgICovXHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b1BPSk8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVfMywgX2I7XHJcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfZSA9IF9fcmVhZChfZC52YWx1ZSwgMiksIGtleSA9IF9lWzBdLCB2YWx1ZSA9IF9lWzFdO1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgbGllIGFib3V0IHN5bWJvbCBrZXkgdHlwZXMgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTg2M1xyXG4gICAgICAgICAgICAgICAgcmVzW3R5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBzdHJpbmdpZnlLZXkoa2V5KV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IG5vbiBvYnNlcnZhYmxlIG9iamVjdCBjbG9uZSBvZiB0aGlzIG1hcC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgdmFsdWVzIG1pZ3RoIHN0aWxsIGJlIG9ic2VydmFibGUuIEZvciBhIGRlZXAgY2xvbmUgdXNlIG1vYngudG9KUy5cclxuICAgICAqL1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hcCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvUE9KTygpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm5hbWUgK1xyXG4gICAgICAgICAgICBcIlt7IFwiICtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmtleXMoKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gc3RyaW5naWZ5S2V5KGtleSkgKyBcIjogXCIgKyAoXCJcIiArIF90aGlzLmdldChrZXkpKTsgfSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIikgK1xyXG4gICAgICAgICAgICBcIiB9XVwiKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxyXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxyXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcclxuICAgICAqL1xyXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIG1hcHMuXCIpO1xyXG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlTWFwO1xyXG59KCkpO1xyXG4vKiAndmFyJyBmaXhlcyBzbWFsbC1idWlsZCBpc3N1ZSAqL1xyXG52YXIgaXNPYnNlcnZhYmxlTWFwID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVNYXBcIiwgT2JzZXJ2YWJsZU1hcCk7XG5cbnZhciBfYSQxO1xyXG52YXIgT2JzZXJ2YWJsZVNldE1hcmtlciA9IHt9O1xyXG52YXIgT2JzZXJ2YWJsZVNldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVTZXQoaW5pdGlhbERhdGEsIGVuaGFuY2VyLCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7IH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVTZXRAXCIgKyBnZXROZXh0SWQoKTsgfVxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpc1tfYSQxXSA9IE9ic2VydmFibGVTZXRNYXJrZXI7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLl9hdG9tID0gY3JlYXRlQXRvbSh0aGlzLm5hbWUpO1xyXG4gICAgICAgIHRoaXNbU3ltYm9sLnRvU3RyaW5nVGFnXSA9IFwiU2V0XCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBTZXQgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LnNldCByZXF1aXJlcyBTZXQgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L3NldC5qc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lKTsgfTtcclxuICAgICAgICBpZiAoaW5pdGlhbERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKGluaXRpYWxEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVfMSwgX2I7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoX3RoaXMuX2RhdGEudmFsdWVzKCkpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9kLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFja0ZuLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgdmFyIGVfMiwgX2I7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyh0aGlzKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX2QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuLmNhbGwodGhpc0FyZywgdmFsdWUsIHZhbHVlLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNpemU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuX2F0b20pO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBpZGVhbGx5LCB2YWx1ZSA9IGNoYW5nZS52YWx1ZSB3b3VsZCBiZSBkb25lIGhlcmUsIHNvIHRoYXQgdmFsdWVzIGNhbiBiZVxyXG4gICAgICAgICAgICAvLyBjaGFuZ2VkIGJ5IGludGVyY2VwdG9yLiBTYW1lIGFwcGxpZXMgZm9yIG90aGVyIFNldCBhbmQgTWFwIGFwaSdzLlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5hZGQoX3RoaXMuZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2F0b20ucmVwb3J0Q2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5kZWxldGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXModGhpcy5kZWhhbmNlVmFsdWUodmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLmtleXMoKSk7XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IG5leHRJbmRleDtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgdmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgID8geyB2YWx1ZTogW2tleXNbaW5kZXhdLCB2YWx1ZXNbaW5kZXhdXSwgZG9uZTogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9hdG9tLnJlcG9ydE9ic2VydmVkKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBvYnNlcnZhYmxlVmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLl9kYXRhLnZhbHVlcygpKTtcclxuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IG9ic2VydmFibGVWYWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZShvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHsgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvdGhlcikpIHtcclxuICAgICAgICAgICAgb3RoZXIgPSBvdGhlci50b0pTKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIF90aGlzLmFkZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2U2V0KG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKFwiQ2Fubm90IGluaXRpYWxpemUgc2V0IGZyb20gXCIgKyBvdGhlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAvLyBUT0RPICdmaXJlSW1tZWRpYXRlbHknIGNhbiBiZSB0cnVlP1xyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBpbnZhcmlhbnQoZmlyZUltbWVkaWF0ZWx5ICE9PSB0cnVlLCBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgZmlyZUltbWVkaWF0ZWx5PXRydWUgaW4gY29tYmluYXRpb24gd2l0aCBzZXRzLlwiKTtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIlsgXCIgKyBBcnJheS5mcm9tKHRoaXMpLmpvaW4oXCIsIFwiKSArIFwiIF1cIjtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZVsoX2EkMSA9ICRtb2J4LCBTeW1ib2wuaXRlcmF0b3IpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVNldDtcclxufSgpKTtcclxudmFyIGlzT2JzZXJ2YWJsZVNldCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQpO1xuXG52YXIgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgdmFsdWVzLCBuYW1lLCBkZWZhdWx0RW5oYW5jZXIpIHtcclxuICAgICAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHsgdmFsdWVzID0gbmV3IE1hcCgpOyB9XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRFbmhhbmNlciA9IGRlZmF1bHRFbmhhbmNlcjtcclxuICAgICAgICB0aGlzLmtleXNBdG9tID0gbmV3IEF0b20obmFtZSArIFwiLmtleXNcIik7XHJcbiAgICB9XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmdldChrZXkpLmdldCgpO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMudGFyZ2V0O1xyXG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmFibGUuc2V0KG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbnRlcmNlcHRcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCBpbnN0YW5jZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAvLyBub3RpZnkgc3B5ICYgb2JzZXJ2ZXJzXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xyXG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgbWFwID0gdGhpcy5wZW5kaW5nS2V5cyB8fCAodGhpcy5wZW5kaW5nS2V5cyA9IG5ldyBNYXAoKSk7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gbWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZXhpc3RzID0gISF0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgLy8gUG9zc2libGUgb3B0aW1pemF0aW9uOiBEb24ndCBoYXZlIGEgc2VwYXJhdGUgbWFwIGZvciBub24gZXhpc3Rpbmcga2V5cyxcclxuICAgICAgICAgICAgLy8gYnV0IHN0b3JlIHRoZW0gaW4gdGhlIHZhbHVlcyBtYXAgaW5zdGVhZCwgdXNpbmcgYSBzcGVjaWFsIHN5bWJvbCB0byBkZW5vdGUgXCJub3QgZXhpc3RpbmdcIlxyXG4gICAgICAgICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZXhpc3RzLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBlbnRyeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTsgLy8gcmVhZCB0byBzdWJzY3JpYmVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5hZGRPYnNlcnZhYmxlUHJvcCA9IGZ1bmN0aW9uIChwcm9wTmFtZSwgbmV3VmFsdWUsIGVuaGFuY2VyKSB7XHJcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSB0aGlzLmRlZmF1bHRFbmhhbmNlcjsgfVxyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICBhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZSh0YXJnZXQsIHByb3BOYW1lKTtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHByb3BOYW1lLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIGVuaGFuY2VyLCB0aGlzLm5hbWUgKyBcIi5cIiArIHN0cmluZ2lmeUtleShwcm9wTmFtZSksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG9ic2VydmFibGUpO1xyXG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZTsgLy8gb2JzZXJ2YWJsZVZhbHVlIG1pZ2h0IGhhdmUgY2hhbmdlZCBpdFxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BOYW1lLCBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnKHByb3BOYW1lKSk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKHByb3BOYW1lLCBuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5hZGRDb21wdXRlZFByb3AgPSBmdW5jdGlvbiAocHJvcGVydHlPd25lciwgLy8gd2hlcmUgaXMgdGhlIHByb3BlcnR5IGRlY2xhcmVkP1xyXG4gICAgcHJvcE5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KHByb3BOYW1lKTtcclxuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG5ldyBDb21wdXRlZFZhbHVlKG9wdGlvbnMpKTtcclxuICAgICAgICBpZiAocHJvcGVydHlPd25lciA9PT0gdGFyZ2V0IHx8IGlzUHJvcGVydHlDb25maWd1cmFibGUocHJvcGVydHlPd25lciwgcHJvcE5hbWUpKVxyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcGVydHlPd25lciwgcHJvcE5hbWUsIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnKHByb3BOYW1lKSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlcy5oYXMoa2V5KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzdGFydEJhdGNoKCk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcclxuICAgICAgICAgICAgdmFyIG9sZE9ic2VydmFibGUgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkT2JzZXJ2YWJsZSAmJiBvbGRPYnNlcnZhYmxlLmdldCgpO1xyXG4gICAgICAgICAgICBvbGRPYnNlcnZhYmxlICYmIG9sZE9ic2VydmFibGUuc2V0KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIC8vIG5vdGlmeSBrZXkgYW5kIGtleXNldCBsaXN0ZW5lcnNcclxuICAgICAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nS2V5cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5cy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgcHJvcFxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy50YXJnZXRba2V5XTtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNoYW5nZSksIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XHJcbiAgICAgICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcclxuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaWxsZWdhbEFjY2VzcyA9IGZ1bmN0aW9uIChvd25lciwgcHJvcE5hbWUpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGhhcHBlbnMgaWYgYSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZCB0aHJvdWdoIHRoZSBwcm90b3R5cGUgY2hhaW4sIGJ1dCB0aGUgcHJvcGVydHkgd2FzXHJcbiAgICAgICAgICogZGVjbGFyZWQgZGlyZWN0bHkgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBwcm90b3R5cGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBFLmcuOlxyXG4gICAgICAgICAqIGNsYXNzIEEge1xyXG4gICAgICAgICAqIH1cclxuICAgICAgICAgKiBleHRlbmRPYnNlcnZhYmxlKEEucHJvdG90eXBlLCB7IHg6IDEgfSlcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIGNsYXNzQiBleHRlbnMgQSB7XHJcbiAgICAgICAgICogfVxyXG4gICAgICAgICAqIGNvbnNvbGUubG9nKG5ldyBCKCkueClcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEl0IGlzIHVuY2xlYXIgd2hldGhlciB0aGUgcHJvcGVydHkgc2hvdWxkIGJlIGNvbnNpZGVyZWQgJ3N0YXRpYycgb3IgaW5oZXJpdGVkLlxyXG4gICAgICAgICAqIEVpdGhlciB1c2UgYGNvbnNvbGUubG9nKEEueClgXHJcbiAgICAgICAgICogb3I6IGRlY29yYXRlKEEsIHsgeDogb2JzZXJ2YWJsZSB9KVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogV2hlbiB1c2luZyBkZWNvcmF0ZSwgdGhlIHByb3BlcnR5IHdpbGwgYWx3YXlzIGJlIHJlZGVjbGFyZWQgYXMgb3duIHByb3BlcnR5IG9uIHRoZSBhY3R1YWwgaW5zdGFuY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zb2xlLndhcm4oXCJQcm9wZXJ0eSAnXCIgKyBwcm9wTmFtZSArIFwiJyBvZiAnXCIgKyBvd25lciArIFwiJyB3YXMgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJvdG90eXBlIGNoYWluLiBVc2UgJ2RlY29yYXRlJyBpbnN0ZWFkIHRvIGRlY2xhcmUgdGhlIHByb3Agb3IgYWNjZXNzIGl0IHN0YXRpY2FsbHkgdGhyb3VnaCBpdCdzIG93bmVyXCIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXHJcbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXHJcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xyXG4gICAgICovXHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxyXG4gICAgICAgICAgICBpbnZhcmlhbnQoZmlyZUltbWVkaWF0ZWx5ICE9PSB0cnVlLCBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgdGhlIGZpcmUgaW1tZWRpYXRlbHkgcHJvcGVydHkgZm9yIG9ic2VydmFibGUgb2JqZWN0cy5cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeVByb3BlcnR5QWRkaXRpb24gPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XHJcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xyXG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcclxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0aGlzLnRhcmdldCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcclxuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoX19hc3NpZ24oX19hc3NpZ24oe30sIGNoYW5nZSksIHsgbmFtZTogdGhpcy5uYW1lLCBrZXk6IGtleSB9KSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeSlcclxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XHJcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMucGVuZGluZ0tleXMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeSlcclxuICAgICAgICAgICAgICAgIGVudHJ5LnNldCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5nZXRLZXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlXzEsIF9hO1xyXG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcclxuICAgICAgICAvLyByZXR1cm4gUmVmbGVjdC5vd25LZXlzKHRoaXMudmFsdWVzKSBhcyBhbnlcclxuICAgICAgICB2YXIgcmVzID0gW107XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLnZhbHVlcyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIGtleSA9IF9kWzBdLCB2YWx1ZSA9IF9kWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbjtcclxufSgpKTtcclxuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XHJcbiAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlwiOyB9XHJcbiAgICBpZiAoZGVmYXVsdEVuaGFuY2VyID09PSB2b2lkIDApIHsgZGVmYXVsdEVuaGFuY2VyID0gZGVlcEVuaGFuY2VyOyB9XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgJG1vYngpKVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgaW52YXJpYW50KE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KSwgXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodGFyZ2V0KSlcclxuICAgICAgICBuYW1lID0gKHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lIHx8IFwiT2JzZXJ2YWJsZU9iamVjdFwiKSArIFwiQFwiICsgZ2V0TmV4dElkKCk7XHJcbiAgICBpZiAoIW5hbWUpXHJcbiAgICAgICAgbmFtZSA9IFwiT2JzZXJ2YWJsZU9iamVjdEBcIiArIGdldE5leHRJZCgpO1xyXG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0LCBuZXcgTWFwKCksIHN0cmluZ2lmeUtleShuYW1lKSwgZGVmYXVsdEVuaGFuY2VyKTtcclxuICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCAkbW9ieCwgYWRtKTtcclxuICAgIHJldHVybiBhZG07XHJcbn1cclxudmFyIG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG52YXIgY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU9ic2VydmFibGVQcm9wQ29uZmlnKHByb3BOYW1lKSB7XHJcbiAgICByZXR1cm4gKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XHJcbiAgICAgICAgKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLnJlYWQocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzWyRtb2J4XS53cml0ZShwcm9wTmFtZSwgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcihvd25lcikge1xyXG4gICAgdmFyIGFkbSA9IG93bmVyWyRtb2J4XTtcclxuICAgIGlmICghYWRtKSB7XHJcbiAgICAgICAgLy8gYmVjYXVzZSBjb21wdXRlZCBwcm9wcyBhcmUgZGVjbGFyZWQgb24gcHJvdHksXHJcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgaW5zdGFuY2UgbWlnaHQgbm90IGhhdmUgYmVlbiBpbml0aWFsaXplZCB5ZXRcclxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2Uob3duZXIpO1xyXG4gICAgICAgIHJldHVybiBvd25lclskbW9ieF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRtO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29tcHV0ZWRQcm9wQ29uZmlnKHByb3BOYW1lKSB7XHJcbiAgICByZXR1cm4gKGNvbXB1dGVkUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSB8fFxyXG4gICAgICAgIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuY29tcHV0ZWRDb25maWd1cmFibGUsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbkZvckNvbXB1dGVkUHJvcE93bmVyKHRoaXMpLnJlYWQocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICBnZXRBZG1pbmlzdHJhdGlvbkZvckNvbXB1dGVkUHJvcE93bmVyKHRoaXMpLndyaXRlKHByb3BOYW1lLCB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxufVxyXG52YXIgaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uXCIsIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbik7XHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykge1xyXG4gICAgaWYgKGlzT2JqZWN0KHRoaW5nKSkge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cclxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xyXG4gICAgICAgIHJldHVybiBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XG5cbmZ1bmN0aW9uIGdldEF0b20odGhpbmcsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcIm9iamVjdFwiICYmIHRoaW5nICE9PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSkge1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdLmF0b207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQodGhpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpKSB7XHJcbiAgICAgICAgICAgIHZhciBhbnlUaGluZyA9IHRoaW5nO1xyXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbnlUaGluZy5fa2V5c0F0b207XHJcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gYW55VGhpbmcuX2RhdGEuZ2V0KHByb3BlcnR5KSB8fCBhbnlUaGluZy5faGFzTWFwLmdldChwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSlcclxuICAgICAgICAgICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aGUgZW50cnkgJ1wiICsgcHJvcGVydHkgKyBcIicgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9ic2VydmFibGUgbWFwICdcIiArIGdldERlYnVnTmFtZSh0aGluZykgKyBcIidcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXHJcbiAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaW5nKTtcclxuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4XSlcclxuICAgICAgICAgICAgdGhpbmdbcHJvcGVydHldOyAvLyBTZWUgIzEwNzJcclxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xyXG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwicGxlYXNlIHNwZWNpZnkgYSBwcm9wZXJ0eVwiKTtcclxuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGluZ1skbW9ieF0udmFsdWVzLmdldChwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSlcclxuICAgICAgICAgICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgXCJubyBvYnNlcnZhYmxlIHByb3BlcnR5ICdcIiArIHByb3BlcnR5ICsgXCInIGZvdW5kIG9uIHRoZSBvYnNlcnZhYmxlIG9iamVjdCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBpZiAoaXNSZWFjdGlvbih0aGluZ1skbW9ieF0pKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAoIXRoaW5nKVxyXG4gICAgICAgIGZhaWwoXCJFeHBlY3Rpbmcgc29tZSBvYmplY3RcIik7XHJcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcclxuICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpXHJcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xyXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcclxuICAgICAgICByZXR1cm4gdGhpbmc7XHJcbiAgICAvLyBJbml0aWFsaXplcnMgcnVuIGxhemlseSB3aGVuIHRyYW5zcGlsaW5nIHRvIGJhYmVsLCBzbyBtYWtlIHN1cmUgdGhleSBhcmUgcnVuLi4uXHJcbiAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xyXG4gICAgaWYgKHRoaW5nWyRtb2J4XSlcclxuICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xyXG4gICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xyXG4gICAgdmFyIG5hbWVkO1xyXG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSk7XHJcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcclxuICAgICAgICBuYW1lZCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcpOyAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcclxuICAgIHJldHVybiBuYW1lZC5uYW1lO1xyXG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiLCBkZXB0aCkge1xyXG4gICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHsgZGVwdGggPSAtMTsgfVxyXG4gICAgcmV0dXJuIGVxKGEsIGIsIGRlcHRoKTtcclxufVxyXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcclxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cclxuZnVuY3Rpb24gZXEoYSwgYiwgZGVwdGgsIGFTdGFjaywgYlN0YWNrKSB7XHJcbiAgICAvLyBJZGVudGljYWwgb2JqZWN0cyBhcmUgZXF1YWwuIGAwID09PSAtMGAsIGJ1dCB0aGV5IGFyZW4ndCBpZGVudGljYWwuXHJcbiAgICAvLyBTZWUgdGhlIFtIYXJtb255IGBlZ2FsYCBwcm9wb3NhbF0oaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsKS5cclxuICAgIGlmIChhID09PSBiKVxyXG4gICAgICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcclxuICAgIC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxyXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cclxuICAgIGlmIChhICE9PSBhKVxyXG4gICAgICAgIHJldHVybiBiICE9PSBiO1xyXG4gICAgLy8gRXhoYXVzdCBwcmltaXRpdmUgY2hlY2tzXHJcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xyXG4gICAgaWYgKHR5cGUgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBiICE9IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cclxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xyXG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFJlZ0V4cF1cIjpcclxuICAgICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN0cmluZ11cIjpcclxuICAgICAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcclxuICAgICAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGEgPT09IFwiXCIgKyBiO1xyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcclxuICAgICAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cclxuICAgICAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXHJcbiAgICAgICAgICAgIGlmICgrYSAhPT0gK2EpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gK2IgIT09ICtiO1xyXG4gICAgICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgQm9vbGVhbl1cIjpcclxuICAgICAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxyXG4gICAgICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXHJcbiAgICAgICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cclxuICAgICAgICAgICAgcmV0dXJuICthID09PSArYjtcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wudmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2wudmFsdWVPZi5jYWxsKGIpKTtcclxuICAgICAgICBjYXNlIFwiW29iamVjdCBNYXBdXCI6XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgU2V0XVwiOlxyXG4gICAgICAgICAgICAvLyBNYXBzIGFuZCBTZXRzIGFyZSB1bndyYXBwZWQgdG8gYXJyYXlzIG9mIGVudHJ5LXBhaXJzLCBhZGRpbmcgYW4gaW5jaWRlbnRhbCBsZXZlbC5cclxuICAgICAgICAgICAgLy8gSGlkZSB0aGlzIGV4dHJhIGxldmVsIGJ5IGluY3JlYXNpbmcgdGhlIGRlcHRoLlxyXG4gICAgICAgICAgICBpZiAoZGVwdGggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxyXG4gICAgYSA9IHVud3JhcChhKTtcclxuICAgIGIgPSB1bndyYXAoYik7XHJcbiAgICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcbiAgICBpZiAoIWFyZUFycmF5cykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYSAhPSBcIm9iamVjdFwiIHx8IHR5cGVvZiBiICE9IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcclxuICAgICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxyXG4gICAgICAgIHZhciBhQ3RvciA9IGEuY29uc3RydWN0b3IsIGJDdG9yID0gYi5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmXHJcbiAgICAgICAgICAgICEodHlwZW9mIGFDdG9yID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgIGFDdG9yIGluc3RhbmNlb2YgYUN0b3IgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBiQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSAmJlxyXG4gICAgICAgICAgICAoXCJjb25zdHJ1Y3RvclwiIGluIGEgJiYgXCJjb25zdHJ1Y3RvclwiIGluIGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGVwdGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZXB0aCA8IDApIHtcclxuICAgICAgICBkZXB0aCA9IC0xO1xyXG4gICAgfVxyXG4gICAgLy8gQXNzdW1lIGVxdWFsaXR5IGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhlIGFsZ29yaXRobSBmb3IgZGV0ZWN0aW5nIGN5Y2xpY1xyXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXHJcbiAgICAvLyBJbml0aWFsaXppbmcgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXHJcbiAgICAvLyBJdCdzIGRvbmUgaGVyZSBzaW5jZSB3ZSBvbmx5IG5lZWQgdGhlbSBmb3Igb2JqZWN0cyBhbmQgYXJyYXlzIGNvbXBhcmlzb24uXHJcbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XHJcbiAgICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XHJcbiAgICB2YXIgbGVuZ3RoID0gYVN0YWNrLmxlbmd0aDtcclxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xyXG4gICAgICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxyXG4gICAgICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cclxuICAgICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpXHJcbiAgICAgICAgICAgIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcclxuICAgIH1cclxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cclxuICAgIGFTdGFjay5wdXNoKGEpO1xyXG4gICAgYlN0YWNrLnB1c2goYik7XHJcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cclxuICAgIGlmIChhcmVBcnJheXMpIHtcclxuICAgICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cclxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghZXEoYVtsZW5ndGhdLCBiW2xlbmd0aF0sIGRlcHRoIC0gMSwgYVN0YWNrLCBiU3RhY2spKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxyXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgICAgICAgdmFyIGtleSA9IHZvaWQgMDtcclxuICAgICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICAgICAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcyBiZWZvcmUgY29tcGFyaW5nIGRlZXAgZXF1YWxpdHkuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxyXG4gICAgICAgICAgICBrZXkgPSBrZXlzW2xlbmd0aF07XHJcbiAgICAgICAgICAgIGlmICghKGhhcyQxKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGRlcHRoIC0gMSwgYVN0YWNrLCBiU3RhY2spKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cclxuICAgIGFTdGFjay5wb3AoKTtcclxuICAgIGJTdGFjay5wb3AoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIHVud3JhcChhKSB7XHJcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoYSkpXHJcbiAgICAgICAgcmV0dXJuIGEuc2xpY2UoKTtcclxuICAgIGlmIChpc0VTNk1hcChhKSB8fCBpc09ic2VydmFibGVNYXAoYSkpXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xyXG4gICAgaWYgKGlzRVM2U2V0KGEpIHx8IGlzT2JzZXJ2YWJsZVNldChhKSlcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhLmVudHJpZXMoKSk7XHJcbiAgICByZXR1cm4gYTtcclxufVxyXG5mdW5jdGlvbiBoYXMkMShhLCBrZXkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcclxufVxuXG5mdW5jdGlvbiBtYWtlSXRlcmFibGUoaXRlcmF0b3IpIHtcclxuICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBnZXRTZWxmO1xyXG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNlbGYoKSB7XHJcbiAgICByZXR1cm4gdGhpcztcclxufVxuXG4vKlxyXG5UaGUgb25seSByZWFzb24gZm9yIHRoaXMgZmlsZSB0byBleGlzdCBpcyBwdXJlIGhvcnJvcjpcclxuV2l0aG91dCBpdCByb2xsdXAgY2FuIG1ha2UgdGhlIGJ1bmRsaW5nIGZhaWwgYXQgYW55IHBvaW50IGluIHRpbWU7IHdoZW4gaXQgcm9sbHMgdXAgdGhlIGZpbGVzIGluIHRoZSB3cm9uZyBvcmRlclxyXG5pdCB3aWxsIGNhdXNlIHVuZGVmaW5lZCBlcnJvcnMgKGZvciBleGFtcGxlIGJlY2F1c2Ugc3VwZXIgY2xhc3NlcyBvciBsb2NhbCB2YXJpYWJsZXMgbm90IGJlaW5nIGhvaXN0ZWQpLlxyXG5XaXRoIHRoaXMgZmlsZSB0aGF0IHdpbGwgc3RpbGwgaGFwcGVuLFxyXG5idXQgYXQgbGVhc3QgaW4gdGhpcyBmaWxlIHdlIGNhbiBtYWdpY2FsbHkgcmVvcmRlciB0aGUgaW1wb3J0cyB3aXRoIHRyaWFsIGFuZCBlcnJvciB1bnRpbCB0aGUgYnVpbGQgc3VjY2VlZHMgYWdhaW4uXHJcbiovXG5cbi8qKlxyXG4gKiAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMThcclxuICogTUlUIExpY2Vuc2VkXHJcbiAqXHJcbiAqIFdlbGNvbWUgdG8gdGhlIG1vYnggc291cmNlcyEgVG8gZ2V0IGFuIGdsb2JhbCBvdmVydmlldyBvZiBob3cgTW9iWCBpbnRlcm5hbGx5IHdvcmtzLFxyXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcclxuICogaHR0cHM6Ly9tZWRpdW0uY29tL0Btd2VzdHN0cmF0ZS9iZWNvbWluZy1mdWxseS1yZWFjdGl2ZS1hbi1pbi1kZXB0aC1leHBsYW5hdGlvbi1vZi1tb2JzZXJ2YWJsZS01NTk5NTI2MmEyNTQjLnh2Ymg2cWQ3NFxyXG4gKlxyXG4gKiBTb3VyY2UgZm9sZGVyczpcclxuICogPT09PT09PT09PT09PT09XHJcbiAqXHJcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cclxuICogLSBjb3JlLyAgICBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgTW9iWCBhbGdvcml0aG07IGF0b21zLCBkZXJpdmF0aW9ucywgcmVhY3Rpb25zLCBkZXBlbmRlbmN5IHRyZWVzLCBvcHRpbWl6YXRpb25zLiBDb29sIHN0dWZmIGNhbiBiZSBmb3VuZCBoZXJlLlxyXG4gKiAtIHR5cGVzLyAgIEFsbCB0aGUgbWFnaWMgdGhhdCBpcyBuZWVkIHRvIGhhdmUgb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIHZhbHVlcyBpcyBpbiB0aGlzIGZvbGRlci4gSW5jbHVkaW5nIHRoZSBtb2RpZmllcnMgbGlrZSBgYXNGbGF0YC5cclxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxyXG4gKlxyXG4gKi9cclxuaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9iWCA1KyByZXF1aXJlcyBQcm94eSBhbmQgU3ltYm9sIG9iamVjdHMuIElmIHlvdXIgZW52aXJvbm1lbnQgZG9lc24ndCBzdXBwb3J0IFN5bWJvbCBvciBQcm94eSBvYmplY3RzLCBwbGVhc2UgZG93bmdyYWRlIHRvIE1vYlggNC4gRm9yIFJlYWN0IE5hdGl2ZSBBbmRyb2lkLCBjb25zaWRlciB1cGdyYWRpbmcgSlNDb3JlLlwiKTtcclxufVxyXG50cnkge1xyXG4gICAgLy8gZGVmaW5lIHByb2Nlc3MuZW52IGlmIG5lZWRlZFxyXG4gICAgLy8gaWYgdGhpcyBpcyBub3QgYSBwcm9kdWN0aW9uIGJ1aWxkIGluIHRoZSBmaXJzdCBwbGFjZVxyXG4gICAgLy8gKGluIHdoaWNoIGNhc2UgdGhlIGV4cHJlc3Npb24gYmVsb3cgd291bGQgYmUgc3Vic3RpdHV0ZWQgd2l0aCAncHJvZHVjdGlvbicpXHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOVjtcclxufVxyXG5jYXRjaCAoZSkge1xyXG4gICAgdmFyIGcgPSBnZXRHbG9iYWwoKTtcclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICBnLnByb2Nlc3MgPSB7fTtcclxuICAgIGcucHJvY2Vzcy5lbnYgPSB7fTtcclxufVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gdGVzdENvZGVNaW5pZmljYXRpb24oKSB7IH1cclxuICAgIGlmICh0ZXN0Q29kZU1pbmlmaWNhdGlvbi5uYW1lICE9PSBcInRlc3RDb2RlTWluaWZpY2F0aW9uXCIgJiZcclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcclxuICAgICAgICB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuSUdOT1JFX01PQlhfTUlOSUZZX1dBUk5JTkcgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgLy8gdHJpY2sgc28gaXQgZG9lc24ndCBnZXQgcmVwbGFjZWRcclxuICAgICAgICB2YXIgdmFyTmFtZSA9IFtcInByb2Nlc3NcIiwgXCJlbnZcIiwgXCJOT0RFX0VOVlwiXS5qb2luKFwiLlwiKTtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0geW91IGFyZSBydW5uaW5nIGEgbWluaWZpZWQgYnVpbGQsIGJ1dCAnXCIgKyB2YXJOYW1lICsgXCInIHdhcyBub3Qgc2V0IHRvICdwcm9kdWN0aW9uJyBpbiB5b3VyIGJ1bmRsZXIuIFRoaXMgcmVzdWx0cyBpbiBhbiB1bm5lY2Vzc2FyaWx5IGxhcmdlIGFuZCBzbG93IGJ1bmRsZVwiKTtcclxuICAgIH1cclxufSkoKTtcclxuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xyXG4gICAgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0TW9ieCh7XHJcbiAgICAgICAgc3B5OiBzcHksXHJcbiAgICAgICAgZXh0cmFzOiB7XHJcbiAgICAgICAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkbW9ieDogJG1vYnhcclxuICAgIH0pO1xyXG59XG5cbmV4cG9ydCB7ICRtb2J4LCBGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIElEZXJpdmF0aW9uU3RhdGUsIE9ic2VydmFibGVNYXAsIE9ic2VydmFibGVTZXQsIFJlYWN0aW9uLCBhbGxvd1N0YXRlQ2hhbmdlcyBhcyBfYWxsb3dTdGF0ZUNoYW5nZXMsIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQgYXMgX2FsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQsIGFsbG93U3RhdGVSZWFkc0VuZCBhcyBfYWxsb3dTdGF0ZVJlYWRzRW5kLCBhbGxvd1N0YXRlUmVhZHNTdGFydCBhcyBfYWxsb3dTdGF0ZVJlYWRzU3RhcnQsIF9lbmRBY3Rpb24sIGdldEFkbWluaXN0cmF0aW9uIGFzIF9nZXRBZG1pbmlzdHJhdGlvbiwgZ2V0R2xvYmFsU3RhdGUgYXMgX2dldEdsb2JhbFN0YXRlLCBpbnRlcmNlcHRSZWFkcyBhcyBfaW50ZXJjZXB0UmVhZHMsIGlzQ29tcHV0aW5nRGVyaXZhdGlvbiBhcyBfaXNDb21wdXRpbmdEZXJpdmF0aW9uLCByZXNldEdsb2JhbFN0YXRlIGFzIF9yZXNldEdsb2JhbFN0YXRlLCBfc3RhcnRBY3Rpb24sIGFjdGlvbiwgYXV0b3J1biwgY29tcGFyZXIsIGNvbXB1dGVkLCBjb25maWd1cmUsIGNyZWF0ZUF0b20sIGRlY29yYXRlLCBlbnRyaWVzLCBleHRlbmRPYnNlcnZhYmxlLCBmbG93LCBnZXQsIGdldEF0b20sIGdldERlYnVnTmFtZSwgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldE9ic2VydmVyVHJlZSwgaGFzLCBpbnRlcmNlcHQsIGlzQWN0aW9uLCBpc0FycmF5TGlrZSwgaXNPYnNlcnZhYmxlVmFsdWUgYXMgaXNCb3hlZE9ic2VydmFibGUsIGlzQ29tcHV0ZWQsIGlzQ29tcHV0ZWRQcm9wLCBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvciwgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVByb3AsIGlzT2JzZXJ2YWJsZVNldCwga2V5cywgb2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgb25CZWNvbWVPYnNlcnZlZCwgb25CZWNvbWVVbm9ic2VydmVkLCBvblJlYWN0aW9uRXJyb3IsIHJlYWN0aW9uLCByZW1vdmUsIHJ1bkluQWN0aW9uLCBzZXQsIHNweSwgdG9KUywgdHJhY2UsIHRyYW5zYWN0aW9uLCB1bnRyYWNrZWQsIHZhbHVlcywgd2hlbiB9O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhdXRvcnVuLCB3aGVuLCByZWFjdGlvbiwgYWN0aW9uIH0gZnJvbSBcIm1vYnhcIlxyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gICAgQG9ic2VydmFibGUgbnVtID0gMjJcclxuICAgIEBvYnNlcnZhYmxlIHN0ciA9IFwic3RyaW5nXCJcclxuICAgIEBvYnNlcnZhYmxlIGJvb2wgPSBmYWxzZVxyXG4gICAgQG9ic2VydmFibGUgb2JqID0ge1xyXG4gICAgICAgIG5hbWU6IFwidGFuXCIsXHJcbiAgICAgICAgYWdlOiAxMlxyXG4gICAgfVxyXG4gICAgQG9ic2VydmFibGUgYXJyYXkgPSBbXVxyXG5cclxuICAgIEBjb21wdXRlZCBnZXQgbWl4ZWQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmouYWdlICsgXCItLS0tLVwiICsgdGhpcy5zdHJcclxuICAgIH1cclxuXHJcbiAgICBAYWN0aW9uIGJhcigpe1xyXG4gICAgICAgIHRoaXMuc3RyID0gXCLkv67mlLnlgLzkuoYtLVwiXHJcbiAgICAgICAgdGhpcy5udW0gPSA4OVxyXG4gICAgICAgIHRoaXMuYm9vbCA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxudmFyIHN0b3JlID0gbmV3IFN0b3JlKClcclxuLy8g5rWL6K+VIGNvbXB1dGVkXHJcbnZhciBmb28gPSAgY29tcHV0ZWQoIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gc3RvcmUuc3RyICsgXCIvXCIgKyBzdG9yZS5vYmouYWdlXHJcbn0pXHJcbmNvbnNvbGUubG9nKCBmb28uZ2V0KCkgKVxyXG5jb25zb2xlLmxvZyggc3RvcmUubWl4ZWQgKVxyXG5cclxuZm9vLm9ic2VydmUoIGZ1bmN0aW9uKCBjaGFuZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKCBcImNvbXB1dGVkIOWAvOaUueWPmO+8mlwiIClcclxuICAgIGNvbnNvbGUubG9nKCBcIuS/ruaUueWAvO+8mlwiLCBjaGFuZ2UgKVxyXG59KVxyXG5cclxuLy8g5rWL6K+VIGF1dG9ydW4gXHJcbmF1dG9ydW4oICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCBcImF1dG9ydW7ov5DooYzvvJpcIiApXHJcbiAgICBjb25zb2xlLmxvZyggc3RvcmUuc3RyICsgXCIvXCIgKyBzdG9yZS5vYmouYWdlIClcclxufSlcclxuXHJcbi8vIOa1i+ivlSB3ZW5cclxud2hlbiggKCk9PiBzdG9yZS5ib29sICwgKCk9PiBjb25zb2xlLmxvZyggXCLlj5jmiJAgdHJ1ZSDkuoYuLi5cIiApIClcclxuXHJcbi8vIOa1i+ivlSByZWFjdGlvblxyXG5yZWFjdGlvbiggKCkgPT4gWyBzdG9yZS5zdHIsIHN0b3JlLm9iai5hZ2UgXSwgYXJyID0+IGNvbnNvbGUubG9nKCBcInJlYWN0aW9uIOi/kOihjO+8mlwiLGFyciApIClcclxuXHJcbmNvbnNvbGUubG9nKCBcIuW8gOWni+a1i+ivle+8mi0tLS0tLS0gd2VuIC0tLS0tLVwiIClcclxuc3RvcmUuYm9vbCA9IHRydWVcclxuY29uc29sZS5sb2coIFwi5byA5aeL5rWL6K+V77yaLS0tLS0tLSDlhbbku5bkuInkuKogLS0tLS0tXCIgKVxyXG5zdG9yZS5vYmouYWdlID0gMTNcclxuLy8gY29uc29sZS5sb2coIHN0b3JlLm1peGVkIClcclxuLy8gc3RvcmUubnVtID0gNzhcclxuLy8gY29uc29sZS5sb2coIHN0b3JlLm1peGVkIClcclxuXHJcblxyXG5cclxuLy8gd2hlbiggKCk9PiBzdG9yZS5ib29sICwgKCk9PiBjb25zb2xlLmxvZyggXCLlj5jmiJAgdHJ1ZSDkuoYuLi5cIiApIClcclxuLy8gc3RvcmUuYm9vbCA9IHRydWVcclxuXHJcblxyXG5cclxuLy8gcmVhY3Rpb24oICgpID0+IFsgc3RvcmUub2JqLmFnZSBdLCBhcnIgPT4gY29uc29sZS5sb2coIGFyciApIClcclxuLy8gc3RvcmUuYm9vbCA9IHRydWVcclxuLy8gc3RvcmUubnVtID0gNzhcclxuLy8gc3RvcmUuc3RyID0gXCI5OTk5OTlcIlxyXG5cclxuLy8gY29uc29sZS5sb2coIHN0b3JlLm1peGVkIClcclxuLy8gc3RvcmUuYmFyKClcclxuXHJcbi8vIGFjdGlvbiggZnVuY3Rpb24oKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKCBcIuinpuWPkeS6i+S7ti0tLVwiIClcclxuICAgIC8vIHN0b3JlLnN0ciA9IFwicHBwcHBwcFwiXHJcbiAgICAvLyBzdG9yZS5udW0gPSA4NzY1XHJcbiAgICAvLyBzdG9yZS5vYmouYWdlID0gNDVcclxuLy8gfSkoKVxyXG5cclxuXHJcblxyXG5yZWFjdGlvbiggKCkgPT4gWyBzdG9yZS5zdHIsIHN0b3JlLm9iai5hZ2UgXSwgYXJyID0+IGNvbnNvbGUubG9nKCBcInJlYWN0aW9uIOi/kOihjO+8mlwiLGFyciApIClcclxuLy8g5LiN55SoIGFjdGlvbiDmlLnlj5jlgLxcclxuY29uc29sZS5sb2coIFwi5LiN55SoIGFjdGlvbiDmlLnlj5jlgLzvvJpcIiApXHJcbnN0b3JlLm9iai5hZ2UgPSAxMVxyXG5zdG9yZS5zdHIgPSBcIuS9oOWlvS0tLVwiXHJcbi8vIOS9v+eUqCBAYWN0aW9uXHJcbmNvbnNvbGUubG9nKCBcIuS9v+eUqCBhY3Rpb24g5L+u6aWw5Zmo5pS55Y+Y5aSa5Liq5YC8XCIgKVxyXG5zdG9yZS5iYXIoKVxyXG4vLyDkvb/nlKggYWN0aW9uICAg5omn6KGMXHJcbmNvbnNvbGUubG9nKCBcIuS9v+eUqCBhY3Rpb24g5L+u6aWw5Zmo5pS55Y+Y5aSa5Liq5YC8XCIgKVxyXG5hY3Rpb24oICgpID0+IHtcclxuICAgIHN0b3JlLnN0ciA9IFwicHBwcHBwcFwiXHJcbiAgICBzdG9yZS5vYmouYWdlID0gNDVcclxufSkoKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9