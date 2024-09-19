/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L39-L50
 */
export interface SecretStorageKeyDescriptionCommon {
    /** A human-readable name for this key. */
    name: string;
    /** The encryption algorithm used with this key. */
    algorithm: string;
    /** Information for deriving this key from a passphrase. */
    passphrase: PassphraseInfo;
}
/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L59-L71
 */
export interface SecretStorageKeyDescriptionAesV1 extends SecretStorageKeyDescriptionCommon {
    /** The 16-byte AES initialization vector, encoded as base64. */
    iv: string;
    /** The MAC of the result of encrypting 32 bytes of 0, encoded as base64. */
    mac: string;
}
/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L78
 */
export declare type SecretStorageKeyDescription = SecretStorageKeyDescriptionAesV1;
/**
 * Copied from https://github.com/matrix-org/matrix-js-sdk/blob/2337d5a7af6265bbcabbd42c1594cd8b1829b00b/src/secret-storage.ts#L85-L97
 */
export interface PassphraseInfo {
    /** The algorithm to be used to derive the key. */
    algorithm: "m.pbkdf2";
    /** The number of PBKDF2 iterations to use. */
    iterations: number;
    /** The salt to be used for PBKDF2. */
    salt: string;
    /** The number of bits to generate. Defaults to 256. */
    bits?: number;
}
export interface ExamineLoginResponseCreds {
    homeserverUrl: string;
    identityServerUrl?: string;
    userId: string;
    deviceId?: string;
    accessToken: string;
    refreshToken?: string;
    guest?: boolean;
    pickleKey?: string;
    freshLogin?: boolean;
}
/**
 * Copied from https://github.com/matrix-org/matrix-react-sdk/blob/11096b207a1510569f5c54182e328f6148a6475c/src/toasts/SetupEncryptionToast.ts#L71-L75
 */
export declare enum SetupEncryptionKind {
    SetUpEncryption = "set_up_encryption",
    UpgradeEncryption = "upgrade_encryption",
    VerifyThisSessions = "verify_this_session"
}
export interface ExtendedMatrixClientCreds extends ExamineLoginResponseCreds {
    secureBackupKey?: string;
}
export interface ProvideCryptoSetupStore {
    getInstance: () => SetupEncryptionStoreProjection;
}
export interface SetupEncryptionStoreProjection {
    usePassPhrase(): Promise<void>;
}
export interface ProvideCryptoSetupExtensions {
    examineLoginResponse(response: any, credentials: ExtendedMatrixClientCreds): void;
    persistCredentials(credentials: ExtendedMatrixClientCreds): void;
    getSecretStorageKey(): Uint8Array | null;
    createSecretStorageKey(): Uint8Array | null;
    catchAccessSecretStorageError(e: Error): void;
    setupEncryptionNeeded: (args: CryptoSetupArgs) => boolean;
    getDehydrationKeyCallback(): ((keyInfo: SecretStorageKeyDescription, checkFunc: (key: Uint8Array) => void) => Promise<Uint8Array>) | null;
    SHOW_ENCRYPTION_SETUP_UI: boolean;
}
export declare abstract class CryptoSetupExtensionsBase implements ProvideCryptoSetupExtensions {
    abstract examineLoginResponse(response: any, credentials: ExtendedMatrixClientCreds): void;
    abstract persistCredentials(credentials: ExtendedMatrixClientCreds): void;
    abstract getSecretStorageKey(): Uint8Array | null;
    abstract createSecretStorageKey(): Uint8Array | null;
    abstract catchAccessSecretStorageError(e: Error): void;
    abstract setupEncryptionNeeded(args: CryptoSetupArgs): boolean;
    abstract getDehydrationKeyCallback(): ((keyInfo: SecretStorageKeyDescription, checkFunc: (key: Uint8Array) => void) => Promise<Uint8Array>) | null;
    abstract SHOW_ENCRYPTION_SETUP_UI: boolean;
}
export interface CryptoSetupArgs {
    kind: SetupEncryptionKind;
    storeProvider: ProvideCryptoSetupStore;
}
/**
 *
 * The default/empty crypto-extensions
 * Can (and will) be used if none of the modules has an implementaion of IProvideCryptoSetupExtensions
 *
 * */
export declare class DefaultCryptoSetupExtensions extends CryptoSetupExtensionsBase {
    SHOW_ENCRYPTION_SETUP_UI: boolean;
    examineLoginResponse(response: any, credentials: ExtendedMatrixClientCreds): void;
    persistCredentials(credentials: ExtendedMatrixClientCreds): void;
    getSecretStorageKey(): Uint8Array | null;
    createSecretStorageKey(): Uint8Array | null;
    catchAccessSecretStorageError(e: Error): void;
    setupEncryptionNeeded(args: CryptoSetupArgs): boolean;
    getDehydrationKeyCallback(): ((keyInfo: SecretStorageKeyDescription, checkFunc: (key: Uint8Array) => void) => Promise<Uint8Array>) | null;
}
