import { Translation } from "matrix-web-i18n";
/**
 * Translations object mapping an input string to language variants.
 * Mirrors custom translations support introduced by the react-sdk
 * here: https://github.com/matrix-org/matrix-react-sdk/pull/7886
 */
export type TranslationStringsObject = {
    [translationKey: string]: {
        [lang: string]: Translation;
    };
};
/**
 * Represents a simple translation replacement (non-component replacement)
 */
export type PlainSubstitution = number | string;
