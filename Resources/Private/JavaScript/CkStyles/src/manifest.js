import manifest from '@neos-project/neos-ui-extensibility';
import {$get} from 'plow-js';

import InlineStylesEditing from './InlineStylesEditing';
import InlineStyleSelector from './components/InlineStyleSelector';

import BlockStyleEditing from "./BlockStyleEditing";
import BlockStyleSelector from "./components/BlockStyleSelector";

manifest('TechDivision.CkStyles:Styles', {}, (globalRegistry, {frontendConfiguration}) => {

    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');
    const config = ckEditorRegistry.get('config');

    const inlineStyleConfiguration = frontendConfiguration['TechDivision.CkStyles:InlineStyles'];
    const blockStyleConfiguration = frontendConfiguration['TechDivision.CkStyles:BlockStyles'];

    // Block style
    if (blockStyleConfiguration) {

        Object.keys(blockStyleConfiguration.presets).forEach(presetIdentifier => {

            const blockStylePresetConfiguration = blockStyleConfiguration.presets[presetIdentifier];

            config.set(`TechDivision.CkStyles:BlockStyles_${presetIdentifier}`, (ckEditorConfiguration, {editorOptions}) => {
                const editing = BlockStyleEditing(presetIdentifier, blockStylePresetConfiguration);
                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
                ckEditorConfiguration.plugins.push(editing);
                return ckEditorConfiguration;
            });

            richtextToolbar.set(`blockStyles_${presetIdentifier}`, {
                component: BlockStyleSelector,
                // Display only if the preset is activated in NodeType.yaml for this node property
                isVisible: function (editorOptions, formattingUnderCursor) {
                    var isVisible = false;
                    if (editorOptions['blockStyling'] !== undefined && editorOptions['blockStyling'][presetIdentifier] !== undefined) {
                        isVisible = editorOptions['blockStyling'][presetIdentifier];
                    }
                    return isVisible;
                },
                presetIdentifier: presetIdentifier,
                presetConfiguration: blockStylePresetConfiguration
            });

        });
    }

    //Inline Style
    if (inlineStyleConfiguration) {

        Object.keys(inlineStyleConfiguration.presets).forEach((presetIdentifier) => {

            const inlineStylePresetConfiguration = inlineStyleConfiguration.presets[presetIdentifier];

            config.set(`TechDivision.CkStyle:InlineStyles_${presetIdentifier}`, (ckEditorConfiguration, {editorOptions}) => {
                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
                ckEditorConfiguration.plugins.push(InlineStylesEditing(presetIdentifier, inlineStylePresetConfiguration));
                return ckEditorConfiguration;
            });

            richtextToolbar.set(`inlineStyles_${presetIdentifier}`, {
                component: InlineStyleSelector,
                // Display only if the preset is activated in NodeType.yaml for this node property
                isVisible: function (editorOptions, formattingUnderCursor) {
                    var isVisible = false;
                    if (editorOptions['inlineStyling'] !== undefined && editorOptions['inlineStyling'][presetIdentifier] !== undefined) {
                        isVisible = editorOptions['inlineStyling'][presetIdentifier];
                    }
                    return isVisible;
                },
                presetIdentifier: presetIdentifier,
                presetConfiguration: inlineStylePresetConfiguration
            });
        });
    }
});
