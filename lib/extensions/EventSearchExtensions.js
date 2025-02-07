"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventSearchExtensionsBase = exports.DefaultEventSearchExtensions = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/*
Copyright 2023 Verji Tech AS
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
 * Public api surface used to consume the extension in client code
 */
/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
var EventSearchExtensionsBase = exports.EventSearchExtensionsBase = /*#__PURE__*/(0, _createClass2["default"])(function EventSearchExtensionsBase() {
  (0, _classCallCheck2["default"])(this, EventSearchExtensionsBase);
});
/**
 *
 * The default/empty eventsearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideEventSearchExtensions
 *
 * */
var DefaultEventSearchExtensions = exports.DefaultEventSearchExtensions = /*#__PURE__*/function (_EventSearchExtension) {
  function DefaultEventSearchExtensions() {
    (0, _classCallCheck2["default"])(this, DefaultEventSearchExtensions);
    return _callSuper(this, DefaultEventSearchExtensions, arguments);
  }
  (0, _inherits2["default"])(DefaultEventSearchExtensions, _EventSearchExtension);
  return (0, _createClass2["default"])(DefaultEventSearchExtensions, [{
    key: "eventSearch",
    value: function () {
      var _eventSearch = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(client, term, roomId, abortSignal) {
        var searchResults;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("Default resolveSearchContext()");
              searchResults = {
                results: [],
                highlights: [],
                count: 0
              };
              return _context.abrupt("return", searchResults);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function eventSearch(_x, _x2, _x3, _x4) {
        return _eventSearch.apply(this, arguments);
      }
      return eventSearch;
    }()
  }]);
}(EventSearchExtensionsBase);
//# sourceMappingURL=EventSearchExtensions.js.map