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

import { RuntimeModule } from "../../src";

import {
    UserSearchExtensionsBase,
    DefaultUserSearchExtensions,
    SdkContextClassProjection,
    RoomViewStoreProjection,
    RoomProjection,
    SpaceStoreClassProjection,
    SearchContext,
} from "../../src/extensions/UserSearchExtensions";

import { DefaultExperimentalExtensions } from "../../src/extensions/ExperimentalExtensions";

describe("Defaults", () => {
    let module: RuntimeModule;

    beforeAll(() => {
        module = new (class extends RuntimeModule {
            public constructor() {
                super(undefined as any);

                this.extensions = {
                    userSearch: new DefaultUserSearchExtensions(),
                    experimental: new DefaultExperimentalExtensions(),
                };
            }
        })();
    });

    it("returns default value for getSearchContext()", async () => {
        let sdkContext = new (class implements SdkContextClassProjection {
            get roomViewStore(): RoomViewStoreProjection {
                throw new Error("Method not implemented.");
            }
            get spaceStore(): SpaceStoreClassProjection {
                throw new Error("Method not implemented.");
            }
        })();

        let result = await module.extensions!.userSearch!.getSearchContext(null, sdkContext);

        expect(Object.keys(result).length).toBe(2);
        expect(Object.keys(result)).toContain("extraBodyArgs");
        expect(Object.keys(result)).toContain("extraRequestOptions");
    });
});

describe("Custom UserSearchExtensions", () => {
    let module: RuntimeModule;

    beforeAll(() => {
        module = new (class extends RuntimeModule {
            public constructor() {
                super(undefined as any);

                this.extensions = {
                    userSearch: new (class extends UserSearchExtensionsBase {
                        public async getSearchContext(client: any, sdkContextClass: SdkContextClassProjection): Promise<SearchContext> {
                            return {
                                extraBodyArgs: {
                                    tenant_id: "my_tenant_id"
                                },
                                extraRequestOptions: {
                                    headers: {
                                        "custom-header": "custom-header-value"
                                    }
                                },
                            };                      
                        }
                    })(),
                };
            }
        })();
    });

    it("returns custom value when calling getSearchContext", async () => {
        let result = await module.extensions!.userSearch?.getSearchContext(null, {
            roomViewStore: {
                getRoomId(): Optional<string> {
                    return "#room1:example.org";                                   
                }
            },
            spaceStore: {
                get activeSpaceRoom(): RoomProjection | null {
                    return {
                        roomId: "#space:example.org",
                    };
                }
            }
        });
        expect(result?.extraBodyArgs!.tenant_id).toBe("my_tenant_id")
        expect(result?.extraRequestOptions!.headers!["custom-header"]).toBe("custom-header-value")
    });
});
