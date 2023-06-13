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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = createConsumerApi;\n\nvar _manifest = __webpack_require__(/*! ./manifest */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js\");\n\nvar _manifest2 = _interopRequireDefault(_manifest);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createReadOnlyValue = function createReadOnlyValue(value) {\n    return {\n        value: value,\n        writable: false,\n        enumerable: false,\n        configurable: true\n    };\n};\nfunction createConsumerApi(manifests, exposureMap) {\n    var api = {};\n    Object.keys(exposureMap).forEach(function (key) {\n        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));\n    });\n    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));\n    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));\n}\n//# sourceMappingURL=createConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = exports.readFromConsumerApi = exports.createConsumerApi = undefined;\n\nvar _createConsumerApi = __webpack_require__(/*! ./createConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js\");\n\nvar _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);\n\nvar _readFromConsumerApi = __webpack_require__(/*! ./readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nvar _index = __webpack_require__(/*! ./registry/index */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _readFromConsumerApi2.default)('manifest');\nexports.createConsumerApi = _createConsumerApi2.default;\nexports.readFromConsumerApi = _readFromConsumerApi2.default;\nexports.SynchronousRegistry = _index.SynchronousRegistry;\nexports.SynchronousMetaRegistry = _index.SynchronousMetaRegistry;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nexports.default = function (manifests) {\n    return function (identifier, options, bootstrap) {\n        manifests.push(_defineProperty({}, identifier, {\n            options: options,\n            bootstrap: bootstrap\n        }));\n    };\n};\n//# sourceMappingURL=manifest.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = readFromConsumerApi;\nfunction readFromConsumerApi(key) {\n    return function () {\n        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {\n            var _window$NeosHostPlu;\n\n            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);\n        }\n        throw new Error('You are trying to read from a consumer api that hasn\\'t been initialized yet!');\n    };\n}\n//# sourceMappingURL=readFromConsumerApi.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar AbstractRegistry = class AbstractRegistry {\n    constructor(description) {\n        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';\n        this.description = description;\n    }\n};\n//# sourceMappingURL=AbstractRegistry.js.map\n\nexports.default = AbstractRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousMetaRegistry = class SynchronousMetaRegistry extends _SynchronousRegistry2.default {\n    set(key, value) {\n        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {\n            throw new Error('You can only add registries to a meta registry');\n        }\n        return super.set(key, value);\n    }\n};\n//# sourceMappingURL=SynchronousMetaRegistry.js.map\n\nexports.default = SynchronousMetaRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _AbstractRegistry = __webpack_require__(/*! ./AbstractRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js\");\n\nvar _AbstractRegistry2 = _interopRequireDefault(_AbstractRegistry);\n\nvar _positionalArraySorter = __webpack_require__(/*! @neos-project/positional-array-sorter */ \"./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js\");\n\nvar _positionalArraySorter2 = _interopRequireDefault(_positionalArraySorter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SynchronousRegistry = class SynchronousRegistry extends _AbstractRegistry2.default {\n    constructor(description) {\n        super(description);\n        this._registry = [];\n    }\n    set(key, value) {\n        var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n        if (typeof key !== 'string') {\n            throw new Error('Key must be a string');\n        }\n        if (typeof position !== 'string' && typeof position !== 'number') {\n            throw new Error('Position must be a string or a number');\n        }\n        var entry = { key: key, value: value };\n        if (position) {\n            entry.position = position;\n        }\n        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {\n            return item.key === key;\n        });\n        if (indexOfItemWithTheSameKey === -1) {\n            this._registry.push(entry);\n        } else {\n            this._registry[indexOfItemWithTheSameKey] = entry;\n        }\n        return value;\n    }\n    get(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return null;\n        }\n        var result = this._registry.find(function (item) {\n            return item.key === key;\n        });\n        return result ? result.value : null;\n    }\n    _getChildrenWrapped(searchKey) {\n        var unsortedChildren = this._registry.filter(function (item) {\n            return item.key.indexOf(searchKey + '/') === 0;\n        });\n        return (0, _positionalArraySorter2.default)(unsortedChildren);\n    }\n    getChildrenAsObject(searchKey) {\n        var result = {};\n        this._getChildrenWrapped(searchKey).forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getChildren(searchKey) {\n        return this._getChildrenWrapped(searchKey).map(function (item) {\n            return item.value;\n        });\n    }\n    has(key) {\n        if (typeof key !== 'string') {\n            console.error('Key must be a string');\n            return false;\n        }\n        return Boolean(this._registry.find(function (item) {\n            return item.key === key;\n        }));\n    }\n    _getAllWrapped() {\n        return (0, _positionalArraySorter2.default)(this._registry);\n    }\n    getAllAsObject() {\n        var result = {};\n        this._getAllWrapped().forEach(function (item) {\n            result[item.key] = item.value;\n        });\n        return result;\n    }\n    getAllAsList() {\n        return this._getAllWrapped().map(function (item) {\n            return Object.assign({ id: item.key }, item.value);\n        });\n    }\n};\n//# sourceMappingURL=SynchronousRegistry.js.map\n\nexports.default = SynchronousRegistry;\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SynchronousMetaRegistry = exports.SynchronousRegistry = undefined;\n\nvar _SynchronousRegistry = __webpack_require__(/*! ./SynchronousRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js\");\n\nvar _SynchronousRegistry2 = _interopRequireDefault(_SynchronousRegistry);\n\nvar _SynchronousMetaRegistry = __webpack_require__(/*! ./SynchronousMetaRegistry */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js\");\n\nvar _SynchronousMetaRegistry2 = _interopRequireDefault(_SynchronousMetaRegistry);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.SynchronousRegistry = _SynchronousRegistry2.default;\nexports.SynchronousMetaRegistry = _SynchronousMetaRegistry2.default;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().CkEditorApi;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().CkEditor5;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _readFromConsumerApi = __webpack_require__(/*! ../../../readFromConsumerApi */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js\");\n\nvar _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = (0, _readFromConsumerApi2.default)('vendor')().React;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js?");

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar positionalArraySorter = function positionalArraySorter(subject) {\n    var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'position';\n    var idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';\n\n    var positionAccessor = typeof position === 'string' ? function (value) {\n        return value[position];\n    } : position;\n    var indexMapping = {};\n    var middleKeys = {};\n    var startKeys = {};\n    var endKeys = {};\n    var beforeKeys = {};\n    var afterKeys = {};\n    subject.forEach(function (item, index) {\n        var key = item[idKey] ? item[idKey] : String(index);\n        indexMapping[key] = index;\n        var positionValue = positionAccessor(item);\n        var position = String(positionValue ? positionValue : index);\n        var invalid = false;\n        if (position.startsWith('start')) {\n            var weightMatch = position.match(/start\\s+(\\d+)/);\n            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;\n            if (!startKeys[weight]) {\n                startKeys[weight] = [];\n            }\n            startKeys[weight].push(key);\n        } else if (position.startsWith('end')) {\n            var _weightMatch = position.match(/end\\s+(\\d+)/);\n            var _weight = _weightMatch && _weightMatch[1] ? Number(_weightMatch[1]) : 0;\n            if (!endKeys[_weight]) {\n                endKeys[_weight] = [];\n            }\n            endKeys[_weight].push(key);\n        } else if (position.startsWith('before')) {\n            var match = position.match(/before\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!match) {\n                invalid = true;\n            } else {\n                var reference = match[1];\n                var _weight2 = match[3] ? Number(match[3]) : 0;\n                if (!beforeKeys[reference]) {\n                    beforeKeys[reference] = {};\n                }\n                if (!beforeKeys[reference][_weight2]) {\n                    beforeKeys[reference][_weight2] = [];\n                }\n                beforeKeys[reference][_weight2].push(key);\n            }\n        } else if (position.startsWith('after')) {\n            var _match = position.match(/after\\s+(\\S+)(\\s+(\\d+))?/);\n            if (!_match) {\n                invalid = true;\n            } else {\n                var _reference = _match[1];\n                var _weight3 = _match[3] ? Number(_match[3]) : 0;\n                if (!afterKeys[_reference]) {\n                    afterKeys[_reference] = {};\n                }\n                if (!afterKeys[_reference][_weight3]) {\n                    afterKeys[_reference][_weight3] = [];\n                }\n                afterKeys[_reference][_weight3].push(key);\n            }\n        } else {\n            invalid = true;\n        }\n        if (invalid) {\n            var numberPosition = parseFloat(position);\n            if (isNaN(numberPosition) || !isFinite(numberPosition)) {\n                numberPosition = index;\n            }\n            if (!middleKeys[numberPosition]) {\n                middleKeys[numberPosition] = [];\n            }\n            middleKeys[numberPosition].push(key);\n        }\n    });\n    var resultStart = [];\n    var resultMiddle = [];\n    var resultEnd = [];\n    var processedKeys = [];\n    var sortedWeights = function sortedWeights(dict, asc) {\n        var weights = Object.keys(dict).map(function (x) {\n            return Number(x);\n        }).sort(function (a, b) {\n            return a - b;\n        });\n        return asc ? weights : weights.reverse();\n    };\n    var addToResults = function addToResults(keys, result) {\n        keys.forEach(function (key) {\n            if (processedKeys.indexOf(key) >= 0) {\n                return;\n            }\n            processedKeys.push(key);\n            if (beforeKeys[key]) {\n                var beforeWeights = sortedWeights(beforeKeys[key], true);\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = beforeWeights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var i = _step.value;\n\n                        addToResults(beforeKeys[key][i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n            result.push(key);\n            if (afterKeys[key]) {\n                var afterWeights = sortedWeights(afterKeys[key], false);\n                var _iteratorNormalCompletion2 = true;\n                var _didIteratorError2 = false;\n                var _iteratorError2 = undefined;\n\n                try {\n                    for (var _iterator2 = afterWeights[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                        var _i = _step2.value;\n\n                        addToResults(afterKeys[key][_i], result);\n                    }\n                } catch (err) {\n                    _didIteratorError2 = true;\n                    _iteratorError2 = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                            _iterator2.return();\n                        }\n                    } finally {\n                        if (_didIteratorError2) {\n                            throw _iteratorError2;\n                        }\n                    }\n                }\n            }\n        });\n    };\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n        for (var _iterator3 = sortedWeights(startKeys, false)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var i = _step3.value;\n\n            addToResults(startKeys[i], resultStart);\n        }\n    } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                _iterator3.return();\n            }\n        } finally {\n            if (_didIteratorError3) {\n                throw _iteratorError3;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n        for (var _iterator4 = sortedWeights(middleKeys, true)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var _i2 = _step4.value;\n\n            addToResults(middleKeys[_i2], resultMiddle);\n        }\n    } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion4 && _iterator4.return) {\n                _iterator4.return();\n            }\n        } finally {\n            if (_didIteratorError4) {\n                throw _iteratorError4;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n        for (var _iterator5 = sortedWeights(endKeys, true)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n            var _i3 = _step5.value;\n\n            addToResults(endKeys[_i3], resultEnd);\n        }\n    } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion5 && _iterator5.return) {\n                _iterator5.return();\n            }\n        } finally {\n            if (_didIteratorError5) {\n                throw _iteratorError5;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n        for (var _iterator6 = Object.keys(beforeKeys)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n            var key = _step6.value;\n\n            if (processedKeys.indexOf(key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion8 = true;\n            var _didIteratorError8 = false;\n            var _iteratorError8 = undefined;\n\n            try {\n                for (var _iterator8 = sortedWeights(beforeKeys[key], false)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {\n                    var _i4 = _step8.value;\n\n                    addToResults(beforeKeys[key][_i4], resultStart);\n                }\n            } catch (err) {\n                _didIteratorError8 = true;\n                _iteratorError8 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion8 && _iterator8.return) {\n                        _iterator8.return();\n                    }\n                } finally {\n                    if (_didIteratorError8) {\n                        throw _iteratorError8;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError6 = true;\n        _iteratorError6 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion6 && _iterator6.return) {\n                _iterator6.return();\n            }\n        } finally {\n            if (_didIteratorError6) {\n                throw _iteratorError6;\n            }\n        }\n    }\n\n    var _iteratorNormalCompletion7 = true;\n    var _didIteratorError7 = false;\n    var _iteratorError7 = undefined;\n\n    try {\n        for (var _iterator7 = Object.keys(afterKeys)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {\n            var _key = _step7.value;\n\n            if (processedKeys.indexOf(_key) >= 0) {\n                continue;\n            }\n            var _iteratorNormalCompletion9 = true;\n            var _didIteratorError9 = false;\n            var _iteratorError9 = undefined;\n\n            try {\n                for (var _iterator9 = sortedWeights(afterKeys[_key], false)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {\n                    var _i5 = _step9.value;\n\n                    addToResults(afterKeys[_key][_i5], resultMiddle);\n                }\n            } catch (err) {\n                _didIteratorError9 = true;\n                _iteratorError9 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion9 && _iterator9.return) {\n                        _iterator9.return();\n                    }\n                } finally {\n                    if (_didIteratorError9) {\n                        throw _iteratorError9;\n                    }\n                }\n            }\n        }\n    } catch (err) {\n        _didIteratorError7 = true;\n        _iteratorError7 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion7 && _iterator7.return) {\n                _iterator7.return();\n            }\n        } finally {\n            if (_didIteratorError7) {\n                throw _iteratorError7;\n            }\n        }\n    }\n\n    var sortedKeys = [].concat(resultStart, resultMiddle, resultEnd);\n    return sortedKeys.map(function (key) {\n        return indexMapping[key];\n    }).map(function (i) {\n        return subject[i];\n    });\n};\nexports.default = positionalArraySorter;\n//# sourceMappingURL=positionalArraySorter.js.map\n\n//# sourceURL=webpack:///./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js?");

/***/ }),

