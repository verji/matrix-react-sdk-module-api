export interface SearchResultItem {
    result: MatrixEventProjection;
    context: EventContextProjection;
}

export enum DirectionProjection {
    Backward = "b",
    Forward = "f"
}

export enum RelationsHelperEventProjection {
    Add = "add",
}

type AnyListener = (...args: any) => any;
export type ListenerMap<E extends string> = { [eventName in E]: AnyListener };

export class TypedEventEmitter{}

export interface IContentProjection {
    body: any;
}

export enum EventTypeProjection {}

export interface MatrixEventProjection {
    getType (): EventTypeProjection | string;
    isRedacted(): boolean;

    getContent<T extends IContentProjection = IContentProjection>(): T;
    getSender(): string | undefined;

    getDate(): Date | null;
    getId(): string | undefined;
}

export interface IPaginateOptsProjection {
    backwards?: boolean;
    limit?: number;
}

export interface MatrixClientProjection {
     paginateEventTimeline(eventTimeline: EventTimelineProjection, opts: IPaginateOptsProjection): Promise<boolean>;
     processRoomEventsSearch<T extends ISearchResultsProjection>(searchResults: T, response: ISearchResponseProjection): T;
}

export interface RoomMemberProjection {
    userId: string;
    name: string;
}

export interface RoomStateProjection {
    members: Record<string, RoomMemberProjection>;
    getMembers(): RoomMemberProjection[];
}
export interface EventTimelineProjection {
    getState(direction: DirectionProjection): RoomStateProjection | undefined;

    getNeighbouringTimeline(direction: DirectionProjection): EventTimelineProjection | null;

    getEvents(): MatrixEventProjection[];
}

export interface RoomProjection{
    getLiveTimeline(): EventTimelineProjection;
}

export interface IResultRoomEvents {
    count: number;
    highlights: string[];
    results: ISearchResultProjection[];
}

export interface IResultCategoriesProjection{
    room_events: IResultRoomEvents;
}

export interface ISearchResponseProjection {
    search_categories: IResultCategoriesProjection;
}

export interface SearchResultProjection {
    rank: number;
    context: EventContextProjection;
}

export interface ISearchResultProjection {
    rank: number;
}

export interface ISearchResultsProjection {
    results: SearchResultProjection[];
    highlights: string[];
    count?: number;
}

export interface EventContextProjection {
    timeline: MatrixEventProjection[];

    addEvents(events: MatrixEventProjection[], atStart: boolean): void;
    getTimeline(): MatrixEventProjection[];

    getOurEventIndex(): number;

    getEvent(): MatrixEventProjection;
}

