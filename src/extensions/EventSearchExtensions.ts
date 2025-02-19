/*
Copyright 2023 Verji Tech AS
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

import { ISearchResultsProjection } from "./EventSearchExtensionProjections";

export interface MatrixClientProjection {
    getStateEvent(finalRoomId: string, eventType: string, stateKey: string): Promise<Record<string, any>>;
}

/**
 * Public api surface used to consume the extension in client code
 */
export interface ProvideEventSearchExtensions {
    eventSearch(
        client: MatrixClientProjection,
        term: string,
        roomId?: string,
        abortSignal?: AbortSignal,
    ): Promise<ISearchResultsProjection>;
}

/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
export abstract class EventSearchExtensionsBase implements ProvideEventSearchExtensions {
    public abstract eventSearch(
        client: MatrixClientProjection,
        term: string,
        roomId?: string,
        abortSignal?: AbortSignal,
    ): Promise<ISearchResultsProjection>;
}

/**
 *
 * The default/empty eventsearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideEventSearchExtensions
 *
 * */
export class DefaultEventSearchExtensions extends EventSearchExtensionsBase {
    public async eventSearch(
        client: MatrixClientProjection,
        term: string,
        roomId?: string,
        abortSignal?: AbortSignal,
    ): Promise<ISearchResultsProjection> {
        console.log("Default resolveSearchContext()");
        const searchResults: ISearchResultsProjection = {
            results: [],
            highlights: [],
            count: 0,
        };

        return searchResults;
    }
}
