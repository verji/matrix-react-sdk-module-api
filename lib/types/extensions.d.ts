import { ProvideCryptoSetupExtensions } from "../extensions/CryptoSetupExtensions";
import { ProvideExperimentalExtensions } from "../extensions/ExperimentalExtensions";
import { ProvideUserSearchExtensions } from "../extensions/UserSearchExtensions";
export declare type AllExtensions = {
    cryptoSetup?: ProvideCryptoSetupExtensions;
    experimental?: ProvideExperimentalExtensions;
    userSearch?: ProvideUserSearchExtensions;
};
