(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es/object/assign.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/object/assign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.assign */ \"./node_modules/core-js/modules/es.object.assign.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js/internals/path.js\");\n\nmodule.exports = path.Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/es/string/ends-with.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/es/string/ends-with.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.ends-with */ \"./node_modules/core-js/modules/es.string.ends-with.js\");\nvar entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ \"./node_modules/core-js/internals/entry-unbind.js\");\n\nmodule.exports = entryUnbind('String', 'endsWith');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/string/ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/es/string/starts-with.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/es/string/starts-with.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.starts-with */ \"./node_modules/core-js/modules/es.string.starts-with.js\");\nvar entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ \"./node_modules/core-js/internals/entry-unbind.js\");\n\nmodule.exports = entryUnbind('String', 'startsWith');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/es/string/starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/features/object/assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/features/object/assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/assign */ \"./node_modules/core-js/es/object/assign.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/features/string/ends-with.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/features/string/ends-with.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/string/ends-with */ \"./node_modules/core-js/es/string/ends-with.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/string/ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/features/string/starts-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/features/string/starts-with.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/string/starts-with */ \"./node_modules/core-js/es/string/starts-with.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/features/string/starts-with.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/entry-unbind.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/entry-unbind.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js/internals/bind-context.js\");\n\nvar call = Function.call;\n\nmodule.exports = function (CONSTRUCTOR, METHOD, length) {\n  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/entry-unbind.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      hide(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof global == O && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hide.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\n\nvar nativeAssign = Object.assign;\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !nativeAssign || fails(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : nativeAssign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js/internals/function-to-string.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(nativeFunctionToString).split('toString');\n\nshared('inspectSource', function (it) {\n  return nativeFunctionToString.call(it);\n});\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else hide(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.github.io/ecma262/#sec-object.assign\n$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.ends-with.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\nvar nativeEndsWith = ''.endsWith;\nvar min = Math.min;\n\n// `String.prototype.endsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.endswith\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('endsWith') }, {\n  endsWith: function endsWith(searchString /* , endPosition = @length */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var endPosition = arguments.length > 1 ? arguments[1] : undefined;\n    var len = toLength(that.length);\n    var end = endPosition === undefined ? len : min(toLength(endPosition), len);\n    var search = String(searchString);\n    return nativeEndsWith\n      ? nativeEndsWith.call(that, search, end)\n      : that.slice(end - search.length, end) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.ends-with.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.starts-with.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\nvar nativeStartsWith = ''.startsWith;\nvar min = Math.min;\n\n// `String.prototype.startsWith` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.startswith\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('startsWith') }, {\n  startsWith: function startsWith(searchString /* , position = 0 */) {\n    var that = String(requireObjectCoercible(this));\n    notARegExp(searchString);\n    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));\n    var search = String(searchString);\n    return nativeStartsWith\n      ? nativeStartsWith.call(that, search, index)\n      : that.slice(index, index + search.length) === search;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.starts-with.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/fc-calendar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/css/fc-calendar.css":
/*!*********************************!*\
  !*** ./src/css/fc-calendar.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./fc-calendar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/fc-calendar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"attrs\":{\"id\":\"fc__calendar__style\"},\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/fc-calendar.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/features/string/starts-with.js */ \"./node_modules/core-js/features/string/starts-with.js\");\n/* harmony import */ var core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/features/string/ends-with.js */ \"./node_modules/core-js/features/string/ends-with.js\");\n/* harmony import */ var core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_string_ends_with_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/features/object/assign.js */ \"./node_modules/core-js/features/object/assign.js\");\n/* harmony import */ var core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/fc-calendar.css */ \"./src/css/fc-calendar.css\");\n/* harmony import */ var _css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_fc_calendar_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\nvar idNo = 0;\n\nvar UNDEFINED = undefined,\n    cssMap = new Map(),\n    isObject = function isObject(x) {\n  return x !== null && _typeof(x) === 'object' && !Array.isArray(x);\n},\n    // basic calendar configaration\ndaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],\n    weekLabel = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n    monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    // classes in cssStyleSheet will be applied in the gievn order\n// so that styles get applied correctly\nCLASS_PRECEDENCE_SEQUENCE = ['container', 'container:hover', 'header-container', 'header-container:hover', 'header', 'header:hover', 'year', 'year:hover', 'headername', 'headername:hover', 'yearname', 'yearname:hover', 'nav', 'nav:hover', 'navprev', 'navprev:hover', 'navnext', 'navnext:hover', 'navinactive', 'navinactive:hover', 'navmonth', 'navmonth:hover', 'navyear', 'navyear:hover', 'subheader', 'subheader:hover', 'body', 'body:hover', 'days', 'days:hover', 'indexeddays', 'indexeddays:hover', 'dateLI', 'dateLI:hover', 'date', 'date:hover', 'daycol', 'daycol:hover', 'normaldatedefault', 'normaldatedefault:hover', 'activedate', 'activedate:hover', 'disableddatedefault', 'disableddatedefault:hover', 'disableddate', 'disableddate:hover', 'weekenddefault', 'weekenddefault:hover', 'weekend', 'weekend:hover', 'selecteddatedefault', 'selecteddatedefault:hover', 'selecteddate', 'selecteddate:hover', 'highlighteddatedefault', 'highlighteddatedefault:hover', 'highlighteddate', 'highlighteddate:hover'],\n    defaultCss = {\n  dateLI: {\n    'box-sizing': 'border-box!important',\n    'float': 'left!important',\n    'list-style-type': 'none!important',\n    'width': '14.28571%!important',\n    'height': 'auto!important',\n    'padding': '2px 0 2px !important',\n    'margin': '0 !important',\n    'background-color': '#fff !important'\n  },\n  navinactive: {\n    opacity: 0,\n    cursor: 'default !important'\n  },\n  weekenddefault: {\n    'background-color': '#F7F6FF!important'\n  },\n  'normaldatedefault': {\n    cursor: 'pointer!important'\n  },\n  'normaldatedefault:hover': {\n    color: '#5F5F5F!important',\n    'background-color': '#dcdcdc!important'\n  },\n  'selecteddatedefault': {\n    'background-color': '#5648D4!important',\n    color: '#F3F3F3!important'\n  },\n  'selecteddatedefault:hover': {\n    'background-color': '#5648D4!important',\n    color: '#F3F3F3!important'\n  },\n  disableddatedefault: {\n    color: '#cacaca!important'\n  }\n},\n    defaultClassNames = {\n  container: 'fc-cal-container',\n  'header-container': 'fc-cal-header-container',\n  header: 'fc-cal-month-header',\n  year: 'fc-cal-year-header',\n  headername: 'fc-cal-month',\n  yearname: 'fc-cal-year',\n  nav: 'fc-cal-nav',\n  navprev: 'fc-cal-nav-prev',\n  navnext: 'fc-cal-nav-next',\n  navinactive: 'fc-cal-nav-inactive',\n  navmonth: 'fc-cal-nav-month',\n  navyear: 'fc-cal-nav-year',\n  subheader: 'fc-cal-sub-header',\n  body: 'fc-cal-body',\n  days: 'fc-cal-day',\n  indexeddays: 'fc-cal-day-',\n  // Index will be added at the end\n  dateLI: 'fc-cal-date-li',\n  date: 'fc-cal-date',\n  daycol: 'fc-cal-day-col',\n  normaldatedefault: 'fc-cal-date-normal-default',\n  activedate: 'fc-cal-date-normal',\n  disableddatedefault: 'fc-cal-date-disabled-default',\n  disableddate: 'fc-cal-date-disabled',\n  weekenddefault: 'fc-cal-weekend-default',\n  weekend: 'fc-cal-weekend',\n  selecteddatedefault: 'fc-cal-date-selected-default',\n  selecteddate: 'fc-cal-date-selected',\n  highlighteddatedefault: 'fc-cal-date-highlight-default',\n  highlighteddate: 'fc-cal-date-highlight'\n},\n    inlineStyle = {\n  container: 'box-sizing: border-box !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; -khtml-user-select: none !important; -moz-user-select: none !important; -ms-user-select: none !important; user-select: none !important; text-align: center !important; vertical-align: top !important; padding-bottom: 0 !important; margin: 0px 0px 0px 0px !important; float: left;' + 'font-size: 11px !important; max-width: 163px !important; background-color: #fff !important; border: 1px solid #a5a4a4;',\n  header: 'box-sizing: border-box !important; overflow: hidden !important; height: 26px !important; line-height: 2.4 !important' + 'font-size: 12px !important; background-color: #5648D4 !important;',\n  month: 'display: block !important; width: 100% !important; float: left !important; height: 100% !important;' + 'font-weight: bold !important; color: #F3F3F3 !important; font-size: 13px !important;',\n  year: 'display: block !important; width: 35% !important; float: right !important;',\n  monthname: 'display: inline-block !important; padding: 4px !important;',\n  yearname: 'display: inline-block !important; padding-right: 5px !important; padding-left: 5px !important;',\n  nav: 'display: inline-block !important; cursor: pointer !important; padding: 4px;',\n  navprev: 'float: left !important; padding-left: 8px !important;',\n  navnext: 'float: right !important; padding-right: 8px !important;',\n  navinactive: 'cursor: default !important;',\n  navmonth: '',\n  navyear: '',\n  subheader: 'text-transform: uppercase !important; overflow: hidden !important; color: #666 !important;',\n  days: 'box-sizing: border-box !important; display: block !important; float: left !important; width: 14.28571% !important; line-height: 2.3 !important;',\n  indexeddays: '',\n  body: 'width: 100% !important;',\n  date: 'box-sizing: border-box !important; text-align: center !important; display: block !important; margin: 0 auto !important;' + 'border: 0px solid transparent !important; width: 14.2857% !important; padding: 0px !important;',\n  dateLI: 'box-sizing: border-box !important; float: left !important; list-style-type: none !important; width: 14.28571% !important; height: auto!important;',\n  selecteddate: '',\n  disableddate: '',\n  normaldate: 'cursor: pointer !important;',\n  highlightedDate: '',\n  daycol: '',\n  weekenddefault: 'background-color: #F7F6FF!important;',\n  weekend: ''\n},\n    ulPadZeroStyle = {\n  padding: '0',\n  margin: 0\n},\n    minHeight = 300,\n    minWidth = 300,\n    PX = 'px',\n    SP = ' ',\n    BLANK = '',\n    SPACE = '&nbsp;',\n    DASH = '-',\n    SLASH = '/',\n    vAlignMultiplier = {\n  top: 0,\n  middle: -0.5,\n  bottom: -1\n},\n    hAlignMultiplier = {\n  left: 0,\n  center: -0.5,\n  right: -1\n},\n    // get id for container\ngetuid = function getuid() {\n  return \"fc_calendar-\".concat(idNo++);\n},\n    // check if the year is leap year or not\ncheckLeapYear = function checkLeapYear(year) {\n  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;\n},\n    // apply custom style to the container\nsetStyle = function setStyle(element, style) {\n  if (style && element && element.style) {\n    for (var key in style) {\n      if (style.hasOwnProperty(key)) {\n        element.style[key] = style[key];\n      }\n    }\n  }\n},\n    removeClassName = function removeClassName(className, element) {\n  var classNameList = element && element.className;\n\n  if (classNameList && className) {\n    element.className = classNameList.replace(new RegExp('(?:^|\\\\s*)' + className.trim() + '(?:\\\\s*|$)'), ' ');\n  }\n},\n    removeClassInChilds = function removeClassInChilds(parent, className) {\n  var children, i, j, l, classArr;\n\n  if (parent && parent.getElementsByClassName) {\n    classArr = className.trim().split(SP);\n\n    for (j = 0, l = classArr.length; j < l; j += 1) {\n      className = classArr[j];\n      children = parent.getElementsByClassName(className);\n\n      for (i = children.length - 1; i >= 0; i--) {\n        removeClassName(className, children[i]);\n      }\n    }\n  }\n},\n    // this function will update the calendar\n// without re-drawing the elements\ndisplayMonth = function displayMonth(calendar) {\n  var info = calendar.info,\n      graphic = calendar.graphic,\n      classNames = calendar.classNames,\n      active = info.active,\n      rangeStart = info.rangeStart,\n      rangeEnd = info.rangeEnd,\n      weekStartingDay = info.weekStartingDay,\n      highlight = info.highlight,\n      highlightClasses = info.highlightClasses,\n      showInactiveMonths = info.showInactiveMonths,\n      monthStr = graphic.monthStr,\n      yearStr = graphic.yearStr,\n      dateElements = graphic.dateElements,\n      dateLiElements = graphic.dateLiElements,\n      container = graphic.container,\n      prevMonth = graphic.prevMonth,\n      prevMonthPointer = graphic.prevMonthPointer,\n      nextMonth = graphic.nextMonth,\n      nextMonthPointer = graphic.nextMonthPointer,\n      prevYear = graphic.prevYear,\n      nextYear = graphic.nextYear,\n      month = active.month,\n      year = active.year,\n      highlightMonth = highlight && highlight[year] && highlight[year][month],\n      startingOfMonth = new Date(\"\".concat(month, \"/1/\").concat(year)),\n      monthStaringDay = startingOfMonth.getDay(),\n      monthStaringWeekDay = info.startingPos = monthStaringDay - weekStartingDay + (weekStartingDay <= monthStaringDay ? 0 : 7),\n      totalDays = daysInMonth[month - 1] + (checkLeapYear(year) && month === 2 ? 1 : 0),\n      limit = totalDays + monthStaringWeekDay,\n      startActive = validateActiveStart({\n    day: 1,\n    month: month,\n    year: year\n  }, rangeStart),\n      endActive = validateActiveEnd({\n    day: totalDays,\n    month: month,\n    year: year\n  }, rangeEnd),\n      startInactiveLimit = startActive ? 0 : rangeStart.month === month && rangeStart.year === year ? rangeStart.day - 1 : totalDays,\n      endInactiveLimit = endActive ? totalDays + 1 : rangeEnd.month === month && rangeEnd.year === year ? rangeEnd.day + 1 : 1;\n  var i,\n      j,\n      l,\n      cur,\n      highlightInfo,\n      highLightClass,\n      dateList,\n      weekenddefault,\n      weekend,\n      element,\n      disablePrevMonthLi = rangeStart && rangeStart.year === active.year && rangeStart.month === active.month,\n      disableNextMonthLi = rangeEnd && rangeEnd.year === active.year && rangeEnd.month === active.month;\n  info.curMonthInfo = {\n    start: monthStaringDay,\n    end: limit\n  };\n  dateList = graphic.calendarBody.children[0]; // remove previously applied Classes\n\n  removeClassInChilds(container, classNames.normaldatedefault);\n  removeClassInChilds(container, classNames.selecteddatedefault);\n  removeClassInChilds(container, classNames.disableddatedefault);\n  removeClassInChilds(container, classNames.activedate);\n  removeClassInChilds(container, classNames.selecteddate);\n  removeClassInChilds(container, classNames.disableddate);\n  removeClassInChilds(container, classNames.navinactive); // make navigators inactive\n\n  if (disableNextMonthLi) {\n    nextMonthPointer.className += SP + classNames.navinactive;\n  } else {\n    removeClassName(classNames.navinactive, nextMonth);\n  }\n\n  if (disablePrevMonthLi) {\n    prevMonthPointer.className += SP + classNames.navinactive;\n  } else {\n    removeClassName(classNames.navinactive, prevMonth);\n  } // remobve all highlight classes\n\n\n  while (highlightClasses.length) {\n    highLightClass = highlightClasses.pop();\n    removeClassInChilds(container, highLightClass);\n  } // If not enough list items are present, create them\n\n\n  if (dateList.childElementCount < 42) {\n    while (dateList.childElementCount < 42) {\n      i = dateList.childElementCount;\n      weekenddefault = SP + (i % 7 === 5 || i % 7 === 6 ? classNames.weekenddefault : BLANK);\n      weekend = SP + (i % 7 === 5 || i % 7 === 6 ? classNames.weekend : BLANK); // create date elements\n\n      element = createElement('li', {\n        appendTo: dateList,\n        className: weekenddefault,\n        events: {\n          click: function click() {\n            var info = calendar.info,\n                events = calendar.events,\n                selectedDate = info.selectedDate,\n                active = info.active,\n                tempDate = {\n              day: i - info.startingPos + 1,\n              month: active.month,\n              year: active.year\n            };\n\n            if (tempDate.day >= 1 && tempDate.day <= info.curMonthInfo.end - info.startingPos && validateActiveStart(tempDate, info.rangeStart) && validateActiveEnd(tempDate, info.rangeEnd)) {\n              selectedDate.day = tempDate.day;\n              selectedDate.month = tempDate.month;\n              selectedDate.year = tempDate.year;\n              setSelectedDate(calendar);\n              events.onDateChange && events.onDateChange(selectedDate);\n            }\n          }\n        }\n      });\n      dateLiElements.push(element);\n      element = createElement('span', {\n        appendTo: element,\n        className: classNames.date + SP + classNames.daycol + DASH + i % 7 + weekend,\n        innerHTML: SPACE\n      });\n      dateElements.push(element);\n    }\n  } // month and year changed\n\n\n  monthStr.innerHTML = info.monthLabel[month - 1] + SP + year; // print dates\n\n  for (i = 0, l = dateElements.length; i < l; i++) {\n    if (i < monthStaringWeekDay) {\n      // show days of previous month\n      dateElements[i].innerHTML = new Date(year, month - 1, i - monthStaringWeekDay + 1).getDate();\n      dateLiElements[i].className += SP + classNames.disableddatedefault;\n      dateElements[i].className += SP + classNames.disableddate;\n      dateLiElements[i].eventAttached && dateLiElements[i].removeEventListener('click', dateElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = false;\n    } else if (i >= limit) {\n      // show days of next month\n      cur = new Date(year, month - 1, i - monthStaringWeekDay + 1).getDate();\n      dateElements[i].innerHTML = cur < 10 ? '0' + cur : cur;\n      dateLiElements[i].className += SP + classNames.disableddatedefault;\n      dateElements[i].className += SP + classNames.disableddate;\n      dateLiElements[i].eventAttached && dateLiElements[i].removeEventListener('click', dateElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = false;\n    } else {\n      j = i - monthStaringWeekDay + 1;\n      dateElements[i].innerHTML = j < 10 ? '0' + j : j;\n      highlightInfo = highlightMonth && highlightMonth[j];\n\n      if (highlightInfo) {\n        highLightClass = SP + classNames.highlightedDate;\n        highlightInfo !== true && (highLightClass += SP + highlightInfo);\n        highlightClasses.push(highLightClass);\n      }\n\n      !dateLiElements[i].eventAttached && dateLiElements[i].addEventListener('click', dateLiElements[i]._clickHandler);\n      dateLiElements[i].eventAttached = true;\n      dateElements[i].className += SP + (j <= startInactiveLimit || j >= endInactiveLimit ? classNames.disableddate : classNames.activedate) + (highlightInfo ? highLightClass : BLANK);\n      dateLiElements[i].className += SP + (j <= startInactiveLimit || j >= endInactiveLimit ? classNames.disableddatedefault : classNames.normaldatedefault) + (highlightInfo ? highLightClass : BLANK);\n    }\n  } // if the selected date is on this month, heighlight it\n\n\n  setSelectedDate(calendar);\n},\n    // this function update the day labels\ndisPlayDays = function disPlayDays(calendar) {\n  var info = calendar.info,\n      weekStartingDay = info.weekStartingDay,\n      dayElements = calendar.graphic.dayElements;\n  var j;\n\n  for (j = 0; j < 7; j++) {\n    dayElements[j].innerHTML = info.weekLabel[(j + weekStartingDay) % 7];\n  }\n},\n    setSelectedDate = function setSelectedDate(calendar) {\n  var classNames = calendar.classNames,\n      _calendar$info = calendar.info,\n      selectedDate = _calendar$info.selectedDate,\n      active = _calendar$info.active,\n      startingPos = _calendar$info.startingPos,\n      _calendar$graphic = calendar.graphic,\n      container = _calendar$graphic.container,\n      dateLiElements = _calendar$graphic.dateLiElements,\n      dateElements = _calendar$graphic.dateElements; // if the selected date is on this month, heighlight it\n\n  if (selectedDate.month === active.month && selectedDate.year === active.year) {\n    // remove the class form the old element\n    removeClassInChilds(container, classNames.selecteddatedefault);\n    removeClassInChilds(container, classNames.selecteddate);\n    dateLiElements[selectedDate.day + startingPos - 1].className += SP + classNames.selecteddatedefault;\n    dateElements[selectedDate.day + startingPos - 1].className += SP + classNames.selecteddate;\n  }\n},\n    // function to create dom elements\ncreateElement = function createElement(type, options) {\n  var appendTo = options.appendTo,\n      className = options.className,\n      inline = options.inline,\n      id = options.id,\n      innerHTML = options.innerHTML,\n      events = options.events,\n      element = document.createElement(type); // set the class\n\n  className && (element.className = className); // set inline style of the element\n\n  inline && element.setAttribute('style', inline); // set the attributes\n\n  id && (element.id = id); // add the innerHTML\n\n  innerHTML && (element.innerHTML = innerHTML);\n\n  if (events) {\n    for (var event in events) {\n      element.addEventListener(event, events[event]);\n\n      if (event === 'click') {\n        element['_' + event + 'Handler'] = events[event];\n        element.eventAttached = true;\n      }\n    }\n  } // append to it's parent\n\n\n  appendTo && appendTo.appendChild(element);\n  return element;\n},\n    // initailise calendar for the first time\ninit = function init(calendar, config) {\n  var graphic = calendar.graphic,\n      weekLabel = calendar.info.weekLabel,\n      dateElements = graphic.dateElements,\n      dayElements = graphic.dayElements,\n      dateLiElements = graphic.dateLiElements,\n      fontFamily = config['font-family'] && \" font-family: \".concat(config['font-family'], \";\") || '',\n      classNames = calendar.classNames = Object.assign({}, defaultClassNames, calendar._customCssClass),\n      container = graphic.container = createElement('div', {\n    appendTo: graphic.parentElement,\n    inline: inlineStyle.container + fontFamily,\n    className: classNames.container,\n    id: calendar.id\n  }),\n      calendarHeader = graphic.calendarHeader = createElement('div', {\n    appendTo: container,\n    inline: inlineStyle.header // className: classNames.header\n\n  }),\n      headerUl = graphic.headerUl = createElement('ul', {\n    appendTo: calendarHeader,\n    className: classNames['header-container'],\n    inline: 'height: 100% !important;'\n  }),\n      headerMonthLi = graphic.headerMonthLi = createElement('li', {\n    appendTo: headerUl,\n    inline: inlineStyle.month\n  }),\n      headerMonthUl = graphic.headerMonthUl = createElement('ul', {\n    appendTo: headerMonthLi,\n    className: classNames.header,\n    inline: 'height: 100% !important;'\n  }),\n      calendarSubHeader = graphic.calendarSubHeader = createElement('div', {\n    appendTo: container,\n    // className: classNames.subHeader,\n    inline: inlineStyle.subheader\n  }),\n      weekDays = graphic.weekDays = createElement('ul', {\n    appendTo: calendarSubHeader,\n    className: classNames.subheader\n  }),\n      calendarBody = graphic.calendarBody = createElement('div', {\n    appendTo: container,\n    inline: inlineStyle.body\n  }),\n      days = graphic.days = graphic.dayCell = createElement('ul', {\n    appendTo: calendarBody,\n    inline: 'padding: 1px !important; margin: 0px !important;',\n    className: classNames.body\n  });\n  var element, i, weekend, weekenddefault; // set the container style\n\n  setStyle(container, calendar.style); // set the UL styles\n\n  setStyle(headerUl, ulPadZeroStyle);\n  setStyle(weekDays, ulPadZeroStyle);\n  setStyle(days, ulPadZeroStyle);\n  setStyle(headerMonthUl, ulPadZeroStyle); // li for previous month pointer\n\n  graphic.prevMonth = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.nav + SP + inlineStyle.navprev + SP,\n    events: {\n      click: function click() {\n        var info = calendar.info,\n            graphic = calendar.graphic,\n            nextMonth = (info.active && info.active.month) - 1,\n            year = info.active && info.active.year,\n            rangeStart = info.rangeStart;\n\n        if (nextMonth < 1) {\n          nextMonth = 12;\n          year--;\n        }\n\n        if (!rangeStart || year > rangeStart.year) {\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        } else if (year === rangeStart.year && nextMonth >= rangeStart.month) {\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          nextMonth === rangeStart.month && (graphic.prevMonth.className += SP + classNames.navinactive);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        }\n      }\n    }\n  }); // span containing the left arrow\n\n  graphic.prevMonthPointer = createElement('span', {\n    appendTo: graphic.prevMonth,\n    className: classNames.navprev,\n    innerHTML: '&#10094;'\n  }); // li for month name\n\n  graphic.monthStrLi = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.monthname\n  }); // span containing the month name\n\n  graphic.monthStr = createElement('span', {\n    appendTo: graphic.monthStrLi,\n    className: classNames.headername\n  }); // li for next month pointer\n\n  graphic.nextMonth = createElement('li', {\n    appendTo: headerMonthUl,\n    inline: inlineStyle.nav + SP + inlineStyle.navnext + SP,\n    events: {\n      click: function click() {\n        var info = calendar.info,\n            graphic = calendar.graphic,\n            nextMonth = (info.active && info.active.month) + 1,\n            year = info.active && info.active.year,\n            rangeEnd = info.rangeEnd;\n\n        if (nextMonth > 12) {\n          nextMonth = 1;\n          year++;\n        }\n\n        if (!rangeEnd || year < rangeEnd.year) {\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          removeClassName(classNames.navinactive, graphic.nextMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        } else if (year === rangeEnd.year && nextMonth <= rangeEnd.month) {\n          nextMonth === rangeEnd.month && (graphic.nextMonth.className += SP + classNames.navinactive);\n          removeClassName(classNames.navinactive, graphic.prevMonth);\n          calendar.configure({\n            active: {\n              month: nextMonth,\n              year: year\n            },\n            doNotUpdateStyle: true\n          });\n        }\n      }\n    }\n  }); // span containing the right arrow\n\n  graphic.nextMonthPointer = createElement('span', {\n    appendTo: graphic.nextMonth,\n    className: classNames.navnext,\n    innerHTML: '&#10095;'\n  }); // Create the days of week list items\n\n  for (i = 1; i < 8; i++) {\n    weekend = SP + (i > 5 ? classNames.weekend : BLANK);\n    weekenddefault = SP + (i > 5 ? classNames.weekenddefault : BLANK); // create week elements\n\n    element = createElement('li', {\n      appendTo: weekDays,\n      inline: inlineStyle.days,\n      className: weekenddefault\n    });\n    element = createElement('span', {\n      appendTo: element,\n      innerHTML: weekLabel[i % 7],\n      inline: 'display: block !important;',\n      className: classNames.days + SP + classNames.indexeddays + i % 7 + weekend\n    });\n    dayElements.push(element);\n  } // Create the days of month list items\n\n\n  var _loop = function _loop(_i) {\n    weekenddefault = SP + (_i % 7 === 5 || _i % 7 === 6 ? classNames.weekenddefault : BLANK);\n    weekend = SP + (_i % 7 === 5 || _i % 7 === 6 ? classNames.weekend : BLANK); // create date elements\n\n    element = createElement('li', {\n      appendTo: days,\n      inline: inlineStyle.date,\n      className: classNames.dateLI + weekenddefault\n    });\n    dateLiElements.push(element);\n    element = createElement('span', {\n      appendTo: element,\n      className: classNames.date + SP + classNames.daycol + DASH + _i % 7 + weekend,\n      inline: 'display: block !important; padding: 4px 0px !important;',\n      innerHTML: SPACE,\n      events: {\n        click: function click() {\n          var info = calendar.info,\n              events = calendar.events,\n              selectedDate = info.selectedDate,\n              active = info.active,\n              tempDate = {\n            day: _i - info.startingPos + 1,\n            month: active.month,\n            year: active.year\n          };\n\n          if (tempDate.day >= 1 && tempDate.day <= info.curMonthInfo.end - info.startingPos && validateActiveStart(tempDate, info.rangeStart) && validateActiveEnd(tempDate, info.rangeEnd)) {\n            selectedDate.day = tempDate.day;\n            selectedDate.month = tempDate.month;\n            selectedDate.year = tempDate.year;\n            setSelectedDate(calendar);\n            events.onDateChange && events.onDateChange(selectedDate);\n          }\n        }\n      }\n    });\n    dateElements.push(element);\n  };\n\n  for (var _i = 0; _i < 42; _i++) {\n    _loop(_i);\n  }\n},\n    // validate active date\nvalidateActiveStart = function validateActiveStart(date, start) {\n  var day = date.day,\n      month = date.month,\n      year = date.year;\n  return !(start && (start.year > year || start.year === year && (start.month > month || start.month === month && start.day > day)));\n},\n    // validate active date\nvalidateActiveEnd = function validateActiveEnd(date, end) {\n  var day = date.day,\n      month = date.month,\n      year = date.year;\n  return !(end && (end.year < year || end.year === year && (end.month < month || end.month === month && end.day < day)));\n},\n    toCssString = function toCssString(key, obj) {\n  var className = \"fc-cal-user-\".concat(key),\n      css = '';\n\n  for (key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      css += \"\".concat(key, \": \").concat(obj[key], \"; \");\n    }\n  }\n\n  return {\n    className: className,\n    cssString: \".\".concat(className, \" { \").concat(css, \"}\")\n  };\n},\n\n/**\n * the api help in segregating the css given in string format or\n * in object format\n */\nseparateCssClass = function separateCssClass() {\n  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var classObj = {},\n      styleEle = document.getElementById('fc__calendar__style'),\n      sheet = styleEle && styleEle.sheet;\n\n  if (!sheet) {\n    return classObj;\n  }\n\n  CLASS_PRECEDENCE_SEQUENCE.forEach(function (key) {\n    if (styles.hasOwnProperty(key) || defaultCss[key]) {\n      var value = styles[key] || defaultCss[key]; // when string is given as the value it will act as class\n      // and user is suppose to define the css of the class in his\n      // stylesheet\n\n      if (typeof value === 'string') {\n        classObj[key] = value;\n      } else if (isObject(value)) {\n        // the user can pass an object as well\n        var _toCssString = toCssString(key, value),\n            className = _toCssString.className,\n            cssString = _toCssString.cssString; // the css for hover does not get return as classname since\n        // hover css class gets applied by bowser itself\n\n\n        !key.endsWith(':hover') && (classObj[key] = className);\n\n        if (!(cssMap.has(className) && cssMap.get(className).cssStr === cssString)) {\n          // the css only gets applied if the class contains new configurations\n          var rulePos = sheet.cssRules.length;\n\n          if (cssMap.has(className)) {\n            // if the class is already present i the css sheet then that css needs to be\n            // deleted and the new css class with different config willl be added in the\n            // same position to maintain the order\n            rulePos = cssMap.get(className).index;\n            sheet.deleteRule(rulePos);\n          }\n\n          cssMap.set(className, {\n            cssStr: cssString,\n            index: rulePos\n          });\n          sheet.insertRule(cssString, rulePos);\n        }\n      }\n    }\n  });\n  return classObj;\n}; // calendar constructor\n\n\nvar Calendar =\n/*#__PURE__*/\nfunction () {\n  function Calendar() {\n    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Calendar);\n\n    var calendar = this,\n        today = new Date(),\n        currentDate = {\n      day: today.getDate(),\n      month: today.getMonth() + 1,\n      year: today.getFullYear()\n    };\n    calendar._customCssClass = {};\n    calendar.graphic = {\n      parentElement: config.container || document.body,\n      dateElements: [],\n      dateLiElements: [],\n      dayElements: []\n    };\n    calendar.style = {\n      position: 'absolute',\n      top: '0px',\n      left: '0px',\n      width: minWidth + PX,\n      // height: minHeight + PX,\n      overflow: 'hidden'\n    };\n    calendar.id = config.id || getuid();\n    calendar.events = {};\n    calendar.info = {\n      selectedDate: currentDate,\n      active: {\n        month: currentDate.month,\n        year: currentDate.year\n      },\n      weekLabel: [].concat(weekLabel),\n      monthLabel: [].concat(monthLabel),\n      weekStartingDay: 1,\n      posX: 0,\n      posY: 0,\n      height: minHeight,\n      width: minWidth,\n      vAlignment: 'top',\n      hAlignment: 'left',\n      highlightClasses: []\n    };\n    calendar._customCssClass = separateCssClass(config.customCssClass); // create the elements for first time only\n\n    init(calendar, config); // configure Calendar with initial config\n\n    config.doNotUpdateStyle = true;\n    calendar.configure(config, true);\n  } // configure calendar\n\n\n  _createClass(Calendar, [{\n    key: \"configure\",\n    value: function configure(config, doRepaint) {\n      var calendar = this,\n          graphic = calendar.graphic,\n          events = calendar.events,\n          info = calendar.info,\n          style = calendar.style,\n          userEvents = config && config.events;\n      var parentElement,\n          temp,\n          positioningChanged = false;\n\n      if (!config) {\n        return;\n      }\n\n      if (!config.doNotUpdateStyle) {\n        calendar._customCssClass = separateCssClass(config.customCssClass);\n      }\n\n      calendar.classNames = Object.assign({}, defaultClassNames, calendar._customCssClass); // set container\n\n      if (config.container && (parentElement = document.getElementById(config.container))) {\n        graphic.parentElement = parentElement;\n        parentElement.appendChild(graphic.container);\n      } else if (config.container instanceof Element) {\n        graphic.parentElement = config.container;\n      } // set User applied styles\n\n\n      if (config.style && config.style.position) {\n        style.position = config.style.position;\n        setStyle(graphic.container, style);\n      } // applying visual positioning configuraions to the container\n\n\n      if (!isNaN(temp = Number(config.posX))) {\n        info.posX = temp;\n        positioningChanged = true;\n      }\n\n      if (!isNaN(temp = Number(config.posY))) {\n        info.posY = temp;\n        positioningChanged = true;\n      } // if (!isNaN(temp = Number(config.height)) && temp > minHeight) {\n      //   info.height = temp;\n      //   style.height = temp + PX;\n      //   positioningChanged = true;\n      // }\n\n\n      if (!isNaN(temp = Number(config.width)) && temp > minWidth) {\n        info.width = temp;\n        style.width = temp + PX;\n        positioningChanged = true;\n      }\n\n      if (config.vAlignment && (temp = config.vAlignment.toLowerCase()) && vAlignMultiplier[temp] !== UNDEFINED) {\n        info.vAlignment = temp;\n        positioningChanged = true;\n      }\n\n      if (config.hAlignment && (temp = config.hAlignment.toLowerCase()) && hAlignMultiplier[temp] !== UNDEFINED) {\n        info.hAlignment = temp;\n        positioningChanged = true;\n      } // set events on date, month and year change\n\n\n      if (userEvents) {\n        typeof userEvents.onDateChange === 'function' && (events.onDateChange = userEvents.onDateChange);\n        typeof userEvents.onYearChange === 'function' && (events.onYearChange = userEvents.onYearChange);\n        typeof userEvents.onMonthChange === 'function' && (events.onMonthChange = userEvents.onMonthChange);\n      }\n\n      if (config.highlight) {\n        info.highlight = config.highlight;\n        doRepaint = true;\n      } else if (config.highlight === null) {\n        delete info.highlight;\n        doRepaint = true;\n      } // set calendar date\n\n\n      if ((temp = config.selectedDate) && !isNaN(Date.parse(temp.month + SLASH + temp.day + SLASH + temp.year))) {\n        info.selectedDate = config.selectedDate; // update the active month as well\n\n        info.active.month = info.selectedDate.month;\n        info.active.year = info.selectedDate.year;\n        doRepaint = true;\n      }\n\n      if (config.showInactiveMonths !== UNDEFINED) {\n        info.showInactiveMonths = !!config.showInactiveMonths;\n      } // set active month\n\n\n      if (config.active) {\n        temp = {\n          month: config.active.month || info.active.month,\n          year: config.active.year || info.active.year\n        };\n\n        if ((info.active.month !== temp.month || info.active.year !== temp.year) && (info.showInactiveMonths || validateActiveStart(temp, info.rangeStart) && validateActiveEnd(temp, info.rangeEnd))) {\n          info.active.month = temp.month;\n          info.active.year = temp.year;\n          doRepaint = true;\n        }\n      } // set month names\n\n\n      if (config.monthLabel && config.monthLabel.length === 12) {\n        info.monthLabel = config.monthLabel;\n        doRepaint = true;\n      } // set day names\n\n\n      if (config.weekLabel && config.weekLabel.length === 7) {\n        info.weekLabel = config.weekLabel;\n        disPlayDays(calendar);\n      } // set Starting day of week\n\n\n      if (config.weekStart !== UNDEFINED && info.weekStartingDay !== config.weekStart) {\n        info.weekStartingDay = config.weekStart;\n        disPlayDays(calendar);\n      } // Set active range start\n\n\n      if (config.rangeStart && validateActiveStart(info.selectedDate, config.rangeStart)) {\n        info.rangeStart = config.rangeStart;\n        doRepaint = true;\n      } else if (config.rangeStart === null) {\n        delete info.rangeStart;\n        doRepaint = true;\n      } // Set active range end\n\n\n      if (config.rangeEnd && validateActiveEnd(info.selectedDate, config.rangeEnd)) {\n        info.rangeEnd = config.rangeEnd;\n        doRepaint = true; // Check whether the old active date is valid or not\n      } else if (config.rangeEnd === null) {\n        delete info.rangeEnd;\n        doRepaint = true;\n      } // set calendar to the desired date\n\n\n      doRepaint && displayMonth(calendar);\n\n      if (positioningChanged) {\n        style.left = info.posX + info.width * (hAlignMultiplier[info.hAlignment] || 0) + PX;\n        info.height = graphic.container && graphic.container.offsetHeight || minHeight;\n        style.top = info.posY + info.height * (vAlignMultiplier[info.vAlignment] || 0) + PX;\n        setStyle(graphic.container, style);\n      }\n    } // call show function show calendar\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      var calendar = this,\n          container = calendar.graphic.container;\n      container.style.visibility = 'visible';\n      container.style.opacity = '1';\n    } // call hide function to hide calendar\n\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      var calendar = this,\n          container = calendar.graphic.container;\n      container.style.visibility = 'hidden';\n      container.style.opacity = '0';\n    } // returns the current or selected date\n\n  }, {\n    key: \"getDate\",\n    value: function getDate() {\n      return this.info.selectedDate;\n    } // add custom funcion on click\n\n  }, {\n    key: \"addEventListner\",\n    value: function addEventListner(eventName, handler) {\n      typeof handler === 'function' && this.events && (this.events[eventName] = handler);\n    } // remove custom funcion on click\n\n  }, {\n    key: \"removeEventListner\",\n    value: function removeEventListner(eventName) {\n      if (this.events && this.events[eventName]) {\n        delete this.events[eventName];\n      }\n    }\n  }, {\n    key: \"getDimension\",\n    value: function getDimension() {\n      var graphic = this.graphic;\n      return {\n        width: graphic.container.offsetWidth,\n        height: graphic.container.offsetHeight\n      };\n    } // dispose the dom elements\n\n  }, {\n    key: \"dispose\",\n    value: function dispose() {\n      var graphic = this.graphic,\n          parentElement = graphic.parentElement,\n          container = graphic.container;\n      parentElement.removeChild(container);\n    }\n  }]);\n\n  return Calendar;\n}(); // attache to the window if availabel\n// if (window) {\n//   window.FusionCalendar = Calendar;\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});