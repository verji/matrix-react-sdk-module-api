"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypedEventEmitter = exports.RelationsHelperEventProjection = exports.EventTypeProjection = exports.DirectionProjection = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var DirectionProjection = exports.DirectionProjection = /*#__PURE__*/function (DirectionProjection) {
  DirectionProjection["Backward"] = "b";
  DirectionProjection["Forward"] = "f";
  return DirectionProjection;
}({});
var RelationsHelperEventProjection = exports.RelationsHelperEventProjection = /*#__PURE__*/function (RelationsHelperEventProjection) {
  RelationsHelperEventProjection["Add"] = "add";
  return RelationsHelperEventProjection;
}({});
var TypedEventEmitter = exports.TypedEventEmitter = /*#__PURE__*/(0, _createClass2["default"])(function TypedEventEmitter() {
  (0, _classCallCheck2["default"])(this, TypedEventEmitter);
});
var EventTypeProjection = exports.EventTypeProjection = /*#__PURE__*/function (EventTypeProjection) {
  return EventTypeProjection;
}({});
//# sourceMappingURL=EventSearchExtensionProjections.js.map