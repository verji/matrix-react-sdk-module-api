import { ProvideCryptoSetupExtensions } from "../extensions/CryptoSetupExtensions";
import { ProvideExperimentalExtensions } from "../extensions/ExperimentalExtensions";
import { ProvideUserSearchExtensions } from "../extensions/UserSearchExtensions";
import { ProvideEventSearchExtensions } from "../extensions/EventSearchExtensions";
export type AllExtensions = {
    cryptoSetup?: ProvideCryptoSetupExtensions;
    experimental?: ProvideExperimentalExtensions;
    userSearch?: ProvideUserSearchExtensions;
    eventSearchModule?: ProvideEventSearchExtensions;
};
