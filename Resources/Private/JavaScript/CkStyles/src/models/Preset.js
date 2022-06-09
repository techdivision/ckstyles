import PresetOption from "./PresetOption";
import PresetHelper from "../helpers/PresetHelper";

export default class Preset {

    options = [];
    helper;

    constructor(presetConfiguration, presetIdentifier, type) {
        this.configuration = presetConfiguration;
        this.identifier = presetIdentifier;
        this.type = type;
        this.helper = new PresetHelper(presetIdentifier, type);
        this.addOptions();
    }

    get label () {
        return this.configuration.label;
    }

    /**
     * builds every PresetOption of this Preset
     */
    addOptions () {
        Object.keys(this.configuration.options).forEach((optionIdentifier) => {
            this.options[optionIdentifier] = new PresetOption(this.configuration.options[optionIdentifier]);
        });
    }
}
