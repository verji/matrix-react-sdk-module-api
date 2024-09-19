"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupEncryptionKind = exports.DefaultCryptoSetupExtensions = exports.CryptoSetupExtensionsBase = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
 * Types copied (and renamed) from matrix-js-sdk
 */

/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L39-L50
 */

/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L59-L71
 */

/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L78
 */

/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L85-L97
 */

/*
 * Copied from https://github.com/matrix-org/matrix-react-sdk/blob/11096b207a1510569f5c54182e328f6148a6475c/src/MatrixClientPeg.ts#L57-L67
 */

/**
 * Copied from https://github.com/matrix-org/matrix-react-sdk/blob/11096b207a1510569f5c54182e328f6148a6475c/src/toasts/SetupEncryptionToast.ts#L71-L75
 */
var SetupEncryptionKind;
exports.SetupEncryptionKind = SetupEncryptionKind;

(function (SetupEncryptionKind) {
  SetupEncryptionKind["SetUpEncryption"] = "set_up_encryption";
  SetupEncryptionKind["UpgradeEncryption"] = "upgrade_encryption";
  SetupEncryptionKind["VerifyThisSessions"] = "verify_this_session";
})(SetupEncryptionKind || (exports.SetupEncryptionKind = SetupEncryptionKind = {}));

var CryptoSetupExtensionsBase = /*#__PURE__*/(0, _createClass2["default"])(function CryptoSetupExtensionsBase() {
  (0, _classCallCheck2["default"])(this, CryptoSetupExtensionsBase);
  (0, _defineProperty2["default"])(this, "SHOW_ENCRYPTION_SETUP_UI", void 0);
});
/* Define an interface for setupEncryptionNeeded to help enforce mandatory arguments */

exports.CryptoSetupExtensionsBase = CryptoSetupExtensionsBase;

/**
 *
 * The default/empty crypto-extensions
 * Can (and will) be used if none of the modules has an implementaion of IProvideCryptoSetupExtensions
 *
 * */
var DefaultCryptoSetupExtensions = /*#__PURE__*/function (_CryptoSetupExtension) {
  (0, _inherits2["default"])(DefaultCryptoSetupExtensions, _CryptoSetupExtension);

  var _super = _createSuper(DefaultCryptoSetupExtensions);

  function DefaultCryptoSetupExtensions() {
    var _this;

    (0, _classCallCheck2["default"])(this, DefaultCryptoSetupExtensions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SHOW_ENCRYPTION_SETUP_UI", true);
    return _this;
  }

  (0, _createClass2["default"])(DefaultCryptoSetupExtensions, [{
    key: "examineLoginResponse",
    value: function examineLoginResponse(response, credentials) {
      console.log("Default empty examineLoginResponse() => void");
    }
  }, {
    key: "persistCredentials",
    value: function persistCredentials(credentials) {
      console.log("Default empty persistCredentials() => void");
    }
  }, {
    key: "getSecretStorageKey",
    value: function getSecretStorageKey() {
      console.log("Default empty getSecretStorageKey() => null");
      return null;
    }
  }, {
    key: "createSecretStorageKey",
    value: function createSecretStorageKey() {
      console.log("Default empty createSecretStorageKey() => null");
      return null;
    }
  }, {
    key: "catchAccessSecretStorageError",
    value: function catchAccessSecretStorageError(e) {
      console.log("Default catchAccessSecretStorageError() => void");
    }
  }, {
    key: "setupEncryptionNeeded",
    value: function setupEncryptionNeeded(args) {
      console.log("Default setupEncryptionNeeded() => false");
      return false;
    }
  }, {
    key: "getDehydrationKeyCallback",
    value: function getDehydrationKeyCallback() {
      console.log("Default empty getDehydrationKeyCallback() => null");
      return null;
    }
  }]);
  return DefaultCryptoSetupExtensions;
}(CryptoSetupExtensionsBase);

exports.DefaultCryptoSetupExtensions = DefaultCryptoSetupExtensions;