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

import { Optional } from "matrix-events-sdk";

interface RoomViewStoreProjection {
    // The room ID of the room currently being viewed
    getRoomId(): Optional<string>;
}


interface RoomProjection {
    // The room ID of the room currently being viewed
    roomId: string;
}

interface SpaceStoreClassProjection {
//    get matrixClient(): MatrixClient | null;
    get activeSpaceRoom(): RoomProjection | null;
}

interface RequestInit {
    /**
     * Specifies the priority of the fetch request relative to other requests of the same type.
     * Must be one of the following strings:
     *   high: A high priority fetch request relative to other requests of the same type.
     *   low: A low priority fetch request relative to other requests of the same type.
     *   auto: Automatically determine the priority of the fetch request relative to other requests of the same type (default).
     *
     * @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute
     * @see https://github.com/microsoft/TypeScript/issues/54472
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#browser_compatibility
     * Not yet supported in Safari or Firefox
     */
    priority?: "high" | "low" | "auto";
}

interface RequestOptsProjection extends Pick<RequestInit, "priority"> {
    /**
     * The alternative base url to use.
     * If not specified, uses this.opts.baseUrl
     */
    baseUrl?: string;
    /**
     * The full prefix to use e.g.
     * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
     */
    prefix?: string;
    /**
     * map of additional request headers
     */
    headers?: Record<string, string>;
    abortSignal?: AbortSignal;
    /**
     * The maximum amount of time to wait before
     * timing out the request. If not specified, there is no timeout.
     */
    localTimeoutMs?: number;
    keepAlive?: boolean; // defaults to false
    json?: boolean; // defaults to true

    // Set to true to prevent the request function from emitting a Session.logged_out event.
    // This is intended for use on endpoints where M_UNKNOWN_TOKEN is a valid/notable error response,
    // such as with token refreshes.
    inhibitLogoutEmit?: boolean;
}


export interface SdkContextClass {

    // Optional as we don't have a client on initial load if unregistered. This should be set
    // when the MatrixClient is first acquired in the dispatcher event Action.OnLoggedIn.
    // It is only safe to set this once, as updating this value will NOT notify components using
    // this Context.

    get roomViewStore(): RoomViewStoreProjection;
    get spaceStore(): SpaceStoreClassProjection; 
}


export interface ProvideUserSearchExtensions {
    getSearchContext(client:any,  sdkContext: SdkContextClass): Promise<SearchContext>
}


export interface SearchContext {
    extraBodyArgs: {[key:string]: string}|null; 
    extraRequestOptions: RequestOptsProjection;
}


export abstract class UserSearchExtensionsBase implements ProvideUserSearchExtensions {
    public abstract getSearchContext(client:any, sdkContextClass: SdkContextClass): Promise<SearchContext>    
}

/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
export class DefaultUserSearchExtensions extends UserSearchExtensionsBase {

    public async getSearchContext(client:any, sdkContext: SdkContextClass): Promise<SearchContext> {
        console.log("Default resolveSearchContext() => {}");
        return {
            extraBodyArgs: {},
            extraRequestOptions: {}
        }
    }
}
