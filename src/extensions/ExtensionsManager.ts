
import {
    DefaultCryptoSetupExtensions,
    ProvideCryptoSetupExtensions,
} from "./CryptoSetupExtensions";
import {
    DefaultExperimentalExtensions,
    ProvideExperimentalExtensions,
} from "./ExperimentalExtensions";
import {
    DefaultUserSearchExtensions,
    ProvideUserSearchExtensions,
} from "./UserSearchExtensions";
import { RuntimeModule } from "../RuntimeModule";


/**
 * Handles and manages extensions provided by modules.
 */
export class ExtensionsManager {
    // Private backing fields for extensions
    private cryptoSetupExtension: ProvideCryptoSetupExtensions;
    private experimentalExtension: ProvideExperimentalExtensions;
    private userSearchExtension: ProvideUserSearchExtensions;

    /** `true` if `cryptoSetupExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultCryptoSetupExtension = true;

    /** `true` if `userSearchExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultUserSearchExtension = true;

    /** `true` if `experimentalExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultExperimentalExtension = true;


    /**
     * Create a new instance.
     */
    public constructor() {
        // Set up defaults
        this.cryptoSetupExtension = new DefaultCryptoSetupExtensions();
        this.experimentalExtension = new DefaultExperimentalExtensions();
        this.userSearchExtension  = new DefaultUserSearchExtensions();
    }

    /**
     * Provides a crypto setup extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    public get cryptoSetup(): ProvideCryptoSetupExtensions {
        return this.cryptoSetupExtension;
    }

    /**
     * Provides a user search extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    public get userSearch(): ProvideUserSearchExtensions {
        return this.userSearchExtension;
    }


    /**
     * Provides an experimental extension.
     *
     * @remarks
     * This method extension is provided to simplify experimentation and development, and is not intended for production code.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    public get experimental(): ProvideExperimentalExtensions {
        return this.experimentalExtension;
    }

    /**
     * Add any extensions provided by the module.
     *
     * @param module - The appModule to check for extensions.
     *
     * @throws if an extension is provided by more than one module.
     */
    public addExtensions(module: RuntimeModule): void {        

        /* Add the cryptoSetup extension if any */
        if (module.extensions?.cryptoSetup) {
            if (this.hasDefaultCryptoSetupExtension) {
                this.cryptoSetupExtension = module.extensions?.cryptoSetup;
                this.hasDefaultCryptoSetupExtension = false;
            } else {
                throw new Error(
                    `adding cryptoSetup extension implementation from module ${module.moduleName} but an implementation was already provided.`,
                );
            }
        }

        /* Add the userSearch extension if any */
        if (module.extensions?.userSearch) {
            if (this.hasDefaultUserSearchExtension) {
                this.userSearchExtension = module.extensions?.userSearch;
                this.hasDefaultUserSearchExtension = false;
            } else {
                throw new Error(
                    `adding userSearch extension implementation from module ${module.moduleName} but an implementation was already provided.`,
                );
            }
        }

        /* Add the experimental extension if any */
        if (module.extensions?.experimental) {
            if (this.hasDefaultExperimentalExtension) {
                this.experimentalExtension = module.extensions?.experimental;
                this.hasDefaultExperimentalExtension = false;
            } else {
                throw new Error(
                    `adding experimental extension implementation from module ${module.moduleName} but an implementation was already provided.`,
                );
            }
        }
    }
}
