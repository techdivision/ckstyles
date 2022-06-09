export default class PresetOption {

    constructor(option) {
        this.option = option;
    }

    get label () {
        return this.option.label;
    }

    /**
     * returns the html attribute name
     * (downward compatibility with older configurations)
     * @returns {string}
     */
    get attribute () {
        if (this.option.attribute) {
            return this.option.attribute;
        }
        return 'class';
    }

    /**
     * returns value of the attribute
     * either the class value or the attribute value from the yaml configuration
     * (downward compatibility with older configurations)
     * @returns {string}
     */
    get value () {
        if (this.attribute === 'class') {
            return this.option.cssClass;
        }
        return this.option.attributeValue;
    }

}
