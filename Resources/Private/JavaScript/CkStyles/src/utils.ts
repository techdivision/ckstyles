import {
    BLOCK_STYLING__ATTRIBUTE_PREFIX,
    BLOCK_STYLING__COMMAND_PREFIX,
    BLOCK_STYLING__EDITOR_OPTION_KEY,
    type CkStylesNeosEditorOptions,
    type CkStylesPresetIdentifier,
    INLINE_STYLING__ATTRIBUTE_PREFIX,
    INLINE_STYLING__COMMAND_PREFIX,
    INLINE_STYLING__EDITOR_OPTION_KEY,
} from "./configuration";

export function isPresetEnabled(
    editorOptions: CkStylesNeosEditorOptions | undefined,
    editorOptionKey: typeof BLOCK_STYLING__EDITOR_OPTION_KEY | typeof INLINE_STYLING__EDITOR_OPTION_KEY,
    presetIdentifier: CkStylesPresetIdentifier,
): boolean {
    return !!editorOptions?.[editorOptionKey]?.[presetIdentifier];
}

export function createCommandId(
    commandPrefix: typeof BLOCK_STYLING__COMMAND_PREFIX | typeof INLINE_STYLING__COMMAND_PREFIX,
    presetIdentifier: CkStylesPresetIdentifier,
): string {
    return `${commandPrefix}:${presetIdentifier}`;
}

export function createDropdownId(
    commandPrefix: typeof BLOCK_STYLING__COMMAND_PREFIX | typeof INLINE_STYLING__COMMAND_PREFIX,
    presetIdentifier: CkStylesPresetIdentifier,
): string {
    return `${createCommandId(commandPrefix, presetIdentifier)}_dropdown`;
}

export function createAttributeKey(
    attributePrefix: typeof BLOCK_STYLING__ATTRIBUTE_PREFIX | typeof INLINE_STYLING__ATTRIBUTE_PREFIX,
    presetIdentifier: CkStylesPresetIdentifier,
): string {
    return `${attributePrefix}-${presetIdentifier}`;
}
