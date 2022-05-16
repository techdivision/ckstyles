import StyleSelector from "../components/StyleSelector";
import StyleEditing from "../factories/StyleEditing";

export default class CkEditorExtender {

    /**
     * apply the presets to the ckeditor
     * by given Presets[PresetOptions[]][]
     * @param presetCollection given Presets[PresetOptions[]][]
     * @param globalRegistry
     */
    constructor(presetCollection, globalRegistry) {

        this.configuration = globalRegistry.get('ckEditor5').get('config');
        this.toolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');

        // extend the ckeditor
        presetCollection.forEach(preset => {
            this.extendConfiguration(preset);
            this.extendToolbar(preset);
        });

    }

    /**
     * extends the configuration for a given Preset
     * @param preset
     */
    extendConfiguration(preset) {
        this.configuration.set(
            preset.helper.configurationIdentifier,
            (ckEditorConfiguration, {editorOptions}) => {
                ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
                ckEditorConfiguration.plugins.push(StyleEditing(preset));
                return ckEditorConfiguration;
            }
        );
    }

    /**
     * extends the toolbar of the ckeditor for given Preset
     * @param {Preset} preset
     */
    extendToolbar(preset) {
        this.toolbar.set(
            preset.helper.relationIdentifier,
            {
                component: StyleSelector,
                preset: preset,
                isVisible: (editorOptions, formattingUnderCursor) => {
                    if (editorOptions[preset.type + 'Styling']) {
                        return editorOptions[preset.type + 'Styling'][preset.identifier];
                    }
                    return false;
                }
            }
        );
    }


}
