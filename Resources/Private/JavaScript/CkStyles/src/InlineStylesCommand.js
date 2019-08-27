// Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5-basic-styles/ccf591b0cea61ffd65a5ffaab48272e8dc0d5e6e/src/attributecommand.js and adjusted
import { Command } from 'ckeditor5-exports';

/**
 * Set a key-value inline style; e.g. "fontColor=red".
 *
 * `InlineStylesCommand` uses {@link module:engine/model/document~Document#selection}
 * to decide which nodes (if any) should be changed, and applies or removes the attribute from them.
 *
 * The command checks the {@link module:engine/model/model~Model#schema} to decide if it can be enabled
 * for the current selection and to which nodes the attribute can be applied.
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

        /**
         * Flag indicating whether the command is active. The command is active when the
         * {@link module:engine/model/selection~Selection#hasAttribute selection has the attribute} which means that:
         *
         * * If the selection is not empty &ndash; That the attribute is set on the first node in the selection that allows this attribute.
         * * If the selection is empty &ndash; That the selection has the attribute itself (which means that newly typed
         * text will have this attribute, too).
         *
         * @observable
         * @readonly
         * @member {Boolean} #value
         */
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
     * The execution result differs, depending on the {@link module:engine/model/document~Document#selection}:
     *
     * * If the selection is on a range, the command applies the attribute to all nodes in that range
     * (if they are allowed to have this attribute by the {@link module:engine/model/schema~Schema schema}).
     * * If the selection is collapsed in a non-empty node, the command applies the attribute to the
     * {@link module:engine/model/document~Document#selection} itself (note that typed characters copy attributes from the selection).
     * * If the selection is collapsed in an empty node, the command applies the attribute to the parent node of the selection (note
     * that the selection inherits all attributes from a node if it is in an empty node).
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
