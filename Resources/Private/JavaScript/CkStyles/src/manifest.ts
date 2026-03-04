import manifest from "@neos-project/neos-ui-extensibility";
import { EditorConfig } from "@ckeditor/ckeditor5-core";

import { createInlineEditStylePlugin } from "./InlineStylesEditing";
import { createBlockStyleEditingPlugin } from "./BlockStyleEditing";
import {
    BLOCK_STYLING__COMMAND_PREFIX,
    BLOCK_STYLING__EDITOR_OPTION_KEY,
    BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY,
    type CkStylesConfiguration,
    type CkStylesNeosEditorOptions,
    INLINE_STYLING__COMMAND_PREFIX,
    INLINE_STYLING__EDITOR_OPTION_KEY,
    INLINE_STYLING__FRONTEND_CONFIGURATION_KEY,
    TECHDIVISION_CKSTYLES__NAME_SPACE,
} from "./configuration";
import { createDropdownId, isPresetEnabled } from "./utils";

manifest(
    `${TECHDIVISION_CKSTYLES__NAME_SPACE}:Styles`,
    {},
    (globalRegistry: any, { frontendConfiguration }: { frontendConfiguration: any }) => {
        const ckEditorRegistry = globalRegistry.get("ckEditor5");
        const config = ckEditorRegistry.get("config");

        const inlineStyleConfiguration = frontendConfiguration[INLINE_STYLING__FRONTEND_CONFIGURATION_KEY] as
            | CkStylesConfiguration
            | undefined;
        const blockStyleConfiguration = frontendConfiguration[BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY] as
            | CkStylesConfiguration
            | undefined;

        // Block style
        if (blockStyleConfiguration) {
            Object.keys(blockStyleConfiguration.presets).forEach((presetIdentifier) => {
                const blockStylePresetConfiguration = blockStyleConfiguration.presets[presetIdentifier]!;

                config.set(
                    `${BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY}_${presetIdentifier}`,
                    (
                        ckEditorConfiguration: EditorConfig,
                        { editorOptions }: { editorOptions: CkStylesNeosEditorOptions },
                    ) => {
                        if (isPresetEnabled(editorOptions, BLOCK_STYLING__EDITOR_OPTION_KEY, presetIdentifier)) {
                            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins ?? [];
                            ckEditorConfiguration.plugins.push(
                                createBlockStyleEditingPlugin(presetIdentifier, blockStylePresetConfiguration),
                            );

                            const toolbarItemId = createDropdownId(BLOCK_STYLING__COMMAND_PREFIX, presetIdentifier);

                            if (ckEditorConfiguration.toolbar === undefined) {
                                ckEditorConfiguration.toolbar = {
                                    items: [toolbarItemId],
                                };
                            } else if (Array.isArray(ckEditorConfiguration.toolbar)) {
                                ckEditorConfiguration.toolbar.push('|', toolbarItemId);
                            } else {
                                ckEditorConfiguration.toolbar.items = ckEditorConfiguration.toolbar.items ?? [];
                                ckEditorConfiguration.toolbar.items.push('|', toolbarItemId);
                            }
                        }

                        return ckEditorConfiguration;
                    },
                );
            });
        }

        //Inline Style
        if (inlineStyleConfiguration) {
            Object.keys(inlineStyleConfiguration.presets).forEach((presetIdentifier) => {
                const inlineStylePresetConfiguration = inlineStyleConfiguration.presets[presetIdentifier]!;

                config.set(
                    `${INLINE_STYLING__FRONTEND_CONFIGURATION_KEY}_${presetIdentifier}`,
                    (
                        ckEditorConfiguration: EditorConfig,
                        { editorOptions }: { editorOptions: CkStylesNeosEditorOptions },
                    ) => {
                        if (isPresetEnabled(editorOptions, INLINE_STYLING__EDITOR_OPTION_KEY, presetIdentifier)) {
                            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins ?? [];
                            ckEditorConfiguration.plugins.push(
                                createInlineEditStylePlugin(presetIdentifier, inlineStylePresetConfiguration),
                            );

                            const toolbarItemId = createDropdownId(INLINE_STYLING__COMMAND_PREFIX, presetIdentifier);

                            if (ckEditorConfiguration.toolbar === undefined) {
                                ckEditorConfiguration.toolbar = {
                                    items: [toolbarItemId],
                                };
                            } else if (Array.isArray(ckEditorConfiguration.toolbar)) {
                                ckEditorConfiguration.toolbar.push('|', toolbarItemId);
                            } else {
                                ckEditorConfiguration.toolbar.items = ckEditorConfiguration.toolbar.items ?? [];
                                ckEditorConfiguration.toolbar.items.push('|', toolbarItemId);
                            }
                        }

                        return ckEditorConfiguration;
                    },
                );
            });
        }
    },
);
