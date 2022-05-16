// Originally taken from https://raw.githubusercontent.com/ckeditor/ckeditor5/master/packages/ckeditor5-basic-styles/src/attributecommand.js and adjusted
import {Command} from 'ckeditor5-exports';

/**
 * Set a key-value block style; e.g. "fontColor=red".
 */

export default class BlockStyleCommand extends Command {
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
         * @observable
         * @readonly
         * @member {Boolean} #value
         */

    }

    /**
     * Updates the command's {@link #value} and {@link #isEnabled}.
     */
    refresh() {
        const model = this.editor.model;
        const doc = model.document;
        const blocksToChange = Array.from(doc.selection.getSelectedBlocks());

        this.value = this._getValueFromBlockNode();
        for (const block of blocksToChange) {
            if (model.schema.checkAttribute(block, this.attributeKey)) {
                this.isEnabled = true;
            }
        }
    }

    /**
     * Executes the command &mdash; sets the attribute to the desired value. If there is no desired valued, removes the
     * attribute on each block.
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
        const blocksToChange = Array.from(selection.getSelectedBlocks());
        model.change(writer => {
            for (const block of blocksToChange) {
                if (value) {
                    writer.setAttribute(this.attributeKey, value, block);
                } else {
                    writer.removeAttribute(this.attributeKey, block);
                }
            }
        });
    }

    /**
     * Checks the attribute value of the parent block node(s)
     *
     * @private
     * @returns {String} The attribute value.
     */
    _getValueFromBlockNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;
        const blocks = Array.from(selection.getSelectedBlocks());

        for (const block of blocks) {
            if (schema.checkAttribute(block, this.attributeKey)) {
                return block.getAttribute(this.attributeKey);
            }
        }

        return undefined;
    }
}