/***/ "./src/BlockStyleCommand.js":
/*!**********************************!*\
  !*** ./src/BlockStyleCommand.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js\");\n\n/**\n * Set a key-value block style; e.g. \"fontColor=red\".\n */\n\nvar BlockStyleCommand = class BlockStyleCommand extends _ckeditor5Exports.Command {\n    /**\n     * @param {module:core/editor/editor~Editor} editor\n     * @param {String} attributeKey Attribute that will be set by the command.\n     */\n    constructor(editor, attributeKey) {\n        super(editor);\n\n        /**\n         * The attribute that will be set by the command.\n         *\n         * @readonly\n         * @member {String}\n         */\n        this.attributeKey = attributeKey;\n\n        /**\n         * Flag indicating whether the command is active. The command is active when the\n         * {@link module:engine/model/selection~Selection#hasAttribute selection has the attribute} which means that:\n         *\n         * @observable\n         * @readonly\n         * @member {Boolean} #value\n         */\n    }\n\n    /**\n     * Updates the command's {@link #value} and {@link #isEnabled}.\n     */\n    refresh() {\n        var model = this.editor.model;\n        var doc = model.document;\n        var blocksToChange = Array.from(doc.selection.getSelectedBlocks());\n\n        this.value = this._getValueFromBlockNode();\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n            for (var _iterator = blocksToChange[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var block = _step.value;\n\n                if (model.schema.checkAttribute(block, this.attributeKey)) {\n                    this.isEnabled = true;\n                }\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                    _iterator.return();\n                }\n            } finally {\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    }\n\n    /**\n     * Executes the command &mdash; sets the attribute to the desired value. If there is no desired valued, removes the\n     * attribute on each block.\n     *\n     * @fires execute\n     * @param {Object} [options] Command options.\n     * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.\n     */\n    execute() {\n        var _this = this;\n\n        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        var model = this.editor.model;\n        var doc = model.document;\n        var selection = doc.selection;\n        var value = options.value;\n        var blocksToChange = Array.from(selection.getSelectedBlocks());\n        model.change(function (writer) {\n            var _iteratorNormalCompletion2 = true;\n            var _didIteratorError2 = false;\n            var _iteratorError2 = undefined;\n\n            try {\n                for (var _iterator2 = blocksToChange[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                    var block = _step2.value;\n\n                    if (value) {\n                        writer.setAttribute(_this.attributeKey, value, block);\n                    } else {\n                        writer.removeAttribute(_this.attributeKey, block);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError2 = true;\n                _iteratorError2 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                        _iterator2.return();\n                    }\n                } finally {\n                    if (_didIteratorError2) {\n                        throw _iteratorError2;\n                    }\n                }\n            }\n        });\n    }\n\n    /**\n     * Checks the attribute value of the parent block node(s)\n     *\n     * @private\n     * @returns {String} The attribute value.\n     */\n    _getValueFromBlockNode() {\n        var model = this.editor.model;\n        var schema = model.schema;\n        var selection = model.document.selection;\n        var blocks = Array.from(selection.getSelectedBlocks());\n\n        var _iteratorNormalCompletion3 = true;\n        var _didIteratorError3 = false;\n        var _iteratorError3 = undefined;\n\n        try {\n            for (var _iterator3 = blocks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n                var block = _step3.value;\n\n                if (schema.checkAttribute(block, this.attributeKey)) {\n                    return block.getAttribute(this.attributeKey);\n                }\n            }\n        } catch (err) {\n            _didIteratorError3 = true;\n            _iteratorError3 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                    _iterator3.return();\n                }\n            } finally {\n                if (_didIteratorError3) {\n                    throw _iteratorError3;\n                }\n            }\n        }\n\n        return undefined;\n    }\n}; // Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted\n\nexports.default = BlockStyleCommand;\n\n//# sourceURL=webpack:///./src/BlockStyleCommand.js?");

