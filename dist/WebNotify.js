(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WebNotify"] = factory();
	else
		root["WebNotify"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WebNotify = __webpack_require__(1);

var _WebNotify2 = _interopRequireDefault(_WebNotify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _WebNotify2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Permission = __webpack_require__(2);

var _Permission2 = _interopRequireDefault(_Permission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _isFunction(obj) {
  return obj && {}.toString.call(obj) === '[object Function]';
}

function _showNotification(title, options) {
  var _this = this;

  var notification = new Notification(title, options);
  if (notification !== null) {
    if (_isFunction(options.onShow)) {
      notification.addEventListener('show', options.onShow);
    }
    if (_isFunction(options.onError)) {
      notification.addEventListener('error', options.onError);
    }
    if (_isFunction(options.onClick)) {
      notification.addEventListener('click', options.onClick);
    }
    notification.addEventListener('close', function () {
      if (_isFunction(options.onClose)) {
        options.onClose.call(_this, notification);
      }
    });
  }
}

var WebNotify = function () {
  function WebNotify() {
    _classCallCheck(this, WebNotify);

    this.Permission = new _Permission2.default();
  }

  _createClass(WebNotify, [{
    key: 'create',
    value: function create(title, options) {
      this._title = title;
      this._options = options || {};
      if (!this.Permission.has()) {
        this.Permission.request();
      }
      _showNotification(this._title, this._options);
    }
  }]);

  return WebNotify;
}();

exports.default = WebNotify;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Permission = function () {
  function Permission() {
    _classCallCheck(this, Permission);

    this.DEFAULT = 'default';
    this.GRANTED = 'granted';
    this.DENIED = 'denied';
    this.UNKNOW = 'unknow';
  }

  _createClass(Permission, [{
    key: 'request',
    value: function request(onGranted, onDenied) {
      var _this = this;

      var existing = this.get();

      var resolve = function resolve(result) {
        if (result === _this.GRANTED || result === 0) {
          if (onGranted) onGranted();
        } else {
          if (onDenied) onDenied();
        };
      };

      if (existing !== this.DEFAULT) {
        resolve(existing);
      } else if (window.Notification && window.Notification.requestPermission) {
        window.Notification.requestPermission().then(resolve).catch(function () {
          if (onDenied) onDenied();
        });
      }
    }
  }, {
    key: 'has',
    value: function has() {
      return this.get() === this.GRANTED;
    }
  }, {
    key: 'get',
    value: function get() {
      var permission = null;

      if (window.Notification && window.Notification.permission) {
        permission = window.Notification.permission;
      } else {
        permission = this.UNKNOW;
      }

      return permission;
    }
  }]);

  return Permission;
}();

exports.default = Permission;

/***/ })
/******/ ]);
});