/**
 * used to generate identifiers for different components based on the unique preset and type
 */
export default class PresetHelper {

    pluginPath = 'TechDivision.CkStyles:';
    blockType = 'block';

    constructor(id, type) {
        this.identifier = id;
        this.type = type;
        this.typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1); // e.g. inline -> Inline
    }

    get relationIdentifier () {
        return this.typeCapitalized + 'Styles_' + this.identifier;
    }

    get configurationIdentifier () {
        return this.pluginPath + this.relationIdentifier;
    }

    get command () {
        return this.type + 'Styles:' + this.identifier;
    }

    get attributeKey () {
        return this.type + 'Styles-' + this.identifier;
    }

    get schema () {
        if (this.isBlockType) {
            return '$block';
        }
        return '$text';
    }

    get isBlockType () {
        return this.type === this.blockType;
    }
}
