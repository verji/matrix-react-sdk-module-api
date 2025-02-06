"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupEncryptionKind = exports.DefaultCryptoSetupExtensions = exports.CryptoSetupExtensionsBase = void 0;
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
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
var SetupEncryptionKind = exports.SetupEncryptionKind = /*#__PURE__*/function (SetupEncryptionKind) {
  SetupEncryptionKind["SetUpEncryption"] = "set_up_encryption";
  SetupEncryptionKind["UpgradeEncryption"] = "upgrade_encryption";
  SetupEncryptionKind["VerifyThisSessions"] = "verify_this_session";
  return SetupEncryptionKind;
}({});
var CryptoSetupExtensionsBase = exports.CryptoSetupExtensionsBase = /*#__PURE__*/(0, _createClass2["default"])(function CryptoSetupExtensionsBase() {
  (0, _classCallCheck2["default"])(this, CryptoSetupExtensionsBase);
  (0, _defineProperty2["default"])(this, "SHOW_ENCRYPTION_SETUP_UI", void 0);
});
/* Define an interface for setupEncryptionNeeded to help enforce mandatory arguments */
/**
 *
 * The default/empty crypto-extensions
 * Can (and will) be used if none of the modules has an implementaion of IProvideCryptoSetupExtensions
 *
 * */
var DefaultCryptoSetupExtensions = exports.DefaultCryptoSetupExtensions = /*#__PURE__*/function (_CryptoSetupExtension) {
  function DefaultCryptoSetupExtensions() {
    var _this;
    (0, _classCallCheck2["default"])(this, DefaultCryptoSetupExtensions);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DefaultCryptoSetupExtensions, [].concat(args));
    (0, _defineProperty2["default"])(_this, "SHOW_ENCRYPTION_SETUP_UI", true);
    return _this;
  }
  (0, _inherits2["default"])(DefaultCryptoSetupExtensions, _CryptoSetupExtension);
  return (0, _createClass2["default"])(DefaultCryptoSetupExtensions, [{
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
}(CryptoSetupExtensionsBase);
//# sourceMappingURL=CryptoSetupExtensions.js.map