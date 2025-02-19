"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperLifecycle = void 0;
/*
Copyright 2023 Mikhail Aheichyk
Copyright 2023 Nordeck IT + Consulting GmbH.

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
 * Wrapper lifecycle events
 */
var WrapperLifecycle = exports.WrapperLifecycle = /*#__PURE__*/function (WrapperLifecycle) {
  /**
   * An event to request the wrapper. It is sent by Element to get the wrapper provided by the module if any.
   */
  WrapperLifecycle["Wrapper"] = "wrapper";
  return WrapperLifecycle;
}({});
/**
 * Opts object that is populated with a Wrapper.
 */
/**
 * Helper type that documents how to implement a wrapper listener.
 */
//# sourceMappingURL=WrapperLifecycle.js.map