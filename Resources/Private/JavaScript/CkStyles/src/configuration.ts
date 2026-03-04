export const TECHDIVISION_CKSTYLES__NAME_SPACE = "TechDivision.CkStyles";

// Block style constants
export const CK_STYLES_BLOCK_STYLES_IDENTIFIER = "BlockStyles";
export const BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY = `${TECHDIVISION_CKSTYLES__NAME_SPACE}:${CK_STYLES_BLOCK_STYLES_IDENTIFIER}`;
export const BLOCK_STYLING__EDITOR_OPTION_KEY = "blockStyling";
export const BLOCK_STYLING__COMMAND_PREFIX = "blockStyle";
export const BLOCK_STYLING__ATTRIBUTE_PREFIX = "blockStyles";

// Inline style constants
export const CK_STYLES_INLINE_STYLES_IDENTIFIER = "InlineStyles";
export const INLINE_STYLING__FRONTEND_CONFIGURATION_KEY = `${TECHDIVISION_CKSTYLES__NAME_SPACE}:${CK_STYLES_INLINE_STYLES_IDENTIFIER}`;
export const INLINE_STYLING__EDITOR_OPTION_KEY = "inlineStyling";
export const INLINE_STYLING__COMMAND_PREFIX = "inlineStyle";
export const INLINE_STYLING__ATTRIBUTE_PREFIX = "inlineStyles";

// configuration type representation of Configuration/Settings.CkStyles.yaml
export type CkStylesPresetIdentifier = string;
export type CkStylesPresetOptionIdentifier = string;

export type CkStylesConfiguration = {
    presets: Record<CkStylesPresetIdentifier, CkStylesPresetConfiguration>;
};

export type CkStylesPresetConfiguration = {
    label: string;
    icon?: string;
    showLabel?: boolean;
    options: Record<CkStylesPresetOptionIdentifier, CkStylesPresetOptionConfiguration>;
};

// either cssClass or attribute + attributeValue must be set, but not both
export type CkStylesPresetOptionConfiguration = {
    label: string;
    icon?: string;
    showLabel?: boolean;
} & ({ attribute: string; attributeValue: string } | { cssClass: string });

// configuration type representation of editorOptions of Neos NodeTypes
export type CkStylesNeosEditorOptions = {
    [BLOCK_STYLING__EDITOR_OPTION_KEY]?: {
        [presetIdentifier: CkStylesPresetIdentifier]: boolean;
    };
    [INLINE_STYLING__EDITOR_OPTION_KEY]?: {
        [presetIdentifier: CkStylesPresetIdentifier]: boolean;
    };
};
