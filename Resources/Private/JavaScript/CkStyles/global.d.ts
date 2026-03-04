declare module "@neos-project/neos-ui-extensibility";
declare module "@neos-project/neos-ui-i18n" {
    export function translate(
        fullyQualifiedTranslationAddressAsString: string,
        fallback: string | [string, string] = "",
        parameters: Parameters = [],
        quantity: number = 0,
    ): string;
}
