import { Optional } from "matrix-events-sdk";
export interface RoomViewStoreProjection {
    getRoomId(): Optional<string>;
}
export interface RoomProjection {
    roomId: string;
}
export interface SpaceStoreClassProjection {
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
    keepAlive?: boolean;
    json?: boolean;
    inhibitLogoutEmit?: boolean;
}
export interface SdkContextClassProjection {
    get roomViewStore(): RoomViewStoreProjection;
    get spaceStore(): SpaceStoreClassProjection;
}
export interface MatrixClientProjection {
    getStateEvent(finalRoomId: string, eventType: string, stateKey: string): Promise<Record<string, any>>;
}
/**
 * Public api surface used to consume the extension in client code
 */
export interface ProvideUserSearchExtensions {
    getSearchContext(client: MatrixClientProjection | null, sdkContext: SdkContextClassProjection): Promise<SearchContext>;
}
/**
 * Abstract base class which concrete extension implementations will extend/derive from
 */
export declare abstract class UserSearchExtensionsBase implements ProvideUserSearchExtensions {
    abstract getSearchContext(client: MatrixClientProjection | null, sdkContextClass: SdkContextClassProjection): Promise<SearchContext>;
}
/**
 * Search context used to augment call to /user-directory/search
 *
 */
export interface SearchContext {
    extraBodyArgs: {
        [key: string]: string;
    } | null;
    extraRequestOptions: RequestOptsProjection;
}
/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
export declare class DefaultUserSearchExtensions extends UserSearchExtensionsBase {
    getSearchContext(client: MatrixClientProjection | null, sdkContext: SdkContextClassProjection): Promise<SearchContext>;
}
export {};
