import { ISearchResultsProjection } from "./EventSearchExtensionProjections";
export interface MatrixClientProjection {
    getStateEvent(finalRoomId: string, eventType: string, stateKey: string): Promise<Record<string, any>>;
}
/**
 * Public api surface used to consume the extension in client code
 */
export interface ProvideEventSearchExtensions {
    eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection>;
}
/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
export declare abstract class EventSearchExtensionsBase implements ProvideEventSearchExtensions {
    abstract eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection>;
}
/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
export declare class DefaultEventSearchExtensions extends EventSearchExtensionsBase {
    eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection>;
}
