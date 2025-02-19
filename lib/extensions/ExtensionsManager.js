"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtensionsManager = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _CryptoSetupExtensions = require("./CryptoSetupExtensions");
var _ExperimentalExtensions = require("./ExperimentalExtensions");
var _UserSearchExtensions = require("./UserSearchExtensions");
var _EventSearchExtensions = require("./EventSearchExtensions");
/**
 * Handles and manages extensions provided by modules.
 */
var ExtensionsManager = exports.ExtensionsManager = /*#__PURE__*/function () {
  /**
   * Create a new instance.
   */
  function ExtensionsManager() {
    (0, _classCallCheck2["default"])(this, ExtensionsManager);
    // Private backing fields for extensions
    (0, _defineProperty2["default"])(this, "cryptoSetupExtension", void 0);
    (0, _defineProperty2["default"])(this, "experimentalExtension", void 0);
    (0, _defineProperty2["default"])(this, "userSearchExtension", void 0);
    (0, _defineProperty2["default"])(this, "eventSearchExtension", void 0);
    /** `true` if `cryptoSetupExtension` is the default implementation; `false` if it is implemented by a module. */
    (0, _defineProperty2["default"])(this, "hasDefaultCryptoSetupExtension", true);
    /** `true` if `userSearchExtension` is the default implementation; `false` if it is implemented by a module. */
    (0, _defineProperty2["default"])(this, "hasDefaultUserSearchExtension", true);
    /** `true` if `eventSearchExtension` is the default implementation; `false` if it is implemented by a module. */
    (0, _defineProperty2["default"])(this, "hasDefaultEventSearchExtension", true);
    /** `true` if `experimentalExtension` is the default implementation; `false` if it is implemented by a module. */
    (0, _defineProperty2["default"])(this, "hasDefaultExperimentalExtension", true);
    // Set up defaults
    this.cryptoSetupExtension = new _CryptoSetupExtensions.DefaultCryptoSetupExtensions();
    this.experimentalExtension = new _ExperimentalExtensions.DefaultExperimentalExtensions();
    this.userSearchExtension = new _UserSearchExtensions.DefaultUserSearchExtensions();
    this.eventSearchExtension = new _EventSearchExtensions.DefaultEventSearchExtensions();
  }

  /**
   * Provides a crypto setup extension.
   *
   * @returns The registered extension. If no module provides this extension, a default implementation is returned.
   */
  return (0, _createClass2["default"])(ExtensionsManager, [{
    key: "cryptoSetup",
    get: function get() {
      return this.cryptoSetupExtension;
    }

    /**
     * Provides a user search extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
  }, {
    key: "userSearch",
    get: function get() {
      return this.userSearchExtension;
    }

    /**
     * Provides a event search extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
  }, {
    key: "eventSearchModule",
    get: function get() {
      return this.eventSearchExtension;
    }

    /**
     * Provides an experimental extension.
     *
     * @remarks
     * This method extension is provided to simplify experimentation and development, and is not intended for production code.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
  }, {
    key: "experimental",
    get: function get() {
      return this.experimentalExtension;
    }

    /**
     * Add any extensions provided by the module.
     *
     * @param module - The appModule to check for extensions.
     *
     * @throws if an extension is provided by more than one module.
     */
  }, {
    key: "addExtensions",
    value: function addExtensions(module) {
      var _module$extensions, _module$extensions3, _module$extensions5, _module$extensions7;
      /* Add the cryptoSetup extension if any */
      if ((_module$extensions = module.extensions) !== null && _module$extensions !== void 0 && _module$extensions.cryptoSetup) {
        if (this.hasDefaultCryptoSetupExtension) {
          var _module$extensions2;
          this.cryptoSetupExtension = (_module$extensions2 = module.extensions) === null || _module$extensions2 === void 0 ? void 0 : _module$extensions2.cryptoSetup;
          this.hasDefaultCryptoSetupExtension = false;
        } else {
          throw new Error("adding cryptoSetup extension implementation from module ".concat(module.moduleName, " but an implementation was already provided."));
        }
      }

      /* Add the userSearch extension if any */
      if ((_module$extensions3 = module.extensions) !== null && _module$extensions3 !== void 0 && _module$extensions3.userSearch) {
        if (this.hasDefaultUserSearchExtension) {
          var _module$extensions4;
          this.userSearchExtension = (_module$extensions4 = module.extensions) === null || _module$extensions4 === void 0 ? void 0 : _module$extensions4.userSearch;
          this.hasDefaultUserSearchExtension = false;
        } else {
          throw new Error("adding userSearch extension implementation from module ".concat(module.moduleName, " but an implementation was already provided."));
        }
      }

      /* Add the eventSearch extension if any */
      if ((_module$extensions5 = module.extensions) !== null && _module$extensions5 !== void 0 && _module$extensions5.eventSearchModule) {
        if (this.hasDefaultEventSearchExtension) {
          var _module$extensions6;
          this.eventSearchExtension = (_module$extensions6 = module.extensions) === null || _module$extensions6 === void 0 ? void 0 : _module$extensions6.eventSearchModule;
          this.hasDefaultEventSearchExtension = false;
        } else {
          throw new Error("adding eventSearch extension implementation from module ".concat(module.moduleName, " but an implementation was already provided."));
        }
      }

      /* Add the experimental extension if any */
      if ((_module$extensions7 = module.extensions) !== null && _module$extensions7 !== void 0 && _module$extensions7.experimental) {
        if (this.hasDefaultExperimentalExtension) {
          var _module$extensions8;
          this.experimentalExtension = (_module$extensions8 = module.extensions) === null || _module$extensions8 === void 0 ? void 0 : _module$extensions8.experimental;
          this.hasDefaultExperimentalExtension = false;
        } else {
          throw new Error("adding experimental extension implementation from module ".concat(module.moduleName, " but an implementation was already provided."));
        }
      }
    }
  }]);
}();
//# sourceMappingURL=ExtensionsManager.js.map