/***/ }),

/***/ "./src/BlockStyleEditing.js":
/*!**********************************!*\
  !*** ./src/BlockStyleEditing.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js\");\n\nvar _BlockStyleCommand = __webpack_require__(/*! ./BlockStyleCommand */ \"./src/BlockStyleCommand.js\");\n\nvar _BlockStyleCommand2 = _interopRequireDefault(_BlockStyleCommand);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * FACTORY FUNCTION for the plugin\n * needs the current preset configuration as parameter.\n */\nexports.default = function (presetIdentifier, presetConfiguration) {\n    return class BlockStyleEditing extends _ckeditor5Exports.Plugin {\n        init() {\n            var schema = this.editor.model.schema;\n            var modelAttributeKey = 'blockStyles-' + presetIdentifier;\n            var optionIdentifiers = Object.keys(presetConfiguration.options);\n\n            schema.extend('$block', { allowAttributes: modelAttributeKey });\n\n            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html\n            schema.setAttributeProperties(modelAttributeKey, { isFormatting: true });\n\n            // Model configuration\n            var config = {\n                model: {\n                    key: modelAttributeKey,\n                    values: optionIdentifiers\n                },\n                view: {}\n            };\n\n            // View configuration\n            optionIdentifiers.forEach(function (optionIdentifier) {\n                var options = presetConfiguration.options[optionIdentifier];\n                var attribute = options.attribute || 'class';\n                var attributeValues = attribute === options.attribute ? options.attributeValue : options.cssClass.split(' ');\n\n                config.view[optionIdentifier] = {\n                    key: attribute,\n                    value: attributeValues\n                };\n            });\n\n            // Convert the model to view correctly\n            this.editor.conversion.attributeToAttribute(config);\n\n            this.editor.commands.add('blockStyles:' + presetIdentifier, new _BlockStyleCommand2.default(this.editor, modelAttributeKey));\n        }\n    };\n};\n\n//# sourceURL=webpack:///./src/BlockStyleEditing.js?");

