(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("React"), require("react-dom"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "React", "react-dom", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["ngReactRouter"] = factory(require("angular"), require("React"), require("react-dom"), require("lodash"));
	else
		root["ngReactRouter"] = factory(root["angular"], root["React"], root["react-dom"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
exports.provider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = __webpack_require__(1);

var _angular2 = _interopRequireDefault(_angular);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var templateProvider = function templateProvider(err, uiView) {
  if (err) {
    throw err;
  }
  var tpl = '' + uiView;
  return tpl;
};
var options = {
  state: 'react', basePath: '/react', templateProvider: templateProvider
};

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('a', _extends({
        href: options.basePath + this.props.to
      }, this.props));
    }
  }]);

  return Link;
}(_react2.default.Component);

var _injector = void 0;
var browserHistory = {
  push: function push(args) {
    var state = _injector.get('$state');
    var path = _lodash2.default.trimStart(args.pathname + args.search, '/');
    state.go(options.state, { path: path });
  }
};

window.ReactRouter = {
  Link: Link,
  browserHistory: browserHistory
};

var provider = exports.provider = function provider(opts, $stateProvider) {
  options = routeFactory.configure(opts);
  var _options = options,
      state = _options.state,
      basePath = _options.basePath,
      routeResolver = _options.routeResolver,
      _templateProvider = _options.templateProvider;

  $stateProvider.state(state, {
    url: basePath + '/:path',
    params: { path: { type: "string", raw: true } },
    templateProvider: function templateProvider($timeout, $stateParams) {
      var statePath = _lodash2.default.trimStart($stateParams.path, '/');
      return routeResolver(statePath).then(function (routes) {
        routeFactory.registerRoute(routes.path, routes);
        return new Promise(function (resolve, reject) {
          var router = '<react-router name="' + routes.path + '" path="' + statePath + '"></react-router>';
          resolve(_templateProvider(null, router));
        });
      }, function (err) {
        return new Promise(function (resolve, reject) {
          resolve(_templateProvider(err));
        });
      });
    }
  });
};
var routeFactory = function () {
  var routes = {};

  return {
    configure: function configure(opts) {
      return Object.assign({}, options, opts);
    },
    getRoute: function getRoute(name) {
      if (routes[name]) {
        return routes[name].promise;
      } else {
        routes[name] = {};
        routes[name].promise = new Promise(function (resolve) {
          routes[name].resolver = resolve;
        });
      }
      return routes[name].promise;
    },
    registerRoute: function registerRoute(name, component) {
      if (routes[name]) {
        return routes[name].resolver(component);
      } else {
        routes[name] = {};
        routes[name].promise = new Promise(function (resolve) {
          routes[name].resolver = resolve;
          resolve(component);
        });
      }
      return routes[name].promise;
    }
  };
}();
var resolveRoute = function resolveRoute(routePath, routes, query) {
  if (routePath.length == 0) {
    return null;
  }
  var path = routePath.shift();
  var component = routes.component,
      childRoutes = routes.childRoutes,
      indexRoute = routes.indexRoute;

  var children = null;
  if (routePath.length === 0 && indexRoute) {
    children = _react2.default.createElement(indexRoute.component, null, null);
  } else {
    var matchRoutes = (childRoutes || []).filter(function (route) {
      return route.path == routePath[0];
    });
    children = resolveRoute(routePath, matchRoutes[0], query);
  }
  return _react2.default.createElement(component, null, children);
};
var reactRouter = function reactRouter($injector) {
  _injector = $injector;
  return {
    restrict: 'E',
    replace: true,
    link: function link(scope, elem, attrs) {
      routeFactory.getRoute(attrs.name).then(function (routes) {
        var tmp = attrs.path.split('?');
        var query = tmp[1];
        var path = tmp[0].split('/');
        var tree = resolveRoute(path, routes, query);
        (0, _reactDom.render)(tree, elem[0]);
      });
      scope.$on('$destroy', function () {
        if (!attrs.onScopeDestroy) {
          ReactDOM.unmountComponentAtNode(elem[0]);
        } else {
          scope.$eval(attrs.onScopeDestroy, {
            unmountComponent: ReactDOM.unmountComponentAtNode.bind(this, elem[0])
          });
        }
      });
    }
  };
};
_angular2.default.module('ng-react-router', []).directive('reactRouter', ['$injector', reactRouter]);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ng-react-router.js.map