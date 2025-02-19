import React from "react";
export declare enum RoomViewLifecycle {
    PreviewRoomNotLoggedIn = "preview_not_logged_in",
    JoinFromRoomPreview = "try_join_not_logged_in",
    ViewRoom = "view_room"
}
export type RoomPreviewOpts = {
    canJoin: boolean;
};
export type ViewRoomOpts = {
    buttons: Array<{
        icon: React.ReactNode | (() => React.ReactNode);
        id: string;
        label: () => string;
        onClick: () => void;
    }>;
};
export type RoomPreviewListener = (opts: RoomPreviewOpts, roomId: string) => void;
export type JoinFromPreviewListener = (roomId: string) => void;
export type ViewRoomListener = (opts: ViewRoomOpts, roomId: string) => void;
