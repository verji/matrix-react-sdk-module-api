import { ComponentType, PropsWithChildren } from "react";
/**
 * UserMenu lifecycle events
 */
export declare enum CustomComponentLifecycle {
    /**
     * An event to request the component module. `ModuleRunner` should invoke an event matching the wrapped component.
     * so any custom module can get the component provided by the module if any.
     */
    AppsDrawer = "apps_drawer",
    EntityTile = "entity_tile",
    ErrorBoundary = "error_boundary",
    Experimental = "experimental",
    HelpUserSettingsTab = "help_user_settings_tab",
    LegacyRoomHeader = "legacy_room_header",
    LeftPanel = "left_panel",
    LoggedInView = "logged_in_view",
    MatrixChat = "matrix_chat",
    MemberTile = "member_tile",
    MessageContextMenu = "message_context_menu",
    NewsAndOperatingMessages = "news_and_operating_messages",
    ReactionsRow = "reactions_row",
    ReactionsRowButtonTooltip = "reactions_row_button_tooltip",
    RolesRoomSettingsTab = "roles_room_settings_tab",
    RoomHeader = "room_header",
    RoomView = "room_view",
    SessionManagerTab = "session_manage_tab",
    SpacePanel = "space_panel",
    UserMenu = "user_menu"
}
/**
 * Opts object that is populated with a Wrapper.
 */
export declare type CustomComponentOpts = {
    /**
     * A Wrapper React Component to be rendered around a component to swap. i.e the component to override.
     */
    CustomComponent: ComponentType<PropsWithChildren<{}>>;
};
/**
 * Helper type that documents how to implement a UserMenu listener.
 */
export declare type CustomComponentListener = (opts: CustomComponentOpts) => void;
