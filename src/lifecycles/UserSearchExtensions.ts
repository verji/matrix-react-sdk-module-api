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


export interface SdkContextClass {

    // Optional as we don't have a client on initial load if unregistered. This should be set
    // when the MatrixClient is first acquired in the dispatcher event Action.OnLoggedIn.
    // It is only safe to set this once, as updating this value will NOT notify components using
    // this Context.

    get roomViewStore(): RoomViewStoreProjection;
    get spaceStore(): SpaceStoreClassProjection; 
}


export interface ProvideUserSearchExtensions {
    // augmentSearchRequestBody(body: {[key:string]: string}|null): {[key:string]: string}|null
    resolveSearchContext(client:any,  sdkContext: SdkContextClass): Promise<{[key:string]: string}|null>
}

export abstract class UserSearchExtensionsBase implements ProvideUserSearchExtensions {
    // public abstract augmentSearchRequestBody(body: {[key:string]: string}|null): {[key:string]: string}|null
    public abstract resolveSearchContext(client:any, sdkContextClass: SdkContextClass): Promise<{[key:string]: string}|null>    
}

/**
 *
 * The default/empty usersearch-extension
 * Can (and will) be used if none of the modules has an implementaion of ProvideUserSearchExtensions
 *
 * */
export class DefaultUserSearchExtensions extends UserSearchExtensionsBase {

    // public augmentSearchRequestBody(body: {[key:string]: string}|null):{[key:string]: string}|null {
    //     console.log("Default no-op augmentSearchRequestBody()", body);
    //     return body;
    // }

    public async resolveSearchContext(client:any, sdkContext: SdkContextClass): Promise<{[key:string]: string}|null> {
        console.log("Default resolveSearchContext() => {}");
        return {}
    }
}