/***/ }),

/***/ "./src/InlineStylesCommand.js":
/*!************************************!*\
  !*** ./src/InlineStylesCommand.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js\");\n\n/**\n * Set a key-value inline style; e.g. \"fontColor=red\".\n *\n */\nvar InlineStylesCommand = class InlineStylesCommand extends _ckeditor5Exports.Command {\n    /**\n     * @param {module:core/editor/editor~Editor} editor\n     * @param {String} attributeKey Attribute that will be set by the command.\n     */\n    constructor(editor, attributeKey) {\n        super(editor);\n\n        /**\n         * The attribute that will be set by the command.\n         *\n         * @readonly\n         * @member {String}\n         */\n        this.attributeKey = attributeKey;\n\n        /**\n         * Flag indicating whether the command is active. The command is active when the\n         * {@link module:engine/model/selection~Selection#hasAttribute selection has the attribute} which means that:\n         **\n         * @observable\n         * @readonly\n         * @member {Boolean} #value\n         */\n    }\n\n    /**\n     * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.\n     */\n    refresh() {\n        var model = this.editor.model;\n        var doc = model.document;\n\n        this.value = this._getValueFromFirstAllowedNode();\n        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);\n    }\n\n    /**\n     * Executes the command &mdash; sets the attribute to the desired value. If there is no desired valued, removes the\n     * attribute.\n     *\n     * @fires execute\n     * @param {Object} [options] Command options.\n     * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.\n     */\n    execute() {\n        var _this = this;\n\n        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n        var model = this.editor.model;\n        var doc = model.document;\n        var selection = doc.selection;\n        var value = options.value;\n\n        model.change(function (writer) {\n            if (selection.isCollapsed) {\n                if (value) {\n                    // value is existing, we want to set the selection attribute to the value.\n                    writer.setSelectionAttribute(_this.attributeKey, value);\n                } else {\n                    writer.removeSelectionAttribute(_this.attributeKey);\n                }\n            } else {\n                var ranges = model.schema.getValidRanges(selection.getRanges(), _this.attributeKey);\n\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var range = _step.value;\n\n                        if (value) {\n                            writer.setAttribute(_this.attributeKey, value, range);\n                        } else {\n                            writer.removeAttribute(_this.attributeKey, range);\n                        }\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n        });\n    }\n\n    /**\n     * Checks the attribute value of the first node in the selection that allows the attribute.\n     * For the collapsed selection returns the selection attribute.\n     *\n     * @private\n     * @returns {String} The attribute value.\n     */\n    _getValueFromFirstAllowedNode() {\n        var model = this.editor.model;\n        var schema = model.schema;\n        var selection = model.document.selection;\n\n        if (selection.isCollapsed) {\n            return selection.getAttribute(this.attributeKey);\n        }\n\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n            for (var _iterator2 = selection.getRanges()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                var range = _step2.value;\n                var _iteratorNormalCompletion3 = true;\n                var _didIteratorError3 = false;\n                var _iteratorError3 = undefined;\n\n                try {\n                    for (var _iterator3 = range.getItems()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n                        var item = _step3.value;\n\n                        if (schema.checkAttribute(item, this.attributeKey)) {\n                            return item.getAttribute(this.attributeKey);\n                        }\n                    }\n                } catch (err) {\n                    _didIteratorError3 = true;\n                    _iteratorError3 = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion3 && _iterator3.return) {\n                            _iterator3.return();\n                        }\n                    } finally {\n                        if (_didIteratorError3) {\n                            throw _iteratorError3;\n                        }\n                    }\n                }\n            }\n        } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n        } finally {\n            try {\n                if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                    _iterator2.return();\n                }\n            } finally {\n                if (_didIteratorError2) {\n                    throw _iteratorError2;\n                }\n            }\n        }\n\n        return undefined;\n    }\n}; // Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted\n\nexports.default = InlineStylesCommand;\n\n//# sourceURL=webpack:///./src/InlineStylesCommand.js?");

/***/ }),

/***/ "./src/InlineStylesEditing.js":
/*!************************************!*\
  !*** ./src/InlineStylesEditing.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ckeditor5Exports = __webpack_require__(/*! ckeditor5-exports */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js\");\n\nvar _InlineStylesCommand = __webpack_require__(/*! ./InlineStylesCommand */ \"./src/InlineStylesCommand.js\");\n\nvar _InlineStylesCommand2 = _interopRequireDefault(_InlineStylesCommand);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * FACTORY FUNCTION for the plugin\n * needs the current preset configuration as parameter.\n */\nexports.default = function (presetIdentifier, presetConfiguration) {\n    return class InlineStylesEditing extends _ckeditor5Exports.Plugin {\n        init() {\n            var schema = this.editor.model.schema;\n            var optionIdentifiers = Object.keys(presetConfiguration.options);\n            var modelAttributeKey = 'inlineStyles-' + presetIdentifier;\n\n            schema.extend('$text', { allowAttributes: modelAttributeKey });\n\n            // https://ckeditor.com/docs/ckeditor5/latest/features/remove-format.html\n            schema.setAttributeProperties(modelAttributeKey, { isFormatting: true });\n\n            // Model configuration\n            var config = {\n                model: {\n                    key: modelAttributeKey,\n                    values: optionIdentifiers\n                },\n                view: {}\n            };\n\n            // View configuration\n            optionIdentifiers.forEach(function (optionIdentifier) {\n                var options = presetConfiguration.options[optionIdentifier];\n                var attribute = options.attribute;\n\n                var classes = options.attributeValue || options.cssClass;\n\n                config.view[optionIdentifier] = {\n                    name: 'span',\n                    attributes: _defineProperty({}, attribute ? attribute : 'class', classes)\n                };\n            });\n\n            // Convert the model to view correctly\n            this.editor.conversion.attributeToElement(config);\n\n            this.editor.commands.add('inlineStyles:' + presetIdentifier, new _InlineStylesCommand2.default(this.editor, modelAttributeKey));\n        }\n    };\n};\n\n//# sourceURL=webpack:///./src/InlineStylesEditing.js?");

/***/ }),

