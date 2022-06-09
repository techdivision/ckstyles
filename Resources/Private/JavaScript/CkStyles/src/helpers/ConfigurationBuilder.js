import CkEditorExtender from "./CkEditorExtender";
import Preset from "../models/Preset";

export default class ConfigurationBuilder {

    /**
     * defines the types of presets and the yaml path of configuration
     * @type {{inline: string, block: string}}
     */
    presetTypes = {
        'inline' : 'TechDivision.CkStyles:InlineStyles',
        'block': 'TechDivision.CkStyles:BlockStyles'
    };

    /**
     * used to collect all built Preset[] for later use
     * @type {[]}
     */
    presetCollection = [];

    /**
     * builds the configuration and apply it to the ckeditor
     * by given YAML configuration
     * @param yamlConfiguration
     * @param globalRegistry
     */
    constructor(yamlConfiguration, globalRegistry) {
        this.yamlConfiguration = yamlConfiguration;
        this.globalRegistry = globalRegistry;

        // initialize, validate, build and apply configuration
        this.initializeConfiguration();
    }

    /**
     * validation of given yaml configuration
     * @returns {boolean}
     */
    isValid(configuration) {
        if (configuration && Object.keys(configuration.presets)) {
            return true;
        }
        return false;
    }

    /**
     * validate and build configuration for every presetType (atm. inline and block)
     * and then extend the CKEditor with build presets
     */
    initializeConfiguration() {
        Object.keys(this.presetTypes).forEach(presetType => {
            const configuration = this.yamlConfiguration[this.presetTypes[presetType]];
            if (this.isValid(configuration)) {
                this.buildConfiguration(configuration, presetType);
            }
        });

        // extend ckeditor with built presets and their options
        new CkEditorExtender(this.presetCollection, this.globalRegistry);

    }

    /**
     *
     * build Preset Models for every given preset entry
     *
     * @param configuration yaml configuration of preset type
     * @param presetType the preset type (e.g. inline or block)
     */
    buildConfiguration(configuration, presetType) {

        Object.keys(configuration.presets).forEach((presetIdentifier) => {
            let presetConfiguration = configuration.presets[presetIdentifier];
            this.presetCollection.push(new Preset(presetConfiguration, presetIdentifier, presetType))
        });

    }

}
