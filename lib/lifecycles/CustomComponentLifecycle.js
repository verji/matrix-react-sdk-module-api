"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomComponentLifecycle = void 0;

/*
Copyright 2024 Verji Tech AS

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
    CustomComponentLifecycle is heavily inspired by the WrapperLifecycle.ts, but is intended for a different usecase.
    Instead of appending something within the wrapper, this lifecycle should swap the contents of the wrapper with a custom component provided by a module implementation.
*/

/**
 * UserMenu lifecycle events
 */
var CustomComponentLifecycle;
/**
 * Opts object that is populated with a Wrapper.
 */

exports.CustomComponentLifecycle = CustomComponentLifecycle;

(function (CustomComponentLifecycle) {
  CustomComponentLifecycle["AppsDrawer"] = "apps_drawer";
  CustomComponentLifecycle["EntityTile"] = "entity_tile";
  CustomComponentLifecycle["ErrorBoundary"] = "error_boundary";
  CustomComponentLifecycle["Experimental"] = "experimental";
  CustomComponentLifecycle["HelpUserSettingsTab"] = "help_user_settings_tab";
  CustomComponentLifecycle["LegacyRoomHeader"] = "legacy_room_header";
  CustomComponentLifecycle["LeftPanel"] = "left_panel";
  CustomComponentLifecycle["LoggedInView"] = "logged_in_view";
  CustomComponentLifecycle["MatrixChat"] = "matrix_chat";
  CustomComponentLifecycle["MemberTile"] = "member_tile";
  CustomComponentLifecycle["MessageContextMenu"] = "message_context_menu";
  CustomComponentLifecycle["NewsAndOperatingMessages"] = "news_and_operating_messages";
  CustomComponentLifecycle["ReactionsRow"] = "reactions_row";
  CustomComponentLifecycle["ReactionsRowButtonTooltip"] = "reactions_row_button_tooltip";
  CustomComponentLifecycle["RolesRoomSettingsTab"] = "roles_room_settings_tab";
  CustomComponentLifecycle["RoomHeader"] = "room_header";
  CustomComponentLifecycle["RoomView"] = "room_view";
  CustomComponentLifecycle["SessionManagerTab"] = "session_manage_tab";
  CustomComponentLifecycle["SpacePanel"] = "space_panel";
  CustomComponentLifecycle["UserMenu"] = "user_menu";
  CustomComponentLifecycle["InviteDialog"] = "invite_dialog";
})(CustomComponentLifecycle || (exports.CustomComponentLifecycle = CustomComponentLifecycle = {}));