/***/ "./src/PresetType.js":
/*!***************************!*\
  !*** ./src/PresetType.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction attributeValueOrCssClass(props, propName, componentName) {\n    if (props[propName] && typeof props[propName] !== 'string') {\n        return new Error('Prop \\'' + propName + '\\' must be a string.');\n    }\n    if (!props.attributeValue && !props.cssClass) {\n        return new Error('Either prop \\'attributeValue\\' or \\'cssClass\\' must be supplied to ' + componentName + '.');\n    }\n}\n\nexports.default = _propTypes2.default.shape({\n    label: _propTypes2.default.string.isRequired,\n\n    // keys are the option values\n    options: _propTypes2.default.objectOf(_propTypes2.default.shape({\n        label: _propTypes2.default.string.isRequired,\n        attribute: _propTypes2.default.string,\n        attributeValue: attributeValueOrCssClass,\n        cssClass: attributeValueOrCssClass\n    }))\n});\n\n//# sourceURL=webpack:///./src/PresetType.js?");

/***/ }),

/***/ "./src/components/BlockStyleSelector.js":
/*!**********************************************!*\
  !*** ./src/components/BlockStyleSelector.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _dec, _class, _class2, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _PresetType = __webpack_require__(/*! ../PresetType */ \"./src/PresetType.js\");\n\nvar _PresetType2 = _interopRequireDefault(_PresetType);\n\nvar _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js\");\n\nvar _neosUiCkeditor5Bindings = __webpack_require__(/*! @neos-project/neos-ui-ckeditor5-bindings */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js\");\n\nvar CkEditorApi = _interopRequireWildcard(_neosUiCkeditor5Bindings);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BlockStyleSelector = (_dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n    formattingUnderCursor: _neosUiReduxStore.selectors.UI.ContentCanvas.formattingUnderCursor\n})), _dec(_class = (_temp = _class2 = class BlockStyleSelector extends _react.PureComponent {\n\n    constructor() {\n        super(...arguments);\n\n        this.handleOnSelect = this.handleOnSelect.bind(this);\n    }\n\n    render() {\n        var optionsForSelect = Object.entries(this.props.presetConfiguration.options).map(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n                optionIdentifier = _ref2[0],\n                optionConfiguration = _ref2[1];\n\n            return {\n                value: optionIdentifier,\n                label: optionConfiguration.label\n            };\n        });\n\n        if (optionsForSelect.length === 0) {\n            return null;\n        }\n\n        var currentValue = this.props.formattingUnderCursor['blockStyles:' + this.props.presetIdentifier];\n\n        return _react2.default.createElement(_reactUiComponents.SelectBox, {\n            options: optionsForSelect,\n            value: currentValue,\n            allowEmpty: true,\n            placeholder: this.props.presetConfiguration.label,\n            onValueChange: this.handleOnSelect\n        });\n    }\n\n    handleOnSelect(optionIdentifier) {\n        CkEditorApi.executeCommand('blockStyles:' + this.props.presetIdentifier, { value: optionIdentifier });\n    }\n}, _class2.propTypes = {\n    // from outside props\n    presetIdentifier: _propTypes2.default.string.isRequired,\n    presetConfiguration: _PresetType2.default.isRequired,\n\n    // from @connect\n    formattingUnderCursor: _propTypes2.default.object\n}, _temp)) || _class);\nexports.default = BlockStyleSelector;\n\n//# sourceURL=webpack:///./src/components/BlockStyleSelector.js?");

