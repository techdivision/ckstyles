// Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted
import {Command} from 'ckeditor5-exports';

/**
 * Set a key-value inline style; e.g. "fontColor=red".
 *
 */
export default class InlineStylesCommand extends Command {
    /**
     * @param {module:core/editor/editor~Editor} editor
     * @param {String} attributeKey Attribute that will be set by the command.
     */
    constructor(editor, attributeKey) {
        super(editor);

        /**
         * The attribute that will be set by the command.
         *
         * @readonly
         * @member {String}
         */
        this.attributeKey = attributeKey;
    }

    /**
     * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.
     */
    refresh() {
        const model = this.editor.model;
        const doc = model.document;

        this.value = this._getValueFromFirstAllowedNode();
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);
    }

    /**
     * Executes the command &mdash; sets the attribute to the desired value. If there is no desired valued, removes the
     * attribute.
     *
     * @fires execute
     * @param {Object} [options] Command options.
     * @param {String} [options.value] The value to be set; if null or not existing, the attribute will be removed.
     */
    execute(options = {}) {
        const model = this.editor.model;
        const doc = model.document;
        const selection = doc.selection;
        const value = options.value;

        model.change(writer => {
            if (selection.isCollapsed) {
                if (value) {
                    // value is existing, we want to set the selection attribute to the value.
                    writer.setSelectionAttribute(this.attributeKey, value);
                } else {
                    writer.removeSelectionAttribute(this.attributeKey);
                }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), this.attributeKey);

                for (const range of ranges) {
                    if (value) {
                        writer.setAttribute(this.attributeKey, value, range);
                    } else {
                        writer.removeAttribute(this.attributeKey, range);
                    }
                }
            }
        });
    }

    /**
     * Checks the attribute value of the first node in the selection that allows the attribute.
     * For the collapsed selection returns the selection attribute.
     *
     * @private
     * @returns {String} The attribute value.
     */
    _getValueFromFirstAllowedNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;

        if (selection.isCollapsed) {
            return selection.getAttribute(this.attributeKey);
        }

        for (const range of selection.getRanges()) {
            for (const item of range.getItems()) {
                if (schema.checkAttribute(item, this.attributeKey)) {
                    return item.getAttribute(this.attributeKey);
                }
            }
        }

        return undefined;
    }
}
