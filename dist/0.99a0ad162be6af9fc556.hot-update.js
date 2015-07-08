webpackHotUpdate(0,{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(202), RootInstanceProvider = __webpack_require__(161), ReactMount = __webpack_require__(71), React = __webpack_require__(5); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(217);

	__webpack_require__(311);

	var _reactRouter = __webpack_require__(163);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _routes = __webpack_require__(210);

	var _routes2 = _interopRequireDefault(_routes);

	// Once we bootstrap the stores, we run react-router using
	// Router.HistoryLocation
	// the element is created and we just render it into the container
	// and our application is now live
	_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
	  var node = _react2['default'].createElement(Handler);
	  _react2['default'].render(node, document.getElementById('app'));
	});

	/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(212), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(5))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } })(); }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})