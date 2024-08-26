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

import { RuntimeModule } from "../../src";

import {
    UserSearchExtensionsBase,
    ProvideUserSearchExtensions,
    DefaultUserSearchExtensions,
    SdkContextClassProjection,
    RoomViewStoreProjection,
    SpaceStoreClassProjection,
} from "../../src/extensions/UserSearchExtensions";

import { DefaultExperimentalExtensions, ExperimentalExtensionsBase } from "../../src/extensions/ExperimentalExtensions";

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

// describe("Custom UserSearchExtensions", () => {
//     let module: RuntimeModule;

//     beforeAll(() => {
//         module = new (class extends RuntimeModule {
//             public constructor() {
//                 super(undefined as any);

//                 this.extensions = {
//                     cryptoSetup: new (class extends CryptoSetupExtensionsBase {
//                         persistCredentials(credentials: ExtendedMatrixClientCreds): void {}
//                         catchAccessSecretStorageError(e: Error): void {}
//                         setupEncryptionNeeded(args: CryptoSetupArgs): boolean {
//                             return true;
//                         }
//                         getSecretStorageKey(): Uint8Array | null {
//                             return new Uint8Array([0xaa, 0xbb, 0xbb, 0xaa]);
//                         }
//                         createSecretStorageKey(): Uint8Array | null {
//                             return new Uint8Array([0xaa, 0xbb, 0xbb, 0xaa, 0xaa, 0xbb, 0xbb, 0xaa]);
//                         }
//                         getDehydrationKeyCallback():
//                             | ((
//                                   keyInfo: SecretStorageKeyDescription,
//                                   checkFunc: (key: Uint8Array) => void,
//                               ) => Promise<Uint8Array>)
//                             | null {
//                             return (_, __) => Promise.resolve(new Uint8Array([0x0, 0x1, 0x2, 0x3]));
//                         }
//                         examineLoginResponse(response: any, credentials: ExtendedMatrixClientCreds): void {
//                             credentials.secureBackupKey = "my secure backup key";
//                         }
//                         SHOW_ENCRYPTION_SETUP_UI: boolean = false;
//                     })(),
//                 };
//             }
//         })();
//     });

// });
