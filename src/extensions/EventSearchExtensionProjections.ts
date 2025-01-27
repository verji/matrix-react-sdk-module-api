// import { EventContext } from "matrix-js-sdk/src/models/event-context"; // eslint-disable-line
// import { EventContext } from "matrix-js-sdk/src/models/event-context"; // eslint-disable-line
// import { MatrixEvent } from "matrix-js-sdk/src/models/event"; // eslint-disable-line

export interface SearchResultItem {
    result: MatrixEventProjection;
    context: EventContextProjection;
}

export enum DirectionProjection {
    Backward = "b",
    Forward = "f",
}

export enum RelationsHelperEventProjection {
    Add = "add",
}

interface EventMap {
    [RelationsHelperEventProjection.Add]: (event: MatrixEventProjection) => void;
}

type AnyListener = (...args: any) => any;
export type ListenerMap<E extends string> = { [eventName in E]: AnyListener };

export class TypedEventEmitter<
    Events extends string,
    Arguments extends ListenerMap<Events>,
    SuperclassArguments extends ListenerMap<any> = Arguments,
> {};

export interface IContentProjection {
    body: any;
};

export enum EventTypeProjection {};

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

export interface  MatrixClientProjection {
     paginateEventTimeline(eventTimeline: EventTimelineProjection, opts: IPaginateOptsProjection): Promise<boolean>;
    //  processRoomEventsSearch(searchResults, searchResponse);
     processRoomEventsSearch<T extends ISearchResultsProjection>(searchResults: T, response: ISearchResponseProjection): T;
}

export interface RoomMemberProjection {
    userId: string;
    name: string;
}

export interface RoomStateProjection  {
    members: Record<string, RoomMemberProjection>;
    getMembers(): RoomMemberProjection[];
}
export interface EventTimelineProjection {
    getState(direction: DirectionProjection): RoomStateProjection | undefined;

    getNeighbouringTimeline(direction: DirectionProjection): EventTimelineProjection | null;

    getEvents(): MatrixEventProjection[];
}

export interface RoomProjection{
    getLiveTimeline() :EventTimelineProjection;
}

export interface IResultRoomEvents {
    count: number;
    highlights: string[];
    results: ISearchResultProjection[];
};

export interface IResultCategoriesProjection{
    room_events: IResultRoomEvents;
};

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

export class EventContextProjectionClass {
    public timeline: MatrixEventProjection[]
    public constructor(public readonly ourEvent: MatrixEventProjection) {
        this.timeline = [ourEvent];
    }
}
export interface EventContextProjection {
    timeline : MatrixEventProjection[];

    addEvents(events: MatrixEventProjection[], atStart: boolean): void;
    getTimeline(): MatrixEventProjection[];

    getOurEventIndex(): number;

    getEvent(): MatrixEventProjection;
}


// export function convertRes(client: MatrixClientProjection, matches : SearchResultItem[]) : any
// export function convertRes(client: MatrixClientProjection, room: RoomProjection, termObj:any, memberObj : any) : any
// {
//     const searchResults: ISearchResultsProjection = {
//         results: [],
//         highlights: [],
//         count: 0,
//     };

//     const matches = findAllMatches(termObj, room, memberObj);

//     // const converted : 

//     // Process the matches to produce the equivalent result from a client.search() call
//     // const searchResponse = getClientSearchResponse(searchResults, converted);

//     // mimic the original code
//     // const results = client.processRoomEventsSearch(searchResults, searchResponse);

//     return matches;

// }

//  export function createResultObj(roomEvent : MatrixEvent, prevEvent: MatrixEvent) : EventContext {
// // export function createResultObj(roomEvent : MatrixEventProjection, prevEvent: MatrixEventProjection) : EventContext {
//     const evCtx = new EventContext(roomEvent);
//     if (prevEvent !== null) {
//         evCtx.addEvents([prevEvent], true);
//     }

//     return evCtx;
// }

// export function reverseEventContext(eventContext: EventContext): EventContextProjection {
//     const contextTimeline = eventContext.getTimeline();
//     const ourEventIndex = eventContext.getOurEventIndex();
//     const ourEvent = eventContext.getEvent();
//     const reversedContext = new EventContext(contextTimeline[ourEventIndex]);
//     let afterOurEvent = false;

//     for (let i = 0; i < contextTimeline.length; i++) {
//         const event = contextTimeline[i];
//         if (event.getId() === ourEvent.getId()) {
//             afterOurEvent = true;
//             continue;
//         }
//         if (afterOurEvent) {
//             reversedContext.addEvents([event], true);
//             this.ourEventIndex += [event].length;
//         } else {
//             this.timeline = this.timeline.concat(event);
//             reversedContext.addEvents([event], false);
//         }
//     }

//     const evnt : EventContextProjection[];
//     evnt.timeline = reversedContext.getTimeline();

//     return evnt;
//     // return reversedContext;
// }




// // export function findAllMatches(termObj: SearchTerm, room: Room, matchingMembers: MemberObj): SearchResultItem[] {
// export function findAllMatches(termObj: any, room: RoomProjection, matchingMembers: any): SearchResultItem[] {
//         const matches: SearchResultItem[] = [];
//     let searchHit: SearchResultItem | null = null;
//     let prevEvent: MatrixEventProjection | null = null;
//     let timeline: EventTimelineProjection | null = room.getLiveTimeline();

//     const iterationCallback = (roomEvent: MatrixEventProjection): void => {
//         if (searchHit !== null) {
//             searchHit.context.addEvents([roomEvent], false);
//         }
//         searchHit = null;

//         if (roomEvent.getType() === "m.room.message" && !roomEvent.isRedacted()) {
//             if (eventMatchesSearchTerms(termObj, roomEvent, matchingMembers)) {
//                 const evCtx = new EventContext(roomEvent);
//                 if (prevEvent !== null) {
//                     evCtx.addEvents([prevEvent], true);
//                 }

//                 const resObj: SearchResultItem = { result: roomEvent, context: evCtx };
//                 matches.push(resObj);
//                 searchHit = resObj;
//             }

//             prevEvent = roomEvent;
//         }
//     };

//     // This code iterates over a timeline, retrieves events from the timeline, and invokes a callback function for each event in reverse order.
//     while (timeline) {
//         const events = timeline.getEvents();
//         for (let i = events.length - 1; i >= 0; i--) {
//             iterationCallback(events[i]);
//         }
//         timeline = timeline.getNeighbouringTimeline(DirectionProjection.Forward);
//     }

//     return matches;
// }

// // function getClientSearchResponse(searchResults: ISearchResults, matches: SearchResultItem[]): ISearchResponse {
// //     const response: ISearchResponse = {
// //         search_categories: {
// //             room_events: {
// //                 count: 0,
// //                 highlights: [],
// //                 results: [],
// //             },
// //         },
// //     };

// //     response.search_categories.room_events.count = matches.length;
// //     for (let i = 0; i < matches.length; i++) {
// //         const reversedContext = reverseEventContext(matches[i].context);

// //         const sr = new SearchResult(0, reversedContext);
// //         searchResults.results.push(sr);
// //     }

// //     return response;
// // }

