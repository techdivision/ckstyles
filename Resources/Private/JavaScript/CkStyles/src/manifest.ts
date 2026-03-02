import manifest from '@neos-project/neos-ui-extensibility';
import {EditorConfig} from '@ckeditor/ckeditor5-core';

import {createInlineEditStylePlugin} from './InlineStylesEditing';
import {createBlockStyleEditingPlugin} from "./BlockStyleEditing";
import {
  BLOCK_STYLING__EDITOR_OPTION_KEY,
  BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY,
  CkStylesConfiguration,
  INLINE_STYLING__EDITOR_OPTION_KEY,
  INLINE_STYLING__FRONTEND_CONFIGURATION_KEY,
  isPresetEnabled,
  NeosEditorOptions,
  TECHDIVISION_CKSTYLES__NAME_SPACE
} from "./configuration";

manifest(
  `${TECHDIVISION_CKSTYLES__NAME_SPACE}:Styles`,
  {},
  (globalRegistry: any, {frontendConfiguration}: { frontendConfiguration: any }) => {

    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const config = ckEditorRegistry.get('config');

    const inlineStyleConfiguration = frontendConfiguration[INLINE_STYLING__FRONTEND_CONFIGURATION_KEY] as CkStylesConfiguration | undefined;
    const blockStyleConfiguration = frontendConfiguration[BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY] as CkStylesConfiguration | undefined;

    // Block style
    if (blockStyleConfiguration) {

      Object.keys(blockStyleConfiguration.presets).forEach(presetIdentifier => {

        const blockStylePresetConfiguration = blockStyleConfiguration.presets[presetIdentifier]!;

        config.set(
          `${BLOCK_STYLING__FRONTEND_CONFIGURATION_KEY}_${presetIdentifier}`,
          (ckEditorConfiguration: EditorConfig, {editorOptions}: { editorOptions: NeosEditorOptions }) => {
            if (isPresetEnabled(editorOptions, BLOCK_STYLING__EDITOR_OPTION_KEY, presetIdentifier)) {
              ckEditorConfiguration.plugins = ckEditorConfiguration.plugins ?? [];
              ckEditorConfiguration.plugins.push(createBlockStyleEditingPlugin(presetIdentifier, blockStylePresetConfiguration));

              // TODO: duplicated information.. find a better way
              const toolbarItemId = `blockStyles:${presetIdentifier}_dropdown`;

              if (ckEditorConfiguration.toolbar === undefined) {
                ckEditorConfiguration.toolbar = {
                  items: [toolbarItemId]
                }
              } else if (ckEditorConfiguration.toolbar instanceof Array) {
                ckEditorConfiguration.toolbar.push(toolbarItemId);
              } else {
                ckEditorConfiguration.toolbar.items = ckEditorConfiguration.toolbar.items ?? [];
                ckEditorConfiguration.toolbar.items.push(toolbarItemId);
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
          (ckEditorConfiguration: EditorConfig, {editorOptions}: { editorOptions: NeosEditorOptions }) => {
            if (isPresetEnabled(editorOptions, INLINE_STYLING__EDITOR_OPTION_KEY, presetIdentifier)) {
              ckEditorConfiguration.plugins = ckEditorConfiguration.plugins ?? [];
              ckEditorConfiguration.plugins.push(createInlineEditStylePlugin(presetIdentifier, inlineStylePresetConfiguration));


              // TODO: duplicated information.. find a better way
              const toolbarItemId = `inlineStyles:${presetIdentifier}_dropdown`;

              if (ckEditorConfiguration.toolbar === undefined) {
                ckEditorConfiguration.toolbar = {
                  items: [toolbarItemId]
                }
              } else if (ckEditorConfiguration.toolbar instanceof Array) {
                ckEditorConfiguration.toolbar.push(toolbarItemId);
              } else {
                ckEditorConfiguration.toolbar.items = ckEditorConfiguration.toolbar.items ?? [];
                ckEditorConfiguration.toolbar.items.push(toolbarItemId);
              }
            }

            return ckEditorConfiguration;
          },
        );
      });
    }
  });
