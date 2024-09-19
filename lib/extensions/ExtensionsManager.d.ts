import { ProvideCryptoSetupExtensions } from "./CryptoSetupExtensions";
import { ProvideExperimentalExtensions } from "./ExperimentalExtensions";
import { ProvideUserSearchExtensions } from "./UserSearchExtensions";
import { RuntimeModule } from "../RuntimeModule";
/**
 * Handles and manages extensions provided by modules.
 */
export declare class ExtensionsManager {
    private cryptoSetupExtension;
    private experimentalExtension;
    private userSearchExtension;
    /** `true` if `cryptoSetupExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultCryptoSetupExtension;
    /** `true` if `userSearchExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultUserSearchExtension;
    /** `true` if `experimentalExtension` is the default implementation; `false` if it is implemented by a module. */
    private hasDefaultExperimentalExtension;
    /**
     * Create a new instance.
     */
    constructor();
    /**
     * Provides a crypto setup extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    get cryptoSetup(): ProvideCryptoSetupExtensions;
    /**
     * Provides a user search extension.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    get userSearch(): ProvideUserSearchExtensions;
    /**
     * Provides an experimental extension.
     *
     * @remarks
     * This method extension is provided to simplify experimentation and development, and is not intended for production code.
     *
     * @returns The registered extension. If no module provides this extension, a default implementation is returned.
     */
    get experimental(): ProvideExperimentalExtensions;
    /**
     * Add any extensions provided by the module.
     *
     * @param module - The appModule to check for extensions.
     *
     * @throws if an extension is provided by more than one module.
     */
    addExtensions(module: RuntimeModule): void;
}