/***/ }),

/***/ "./src/components/InlineStyleSelector.js":
/*!***********************************************!*\
  !*** ./src/components/InlineStyleSelector.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _dec, _class, _class2, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js\");\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _PresetType = __webpack_require__(/*! ../PresetType */ \"./src/PresetType.js\");\n\nvar _PresetType2 = _interopRequireDefault(_PresetType);\n\nvar _neosUiReduxStore = __webpack_require__(/*! @neos-project/neos-ui-redux-store */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js\");\n\nvar _neosUiCkeditor5Bindings = __webpack_require__(/*! @neos-project/neos-ui-ckeditor5-bindings */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js\");\n\nvar CkEditorApi = _interopRequireWildcard(_neosUiCkeditor5Bindings);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar InlineStyleSelector = (_dec = (0, _reactRedux.connect)((0, _plowJs.$transform)({\n    formattingUnderCursor: _neosUiReduxStore.selectors.UI.ContentCanvas.formattingUnderCursor\n})), _dec(_class = (_temp = _class2 = class InlineStyleSelector extends _react.PureComponent {\n\n    constructor() {\n        super(...arguments);\n\n        this.handleOnSelect = this.handleOnSelect.bind(this);\n    }\n\n    render() {\n        var optionsForSelect = Object.entries(this.props.presetConfiguration.options).map(function (_ref) {\n            var _ref2 = _slicedToArray(_ref, 2),\n                optionIdentifier = _ref2[0],\n                optionConfiguration = _ref2[1];\n\n            return {\n                value: optionIdentifier,\n                label: optionConfiguration.label\n            };\n        });\n\n        if (optionsForSelect.length === 0) {\n            return null;\n        }\n\n        var currentValue = this.props.formattingUnderCursor['inlineStyles:' + this.props.presetIdentifier];\n\n        return _react2.default.createElement(_reactUiComponents.SelectBox, {\n            options: optionsForSelect,\n            value: currentValue,\n            allowEmpty: true,\n            placeholder: this.props.presetConfiguration.label,\n            onValueChange: this.handleOnSelect\n        });\n    }\n\n    handleOnSelect(optionIdentifier) {\n        CkEditorApi.executeCommand('inlineStyles:' + this.props.presetIdentifier, { value: optionIdentifier });\n    }\n}, _class2.propTypes = {\n    // from outside props\n    presetIdentifier: _propTypes2.default.string.isRequired,\n    presetConfiguration: _PresetType2.default.isRequired,\n\n    // from @connect\n    formattingUnderCursor: _propTypes2.default.object\n}, _temp)) || _class);\nexports.default = InlineStyleSelector;\n\n//# sourceURL=webpack:///./src/components/InlineStyleSelector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./manifest */ \"./src/manifest.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/index.js\");\n\nvar _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);\n\nvar _plowJs = __webpack_require__(/*! plow-js */ \"./node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js\");\n\nvar _InlineStylesEditing = __webpack_require__(/*! ./InlineStylesEditing */ \"./src/InlineStylesEditing.js\");\n\nvar _InlineStylesEditing2 = _interopRequireDefault(_InlineStylesEditing);\n\nvar _InlineStyleSelector = __webpack_require__(/*! ./components/InlineStyleSelector */ \"./src/components/InlineStyleSelector.js\");\n\nvar _InlineStyleSelector2 = _interopRequireDefault(_InlineStyleSelector);\n\nvar _BlockStyleEditing = __webpack_require__(/*! ./BlockStyleEditing */ \"./src/BlockStyleEditing.js\");\n\nvar _BlockStyleEditing2 = _interopRequireDefault(_BlockStyleEditing);\n\nvar _BlockStyleSelector = __webpack_require__(/*! ./components/BlockStyleSelector */ \"./src/components/BlockStyleSelector.js\");\n\nvar _BlockStyleSelector2 = _interopRequireDefault(_BlockStyleSelector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _neosUiExtensibility2.default)('TechDivision.CkStyles:Styles', {}, function (globalRegistry, _ref) {\n    var frontendConfiguration = _ref.frontendConfiguration;\n\n\n    var ckEditorRegistry = globalRegistry.get('ckEditor5');\n    var richtextToolbar = ckEditorRegistry.get('richtextToolbar');\n    var config = ckEditorRegistry.get('config');\n\n    var inlineStyleConfiguration = frontendConfiguration['TechDivision.CkStyles:InlineStyles'];\n    var blockStyleConfiguration = frontendConfiguration['TechDivision.CkStyles:BlockStyles'];\n\n    // Block style\n    if (blockStyleConfiguration) {\n\n        Object.keys(blockStyleConfiguration.presets).forEach(function (presetIdentifier) {\n\n            var blockStylePresetConfiguration = blockStyleConfiguration.presets[presetIdentifier];\n\n            config.set('TechDivision.CkStyles:BlockStyles_' + presetIdentifier, function (ckEditorConfiguration, _ref2) {\n                var editorOptions = _ref2.editorOptions;\n\n                var editing = (0, _BlockStyleEditing2.default)(presetIdentifier, blockStylePresetConfiguration);\n                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];\n                ckEditorConfiguration.plugins.push(editing);\n                return ckEditorConfiguration;\n            });\n\n            richtextToolbar.set('blockStyles_' + presetIdentifier, {\n                component: _BlockStyleSelector2.default,\n                // Display only if the preset is activated in NodeType.yaml for this node property\n                isVisible: function isVisible(editorOptions, formattingUnderCursor) {\n                    var isVisible = false;\n                    if (editorOptions['blockStyling'] !== undefined && editorOptions['blockStyling'][presetIdentifier] !== undefined) {\n                        isVisible = editorOptions['blockStyling'][presetIdentifier];\n                    }\n                    return isVisible;\n                },\n                presetIdentifier: presetIdentifier,\n                presetConfiguration: blockStylePresetConfiguration\n            });\n        });\n    }\n\n    //Inline Style\n    if (inlineStyleConfiguration) {\n\n        Object.keys(inlineStyleConfiguration.presets).forEach(function (presetIdentifier) {\n\n            var inlineStylePresetConfiguration = inlineStyleConfiguration.presets[presetIdentifier];\n\n            config.set('TechDivision.CkStyle:InlineStyles_' + presetIdentifier, function (ckEditorConfiguration, _ref3) {\n                var editorOptions = _ref3.editorOptions;\n\n                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];\n                ckEditorConfiguration.plugins.push((0, _InlineStylesEditing2.default)(presetIdentifier, inlineStylePresetConfiguration));\n                return ckEditorConfiguration;\n            });\n\n            richtextToolbar.set('inlineStyles_' + presetIdentifier, {\n                component: _InlineStyleSelector2.default,\n                // Display only if the preset is activated in NodeType.yaml for this node property\n                isVisible: function isVisible(editorOptions, formattingUnderCursor) {\n                    var isVisible = false;\n                    if (editorOptions['inlineStyling'] !== undefined && editorOptions['inlineStyling'][presetIdentifier] !== undefined) {\n                        isVisible = editorOptions['inlineStyling'][presetIdentifier];\n                    }\n                    return isVisible;\n                },\n                presetIdentifier: presetIdentifier,\n                presetConfiguration: inlineStylePresetConfiguration\n            });\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/manifest.js?");

/***/ })

/******/ });