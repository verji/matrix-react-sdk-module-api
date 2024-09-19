"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserSearchExtensionsBase = exports.DefaultUserSearchExtensions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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

/*
 * A interface providing a slice/projection of the SdkContextClass in matrix-react-sdk
 */

/**
 * Public api surface used to consume the extension in client code
 */

/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
var UserSearchExtensionsBase = /*#__PURE__*/(0, _createClass2["default"])(function UserSearchExtensionsBase() {
  (0, _classCallCheck2["default"])(this, UserSearchExtensionsBase);
});
/**
 * Search context used to augment call to /user-directory/search
 *
 */

exports.UserSearchExtensionsBase = UserSearchExtensionsBase;

/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
var DefaultUserSearchExtensions = /*#__PURE__*/function (_UserSearchExtensions) {
  (0, _inherits2["default"])(DefaultUserSearchExtensions, _UserSearchExtensions);

  var _super = _createSuper(DefaultUserSearchExtensions);

  function DefaultUserSearchExtensions() {
    (0, _classCallCheck2["default"])(this, DefaultUserSearchExtensions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DefaultUserSearchExtensions, [{
    key: "getSearchContext",
    value: function () {
      var _getSearchContext = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(client, sdkContext) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("Default resolveSearchContext()");
                return _context.abrupt("return", {
                  extraBodyArgs: {},
                  extraRequestOptions: {}
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSearchContext(_x, _x2) {
        return _getSearchContext.apply(this, arguments);
      }

      return getSearchContext;
    }()
  }]);
  return DefaultUserSearchExtensions;
}(UserSearchExtensionsBase);

exports.DefaultUserSearchExtensions = DefaultUserSearchExtensions;