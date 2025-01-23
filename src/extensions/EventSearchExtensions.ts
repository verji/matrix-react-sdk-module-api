import { EventContextProjection, ISearchResultsProjection } from "./EventSearchExtensionProjections"

export interface MatrixClientProjection {
    getStateEvent(finalRoomId: string, eventType: string, stateKey: string):  Promise<Record<string, any>>;
}

/**
 * Public api surface used to consume the extension in client code
 */
export interface ProvideEventSearchExtensions {
    eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection>
}

/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
export abstract class EventSearchExtensionsBase implements ProvideEventSearchExtensions {
    public abstract eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection>;
}

/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
export class DefaultEventSearchExtensions extends EventSearchExtensionsBase {
    public async eventSearch(client: MatrixClientProjection, term: string, roomId?: string, abortSignal?: AbortSignal): Promise<ISearchResultsProjection> {
        console.log("Default resolveSearchContext()");
        const searchResults: ISearchResultsProjection = {
            results: [],
            highlights: [],
            count: 0,
        };

        return searchResults;
    }
}
